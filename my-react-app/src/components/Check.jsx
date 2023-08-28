import React, { useEffect} from 'react'; 
import TimeDisplay from './TimeDisplay';
import { useLocation,} from 'react-router-dom';

const defaultValues = {};
function Check (values = defaultValues) {
    useEffect(()=> { 
        
        var year = new Date().getFullYear(); 
        var month1 = new Date().getMonth(); 
        var today = new Date(year, month1, 0).getTime(); 
        var now = new Date().getTime(); 
        var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7)); 
        console.log(week);
        if (week % 2) { 
            document.getElementById('myElement1').classList.add('upercase1');  
            document.getElementById('myElement3').classList.add('upercase1');  
            document.getElementById('myElement5').classList.add('upercase1');
            document.getElementById('myElement7').classList.add('upercase1');  
            document.getElementById('myElement9').classList.add('upercase1');  
            document.getElementById('myElement11').classList.add('upercase1');    


           

    } else { 
        document.getElementById('myElement2').classList.add('upercase1');
        document.getElementById('myElement4').classList.add('upercase1');
        document.getElementById('myElement6').classList.add('upercase1');
        document.getElementById('myElement8').classList.add('upercase1');  
        document.getElementById('myElement10').classList.add('upercase1');  
        document.getElementById('myElement12').classList.add('upercase1');
             
        } 
        },
        [values] 
    )
}

export default Check;