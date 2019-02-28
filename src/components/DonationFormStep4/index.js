import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Button from "@material-ui/core/Button";
import Utils from "../DonationForm/utils";
import './style.css'
import DialogTitle from "../DonationFormStep1";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import API from "../../services/API";

class DonationFormStep4 extends React.Component {

    state = {
        client: {
            sandbox: process.env.REACT_APP_PAYPAL_SANDBOX,
            production: process.env.REACT_APP_PAYPAL_PRODUCTION
        },
        quantity: {
            value: 10,
            error: false
        },
        dialogHidden: true
    };

    toggleDialog = () => {
        this.setState({dialogHidden: !this.state.dialogHidden})
    };

    handleChange = input => evt => {
        this.setState({
            ...this.state,
            ...Utils.check(input, evt.target.value, null)
        });
    };

    onSuccess = async (payment) => {
        let res = await API.verifyOrder({
            orderId: payment.paymentID,
            amount: this.state.quantity.value
        });
        if (res === 200) {
            console.log("Pago realizado, creando donación con:");
            console.log(this.props.data)
        }
        else{
            this.toggleDialog()
        }
    };

    onError = err => {
        this.toggleDialog()
    };

    render() {
        return (
            <Grid container item justify="center" style={{display: this.props.hidden ? "none" : "flex"}}>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" align="center">
                        <b>Pay as you want! </b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>euro_symbol</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={2} xs={7}>
                    <TextField
                        id="standard-number"
                        label="Amount (€)"
                        value={this.state.quantity.value}
                        onChange={this.handleChange('quantity')}
                        error={this.state.quantity.error}
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
                        <div id="DonationDormS4PaypalDiv" hidden={this.state.quantity.error}>
                            <PaypalBtn
                                client={this.state.client}
                                currency="EUR"
                                total={this.state.quantity.value}
                                onSuccess={this.onSuccess}
                                onError={this.onError}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Button  variant="contained" color="primary" onClick={this.props.previousStep}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous
                        </Button>
                    </Grid>
                </Grid>

                <Dialog
                    open={!this.state.dialogHidden}
                    onClose={this.toggleDialog}
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
                        <Button onClick={this.toggleDialog} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

export default DonationFormStep4;