import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#8b7355]">JP FOOT SPA</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#8b7355] transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#8b7355] transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#8b7355] transition">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#8b7355] transition">Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-[#8b7355] transition">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-[#8b7355] transition">Contact</a>
            </div>
            <a 
              href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start" 
              target="_blank"
              rel="noopener noreferrer"
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#8b7355] mb-6">
            PLEASANT MASSAGE EXPERIENCE
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Professional Massage Team And Service
          </p>
          <a 
            href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8b7355] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#6b5444] transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b7355] mb-12">
            WELCOME TO JP FOOT SPA
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your professional massage therapist at JP Foot Spa is customized to relax and bring peace to your body and mind. Our technique will be uniquely tailored to fit your inner body needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You'll quickly unwind and relieve any built-up stress you may have from your work and home. We invite you to reach your goals of stress reduction, relaxation and pain relief, combined with our skillful massage and rejuvenating methods.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                You are welcome to <a href="tel:630-978-9188" className="text-[#8b7355] hover:underline">call us at 630-978-9188</a> or <a href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start" target="_blank" rel="noopener noreferrer" className="text-[#8b7355] hover:underline">book online</a> to make an appointment! We are looking forward to serving you.
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
                href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start" 
                target="_blank"
                rel="noopener noreferrer"
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
          <p className="text-center text-gray-600 mb-12 text-lg">Tailored treatments for your wellness</p>
          
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
              href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Floating Book Button */}
      <a 
        href="https://app.squareup.com/appointments/book/u5afzjw4o5k3b7/LPQTNEJ86SNJ3/start" 
            target="_blank"
            rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#8b7355] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#6b5444] transition transform hover:scale-110 z-50 font-semibold"
          >
        📅 Book Now
          </a>
    </div>
  );
}
