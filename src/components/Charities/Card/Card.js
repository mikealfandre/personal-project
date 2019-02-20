import React, { Component } from 'react'
import './Card.scss'


const Card = (props) => {
    const { index, charity, img, name, mission, tagline, category, cause, rating, id, handleAddFn } = props;
    return (
        
       <div>
            
                <div id={`card-${index}`} className="card">
                    <button className='add-button' onClick={() => handleAddFn(id)}>++</button>
                            
                    <img src={img} alt={name} />

                    <div className='info'>
                        
                            <p>{name}</p>
                            <p>{tagline}</p>
                            <p>{category}</p>
                            <p>{cause}</p>
                            <p>{rating}</p>
                            <p>{mission}</p>
                        
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
    // const Card = (props) => {
    
    //         const {handleAddFn} = props
    //         return(
    //             <div className='card'>
    //                 <button onClick={() => handleAddFn(props.charity)}>+</button>
    //                 <img src={props.img} alt='' />
    //                 <p>{props.name}</p>
    //                 <p>{props.mission}</p>
    //                 <p>{props.tagline}</p>
    //                 <p>{props.category}</p>
    //                 <p>{props.cause}</p>
    //                 <p>{props.rating}</p>
    //             </div>
    //         )
        
        
            
        
    // }