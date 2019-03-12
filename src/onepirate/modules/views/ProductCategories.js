import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import API from "../../../services/API";
import withRouter from "react-router/es/withRouter";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

class ProductCategories extends React.Component{
  classes = this.props.classes;
  state = {
    products: []
  };

  componentDidMount() {
    API.getCharityProjects()
      .then(products => {
        this.setState({
          products: products
        })
      });
  }

  handleClick = (product) => () => {
    this.props.history.push(`/products/${product.id}`)
  };

  render() {
    return (
      <LayoutBody className={this.classes.root} component="section" width="large" id="products">
        <Typography variant="h4" marked="center" align="center" component="h2">
          For all tastes and all desires
        </Typography>
        <div className={this.classes.images}>
          {this.state.products.map(product => (
            <ButtonBase
              key={product.title}
              className={this.classes.imageWrapper}
              style={{
                width: '50%',
              }}
              onClick={this.handleClick(product)}
            >
              <div
                className={this.classes.imageSrc}
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                }}
              />
              <div className={this.classes.imageBackdrop} />
              <div className={this.classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={this.classes.imageTitle}
                >
                  {product.name}
                  <div className={this.classes.imageMarked} />
                </Typography>
              </div>
            </ButtonBase>
          ))}
        </div>
      </LayoutBody>
    );
  }
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ProductCategories));
