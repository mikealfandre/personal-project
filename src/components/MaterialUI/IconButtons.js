import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/DoneRounded';
import CancelIcon from '@material-ui/icons/CancelRounded';


const styles = theme => ({
    button: {
        // margin: theme.spacing.unit,
        margin: '0px',
        padding: '0px',
    },
    input: {
        display: 'none',
    },
});

function IconButtons(props) {
    const { classes, editing, toggleChange, cancelEmail } = props;
    return (
        <div>
            {
                editing
                    ?
                    <div>
                        <IconButton className={classes.button} onClick={() => { cancelEmail(); toggleChange() }}>
                            <CancelIcon />
                        </IconButton>
                        <IconButton className={classes.button} onClick={() => toggleChange()}>
                            <DoneIcon />
                        </IconButton>
                    </div>
                    :
                    <div>
                        <IconButton className={classes.button} onClick={() => toggleChange()}>
                            <EditIcon/>
                        </IconButton>
                    </div>







            }
            
            
            {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" className={classes.button} component="span">
                    <PhotoCamera />
                </IconButton>
            </label> */}
        </div>
    );
}

IconButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);