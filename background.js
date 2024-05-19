chrome.webNavigation.onCompleted.addListener(function(details) {
    const url = details.url;
    fetch('http://localhost:8000/' + encodeURIComponent(url));
  }, {url: [{schemes: ['http', 'https']}]});