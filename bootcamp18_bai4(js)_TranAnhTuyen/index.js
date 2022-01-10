function numCount() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('number'); 
    var textLine;
    var length = number.length;
    for(i = 0; i <  length; i++){
         if(number[i].value === ''){
            textLine = 'Hãy nhập đầy đủ 3 cạnh của tam giác';
            break;
         } else{
            if(number[0].value == number[1].value && number[1].value == number[2].value){
                textLine = 'Tam Giác Đều';
            } else if(number[0].value == number[1].value || number[0].value == number[2].value || number[1].value == number[2].value){
                textLine = 'Tam Giác Cân';
            } else if(Number(number[0].value) == Math.sqrt(Number(number[1].value) * Number(number[1].value) + Number(number[2].value) * Number(number[2].value)) || Number(number[1].value) == Math.sqrt(Number(number[0].value) * Number(number[0].value) + Number(number[2].value) * Number(number[2].value)) || Number(number[2].value) == Math.sqrt(Number(number[1].value) * Number(number[1].value) + Number(number[0].value) * Number(number[0].value))){
                textLine = 'Tam Giác Vuông';
            } else {
                textLine = 'Không Phải Tam Giác';
            }
        }
}
output.innerText = textLine;
}
function reset() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('number');
    for(i = 0; i < number.length; i++){
        if(number[i].value === ''){
            output.innerHTML = '';
        }
    }
}