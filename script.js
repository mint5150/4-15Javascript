/*1.3つほどメソッドを作ってください。*/
/*1つ目*/
let obj = {
  name: '田中',
  age: 25,

  getName: function() {
    console.log( this.name );
  }
}
obj.getName();


/*2つ目*/
let kaden = {
  item: '扇風機',
  price: 3000,

  itemPrice: function() {
    console.log( this.price );
  }
}
kaden.itemPrice();

/*3つ目*/
let books = {
  book1: function() {
    console.log('吾輩は猫である');
  }
}
books.book1();

/*2.下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめで
  す。)*/
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit("バナナ", 400));


/*3. 下記の関数を経由して2つの関数を実行するような処理を作ってください。*/

function addTax(name,price,func){
  const taxPrice = Math.round(price*1.10);
  func(name,taxPrice)
}
function showFruits(name, price) {
  const result = name + "の値段は" + price + "円です。"
  console.log(result)
};

addTax("トマト",100,showFruits);
addTax("玉ねぎ",120,showFruits);