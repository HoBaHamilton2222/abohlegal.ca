export const siteConfig = {
  name: 'ABOH LEGAL',
  tagline: 'Clear advice. Steady advocacy. Alberta-wide.',
  phone: '(825) 461-0107',
  phoneHref: 'tel:+18254610107',
  email: 'info@abohlegal.ca',
  address: {
    street: '4437 53 Avenue',
    city: 'St. Paul',
    province: 'AB',
    postal: 'T0A 3A2',
    full: '4437 53 Avenue, St. Paul, AB T0A 3A2',
  },
  hours: '8:00 AM – 5:00 PM, Monday – Friday',
  formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjgjbdjy',
  cosmoLexUrl: '',
  // Microsoft "Book with me" page. Shows live availability from Prince's Outlook
  // calendar; guests book without a Microsoft account. Reachable as /book.
  bookingUrl:
    'https://outlook.office.com/bookwithme/user/ed9d3fdc3c7c4ac7a1812bdfbdcbbdc4@abohlegal.ca/meetingtype/NrgsBbW8T0qzr5rOsxrWHw2?anonymous&ismsaljsauthenabled&ep=mlink',
};
