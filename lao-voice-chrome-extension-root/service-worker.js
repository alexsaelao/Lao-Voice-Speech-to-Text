chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

async function injectContentScript(tabId) {
  await chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] });
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab?.id) return;
  injectContentScript(tab.id).catch(() => {});
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type !== "ensure-content-script" || !message.tabId) return;
  injectContentScript(message.tabId)
    .then(() => sendResponse({ ok: true }))
    .catch(() => sendResponse({ ok: false }));
  return true;
});
