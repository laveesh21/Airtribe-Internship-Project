import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./LeadUpdate.css"

function LeadUpdate() {
  const [leadData, setLeadData] = useState({
    status: '',
    inst_comment: ''
  });

  const { lead_id } = useParams(); // Extracting lead_id from the URL params

  useEffect(() => {
    // Fetch lead data using lead_id if needed
  }, [lead_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData({
      ...leadData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/leads/${lead_id}`, leadData);
      console.log(response.data); // Log the response from the backend
      // Reset the form after successful submission
      setLeadData({
        status: '',
        inst_comment: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='leadUpdateContainer'>
      <h2>Update Lead</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={leadData.status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="Accept">Accept</option>
            <option value="Reject">Reject</option>
            <option value="Waiting">Waiting</option>
          </select>
        </div>
        <div>
          <label htmlFor="inst_comment">Institution Comment:</label>
          <textarea
            id="inst_comment"
            name="inst_comment"
            value={leadData.inst_comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className='btn' type="submit">Update</button>
      </form>
    </div>
  );
}

export default LeadUpdate;
