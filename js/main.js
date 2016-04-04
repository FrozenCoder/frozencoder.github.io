var win = document.getElementById("iframe");
var msg = document.forms[0].elements["msg"].value

  document.forms.form.onsubmit = function() {
    win.contentWindow.postMessage(msg,"http://frozencoder.github.io");
    return false;
  }

  function listener(event){
    //add this after I can make it work
//  if ( event.origin !== "https://fiddle.jshell.net" )
  //  return
  console.log("message being received value = " + event.data);
  document.getElementById("test").innerHTML = "received: " + event.data;
}

if (window.addEventListener){
  console.log('listener added via addEventListener');
  addEventListener("message", listener, false);
} else {
  console.log('listener added via attachEvent');
  attachEvent("onmessage", listener);
}
