import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import LayoutBody from "../components/LayoutBody";
import Grid from "@material-ui/core/Grid";
import API from "../../../services/API";

const styles = theme => ({

});

class GiftPage extends React.Component{
  constructor(props) {
    super(props);
    document.title = 'Congratulations!'
  }

  classes = this.props.classes;

  state = {
  };

  // handleClick = id => () => {
  //   this.props.history.push(`/products/${id}/donate`)
  // };

  componentDidMount() {
    API.getGift(this.props.match.params.token)
      .then(gift => {
        this.setState({ gift: gift});
      })
      .catch(e => {
        this.props.history.push('/');
      })
  }

  render() {
    return (
      <section className={this.classes.root}>
        <LayoutBody className={this.classes.layoutBody} width="large">
          {this.state.product &&
            <div>
              <Grid container spacing={40} justify='center'>
                Pole
              </Grid>
            </div>
          }
        </LayoutBody>
      </section>
    );
  }
}

GiftPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(GiftPage));
