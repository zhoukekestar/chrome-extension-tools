chrome.extension.sendRequest({"code": "(function(){return localStorage.getItem('CodeEnabled') || '';})();"}, function(d){
  if (d.result === 'true') {
    chrome.extension.sendRequest({"code": "(function(){return localStorage.getItem('Code') || '';})();"}, function(d){
      eval(d.result);
    });
  }

});
