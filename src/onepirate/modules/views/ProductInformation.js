import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import Button from '../components/Button'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

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
    fontSize: 18
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

  // handleClick = () => {
  //   this.props.history.push('/')
  // };

  render() {
    return (
      <section className={this.classes.root}>
        <LayoutBody className={this.classes.layoutBody} width="large">
          <div>
            <Grid container spacing={40} justify='center'>
              <Grid item xs={12} md={6}>
                <img className={this.classes.image} src='https://images.pexels.com/photos/904807/pexels-photo-904807.jpeg?cs=srgb&dl=branches-daylight-environment-904807.jpg&fm=jpg'/>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" marked='left' className={this.classes.title} component="h2">
                  Save rain forest
                </Typography>
                <Typography variant="body1" marked="center" className={this.classes.description} component="h2">
                  Using drones and working with government agencies, two indigenous communities in Peru have gone from losing 5% of their land to 0% deforestation. Indigenous communities are protecting the rainforest even as they face pressure and violence from illegal coca growing, drug trafficking and logging.
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
        </LayoutBody>
      </section>
    );
  }
}

ProductInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ProductInformation));
