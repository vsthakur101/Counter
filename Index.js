const btnDecrement = document.getElementById('dec');
const btnIncrement = document.getElementById('inc');
const btnReset = document.getElementById('rest');
const counterPlaceHolder = document.getElementById('count');


let number =0;

function changeColor(number){
    var color = "";
    if(number < 0 ){
        color = "red";
    }else if (number > 0 ){
        color = "green";
    }else{
        color="black";
    }
    return color;
}

btnIncrement.addEventListener("click", function(){
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnReset.addEventListener("click", function(){
    number=0;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function(){
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});