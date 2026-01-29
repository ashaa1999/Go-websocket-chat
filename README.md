# Go WebSocket Chat Application

A real-time chat application built in **Go (Golang)** using **WebSockets**, **goroutines**, and **channels**.  
This project demonstrates concurrent programming, real-time communication, and clean server–client architecture in Go.

---

## 🚀 Features

- Real-time messaging using WebSockets
- Multiple clients can join and chat simultaneously
- Concurrent message handling using goroutines
- Channel-based message broadcasting
- Lightweight frontend with HTML + JavaScript
- Simple and clean project structure
- No external frontend frameworks required

---

## 🧠 Architecture Overview

The application is divided into three core components:

### 1️⃣ `main.go`
- Entry point of the application
- Sets up HTTP routes
- Serves the chat UI (`chat.html`)
- Starts the WebSocket room and HTTP server

### 2️⃣ `room.go`
- Manages all connected clients
- Uses **channels** to:
  - Register clients
  - Unregister clients
  - Broadcast messages
- Runs as a dedicated goroutine to handle concurrency safely

### 3️⃣ `client.go`
- Represents a single WebSocket client
- Handles:
  - Reading messages from the socket
  - Writing messages to the socket
- Each client runs with independent goroutines

---

## 🔄 Concurrency Model

- Each client connection runs in its own goroutine
- A central room goroutine coordinates all communication
- Channels ensure thread-safe message delivery
- No shared-memory locking required

This design follows Go’s philosophy:

> **“Do not communicate by sharing memory; instead, share memory by communicating.”**

---

## 🌐 WebSocket Flow

1. User opens the chat UI
2. Browser establishes a WebSocket connection to `/room`
3. Client is registered with the room
4. Messages are sent to the room broadcast channel
5. Room broadcasts messages to all connected clients

---

## 🖥️ Frontend

- `chat.html` contains:
  - Chat UI
  - Embedded JavaScript for WebSocket handling
- JavaScript is kept inline for simplicity and easy deployment
- No build tools or bundlers required

---

## 📂 Project Structure


---

## ▶️ How to Run

### Prerequisites
- Go 1.18 or higher

### Steps

```bash
go mod tidy
go run main.go
