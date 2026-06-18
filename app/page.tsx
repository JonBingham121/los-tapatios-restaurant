import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background: Sizzling Shrimp Fajitas */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Decorative Border Top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#B71C1C] via-[#F4B400] to-[#B71C1C]"></div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <p className="text-xl md:text-2xl text-[#F4B400] mb-4 font-semibold tracking-wide">
              Family Recipes. Bold Flavor.
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              AUTHENTIC<br />
              MEXICAN FOOD
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
              Serving St. George • Kanab • Flagstaff
            </p>
            <Link 
              href="/order" 
              className="inline-block bg-[#B71C1C] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#8B0000] transition shadow-2xl transform hover:scale-105"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Decorative Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#B71C1C] via-[#F4B400] to-[#B71C1C]"></div>
      </section>

      {/* Choose Your Location */}
      <section className="py-20 bg-white relative">
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B71C1C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2">
              Choose Your Location
            </h2>
            <div className="w-24 h-1 bg-[#B71C1C] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* St. George */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center relative">
                {/* Decorative corner pattern */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#B71C1C] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#B71C1C] opacity-20"></div>
                
                <div className="w-16 h-16 bg-[#B71C1C] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">St. George</h3>
                <p className="text-gray-700 mb-1">123 Main Street</p>
                <p className="text-gray-700 mb-1">St. George, UT 84770</p>
                <p className="text-gray-700 mb-6 font-semibold">(435) 555-1234</p>
                <Link 
                  href="/locations/st-george"
                  className="inline-block bg-[#B71C1C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8B0000] transition shadow-lg transform hover:scale-105"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Kanab */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center relative">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#F4B400] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#F4B400] opacity-20"></div>
                
                <div className="w-16 h-16 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">Kanab</h3>
                <p className="text-gray-700 mb-1">456 Center Street</p>
                <p className="text-gray-700 mb-1">Kanab, UT 84741</p>
                <p className="text-gray-700 mb-6 font-semibold">(435) 555-5678</p>
                <Link 
                  href="/locations/kanab"
                  className="inline-block bg-[#F4B400] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E5A700] transition shadow-lg transform hover:scale-105"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Flagstaff */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?q=80&w=800&auto=format&fit=crop')"}}
                ></div>
              </div>
              <div className="bg-[#FFF8E8] p-8 text-center relative">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#4E7C35] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#4E7C35] opacity-20"></div>
                
                <div className="w-16 h-16 bg-[#4E7C35] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">Flagstaff</h3>
                <p className="text-gray-700 mb-1">789 Route 66</p>
                <p className="text-gray-700 mb-1">Flagstaff, AZ 86001</p>
                <p className="text-gray-700 mb-6 font-semibold">(928) 555-9012</p>
                <Link 
                  href="/locations/flagstaff"
                  className="inline-block bg-[#4E7C35] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3D6129] transition shadow-lg transform hover:scale-105"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="py-20 bg-[#FFF8E8] relative">
        {/* Mexican tile pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4B400' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2">
              Signature Favorites
            </h2>
            <div className="w-24 h-1 bg-[#B71C1C] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Sizzling Fajitas */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-4 ring-white">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974666440-e3a1cb9b09e3?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C]">Sizzling Fajitas</h3>
            </div>

            {/* Street Tacos */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-4 ring-white">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C]">Street Tacos</h3>
            </div>

            {/* Molcajete */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-4 ring-white">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C]">Molcajete</h3>
            </div>

            {/* Margaritas */}
            <div className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-4 ring-white">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C]">Margaritas</h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="inline-block bg-[#B71C1C] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#8B0000] transition shadow-xl transform hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Locals Love Los Tapatios */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#F4B400] rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-[#B71C1C] rounded-full opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2">
              Why Locals Love Los Tapatios
            </h2>
            <div className="w-24 h-1 bg-[#B71C1C] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B71C1C] to-[#8B0000] rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Family Owned</h3>
              <p className="text-gray-600">Three generations of tradition</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4B400] to-[#E5A700] rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Authentic</h3>
              <p className="text-gray-600">True Mexican recipes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4E7C35] to-[#3D6129] rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Made from scratch</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B71C1C] to-[#8B0000] rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
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
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B71C1C] via-[#F4B400] to-[#B71C1C]"></div>
            
            <div className="flex justify-center items-center gap-2 mb-6">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-12 h-12 text-[#F4B400] fill-current drop-shadow-lg" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8">4.6 Stars on Google</p>
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
              "Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."
            </p>
            <p className="text-gray-600 text-lg font-semibold">— Sarah M., St. George</p>
          </div>
        </div>
      </section>

      {/* Craving Mexican CTA */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974667595-229accee8a7e?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/95 to-[#8B0000]/95"></div>
        </div>

        {/* Decorative Border Top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F4B400] via-white to-[#F4B400]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Craving Mexican Food?
          </h2>
          <p className="text-xl md:text-2xl mb-12 drop-shadow-lg">
            Order online for pickup or delivery today!
          </p>
          <Link 
            href="/order"
            className="inline-block bg-white text-[#B71C1C] px-14 py-5 rounded-full text-xl font-bold hover:bg-[#FFF8E8] transition shadow-2xl transform hover:scale-110"
          >
            Order Now
          </Link>
        </div>

        {/* Decorative Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F4B400] via-white to-[#F4B400]"></div>
      </section>
    </main>
  );
}
