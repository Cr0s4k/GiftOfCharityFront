import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import withRouter from "react-router/es/withRouter";

const styles = theme => ({
  title: {
    fontSize: 24,
    cursor: 'pointer'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

class AppAppBar extends React.Component{
  classes = this.props.classes;

  handleClick = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={this.classes.toolbar}>
            <div className={this.classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={this.classes.title}
              onClick={this.handleClick}
            >
              {'giftofcharity'}
            </Link>
            <div className={this.classes.right}>
              {/*<Link*/}
              {/*color="inherit"*/}
              {/*variant="h6"*/}
              {/*underline="none"*/}
              {/*className={classes.rightLink}*/}
              {/*href="/premium-themes/onepirate/sign-in"*/}
              {/*>*/}
              {/*{'Sign In'}*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*variant="h6"*/}
              {/*underline="none"*/}
              {/*className={classNames(classes.rightLink, classes.linkSecondary)}*/}
              {/*href="/premium-themes/onepirate/sign-up"*/}
              {/*>*/}
              {/*{'Sign Up'}*/}
              {/*</Link>*/}
            </div>
          </Toolbar>
        </AppBar>
        <div className={this.classes.placeholder} />
      </div>
    );
  }
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(AppAppBar));
