import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import LayoutBody from './modules/components/LayoutBody';
import AppAppBar from './modules/views/AppAppBar';
import terms from './modules/views/markdowns/terms.md.js';
import AppFooter from './modules/views/AppFooter';

class Terms extends React.Component{
  constructor(props) {
    super(props);
    window.scrollTo(0,0)
  }


  render() {
   return (
     <React.Fragment>
       <AppAppBar />
       <LayoutBody margin marginBottom>
         <Typography variant="h3" gutterBottom marked="center" align="center">
           Terms
         </Typography>
         <Markdown>{terms}</Markdown>
       </LayoutBody>
       <AppFooter />
     </React.Fragment>
   );
  }
}

export default withRoot(Terms);
