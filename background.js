chrome.browserAction.onClicked.addListener(function(tab) {
  
    chrome.tabs.create({
        url: 'index.html'
      });
  });


  chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: 'http://www.vietjack.com'
      });
    }
  });