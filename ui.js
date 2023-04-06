
class UI {
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        //element seçme
        this.outputFirst = document.getElementById("outputFirst");    // 1.span elemanı
        this.outputSecond = document.getElementById("outputSecond");  // 2.span elemanı
        this.outputResult = document.getElementById("outputResult");  // Sonuç spanı
    }

    changeFirstOutput(){
        // 1.selected'a göre 1.span'ı güncelleme
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    changeSecondOutput(){
         // 2.selected'a göre 2.span'ı güncelleme
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent; 
    }

    displayResult(result){
        // Sonuc span'ını aldığımız değere göre güncelleme
        this.outputResult.value = result;
    }
}