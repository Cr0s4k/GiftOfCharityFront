import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Button from "@material-ui/core/Button";
import Utils from "../DonationForm/utils";
import './style.css'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import API from "../../services/API";
import DialogTitle from "@material-ui/core/DialogTitle";
import withRouter from "react-router/es/withRouter";
import GreenBtn from "../GreenBtn";

class DonationFormStep4 extends React.Component {

    state = {
        client: {
            sandbox: process.env.REACT_APP_PAYPAL_SANDBOX,
            production: process.env.REACT_APP_PAYPAL_PRODUCTION
        },
        amount: {
            value: 10,
            error: false
        },
        errorDialogHidden: true,
        successDialogHidden: true
    };

    constants = {
        SUCCESS: 1,
        ERROR: 2
    };

    goToHomePage = () => {
      this.props.history.push("/");
    };

    toggleDialog = (status) => () => {
        if(status === this.constants.SUCCESS) this.setState({successDialogHidden: !this.state.successDialogHidden});
        else if(status === this.constants.ERROR) this.setState({errorDialogHidden: !this.state.errorDialogHidden})
    };

    handleChange = input => evt => {
        this.setState({
            ...this.state,
            ...Utils.check(input, evt.target.value, null)
        });
    };

    onSuccess = async (payment) => {
        try{
            await API.makeDonation({
                orderId: payment.paymentID,
                ...this.props.data
            });
            this.toggleDialog(this.constants.SUCCESS)()
        }
        catch (e) {
            console.log(e);
            this.toggleDialog(this.constants.ERROR)()
        }
    };

    onError = err => {
        console.log(err);
        this.toggleDialog(this.constants.ERROR)()
    };

    render() {
        return (
            <Grid container item justify="center" style={{display: this.props.hidden ? "none" : "flex"}}>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" align="center">
                        <b>Donate as much as you want! </b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>euro_symbol</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={2} xs={7}>
                    <TextField
                        id="standard-number"
                        label="Amount (€)"
                        value={this.state.amount.value}
                        onChange={this.handleChange('amount')}
                        error={this.state.amount.error}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item container sm={5} xs={7} justify="center" style={{textAlign: "center"}}>
                    <Grid item sm={12} xs={12}>
                        <div id="DonationDormS4PaypalDiv" hidden={this.state.amount.error}>
                            <PaypalBtn
                                client={this.state.client}
                                currency="EUR"
                                total={this.state.amount.value}
                                onSuccess={this.onSuccess}
                                onError={this.onError}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <GreenBtn  variant="contained" color="primary" onClick={this.props.previousStep}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous
                        </GreenBtn>
                    </Grid>
                </Grid>

                <Dialog
                    open={!this.state.errorDialogHidden}
                    onClose={this.toggleDialog(this.constants.ERROR)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Error!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Something went wrong, try again!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toggleDialog(this.constants.ERROR)} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={!this.state.successDialogHidden}
                    onClose={this.toggleDialog(this.constants.SUCCESS)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Perfect!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" gutterBottom>
                            You receiver will soon get a card with its gift!
                        </DialogContentText>
                        <Typography gutterBottom>
                            We have also sent you an email with your donation information. If you have any problem
                            dont hesitate to contact with us.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.goToHomePage} color="primary">
                            Go to the Home Page
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

export default withRouter(DonationFormStep4);