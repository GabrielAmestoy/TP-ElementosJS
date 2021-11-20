let main = document.querySelector('main')
let h2 = document.querySelector('h2')
let a = document.querySelector('a')
let p = document.querySelectorAll('p')
let cuerpo = document.querySelector('body')

/*  Agregando estilos  */
h2.style.textTransform = 'uppercase';
a.style.backgroundColor = '#E51B3E';
main.style.display = 'block';
var nombre = prompt('Ingrese su nombre');
if(nombre == null || nombre == ""){
    h2.innerText += ' Invitado';
}else{
    h2.innerText += ' '+ nombre;
}
resultConfirm = confirm(" ¿Desea colocar un fondo de pantalla?")
document.write(resultConfirm)// trae true o false
if(resultConfirm == true){
    cuerpo.classList.add('fondo');
}
for(let i = 0; i< p.length; i++){
    console.log(p[i]);
    if(i%2 == 0){
        p[i].classList.add('destacadoImpar');
    }else{
        p[i].classList.add('destacadoPar');
    }

}

