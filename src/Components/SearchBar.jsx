import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [criteria, setCriteria] = useState({

    today: false,
    page: 0,
    size: 5
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://172.16.20.161:8080/search/v1/Api/serachApi`, {
        params: {
          ...criteria,
          searchText
        }
      });
      console.log(response.data);
      // Handle the response data here
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCriteria({
      ...criteria,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="ticketNo"
          placeholder="Ticket No"
          value={criteria.ticketNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="transactionType"
          placeholder="Transaction Type"
          value={criteria.transactionType}
          onChange={handleChange}
        />
        <input
          type="date"
          name="transactionDate"
          placeholder="Transaction Date"
          value={criteria.transactionDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleNo"
          placeholder="Vehicle No"
          value={criteria.vehicleNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="supplierName"
          placeholder="Supplier Name"
          value={criteria.supplierName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={criteria.customerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="transporterName"
          placeholder="Transporter Name"
          value={criteria.transporterName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="materialName"
          placeholder="Material Name"
          value={criteria.materialName}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="today"
            checked={criteria.today}
            onChange={handleChange}
          />
          Today
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
