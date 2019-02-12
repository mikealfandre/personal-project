import React, {Component} from 'react'
import Charities from '../Charities/Charites'
import './Home.scss'

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
                    <p>+myList</p>
                    <p>profile</p>
                    <p>create account</p>
                </nav>
                <Charities/>
            </div>
        )
    }
}

export default Home