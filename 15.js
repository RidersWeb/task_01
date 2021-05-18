document.querySelector('button').addEventListener('click', function(event) {
  var value = document.querySelector('input').value
  localStorage.setItem('headerText', value)
})

document.addEventListener('DOMContentLoaded', function(event) {
  var text = localStorage.getItem('headerText')
  if(text && text.trim()){
    document.querySelector('h1').textContent = text
  console.log('loade')
  }
}
)
