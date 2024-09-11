//Variables

let openBtn = document.getElementById('open-btn');

let modalContainer = document.getElementById('modal-container');

let closeBtn = document.getElementById('close-btn');

//Event listeners

const showModal = () =>{
    modalContainer.style.display = 'block';
}

openBtn.addEventListener('click', showModal);

const closeModal = () => {
    modalContainer.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

//window object- highest object in DOM tree

window.addEventListener('click', (e)=>{
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
})