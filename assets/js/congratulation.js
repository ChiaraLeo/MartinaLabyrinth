const onClickYes = () =>{
  document.getElementById('nobutton').className = 'removed'
  document.getElementById('yesbutton').className = 'moved'
  document.getElementById('wrapper').className = ''
  setTimeout(() =>  document.getElementById('body1').className = 'red', 0000)
  setTimeout(() =>  document.getElementById('body2').className = 'orange', 2000)
  setTimeout(() =>  document.getElementById('body3').className = 'yellow', 4000)
  setTimeout(() =>  document.getElementById('body4').className = 'green', 6000)
  setTimeout(() =>  document.getElementById('body5').className = 'blue', 8000)
  setTimeout(() =>  document.getElementById('body6').className = 'blueviolet', 10000)
  document.getElementById('nobutton').addEventListener("transitionend",() => {
    document.getElementById('nobutton').remove()
  })
}
