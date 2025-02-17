import React from 'react';
import { 
  BookOpen, 
  Languages, 
  Layout, 
  Headphones, 
  Search,
  BookmarkPlus,
  Share2,
  Download,
  Devices
} from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Complete Quran Index",
      description: "Navigate through all 114 Surahs with Arabic titles and verse counts for easy access",
      color: "bg-blue-500"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Read translations in English, Urdu, Malayalam, and more with parallel view mode",
      color: "bg-[#57b8d0]"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Customizable Display",
      description: "Personalize your reading experience with adjustable font sizes and light/dark themes",
      color: "bg-purple-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Advanced Audio Features",
      description: "Listen to high-quality recitations from renowned Qaris with background playback support",
      color: "bg-green-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Quick Search Function",
      description: "Instantly find specific words, phrases, or verses across the entire Quran",
      color: "bg-red-500"
    },
    {
      icon: <BookmarkPlus className="w-8 h-8" />,
      title: "Bookmarks & Notes",
      description: "Save your favorite verses and add personal reflections for future reference",
      color: "bg-amber-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Easy Sharing",
      description: "Share Quranic verses with translations directly to social media platforms",
      color: "bg-indigo-500"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Offline Access",
      description: "Download translations and tafseer for seamless offline reading experience",
      color: "bg-teal-500"
    },
    {
      icon: <Devices className="w-8 h-8" />,
      title: "Cross-Platform Sync",
      description: "Access your bookmarks and preferences across all your devices seamlessly",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Deep Understanding
          </h2>
          <p className="text-gray-600">
            Everything you need to explore and understand the Quran in one place
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div 
                className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 transform transition-transform duration-300 hover:rotate-12`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;