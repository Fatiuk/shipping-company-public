import React, { useEffect } from 'react';
import { trackPageEvent } from '@/lib/gtm';

interface GTMProviderProps {
  children: React.ReactNode;
}

export const GTMProvider: React.FC<GTMProviderProps> = ({ children }) => {
  useEffect(() => {
    const handleRouteChange = () => {
      trackPageEvent.view(
        document.title,
        window.location.href
      );
    };

    handleRouteChange();

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export const useGTM = () => {
  return {
    trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...parameters
        });
      }
    },
    
    trackFormView: (formName: string, formId?: string) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'form_view',
          form_name: formName,
          ...(formId && { form_id: formId })
        });
      }
    },
    
    trackButtonClick: (buttonName: string, section?: string) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'button_click',
          button_name: buttonName,
          ...(section && { section })
        });
      }
    }
  };
};
