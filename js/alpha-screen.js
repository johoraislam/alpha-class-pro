// function play(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');

    // const playGroundSection = document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden');
// }

function handleKeybordButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed)

    // get the expecte alphabet

    const currentAlphabet = document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabet.innerText;
    const expectAlphabet = targetAlphabet.toLowerCase();
    console.log(expectAlphabet,playerPressed);

    if(playerPressed === expectAlphabet){
        console.log('you get a piont');
        console.log('you pressed', expectAlphabet);

        // score 
        // current score
        
        

        const currentScore = document.getElementById('curent-score');
        const currentScoreValue = currentScore.innerText;
        const currentScoreSum = parseInt(currentScoreValue);
        console.log(currentScoreSum);
        // get new score
        const newScore = currentScoreSum + 1;
        // show update score

        currentScore.innerText = newScore;

        // new round game
        removeElementColorById(expectAlphabet);
        continueGame();
    }
    else{
        // current life
        const currentLife = document.getElementById('curren-life');
        const currentLifeVelue = currentLife.innerText;
        const lifeVelueSum = parseInt(currentLifeVelue);
        
        // get new life
        const newLife = lifeVelueSum - 1;

        // show your life
        currentLife.innerText = newLife;

        console.log('you missed the point');

        if(newLife === 0){
            gameOver();
        }
    }

}

document.addEventListener('keyup',handleKeybordButtonPress)

function continueGame(){
    // step-1: genarate random letter
    const alphabet = getRandomAlphabte();
    console.log('your random letter',alphabet);

    // get random alphabet

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set bg color

    elementColorById(alphabet);

}

function play(){
    elementHiddenId('home-screen');
    elementHiddenId('final-score');
    elementShowId('play-ground');

    //reset life
    setElementById('curren-life',5)
    setElementById('curent-score',0)

    continueGame();
}

function gameOver(){
    elementHiddenId('play-ground');
    elementShowId('final-score');
    //update final score
    // 1. get final score

    const lastScore = getElementById('curent-score')
    console.log(lastScore);
    setElementById('game-score',lastScore);
}