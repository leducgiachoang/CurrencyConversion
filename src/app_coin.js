var access_key = '09592653cb4b326102460aa8b4c02a39';
let currency_one2 = document.querySelector('#currency_one2');
let currency_two2 = document.querySelector('#currency_two2');
let amount_one2 = document.querySelector('#amount_one2');
let amount_two2 = document.querySelector('#amount_two2');
let currency_one2_data = document.querySelector('#currency_one2_data');
let currency_two2_data = document.querySelector('#currency_two2_data');
let button_swap_supmit2 = document.querySelector('#button_swap_supmit2');


function calculate() {
  if (amount_one.value > 0) {

    fetch('https://ziutube.shop-aothun.xyz/api/bitcoin/' + currency_one2.value + '/' + currency_two2.value + '/' + amount_one2.value)
      .then(response => response.json())
      .then(data => {

        var data = data.data;
        // console.log(data);
        if (data.quote) {
          // console.log(data)
          var pride = data.quote;
          for (const x in pride) {
            // console.log(pride[x].price)
            var lll = pride[x].price

            const price = lll.toLocaleString('it-IT', {
              style: 'currency',
              currency: x
          });
            
            amount_two2.value = price
            amount_hide2.value = parseFloat(pride[x].price, 5);
          }
        }


      });
  }
}

calculate();

button_swap_supmit2.onclick = function () {

  calculate();
}


currency_one2.addEventListener('change', calculate);
currency_two2.addEventListener('change', calculate);
amount_one2.addEventListener('input', calculate);
amount_two2.addEventListener('input', calculate);