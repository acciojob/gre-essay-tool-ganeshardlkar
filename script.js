//your code here
let evaluatedText = document.getElementById('evaluatedText');
let wordCount = document.getElementById('wordCount');
let button = document.getElementById('button');


function countWords(){
    if(evaluatedText.value === ""){
        console.log("0");
        wordCount.innerText = 0;
    }
    else{

        const arr = evaluatedText.value.trim().split(" ");
        console.log(evaluatedText.value);
        if(arr.length > 0){
            console.log(evaluatedText.value.length);
            console.log(arr.length);
            wordCount.innerText = arr.length;
        }
    }
}
