import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SignInSnackbar from '../MaterialUI/SignInSnackbar'


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        zIndex: '1',
        fontFamily: 'gotham rounded',
        fontSize: '40px',
        color: 'black',
        background: '#FBD103',
    },

});

class FloatingActionButtons extends Component{
    constructor(props){
        super(props)
        this.state = { 
            loggedin: false
        }
    }
    render(){
        const { classes, charity, handleAddFn, loggedin } = this.props;

        return(
                <div> 
                    {
                        loggedin
                        ?
                        <Fab className={classes.fab} onClick={() => handleAddFn(charity)} >
                            +
                        </Fab>
                        :
                        <SignInSnackbar/>
                        
                        // <Fab className={classes.fab} >
                        //     <SignInSnackbar/>
                                
                        // </Fab>
                        


                    }
                </div>

        )
    }
    
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);