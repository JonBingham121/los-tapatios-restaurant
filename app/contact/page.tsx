import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Los Tapatios Mexican Restaurant",
  description: "Get in touch with Los Tapatios. Find phone numbers, addresses, and hours for our St. George, Kanab, and Flagstaff locations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-mexican-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-charcoal mb-4">Contact Us</h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          We'd love to hear from you! Reach out to any of our locations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-charcoal font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-charcoal font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                  placeholder="(435) 555-1234"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-charcoal font-semibold mb-2">
                  Preferred Location
                </label>
                <select
                  id="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                >
                  <option value="">Select a location</option>
                  <option value="stgeorge">St. George, UT</option>
                  <option value="kanab">Kanab, UT</option>
                  <option value="flagstaff">Flagstaff, AZ</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-charcoal font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mexican-red text-white py-4 rounded-full text-lg font-bold hover:bg-mexican-orange transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* St. George */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">St. George, UT</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-charcoal">Address:</strong><br />
                  123 Main Street<br />
                  St. George, UT 84770
                </p>
                <p>
                  <strong className="text-charcoal">Phone:</strong><br />
                  <a href="tel:435-555-1234" className="text-mexican-blue hover:text-mexican-orange">(435) 555-1234</a>
                </p>
                <p>
                  <strong className="text-charcoal">Hours:</strong><br />
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>

            {/* Kanab */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Kanab, UT</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-charcoal">Address:</strong><br />
                  456 Center Street<br />
                  Kanab, UT 84741
                </p>
                <p>
                  <strong className="text-charcoal">Phone:</strong><br />
                  <a href="tel:435-555-5678" className="text-mexican-blue hover:text-mexican-orange">(435) 555-5678</a>
                </p>
                <p>
                  <strong className="text-charcoal">Hours:</strong><br />
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>

            {/* Flagstaff */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Flagstaff, AZ</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-charcoal">Address:</strong><br />
                  789 Route 66<br />
                  Flagstaff, AZ 86001
                </p>
                <p>
                  <strong className="text-charcoal">Phone:</strong><br />
                  <a href="tel:928-555-9012" className="text-mexican-blue hover:text-mexican-orange">(928) 555-9012</a>
                </p>
                <p>
                  <strong className="text-charcoal">Hours:</strong><br />
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-mexican-red mb-2">Do you take reservations?</h3>
              <p className="text-gray-700">
                Yes! We accept reservations for parties of 6 or more. Call your preferred location to book.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-mexican-red mb-2">Do you offer delivery?</h3>
              <p className="text-gray-700">
                Yes, we offer delivery through our online ordering system and third-party apps like DoorDash and Uber Eats.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-mexican-red mb-2">Can I order catering online?</h3>
              <p className="text-gray-700">
                For catering orders, please call your preferred location directly or fill out the contact form above. We'll get back to you within 24 hours with a custom quote.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-mexican-red mb-2">Do you have vegetarian/vegan options?</h3>
              <p className="text-gray-700">
                Absolutely! We have many vegetarian options and can accommodate vegan requests. Just let your server know.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-mexican-red mb-2">Do you have a kids menu?</h3>
              <p className="text-gray-700">
                Yes! We have a full kids menu with smaller portions and kid-friendly favorites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
