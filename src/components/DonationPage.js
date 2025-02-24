import React from 'react';
import { Heart, Smartphone, Book, HandHeart, Globe } from 'lucide-react';

const Header = () => (
  <header className="bg-[#2B4C8C] py-8 px-4 text-center mb-12">
    <img src="/api/placeholder/120/60" alt="Tafheem Logo" className="h-16 w-auto mx-auto" />
  </header>
);

const SupportSection = () => (
  <div className="max-w-3xl mx-auto mb-8 text-center px-5">
    <h1 className="text-3xl md:text-4xl text-gray-800 mb-4 font-semibold leading-tight">
      Support Tafheem ul Quran
    </h1>
    <p className="text-gray-600">
      Join us in spreading the understanding of Allah's words through your generous contribution
    </p>
  </div>
);

const QuoteCard = () => (
  <div className="bg-white p-8 rounded-lg text-center mx-auto max-w-3xl mb-8 shadow-sm">
    <p className="text-xl font-bold mb-2 text-gray-800">
      مَّن ذَا ٱلَّذِى يُقْرِضُ ٱللَّهَ قَرْضًا حَسَنًۭا فَيُضَـٰعِفَهُۥ لَهُۥ وَلَهُۥٓ أَجْرٌۭ كَرِيمٌۭ
    </p>
    <p className="text-lg italic text-gray-700 mb-2">
      "Who is it that would loan Allah a goodly loan so He will multiply it for him and he will have a noble reward?"
    </p>
    <p className="text-lg text-gray-700 mb-2">
      അല്ലാഹുവിന് കടം കൊടുക്കുന്നവരാരുണ്ട്? വിശിഷ്ടമായ കടം; അല്ലാഹു അത് പലയിരട്ടി വര്‍ധിപ്പിച്ചു തിരിച്ചേകാന്‍. അപ്രകാരം കടം കൊടുക്കുന്നവന്ന് ശ്രേഷ്ഠമായ പ്രതിഫലവുമുണ്ട്.
    </p>
    <span className="text-blue-500 text-sm">- Surah Al-Hadid 57:11</span>
  </div>
);

const DonateButton = () => (
  <div className="text-center">
    <a
      href="https://rzp.io/rzp/thafheem-donation"
      className="inline-flex items-center gap-2 bg-blue-500 text-white px-10 py-3 rounded-md font-medium text-lg hover:bg-blue-600 transition-all shadow-md hover:-translate-y-0.5"
    >
      <Heart size={20} />
      Donate Now
    </a>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg text-center shadow-sm">
    <div className="text-blue-500 mb-4">
      <Icon size={24} className="mx-auto" />
    </div>
    <h3 className="text-gray-800 mb-2 font-medium text-lg">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Benefits = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 my-12">
    <BenefitCard
      icon={Book}
      title="Spread Knowledge"
      description="Help make Quranic understanding accessible to everyone through modern interpretations"
    />
    <BenefitCard
      icon={HandHeart}
      title="Continuous Charity"
      description="Earn ongoing rewards as people benefit from the knowledge you help spread"
    />
    <BenefitCard
      icon={Globe}
      title="Global Impact"
      description="Support the translation and interpretation of Quran for a global audience"
    />
  </div>
);

const AppDownload = () => (
  <div className="text-center py-12 bg-white mt-12">
    <h2 className="text-2xl md:text-3xl text-gray-800 mb-2">Download Our App</h2>
    <p className="text-gray-600 mb-8">Experience Tafheem ul Quran on your mobile device</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.d4media.thafheem"
        className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all mx-auto md:mx-2"
      >
        <Smartphone size={24} />
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-90">GET IT ON</span>
          <strong className="text-lg">Google Play</strong>
        </div>
      </a>
      <a
        href="https://apps.apple.com/in/app/thafheem-ul-quran/id1292572556"
        className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all mx-auto md:mx-2"
      >
        <Smartphone size={24} />
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-90">Download on the</span>
          <strong className="text-lg">App Store</strong>
        </div>
      </a>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#2B4C8C] text-white py-8 px-4 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p>&copy; 2024 Tafheem ul Quran. All rights reserved.</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X" className="opacity-80 hover:opacity-100 transition-opacity">
          Privacy Policy
        </a>
        <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
          Terms of Service
        </a>
        <a href="https://d4dx.co/contact/" className="opacity-80 hover:opacity-100 transition-opacity">
          Contact Us
        </a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SupportSection />
      <QuoteCard />
      <DonateButton />
      <Benefits />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default App;