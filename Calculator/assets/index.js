function clearscreen(){
    document.getElementById('total').value = "";
}
function backspace(){
    var back_space = document.getElementById('total');
    var i =back_space.value;
    if(i.length > 0){
        i = i.substring(0, i.length-1);
        back_space.value=i;
    }
}