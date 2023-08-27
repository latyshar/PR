import React, { useEffect} from 'react'; 

const defaultValues = {};
function Check (values = defaultValues) {
    useEffect(()=> { 
        var div;
        var year = new Date().getFullYear(); 
        var month1 = new Date().getMonth(); 
        var today = new Date(year, month1, 0).getTime(); 
        var now = new Date().getTime(); 
        var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7)); 
        console.log(week);
        if (week % 2) { 
        document.getElementById("myElement").style.color = "#950740";

    } else { 
        document.getElementById("myElement").style.color = "#950740";
     
        } 
        },
        [values] 
    )
}

export default Check;