

function notify_button_exists(button) {
  if (document.querySelectorAll(button).length) {
    alert("button detected")
  } else {
    setTimeout(function() {
      console.log("still searching ...")
      notify_button_exists(button);
    }, 100);
  }
}

(function() {
  notify_button_exists('[data-uia="watch-credits-seamless-button"]');
})();