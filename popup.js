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
        alert("ID Copied! " + pageId)  
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
  //Create a textbox field where we can insert text to. 
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child. 
  //"execCommand()" only works when there exists selected text, and the text is inside 
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand('copy');

  //(Optional) De-select the text using blur(). 
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor 
  //other elements can get access to this.
  document.body.removeChild(copyFrom);
}