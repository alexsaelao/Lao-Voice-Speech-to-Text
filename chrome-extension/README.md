# Lao Voice - Speech to Text Chrome Extension

Use Chrome's Web Speech API to dictate into an `input`, `textarea`, or `contenteditable` element through the Chrome Side Panel.

Supported recognition languages:

- Lao (`lo-LA`)
- Thai (`th-TH`)
- English (`en-US`)
- Vietnamese (`vi-VN`)
- Simplified Chinese (`zh-CN`)

## Install in Developer Mode

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the `chrome-extension` folder.
5. Click the extension icon to open the Side Panel.
6. Select the recognition language from the language menu.
7. Open any website and select an input, textarea, or contenteditable field before opening the extension.
8. Click the extension icon to grant access to the current tab, then press the microphone button and allow microphone access.
9. Press the microphone again, or press `Alt` / `Option` in the Side Panel, to stop recording.

## Sending text

- With **Send to input after speaking** enabled, the final transcript is automatically inserted into the selected input after recording stops.
- With it disabled, the transcript stays in the Preview area and can be copied or cleared manually.

The extension works only on pages where Chrome allows content scripts to run.

## Privacy

Read the repository [Privacy Policy](../PRIVACY.md).
