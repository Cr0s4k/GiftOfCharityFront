import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Utils from "../../../components/DonationForm/utils";
import API from "../../../services/API";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  },
  paypalContainer: {
    textAlign: 'center',
    marginTop: 5
  }
});

class DonationStep3 extends React.Component {
  state = {
    client: {
      sandbox: process.env.REACT_APP_PAYPAL_SANDBOX,
      production: process.env.REACT_APP_PAYPAL_PRODUCTION
    },
    fields: {
      amount: {
        value: 10,
        error: false
      }
    }
  };

  componentDidMount() {
    if(this.props.data)
      this.setState(this.props.data, () => {
        this.props.changeNextBtn(!Utils.errorOrEmptyFields(this.state.fields))
      });
    else this.props.changeNextBtn(false)

  }

  componentWillUnmount() {
    this.props.update(this.state)
  }

  handleChange = input => evt => {
    this.setState({
      ...Utils.check(input, evt.target.value, this.state.fields)
    });
  };

  onSuccess = async (payment) => {
    try{
      await API.makeDonation({
        orderId: payment.paymentID,
        amount: parseInt(this.state.fields.amount.value),
        ...this.props.donationInformation
      });
      console.log('ok')
      // this.toggleDialog(this.constants.SUCCESS)()
    }
    catch (e) {
      console.log(e);
      // this.toggleDialog(this.constants.ERROR)()
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            Donate as much as you want!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Grid item sm={5} xs={5}>
            <GreenTextField
              id="standard-number"
              label="Amount (€)"
              value={this.state.fields.amount.value}
              onChange={this.handleChange('amount')}
              error={this.state.fields.amount.error}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={12}>
            <div className={classes.paypalContainer}>
              <PaypalBtn
                client={this.state.client}
                currency="EUR"
                total={this.state.fields.amount.value}
                onSuccess={this.onSuccess}
                // onError={this.onError}
                style={{
                  shape: 'rect',
                  size: 'large',
                  fundingicons: true,
                }}
              />

            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DonationStep3);