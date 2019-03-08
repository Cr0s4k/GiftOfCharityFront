import React from 'react'
import withStyles from "@material-ui/core/es/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = {
    cssLabel: {
        '&$cssFocused': {
            color: "#0e6e10",
        },
        '&$cssError': {
            color: "#f44336"
        }
    },
    cssFocused: {},
    cssError: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: "#0e6e10",
        },
    },
};

class GreenTextField extends React.Component {
    render() {
        let props = {
            ...this.props,
            classes: undefined
        };
        return (
            <TextField
                {...props}
                InputLabelProps={{
                    classes: {
                        root: this.props.classes.cssLabel,
                        focused: this.props.classes.cssFocused,
                        error: this.props.classes.cssError
                    },
                }}
                InputProps={{
                    classes: {
                        underline: this.props.classes.cssUnderline,
                    },
                }}
            />
        );
    }
}

export default withStyles(styles)(GreenTextField);