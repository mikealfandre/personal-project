import React, {Component} from 'react'
import Charities from '../Charities/Charites'
import './Home.scss'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateUser} from './../../Ducks/reducer'
import axios from 'axios'


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
            email: '',
            password: '',
            loggedin: false
        }
    }
    componentDidMount(){
        const {giveuser_id} = this.props
        if(giveuser_id){
            console.log('ID found, success')
            // this.props.history.push('/private') 
        }else{
            axios.get('/auth/user')
                .then((res) => {
                    this.props.updateUser(res.data)
                    // this.props.history.push('/private')
                })
                .catch(err => {
                    console.log('No user Found', err)
                    this.setState({
                        loggedin: false 
                    })
                })
        }

    }

    register = () => {
        const {email, password} = this.state
        axios.post('/auth/register', {email, password})
            .then((res) => {
                console.log('register', res.data)
                this.props.updateUser(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    login = () => {
        const {email, password} = this.state
        axios.post('/auth/login', {email, password})
            .then((res) => {
                console.log('login',res.data)
                this.props.updateUser(res.data) 
            })
            
    }
    handleInput = (prop, value) => {
        this.setState({
            [prop]: value
        })
    }
    render(){
        return(
            <div className='home-container'> 

            <input value={this.state.email} onChange={(e) => this.handleInput('email', e.target.value)} placeholder='email' />
            <input value={this.state.password} onChange={(e) => this.handleInput('password', e.target.value)} placeholder='password' />
            <button onClick={this.register}>register</button>
            <button onClick={this.login}>login</button>
            
            <div className='top-bar'>
                <div className='logo'><span>+</span>GIVEWYSE<span className='dot'>.</span></div>
                
                <nav>                      
                    <Link to='/profile/mylist' className="link"><span>+</span>myList</Link> 
                    <Link to='/profile' className="link">profile</Link> 
                    <Link to='/create-account' className="link">create account</Link>                         
                </nav>
            </div>
                
  
                <Charities/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        giveuser_id: state.giveuser_id
    }
}

export default connect(mapStateToProps, {updateUser})(Home)