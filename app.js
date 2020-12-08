var contain = document.getElementById('contain');
var imgs = document.getElementsByClassName('img');
let showImg = 1;
var isPause = false;
setInterval(slideshows,6000);
function slideshows(){
   if(!isPause){
    if (showImg>=imgs.length) {
        showImg=0;
    }
    contain.style.transform = 'translateX('+ '-' +(100*showImg) +'vw)';
    showImg++;
   }
}

function nextPre(n){
    contain.style.transform = 'translateX('+ '-' +(100*n) +'vw)';
}
function ispause() {
    isPause =!isPause;
}
document.getElementById("pause").addEventListener("click",ispause);
document.getElementById("pre").addEventListener("click",nextPre(-1));
document.getElementById("next").addEventListener("click",nextPre(1));

