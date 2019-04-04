import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
    width: 55,
    fontSize: 55
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/*<img*/}
                {/*className={classes.image}*/}
                {/*src="/static/themes/onepirate/productValues1.svg"*/}
                {/*alt="suitcase"*/}
              {/*/>*/}
              <Icon className={classes.image}>euro_symbol</Icon>
              <Typography variant="h6" className={classes.title}>
                Free donation
              </Typography>
              <Typography variant="h5" align='center'>
                {'Donate as much as you want! We do not pressure our clients'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/*<img*/}
                {/*className={classes.image}*/}
                {/*src="/static/themes/onepirate/productValues2.svg"*/}
                {/*alt="graph"*/}
              {/*/>*/}
              <Icon className={classes.image}>card_giftcard</Icon>
              <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="h5" align='center'>
                {'Give a nice experience to the person you want!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/*<img*/}
                {/*className={classes.image}*/}
                {/*src="/static/themes/onepirate/productValues3.svg"*/}
                {/*alt="clock"*/}
              {/*/>*/}
              <Icon className={classes.image}>check_circle</Icon>
              <Typography variant="h6" className={classes.title}>
                Quizzes
              </Typography>
              <Typography variant="h5" align='center'>
                {'We will also send a quiz to the receiver, so he can see one of the reasons of  your donation!'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
