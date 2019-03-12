import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import ProductInformation from "./modules/views/ProductInformation";

class Index extends React.Component{
  constructor(props) {
    super(props);
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProductInformation />
        <ProductSmokingHero />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(Index);
