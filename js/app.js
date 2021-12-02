const btn = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');
const calendarDay = 24;

btn.addEventListener('click', (event) =>{

    for(let i = 0; i < calendarDay; i++){
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('image');
        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');

        calendarDoor.style.gridArea = `day${i + 1}`;
        calendarDoorText.innerHTML = i + 1;
        
        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;

        calendarDoorText.addEventListener('click', (event) =>{
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            event.target.style.opacity = 0;
            event.target.style.backgroundColor = '#333';
        })
    }

    event.preventDefault();
})