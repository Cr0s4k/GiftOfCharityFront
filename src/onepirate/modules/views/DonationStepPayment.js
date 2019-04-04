import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Utils from "../../../components/DonationForm/utils";
import API from "../../../services/API";
import Snackbar from "../components/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import MediaQuery from 'react-responsive'

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
    },
    openSnack: false,
    snackMessage: '',
    loading: false
  };

  handleCloseSnack = () => {
    this.setState({openSnack: false})
  };

  componentDidMount() {
    if(this.props.data)
      this.setState(this.props.data);
    this.props.changeNextBtn(false)
  }

  componentWillUnmount() {
    this.props.update(this.state)
  }

  handleChange = input => evt => {
    this.setState({
      fields: {...Utils.check(input, evt.target.value, this.state.fields)}
    });
  };

  onSuccess = async (payment) => {
    try{
      this.setState({loading: true});
      await API.makeDonation({
        ...this.props.donationInformation,
        orderId: payment.paymentID,
        amount: parseInt(this.state.fields.amount.value)
      });

      this.props.enableGoToHomePageBtn();
    }
    catch (e) {
      console.log(e);
      this.setState({openSnack: true})
    }
    finally {
      this.setState({loading: false})
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
          {this.state.loading ?
            <div style={{textAlign: 'center'}}>
              <CircularProgress/>
            </div>
            :
            <>
              <Grid item sm={5} xs={10}>
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
              <br/>
              <Grid item sm={12}/>
              <Grid item sm={12}>
                <div className={classes.paypalContainer} hidden={this.state.fields.amount.error}>
                  <MediaQuery maxWidth={500}>
                    <PaypalBtn
                      client={this.state.client}
                      currency="EUR"
                      total={parseInt(this.state.fields.amount.value)}
                      onSuccess={this.onSuccess}
                      // onError={this.onError}
                      style={{
                        shape: 'rect',
                        size: 'medium',
                        fundingicons: true,
                      }}
                    />
                  </MediaQuery>
                  <MediaQuery minWidth={500}>
                    <PaypalBtn
                      client={this.state.client}
                      currency="EUR"
                      total={parseInt(this.state.fields.amount.value)}
                      onSuccess={this.onSuccess}
                      // onError={this.onError}
                      style={{
                        shape: 'rect',
                        size: 'large',
                        fundingicons: true,
                      }}
                    />
                  </MediaQuery>
                </div>
              </Grid>
            </>
          }
        </Grid>
        <Snackbar
          open={this.state.openSnack}
          onClose={this.handleCloseSnack}
          message='Something went wrong... Try again!'
        />
      </>
    );
  }
}

export default withStyles(styles)(DonationStep3);