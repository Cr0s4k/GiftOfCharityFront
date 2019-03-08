import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";

export default withStyles({
    root: {
        backgroundColor: '#3c8e3f',
        '&:hover': {
            backgroundColor: '#0e6e10',
        }
    }
})(Button);