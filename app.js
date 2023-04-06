//Elementleri Seçme İşlemi

const amountElement = document.querySelector("#amount");   // Miktar Inputu
const firstSelect = document.querySelector("#firstCurrency");   // İlk Select Elemanını Seçme
const secondSelect = document.querySelector("#secondCurrency");   // İkinci Select Elemanını Seçme

const currency = new Currency("USD","TRY");  //Currency.js deki class içindeki constructors
//firstCurreency = USD 
//secondCurrency = TRY
const ui = new UI(firstSelect,secondSelect);  //ui.js deki class içindeki constructors

eventListener();

function eventListener(){
    amountElement.addEventListener("input",exchangeCurrency); // addEventListener event'i atadık.
    firstSelect.onchange = function(){   // onchange() event'i atadık.
         //1.selected değerini alma Currency.js deki fonksiyon
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirstOutput();  //1.span değerini güncelleme ui.js deki fonksiyon
    };
    secondSelect.onchange = function(){  // onchange() event'i atadık.
        //2.selected değerini alma Currency.js deki fonksiyon
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecondOutput();//2.span değerini güncelleme ui.js deki fonksiyon
    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value); //Currency.js deki fonksiyon   Tutari güncelleme
    currency.exchange()  // Currency.js deki fonksiyon
    .then(result => {

        ui.displayResult(result); //Sonuc span değerini güncelleme ui.js deki fonksiyon
    }) // Currency.js deki Promise'i app.js de yakalıyoruz.
    .catch(err => console.log(err));
}