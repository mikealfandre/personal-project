import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';



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
                        
                        
                        <Fab className={classes.fab} >
                           +     
                        </Fab>
                        


                    }
                </div>

        )
    }
    
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);