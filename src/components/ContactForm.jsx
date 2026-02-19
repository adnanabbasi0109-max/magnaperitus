import { useState } from 'react';

const MATTER_TYPES = ['Litigation', 'Corporate', 'Family', 'Start-Up', 'Other'];

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  matterType: '',
  description: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-display text-2xl text-navy font-semibold mb-2">
          Thank You
        </h3>
        <p className="font-body text-charcoal">
          Your query has been received. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="flex flex-col">
        <label
          htmlFor="fullName"
          className="font-ui text-sm uppercase tracking-wider text-charcoal mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          className="bg-white border border-ivory-dark rounded px-4 py-3 font-body focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
          placeholder="Your full name"
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-ui text-sm uppercase tracking-wider text-charcoal mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-white border border-ivory-dark rounded px-4 py-3 font-body focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="font-ui text-sm uppercase tracking-wider text-charcoal mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="bg-white border border-ivory-dark rounded px-4 py-3 font-body focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
          placeholder="+91 98765 43210"
        />
      </div>

      {/* Matter Type */}
      <div className="flex flex-col">
        <label
          htmlFor="matterType"
          className="font-ui text-sm uppercase tracking-wider text-charcoal mb-1"
        >
          Matter Type
        </label>
        <select
          id="matterType"
          name="matterType"
          value={form.matterType}
          onChange={handleChange}
          required
          className="bg-white border border-ivory-dark rounded px-4 py-3 font-body focus:border-gold focus:ring-1 focus:ring-gold outline-none transition appearance-none"
        >
          <option value="" disabled>
            Select a matter type
          </option>
          {MATTER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Brief Description */}
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="font-ui text-sm uppercase tracking-wider text-charcoal mb-1"
        >
          Brief Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="bg-white border border-ivory-dark rounded px-4 py-3 font-body focus:border-gold focus:ring-1 focus:ring-gold outline-none transition resize-vertical"
          placeholder="Briefly describe your legal matter..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-gold text-navy font-ui font-semibold px-8 py-3 rounded hover:bg-gold-light transition cursor-pointer"
        >
          Send Your Query
        </button>
      </div>
    </form>
  );
}
