const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
        if (!showMenu){
        menuBtn.classList.add('close');
        navBar.classList.add('show');

showMenu = true;

}   else {
        menuBtn.classList.remove('close');
        navBar.classList.remove('show');
showMenu = false;
    }
};


const fullImgbox = document.getElementById ("fullImgBox")
const fullImg =document.getElementById ("fullImg")

function openFullImg(pic){
        fullImgbox.style.display = "flex";
        fullImg.src = pic;
}

function closeFullImg(){

    fullImgbox.style.display = "none";            
};

