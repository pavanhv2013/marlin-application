import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./NewMemberRegistration.css"

const NewMemberRegistration = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [contact, setContact] = useState('');
  const [actualAmount, setActualAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [roundedAmount, setRoundedAmount] = useState(0);
  const [packageEndDate, setPackageEndDate] = useState('');
  const [packageExtendedDate, setPackageExtendedDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('');
  const [coachingMembership, setCoachingMembership] = useState('');
  const [transactionID, setTransactionID] = useState('');
  const [daysToExtend, setDaysToExtend] = useState(1); // Default value of 1 day


  const citiesAndPincodes = {
    Mysore: '570001',
    Bangalore: '560001',
    Hubli: '580020',
    Dharwad: '580001',
    Mangalore: '575001',
    Belgaum: '590001',
    Gulbarga: '585101',
    Davanagere: '577001',
    Bellary: '583101',
    Bijapur: '586101',
    Tumkur: '572101',
    Udupi: '576101',
    Chitradurga: '577501',
    Kolar: '563101',
    Hassan: '573201',
    Chikmagalur: '577101',
    Kodagu: '571201',
    Bagalkote: '587101',
    Raichur: '584101',
    Haveri: '581110',
    Mandya: '571401',

  };
  const areasAndPincodes = {
    Ashokpuram: '570008',
    'Basaveswara Block': '571602',
    Belvadi: '571186',
    Bogadi: '570026',
    'Brindavan Extension': '570020',
    'Chamundi Extn': '570004',
    'Chamundi Hill': '570010',
    'Chamundipuram': '570004',
    'Devaraja Mohalla': '570001',
    'Food Technology': '570013',
    'Gandhinagar': '570007',
    'Gayathripuram': '570001',
    'Gokulam Extension': '570002',
    Hinkal: '570017',
    'Indira Nagar': '570010',
    'Industrial Estate': '570020',
    'Industrial Suburb': '570008',
    Iningere: '570001',
    'Ittigegud': '570010',
    Jalapuri: '570019',
    'Jayalakshmipuram Extension': '570012',
    'Jayanagar Extension': '570014',
    'J.P.Nagar': '570008',
    'J.T. Extension': '570023',
    'Jyothinagar': '570011',
    'Kabir Road': '570001',
    'Kantharaje Urs Road': '570004',
    'K.R.Circle': '570001',
    'K.R.Mohalla': '570024',
    'Krishnamurthy Puram': '570004',
    'Kuvempunagar': '570023',
    'Kyathamaranahalli': '570019',
    'Lakshmipuram': '570004',
    'Lashkar Mohalla': '570001',
    'Manasagangothri': '570006',
    'Mandi Mohalla': '570021',
    'Metagalli': '570016',
    'Mysore Fort': '570004',
    'Mysore Head Office': '570001',
    'Mysore Law Courts': '570004',
    'Mysore South': '570008',
    'Mysore University': '570005',
    'Nachanahalli Palya': '570008',
    'Narasimharaja Mohalla': '570007',
    'Nanjumallige Circle': '570004',
    'Nazarbad': '570010',
    'New Bamboo Bazar': '570021',
    'New Banimantap Extension': '570015',
    'P.T.C.Campus': '570011',
    'Rajendranagar': '570007',
    'Ramakrishna Vidyalaya': '570020',
    'Ramanuja Road': '570004',
    'Regional College of Education': '570006',
    'Saraswathi Puram': '570009',
    'Sarvajanika Hostel Road': '570004',
    'Second Idiga': '570021',
    'Shivarathreeswara Nagar': '570015',
    'Siddarthanagar': '570011',
    'Sri Krishnarajendra Mills': '570003',
    'Srirampura': '570008',
    'Tilak Nagar': '570021',
    'Udayagiri': '570019',
    'University Campus': '570005',
    'V.V.Market': '570004',
    'Vani Vilils Mohalla': '570002',
    'Vidyaranyapuram': '570008',
    'Vijayanagar': '570017',
    'Vishweshwara Nagar': '570008',
    'Yadavagiri': '570020',
    'Yelwal': '571130',
    
  };
  

  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    
    // Reset area and pincode when changing city
    setArea('');
    setPincode('');
    
    // Additional logic to handle specific city cases can be added here if needed
  };
  
  const handleSendOtp = () => {
    if (contact.length === 10) {
      toast.success(`OTP sent to +91${contact}`, { autoClose: 2000 });
      setOtpSent(true);
    } else {
      toast.error('Please enter a valid 10-digit phone number.', { autoClose: 2000 });
    }
  };

  const handleVerifyOtp = () => {
    if (otp) {
      toast.success('OTP verified successfully!', { autoClose: 2000 });
    } else {
      toast.error('Please enter the OTP.', { autoClose: 2000 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!', { autoClose: 2000 });
  };

  // Handle actual amount and discount changes
  const handleActualAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setActualAmount(value);
    calculateDiscountedAmount(value, discount);
  };

  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value);
    setDiscount(value);
    calculateDiscountedAmount(actualAmount, value);
  };

  const calculateDiscountedAmount = (actualAmount, discount) => {
    if (actualAmount > 0 && discount > 0) {
      const discountAmount = (actualAmount * discount) / 100;
      const discounted = actualAmount - discountAmount;
      setDiscountedAmount(discounted);
      setRoundedAmount(Math.floor(discounted));
    } else {
      setDiscountedAmount(actualAmount);
      setRoundedAmount(Math.floor(actualAmount));
    }
  };

  // Update package end date by adding 5 days
  const handleExtendDate = () => {
    if (packageEndDate) {
      const newDate = new Date(packageEndDate);
      if (newDate instanceof Date && !isNaN(newDate.getTime())) {
        newDate.setDate(newDate.getDate() + parseInt(daysToExtend)); // Extend by the specified number of days
        setPackageExtendedDate(newDate.toISOString().split('T')[0]); // Format the date to YYYY-MM-DD
  
        // Also update the package end date if needed
        const newEndDate = new Date(packageEndDate);
        newEndDate.setDate(newEndDate.getDate() + parseInt(daysToExtend));
        setPackageEndDate(newEndDate.toISOString().split('T')[0]); // Update package end date
      } else {
        toast.error('Invalid package end date', { autoClose: 2000 });
      }
    } else {
      toast.error('Please enter a valid package end date', { autoClose: 2000 });
    }
  };
  


  const handlePhotoUpload = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };
  const handleAreaChange = (e) => {
    const selectedArea = e.target.value;
    setArea(selectedArea);
    setPincode(areasAndPincodes[selectedArea]);
  };
  

  return (
    <div className="registration-containers">
      <ToastContainer />
      <div className="registration-forms">
        <h2 className='h2name'>Member Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-blocks">
            <div className="form-block personal-info">
              <h3>Personal Information</h3>
              <div className="form-group">
      <label htmlFor="title">Title:</label>
      <select
        name="title"
        id="title"
        className="small-input select-input" // Add the small-input and select-input classes
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      >
        <option value="">Select Title</option>
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
      </select>
    </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="schoolOrCompany">School/Company Name:</label>
                <input type="text" name="schoolOrCompany" id="schoolOrCompany" required />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <select name="city" id="city" value={city} onChange={handleCityChange} required>
                  <option value="">Select City</option>
                  {Object.keys(citiesAndPincodes).map((cityName) => (
                    <option key={cityName} value={cityName}>{cityName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
  <label htmlFor="area">Area:</label>
  <select name="area" id="area" value={area} onChange={handleAreaChange} required>
    <option value="">Select Area</option>
    {city === 'Mysore' && Object.keys(areasAndPincodes).map((areaName) => (
      <option key={areaName} value={areaName}>{areaName}</option>
    ))}
  </select>
</div>

              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" name="state" id="state" value="Karnataka" readOnly required />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode:</label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)} // Making it editable
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="parentOrGuardian">Parent/Guardian Name:</label>
                <input type="text" name="parentOrGuardian" id="parentOrGuardian" required />
              </div>


              <div className="form-group">
  <label htmlFor="coachingMembership">Coaching or Membership:</label>
  <input
    type="text"
    id="coachingMembership"
    value={coachingMembership}
    onChange={(e) => setCoachingMembership(e.target.value)}
    required
  />
</div>

              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                
                <div className="contact-group">
                  <input
                    type="text"
                    name="countryCode"
                    id="countryCode"
                    defaultValue="+91"
                    readOnly
                    className="country-code"
                  />
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    placeholder="+911234567890"
                    required
                    onChange={(e) => setContact(e.target.value)}
                    maxLength={10}
                  />
                </div>
                <button type="button" className="send-btn" onClick={handleSendOtp}>
                  Send OTP
                </button>
                {otpSent && (
                  <div className="otp-verification">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      placeholder="Enter OTP"
                      required
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button type="button" className='otp-btn-verify' onClick={handleVerifyOtp}>
                      Verify OTP
                    </button>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea name="address" id="address" rows="4" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="aadharUpload">Upload Aadhar:</label>
                <input type="file" name="aadharUpload" id="aadharUpload" accept=".pdf,.jpg,.jpeg,.png" required />
              </div>
              <div className="form-group">
                <label htmlFor="photoUpload">Upload Photo:</label>
                <input type="file" name="photoUpload" id="photoUpload" accept=".jpg,.jpeg,.png" onChange={handlePhotoUpload} required />
              </div>
              {photo && <img src={photo} alt="Uploaded" className="photo-preview" />}
            </div>

            <div className="form-block package-info">
              <h3>Package Information</h3>
              <div className="form-group">
                <label htmlFor="packageType">Package Type:</label>
                <select name="packageType" id="packageType" required>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="packageStartDate">Package Start Date:</label>
                <input type="date" name="packageStartDate" id="packageStartDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="packageActualStartDate">Package Actual Start Date:</label>
                <input type="date" name="packageActualStartDate" id="packageActualStartDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="packageEndDate">Package End Date:</label>
                <input type="date" name="packageEndDate" id="packageEndDate" value={packageEndDate} onChange={(e) => setPackageEndDate(e.target.value)} required />
              </div>
              <div className="form-group">
  <label htmlFor="packageExtendedDate">Package Extended Date:</label>
  <input
    type="date"
    name="packageExtendedDate"
    id="packageExtendedDate"
    value={packageExtendedDate}
    readOnly
  />
  <div className="extend-controls">
    <label htmlFor="daysToExtend">Extend by:</label>
    <input
      type="number"
      name="daysToExtend"
      id="daysToExtend"
      min="1"
      max="30" // Optional: Limit the maximum number of days
      value={daysToExtend}
      onChange={(e) => setDaysToExtend(e.target.value)} // Ensure you manage this state
    />
    <button type="button" className='extend-btn' onClick={handleExtendDate}>Extend</button>
  </div>
</div>

              </div>


            <div className="form-block payment-info">
              <h3>Payment Information</h3>
              <div className="form-group">
  <label htmlFor="amount">Actual Amount (₹):</label>
  <div className="input-container">
    
    <input
      type="number"
      name="amount"
      id="amount"
      required
      onChange={handleActualAmountChange}
    />
  </div>
</div>

              <div className="form-group">
                <label htmlFor="discount">Discount (%):</label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
               
                  required
                  onChange={handleDiscountChange}
                />
              </div>
              <div className="form-group">
  <label htmlFor="discountedAmount">Discounted Amount (₹):</label>
  <div className="input-container">
    
    <input
      type="number"
      name="discountedAmount"
      id="discountedAmount"
      value={discountedAmount}
      readOnly
    />
  </div>
</div>

<div className="form-group">
  <label htmlFor="roundedAmount">Rounded Amount (₹):</label>
  <div className="input-container">

    <input
      type="number"
      name="roundedAmount"
      id="roundedAmount"
      value={roundedAmount}
      readOnly
    />
  </div>
</div>

              <div className="">
                <label htmlFor="paymentType">Payment Type:</label>
                <select name="paymentType" id="paymentType" className='small-input'required>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="upi">UPI</option>
                  <option value="card">Card</option>
                </select>
          </div>
          <div className="form-group">
  <label htmlFor="transactionID">Transaction ID:</label>
  <input
    type="text"
    id="transactionID"
    value={transactionID}
    onChange={(e) => setTransactionID(e.target.value)}
    required
  />
</div>

            </div>
            </div>
            <div className="form-group">
  <button type="submit" className="submit-btn">Submit</button>
  <button type="button" className="schedule-btn">Schedule</button>
</div>


        </form>
      </div>
    </div>
  );
};

export default NewMemberRegistration;
