const findIt = (data, event) => {
   let search = event.target.value
   clear(data)
   document.getElementById("searchInput").value = search
   
   if (search) {
       document.getElementById("close-image").classList.remove("invisible")
       document.getElementById("search").classList.add("searchFocus")
   } else {
       document.getElementById("search").classList.remove("searchFocus")
       document.getElementById("close-image").classList.add("invisible")
   }
   data.categ.remove(function(cat) {
           let remove = cat.title.includes(search) || cat.description?.includes(search)
           return !remove
   })
}

const clear = (data) => {
   document.getElementById("searchInput").value = ""
   data.categ.removeAll()
   data.categories.map((cat) => data.categ.push(new CategoriesCreating(cat)))
}

const start = (target) => {
   console.log("dragstart")
   target.classList.add('selected')
}

const over = (target) => {
   console.log("dragover")

   target.classList.remove('selected')
}

const dragBehavior = (data, event) => {
   console.log("data", data)

   let listElement = document.getElementById("dropzone")
   console.log(listElement.children)

   start(event.target)

  const activeElement = document.querySelector(`.selected`);

  const currentElement = event.target;


  if (currentElement.parentElement.classList.contains("_categorie")) {
      currentElement.parentElement.classList.add("underline");
  }
  
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
      activeElement.nextElementSibling :
      currentElement;

  listElement.insertBefore(activeElement, nextElement);
  over(event.target)

}