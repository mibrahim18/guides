# Cloud-Based CV Website with Azure Static Web Apps, Functions, and Cosmos DB

This repository contains code and instructions for deploying a cloud-based CV website on **Azure**, complete with a **visitor counter** implemented using **Azure Functions** and **Cosmos DB** to track visits in real-time. This README provides setup steps, prerequisites, and an overview of the architecture.

📺 [Watch the YouTube Setup Tutorial](https://youtu.be/XPS3Hg70Zrg?si=R55DbYkBDd7hyZ_W) 📺


---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Guide](#setup-guide)
  - [1. Create the GitHub Repository](#1-create-the-github-repository)
  - [2. Set Up Azure Static Web App with GitHub Source](#2-set-up-azure-static-web-app-with-github-source)
  - [3. Configure CI/CD with GitHub Actions](#3-configure-cicd-with-github-actions)
  - [4. Set Up Cosmos DB](#4-set-up-cosmos-db)
  - [5. Create the Azure Function for Visitor Tracking](#5-create-the-azure-function-for-visitor-tracking)
  - [6. Integrate Azure Function with the Static Web App](#6-integrate-azure-function-with-the-static-web-app)
- [Improvements](#improvements)

---

## Overview

This project demonstrates how to host a personal CV site with **real-time visitor tracking** using cloud services. It leverages **Azure Static Web Apps** for hosting, **Azure Functions** for serverless computing, and **Cosmos DB** for scalable data storage.

---

## Architecture

The project uses the following Azure components:

1. **Azure Static Web Apps** - Hosts the static website and deploys via GitHub Actions.
2. **Azure Functions** - Manages serverless functions for tracking visitor counts.
3. **Cosmos DB** - Stores and retrieves visitor count data.

---

## Features

- **Static CV Hosting**: Hosted on Azure Static Web Apps for fast, reliable delivery.
- **Visitor Counter**: Tracks and displays real-time visitor count.
- **Automatic Deployments**: GitHub Actions handles CI/CD for seamless updates.

---

## Prerequisites

- **Azure Account**: Sign up [here](https://azure.microsoft.com/en-us/free/) for free.
- **GitHub Account**: Required for version control and automatic deployment.

---

## Setup Guide

### 1. Create the GitHub Repository

1. Go to [GitHub](https://github.com/) and create a new repository for your CV website.
   - Name the repository.
   - Add a README file if you wish, or create one later.
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/my-cv-website.git
   ```
3. **Add your website’s static files** (HTML, CSS, JavaScript) to the repository folder.

4. **Push** (the updated to GiHub using the the Git commands or GitHub Desktop.
   push to github

5. **Set Up Azure Static Web App with GitHub Source**

   - In the Azure portal, go to **Create a resource** and select **Static Web App**.
   - Choose the **Free Plan** and under **Deployment Details**, select **GitHub** as the source.
   - Connect to your GitHub account, select the repository you created in Step 1, and choose the branch (usually `main` or `master`).
   - Configure the **Build Preset** based on your website type:
     - **Custom** for plain HTML/CSS/JavaScript.
     - If you’re using a framework, select the appropriate preset.
   - Complete the remaining setup options, then click **Review + create** to deploy your static website.

6. **Configure CI/CD with GitHub Actions**

   - Azure Static Web Apps will automatically add a GitHub Actions workflow file to your repository. This workflow file handles the CI/CD pipeline, so every push to the main branch triggers an automatic deployment to Azure.
   - Verify that the deployment is successful by checking the **Actions** tab in your GitHub repository.

7. **Set Up Cosmos DB**

   - In the Azure portal, create a **Cosmos DB** account using the **Core (SQL) API**.
   - Create a new database named `VisitorDB` and a container called `VisitorCounts` with `/id` as the partition key.
   - Insert an initial document to track visits.

8. **Create the Azure Function for Visitor Tracking**

   - In the Azure portal, create a **Function App** and set the runtime to **JavaScript**.
   - Add a new **HTTP Trigger** function (`VisitorCounter`) with **Authorization Level** set to **Anonymous**.
   - Use the code provided in this repository’s folder to configure your function to interact with Cosmos DB.
   - In the Function App **Configuration** settings, add an environment variable called `COSMOS_DB_CONNECTION_STRING` with the Cosmos DB connection string value.

9. **Integrate Azure Function with the Static Web App**
   - In your CV website’s JavaScript (e.g., `main.js`), add a request to the Azure Function URL to update the visitor count.
   - Push this change to your GitHub repository. The GitHub Actions workflow will automatically deploy the update to your Static Web App.

---

## Improvements

- **Security**: Add authentication for restricted visitor tracking.
- **Analytics**: Integrate data visualization for detailed visitor insights.
- **Optimizations**: Explore caching mechanisms to improve performance.
