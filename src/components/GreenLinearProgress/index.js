import {LinearProgress} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";

export default withStyles({
    colorPrimary: {
        backgroundColor: "#ccffcd"
    },
    barColorPrimary: {
        backgroundColor: "#0e6e10"
    },
    root: {
        height: 7
    }
})(LinearProgress);