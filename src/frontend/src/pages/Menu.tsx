import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919847254030?text=Hi%20HNR%2C%20I%20would%20like%20to%20place%20an%20order";

type Category =
  | "all"
  | "biriyani"
  | "specials"
  | "tiffin"
  | "roasted"
  | "curries";

interface MenuItem {
  name: string;
  price: string;
  category: Category;
}

const menuItems: MenuItem[] = [
  // Biriyani
  { name: "HNR Chicken Biriyani", price: "₹140", category: "biriyani" },
  { name: "HNR Beef Biriyani", price: "₹150", category: "biriyani" },
  { name: "HNR Mutton Biriyani", price: "₹250", category: "biriyani" },
  { name: "Chilli Biriyani", price: "₹150", category: "biriyani" },
  { name: "Special Biriyani", price: "₹150", category: "biriyani" },
  { name: "Mini Biriyani", price: "₹100", category: "biriyani" },
  { name: "Biriyani Rice", price: "₹90", category: "biriyani" },
  { name: "Egg Biriyani", price: "₹110", category: "biriyani" },
  { name: "Veg Biriyani", price: "₹110", category: "biriyani" },
  { name: "Ghee Rice", price: "₹80", category: "biriyani" },
  { name: "Veg Pulao", price: "₹100", category: "biriyani" },
  { name: "Extra Rice", price: "₹40", category: "biriyani" },
  // HNR Specials
  { name: "Kothu Poratta (Beef/Chicken)", price: "₹160", category: "specials" },
  { name: "Kothu Poratta Egg", price: "₹110", category: "specials" },
  { name: "Kizhi Poratta (Chicken/Beef)", price: "₹180", category: "specials" },
  { name: "Paal Poratta (Chicken/Beef)", price: "₹260", category: "specials" },
  { name: "Nool Poratta", price: "₹20", category: "specials" },
  { name: "Paal Kappa (Chicken/Beef)", price: "₹260", category: "specials" },
  { name: "Kappa Biriyani Chicken", price: "₹170", category: "specials" },
  { name: "Kappa Biriyani Beef", price: "₹180", category: "specials" },
  { name: "Kappa Biriyani Egg", price: "₹110", category: "specials" },
  { name: "Puttum Beefum", price: "₹80", category: "specials" },
  { name: "Chicken Mappas", price: "₹280", category: "specials" },
  { name: "Beef Mappas", price: "₹280", category: "specials" },
  { name: "Dragon Chicken (Boneless)", price: "₹220", category: "specials" },
  { name: "Kadai Chicken QTR", price: "₹170", category: "specials" },
  // Tiffin
  { name: "Idiyappam", price: "₹10", category: "tiffin" },
  { name: "Appam", price: "₹10", category: "tiffin" },
  { name: "Pathiri", price: "₹10", category: "tiffin" },
  { name: "Puttu", price: "₹15", category: "tiffin" },
  { name: "Chapathi", price: "₹15", category: "tiffin" },
  { name: "Poratta", price: "₹15", category: "tiffin" },
  { name: "Wheat Poratta", price: "₹18", category: "tiffin" },
  // Roasted
  { name: "Chicken Roast", price: "₹160", category: "roasted" },
  { name: "Beef Roast", price: "₹140", category: "roasted" },
  { name: "Egg Roast", price: "₹50", category: "roasted" },
  { name: "Beef Fry", price: "₹120", category: "roasted" },
  { name: "Tomato Fry", price: "₹80", category: "roasted" },
  { name: "Kadai Chicken QTR", price: "₹170", category: "roasted" },
  { name: "Kadai Chicken Half", price: "₹280", category: "roasted" },
  { name: "Kadai Chicken Full", price: "₹550", category: "roasted" },
  // Curries
  { name: "Chicken Curry (Small)", price: "₹70", category: "curries" },
  { name: "Chicken Curry (Large)", price: "₹110", category: "curries" },
  { name: "Beef Curry", price: "₹100", category: "curries" },
  { name: "Egg Curry", price: "₹30", category: "curries" },
  { name: "Kadala Curry", price: "₹30", category: "curries" },
  { name: "Vegetable Curry", price: "₹40", category: "curries" },
  { name: "Paneer Masala", price: "₹130", category: "curries" },
  { name: "Paneer Mutter Masala", price: "₹110", category: "curries" },
  { name: "Aalu Paneer Masala", price: "₹110", category: "curries" },
  { name: "Aalu Gobi Masala", price: "₹100", category: "curries" },
  { name: "Green Peas Masala", price: "₹70", category: "curries" },
  { name: "Veg Kuruma", price: "₹80", category: "curries" },
];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "all", label: "All Items", emoji: "🍴" },
  { key: "biriyani", label: "Biriyani", emoji: "🍛" },
  { key: "specials", label: "HNR Specials", emoji: "🥘" },
  { key: "tiffin", label: "Tiffin", emoji: "🍽️" },
  { key: "roasted", label: "Roasted", emoji: "🔥" },
  { key: "curries", label: "Curries", emoji: "🍲" },
];

const categoryEmoji: Record<Category, string> = {
  all: "🍴",
  biriyani: "🍛",
  specials: "🥘",
  tiffin: "🍽️",
  roasted: "🔥",
  curries: "🍲",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-[#FFF8F3] border-b border-[#FC8019]/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
            Explore
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#282C3F] mt-2">
            Our Menu
          </h1>
          <p className="text-[#93959F] mt-3 text-sm max-w-md mx-auto">
            Authentic Kerala flavors, lovingly crafted for every palate and
            pocket
          </p>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-[#E9E9EB] shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            data-ocid="menu.tab"
          >
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat.key
                    ? "bg-[#FC8019] text-white shadow-sm"
                    : "bg-white text-[#3D4152] hover:text-[#FC8019] border border-[#E9E9EB] hover:border-[#FC8019]/50"
                }`}
                data-ocid="menu.tab"
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <section className="bg-[#F8F8F8] py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[#3D4152] text-sm">
              <span className="text-[#FC8019] font-semibold">
                {filtered.length}
              </span>{" "}
              items
              {activeCategory !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-[#282C3F] font-medium">
                    {categories.find((c) => c.key === activeCategory)?.label}
                  </span>
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, idx) => (
              <div
                key={`${item.category}-${item.name}`}
                className="bg-white border border-[#E9E9EB] rounded-xl p-4 flex items-center justify-between gap-3 hover:border-[#FC8019]/40 hover:shadow-card transition-all duration-200 group"
                data-ocid={`menu.item.${idx + 1}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl flex-shrink-0">
                    {categoryEmoji[item.category]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[#282C3F] font-semibold text-sm leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[#FC8019] font-bold text-base mt-0.5">
                      {item.price}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/919847254030?text=Hi%20HNR%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-[#FC8019] hover:bg-[#E8710A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  data-ocid={`menu.secondary_button.${idx + 1}`}
                >
                  Add
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="whatsapp-band py-12 border-t border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#282C3F] mb-3">
            Ready to Order? Message Us!
          </h2>
          <p className="text-[#3D4152] text-sm mb-6">
            Get your favorites delivered or pick up at HNR Hotel Alathur
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fa855] text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200"
            data-ocid="menu.primary_button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
