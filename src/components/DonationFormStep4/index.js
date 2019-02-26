import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import PaypalBtn from 'react-paypal-express-checkout'
import Button from "@material-ui/core/Button";

class DonationFormStep4 extends React.Component {
    state = {
        client: {
            sandbox: "AberOmgdLBdCdYUivpnt0Ht38xIDB3H7ckZ8mnMwWC-jhnS7UAhPBO4DiHss8t0qOJnSBtQAu47qEFyl",
            production: "AberOmgdLBdCdYUivpnt0Ht38xIDB3H7ckZ8mnMwWC-jhnS7UAhPBO4DiHss8t0qOJnSBtQAu47qEFyl"
        }
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
                <Grid item sm={5} xs={7}>
                    <PaypalBtn client={this.state.client} currency="EUR" total={1.00}/>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <div id="DonationFormS1BtnContainer">
                        <Button  variant="contained" color="primary" onClick={this.props.previousStepCallback}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous step
                        </Button>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default DonationFormStep4;