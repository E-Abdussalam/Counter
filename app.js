//set initial count
let count = 0;

//select values and buutons
const value = document.getElementById('value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(item){
        //get the elements of button by class name
        const styles = item.target.classList;
        if(styles.contains('decrease')){
            count--; 
        }
        else if (styles.contains('reset')){
            count = 0;
        } 
        else if (styles.contains('increase')){
            count++;   
        }
       if(count > 0){
           value.style.color = 'blue';
       }
        if (count < 0){
           value.style.color = 'red';
       }
       if(count === 0) {
           value.style.color = '#222'
       }
        console.log(item.target);
        value.textContent = count;
    });
});

