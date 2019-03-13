import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  }
});

class DonationStepDonor extends React.Component {
  state = {

  };

  render() {
    const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            Now give us the place where we are going to send your gift!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="Your email"
              // error={this.state.fields.email.error}
              // onChange={this.handleChange("email")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DonationStepDonor);