import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButtons from '../MaterialUI/IconButtons'
import './TextArea.scss'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        color: 'white'
    },
    input: {
        margin: theme.spacing.unit,
        color: 'white'
    },
});

function Inputs(props) {
    const { classes, email, editing, toggleChange, cancelEmail, handleEmailChange } = props;
    return (
        <div className={classes.container}>
            {
                editing
                    ?
                    <div className='input-section'>
                        <Input
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)} 
                            className={classes.input}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />

                        <IconButtons editing={editing} toggleChange={toggleChange} cancelEmail={cancelEmail} />

                        
                        {/* <button onClick={() => toggleChange()}>update</button>
                        <button onClick={() => { cancelEmail(); toggleChange() }}>cancel</button> */}
                    </div>
                    :
                    <div className='input-section'>
                        <Input
                            value={email}
                            className={classes.input}
                            disabled
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        
                        <IconButtons editing={editing} toggleChange={toggleChange} cancelEmail={cancelEmail} />
                        {/* <button onClick={() => toggleChange()} >change</button> */}
                    </div>
            }

   
        </div>
    );
}

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);