/* quiz.js - Practice mode for the Member guide (sample members and fake enquiries).
 * Needs guide.js (it uses Guide.api). Case content is in DATA below; FAQ questions are matched
 * against the loaded FAQ files the same way guide.js does it. Nothing is stored; scores last for the session.
 * To add a case: copy an object in DATA.cases and change the fields. "cat" must read "Category › Enquiry".
 */
(function(){
'use strict';
const DATA={
 "cases": [
  {
   "id": "c01",
   "level": 1,
   "name": "Aiden Lim",
   "born": 1996,
   "status": "SC",
   "channel": "Email",
   "ctx": "Turned 30 this year. No ElderShield.",
   "msg": "Hi, I just turned 30 and got a letter saying I am now covered by CareShield Life. I never signed up for this. Can I opt out? I do not want another deduction from my CPF.",
   "group": "r_1980",
   "stage": "servicing",
   "stageAlt": [],
   "cat": "Policy Servicing › Opt-out request from SC/PR",
   "catAlt": [],
   "dist": [
    "Coverage › Application",
    "Premium Support and Subsidies › Request for assistance to pay premiums",
    "Payer Management › Cease/stop premium payment and request for refunds"
   ],
   "best": "Can I opt out from CareShield Life?",
   "ok": [
    "Is CareShield Life mandatory and do I have to join it?"
   ],
   "topics": [
    "opt-out",
    "who-covered"
   ],
   "reply": [
    "Born 1980 or later: compulsory. No opt-out and no exemption, even with similar private insurance.",
    "Premiums come from MediSave, with subsidies if the household qualifies. Nobody loses cover because they cannot pay.",
    "Reassure him: it protects him if he ever becomes severely disabled."
   ],
   "whyStage": "He wants to leave a policy that already exists, so this is a change of status, not getting in.",
   "whyCat": "He did not apply, so it is not Application. He is asking to leave: Opt-out request.",
   "whyFaq": "This FAQ answers “can I opt out” directly. The “mandatory” FAQ also helps.",
   "trap": ""
  },
  {
   "id": "c02",
   "level": 1,
   "name": "Raj Kumar",
   "born": 1972,
   "status": "SC",
   "channel": "Webform",
   "ctx": "Applied online last week to join CareShield Life. Never had ElderShield.",
   "msg": "I applied to join CareShield Life last week and got an approval email. But my CPF dashboard does not show it and the status says “Waiting for Cover”. Am I covered or not? If something happens now, can I claim?",
   "group": "r_none",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Coverage › Issuance of cover",
   "catAlt": [
    "Policy Servicing › Coverage status"
   ],
   "dist": [
    "Coverage › Application",
    "Premium Computation and Collection › Premium deduction",
    "Underwriting › Underwriting for enrolment"
   ],
   "best": "I have applied for CareShield Life and my application has been approved. Why is the coverage status reflected as ‘Waiting for Cover’ on my Healthcare dashboard?",
   "ok": [
    "I have applied for CareShield Life and my application has been approved. Why does it not show up on the Healthcare dashboard – “CareShield Life/ElderShield” section?"
   ],
   "topics": [
    "waiting-cover"
   ],
   "reply": [
    "Approved means cover has started. “Waiting for Cover” just means the first premium has not been deducted yet.",
    "He can claim if the severe disability began on or after the approval date.",
    "The first premium comes out of MediSave within 2 months of the policy start; the policy then shows on the dashboard."
   ],
   "whyStage": "He has been approved and is waiting for cover to show: part of getting in.",
   "whyCat": "The cover has been issued but shows a waiting status: Issuance of cover. Coverage status is also acceptable.",
   "whyFaq": "The FAQ explains the status and says he can still claim.",
   "trap": ""
  },
  {
   "id": "c03",
   "level": 1,
   "name": "Nurul Huda",
   "born": 1990,
   "status": "SC",
   "channel": "Email",
   "ctx": "Covered automatically at 30.",
   "msg": "How do I check how much my CareShield Life premium is this year, and how is it worked out?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Premium Computation and Collection › Premium amount and rates",
   "catAlt": [],
   "dist": [
    "Premium Computation and Collection › Premium deduction",
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
    "Payment Arrangement › Payment mode/options to pay premiums"
   ],
   "best": "How do I check the premiums payable under CareShield Life?",
   "ok": [
    "How are CareShield Life premiums calculated?",
    "Where can I find my CareShield Life premiums information?"
   ],
   "topics": [
    "premium-amount"
   ],
   "reply": [
    "Use the Premium Checker (Singpass) for her exact figure.",
    "Premiums depend on age, gender and cohort, and are set so each cohort pays for its own expected payouts.",
    "They rise yearly and are payable to 67. GST applies."
   ],
   "whyStage": "Premiums are the “paying” stage.",
   "whyCat": "She asks how much and how it is worked out: Premium amount and rates, not deduction.",
   "whyFaq": "The FAQ tells her exactly where to check.",
   "trap": ""
  },
  {
   "id": "c04",
   "level": 1,
   "name": "Chua Mei Ling",
   "born": 1988,
   "status": "SC",
   "channel": "Phone",
   "ctx": "In CareShield Life.",
   "msg": "If I become severely disabled, how much would I get each month? And when does it arrive?",
   "group": null,
   "stage": "claiming",
   "stageAlt": [],
   "cat": "Claims › Payout-related enquiries (e.g. disbursement)",
   "catAlt": [],
   "dist": [
    "Claims › General enquiries on claim process and eligibility",
    "Premium Computation and Collection › Premium amount and rates",
    "Claims › Policy-related enquiries/feedback"
   ],
   "best": "What is the monthly payout amount for CareShield Life?",
   "ok": [
    "When will I receive my monthly CareShield Life/ElderShield/MediSave Care payouts?",
    "How are my monthly CareShield Life payouts determined?"
   ],
   "topics": [
    "payout"
   ],
   "reply": [
    "$689 a month for someone who starts claiming in 2026, locked at the year the claim starts.",
    "Payouts arrive by the middle of each month.",
    "She needs to be unable to do 3 or more of 6 ADLs, assessed by an MOH-accredited assessor."
   ],
   "whyStage": "It is about what she receives when claiming.",
   "whyCat": "Amount and timing of money paid out: Payout-related enquiries.",
   "whyFaq": "The FAQ states the amount; the timing FAQ is also good.",
   "trap": ""
  },
  {
   "id": "c05",
   "level": 1,
   "name": "Ong Beng Soon",
   "born": 1981,
   "status": "SC",
   "channel": "Phone",
   "ctx": "In CareShield Life.",
   "msg": "Someone called saying they are from CareShield Life and asked me to confirm my Singpass login to “update my policy”. Is that real?",
   "group": null,
   "stage": "servicing",
   "stageAlt": [],
   "cat": "Claims › Other matters",
   "catAlt": [],
   "dist": [
    "Supplements › Fraud/Mis-selling/Soliciting of Supp Plan",
    "Policy Servicing › Welcome Booklet and Renewal Notice",
    "Claims › Digital notification and website-related enquiries"
   ],
   "best": "I have received a call claiming to be from CareShield Life. What should I do if this is a scam and my contact details are shared with external agencies?",
   "ok": [],
   "topics": [
    "scam"
   ],
   "reply": [
    "The CareShield Life team does not call to ask for sensitive personal information.",
    "Tell him not to share Singpass, bank or card details, to hang up, and to verify via 1800 222 3399 or Write to CPF."
   ],
   "whyStage": "It is a servicing-type concern about contact from the scheme.",
   "whyCat": "No Supplement is involved, so the Supplement fraud category does not fit. It lands under Claims › Other matters.",
   "whyFaq": "The FAQ is the official scam answer.",
   "trap": ""
  },
  {
   "id": "c06",
   "level": 1,
   "name": "Farah Binte Ismail",
   "born": 1978,
   "status": "SC",
   "channel": "Webform",
   "ctx": "Healthy, never held ElderShield.",
   "msg": "I am 48 and healthy. A colleague told me I can still join CareShield Life. How do I join, and is there an age limit?",
   "group": "r_none",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Coverage › Application",
   "catAlt": [],
   "dist": [
    "Underwriting › Underwriting for enrolment",
    "Policy Servicing › Coverage status",
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "best": "I was born in 1979 or earlier. Can I join or upgrade to CareShield Life?",
   "ok": [
    "The current ElderShield scheme has a maximum entry age of 64 years old. Can I join CareShield Life if I am older?"
   ],
   "topics": [
    "join-upgrade"
   ],
   "reply": [
    "Born 1979 or earlier can join if they have no pre-existing disability. There is no maximum entry age.",
    "Apply with Singpass; an assessment may be needed. Check the Premium Checker first.",
    "Participation Incentives only apply to those covered by 31 Dec 2024, so she will likely get $0."
   ],
   "whyStage": "She is not in yet and wants to join.",
   "whyCat": "Joining is an Application.",
   "whyFaq": "This FAQ covers joining for those born 1979 or earlier.",
   "trap": ""
  },
  {
   "id": "c07",
   "level": 1,
   "name": "Lee Siew Hoon",
   "born": 1960,
   "status": "SC",
   "channel": "Email",
   "ctx": "Holds ElderShield 300.",
   "msg": "I already have ElderShield. If I join CareShield Life as well, do I get double the payout?",
   "group": "r_es300",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Coverage › Application",
   "catAlt": [],
   "dist": [
    "Claims › General enquiries on claim process and eligibility",
    "Policy Servicing › Opt-out request from SC/PR",
    "Supplements › Clarification on Supp Plan Coverage"
   ],
   "best": "Can I join both CareShield Life and ElderShield to get double the protection?",
   "ok": [
    "I am an existing ElderShield/ElderShield Supplement policyholder. Do I have to join CareShield Life?",
    "Should I opt out of ElderShield if I would like to join CareShield Life?"
   ],
   "topics": [
    "es-vs-cshl",
    "join-upgrade"
   ],
   "reply": [
    "No. Joining CareShield Life upgrades her cover: ElderShield ends.",
    "ES premiums already paid are taken into account; an ES Supplement is not affected.",
    "Catch-up component applies to ES300 members."
   ],
   "whyStage": "She is considering joining/upgrading.",
   "whyCat": "It is about joining, so Application.",
   "whyFaq": "This FAQ answers “double protection” exactly.",
   "trap": ""
  },
  {
   "id": "c08",
   "level": 2,
   "name": "Wong Chee Keong",
   "born": 1975,
   "status": "SC",
   "channel": "Email",
   "ctx": "ElderShield 400 since 2009. Paid this year’s ES premium in March.",
   "msg": "I have decided to upgrade to CareShield Life. I already paid my ElderShield premium this year in March. Do I lose that money?",
   "group": "r_es400",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Coverage › Application",
   "catAlt": [
    "Payer Management › Cease/stop premium payment and request for refunds"
   ],
   "dist": [
    "Policy Servicing › Opt-out request from SC/PR",
    "Premium Computation and Collection › Premium deduction",
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)"
   ],
   "best": "I have already paid for ElderShield premiums for this year. Will I get any refund if I apply to join CareShield Life?",
   "ok": [
    "I was born in 1979 or earlier. Will the ElderShield premiums I have already paid be taken into account when I join CareShield Life?"
   ],
   "topics": [
    "es-vs-cshl",
    "catch-up"
   ],
   "reply": [
    "If CSHL starts in the same year as the ES renewal, the ES premium for that year is refunded.",
    "The refund happens when the first CSHL premium is collected.",
    "ES premiums already paid count towards his CSHL premium; ES400 members who join from 1 Jan 2022 pay a catch-up component."
   ],
   "whyStage": "He is moving from ES to CSHL: part of getting in.",
   "whyCat": "The refund is a by-product of upgrading. It is filed under Application (Cease/stop and refunds also accepted).",
   "whyFaq": "This FAQ answers the refund directly.",
   "trap": ""
  },
  {
   "id": "c09",
   "level": 2,
   "name": "Sharifah Bte Omar",
   "born": 1983,
   "status": "SC",
   "channel": "Phone",
   "ctx": "Her husband paid her premiums from his MediSave.",
   "msg": "My husband has been paying my CareShield Life premium from his MediSave. He passed away last month. Will my cover stop? Who pays now?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Payer Management › Auto-switch premium payer or Family Support",
   "catAlt": [
    "Policy Servicing › Coverage status"
   ],
   "dist": [
    "Policy Servicing › Opt-out request from SC/PR",
    "Payer Management › Cease/stop premium payment and request for refunds",
    "Premium Enforcement › Enforcement measures for non-payment of CSHL premiums"
   ],
   "best": "What happens to my MediShield Life/CareShield Life cover if my premium payer passes away?",
   "ok": [],
   "topics": [
    "payers",
    "death"
   ],
   "reply": [
    "Her cover continues. She automatically becomes her own payer.",
    "If her MediSave is short she is told to top up or ask another family member to take over with Change Payer.",
    "Subsidies and APS exist if she cannot afford the premium."
   ],
   "whyStage": "The question is about who pays: the paying stage (payer management).",
   "whyCat": "The payer died and the insured takes over: Auto-switch premium payer.",
   "whyFaq": "The FAQ answers this exact situation.",
   "trap": ""
  },
  {
   "id": "c10",
   "level": 2,
   "name": "Ahmad bin Yusof",
   "born": 1969,
   "status": "SC",
   "channel": "Email",
   "ctx": "Joined CareShield Life in March 2025.",
   "msg": "My neighbour got a Participation Incentive on his CareShield Life premium. I get $0. Is your system wrong?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Premium Support and Subsidies › Eligibility for Participation Incentives (PI, API)",
   "catAlt": [],
   "dist": [
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
    "Premium Support and Subsidies › Appeal for higher Premium Subsidies (PS)",
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "best": "Why is my participation incentive $0 for my CareShield Life premiums?",
   "ok": [],
   "topics": [
    "pi"
   ],
   "reply": [
    "Participation Incentives are only for SC born 1979 or earlier who were covered by 31 Dec 2024. He joined in 2025.",
    "It is paid over 10 years to offset the premium, never as a lump sum.",
    "PRs get none."
   ],
   "whyStage": "It is about help with premiums.",
   "whyCat": "Incentive, not subsidy: Eligibility for PI.",
   "whyFaq": "The FAQ explains the $0 directly.",
   "trap": ""
  },
  {
   "id": "c11",
   "level": 2,
   "name": "Grace Tan",
   "born": 1992,
   "status": "SC",
   "channel": "Email",
   "ctx": "Working in London for 3 years.",
   "msg": "Do I need to keep paying CareShield Life premiums while I am abroad? Can I pause them?",
   "group": null,
   "stage": "servicing",
   "stageAlt": [],
   "cat": "Payer Management › Cease/stop premium payment and request for refunds",
   "catAlt": [
    "Payment Arrangement › Payment mode/options to pay premiums"
   ],
   "dist": [
    "Policy Servicing › Opt-out request from SC/PR",
    "Policy Servicing › Termination/Cancellation of cover for non-SC/PR",
    "Premium Enforcement › Extension of payment deadline/instalment plan"
   ],
   "best": "If I reside overseas, can I suspend my premium payment for CareShield Life?",
   "ok": [],
   "topics": [
    "overseas"
   ],
   "reply": [
    "Premiums cannot be suspended for SC/PR living overseas, and she remains covered.",
    "Her payouts follow her abroad if she ever claims.",
    "She can pay by MediSave top-up, a family payer who is SC/PR, or telegraphic transfer."
   ],
   "whyStage": "Moving abroad changes her status; no pausing exists.",
   "whyCat": "She wants to stop paying: Cease/stop premium payment.",
   "whyFaq": "The FAQ states premiums cannot be suspended.",
   "trap": ""
  },
  {
   "id": "c12",
   "level": 2,
   "name": "Rohani Bte Hassan",
   "born": 1958,
   "status": "SC",
   "channel": "Email",
   "ctx": "Holds ElderShield 300. Assessed as severely disabled last month. Writer is her daughter Aisyah.",
   "msg": "My mum was assessed as severely disabled last month. She has ElderShield 300. Should we claim ElderShield or switch to CareShield Life?",
   "group": "r_severe_es",
   "stage": "claiming",
   "stageAlt": [],
   "cat": "Claims › General enquiries on claim process and eligibility",
   "catAlt": [],
   "dist": [
    "Coverage › Application",
    "Policy Servicing › Reinstatement of cover",
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "best": "I am an existing ElderShield insured. If I am eligible for ElderShield claims, should I claim from ElderShield or join CareShield Life?",
   "ok": [
    "How do I make an ElderShield claim?"
   ],
   "topics": [
    "claim-steps",
    "es-vs-cshl"
   ],
   "reply": [
    "Claim from ElderShield. With severe disability she is not eligible to join CareShield Life.",
    "ES300 pays $300 a month for up to 60 months. Apply on AIC eFASS.",
    "MediSave Care (age 30+) can be claimed at the same time."
   ],
   "whyStage": "She is already assessed as severely disabled: this is claiming.",
   "whyCat": "Which scheme to claim from: claim process and eligibility.",
   "whyFaq": "The FAQ answers “claim ES or switch”.",
   "trap": "“Switch to CareShield Life” is the wrong turn. Severe disability means she cannot join."
  },
  {
   "id": "c13",
   "level": 2,
   "name": "Lim Kok Wei",
   "born": 1987,
   "status": "SC",
   "channel": "SMS",
   "ctx": "In CareShield Life.",
   "msg": "I got a message that my CareShield Life deduction failed because my MediSave is too low. Can I use my OA instead? What do I do?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Payment Arrangement › Top-up of MediSave to pay premiums",
   "catAlt": [
    "Payment Arrangement › Deduction/Recovery of Premiums"
   ],
   "dist": [
    "Premium Computation and Collection › Premium amount and rates",
    "Payer Management › Appeal to pay premiums for other family members",
    "Policy Servicing › Reinstatement of cover"
   ],
   "best": "If there are insufficient funds in my MediSave Account, can I use my Ordinary Account/Special Account monies to pay for my MediShield Life, CareShield Life or ElderShield premiums?",
   "ok": [
    "How do I top up my MediSave for MediShield Life, CareShield Life and ElderShield premiums, and how can I check if it has been successfully processed?"
   ],
   "topics": [
    "how-to-pay"
   ],
   "reply": [
    "OA and SA cannot be used for CareShield Life premiums. Only MediSave.",
    "Top up MediSave, or have a family member take over as payer, or set up GIRO.",
    "If he cannot afford it: subsidies, then APS. He will not lose cover."
   ],
   "whyStage": "A payment problem: the paying stage.",
   "whyCat": "The fix is to top up MediSave, so Top-up of MediSave.",
   "whyFaq": "The FAQ says whether OA can be used and what to do.",
   "trap": ""
  },
  {
   "id": "c14",
   "level": 2,
   "name": "Priya d/o Subramaniam",
   "born": 1995,
   "status": "SC",
   "channel": "Email",
   "ctx": "Writing for her father Mr Subramaniam (born 1950), in a nursing home. His claim is approved.",
   "msg": "Dad is in a nursing home and his payouts have been approved. Can the payout go directly to the nursing home to cover his bills?",
   "group": null,
   "stage": "claiming",
   "stageAlt": [],
   "cat": "Claims › Payout-related enquiries (e.g. disbursement)",
   "catAlt": [],
   "dist": [
    "Claims › General enquiries on claim process and eligibility",
    "Payer Management › Appeal to pay premiums for other family members",
    "Claims › Other matters"
   ],
   "best": "I am staying in a nursing home. Can I use MediSave Care/CareShield Life/ElderShield payouts to pay for the monthly bills?",
   "ok": [],
   "topics": [
    "payout-account"
   ],
   "reply": [
    "Yes. Payouts can be paid directly to approved healthcare institutions, including nursing homes, for monthly bills.",
    "Update details in eFASS (Singpass), Manage My Schemes.",
    "If he lacks mental capacity, special rules apply to who receives the payout."
   ],
   "whyStage": "His claim is approved and the question is where money goes: claiming.",
   "whyCat": "It is about disbursement.",
   "whyFaq": "The FAQ covers paying bills directly.",
   "trap": ""
  },
  {
   "id": "c15",
   "level": 2,
   "name": "Chen Li Hua",
   "born": 1989,
   "status": "SC",
   "channel": "Email",
   "ctx": "In CareShield Life.",
   "msg": "Why is there GST on my CareShield Life premium? Insurance should be exempt!",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Claims › Policy-related enquiries/feedback",
   "catAlt": [
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "dist": [
    "Premium Computation and Collection › Premium deduction",
    "Premium Enforcement › Waiver of interest/penalty imposed on CSHL premium arrears",
    "Payment Arrangement › Deduction/Recovery of Premiums"
   ],
   "best": "What is the rationale for imposing Goods and Services Tax (GST) on MediShield Life, CareShield Life and ElderShield premiums?",
   "ok": [],
   "topics": [
    "premium-amount",
    "policy-why"
   ],
   "reply": [
    "GST is broad-based with minimal exemptions and applies to insurance premiums.",
    "It also applies to MediShield Life and ElderShield premiums."
   ],
   "whyStage": "Premiums are the paying stage.",
   "whyCat": "A complaint about policy design sits in Policy-related enquiries/feedback, even though it is about premiums. Premium amount and rates is also accepted.",
   "whyFaq": "The FAQ gives the official reason.",
   "trap": "The category lives under Claims even though no claim is involved."
  },
  {
   "id": "c16",
   "level": 2,
   "name": "Tay Hock Seng",
   "born": 1976,
   "status": "SC",
   "channel": "Webform",
   "ctx": "Has diabetes and high blood pressure. No ElderShield.",
   "msg": "I want to join CareShield Life but I have diabetes and high blood pressure. Will you reject me or charge extra?",
   "group": "r_none",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Underwriting › Underwriting for enrolment",
   "catAlt": [
    "Coverage › Application"
   ],
   "dist": [
    "Premium Computation and Collection › Premium amount and rates",
    "Supplements › Clarification on Supp Plan Coverage",
    "Claims › General enquiries on claim process and eligibility"
   ],
   "best": "I am born in 1979 or earlier. Will I have to pay extra premiums if I join CareShield Life with pre-existing medical conditions?",
   "ok": [],
   "topics": [
    "underwriting"
   ],
   "reply": [
    "Medical conditions do not matter: no extra premium for pre-existing conditions.",
    "Since 1 Jan 2026 what matters is disability: unable to do one or more ADLs.",
    "He applies with Singpass; an assessment may be required."
   ],
   "whyStage": "He is trying to get in.",
   "whyCat": "Health and acceptance: Underwriting for enrolment.",
   "whyFaq": "The FAQ answers the pre-existing condition question directly.",
   "trap": ""
  },
  {
   "id": "c17",
   "level": 2,
   "name": "Ho Mei Fong",
   "born": 1965,
   "status": "SC",
   "channel": "Email",
   "ctx": "In CareShield Life. Considering a Great Eastern Supplement.",
   "msg": "Can I pay for a Supplement with my MediSave? Is there a limit?",
   "group": null,
   "stage": "topup",
   "stageAlt": [],
   "cat": "Supplements › Clarification on MediSave Transaction for Supp Plan",
   "catAlt": [],
   "dist": [
    "Payment Arrangement › Payment mode/options to pay premiums",
    "Supplements › Clarification on Supp Plan Coverage",
    "Supplements › Feedback on Supp Policy"
   ],
   "best": "What are CareShield Life and ElderShield Supplement plans?",
   "ok": [],
   "topics": [
    "supp"
   ],
   "reply": [
    "Yes: MediSave can pay up to $600 per calendar year per insured person.",
    "Supplements are optional, private and lapse if premiums stop.",
    "Claims go to the insurer, not AIC."
   ],
   "whyStage": "Supplements are the topping up stage.",
   "whyCat": "It is about MediSave paying for a Supplement.",
   "whyFaq": "The Supplement FAQ states the $600 limit.",
   "trap": ""
  },
  {
   "id": "c18",
   "level": 2,
   "name": "Teo Kah Hock",
   "born": 1962,
   "status": "SC",
   "channel": "Email",
   "ctx": "Joined CareShield Life last year.",
   "msg": "Why must I pay CareShield Life until I am 67? MediShield Life is not like that. It is unfair.",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Claims › Policy-related enquiries/feedback",
   "catAlt": [
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "dist": [
    "Payer Management › Cease/stop premium payment and request for refunds",
    "Policy Servicing › Opt-out request from SC/PR",
    "Premium Support and Subsidies › Request for assistance to pay premiums"
   ],
   "best": "Why is my CareShield Life premiums payable until age 67?",
   "ok": [
    "Why not extend premium payment for life for CareShield Life, like MediShield Life?",
    "How long do I have to pay for CareShield Life Premiums?"
   ],
   "topics": [
    "policy-why",
    "premium-amount"
   ],
   "reply": [
    "A longer payment period lowers the annual premium and keeps payment in working years.",
    "The age may be reviewed with the re-employment age.",
    "Those who join at 59 or older pay for 10 years only."
   ],
   "whyStage": "About what he pays: paying.",
   "whyCat": "Feedback on design: Policy-related enquiries/feedback.",
   "whyFaq": "The FAQ gives the reason.",
   "trap": ""
  },
  {
   "id": "c19",
   "level": 2,
   "name": "Zhang Wei",
   "born": 1988,
   "status": "SC",
   "channel": "Email",
   "ctx": "Received Welcome Package and checked the Premium Checker.",
   "msg": "My welcome letter shows one premium but the Premium Checker shows a lower amount. Which is right?",
   "group": null,
   "stage": "servicing",
   "stageAlt": [],
   "cat": "Claims › Digital notification and website-related enquiries",
   "catAlt": [
    "Policy Servicing › Welcome Booklet and Renewal Notice",
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "dist": [
    "Premium Enforcement › Demand Notes (e.g. undelivered, returned demand notes)",
    "Payment Arrangement › Deduction/Recovery of Premiums",
    "Coverage › Issuance of cover"
   ],
   "best": "Why is the premium information shown on the CareShield Life Premium Checker e-Service different from details in my welcome letter?",
   "ok": [],
   "topics": [
    "letters-notifs"
   ],
   "reply": [
    "The letter is accurate as at the date on its first page. The Checker uses the latest information.",
    "A recent successful appeal or change can make them differ.",
    "He should go by the Premium Checker."
   ],
   "whyStage": "A letters-versus-website question: servicing.",
   "whyCat": "Website and letter mismatch: Digital notification and website-related enquiries.",
   "whyFaq": "The FAQ explains the difference.",
   "trap": ""
  },
  {
   "id": "c20",
   "level": 2,
   "name": "Ravi Chandran",
   "born": 1990,
   "status": "SC",
   "channel": "Phone",
   "ctx": "In CareShield Life. No Supplement.",
   "msg": "An insurance agent told me I must buy a CareShield Life Supplement. He said it is compulsory and my cover is not valid otherwise.",
   "group": null,
   "stage": "topup",
   "stageAlt": [],
   "cat": "Supplements › Fraud/Mis-selling/Soliciting of Supp Plan",
   "catAlt": [],
   "dist": [
    "Supplements › Clarification on Supp Plan Coverage",
    "Coverage › Application",
    "Claims › Other matters"
   ],
   "best": "What are CareShield Life and ElderShield Supplement plans?",
   "ok": [],
   "topics": [
    "scam",
    "supp"
   ],
   "reply": [
    "Supplements are optional private add-ons. CareShield Life cover does not depend on buying one.",
    "He should not feel pressured. He can check plans and insurers on the MOH comparison page.",
    "Mis-selling is flagged here."
   ],
   "whyStage": "Supplements are the topping up stage.",
   "whyCat": "An agent saying it is compulsory is mis-selling.",
   "whyFaq": "The FAQ confirms Supplements are optional.",
   "trap": ""
  },
  {
   "id": "c21",
   "level": 3,
   "name": "Sim Boon Leong",
   "born": 1979,
   "status": "SC",
   "channel": "Email",
   "ctx": "Type 2 diabetes. Since a stroke in June he cannot dress himself. No ElderShield.",
   "msg": "I want to join CareShield Life before premiums go up in 2026. I have diabetes but that is fine, right? I just cannot dress myself since my stroke, but I can do everything else.",
   "group": "r_some",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Underwriting › Underwriting for enrolment",
   "catAlt": [
    "Coverage › Application"
   ],
   "dist": [
    "Supplements › Clarification on Supp Plan Coverage",
    "Premium Computation and Collection › Premium amount and rates",
    "Coverage › Issuance of cover"
   ],
   "best": "Who can still enrol in CareShield Life after 1 January 2026?",
   "ok": [
    "Am I still eligible to be covered under CareShield Life if I have pre-existing disabilities?",
    "Why is the enrolment criterion being reinstated for CareShield Life application?"
   ],
   "topics": [
    "underwriting",
    "join-upgrade"
   ],
   "reply": [
    "Diabetes is not the issue. Being unable to dress himself is a disability, and since 1 Jan 2026 that bars joining.",
    "Premiums already went up from 1 Jan 2026, so “before they go up” has passed.",
    "Point him to subsidies, Home Caregiving Grant, MediFund and ComCare. Supplements need an existing CSHL/ES policy."
   ],
   "whyStage": "He is trying to enter.",
   "whyCat": "Eligibility to enrol is Underwriting for enrolment.",
   "whyFaq": "This FAQ states who can still enrol after 1 Jan 2026.",
   "trap": "The member offers a distraction (diabetes) and a stale deadline. The disability is what matters."
  },
  {
   "id": "c22",
   "level": 3,
   "name": "Wong Siew Fong",
   "born": 1968,
   "status": "SC",
   "channel": "Phone",
   "ctx": "Held ElderShield 300. Joined CareShield Life by choice 50 days ago.",
   "msg": "My CareShield Life premium is higher than I expected. I want out, and I want my ElderShield back. Is it too late?",
   "group": "r_es300",
   "stage": "servicing",
   "stageAlt": [],
   "cat": "Policy Servicing › Opt-out request from SC/PR",
   "catAlt": [],
   "dist": [
    "Coverage › Appeal (Backdating of Cover/Mandatory Cohort/Family Members)",
    "Policy Servicing › Reinstatement of cover",
    "Premium Support and Subsidies › Request for assistance to pay premiums"
   ],
   "best": "I am born in 1979 or earlier. Can I opt out from the CareShield Life scheme after joining (e.g. if I cannot afford the premiums)?",
   "ok": [
    "If I am currently on ElderShield 300/400 and choose to upgrade to CareShield Life, can I opt out or downgrade to ElderShield 300/400 subsequently?",
    "I have applied to opt out of CareShield Life as I belong to the optional group (i.e. born in 1979 or earlier) and the cover is still within my free-look period. When will my application be approved?"
   ],
   "topics": [
    "opt-out"
   ],
   "reply": [
    "She is within the 60-day free-look period (50 days in), so yes, with about 10 days left.",
    "Opting out gives a full premium refund and puts her back on ES300. It is processed after one working day.",
    "After 60 days there is no opt-out. Subsidies and APS exist if premiums become unaffordable."
   ],
   "whyStage": "She wants to leave an existing policy.",
   "whyCat": "Opt-out request.",
   "whyFaq": "The FAQ covers opting out after joining, with the free-look window.",
   "trap": "Check the dates: day 50 of 60 means she can still do it, but time is short."
  },
  {
   "id": "c23",
   "level": 3,
   "name": "Kelvin Neo",
   "born": 1980,
   "status": "SC",
   "channel": "Email",
   "ctx": "Terminally ill. Can still do all daily activities.",
   "msg": "I am dying of cancer. I do not want to pay into CareShield Life any more. Please exempt me.",
   "group": "r_1980",
   "stage": "getting-in",
   "stageAlt": [],
   "cat": "Coverage › Appeal (Backdating of Cover/Mandatory Cohort/Family Members)",
   "catAlt": [
    "Policy Servicing › Opt-out request from SC/PR"
   ],
   "dist": [
    "Claims › General enquiries on claim process and eligibility",
    "Premium Support and Subsidies › Request for assistance to pay premiums",
    "Payer Management › Cease/stop premium payment and request for refunds"
   ],
   "best": "I am born in 1980 or later and am terminally ill but do not have severe disability. Can I be exempted from CareShield Life?",
   "ok": [],
   "topics": [
    "exemption-appeal"
   ],
   "reply": [
    "Start with empathy. Be gentle.",
    "There is no exemption for the compulsory group, even if terminally ill. He would still receive payouts if he became severely disabled.",
    "If premiums are a burden, subsidies and APS exist, so he does not lose cover."
   ],
   "whyStage": "It is about being in the scheme at all.",
   "whyCat": "A mandatory cohort exemption appeal sits under Coverage › Appeal. Opt-out request also fits.",
   "whyFaq": "The FAQ covers terminal illness directly.",
   "trap": ""
  },
  {
   "id": "c24",
   "level": 3,
   "name": "Mohd Faizal",
   "born": 1980,
   "status": "SC",
   "channel": "Email",
   "ctx": "Writing for his mother Mdm Zainab (born 1952), nursing home resident, mentally incapacitated, claim approved.",
   "msg": "My mum cannot manage her own affairs. Please change her payout to my personal bank account. I am her caregiver.",
   "group": null,
   "stage": "claiming",
   "stageAlt": [],
   "cat": "Claims › Payout-related enquiries (e.g. disbursement)",
   "catAlt": [],
   "dist": [
    "Claims › General enquiries on claim process and eligibility",
    "Payer Management › Auto-switch premium payer or Family Support",
    "Policy Servicing › Coverage status"
   ],
   "best": "I am the family member or caregiver of a Mentally Incapacitated (MI) Patient. Can I receive CareShield Life/ElderShield/MediSave Care payouts on their behalf?",
   "ok": [
    "Can I nominate a joint bank account with the Mentally Incapacitated (MI) Patient to receive the monthly CareShield Life/ElderShield/MediSave Care payouts?",
    "Can I nominate the Mentally Incapacitated (MI) Patient’s own bank account to receive the monthly CareShield Life/ElderShield/MediSave Care payouts?"
   ],
   "topics": [
    "payout-account"
   ],
   "reply": [
    "It is possible, but he must obtain a deputyship within 12 months, or payouts are suspended (unless paid to her or the nursing home).",
    "Alternatives: a joint account (she stays a joint holder) or her own account.",
    "State the arrangement on the form; a Mental Incapacity Certification is needed if not already submitted."
   ],
   "whyStage": "Her claim is approved; this is about where the money goes.",
   "whyCat": "Disbursement.",
   "whyFaq": "The FAQ covers caregiver accounts and the 12-month deputyship rule.",
   "trap": "Missing the 12-month deputyship deadline would suspend payouts."
  },
  {
   "id": "c25",
   "level": 3,
   "name": "Rahim Bin Salleh",
   "born": 1974,
   "status": "SC",
   "channel": "Email",
   "ctx": "Held ES400 from 2008 to 2015, then lapsed through non-payment.",
   "msg": "I want to join CareShield Life now. I paid ElderShield for 7 years before I stopped. Will that count towards my premium?",
   "group": "r_none",
   "stage": "getting-in",
   "stageAlt": [
    "paying"
   ],
   "cat": "Premium Computation and Collection › Premium amount and rates",
   "catAlt": [
    "Policy Servicing › Reinstatement of cover",
    "Coverage › Application"
   ],
   "dist": [
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
    "Underwriting › Underwriting for enrolment",
    "Payment Arrangement › Payment mode/options to pay premiums"
   ],
   "best": "I was born in 1979 or earlier. If I paid ElderShield 300/400 premiums previously but my policy lapsed due to non-payment of premiums, how will my CareShield Life premiums be affected?",
   "ok": [
    "I am born in 1979 or earlier. What are my CareShield Life premiums?",
    "What is the catch-up component under CareShield Life?"
   ],
   "topics": [
    "catch-up",
    "lapse-reinstate"
   ],
   "reply": [
    "His ES lapsed through non-payment, so his premium is worked out as for an uninsured person.",
    "The catch-up component applies. It is flat over 10 years and not subsidised.",
    "Past ES premiums only count if continuously insured. APS exists if affordability is an issue."
   ],
   "whyStage": "He is joining. Premium treatment is a side question, so getting in (paying is also accepted).",
   "whyCat": "His question is how his premium is affected.",
   "whyFaq": "The FAQ is about a lapsed ES and the effect on CSHL premiums.",
   "trap": ""
  },
  {
   "id": "c26",
   "level": 3,
   "name": "Sim Hui Min",
   "born": 1991,
   "status": "SC",
   "channel": "Email",
   "ctx": "Lost her job. Holds a Great Eastern Supplement.",
   "msg": "I lost my job and cannot afford my CareShield Life premiums. Can I apply for Additional Premium Support?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Premium Support and Subsidies › Request for assistance to pay premiums",
   "catAlt": [],
   "dist": [
    "Payment Arrangement › Top-up of MediSave to pay premiums",
    "Premium Enforcement › Extension of payment deadline/instalment plan",
    "Premium Support and Subsidies › Appeal on APS Outcome"
   ],
   "best": "I am covered under CareShield Life. What is Additional Premium Support and who can qualify?",
   "ok": [
    "How can I apply for Additional Premium Support to pay for my CareShield Life premiums?",
    "Where can I get help if I cannot afford my CareShield Life premiums?"
   ],
   "topics": [
    "aps",
    "help-ladder"
   ],
   "reply": [
    "Holders of a Supplement (or those paying for one) are not eligible for APS.",
    "She does not need to apply early: APS is by invitation when MediSave is short and family support is limited.",
    "She will not lose CareShield Life cover. Subsidies for lower-income households and a MediSave top-up or family payer remain options."
   ],
   "whyStage": "A struggle to pay: paying.",
   "whyCat": "She is asking for help to pay: Request for assistance.",
   "whyFaq": "The APS FAQ lists who qualifies, including the Supplement exclusion.",
   "trap": "She holds a Supplement, which makes her ineligible for APS."
  },
  {
   "id": "c27",
   "level": 3,
   "name": "Alvin Ng",
   "born": 1979,
   "status": "SC",
   "channel": "Phone",
   "ctx": "Claim approved this year. Own MediSave $8,000; wife’s MediSave $25,000.",
   "msg": "My own MediSave is low. Can I get MediSave Care? Can I draw $200 from mine and another $200 from my wife’s?",
   "group": null,
   "stage": "claiming",
   "stageAlt": [],
   "cat": "Claims › General enquiries on claim process and eligibility",
   "catAlt": [
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "dist": [
    "Claims › Policy-related enquiries/feedback",
    "Payer Management › Appeal to pay premiums for other family members",
    "Payment Arrangement › Top-up of MediSave to pay premiums"
   ],
   "best": "If I develop severe disability, can I withdraw up to $200 per month from my own MediSave and another $200 from my spouse’s MediSave under MediSave Care?",
   "ok": [
    "If I have developed severe disability, can I make MediSave Care withdrawals from my spouse's MediSave Account?"
   ],
   "topics": [
    "msc"
   ],
   "reply": [
    "Combined cap of $200 a month across his and his wife’s MediSave, not $200 each.",
    "His own balance gives a lower amount ($5,000 and above gives $50). The shortfall can come from his wife’s MediSave if she has enough.",
    "MediSave Care can be claimed alongside his CareShield Life payout."
   ],
   "whyStage": "He is already claiming and asking about extra money.",
   "whyCat": "Eligibility and how it works.",
   "whyFaq": "The FAQ explicitly rules out $200 plus $200.",
   "trap": "$200 plus $200 is the tempting but wrong answer."
  },
  {
   "id": "c28",
   "level": 3,
   "name": "Yusof Bin Harun",
   "born": 1977,
   "status": "SC",
   "channel": "Email",
   "ctx": "Low household income. Daughter Hana (22) lives with him.",
   "msg": "Our household income is low but I get no premium subsidy at all. Why? Is the system wrong?",
   "group": null,
   "stage": "paying",
   "stageAlt": [],
   "cat": "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
   "catAlt": [
    "Premium Support and Subsidies › Appeal for higher Premium Subsidies (PS)"
   ],
   "dist": [
    "Premium Support and Subsidies › Eligibility for Participation Incentives (PI, API)",
    "Premium Support and Subsidies › APS outcome",
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "best": "What should I do if one of my household members has disallowed access to his financial information for the purpose of CareShield Life Premium Subsidies eligibility checks?",
   "ok": [
    "I had previously disallowed access to my financial information for the purpose of CareShield Life Premium Subsidies eligibility checks. How do I change this arrangement?"
   ],
   "topics": [
    "ps"
   ],
   "reply": [
    "Subsidies depend on the household check. If any household member disallows access, no subsidy can be assessed for any member.",
    "Hana (or whoever disallowed) can change this in the Household Check e-Service, or call the Healthcare Hotline 1800 222 3399.",
    "If a change is being processed, he must wait or contact CPF."
   ],
   "whyStage": "Subsidies are part of paying.",
   "whyCat": "Subsidy eligibility.",
   "whyFaq": "The FAQ covers the disallowed household member case.",
   "trap": "The fault is not in the system. One household member’s choice affects everyone."
  },
  {
   "id": "c29",
   "level": 3,
   "name": "Ismail Bin Hamid",
   "born": 1982,
   "status": "SC",
   "channel": "Email",
   "ctx": "Writing for his mother Mdm Salmah (born 1955), ElderShield 300. She used all 60 months of payout and is still severely disabled.",
   "msg": "Mum’s ElderShield payouts have run out. She is still severely disabled. Can she join CareShield Life now to get more?",
   "group": "r_severe_none",
   "stage": "care",
   "stageAlt": [
    "getting-in"
   ],
   "cat": "Coverage › Application",
   "catAlt": [
    "Claims › Other matters",
    "Underwriting › Underwriting for enrolment"
   ],
   "dist": [
    "Claims › Payout-related enquiries (e.g. disbursement)",
    "Policy Servicing › Reinstatement of cover",
    "Premium Support and Subsidies › Request for assistance to pay premiums"
   ],
   "best": "If I have finished claiming my ElderShield 300/400 payouts, can I still join CareShield Life?",
   "ok": [
    "If I am born in 1979 or earlier and have severe disability, can I join CareShield Life?"
   ],
   "topics": [
    "mild-moderate",
    "join-upgrade",
    "msc"
   ],
   "reply": [
    "She can only join if she has no disability, and she is severely disabled, so she cannot join CareShield Life.",
    "Other help: means-tested subsidies, ElderFund, Home Caregiving Grant, MediSave Care, and MediFund or ComCare.",
    "AIC (1800 650 6060) and the medical social worker can help with applications."
   ],
   "whyStage": "The member is beyond the schemes’ reach, so it falls under other help (getting in is also accepted).",
   "whyCat": "Joining is an Application; Other matters is also acceptable.",
   "whyFaq": "The FAQ is about finishing ES payouts and joining.",
   "trap": "“Join CareShield Life” is not available to her. Look for other help."
  }
 ]
};
const CSS=".q-lv{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0}\n#guide .btn.on{background:var(--beige);color:var(--ink);border-color:var(--beige)}\n.q-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:12px 0 16px}\n.q-score span{color:var(--beige2)}\n.q-card p{font-style:italic;color:var(--beige2)}\n.g-chip.lv1{border-color:#9fb3a0;color:#b6c8b7}.g-chip.lv2{border-color:#d8b67a;color:#e0c590}.g-chip.lv3{border-color:#c4806a;color:#e0a794}.g-chip.done{background:var(--panel2)}\n.q-ticket{background:var(--panel);border:1px solid var(--beige2);border-radius:4px;padding:12px 16px;margin:10px 0}\n.q-th{display:flex;gap:10px;align-items:center;border-bottom:1px solid var(--line);padding-bottom:8px;margin-bottom:8px}\n.q-th small{color:var(--beige2)}\n.q-fields{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px 16px;font-size:14px}\n.q-fields small{display:block;color:var(--beige2);font-size:11px;text-transform:uppercase;letter-spacing:.05em}\n.q-msg{margin:12px 0 2px;padding:10px 14px;border-left:3px solid var(--sand);background:var(--panel2);font:17px/1.5 var(--serif);color:var(--sand)}\n.q-pills{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0}\n.q-pill{border:1px solid var(--line);border-radius:999px;padding:2px 12px;font-size:12.5px;color:var(--beige2)}\n.q-pill.on{border-color:var(--sand);color:var(--sand)}.q-pill.ok{border-color:#9fb3a0;color:#b6c8b7}.q-pill.bad{border-color:#c4806a;color:#e0a794}\n.q-step h2{font:600 21px/1.3 var(--serif);color:var(--sand);margin:12px 0}\n.q-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:12px}\n.q-opt{text-align:left;background:var(--panel);border:1px solid var(--line);border-radius:4px;padding:11px 14px;color:var(--beige);font:15px/1.4 var(--sans);cursor:pointer}\n.q-opt:hover:not(:disabled){border-color:var(--sand);background:var(--panel2)}\n.q-opt.ok{border-color:#9fb3a0;background:rgba(159,179,160,.14)}.q-opt.bad{border-color:#c4806a;background:rgba(196,128,106,.14)}.q-opt.dim{opacity:.5}\n.q-opt small{color:var(--beige2)}\n.q-hint,.q-fb{margin:10px 0;padding:9px 13px;border-radius:3px;border:1px solid var(--line);background:var(--panel);font-size:14.5px}\n.q-fb.ok{border-left:3px solid #9fb3a0}.q-fb.bad{border-left:3px solid #c4806a}\n.q-hint[hidden]{display:none}\n.q-res h2{font:600 26px var(--serif);color:var(--sand);margin:16px 0 2px}\n";
const LV={1:'Easy',2:'Medium',3:'Hard'};
const ST={done:{},cur:{},level:0};
let A=null;
const seedOf=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)}return x>>>0};
const rng=s=>{let a=seedOf(s);return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
const shuffle=(arr,seed)=>{const r=rng(seed),a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const byId=new Map(DATA.cases.map(c=>[c.id,c]));
const ageOf=b=>2026-b;

/* FAQ pool built from the guide's topics */
function pool(){const m=new Map();A.DATA.topics.forEach(t=>(t.faqs||[]).forEach(q=>{const k=A.norm(q);if(!m.has(k))m.set(k,{q,topics:new Set(),stages:new Set()});m.get(k).topics.add(t.id);m.get(k).stages.add(t.stage)}));return m}
function faqOptions(c){
 const P=pool(),okk=new Set([c.best,...c.ok].map(A.norm)),mine=new Set(c.topics);
 const all=[...P.values()].filter(x=>!okk.has(A.norm(x.q)));
 let near=all.filter(x=>[...x.topics].some(t=>mine.has(t)));
 const related=new Set();c.topics.forEach(t=>((A.topicById.get(t)||{}).related||[]).forEach(r=>related.add(r)));
 const rel=all.filter(x=>[...x.topics].some(t=>related.has(t))&&!near.includes(x));
 const far=all.filter(x=>![...x.topics].some(t=>mine.has(t)));
 let cand=c.level===1?far:[...near,...rel];
 if(cand.length<3)cand=cand.concat(far);
 const pick=shuffle(cand,c.id+'f').filter((x,i,a)=>a.findIndex(y=>A.norm(y.q)===A.norm(x.q))===i).slice(0,3);
 return shuffle([{label:c.best,ok:true},...pick.map(x=>({label:x.q,ok:false}))],c.id+'fo')}
function steps(c){
 const out=[],W=A.DATA.wizard.results;
 if(c.group&&W[c.group]){
  const others=shuffle(Object.keys(W).filter(k=>k!==c.group&&k!=='r_unsure'),c.id+'g').slice(0,3);
  out.push({key:'group',title:'Who is this member?',q:'Which description fits this member best?',
   opts:shuffle([c.group,...others],c.id+'go').map(k=>({label:W[k].title,ok:k===c.group})),
   why:'Use the “Which scheme applies?” helper: '+W[c.group].title+'.',hint:[['wizard','Open the “Which scheme applies?” helper']]})}
 const stages=A.DATA.stages.filter(s=>s.n>0),okS=new Set([c.stage,...c.stageAlt]);
 out.push({key:'stage',title:'Where is the member in the journey?',q:'Which stage of the journey does this enquiry belong to?',
  opts:stages.map(s=>({label:s.n+'. '+s.title,ok:okS.has(s.id),best:s.id===c.stage})),keepOrder:true,why:c.whyStage,hint:[['home','See the journey on the guide home page']]});
 const okC=new Set([c.cat,...c.catAlt]);
 out.push({key:'cat',title:'Which Inventory category?',q:'Where would you file this enquiry? (Category › Enquiry)',
  opts:shuffle([c.cat,...c.dist],c.id+'c').map(l=>({label:l,ok:okC.has(l),best:l===c.cat})),why:c.whyCat,hint:[['enquiries','Browse “Find by enquiry type”']]});
 out.push({key:'faq',title:'Which FAQ helps most?',q:'Which FAQ answers this member most directly?',opts:faqOptions(c),why:c.whyFaq,
  hint:c.topics.slice(0,2).map(t=>['topic/'+t,'Read: '+(A.topicById.get(t)||{}).title])});
 return out}
const cur=id=>ST.cur[id]||(ST.cur[id]={i:0,picks:[],hints:0});
const H=(...a)=>A.h(...a);

function menu(){
 const w=H('div',{class:'g-wrap q'});
 const list=DATA.cases.filter(c=>!ST.level||c.level===ST.level);
 const done=Object.values(ST.done),pts=done.reduce((a,d)=>a+d.score,0),max=done.reduce((a,d)=>a+d.max,0);
 w.append(A.crumbs({r:'home',t:'Guide'},{t:'Practice'}),H('h1',{class:'g-h1'},'Practice with sample members'),
  H('p',{class:'g-sub'},'Fake members with made-up enquiries. For each one you choose who they are, where they are in the journey, which Inventory category fits, and which FAQ helps. You get the reason after every pick, and you can use hints. Nothing is saved; scores reset when you reload.'));
 w.append(H('div',{class:'q-lv'},[[0,'All']].concat(Object.entries(LV).map(([k,v])=>[+k,v])).map(([k,v])=>H('button',{class:'btn sm'+(ST.level===k?' on':''),onclick:()=>{ST.level=k;A.go('practice',{replace:true})}},v+' ('+DATA.cases.filter(c=>!k||c.level===k).length+')'))));
 const next=list.find(c=>!ST.done[c.id])||list[0];
 w.append(H('div',{class:'q-top'},H('div',{class:'q-score'},H('b',null,Object.keys(ST.done).length+' of '+DATA.cases.length),' cases done',max?H('span',null,' · '+pts+'/'+max+' points'):null),
  H('span',{class:'sp'}),A.link('practice/'+next.id,'btn pri',Object.keys(ST.done).length?'Next case':'Start with an easy one'),
  H('button',{class:'btn',onclick:()=>{const p=list.filter(c=>!ST.done[c.id]);const r=(p.length?p:list);A.go('practice/'+r[Math.floor(Math.random()*r.length)].id)}},'Random case')));
 w.append(H('div',{class:'g-grid'},list.map(c=>{const d=ST.done[c.id];
  return A.link('practice/'+c.id,'g-card q-card',H('div',{class:'chips'},A.chip(LV[c.level],'lv'+c.level),d&&A.chip(d.score+'/'+d.max,'done')),H('h3',null,c.name+', '+ageOf(c.born)),H('p',null,'“'+c.msg.slice(0,110)+(c.msg.length>110?'…':'')+'”'))})));
 return w}

function ticket(c){
 const f=(k,v)=>H('div',null,H('small',null,k),H('span',null,v));
 return H('div',{class:'q-ticket'},H('div',{class:'q-th'},H('b',null,'Case '+c.id.replace('c','#Q-')),A.chip(LV[c.level],'lv'+c.level),H('span',{class:'sp'}),H('small',null,'Sample enquiry · '+c.channel)),
  H('div',{class:'q-fields'},f('Member',c.name),f('Born / age',c.born+' (age '+ageOf(c.born)+' in 2026)'),f('Status',c.status==='SC'?'Singapore Citizen':c.status),f('Background',c.ctx)),
  H('blockquote',{class:'q-msg'},c.msg))}

function caseView(id){
 const c=byId.get(id);if(!c)return menu();
 const w=H('div',{class:'g-wrap q'}),S=steps(c),st=cur(id),fin=st.i>=S.length;
 w.append(A.crumbs({r:'home',t:'Guide'},{r:'practice',t:'Practice'},{t:c.name}),ticket(c));
 w.append(H('div',{class:'q-pills'},S.map((s,i)=>H('span',{class:'q-pill'+(i===st.i&&!fin?' on':'')+(st.picks[i]!==undefined?(S[i].opts[st.picks[i]].ok?' ok':' bad'):'')},(i+1)+'. '+s.title))));
 if(fin)return debrief(w,c,S,st);
 const s=S[st.i],picked=st.picks[st.i],box=H('div',{class:'q-step'});
 box.append(H('h2',null,s.q),H('div',{class:'q-opts'},s.opts.map((o,i)=>H('button',{class:'q-opt'+(picked!==undefined?(o.ok?' ok':(i===picked?' bad':' dim')):''),disabled:picked!==undefined,onclick:()=>{st.picks[st.i]=i;A.go('practice/'+id,{replace:true,keepScroll:true})}},o.label,picked!==undefined&&o.ok&&o.best===false?H('small',null,' also acceptable'):null))));
 if(picked===undefined){
  const hint=H('div',{class:'q-hint',hidden:true},H('b',null,'Hint. '),'Look in the guide: ',s.hint.map(([r,l])=>A.link(r,'g-chip big',l)));
  box.append(H('button',{class:'btn sm',onclick:()=>{hint.hidden=!hint.hidden}},'Show a hint'),hint)}
 else{const ok=s.opts[picked].ok;
  box.append(H('div',{class:'q-fb '+(ok?'ok':'bad')},H('b',null,ok?'Correct. ':'Not quite. '),s.why||''),
   H('div',null,H('button',{class:'btn pri',onclick:()=>{st.i++;if(st.i>=S.length){ST.done[id]={score:st.picks.filter((p,i)=>S[i].opts[p].ok).length,max:S.length}}A.go('practice/'+id,{replace:true})}},st.i===S.length-1?'See the full answer →':'Next →')))}
 w.append(box);return w}

function debrief(w,c,S,st){
 const sc=ST.done[c.id]||{score:0,max:S.length};
 w.append(H('div',{class:'q-res'},H('h2',null,'You got '+sc.score+' of '+sc.max),H('p',{class:'g-sub'},sc.score===sc.max?'Spot on.':sc.score>=sc.max-1?'Close. Read the reasons below.':'Worth a re-read. Open the topics below, then retry.')));
 const W=A.DATA.wizard.results;
 if(c.group&&W[c.group]){w.append(H('div',{class:'g-sec'},'Who this member is'),H('div',{class:'g-result'},H('h2',null,W[c.group].title),H('ul',{class:'g-say'},W[c.group].points.map(p=>H('li',null,p)))))}
 w.append(H('div',{class:'g-sec'},'The model answer'),A.table({head:['Step','Best answer'],rows:[['Journey stage',(()=>{const s=A.DATA.stages.find(x=>x.id===c.stage);return s.n+'. '+s.title})()],['Inventory category',c.cat],['Best FAQ',c.best]]}));
 if(c.trap)w.append(H('div',{class:'g-note warn'},H('b',null,'The trap. '),c.trap));
 w.append(H('div',{class:'g-sec'},'What to say in your reply'),H('ul',{class:'g-say'},c.reply.map(x=>H('li',null,x))));
 const bx=H('div',null,H('div',{class:'g-sec'},'The FAQ answer'));const it=A.faqItem(c.best);bx.append(it);setTimeout(()=>{it.open=true},0);
 c.ok.forEach(q=>bx.append(A.faqItem(q)));w.append(bx);
 const ts=c.topics.map(t=>A.topicById.get(t)).filter(Boolean);
 w.append(H('div',{class:'g-sec'},'Read more in the guide'),H('div',{class:'chips'},ts.map(t=>A.link('topic/'+t.id,'g-chip big',t.title))));
 const list=DATA.cases.filter(x=>!ST.level||x.level===ST.level),nx=list.find(x=>!ST.done[x.id]);
 w.append(H('div',{class:'g-pn'},H('button',{class:'btn',onclick:()=>{delete ST.cur[c.id];delete ST.done[c.id];A.go('practice/'+c.id,{replace:true})}},'Retry this case'),
  H('span',null,A.link('practice','btn','All cases'),' ',nx?A.link('practice/'+nx.id,'btn pri','Next case →'):H('span',{class:'g-sub'},'All cases in this level done.'))));
 return w}

window.Quiz={view(arg,api){A=api;if(!document.getElementById('quiz-css')){const s=document.createElement('style');s.id='quiz-css';s.textContent=CSS;document.head.append(s)}return arg?caseView(arg):menu()}};

})();
