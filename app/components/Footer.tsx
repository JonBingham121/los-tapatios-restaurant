import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-mexican-red mb-4">Los Tapatios</h3>
            <p className="text-gray-300">Authentic Mexican cuisine served with love.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mexican-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-mexican-orange transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-mexican-orange transition">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-300 hover:text-mexican-orange transition">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/vip-club" className="text-gray-300 hover:text-mexican-orange transition">
                  VIP Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mexican-yellow">Our Locations</h4>
            <ul className="space-y-2 text-gray-300">
              <li>St. George, UT</li>
              <li>Kanab, UT</li>
              <li>Flagstaff, AZ</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mexican-yellow">Hours</h4>
            <p className="text-gray-300">
              Mon - Thu: 11am - 9pm<br />
              Fri - Sat: 11am - 10pm<br />
              Sunday: 11am - 9pm
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Los Tapatios Mexican Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
