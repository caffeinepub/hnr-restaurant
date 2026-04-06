const values = [
  {
    icon: "🍽️",
    title: "Authentic Taste",
    description:
      "Every dish is crafted using traditional Kerala recipes passed down through generations. We never compromise on authenticity.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    description:
      "Great food should be accessible to everyone. We are committed to keeping our prices fair for our community.",
  },
  {
    icon: "⚡",
    title: "Fast Service",
    description:
      "We understand your time is valuable. Our kitchen ensures your meal is prepared fresh and served quickly.",
  },
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Banner */}
      <section className="relative bg-[#FFF8F3] border-b border-[#FC8019]/10 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#FC8019]/5 via-transparent to-[#FC8019]/3 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#FC8019]/8 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
            Since the Beginning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#282C3F] mt-3 mb-6">
            Our Story
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FC8019] to-[#E8710A] rounded-full mx-auto mb-8" />
          <p className="text-[#3D4152] text-base md:text-lg leading-relaxed">
            Born from a deep passion for Kerala&apos;s culinary heritage, HNR
            Hotel Alathur has been serving the people of Alathur with authentic,
            soulful cuisine that feels like home.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#282C3F] mt-2 mb-5">
                Serving Alathur with{" "}
                <span className="gradient-text">Love & Tradition</span>
              </h2>
              <div className="space-y-4 text-[#3D4152] text-sm leading-relaxed">
                <p>
                  HNR Hotel Alathur has been serving the people of Alathur with
                  authentic Kerala-style cuisine. Founded with a passion for
                  traditional flavors, we bring the rich culinary heritage of
                  Kerala to your plate.
                </p>
                <p>
                  From our signature biriyani to crispy poratta and aromatic
                  curries, every dish is prepared with the finest ingredients
                  and traditional recipes passed down through generations.
                </p>
                <p>
                  We believe that great food should be affordable, and we are
                  committed to serving our community with meals that are both
                  delicious and pocket-friendly. Our kitchen is a place of
                  warmth, tradition, and genuine care for every customer who
                  walks through our doors.
                </p>
              </div>
            </div>

            {/* Decorative stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  number: "50+",
                  label: "Menu Items",
                  color: "border-[#FC8019]/40",
                  bg: "bg-[#FFF8F3]",
                },
                {
                  number: "200+",
                  label: "Happy Reviews",
                  color: "border-[#FC8019]/30",
                  bg: "bg-[#FFF3E8]",
                },
                {
                  number: "7 AM",
                  label: "Opens Daily",
                  color: "border-[#FC8019]/25",
                  bg: "bg-[#FFF8F3]",
                },
                {
                  number: "100%",
                  label: "Kerala Authentic",
                  color: "border-[#FC8019]/40",
                  bg: "bg-[#FFF3E8]",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} border ${stat.color} rounded-2xl p-6 text-center shadow-xs`}
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </p>
                  <p className="text-[#93959F] text-xs font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F8F8] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#282C3F] mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-[#E9E9EB] rounded-2xl p-7 text-center card-hover shadow-xs"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-[#282C3F] font-bold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-[#93959F] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#FFF8F3] border border-[#FC8019]/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FC8019] to-[#E8710A]" />
            <span className="text-5xl mb-6 block">👨‍🍳</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#282C3F] mb-4">
              Serving Alathur with Love
            </h2>
            <p className="text-[#3D4152] text-sm md:text-base leading-relaxed">
              &ldquo;At HNR, we don&apos;t just serve food — we serve memories.
              Every plate that leaves our kitchen carries the warmth of
              Kerala&apos;s culinary tradition and our unwavering commitment to
              quality. We are grateful for every customer who has made us their
              go-to restaurant in Alathur, and we promise to keep serving you
              with the same passion and love.&rdquo;
            </p>
            <div className="mt-6 w-12 h-1 bg-[#FC8019] rounded-full mx-auto" />
            <p className="text-[#FC8019] font-semibold text-sm mt-3">
              HNR Hotel Team, Alathur
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
