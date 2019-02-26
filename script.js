let imagesSRC = [
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c979b5a572b82c81c59_Animation_sticky0.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c979b5a571c86c81c5a_Animation_sticky1.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c979b5a573ff0c81c58_Animation_sticky2.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c975492e1b53c64739f_Animation_sticky3.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c97ef5f3c2ce2e634f7_Animation_sticky4.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c975492e1271564739e_Animation_sticky5.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c975492e11038647399_Animation_sticky6.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c4a9b5a570409c81bc6_Animation_sticky7.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c4b9b5a571bf1c81bc9_Animation_sticky8.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c4aa272b1568b80490b_Animation_sticky9.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c489b5a57406bc81bc1_Animation_sticky10.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c499b5a570c54c81bc4_Animation_sticky11.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c47ef5f3c1cc2e63449_Animation_sticky12.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c46ef5f3cd2a3e63445_Animation_sticky13.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c4633fbe0ef86fc6fbd_Animation_sticky14.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c44ef5f3c2fb9e63442_Animation_sticky15.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c42ef5f3c0ce9e6343f_Animation_sticky16.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c4133fbe0c801fc6fb1_Animation_sticky17.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c753c41ef5f3c9c01e6343e_Animation_sticky18.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539f56fa90e5d66275f40_Animation_sticky19.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539ed33fbe0dbc5fc6bb1_Animation_sticky20.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539ecef5f3cdb3fe620d7_Animation_sticky21.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539ec33fbe00328fc6bb0_Animation_sticky22.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539eca272b17de7804592_Animation_sticky23.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539eca272b153a8804593_Animation_sticky24.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539eca272b1b0c7804594_Animation_sticky25.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539ed6fa90ed76b275f2c_Animation_sticky26.png',
  'https://uploads-ssl.webflow.com/5c6054cf050ea306c5a8b0e7/5c7539ec5492e1ca2c646e72_Animation_sticky27.png',
];

const $element = $('.notesanim');
const totalFrames = 27;
const animationDuration = 1500;
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
    $element.attr('src', imagesSRC[frameNumber]);
    $element.attr('srcset', imagesSRC[frameNumber]);
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

// wait for images to be downloaded and start the animation
$(window).on('load', () => {
  requestAnimationFrame(step);
});
