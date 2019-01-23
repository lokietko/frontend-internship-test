/* Here goes your JS code */
 const buttonClickMe=document.querySelector("button");
 const popupForm=document.querySelector(".popup");
const buttonClikClose=document.querySelector(".close");

buttonClickMe.addEventListener("click",()=>{
popupForm.style.display="inline-block";
});
 

buttonClikClose.addEventListener("click",()=>{
popupForm.style.display="none";
});