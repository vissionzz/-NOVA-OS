// NOVA OS Background Controller

chrome.commands.onCommand.addListener((command) => {
    if (command === "open-nova") {
        chrome.windows.create({
            url: chrome.runtime.getURL("popup.html"),
            type: "popup",
            width: 420,
            height: 680,
            focused: true
        });
    }
});

// Log when NOVA is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("NOVA OS is ready.");
});
