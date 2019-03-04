import React, {Component} from 'react'
import Charities from '../Charities/Charites'
import './Home.scss'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateUser} from './../../Ducks/reducer'
import axios from 'axios'
import AppBarMenu from '../MaterialUI/AppBarMenu'
import Modal from '../MaterialUI/Modal'



class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
            email: '',
            password: '',
            loggedin: false,
            open: false,
            
        }
    }
    componentDidMount(){
        const {giveuser_id} = this.props
        if(giveuser_id){
            this.setState({
                loggedin: true
            })
            // this.props.history.push('/private') 
        }else{
            axios.get('/auth/user')
                .then((res) => {
                    this.props.updateUser(res.data)
                    // this.props.history.push('/private')
                })
                .catch(err => {
                    this.setState({
                        loggedin: false 
                    })
                })
        }

    }
   
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

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
                this.setState({
                    loggedin: true
                })
            })
            
    }
    handleInput = (prop, value) => {
        console.log(value)
        this.setState({
            [prop]: value
        })
    }
    render(){
        
        return(
            <div className='home-container'> 

            <AppBarMenu/> 
            
            
            
            {/* <input value={this.state.email} onChange={(e) => this.handleInput('email', e.target.value)} placeholder='email' /> */}
            {/* <input value={this.state.password} onChange={(e) => this.handleInput('password', e.target.value)} placeholder='password' /> */}
            {/* <button onClick={this.register}>register</button>
            <button onClick={this.login}>login</button> */}
            
            <div className='top-bar'>
                <div className='logo'><span>+</span>GIVEWYSE<span className='dot'>.</span></div>
                
                <nav> 
                    {
                        this.state.loggedin
                        ?
                        <div>
                                <Link to='/profile/mylist' className="link"><span>+</span>myList</Link>  
                                <Link to='/profile/preferences' className="link">account</Link> 
                        </div>
                        :
                        <div>
                            <button onClick={this.handleOpen} className="create-account-button">create account</button> 
                            <Modal open={this.state.open} handleClose={this.handleClose} email={this.state.email} handleInput={this.handleInput} password={this.state.password} register={this.register} login={this.login}>
                                                       
                            </Modal>

                        </div>


                    }                     
                </nav>
            </div>
                <p className='discover-header'>Discover <span>&</span> donate to charities</p>
                <button onClick={this.handleOpen} className="create-account-button-mobile">create account</button>
                <Modal open={this.state.open} handleClose={this.handleClose} email={this.state.email} handleInput={this.handleInput} password={this.state.password} register={this.register} login={this.login}>

                </Modal>
                
  
                <Charities loggedin={this.state.loggedin}/> 
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