import { Link } from "@tanstack/react-router";
import { ChevronRight, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919847254030?text=Hi%20HNR%2C%20I%20would%20like%20to%20place%20an%20order";

const featuredDishes = [
  {
    id: 1,
    name: "Chicken Biriyani",
    description:
      "Aromatic basmati rice cooked with tender chicken in traditional Kerala spices",
    price: "₹140",
    image: "/assets/generated/dish-chicken-biryani.dim_400x300.jpg",
  },
  {
    id: 2,
    name: "Beef Roast",
    description:
      "Slow-cooked beef in rich Kerala masala, perfectly caramelized",
    price: "₹140",
    image: "/assets/generated/dish-beef-roast.dim_400x300.jpg",
  },
  {
    id: 3,
    name: "Poratta",
    description:
      "Flaky, layered flatbread made with maida, best paired with curries",
    price: "₹15",
    image: "/assets/generated/dish-poratta.dim_400x300.jpg",
  },
  {
    id: 4,
    name: "Kadai Chicken",
    description:
      "Spicy wok-tossed chicken with peppers and onions in signature masala",
    price: "₹170",
    image: "/assets/generated/dish-kadai-chicken.dim_400x300.jpg",
  },
];

const reviews = [
  {
    id: 1,
    name: "Ahmed K.",
    initials: "AK",
    rating: 5,
    text: "Best biryani in Alathur! The HNR Chicken Biryani is absolutely amazing. The rice is perfectly cooked with the right amount of spices.",
    color: "bg-[#FC8019]",
  },
  {
    id: 2,
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    text: "Authentic Kerala taste. The Poratta and beef curry combo is unbeatable! Every visit feels like home-cooked food.",
    color: "bg-orange-400",
  },
  {
    id: 3,
    name: "Mohammed R.",
    initials: "MR",
    rating: 5,
    text: "Affordable, delicious, and quick service. My go-to restaurant in Alathur. The Kizhi Poratta is a must-try!",
    color: "bg-[#E8710A]",
  },
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#FC8019]/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FC8019]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#FC8019]/10 border border-[#FC8019]/20 text-[#FC8019] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
                <span>🔥</span> HNR Hotel Alathur
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#282C3F]">
                Enjoy the <span className="gradient-text">Traditional</span>
                <br />
                <span className="text-[#282C3F]">Biriyani</span>
              </h1>

              <p className="text-[#3D4152] text-base md:text-lg leading-relaxed max-w-lg">
                Experience the rich culinary heritage of Kerala with our
                authentic biriyani, crispy poratta, and aromatic curries — made
                with love and traditional recipes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-[#FC8019] hover:bg-[#E8710A] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-orange-lg text-sm"
                  data-ocid="home.primary_button"
                >
                  View Full Menu
                  <ChevronRight size={16} />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019]/8 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
                  data-ocid="home.secondary_button"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Right column - hero image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FC8019]/15 to-transparent blur-2xl" />
                <img
                  src="/assets/generated/hero-biryani.dim_1200x700.jpg"
                  alt="HNR Signature Biriyani"
                  className="relative w-full rounded-2xl object-cover aspect-[4/3] border border-[#FC8019]/20 shadow-xl animate-float"
                />
                {/* Price badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#FC8019] text-white px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs text-orange-100">Starting from</p>
                  <p className="text-xl font-bold">₹90</p>
                </div>
                {/* Stars badge */}
                <div className="absolute -top-4 -right-4 bg-white border border-[#E9E9EB] px-3 py-2 rounded-xl shadow-card flex items-center gap-1">
                  <Star size={14} fill="#FC8019" className="text-[#FC8019]" />
                  <span className="text-[#282C3F] font-semibold text-sm">
                    4.9
                  </span>
                  <span className="text-[#93959F] text-xs">(200+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-white border-y border-[#E9E9EB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🍽️",
                label: "Affordable Prices",
                desc: "Quality food for everyone",
              },
              {
                icon: "⭐",
                label: "Authentic Taste",
                desc: "100% traditional recipes",
              },
              {
                icon: "⚡",
                label: "Fast Service",
                desc: "Hot & ready in minutes",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-[#FFF8F3] border border-[#FC8019]/15 rounded-xl px-5 py-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-[#282C3F] font-semibold text-sm">
                    {item.label}
                  </p>
                  <p className="text-[#93959F] text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
              Our Specialties
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#282C3F] mt-2">
              Featured Dishes
            </h2>
            <p className="text-[#93959F] mt-3 text-sm max-w-md mx-auto">
              Hand-picked favorites that our customers love the most
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, idx) => (
              <div
                key={dish.id}
                className="bg-white border border-[#E9E9EB] rounded-2xl overflow-hidden card-hover group shadow-xs"
                data-ocid={`home.item.${idx + 1}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#282C3F] font-semibold text-base mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-[#93959F] text-xs leading-relaxed mb-3">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FC8019] font-bold text-lg">
                      {dish.price}
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019] hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                      data-ocid={`home.secondary_button.${idx + 1}`}
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-[#FC8019] border border-[#FC8019]/40 hover:bg-[#FC8019]/5 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
              data-ocid="home.secondary_button"
            >
              View Full Menu <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#282C3F] mt-2">
              What Our Customers Say
            </h2>
            <p className="text-[#93959F] mt-3 text-sm">
              Real reviews from our valued customers in Alathur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                className="bg-white border border-[#E9E9EB] rounded-2xl p-6 card-hover shadow-xs"
                data-ocid={`home.item.${idx + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[#282C3F] font-semibold text-sm">
                      {review.name}
                    </p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star
                          key={`star-${review.id}-${i}`}
                          size={12}
                          fill="#FC8019"
                          className="text-[#FC8019]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#3D4152] text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Band */}
      <section className="whatsapp-band py-16 md:py-20 border-y border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-3xl mb-4 block">📱</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#282C3F] mb-3">
            Order Your Favorites via WhatsApp
          </h2>
          <p className="text-[#3D4152] mb-8 text-sm md:text-base">
            Get fresh, hot meals delivered or ready for pickup. Message us now!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fa855] text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl"
            data-ocid="home.primary_button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              width="22"
              height="22"
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
