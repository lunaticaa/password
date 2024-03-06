// slide show

let i = 0;
let images = [];
let time = 2000;

images[0] = 'imgs/pic1.jpg';
images[1] = 'imgs/pic2.jpg';
images[2] = 'imgs/pic3.jpg';
images[3] = 'imgs/pic4.jpg';
images[4] = 'imgs/pic5.jpg';

function changeBg (){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  } else{
    i = 0;
  }
  setTimeout("changeBg()", time);
}

window.onload = changeBg;
