import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catering | Los Tapatios Mexican Restaurant",
  description: "Authentic Mexican catering for events, parties, and corporate gatherings in St. George, Kanab, and Flagstaff.",
};

export default function CateringPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-mexican-red to-mexican-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Catering Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bring authentic Mexican flavors to your next event. Perfect for parties, corporate events, weddings, and celebrations.
          </p>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">
            Catering Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <div className="bg-mexican-cream rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Taco Bar</h3>
              <p className="text-3xl font-bold text-charcoal mb-6">$12.99<span className="text-lg font-normal">/person</span></p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ Choice of 3 meats</li>
                <li>✓ Soft & hard shell tacos</li>
                <li>✓ Rice & beans</li>
                <li>✓ Chips & salsa</li>
                <li>✓ All toppings included</li>
              </ul>
              <p className="text-sm text-gray-600">Minimum 20 people</p>
            </div>

            {/* Standard Package */}
            <div className="bg-mexican-yellow rounded-lg p-8 shadow-xl transform scale-105">
              <div className="bg-mexican-red text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Fiesta Package</h3>
              <p className="text-3xl font-bold text-charcoal mb-6">$16.99<span className="text-lg font-normal">/person</span></p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ Choice of 4 meats</li>
                <li>✓ Enchiladas or burritos</li>
                <li>✓ Rice & beans</li>
                <li>✓ Chips, salsa & guacamole</li>
                <li>✓ Dessert included</li>
              </ul>
              <p className="text-sm text-gray-600">Minimum 30 people</p>
            </div>

            {/* Premium Package */}
            <div className="bg-mexican-cream rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Deluxe Feast</h3>
              <p className="text-3xl font-bold text-charcoal mb-6">$22.99<span className="text-lg font-normal">/person</span></p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ Full fajita bar</li>
                <li>✓ Premium meats & seafood</li>
                <li>✓ Enchiladas & tamales</li>
                <li>✓ Rice & beans</li>
                <li>✓ Full appetizer spread</li>
                <li>✓ Desserts & drinks</li>
              </ul>
              <p className="text-sm text-gray-600">Minimum 40 people</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-mexican-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">
            Add-Ons & Extras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-charcoal mb-2">Guacamole Bar</h3>
              <p className="text-mexican-orange font-semibold">+$3/person</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-charcoal mb-2">Margarita Bar</h3>
              <p className="text-mexican-orange font-semibold">+$6/person</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-charcoal mb-2">Dessert Platter</h3>
              <p className="text-mexican-orange font-semibold">+$4/person</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-charcoal mb-2">Full Service Staff</h3>
              <p className="text-mexican-orange font-semibold">Custom Quote</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">
            How Catering Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-mexican-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Contact Us</h3>
              <p className="text-gray-600">Call or fill out our catering form with your event details</p>
            </div>
            <div className="text-center">
              <div className="bg-mexican-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Custom Quote</h3>
              <p className="text-gray-600">We'll create a custom menu and pricing for your event</p>
            </div>
            <div className="text-center">
              <div className="bg-mexican-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Enjoy!</h3>
              <p className="text-gray-600">We deliver, set up, and your guests enjoy authentic Mexican food</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mexican-red to-mexican-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-xl mb-8">Contact us today for a free catering quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-mexican-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-cream transition"
            >
              Request Quote
            </Link>
            <a
              href="tel:435-555-1234"
              className="inline-block bg-mexican-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-yellow hover:text-charcoal transition"
            >
              Call Now
            </a>
          </div>
          <p className="mt-6 text-sm">Serving St. George, Kanab, Flagstaff & Surrounding Areas</p>
        </div>
      </section>
    </main>
  );
}
