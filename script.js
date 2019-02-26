// let imagesSRC = [
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc43ef5f3c4432e599ff_Animation_sticky0.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc43ef5f3ce226e59a00_Animation_sticky1.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc439b5a57581cc799d8_Animation_sticky2.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc435492e1149663daf3_Animation_sticky3.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc439b5a570d00c799d7_Animation_sticky4.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc435492e177c263daf4_Animation_sticky5.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcd26fa90e59da26d160_Animation_sticky6.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcd15492e1734c63dc7a_Animation_sticky7.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcd15492e1cebe63dc79_Animation_sticky8.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcd05492e1118f63dc76_Animation_sticky9.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fccfa272b161bc7fb90b_Animation_sticky10.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcce9b5a57b7bec79b93_Animation_sticky11.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcce9b5a57e026c79b92_Animation_sticky12.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcc7ef5f3cd061e59a54_Animation_sticky13.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcc85492e1019863dc69_Animation_sticky14.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcc85492e1c6f063dc6a_Animation_sticky15.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fcc8a272b16b087fb90a_Animation_sticky16.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc4333fbe0ca22fbd4b1_Animation_sticky17.png',
//   'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c74fc43a272b14bef7fb7bf_Animation_sticky18.png',
// ];

const $element = $('.notesAnim');
const imagePath = 'https://cdn.jsdelivr.net/gh/omerkatzir/SMLanding@82b0c2a/images';
const totalFrames = 18;
const animationDuration = 1300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function step(startTime) {
  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
  // first of all we calculate how much time has passed from the last time when frame was update
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  // then we check if it is time to update the frame
  if (timeFromLastUpdate > timePerFrame) {
    // and update it accordingly
    $element.attr('src', imagePath + `/Animation_sticky${frameNumber}.png`);
    // reset the last update time
    timeWhenLastUpdate = startTime;

    // then increase the frame number or reset it if it is the last frame
    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }
  }

  requestAnimationFrame(step);
}

// create a set of hidden divs
// and set their background-image attribute to required images
// that will force browser to download the images
$(document).ready(() => {
  for (var i = 1; i < totalFrames + 1; i++) {
    $('body').append(
      `<div id="preload-image-${i}" style="background-image: url('${imagePath}/Animation_sticky${i}.png');"></div>`
    );
  }
});

// wait for images to be downloaded and start the animation
$(window).on('load', () => {
  requestAnimationFrame(step);
});
