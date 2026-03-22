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
  heroImage: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'family-law',
    name: 'Family Law',
    shortDesc: 'Divorce, custody, support, protection orders',
    label: 'Family Law',
    title: 'Family Law',
    metaTitle: 'Family Law Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Experienced family law lawyer in St. Paul, Alberta. Divorce, custody, child support, spousal support, protection orders, and separation agreements. Compassionate and effective representation.',
    fullDesc: 'Family matters are among the most personal and stressful legal challenges you can face. At Aboh Legal, we help families across northeastern Alberta navigate divorce, custody disputes, support issues, and protection orders with compassion, clear communication, and a commitment to practical solutions that protect what matters most: your children and your future.',
    whatWeHandle: [
      'Divorce and separation',
      'Custody and parenting arrangements',
      'Child support',
      'Spousal support',
      'Protection orders',
      'Separation agreements',
      'Property division',
      'Guardianship applications',
    ],
    approach: `<p>We understand that every family situation is unique. Our approach begins with listening, taking the time to understand your circumstances, your priorities, and your concerns. From there, we develop a strategy tailored to your goals.</p>
<p>Alberta family law is governed by the <em>Family Law Act</em>, the <em>Divorce Act</em>, and the <em>Family Property Act</em>. We guide you through these frameworks in plain language so you always know where you stand and what to expect.</p>
<p>Wherever possible, we pursue negotiated resolutions that save time, money, and emotional energy. When negotiation is not possible, we are prepared to advocate firmly for you in court. Our goal is always to help you move forward with confidence and stability.</p>`,
    relatedSlugs: ['wills-estates', 'estate-litigation', 'immigration'],
    ctaText: 'Going through a family law matter? Let us help you find a path forward.',
    heroImage: '/images/stock/family-hands.jpg',
  },
  {
    slug: 'wills-estates',
    name: 'Wills & Estates',
    shortDesc: 'Wills, powers of attorney, personal directives',
    label: 'Wills & Estates',
    title: 'Wills & Estates',
    metaTitle: 'Wills & Estates Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Wills, powers of attorney, personal directives, and estate planning in St. Paul, Alberta. Protect your family and your legacy with Aboh Legal.',
    fullDesc: 'A well-prepared estate plan gives you peace of mind and protects the people who matter most. At Aboh Legal, we help individuals and families across northeastern Alberta create wills, powers of attorney, and personal directives that reflect their wishes and comply with Alberta law.',
    whatWeHandle: [
      'Wills',
      'Enduring powers of attorney',
      'Personal directives',
      'Estate planning',
      'Beneficiary designations',
    ],
    approach: `<p>Estate planning does not have to be complicated. We take a practical, step-by-step approach, starting with a conversation about your family, your assets, and your wishes. We then prepare documents that are clear, legally sound, and tailored to your situation.</p>
<p>Alberta\'s <em>Wills and Succession Act</em> sets out specific requirements for valid wills and other estate documents. We ensure your documents meet these requirements and are structured to minimize the risk of future disputes or confusion.</p>
<p>Whether you are creating your first will or updating an existing estate plan after a major life change, we make the process straightforward and accessible.</p>`,
    relatedSlugs: ['estate-litigation', 'family-law'],
    ctaText: 'Ready to protect your family\'s future? Let\'s get your estate plan in order.',
    heroImage: '/images/stock/last-will-testament.jpg',
  },
  {
    slug: 'estate-litigation',
    name: 'Estate Litigation',
    shortDesc: 'Will challenges, guardianship, executor disputes',
    label: 'Estate Litigation',
    title: 'Estate Litigation',
    metaTitle: 'Estate Litigation Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Estate litigation lawyer in St. Paul, Alberta. Will challenges, dependant support claims, executor disputes, guardianship and trusteeship applications. Experienced and authoritative representation.',
    fullDesc: 'When disputes arise over a will, an estate, or the care of a vulnerable adult, the stakes are high and the emotions run deep. At Aboh Legal, we bring clarity and decisive action to estate litigation matters, helping clients in northeastern Alberta protect their rights and their loved ones\' interests.',
    whatWeHandle: [
      'Will challenges',
      'Dependant support claims',
      'Executor and trustee disputes',
      'Adult guardianship applications',
      'Adult trusteeship applications',
      'Estate accounting disputes',
    ],
    approach: `<p>Estate disputes require both legal precision and sensitivity. We begin every matter by thoroughly reviewing the relevant documents, including the will, trust instruments, financial records, and any correspondence, to build a clear picture of the facts and the legal issues at play.</p>
<p>Alberta\'s <em>Wills and Succession Act</em> and the <em>Adult Guardianship and Trusteeship Act</em> provide the framework for these claims. We ensure our clients understand their rights and the realistic outcomes before any steps are taken.</p>
<p>We pursue efficient resolution through negotiation and mediation where appropriate, but we do not hesitate to bring matters before the court when a fair resolution cannot be reached. Our clients can count on thorough preparation and strong advocacy.</p>`,
    relatedSlugs: ['wills-estates', 'civil-litigation', 'family-law'],
    ctaText: 'Dealing with an estate dispute? Contact us for clear, decisive guidance.',
    heroImage: '/images/stock/parliament-building.jpg',
  },
  {
    slug: 'employment-law',
    name: 'Employment Law',
    shortDesc: 'Contracts, terminations, workplace disputes',
    label: 'Employment Law',
    title: 'Employment Law',
    metaTitle: 'Employment Law Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Employment law lawyer in St. Paul, Alberta. Wrongful dismissal, severance negotiation, employment contracts, and workplace disputes. Representing both employees and employers.',
    fullDesc: 'Employment relationships are governed by a complex mix of legislation, common law, and contractual terms. Whether you are an employee who has been terminated or an employer navigating a difficult workplace situation, Aboh Legal provides balanced, knowledgeable advice to help you understand your rights and obligations.',
    whatWeHandle: [
      'Wrongful dismissal claims',
      'Employment contracts',
      'Severance negotiations',
      'Workplace disputes',
      'Termination advice',
      'Non-compete and restrictive covenant agreements',
      'Human rights complaints',
    ],
    approach: `<p>We represent both employees and employers, which gives us a well-rounded perspective on workplace legal issues. This balanced experience allows us to anticipate the other side\'s position and develop strategies that are both practical and effective.</p>
<p>Alberta employment law draws on the <em>Employment Standards Code</em>, the <em>Alberta Human Rights Act</em>, and the common law principles developed through decades of case law. We help our clients navigate these overlapping frameworks to achieve the best possible outcome.</p>
<p>For employees, that often means negotiating a fair severance package or pursuing a wrongful dismissal claim. For employers, it means proactive advice on contracts, policies, and terminations that reduce legal risk. In all cases, we aim for practical solutions that let our clients move forward.</p>`,
    relatedSlugs: ['civil-litigation', 'business-commercial'],
    ctaText: 'Facing a workplace legal issue? We can help you navigate it.',
    heroImage: '/images/stock/women-working.jpg',
  },
  {
    slug: 'business-commercial',
    name: 'Business & Commercial',
    shortDesc: 'Incorporations, contracts, policy reviews',
    label: 'Business & Commercial',
    title: 'Business & Commercial Law',
    metaTitle: 'Business & Commercial Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Business and commercial lawyer in St. Paul, Alberta. Incorporations, shareholder agreements, contracts, commercial leases, and business disputes. Practical legal solutions for Alberta businesses.',
    fullDesc: 'Running a business involves legal decisions at every stage, from formation and contracts to growth and disputes. At Aboh Legal, we provide practical, straightforward legal advice to businesses across northeastern Alberta, helping you build a solid foundation and manage risk effectively.',
    whatWeHandle: [
      'Incorporations',
      'Shareholder agreements',
      'Contractor agreements',
      'Policy reviews',
      'Contract drafting and review',
      'Commercial leases',
      'Business disputes',
    ],
    approach: `<p>We take a practical, business-minded approach to commercial law. We know that legal advice is only useful if it makes sense in the real-world context of your business. That means we focus on clear, enforceable agreements and proactive strategies that protect your interests without unnecessary complexity.</p>
<p>Whether you are incorporating a new company under the <em>Alberta Business Corporations Act</em>, drafting a shareholder agreement, or reviewing a commercial lease, we ensure every document is tailored to your specific needs and compliant with Alberta law.</p>
<p>When disputes arise, we work to resolve them efficiently through negotiation, mediation, or litigation if necessary. Our goal is always to help you protect your business and get back to what you do best.</p>`,
    relatedSlugs: ['civil-litigation', 'employment-law'],
    ctaText: 'Need legal support for your business? Let\'s talk about how we can help.',
    heroImage: '/images/stock/city-skyscrapers.jpg',
  },
  {
    slug: 'civil-litigation',
    name: 'Civil Litigation',
    shortDesc: 'Contract disputes, debt claims, negligence',
    label: 'Civil Litigation',
    title: 'Civil Litigation',
    metaTitle: 'Civil Litigation Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Civil litigation lawyer in St. Paul, Alberta. Contract disputes, debt claims, negligence, injunctions, and enforcement of judgments. Direct, effective advocacy in Alberta courts.',
    fullDesc: 'When a legal dispute cannot be resolved through discussion alone, you need a litigator who is prepared, strategic, and direct. At Aboh Legal, we handle a wide range of civil disputes for individuals and businesses in northeastern Alberta, from contract claims to negligence actions and everything in between.',
    whatWeHandle: [
      'Contract disputes',
      'Debt claims',
      'Negligence claims',
      'Breach of fiduciary duty',
      'Injunctions',
      'Enforcement of judgments',
    ],
    approach: `<p>Effective litigation starts with thorough preparation. We carefully assess the facts, the law, and the practical realities of each case before recommending a course of action. You will know the strengths and risks of your case from the outset.</p>
<p>Alberta\'s court system includes Provincial Court for claims up to $100,000 and the Court of King\'s Bench for larger or more complex matters. We are experienced in both forums and will advise on the most appropriate and cost-effective path for your dispute.</p>
<p>We pursue settlement where it makes sense and litigate aggressively when it does not. Every step we take is focused on achieving the best practical result for you, efficiently and without unnecessary delay.</p>`,
    relatedSlugs: ['employment-law', 'personal-injury', 'business-commercial'],
    ctaText: 'Have a legal dispute? Contact us for a straightforward assessment of your options.',
    heroImage: '/images/stock/supreme-court.jpg',
  },
  {
    slug: 'personal-injury',
    name: 'Personal Injury',
    shortDesc: 'Motor vehicle collisions, injury claims',
    label: 'Personal Injury',
    title: 'Personal Injury',
    metaTitle: 'Personal Injury Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Personal injury lawyer in St. Paul, Alberta. Motor vehicle accidents, slip and fall, insurance claims, and catastrophic injury. Compassionate advocacy to get you the compensation you deserve.',
    fullDesc: 'An unexpected injury can change your life in an instant, affecting your health, your ability to work, and your family\'s well-being. At Aboh Legal, we help injured Albertans pursue the compensation they need to recover and move forward, handling the legal process so you can focus on healing.',
    whatWeHandle: [
      'Motor vehicle collisions',
      'Slip and fall injuries',
      'Occupiers\' liability claims',
      'Insurance claims',
      'Minor injury cap disputes',
      'Catastrophic injury claims',
    ],
    approach: `<p>We understand that dealing with an injury is overwhelming. Our first priority is to make sure you are getting the medical care and support you need. From there, we handle the legal process: gathering evidence, dealing with insurance companies, and building a strong case for full and fair compensation.</p>
<p>Alberta personal injury law is shaped by the <em>Insurance Act</em>, the <em>Minor Injury Regulation</em>, and the <em>Occupiers\' Liability Act</em>, among other statutes. We know these frameworks inside and out, and we use that knowledge to pursue every dollar of compensation you are entitled to.</p>
<p>Many of our personal injury matters are handled on a contingency fee basis, meaning you do not pay legal fees unless we recover compensation for you. We discuss all fee arrangements openly at your first consultation.</p>`,
    relatedSlugs: ['civil-litigation', 'employment-law'],
    ctaText: 'Injured and unsure what to do next? We are here to help.',
    heroImage: '/images/stock/car-accident.jpg',
  },
  {
    slug: 'immigration',
    name: 'Immigration',
    shortDesc: 'PR, sponsorship, work permits, citizenship',
    label: 'Immigration',
    title: 'Immigration Law',
    metaTitle: 'Immigration Lawyer St. Paul Alberta | ABOH LEGAL',
    metaDescription: 'Immigration lawyer in St. Paul, Alberta. Permanent residence, family sponsorship, work permits, LMIA, study permits, citizenship, and refugee claims. Helping newcomers build their future in Canada.',
    fullDesc: 'Canada\'s immigration system is complex and constantly evolving. Whether you are seeking permanent residence, sponsoring a family member, or navigating a work or study permit, Aboh Legal provides clear guidance and careful attention to detail to help you achieve your immigration goals.',
    whatWeHandle: [
      'Permanent residence applications',
      'Family sponsorship',
      'Study permits',
      'Work permits',
      'LMIA applications',
      'Citizenship applications',
      'Temporary resident visas',
      'Refugee claims',
    ],
    approach: `<p>Immigration matters are deeply personal. They affect your ability to live, work, and build a future in Canada with the people you love. We treat every file with the care and attention it deserves, because we understand what is at stake.</p>
<p>Canada\'s <em>Immigration and Refugee Protection Act</em> and its regulations govern the full range of immigration programs. We stay current with policy changes, processing updates, and program requirements so that your application is complete, accurate, and positioned for success.</p>
<p>From your initial consultation to the final decision, we keep you informed at every step. We explain the process in plain language, set realistic expectations about timelines, and respond promptly to your questions. Our goal is to make a complex process feel manageable.</p>`,
    relatedSlugs: ['family-law', 'employment-law'],
    ctaText: 'Looking to build your future in Canada? Let us help you navigate the path.',
    heroImage: '/images/stock/canadian-passports.jpg',
  },
];
