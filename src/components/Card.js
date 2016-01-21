// Dependencies.
import React from 'react';
import Icon from 'react-fa';

// UI components
// import Panel from 'react-bootstrap/lib/Panel';
// import {Panel, Button} from 'react-bootstrap';


// Define class.
class Card extends React.Component {

  // Render method.
  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const description = this.props.description;
    const date = this.props.date;

    // Status.
    const statusText = this.props.status;
    let statusClass;
    let status;

    switch (statusText) {
    case 'Approved':
      status = 'approved';
      break;
    case 'Draft':
      status = 'pending';
      break;
    case 'Pending Approval':
      status = 'pending';
      break;
    case 'Rejected':
      status = 'rejected';
      break;
    case 'Final':
      status = 'approved';
      break;
    case 'Archived':
      status = 'default';
      break;
    default:
      status = 'default';
    }

    switch (status) {
    case 'approved':
      statusClass = 'success';
      break;
    case 'pending':
      statusClass = 'warning';
      break;
    case 'rejected':
      statusClass = 'danger';
      break;
    default:
      statusClass = 'default';
    }

    const cardClass = 'card ' + statusClass;
    const statusTextColor = 'card-status text-' + statusClass;

    return (
      <div className={cardClass}>
        <Icon name="user" className="card-icon fa-lg"/>
        <h1 className="card-title">{title}</h1>
        <h2 className="card-subtitle">{subtitle}</h2>
        <p>{description}</p>
        <div className="card-date">{date}</div>
        <div className={statusTextColor}>{statusText}</div>
      </div>
    );
  }
}

// Validation.
Card.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  description: React.PropTypes.string,
  status: React.PropTypes.string,
  date: React.PropTypes.string
};

// Export.
export default Card;
