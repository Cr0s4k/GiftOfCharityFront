import React from 'react'
import {LinearProgress} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    linearColorPrimary: {
        backgroundColor: "#ccffcd"
    },
    linearBarColorPrimary: {
        backgroundColor: "#0e6e10"
    },
    root: {
        height: 7
    }
};

class GreenLinearProgress extends React.Component{
    render() {
        return (
            <LinearProgress
                {...this.props}
                classes={{
                    root: this.props.classes.root,
                    colorPrimary: this.props.classes.linearColorPrimary,
                    barColorPrimary: this.props.classes.linearBarColorPrimary
                }}
            />
        );
    }
}

export default withStyles(styles)(GreenLinearProgress);