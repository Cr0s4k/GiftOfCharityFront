import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Button from "@material-ui/core/Button";
import Utils from "../DonationForm/utils";
import './style.css'

class DonationFormStep4 extends React.Component {
    state = {
        client: {
            sandbox: "AberOmgdLBdCdYUivpnt0Ht38xIDB3H7ckZ8mnMwWC-jhnS7UAhPBO4DiHss8t0qOJnSBtQAu47qEFyl",
            production: "AberOmgdLBdCdYUivpnt0Ht38xIDB3H7ckZ8mnMwWC-jhnS7UAhPBO4DiHss8t0qOJnSBtQAu47qEFyl"
        },
        quantity: {
            value: 10,
            error: false
        }
    };

    handleChange = input => evt => {
        this.setState({
            ...this.state,
            ...Utils.check(input, evt.target.value, null)
            // nextStepBtn: !Utils.errorInFields(newFields)
        }, () => console.log((this.state)));
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
                        label="Total (€)"
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
                <Grid item container sm={5} xs={7} justify="center" spacing={20} style={{textAlign: "center"}}>
                    <Grid item sm={8} xs={7}>
                        <div id="DonationDormS4PaypalDiv" hidden={this.state.quantity.error}>
                            <PaypalBtn client={this.state.client} currency="EUR" total={this.state.quantity.value}/>
                        </div>
                    </Grid>
                    <Grid item sm={8} xs={7}>
                        <Button  variant="contained" color="primary" onClick={this.props.previousStepCallback}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous step
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default DonationFormStep4;