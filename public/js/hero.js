const hero=document.getElementById("hero");
var currentPos = 0;
var images = ["linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url(../images/covidbg.jpg)","linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(../images/pic7.jpg)","linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(../images/pic6.jpg)","linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(../images/pic1.jpg)"]
const changeimages=()=>{
    if(++currentPos>images.length){
        currentPos=0;
    }
    hero.style.backgroundImage= images[currentPos];
    hero.style.backgroundImage.transform="translate(100vw)";
}
setInterval(changeimages, 5000);