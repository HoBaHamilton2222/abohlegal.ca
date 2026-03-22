export interface Service {
  name: string;
  slug: string;
  shortDesc: string;
}

export const services: Service[] = [
  {
    name: 'Family Law',
    slug: 'family-law',
    shortDesc: 'Divorce, custody, support, protection orders',
  },
  {
    name: 'Wills & Estates',
    slug: 'wills-estates',
    shortDesc: 'Wills, powers of attorney, personal directives',
  },
  {
    name: 'Estate Litigation',
    slug: 'estate-litigation',
    shortDesc: 'Will challenges, guardianship, executor disputes',
  },
  {
    name: 'Employment Law',
    slug: 'employment-law',
    shortDesc: 'Contracts, terminations, workplace disputes',
  },
  {
    name: 'Business & Commercial',
    slug: 'business-commercial',
    shortDesc: 'Incorporations, contracts, policy reviews',
  },
  {
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    shortDesc: 'Contract disputes, debt claims, negligence',
  },
  {
    name: 'Personal Injury',
    slug: 'personal-injury',
    shortDesc: 'Motor vehicle collisions, injury claims',
  },
  {
    name: 'Immigration',
    slug: 'immigration',
    shortDesc: 'PR, sponsorship, work permits, citizenship',
  },
];
