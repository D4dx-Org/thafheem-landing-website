import React, { useState, useEffect } from 'react';
import { 
  Book, 
  Headphones, 
  Settings, 
  Download, 
  Apple, 
  PlayCircle,
  Moon,
  Sun,
  ChevronRight,
  Star,
  BookOpen,
  Heart,
  Languages,
  Volume2,
  Bookmark,
  Share2
} from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center transform transition-transform hover:rotate-12 overflow-hidden">
                <img 
                  src="/images/logo.png"
                  alt="Thafheem Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-800 text-xl font-bold">Thafheem Ul Quran</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Features', 'How It Works', 'Testimonials', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-[#57b8d0] transition-colors flex items-center space-x-1 group"
                >
                  <span>{item}</span>
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#57b8d0]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 relative z-10">
              <div className="inline-flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                Trusted by 100,000+ users worldwide
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover the
                <span className="text-[#57b8d0] block">Wisdom of Quran</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience Maulana Maududi's renowned tafseer in a modern, 
                interactive interface designed for deep understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 bg-[#57b8d0] text-white px-8 py-4 rounded-xl hover:bg-[#4ca6bc] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <PlayCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#57b8d0]/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:rotate-2 transition-transform duration-500 max-w-sm mx-auto">
            <img 
                  src="/images/app-preview.png"
                  alt="App Preview" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-2xl"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#57b8d0]" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">Loved by thousands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
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
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Complete Quran Index",
                description: "Navigate through all 114 Surahs with Arabic titles and verse counts",
                color: "bg-blue-500"
              },
              {
                icon: <Volume2 className="w-8 h-8" />,
                title: "Multi-Feature Reading",
                description: "Translations, audio playback, and bookmarks for each verse",
                color: "bg-[#57b8d0]"
              },
              {
                icon: <Languages className="w-8 h-8" />,
                title: "Personalized Experience",
                description: "Customize fonts, languages, themes, and audio options",
                color: "bg-purple-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 transform transition-transform hover:rotate-12`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Simple Steps to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Download",
                description: "Get the app from your preferred store",
                icon: <Download className="w-6 h-6" />
              },
              {
                step: "2",
                title: "Sign Up",
                description: "Create your account in seconds",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Explore",
                description: "Browse through the Quran and tafseer",
                icon: <Bookmark className="w-6 h-6" />
              },
              {
                step: "4",
                title: "Share",
                description: "Share insights with others",
                icon: <Share2 className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-[#57b8d0] rounded-full flex items-center justify-center text-white font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    {index < 3 && (
                      <div className="hidden md:block w-8 h-8 bg-[#57b8d0]/10 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-[#57b8d0]" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <div className="flex -space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-4 border-white">
 <img 
                    src={`/images/user${i + 1}.png`} 
                    alt={`User ${i + 1}`} 
                    className="w-full h-full object-cover rounded-full"
                  />                </div>
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Users Worldwide
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">
              Join thousands of satisfied users exploring the Quran with Thafheem
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;