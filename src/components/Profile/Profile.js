import React, { Component } from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'
import profileroutes from '../../profileroutes'
import ExitIconButton from '../MaterialUI/ExitIconButton'
import AppBarMenu from '../MaterialUI/AppBarMenu'



class Profile extends Component {
    
    render() {
        return (
            <div className='profile-container'>
                <AppBarMenu/>
                <div className='exit-button'>
                    <Link to='/' className='link'><ExitIconButton/></Link>
                </div>
                <nav>
                    <ul className='profile-ul fade'>

                        <Link to='/profile/preferences' className='link'><li>account</li></Link>
                        <Link to='/profile/mylist' className='link'><li>myList</li></Link>
                        <Link to='/profile/donation-history' className='link'><li>donation history</li></Link>
                        
                    </ul>
                </nav>
                
                {profileroutes}
                
                
            </div>
        )
    }
}

export default Profile