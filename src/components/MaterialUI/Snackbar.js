import React, { Component } from 'react';
import Styles from './Snackbar.module.scss'

class Snackbar extends Component {
    message = ''

    state = {
        isActive: false,
        out: false
        

    }

    openSnackBar1 = (message = 'Sign in to add charity!') => {
        this.message = message;
        this.setState({ isActive: true, out: true }, () => {
            setTimeout(() => {
                this.setState({ isActive: false, out: false });
            }, 3000);
        });
    }
    openSnackBar2 = (message = 'Successfully added!') => {
        this.message = message;
        this.setState({ isActive: true, out: false }, () => {
            setTimeout(() => {
                this.setState({ isActive: false, out: false });
            }, 3000);
        });
    }

    render() {
        const { isActive, out } = this.state;
        return (
            
                <div>
                    {
                        out
                        ?
                        <div className={isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
                            {this.message}
                        </div>
                        :
                        <div className={isActive ? [Styles.snackbar, Styles.green, Styles.show].join(" ") : Styles.snackbar}>
                            {this.message}
                        </div>


                    }
                    

                </div>
                

            
        )
    }
}

export default Snackbar