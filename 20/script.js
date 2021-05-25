const form = document.querySelector('form')

form.addEventListener('submit', event => {

  event.preventDefault()

  const title = form.title.value
  const text = form.text.value
  const descript = form.descript.value

  saveForm(title, text, descript)
})
// Spread
// function saveForm(data) {
//   const formDate = {
//     data: new Date().toLocaleDateString(),
//     ...data
//   }
//   console.log('FormDate: ', formDate)
// }

// Rest
function saveForm(...arg) {
  const [title, text, descript] = arg
  const formDate = {
    data: new Date().toLocaleDateString(),
    title, text, descript
  }
  console.log('FormDate: ', formDate)
}
