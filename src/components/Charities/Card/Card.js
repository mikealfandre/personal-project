import React, {Component} from 'react'
import './Card.scss'
import FabButton from './../../MaterialUI/FabButton'
import { connect } from 'react-redux';


class Card extends Component{
    
    
    render(){
        const { charity, index, img, name, mission, tagline, category, cause, handleAddFn, loggedin } = this.props;  
        return(
        <div>
             
                 <div id={`card-${index}`} className="card">
                     {/* <button className='add-button' onClick={() => handleAddFn(charity)}>++</button> */}
                 
                     <FabButton handleAddFn={handleAddFn} charity={charity} loggedin={loggedin}/>
       
                     <img src={img} alt='' />
    
                     <div className='info-container'> 
                         
                         <div className='info'>
                            <p className='title'>{name}</p>
                                {/* <p>{name}</p> */}
                            <p className='sub'>Tagline:  <span>{tagline}</span></p>  
                            <p className='sub'>Category:  <span>{category}</span></p>  
                            <p className='sub'>Cause:  <span>{cause}</span></p>  
                            <p className='sub'>Mission:  <span className='mission'>{mission}</span></p>  
                         </div>
                     </div>
                 </div> 
        </div> 

        )
    }
}

const mapStateToProps = (state) => {
    const {giveuser_id} = state
    return{
        giveuser_id
    }
}


export default connect(mapStateToProps)(Card)
   