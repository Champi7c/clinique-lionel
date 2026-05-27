import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSettings } from '../lib/api';
import { CONTACT_INFO as FALLBACK_CONTACT, FOOTER_TAGLINE as FALLBACK_TAGLINE } from '../data/constants';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings()
      .then(setSettings)
      .catch(() => {
        // fallback sur les constantes statiques si le backend est indispo
        setSettings({
          address: FALLBACK_CONTACT.address,
          email: FALLBACK_CONTACT.email,
          phone: FALLBACK_CONTACT.phone,
          whatsapp: FALLBACK_CONTACT.whatsapp,
          hours: FALLBACK_CONTACT.hours,
          footer_tagline: FALLBACK_TAGLINE,
          about_image_url: null,
        });
      });
  }, []);

  return (
    <SiteContext.Provider value={{ settings }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteContext);
}
