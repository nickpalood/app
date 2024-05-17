// WidgetComponent.js
import React from 'react';
//import './WidgetComponent.css'; // Import your CSS file for styling

const WidgetComponent = () => {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2>Widget Title</h2>
      </div>
      <div className="widget-content">
        <p>This is the content of the widget.</p>
      </div>
      <div className="widget-footer">
        <button>Close Widget</button>
      </div>
    </div>
  );
};

export default WidgetComponent;
