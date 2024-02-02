const SubmitButton = document.querySelector("#submitBtn");
SubmitButton.addEventListener("click",function(){
    const Fname= document.querySelector("#firstName");
    const FnameValue = Fname.value;
    console.log(FnameValue);


const outPut = document.querySelector("#output");
outPut.innerHTML +=` 
<ul>
<li>Name: ${FnameValue}</li>
</ul>
`;
})