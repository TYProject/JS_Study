//配列のテスト
function array_test() {
    document.getElementById('btnAry1').addEventListener('click', array_push, false);
    document.getElementById('btnAry2').addEventListener('click', array_length, false);

    //push関数でデータ追加
    function array_push() {
        'use strict';

        var aryAry1 = [];   //配列の定義

        var datStart = new Date();

        //100万回pushを繰り返す。
        for (var i = 0; i < 1000000; i++) {

            aryAry1.push(i);

        }

        var datEnd = new Date();

        var setTime = datEnd - datStart;

        document.getElementById('ary1').innerHTML = aryAry1.length + "回の経過時間は "
            + setTime + "ミリ秒でした。";

    }

    //lengthを使ってデータ追加
    function array_length() {
        'use strict';

        var aryAry2 = [];   //配列の定義

        var datStart = new Date();

        //100万回配列にデータを追加する。
        for (var i = 0; i < 1000000; i++) {

            aryAry2[aryAry2.length] = i;

        }

        var datEnd = new Date();

        var setTime = datEnd - datStart;

        document.getElementById('ary2').innerHTML = aryAry2.length + "回の経過時間は "
            + setTime + "ミリ秒でした。"

    }
}

