export const faqsByCategory: Record<string, Array<{question: string; answer: string}>> = {
  'family-law': [
    {
      question: 'How long does a divorce take in Alberta?',
      answer: 'An uncontested divorce (where you both agree on everything) usually takes three to four months after the application is filed. If you and your spouse disagree on parenting, support, or property, it can take a year or more, especially if the case goes to trial.',
    },
    {
      question: 'Do I need a lawyer for a parenting (custody) dispute?',
      answer: 'You do not have to have a lawyer, but decisions about your children matter. A <a href="/services/family-law" class="text-gold hover:underline">family lawyer</a> can explain your rights under the Family Law Act and the Divorce Act, prepare your evidence, and present your case in court or in mediation.',
    },
    {
      question: 'How is child support calculated in Alberta?',
      answer: 'Child support is set by the Child Support Guidelines. The amount depends on the paying parent\'s yearly income and the number of children. If each parent has the children at least 40% of the time, a different calculation may apply. Parents may also share costs such as child care, medical costs, and activities in proportion to their incomes.',
    },
    {
      question: 'What is a protection order?',
      answer: 'A protection order is a court order under Alberta\'s Protection Against Family Violence Act. It can stop a family member from contacting you or coming near you. A justice of the Alberta Court of Justice or a justice of the peace can grant an emergency protection order within hours, even outside court hours.',
    },
    {
      question: 'How is property divided in an Alberta divorce?',
      answer: 'The Family Property Act applies to married spouses and adult interdependent partners (unmarried partners who meet the legal test). Property gained during the relationship is generally divided equally. Property owned before the relationship began, or received as a gift or inheritance, may be exempt, but an increase in its value during the relationship may be shared.',
    },
  ],
  'wills-estates': [
    {
      question: 'Do I really need a will?',
      answer: 'Yes. If you die without a will, the Wills and Succession Act decides who gets your estate, and the result may not be what you want. A <a href="/services/wills-estates" class="text-gold hover:underline">will</a> lets you choose your beneficiaries, a guardian for young children, and the person who will manage your estate.',
    },
    {
      question: 'What is an enduring power of attorney?',
      answer: 'It is a document that lets someone you trust manage your money and legal affairs if you cannot. Unlike an ordinary power of attorney, it keeps working after you lose mental capacity. You must sign it while you still have capacity.',
    },
    {
      question: 'What is a personal directive?',
      answer: 'A personal directive lets you name someone to make personal decisions for you if you lose capacity, such as decisions about your health care and where you live. It does not cover money. That is what a power of attorney is for.',
    },
    {
      question: 'How often should I update my will?',
      answer: 'Review your will every three to five years, and after any major change: a marriage, a divorce, a birth, a big change in what you own, or the death of a beneficiary or executor. In Alberta, marriage does not cancel an existing will, but divorce cancels gifts to a former spouse.',
    },
  ],
  'estate-litigation': [
    {
      question: 'Can I challenge a will in Alberta?',
      answer: 'Sometimes. A will is not invalid just because it seems unfair. Common grounds are lack of mental capacity, undue influence (pressure on the person making the will), fraud, or failure to follow the formal rules in the Wills and Succession Act. If you depended on the person who died, you may also have a dependants\' relief claim. Our guide on <a href="/resources/challenging-a-will-in-alberta" class="text-gold hover:underline">challenging a will in Alberta</a> explains more. Time limits apply, so get advice early.',
    },
    {
      question: 'What is a dependants\' relief claim?',
      answer: 'Under the Wills and Succession Act, certain family members, including spouses, adult interdependent partners, and minor children, can ask the court for support from an estate if the deceased did not provide enough for them. The court looks at the person\'s needs, the size of the estate, and the deceased\'s obligations.',
    },
    {
      question: 'When would I need a guardianship or trusteeship order?',
      answer: 'If an adult family member can no longer make personal or financial decisions because of illness, injury, or memory loss, you may need a court order under the Adult Guardianship and Trusteeship Act. A guardian makes personal decisions. A trustee manages money and property. The court must be satisfied that less restrictive options will not work.',
    },
    {
      question: 'What can I do if an executor is mismanaging the estate?',
      answer: 'If an executor is not distributing the estate, is misusing estate money, or will not account for it, you can apply to the court. The court can order an accounting (make the executor show where the money went), or remove and replace the executor. Act promptly to protect the estate.',
    },
  ],
  'employment-law': [
    {
      question: 'What is wrongful dismissal?',
      answer: 'Wrongful dismissal is when an employer ends your job without the notice, or pay instead of notice, that you are owed under your contract or the common law (rules from past court decisions). Alberta\'s Employment Standards Code sets the minimum, but common law notice is often much higher. It depends on factors such as your age, length of service, and position. Learn more about our <a href="/services/employment-law" class="text-gold hover:underline">employment law services</a>.',
    },
    {
      question: 'Am I entitled to severance pay?',
      answer: 'The Employment Standards Code does not require separate severance pay, but it does require notice of termination or pay instead of notice. You may also be owed reasonable notice under the common law, which can mean weeks or months of pay. The amount depends on your age, length of service, position, and how easy it is to find similar work.',
    },
    {
      question: 'Can I be fired without cause in Alberta?',
      answer: 'Yes, in most cases, if your employer gives you proper notice or pay instead of notice. An employer cannot fire you for a discriminatory reason, to punish you for using a legal right, or in bad faith. A lawyer can check whether you received what you are owed.',
    },
    {
      question: 'Should I sign a severance offer right away?',
      answer: 'No. Have a lawyer review it first. Once you sign a release (a document saying you will not sue), you usually give up the right to ask for more. Many first offers are lower than what the law requires, and a lawyer can help you negotiate.',
    },
  ],
  'business-commercial': [
    {
      question: 'Should I incorporate my business?',
      answer: 'A corporation is a separate legal person. It can limit your personal liability, help with tax planning, and make it easier to raise money or sell the business. Whether it suits you depends on your type of business, income, risk, and plans. Our <a href="/services/business-commercial" class="text-gold hover:underline">business and commercial law</a> practice can help you decide.',
    },
    {
      question: 'What should a shareholder agreement cover?',
      answer: 'It should cover who owns the shares and how they can be sold, who makes decisions, dividends, how disputes are settled, buyouts, non-compete terms, and what happens if a shareholder dies, becomes disabled, or wants to leave. Without one, disputes can be slow and costly.',
    },
    {
      question: 'Do I need a contractor agreement?',
      answer: 'Yes. It sets out the work, the payment, who owns the intellectual property, confidentiality, and how the contract can end. It also helps show that the person is an independent contractor and not an employee, which matters for legal and tax purposes.',
    },
    {
      question: 'What is the difference between a sole proprietorship and a corporation?',
      answer: 'In a sole proprietorship, you and the business are the same in law, so you are personally responsible for all its debts. A corporation is a separate legal person. It can protect you from liability and may offer tax advantages, but it costs more to set up and run.',
    },
  ],
  'civil-litigation': [
    {
      question: 'How long do I have to file a lawsuit in Alberta?',
      answer: 'Under the Limitations Act, you generally have two years from when you knew, or ought to have known, about the claim. There is also an ultimate limit of 10 years. If you miss these deadlines, you may lose your claim for good, so get <a href="/services/civil-litigation" class="text-gold hover:underline">legal advice on your civil claim</a> early.',
    },
    {
      question: 'What does litigation cost?',
      answer: 'It depends on how complex the case is, the amount in dispute, and whether it settles or goes to trial. Costs include legal fees, court filing fees, expert reports, and other expenses. We give you a clear fee estimate at the start and keep you updated.',
    },
    {
      question: 'Can I settle my dispute out of court?',
      answer: 'Yes. Most civil disputes settle before trial, through negotiation, mediation, or another form of dispute resolution. Settling can save time and legal costs. We look at settlement options while we prepare your case for trial.',
    },
    {
      question: 'What happens if someone owes me money and refuses to pay?',
      answer: 'You can sue for the debt. Claims up to $100,000 can be heard in the Alberta Court of Justice. Larger claims go to the Court of King\'s Bench. If you win, you can enforce the judgment, for example by garnishing wages or bank accounts (taking money directly from them), or by seizing property.',
    },
  ],
  'immigration': [
    {
      question: 'How long does it take to get permanent residence in Canada?',
      answer: 'It depends on the program, and processing times change often. Spousal sponsorship usually takes longer than Express Entry, and provincial nominee programs and other programs may take longer still. Check the current times on the Immigration, Refugees and Citizenship Canada (IRCC) <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" class="text-gold hover:underline" target="_blank" rel="noopener noreferrer">processing times page</a>. A complete and accurate application helps avoid delays.',
    },
    {
      question: 'Can I sponsor my spouse to come to Canada?',
      answer: 'Yes. Canadian citizens and permanent residents can sponsor a spouse or common-law partner for permanent residence. You must show that the relationship is genuine, meet the other requirements, and sign an undertaking (a written promise to the government to support your spouse). In most cases there is no minimum income requirement. If your spouse is already in Canada, they may be able to apply from inside the country. Learn more about our <a href="/services/immigration" class="text-gold hover:underline">immigration services</a>.',
    },
    {
      question: 'What is an LMIA?',
      answer: 'A Labour Market Impact Assessment (LMIA) is a document a Canadian employer may need before hiring a foreign worker. It shows that the employer needs the worker and that no Canadian worker or permanent resident is available for the job. Most employer-specific work permits need a positive LMIA.',
    },
    {
      question: 'Can I work in Canada while my PR application is processing?',
      answer: 'It depends on your status. If you have a valid work permit, you can keep working under its terms. Some people can get a bridging open work permit, which lets them keep working while they wait. If you are in Canada without permission to work, you generally cannot work until you get a permit.',
    },
    {
      question: 'What happens if my immigration application is refused?',
      answer: 'It depends on the type of refusal. You may be able to file a new application that deals with the reasons for refusal, ask the officer to reconsider, or apply to the Federal Court for judicial review (asking a judge to review the decision). Strict time limits apply. A lawyer can review the refusal letter and advise you.',
    },
  ],
};
