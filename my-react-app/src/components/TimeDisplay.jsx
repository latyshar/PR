import React, { useEffect, useState } from 'react'; 

var div;
var mom;
var mom2;
function TimeDisplay() { 
const [currentTime, setCurrentTime] = useState(''); 

useEffect(() => { 
const intervalId = setInterval(() => { 
const date = new Date(); 



// Получение информации о времени и дате 
let weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' }); 
const month = date.toLocaleDateString('ru-RU', { month: 'long' }); 
const day = date.getDate(); 


// Форматирование вывода времени 
const formattedTime = `Сегодня ${weekday}, ${month}, ${day} число!`; 


if (weekday === "понедельник") {
    div = document.getElementById("timeText1");
    div.style.display = '';
    mom = document.getElementById("timeText11");
    mom.style.display = '';
    mom2 = document.getElementById("timeText12");
    mom2.style.display = '';
}

else if (weekday ==="вторник") {
    div = document.getElementById("timeText2");
    div.style.display = '';
    mom = document.getElementById("timeText21");
    mom.style.display = '';
    mom2 = document.getElementById("timeText22");
    mom2.style.display = '';
}

else if (weekday === "среда") {
    div = document.getElementById("timeText3");
    div.style.display = '';
    mom = document.getElementById("timeText31");
    mom.style.display = '';
    mom2 = document.getElementById("timeText32");
    mom2.style.display = '';
}

else if (weekday === "четверг") {
    div = document.getElementById("timeText4");
    div.style.display = '';
    mom = document.getElementById("timeText41");
    mom.style.display = '';
    mom2 = document.getElementById("timeText42");
    mom2.style.display = '';}

else if (weekday === "пятница") {
    div = document.getElementById("timeText5");
    div.style.display = '';
    mom = document.getElementById("timeText51");
    mom.style.display = '';
    mom2 = document.getElementById("timeText52");
    mom2.style.display = '';}

else if (weekday === "суббота") {
    div = document.getElementById("timeText6");
    div.style.display = '';
    mom = document.getElementById("timeText61");
    mom.style.display = '';
    mom2 = document.getElementById("timeText62");
    mom2.style.display = '';

}

else if (weekday === "воскресенье") {
    div = document.getElementById("timeText7");
    div.style.display = 'block';}


setCurrentTime(formattedTime); 
}, 1000); 

// Очистка интервала при размонтировании компонента 
return () => clearInterval(intervalId); 
}, []); 




return <div className='upercase2'>{currentTime}</div>; 


}; 





export default TimeDisplay; 
