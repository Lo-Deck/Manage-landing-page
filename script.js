const btnMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const myForm = document.querySelector('#myForm');
const slide = document.querySelectorAll('.section-testimony');


/*DISPLAY MENU*/

let isClickedMenu = false;

btnMenu.addEventListener('click', () => {

    isClickedMenu = !isClickedMenu;

    if(isClickedMenu){
        menu.style.display = 'block';
        btnMenu.children[0].src =  './images/icon-close.svg';
        document.querySelector('.background-menu').style.display = 'block';
    }
    else{
        menu.style.display = '';
        btnMenu.children[0].src = './images/icon-hamburger.svg';
        document.querySelector('.background-menu').style.display = 'none';
    }

});


/*FORM*/

myForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if(!email.validity.valid){

        document.querySelector('.input').style.border = '0.1rem solid red';
        document.querySelector('.input').style.color = 'red';
        const spanError = document.createElement('span');
        spanError.textContent = `Please insert a valid email`;
        spanError.classList.add('error');

        if( !document.querySelector('.input').nextElementSibling.classList.contains('error') ){
            document.querySelector('.input').insertAdjacentElement('afterend', spanError);            
        }

    }

    else{

        if( document.querySelector('.input').nextElementSibling.classList.contains('error') ){
            document.querySelector('.input').style.border = '';
            document.querySelector('.input').style.color = '#9194A2';
            document.querySelector('.input').nextElementSibling.remove();
        }

    }

});


/*SLIDE*/

const timer = () => {    
    
    let arrayClass = [];

    for(let i = 0; i < slide.length; i++){

        const classToRemove = slide[i].classList[1];  //save class to remove

        if(i === slide.length-1){      // save the class in correct order in array
            arrayClass.unshift(slide[i].classList[1]);
        }
        else{
            arrayClass.push(slide[i].classList[1]);
        }
        
        slide[i].classList.remove(`${classToRemove}`); // remove the class from the element

    }

    let j = 0;

    for(let i = 0; i < slide.length; i++){
        slide[i].classList.add(`${arrayClass[j]}`); 
        j++;
    }

}


setInterval( () => {

    timer();

    for(let i = 0; i < document.querySelectorAll('.link-image').length; i++){

        if(document.querySelectorAll('.link-image')[i].classList.contains('active')){

            document.querySelectorAll('.link-image')[i].classList.remove('active');

            if(i >= document.querySelectorAll('.link-image').length-1){
                document.querySelectorAll('.link-image')[0].classList.add('active');
            }
            else{
                document.querySelectorAll('.link-image')[i].nextElementSibling.classList.add('active'); 
            }

            break;

        }

    }

}, 6000);






