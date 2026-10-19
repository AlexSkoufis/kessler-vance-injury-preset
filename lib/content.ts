// Every visible string and number on the page lives here. Kessler Vance is a fictional firm:
// replace the details, results, attorneys and reviews with your own, and have the wording
// checked against your state bar's advertising rules before you publish.

export const firm = {
  name: 'Kessler Vance',
  line: 'Injury Attorneys',
  state: 'Texas',
  // 555-01xx numbers are reserved for fiction. Replace with your own.
  phone: '1-800-555-0142',
  phoneWords: '1-800-555-0142',
  email: 'help@kesslervance.example',
  timeZone: 'America/Chicago',
  spanish: 'Se habla español',
  offices: [
    { city: 'Houston', address: '1200 Fannin Street, Suite 900' },
    { city: 'Dallas', address: '2100 Ross Avenue, Suite 1450' },
    { city: 'Austin', address: '600 Congress Avenue, Suite 300' },
    { city: 'San Antonio', address: '112 East Pecan Street, Suite 700' },
  ],
  // Shown in the footer. Replace with the disclosures your state bar requires.
  disclaimer:
    'Attorney advertising. Kessler Vance is a fictional law firm and this website is a design template. Nothing on this page is legal advice, and using it does not create an attorney-client relationship. Past results do not guarantee a similar outcome. Replace this text with the responsible attorney, principal office and disclosures your state bar requires.',
  feeNote:
    '*No fee unless we win: attorney fees are a percentage of the recovery. If there is no recovery, you owe no attorney fees. Case costs may be handled differently; your fee agreement explains this in full.',
};

export const nav = [
  { href: '#cases', label: 'Cases we take' },
  { href: '#worth', label: 'Case value' },
  { href: '#results', label: 'Results' },
  { href: '#process', label: 'How it works' },
  { href: '#attorneys', label: 'Attorneys' },
];

export const hero = {
  eyebrow: 'Texas injury attorneys · Free case review',
  // One line per array entry. Wrap a word in *asterisks* to set it in the accent colour.
  title: ['Hurt in a crash?', 'We *fight.*', 'You heal.'],
  lead: 'The insurance company has lawyers. You should too. Talk to a real attorney today, and pay nothing unless we win.*',
  cta: 'Start my free review',
  // The big rolling figure. Fictional: replace with your own, and only if you can substantiate it.
  recovered: { value: 412, prefix: '$', suffix: 'M+', label: 'Recovered for injured Texans' },
  badges: ['No fee unless we win*', 'Available 24/7', 'We come to you'],
};

/** Scrolling strip under the hero. Fictional results. */
export const ticker = [
  ['$2.4M', '18-wheeler collision'],
  ['$850K', 'Rear-end crash'],
  ['$1.1M', 'Drunk driver'],
  ['$475K', 'Rideshare passenger'],
  ['$3.2M', 'Wrongful death'],
  ['$640K', 'Motorcycle crash'],
  ['$390K', 'Hit and run'],
];

export type CaseId = 'car' | 'truck' | 'motorcycle' | 'rideshare' | 'pedestrian' | 'premises' | 'work' | 'death';

export const cases: { id: CaseId; name: string; text: string }[] = [
  { id: 'car', name: 'Car accidents', text: 'Rear-end, T-bone, head-on, hit and run, and uninsured drivers.' },
  { id: 'truck', name: 'Truck & 18-wheeler', text: 'Trucking companies send investigators the same day. So do we.' },
  { id: 'motorcycle', name: 'Motorcycle crashes', text: 'Riders get blamed first. We prove what really happened.' },
  { id: 'rideshare', name: 'Uber & Lyft', text: 'Passenger, driver or hit by one: the insurance is complicated.' },
  { id: 'pedestrian', name: 'Pedestrian & bicycle', text: 'Crosswalks, parking lots and drivers who never looked.' },
  { id: 'premises', name: 'Slip & fall', text: 'Stores, apartments and businesses that ignored a hazard.' },
  { id: 'work', name: 'Work injuries', text: 'Construction, oilfield and plant injuries, including third-party claims.' },
  { id: 'death', name: 'Wrongful death', text: 'When a family loses someone because another person was careless.' },
];

/** "What the adjuster says" cards: the front is the line, the back is what it means. */
export const adjuster = [
  { says: '“We just need a quick recorded statement.”', means: 'They are looking for words to use against you later. You do not have to give one.' },
  { says: '“This is our best and final offer.”', means: 'It is almost never final. It is the number they hope you take before you talk to a lawyer.' },
  { says: '“You don’t need an attorney for this.”', means: 'They would rather you did not have one. People with a lawyer are harder to underpay.' },
  { says: '“Just sign this medical release.”', means: 'A blanket release lets them dig through your whole history for something to blame.' },
  { says: '“You were partly at fault, weren’t you?”', means: 'In Texas, every percent of blame they pin on you comes off what they pay.' },
  { says: '“We can have a check to you this week.”', means: 'Fast money before you know the full cost of your injuries. Once you sign, it is over.' },
];

/** The case value illustration. All figures are editable; none of this is legal advice. */
export const estimator = {
  title: 'What could my case be worth?',
  text: 'Every case is different, and no calculator can tell you the answer. But this is roughly how the numbers are built, and what you would actually take home.',
  severity: [
    { label: 'Sore, healed in weeks', multiplier: 1.5 },
    { label: 'Months of treatment', multiplier: 3 },
    { label: 'Surgery or lasting injury', multiplier: 5 },
  ],
  // Contingency fee as a share of the recovery.
  feeRate: 1 / 3,
  // Texas proportionate responsibility: above this share of fault, you recover nothing.
  faultBar: 50,
  // The range shown is the estimate plus and minus this share.
  spread: 0.25,
  note: 'An illustration only, not a prediction or legal advice. Real value depends on liability, insurance limits, your medical records and many other facts. Case costs are not shown.',
};

/** Texas gives most injury claims two years from the date of the crash. Check your own state. */
export const deadline = {
  years: 2,
  title: 'The clock is already running.',
  text: 'In Texas you generally have two years from the day of the crash to file a lawsuit. Evidence disappears much faster: camera footage is often erased within weeks.',
  note: 'A general guide for most Texas injury claims. Some claims have much shorter deadlines (for example against a government body) and some have exceptions. Call us to check yours.',
};

export const afterCrash = [
  { title: 'Get medical care', text: 'Even if you feel fine. Some injuries show up days later, and the record matters.' },
  { title: 'Call the police', text: 'Ask for a crash report number before you leave the scene.' },
  { title: 'Photograph everything', text: 'Vehicles, plates, the road, your injuries, and the other driver’s insurance card.' },
  { title: 'Get witness names', text: 'A phone number now is worth more than a search later.' },
  { title: 'Do not give a statement', text: 'Not to the other driver’s insurer. Not until you have talked to a lawyer.' },
  { title: 'Stay off social media', text: 'Insurers look. A smiling photo will be used against you.' },
  { title: 'Call us', text: 'The review is free, and we can take it from here the same day.' },
];

/** Fictional results for the demo. */
export const results: { amount: number; type: CaseId; title: string; text: string; kind: 'Settlement' | 'Verdict' }[] = [
  { amount: 3200000, type: 'death', kind: 'Verdict', title: 'Family of a father of three', text: 'A delivery truck ran a red light. The company blamed the weather. The jury did not.' },
  { amount: 2400000, type: 'truck', kind: 'Settlement', title: '18-wheeler on I-10', text: 'The driver had been on the road for 16 hours. The first offer was $180,000.' },
  { amount: 1100000, type: 'car', kind: 'Settlement', title: 'Hit by a drunk driver', text: 'We also held the bar that kept serving him responsible.' },
  { amount: 850000, type: 'car', kind: 'Settlement', title: 'Rear-ended at a stop light', text: 'The insurer said it was a "minor impact". Two surgeries said otherwise.' },
  { amount: 640000, type: 'motorcycle', kind: 'Settlement', title: 'Rider cut off by a left turn', text: 'The police report blamed our client. The traffic camera did not.' },
  { amount: 475000, type: 'rideshare', kind: 'Settlement', title: 'Passenger in a rideshare', text: 'Three insurance companies pointed at each other. We made all three pay.' },
  { amount: 390000, type: 'pedestrian', kind: 'Settlement', title: 'Struck in a crosswalk', text: 'The driver left the scene. We found the car through a body shop.' },
  { amount: 310000, type: 'premises', kind: 'Settlement', title: 'Fall in a grocery store', text: 'The spill had been reported 40 minutes earlier and left.' },
];

export const process = [
  { title: 'Call, text or fill in the form', when: 'Today', text: 'You talk to a real person in minutes and an attorney the same day. If you cannot come to us, we come to you.' },
  { title: 'We investigate while you heal', when: 'Week 1', text: 'We preserve video, pull the crash report, talk to witnesses and deal with every insurance company so you do not have to.' },
  { title: 'We demand full value', when: 'When treatment is clear', text: 'Once we know what your injuries really cost, we send a demand backed by records, bills and expert opinions.' },
  { title: 'Settle, or go to trial', when: 'Your call', text: 'Most cases settle. If the offer is not fair, we file suit and prepare for trial. You decide, with our advice.' },
];

export const attorneys = [
  { initials: 'DK', name: 'Dana Kessler', role: 'Founding partner', focus: 'Trucking and wrongful death', admitted: 'Texas, 2004', line: 'Has tried cases in front of juries for twenty years.' },
  { initials: 'MV', name: 'Marcus Vance', role: 'Founding partner', focus: 'Catastrophic injury', admitted: 'Texas, 2006', line: 'Used to defend insurance companies. Knows the playbook.' },
  { initials: 'RO', name: 'Rosa Ortega', role: 'Partner', focus: 'Car and rideshare crashes', admitted: 'Texas, 2011 · Habla español', line: 'Answers her own phone. Clients keep her number.' },
  { initials: 'TB', name: 'Theo Barnes', role: 'Trial attorney', focus: 'Motorcycle and pedestrian cases', admitted: 'Texas, 2015', line: 'Rides. Knows exactly how riders get blamed.' },
];

export const reviews = [
  { quote: 'The insurance company offered me $9,000. Kessler Vance got me enough to cover the surgery and a year off work.', name: 'Darnell W.', detail: 'Rear-end crash, Houston' },
  { quote: 'Rosa came to the hospital the day after. I never once had to call an adjuster back.', name: 'Elena M.', detail: 'Rideshare passenger, Austin' },
  { quote: 'They told me the truth even when it was not what I wanted to hear. That is why I trusted the rest.', name: 'James P.', detail: 'Motorcycle crash, Dallas' },
];

export const faqs = [
  { q: 'How much does it cost to hire you?', a: 'Nothing up front. We work on a contingency fee, which means our fee is a percentage of what we recover for you. If we do not recover anything, you owe no attorney fees. Your written fee agreement explains how case costs are handled.' },
  { q: 'Do I really need a lawyer?', a: 'Not always. If nobody was hurt and it is only vehicle damage, you can often handle it yourself, and we will tell you so. If you were injured, an early conversation is free and usually changes the outcome.' },
  { q: 'The insurance company already made an offer. Should I take it?', a: 'Talk to us before you sign anything. First offers are usually made before anyone knows the full cost of your injuries, and a signed release cannot be undone.' },
  { q: 'What if the crash was partly my fault?', a: 'You can still recover in Texas as long as you were not more than 50% responsible. Your recovery is reduced by your share of the fault.' },
  { q: 'How long will my case take?', a: 'Simple cases can resolve in a few months. Serious injuries take longer, because we should not settle until we know what your recovery really involves.' },
  { q: 'I cannot travel. Can you come to me?', a: 'Yes. We meet clients at home, in hospital or by video, anywhere in Texas.' },
];

export const review = {
  title: 'Free case review. Two minutes.',
  text: 'Tell us what happened. An attorney will call you back today, and everything you tell us is confidential.',
  when: ['Today or yesterday', 'This week', 'This month', 'Longer ago'],
  injured: ['Yes, I got treatment', 'Yes, not treated yet', 'Not sure yet', 'No injuries'],
  demoNote: 'This is a demo: nothing is sent or stored.',
};
