// src/components/TicketRow.js
import React from 'react';
import './TicketRow.css';

const TicketRow = ({ ticket }) => {
  return (
    <tr>
      <td>{ticket.organization}</td>
      <td>{ticket.contact}</td>
      <td>{ticket.category}</td>
      <td>{ticket.companycode}</td>
      <td>{ticket.subcategory}</td>
      <td>{ticket.summary}</td>
      <td>{ticket.assignee}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.attachment}</td>
      <td>{ticket.created}</td>
      <td>{ticket.updated}</td>
    </tr>
  );
};
export default TicketRow;