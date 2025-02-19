"use client"

import { useState, useEffect } from "react"
import {
  Headphones,
  Download,
  Apple,
  PlayCircle,
  ChevronRight,
  Star,
  BookOpen,
  Languages,
  Share2,
  Globe,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Layout,
  Search,
  BookmarkPlus,
  Smartphone,
  ChevronLeft,
} from "lucide-react"
import Button from "./ui/Button"
import DonationSection from "./ui/donation-section"

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/3.png",
    "/images/app-preview/4.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/7.png",
    "/images/app-preview/8.png",
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Complete Quran Index",
      description: "Navigate through all 114 Surahs with Arabic titles and verse counts for easy access",
      color: "bg-blue-500",
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Read translations in English, Urdu, Malayalam, and more with parallel view mode",
      color: "bg-[#57b8d0]",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Customizable Display",
      description: "Personalize your reading experience with adjustable font sizes and light/dark themes",
      color: "bg-purple-500",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Advanced Audio Features",
      description: "Listen to high-quality recitations from renowned Qaris with background playback support",
      color: "bg-green-500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Quick Search Function",
      description: "Instantly find specific words, phrases, or verses across the entire Quran",
      color: "bg-red-500",
    },
    {
      icon: <BookmarkPlus className="w-8 h-8" />,
      title: "Bookmarks & Notes",
      description: "Save your favorite verses and add personal reflections for future reference",
      color: "bg-amber-500",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Easy Sharing",
      description: "Share Quranic verses with translations directly to social media platforms",
      color: "bg-indigo-500",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Offline Access",
      description: "Download translations and tafseer for seamless offline reading experience",
      color: "bg-teal-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform Sync",
      description: "Access your bookmarks and preferences across all your devices seamlessly",
      color: "bg-pink-500",
    },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transform transition-transform hover:rotate-12 overflow-hidden">
                <img src="/images/logo.png" alt="Thafheem Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-800 text-xl font-bold">Thafheem Ul Quran</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Features", id: "features" },
                { label: "Languages", id: "languages" },
                // { label: 'Testimonials', id: 'testimonials' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-[#57b8d0] transition-colors flex items-center space-x-1 group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </button>
              ))}
              <Button
                onClick={() => window.open("https://pages.razorpay.com/thafheem-donation", "_blank")}
                className="px-6 py-2"
              >
                Donate
              </Button>
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
                Experience Maulana Maududi's renowned tafseer in a modern, interactive interface designed for deep
                understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open("https://apps.apple.com/in/app/thafheem-ul-quran/id1292572556", "_blank")}
                  className="px-8 py-4"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://play.google.com/store/apps/details?id=com.d4media.thafheem", "_blank")
                  }
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800"
                >
                  <PlayCircle className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
                <Button
                  onClick={() => window.open("https://thafheem.net", "_blank")}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700"
                >
                  <Globe className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Continue with</div>
                    <div className="font-semibold">Web Read</div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#57b8d0]/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:rotate-2 transition-transform duration-500 max-w-sm mx-auto">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`App Preview ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[600px] object-contain rounded-2xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-[#57b8d0]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Deep Understanding</h2>
            <p className="text-gray-600">Everything you need to explore and understand the Quran in one place</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Language Support Section */}
      <section id="languages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multilingual Support</h2>
            <p className="text-gray-600">Access the Quran in multiple languages for better understanding</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { lang: "മലയാളം", code: "Malayalam" },
              { lang: "اردو", code: "Urdu" },
              { lang: "தமிழ்", code: "Tamil" },
              { lang: "English", code: "English" },
              { lang: "বাংলা", code: "Bengali" },
              { lang: "हिंदी", code: "Hindi" },
            ].map((lang, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{lang.lang}</h3>
                <p className="text-gray-600">{lang.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <div className="flex -space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-4 border-white">
                  <img
                    src={`/images/user${i + 1}.png`}
                    alt={`User ${i + 1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Users Worldwide</h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Join thousands of satisfied users exploring the Quran with Thafheem</p>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col items-center space-y-8">
            <Button onClick={() => (window.location.href = "mailto:info@d4media.in")} className="px-6 py-3">
              <Mail className="w-5 h-5 mr-2" />
              <span>Contact Support</span>
            </Button>

            <div className="flex space-x-6">
              <Button
                onClick={() =>
                  window.open("https://www.facebook.com/people/Thafheem-ul-Quran/61572552116852/", "_blank")
                }
                variant="ghost"
                className="w-12 h-12 rounded-full p-0"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </Button>
              <Button
                onClick={() => window.open("https://www.instagram.com/thafheemulquran_app/", "_blank")}
                variant="ghost"
                className="w-12 h-12 rounded-full p-0"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </Button>
              <Button
                onClick={() => window.open("https://x.com/ThafheemulQApp/", "_blank")}
                variant="ghost"
                className="w-12 h-12 rounded-full p-0"
              >
                <Twitter className="w-6 h-6 text-gray-800" />
              </Button>
            </div>
          </div>
          {/* Footer Credits */}
          <footer className="py-6 bg-gray-50">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Thafheem ul Quran. Developed by{" "}
              <a
                href="https://d4dx.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#57b8d0] hover:underline"
              >
                D4DX
              </a>
            </p>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

