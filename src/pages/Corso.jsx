import React, { useState } from 'react';
import FavoriteIcon from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/castata.gif';
import Icon2 from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/tense.gif';

const Corso = () => {
    const [favourite, setFavourite] = useState(true);
    return(  
        
        <h1>
            
            <div onClick={()=> setFavourite(!favourite)}>
           
           
           
            {favourite && (<div> <img src={FavoriteIcon}height={400} width={600}/></div>)||(<div> <img src={Icon2}height={400} width={600}/></div>)}
            </div>
        


        </h1>
        
    );
};

export default Corso;