/* Here goes your JS code */
 const buttonClickMe=document.querySelector("button");
 const popupForm=document.querySelector(".popup");
 const buttonClikClose=document.querySelector(".close");
const submitButton=document.forms["form"]["submit"]
const form=document.forms["form"];

 function dispalayInlineBlock(){
   popupForm.style.display="inline-block"; 
}

buttonClickMe.addEventListener("click",dispalayInlineBlock);
 

buttonClikClose.addEventListener("click",()=>{
popupForm.style.display="none";
});


function handleValidation() {

    const email = document.forms["form"]["email"].value;
    const password = document.forms["form"]["password"].value;
    const checkbox = document.forms["form"]["agreement"].checked;
    if (email !== "" && email.includes("@") && password !== "" && checkbox) {
     submitButton.style.backgroundColor = "pink";
    }

}
submitButton.addEventListener("mouseover",handleValidation);


 
     form.addEventListener("submit",(e)=>{
        buttonClickMe.removeEventListener("click",dispalayInlineBlock);
        e.preventDefault();
       if (submitButton.style.backgroundColor==="pink") {

        setTimeout(() => {
        popupForm.style.display = "none";
        buttonClickMe.innerText="Thank You"},3000);
    } 
         }
         
     );
  




