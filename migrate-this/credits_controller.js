/*

function notify_button_exists(button) {
  if (document.querySelectorAll(button)[0]) {
	  alert("button detected");
	  console.log(document.querySelectorAll(button));
	  document.querySelectorAll(button)[0].click();
	
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




PlayerControlsNeo__all-controls
PlayerControlsNeo__all-controls

PlayerControlsNeo__layout

*/

setTimeout(function() {
const target = document.getElementsByClassName("PlayerControlsNeo__layout")[0];
console.log(document.getElementsByClassName("PlayerControlsNeo__layout")[0]);

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if(document.querySelectorAll('[data-uia="watch-credits-seamless-button"]').length > 0) {
				console.log(document.querySelectorAll('[data-uia="watch-credits-seamless-button"]')[0]);
				document.querySelectorAll('[data-uia="watch-credits-seamless-button"]')[0].click();
				console.log(document.getElementsByClassName('ltr-qrbw66')[0]);
				document.getElementsByClassName('ltr-qrbw66')[0].click();
			}
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(target, config);
}, 3000);

