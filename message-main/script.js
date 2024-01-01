const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const moreBtn = document.querySelector(".btn");
const noBtns = document.querySelectorAll(".btnAll");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you tooo... wifeee";
  gif.style.transform = "scale(0.7)";
  gif.src =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnJjeTVjcHAwdXU4cmNjZ2hsdTExZm80enJvejZkeXU5cW1rNGhjOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4N1wOi78ZGzSB6H7vK/giphy.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  moreBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Jalay Pocha😭😭😭";
  // gif.style.transform = "scale(0.7)";
  gif.src =
  "../bbb.webp";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  moreBtn.style.display = "none";
});

// noBtns.forEach(noBtn => {
//   noBtn.addEventListener("mouseover", () => {
//     const noBtnRect = noBtn.getBoundingClientRect();
//     const maxX = window.innerWidth - noBtnRect.width;
//     const maxY = window.innerHeight - noBtnRect.height;

//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     noBtn.style.left = randomX + "px";
//     noBtn.style.top = randomY + "px";
//   });
// });