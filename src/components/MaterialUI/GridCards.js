import React from 'react';
import './GridCard.scss'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 

const styles = theme => ({
    root: {
        flexGrow: 0,
        width: '300px',
        margin: '25px'
        
    },
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        position: 'relative'
        // width: '50%'
    },
});

function CenteredGrid(props) {
    const { classes, charity, index, removeCharity } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                        <Paper className={classes.paper} key={index}> 
                    <button className='remove-button' onClick={() => removeCharity(charity.ch_id)}>-</button>
                            <div className='info-container-ml'>
                                    <img src={charity.img} className='img-ml' alt='' />
                                <div className='info-ml'>
                                    <div className='card-headers main'>Name</div>
                                        <p className='main'>{charity.name}</p>
                                    <div className='card-headers'>Category</div>
                                        <p>{charity.category}</p>
                                    <div className='card-headers'>Cause</div>
                                        <p>{charity.cause}</p>
                                    <div className='card-headers'>Tagline</div>
                                        <p>{charity.tagline}</p>
                                </div>
                            </div>
                    </Paper>
                    
                </Grid>
                {/* <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid> */}
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);