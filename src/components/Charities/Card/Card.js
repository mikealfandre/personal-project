import React, {Component} from 'react'
import './Card.scss'
import FabButton from './../../MaterialUI/FabButton'
import { connect } from 'react-redux';


class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        this.setState({
            giveuser_id: this.props.giveuser_id
        })
        console.log('Card Comp State', this.state.giveuser_id) 
    }
    render(){
        const { charity, index, img, name, mission, tagline, category, cause, rating, handleAddFn, loggedin } = this.props;  
        return(
        <div>
             
                 <div id={`card-${index}`} className="card">
                     {/* <button className='add-button' onClick={() => handleAddFn(charity)}>++</button> */}
                 
                     <FabButton handleAddFn={handleAddFn} charity={charity} loggedin={loggedin}/>
       
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
}

const mapStateToProps = (state) => {
    const {giveuser_id} = state
    return{
        giveuser_id
    }
}


export default connect(mapStateToProps)(Card)
   