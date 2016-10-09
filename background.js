var config = {};

// Get config.
!(function(){
  var url = chrome.extension.getURL('./config/config.json');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {

      if (xhr.status === 200) {
        config = JSON.parse(xhr.responseText);
        console.log('Background.js, Get config.js by AJAX (you should set web_accessible_resources on manifest.json):')
        console.log(config)
      } else {
        console.log('config error')
      }
    }
  };
  xhr.send();
})();


chrome.extension.onRequest.addListener( function(request, sender, sendResponse) {
  // console.log('Background.js, onRequest function: ')
  // console.log(request);
  // console.log(sender);
  // sendResponse({sender: 'background.js'})
  if (request.code) {
    sendResponse({result: eval(request.code)});
  }

});


// Set default code
if (!localStorage.getItem('Code')) {
  localStorage.setItem('Code', 'alert("title:" + document.title + ". This alert is comes from chrome-extension-tools.")');
}

