function numCount() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('number'); 
    var textLine, num = 0, even = 0, odd = 0;
    var length = number.length;
    for(i = 0; i <  length; i++){
         if(number[i].value === ''){
            textLine = 'Hãy nhập đầy đủ 3 số';
            break;
         } else{
            if(Number(number[i].value) % 2 == 0){
                even += 1;
            } else {
                odd += 1;
            }
            textLine = 'Ba số đã nhập có: <b>' + even + ' số chẵn</b> và <b>' + odd + ' số lẻ</b>';
            }
        }
    output.innerHTML = textLine;
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