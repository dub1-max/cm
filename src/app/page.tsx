"use client"
import dynamic from "next/dynamic";
import { useState } from 'react';
import { ArrowRight, Wifi, Monitor, Users, Coffee, Clock, Projector, Lock, UtensilsCrossed, Car, Phone, Mail, MapPin } from 'lucide-react';
import { CardsCarousel } from "./carousel"
import { TestimonialMain } from './testimonial';
import { Pin } from './pin';
import { CardsCarousel1 } from "./carousel2";
import GlowingEffectDemo from '@/components/ui/glowing-effect-demo';
import { ExpandableCardDemo } from "@/components/ui/ExpandableCardDemo";
import { motion } from "framer-motion";
import Image from "next/image";
import cmlogo from 'D:\cm\cm\cm\public\cmlogo.png';

function App() {
  const [selectedSpace, setSelectedSpace] = useState('OPEN SPACE');
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-16">
        <div className="text-2xl font-bold flex items-center gap-1">
        <img src="/cmlogo.png" alt="Logo" className="h-25" />
        </div>
          <a href="http://www.bizdubai.ae" className="bg-green-500 text-white px-8 py-2 rounded-full flex items-center">
          Get In Touch
          <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Connecting Minds</p>
          <h1 className="text-6xl font-bold mb-2">
           Business   <span className="text-green-500">centers</span>
            <br />and many more
          </h1>
        </div>

        
        <CardsCarousel1/>
       

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-left mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600"></h3>
            <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2"></p>
          <h1 className="text-7xl font-bold mb-2">
         <span className="text-green-500">Premium Amenities</span>
            <br /> we offer
          </h1>
        </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-25">
            {[
              { icon: <Wifi className="w-8 h-8" />, label: 'High-Speed WIFI' },
              { icon: <Monitor className="w-8 h-8" />, label: 'Fully Furnished' },
              { icon: <Users className="w-8 h-8" />, label: 'Free DEWA' },
              { icon: <Coffee className="w-8 h-8" />, label: 'Conference Room' },
              { icon: <Clock className="w-8 h-8" />, label: '24 x 7 Access' },
              { icon: <Projector className="w-8 h-8" />, label: 'Dedicated Service Staff' },
              { icon: <Lock className="w-8 h-8" />, label: 'State-of-the-Art Facilities' },
              { icon: <UtensilsCrossed className="w-8 h-8" />, label: 'Free Beverages' },
              { icon: <Car className="w-8 h-8" />, label: 'Prime Location' },
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="text-green-500 flex justify-center mb-3 bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition-colors">
                  {feature.icon}
                </div>
                <p className="font-medium text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Office collaboration"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-8 grid grid-cols-2 gap-4">
                <div className="bg-green-600 text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">300+</h3>
                  <p className="text-sm">SEATS AVAILABLE</p>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">10+</h3>
                  <p className="text-sm">MEETING ROOMS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">Connecting Minds</h3>
              <h2 className="text-3xl font-bold mb-4">
              At Connecting Minds we offer flexible office solutions, including <br></br>
              <br /><span className="text-green-500">Fully-equipped offices, 
              virtual offices with a prestigious address, and collaborative flexi desks.</span>       
              <br></br><br></br>Elevate your business with our prime location and professional support.

              </h2>
            
              <div className="space-y-6">
                {[
                  { icon: <Monitor className="w-5 h-5" />, label: 'State-of-the-Art Facilities ' },
                  { icon: <Coffee className="w-5 h-5" />, label: 'Free Beverages' },
                  { icon: <Car className="w-5 h-5" />, label: 'Prime Location' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-green-500 bg-green-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
              <a href="http://www.bizdubai.ae" className="inline-flex items-center text-green-500 font-medium mt-8 hover:gap-4 transition-all gap-2">
              LEARN MORE
              <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
        {
          // Carousel
        }

        {
        //neww
        }

<div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2"></p>
          <h1 className="text-7xl font-bold mb-2">
         <span className="text-green-500">At</span>
            <br /> Connecting Minds
          </h1>
        </div>
      <ExpandableCardDemo />
      


        {/* Workspace Section *
        <section className="mb-20 bg-gray-50 py-16 px-8 rounded-lg">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">SPACES THAT WORK FOR YOU</h3>
            <h2 className="text-3xl font-bold mt-2">
              Your Hub for <span className="text-green-500">Productivity</span> and
              <br />Creativity
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            {[
              'OPEN SPACE',
              'PRIVATE OFFICE',
              'CONFERENCE HALL',
              'GAME ZONE'
            ].map((space) => (
              <button
                key={space}
                onClick={() => setSelectedSpace(space)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedSpace === space ? 'bg-green-500 text-white' : 'hover:bg-green-50'
                  }`}
              >
                <Users className={`w-8 h-8 mb-2 ${selectedSpace === space ? 'text-white' : 'text-green-500'}`} />
                <p className="font-medium text-sm">{space}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{selectedSpace}</h3>
              <p className="text-gray-600 mb-8">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Monitor className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Square 45 m</p>
                    <p className="text-sm text-gray-600">Measurement</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Workplaces 2</p>
                    <p className="text-sm text-gray-600">Quantity</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Coffee className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">$ 150 / Month</p>
                    <p className="text-sm text-gray-600">Price</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-green-600 transition-colors">
                GET WORKSPACE
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"
                alt="Open workspace"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">TESTIMONIALS</h3>
            <h2 className="text-3xl font-bold mt-2">
              We love to <span className="text-green-500">hear</span> from our
              <br />customers
            </h2>
          </div>
          <div>
            <TestimonialMain />
          </div>
        </section>


          {/* maps */}
          <h2 className="text-4xl font-bold mb-4">
              Find Us<span className="text-green-500">!</span>
              <br />
            </h2>
          <section className="pt-10">
      <div className="px-4 xl:container">
        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.1085181303515!2d55.345633!3d25.251934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2b5f33ac7f%3A0xe59c3bea5bf9fa90!2sConnecting%20Minds%20Business%20Center%20LLC!5e0!3m2!1sen!2sin!4v1742757912843!5m2!1sen!2sin"
        ></iframe>
      </div>
    </section>

<br></br>

        {/* <div>
          <Pin/>
        </div> */}

        {/* Contact Section */}
        <section id="support" className="mb-20 grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">CONNECT WITH US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Have questions? <span className="text-green-500">Get</span>
              <br />in touch!
            </h2>
            <p className="text-gray-600 mb-8">
    
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LOCATION</p>
                  <p className="font-medium">782W+Q3G Dubai Cargo Village - D89 - D89 - above Ashrafi Restaurant - Dubai - United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">CALL US</p>
                  <p className="font-medium">+971524367715</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">MAIL US</p>
                  <p className="font-medium">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          


{/* Connect With Us square */}
<motion.div 
  className="relative p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 h-[30rem] w-[35rem] mx-auto overflow-hidden cursor-pointer"
  initial={{ scale: 0.95, opacity: 0.9 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  {/* Background image with 50% opacity and subtle scale animation */}
  <motion.div 
    className="absolute inset-0 z-0"
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src="https://uc3fd16bed01c1ec39f136c916c1.previews.dropboxusercontent.com/p/thumb/ACmOw1-ZDZSDuXeHy8LYO-pBQMe8rqixRhbG4RwbvX-ma74UV-hgMvJCHro3INQ70metiGC4Cz04NWlIaJeyDImpF0iI7tUN35UByvL8PettVWilMuss7vh25V8Js8Xp_lG_AUptO4nw9muhdbWlxsV3xnx9KihTjnGw5dn8pkOY4CfWTPx5mRl2EN76bwu3MSJUUOjCKpAaNbTft7LXMHXdcLdm-RmAN57RNme57ckp6NObr3tveGt0O-pxcLybHiufVI-qgVfrMXRdYt85B1s2LPSOH4JEYETWOZS_FalxxW7YaGd46OXScT5NjRPOWs1l5qM8pQmwJ-qzA9mAVzkwaWHaNNr8uGu0iB73Ac2ex0TGlMa_uchj2l_Oj2pMY66T21bKZM0lvBz7-7JaYbugFn9QTUEaZkN_nOAq-jFM6QGh5OFLGR2YlE6UyBZ6xpKUVXQIDNyCm7YLq_kUFw-VFCNXdZwjKAemqnNUVZGZYAgkq4p_NTMvAwPbzxxu1hSHXzLbR6eAjGuBYOFNWNtALPGe3aMfAa_rn6-IAD6N5g/p.jpeg" // Replace with your image
      alt="Office background"
      fill
      className="opacity-50 object-cover"
      priority
    />
  </motion.div>
  
  {/* Content container with glass morphism effect */}
  <motion.div 
    className="relative z-10 bg-white/80 p-8 rounded-lg backdrop-blur-sm w-full h-full flex flex-col items-center justify-center border border-white/20"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {/* Animated heading */}
    <motion.h3 
      className="text-2xl font-bold text-center text-green-600 mb-2"
      whileHover={{ scale: 1.05 }}
    >
      Connect With Us
    </motion.h3>
    
    {/* Animated paragraph */}
    <motion.p 
      className="text-center text-gray-600 mb-6"
      whileHover={{ scale: 1.02 }}
    >
      Let's discuss how we can help your business grow
    </motion.p>
    
    {/* Animated button with pulse effect */}
    <motion.a 
      href="https://www.bizdubai.ae/support" 
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px -10px rgba(74, 222, 128, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span 
        className="absolute inset-0 bg-white opacity-0 hover:opacity-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
      />
      Enquire Now
    </motion.a>
    
    {/* Subtle floating indicator */}
    <motion.div 
      className="absolute bottom-4 text-gray-400 text-sm flex items-center"
      animate={{ y: [0, -5, 0] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <span>Click to connect</span>
      <motion.span 
        className="ml-1"
        animate={{ x: [0, 3, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5
        }}
      >
        →
      </motion.span>
    </motion.div>
  </motion.div>
</motion.div>
        </section>
      </header>
    </div>
  );
}

export default App;