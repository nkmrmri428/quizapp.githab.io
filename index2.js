//配列内にｵﾌﾞを入れてその更に中に配列
//クイズ[{問題:"問題文書く",選択肢:[a,b,c,d],答え:答え書く]},{以下同},{以下同}・・・];
const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
　    "プレステ2",
　    "ニンテンドースイッチ",
　    "ニンテンドーDS"
    ],
      correct: "任天堂DS"
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
　    "スーパーマリオブラザーズ3",
　    "スーパードンキーコング",
　    "星のカービィ"
    ],
      correct: "MOTHER2"
  },
  {
    question: "FF5の主人公の名前は？",
    answers: [
      "フリオニール",
　    "クラウド",
　    "ディーダ",
　    "セシル"
    ],
      correct: "セシル"
  },
  {
    question: "マリオが助けるお姫様の名前は？",
    answers: [
      "ピーチ",
　    "コゼット",
　    "ガルーラ",
　    "セシル"
    ],
      correct: "ピーチ"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//何度も出てくるものは変数定数で見やすく
//JS内でHTMLのオブジェクトを定義する時は　前に＄つける！暗黙の了解

//ボタンを定義
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//定数の文字列をHTMLに反映
//クイズの問題文、選択肢を定義し、処理を関数でまとめる
const setupQuiz = () => {
　document.getElementById("js-question").textContent = quiz[quizIndex].question;
    
　let buttonIndex =0;
　while (buttonIndex < buttonLength){
　　$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];   
　　buttonIndex++;
　};
}
setupQuiz(); //関数の呼出

//e.target はイベントのひとつ（イベント自体もｵﾌﾞ）
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
    
  quizIndex++;
    
  if (quizIndex < quizLength/*今何問目?と問題数を比較*/) {
    //問題数がまだあればこちらを実行(問題文を呼出)
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert(`終了！！！！正解数は${score}／${quizLength}です！！！`);
    
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
　clickHandler(e);
});
  handlerIndex++;
}

