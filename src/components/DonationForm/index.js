import React from 'react'
import Grid from "@material-ui/core/Grid";
import './style.css'
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
            step: 2,
            data: {
                videoUrl: null,
                address: null,
                city: null,
                country: null,
                province: null,
                postcode: null,
                email: null,
                itemId: this.props.itemId
            }
        };
    }

    handleDialog = open => () => {
        this.setState({openDialog: open})
    };

    nextStep = () => {
        this.setState({step: this.state.step + 1})
    };

    previousStep = () => {
        this.setState({step: this.state.step - 1})
    };

    handleFirstStep = (videoUrl) => {
        this.setState({
            data: {
                ...this.state.data,
                videoUrl: videoUrl
            }
        });

        this.nextStep()
    };

    handleSecondStep = (next, address, city, country, province, postcode) => {
        this.setState({
            data: {
                ...this.state.data,
                address: address,
                city: city,
                country: country,
                province: province,
                postcode: postcode
            }
        });

        if (next) this.nextStep();
        else this.previousStep()
    };

    handleThirdStep = (next, email) => {
        this.setState({
            data:{
                ...this.state.data,
                email: email
            }
        });

        if (next) this.nextStep();
        else this.previousStep()
    };

    render() {
        return (
            <Grid container id="registerFormGrid" justify="center">

                <DonationFormStep1
                    handleFirstStep={this.handleFirstStep}
                    hidden={this.state.step !== 1}
                />
                <DonationFormStep2
                    handleSecondStep={this.handleSecondStep}
                    hidden={this.state.step !== 2}
                />
                <DonationFormStep3
                    handleThirdStep={this.handleThirdStep}
                    hidden={this.state.step !== 3}
                />
                <DonationFormStep4
                    data={this.state.data}
                    previousStep={this.previousStep}
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