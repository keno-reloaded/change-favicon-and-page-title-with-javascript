/**
 * The following code will modify the title of the browser tab on the "blur" event
 * and change it back to the original on the "focus" event.
 */

let origTitle = document.title; // save original title in variable
const favicon = document.querySelector('[rel=icon]'); // select favicon element
const origFavicon = favicon.href; // save original favicon

function oldFavicon() {
  document.title = origTitle; // set document title to original
  favicon.href = origFavicon; // set favicon to original
  clearInterval(interval); // clear the interval
}

var rotator = favicon,
  dir = 'favicons/',
  delayInSeconds = 1,
  numOfImg = 0,
  limit = 1,
  interval;

function newFavicon() {
  document.title = 'New Title';
  interval = setInterval(function () {
    rotator.href = dir + 'favicon' + numOfImg + '.png';
    numOfImg = (numOfImg === limit) ? 0 : ++numOfImg;
  }, delayInSeconds * 500);
}

// Bind functions to blur and focus events
window.onblur = newFavicon;
window.onfocus = oldFavicon;
