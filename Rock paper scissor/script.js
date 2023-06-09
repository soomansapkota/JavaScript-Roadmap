const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScore = document.querySelector('[data-computer-score]')
const yourScore = document.querySelector('[data-your-score]')

// Array of Objects
const SELECTIONS = [
{
    name: 'rock',
    emoji: '✊',
    beats: 'scissor'
},
{
    name: 'scissor',
    emoji: '✌️',
    beats: 'paper'
},
{
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
}
]

selectionButtons.forEach(selectButton => {
    selectButton.addEventListener('click', e => {
        const selectionName = selectButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
        
    })
})
    // first-part
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
   
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection,yourWinner)

    if(computerWinner) incrementSore(computerScore)
    if(yourWinner) incrementSore(yourScore)
}

function incrementSore(scoreSpan){
  scoreSpan.innerText= parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection , winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection,opponentSelection)
{
    return selection.beats === opponentSelection.name
}

// second-part
function randomSelection(){
   const randomIndex = Math.floor(Math.random()*SELECTIONS.length)
   return SELECTIONS[randomIndex]
}