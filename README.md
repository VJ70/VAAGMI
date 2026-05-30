# VAAGMI

**VAAGMI** is a GenAI-powered writing tool built with Node.js. It provides a client-server architecture where the backend handles AI interactions and the frontend delivers the writing interface to users.

---

## Features

- AI-assisted writing and content generation
- Clean client/server separation for easy deployment
- Lightweight JavaScript stack (Node.js + HTML)

---

## Project Structure

```
VAAGMI/
├── backend/        # Server-side logic and AI API integration
├── client/         # Frontend UI (HTML/JS)
├── app.js          # Application entry point
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/VJ70/VAAGMI.git
cd VAAGMI

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory and add your AI API key:

```env
API_KEY=your_api_key_here
```

> **Note:** Never commit your `.env` file. It is already listed in `.gitignore`.

### Running the App

```bash
node app.js
```

Then open your browser and navigate to `http://localhost:3000` (or whichever port is configured).

---

## Usage

1. Start the server with `node app.js`.
2. Open the app in your browser.
3. Enter a writing prompt or topic in the input area.
4. The AI will generate or assist with content in real time.

---

## Tech Stack

| Layer    | Technology        |
|----------|-------------------|
| Runtime  | Node.js           |
| Backend  | Express.js        |
| Frontend | HTML / JavaScript |
| AI       | Gemini mini       |

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## License

MIT

---

## Author

[VJ70](https://github.com/VJ70)
