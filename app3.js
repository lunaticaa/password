// document.body.style.backgroundImage = 'url('+ randSelect + ')';


// function refresh(){
//   window.location.reload();
// }

// setInterval(refresh, 2000);

let randomChange = document.getElementById("randomChange"), images = ['imgs/pic1.jpg' , 'imgs/pic2.jpg' , 'imgs/pic3.jpg', 'imgs/pic4.jpg' , 'imgs/pic5.jpg'];

let imgCount = images.length;

let number = Math.floor(Math.random() * imgCount);

window.onload = function(){
  randomChange.style.backgroundImage = 'url('+images[number]+')'
}