/* Here goes your JS code */
 const buttonClickMe=document.querySelector("button");
 const popupForm=document.querySelector(".popup");
 const buttonClikClose=document.querySelector(".close");
const submitButton=document.forms["form"]["submit"]
const form=document.forms["form"];

buttonClickMe.addEventListener("click",()=>{
popupForm.style.display="inline-block";
});
 

buttonClikClose.addEventListener("click",()=>{
popupForm.style.display="none";
});


submitButton.addEventListener("mouseover",function(){

 const email=document.forms["form"]["email"].value;
 const password=document.forms["form"]["password"].vaue;
 const checkbox=document.forms["form"]["agreement"].checked;
    if (email !== "" && email.includes("@") && password !== ""&& checkbox){
    submitButton.style.backgroundColor="pink";
}

})
 
     
  




