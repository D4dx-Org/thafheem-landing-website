import React from 'react';
import { Heart } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DonationSection = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/payment');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Help Tafheem ul Quran
            </h2>
            <p className="text-lg text-gray-600">
            Help this great cause by setting aside a portion of your Zakat and Sadaqah
            </p>
          </div>

          {/* Quote Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            {/* Arabic Text */}
            <p className="text-3xl text-center mb-6 leading-relaxed font-arabic" dir="rtl">
              مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ وَلَهُ أَجْرٌ كَرِيمٌ
            </p>

            {/* English Translation */}
            <p className="text-xl text-center text-gray-800 mb-6 italic">
              "Who is it that will give Allah a beautiful loan? A loan that Allah will repay after increasing it many times and grant him a generous reward."
            </p>

            {/* Malayalam Translation */}
            <p className="text-lg text-center text-gray-600 mb-6">
            അല്ലാഹുവിന് കടം കൊടുക്കുന്നവരാരുണ്ട്? വിശിഷ്ടമായ കടം; അല്ലാഹു അത് പലയിരട്ടി വര്‍ധിപ്പിച്ചു തിരിച്ചേകാന്‍. അപ്രകാരം കടം കൊടുക്കുന്നവന്ന് ശ്രേഷ്ഠമായ പ്രതിഫലവുമുണ്ട്.
            </p>

            {/* Reference */}
            <p className="text-center text-blue-500">
              - Surah Al-Hadid 57:11
            </p>
          </div>

          {/* Donation Button */}
          <div className="text-center">
            <Button
              onClick={handleDonateClick}
              className="px-8 py-4 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;