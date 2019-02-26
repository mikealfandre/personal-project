import React from 'react';
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

function FloatingActionButtons(props) {
    const { classes, charity, handleAddFn } = props;
    return (
        <div>
            <Fab color="inherit" aria-label="Add" hover className={classes.fab} onClick={() => handleAddFn(charity)} >
                +
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);