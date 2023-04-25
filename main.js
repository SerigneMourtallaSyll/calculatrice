let keys = [...document.querySelectorAll('.bttn')];
let KeysCode = keys.map(element => element.dataset.key);
let screen = document.querySelector('.screen');
//Evenement lors d'un appui sur un bouton
document.addEventListener('keydown', (e) => {
    let val = e.keyCode.toString();
    cal(val);
});

document.addEventListener('click', (e) => {
    let val = e.target.dataset.key;
    cal(val);
})

let cal = (val) => {
    if(KeysCode.includes(val)){
        switch(val){
            case '8':
                screen.textContent = "";
                break;
            case '13':
                let calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                let indexKey = KeysCode.indexOf(val);
                let btn = keys[indexKey];
                screen.textContent += btn.innerHTML;
        }
    }

}

window.addEventListener('error', (e) => {
    alert('Erreur de calcul: ' + e.message);
}); 



