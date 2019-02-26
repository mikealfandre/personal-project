import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'absolute',
        bottom: '-80px',
        left: '320px',
        zIndex: '1',
        fontFamily: 'gotham',
        fontSize: '12px',
        transform: 'scale(1.6)',
        textShadow: '2px 2px 8px black'
        // color: 'black',
        // background: '#FBD103',
    },

});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Fab color="primary" size='large' className={classes.fab} >
                $10
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);