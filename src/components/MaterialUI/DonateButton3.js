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
        fontFamily: 'roboto',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        transform: 'scale(1.6)',
        textShadow: '1px 1px 2px black',
        // color: 'black',
        // background: '#1197EC',
    },

});

function FloatingActionButtons(props) {
    const { classes, handleDonationFn } = props;
    return (
        <div>
            <Fab color="primary" size='large' className={classes.fab} onClick={() => handleDonationFn(10.00)} >
                $10
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);