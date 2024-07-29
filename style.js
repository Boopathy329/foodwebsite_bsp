//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// counter design
// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration){
//     let obj = document.getElementById(id),
//     current = start,
//     range = end - start,
//     increment = end > start ? 1: -1,
//     step = Math.abs(Math.floor(duration / range)),
//     timer = setInterval(() => {
//       current += increment;
//       obj.textContent = current;
//       if(current == end){
//         clearInterval(timer);
//       }
//     },step);
//   }
//   counter("count1",0,1287,3000);
//   counter("count2",100,5786,2500);
//   counter("count3",0,1440,3000);
//   counter("count4",0,7110,3000);
// });


const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})




//  light and dark theme 

// let theme_switcher = document.querySelector('.theme-switcher');
// let theme = localStorage.getItem('theme');
// let icon = localStorage.getItem('icon');
// setTheme(theme, icon);
// theme_switcher.addEventListener('click', () => {
//   if (theme_switcher.getAttribute('name') == 'sunny-outline') {
//     setTheme('dark', 'moon-outline');
//     theme_switcher.setAttribute('name', 'moon-outline');
//   } else {
//     setTheme('light', 'sunny-outline');
//     theme_switcher.setAttribute('name', 'sunny-outline');
//   }
// });

// function setTheme(theme, icon) {
//   document.documentElement.className = theme;
//   theme_switcher.setAttribute('name', icon);
//   localStorage.setItem('theme', theme);
//   localStorage.setItem('icon', icon);
//   if (
//     (theme_switcher.getAttribute('name') == '' && theme == '') ||
//     (theme == null && icon == null) ||
//     (theme == 'null' && icon == 'null')
//   ) {
//     theme_switcher.setAttribute('name', 'sunny-outline');
//   }
// }






