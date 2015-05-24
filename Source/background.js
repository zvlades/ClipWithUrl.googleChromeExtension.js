// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var selectedText;

chrome.browserAction.onClicked.addListener(function () {
    // No tabs or host permissions needed!  
    chrome.tabs.executeScript(null, {
        file: "Source/content_script.js"
    });
});

function combineTwoStrings(leftString, rightString, optionalDelimiter) {
    if (optionalDelimiter) {
        return leftString + optionalDelimiter + rightString;
    }
    return leftString + rightString;
}

function combineTextWithSourceURL(text, sourceURL) {
    var delimiter = "\n-------\nSource: ";
    var textWithSourceURL = combineTwoStrings(text, sourceURL, delimiter);
    return textWithSourceURL;
}

function createTextContainer(copyBlockId) {
    var copyBlock = document.createElement("textarea");
    copyBlock.setAttribute("id", copyBlockId);
    var backgroundBody = document.querySelector("body");
    var backgroundBodyLastElementChild = document.querySelector("body").lastElementChild;
    backgroundBody.insertBefore(copyBlock, backgroundBodyLastElementChild);
    return copyBlock;
}

function copyToClipboard(text) {
    var copyBlock;
    var copyBlockId = "text-to-copy";

    if (document.getElementById(copyBlockId)) {
        copyBlock = document.getElementById(copyBlockId);
    } else {
        copyBlock = createTextContainer(copyBlockId);
    }

    copyBlock.value = text;
    copyBlock.focus();
    copyBlock.select();
    document.execCommand('Copy');
}

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        var textWithUrl = combineTextWithSourceURL(request.selectedText, sender.tab.url);
        copyToClipboard(textWithUrl);
    }
);