import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Los Tapatios Mexican Restaurant",
  description: "Find Los Tapatios locations in St. George UT, Kanab UT, and Flagstaff AZ. View hours, phone numbers, and directions.",
};

export default function LocationsPage() {
  return (
    <main className="py-16 bg-mexican-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-charcoal mb-12">
          Our Locations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* St. George */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-mexican-red mb-6">St. George, UT</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-charcoal">Address:</p>
                <p className="text-gray-600">123 Main Street<br />St. George, UT 84770</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Phone:</p>
                <p className="text-gray-600">(435) 555-1234</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Hours:</p>
                <p className="text-gray-600">
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>
            <Link
              href="/locations/st-george"
              className="inline-block w-full text-center bg-mexican-blue text-white px-6 py-3 rounded-full hover:bg-mexican-orange transition"
            >
              View Full Details
            </Link>
          </div>

          {/* Kanab */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-mexican-red mb-6">Kanab, UT</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-charcoal">Address:</p>
                <p className="text-gray-600">456 Center Street<br />Kanab, UT 84741</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Phone:</p>
                <p className="text-gray-600">(435) 555-5678</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Hours:</p>
                <p className="text-gray-600">
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>
            <Link
              href="/locations/kanab"
              className="inline-block w-full text-center bg-mexican-blue text-white px-6 py-3 rounded-full hover:bg-mexican-orange transition"
            >
              View Full Details
            </Link>
          </div>

          {/* Flagstaff */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-mexican-red mb-6">Flagstaff, AZ</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-charcoal">Address:</p>
                <p className="text-gray-600">789 Route 66<br />Flagstaff, AZ 86001</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Phone:</p>
                <p className="text-gray-600">(928) 555-9012</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Hours:</p>
                <p className="text-gray-600">
                  Mon-Thu: 11am - 9pm<br />
                  Fri-Sat: 11am - 10pm<br />
                  Sunday: 11am - 9pm
                </p>
              </div>
            </div>
            <Link
              href="/locations/flagstaff"
              className="inline-block w-full text-center bg-mexican-blue text-white px-6 py-3 rounded-full hover:bg-mexican-orange transition"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
