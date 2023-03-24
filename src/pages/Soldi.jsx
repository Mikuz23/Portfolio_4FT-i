import React, { useState } from 'react';
import FavoriteIcon from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/regalo.webp';
import Icon2 from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/sorpresa.gif';

const Soldi = () => {
        
        const [favourite, setFavourite] = useState(true);
    return(  
        
        <h1>
            
            <div onClick={()=> setFavourite(!favourite)}>
           
           
           
            {favourite && (<div>c'è un regalo per te! <img src={FavoriteIcon}height={400} width={600}/></div>)||((<div>ludopatia    <img src={Icon2}height={400} width={600}/></div>) )}
            </div>
        


        </h1>
        
    );
    
};

export default Soldi;