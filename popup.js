'use strict';
// Initialize button with user's preferred color

document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById("button");
  
  button.addEventListener("click", async () => {
    try {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      //alert(tab.url)  
      let url = (new URL(tab.url))
      let host = url.hostname

      if (host.endsWith("notion.so")) {
        let path = url.pathname
        let pageId = extractId(path)
        alert("ID Copied! \"" + pageId + "\"")  
        copyTextToClipboard(pageId)
      } else {
        alert("Not a valid Notion page!")
      }
    } catch(err) {
      alert(err)
      console.err(err)
    }
  });
});

function extractId(path) {
  return path.substring(path.lastIndexOf("_") + 1)
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}