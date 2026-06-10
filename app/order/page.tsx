import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Online | Los Tapatios Mexican Restaurant",
  description: "Order authentic Mexican food online for pickup or delivery from Los Tapatios in St. George, Kanab, or Flagstaff.",
};

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-mexican-red via-mexican-orange to-mexican-yellow py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">Order Online</h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose your location to start ordering for pickup or delivery
          </p>

          <div className="space-y-6 mb-12">
            {/* St. George */}
            <div className="bg-mexican-cream p-6 rounded-lg hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-mexican-red mb-3">St. George, UT</h2>
              <p className="text-gray-600 mb-4">123 Main Street | (435) 555-1234</p>
              <button className="bg-mexican-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-mexican-orange transition">
                Order from St. George
              </button>
            </div>

            {/* Kanab */}
            <div className="bg-mexican-cream p-6 rounded-lg hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-mexican-red mb-3">Kanab, UT</h2>
              <p className="text-gray-600 mb-4">456 Center Street | (435) 555-5678</p>
              <button className="bg-mexican-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-mexican-orange transition">
                Order from Kanab
              </button>
            </div>

            {/* Flagstaff */}
            <div className="bg-mexican-cream p-6 rounded-lg hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-mexican-red mb-3">Flagstaff, AZ</h2>
              <p className="text-gray-600 mb-4">789 Route 66 | (928) 555-9012</p>
              <button className="bg-mexican-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-mexican-orange transition">
                Order from Flagstaff
              </button>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Other Ways to Order</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-charcoal text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                📱 DoorDash
              </button>
              <button className="bg-charcoal text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                🚗 Uber Eats
              </button>
              <button className="bg-charcoal text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                🍽️ Grubhub
              </button>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-4">
              <strong>Pickup Available:</strong> Order ahead and skip the line<br />
              <strong>Delivery:</strong> Available through our partners
            </p>
            <Link href="/menu" className="text-mexican-blue hover:text-mexican-orange font-semibold">
              View Full Menu →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
