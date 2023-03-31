import React       from 'react';
import slot from 'C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/slot.png';
const Slot = () => {

    return (
        <div className='slotMachine'>
            <div className='set1'
            style={{
                marginLeft:"250px"
            }}
            >
                 <img src={slot} className="slot" height ={300} width={250}/>  
                 
            </div>
            <div className='set2'
            style={{
                marginLeft:"80px",
                marginRight:"80px"
                
            }}> 
                <img src={slot} className="slot" height ={300} width={250}/>  
            </div>
            <div className='set3'
            style={{
                marginRight:"250px"
            }}>  
                <img src={slot} className="slot" height ={300} width={250}/> 
            </div>
        </div>

    );

};

export default Slot;