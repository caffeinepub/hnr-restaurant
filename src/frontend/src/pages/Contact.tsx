import {
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919847254030?text=Hi%20HNR%2C%20I%20would%20like%20to%20place%20an%20order";

export default function Contact() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-[#FFF8F3] border-b border-[#FC8019]/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
            We&apos;re Here
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#282C3F] mt-2">
            Get in Touch
          </h1>
          <p className="text-[#93959F] mt-3 text-sm max-w-md mx-auto">
            Visit us at Alathur, call us, or place your order on WhatsApp
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Cards */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-[#282C3F] mb-6">
                Contact Information
              </h2>

              {[
                {
                  icon: <Phone size={20} className="text-[#FC8019]" />,
                  label: "Phone",
                  value: "+91 98472 54030",
                  href: "tel:+919847254030",
                  ocid: "contact.primary_button",
                },
                {
                  icon: <MapPin size={20} className="text-[#FC8019]" />,
                  label: "Address",
                  value: "Alathur, Kerala, India",
                  href: "https://maps.app.goo.gl/R853UqpwKS9DEHgX7",
                  ocid: "contact.secondary_button",
                },
                {
                  icon: <Clock size={20} className="text-[#FC8019]" />,
                  label: "Hours",
                  value: "Open Daily: 7:00 AM – 10:00 PM",
                  href: null,
                  ocid: null,
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="bg-white border border-[#E9E9EB] rounded-xl p-5 flex items-start gap-4 hover:border-[#FC8019]/40 hover:shadow-card transition-all shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FC8019]/10 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[#93959F] text-xs font-medium tracking-wide uppercase mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[#282C3F] font-semibold text-sm hover:text-[#FC8019] transition-colors"
                        data-ocid={info.ocid ?? undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#282C3F] font-semibold text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="bg-white border border-[#E9E9EB] rounded-xl p-5 shadow-xs">
                <p className="text-[#93959F] text-xs font-medium tracking-wide uppercase mb-4">
                  Social Media
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/hnrhotelalathur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90"
                    data-ocid="contact.secondary_button"
                  >
                    <Instagram size={16} />
                    @hnrhotelalathur
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90"
                    data-ocid="contact.secondary_button"
                  >
                    <Facebook size={16} />
                    Facebook
                  </a>
                </div>
              </div>

              {/* WhatsApp Order */}
              <div className="bg-[#F0FFF5] border border-green-200 rounded-xl p-5">
                <p className="text-[#282C3F] font-semibold mb-2">
                  Place an Order
                </p>
                <p className="text-[#3D4152] text-xs mb-4">
                  Tap below to send us a WhatsApp message and place your order
                  instantly.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fa855] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all"
                  data-ocid="contact.primary_button"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#282C3F] mb-6">
                Find Us
              </h2>
              <div className="rounded-2xl overflow-hidden border border-[#E9E9EB] shadow-card">
                <iframe
                  src="https://maps.google.com/maps?q=HNR+Hotel+Alathur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HNR Hotel Alathur Location"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/R853UqpwKS9DEHgX7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FC8019] text-sm hover:underline"
                data-ocid="contact.secondary_button"
              >
                <MapPin size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
