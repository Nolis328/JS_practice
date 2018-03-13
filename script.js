//jsで作った自作関数
//function 関数名（引数1,引数2,.....）{
	//実行したい処理
	//return戻り値
//}

//引数と戻り値は省略可能。これはあらゆる言語に共通。

function hello(){
	console.log('Hello,JavaScript!');
	window.alert('option+command+Jでコンソール出せるんご');
}

// document,getElementByIdで一致するidを持つ全ての値を書き換える。

function change_text(change_id,change_word){
	document.getElementById(change_id).textContent=change_word;
}//同じ動きをさせたいけど指定先の名前が違うとき。idでそのまま置き換えれる。



function plus(){
	var n1=document.getElementById('number1').value;
	var n2=document.getElementById('number2').value;
	var result = parseInt(n1)+parseInt(n2);//数と認識させるparseInt
	console.log(result);
	return result;//値をいったん取り出すのが本来の使い方
}