'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sprout,
  Brain,
  Smartphone,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Leaf,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle,
  PlayCircle,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI Disease Detection',
      description: 'Advanced ML models identify crop diseases and soil quality issues in real-time through image analysis.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Predictive analytics for yield forecasts, input recommendations, and market price predictions.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'USSD Access',
      description: 'Offline access via USSD (*567#) for price checks, disease reporting, and agricultural advisory.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Market Integration',
      description: 'Seamless produce grading, inventory management, and direct market access for better pricing.',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const stats = [
    { label: 'Active Farmers', value: '50K+', icon: Users },
    { label: 'Crop Diseases Detected', value: '2.3M+', icon: Leaf },
    { label: 'States Covered', value: '28', icon: Globe },
    { label: 'Average Yield Increase', value: '35%', icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Wheat Farmer, Punjab',
      content: 'AgriConnect helped me detect wheat rust disease early, saving 80% of my crop. The USSD feature works perfectly in my village.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Priya Sharma',
      role: 'Vegetable Producer, Maharashtra',
      content: 'The market integration feature connected me directly with buyers, increasing my profits by 40%.',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Mohammed Ali',
      role: 'Rice Farmer, West Bengal',
      content: 'Real-time weather alerts and soil quality insights have revolutionized how I manage my fields.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                AgriConnect India
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-800/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
                <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
                <a href="#solutions" className="block px-3 py-2 text-gray-300 hover:text-white">Solutions</a>
                <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
                <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600">
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-green-950/20" />
        <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl" />
        <div className="absolute top-60 right-40 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                <Zap className="h-4 w-4" />
                <span>Revolutionizing Agriculture with AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                The Next
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Generation
                </span>
                <br />
                Agricultural
                <br />
                Platform.
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl">
                Enhance agricultural productivity through ML-driven insights, streamline produce management, 
                and ensure inclusivity with USSD support for rural users across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 group">
                  <PlayCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Crop Health Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-400">Healthy Crops</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">94.2%</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-cyan-500" />
                      <span className="text-sm text-gray-400">Yield Prediction</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">+28%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-white">Wheat Field A - Healthy</span>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                      <span className="text-sm text-white">Rice Field B - Monitor</span>
                    </div>
                    <Shield className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              One Platform Changes
              <br />
              Everything.
              <br />
              <span className="text-gray-400">Will you embrace innovation,</span>
              <br />
              <span className="text-gray-400">or</span>
              <br />
              <span className="text-gray-400">let outdated methods limit you?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-8">
              AI-powered crop monitoring, automated workflow management, 
              and seamless market integration with real-time agricultural insights.
            </p>
            <Button size="lg" className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Get Started
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 hover:border-slate-600/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-6">
              {features.slice(2).map((feature, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 hover:border-slate-600/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Easily manage your
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  crops & marketplace
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Comprehensive farm management with AI-powered disease detection, 
                yield predictions, and direct market access. Monitor soil quality, 
                track crop health, and optimize resource allocation in one integrated platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  <Globe className="mr-2 h-4 w-4" />
                  Download App
                </Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Try USSD *567#
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Market Analysis</h3>
                  <div className="text-sm text-green-400">Real-time</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">W</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Wheat</div>
                        <div className="text-green-400 text-sm">+12.5%</div>
                      </div>
                    </div>
                    <div className="text-white font-semibold">₹2,150/quintal</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">R</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Rice</div>
                        <div className="text-cyan-400 text-sm">+8.2%</div>
                      </div>
                    </div>
                    <div className="text-white font-semibold">₹3,240/quintal</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">M</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Maize</div>
                        <div className="text-orange-400 text-sm">+5.7%</div>
                      </div>
                    </div>
                    <div className="text-white font-semibold">₹1,890/quintal</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">Market Connected!</span>
                  </div>
                  <p className="text-sm text-gray-300">Your produce is automatically graded and ready for optimal pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Farmers are
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                saying about us
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Empowering farmers across India with technology that increases productivity 
              and connects rural communities to modern agricultural practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 hover:border-slate-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              agricultural journey?
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using AgriConnect India to increase productivity, 
            reduce waste, and access better market prices through AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                  <Sprout className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  AgriConnect India
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing Indian agriculture through AI-powered insights and inclusive technology.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Crop Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disease Detection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">USSD Access</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AgriConnect India. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <span className="text-gray-400 text-sm">Available in:</span>
              <span className="text-white text-sm">हिंदी • English • తెలుగు • தமிழ்</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}