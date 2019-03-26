import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styleTitle = {
    color: 'white', 
    fontSize: '16px',
    fontFamily: 'roboto',
    fontWeight: 'bold', 
    padding: '0px'
    
};
const style = {
    color: 'white', 
    fontSize: '15px',
    fontFamily: 'roboto',
    fontWeight: 'Regular',
    padding: '0px'
    
};

const styles = theme => ({
    
    table: {
        marginTop: '30px',
        minWidth: '250px',
        overflowX: 'auto',
        fontSize: '24px',
        marginRight: '0px',
        padding: '0px',
        marginBottom: '100px',
        // fontFamily: 'robotoExLight',
        [theme.breakpoints.up('xs')]: {
            marginTop: '5px',
            maxWidth: '275px',
            
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '50px',
            minWidth: '500px'
        },
        [theme.breakpoints.up('md')]: {
            
            minWidth: '600px'
        },
        [theme.breakpoints.up('lg')]: {
            
            minWidth: '900px'
        }
        
    },
});



function SimpleTable(props) {
    const { classes, donations } = props;

    return (
        // <Paper className={classes.root}>
        <div >
            <Table className={classes.table}>
                <TableHead >
                    <TableRow>
                        <TableCell style={styleTitle} >Charity Name</TableCell>
                        <TableCell style={styleTitle} align="right">Amount</TableCell>
                        <TableCell style={styleTitle} align="right">Date</TableCell>
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
