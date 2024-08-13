function elementHiddenId(hideTag){
    const homeSectionId = document.getElementById(hideTag);
    homeSectionId.classList.add('hidden');
}

function elementShowId(hideTag){
    const showElement = document.getElementById(hideTag);
    showElement.classList.remove('hidden');
}
 
function elementColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-400');

}
function removeElementColorById(elementId){
    const element = document.getElementById(elementId);
    // element.classList.remove('bg-red -400');

}

function setElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabte(){
    // creat alphabet array 
    const alphabateString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabates = alphabateString.split('');
    // console.log(alphabates);

    // get index number betwen 0-25

    const randomNumber = Math.random() * 25;
    const getIndex =Math.round(randomNumber);

    const alphabet = alphabates[getIndex];
    // console.log(getIndex, alphabet);
    return alphabet;
}