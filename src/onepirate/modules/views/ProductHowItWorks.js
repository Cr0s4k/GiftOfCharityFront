import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../components/LayoutBody';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Icon from '@material-ui/core/Icon'

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
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    width: 36,
    height: 36,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

function ProductHowItWorks(props) {
  const {classes} = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                {/*<img*/}
                {/*src="/static/themes/onepirate/productHowItWorks1.svg"*/}
                {/*alt="suitcase"*/}
                {/*className={classes.image}*/}
                {/*/>*/}
                <Icon fontSize="large" className={classes.image}>local_florist_outline</Icon>
                <Typography variant="h5" align="center">
                  Pick a great cause like
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                {/*<img*/}
                {/*src="/static/themes/onepirate/productHowItWorks2.svg"*/}
                {/*alt="graph"*/}
                {/*className={classes.image}*/}
                {/*/>*/}
                <Icon fontSize="large" className={classes.image}>person_outline</Icon>
                <Typography variant="h5" align="center">
                  Choose the recipient
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                {/*<img*/}
                {/*src="/static/themes/onepirate/productHowItWorks3.svg"*/}
                {/*alt="clock"*/}
                {/*className={classes.image}*/}
                {/*/>*/}
                <Icon fontSize="large" className={classes.image}>play_circle_outline</Icon>
                <Typography variant="h5" align="center">
                  Record a video message
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                {/*<img*/}
                {/*src="/static/themes/onepirate/productHowItWorks3.svg"*/}
                {/*alt="clock"*/}
                {/*className={classes.image}*/}
                {/*/>*/}
                <Icon fontSize="large" className={classes.image}>email_outline</Icon>
                <Typography variant="h5" align="center">
                  A card which contains a mysterious url is sent to the receiver!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="#products" variant="button"/>
          )}
        >
          Get started
        </Button>
      </LayoutBody>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
