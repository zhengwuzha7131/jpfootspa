'use client';

import Link from 'next/link';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f5f1ed] to-white">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#8b7355]">JP FOOT SPA</h1>
            </Link>
            <Link 
              href="/"
              className="text-gray-700 hover:text-[#8b7355] transition font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Booking Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8b7355] mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Schedule your relaxation session below
            </p>
            <p className="text-sm text-gray-500">
              Select your service, choose a date and time, and confirm your booking
            </p>
          </div>

          {/* Free Hot Stone Promotion Banner */}
          <div className="mb-8 bg-linear-to-r from-amber-500 to-orange-500 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-3xl">🔥</span>
              <p className="text-xl md:text-2xl font-bold text-center">
                Complimentary Hot Stone Treatment with All Massages!
              </p>
              <span className="text-3xl">🔥</span>
            </div>
            <p className="text-center text-amber-50 mt-2 text-sm">
              (Excludes chair massage)
            </p>
          </div>
          
          {/* Square Appointments Widget Container */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
            <iframe 
              src="https://square.site/appointments/buyer/widget/u5afzjw4o5k3b7/LPQTNEJ86SNJ3"
              className="w-full border-0"
              style={{ minHeight: '800px', height: '100vh', maxHeight: '1200px' }}
              title="Book Appointment"
            />
          </div>

          {/* Alternative Contact Options */}
          <div className="bg-[#f5f1ed] rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#8b7355] mb-3">
              Need Help Booking?
            </h3>
            <p className="text-gray-700 mb-4">
              Our team is here to assist you with any questions or special requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:630-978-9188"
                className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-6 py-3 rounded-full hover:bg-[#6b5444] transition font-semibold shadow-md hover:shadow-lg"
              >
                <span>📞</span>
                <span>Call Us: 630-978-9188</span>
              </a>
              <div className="text-gray-600">
                <p className="font-semibold">Open Daily</p>
                <p className="text-sm">10:00 AM - 10:00 PM (CST)</p>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">
              <span className="font-semibold">Location:</span> 3150 N Aurora Rd, Aurora, IL 60502
            </p>
            <p className="text-sm">
              📌 Our online system allows one service booking at a time. For multiple people or services, 
              please book separately or call us for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8b7355] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/90 mb-2">JP FOOT SPA</p>
          <p className="text-white/80 text-sm">© 2024 JP Foot Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

