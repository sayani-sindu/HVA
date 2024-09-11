const button = document.querySelector('.button');

const hidden_content = document.querySelector('.hidden-content');

const revealButton = () =>{
    if(hidden_content.classList.contains('button')){
        hidden_content.classList.remove('button');
        hidden_content.style.display = 'none';
        hidden_content.style.justifyContent = '';
        hidden_content.style.alignItems = '';
        hidden_content.style.textAlign = '';
        button.style.width = ''; 
        button.innerHTML = 'Reveal More'
        // hidden_content.classList.remove('.reveal');
    }
    else{
        hidden_content.classList.add('button');
        button.style.width = '100px';
        hidden_content.style.display = 'flex';
        hidden_content.style.justifyContent = 'center';
        hidden_content.style.alignItems = 'center';
        hidden_content.style.textAlign = 'center';
        button.innerText = 'Reveal Less';
        // hidden_content.classList.add('.reveal');
    }
}

button.addEventListener('click', revealButton);