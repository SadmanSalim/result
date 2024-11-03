let roll = document.getElementById('roll');
let button = document.getElementById('sub_btn');
let result = document.getElementsByClassName('result');


button.addEventListener('click', function() {
    let userroll = Number(roll.value); 
    if (userroll >= 80 && userroll <= 100) {
        document.write('GPA: A+');
    } else if (userroll >= 70 && userroll <= 79) {
        document.write('GPA: A');
    } else if (userroll >= 60 && userroll <= 69) {
        document.write('GPA: A-');
    } else if (userroll >= 50 && userroll <= 59) {
        document.write('GPA: B');
    }else if (roll.value === 'marksheet') {
        document.write(result[0].innerHTML);
    }
     else {
        document.write('Fail. Please study harder.'); 
    }


});