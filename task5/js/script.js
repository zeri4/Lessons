let menu = document.querySelector('.menu'),
    addLi = document.createElement('li'),
    idTitle = document.querySelector('#title'),
    wrapper = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    prm = document.querySelector('#prompt');
    

    addLi.classList.add('menu-item');
    addLi.textContent = 'Пятый пункт';
    menu.appendChild(addLi);

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";
    idTitle.textContent = 'Мы продаем только подлинную технику Apple';
    wrapper[1].removeChild(adv);

    function deviceRelation () {
        
        prm.textContent = prompt("Какое у Вас отношение к технике Apple","");
    }
    
    deviceRelation();