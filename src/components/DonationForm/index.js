import React from 'react'
import Grid from "@material-ui/core/Grid";
import './style.css'
// import Utils from './utils'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DonationFormStep1 from "../DonationFormStep1";
import DonationFormStep2 from "../DonationFormStep2";
import DonationFormStep3 from "../DonationFormStep3";
import DonationFormStep4 from "../DonationFormStep4";

class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false,
            step: 4,
        };
    }

    handleDialog = open => () => {
        this.setState({openDialog: open})
    };

    nextStepCallback = () => {
        this.setState({step: this.state.step + 1})
    };

    previousStepCallback = () => {
        this.setState({step: this.state.step - 1})
    };

    render() {
        return (
            <Grid container id="registerFormGrid" justify="center">
                <DonationFormStep1
                    nextStepCallback={this.nextStepCallback}
                    hidden={this.state.step !== 1}
                />
                <DonationFormStep2
                    nextStepCallback={this.nextStepCallback}
                    previousStepCallback={this.previousStepCallback}
                    hidden={this.state.step !== 2}
                />
                <DonationFormStep3
                    nextStepCallback={this.nextStepCallback}
                    previousStepCallback={this.previousStepCallback}
                    hidden={this.state.step !== 3}
                />
                <DonationFormStep4
                    nextStepCallback={this.nextStepCallback}
                    previousStepCallback={this.previousStepCallback}
                    hidden={this.state.step !== 4}
                />

                {/******* Dialog *******/}
                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Register information"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your account has been created!
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Grid>
        );
    }
}

export default DonationForm;