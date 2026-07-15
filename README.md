# Lao Voice - Speech to Text

A free browser-based speech-to-text demo and Chrome extension. It uses the browser's Web Speech API, requires no OpenAI account, and does not need an API key.

Supported recognition languages:

- Lao (`lo-LA`)
- Thai (`th-TH`)
- English (`en-US`)
- Vietnamese (`vi-VN`)
- Simplified Chinese (`zh-CN`)

## Run the web demo

Open `index.html` in Google Chrome or Microsoft Edge, or start a local server:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173), select a language, and allow microphone access. The transcript remains in the page, where it can be copied or cleared.

## Chrome extension

See [chrome-extension/README.md](chrome-extension/README.md) for installation and usage instructions.
