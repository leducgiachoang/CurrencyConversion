let currency_one = document.querySelector('#currency_one');
let amount_one = document.querySelector('#amount_one');
let currency_two = document.querySelector('#currency_two');
let amount_two = document.querySelector('#amount_two');
let amount_hide = document.querySelector('#amount_hide');
calculate();




let button_swap_supmit = document.querySelector('#button_swap_supmit');

function calculate() {
    
    if (amount_one.value > 0) {

        const keys = [
            'e6155a744d136ce5179c2bfb',
            '379f67b0300d0a8a27366e0c',
            'fc6c9bbd97d17cb0bc1128e1',
            'fc14193d536f59fff0b99c8d'
        ];
        
        let random = Math.floor(Math.random() * keys.length);
        let key = keys[random];

        fetch(`https://v6.exchangerate-api.com/v6/${key}/pair/${currency_one.value}/${currency_two.value}/${amount_one.value}`)
            .then(response => response.json())
            .then(data => {
                if (data.conversion_result) {
                    // console.log(data)
                    const price = x = data.conversion_result.toLocaleString('it-IT', {
                        style: 'currency',
                        currency: data.target_code
                    });
                    amount_two.value = price
                    amount_hide.value = parseFloat(data.conversion_result, 3);
                }

                button_swap_supmit.onclick = function () {
                    amount_one.value = amount_hide.value;
                    const currency_two_sm = currency_two.value;
                    const currency_one_sm = currency_one.value;
                
                    currency_two.value = currency_one_sm;
                    currency_one.value = currency_two_sm;
                
                    calculate();
                }
            })
    }
}
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

