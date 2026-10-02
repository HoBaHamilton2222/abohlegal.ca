export const siteConfig = {
  name: 'ABOH LEGAL',
  tagline: 'Clear advice. Steady advocacy. Alberta-wide.',
  phone: '+1 (825) 461-0107',
  phoneHref: 'tel:+18254610107',
  email: 'info@abohlegal.ca',
  address: {
    street: '4937 48 Avenue',
    city: 'St. Paul',
    province: 'AB',
    postal: 'T0A 3A4',
    full: '4937 48 Avenue, St. Paul, AB T0A 3A4',
  },
  hours: '8:00 AM to 5:00 PM Mountain Time, Monday to Friday',
  formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjgjbdjy',
  intakeFormUrl: '',
  // Calendly "Initial Consultation" page. Checks Prince's Outlook calendar and asks
  // for the other party's name for the conflict check. Reachable as /book.
  bookingUrl:
    'https://calendly.com/prince-abohlegal/initial-consultation',
};
