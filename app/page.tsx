import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
        {/* Fajita Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/assets/hero-fajitas.png')"}}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <p className="text-lg md:text-xl text-white mb-3 font-accent">
              Family Recipes. Bold Flavor.
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline text-white mb-6 leading-tight tracking-wide">
              AUTHENTIC<br />
              MEXICAN FOOD
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8 font-sans">
              Serving St. George • Kanab • Flagstaff
            </p>
            <Link 
              href="/order" 
              className="inline-block bg-brand-red text-white px-10 py-3 rounded-full text-base font-sans font-bold hover:bg-brand-brown transition"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-gray-900 mb-2 tracking-wide">
              Choose Your Location
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* St. George */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/location-st-george.png')"}}
                ></div>
              </div>
              <div className="bg-brand-cream p-6 text-center">
                <div className="w-12 h-12 bg-brand-red rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline text-gray-900 mb-2 tracking-wide">St. George</h3>
                <p className="text-gray-700 text-sm mb-1 font-sans">123 Main Street</p>
                <p className="text-gray-700 text-sm mb-1 font-sans">St. George, UT 84770</p>
                <p className="text-gray-700 text-sm mb-4 font-sans">(435) 555-1234</p>
                <Link 
                  href="/locations/st-george"
                  className="inline-block bg-brand-red text-white px-6 py-2 rounded-full text-sm font-sans font-bold hover:bg-brand-brown transition"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Kanab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/location-kanab.png')"}}
                ></div>
              </div>
              <div className="bg-brand-cream p-6 text-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline text-gray-900 mb-2 tracking-wide">Kanab</h3>
                <p className="text-gray-700 text-sm mb-1 font-sans">456 Center Street</p>
                <p className="text-gray-700 text-sm mb-1 font-sans">Kanab, UT 84741</p>
                <p className="text-gray-700 text-sm mb-4 font-sans">(435) 555-5678</p>
                <Link 
                  href="/locations/kanab"
                  className="inline-block bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-sans font-bold hover:bg-brand-brown transition"
                >
                  View Location
                </Link>
              </div>
            </div>

            {/* Flagstaff */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/location-flagstaff.png')"}}
                ></div>
              </div>
              <div className="bg-brand-cream p-6 text-center">
                <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline text-gray-900 mb-2 tracking-wide">Flagstaff</h3>
                <p className="text-gray-700 text-sm mb-1 font-sans">789 Route 66</p>
                <p className="text-gray-700 text-sm mb-1 font-sans">Flagstaff, AZ 86001</p>
                <p className="text-gray-700 text-sm mb-4 font-sans">(928) 555-9012</p>
                <Link 
                  href="/locations/flagstaff"
                  className="inline-block bg-brand-green text-white px-6 py-2 rounded-full text-sm font-sans font-bold hover:bg-brand-brown transition"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Favorites */}
      <section className="relative py-16 overflow-hidden">
        {/* Wood Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/assets/bg-wood.png')"}} 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-white mb-2 tracking-wide text-shadow">
              Signature Favorites
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Sizzling Fajitas */}
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/food-fajitas.png')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-headline text-white tracking-wide text-shadow">Sizzling Fajitas</h3>
            </div>

            {/* Street Tacos */}
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/food-tacos.png')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-headline text-white tracking-wide text-shadow">Street Tacos</h3>
            </div>

            {/* Molcajete */}
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/food-molcajete.png')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-headline text-white tracking-wide text-shadow">Molcajete</h3>
            </div>

            {/* Margaritas */}
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{backgroundImage: "url('/assets/food-margarita.png')"}}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-headline text-white tracking-wide text-shadow">Margaritas</h3>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/menu"
              className="inline-block bg-brand-red text-white px-10 py-3 rounded-full text-base font-sans font-bold hover:bg-brand-brown transition"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Locals Love Los Tapatios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-gray-900 mb-2 tracking-wide">
              Why Locals Love Los Tapatios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-headline text-gray-900 mb-2 tracking-wide">Family Owned</h3>
              <p className="text-gray-600 text-sm font-sans">Three generations of tradition</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-headline text-gray-900 mb-2 tracking-wide">Authentic</h3>
              <p className="text-gray-600 text-sm font-sans">True Mexican recipes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-headline text-gray-900 mb-2 tracking-wide">Fresh Daily</h3>
              <p className="text-gray-600 text-sm font-sans">Made from scratch</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-headline text-gray-900 mb-2 tracking-wide">Friendly</h3>
              <p className="text-gray-600 text-sm font-sans">Like coming home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-3xl font-headline text-gray-900 mb-2 tracking-wide">4.6 Stars on Google</p>
            <div className="flex justify-center items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-8 h-8 text-brand-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 font-sans">
                "Best authentic Mexican food in Southern Utah! The fajitas are incredible and the staff treats you like family."
              </p>
              <p className="text-gray-900 font-sans font-semibold">— Sarah M.</p>
              <p className="text-gray-600 text-sm font-sans">St. George</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 font-sans">
                "Hands down the best margaritas I've ever had! Great atmosphere and the service is always top-notch."
              </p>
              <p className="text-gray-900 font-sans font-semibold">— Mike T.</p>
              <p className="text-gray-600 text-sm font-sans">Kanab</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 font-sans">
                "The molcajete is a must-try! Fresh ingredients, huge portions, and amazing flavors. We come here every week!"
              </p>
              <p className="text-gray-900 font-sans font-semibold">— Jennifer R.</p>
              <p className="text-gray-600 text-sm font-sans">Flagstaff</p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 font-sans">
                "Authentic Mexican recipes that remind me of my grandmother's cooking. The carne asada tacos are perfection!"
              </p>
              <p className="text-gray-900 font-sans font-semibold">— Carlos D.</p>
              <p className="text-gray-600 text-sm font-sans">St. George</p>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 font-sans">
                "Family-friendly atmosphere with incredible food. The kids love it and so do we. Our go-to spot for Mexican!"
              </p>
              <p className="text-gray-900 font-sans font-semibold">— Amanda L.</p>
              <p className="text-gray-600 text-sm font-sans">Kanab</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Club */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">👑</div>
          <h2 className="text-4xl md:text-5xl font-headline text-gray-900 mb-4 tracking-wide">
            Join Our VIP Club
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8">
            Get exclusive rewards, birthday freebies, and special member-only offers!
          </p>
          <Link 
            href="/vip-club"
            className="inline-block bg-brand-gold text-white px-10 py-3 rounded-full text-base font-sans font-bold hover:bg-brand-orange transition"
          >
            Join VIP Club
          </Link>
        </div>
      </section>

      {/* Craving Mexican CTA */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url('/assets/cta-enchiladas.png')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red to-brand-brown" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-headline mb-4 tracking-wide text-shadow">
            Craving Mexican Food?
          </h2>
          <p className="text-xl mb-8 font-accent text-shadow">
            Order online for pickup or delivery today!
          </p>
          <Link 
            href="/order"
            className="inline-block bg-brand-gold text-black px-10 py-3 rounded-full text-base font-sans font-bold hover:bg-brand-cream transition shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
