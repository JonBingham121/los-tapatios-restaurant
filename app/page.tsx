import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Authentic<br />
              Mexican Food
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-lg">
              Fresh ingredients. Family recipes.<br />
              Warm hospitality.
            </p>
            <div>
              <Link
                href="/order"
                className="inline-block bg-mexican-red text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition shadow-lg"
              >
                Order Now
              </Link>
            </div>
          </div>
          
          {/* Right side - Hero Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 z-10"></div>
            {/* Placeholder for hero food image - replace with actual image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23B8860B' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='white'%3ESizzling Fajitas Image%3C/text%3E%3C/svg%3E')"}}>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">Serving you in three beautiful Southwest locations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* St. George */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-mexican-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">St. George, UT</h3>
              <p className="text-gray-600 mb-2">123 Main Street</p>
              <p className="text-gray-600 mb-4">St. George, UT 84770</p>
              <p className="text-gray-900 font-semibold mb-6">(435) 555-1234</p>
              <Link
                href="/locations/st-george"
                className="inline-block text-mexican-red font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>

            {/* Kanab */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-mexican-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kanab, UT</h3>
              <p className="text-gray-600 mb-2">456 Center Street</p>
              <p className="text-gray-600 mb-4">Kanab, UT 84741</p>
              <p className="text-gray-900 font-semibold mb-6">(435) 555-5678</p>
              <Link
                href="/locations/kanab"
                className="inline-block text-mexican-red font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>

            {/* Flagstaff */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-mexican-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Flagstaff, AZ</h3>
              <p className="text-gray-600 mb-2">789 Route 66</p>
              <p className="text-gray-600 mb-4">Flagstaff, AZ 86001</p>
              <p className="text-gray-900 font-semibold mb-6">(928) 555-9012</p>
              <Link
                href="/locations/flagstaff"
                className="inline-block text-mexican-red font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Signature Favorites
            </h2>
            <p className="text-xl text-gray-600">The dishes that keep our guests coming back</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition mb-4">
                <span className="text-6xl">🍤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sizzling Fajitas</h3>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition mb-4">
                <span className="text-6xl">🌮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Street Tacos</h3>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition mb-4">
                <span className="text-6xl">🍲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Molcajete</h3>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition mb-4">
                <span className="text-6xl">🍹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Margaritas</h3>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-mexican-red text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Locals Love Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Locals Love Us
            </h2>
            <p className="text-xl text-gray-600">More than just great food</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Owned</h3>
              <p className="text-gray-600">Three generations of tradition</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic</h3>
              <p className="text-gray-600">True Mexican recipes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh</h3>
              <p className="text-gray-600">Made daily from scratch</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Friendly</h3>
              <p className="text-gray-600">Like coming home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="flex justify-center items-center mb-6">
              <span className="text-6xl">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">4.6 Stars on Google</p>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              "Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."
            </p>
            <p className="text-gray-500 mt-6">— Sarah M., St. George</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mexican-red to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Craving Authentic Mexican Food?
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            Order online for pickup or delivery today!
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-mexican-red px-12 py-5 rounded-md text-xl font-bold hover:bg-gray-100 transition shadow-xl"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
