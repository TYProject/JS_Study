
//タイマー
function set_timer() {
    document.getElementById('btn1').addEventListener('click', start_timer, false);
    document.getElementById('btn2').addEventListener('click', stop_timer, false);
}
function start_timer() {
    timerID = setInterval("count()", 1000);
}

function stop_timer() {
    clearInterval(timerID);
}

function count() {
    var sec = (new Date()).getSeconds();

    document.getElementById('tmr').innerHTML = sec;


}

//階乗を求める(再帰)
function pre_saiki() {

    document.getElementById('btn').addEventListener('click', saiki(), false);
}

function saiki() {
    var num = document.getElementById('in_num').value;

    var result = function(num) {

        if (num <= 0) {
            return -1;
        } else {
            return num * kaijo(num - 1);
        }
    }

    document.getElementById('rslt').innerHTML = result;

}