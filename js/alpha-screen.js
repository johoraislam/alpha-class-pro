// function play(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');

    // const playGroundSection = document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden');
// }

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
    elementShowId('play-ground');
    continueGame()
}