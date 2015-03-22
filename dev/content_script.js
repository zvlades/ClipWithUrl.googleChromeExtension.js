(function() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log("text got by action_script: " + text);
    // return text;
}());

// function sendSelectedTextToExtension(){
// 	var selectedText = getSelectionText();
// 	chrome.extension.sendRequest(selectedText);
// }

// sendSelectedTextToExtension();