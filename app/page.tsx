import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mexican-red via-mexican-orange to-mexican-yellow text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Authentic Mexican Food
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-mexican-cream">
            Fresh ingredients. Family recipes. Warm hospitality.
          </p>
          <p className="text-lg mb-8">
            Serving St. George • Kanab • Flagstaff
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-mexican-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-cream transition shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-mexican-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* St. George */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">St. George, UT</h3>
              <p className="text-charcoal mb-4">
                123 Main Street<br />
                St. George, UT 84770
              </p>
              <p className="text-charcoal mb-4">
                <strong>Phone:</strong> (435) 555-1234
              </p>
              <Link
                href="/locations/st-george"
                className="inline-block bg-mexican-blue text-white px-6 py-2 rounded-full hover:bg-mexican-orange transition"
              >
                View Details
              </Link>
            </div>

            {/* Kanab */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Kanab, UT</h3>
              <p className="text-charcoal mb-4">
                456 Center Street<br />
                Kanab, UT 84741
              </p>
              <p className="text-charcoal mb-4">
                <strong>Phone:</strong> (435) 555-5678
              </p>
              <Link
                href="/locations/kanab"
                className="inline-block bg-mexican-blue text-white px-6 py-2 rounded-full hover:bg-mexican-orange transition"
              >
                View Details
              </Link>
            </div>

            {/* Flagstaff */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-mexican-red mb-4">Flagstaff, AZ</h3>
              <p className="text-charcoal mb-4">
                789 Route 66<br />
                Flagstaff, AZ 86001
              </p>
              <p className="text-charcoal mb-4">
                <strong>Phone:</strong> (928) 555-9012
              </p>
              <Link
                href="/locations/flagstaff"
                className="inline-block bg-mexican-blue text-white px-6 py-2 rounded-full hover:bg-mexican-orange transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">
            Signature Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-mexican-yellow rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🌮</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">Sizzling Fajitas</h3>
            </div>
            <div className="text-center">
              <div className="bg-mexican-orange rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🌮</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">Street Tacos</h3>
            </div>
            <div className="text-center">
              <div className="bg-mexican-red rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🍲</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">Molcajete</h3>
            </div>
            <div className="text-center">
              <div className="bg-mexican-green rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🍹</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">Margaritas</h3>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-mexican-red text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-mexican-orange transition"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Locals Love Us */}
      <section className="py-16 bg-mexican-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Locals Love Los Tapatios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
              <p>All ingredients prepared fresh every morning</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-2">Family Recipes</h3>
              <p>Passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p>Every dish served with pride and care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            What Our Guests Say
          </h2>
          <div className="flex justify-center items-center mb-8">
            <span className="text-5xl text-mexican-yellow">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-2xl font-bold text-charcoal mb-4">4.6 Stars on Google</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            "Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-mexican-red to-mexican-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Craving Mexican Food?
          </h2>
          <p className="text-xl mb-8">
            Order online for pickup or delivery today!
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-mexican-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-cream transition shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
