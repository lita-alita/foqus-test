const pointer = document.getElementById("categ-req-for-eachother-pointer");
const subcategories = document.getElementById("categ-req-for-eachother-subcategories-list"); 

function pointerHandler () {
   pointer.classList.toggle("rotate") 
   subcategories.classList.toggle("invisible")
}

pointer.addEventListener("click", pointerHandler)