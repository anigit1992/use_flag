window.addEventListener("load", function(){
// debugger;
var btn=document.querySelector('.button');
var img=document.querySelector('img');
var flag;
btn.addEventListener("click", changer);
function changer(){
    if(flag){
        img.src="assets/images/3.jpg"
    }
    else {
        img.src="assets/images/2.jpg"
    }
    flag=!flag
};
})
// /**
//  * Created by Ani on 5/16/2017.
//  */
