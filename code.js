const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const navMenu = document.getElementById('navMenu');

function showMenu(){
    navMenu.style.display = "flex";
    navMenu.style.opacity = 1;
}
function hideMenu(){
    navMenu.style.display = "";
    navMenu.style.opacity = "";
}

const title = document.getElementById('title');
const image = document.getElementById('image');

function next(){
   if(title.innerHTML === "air force"){
       title.innerHTML = "nike crater";
       image.src = "img/crater.png";
   }else if(title.innerHTML === "nike crater"){
        title.innerHTML = "nike hippie";
        image.src ="img/hippie.png"
   }else if(title.innerHTML === "nike hippie"){
        title.innerHTML = "air jordan";
        image.src = "img/jordan2.png"
   }else{
    title.innerHTML = "air force";
    image.src = "img/air.png"
   }
}
function prev(){
    if(title.innerHTML === "air force"){
        title.innerHTML = "air jordan";
        image.src = "img/jordan2.png"
    }else if(title.innerHTML === "air jordan"){
        title.innerHTML = "nike hippie";
        image.src ="img/hippie.png"
    }else if(title.innerHTML === "nike hippie"){
        title.innerHTML = "nike crater";
       image.src = "img/crater.png";
    }else if(title.innerHTML === "nike crater"){
        title.innerHTML = "air force";
        image.src = "img/air.png"
    }else{
     title.innerHTML = "air force";
     image.src = "img/air.png"
    }
 }