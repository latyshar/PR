import React, { useEffect} from 'react'; 

const defaultValues = {};
function CheckT (values = defaultValues) {
    useEffect(()=> { 
        
        var year = new Date().getFullYear(); 
        var month1 = new Date().getMonth(); 
        var today = new Date(year, month1, 0).getTime(); 
        var now = new Date().getTime(); 
        var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7)); 
      
        if (week % 2) { 
            document.getElementById('myElement1').classList.add('upercase1');  

    } else { 
        document.getElementById('myElement').classList.add('upercase1');
        } 
        },
        [values] 
    )
}

export default CheckT;