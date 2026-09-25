'use client';

import React, { useState } from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { presetDemos } from '@/config/clientConfig';
import {
  Sliders,
  X,
  RefreshCw,
  Check,
  Copy,
  Sparkles,
  Building,
  Palette,
  Phone,
  FileCode,
  Layers,
  CheckCircle2
} from 'lucide-react';

export function TemplateCustomizerDrawer() {
  const { config, updateConfig, resetConfig, applyPreset, activePreset } = useClientConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'fields' | 'guide'>('presets');
  const [copied, setCopied] = useState(false);

  const interiorPresets = [
    {
      key: 'masterTemplate',
      name: 'Default: Studio Lumina',
      style: 'Modern Architectural & Balanced',
      color: '#1c1917',
      accent: '#b45309'
    },
    {
      key: 'interiorDesign',
      name: 'Warm Minimalist: Atelier Haven',
      style: 'Earthy Warmth, Travertine & Linen',
      color: '#292524',
      accent: '#d97706'
    },
    {
      key: 'japandiModern',
      name: 'Japandi & Organic: Kura & Co.',
      style: 'Wabi-Sabi, Light Oak & Indigo Slate',
      color: '#1e293b',
      accent: '#ca8a04'
    },
    {
      key: 'luxuryContemporary',
      name: 'Luxury Contemporary: Verve Studio',
      style: 'Obsidian, Polished Brass & Velvet',
      color: '#09090b',
      accent: '#eab308'
    }
  ];

  const crossIndustryPresets = [
    { key: 'dentalClinic', name: 'Apex Dental & Wellness', category: 'Healthcare / Dental Clinic', color: '#0284c7' },
    { key: 'cafeRoastery', name: 'Roast & Timber Co.', category: 'Cafe / Specialty Roastery', color: '#78350f' }
  ];

  const headlineVariations = [
    "Create a beautiful space that feels like it was made for you.",
    "Thoughtful Interiors. Beautifully Designed Around You.",
    "Turn Your Space Into a Place You Love Coming Home To.",
    "Interiors Designed Around the Way You Live.",
    "From Empty Space to a Place That Feels Like Home."
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Slide-out Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-neutral-950/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-neutral-200 animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-900 text-white">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Template Customizer</h3>
                  <p className="text-[11px] text-neutral-400">Interior Design & Multi-Client Switcher</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-neutral-200 bg-neutral-50 px-3">
              <button
                onClick={() => setActiveTab('presets')}
                className={`flex items-center gap-1.5 py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'presets'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Design Styles</span>
              </button>

              <button
                onClick={() => setActiveTab('fields')}
                className={`flex items-center gap-1.5 py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'fields'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Live Edit</span>
              </button>

              <button
                onClick={() => setActiveTab('guide')}
                className={`flex items-center gap-1.5 py-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'guide'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>How to Customize</span>
              </button>
            </div>

            {/* Tab 1: Design Style Presets */}
            {activeTab === 'presets' && (
              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 leading-relaxed">
                  <strong>Master Wireframe Test:</strong> Click any aesthetic below to see the entire site re-skin colors, typography palette, and identity without altering the underlying wireframe structure.
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                    Interior Design Aesthetics
                  </div>
                  {interiorPresets.map(p => (
                    <div
                      key={p.key}
                      onClick={() => applyPreset(p.key)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        activePreset === p.key
                          ? 'border-neutral-900 bg-neutral-50 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-xs"
                          style={{ backgroundColor: p.color, borderBottom: `3px solid ${p.accent}` }}
                        >
                          {p.name.slice(0, 1)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900">{p.name}</div>
                          <div className="text-[11px] text-neutral-500">{p.style}</div>
                        </div>
                      </div>
                      {activePreset === p.key && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2 border-t border-neutral-200">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                    Cross-Industry Reusability Test
                  </div>
                  {crossIndustryPresets.map(p => (
                    <div
                      key={p.key}
                      onClick={() => applyPreset(p.key)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        activePreset === p.key
                          ? 'border-neutral-900 bg-neutral-50 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-white text-[11px] font-bold"
                          style={{ backgroundColor: p.color }}
                        >
                          {p.name[0]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900">{p.name}</div>
                          <div className="text-[10px] text-neutral-500">{p.category}</div>
                        </div>
                      </div>
                      {activePreset === p.key && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={resetConfig}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset to Default Config</span>
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Live Fields Edit */}
            {activeTab === 'fields' && (
              <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">
                {/* 1. Hero Headline Selector (Section 5 Variations) */}
                <div className="space-y-2.5">
                  <div className="font-bold uppercase tracking-wider text-neutral-500 text-[11px] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Headline Option (Section 5)</span>
                  </div>
                  <select
                    value={config.business.heroHeadline}
                    onChange={e =>
                      updateConfig(prev => ({
                        ...prev,
                        business: { ...prev.business, heroHeadline: e.target.value }
                      }))
                    }
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs bg-white"
                  >
                    {headlineVariations.map((h, i) => (
                      <option key={i} value={h}>
                        Option {i + 1}: {h}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Business Info */}
                <div className="space-y-3 pt-3 border-t border-neutral-200">
                  <div className="font-bold uppercase tracking-wider text-neutral-500 text-[11px] flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>Business Identity</span>
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Business Name</label>
                    <input
                      type="text"
                      value={config.business.name}
                      onChange={e =>
                        updateConfig(prev => ({
                          ...prev,
                          business: { ...prev.business, name: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Business Category</label>
                    <input
                      type="text"
                      value={config.business.category}
                      onChange={e =>
                        updateConfig(prev => ({
                          ...prev,
                          business: { ...prev.business, category: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Studio City / Service Area</label>
                    <input
                      type="text"
                      value={config.trustBar.serviceArea}
                      onChange={e =>
                        updateConfig(prev => ({
                          ...prev,
                          trustBar: { ...prev.trustBar, serviceArea: e.target.value },
                          contact: {
                            ...prev.contact,
                            address: { ...prev.contact.address, city: e.target.value }
                          }
                        }))
                      }
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs"
                    />
                  </div>
                </div>

                {/* 3. Brand Colors */}
                <div className="space-y-3 pt-3 border-t border-neutral-200">
                  <div className="font-bold uppercase tracking-wider text-neutral-500 text-[11px] flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Brand Palette</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">Primary Color</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={config.brand.primaryColor}
                          onChange={e =>
                            updateConfig(prev => ({
                              ...prev,
                              brand: { ...prev.brand, primaryColor: e.target.value }
                            }))
                          }
                          className="w-8 h-8 rounded border border-neutral-300 cursor-pointer"
                        />
                        <span className="text-neutral-500 font-mono text-[11px]">
                          {config.brand.primaryColor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">Accent Color</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={config.brand.accentColor}
                          onChange={e =>
                            updateConfig(prev => ({
                              ...prev,
                              brand: { ...prev.brand, accentColor: e.target.value }
                            }))
                          }
                          className="w-8 h-8 rounded border border-neutral-300 cursor-pointer"
                        />
                        <span className="text-neutral-500 font-mono text-[11px]">
                          {config.brand.accentColor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Phone & WhatsApp */}
                <div className="space-y-3 pt-3 border-t border-neutral-200">
                  <div className="font-bold uppercase tracking-wider text-neutral-500 text-[11px] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone & WhatsApp</span>
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Phone Display</label>
                    <input
                      type="text"
                      value={config.contact.phone}
                      onChange={e =>
                        updateConfig(prev => ({
                          ...prev,
                          contact: { ...prev.contact, phone: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">WhatsApp (Digits Only)</label>
                    <input
                      type="text"
                      value={config.contact.whatsapp}
                      onChange={e =>
                        updateConfig(prev => ({
                          ...prev,
                          contact: { ...prev.contact, whatsapp: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Developer Customization Guide */}
            {activeTab === 'guide' && (
              <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
                <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl space-y-2">
                  <div className="font-bold text-amber-400">Single Configuration File:</div>
                  <code className="text-emerald-400 font-mono block text-xs">
                    /config/clientConfig.ts
                  </code>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    You do <strong>NOT</strong> have to redesign or rewrite any React component. Every piece of business information is mapped through this single master file.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="font-bold text-neutral-900">The 17 Reusable Data Keys:</h4>
                  <ul className="space-y-1.5 text-neutral-600 text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>1. <code>business.name</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>2. <code>business.category</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>3. <code>brand.primaryColor</code> & <code>accentColor</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>4. <code>business.logoImageUrl</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>5. <code>images.*</code> (Hero, About, Services, Gallery)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>6. <code>business.storyText</code> & <code>shortDescription</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>7. <code>services[]</code> (Adaptive 3, 4, 5, or 6 services)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>8. <code>contact.phone</code> & <code>contact.phoneRaw</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>9. <code>contact.whatsapp</code> (Direct click-to-chat)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>10. <code>contact.email</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>11. <code>contact.address.*</code> (Street, City, Zip)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>12. <code>contact.businessHours[]</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>13. <code>mapsAndReviews.googleMapsEmbedUrl</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>14. <code>social.instagram</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>15. <code>social.facebook</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>16. <code>social.linkedin / youtube / x</code></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>17. <code>mapsAndReviews.googleReviewsUrl</code></span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                  <span className="font-bold text-neutral-700">Copy Active Config JSON</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg font-semibold transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Config'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
