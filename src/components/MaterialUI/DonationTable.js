import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const style = {
    color: 'white', 
    fontSize: '12px',
    fontFamily: 'GothamExLight',
    fontWeight: 'Regular',
    padding: '0px'
    
};

const styles = theme => ({
    root: {
        // width: '100%',
        // width: '300px',
        // marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        background: 'none',
        fontFamily: 'roboto',
        padding: '20px',
        // fontSize: '18px',
        [theme.breakpoints.up('xs')]: {
            // fontSize: '8px',
            maxWidth: '300px',
            margin: '0px'
        },
        [theme.breakpoints.up('sm')]: {
            // fontSize: '12px',
            minWidth: '400px'
        },
        [theme.breakpoints.up('md')]: {
            // fontSize: '24px',
            minWidth: '700px'
        },
        [theme.breakpoints.up('lg')]: {
            // fontSize: '32px',
            minWidth: '1000px'
        },
    },
    table: {
        maxWidth: '300px',
        overflowX: 'auto',
        fontSize: '24px',
        marginRight: '0px',
        // fontFamily: 'GothamExLight',
        [theme.breakpoints.up('xs')]: {
            // fontSize: '8px',
            maxWidth: '300px',
            margin: '0px'
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}


function SimpleTable(props) {
    const { classes, donations } = props;

    return (
        // <Paper className={classes.root}>
        <div style={{maxWidth: '250px', boxSizing: 'border-box'}}>
            <Table className={classes.table}>
                <TableHead style={{marginRight:'0px'}}>
                    <TableRow>
                        <TableCell style={style} >Charity Name</TableCell>
                        <TableCell style={style} align="right">Amount</TableCell>
                        <TableCell style={style} align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {donations.map(donation => (
                        <TableRow key={donation.id}>
                            <TableCell style={style} component="th" scope="row">
                                {donation.charity_name}
                            </TableCell>
                            <TableCell style={style} align="right">${donation.amount}</TableCell>
                            <TableCell style={style} align="right">{donation.date}</TableCell>      
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
        //</Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
