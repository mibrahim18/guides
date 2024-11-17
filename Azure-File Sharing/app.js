const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors"); // Import the cors module
const {
  BlobServiceClient,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
} = require("@azure/storage-blob");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// Enable CORS for all origins
app.use(cors()); // This allows all domains to access your server

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 1024 }, // 1GB limit
});

app.use(express.static(path.join(__dirname, "public")));
console.log("new");

// Load Azure Storage details from environment variables
const connectionString = process.env.AZURESTORAGECONNECTIONSTRING;
const accountName = process.env.AZURESTORAGEACCOUNTNAME;
const accountKey = process.env.AZURESTORAGEACCOUNTKEY;

if (!connectionString || !accountName || !accountKey) {
  console.error("Azure Storage configuration is missing.");
  process.exit(1); // Exit the application if critical environment variables are missing
}

// Define the upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  const containerName = "uploads";

  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded.",
      error: "Please select a file and try again.",
    });
  }

  try {
    if (!connectionString) {
      throw new Error("Azure Storage connection string is not defined.");
    }

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    console.log("Uploading file:", req.file.originalname);

    const blobName = req.file.originalname;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.upload(req.file.buffer, req.file.size);

    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 24);

    const sasOptions = {
      containerName,
      blobName,
      expiresOn: expiryDate,
      permissions: BlobSASPermissions.parse("r"),
    };

    const sasToken = generateBlobSASQueryParameters(
      sasOptions,
      blockBlobClient.credential
    ).toString();

    const fileUrl = `${blockBlobClient.url}?${sasToken}`;
    console.log("File uploaded successfully, URL:", fileUrl);

    res.json({ fileUrl });
  } catch (error) {
    console.error("Error uploading file:", error);

    // Send a detailed error message and stack trace to the frontend
    let errorMessage = "Error uploading file to Azure Blob Storage.";

    if (error.message.includes("startsWith")) {
      errorMessage =
        "Azure Storage connection string is not correctly formatted.";
    }

    res.status(500).json({
      message: errorMessage,
      error: error.message,
      stack: error.stack,
    });
  }
});

// Start the application
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
