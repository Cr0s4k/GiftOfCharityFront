import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import './style.css'
import Utils from './utils'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: {
                    value: "",
                    error: true
                },
                email: {
                    value: "",
                    error: true
                },
                password: {
                    value: "",
                    error: true
                },
                repeatedPassword: {
                    value: "",
                    error: true
                }
            },
            disabledButton: true,
            openDialog: false
        };
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
        })
    };

    handleDialog = open => () => {
        this.setState({openDialog: open})
    };

    render() {
        return (
            <Grid container id="registerFormGrid" justify="center">
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Name"
                        error={this.state.fields.name.error}
                        onChange={this.handleChange("name")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Email"
                        error={this.state.fields.email.error}
                        onChange={this.handleChange("email")}
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Password"
                        error={this.state.fields.password.error}
                        onChange={this.handleChange("password")}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <TextField
                        label="Repeat password"
                        error={this.state.fields.repeatedPassword.error}
                        onChange={this.handleChange("repeatedPassword")}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <Button
                        disabled={this.state.disabledButton}
                        variant="contained"
                        color="primary"
                        id="registerBtn"
                        size="large"
                        onClick={this.handleDialog(true)}>
                        Register
                    </Button>
                </Grid>
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

export default RegisterForm;