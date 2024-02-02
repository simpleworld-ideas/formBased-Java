const SubmitButton= document.querySelector("#submitBtn");
SubmitButton.addEventListener("click",function(){
    const Fname= document.querySelector("#firstName");
    const FnameValue = Fname.value;
    console.log(FnameValue);
})