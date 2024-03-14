import React, { useEffect} from 'react'; 
import TimeDisplay from './TimeDisplay';
import { useLocation,} from 'react-router-dom';

const defaultValues = {};
function Check (values = defaultValues) {
    useEffect(()=> { 
        
        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        
        console.log(week);

        if (week % 2 == 0) { 
            
            document.getElementById('myElement2').classList.add('upercase1');
            document.getElementById('myElement4').classList.add('upercase1');
            document.getElementById('myElement6').classList.add('upercase1');
            document.getElementById('myElement8').classList.add('upercase1');  
            document.getElementById('myElement10').classList.add('upercase1');  
            document.getElementById('myElement12').classList.add('upercase1');

      

    } else { 
        document.getElementById('myElement1').classList.add('upercase1');  
        document.getElementById('myElement3').classList.add('upercase1');  
        document.getElementById('myElement5').classList.add('upercase1');
        document.getElementById('myElement7').classList.add('upercase1');  
        document.getElementById('myElement9').classList.add('upercase1');  
        document.getElementById('myElement11').classList.add('upercase1');    
        } 
        },
        [values] 
    )
}

export default Check;