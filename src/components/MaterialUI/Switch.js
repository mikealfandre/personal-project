import React from 'react';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <div className='switches'>
                
                <div className='switch-1'>
                    <Switch
                        value={this.props.wants_statement} 
                        checked={this.props.wants_statement}
                        onChange={this.props.handleStToggle}
                        color="primary"
                    />
                    <p>Receive monthly donation statements</p>
                </div>

                <div className='switch-2'>
                    <Switch
                        value={this.props.wants_updates}
                        checked={this.props.wants_updates}
                        onChange={this.props.handleUpToggle}
                        color="primary"
                    />
                    <p>Receive updates on charities I have donated to</p>
                </div>
                

                    

                
                
                    

                
                    
                    
                
            </div>
        );
    }
}

export default Switches;