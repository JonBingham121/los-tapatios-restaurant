import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kanab Location | Los Tapatios Mexican Restaurant",
  description: "Visit Los Tapatios in Kanab, UT for authentic Mexican food near Zion and Bryce Canyon. View hours, menu, and order online.",
};

const locationData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Los Tapatios Mexican Restaurant - Kanab",
  "image": "https://lostapatios.restaurant/images/kanab.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "456 Center Street",
    "addressLocality": "Kanab",
    "addressRegion": "UT",
    "postalCode": "84741",
    "addressCountry": "US"
  },
  "telephone": "+1-435-555-5678",
  "servesCuisine": "Mexican",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "21:00"
    }
  ]
};

export default function KanabLocation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationData) }}
      />
      <main className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-charcoal mb-4">Kanab Location</h1>
            <p className="text-xl text-gray-600">Authentic Mexican food near Utah's most beautiful national parks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Location Info */}
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-mexican-red mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">📍 Address</h3>
                  <p className="text-gray-700">
                    456 Center Street<br />
                    Kanab, UT 84741
                  </p>
                  <a
                    href="https://maps.google.com/?q=456+Center+Street+Kanab+UT+84741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mexican-blue hover:text-mexican-orange font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">📞 Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:435-555-5678" className="text-mexican-blue hover:text-mexican-orange">
                      (435) 555-5678
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">🕒 Hours</h3>
                  <div className="text-gray-700">
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center h-96">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg">Map will be embedded here</p>
              </div>
            </div>
          </div>

          {/* Why Visit */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-8">
              Why Visit Our Kanab Location?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold text-mexican-red mb-2">Near National Parks</h3>
                <p className="text-gray-600">Perfect stop after visiting Zion, Bryce Canyon, or Grand Canyon</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌮</div>
                <h3 className="text-xl font-bold text-mexican-red mb-2">Authentic Flavors</h3>
                <p className="text-gray-600">Fresh ingredients and traditional recipes you won't find anywhere else</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-mexican-red mb-2">Warm Welcome</h3>
                <p className="text-gray-600">Friendly service that makes tourists and locals feel at home</p>
              </div>
            </div>
          </section>

          {/* CTAs */}
          <div className="text-center space-y-4">
            <Link
              href="/order"
              className="inline-block bg-mexican-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-orange transition mr-4"
            >
              Order Online
            </Link>
            <Link
              href="/menu"
              className="inline-block bg-mexican-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-yellow hover:text-charcoal transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
