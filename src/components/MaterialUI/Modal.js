import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Login from '../MaterialUI/Login'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle(theme) {
    const top = 5;
    const left = 35;
    // const top = 50 + rand();
    // const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        left: '15%',
        width: '30%',
        // width: theme.spacing.unit * 50,
        // height: theme.spacing.unit * 70,
        // backgroundColor: theme.palette.background.paper,
        background: 'transparent',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing.unit * 4,
        padding: '0',
        outline: 'none',
        [theme.breakpoints.up('xs')]: {
            // marginLeft: theme.spacing.unit * 3,
            // width: 'auto',
            left: '1%',
            // right: '1%'
        }
    },
    
});

class SimpleModal extends React.Component {
    

    render() {
        const { classes, open, handleClose, email, password, handleInput, register, login } = this.props;

        return (
            <div>
                
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={classes.paper} style={getModalStyle()} >
                        <Login email={email} handleInput={handleInput} handleClose={handleClose} password={password} register={register} login={login}/> 
                        <SimpleModalWrapped />
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;