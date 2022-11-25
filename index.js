firstEl= Math.floor(Math.random() *10);
secondEl= Math.floor(Math.random() *10);
document.getElementById("first").innerText=firstEl;
document.getElementById("second").innerText=secondEl;
formEL=document.getElementById("form")




const answer = firstEl * secondEl;
let score = JSON.parse(localStorage.getItem("score"));
document.getElementById("score").innerText= `${score}`;

formEL.addEventListener("submit" , () => {
  answerEl = +document.getElementById("answer").value;
if(answerEl === answer){
        score=score +1;
        updateLocalStorage()
        

}else{
    score= score -1;
    updateLocalStorage()
    
}   
console.log(answerEl);
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
} 