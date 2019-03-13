import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";
import PaypalBtn from 'react-paypal-express-checkout'

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  }
});

class DonationStep3 extends React.Component {
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
              id="standard-number"
              label="Amount (€)"
              // value={this.state.amount.value}
              // onChange={this.handleChange('amount')}
              // error={this.state.amount.error}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={12}>
            <div>
              <PaypalBtn
                // client={this.state.client}
                currency="EUR"
                // total={this.state.amount.value}
                // onSuccess={this.onSuccess}
                // onError={this.onError}
              />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DonationStep3);