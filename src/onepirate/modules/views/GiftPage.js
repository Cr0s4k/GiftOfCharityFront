import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import LayoutBody from "../components/LayoutBody";
import Grid from "@material-ui/core/Grid";
import API from "../../../services/API";
import ReactPlayer from "react-player";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Link from "@material-ui/core/Link";
import Iframe from 'react-iframe'

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    display: 'block',
    margin: '0 auto',
    // marginTop: theme.spacing.unit * 6
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
  },
  message: {
    marginBottom: theme.spacing.unit * 1,
    fontSize: 18,
    textAlign: 'center'
  },
  link: {
    cursor: 'pointer'
  },
  iframe: {
    border: 'none'
  }
});

class GiftPage extends React.Component{
  constructor(props) {
    super(props);
    document.title = 'Congratulations!'

    window.addEventListener('message', evt => {
      if(evt.data === 'END_QUIZ') this.setState({questionnaire: false})
    });
  }

  classes = this.props.classes;

  state = {
    gift: null,
    questionnaire: null
  };

  handleClick = () => {
    this.props.history.push(`/`)
  };

  handleLink = () => {
    this.props.history.push(`/products/${this.state.gift.charityProject.id}`)
  };

  loadGiftFromLS = () => {
    let gift = JSON.parse(localStorage.getItem('gift'));
    this.setState({gift: gift});
    if (gift != null) this.enableQuestionnaire(gift.questionnaire)
  };

  isADemo = () => !this.props.match.params.token;

  enableQuestionnaire = questionnaire => {
    localStorage.setItem("questionnaire", JSON.stringify(questionnaire));
    this.setState({questionnaire: true})
  };

  componentDidMount() {
    if(!this.isADemo()){ // If it is not a demo
      API.getGift(this.props.match.params.token)
        .then(gift => {
          this.setState({ gift: gift});
          this.enableQuestionnaire(gift.questionnaire)
        })
        .catch(e => {
          this.props.history.push('/');
        })
    }
    else {
      this.loadGiftFromLS();
      window.addEventListener("beforeunload", ev => { // Remove gift if windows is closed
        ev.preventDefault();
        localStorage.removeItem('gift')
      });
    }
  }

  render() {
    return (
      <>
        {this.state.questionnaire ? (
          <Iframe url="/quick-quiz/index.htm"
                  width="100%"
                  height="630px"
                  className={this.classes.iframe}
                  display="initial"
                  position="relative"
                  allowFullScreen
          />
        ) : (
          <section className={this.classes.root}>
            <LayoutBody className={this.classes.layoutBody} width="large">
              {this.state.gift &&
              <div>
                <Grid container spacing={40} justify='center'>
                  <Grid item sm={12} xs={12}>
                    {/*<Typography variant="h4" marked='center' className={this.classes.title} component="h2">*/}
                    {/*Here is a gift for you*/}
                    {/*</Typography>*/}
                    <Typography variant="h4" marked='center' className={this.classes.title} component="h2">
                      {this.state.gift.donorName} has a message for you
                    </Typography>
                    <div style={{width: '70%', margin: '0 auto'}}>
                      <ReactPlayer url={this.state.gift.videoUrl} controls width="100%" height="auto"/>
                    </div>
                  </Grid>
                  <Grid item sm={6} xs={11}>
                    <Typography variant="body1" marked="center" className={this.classes.message} component="h2">
                      <b>{this.state.gift.donorName}</b> has donated {this.state.gift.amount}€ in your name! Thanks to you, <b>GiftOfCharity </b>
                      will donate that money to a charity project called <Link className={this.classes.link} onClick={this.handleLink}><b>{this.state.gift.charityProject.name}</b></Link>.
                    </Typography>
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <Button className={this.classes.button} variant="contained" color="secondary" onClick={this.handleClick}>
                      More about <b>GiftOfCharity</b>
                    </Button>
                  </Grid>
                </Grid>
              </div>
              }
            </LayoutBody>
          </section>
        )}
      </>
    );
  }
}

GiftPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(GiftPage));
