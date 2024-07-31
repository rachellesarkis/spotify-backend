# Spotify Backend

## Overview

This project serves as the backend for a Spotify-related application. It leverages various services including MongoDB for database management, Spotify for music data, and Gemini for API interactions.

## Prerequisites

Before you start, ensure you have the following:

1. **Node.js** installed on your machine.
2. **MongoDB** instance running either locally or on a cloud service like MongoDB Atlas.
3. **Spotify Developer Account** to create a Spotify client.
4. **Gemini API Key** for accessing Gemini services.

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/rachellesarkis/spotify-backend.git
cd spotify-backend
```

### Step 2: Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory of your project and fill in the following fields:

```bash
MONGO_URI=your_mongo_uri
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
PORT=your_preferred_port
GEMINI_API_KEY=your_gemini_api_key
```

#### How to Obtain Environment Variable Values:

1. **MONGO_URI**:

   - Create a MongoDB database. You can use MongoDB Atlas for a cloud solution or run MongoDB locally.
   - Obtain the connection string (URI) for your MongoDB database.

2. **SPOTIFY_CLIENT_ID & SPOTIFY_CLIENT_SECRET**:

   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
   - Log in and create a new application.
   - Obtain the `Client ID` and `Client Secret` from the application settings.

3. **PORT**:

   - Specify the port number you want your backend server to run on. It is set to 5000 by default.

4. **GEMINI_API_KEY**:
   - Sign up or log in to the Gemini platform.
   - Generate an API key from the Gemini account dashboard.

### Step 4: Start the Application

To start the application in development mode with automatic restarts on file changes, use:

```bash
npm run dev
```
