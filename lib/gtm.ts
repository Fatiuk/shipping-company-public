declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export type GTMEvent = {
  event: string;
  form_name?: string;
  form_id?: string;
  step?: string;
  error_message?: string;
  page_title?: string;
  page_location?: string;
  value?: number;
  currency?: string;
  campaign_id?: string;
  [key: string]: unknown;
};

export const TRACKING_IDS = {
  GTM: 'GT-WRHZV6TP',
  GA4: 'G-L0LDPJFZQK', 
  GOOGLE_ADS: 'AW-17178712466',
  GTM_SECONDARY: 'GT-PJ7M7NFW'
} as const;

export const pushToDataLayer = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

export const sendGtagEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      send_to: TRACKING_IDS.GA4,
      ...parameters
    });
  }
};

export const sendConversionEvent = (conversionLabel: string, value?: number, currency = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${TRACKING_IDS.GOOGLE_ADS}/${conversionLabel}`,
      value: value,
      currency: currency
    });
  }
};

export const trackFormEvent = {
  view: (formName: string, formId: string) => {
    pushToDataLayer({
      event: 'form_view',
      form_name: formName,
      form_id: formId
    });
    
    sendGtagEvent('form_view', {
      form_name: formName,
      form_id: formId
    });
  },

  start: (formName: string, formId: string) => {
    pushToDataLayer({
      event: 'form_start',
      form_name: formName,
      form_id: formId
    });
    
    sendGtagEvent('form_start', {
      form_name: formName,
      form_id: formId
    });
  },

  submit: (formName: string, formId: string, step: 'attempt' | 'success' | 'error', errorMessage?: string) => {
    const eventData = {
      event: 'form_submit',
      form_name: formName,
      form_id: formId,
      step,
      ...(errorMessage && { error_message: errorMessage })
    };
    
    pushToDataLayer(eventData);
    
    sendGtagEvent('form_submit', {
      form_name: formName,
      form_id: formId,
      step,
      ...(errorMessage && { error_message: errorMessage })
    });
    
    if (step === 'success' && formName === 'quote_form') {
      sendConversionEvent('QUOTE_FORM_CONVERSION', 1);
    }
  },

  fieldInteraction: (formName: string, fieldName: string) => {
    pushToDataLayer({
      event: 'form_field_interaction',
      form_name: formName,
      field_name: fieldName
    });
    
    sendGtagEvent('form_field_interaction', {
      form_name: formName,
      field_name: fieldName
    });
  }
};

export const trackPageEvent = {
  view: (pageTitle: string, pageLocation: string) => {
    pushToDataLayer({
      event: 'page_view',
      page_title: pageTitle,
      page_location: pageLocation
    });
    
    sendGtagEvent('page_view', {
      page_title: pageTitle,
      page_location: pageLocation
    });
  }
};

export const trackClickEvent = {
  button: (buttonName: string, section?: string, value?: number) => {
    const eventData = {
      event: 'button_click',
      button_name: buttonName,
      ...(section && { section }),
      ...(value && { value })
    };
    
    pushToDataLayer(eventData);
    sendGtagEvent('click', eventData);
  },
  
  link: (linkText: string, linkUrl: string, section?: string) => {
    const eventData = {
      event: 'link_click',
      link_text: linkText,
      link_url: linkUrl,
      ...(section && { section })
    };
    
    pushToDataLayer(eventData);
    sendGtagEvent('click', eventData);
  },
  
  phone: (phoneNumber: string, section?: string) => {
    const eventData = {
      event: 'phone_click',
      phone_number: phoneNumber,
      ...(section && { section })
    };
    
    pushToDataLayer(eventData);
    sendGtagEvent('click', eventData);
    
    sendConversionEvent('PHONE_CLICK_CONVERSION');
  }
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  const eventData = {
    event: eventName,
    ...parameters
  };
  
  pushToDataLayer(eventData);
  sendGtagEvent(eventName, parameters || {});
};
