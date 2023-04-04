import React, { useState } from 'react';
import FavoriteIcon from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/obama1.jpg';
import Icon2 from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/obama2.jpg';


const Home = () => {
    const [favourite, setFavourite] = useState(true);
    return(  
        <div style={{display:'flex'}}>
            <h1>Vuoi fare soldi? clicca qui!</h1>
            <div onClick={()=> setFavourite(!favourite)}>
           
           
           
            {favourite && (<div> <img src={FavoriteIcon}height={400} width={600} style={{justifyContent:"center"}}/></div>)||(<div> <img src={Icon2}height={400} width={600}/></div>)}
            </div>
        


        </div>
        
    );
};

export default Home;