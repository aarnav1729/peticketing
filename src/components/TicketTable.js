// src/components/TicketTable.js
import React from 'react';
import TicketRow from './TicketRow';
import './TicketTable.css';

const TicketTable = ({ tickets }) => {
  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>Organization</th>
          <th>Contact</th>
          <th>Category</th>
          <th>Company Code</th>
          <th>Subcategory</th>
          <th>Summary</th>
          <th>Assignee</th>
          <th>Priority</th>
          <th>Attachment</th>
          <th>Created</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
          <TicketRow key={index} ticket={ticket} />
        ))}
      </tbody>
    </table>
  );
};
export default TicketTable;
