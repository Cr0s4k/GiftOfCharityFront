import React from 'react'
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    greenBtn: {
        backgroundColor: '#3c8e3f',
        '&:hover': {
            backgroundColor: '#0e6e10',
        },
    }
};

class GreenBtn extends React.Component{
    render() {
        return (
            <Button
                {...this.props}
                classes={{root: this.props.classes.greenBtn}}
            />
        );
    }
}

export default withStyles(styles)(GreenBtn);