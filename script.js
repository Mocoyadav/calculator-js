const input = document.getElementById('number-input');
const result = document.getElementById('result');




function handleClickedButton(el){
    const value = el.innerText;

    input.value += value;

    if(el.classList.contains("operator"))return;

    try{
        result.value = eval(input.value);

    } catch{
        result.value = "Error";
    }
}


function reset(){
    input.value= "";
    result.value="";
}
function backspace(){
    input.value = input.value.slice(0,-1);

    if(input.value === ""){
        result.value = "";
        return;
    }

    try{
        result.value=eval(input.value);
    }catch {
        result.value ="";
    }
}
