try {
  var unchecked = new Set(JSON.parse(localStorage.getItem('unchecked-sem4')));
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
  const visibility = e.target.checked ? 'visible' : 'hidden';
  toggleElements(id, visibility)
  updateLocalStorage(id);
}

async function updateLocalStorage(id) {
  if (unchecked.has(id)) unchecked.delete(id)
  else unchecked.add(id)
  localStorage.setItem('unchecked-sem4', JSON.stringify(Array.from(unchecked)));
}

function updateUnchecked(){
  unchecked.forEach(
    (id) => {
      toggleElements(id, 'hidden')
      document.querySelectorAll(`input.${id}`).forEach(ele => ele.checked=false)
    }
  )
}

function toggleElements(id,visibility) {
  document.querySelectorAll(`table .${id}`).forEach(element =>
    element.style = `visibility:  ${visibility};`
  )
}

localStorage.removeItem('unchecked');
