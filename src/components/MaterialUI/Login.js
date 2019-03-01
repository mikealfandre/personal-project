import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit,
        // background: 'black'
    },
    orDiv: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'roboto',
        margin: '0px 10px 0px 10px'
    }
});

class LoginTab extends React.Component {
    render() {
        const { classes, email, password, handleInput, handleClose, register, login } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField value={email} onChange={(e) => handleInput('email', e.target.value)} id="username" label="email" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField value={password} onChange={(e) => handleInput('password', e.target.value)} id="username" label="password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button onClick={register} variant="outlined" color="primary" style={{ textTransform: "none" }}>Create Account</Button>
                        <div className={classes.orDiv} > or </div>
                        <Button onClick={() => {login(); handleClose()}} onClose={handleClose} variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles (styles)(LoginTab);