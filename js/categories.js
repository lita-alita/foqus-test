const pointer = document.getElementById("categ-req-for-eachother-pointer");
const subCategories = document.getElementById("categ-req-for-eachother-subcategories-list"); 

function pointerHandler () {
   pointer.classList.toggle("rotate") 
   subCategories.classList.toggle("invisible")
}

pointer.addEventListener("click", pointerHandler)