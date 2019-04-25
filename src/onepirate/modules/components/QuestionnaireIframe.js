import React from 'react'
import IframeComm from 'react-iframe-comm'
import PropTypes from 'prop-types'

class QuestionnaireIframe extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  attributes = {
    src: '/quick-quiz/index.htm',
    width: '100%',
    height: '630',
    frameBorder: 0
  };

  postMessageData = JSON.stringify(this.props.data);

  render() {
    return (
      <IframeComm
        attributes={this.attributes}
        postMessageData={this.postMessageData}
        handleReady={this.onReady}
        handleReceiveMessage={this.props.handleReceiveMessage}
      />
    );
  }
}

export default QuestionnaireIframe;