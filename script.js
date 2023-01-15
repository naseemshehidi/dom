let quants = document.getElementsByClassName('Quant');
let plusBtns = document.getElementsByClassName('plus-btn');
let minusBtns = document.getElementsByClassName('minus-btn');
let items = document.getElementsByClassName('Item');
let deleteBtns = document.getElementsByClassName('delete');
let priceItems = document.getElementsByClassName('price');
let originalPrices = []
let totalPrice = document.getElementById('finalPrice');
let likeBtns = document.getElementsByClassName('fa-2x');

function refresh(){
    let sum = 0;
    for (let e of priceItems){
        sum += parseFloat(e.innerHTML);
    }
    totalPrice.value = sum;
}

for (const p of priceItems){originalPrices.push(p.innerHTML)}

for (let i = 0; i < items.length; i++){
    plusBtns[i].addEventListener('click', function(){
        quants[i].value++;
        priceItems[i].innerHTML = parseFloat(quants[i].value) * originalPrices[i];

        refresh();
    });
    minusBtns[i].addEventListener('click', function(){
        if(quants[i].value > 1){
            quants[i].value--;
            priceItems[i].innerHTML = parseFloat(quants[i].value) * originalPrices[i];
        }
        refresh();
    });

    deleteBtns[i].addEventListener('click', function(){
        if(items.length === 1){
            items[0].remove();
            refresh();

        }
        items[i].remove();
        refresh();
    });

    likeBtns[i].addEventListener('click', function(){
        if (likeBtns[i].style.color != "red"){
            likeBtns[i].style.color = "red";
        }else{
            likeBtns[i].style.color = "black";
        }
    });

}



