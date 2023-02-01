window.addEventListener('load', () => {
  var div = document.querySelector('div')
  console.log(div);
  div.addEventListener('click', () => {
    div.style.color = 'red'
  })
})