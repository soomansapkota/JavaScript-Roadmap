const playbutton = document.getElementById('play')
const pausebutton = document.getElementById('pause')
const stopbutton = document.getElementById('stop')
const textInput = document.getElementById('texttospeech')
const speed = document.getElementById('speed')
let currentCharacter
playbutton.addEventListener('click', () => {
    playText(textInput.value)
})

pausebutton.addEventListener('click', pauseFunction)

stopbutton.addEventListener('click', stopFunction)

speed.addEventListener('input', () => {
    stopFunction()
    playText(utter.text.substring(currentCharacter))
})

const utter = new SpeechSynthesisUtterance()

utter.addEventListener('end', () => {
    textInput.disabled = false
})
utter.addEventListener('boundary', e => {
    currentCharacter = e.charIndex //the letter of the world where the computer is right now during uttering
})

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }

    utter.text = text
    utter.rate = speed.value || 1
    textInput.disabled = true

    speechSynthesis.speak(utter)
}

function pauseFunction() {
    if (speechSynthesis.speak) speechSynthesis.pause();
}

function stopFunction() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}