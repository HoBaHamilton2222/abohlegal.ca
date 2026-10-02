import type { ImageMetadata } from 'astro';
import familyHands from '../assets/stock/family-hands.jpg';
import lastWillTestament from '../assets/stock/last-will-testament.jpg';
import parliamentBuilding from '../assets/stock/parliament-building.jpg';
import womenWorking from '../assets/stock/women-working.jpg';
import citySkyscrapers from '../assets/stock/city-skyscrapers.jpg';
import supremeCourt from '../assets/stock/supreme-court.jpg';
import canadianPassportsImg from '../assets/stock/canadian-passports.jpg';

export interface ServiceDetail {
  slug: string;
  name: string;
  shortDesc: string;
  label: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  fullDesc: string;
  whatWeHandle: string[];
  approach: string;
  relatedSlugs: string[];
  ctaText: string;
  heroImage: ImageMetadata;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'family-law',
    name: 'Family Law',
    shortDesc: 'Divorce, custody, support, protection orders',
    label: 'Family Law',
    title: 'Family Law',
    metaTitle: 'Family Law Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Family lawyer in St. Paul, Alberta. Divorce, parenting, child and spousal support, property division, and protection orders.',
    fullDesc: 'Separation and family disputes are hard on everyone, and hardest on children. We help with divorce, parenting, support, property, protection orders, and child protection. If you are in danger, call 911.',
    whatWeHandle: [
      'Divorce and separation',
      'Parenting arrangements (custody)',
      'Child support',
      'Spousal support',
      'Protection orders',
      'Separation agreements',
      'Property division',
      'Guardianship of children',
      'Child protection (when child welfare workers are involved)',
    ],
    approach: `<p>We listen first. Then we explain your options and agree on a plan with you.</p>
<p>We explain the law that applies to you in plain language, usually the <em>Divorce Act</em> and Alberta's <em>Family Law Act</em> and <em>Family Property Act</em>.</p>
<p>Settling usually costs less and takes less time than a court fight. When a fair settlement is not possible, we take the case to court.</p>
<p>We accept Legal Aid Alberta certificates for family cases, including protection order hearings. To apply for Legal Aid, contact <a href="https://www.legalaid.ab.ca" class="text-gold underline hover:no-underline" target="_blank" rel="noopener noreferrer">Legal Aid Alberta</a>.</p>`,
    relatedSlugs: ['wills-estates', 'estate-litigation', 'immigration'],
    ctaText: 'Going through a separation or a family dispute? Talk to us.',
    heroImage: familyHands,
  },
  {
    slug: 'wills-estates',
    name: 'Wills & Estates',
    shortDesc: 'Wills, powers of attorney, personal directives',
    label: 'Wills & Estates',
    title: 'Wills & Estates',
    metaTitle: 'Wills & Estates Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Wills, powers of attorney, personal directives, and estate planning in St. Paul, Alberta.',
    fullDesc: 'We prepare wills, powers of attorney, and personal directives that meet Alberta law.',
    whatWeHandle: [
      'Wills',
      'Enduring powers of attorney',
      'Personal directives',
      'Estate planning',
      'Beneficiary designations (who receives your retirement savings, pension, or life insurance)',
    ],
    approach: `<p>First, we talk about your family, what you own, and what you want to happen. Then we prepare clear documents that fit your situation.</p>
<p>Alberta's <em>Wills and Succession Act</em> has strict rules for a valid will. We follow them closely, which lowers the risk of a dispute later.</p>
<p>We can prepare your first will or update your plan after a marriage, a separation, a birth, or a death in the family.</p>`,
    relatedSlugs: ['estate-litigation', 'family-law'],
    ctaText: 'Need a will, or need to update one? Let\'s talk.',
    heroImage: lastWillTestament,
  },
  {
    slug: 'estate-litigation',
    name: 'Estate Litigation',
    shortDesc: 'Will challenges, guardianship, executor disputes',
    label: 'Estate Litigation',
    title: 'Estate Litigation',
    metaTitle: 'Estate Litigation Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Estate litigation lawyer in St. Paul, Alberta. Will challenges, dependants\' support claims, executor disputes, and adult guardianship.',
    fullDesc: 'Do you think a will is unfair, or that an executor is not doing the job? Can an adult in your family no longer manage their own affairs? We can explain your options.',
    whatWeHandle: [
      'Will challenges',
      'Dependants\' relief claims (support from an estate)',
      'Executor and trustee disputes',
      'Adult guardianship applications',
      'Adult trusteeship applications',
      'Estate accounting disputes',
    ],
    approach: `<p>First we read the will and the money records, along with any trusts, letters, or emails. They show us the facts and the legal issues.</p>
<p>Most of these claims fall under Alberta's <em>Wills and Succession Act</em> or the <em>Adult Guardianship and Trusteeship Act</em>. We explain your rights and the likely outcome before you decide on any step.</p>
<p>Time limits apply, so do not wait.</p>`,
    relatedSlugs: ['wills-estates', 'civil-litigation', 'family-law'],
    ctaText: 'Involved in an estate dispute? Contact us early.',
    heroImage: parliamentBuilding,
  },
  {
    slug: 'employment-law',
    name: 'Employment Law',
    shortDesc: 'Contracts, terminations, workplace disputes',
    label: 'Employment Law',
    title: 'Employment Law',
    metaTitle: 'Employment Law Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Employment lawyer in St. Paul, Alberta. Wrongful dismissal, severance, employment contracts, and workplace disputes.',
    fullDesc: 'We help employees and employers, most often when a job ends.',
    whatWeHandle: [
      'Wrongful dismissal claims',
      'Employment contracts',
      'Severance negotiations',
      'Workplace disputes',
      'Termination advice',
      'Non-compete agreements (promises not to compete or take clients after you leave)',
      'Human rights complaints',
    ],
    approach: `<p>For employees, we often review a severance offer, negotiate a better package, or bring a wrongful dismissal claim. For employers, we prepare clear contracts and policies and give advice before you end someone's employment.</p>
<p>The main laws are Alberta's <em>Employment Standards Code</em> and <em>Alberta Human Rights Act</em>, along with the common law (rules from past court decisions) on reasonable notice.</p>
<p>If you have been offered a severance package, get advice before you sign a release (a document saying you will not sue).</p>`,
    relatedSlugs: ['civil-litigation', 'business-commercial'],
    ctaText: 'Lost your job, or facing a problem at work? Talk to us.',
    heroImage: womenWorking,
  },
  {
    slug: 'business-commercial',
    name: 'Business & Commercial',
    shortDesc: 'Incorporations, contracts, policy reviews',
    label: 'Business & Commercial',
    title: 'Business & Commercial Law',
    metaTitle: 'Business & Commercial Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Business lawyer in St. Paul, Alberta. Incorporations, shareholder agreements, contracts, commercial leases, and business disputes.',
    fullDesc: 'We give businesses in northeastern Alberta practical legal advice when they set up, sign contracts, lease space, or face a dispute.',
    whatWeHandle: [
      'Incorporations',
      'Shareholder agreements',
      'Contractor agreements',
      'Workplace policy reviews',
      'Contract drafting and review',
      'Commercial leases',
      'Business disputes',
    ],
    approach: `<p>We write your documents in plain words, under Alberta law, with no needless complexity.</p>
<p>We can incorporate your company under Alberta's <em>Business Corporations Act</em>, prepare a shareholder agreement, or review a commercial lease before you sign it.</p>
<p>If a dispute comes up, we can help you resolve it.</p>`,
    relatedSlugs: ['civil-litigation', 'employment-law'],
    ctaText: 'Need legal help for your business? Let\'s talk.',
    heroImage: citySkyscrapers,
  },
  {
    slug: 'civil-litigation',
    name: 'Civil Litigation',
    shortDesc: 'Contract disputes, debt claims, negligence',
    label: 'Civil Litigation',
    title: 'Civil Litigation',
    metaTitle: 'Civil Litigation Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Civil litigation lawyer in St. Paul, Alberta. Contract disputes, debt claims, negligence, injunctions, and enforcing judgments.',
    fullDesc: 'If talking has not solved a dispute, we can help you take the next step. We handle civil disputes for people and businesses in northeastern Alberta, including contract, debt, and negligence claims.',
    whatWeHandle: [
      'Contract disputes',
      'Debt claims',
      'Negligence claims',
      'Breach of fiduciary duty (when someone trusted to act for you puts their own interests first)',
      'Injunctions (court orders to stop someone from doing something)',
      'Enforcing judgments (collecting money a court has awarded)',
    ],
    approach: `<p>Before you decide anything, we look closely at the facts, the law, and the cost of going ahead. You will hear the strengths and risks of your case at the start.</p>
<p>In Alberta, the Alberta Court of Justice hears civil claims up to $100,000. Larger or more complex cases go to the Court of King's Bench. We work in both courts and will tell you which one suits your claim.</p>
<p>We settle when it makes sense and go to trial when it does not.</p>`,
    relatedSlugs: ['employment-law', 'business-commercial', 'estate-litigation'],
    ctaText: 'Have a dispute? Ask us about your options.',
    heroImage: supremeCourt,
  },
  {
    slug: 'immigration',
    name: 'Immigration',
    shortDesc: 'PR, sponsorship, work permits, citizenship',
    label: 'Immigration',
    title: 'Immigration Law',
    metaTitle: 'Immigration Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Immigration lawyer in St. Paul, Alberta. Permanent residence, family sponsorship, work and study permits, LMIA, citizenship, and refugee claims.',
    fullDesc: 'Canada\'s immigration rules are detailed and change often. We help with permanent residence, family sponsorship, and work and study permits.',
    whatWeHandle: [
      'Permanent residence applications',
      'Family sponsorship',
      'Study permits',
      'Work permits',
      'LMIA applications (Labour Market Impact Assessments)',
      'Citizenship applications',
      'Temporary resident visas',
      'Refugee claims',
    ],
    approach: `<p>The <em>Immigration and Refugee Protection Act</em> and its regulations set the rules. Immigration, Refugees and Citizenship Canada (IRCC) changes its programs and forms often, so we check the current requirements before you apply.</p>
<p>We work with clients inside and outside Canada, by phone or video. We explain each step in plain language, keep you updated, and tell you what to expect on timing.</p>`,
    relatedSlugs: ['family-law', 'employment-law'],
    ctaText: 'Planning a move to Canada, or a change in your status? Talk to us.',
    heroImage: canadianPassportsImg,
  },
];
