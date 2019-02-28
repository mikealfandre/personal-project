import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/ClearRounded';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        transform: 'scale(1.3)',
        [theme.breakpoints.up('xs')]: {
            margin: '0px',
        }
    },
    input: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            margin: '00px',
        }
    },
    
});

function IconButtons(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton className={classes.button} aria-label="Delete">
                <ClearIcon /> 
            </IconButton> 
                
        </div>
    );
}

IconButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);