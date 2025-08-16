import React from 'react';
import { trackClickEvent } from '@/lib/gtm';

interface TrackablePhoneLinkProps {
  phoneNumber: string;
  children: React.ReactNode;
  section?: string;
  className?: string;
}

export const TrackablePhoneLink: React.FC<TrackablePhoneLinkProps> = ({
  phoneNumber,
  children,
  section = 'navigation',
  className = ''
}) => {
  const handlePhoneClick = () => {
    trackClickEvent.phone(phoneNumber, section);
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handlePhoneClick}
      className={className}
    >
      {children}
    </a>
  );
};

interface TrackableButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  buttonName: string;
  section?: string;
  value?: number;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const TrackableButton: React.FC<TrackableButtonProps> = ({
  onClick,
  children,
  buttonName,
  section,
  value,
  className = '',
  type = 'button'
}) => {
  const handleClick = () => {
    trackClickEvent.button(buttonName, section, value);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

interface TrackableLinkProps {
  href: string;
  children: React.ReactNode;
  linkText: string;
  section?: string;
  className?: string;
  target?: string;
}

export const TrackableLink: React.FC<TrackableLinkProps> = ({
  href,
  children,
  linkText,
  section,
  className = '',
  target
}) => {
  const handleLinkClick = () => {
    trackClickEvent.link(linkText, href, section);
  };

  return (
    <a
      href={href}
      onClick={handleLinkClick}
      className={className}
      target={target}
    >
      {children}
    </a>
  );
};
