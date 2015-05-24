var selectedText = TextWithSourceURL();

if (selectedText) {
    sendSelectedTextToBackgroundPage(selectedText);
}

function sendSelectedTextToBackgroundPage(selectedText) {
    chrome.runtime.sendMessage(
        {selectedText: selectedText}
    );
}


function TextWithSourceURL() {
    var selectedText;
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}