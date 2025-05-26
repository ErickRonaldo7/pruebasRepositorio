

const apiUrl = 'https://rickandmortyapi.com/api/character'


function makeCard(character){

    

    const {name, status, image, gender}= character;
    const cardsContainer = document.querySelector('.cardContainer');
    cardsContainer.classList.add('contenedortarjetas');

    const Characterimagen = document.createElement('img');
    Characterimagen.src = image;
    Characterimagen.classList.add('imagenes');



    const title = document.createElement('h1');
    title.textContent = name;
    title.classList.add('nombre');

    const titleGender = document.createElement('h2');
    titleGender.textContent = gender;
    titleGender.classList.add('genero');
    

    const CharacterStatus = document.createElement('p');
    CharacterStatus.textContent = status;
    CharacterStatus.classList.add('estado');
    //subtitulo
    const subtituloEstado = document.createElement('h2');
    subtituloEstado.textContent = 'Estado del personaje: '; // Puedes cambiar este texto
    subtituloEstado.classList.add('subtitulo');

    const subtituloGenero = document.createElement('h2');
    subtituloGenero.textContent = 'Genero:'; // Puedes cambiar este texto
    subtituloGenero.classList.add('subtitulo');

    const contenido = document.createElement('div');
    contenido.classList.add('contenido');

    contenido.appendChild(title);
   contenido.appendChild(subtituloEstado);
    contenido.appendChild(CharacterStatus);
    contenido.appendChild(subtituloGenero);
   contenido.appendChild(titleGender);


    const card = document.createElement('div');
    card.classList.add('card');
  

    card.appendChild(Characterimagen);
    card.appendChild(contenido);
    cardsContainer.appendChild(card);

   
}



async function obtenerCaracteres(){

    try {

        const respuesta = await fetch(apiUrl);
        const {results}  = await respuesta.json();
        console.log(results);
        

        for (let i = 0; i < 6; i++) {
            makeCard(results[i]); 
            
           
        }


    }catch(error) {
       
    }   
}

obtenerCaracteres(); 