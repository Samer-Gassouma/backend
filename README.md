# WhatsApp Web API

This is an Express-based API for interacting with WhatsApp Web sessions, managing chats, sending messages, and handling media. The API allows you to programmatically control a WhatsApp Web session, fetch chats, send messages, and more.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Get Public IP](#1-get-public-ip)
  - [Get QR Code](#2-get-qr-code)
  - [Check Session Readiness](#3-check-session-readiness)
  - [Get Chats](#4-get-chats)
  - [Get Media](#5-get-media)
  - [Get Chat Messages](#6-get-chat-messages)
  - [Get New Messages](#7-get-new-messages)
  - [Send Message](#8-send-message)
  - [Logout Session](#9-logout-session)
  - [Get Contacts](#10-get-contacts)
  - [Upload Media](#11-upload-media)
  - [Get User](#12-get-user)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```
4. The server will start on `http://localhost:3001`.

## API Endpoints

1. **Get Public IP**
   - **Method:** GET
   - **Path:** /get-ip
   - **Description:** Fetches the public IP address of the server.
   - **Response:**
     - `200 OK`: Returns the IP address in JSON format.
     - `500 Internal Server Error`: Error fetching IP.

2. **Get QR Code**
   - **Method:** GET
   - **Path:** /qr/:sessionId
   - **Description:** Generates and returns the QR code for WhatsApp Web login.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
   - **Response:**
     - `200 OK`: Returns the QR code data URL.
     - `404 Not Found`: QR Code not available.
     - `500 Internal Server Error`: Error creating session.

3. **Check Session Readiness**
   - **Method:** GET
   - **Path:** /ready/:sessionId
   - **Description:** Checks if the WhatsApp session is ready.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
   - **Response:**
     - `200 OK`: Returns `{ ready: true/false }`.
     - `500 Internal Server Error`: Error checking session readiness.

4. **Get Chats**
   - **Method:** GET
   - **Path:** /chats/:sessionId
   - **Description:** Fetches all chats for the given session.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
   - **Response:**
     - `200 OK`: Returns a list of chats with id and name.
     - `503 Service Unavailable`: Client not ready.
     - `500 Internal Server Error`: Error fetching chats.

5. **Get Media**
   - **Method:** GET
   - **Path:** /media/:sessionId/:mediaId
   - **Description:** Retrieves a specific media file from a chat.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
     - `mediaId`: The ID of the media file.
   - **Response:**
     - `200 OK`: Returns the media file.
     - `404 Not Found`: Media not found.

6. **Get Chat Messages**
   - **Method:** GET
   - **Path:** /chat/:sessionId
   - **Description:** Fetches messages from a specific chat.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
     - `id`: The ID of the chat (as a query parameter).
   - **Response:**
     - `200 OK`: Returns chat messages, including media if available.
     - `500 Internal Server Error`: Error fetching chat messages.

7. **Get New Messages**
   - **Method:** GET
   - **Path:** /new-messages/:sessionId
   - **Description:** Fetches new messages from a specific chat since the last timestamp.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
     - `id`: The ID of the chat (as a query parameter).
     - `lastTimestamp`: The last known timestamp (as a query parameter).
   - **Response:**
     - `200 OK`: Returns new messages.
     - `500 Internal Server Error`: Error fetching new messages.

8. **Send Message**
   - **Method:** POST
   - **Path:** /send/:sessionId
   - **Description:** Sends a message to a specific chat.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
     - `id`: The ID of the chat (in the request body).
     - `message`: The message content (in the request body).
   - **Response:**
     - `200 OK`: Message sent.
     - `500 Internal Server Error`: Error sending message.

9. **Logout Session**
   - **Method:** POST
   - **Path:** /logout/:sessionId
   - **Description:** Logs out the WhatsApp session.
   - **Parameters:**
     - `sessionId`: The session ID for the WhatsApp connection.
   - **Response:**
     - `200 OK`: Logged out.
     - `500 Internal Server Error`: Error logging out.

10. **Get Contacts**
    - **Method:** GET
    - **Path:** /contacts/:sessionId
    - **Description:** Fetches all contacts for the given session.
    - **Parameters:**
      - `sessionId`: The session ID for the WhatsApp connection.
    - **Response:**
      - `200 OK`: Returns a list of contacts with id, name, and phone.
      - `503 Service Unavailable`: Client not ready.
      - `500 Internal Server Error`: Error fetching contacts.

11. **Upload Media**
    - **Method:** POST
    - **Path:** /upload/:sessionId
    - **Description:** Uploads and sends a media file to a specific chat.
    - **Parameters:**
      - `sessionId`: The session ID for the WhatsApp connection.
      - `recipientId`: The ID of the chat to send the media to (in the request body).
      - `file`: The media file to be uploaded (multipart form data).
    - **Response:**
      - `200 OK`: File sent successfully, with a download URL.
      - `400 Bad Request`: No file uploaded.
      - `500 Internal Server Error`: Error sending file.

12. **Get User**
    - **Method:** GET
    - **Path:** /user/:sessionId
    - **Description:** Fetches user information for a specific chat.
    - **Parameters:**
      - `sessionId`: The session ID for the WhatsApp connection.
      - `id`: The ID of the chat (as a query parameter).
    - **Response:**
      - `200 OK`: Returns user information.
      - `500 Internal Server Error`: Error fetching user.

### Error Handling
All endpoints will return standard HTTP status codes for success and error scenarios. In case of an error, the API will return a JSON response with an error field containing the error message.

- `200 OK`: The request was successful.
- `400 Bad Request`: The request was invalid or cannot be served.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: The server encountered an internal error.
    
    