
var myvar =document.getElementById('btn');

window.onscroll=function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset>400)
        myvar.style.display='block';
    else myvar.style.display='none';
    
};
window.onclick=function(){
    alert('lkjlkjlkjk');
}
myvar.onclick=function(){
    window.scrollTo(0,0);
};