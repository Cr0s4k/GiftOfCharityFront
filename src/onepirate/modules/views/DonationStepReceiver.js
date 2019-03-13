import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import GreenTextField from "../../../components/GreenTextField";

const styles = theme => ({
  button: {
    display: 'block',
    margin: '0 auto'
  }
});

class DonationStep1 extends React.Component {
  state = {

  };

  render() {
    const {classes} = this.props;

    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            Now give us the place where we are going to send your gift!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="Address"
              // error={this.state.fields.address.error}
              // onChange={this.handleChange("address")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="City"
              // error={this.state.fields.city.error}
              // onChange={this.handleChange("city")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="Country"
              // error={this.state.fields.country.error}
              // onChange={this.handleChange("country")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="State/Province/Region"
              // error={this.state.fields.province.error}
              // onChange={this.handleChange("province")}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item sm={12}/>
          <Grid item sm={5} xs={7}>
            <GreenTextField
              label="Postcode"
              // error={this.state.fields.postcode.error}
              // onChange={this.handleChange("postcode")}
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

export default withStyles(styles)(DonationStep1);