let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += screenValue;    

        } else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'C'){
            screenValue = " ";
            screen.value = screenValue;
        }else if(buttonText == 'B'){
           screenValue = screenValue.slice(0,-1);
           screen.value = screenValue;
        } else if (buttonText == '1/x') {
            screen.value = eval(1/screenValue);
        } else if (buttonText == 'sqr') {
            screen.value = eval(Math.pow(screenValue,2));
        } else if(buttonText == 'sqrt'){
          screen.value = eval(Math.sqrt(screenValue));  
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}