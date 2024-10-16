import React, { useState } from 'react';
import "./GuestRegistrationForm.css";

const GuestScreen = () => {
  const [otp, setOtp] = useState('');
  const [contact, setContact] = useState('+91'); // Start with country code
  const [firstName, setFirstName] = useState(''); // State for first name
  const [lastName, setLastName] = useState(''); // State for last name
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false); // Track OTP visibility
  const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTP has been sent

  // Handle OTP validation
  const validateOtp = (event) => {
    event.preventDefault();
    if (otp === '1234') {
      alert('OTP is valid');
      setIsOtpValid(true);
      setIsOtpVisible(true); // Show OTP input only if valid
    } else {
      alert('Invalid OTP');
      setIsOtpValid(false);
      setIsOtpVisible(false); // Hide OTP input if invalid
    }
  };

  // Handle sending OTP
  const sendOtp = () => {
    alert(`OTP sent to ${contact}`);
    setIsOtpSent(true); // Set OTP as sent
    setIsOtpVisible(true); // Make OTP input visible
  };

  // Handle form submission
  const handleSave = (event) => {
    event.preventDefault();
    if (!isOtpValid) {
      alert('Please validate the OTP before saving.');
      return;
    }
    alert('Form saved successfully!');
    // Logic for saving form data can be added here
  };

  // Handle Schedule click
  const handleSchedule = () => {
    alert('Scheduling...');
  };

  return (
    <div className="guest-registration-form">
      <h2>Guest Registration</h2>
      <form onSubmit={handleSave}>
        <div className="guest-form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="guest-form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="guest-form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="guest-form-group">
          {isOtpVisible && (
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          )}
          <button onClick={sendOtp} type="button" className="guest-send-otp-btn">
            Send OTP
          </button>
          <button onClick={validateOtp} type="button" disabled={!isOtpSent}>
            Validate OTP
          </button>
        </div>
        <div className="guest-form-group">
          <label>Gender</label>
          <select id="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="guest-form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" placeholder="Enter amount" required />
        </div>
        <div className="guest-form-group">
          <label>Payment Type</label>
          <select id="paymentType" required>
            <option value="">Select Payment Type</option>
            <option value="cash">Cash</option>
            <option value="scan">Scan</option>
          </select>
        </div>
        <div className="guest-form-group">
          <label htmlFor="transactionId">Transaction ID</label>
          <input type="text" id="transactionId" placeholder="Enter transaction ID" required />
        </div>
        <div className="guest-form-group">
          <button
            onClick={handleSchedule}
            className="guest-schedule-btn"
            type="button"
          >
            Schedule
          </button>
        </div>
        <div className="guest-form-group">
          <button type="" className="guest-otp-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestScreen;
