// function hideElementById (elementId){
//     const element =document.getElementById("elementId");
//     element.classList.add(hidden);
//     }
    
//     function showElementById(elementId){
//         const element=document.getElementById("elementId");
//         element.classList.remove("hidden");
//      }
function showElementById(){
    const elementId = document.getElementById("home-screen");
     const element= elementId.classList.add("hidden");
    // console.log(element)
    const elementId2 = document.getElementById("play-ground");
    const element2 =elementId2.classList.remove("hidden");
    
    // const alphabetstring ="abcdefghijklmnopqrstuvwxyz";
    // const alphabets = alphabetstring.split('');
    // const randomNumber = Math.random() * 25;
    // const index = Math.round(randomNumber);
    // const alphabet =alphabets[index];
    getRandomAlphabet()   


}
function getRandomAlphabet(){
    const alphabetstring ="abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetstring.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet =alphabets[index];
    const newindex =document.getElementById('current-alphabet')
    newindex.innerText=alphabet;
}