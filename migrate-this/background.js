  chrome.webNavigation.onCompleted.addListener(function() {
  
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	  console.log(tab);
	  if(changeInfo.url) {
		  if(changeInfo.url.includes("netflix.com/watch")) {
			alert("AAAA");
			chrome.tabs.executeScript({file: "credits_controller.js"});
		  }			  
	  }
  });//, {url: [{urlMatches : 'https?://(www\\.)?netflix\\.com/watch/.*'}]});
  }, {url: [{hostContains: "netflix.com"}]});