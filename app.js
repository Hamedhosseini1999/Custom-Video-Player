/// * Navbar
const navSlide = () => {
  const burger = document.getElementById("hamburger");
  const list = document.getElementById("list");
  const listItem = document.querySelectorAll(".list .list-item");
  // Event Listeners
  burger.addEventListener("click", (e) => {
    // add slide
    list.classList.toggle("nav-active");
    // item animation
    listItem.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ``;
      } else {
        item.style.animation = `slide .5s ease ${index / 5 + 1}s forwards `;
      }
    });
    burger.classList.toggle("toggle");
    if (burger.style.animation) {
      burger.style.animation = "";
    } else {
      burger.style.animation = "ham .5s ease forwards";
    }
  });
};

///* ShowCase Video player
const video = document.getElementById("video");
const play = document.getElementById("play");
const progress = document.getElementById("range");
const timeStamp = document.getElementById("timestamp");

// Event Listeners video
video.addEventListener("click", () => {
  toggleVideoPlay();
  play.classList.toggle("change");
});
play.addEventListener("click", () => {
  toggleVideoPlay();
  play.classList.toggle("change");
});
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setVideoPlay);
// video.addEventListener("play", changeIcon);
// video.addEventListener("pause", changeIcon);
// Change Icon
// function changeIcon() {
//   if (video.paused) {
//     play.innerHTML = '<li class="fa fa-pause fa-2x"></li>';
//   } else {
//     play.innerHTML = '<li class="fa fa-play fa-2x"></li>';
//     console.log(video);
//   }
// }
// functions
function toggleVideoPlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update Progress
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let min = Math.floor(video.currentTime / 60);
  if (min < 10) {
    min = "0" + min;
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  timeStamp.innerHTML = `<div>${min}</div><small>${secs}</small>`;
}
// Set video play

function setVideoPlay() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// Call
navSlide();
