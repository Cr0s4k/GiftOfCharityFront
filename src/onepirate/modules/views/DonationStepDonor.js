import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";
import Utils from "../../../components/DonationForm/utils";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  }
});

class DonationStepDonor extends React.Component {
  state = {
    fields: {
      email: {
        value: '',
        error: false
      }
    }
  };

  handleChange = input => evt => {
    let newFields = {
      ...this.state.fields,
      ...Utils.check(input, evt.target.value, this.state.fields)
    };
    this.setState({
      fields: newFields,
      // nextStepBtn: !Utils.errorInFields(newFields)
    });
  };

  render() {
    // const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            Give us a way so we can continue being in contact!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="Your email"
              error={this.state.fields.email.error}
              onChange={this.handleChange("email")}
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