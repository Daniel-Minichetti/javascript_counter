// set initial count
let count = 0;

// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// item will not effect the amount of buttons, can be named to anything
btns.forEach(function (item) {
  item.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease'))
    {
        count--;
    }
    else if(styles.contains('increase'))
    {
        count++;
    }
    else
    {
        count = 0;
    }
    if(count > 0)
    {
        value.style.color = 'green';
    }
    if(count < 0)
    {
        value.style.color = 'red';
    }
    if(count === 0)
    {
        value.style.color = "#222"; //black
    }
    value.textContent = count;
  })
});
