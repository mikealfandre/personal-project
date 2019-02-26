import React from 'react'
import './Card.scss'
import FabButton from './../../MaterialUI/FabButton'









const Card = (props) => {
    
    const { charity, index, img, name, mission, tagline, category, cause, rating, handleAddFn } = props;
    return (
        
       <div>
            
                <div id={`card-${index}`} className="card">
                    {/* <button className='add-button' onClick={() => handleAddFn(charity)}>++</button> */}
                <FabButton handleAddFn={handleAddFn} charity={charity}/>
                
                    
                    
                
                            
                    <img src={img} alt='' />

                    <div className='info-container'> 
                        
                        <div className='info'>
                            <p>{name}</p>
                            <p>{tagline}</p>
                            <p>{category}</p>
                            <p>{cause}</p>
                            <p>{rating}</p>
                            <p className='mission'>{mission}</p>
                        </div>
                        
                        
                    </div>




                </div> 

                        
                            
    

       </div> 
        
    )
}




export default Card
   