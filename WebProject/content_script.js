var selectedText = TextWithSourceURL();

if (selectedText){
    sendSelectedTextToBackgroundPage(selectedText);
}

function sendSelectedTextToBackgroundPage(selectedText) {
    console.log(">>>>>>>>>>>>>content_script:\n" + selectedText);
    chrome.runtime.sendMessage(
        {selectedText: selectedText}
        , function (onResponse) {
            console.log(">>>>>>>>>>>>>background.js response:\n" + onResponse.textWithUrl);
        }
    );
}

function TextWithSourceURL(){
    var selectedText;
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}