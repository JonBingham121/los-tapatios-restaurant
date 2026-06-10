import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu | Los Tapatios Mexican Restaurant",
  description: "Explore our authentic Mexican menu featuring fajitas, tacos, enchiladas, burritos, and specialty margaritas.",
};

export default function MenuPage() {
  return (
    <main className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-charcoal mb-4">Our Menu</h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Fresh ingredients. Family recipes. Made with love.
        </p>

        {/* Appetizers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-mexican-red mb-6 border-b-2 border-mexican-yellow pb-2">
            Appetizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">Guacamole Fresco</h3>
              <p className="text-gray-600">Fresh avocados, lime, cilantro, onions, tomatoes</p>
              <p className="text-mexican-orange font-semibold mt-2">$8.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Queso Fundido</h3>
              <p className="text-gray-600">Melted cheese with chorizo and peppers</p>
              <p className="text-mexican-orange font-semibold mt-2">$9.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Nachos Supreme</h3>
              <p className="text-gray-600">Chips, cheese, beans, jalapeños, sour cream, guacamole</p>
              <p className="text-mexican-orange font-semibold mt-2">$11.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Taquitos Dorados</h3>
              <p className="text-gray-600">Crispy rolled tacos with chicken or beef</p>
              <p className="text-mexican-orange font-semibold mt-2">$10.99</p>
            </div>
          </div>
        </section>

        {/* Signature Fajitas */}
        <section className="mb-12 bg-mexican-cream p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-mexican-red mb-6 border-b-2 border-mexican-yellow pb-2">
            Signature Fajitas
          </h2>
          <p className="text-gray-600 mb-6">Sizzling hot with peppers, onions, served with rice, beans, guacamole, sour cream, and tortillas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">Chicken Fajitas</h3>
              <p className="text-mexican-orange font-semibold mt-2">$16.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Steak Fajitas</h3>
              <p className="text-mexican-orange font-semibold mt-2">$18.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Shrimp Fajitas</h3>
              <p className="text-mexican-orange font-semibold mt-2">$19.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Mixed Fajitas</h3>
              <p className="text-gray-600">Chicken, steak, and shrimp</p>
              <p className="text-mexican-orange font-semibold mt-2">$21.99</p>
            </div>
          </div>
        </section>

        {/* Tacos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-mexican-red mb-6 border-b-2 border-mexican-yellow pb-2">
            Street Tacos
          </h2>
          <p className="text-gray-600 mb-6">Three soft corn tortillas with onions, cilantro, lime. Served with rice and beans.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">Carne Asada</h3>
              <p className="text-gray-600">Grilled steak</p>
              <p className="text-mexican-orange font-semibold mt-2">$13.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Carnitas</h3>
              <p className="text-gray-600">Slow-cooked pork</p>
              <p className="text-mexican-orange font-semibold mt-2">$12.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Al Pastor</h3>
              <p className="text-gray-600">Marinated pork with pineapple</p>
              <p className="text-mexican-orange font-semibold mt-2">$13.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Pescado</h3>
              <p className="text-gray-600">Grilled fish with cabbage slaw</p>
              <p className="text-mexican-orange font-semibold mt-2">$14.99</p>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-12 bg-mexican-cream p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-mexican-red mb-6 border-b-2 border-mexican-yellow pb-2">
            House Specialties
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">Molcajete Los Tapatios</h3>
              <p className="text-gray-600">Sizzling stone bowl with grilled steak, chicken, shrimp, chorizo, peppers, onions, cheese, and cactus. Served with rice, beans, and tortillas.</p>
              <p className="text-mexican-orange font-semibold mt-2">$24.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Enchiladas Supremas</h3>
              <p className="text-gray-600">Four enchiladas (chicken, beef, cheese, bean) topped with red sauce, cheese, lettuce, tomato, sour cream</p>
              <p className="text-mexican-orange font-semibold mt-2">$14.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Chile Relleno</h3>
              <p className="text-gray-600">Poblano pepper stuffed with cheese, battered and fried, topped with ranchero sauce</p>
              <p className="text-mexican-orange font-semibold mt-2">$13.99</p>
            </div>
          </div>
        </section>

        {/* Drinks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-mexican-red mb-6 border-b-2 border-mexican-yellow pb-2">
            Margaritas & Drinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal">House Margarita</h3>
              <p className="text-gray-600">Classic lime margarita on the rocks or frozen</p>
              <p className="text-mexican-orange font-semibold mt-2">$7.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Cadillac Margarita</h3>
              <p className="text-gray-600">Premium tequila, Grand Marnier, fresh lime</p>
              <p className="text-mexican-orange font-semibold mt-2">$11.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Flavored Margaritas</h3>
              <p className="text-gray-600">Mango, Strawberry, Peach, or Watermelon</p>
              <p className="text-mexican-orange font-semibold mt-2">$8.99</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal">Horchata</h3>
              <p className="text-gray-600">Traditional rice cinnamon drink</p>
              <p className="text-mexican-orange font-semibold mt-2">$3.99</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/order"
            className="inline-block bg-mexican-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-mexican-orange transition shadow-lg"
          >
            Order Online Now
          </Link>
        </div>
      </div>
    </main>
  );
}
