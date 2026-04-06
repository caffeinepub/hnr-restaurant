import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const MENU_HIGHLIGHTS = [
  {
    category: "🍛 Rice & Biryani",
    items: "Chicken Biryani ₹140, Beef Biryani ₹150, Veg Biryani ₹100",
  },
  {
    category: "🥩 Non-Veg Curries",
    items: "Chicken Curry ₹100, Beef Roast ₹140, Fish Curry ₹120",
  },
  {
    category: "🫓 Kerala Breads",
    items: "Porotta ₹15, Chappathi ₹12, Parippuvada ₹10",
  },
  {
    category: "🍳 Tiffin & Breakfast",
    items: "Dosa ₹45, Idli ₹35, Puttu & Kadala ₹50",
  },
  { category: "🥗 Veg Dishes", items: "Veg Curry ₹70, Sambar ₹40, Avial ₹60" },
  { category: "🥤 Drinks", items: "Chai ₹20, Black Coffee ₹25, Juice ₹40" },
];

type OrderType = "Pickup" | "Delivery";

interface FormData {
  name: string;
  phone: string;
  address: string;
  orderType: OrderType;
  items: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  address: "",
  orderType: "Delivery",
  items: "",
  notes: "",
};

export default function Order() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number";
    if (form.orderType === "Delivery" && !form.address.trim())
      newErrors.address = "Delivery address is required";
    if (!form.items.trim())
      newErrors.items = "Please enter the items you want to order";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const addressLine =
      form.orderType === "Delivery"
        ? `📍 Address: ${form.address}`
        : "📍 Address: Pickup at HNR Hotel, Alathur";

    const message = [
      "🍽️ New Order from HNR Website",
      "",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      addressLine,
      `🚗 Order Type: ${form.orderType}`,
      "",
      "🛒 Items:",
      form.items,
      "",
      `📝 Notes: ${form.notes.trim() || "None"}`,
    ].join("\n");

    setSubmitted(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/919847254030?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }, 600);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-[#E9E9EB] focus:border-[#FC8019]"
    } text-[#282C3F] placeholder-[#93959F] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:ring-1 ${
      errors[field] ? "focus:ring-red-300" : "focus:ring-[#FC8019]/30"
    }`;

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-[#FFF8F3] border-b border-[#FC8019]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FC8019]/10 border border-[#FC8019]/20 rounded-full px-4 py-1.5 mb-4">
            <ShoppingBag size={14} className="text-[#FC8019]" />
            <span className="text-[#FC8019] text-xs font-semibold tracking-widest uppercase">
              Place Your Order
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#282C3F] mb-3">
            Order <span className="gradient-text">Online</span>
          </h1>
          <p className="text-[#93959F] text-base md:text-lg max-w-xl mx-auto">
            Fill in your details and we&apos;ll send your order directly to our
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="bg-[#F8F8F8] py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#E9E9EB] rounded-2xl p-6 md:p-10 shadow-card">
            {/* Instruction Banner */}
            <div className="flex items-start gap-3 bg-[#FFF8F3] border border-[#FC8019]/20 rounded-xl px-4 py-3.5 mb-8">
              <MessageCircle
                size={18}
                className="text-[#FC8019] flex-shrink-0 mt-0.5"
              />
              <p className="text-[#3D4152] text-sm leading-relaxed">
                Fill in your details below and click{" "}
                <span className="text-[#282C3F] font-medium">
                  Send Order via WhatsApp
                </span>
                . We&apos;ll receive your order instantly and confirm it with
                you.
              </p>
            </div>

            {submitted ? (
              <div
                className="flex flex-col items-center gap-4 py-8 text-center"
                data-ocid="order.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-[#282C3F]">
                  Order Sent!
                </h3>
                <p className="text-[#93959F] text-sm max-w-xs">
                  Redirecting you to WhatsApp to complete your order...
                </p>
                <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Redirecting to WhatsApp...
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="mt-2 text-[#93959F] hover:text-[#FC8019] text-sm transition-colors underline"
                >
                  Place another order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate data-ocid="order.modal">
                <div className="grid gap-6">
                  {/* Order Type Toggle */}
                  <fieldset data-ocid="order.select">
                    <legend className="block text-[#282C3F] text-sm font-medium mb-3">
                      Order Type <span className="text-[#FC8019]">*</span>
                    </legend>
                    <div className="grid grid-cols-2 gap-3">
                      {(["Pickup", "Delivery"] as OrderType[]).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleChange("orderType", type)}
                          aria-pressed={form.orderType === type}
                          className={`py-3 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                            form.orderType === type
                              ? "bg-[#FC8019] text-white border-[#FC8019] shadow-sm"
                              : "bg-white text-[#3D4152] border-[#E9E9EB] hover:border-[#FC8019]/50 hover:text-[#FC8019]"
                          }`}
                          data-ocid="order.toggle"
                        >
                          {type === "Pickup" ? "🏠 Pickup" : "🚗 Delivery"}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Customer Name */}
                  <div>
                    <label
                      htmlFor="order-name"
                      className="block text-[#282C3F] text-sm font-medium mb-1.5"
                    >
                      Customer Name <span className="text-[#FC8019]">*</span>
                    </label>
                    <input
                      id="order-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className={inputClass("name")}
                      data-ocid="order.input"
                    />
                    {errors.name && (
                      <p
                        className="text-red-500 text-xs mt-1.5"
                        data-ocid="order.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="order-phone"
                      className="block text-[#282C3F] text-sm font-medium mb-1.5"
                    >
                      Phone Number <span className="text-[#FC8019]">*</span>
                    </label>
                    <input
                      id="order-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputClass("phone")}
                      data-ocid="order.input"
                    />
                    {errors.phone && (
                      <p
                        className="text-red-500 text-xs mt-1.5"
                        data-ocid="order.error_state"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label
                      htmlFor="order-address"
                      className="block text-[#282C3F] text-sm font-medium mb-1.5"
                    >
                      {form.orderType === "Delivery" ? (
                        <>
                          Delivery Address{" "}
                          <span className="text-[#FC8019]">*</span>
                        </>
                      ) : (
                        <span className="text-[#93959F]">
                          Pickup Address{" "}
                          <span className="text-xs font-normal">
                            (optional — we know where we are 😄)
                          </span>
                        </span>
                      )}
                    </label>
                    <input
                      id="order-address"
                      type="text"
                      value={form.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder={
                        form.orderType === "Delivery"
                          ? "House no., Street, Landmark, Area"
                          : "Optional — HNR Hotel, Alathur"
                      }
                      className={inputClass("address")}
                      data-ocid="order.input"
                    />
                    {errors.address && (
                      <p
                        className="text-red-500 text-xs mt-1.5"
                        data-ocid="order.error_state"
                      >
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* Items to Order */}
                  <div>
                    <label
                      htmlFor="order-items"
                      className="block text-[#282C3F] text-sm font-medium mb-1.5"
                    >
                      Items to Order <span className="text-[#FC8019]">*</span>
                    </label>
                    <textarea
                      id="order-items"
                      value={form.items}
                      onChange={(e) => handleChange("items", e.target.value)}
                      placeholder="e.g. 2x Chicken Biryani ₹140, 1x Beef Roast ₹140, 3x Porotta ₹15..."
                      rows={5}
                      className={`${inputClass("items")} resize-none`}
                      data-ocid="order.textarea"
                    />
                    {errors.items && (
                      <p
                        className="text-red-500 text-xs mt-1.5"
                        data-ocid="order.error_state"
                      >
                        {errors.items}
                      </p>
                    )}
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label
                      htmlFor="order-notes"
                      className="block text-[#282C3F] text-sm font-medium mb-1.5"
                    >
                      Special Notes{" "}
                      <span className="text-[#93959F] text-xs font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="order-notes"
                      value={form.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      placeholder="Spice level, allergies, preferred time, etc."
                      rows={3}
                      className={`${inputClass("notes")} resize-none`}
                      data-ocid="order.textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#FC8019] hover:bg-[#E8710A] text-white font-bold py-4 rounded-lg text-base transition-all duration-200 hover:shadow-orange flex items-center justify-center gap-2.5"
                    data-ocid="order.submit_button"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Order via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Menu Browse Section */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#93959F] text-sm mb-2">Need inspiration?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#282C3F] mb-3">
              Not sure what to order?
            </h2>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-[#FC8019] hover:text-[#E8710A] font-medium text-sm transition-colors group"
              data-ocid="order.link"
            >
              Browse our full menu
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MENU_HIGHLIGHTS.map((cat) => (
              <div
                key={cat.category}
                className="bg-[#F8F8F8] border border-[#E9E9EB] rounded-xl p-4 hover:border-[#FC8019]/30 hover:shadow-card transition-all"
              >
                <h3 className="text-[#282C3F] font-semibold text-sm mb-2">
                  {cat.category}
                </h3>
                <p className="text-[#93959F] text-xs leading-relaxed">
                  {cat.items}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-transparent border border-[#FC8019]/40 hover:border-[#FC8019] text-[#FC8019] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:bg-[#FC8019]/5"
              data-ocid="order.secondary_button"
            >
              View Full Menu
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
