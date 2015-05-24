// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var selectedText;

chrome.browserAction.onClicked.addListener(function () {
    // No tabs or host permissions needed!  
    chrome.tabs.executeScript(null, {
        file: "content_script.js"
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        var textWithUrl = combineTextWithSourceURL(request.selectedText, sender.tab.url);
        //console.log(textWithUrl);

        //sendResponse(
        //    {textWithUrl: textWithUrl}
        //);
    }
);



function combineTextWithSourceURL (text, sourceURL){
    var delimiter = "\nSource: ";
    var textWithSourceURL =  combineStrings(text, sourceURL, delimiter);
    return textWithSourceURL;
}

function combineStrings(leftString, rightString, optionalDelimiter){
    if (optionalDelimiter){
        return leftString + optionalDelimiter + rightString;
    }
    return leftString + rightString;
}