const body = document.querySelector('body');

body.style.backgroundColor = 'Black';

// if (data.cenario == "cenario1") {
//     body.style.backgroundImage = "url('css/image/cenario1.gif')";
// };
setInterval(function(){
    setTimeOut(body.style.backgroundImage = "url('css/image/cenario1.gif')", 500);
},4000);




