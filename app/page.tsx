'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showSpecialModal, setShowSpecialModal] = useState(false);
  const [hasClosedModal, setHasClosedModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Show modal after a short delay on page load
    const timer = setTimeout(() => {
      setShowSpecialModal(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCloseModal = () => {
    setShowSpecialModal(false);
    setHasClosedModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#8b7355]">JP FOOT SPA</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-[#8b7355] transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#8b7355] transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#8b7355] transition">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#8b7355] transition">Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-[#8b7355] transition">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-[#8b7355] transition">FAQ</a>
              <a href="/booking" className="text-gray-700 hover:text-[#8b7355] transition">Book</a>
              <a href="#contact" className="text-gray-700 hover:text-[#8b7355] transition">Contact</a>
            </div>
            <a 
              href="/booking"
              className="bg-[#8b7355] text-white px-6 py-2 rounded-full hover:bg-[#6b5444] transition font-medium"
            >
              Book Online
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-linear-to-br from-[#f5f1ed] to-[#e8dfd6]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-[#8b7355] text-white px-6 py-2 rounded-full mb-4 font-semibold">
            ⭐ Serving Aurora & Naperville Since 2016 ⭐
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#8b7355] mb-6">
            PLEASANT MASSAGE EXPERIENCE
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Professional Massage Team And Service
          </p>
          <a 
            href="/booking"
            className="inline-block bg-[#8b7355] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#6b5444] transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-4">
            WELCOME TO JP FOOT SPA
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg font-semibold">
            Proudly serving the Aurora & Naperville communities since 2016
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your professional massage therapist at JP Foot Spa is customized to relax and bring peace to your body and mind. Our technique will be uniquely tailored to fit your inner body needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You'll quickly unwind and relieve any built-up stress you may have from your work and home. We invite you to reach your goals of stress reduction, relaxation and pain relief, combined with our skillful massage and rejuvenating methods.
              </p>
              
              {/* Free Hot Stone Highlight */}
              <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-300 p-5 rounded-lg">
                <p className="text-lg text-gray-800 font-bold text-center flex items-center justify-center gap-2">
                  <span className="text-2xl">🔥</span>
                  <span>Complimentary Hot Stone Treatment with Every Massage!</span>
                  <span className="text-2xl">🔥</span>
                </p>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed font-semibold">
                You are welcome to <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline">call us at 630-978-9188</a> or <a href="/booking" className="text-[#8b7355] hover:underline">book online</a> to make an appointment! We are looking forward to serving you.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800"
                alt="Relaxing spa environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Business Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-[#f5f1ed] p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#8b7355] mb-4">Opening Hours</h3>
              <p className="text-gray-700 font-semibold">Monday - Sunday</p>
              <p className="text-gray-700">10:00 AM - 10:00 PM (CST)</p>
            </div>
            <div className="bg-[#f5f1ed] p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#8b7355] mb-4">Business Phone</h3>
              <a href="tel:630-978-9188" className="text-2xl font-bold text-[#8b7355] hover:text-[#6b5444] transition">
                630-978-9188
              </a>
            </div>
            <div className="bg-[#f5f1ed] p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#8b7355] mb-4">Business Address</h3>
              <p className="text-gray-700">3150 N Aurora Rd</p>
              <p className="text-gray-700">Aurora, IL 60502</p>
            </div>
            <div className="bg-[#8b7355] p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-4">View Pricing</h3>
              <a 
                href="/booking"
                className="inline-block bg-white text-[#8b7355] px-6 py-2 rounded-full hover:bg-gray-100 transition font-semibold text-sm"
              >
                See Services & Pricing
              </a>
            </div>
          </div>
          
          {/* Booking Notice */}
          <div className="mt-8 bg-blue-50 p-5 rounded-lg border border-blue-200 max-w-3xl mx-auto">
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              <span className="font-semibold text-gray-800">📌 Booking Note:</span> Our online system allows one service booking at a time. For multiple people or services, please book separately or call us at <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline font-medium">630-978-9188</a> for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-linear-to-br from-[#f5f1ed] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-4">
            OUR SERVICES INCLUDE
          </h2>
          <p className="text-center text-gray-600 mb-4 text-lg">Tailored treatments for your wellness</p>
          
          {/* Free Hot Stone Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg inline-flex items-center gap-3 transform hover:scale-105 transition">
              <span className="text-3xl">🔥</span>
              <span className="font-bold text-lg">All Massages Include FREE Hot Stone Treatment!</span>
              <span className="text-3xl">🔥</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foot Reflexology */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/footmassage.webp"
                  alt="Foot Reflexology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Foot Reflexology</h3>
                <p className="text-gray-700">
                  The practice of foot reflexology massage involves applying pressure to specific points on the feet to affect various parts of the body. Helps release tension, improve circulation, and promote overall wellness.
                </p>
              </div>
            </div>

            {/* Swedish Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600"
                  alt="Swedish Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Swedish Massage</h3>
                <p className="text-gray-700">
                  Swedish massage is the most popular type of massage. It involves the use of hands, forearms or elbows to manipulate the superficial layers of the muscles to improve mental and physical health.
                </p>
              </div>
            </div>

            {/* Deep Tissue Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600"
                  alt="Deep Tissue Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Deep Tissue Massage</h3>
                <p className="text-gray-700">
                  Deep tissue massage is designed to relieve pain and muscle tension throughout the body. This type of massage is extremely beneficial because it reaches the deepest layer of muscles, fascia and tendons.
                </p>
              </div>
            </div>

            {/* Aromatherapy Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/aromatheraphy.jpg"
                  alt="Aromatherapy Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Aromatherapy Massage</h3>
                <p className="text-gray-700">
                  Aromatherapy massage is massage therapy with essential oils added to the massage oil or lotion. Health benefits include reduced anxiety, eased depression, and boosted energy levels.
                </p>
              </div>
            </div>

            {/* Hot Stone Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/hotstonemassage.webp"
                  alt="Hot Stone Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Hot Stone Massage</h3>
                <p className="text-gray-700">
                  Hot stone therapy promotes healing by targeting the deeper layers of muscle through the use of heated stones. Combined with regular massage, this treatment delivers a wealth of benefits.
                </p>
              </div>
            </div>

            {/* Couple Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/couplemassage.jpg"
                  alt="Couple Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Couple Massage</h3>
                <p className="text-gray-700">
                  A couple massage is a wonderfully relaxing, personal experience. During the session, two people receive massages at the same time and in the same room from two different therapists.
                </p>
              </div>
            </div>

            {/* Four Hands Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/fourhandsmassage.jpg"
                  alt="Four Hands Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Four Hands Massage</h3>
                <p className="text-gray-700">
                  In a four hands massage, two therapists work on one client, often using synchronized moves. A four hands massage can be like experiencing two full body massages at the same time.
                </p>
              </div>
            </div>

            {/* Combo Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600"
                  alt="Combo Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Combo Massage</h3>
                <p className="text-gray-700">
                  A Combination Massage integrates more than one style or massage modality. It can combine techniques from Swedish massage, deep tissue massage, reflexology, and trigger point therapy.
                </p>
              </div>
            </div>

            {/* Chair Massage */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/chairmassage.jpg"
                  alt="Chair Massage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#8b7355] mb-3">Chair Massage</h3>
                <p className="text-gray-700">
                  Chair massage is a convenient and accessible option that focuses on the back, shoulders, neck, and arms. Perfect for quick stress relief and tension release in a comfortable seated position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-12">
            OUR GALLERY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/gallery/one.webp',
              '/gallery/two.webp',
              '/gallery/three.webp',
              '/gallery/four.webp',
              '/gallery/five.webp',
              '/gallery/six.webp'
            ].map((src, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                <Image
                  src={src}
                  alt={`JP Foot Spa ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-linear-to-br from-[#f5f1ed] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-12">
            OUR REVIEWS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Mary gave me full body deep tissue massage, BEST I HAVE EVER HAD! I would rate this place 10/10..... 100%!! My husband and I are very grateful for their services. Felt understood, safe, well cared for and respected. We are indeed, re-occuring customers. Totally recommend!!!!!!!!"
              </p>
              <p className="font-bold text-[#8b7355]">- Haley J.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The best massage I have ever had!! It hurt so good!! I def will be going back!! Clean and polite!!"
              </p>
              <p className="font-bold text-[#8b7355]">- Cheryl H.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I came here for a deep tissue body and foot massage. It was amazing. Peter (masseur) did such a phenomenal job. I will def be going back for my massages. I highly recommend Peter!"
              </p>
              <p className="font-bold text-[#8b7355]">- Nancy V.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Everything you need to know before your visit
          </p>

          <div className="space-y-3">
            {/* Walk-ins */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>🚶</span> Do you accept walk-ins?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 0 ? '−' : '+'}</span>
              </button>
              {openFAQ === 0 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes, we welcome walk-in customers! However, availability depends on how busy we are at the time. For guaranteed service, we recommend booking an appointment in advance online or by calling us at <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline font-semibold">630-978-9188</a>.
                  </p>
                </div>
              )}
            </div>

            {/* Cancellation Policy */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>📅</span> What is your cancellation policy?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 1 ? '−' : '+'}</span>
              </button>
              {openFAQ === 1 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    We understand that plans change. You may cancel or reschedule your appointment up to <span className="font-semibold">6 hours before</span> your scheduled time without any charge. Cancellations made with less than 6 hours notice will incur a <span className="font-semibold">$15 cancellation fee</span>. This helps us serve other customers who may be waiting for an appointment.
                  </p>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>💳</span> What payment methods do you accept?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 2 ? '−' : '+'}</span>
              </button>
              {openFAQ === 2 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700 mb-3">
                    We accept all major credit cards, Zelle, and cash. For your convenience, we offer multiple payment options to suit your preference.
                  </p>
                  <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded p-3">
                    <span className="font-semibold">💡 Tip:</span> While we accept all forms of payment, cash is especially appreciated for gratuities, as it goes directly to your massage therapist.
                  </p>
                </div>
              )}
            </div>

            {/* Parking */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>🅿️</span> Is parking available?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 3 ? '−' : '+'}</span>
              </button>
              {openFAQ === 3 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes! We offer <span className="font-semibold">free parking</span> in a large, convenient lot. You'll have no trouble finding a spot when you visit us.
                  </p>
                </div>
              )}
            </div>

            {/* Holiday Hours */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>🎄</span> Are you open on holidays?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 4 ? '−' : '+'}</span>
              </button>
              {openFAQ === 4 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes! We are <span className="font-semibold">open during all major holidays</span> with our regular hours (10:00 AM - 10:00 PM). We're here when you need us most—whether it's a holiday treat or relief from holiday stress!
                  </p>
                </div>
              )}
            </div>

            {/* Specific Therapist */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>👤</span> Can I request a specific therapist?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 5 ? '−' : '+'}</span>
              </button>
              {openFAQ === 5 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Absolutely! If you have a preferred massage therapist, please <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline font-semibold">call us at 630-978-9188</a> when booking your appointment, and we'll do our best to accommodate your request based on availability.
                  </p>
                </div>
              )}
            </div>

            {/* Target Specific Areas */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>🎯</span> Can you focus on specific problem areas?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 6 ? '−' : '+'}</span>
              </button>
              {openFAQ === 6 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes, our skilled therapists can focus on specific areas of tension or discomfort. While we make every effort to address your particular concerns, results may vary depending on the condition. We recommend <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline font-semibold">calling us</a> before your appointment to discuss your specific needs, and we'll ensure your therapist is prepared to target your pain points effectively.
                  </p>
                </div>
              )}
            </div>

            {/* What to Bring */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(7)}
                className="w-full bg-[#f5f1ed] p-5 flex items-center justify-between hover:bg-[#e8dfd6] transition"
              >
                <h3 className="text-lg font-bold text-[#8b7355] flex items-center gap-2">
                  <span>👕</span> What should I wear or bring?
                </h3>
                <span className="text-2xl text-[#8b7355]">{openFAQ === 7 ? '−' : '+'}</span>
              </button>
              {openFAQ === 7 && (
                <div className="p-5 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Come as you are! Wear comfortable clothing that's easy to move in. We provide everything else you need for a relaxing experience. For foot massages, you'll simply remove your shoes and socks.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Helpful Tips Section */}
          <div className="mt-16 bg-linear-to-br from-[#8b7355] to-[#6b5444] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">💡 Tips for the Best Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-lg">Before Your Massage:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Arrive 5-10 minutes early to relax</li>
                  <li>• Avoid heavy meals 1-2 hours before</li>
                  <li>• Communicate any areas of concern</li>
                  <li>• Let us know your pressure preference</li>
                </ul>
              </div>
              <div className="bg-white/10 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-lg">After Your Massage:</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Drink plenty of water to stay hydrated</li>
                  <li>• Take it easy for the rest of the day</li>
                  <li>• Avoid strenuous activity immediately after</li>
                  <li>• Some soreness the next day is normal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-4">
            Ready to Relax?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Book your appointment online or give us a call
          </p>

          {/* Call to Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            <a 
              href="/booking"
              className="bg-[#8b7355] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center group"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-2">Book Online</h3>
              <p className="text-white/90 mb-4">Schedule your appointment through our online booking system</p>
              <span className="inline-block bg-white text-[#8b7355] px-6 py-2 rounded-full font-semibold group-hover:bg-gray-100 transition">
                Book Now →
              </span>
            </a>

            <a 
              href="tel:630-978-9188"
              className="bg-[#f5f1ed] text-[#8b7355] p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center border-2 border-[#8b7355] group"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-700 mb-4">Speak with us directly to schedule or ask questions</p>
              <span className="inline-block bg-[#8b7355] text-white px-6 py-2 rounded-full font-semibold group-hover:bg-[#6b5444] transition">
                630-978-9188
              </span>
            </a>
          </div>

          {/* Business Information */}
          <div className="bg-[#f5f1ed] p-8 md:p-12 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-bold text-[#8b7355] mb-3">Opening Hours</h3>
                <p className="text-gray-700 font-semibold">Monday - Sunday</p>
                <p className="text-gray-700">10:00 AM - 10:00 PM</p>
                <p className="text-sm text-gray-600">(CST)</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#8b7355] mb-3">Phone</h3>
                <a href="tel:630-978-9188" className="text-xl font-bold text-[#8b7355] hover:text-[#6b5444] transition">
                  630-978-9188
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#8b7355] mb-3">Address</h3>
                <p className="text-gray-700">3150 N Aurora Rd</p>
                <p className="text-gray-700">Aurora, IL 60502</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8b7355] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">JP FOOT SPA</h3>
              <p className="text-white/90">
                Your destination for relaxation and wellness in Aurora, IL
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/90 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-white/90 hover:text-white transition">About</a></li>
                <li><a href="#services" className="text-white/90 hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="text-white/90 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-white/90 mb-2">630-978-9188</p>
              <p className="text-white/90 mb-2">3150 N Aurora Rd</p>
              <p className="text-white/90">Aurora, IL 60502</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/80">© 2024 JP Foot Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end">
        {hasClosedModal && (
          <button
            onClick={() => setShowSpecialModal(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-red-700 transition transform hover:scale-110 font-semibold"
          >
            🎉 Special Offers
          </button>
        )}
        <a 
          href="/booking"
          className="bg-[#8b7355] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#6b5444] transition transform hover:scale-110 font-semibold"
        >
          📅 Book Now
        </a>
      </div>

      {/* Special Offers Modal */}
      {showSpecialModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            {/* Header */}
            <div className="bg-linear-to-r from-red-600 to-red-700 text-white p-6 md:p-8 rounded-t-2xl relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition text-3xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <div className="text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Limited Time Special Packages!</h2>
                <p className="text-red-100 text-lg">Save more with our exclusive massage packages</p>
              </div>
            </div>

            {/* Packages */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Package 1: Foot Massage */}
              <div className="bg-linear-to-br from-[#f5f1ed] to-[#e8dfd6] p-6 rounded-xl border-2 border-[#8b7355] hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8b7355] mb-2">Foot Massage Package</h3>
                    <p className="text-gray-700 text-lg">4 Sessions × 1 Hour Each</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-600">$140</div>
                    <div className="text-sm text-gray-600 line-through">Was $180</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-green-600">💰 Save $40!</span> ($10 off each session)
                  </p>
                  <p className="text-sm text-gray-600">Regular price: $45/hour × 4 = $180</p>
                </div>
              </div>

              {/* Package 2: Body Massage */}
              <div className="bg-linear-to-br from-[#f5f1ed] to-[#e8dfd6] p-6 rounded-xl border-2 border-[#8b7355] hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8b7355] mb-2">Body Massage Package</h3>
                    <p className="text-gray-700 text-lg">4 Sessions × 1 Hour Each</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-600">$200</div>
                    <div className="text-sm text-gray-600 line-through">Was $240</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-green-600">💰 Save $40!</span> ($10 off each session)
                  </p>
                  <p className="text-sm text-gray-600">Regular price: $60/hour × 4 = $240</p>
                </div>
              </div>

              {/* Package 3: Combo Massage */}
              <div className="bg-linear-to-br from-[#f5f1ed] to-[#e8dfd6] p-6 rounded-xl border-2 border-[#8b7355] hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8b7355] mb-2">Combo Massage Package</h3>
                    <p className="text-gray-700 text-lg">4 Sessions × 90 Minutes Each</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-600">$240</div>
                    <div className="text-sm text-gray-600 line-through">Was $300</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-green-600">💰 Save $60!</span> ($15 off each session)
                  </p>
                  <p className="text-sm text-gray-600">Regular price: $75 per 90-min session × 4 = $300</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Choose Your Combo:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 30 min Body + 60 min Foot</li>
                    <li>• 60 min Body + 30 min Foot</li>
                    <li>• 45 min Body + 45 min Foot</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4">
                <p className="text-gray-700 mb-4 text-lg font-semibold">
                  Visit us in person to purchase these special packages!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:630-978-9188"
                    className="inline-block bg-[#8b7355] text-white px-8 py-4 rounded-full hover:bg-[#6b5444] transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    📞 Call Us: 630-978-9188
                  </a>
                  <button
                    onClick={handleCloseModal}
                    className="inline-block bg-gray-200 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-300 transition font-semibold text-lg"
                  >
                    Maybe Later
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 max-w-2xl mx-auto">
                  <span className="font-semibold">⚠️ In-Person Purchase Required:</span> These packages must be purchased in person at our spa location. Cannot be booked online. Call us for questions or to confirm availability!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
