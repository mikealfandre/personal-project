import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Snackbar from './Snackbar'




const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        zIndex: '1',
        fontFamily: 'roboto',
        fontSize: '40px',
        color: 'black',
        background: '#FBD103',
    },

});

class FloatingActionButtons extends Component{
    snackbarRef = React.createRef();

    constructor(props){
        super(props)
        this.state = { 
            loggedin: false,
            
        }
    }
    _showSnackbarHandlerOUT = () => {
        this.snackbarRef.current.openSnackBar1();
    }
    _showSnackbarHandlerIN = () => {
        this.snackbarRef.current.openSnackBar2();
    }
   
    render(){
        const { classes, charity, handleAddFn, loggedin } = this.props; 
        

        return(
                <div> 
                    {
                        loggedin
                        ?
                        <Fab className={classes.fab} onClick={() => { handleAddFn(charity); this._showSnackbarHandlerIN() }} >
                            +
                        </Fab>
                        :
                        <Fab className={classes.fab} onClick={this._showSnackbarHandlerOUT} >
                           +    
                           
                        </Fab>
                        
                        
                    }
                    
                    <Snackbar ref={this.snackbarRef} />
                    
                </div>

        )
    }
    
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);