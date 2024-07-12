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
    element.classList.add('bg-orange-500');

}

function getRandomAlphabte(){
    // creat alphabet array 
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');
    // console.log(alphabates);

    // get index number betwen 0-25

    const randomNumber = Math.random() * 25;
    const getIndex =Math.round(randomNumber);

    const alphabet = alphabates[getIndex];
    console.log(getIndex, alphabet);
    return alphabet;
}