chrome.runtime.onMessage.addListener(
    function(request, sender) {
        var textWithUrl = formatTimeStampedTextAndUrl(request.selectedText, sender.tab.url);
        // console.log('textWithUrl is ' + textWithUrl)
        copyToClipboard(textWithUrl);
    }
);

chrome.browserAction.onClicked.addListener(function() {
    // No tabs or host permissions needed!  
    chrome.tabs.executeScript(null, {
        file: "Source/content_script.js"
    });
});

chrome.commands.onCommand.addListener(function(command) {
    if (command === "CopyWithURL") {
        chrome.tabs.executeScript(null, {
            file: "Source/content_script.js"
        });
    }
});

function formatTimeStampedTextAndUrl(text, sourceURL) {
    return text + "\n    [" + timeStamp() + "]" + ", source: (" + sourceURL + ")";
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

/**
 * Return a timestamp with the format "m/d/yy h:MM TT"
 * @type {Date}
 */
function timeStamp() {
    // Create a date object with the current time
    var now = new Date();
    var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    var time = [now.getHours(), now.getMinutes()];

    var suffix = (time[0] < 12) ? "AM" : "PM";

    // console.log('time[0] is ' + time[0])
    
    // Convert hour from military time
    time[0] = (time[0] < 13) ? time[0] : time[0] - 12;

    // If hour is 0, set it to '00'
    time[0] = time[0] || '00';

    // If minutes are less than 10, add a zero
    if (time[1] < 10) {
        time[1] = "0" + time[1];
    }

    return date.join("/") + " " + time.join(":") + " " + suffix;
}

