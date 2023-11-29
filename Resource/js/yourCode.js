function Show(){
    var click = document.getElementById('myform');
    if(document.getElementById('myform').style.display =='block'){
        document.getElementById('myform').style.display ='none';
        var buttonText = document.getElementById('btn-show');
        buttonText.innerText = `Show Register Form`;
    } else {
        var btn = document.getElementById('myform');
        document.getElementById('myform').style.display ='block';
        var buttonText = document.getElementById('btn-show');
        buttonText.innerText = `Hide Register Form`;
    }
}

function checkForm(){
    var name = document.getElementById('t1').value;
    var email = document.getElementById('t2').value;
    if (name == "" || email == ""){
        alert("Please input your name and email");
        return;
    }
}
