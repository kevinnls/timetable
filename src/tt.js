try {
  var unchecked = new Set(JSON.parse(localStorage.getItem('unchecked')));
} catch (e) {
  var unchecked = new Set()
}

updateUnchecked()

document.querySelectorAll('input[type="checkbox"]').forEach(
  (ele) => {
    ele.addEventListener('change', changeHandler);
  }
)

function changeHandler(e) {
  const id = e.target.id;
  const visibility = e.target.checked ? 'block' : 'none';
  toggleElements(id, visibility)
  updateLocalStorage(id);
}

async function updateLocalStorage(id) {
  if (unchecked.has(id)) unchecked.delete(id)
  else unchecked.add(id)
  localStorage.setItem('unchecked', JSON.stringify(Array.from(unchecked)));
}

function updateUnchecked(){
  unchecked.forEach(
    (id) => {
      toggleElements(id, 'none')
      document.querySelectorAll(`input.${id}`).forEach(ele => ele.checked=false)
    }
  )  
}

function toggleElements(id,visibility) {
  document.querySelectorAll(`span.${id}`).forEach(element => 
    element.style = `display:  ${visibility};`
  ) 
}
