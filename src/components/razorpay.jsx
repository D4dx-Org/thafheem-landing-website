import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { countries } from 'countries-list';

const RazorpayPayment = () => {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [paymentMethod, setPaymentMethod] = useState('');

  const predefinedAmounts = [200, 500, 1000];

  // Convert countries object to array and format for our use
  const countryList = Object.entries(countries).map(([code, country]) => ({
    code: `+${country.phone}`,
    name: country.name,
    emoji: country.emoji
  })).sort((a, b) => {
    if (a.code === '+91') return -1;
    if (b.code === '+91') return 1;
    return a.name.localeCompare(b.name);
  });

  // Add validation functions
  const isValidAmount = () => {
    if (!amount) return false;
    const numAmount = parseFloat(amount);
    return numAmount >= 10 && !amount.startsWith('.') && !amount.startsWith('0');
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = () => {
    return phone.length === 10 && /^[0-9]+$/.test(phone);
  };

  const isFormValid = () => {
    return isValidAmount() && isValidEmail() && isValidPhone();
  };

  // Modify handlePayment
  const handlePayment = async () => {
    if (!isFormValid()) {
      if (!isValidEmail()) {
        alert('Please enter a valid email address');
        return;
      }
      if (!isValidPhone()) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
      if (!isValidAmount()) {
        alert('Please enter an amount greater than ₹10');
        return;
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: amount * 100,
        currency: 'INR',
        name: 'Thafheem Ul Quran',
        description: 'Donation Payment',
        handler: async function(response) {
          // Prepare payment data
          const paymentData = {
            amount: amount,
            email: email,
            phoneNumber: `${countryCode}${phone}`,
            transactionId: response.razorpay_payment_id,
            timestamp: new Date().toISOString(),
            paymentStatus: 'success'
          };

          try {
            // Send payment data to your API
            const apiResponse = await fetch('https://directus.d4dx.co/items/thafheem_donation_list', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(paymentData)
            });

            if (apiResponse.ok) {
              alert('Payment Successful! Transaction ID: ' + response.razorpay_payment_id);
            } else {
              console.error('Failed to save payment data');
              alert('Payment successful but failed to save details. Please contact support with Transaction ID: ' + response.razorpay_payment_id);
            }
          } catch (error) {
            console.error('API Error:', error);
            alert('Payment successful but failed to save details. Please contact support with Transaction ID: ' + response.razorpay_payment_id);
          }
        },
        prefill: {
          email: email,
          contact: `${countryCode}${phone}`,
          name: email.split('@')[0] // Using email username as name
        },
        theme: {
          color: '#57b8d0'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  };

  // Add amount input validation
  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow valid numbers
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Help Tafheem Ul Quran
          </h2>
          <p className="text-base text-gray-600">
            Help this great cause by setting aside a portion of your Zakat and Sadaqah
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          {predefinedAmounts.map((amt) => (
            <button
              key={amt}
              className={`py-2.5 px-4 rounded-xl border-2 transition-all
                ${amount === amt.toString() 
                  ? 'bg-[#57b8d0] text-white border-[#57b8d0]' 
                  : 'border-[#57b8d0] text-[#57b8d0] hover:bg-[#57b8d0] hover:text-white'}`}
              onClick={() => setAmount(amt.toString())}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mb-8">
          <button 
            className={`py-2.5 px-4 rounded-xl border-2 transition-all w-1/3
              ${amount === '2000' 
                ? 'bg-[#57b8d0] text-white border-[#57b8d0]' 
                : 'border-[#57b8d0] text-[#57b8d0] hover:bg-[#57b8d0] hover:text-white'}`}
            onClick={() => setAmount('2000')}
          >
            ₹2000
          </button>
          <div className="flex flex-2 border-2 rounded-xl overflow-hidden w-2/3">
            <span className="px-4 py-2.5 bg-gray-50 text-gray-600 border-r">INR</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter Amount"
              className="flex-1 px-4 py-2.5 outline-none"
            />
          </div>
        </div>

        {/* Add error message when amount is invalid */}
        {amount && !isValidAmount() && (
          <p className="text-red-500 text-sm text-center mb-4">
            Please enter a valid amount
          </p>
        )}

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2.5 rounded-xl border-2 focus:outline-none transition-colors ${
                email && !isValidEmail() 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-[#57b8d0]'
              }`}
            />
            {email && !isValidEmail() && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-24 px-3 py-2.5 rounded-xl border-2 focus:outline-none focus:border-[#57b8d0] transition-colors bg-white appearance-none text-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                {countryList.map((country) => (
                  <option 
                    key={country.code} 
                    value={country.code}
                    className="text-left"
                  >
                    {country.code} - {country.name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneInput}
                placeholder="Enter phone number"
                pattern="[0-9]*"
                maxLength="10"
                required
                className={`flex-1 px-4 py-2.5 rounded-xl border-2 focus:outline-none transition-colors ${
                  phone && !isValidPhone() 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-200 focus:border-[#57b8d0]'
                }`}
              />
            </div>
            {phone && !isValidPhone() && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number</p>
            )}
          </div>
        </div>

        <button 
          className={`w-full py-3 text-white rounded-xl transition-colors font-medium text-lg mb-4 ${
            isFormValid() 
              ? 'bg-[#57b8d0] hover:bg-[#4ca6bc] cursor-pointer' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handlePayment}
          disabled={!isFormValid()}
        >
          Proceed to Pay {amount ? `₹${amount}` : ''}
        </button>

        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">Contact Support for any issues</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => (window.location.href = "mailto:info@d4media.in")}
              className="w-full sm:w-auto inline-flex items-center justify-center text-gray-600 hover:text-[#57b8d0] transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-50 border border-gray-200"
            >
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Email Support</span>
            </button>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <button
              onClick={() => (window.location.href = "tel:+919946666139")}
              className="w-full sm:w-auto inline-flex items-center justify-center text-gray-600 hover:text-[#57b8d0] transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-50 border border-gray-200"
            >
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 99466 66139</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPayment;
