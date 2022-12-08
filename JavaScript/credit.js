const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

const moneySliderValue = document.querySelector('.credit__slider-money-value'),
firstPaySliderValue = document.querySelector('.credit__slider-first-pay-value'),
periodSliderValue = document.querySelector('.credit__slider-period-value');

const moneySlider = document.querySelector('.credit__slider-money'),
firstPaySlider = document.querySelector('.credit__slider-first-pay'),
periodSlider = document.querySelector('.credit__slider-period');

const lowLimit = document.querySelector('.credit__slider-limit-low'),
highLimit = document.querySelector('.credit__slider-limit-high');

const creditAmount = document.getElementById('credit-amount'),
monthPay = document.getElementById('month-pay');


function MoneySlider(value){
    if (value > 9999){
        let firstPart = parseInt(value/1000);
        moneySliderValue.innerHTML = firstPart + " 000 ₽";
        lowLimit.innerHTML = firstPart*0.21 + " 000 ₽";
        highLimit.innerHTML = firstPart*0.99 + " 000 ₽";
        firstPaySliderValue.innerHTML = firstPart*0.21 + " 000 ₽";
    }
    if (value > 999999){
        let firstPart = String(parseInt(value/1000000));
        let secondPart = String(parseInt((value%1000000)/1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        moneySliderValue.innerHTML = firstPart + " " + secondPart  + " 000 ₽";

        let firstPartLow = parseInt(value*0.21/1000000);
        let secondPartLow = String(parseInt((value*0.21%1000000)/1000));
        if (firstPartLow == 0){
            lowLimit.innerHTML = secondPartLow + " 000 ₽";
            firstPaySliderValue.innerHTML = secondPartLow + " 000 ₽";
        }
        else{
            if (secondPartLow == 0){
                secondPartLow += "00";
            }
            if (secondPartLow < 10){
                secondPartLow = "00" + secondPartLow;
            }
            if (secondPartLow > 9 && secondPartLow < 100){
                secondPartLow = "0" + secondPartLow;
            }
            firstPaySliderValue.innerHTML = firstPartLow + " " + secondPartLow + " 000 ₽";
            lowLimit.innerHTML = firstPartLow + " " + secondPartLow + " 000 ₽";
        }

        let firstPartHigh = parseInt(value*0.99/1000000);
        let secondPartHigh = String(parseInt((value*0.99%1000000)/1000));
        if (firstPartHigh == 0){
            highLimit.innerHTML = secondPartHigh + " 000 ₽";
        }
        else{
            if (secondPartHigh == 0){
                secondPartHigh += "00";
            }
            if (secondPartHigh < 10){
                secondPartHigh = "00" + secondPartHigh;
            }
            if (secondPartHigh > 9 && secondPartHigh < 100){
                secondPartHigh = "0" + secondPartHigh;
            }
            highLimit.innerHTML = firstPartHigh + " " + secondPartHigh + " 000 ₽";
        }
    }
    firstPaySlider.setAttribute('min', value*0.21);
    firstPaySlider.setAttribute('max', value*0.99);
    firstPaySlider.setAttribute('value', firstPaySlider.getAttribute('min'));
    moneySlider.setAttribute('value', value);

    let creditMoney = value - firstPaySlider.getAttribute('value');
    if (creditMoney > 9999){
        let firstPart = parseInt(creditMoney/1000);
        creditAmount.innerHTML = firstPart + " 000 ₽";
    }
    if (creditMoney > 999999){
        let firstPart = String(parseInt(creditMoney/1000000));
        let secondPart = String(parseInt((creditMoney%1000000)/1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        creditAmount.innerHTML = firstPart + " " + secondPart  + " 000 ₽";
    }
    
    let monthPercent = 12/(100*12);
    let monthAmount = periodSlider.getAttribute('value');
    let monthMoney = Math.round(creditMoney * (monthPercent)/(1 - Math.pow((1 + monthPercent), -monthAmount)));
    
    if (monthMoney > 1000){
        let firstPart = parseInt(monthMoney/1000);
        let secondPart = String(parseInt(monthMoney%1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        monthPay.innerHTML = firstPart + " " + secondPart + " ₽";
    }
    else{
        monthPay.innerHTML = monthMoney + " ₽";
    }
}

function FirstPaySlider(value){
    if (value > 9999){
        let firstPart = parseInt(value/1000);
        firstPaySliderValue.innerHTML = firstPart + " 000 ₽"
    }
    if (value > 999999){
        let firstPart = String(parseInt(value/1000000));
        let secondPart = String(parseInt((value%1000000)/1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        firstPaySliderValue.innerHTML = firstPart + " " + secondPart + " 000 ₽";
    }
    firstPaySlider.setAttribute('value', value);

    let creditMoney = moneySlider.getAttribute('value') - value;
    if (creditMoney > 9999){
        let firstPart = parseInt(creditMoney/1000);
        creditAmount.innerHTML = firstPart + " 000 ₽";
    }
    if (creditMoney > 999999){
        let firstPart = String(parseInt(creditMoney/1000000));
        let secondPart = String(parseInt((creditMoney%1000000)/1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        creditAmount.innerHTML = firstPart + " " + secondPart  + " 000 ₽";
    }

    let monthPercent = 12/(100*12);
    let monthAmount = periodSlider.getAttribute('value');
    let monthMoney = Math.round(creditMoney * (monthPercent)/(1 - Math.pow((1 + monthPercent), -monthAmount)));
        
    if (monthMoney > 1000){
        let firstPart = parseInt(monthMoney/1000);
        let secondPart = String(parseInt(monthMoney%1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        monthPay.innerHTML = firstPart + " " + secondPart + " ₽";
    }
    else{
        monthPay.innerHTML = monthMoney + " ₽";
    }
}

function PeriodSlider(value){
    periodSliderValue.innerHTML = value + " месяцев";
    periodSlider.setAttribute('value', value);

    let creditMoney = moneySlider.getAttribute('value') - firstPaySlider.getAttribute('value');
    let monthPercent = 12/(100*12);
    let monthAmount = value;
    let monthMoney = Math.round(creditMoney * (monthPercent)/(1 - Math.pow((1 + monthPercent), -monthAmount)));
    
    if (monthMoney > 1000){
        let firstPart = parseInt(monthMoney/1000);
        let secondPart = String(parseInt(monthMoney%1000));
        if (secondPart == 0){
            secondPart += "00";
        }
        if (secondPart < 10){
            secondPart = "00" + secondPart;
        }
        if (secondPart > 9 && secondPart < 100){
            secondPart = "0" + secondPart;
        }
        monthPay.innerHTML = firstPart + " " + secondPart + " ₽";
    }
    else{
        monthPay.innerHTML = monthMoney + " ₽";
    }
}

