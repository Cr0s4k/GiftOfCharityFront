import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";
import Utils from "../../../components/DonationForm/utils";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  }
});

class DonationStepReceiver extends React.Component {
  state = {
    fields: {
      address: {
        value: '',
        error: false
      },
      city: {
        value: '',
        error: false
      },
      country: {
        value: '',
        error: false
      },
      province: {
        value: '',
        error: false
      },
      postcode: {
        value: '',
        error: false
      }
    }
  };

  componentDidMount() {
    if(this.props.data) {
      this.setState(this.props.data)
    }
  }

  componentWillUnmount() {
    this.props.update(this.state)
  }

  handleChange = input => evt => {
    let newFields = {
      ...this.state.fields,
      ...Utils.check(input, evt.target.value, this.state.fields)
    };
    this.setState({
      fields: newFields,
      // nextStepBtn: !Utils.errorInFields(newFields)
    });
  };

  render() {
    // const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            Now give us the place where we are going to send your gift!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="Address"
              value={this.state.fields.address.value}
              error={this.state.fields.address.error}
              onChange={this.handleChange("address")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="City"
              value={this.state.fields.city.value}
              error={this.state.fields.city.error}
              onChange={this.handleChange("city")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="Country"
              value={this.state.fields.country.value}
              error={this.state.fields.country.error}
              onChange={this.handleChange("country")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="State/Province/Region"
              value={this.state.fields.province.value}
              error={this.state.fields.province.error}
              onChange={this.handleChange("province")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={6} xs={7}>
            <GreenTextField
              label="Postcode"
              value={this.state.fields.postcode.value}
              error={this.state.fields.postcode.error}
              onChange={this.handleChange("postcode")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DonationStepReceiver);