import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Link from "@material-ui/core/Link";
import Button from "../components/Button";
import withRouter from "react-router/es/withRouter";
import LinkRouter from 'react-router-dom/Link'
import API from "../../../services/API";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
  }
});

class DonationStepDemo extends React.Component {
  classes = this.props.classes;

  state = {
    questionnaire: null
  };

  constructor(props) {
    super(props);
    props.changeNextBtn(true)
  }

  componentDidMount() {
    API.getQuestionnaire(this.props.donationInformation.product.questionnaireId)
      .then(questionnaire => {
        this.setState({
          questionnaire: questionnaire
        })
      })
  }

  getGift = () => {
    let donationInformation = this.props.donationInformation;
    return ({
      donorName: donationInformation.donorName,
      videoUrl: donationInformation.videoUrl,
      amount: donationInformation.amount,
      charityProject: donationInformation.product,
      questionnaire: this.state.questionnaire
    })
  };

  handleBtn = () => {
    localStorage.setItem('gift', JSON.stringify(this.getGift()))
  };

  render() {
    return (
      <>
        <Grid item sm={12} xs={12}>
          <Typography variant="h5" align="center" component='h2' gutterBottom>
            See what your friend will receive!
          </Typography>
        </Grid>
        <Grid item sm={12} container justify='center'>
          <Button
            onClick={this.handleBtn}
            color="secondary"
            size="large"
            variant="contained"
            className={this.classes.button}
            component={linkProps => (
              <Link
                {...linkProps}
                variant="button"
                component={linkRouterProps => (
                  <LinkRouter
                    {...linkRouterProps}
                    to="/gifts-demo"
                    target="_blank"
                  />
                )}
              />
            )}
          >
            OPEN DEMO
          </Button>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(DonationStepDemo));