const playbutton = document.getElementById('play')
const pausebutton = document.getElementById('pause')
const stopbutton = document.getElementById('stop')
const textInput = document.getElementById('texttospeech')
const speed = document.getElementById('speed')

playbutton.addEventListener('click', () =>{
    playText(textInput.value)
})

pausebutton.addEventListener('click' , ())

function playText(text)
{
  const utter = new SpeechSynthesisUtterance(text)
  utter.rate = speed.value || 1
  textInput.disabled=true
  utter.addEventListener('end',()=>{
    textInput.disabled=false
  })
  speechSynthesis.speak(utter)
}

