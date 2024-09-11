//variables

const accordion = document.getElementsByClassName('content-container');

for (const container of accordion) {
    container.addEventListener('click', function() {
       
        this.classList.toggle('active');
    });
}
