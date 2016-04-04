var win = document.getElementById("iframe");
var textBox = document.getElementById('msg');

  document.forms.form.onsubmit = function() {
    win.postMessage(textBox.value,"http://frozencoder.github.io");
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
