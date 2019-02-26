import React from 'react'
import './Card.scss'









const Card = (props) => {
    
    const { charity, index, img, name, mission, tagline, category, cause, rating, handleAddFn } = props;
    return (
        
       <div>
            
                <div id={`card-${index}`} className="card">
                    <button className='add-button' onClick={() => handleAddFn(charity)}>++</button>
                    
                    
                
                            
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

                        
                            
                            
                            
                            
                            
                            
                            
                            
                            {/* <div className="details">
                                <span className="index">{index + 1}</span> 
                                <p className="location">
                                    {name}<br /> 
                                    {tagline}
                                </p>
                                <ul className="features">
                                    <li className="icon-bed">{category} <span>bedrooms</span></li> 
                                    <li className="icon-bath">{cause} <span>bathrooms</span></li>
                                    <li className="icon-car">{rating} <span>parking spots</span></li>
                                    <li className="icon-car">{mission} <span>mission</span></li> 
                                </ul>
                                
                            </div> */}

       </div> 
        
    )
}




export default Card
   