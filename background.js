
// chrome.runtime.onInstalled.addListener(() => {

//   console.log("Installed")

//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//     var activeTab = tabs[0];
//     var activeTabId = activeTab.id; // or do whatever you need

//     console.log(activeTab)
//     console.log(activeTabId)
//     console.log(activeTab.url)
//   });  
// });

// const extensions = 'https://developer.chrome.com/docs/extensions'
// const webstore = 'https://developer.chrome.com/docs/webstore'


// chrome.tabs.onActivated.addListener(function(activeInfo) {
//     console.log(activeInfo);
//     console.log(chrome.tabs);
// });