import React, { useState } from 'react';
import FavoriteIcon from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/obama1.jpg';
import Icon2 from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/obama2.jpg';


const Home = () => {
    const [favourite, setFavourite] = useState(true);
    return(  
        <h1>
            <div>Vuoi fare soldi? clicca qui!</div>
            <div onClick={()=> setFavourite(!favourite)}>
           
           
           
            {favourite && (<div> <img src={FavoriteIcon}height={400} width={600}/></div>)||(<div> <img src={Icon2}height={400} width={600}/></div>)}
            </div>
        


        </h1>
        
    );
};

export default Home;