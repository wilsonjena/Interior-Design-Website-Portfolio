'use client';

import React, { useState } from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  isPage?: boolean;
}

export function ContactSection({ isPage = false }: ContactSectionProps) {
  const { config } = useClientConfig();
  const c = config.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Apartment / Residence',
    projectType: 'Full Home Interior Design',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, email, and project message.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    // Simulate reliable enquiry submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className={`py-20 md:py-28 ${isPage ? 'bg-white' : 'bg-[#FAF8F5]'} border-b border-stone-200/60`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            START YOUR JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-wide text-[#1C261D] leading-tight uppercase">
            Let&apos;s Talk About Your Space
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mt-3 mb-4" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Tell us a little about your project and we&apos;ll get back to you to discuss your requirements and space planning vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info, Hours, Studio Visit (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {c.phone && (
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xs border border-stone-200/80 hover:border-[#B68D40] transition-colors group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center shrink-0 text-[#B68D40] group-hover:bg-[#1C261D] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-sans text-[10px] text-stone-400 font-bold uppercase tracking-widest">Call Us Directly</div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#1C261D] truncate tabular-nums">
                      {c.phone}
                    </div>
                  </div>
                </a>
              )}

              {c.whatsapp && (
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xs border border-stone-200/80 hover:border-emerald-600 transition-colors group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xs bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-sans text-[10px] text-stone-400 font-bold uppercase tracking-widest">WhatsApp Us</div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#1C261D] truncate">
                      {c.whatsappFormatted || c.phone}
                    </div>
                  </div>
                </a>
              )}

              {c.email && (
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xs border border-stone-200/80 hover:border-[#B68D40] transition-colors group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-stone-200/60 text-[#B68D40] flex items-center justify-center shrink-0 group-hover:bg-[#1C261D] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-sans text-[10px] text-stone-400 font-bold uppercase tracking-widest">Email Us</div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#1C261D] truncate">
                      {c.email}
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* Studio Address & Location */}
            {c.address.fullFormatted && (
              <div className="p-6 bg-white rounded-xs border border-stone-200/80 shadow-2xs space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center shrink-0 mt-0.5 text-[#B68D40]">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C261D]">Visit Our Studio</h3>
                    <p className="font-sans text-xs text-stone-500 mt-1 leading-relaxed font-light">
                      {c.address.street}
                      {c.address.suite ? `, ${c.address.suite}` : ''}
                      <br />
                      {c.address.city}, {c.address.state} {c.address.postalCode}
                    </p>
                  </div>
                </div>

                {config.mapsAndReviews.googleMapsDirectionsUrl && (
                  <div className="pt-2 border-t border-stone-100">
                    <a
                      href={config.mapsAndReviews.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-stone-600 hover:text-[#1C261D] transition-colors"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#B68D40]" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Studio Hours */}
            {c.businessHours && c.businessHours.length > 0 && (
              <div className="p-6 bg-white rounded-xs border border-stone-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center shrink-0 text-[#B68D40]">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C261D]">Consultation Hours</h3>
                    <p className="font-sans text-[11px] text-stone-400 font-light">Studio & on-site assessments</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100 font-sans text-xs">
                  {c.businessHours.map((bh, idx) => (
                    <div key={idx} className="flex justify-between py-1 text-stone-500">
                      <span className="font-medium text-stone-800">{bh.days}</span>
                      <span>{bh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs border border-stone-200/80 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-normal tracking-wide text-[#1C261D]">Enquiry Received</h3>
                <p className="font-sans text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out to {config.business.name}. A designer will review your property details and contact you to schedule an initial consultation.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        propertyType: 'Apartment / Residence',
                        projectType: 'Full Home Interior Design',
                        location: '',
                        message: ''
                      });
                    }}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-[#1C261D] underline underline-offset-4 cursor-pointer"
                  >
                    Send another project enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-stone-100 pb-4 mb-2">
                  <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#1C261D]">
                    Project Enquiry Form
                  </h3>
                  <p className="font-sans text-xs text-stone-500 mt-1 font-light">
                    Share your requirements, ideas, property details, and vision.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xs">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Downtown, Westside"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    />
                  </div>
                </div>

                {/* Property Type & Project Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    >
                      <option value="Apartment / Residence">Apartment / Residence</option>
                      <option value="Single Family Home / Villa">Single Family Home / Villa</option>
                      <option value="Townhouse / Loft">Townhouse / Loft</option>
                      <option value="Commercial Office / Workspace">Commercial Office / Workspace</option>
                      <option value="Retail / Hospitality">Retail / Hospitality</option>
                      <option value="Other / Multi-Room">Other / Multi-Room</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Service Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors"
                    >
                      <option value="Full Home Interior Design">Full Home Interior Design</option>
                      <option value="Room-by-Room Renovation">Room-by-Room Renovation</option>
                      <option value="Space Planning & 3D Visuals">Space Planning & 3D Visuals</option>
                      <option value="Furniture & Decor Curation">Furniture & Decor Curation</option>
                      <option value="Commercial Interior Design">Commercial Interior Design</option>
                      <option value="Design Consultation Only">Design Consultation Only</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Tell Us About Your Space & Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the rooms, your approximate timeline, any styles or materials you love, and what you want to achieve..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-xs focus:outline-hidden focus:border-[#B68D40] transition-colors leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={submitting}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={!submitting ? <Send className="w-3.5 h-3.5" /> : undefined}
                    iconPosition="right"
                  >
                    {submitting ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
