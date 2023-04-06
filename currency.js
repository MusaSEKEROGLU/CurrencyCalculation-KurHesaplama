
class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";   //Api Adresi
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve,reject) => {

            fetch(this.url + this.firstCurrency)
            .then(response => response.json()) //api'den gelen cevap
            .then(data => { // api'den gelen data
            const twoSelectedValue = data.rates[this.secondCurrency];
            const amountuParseNumber = Number(this.amount);
            let total = twoSelectedValue * amountuParseNumber;
            resolve(total);
        })
        .catch(err => reject(err));
        });       
    }

    //Tutar Güncelleme Fonksiyonu
    changeAmount(amount){
        this.amount = amount;
    }

    //1.Selected Değerini Alma Fonksiyonu
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    //2.Selected Değerini Alma Fonksiyonu
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}