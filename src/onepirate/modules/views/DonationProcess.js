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

class ProductInformation extends React.Component{
  classes = this.props.classes;

  state = {
    product: null,
    openSnack: false,
    activeStep: 0,
    steps: [
      'Video',
      'Receiver',
      'You',
      'Donation'
    ],
    data: {
      // videoUrl: null,
      // address: null,
      // city: null,
      // country: null,
      // province: null,
      // postcode: null,
      // email: null,
      // itemId: this.props.match.id,
      // orderId: null,
      // amount: null
      stepVideo: undefined,
      stepReceiver: undefined,
      stepDonor: undefined,
      stepPayment: undefined
    },
    actions: {
      updateStepVideo: (newState) => {
        this.setState({data:{stepVideo: newState}})
      },
      updateStepReceiver: (newState) => {
        this.setState({data:{stepReceiver: newState}})
      },
      updateStepDonor: (newState) => {
        this.setState({data:{stepDonor: newState}})
      },
      updateStepPayment: (newState) => {
        this.setState({data:{stepPayment: newState}})
      },
      changeNextBtn: (nextBtn) => {
        this.setState({nextBtn: nextBtn})
      }
    },
    nextBtn: false
  };

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
        this.setState({openSnack: true})
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
        changeNextBtn={this.state.actions.changeNextBtn}
      />
    )
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    window.scrollTo(0,0)
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
                        disabled={this.state.activeStep === 0}
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
                        {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
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
            message="The charity project you are trying to find it doesn't exists!"
          />
        </LayoutBody>
      </section>
    );
  }
}

ProductInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ProductInformation));
