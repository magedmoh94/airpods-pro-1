const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000, // this is the duration of the video in pixels to complete the whole video which is 9 sec
  triggerElement: intro,
  triggerHook: 0 // this is the triger hook where the scene starts with the scroll
})
  .addIndicators()
  .setPin(intro) // this is set to pin to pin the first section while scrolling till it ends and get the next section
  .addTo(controller);

//Text Fade Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000, // this is the duration of the text animation
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1; // this is the acceleration of the frames
let scrollpos = 0;
let delay = 0;
//this is to moderate the calcuation of the video length of seconds & miliseconds
scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  // Video frame rate is "30" fps so divided the 1000ms by the video fps > "1000/30" to get the delay value

  video.currentTime = delay;
}, 33.3);
