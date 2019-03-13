import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import Button from '../components/Button'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import API from "../../../services/API";
import Snackbar from "../components/Snackbar";

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
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
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '530px',
    maxWidth: '530px'
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

class ProductInformation extends React.Component{
  classes = this.props.classes;

  state = {
    product: null,
    openSnack: false
  };

  // handleClick = () => {
  //   this.props.history.push('/')
  // };

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

  render() {
    return (
      <section className={this.classes.root}>
        <LayoutBody className={this.classes.layoutBody} width="large">
          {this.state.product &&
            <div>
              <Grid container spacing={40} justify='center'>
                <Grid item xs={12} md={6}>
                  <img alt='A product' className={this.classes.image}
                       src={this.state.product.imageUrl}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" marked='left' className={this.classes.title} component="h2">
                    {this.state.product.name}
                  </Typography>
                  <Typography variant="body1" marked="center" className={this.classes.description} component="h2">
                    {this.state.product.description}
                  </Typography>
                  <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    className={this.classes.button}
                    component={linkProps => (
                      <Link {...linkProps} href="#products" variant="button"/>
                    )}
                  >
                    Give away
                  </Button>
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
