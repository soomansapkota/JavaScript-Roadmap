window.saveDataAcrossSessions = true

let imageElement = getNewImage()
let nextImageElement = getNewImage(true)


let startLookTime = Number.POSITIVE_INFINITY 
let lookDirecion = null
const LOOK_DELAY = 1000
const LEFT_CUTOFF = window.innerWidth / 4
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4

webgazer.setGazeListener((data, timestamp) => {
    if(data == null || lookDirecion ==='STOP')return
    if (data.x < LEFT_CUTOFF && lookDirecion !== 'LEFT' && lookDirecion !== 'RESET') {
        startLookTime = timestamp
    }
    else if (data.x > RIGHT_CUTOFF  && lookDirecion !== 'RIGHT' && lookDirecion !== 'RESET') {
        startLookTime = timestamp

    } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
        startLookTime = Number.POSITIVE_INFINITY
        lookDirecion = null
    }

    if (startLookTime + LOOK_DELAY < timestamp)
    {
        if(lookDirecion === 'LEFT'){
            imageElement.classList.add("left")
        } else{
            imageElement.classList.add("right")
        }

        startLookTime = Number.POSITIVE_INFINITY
        lookDirecion = 'STOP'
        setTimeout(()=>{
            imageElement.remove()
            nextImageElement.classList.remove('next')
            imageElement = nextImageElement
            nextImageElement = getNewImage(true)
            lookDirecion = 'RESET'

        },200)
    }

    
})
    .begin()

function getNewImage(next = false) {
    const img = document.createElement("img")
    img.src = "https://picsum.photos/1000?" + Math.random()
    if (next) img.classList.add("next")
    document.body.append(img)
    return img
}