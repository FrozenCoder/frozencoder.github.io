function listener(event){
    //add this after I can make it work
//  if ( event.origin !== "" )
  //  return
  alert("message being received value = " + event.data);
  document.getElementById("test").innerHTML = "received: " + event.data
}

if (window.addEventListener){
  console.log('listener added via addEventListener');
  addEventListener("message", listener, false);
} else {
  console.log('listener added via attachEvent');
  attachEvent("onmessage", listener);
}
