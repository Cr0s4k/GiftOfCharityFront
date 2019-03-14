import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import Button from '../components/Button'
import Grid from "@material-ui/core/Grid";
import API from "../../../services/API";
import Snackbar from "../components/Snackbar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "../components/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import DonationStepVideo from "./DonationStepVideo";
import DonationStepReceiver from "./DonationStepReceiver";
import DonationStepDonor from "./DonationStepDonor";
import DonationStepPayment from "./DonationStepPayment";

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 5,
    position: 'relative',
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing.unit * 6,
  },
  description: {
    marginBottom: theme.spacing.unit * 7,
    fontSize: 18,
    textAlign: 'justify'
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit,
  },
  stepper: {
    backgroundColor: 'transparent'
  }
});

class DonationProcess extends React.Component{
  classes = this.props.classes;

  state = {
    product: null,
    snackMessage: '',
    openSnack: false,
    activeStep: 0,
    steps: [
      'Video',
      'Receiver',
      'You',
      'Donation'
    ],
    data: {
      stepVideo: undefined,
      stepReceiver: undefined,
      stepDonor: undefined,
      stepPayment: undefined
    },
    actions: {
      updateStepVideo: (newState) => {
        this.setState({data:{
          ...this.state.data,
          stepVideo: newState
        }})
      },
      updateStepReceiver: (newState) => {
        this.setState({data:{
          ...this.state.data,
          stepReceiver: newState
        }})
      },
      updateStepDonor: (newState) => {
        this.setState({data:{
          ...this.state.data,
          stepDonor: newState,
        }})
      },
      updateStepPayment: (newState) => {
        this.setState({data:{
          ...this.state.data,
          stepPayment: newState
        }})
      },
      changeNextBtn: (nextBtn) => {
        this.setState({nextBtn: nextBtn})
      },
      enableGoToHomePageBtn: () => {
        this.handleNext()
      }
    },
    nextBtn: false
  };

  getDonationInformation = () => ({
    videoUrl: this.state.data.stepVideo ? this.state.data.stepVideo.videoUrl : null,
    address: this.state.data.stepReceiver ? this.state.data.stepReceiver.fields.address.value : null,
    city: this.state.data.stepReceiver? this.state.data.stepReceiver.fields.city.value : null,
    country: this.state.data.stepReceiver ? this.state.data.stepReceiver.fields.country.value : null,
    province: this.state.data.stepReceiver ? this.state.data.stepReceiver.fields.province.value : null,
    postcode: this.state.data.stepReceiver ? parseInt(this.state.data.stepReceiver.fields.postcode.value) : null,
    email: this.state.data.stepDonor ? this.state.data.stepDonor.fields.email.value : null,
    itemId: parseInt(this.props.match.params.id),
  });

  handleCloseSnack = () => {
    this.setState({openSnack: false})
  };

  componentDidMount() {
    API.getCharityProject(this.props.match.params.id)
      .then(product => {
        this.setState({ product: product });
        document.title = product.name
      })
      .catch(e => {
        this.setState({openSnack: true, snackMessage: 'The charity project you are trying to find it doesn\'t exists!'})
      })
  }

  getStepContent = (index) => {
    if(index === 0) return (
      <DonationStepVideo
        data={this.state.data.stepVideo}
        update={this.state.actions.updateStepVideo}
        changeNextBtn={this.state.actions.changeNextBtn}
      />
    );
    else if(index === 1) return (
      <DonationStepReceiver
        data={this.state.data.stepReceiver}
        update={this.state.actions.updateStepReceiver}
        changeNextBtn={this.state.actions.changeNextBtn}
      />
    );
    else if(index === 2) return (
      <DonationStepDonor
        data={this.state.data.stepDonor}
        update={this.state.actions.updateStepDonor}
        changeNextBtn={this.state.actions.changeNextBtn}
      />
    );
    else if(index === 3) return (
      <DonationStepPayment
        data={this.state.data.stepPayment}
        update={this.state.actions.updateStepPayment}
        enableGoToHomePageBtn={this.state.actions.enableGoToHomePageBtn}
        changeNextBtn={this.state.actions.changeNextBtn}
        donationInformation={this.getDonationInformation()}
      />
    );
  };

  handleNext = () => {
    window.scrollTo(0,0);
    let newActiveStep = this.state.activeStep + 1;
    if(newActiveStep === this.state.steps.length) {
      this.setState({
        activeStep: newActiveStep,
        snackMessage: 'You receiver will soon get a card with its gift! We have also sent you an email with your ' +
          'donation information. If you have any problem do not hesitate to contact with us.',
        openSnack: true,
        nextBtn: true
      });
    }
    else if(newActiveStep > this.state.steps.length){
      this.props.history.push('/');
    }
    else{
      this.setState({activeStep: newActiveStep})
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
    window.scrollTo(0,0)
  };

  render() {
    const {classes} = this.props;

    return (
      <section className={this.classes.root}>
        <LayoutBody className={this.classes.layoutBody} width="large">
          {this.state.product &&
            <div>
              <Grid container spacing={40} justify='center'>
                <Grid item xs={12} md={12}>
                  <Typography variant="h4" marked='left'  component="h2">
                    Donation Process
                  </Typography>
                  <Stepper activeStep={this.state.activeStep} orientation="vertical" className={classes.stepper}>
                    {this.state.steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                        <StepContent>
                          {this.getStepContent(index)}
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        color="secondary"
                        disabled={this.state.activeStep === 0 || this.state.activeStep > this.state.steps.length - 1}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.handleNext}
                        className={classes.button}
                        disabled={!this.state.nextBtn}
                      >
                        {this.state.activeStep >= this.state.steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          }
          <Snackbar
            open={this.state.openSnack}
            onClose={this.handleCloseSnack}
            message={this.state.snackMessage}
          />
        </LayoutBody>
      </section>
    );
  }
}

DonationProcess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(DonationProcess));
