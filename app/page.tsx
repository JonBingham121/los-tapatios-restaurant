import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974666440-e3a1cb9b09e3?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <p className="text-xl md:text-2xl text-white mb-4 font-light">
              Family Recipes. Bold Flavor.
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              AUTHENTIC<br />
              MEXICAN FOOD
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Serving St. George • Kanab • Flagstaff
            </p>
            <Link 
              href="/order" 
              className="inline-block bg-[#B71C1C] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#8B0000] transition shadow-2xl"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
              Choose Your Location
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* St. George */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center">
                <div className="w-16 h-16 bg-[#B71C1C] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">St. George</h3>
                <p className="text-gray-700 mb-2">123 Main Street</p>
                <p className="text-gray-700 mb-6">St. George, UT 84770<br />(435) 555-1234</p>
                <Link 
                  href="/locations/st-george"
                  className="inline-block bg-[#B71C1C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8B0000] transition"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Kanab */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center">
                <div className="w-16 h-16 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">Kanab</h3>
                <p className="text-gray-700 mb-2">456 Center Street</p>
                <p className="text-gray-700 mb-6">Kanab, UT 84741<br />(435) 555-5678</p>
                <Link 
                  href="/locations/kanab"
                  className="inline-block bg-[#F4B400] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E5A700] transition"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Flagstaff */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center">
                <div className="w-16 h-16 bg-[#4E7C35] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">Flagstaff</h3>
                <p className="text-gray-700 mb-2">789 Route 66</p>
                <p className="text-gray-700 mb-6">Flagstaff, AZ 86001<br />(928) 555-9012</p>
                <Link 
                  href="/locations/flagstaff"
                  className="inline-block bg-[#4E7C35] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3D6129] transition"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
              Signature Favorites
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Sizzling Fajitas */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-premium hover:shadow-premium-lg transition">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974666440-e3a1cb9b09e3?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C]">Sizzling Fajitas</h3>
            </div>

            {/* Street Tacos */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-premium hover:shadow-premium-lg transition">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C]">Street Tacos</h3>
            </div>

            {/* Molcajete */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-premium hover:shadow-premium-lg transition">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C]">Molcajete</h3>
            </div>

            {/* Margaritas */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-premium hover:shadow-premium-lg transition">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C]">Margaritas</h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="inline-block bg-[#B71C1C] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#8B0000] transition shadow-premium"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Locals Love Los Tapatios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
              Why Locals Love Los Tapatios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#B71C1C] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Family Owned</h3>
              <p className="text-gray-600">Three generations of tradition</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Authentic</h3>
              <p className="text-gray-600">True Mexican recipes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4E7C35] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Made from scratch</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#B71C1C] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Friendly</h3>
              <p className="text-gray-600">Like coming home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-premium-lg p-12">
            <div className="flex justify-center items-center gap-2 mb-6">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-10 h-10 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-4xl font-bold text-[#2C2C2C] mb-6">4.6 Stars on Google</p>
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."
            </p>
            <p className="text-gray-600 mt-6">— Sarah M., St. George</p>
          </div>
        </div>
      </section>

      {/* Craving Mexican CTA */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974667595-229accee8a7e?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-[#B71C1C]/90"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Craving Mexican Food?
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            Order online for pickup or delivery today!
          </p>
          <Link 
            href="/order"
            className="inline-block bg-white text-[#B71C1C] px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
