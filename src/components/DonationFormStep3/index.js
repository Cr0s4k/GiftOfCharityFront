import React from 'react'
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import Utils from "../DonationForm/utils";
import Grid from "@material-ui/core/Grid";

class DonationFormStep3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: {
                    value: "",
                    error: true
                }
            },
            nextStepBtn: false
        }
    }

    handleChange = input => evt => {
        let newFields = {
            ...this.state.fields,
            ...Utils.check(input, evt.target.value, this.state.fields)
        };
        this.setState({
            ...this.state,
            fields: newFields,
            nextStepBtn: !Utils.errorInFields(newFields)
        });
    };

    render() {
        return (
            <>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" align="center">
                        <b>Give us a way so we can continue being in contact! </b>
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
                    <div id="DonationFormS1BtnContainer">
                        <Button  variant="contained" color="primary" onClick={this.props.previousStepCallback}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous step
                        </Button>
                        <Button  variant="contained" color="primary" disabled={!this.state.nextStepBtn} onClick={this.props.nextStepCallback}>
                            Next step
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_next</Icon>
                        </Button>
                    </div>
                </Grid>
            </>
        );
    }
}

export default DonationFormStep3;