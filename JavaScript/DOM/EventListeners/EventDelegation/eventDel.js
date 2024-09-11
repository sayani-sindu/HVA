// document.querySelector('#football').addEventListener('click', (e)=>{
//     console.log('football is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector('#basketball').addEventListener('click', (e)=>{
//     console.log('basketball is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector('#boxing').addEventListener('click', (e)=>{
//     console.log('boxing is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector('#tennis').addEventListener('click', (e)=>{
//     console.log('tennis is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector('#golf').addEventListener('click', (e)=>{
//     console.log('golf is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

//we can build the same with small ode using event delegation

// It allows userts to append a SINGLE event listener to a parent element that adds it to all of its present and futire descendents that match a selector

// matches() =>   check if elemnt matches a specific selector or not
document.querySelector('#sports').addEventListener('click', (e)=>{
    console.log(e.target.getAttribute('id') + ' is clicked');
    //Bubbling event is formed here

    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

const sports = document.querySelector('#sports');

const newSport = document.createElement('li');
newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);