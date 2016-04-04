var win = document.getElementById("iframe").contentWindow;

  document.forms.form.onsubmit = function() {
    win.postMessage(this.elements.msg.value,"*");
    return false;
  }

  function listener(event){
    //add this after I can make it work
//  if ( event.origin !== "https://fiddle.jshell.net" )
  //  return

  document.getElementById("test").innerHTML = "received: "+ event.data;
}

if (window.addEventListener){
  addEventListener("message", listener, false);
} else {
  attachEvent("onmessage", listener);
}
