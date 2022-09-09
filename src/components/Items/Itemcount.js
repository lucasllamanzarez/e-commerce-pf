import React, { useState } from "react";
import { Button, CardActions} from '@mui/material';

//Falta agregar las prop al momento de agregar una BD
let Itemcount = () => {
    let [counter, setcounter] = useState(1)
    const stock= 10

//Variables de Counter
        const handlecountup = () => {
                setcounter(counter + 1)
            }

        const handlecountdown = () => {
                setcounter(counter - 1)
            }

//Condicion para que no tenga numeros negativos ni mas que el stock
    if (counter > stock) {
                    counter = stock
        } else if (counter < 0) {
                counter = 0;
    }   

    return (
        <CardActions>
        
        <Button size="small" color="primary" onClick={handlecountdown}>
          -
        </Button>
        <div>{counter}</div>
        <Button size="small" color="primary" onClick={handlecountup}>
          +
        </Button>
            
        </CardActions>    
        
    )
     
}
       


export default Itemcount;