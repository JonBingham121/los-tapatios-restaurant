import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Full Viewport with Fajita Background */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Authentic<br />
                Mexican<br />
                <span className="text-[#F4B400]">Flavors</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-10 font-light">
                Fresh ingredients. Family recipes.<br />
                Three generations of tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order" className="inline-block bg-[#B71C1C] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#8B0000] transition shadow-2xl text-center">
                  Order Online
                </Link>
                <Link href="/menu" className="inline-block bg-white/10 backdrop-blur-sm text-white border-2 border-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-white/20 transition text-center">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="py-24 bg-[#FFF8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6">Signature Favorites</h2>
            <p className="text-2xl text-gray-600">The dishes that bring our guests back</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl shadow-premium-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974666440-e3a1cb9b09e3?q=80&w=1000&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Sizzling Fajitas</h3>
                <p className="text-white/90 text-lg mb-4">Mesquite-grilled perfection served on a sizzling skillet with fresh tortillas</p>
                <span className="inline-block text-[#F4B400] font-semibold text-lg">From $16.99</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-premium-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Street Tacos</h3>
                <p className="text-white/90 text-lg mb-4">Authentic corn tortillas with your choice of carne asada, al pastor, or carnitas</p>
                <span className="inline-block text-[#F4B400] font-semibold text-lg">From $12.99</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Molcajete</h3>
                <p className="text-white/90 mb-2">Volcanic stone bowl feast</p>
                <span className="text-[#F4B400] font-semibold">$24.99</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1599974667595-229accee8a7e?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enchiladas</h3>
                <p className="text-white/90 mb-2">Homemade sauce perfection</p>
                <span className="text-[#F4B400] font-semibold">$14.99</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Margaritas</h3>
                <p className="text-white/90 mb-2">Fresh-squeezed & handcrafted</p>
                <span className="text-[#F4B400] font-semibold">From $8.99</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="inline-block bg-[#B71C1C] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#8B0000] transition shadow-premium">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6">Our Locations</h2>
            <p className="text-2xl text-gray-600">Serving the Southwest with pride</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516490701444-90094632147c?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block bg-[#B71C1C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">St. George, UT</div>
                <h3 className="text-3xl font-bold text-white mb-4">Downtown St. George</h3>
                <p className="text-white/90 mb-2">123 Main Street</p>
                <p className="text-white/90 mb-4">St. George, UT 84770</p>
                <p className="text-[#F4B400] font-bold text-lg mb-6">(435) 555-1234</p>
                <Link href="/locations/st-george" className="inline-block bg-white text-[#B71C1C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  View Details →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block bg-[#B71C1C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">Kanab, UT</div>
                <h3 className="text-3xl font-bold text-white mb-4">Historic Kanab</h3>
                <p className="text-white/90 mb-2">456 Center Street</p>
                <p className="text-white/90 mb-4">Kanab, UT 84741</p>
                <p className="text-[#F4B400] font-bold text-lg mb-6">(435) 555-5678</p>
                <Link href="/locations/kanab" className="inline-block bg-white text-[#B71C1C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  View Details →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&auto=format&fit=crop')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block bg-[#B71C1C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">Flagstaff, AZ</div>
                <h3 className="text-3xl font-bold text-white mb-4">Route 66 Flagstaff</h3>
                <p className="text-white/90 mb-2">789 Route 66</p>
                <p className="text-white/90 mb-4">Flagstaff, AZ 86001</p>
                <p className="text-[#F4B400] font-bold text-lg mb-6">(928) 555-9012</p>
                <Link href="/locations/flagstaff" className="inline-block bg-white text-[#B71C1C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Club Section */}
      <section className="py-24 bg-gradient-to-br from-[#B71C1C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 texture-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F4B400] text-[#2C2C2C] px-6 py-2 rounded-full text-sm font-bold mb-6">EXCLUSIVE REWARDS</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Join the VIP Club</h2>
            <p className="text-2xl text-white/90 mb-8">Get birthday rewards, exclusive offers, and early access to new menu items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Birthday Rewards</h3>
              <p className="text-white/80">Free entrée on your special day</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Exclusive Offers</h3>
              <p className="text-white/80">Members-only deals & promotions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Early Access</h3>
              <p className="text-white/80">First to try new menu items</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium-lg">
            <h3 className="text-3xl font-bold text-[#2C2C2C] mb-6 text-center">Sign Up Now</h3>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#B71C1C] focus:outline-none text-[#2C2C2C] text-lg" />
                <input type="text" placeholder="Last Name" className="px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#B71C1C] focus:outline-none text-[#2C2C2C] text-lg" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Mobile Number" className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#B71C1C] focus:outline-none text-[#2C2C2C] text-lg" />
              </div>
              <div className="mb-6">
                <input type="date" placeholder="Birthday (MM/DD)" className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#B71C1C] focus:outline-none text-[#2C2C2C] text-lg" />
              </div>
              <button type="submit" className="w-full bg-[#B71C1C] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#8B0000] transition shadow-premium">
                Join the VIP Club
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">By signing up, you agree to receive SMS messages. Message and data rates may apply.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6">What Our Guests Say</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-8 h-8 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-3xl font-bold text-[#2C2C2C]">4.6 on Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">"Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."</p>
              <p className="text-[#2C2C2C] font-semibold">Sarah M.</p>
              <p className="text-gray-500 text-sm">St. George</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">"We drive from Kanab just for their street tacos. Fresh ingredients, authentic flavors, and the margaritas are top-notch!"</p>
              <p className="text-[#2C2C2C] font-semibold">Mike & Lisa R.</p>
              <p className="text-gray-500 text-sm">Kanab</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">"Visited on our road trip to Flagstaff. The molcajete was amazing! Service was friendly and the atmosphere was perfect."</p>
              <p className="text-[#2C2C2C] font-semibold">David T.</p>
              <p className="text-gray-500 text-sm">Flagstaff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Authentic Mexican Cuisine?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/80">Order online for pickup or delivery today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="inline-block bg-[#B71C1C] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#8B0000] transition shadow-2xl">
              Order Now
            </Link>
            <Link href="/locations" className="inline-block bg-[#F4B400] text-[#2C2C2C] px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#E5A700] transition shadow-2xl">
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

