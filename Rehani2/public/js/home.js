let indexValue=0;

function slideShow(){
    setTimeout(slideShow,3000);
    let i;
    let j;
    const img=document.querySelectorAll(".hero-image");
    for(i=0; i<img.length; i++){
        img[i].style.display="none";

    }
    indexValue++;
    if(indexValue>img.length){
        indexValue=1;
    }
    img[indexValue - 1].style.display="block";
}

slideShow();