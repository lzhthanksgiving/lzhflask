const leftcloud=document.querySelector('.leftcloud');
const rightcloud=document.querySelector('.rightcloud');
const ufo=document.querySelector('.ufo');
const bigtitle=document.querySelector('.bigtitle');
const peoples=document.querySelectorAll('.people');
const run=document.querySelector('.run');
const man=document.getElementById('man');
const woman=document.getElementById('woman');
const bagman=document.getElementById('bagman');
const blady=document.getElementById('blady');
const vegetable=document.getElementById('vegetable');
const final=document.querySelector('.final');
const wenzi2=document.querySelector('.wenzi2')
window.addEventListener("scroll",()=>{
    const scrolly=window.scrollY;
    leftcloud.style.transform=`translateX(-${scrolly*0.5}px)`;
    rightcloud.style.transform=`translateX(${scrolly*0.5}px)`;
    ufo.style.transform=`translateY(${scrolly*0.43}px)`;
    ufo.style.scale=`${1+scrolly*0.05}`;
    run.style.transform=`translateX(${-Math.min(scrolly*0.4,480)}px)`;
    if(scrolly<=200){
        bigtitle.innerHTML="The Change of<br>the Day";
        bigtitle.style.backgroundImage=`linear-gradient(180deg,#ffa600,#FF4500)`;
        bigtitle.style.opacity=1;
    }
    else if(scrolly>200 && scrolly<3100){
        bigtitle.innerHTML='Early Morning';
        bigtitle.style.opacity=0.6;
        bigtitle.style.backgroundImage = `linear-gradient(180deg,#ffa6002f,#FF44002f)`;
        bigtitle.style.zIndex=1;
    }else if(scrolly>=3100 && scrolly<6522){
        bigtitle.innerHTML='Noon';
        bigtitle.style.opacity=0.6;
        bigtitle.style.backgroundImage = `linear-gradient(180deg,#ffa6004f,#FF44004f)`;
        if(scrolly>=4600 && scrolly<=5100){
        bigtitle.style.opacity=0;
        };
    }else{
        bigtitle.style.opacity=0;
        const scroll_length=scrolly-6522;
        peoples.forEach(p=>{
            p.style.position='fixed';
        });
        man.style.transform=`translateX(${-scroll_length*0.17}px)`;
        woman.style.transform=`translateX(${scroll_length*0.19}px)`;
        bagman.style.transform=`translateX(${scroll_length*0.060}px)`;
        blady.style.transform=`translateX(${-scroll_length*0.13}px)`;
        vegetable.style.transform=`translateX(${-scroll_length*0.23}px)`;
        final.style.opacity=1;
    };
    if(scrolly>9000){
        final.style.opacity=0;
    };
    if(scrolly>12300){
        wenzi2.style.position='fixed';
        wenzi2.style.top=`${37}%`;
    };
    if(scrolly<6522){
        peoples.forEach(p=>{
            p.style.position='absolute';
        });
        final.style.opacity=0;
    };
});