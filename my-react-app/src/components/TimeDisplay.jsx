import React, { useEffect, useState } from 'react'; 


var div;
var mom;
var mom2;
function TimeDisplay() { 
const [currentTime, setCurrentTime] = useState(''); 

useEffect(() => { 
const intervalId = setInterval(() => { 
const date = new Date(); 


let weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' }); 
const month = date.toLocaleDateString('ru-RU', { month: 'long' }); 
const day = date.getDate(); 

const formattedTime = `Сегодня ${weekday}, ${month} ${day} число!`; 


let now = new Date();
let onejan = new Date(now.getFullYear(), 0, 1);
let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()) / 7);

console.log(week);



if (weekday === "понедельник") {
  
    div = document.getElementById("timeText1");
    div.style.display = '';

if (week % 2 == 0) {   

    mom = document.getElementById("timeText12");
    mom.style.display = '';

} else {       
    mom2 = document.getElementById("timeText11");
    mom2.style.display = '';
    
}}

if (weekday ==="вторник") {
    
    div = document.getElementById("timeText2");
    div.style.display = '';

if (week % 2 == 0) {   

    mom = document.getElementById("timeText22");
    mom.style.display = '';

} else {     
   
    mom2 = document.getElementById("timeText21");
    mom2.style.display = '';
}}

if (weekday === "среда") {
    
    div = document.getElementById("timeText3");
    div.style.display = '';

if (week % 2 == 0) {   
   
    mom = document.getElementById("timeText32");
    mom.style.display = '';}

else {     
  
    mom2 = document.getElementById("timeText31");
    mom2.style.display = '';}}


if (weekday === "четверг") {
  
    div = document.getElementById("timeText4");
    div.style.display = '';

    if (week % 2 == 0) {   
    
        mom = document.getElementById("timeText42");
    mom.style.display = '';

} else {
   
    mom2 = document.getElementById("timeText41");
    mom2.style.display = '';}}

if (weekday === "пятница") {

    div = document.getElementById("timeText5");
    div.style.display = '';

 if (week % 2 == 0) {

    mom2 = document.getElementById("timeText52");
    mom2.style.display = '';

} else {
    
    mom = document.getElementById("timeText51");
    mom.style.display = '';}}

   
if (weekday === "суббота") {
 
    div = document.getElementById("timeText6");
    div.style.display = '';

if (week % 2 == 0) {   
    mom = document.getElementById("timeText62");
    mom.style.display = '';

} else {

    mom2 = document.getElementById("timeText61");
    mom2.style.display = '';}}

if (weekday === "воскресенье") {
    div = document.getElementById("timeText7");
    div.style.display = 'block';} else {};


setCurrentTime(formattedTime); 
}, 1000); 

// Очистка интервала при размонтировании компонента 
return () => clearInterval(intervalId); 
}, []); 




return <div className='upercase2'>{currentTime}</div>; 


}; 





export default TimeDisplay; 
