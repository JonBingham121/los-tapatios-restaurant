import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Club | Los Tapatios Mexican Restaurant",
  description: "Join the Los Tapatios VIP Club for exclusive rewards, birthday freebies, and special member-only offers.",
};

export default function VIPClubPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-mexican-yellow via-mexican-orange to-mexican-red text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">VIP Club</h1>
          <p className="text-2xl mb-8">
            Join our VIP family and get exclusive perks, rewards, and special offers!
          </p>
          <div className="text-6xl mb-4">👑</div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">
            VIP Member Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Birthday Reward</h3>
              <p className="text-gray-600">Free entree on your birthday month</p>
            </div>
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Welcome Bonus</h3>
              <p className="text-gray-600">Free appetizer when you sign up</p>
            </div>
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Earn Points</h3>
              <p className="text-gray-600">1 point for every $1 spent</p>
            </div>
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Exclusive Offers</h3>
              <p className="text-gray-600">Member-only email deals and promos</p>
            </div>
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Special Events</h3>
              <p className="text-gray-600">Early access to new menu items</p>
            </div>
            <div className="bg-mexican-cream p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🌮</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Surprise Rewards</h3>
              <p className="text-gray-600">Random freebies and upgrades</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-mexican-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            How VIP Club Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-mexican-blue rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Sign Up Free</h3>
              <p className="text-lg">Fill out the form below with your email and phone</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-mexican-blue rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Start Earning</h3>
              <p className="text-lg">Get your welcome bonus and earn points on every visit</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-mexican-blue rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Redeem Rewards</h3>
              <p className="text-lg">Use points for free food, drinks, and exclusive perks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 bg-mexican-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-8">
            Join the VIP Club Today!
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-charcoal font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-charcoal font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
                placeholder="(435) 555-1234"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="birthday" className="block text-charcoal font-semibold mb-2">
                Birthday (Optional - for birthday rewards!)
              </label>
              <input
                type="date"
                id="birthday"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mexican-red"
              />
            </div>
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-3"
                />
                <span className="text-sm text-gray-600">
                  I agree to receive promotional emails and text messages from Los Tapatios. You can unsubscribe at any time.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-mexican-red to-mexican-orange text-white py-4 rounded-full text-lg font-bold hover:shadow-lg transition"
            >
              Join VIP Club - It's Free!
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">
            What VIP Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mexican-cream p-6 rounded-lg">
              <div className="text-mexican-yellow text-2xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "Love the VIP perks! Got a free appetizer when I signed up and always get special deals."
              </p>
              <p className="font-semibold text-charcoal">- Sarah M., St. George</p>
            </div>
            <div className="bg-mexican-cream p-6 rounded-lg">
              <div className="text-mexican-yellow text-2xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4">
                "The birthday reward is amazing! Plus earning points on every visit makes me want to come back more."
              </p>
              <p className="font-semibold text-charcoal">- Mike T., Kanab</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
