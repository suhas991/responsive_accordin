function swap(num){

    console.log('hello log');
    if(document.querySelector(`.details${num}`).style.display === 'block'){
        document.querySelector(`.details${num}`).style.display='none';
        document.querySelector(`#plus${num}`).src="./assets/images/icon-plus.svg";
    }
    else{
        document.querySelector(`.details${num}`).style.display='block';
        document.querySelector(`#plus${num}`).src="./assets/images/icon-minus.svg";
    }
}


document.querySelector('#plus1').addEventListener('click',()=>{
    swap(1);
});

document.querySelector('#plus2').addEventListener('click',()=>{
    swap(2);
});

document.querySelector('#plus3').addEventListener('click',()=>{
    swap(3);
});

document.querySelector('#plus4').addEventListener('click',()=>{
    swap(4);
});




