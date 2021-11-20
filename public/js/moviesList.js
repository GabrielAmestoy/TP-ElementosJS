let cuerpo = document.querySelector('body');

let h1 = document.querySelector('h1');
h1.style.color = '#ffffff';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px';


h1.innerText += 'LISTADO DE PELÍCULAS';
var result = confirm('¿Desea modo oscuro?')
if(result == true){
    console.log("modo oscuro activado!")
    cuerpo.style.backgroundColor = '#7f7f7f';
    cuerpo.classList.add('fondoMoviesList');
}