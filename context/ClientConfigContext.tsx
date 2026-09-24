'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClientConfig, defaultClientConfig, presetDemos } from '@/config/clientConfig';

interface ClientConfigContextType {
  config: ClientConfig;
  updateConfig: (updater: (prev: ClientConfig) => ClientConfig) => void;
  resetConfig: () => void;
  applyPreset: (presetKey: string) => void;
  activePreset: string;
}

const ClientConfigContext = createContext<ClientConfigContextType | undefined>(undefined);

export function ClientConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ClientConfig>(defaultClientConfig);
  const [activePreset, setActivePreset] = useState<string>('wireframe');

  // Synchronize CSS custom properties with current brand configuration
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', config.brand.primaryColor);
      root.style.setProperty('--secondary-color', config.brand.secondaryColor);
      root.style.setProperty('--accent-color', config.brand.accentColor);
      root.style.setProperty('--background-color', config.brand.backgroundColor);
      root.style.setProperty('--text-color', config.brand.textColor);
      root.style.setProperty('--card-background', config.brand.cardBackground);
    }
  }, [config.brand]);

  const updateConfig = (updater: (prev: ClientConfig) => ClientConfig) => {
    setConfig(prev => updater(prev));
    setActivePreset('custom');
  };

  const resetConfig = () => {
    setConfig(defaultClientConfig);
    setActivePreset('wireframe');
  };

  const applyPreset = (presetKey: string) => {
    const preset = presetDemos[presetKey];
    if (preset) {
      setConfig({
        ...defaultClientConfig,
        ...preset,
        business: {
          ...defaultClientConfig.business,
          ...(preset.business || {})
        },
        brand: {
          ...defaultClientConfig.brand,
          ...(preset.brand || {})
        }
      });
      setActivePreset(presetKey);
    }
  };

  return (
    <ClientConfigContext.Provider value={{ config, updateConfig, resetConfig, applyPreset, activePreset }}>
      {children}
    </ClientConfigContext.Provider>
  );
}

export function useClientConfig() {
  const context = useContext(ClientConfigContext);
  if (!context) {
    return {
      config: defaultClientConfig,
      updateConfig: () => {},
      resetConfig: () => {},
      applyPreset: () => {},
      activePreset: 'wireframe',
    };
  }
  return context;
}
