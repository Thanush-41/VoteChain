import React from 'react';
import './Websiteviewer.css';

class WebsiteViewer extends React.Component {
  render() {
    return (
      <div className="website-viewer-container">
        <h1 className="website-viewer-title">Chatbot</h1>
        <iframe
          className="website-viewer-iframe"
          title="External Website"
          src={this.props.url}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default WebsiteViewer;
