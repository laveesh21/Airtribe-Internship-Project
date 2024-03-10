import React, { useState } from 'react';
import axios from 'axios';
import './LeadSearch.css'


const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

function LeadSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`http://localhost:5000/leads/search/${searchTerm}`);
      console.log("Check React 1")
      console.log(response)
      setLeads(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  console.log('Leads:', leads); // Log the value of leads

  return (
    <div className='lead-search-container'>
      <h1>Lead Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter lead name"
      />
      <button className="btn" onClick={handleSearch} disabled={!searchTerm || loading}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {leads.map((lead) => (
          <li key={lead.lead_id}>{lead.lead_id} - {lead.lead_name} - {lead.lead_email} - {lead.lead_phone_number} - {lead.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeadSearch;
