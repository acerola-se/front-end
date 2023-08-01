// ラベルの取得
let label = document.getElementById("label");
let button1 = document.getElementById("change-text1")
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

// リセットをクリックしたら値を0に変更する
button1.addEventListener("click",()=>{
    label.innerHTML = 0;
});
// クリックしたら1を加算する
button2.addEventListener("click",()=>{
    label.innerHTML = 1++;
});
// クリックしたら1を減算する
button3.addEventListener("click",()=>{
    label.innerHTML = 1--;
});



