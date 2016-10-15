![ClipWithURL logotype](logotype.png "ClipWithURL logotype") 
# ClipWithURL
Google Chrome Browser extension

##What does it do
Copies any text on a web-page **with web-page URL and time stamp** directly to clipboard.

## Example
After selecting "ClipWithURL" on this page and hitting the shortcut (default is `Alt+C`), you can paste the text to any place you want. Here is how it should look like:
```
ClipWithURL  
    [10/15/2016 3:12 AM], source: <https://github.com/jvlad/ClipWithUrl.googleChromeExtension.js>
```

Timestamp, of source, is composed at the moment you are actually pressing `Alt+C`.  
"source" contains what you see at your browser's address bar at the moment of pressing the shortcut.

Here is how it looks like after markdown processing:  

---
ClipWithURL  
    [10/15/2016 3:12 AM], source: <https://github.com/jvlad/ClipWithUrl.googleChromeExtension.js>

---

##How to enable
**1. Enable ability to use unpublished extensions:**

1. go to `chrome://extensions`
1. Check `Developer mode` check-box (at the top-right page corner)

**2. Add this extension in your browser:**

1. Download this repository source files  
    e. g. using git: `git clone git@bitbucket.org:zvlad/clipwithurl.git`
1. at the `chrome://extensions/` page at the top-left click `Load unpacked extension...`
1. select folder with _manifest.json_ file — this is root folder of this repo

## Use it

1. On any web-page just select text you want to copy and Press `Alt+C`.
1. Go to any text-editor (or other text-input area) and press `Ctrl+V` to paste copied text with its source URL.

## Custom shortcut
You can always change default `Alt+C` keys shortcut. To do so

1. Go to `chrome://extensions`
2. Scroll to the bottom of the page and, find in the right `Keyboard shortcuts` link, click it
3. Find `ClipWithURL` section and adjust `Copy to clipboard with source link` shortcut.

##Update notes

Tested on Sat Oct 15 2016
for Google Chrome Version 53.0.2785.92 (64-bit)


##Contact author
Vlad Zamskoi  
Email: <v.zamskoi@gmail.com>  
Site: [freeRaven.com](https://www.freeRaven.com)