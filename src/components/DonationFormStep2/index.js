import React from 'react'
import {Icon, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Utils from "../DonationForm/utils";
import GreenBtn from "../GreenBtn";
import GreenTextField from '../GreenTextField'

class DonationFormStep2 extends React.Component {
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

    handleNextBtn = (next) => () => {
        this.props.handleSecondStep(
            next,
            this.state.fields.address.value,
            this.state.fields.city.value,
            this.state.fields.country.value,
            this.state.fields.province.value,
            this.state.fields.postcode.value
        )
    };

    render() {
        return (
            <Grid container item justify="center" style={{display: this.props.hidden ? "none" : "flex"}}>
                <Grid item sm={5} xs={7}>
                    <Typography variant="h5" gutterBottom align="center">
                        <b>Now give us the place where we are going to send your gift! </b>
                        <Icon fontSize="large" style={{marginBottom: -7}}>person_pin</Icon>
                    </Typography>
                </Grid>
                <Grid item sm={12}/>
                <Grid item sm={5} xs={7}>
                    <GreenTextField
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
                    <GreenTextField
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
                    <GreenTextField
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
                    <GreenTextField
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
                    <GreenTextField
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
                    <div id="DonationFormS1BtnContainer">
                        <GreenBtn  variant="contained" color="primary" onClick={this.handleNextBtn(false)}>
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_before</Icon>
                            Previous
                        </GreenBtn>
                        <GreenBtn  variant="contained" color="primary" disabled={!this.state.nextStepBtn} onClick={this.handleNextBtn(true)}>
                            Next
                            <Icon style={{marginBottom: 0, marginLeft: 6}}>navigate_next</Icon>
                        </GreenBtn>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default DonationFormStep2;