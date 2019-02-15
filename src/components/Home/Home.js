import React, {Component} from 'react'
import Charities from '../Charities/Charites'
import './Home.scss'
import {Link} from 'react-router-dom'


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }
    render(){
        return(
            <div className='home-container'> 
                Home Component
                <nav>
                    
                        <Link to='/profile/mylist' className="link">+myList</Link> 
                        <Link to='/profile' className="link">profile</Link> 
                        <Link to='/create-account' className="link">create account</Link>  
                    
                </nav>
  
                <Charities/>
            </div>
        )
    }
}

export default Home