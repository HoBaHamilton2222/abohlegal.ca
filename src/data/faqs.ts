export const faqsByCategory: Record<string, Array<{question: string; answer: string}>> = {
  'family-law': [
    {
      question: 'How long does a divorce take in Alberta?',
      answer: 'An uncontested divorce in Alberta typically takes three to four months from the date the application is filed. If the divorce is contested — meaning the parties disagree on custody, support, or property division — it can take a year or longer depending on the complexity of the issues and whether the matter goes to trial.',
    },
    {
      question: 'Do I need a lawyer for a custody dispute?',
      answer: 'While you are not legally required to have a lawyer, custody disputes involve important decisions about your children\'s future. A family lawyer can help you understand your rights under the Family Law Act and Divorce Act, prepare your evidence, and present your case effectively in court or mediation.',
    },
    {
      question: 'How is child support calculated in Alberta?',
      answer: 'Child support in Alberta is calculated using the Federal Child Support Guidelines, which set amounts based on the paying parent\'s gross annual income and the number of children. In shared parenting arrangements where each parent has the children at least 40% of the time, the calculation may differ. Additional expenses such as childcare, medical costs, and extracurricular activities may be shared proportionally.',
    },
    {
      question: 'What is a protection order?',
      answer: 'A protection order is a court order under Alberta\'s Protection Against Family Violence Act that restricts a family member from contacting or approaching you. Emergency protection orders can be granted within hours by a provincial court judge, even outside regular court hours. They are designed to provide immediate safety when there is a risk of family violence.',
    },
    {
      question: 'How is property divided in an Alberta divorce?',
      answer: 'Under the Family Property Act, property acquired during the marriage is generally divided equally between spouses. Property owned before the marriage or received as a gift or inheritance may be exempt, though any increase in value during the marriage may be shared. The family home receives special treatment regardless of when it was acquired.',
    },
  ],
  'wills-estates': [
    {
      question: 'Do I really need a will?',
      answer: 'Yes. If you die without a will in Alberta, the Wills and Succession Act dictates how your estate is distributed — and the result may not match your wishes. A will lets you choose your beneficiaries, name a guardian for minor children, and appoint a personal representative you trust to manage your estate.',
    },
    {
      question: 'What is an enduring power of attorney?',
      answer: 'An enduring power of attorney is a legal document that allows someone you trust to manage your financial and legal affairs if you become unable to do so yourself. Unlike a regular power of attorney, it continues — or "endures" — even after you lose mental capacity. It must be prepared while you still have the capacity to understand its effect.',
    },
    {
      question: 'What is a personal directive?',
      answer: 'A personal directive is an Alberta legal document that lets you appoint someone to make personal, non-financial decisions on your behalf if you lose capacity. This includes decisions about your health care, living arrangements, and personal matters. It is separate from a power of attorney, which covers financial decisions.',
    },
    {
      question: 'How often should I update my will?',
      answer: 'You should review your will every three to five years or whenever a major life event occurs — such as marriage, divorce, the birth of a child, a significant change in assets, or the death of a named beneficiary or executor. In Alberta, marriage does not automatically revoke a will, but divorce does revoke gifts to a former spouse.',
    },
  ],
  'estate-litigation': [
    {
      question: 'Can I challenge a will in Alberta?',
      answer: 'Yes, a will can be challenged on several grounds, including lack of testamentary capacity, undue influence, fraud, or failure to meet formal requirements under the Wills and Succession Act. Time limits apply, so it is important to seek legal advice promptly if you believe a will is invalid.',
    },
    {
      question: 'What is a dependant\'s relief claim?',
      answer: 'Under Alberta\'s Wills and Succession Act, certain family members — including spouses, adult interdependent partners, and minor children — can apply to the court for maintenance from an estate if the deceased did not make adequate provision for them. The court considers the claimant\'s needs, the size of the estate, and the deceased\'s obligations.',
    },
    {
      question: 'When would I need a guardianship or trusteeship order?',
      answer: 'If an adult family member can no longer make decisions about their personal care or finances due to illness, injury, or cognitive decline, you may need to apply for a guardianship order (for personal decisions) or a trusteeship order (for financial decisions) under the Adult Guardianship and Trusteeship Act. The court must be satisfied that less restrictive alternatives are not available.',
    },
    {
      question: 'What can I do if an executor is mismanaging the estate?',
      answer: 'If you believe an executor is not fulfilling their duties — such as failing to distribute assets, misusing estate funds, or not providing accounting — you can apply to the court to compel an accounting, remove the executor, or seek a replacement. Acting promptly is important to protect the estate.',
    },
  ],
  'employment-law': [
    {
      question: 'What is wrongful dismissal?',
      answer: 'Wrongful dismissal occurs when an employer terminates an employee without providing adequate notice or pay in lieu of notice as required by common law or the employment contract. In Alberta, the Employment Standards Code sets minimum notice periods, but common law entitlements are often significantly higher based on factors like age, length of service, and position.',
    },
    {
      question: 'Am I entitled to severance pay?',
      answer: 'Alberta\'s Employment Standards Code does not require separate severance pay, but it does require termination notice or pay in lieu. Beyond statutory minimums, you may be entitled to common law reasonable notice, which can amount to weeks or months of pay. The amount depends on your age, length of service, position, and the availability of comparable employment.',
    },
    {
      question: 'Can I be fired without cause in Alberta?',
      answer: 'Yes, in most cases an employer can terminate your employment without cause, provided they give you adequate notice or pay in lieu of notice. However, an employer cannot terminate you for discriminatory reasons, in retaliation for exercising a legal right, or in bad faith. If you believe your termination was improper, a lawyer can assess whether you received fair compensation.',
    },
    {
      question: 'Should I sign a severance offer right away?',
      answer: 'No. You should have a lawyer review any severance offer before you sign it. Once you sign a release, you typically give up your right to pursue further compensation. Many initial offers are below what the law requires, and a lawyer can help you negotiate a fair package.',
    },
  ],
  'business-commercial': [
    {
      question: 'Should I incorporate my business?',
      answer: 'Incorporation creates a separate legal entity that can limit your personal liability, offer tax planning opportunities, and make it easier to raise capital or transfer ownership. Whether incorporation is right for you depends on your business type, revenue, risk level, and long-term goals. A lawyer can help you weigh the pros and cons for your situation.',
    },
    {
      question: 'What should a shareholder agreement cover?',
      answer: 'A shareholder agreement should address share ownership and transfer restrictions, decision-making authority, dividend policy, dispute resolution, buyout provisions, non-compete clauses, and what happens if a shareholder dies, becomes disabled, or wants to exit. Without one, disputes can be costly and difficult to resolve.',
    },
    {
      question: 'Do I need a contractor agreement?',
      answer: 'Yes. A written contractor agreement clarifies the scope of work, payment terms, intellectual property ownership, confidentiality obligations, and termination provisions. It also helps establish that the relationship is genuinely one of independent contracting rather than employment, which has significant legal and tax implications.',
    },
    {
      question: 'What is the difference between a sole proprietorship and a corporation?',
      answer: 'A sole proprietorship is the simplest business structure — you and the business are legally the same, meaning you are personally liable for all debts and obligations. A corporation is a separate legal entity that provides liability protection and potential tax advantages but involves more administrative requirements and costs to set up and maintain.',
    },
  ],
  'civil-litigation': [
    {
      question: 'How long do I have to file a lawsuit in Alberta?',
      answer: 'In Alberta, the Limitations Act generally gives you two years from the date you knew or ought to have known about the claim to file a lawsuit. There is also an ultimate limitation period of ten years. Missing these deadlines can permanently bar your claim, so it is important to seek legal advice early.',
    },
    {
      question: 'What does litigation cost?',
      answer: 'Litigation costs vary widely depending on the complexity of the case, the amount in dispute, and whether it settles or goes to trial. Costs include legal fees, court filing fees, expert reports, and disbursements. We provide clear fee estimates at the outset and keep you informed throughout the process.',
    },
    {
      question: 'Can I settle my dispute out of court?',
      answer: 'Yes, and most civil disputes do settle before trial through negotiation, mediation, or other forms of alternative dispute resolution. Settlement can save significant time and legal costs. We always explore resolution options while preparing your case for trial if a fair settlement cannot be reached.',
    },
    {
      question: 'What happens if someone owes me money and refuses to pay?',
      answer: 'You can pursue a debt claim through the courts. Depending on the amount, your claim may be heard in Provincial Court (for amounts up to $100,000) or the Court of King\'s Bench. If you obtain a judgment, there are enforcement tools available including garnishment of wages or bank accounts and seizure of property.',
    },
  ],
  'personal-injury': [
    {
      question: 'How long do I have to file a personal injury claim in Alberta?',
      answer: 'Under the Limitations Act, you generally have two years from the date of the injury — or from when you first knew or ought to have known about the injury — to file a claim. For motor vehicle accidents, you must also notify your own insurer promptly. Delays can affect your right to compensation, so seek legal advice as soon as possible.',
    },
    {
      question: 'What compensation can I receive for a personal injury?',
      answer: 'You may be entitled to compensation for pain and suffering, lost income (past and future), medical and rehabilitation expenses, loss of household services, and out-of-pocket costs. The amount depends on the severity of your injuries, their impact on your daily life and work, and the available insurance coverage.',
    },
    {
      question: 'What is the minor injury cap in Alberta?',
      answer: 'Alberta\'s Minor Injury Regulation caps pain and suffering damages for sprains, strains, and whiplash-associated disorders that are classified as minor injuries. As of 2024, the cap is approximately $5,637 and is adjusted annually for inflation. If your injury is more serious than a minor injury, the cap does not apply, and your compensation may be significantly higher.',
    },
    {
      question: 'Do I have to pay upfront for a personal injury lawyer?',
      answer: 'Many personal injury claims are handled on a contingency fee basis, meaning you pay legal fees only if your case is successful. The fee is typically a percentage of the settlement or judgment. We discuss fee arrangements openly at your initial consultation so there are no surprises.',
    },
  ],
  'immigration': [
    {
      question: 'How long does it take to get permanent residence in Canada?',
      answer: 'Processing times for permanent residence vary by program. Express Entry applications are often processed within six months. Family sponsorship for spouses typically takes about twelve months. Provincial nominee programs and other streams may take longer. Processing times change frequently, and having complete and accurate documentation helps avoid delays.',
    },
    {
      question: 'Can I sponsor my spouse to come to Canada?',
      answer: 'Yes, Canadian citizens and permanent residents can sponsor their spouse or common-law partner for permanent residence. You must demonstrate that the relationship is genuine and that you meet income and other eligibility requirements. If your spouse is already in Canada, they may be eligible to apply from within the country.',
    },
    {
      question: 'What is an LMIA?',
      answer: 'A Labour Market Impact Assessment (LMIA) is a document that a Canadian employer may need before hiring a foreign worker. It confirms that there is a need for the foreign worker and that no Canadian worker or permanent resident is available to fill the position. A positive LMIA is required for most employer-specific work permits.',
    },
    {
      question: 'Can I work in Canada while my PR application is processing?',
      answer: 'It depends on your current immigration status. If you hold a valid work permit, you can continue working while your permanent residence application is processed. Some applicants may be eligible for a bridging open work permit. If you are in Canada without work authorization, you generally cannot work until you receive a permit.',
    },
    {
      question: 'What happens if my immigration application is refused?',
      answer: 'If your application is refused, you may have options depending on the type of refusal. These may include filing a new application addressing the reasons for refusal, requesting reconsideration, or applying for judicial review at the Federal Court within strict time limits. A lawyer can review the refusal letter and advise on the best course of action.',
    },
  ],
};
