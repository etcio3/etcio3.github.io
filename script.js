var randomNumbers=new Array;
function randomNumbersGenerator(){
    for(let i=0;i<5;i++){
        randomNumbers.push(Math.floor(Math.random() * 10) + 1);
    }
}

function showOccurrence(){
    event.preventDefault();
    let guess=document.getElementById("numBox").value;

    let countOccurrences=0;

    randomNumbers.forEach(element => {
        if(element==guess)
            countOccurrences++;
    });

    alert("The number "+guess+" is contained "+countOccurrences+" times in the array.")
}

function refresh(){
    location.reload();
}