var timer;
var ele = document.getElementById('timer');

(function () {
    var amnt = 1074024;
    timer = setInterval(() => {
        ele.innerHTML = amnt.toLocaleString(); 
        amnt -= 2; 
    }, 5000);
})();