var count=0;
var disx=10;
var upg=1;
const btn=document.querySelector('button')
const text=document.querySelector('h1');
const text1=document.querySelector('h2');
const text2=document.querySelector('h4')
function plus(){
    count=count+upg;
    text.innerHTML=count;
}
function dis(){
    if(count>=disx){
        count=count-disx;
        upg++;
        disx=disx*4;
        text1.innerHTML="-"+disx+" | x"+(upg+1);
        text.innerHTML=count;
        text2.innerHTML="Level "+upg;


    }
    else{
        alert("eroor  you still need +"+(disx-count)+" points to get the next upgrade");
    }
}
function play(){
    let audio=new Audio('untitled.wav');
    
    audio.play();
}
btn.addEventListener('click', play);