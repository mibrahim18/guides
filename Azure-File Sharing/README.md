# Azure File Sharing Website 🌐💾

Easily upload and share files securely using **Azure**! This project shows you how to build a file-sharing website with Azure Web Apps and secure environment variables for a seamless and scalable cloud experience.

📺 [Watch the YouTube Setup Tutorial](https://youtu.be/XYMTxzLD6jY) 📺

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Guide](#setup-guide)
  - [1. Create the GitHub Repository](#1-create-the-github-repository)
  - [2. Deploy to Azure App Service](#2-deploy-to-azure-app-service)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Test Your File Sharing Website](#4-test-your-file-sharing-website)
- [Improvements](#improvements)

---

## Overview

This project enables a **simple, secure, and cloud-based file-sharing solution** powered by Azure Web Apps. It uses a `.env` file for local environment configuration and **Azure Web App Configuration** for production.

---

## Architecture

The project uses the following Azure components:

1. **Azure Web Apps** - Hosts the file-sharing website with scalable cloud resources.
2. **Environment Variables** - Keeps sensitive information like storage keys secure.

---

## Features

- **File Upload**: Drag-and-drop file uploads directly to the cloud.
- **Secure Sharing**: Environment variables for secure credentials management.
- **Scalable Hosting**: Built on Azure for reliable performance.

---

## Prerequisites

- **Azure Account**: Sign up [here](https://azure.microsoft.com/en-us/free/).
- **GitHub Account**: For source control and deployment.
- **Node.js & NPM**: To run and test the app locally.

---

### Setup Guide

1. Add the provided project files to your repository.

2. Deploy to Azure App Service 🚀

   - In the Azure portal, create a Web App.
   - Select your preferred runtime (e.g., Node.js).
   - Under **Deployment**, connect your GitHub repository.
   - Push your project to GitHub to trigger an automatic deployment.

3. Configure Environment Variables 🔐

   - Add a `.env` file locally with the required keys (e.g., Azure Storage connection string).
   - In the Azure portal, navigate to your **Web App > Configuration > Application settings**.
   - Add the same keys as environment variables.

4. Test Your File Sharing Website ✅
   - Access your deployed site using the provided Azure URL.
   - Upload a file and check the console logs to confirm successful uploads.
   - Share the link and let others try it out!

---

## Improvements 🚀

- **Custom Authentication**: Add user authentication for secure access.
- **Analytics**: Track file upload/download stats.
- **Expiration Links**: Create time-limited file-sharing links.
- **Enhanced UI**: Add drag-and-drop functionality or design upgrades.
