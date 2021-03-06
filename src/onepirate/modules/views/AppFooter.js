import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import withRouter from "react-router/es/withRouter";

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150,
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

class AppFooter extends React.Component{
  classes = this.props.classes;

  handleClick = (route) => () => {
    this.props.history.push(route)
  };

  render() {
    return (
      <Typography component="footer" className={this.classes.root}>
        <LayoutBody className={this.classes.layoutBody} width="large">
          <Grid container spacing={40}>
            <Grid item xs={5} sm={5} md={2}>
              <Grid
                container
                // direction="column"
                justify="flex-end"
                className={this.classes.iconsWrapper}
                spacing={16}
              >
                <Grid item xs={12} className={this.classes.icons}>
                  <a href="/" className={this.classes.icon}>
                    <img src="/images/appFooterFacebook.png" alt="Facebook" />
                  </a>
                  <a href="/" className={this.classes.icon}>
                    <img src="/images/appFooterTwitter.png" alt="Twitter" />
                  </a>
                </Grid>
                <Grid item xs={12}>© 2018 GiftOfCharity</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} sm={5} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Legal
              </Typography>
              <ul className={this.classes.list}>
                <li className={this.classes.listItem}>
                  <Link className={this.classes.link} onClick={this.handleClick('/terms')}>Terms</Link>
                </li>
                <li className={this.classes.listItem}>
                  <Link className={this.classes.link} onClick={this.handleClick('/privacy')}>Privacy</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </LayoutBody>
      </Typography>
    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(withRouter(AppFooter));
