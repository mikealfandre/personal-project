import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        fontFamily: 'roboto',
        letterSpacing: '1px'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function ButtonSizes(props) {
    const { classes, updatePreferences } = props;
    return (
        <div>
            
            <div>
                {/* <Button variant="contained" size="small" color="primary" className={classes.margin}>
                    Small
        </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Medium
        </Button> */}
                <Button variant="contained" size="large" color="primary" onClick={() => updatePreferences()} className={classes.margin}>
                    Save Preferences
                </Button>
            </div>
            
        </div>
    );
}

ButtonSizes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);