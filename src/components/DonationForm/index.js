import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Button, Icon, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import './style.css'
import Utils from './utils'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                address: {
                    value: "",
                    error: true
                },
                city: {
                    value: "",
                    error: true
                },
                country: {
                    value: "",
                    error: true
                },
                province: {
                    value: "",
                    error: true
                },
                postcode: {
                    value: "",
                    error: true
                },
                email: {
                    value: "",
                    error: true
                }
            },
            disabledButton: true,
            openDialog: false,
            step: 1
        };
        this.uploadInRef = React.createRef()
    }

    handleChange = input => evt => {
        let newFields = {
            ...this.state.fields,
            ...Utils.check(input, evt.target.value, this.state.fields)
        };
        this.setState({
            ...this.state,
            fields: newFields,
            disabledButton: Utils.errorInFields(newFields)
        });
    };

    handleDialog = open => () => {
        this.setState({openDialog: open})
    };

    handleUploadBtn = () => {
        this.uploadInRef.current.click()
    };

    render() {
        return (
            <Grid container id="registerFormGrid" justify="center">
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" gutterBottom align="center">
                        <b>First of all choose a nice video you want to share with your friend!</b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>mood</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <Button id={"uploadBtn"} variant="contained" color="primary" onClick={this.handleUploadBtn}>
                        Upload
                        <Icon style={{marginBottom: -6, marginLeft: 6}}>cloud_upload</Icon>
                    </Button>
                    <input ref={this.uploadInRef} type="file" multiple={true} style={{display: "none"}}/>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" gutterBottom align="center">
                        <b>Now give us the place where we are going to send your gift!</b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>person_pin</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Address"
                        error={this.state.fields.address.error}
                        onChange={this.handleChange("address")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="City"
                        error={this.state.fields.city.error}
                        onChange={this.handleChange("city")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Country"
                        error={this.state.fields.country.error}
                        onChange={this.handleChange("country")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="State/Province/Region"
                        error={this.state.fields.province.error}
                        onChange={this.handleChange("province")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Postcode"
                        error={this.state.fields.postcode.error}
                        onChange={this.handleChange("postcode")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" align="center">
                        <b>Give us a way so we can continue being in contact!</b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>email</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Your email"
                        error={this.state.fields.email.error}
                        onChange={this.handleChange("email")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    { !this.state.disabledButton &&
                        <Button
                            disabled={this.state.disabledButton}
                            variant="contained"
                            color="primary"
                            id="registerBtn"
                            size="large"
                            onClick={this.handleDialog(true)}>
                            Buy
                        </Button>
                    }
                </Grid>
                <Grid item sm={12}/>

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