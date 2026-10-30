/* guide.js - Member guide for Inventory > FAQs
 * CareShield Life, ElderShield, MediSave Care, Supplements.
 *
 * What lives here: all guide content (DATA), the Guide view, search, wizard and FAQ opening.
 * FAQ answers are NOT copied here. Topics list FAQ questions, and the answers are read live from
 * the .docx files loaded in the FAQs tab (T.files), so editing a docx updates the guide too.
 * A topic matches an FAQ by its question text (case and punctuation ignored).
 *
 * index.html hooks (3): <script src="guide.js"> after the main script, setTab() calls Guide.onOpen(),
 * tplMerge() calls Guide.refresh(). It also needs <div id="tguide"> button in the FAQs toolbar (optional).
 */
(function(){
'use strict';
const DATA={
 "schemes": [
  {
   "id": "cshl",
   "name": "CareShield Life",
   "short": "CSHL",
   "lane": "Basic insurance (government)",
   "line": "National long-term disability insurance. Lifetime monthly cash payout if the person cannot do 3 or more of 6 daily activities.",
   "facts": [
    "Automatic at age 30 for SC/PR born 1980 or later",
    "Born 1979 or earlier: optional, join or upgrade if no disability (from 1 Jan 2026)",
    "2026 payout: $689 a month, rising 4% a year to 2030",
    "Premiums paid by MediSave until 67 (10 years if joined at 59 or older)"
   ],
   "topic": "scheme-cshl"
  },
  {
   "id": "es",
   "name": "ElderShield",
   "short": "ES",
   "lane": "Basic insurance (government)",
   "line": "The older scheme CareShield Life replaces. Closed to new applicants. The payout lasts a limited number of months.",
   "facts": [
    "ES300: $300 a month for up to 60 months",
    "ES400: $400 a month for up to 72 months",
    "Cover is for life; the total payout is capped",
    "Born 1979 or earlier can upgrade to CareShield Life (no disability)"
   ],
   "topic": "scheme-es"
  },
  {
   "id": "msc",
   "name": "MediSave Care",
   "short": "MSC",
   "lane": "Your own MediSave",
   "line": "Not insurance. A severely disabled person aged 30+ withdraws up to $200 a month in cash from their own and/or spouse’s MediSave.",
   "facts": [
    "Needs the same severe disability assessment",
    "Amount depends on MediSave balance ($5,000 minimum, $20,000 for the full $200)",
    "Combined cap of $200 a month across own and spouse’s MediSave",
    "Can be claimed alongside CareShield Life or ElderShield"
   ],
   "topic": "msc"
  },
  {
   "id": "supp",
   "name": "Supplements",
   "short": "Supp",
   "lane": "Optional private cover",
   "line": "Optional plans from private insurers (Singlife, Great Eastern, Income) that add benefits on top of CareShield Life or ElderShield.",
   "facts": [
    "Must already be in CareShield Life or ElderShield to buy",
    "MediSave can pay up to $600 a calendar year per insured person",
    "Claimed from the insurer, separately from AIC",
    "Lapses if premiums stop; CareShield Life does not"
   ],
   "topic": "supp"
  }
 ],
 "stages": [
  {
   "id": "start",
   "n": 0,
   "title": "Start here",
   "blurb": "The big picture: what the four schemes are, how they link, what “severely disabled” means, what changed in 2026.",
   "cats": []
  },
  {
   "id": "getting-in",
   "n": 1,
   "title": "Getting in",
   "blurb": "Who is covered, applying or upgrading, health checks, when cover starts.",
   "cats": [
    "Coverage",
    "Underwriting"
   ]
  },
  {
   "id": "paying",
   "n": 2,
   "title": "Paying",
   "blurb": "How premiums are worked out, the help available, and how they are paid and by whom.",
   "cats": [
    "Premium Computation and Collection",
    "Premium Support and Subsidies",
    "Payment Arrangement",
    "Payer Management"
   ]
  },
  {
   "id": "behind",
   "n": 3,
   "title": "Falling behind",
   "blurb": "Premiums not paid: what happens under each scheme, arrears and GIRO.",
   "cats": [
    "Premium Enforcement",
    "Payment Arrangement"
   ]
  },
  {
   "id": "servicing",
   "n": 4,
   "title": "Changing status",
   "blurb": "Opting out, lapses, death, moving overseas, letters and notifications, scams.",
   "cats": [
    "Policy Servicing",
    "Digital notification and website"
   ]
  },
  {
   "id": "claiming",
   "n": 5,
   "title": "Claiming",
   "blurb": "Severe disability, the assessment, how to claim, payouts and where the money goes.",
   "cats": [
    "Claims"
   ]
  },
  {
   "id": "topup",
   "n": 6,
   "title": "Topping up",
   "blurb": "MediSave Care and Supplements: extra money on top of the basic payout.",
   "cats": [
    "Supplements"
   ]
  },
  {
   "id": "care",
   "n": 7,
   "title": "Beyond the schemes",
   "blurb": "Long-term care basics and help for people who do not qualify.",
   "cats": [
    "Claims › Other matters"
   ]
  }
 ],
 "topics": [
  {
   "id": "big-picture",
   "stage": "start",
   "title": "The four schemes in 60 seconds",
   "sch": [
    "cshl",
    "es",
    "msc",
    "supp"
   ],
   "summary": "Four things get mixed up constantly. Two are basic government insurance (CareShield Life and its older sibling ElderShield), one lets a severely disabled person withdraw their own MediSave as cash (MediSave Care), and one is optional private top-up cover (Supplements).",
   "say": [
    "CareShield Life (CSHL): lifetime monthly cash payout if the person cannot do 3 or more of 6 ADLs. Automatic at 30 for SC/PR born 1980 or later. 2026 payout is $689 a month.",
    "ElderShield (ES): the older scheme, closed to new applicants. ES300 pays $300 a month for up to 60 months; ES400 pays $400 a month for up to 72 months.",
    "MediSave Care (MSC): not insurance. Age 30+ with severe disability, withdraw up to $200 a month in cash from own and/or spouse’s MediSave, depending on balance.",
    "Supplements: optional private plans from Singlife, Great Eastern or Income that add benefits on top of CSHL or ES. Claimed separately from the insurer.",
    "CSHL, ES and MSC share the same assessment, the same ADL test, the same AIC eFASS portal and the same payout timing. They are run jointly by AIC and CPF Board.",
    "A member can usually claim from more than one at once (CSHL or ES, plus MSC, plus a Supplement, plus private insurance). They cannot hold CSHL and ES together: ES ends when they upgrade."
   ],
   "tables": [
    {
     "title": "Side by side",
     "head": [
      "",
      "CareShield Life",
      "ElderShield",
      "MediSave Care",
      "Supplements"
     ],
     "rows": [
      [
       "What it is",
       "Government disability insurance",
       "Older government disability insurance",
       "Cash withdrawal from MediSave",
       "Optional private insurance"
      ],
      [
       "Who",
       "SC/PR. Auto at 30 if born 1980+; optional if born 1979 or earlier",
       "Closed to new joiners; existing insureds only",
       "SC/PR age 30+ with severe disability",
       "People already in CSHL or ES"
      ],
      [
       "Pays",
       "$689/month in 2026, rising; for life while severely disabled",
       "$300 x up to 60 months (ES300) or $400 x up to 72 months (ES400)",
       "Up to $200/month, by MediSave balance",
       "Varies by plan and insurer"
      ],
      [
       "Paid for by",
       "MediSave premiums, with subsidies",
       "MediSave premiums, no subsidies",
       "Your own (and spouse’s) MediSave balance",
       "Premiums; MediSave up to $600 a calendar year per insured"
      ],
      [
       "Claim through",
       "AIC eFASS",
       "AIC eFASS",
       "AIC eFASS",
       "The insurer directly"
      ],
      [
       "If premiums stop",
       "Cover continues; help exists",
       "Paid-up if minimum paid, else terminated",
       "No premium",
       "Lapses"
      ]
     ]
    }
   ],
   "faqs": [
    "What is CareShield Life?",
    "What is ElderShield?",
    "What is MediSave Care?",
    "What are CareShield Life and ElderShield Supplement plans?",
    "Which organisations are responsible for administering the CareShield Life, ElderShield and MediSave Care schemes?",
    "Can I join both CareShield Life and ElderShield to get double the protection?",
    "Can I submit a claim for both CareShield Life/ElderShield and MediSave Care concurrently?"
   ],
   "related": [
    "es-vs-cshl",
    "severe-disability",
    "stacking",
    "who-runs",
    "whats-new-2026"
   ],
   "cats": [
    "Coverage › Application",
    "Claims › Other matters"
   ],
   "keys": "overview intro introduction basics beginner newbie difference compare"
  },
  {
   "id": "es-vs-cshl",
   "stage": "start",
   "title": "ElderShield vs CareShield Life: what changes, what carries over",
   "sch": [
    "cshl",
    "es",
    "supp"
   ],
   "summary": "This is where the two files meet. ElderShield is the older, closed scheme with a capped payout. CareShield Life pays for life and rises each year. Most upgrade questions are answered here.",
   "tables": [
    {
     "head": [
      "",
      "ElderShield",
      "CareShield Life"
     ],
     "rows": [
      [
       "Open to new members?",
       "No. Offered to SC/PR with MediSave who turned 40 in 2019 or earlier",
       "Yes: automatic at 30 (born 1980+); optional for born 1979 or earlier if no disability"
      ],
      [
       "Payout",
       "$300 (ES300, up to 60 months) or $400 (ES400, up to 72 months)",
       "$689 a month in 2026, +4% a year to 2030, for life while severely disabled"
      ],
      [
       "Premiums",
       "Set by age joined. Do not rise with age. Last one is for the policy year that starts while still aged 65",
       "Rise yearly. Paid to 67 (10 years if joined at 59+)"
      ],
      [
       "Government help",
       "No subsidies (it is optional and can be cancelled)",
       "Means-tested subsidies up to 30%, Participation Incentives (SC, covered by 31 Dec 2024), Additional Premium Support"
      ],
      [
       "Run by",
       "Government (CPF Board and AIC) since Nov 2021",
       "Government (CPF Board and AIC)"
      ]
     ]
    }
   ],
   "say": [
    "Upgrade, do not “opt out then join”. ES cover is upgraded, ES premiums already paid are taken into account, and ES is terminated. A member cannot be on both.",
    "Refund: ES premiums already paid for the year are refunded if CSHL starts in the same year as the ES renewal. It happens when the first CSHL premium is collected.",
    "ES Supplements are not affected by upgrading. The member can claim from both CSHL and the Supplement. Supplement premiums paid do not count towards CSHL premiums; only ES premiums do.",
    "Lapsed ES (non-payment): no longer covered, so CSHL premiums are worked out as for an uninsured person.",
    "Catch-up component applies if the member was ES300, not insured or joined ES late, ES400 who joined CSHL from 1 Jan 2022, or reduced paid-up.",
    "Born 1970–1979 on ES400 with no severe disability were auto-enrolled into CSHL from 1 Dec 2021. The opt-out deadline was 31 Dec 2023 and has passed.",
    "Joined CSHL by choice and still in the 60-day free-look period: opting out puts them back on their original ES with a full premium refund.",
    "Severely disabled and on ES: claim from ES now. They are not eligible for CSHL."
   ],
   "watch": [
    "ES cover is for life; what is capped is the total payout (60 or 72 months). Do not tell a member ES “ended”.",
    "You cannot switch between ES300 and ES400. The one-time ES300 to ES400 option was in 2007."
   ],
   "faqs": [
    "I am an existing ElderShield/ElderShield Supplement policyholder. Do I have to join CareShield Life?",
    "Should I opt out of ElderShield if I would like to join CareShield Life?",
    "Can I join both CareShield Life and ElderShield to get double the protection?",
    "I am an existing ElderShield insured. If I am eligible for ElderShield claims, should I claim from ElderShield or join CareShield Life?",
    "If I am currently on ElderShield 300/400 and choose to upgrade to CareShield Life, can I opt out or downgrade to ElderShield 300/400 subsequently?",
    "I have already paid for ElderShield premiums for this year. Will I get any refund if I apply to join CareShield Life?",
    "I was born in 1979 or earlier. Will the ElderShield premiums I have already paid be taken into account when I join CareShield Life?",
    "I was born in 1979 or earlier. If I paid ElderShield 300/400 premiums previously but my policy lapsed due to non-payment of premiums, how will my CareShield Life premiums be affected?",
    "Why are Government subsidies provided for CareShield Life and not for ElderShield?",
    "How long will I be covered under ElderShield?",
    "Can I upgrade or downgrade between ElderShield 300 and ElderShield 400?",
    "What are the benefits of the ElderShield scheme?",
    "How do I join ElderShield?",
    "Will my ElderShield premiums change due to Government administration?",
    "Which agencies will administer ElderShield?"
   ],
   "related": [
    "join-upgrade",
    "catch-up",
    "opt-out",
    "supp",
    "claim-steps"
   ],
   "cats": [
    "Coverage › Application",
    "Policy Servicing › Opt-out request from SC/PR"
   ],
   "keys": "upgrade eldershield es300 es400 switch refund"
  },
  {
   "id": "severe-disability",
   "stage": "start",
   "title": "What counts as “severely disabled”",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "CareShield Life, ElderShield and MediSave Care all use one test: unable to do 3 or more of 6 Activities of Daily Living (ADLs), confirmed by an MOH-accredited assessor.",
   "say": [
    "The six ADLs: washing, dressing, feeding, toileting, moving or walking around (room to room indoors on level surfaces), and transferring (bed to an upright chair or wheelchair and back).",
    "Unable to do 3 or more = severe disability = can claim. Fewer than 3 is not a CSHL/ES claim; point to other help under “Beyond the schemes”.",
    "Dementia or other cognitive impairment does not automatically qualify. The assessment is still needed because the effect on function varies.",
    "PioneerDAS and Home Caregiving Grant are moderate-disability schemes (needing some help with 3 or more ADLs). Being on them does not mean CSHL/ES eligibility; the severe disability assessment is still required.",
    "Why not cover milder disability? The Council said premiums would need to at least double. Supplements can cover less severe disability.",
    "Not the same as a medical condition. A pre-existing condition is not the test; being unable to do ADLs is."
   ],
   "faqs": [
    "When am I eligible to make a CareShield Life/ElderShield claim?",
    "Does having dementia automatically qualify an individual for CareShield Life/ElderShield claims?",
    "I am receiving other disability assistance schemes such as Pioneer Generation Disability Assistance Scheme or Home Caregiving Grant. Can I qualify for CareShield Life or ElderShield claims?",
    "CareShield Life is still targeted at those with severe disability i.e. unable to perform three or more Activities of Daily Living. Why was this retained?",
    "Why does the CareShield Life claim threshold remain at severe disability?",
    "I have mild or moderate disabilities or I can perform more than three Activities of Daily Living (ADLs). How can I get help for my long-term care costs?",
    "When am I eligible to withdraw under MediSave Care?"
   ],
   "related": [
    "assessment",
    "claim-steps",
    "mild-moderate"
   ],
   "cats": [
    "Claims › General enquiries on claim process and eligibility"
   ],
   "keys": "adl activities daily living 3 of 6 threshold eligibility dementia"
  },
  {
   "id": "whats-new-2026",
   "stage": "start",
   "title": "The 2025 Review: what changed from 1 Jan 2026",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "On 27 Aug 2025 the Government accepted all the CareShield Life Council’s recommendations. Revised payouts and premiums took effect on 1 Jan 2026; admin improvements roll out progressively.",
   "say": [
    "Payout growth doubles from 2% to 4% a year for 2026 to 2030 ($689 in 2026). After 2030 it is subject to review.",
    "Premiums rise to fund it, but support moderates yearly increases to about $38 on average and no more than $75 (excluding GST). Still fully payable by MediSave.",
    "Government Transitional Support helps everyone whose gross premium goes up. It is not means-tested, unlike Premium Subsidies.",
    "Enrolment criterion reinstated: from 1 Jan 2026 those born 1979 or earlier can enrol only if they have no pre-existing disability. Born 1980 or later are still automatic at 30.",
    "Existing claimants are not affected. They keep their existing payouts for as long as they are severely disabled.",
    "Nobody can opt out of the enhancement. It is standard for all policyholders (avoids adverse selection, keeps admin simple).",
    "Supplement premiums are independent of CSHL, and most Supplement benefits stack independently, so they are not affected. Members should check with their insurer.",
    "Everyone can check their personal premiums on the Premium Checker."
   ],
   "faqs": [
    "What is the CareShield Life 2025 Review about?",
    "When will the enhancements to CareShield Life take effect?",
    "Why is there a need to double CareShield Life payout growth rate?",
    "What happens to my CareShield Life payout if I have been receiving payouts prior to 1 January 2026?",
    "Can I opt out of the upcoming CareShield Life enhancement?",
    "How much will my CareShield Life premiums be after the premium changes take place, and how much would it increase by?",
    "How is the Government Transitional support different from the CareShield Life premium subsidy?",
    "Why is the enrolment criterion being reinstated for CareShield Life application?",
    "Who can still enrol in CareShield Life after 1 January 2026?",
    "Why does the CareShield Life claim threshold remain at severe disability?",
    "How will my CareShield Life Supplement premiums be affected by the CareShield Life changes?"
   ],
   "links": [
    [
     "CareShield Life 2025 Review (CPF)",
     "https://www.cpf.gov.sg/member/infohub/news/cpf-related-announcements/careshieldlife-2025-review"
    ],
    [
     "CareShield Life Council (MOH)",
     "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/careshield-life/careshield-life-council"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "premium-amount",
    "help-ladder",
    "underwriting",
    "payout"
   ],
   "cats": [
    "Claims › Policy-related enquiries/feedback"
   ],
   "keys": "2026 review council 4% transitional enhancement changes new"
  },
  {
   "id": "who-runs",
   "stage": "start",
   "title": "Who does what",
   "sch": [
    "cshl",
    "es",
    "msc",
    "supp"
   ],
   "summary": "Premiums and subsidies sit with CPF Board. Claims, assessments and payouts sit with AIC. Supplements sit with the private insurers. Knowing which one owns the problem saves a lot of time.",
   "tables": [
    {
     "head": [
      "Who",
      "What they do",
      "Member touchpoints"
     ],
     "rows": [
      [
       "CPF Board",
       "Premium collection via MediSave, subsidies, household check. Jointly administers CSHL, ES and MSC",
       "Healthcare dashboard, Premium Checker, Change Payer, Top up MediSave, GIRO, Write to CPF, hotline 1800 222 3399"
      ],
      [
       "AIC (Agency for Integrated Care)",
       "Jointly administers CSHL, ES and MSC. Claims, payouts, disability reviews, survivorship checks, long-term care referrals",
       "eFASS (Singpass), assessor list, 1800 650 6060, AIC Links at public hospitals and Maxwell"
      ],
      [
       "MOH",
       "Policy owner. The independent CareShield Life Council reviews payouts and premiums",
       "moh.gov.sg, ask.gov.sg"
      ],
      [
       "MOH-accredited assessors",
       "Singapore-registered doctors, occupational therapists, physiotherapists and registered nurses trained to assess severe disability",
       "Listed on the AIC website"
      ],
      [
       "Private insurers",
       "Sell and service Supplements: Singlife, Great Eastern, Income Insurance",
       "Insurer hotlines and portals"
      ],
      [
       "Nursing homes / medical social workers",
       "Help residents apply for schemes; submit the Resident Assessment Form instead of an assessment",
       "The home’s medical social worker"
      ],
      [
       "SG Enable",
       "Support schemes for younger Singaporeans with disability (under 30)",
       "sgenable.sg, 1800 8585 885"
      ]
     ]
    }
   ],
   "faqs": [
    "Which organisations are responsible for administering the CareShield Life, ElderShield and MediSave Care schemes?",
    "Which agencies will administer ElderShield?",
    "Where can I seek advice on financial planning for old age or seek financial assistance for long-term care needs?",
    "How do I access long-term care services?"
   ],
   "links": [
    [
     "Healthcare dashboard",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ],
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ],
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ],
    [
     "AIC website",
     "https://www.aic.sg/"
    ]
   ],
   "related": [
    "big-picture",
    "supp",
    "assessment"
   ],
   "cats": [
    "Claims › Other matters"
   ],
   "keys": "cpf aic moh agency organisations responsible administer"
  },
  {
   "id": "policy-why",
   "stage": "start",
   "title": "“Why is it designed like that?”",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Members often complain rather than ask. These are the official reasons, one line each. The full wording is in the FAQs below.",
   "say": [
    "Only severe disability (3+ ADLs)? It keeps premiums affordable. Covering milder disability would need premiums at least doubled. Other help exists, and Supplements can cover more.",
    "Not from birth, why start at 30? Priority is protection in old age. By 30 most people work and have MediSave, and starting earlier spreads premiums over more years.",
    "Why payable to 67, not for life like MediShield Life? A longer period lowers the annual premium and keeps payment in working years. The age may be reviewed with the re-employment age.",
    "Why do older cohorts pay more? Fewer years to spread premiums, a higher risk of severe disability, and the scheme is not-for-profit. Subsidies, incentives and APS cushion it.",
    "Why do women pay more? Women generally live longer and are more likely to claim for longer, so the same expected benefit per dollar needs a higher annual premium. The payout is the same.",
    "Why no subsidy on the catch-up component? To keep subsidies equal across everyone born 1979 or earlier. APS is available.",
    "Why does the payout stop rising when claiming or at 67? Increases are paid for by premium adjustments. Members who want growth after that can look at Supplements.",
    "Why cash instead of reimbursing costs like MediShield Life? Cash lets people choose home care or a nursing home.",
    "Why no lump sum, death benefit or no-claim bonus? It is basic protection for the severely disabled. Supplements can offer lump sums and death benefits.",
    "Why GST? GST is broad-based with minimal exemptions and applies to insurance premiums.",
    "Why compulsory? So everyone, including lower-income members and those with pre-existing severe disability, has basic cover. The Government supports those who cannot afford premiums.",
    "MediSave Care only $200? MediSave has no risk pooling and must stay available for hospital bills. Beyond that: MediFund, ComCare. ElderFund ($250) is for lower-income members with low MediSave who cannot benefit from CSHL/ES."
   ],
   "faqs": [
    "Why are Singaporeans not covered by CareShield Life from birth?",
    "Why not allow insureds to choose from different CareShield Life plans depending on their ability to pay?",
    "Why is CareShield Life universal coverage not extended to those born in 1979 or earlier?",
    "Why is there a need to start CareShield Life earlier at age 30?",
    "How was the starting payout of $600 per month for CareShield Life determined?",
    "Why do CareShield Life payouts stop increasing once insureds stop paying premiums (e.g., when they make a claim or turn 67)?",
    "As a pensioner, can I receive any special benefits under CareShield Life?",
    "Can lump sum payouts, death benefits or \"No-claim Bonus” be provided as incentives for healthy living or meeting the two Activities of Daily Living (ADLs) criteria under CareShield Life/ElderShield?",
    "Can the pool of assessors for CareShield Life/ElderShield/MediSave Care be expanded to include Singapore-registered doctors, therapists or nurses?",
    "Why is my CareShield Life premiums payable until age 67?",
    "Why are CareShield Life premiums for older cohorts higher than younger cohorts?",
    "Why are CareShield Life premiums for females higher although their payouts are the same as males?",
    "Why not extend premium payment for life for CareShield Life, like MediShield Life?",
    "I am born in 1979 or earlier. Why are there no subsidies for the catch-up component when it looks so substantial?",
    "What is the rationale for imposing Goods and Services Tax (GST) on MediShield Life, CareShield Life and ElderShield premiums?",
    "Why can’t CareShield Life/ElderShield automatically reimburse long-term care costs the way MediShield Life does for hospital bills?",
    "Why is CareShield Life/ElderShield necessary for Singaporeans' long-term care needs?",
    "Can I withdraw more than $200 per month under MediSave Care?",
    "Why is the ElderFund payout ($250) higher than the MediSave Care withdrawal amount ($200)?",
    "Why am I not allowed to make MediSave Care withdrawals to cover my parent or children’s long-term care needs?",
    "Why is the withdrawal quantum under MediSave Care based on my MediSave Account balance?",
    "Why do I need to set aside the MediSave balance of at least $5,000 to be eligible for MediSave Care?",
    "Why is MediSave Care restricted to individuals aged 30 and above?",
    "I am born in 1979 or earlier. If I join CareShield Life, will I get premium rebates?"
   ],
   "related": [
    "whats-new-2026",
    "severe-disability"
   ],
   "cats": [
    "Claims › Policy-related enquiries/feedback",
    "Supplements › Feedback on Supp Policy"
   ],
   "keys": "why complaint feedback reason rationale unfair design"
  },
  {
   "id": "who-covered",
   "stage": "getting-in",
   "title": "Who is covered, and is it compulsory?",
   "sch": [
    "cshl"
   ],
   "summary": "It depends on the birth year, and in some groups on ElderShield history. For a fast answer, use the “Which scheme applies?” helper.",
   "tables": [
    {
     "head": [
      "Group",
      "What happens"
     ],
     "rows": [
      [
       "SC/PR born 1980 or later",
       "Automatic from 1 Oct 2020 or at 30, whichever is later, even with pre-existing conditions or severe disability. Compulsory: no opt-out, no exemption. Welcome Package about 2 months before the 30th birthday. Those with pre-existing severe disability pay one year’s premium to join, which is less than the first monthly payout."
      ],
      [
       "SC/PR born 1970–1979 on ElderShield 400, no severe disability then",
       "Auto-enrolled from 1 Dec 2021. The opt-out deadline (31 Dec 2023) has passed."
      ],
      [
       "Born 1979 or earlier, not auto-enrolled",
       "Optional. Can join or upgrade with Singpass if no pre-existing disability (from 1 Jan 2026). No maximum entry age. 60-day free-look period, then no opt-out."
      ],
      [
       "Foreigners who become SC/PR from 1 Oct 2020, born 1979 or earlier",
       "Automatic if no severe disability (residency granted 1 Oct 2020 to 31 Dec 2025) or no disability at all (from 1 Jan 2026). Catch-up component applies."
      ],
      [
       "Foreigners (not SC/PR)",
       "Not eligible. CareShield Life is only for SC and PR."
      ],
      [
       "Pensioners",
       "No special benefits. Optional. The FAQ says they can join if they have no severe disability; since 1 Jan 2026 the entry rule for those born 1979 or earlier is no pre-existing disability."
      ],
      [
       "Under 30",
       "Not covered yet. Other support exists (MSF early intervention, KKH/NUH therapy subsidies, SG Enable, MediFund, ComCare)."
      ]
     ]
    }
   ],
   "say": [
    "Ask three things: SC/PR? Born when? Already on ElderShield? Then use the helper or the table above."
   ],
   "faqs": [
    "Is CareShield Life mandatory and do I have to join it?",
    "I am born in 1980 or later, who can be covered under CareShield Life?",
    "I am born in 1980 or later. What do I need to do to be covered by CareShield Life?",
    "I am going to be 29 years old when CareShield Life is launched. If I have severe disability, will I be able to join the scheme earlier?",
    "Am I still eligible to be covered under CareShield Life if I have pre-existing disabilities?",
    "I am born in 1990 or later, when will I be notified of my CareShield Life cover?",
    "Why are Singaporeans not covered by CareShield Life from birth?",
    "As a pensioner, can I receive any special benefits under CareShield Life?",
    "Why is CareShield Life universal coverage not extended to those born in 1979 or earlier?",
    "Who can still enrol in CareShield Life after 1 January 2026?"
   ],
   "related": [
    "join-upgrade",
    "foreigners",
    "exemption-appeal",
    "waiting-cover"
   ],
   "cats": [
    "Coverage › Application",
    "Coverage › Issuance of cover"
   ],
   "wizard": true,
   "keys": "mandatory compulsory automatic auto-enrolled born 1980 age 30 who eligible"
  },
  {
   "id": "join-upgrade",
   "stage": "getting-in",
   "title": "Joining or upgrading (born 1979 or earlier)",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "For people born 1979 or earlier who are not automatically covered. Eligibility turns on disability, not on medical conditions.",
   "steps": [
    "Check eligibility: SC/PR with no pre-existing disability. Since 1 Jan 2026 being unable to do even one ADL bars entry. Before then, only severe disability did.",
    "Check the personalised premium on the Premium Checker first. Premiums rise with age and there is no maximum entry age.",
    "Apply with Singpass on the “Application to join CareShield Life” form. A family member must use their own Singpass; you can help them or go to a Community Club together.",
    "A disability assessment may be needed. AIC writes to the applicant if so.",
    "The outcome arrives in about 7 working days by email (else SMS). A letter is sent only if neither is on file.",
    "The first premium is taken from MediSave within 2 months of the policy start. After that the status shows Active."
   ],
   "say": [
    "Existing ES holder: just upgrade. ES premiums paid are taken into account, ES is terminated, and an ES Supplement is unaffected.",
    "Finished claiming ES300/400 payouts? They can still join if they have no disability (an assessment may be needed). Otherwise point to subsidies, ElderFund, Home Caregiving Grant and MediSave Care.",
    "Recovered from severe disability and can do all ADLs again? They can join, even if they received ES payouts.",
    "No extra premium for pre-existing medical conditions. Being unable to do ADLs is what matters.",
    "No CPF account? They can still join. They open one by topping up MediSave, or a family member takes over as payer using the Change Payer e-Service.",
    "The Government encourages those without disability to consider joining, with subsidies and APS available. Give facts and the Premium Checker; do not decide for the member."
   ],
   "watch": [
    "After the 60-day free-look period they cannot opt out, even if premiums become hard to pay (subsidies and APS exist).",
    "Participation Incentives only apply to SC who were covered by 31 Dec 2024, so new joiners get none. Explain it before they see $0."
   ],
   "faqs": [
    "I was born in 1979 or earlier. Can I join or upgrade to CareShield Life?",
    "Should I upgrade to/join CareShield Life?",
    "If I have finished claiming my ElderShield 300/400 payouts, can I still join CareShield Life?",
    "The current ElderShield scheme has a maximum entry age of 64 years old. Can I join CareShield Life if I am older?",
    "I do not have a CPF account. Can I still join CareShield Life?",
    "I have recovered from a severe disability. Can I join CareShield Life, even if I was previously receiving payouts from ElderShield?",
    "If I am born in 1979 or earlier and have severe disability, can I join CareShield Life?",
    "Can I sign up for CareShield Life on behalf of my parent/spouse/sibling?",
    "I do not have Singpass. Can I apply to join CareShield Life via a hardcopy form?",
    "I am born in 1979 or earlier. Will I have to pay extra premiums if I join CareShield Life with pre-existing medical conditions?",
    "Should I opt out of ElderShield if I would like to join CareShield Life?",
    "Can I join both CareShield Life and ElderShield to get double the protection?",
    "Will ElderShield 300 or 400 insureds receive premium subsidies if they upgrade to CareShield Life?"
   ],
   "links": [
    [
     "Application to join CareShield Life",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/application-to-join-careshield-life"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ],
    [
     "Singpass",
     "https://www.singpass.gov.sg/main/"
    ]
   ],
   "related": [
    "underwriting",
    "es-vs-cshl",
    "catch-up",
    "apply-track"
   ],
   "cats": [
    "Coverage › Application"
   ],
   "wizard": true,
   "keys": "join upgrade apply eligibility opt in optional 1979"
  },
  {
   "id": "underwriting",
   "stage": "getting-in",
   "title": "Health checks before joining (underwriting)",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "Only affects people who are not automatically covered. Those born 1980 or later are covered whatever their health.",
   "say": [
    "From 1 Jan 2026 the enrolment criterion is back: born 1979 or earlier must have no pre-existing disability (unable to do at least one ADL) to join.",
    "A medical condition is not a disability. There is no extra premium for pre-existing medical conditions.",
    "A disability assessment may be required. The letter explains how: contact an MOH-accredited assessor to book it. For help call AIC on 1800 650 6060 or use “My Correspondences” on eFASS. The first CSHL assessment fee is waived.",
    "Why it came back: the concession for milder disability lasted 4 years, over twice as long as first announced, and it pushed up premiums for all older members. Applications had also fallen.",
    "Recovered from a severe disability and able to do all ADLs? They can join.",
    "Supplements are different: each insurer sets its own underwriting, including for pre-existing illnesses."
   ],
   "faqs": [
    "Do I have to undergo a disability assessment before joining CareShield Life?",
    "I have submitted my application to join CareShield Life and received a letter to attend a disability review. How do I go about it?",
    "Am I still eligible to be covered under CareShield Life if I have pre-existing disabilities?",
    "I am born in 1979 or earlier. Will I have to pay extra premiums if I join CareShield Life with pre-existing medical conditions?",
    "If I am born in 1979 or earlier and have severe disability, can I join CareShield Life?",
    "I have recovered from a severe disability. Can I join CareShield Life, even if I was previously receiving payouts from ElderShield?",
    "How do I submit the MediShield Life and CareShield Life Health Declaration form for Permanent Residence applicants?",
    "Why is the enrolment criterion being reinstated for CareShield Life application?",
    "Who can still enrol in CareShield Life after 1 January 2026?",
    "Can I purchase CareShield Life Supplement(s) if I have pre-existing illnesses?"
   ],
   "links": [
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ],
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ]
   ],
   "related": [
    "join-upgrade",
    "foreigners",
    "assessment"
   ],
   "cats": [
    "Underwriting › Underwriting for enrolment"
   ],
   "keys": "health check disability review pre-existing diabetes medical condition reject"
  },
  {
   "id": "apply-track",
   "stage": "getting-in",
   "title": "Applying and tracking the application",
   "sch": [
    "cshl"
   ],
   "summary": "Everything runs on Singpass. There is no hardcopy route, so people without Singpass need one first.",
   "steps": [
    "Make sure the applicant has Singpass. If not, they apply for one on the Singpass website, or call the Singpass helpdesk (support@singpass.gov.sg, 6643 0555).",
    "Apply on the “Application to join CareShield Life” form.",
    "Track it under “Activities” on the CPF website (Singpass login).",
    "Outcome in about 7 working days (approved, unsuccessful, or pending assessment) by email, else SMS.",
    "If approved, cover has started. Status shows “Waiting for Cover” until the first premium is deducted."
   ],
   "say": [
    "Applying for someone else: they must use their own Singpass. You can guide them or accompany them to a Community Club."
   ],
   "faqs": [
    "I do not have Singpass. Can I apply to join CareShield Life via a hardcopy form?",
    "I have applied to join CareShield Life online. Where do I check my application status?",
    "I have applied to join CareShield Life online. When would I be informed of my application outcome?",
    "Can I sign up for CareShield Life on behalf of my parent/spouse/sibling?",
    "I do not have a CPF account. Can I still join CareShield Life?",
    "I have submitted my application to join CareShield Life and received a letter to attend a disability review. How do I go about it?"
   ],
   "links": [
    [
     "Application to join CareShield Life",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/application-to-join-careshield-life"
    ],
    [
     "Activities (application status)",
     "https://www.cpf.gov.sg/Activities"
    ],
    [
     "Singpass",
     "https://www.singpass.gov.sg/main/"
    ]
   ],
   "related": [
    "waiting-cover",
    "join-upgrade",
    "underwriting"
   ],
   "cats": [
    "Coverage › Application",
    "Policy Servicing › Coverage status"
   ],
   "keys": "singpass apply status outcome hardcopy form"
  },
  {
   "id": "waiting-cover",
   "stage": "getting-in",
   "title": "“Waiting for Cover” and when cover really starts",
   "sch": [
    "cshl"
   ],
   "summary": "Approved does not mean shown as Active. The status changes only once the first premium has been deducted, but cover has already started.",
   "say": [
    "Status is “Waiting for Cover” until the first premium is deducted, about 2 months after approval. Then it becomes Active and the policy appears on the Healthcare dashboard.",
    "Cover has commenced from the approval date. They can claim if the severe disability began on or after that date, even while it says Waiting for Cover.",
    "The first premium comes out of the member’s or payer’s MediSave within 2 months of the policy start. Make sure there is enough.",
    "Later premiums are annual and come out within 1 month of the policy anniversary.",
    "Born 1990 or later: Welcome Package about 2 months before the 30th birthday. Born 1980 to 1990: package by 2 Sep 2020 or up to 2 months before the 30th birthday, whichever is later."
   ],
   "faqs": [
    "I have applied for CareShield Life and my application has been approved. Why is the coverage status reflected as ‘Waiting for Cover’ on my Healthcare dashboard?",
    "I have applied for CareShield Life and my application has been approved. Why does it not show up on the Healthcare dashboard – “CareShield Life/ElderShield” section?",
    "I have applied for CareShield Life and my application has been approved. When will my premiums be deducted?",
    "When do I have to pay for my CareShield Life premiums?",
    "I am born in 1990 or later, when will I be notified of my CareShield Life cover?",
    "I am born in 1980 or later. What do I need to do to be covered by CareShield Life?"
   ],
   "related": [
    "apply-track",
    "how-to-pay",
    "letters-notifs"
   ],
   "cats": [
    "Coverage › Issuance of cover",
    "Premium Computation and Collection › Premium deduction"
   ],
   "keys": "waiting for cover active status dashboard first premium"
  },
  {
   "id": "foreigners",
   "stage": "getting-in",
   "title": "Foreigners, new PRs and the health declaration",
   "sch": [
    "cshl"
   ],
   "summary": "CareShield Life is only for Singapore Citizens and Permanent Residents. The older guide suggested asking the team about a route for foreigners; the FAQ says there is none.",
   "say": [
    "Foreigners (not SC/PR) cannot join CareShield Life.",
    "PR applicants must declare their health for MediShield Life and CSHL after ICA In-Principle Approval and before finishing formalities. It does not affect the PR application. Wait one day after approval. One form per applicant, Singpass login required.",
    "Age 21 or older: the applicant logs in with Singpass and picks “Myself”. If they cannot get Singpass, an SC/PR family member logs in and picks “A Family Member”. Under 21: a parent or legal guardian submits.",
    "Foreigners who become SC/PR from 1 Oct 2020 and were born 1979 or earlier are enrolled automatically (rules in “Who is covered”). The catch-up component applies. To opt out they must appeal through the Opt-out e-Service; only substantiated grounds are considered.",
    "PRs get half the means-tested subsidy SCs get and no Participation Incentive.",
    "Overseas residents cannot suspend premiums (see “Living overseas”)."
   ],
   "gap": "Termination or cancellation of cover for people who stop being SC/PR has no FAQ in the four files. Check with the team.",
   "faqs": [
    "How can I join CareShield Life if I am a foreigner?",
    "How do I submit the MediShield Life and CareShield Life Health Declaration form for Permanent Residence applicants?",
    "What is the difference in treatment between Singapore Citizens and Permanent Residents for CareShield Life premium subsidies?",
    "Why is my participation incentive $0 for my CareShield Life premiums?",
    "Is CareShield Life mandatory and do I have to join it?",
    "If I reside overseas, can I suspend my premium payment for CareShield Life?",
    "If I have developed severe disability, can I make MediSave Care withdrawals from my spouse's MediSave Account?"
   ],
   "links": [
    [
     "PR health declaration form",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/health-declaration-pr-applicants"
    ],
    [
     "Opt-out / terminate CareShield Life or ElderShield",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/stop-careshield-life-or-eldershield-cover"
    ]
   ],
   "related": [
    "who-covered",
    "ps",
    "opt-out"
   ],
   "cats": [
    "Coverage › Application",
    "Underwriting › Underwriting for enrolment",
    "Policy Servicing › Termination/Cancellation of cover for non-SC/PR"
   ],
   "keys": "foreigner pr permanent resident health declaration ica renounce"
  },
  {
   "id": "exemption-appeal",
   "stage": "getting-in",
   "title": "Exemptions, backdating and appeals",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "For the compulsory group there is no exemption. Most appeal-type requests here have little published guidance.",
   "say": [
    "No exemption for people born 1980 or later, even if terminally ill without severe disability. They still receive payouts if they become severely disabled, and the Government supports those who cannot afford premiums.",
    "Similar private insurance does not exempt anyone. Private cover complements CareShield Life; it does not replace it.",
    "Someone aged 29 when it launched with severe disability was covered at 30, because premiums are pooled within each generation.",
    "Foreigners who became SC/PR (compulsory group) can appeal to opt out through the Opt-out e-Service. All appeals go through a rigorous assessment and only substantiated grounds are considered."
   ],
   "gap": "Backdating of cover and appeals made on behalf of family members have no FAQ. Check with the team before advising.",
   "faqs": [
    "I am born in 1980 or later and am terminally ill but do not have severe disability. Can I be exempted from CareShield Life?",
    "I am born in 1980 or later. If I have private insurance coverage similar to CareShield Life, can I be exempted from universal coverage?",
    "I am going to be 29 years old when CareShield Life is launched. If I have severe disability, will I be able to join the scheme earlier?",
    "Can I opt out from CareShield Life?",
    "Can I opt out of the upcoming CareShield Life enhancement?"
   ],
   "links": [
    [
     "Opt-out / terminate CareShield Life or ElderShield",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/stop-careshield-life-or-eldershield-cover"
    ]
   ],
   "related": [
    "who-covered",
    "opt-out"
   ],
   "cats": [
    "Coverage › Appeal (Backdating of Cover/Mandatory Cohort/Family Members)"
   ],
   "keys": "exempt exemption appeal backdate terminally ill private insurance"
  },
  {
   "id": "premium-amount",
   "stage": "paying",
   "title": "How much, how it is worked out, for how long",
   "sch": [
    "cshl"
   ],
   "summary": "Premiums are personal: they depend on age joined, gender, cohort and, for those born 1979 or earlier, ElderShield history. The Premium Checker gives the exact figure.",
   "say": [
    "Where to look: the Premium Checker (Singpass) shows personalised premiums and subsidies for this policy year and upcoming ones.",
    "Calculated so each age cohort pays enough to support its own expected payouts. The scheme is run not-for-profit by the Government.",
    "Duration: joined at 58 or younger, pay until age 67 (including the year they turn 67). Joined at 59 or older, pay for 10 years.",
    "Increases: yearly, to support payout growth. For 2026 to 2030 increases are moderated to about $38 on average and no more than $75 a year (excluding GST).",
    "The lifetime total cannot be quoted. The schedule is not fixed and the Council reviews it.",
    "GST applies to MediShield Life, CareShield Life and ElderShield premiums, like other insurance.",
    "Rebates: depend on Council recommendations. Fewer claims than expected may bring rebates or lower future premiums; more claims may push premiums up.",
    "Born 1979 or earlier: premium = base premium, and sometimes a catch-up component."
   ],
   "watch": [
    "The Premium Checker can differ from the welcome letter. The letter is accurate as at the date on page 1; the Checker shows the latest, for example after a successful subsidy appeal."
   ],
   "faqs": [
    "How are CareShield Life premiums calculated?",
    "How do I check the premiums payable under CareShield Life?",
    "Where can I find my CareShield Life premiums information?",
    "Why do CareShield Life premiums increase over time, and by how much annually?",
    "How often will the CareShield Life premiums increase?",
    "How much will my CareShield Life Premiums increase and what happens after I reach 67?",
    "How long do I have to pay for CareShield Life Premiums?",
    "What will be my total CareShield Life premiums payable for the full premium payment term?",
    "Why is my CareShield Life premiums payable until age 67?",
    "Why not extend premium payment for life for CareShield Life, like MediShield Life?",
    "I am born in 1979 or earlier. What are my CareShield Life premiums?",
    "Why are CareShield Life premiums for older cohorts higher than younger cohorts?",
    "Why are CareShield Life premiums for females higher although their payouts are the same as males?",
    "What is the rationale for imposing Goods and Services Tax (GST) on MediShield Life, CareShield Life and ElderShield premiums?",
    "How much will my CareShield Life premiums be after the premium changes take place, and how much would it increase by?",
    "What will be the rate of premium and payout increases for CareShield Life?",
    "I am born in 1979 or earlier. If I join CareShield Life, will I get premium rebates?",
    "Will I continue getting ElderShield premium rebates in the future?",
    "Why is the premium information shown on the CareShield Life Premium Checker e-Service different from details in my welcome letter?"
   ],
   "links": [
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ],
    [
     "CareShield Life Council (MOH)",
     "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/careshield-life/careshield-life-council"
    ]
   ],
   "related": [
    "catch-up",
    "help-ladder",
    "how-to-pay",
    "whats-new-2026"
   ],
   "cats": [
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "keys": "premium cost how much rate increase gst 67 gender female"
  },
  {
   "id": "catch-up",
   "stage": "paying",
   "title": "The catch-up component (older cohorts, the ElderShield link)",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "People born 1979 or earlier pay a base premium plus, for some, a flat catch-up amount over 10 years. Whether it applies depends on their ElderShield history, which is why this topic sits between the two files.",
   "say": [
    "Catch-up applies if, before joining CSHL, the member was: an ES300 insured; not insured under ES or joined ES late; an ES400 insured who joined CSHL from 1 Jan 2022; or on a reduced paid-up ES policy.",
    "Why: it keeps them consistent with others in the same cohort who were insured under ES400 throughout and joined CSHL earlier.",
    "It is a flat amount spread over 10 years, on top of the base premium. It also applies to foreigners who became SC/PR from 1 Oct 2020.",
    "It is not subsidised, to keep subsidies equal across the group. Those who cannot afford it can get APS.",
    "Continuously insured under ES? Past ES premiums are taken into account, lowering the premium. ES lapsed through non-payment? The premium is worked out as for an uninsured person.",
    "Base premium: paid from the age they join to 67, or for 10 years if they join at 59 or older. It rises regularly, then stays flat after 67 if still payable."
   ],
   "faqs": [
    "What is the catch-up component under CareShield Life?",
    "I am born in 1979 or earlier. Why are there no subsidies for the catch-up component when it looks so substantial?",
    "I was born in 1979 or earlier. Will the ElderShield premiums I have already paid be taken into account when I join CareShield Life?",
    "I am born in 1979 or earlier. What are my CareShield Life premiums?",
    "I was born in 1979 or earlier. If I paid ElderShield 300/400 premiums previously but my policy lapsed due to non-payment of premiums, how will my CareShield Life premiums be affected?"
   ],
   "links": [
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "es-vs-cshl",
    "premium-amount",
    "help-ladder"
   ],
   "cats": [
    "Premium Computation and Collection › Premium amount and rates",
    "Policy Servicing › Reinstatement of cover"
   ],
   "keys": "catch up catchup base premium es300 reduced paid-up"
  },
  {
   "id": "help-ladder",
   "stage": "paying",
   "title": "The help-with-premiums ladder",
   "sch": [
    "cshl"
   ],
   "summary": "Members confuse these layers most. Think of help applied from broad to targeted. The gross premium, less help, gives the net premium that comes out of MediSave.",
   "steps": [
    "Transitional Support (2026 to 2030): for everyone whose gross premium goes up. Broad-based, not means-tested.",
    "Premium Subsidies (PS): means-tested, up to 30% of the premium for lower- and middle-income households. PRs get half the SC rate.",
    "Participation Incentives (PI): only for SC born 1979 or earlier who were covered by 31 Dec 2024. Spread over 10 years.",
    "MediSave pays what is left. Family can pay from their MediSave or top up the member’s.",
    "Additional Premium Support (APS): last resort for those who still cannot afford it and lack family support. The Government invites them to apply."
   ],
   "say": [
    "No one loses CareShield Life cover because they cannot pay premiums.",
    "Self-employed, retired or unemployed before 67? The same help applies: subsidies for lower- and middle-income members, then APS.",
    "ElderShield has none of this. It is optional, has no subsidies, and can be cancelled at any time."
   ],
   "faqs": [
    "What Government subsidies or incentives are available to help me with my CareShield Life premiums?",
    "How is the Government Transitional support different from the CareShield Life premium subsidy?",
    "Where can I get help if I cannot afford my CareShield Life premiums?",
    "If I am self-employed/retired/become unemployed before age 67, will I be able to afford CareShield Life premiums?",
    "Will I get higher subsidies if I am of an older age since my CareShield Life premiums will be higher?"
   ],
   "links": [
    [
     "CareShield Life premiums & subsidies",
     "https://www.cpf.gov.sg/member/healthcare-financing/careshield-life/careshield-premiums-and-subsidies"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "ps",
    "pi",
    "aps",
    "how-to-pay"
   ],
   "cats": [
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
    "Premium Support and Subsidies › Request for assistance to pay premiums"
   ],
   "keys": "subsidy transitional ps ts pi aps ladder help afford"
  },
  {
   "id": "ps",
   "stage": "paying",
   "title": "Premium Subsidies and the household check",
   "sch": [
    "cshl"
   ],
   "summary": "Means-tested help of up to 30%. Eligibility is decided by a household check, and one household member refusing access can block it for everyone.",
   "say": [
    "Up to 30% of the base premium, for lower- to middle-income households. Up to two-thirds of resident households are eligible.",
    "Assessed on household per capita income, the Annual Value (AV) of the home and the number of properties. Lower and lower-middle income with no more than one property and AV up to $31,000 qualify.",
    "PRs get half the SC rates, in line with MediShield Life.",
    "Older members get larger annual subsidies in dollar terms since their premiums are higher; still up to 30% for those born 1979 or earlier.",
    "ES holders who upgrade get subsidies. ES itself gets none.",
    "No subsidy on the catch-up component.",
    "The 2025 AV revision does not hurt eligibility: AVs as at 2024 are used for 2025.",
    "Each household member chooses whether to allow access to their financial information. If anyone disallows it, no subsidy can be assessed for any household member.",
    "To change that: Household Check e-Service (“login to access your household information”) or the Healthcare Hotline 1800 222 3399 (pick a language, then press 3, then 2).",
    "Can only view household info? Another member’s changes are being processed. They must wait, or write to CPF or call the hotline.",
    "A recent subsidy appeal may still be processing and not show on the Premium Checker."
   ],
   "faqs": [
    "How will Singaporeans' eligibility for CareShield Life means-tested premium subsidies be assessed?",
    "What is the difference in treatment between Singapore Citizens and Permanent Residents for CareShield Life premium subsidies?",
    "Will the 2025 increase in Annual Value (AV) impact my eligibility for CareShield Life Premium Subsidies?",
    "Will I get higher subsidies if I am of an older age since my CareShield Life premiums will be higher?",
    "Will ElderShield 300 or 400 insureds receive premium subsidies if they upgrade to CareShield Life?",
    "Why are Government subsidies provided for CareShield Life and not for ElderShield?",
    "I had previously disallowed access to my financial information for the purpose of CareShield Life Premium Subsidies eligibility checks. How do I change this arrangement?",
    "I logged in to the Household Check e-Service but could only view my household information. How do I make changes to my household information?",
    "What should I do if one of my household members has disallowed access to his financial information for the purpose of CareShield Life Premium Subsidies eligibility checks?",
    "I have recently submitted an appeal for CareShield Life Premium Subsidies. Why is it not reflected in the CareShield Life Premium Checker?",
    "What Government subsidies or incentives are available to help me with my CareShield Life premiums?"
   ],
   "links": [
    [
     "Household Check e-Service",
     "https://medishieldlife.moh.gov.sg/"
    ],
    [
     "CareShield Life premiums & subsidies",
     "https://www.cpf.gov.sg/member/healthcare-financing/careshield-life/careshield-premiums-and-subsidies"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "help-ladder",
    "pi",
    "aps"
   ],
   "cats": [
    "Premium Support and Subsidies › Eligibility for Premium Subsidies (PS, TS)",
    "Premium Support and Subsidies › Appeal for higher Premium Subsidies (PS)"
   ],
   "keys": "subsidy means test household check income annual value av disallow appeal"
  },
  {
   "id": "pi",
   "stage": "paying",
   "title": "Participation Incentives (PI)",
   "sch": [
    "cshl"
   ],
   "summary": "A Government sweetener for older SC who joined early. If the member joined after 31 Dec 2024 the answer is $0.",
   "tables": [
    {
     "title": "Covered by 31 Dec 2023 (SC born 1979 or earlier)",
     "head": [
      "Birth year",
      "Annual PI",
      "Total over 10 years",
      "Extra for Merdeka/Pioneer Generation"
     ],
     "rows": [
      [
       "1975–1979",
       "$50",
       "$500",
       "n.a."
      ],
      [
       "1970–1974",
       "$100",
       "$1,000",
       "n.a."
      ],
      [
       "1965–1969",
       "$150",
       "$1,500",
       "n.a."
      ],
      [
       "1960–1964",
       "$200",
       "$2,000",
       "n.a."
      ],
      [
       "Before 1960",
       "$250",
       "$2,500 ($4,000 for MG/PG)",
       "$1,500"
      ]
     ]
    },
    {
     "title": "Covered 1 Jan to 31 Dec 2024",
     "head": [
      "Birth year",
      "Annual PI",
      "Total over 10 years",
      "Extra for Merdeka/Pioneer Generation"
     ],
     "rows": [
      [
       "1975–1979",
       "$37.50",
       "$375",
       "n.a."
      ],
      [
       "1970–1974",
       "$75",
       "$750",
       "n.a."
      ],
      [
       "1965–1969",
       "$112.50",
       "$1,125",
       "n.a."
      ],
      [
       "1960–1964",
       "$150",
       "$1,500",
       "n.a."
      ],
      [
       "Before 1960",
       "$187.50",
       "$1,875 ($3,000 for MG/PG)",
       "$1,125"
      ]
     ]
    }
   ],
   "say": [
    "Who: Singapore Citizens born 1979 or earlier who joined and were covered by 31 Dec 2024. PRs and later joiners get $0.",
    "How: spread equally over 10 years to offset the annual premium. It cannot be taken as a lump sum.",
    "The member’s own figure is on the Premium Checker."
   ],
   "watch": [
    "“API” is thought to mean Additional Participation Incentive. That is an unconfirmed guess carried over from the earlier guide."
   ],
   "faqs": [
    "Why is my participation incentive $0 for my CareShield Life premiums?",
    "I am a Singapore Citizen born in 1979 or earlier and was covered under CareShield Life by 31 December 2024. How much CareShield Life participation incentives am I eligible for?",
    "I am born in 1979 or earlier. Can I choose to receive the CareShield Life participation incentive as one lump sum?"
   ],
   "links": [
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "help-ladder",
    "ps"
   ],
   "cats": [
    "Premium Support and Subsidies › Eligibility for Participation Incentives (PI, API)"
   ],
   "keys": "participation incentive pi api zero $0 lump sum merdeka pioneer"
  },
  {
   "id": "aps",
   "stage": "paying",
   "title": "Additional Premium Support (APS)",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "The last-resort safety net. Members are invited to apply; they do not need to apply early.",
   "say": [
    "For those who cannot afford premiums after subsidies and MediSave and have too little family support.",
    "No need to apply ahead of time. They are invited when MediSave is insufficient and family support is limited. There is also an online application that does not need Singpass.",
    "APS granted for MediShield Life carries over to CareShield Life automatically for the same validity period. The premium notification letter shows APS status.",
    "Not eligible if they hold an Integrated Shield Plan or a CSHL/ES Supplement, or pay someone else’s.",
    "A Welcome Package that says they were “previously invited to apply for APS”: they had an outstanding MediShield Life premium, so a letter (Ref: APCINV) invited them earlier.",
    "Help line: Healthcare Hotline 1800 222 3399."
   ],
   "gap": "Appeal on an APS outcome has no FAQ. Check with the team before advising.",
   "faqs": [
    "I am covered under CareShield Life. What is Additional Premium Support and who can qualify?",
    "How can I apply for Additional Premium Support to pay for my CareShield Life premiums?",
    "Where can I find more information on Additional Premium Support?",
    "I am currently receiving Additional Premium Support under MediShield Life. Would I be given Additional Premium Support under CareShield Life?",
    "Why did the CareShield Life Welcome Package state that I was previously invited to apply for Additional Premium Support?",
    "Where can I get help if I cannot afford my CareShield Life premiums?",
    "If there are insufficient funds in my MediSave Account, can I use my Ordinary Account/Special Account monies to pay for my MediShield Life, CareShield Life or ElderShield premiums?"
   ],
   "links": [
    [
     "Apply for APS (no Singpass needed)",
     "https://www.cpf.gov.sg/APSapplication"
    ],
    [
     "APS information (ask.gov.sg)",
     "https://ask.gov.sg/moh?topic=MediShield%20Life&subtopic=Additional%20Premium%20Support#content"
    ]
   ],
   "related": [
    "help-ladder",
    "how-to-pay",
    "supp"
   ],
   "cats": [
    "Premium Support and Subsidies › APS outcome",
    "Premium Support and Subsidies › Appeal on APS Outcome",
    "Premium Support and Subsidies › Request for assistance to pay premiums"
   ],
   "keys": "aps additional premium support cannot afford invited isp integrated shield"
  },
  {
   "id": "how-to-pay",
   "stage": "paying",
   "title": "How premiums are paid: MediSave, top-up, GIRO, transfer",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "Premiums are paid from MediSave. If MediSave is not enough there are routes, but the Ordinary and Special Accounts are not one of them.",
   "say": [
    "Default: fully paid by MediSave, automatically. First premium within 2 months of the policy start; renewals within 1 month of the policy anniversary, once a year.",
    "Ordinary and Special Account money cannot be used. If MediSave is short: top up MediSave online, have a family member take over as payer, or set up GIRO.",
    "GIRO needs a participating Singapore bank account. Renewal premiums are deducted annually after cover renews. Overdue premiums from earlier years go in monthly instalments. There is no instalment option for renewal premiums.",
    "Overseas, renounced citizenship or no Singpass: telegraphic transfer. The FAQ gives the reference format and bank details. Include total outstanding and bank charges; charge type OUR.",
    "MediSave top-ups usually show immediately (check after 5 working days if not; transfers can take about 3 working days). Look for “VOLUNTARY CON TO MEDISAVE A/C” or “HEALTHCARE TOP-UP”.",
    "MediSave is also used for hospital bills, so top up enough for every deduction.",
    "Self-employed: topping up for healthcare premiums does not offset the MediSave payable under the Self-Employed scheme.",
    "Taking over someone’s premiums and getting “MediSave insufficient”: the balance is reserved for the payer’s own upcoming premiums. Top up or ask another family member.",
    "Worried about the Basic Healthcare Sum? Premiums stop at 67, so the effect is not expected to be significant. Topping up is encouraged, not required."
   ],
   "faqs": [
    "How can I view and pay my/my dependant(s)'s CareShield Life/ElderShield and MediShield Life premiums?",
    "When do I have to pay for my CareShield Life premiums?",
    "I have applied for CareShield Life and my application has been approved. When will my premiums be deducted?",
    "If there are insufficient funds in my MediSave Account, can I use my Ordinary Account/Special Account monies to pay for my MediShield Life, CareShield Life or ElderShield premiums?",
    "How do I top up my MediSave for MediShield Life, CareShield Life and ElderShield premiums, and how can I check if it has been successfully processed?",
    "If I top up my MediSave to pay my Healthcare premiums, does it count towards the MediSave amount that a self-employed person needs to contribute?",
    "What if CareShield Life premiums result in me not meeting the Basic Healthcare Sum (BHS)?",
    "If I am self-employed/retired/become unemployed before age 67, will I be able to afford CareShield Life premiums?",
    "I am paying ElderShield premiums for myself and my dependants. How do I check the transaction details?",
    "Why is there an error message stating that my MediSave balance is insufficient to take over paying an insured's CareShield Life/ElderShield/MediShield Life premiums?"
   ],
   "links": [
    [
     "Top up MediSave Account",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
    ],
    [
     "Change Payer e-Service",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
    ],
    [
     "Set up GIRO for healthcare premiums",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
    ],
    [
     "MediSave transaction history",
     "https://www.cpf.gov.sg/member/ds/statements/transaction-history"
    ],
    [
     "Healthcare dashboard",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
    ]
   ],
   "related": [
    "payers",
    "arrears",
    "help-ladder",
    "aps"
   ],
   "cats": [
    "Payment Arrangement › Payment mode/options to pay premiums",
    "Payment Arrangement › Top-up of MediSave to pay premiums",
    "Payment Arrangement › Deduction/Recovery of Premiums",
    "Premium Computation and Collection › Premium deduction"
   ],
   "keys": "medisave pay giro top up transfer oa sa ordinary special bhs telegraphic deduction"
  },
  {
   "id": "payers",
   "stage": "paying",
   "title": "Paying for family: payers, changing payer, stopping",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "A premium payer is whoever pays, often a family member using their MediSave. These cover taking over, changing, and stopping.",
   "say": [
    "Who can pay: their own MediSave for themselves and their spouse, parent, child, sibling or grandparent. Others (uncles, aunts, nephews, nieces, in-laws) if they depend financially on the payer and they and their family lack the MediSave.",
    "How: the Change Payer e-Service, with the payer’s own Singpass.",
    "Paying for family? Their policy shows on your Healthcare dashboard in the “CareShield Life/ElderShield” section, with premiums and subsidies.",
    "If the payer dies, the insured automatically becomes their own payer. If MediSave is short they are told to top up or ask family to Change Payer.",
    "Overseas or renounced citizenship: the family payer must be an SC or PR.",
    "“You are not paying for this family member” error when stopping: you are not the payer; or the family member has an Integrated Shield Plan or Supplement (contact the insurer); or coverage is inactive."
   ],
   "gap": "Requests for refunds of premiums paid in error or after leaving the scheme have no FAQ.",
   "faqs": [
    "Can I use my MediSave to pay MediShield Life, CareShield Life and/or ElderShield premiums for my family members?",
    "I am paying the premium for my family member’s CareShield Life policy. How can I find out more information about their policy?",
    "What happens to my MediShield Life/CareShield Life cover if my premium payer passes away?",
    "Why is there an error message stating that I am not paying for my family member's CareShield Life/ElderShield/MediShield Life coverage when I tried to stop premium payment?",
    "Why is there an error message stating that my MediSave balance is insufficient to take over paying an insured's CareShield Life/ElderShield/MediShield Life premiums?"
   ],
   "links": [
    [
     "Change Payer e-Service",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
    ],
    [
     "Healthcare dashboard",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
    ]
   ],
   "related": [
    "how-to-pay",
    "death",
    "overseas"
   ],
   "cats": [
    "Payer Management › Appeal to pay premiums for other family members",
    "Payer Management › Auto-switch premium payer or Family Support",
    "Payer Management › Cease/stop premium payment and request for refunds",
    "Payment Arrangement › Change of premium payer to pay for outstanding/current premiums"
   ],
   "keys": "payer family change payer take over stop paying"
  },
  {
   "id": "es-premiums",
   "stage": "paying",
   "title": "ElderShield premiums",
   "sch": [
    "es"
   ],
   "summary": "Simpler than CareShield Life: set by age joined, no subsidies, no increases with age.",
   "say": [
    "Based on age at joining and do not increase with age.",
    "The last premium is for the policy year that starts while the insured is still aged 65. A member who turned 65 last year can still be asked for one more premium.",
    "Paid from MediSave; OA/SA cannot be used. Same payment routes as CareShield Life.",
    "Unpaid: if the minimum required premiums were paid the policy becomes paid-up (payout depends on premiums paid); otherwise it is terminated. The FAQ also warns that the policy lapses if premiums are not paid, so urge a top-up or Change Payer quickly.",
    "No premiums while receiving ES payouts, if the disability status does not change.",
    "Rebates only happen if ES claims turn out lower than projected. Since Nov 2021 the Government runs ES; premiums and benefits are unchanged.",
    "GST applies."
   ],
   "faqs": [
    "How much is my ElderShield premium?",
    "When is the last premium payable for ElderShield? Why did I receive a request for premiums payment after I turned 65 last year?",
    "What happens when there are insufficient funds in my MediSave to pay for my ElderShield premium?",
    "What happens if I do not pay the premiums I owe for ElderShield?",
    "Do I still need to pay premiums if I am eligible for ElderShield benefit claim payout?",
    "Will I continue getting ElderShield premium rebates in the future?",
    "Will my ElderShield premiums change due to Government administration?",
    "I am paying ElderShield premiums for myself and my dependants. How do I check the transaction details?",
    "What is the rationale for imposing Goods and Services Tax (GST) on MediShield Life, CareShield Life and ElderShield premiums?"
   ],
   "links": [
    [
     "ElderShield premiums (CPF)",
     "https://www.cpf.gov.sg/member/healthcare-financing/eldershield"
    ],
    [
     "Top up MediSave Account",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
    ],
    [
     "Change Payer e-Service",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
    ]
   ],
   "related": [
    "es-vs-cshl",
    "unpaid",
    "how-to-pay"
   ],
   "cats": [
    "Premium Computation and Collection › Premium amount and rates"
   ],
   "keys": "eldershield es premium paid-up lapse 65 rebate"
  },
  {
   "id": "scheme-cshl",
   "stage": "start",
   "title": "CareShield Life: the one-page summary",
   "sch": [
    "cshl"
   ],
   "summary": "Singapore’s national long-term disability insurance, launched in 2020. If the person ever becomes severely disabled, it pays a monthly cash amount for as long as they stay that way, even for life.",
   "say": [
    "Test: unable to do 3 or more of 6 ADLs, assessed by an MOH-accredited assessor.",
    "Who: SC/PR born 1980 or later are covered automatically at 30. Born 1979 or earlier can join if they have no disability (from 1 Jan 2026). Foreigners cannot join.",
    "Payout: $689 a month for someone who starts claiming in 2026, rising 4% a year to 2030. It is locked at the year the claim starts and stops rising at a successful claim or age 67.",
    "Premiums: yearly, from MediSave, until 67 (10 years if they join at 59 or older). Set by age, gender and, for older cohorts, ES history.",
    "Help: Transitional Support, means-tested Premium Subsidies (up to 30%), Participation Incentives for older SC who joined by 31 Dec 2024, then Additional Premium Support. Nobody loses cover because they cannot pay.",
    "Claim: book an assessment with an MOH-accredited assessor, then apply on AIC eFASS. The first CSHL assessment fee is waived.",
    "Add-ons: MediSave Care (cash from MediSave) and optional private Supplements.",
    "No death benefit. A premium refund happens only if the insured dies within 60 days of the first policy year starting."
   ],
   "faqs": [
    "What is CareShield Life?",
    "What is the monthly payout amount for CareShield Life?",
    "Is CareShield Life mandatory and do I have to join it?",
    "How are CareShield Life premiums calculated?",
    "When am I eligible to make a CareShield Life/ElderShield claim?"
   ],
   "related": [
    "big-picture",
    "who-covered",
    "premium-amount",
    "payout",
    "claim-steps"
   ],
   "cats": [
    "Coverage › Application"
   ],
   "keys": "careshield life cshl summary overview"
  },
  {
   "id": "scheme-es",
   "stage": "start",
   "title": "ElderShield: the one-page summary",
   "sch": [
    "es"
   ],
   "summary": "The older severe-disability scheme, launched by MOH in September 2002 and now closed to new applicants. Existing insureds keep their cover; those born 1979 or earlier can upgrade to CareShield Life.",
   "say": [
    "Offered to SC/PR with a MediSave Account who turned 40 in 2019 or earlier.",
    "Payout: ES300 (joined Sep 2002 to Aug 2007) pays $300 a month for up to 60 months. ES400 (joined from Sep 2007) pays $400 a month for up to 72 months.",
    "Cover lasts for life once premiums are completed (Regular Premium Plan) or the lump sum is paid (Single Premium Plan). The payout is what is capped: total claims up to 60 or 72 months.",
    "Same severe disability test and same claim route (assessment, then AIC eFASS) as CareShield Life.",
    "Premiums: by age joined, do not rise with age, last one in the policy year that starts at age 65. No Government subsidies.",
    "Since Nov 2021 the Government (CPF Board and AIC) runs ES instead of the insurers. Premiums and benefits stayed the same. ES Supplements are still sold and serviced by Singlife, Great Eastern and Income.",
    "No switching between ES300 and ES400. To end ES use the Termination e-Service, but all benefits are lost and a medical assessment may be needed to join CareShield Life later.",
    "Can upgrade to CareShield Life if born 1979 or earlier with no disability (see the ElderShield vs CareShield Life topic)."
   ],
   "faqs": [
    "What is ElderShield?",
    "How do I join ElderShield?",
    "How long will I be covered under ElderShield?",
    "How do I terminate my ElderShield policy?",
    "Can I upgrade or downgrade between ElderShield 300 and ElderShield 400?",
    "What are the benefits of the ElderShield scheme?",
    "How do I make an ElderShield claim?",
    "Will ElderShield insurers continue selling Supplements?"
   ],
   "links": [
    [
     "ElderShield premiums (CPF)",
     "https://www.cpf.gov.sg/member/healthcare-financing/eldershield"
    ],
    [
     "Opt-out / terminate CareShield Life or ElderShield",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/stop-careshield-life-or-eldershield-cover"
    ]
   ],
   "related": [
    "es-vs-cshl",
    "es-premiums",
    "claim-steps",
    "supp"
   ],
   "cats": [
    "Coverage › Application"
   ],
   "keys": "eldershield es300 es400 summary overview older scheme"
  },
  {
   "id": "unpaid",
   "stage": "behind",
   "title": "What happens if premiums are not paid",
   "sch": [
    "cshl",
    "es",
    "supp"
   ],
   "summary": "The answer differs by scheme. CareShield Life is designed so that cover is not lost over inability to pay; ElderShield and Supplements can lapse.",
   "tables": [
    {
     "head": [
      "Scheme",
      "If premiums are not paid"
     ],
     "rows": [
      [
       "CareShield Life",
       "Cover does not lapse because of inability to pay: means-tested subsidies, then APS, so nobody loses coverage. If MediSave is short the member is invited to apply for APS, or can top up or have family take over."
      ],
      [
       "ElderShield",
       "The policy lapses if premiums are not paid. If the minimum required premiums were paid it becomes paid-up (payout depends on premiums paid); otherwise it is terminated."
      ],
      [
       "Supplements",
       "Lapse if premiums stop. Check the policy with the insurer."
      ],
      [
       "MediSave Care",
       "No premiums."
      ]
     ]
    }
   ],
   "say": [
    "First check whether MediSave is enough. Routes: top up MediSave, Change Payer, GIRO.",
    "APS is not available to people who hold a Supplement or an Integrated Shield Plan."
   ],
   "gap": "Demand Notes, enforcement measures for non-payment, deadline extensions or instalment plans, and interest or penalty waivers have no FAQ in the four files. Check with the team before advising.",
   "faqs": [
    "If there are insufficient funds in my MediSave Account, can I use my Ordinary Account/Special Account monies to pay for my MediShield Life, CareShield Life or ElderShield premiums?",
    "What happens when there are insufficient funds in my MediSave to pay for my ElderShield premium?",
    "What happens if I do not pay the premiums I owe for ElderShield?",
    "What happens if I stop paying for my Supplements if I join CareShield Life?",
    "If I am self-employed/retired/become unemployed before age 67, will I be able to afford CareShield Life premiums?",
    "How can I apply for Additional Premium Support to pay for my CareShield Life premiums?",
    "Where can I get help if I cannot afford my CareShield Life premiums?"
   ],
   "related": [
    "how-to-pay",
    "aps",
    "arrears",
    "lapse-reinstate"
   ],
   "cats": [
    "Premium Enforcement › Enforcement measures for non-payment of CSHL premiums",
    "Premium Enforcement › Demand Notes (e.g. undelivered, returned demand notes)",
    "Premium Enforcement › Extension of payment deadline/instalment plan",
    "Premium Enforcement › Waiver of interest/penalty imposed on CSHL premium arrears"
   ],
   "keys": "unpaid arrears overdue demand note penalty interest enforcement lapse miss payment"
  },
  {
   "id": "arrears",
   "stage": "behind",
   "title": "Arrears, GIRO and instalments",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "What the files say about clearing overdue premiums. The rest (demand notes, waivers, GIRO termination) is not covered.",
   "say": [
    "GIRO needs a participating Singapore bank account. Overdue premiums from previous policy years are deducted in monthly instalments. Renewal premiums are deducted yearly, with no instalment option.",
    "Taking over someone’s overdue premiums needs the Change Payer e-Service. “MediSave balance insufficient” means the balance is reserved for the payer’s own upcoming premiums. Top up or ask another family member.",
    "Overseas or no Singpass: telegraphic transfer. The FAQ has the reference format and bank details.",
    "If the member cannot afford it: subsidies, then APS."
   ],
   "gap": "Setting up or stopping GIRO for arrears, rejected GIRO deductions, demand notes, deadline extensions and penalty waivers have no FAQ. Check with the team.",
   "faqs": [
    "How can I view and pay my/my dependant(s)'s CareShield Life/ElderShield and MediShield Life premiums?",
    "Why is there an error message stating that my MediSave balance is insufficient to take over paying an insured's CareShield Life/ElderShield/MediShield Life premiums?",
    "How can I apply for Additional Premium Support to pay for my CareShield Life premiums?"
   ],
   "links": [
    [
     "Set up GIRO for healthcare premiums",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
    ],
    [
     "Change Payer e-Service",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
    ],
    [
     "Top up MediSave Account",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
    ]
   ],
   "related": [
    "unpaid",
    "how-to-pay",
    "payers"
   ],
   "cats": [
    "Payment Arrangement › GIRO applications to pay CSHL Premium arrears (apply or to terminate GIRO)",
    "Premium Enforcement › Extension of payment deadline/instalment plan"
   ],
   "keys": "giro arrears instalment overdue demand"
  },
  {
   "id": "opt-out",
   "stage": "servicing",
   "title": "Opting out: who can and who cannot",
   "sch": [
    "cshl",
    "es"
   ],
   "summary": "Mostly “no”. The only real window is the 60-day free-look period for people who chose to join.",
   "tables": [
    {
     "head": [
      "Group",
      "Can they opt out?"
     ],
     "rows": [
      [
       "Born 1980 or later",
       "No. Universal and compulsory, no exemption."
      ],
      [
       "Born 1970–1979 on ES400, auto-enrolled from 1 Dec 2021",
       "No. The deadline was 31 Dec 2023. A welcome package went out in Nov 2021. Requests after the deadline cannot be accepted."
      ],
      [
       "Born 1979 or earlier who joined by choice",
       "Within the 60-day free-look period from commencement: yes. They get a full premium refund and go back to their original ES300/400. Processed after one working day; they can check “Activities”. After the period: no."
      ],
      [
       "Foreigners who became SC/PR (born 1979 or earlier)",
       "Compulsory. They can only appeal through the Opt-out e-Service, with substantiated grounds."
      ],
      [
       "Anyone, from the 2026 enhancement",
       "No. The enhancement is standard for all policyholders."
      ]
     ]
    }
   ],
   "say": [
    "Cannot afford it? That is not a ground. Subsidies and APS exist, so nobody loses cover.",
    "ES: can be terminated through the Termination e-Service, but all benefits are lost and a medical assessment may be needed to join CareShield Life later. The Government encourages keeping ES.",
    "There is no downgrade from CareShield Life to ES outside the free-look opt-out."
   ],
   "faqs": [
    "Can I opt out from CareShield Life?",
    "I am born in 1979 or earlier. Can I opt out from the CareShield Life scheme after joining (e.g. if I cannot afford the premiums)?",
    "If I am currently on ElderShield 300/400 and choose to upgrade to CareShield Life, can I opt out or downgrade to ElderShield 300/400 subsequently?",
    "I have applied to opt out of CareShield Life as I belong to the optional group (i.e. born in 1979 or earlier) and the cover is still within my free-look period. When will my application be approved?",
    "I just received my CareShield Life (CSHL) renewal letter. I do not remember receiving any notifications about being enrolled into CSHL and note that my free-look-period (FLP) has ended. Can I still opt out of the scheme?",
    "Can I opt out of the upcoming CareShield Life enhancement?",
    "How do I terminate my ElderShield policy?",
    "Can I upgrade or downgrade between ElderShield 300 and ElderShield 400?"
   ],
   "links": [
    [
     "Opt-out / terminate CareShield Life or ElderShield",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/stop-careshield-life-or-eldershield-cover"
    ],
    [
     "Activities (application status)",
     "https://www.cpf.gov.sg/Activities"
    ]
   ],
   "related": [
    "es-vs-cshl",
    "exemption-appeal",
    "lapse-reinstate"
   ],
   "cats": [
    "Policy Servicing › Opt-out request from SC/PR",
    "Policy Servicing › Termination/Cancellation of cover for non-SC/PR"
   ],
   "keys": "opt out cancel terminate free look flp withdraw leave"
  },
  {
   "id": "lapse-reinstate",
   "stage": "servicing",
   "title": "Lapse and reinstatement",
   "sch": [
    "cshl",
    "es",
    "supp"
   ],
   "summary": "There is only one reinstatement FAQ, about the effect of a lapsed ElderShield on CareShield Life premiums. The related facts are collected here.",
   "say": [
    "CareShield Life: cover does not lapse because the member cannot pay.",
    "ElderShield that lapsed through non-payment: the member is no longer covered. If they later join CSHL the premium is worked out as for an uninsured person (plus catch-up if applicable). APS can help.",
    "ElderShield with minimum premiums already paid becomes paid-up instead.",
    "Supplements lapse when premiums stop. The insurer’s policy terms apply."
   ],
   "gap": "How a lapsed policy is reinstated, and what must be paid to restart, is not covered by the FAQs.",
   "faqs": [
    "I was born in 1979 or earlier. If I paid ElderShield 300/400 premiums previously but my policy lapsed due to non-payment of premiums, how will my CareShield Life premiums be affected?",
    "What happens if I do not pay the premiums I owe for ElderShield?",
    "What happens if I stop paying for my Supplements if I join CareShield Life?"
   ],
   "related": [
    "catch-up",
    "unpaid",
    "es-premiums"
   ],
   "cats": [
    "Policy Servicing › Reinstatement of cover"
   ],
   "keys": "lapse reinstate reinstatement restart lapsed uninsured"
  },
  {
   "id": "death",
   "stage": "servicing",
   "title": "When the insured, or the payer, passes away",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "CareShield Life has no death benefit. If the premium payer dies, the insured takes over paying.",
   "say": [
    "Insured dies: the policy ends immediately and no payout is made.",
    "Premiums are refunded to the payer’s MediSave only if the insured dies within the first 60 days of the first policy year. After that, no refund.",
    "Death benefits are an option in some Supplement plans.",
    "Payer dies: the insured automatically becomes their own payer. If MediSave is short they are told to top up or ask a family member to take over with Change Payer."
   ],
   "faqs": [
    "What happens to my CareShield Life coverage upon death?",
    "What happens to my MediShield Life/CareShield Life cover if my premium payer passes away?",
    "Can lump sum payouts, death benefits or \"No-claim Bonus” be provided as incentives for healthy living or meeting the two Activities of Daily Living (ADLs) criteria under CareShield Life/ElderShield?"
   ],
   "links": [
    [
     "Change Payer e-Service",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
    ],
    [
     "Top up MediSave Account",
     "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
    ]
   ],
   "related": [
    "payers",
    "supp"
   ],
   "cats": [
    "Policy Servicing › Coverage status",
    "Payer Management › Auto-switch premium payer or Family Support"
   ],
   "keys": "death die passed away deceased refund death benefit"
  },
  {
   "id": "overseas",
   "stage": "servicing",
   "title": "Living overseas",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Premiums cannot be paused, but payouts follow the member abroad.",
   "say": [
    "CareShield Life premiums cannot be suspended for SC/PR living overseas.",
    "Payouts still reach members who live overseas. ES insureds can claim from abroad, even if they have moved permanently.",
    "Paying from overseas (or after renouncing citizenship): a family member who is an SC/PR takes over with Change Payer, a MediSave top-up, or a telegraphic transfer.",
    "Quarterly survivorship check: for people living overseas who receive payouts. AIC sends a letter with the review date and instructions.",
    "Payouts to an overseas bank account: members are encouraged to nominate a local account, which is the default.",
    "MediSave Care is paid in cash, and can be used locally or overseas.",
    "Hotline from overseas: +65 6222 3399, Mon to Fri 8.30am to 5.30pm (GMT+8)."
   ],
   "faqs": [
    "If I reside overseas, can I suspend my premium payment for CareShield Life?",
    "How can I view and pay my/my dependant(s)'s CareShield Life/ElderShield and MediShield Life premiums?",
    "Why do I have to go through the quarterly survivorship check for CareShield Life/ElderShield/MediSave Care?",
    "I would like my monthly payouts for CareShield Life/ElderShield/MediSave Care to be made to an overseas bank account. How can I do so?",
    "Can I withdraw under MediSave Care for overseas treatment?"
   ],
   "related": [
    "payers",
    "payout-account",
    "how-to-pay"
   ],
   "cats": [
    "Payer Management › Cease/stop premium payment and request for refunds",
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "keys": "overseas abroad suspend overseas bank survivorship renounce emigrate"
  },
  {
   "id": "letters-notifs",
   "stage": "servicing",
   "title": "Letters, notifications, dashboard and Premium Checker",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Most “website says one thing, letter says another” questions come down to timing.",
   "say": [
    "Since 24 Nov 2025, CSHL/ES policy and payout notices, and MSC withdrawal notices, go by email (if one is registered with CPF Board). Otherwise by SMS. CPF app push notifications are an extra. Contact details are updated under Account settings with Singpass.",
    "The aim is to flag premium deductions and withdrawals quickly, to guard against fraud.",
    "Application outcomes: email or SMS, and a letter only if neither is available.",
    "The CSHL/ES section of the Healthcare dashboard only shows the policy after the first premium is deducted, although cover has already started.",
    "A letter is accurate as at the date on its first page; the Premium Checker uses the latest information, so a recent successful appeal can make them differ.",
    "A Welcome Package that mentions APS: an outstanding MediShield Life premium triggered an earlier invitation.",
    "People auto-enrolled in Dec 2021 received a welcome package in Nov 2021."
   ],
   "faqs": [
    "Why am I receiving notifications for CareShield Life and ElderShield through email/SMS or at a contact detail different from what I expected?",
    "Why am I receiving notifications for MediSave Care through email/SMS or at a contact detail different from what I expected?",
    "I have applied for CareShield Life and my application has been approved. Why does it not show up on the Healthcare dashboard – “CareShield Life/ElderShield” section?",
    "Why is the premium information shown on the CareShield Life Premium Checker e-Service different from details in my welcome letter?",
    "Why did the CareShield Life Welcome Package state that I was previously invited to apply for Additional Premium Support?",
    "I have applied to join CareShield Life online. When would I be informed of my application outcome?",
    "I just received my CareShield Life (CSHL) renewal letter. I do not remember receiving any notifications about being enrolled into CSHL and note that my free-look-period (FLP) has ended. Can I still opt out of the scheme?"
   ],
   "links": [
    [
     "CPF account settings (contact details)",
     "https://www.cpf.gov.sg/member/ds/account-settings"
    ],
    [
     "Healthcare dashboard",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
    ],
    [
     "Premium Checker",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
    ]
   ],
   "related": [
    "waiting-cover",
    "premium-amount",
    "aps"
   ],
   "cats": [
    "Policy Servicing › Welcome Booklet and Renewal Notice",
    "Claims › Digital notification and website-related enquiries"
   ],
   "keys": "letter email sms notification welcome package renewal dashboard mismatch discrepancy contact details"
  },
  {
   "id": "scam",
   "stage": "servicing",
   "title": "Suspicious calls, scams and mis-selling",
   "sch": [
    "cshl",
    "supp"
   ],
   "summary": "The CareShield Life team does not phone members to ask for sensitive information.",
   "say": [
    "It does not request sensitive personal information by phone, does not use outside agencies to call members, and does not share contact details with outside agencies without consent.",
    "Tell the member not to give Singpass ID or password, bank details or card details. End the call and check with the organisation directly: 1800 222 3399 or Write to CPF.",
    "Supplements are optional private add-ons bought from insurers. CareShield Life cover does not depend on buying one, so a caller who says it is compulsory is wrong."
   ],
   "gap": "How a member’s number was obtained, and the complaint route for insurer mis-selling, are not covered by the FAQs.",
   "faqs": [
    "I have received a call claiming to be from CareShield Life. What should I do if this is a scam and my contact details are shared with external agencies?",
    "What are CareShield Life and ElderShield Supplement plans?"
   ],
   "links": [
    [
     "Write to CPF",
     "https://www.cpf.gov.sg/service/feedback"
    ]
   ],
   "related": [
    "supp"
   ],
   "cats": [
    "Supplements › Fraud/Mis-selling/Soliciting of Supp Plan",
    "Claims › Other matters"
   ],
   "keys": "scam fraud phone call cold call mis-selling singpass password"
  },
  {
   "id": "claim-steps",
   "stage": "claiming",
   "title": "How to claim: step by step",
   "sch": [
    "cshl",
    "es",
    "msc",
    "supp"
   ],
   "summary": "The route is the same for CareShield Life, ElderShield and MediSave Care. Supplements are claimed separately.",
   "steps": [
    "Confirm the person is covered and appears unable to do 3 or more of the 6 ADLs. Waiting for Cover is fine if cover was approved and the disability began on or after the approval date.",
    "Decide the scheme. ES insureds with severe disability claim from ES (they are not eligible to join CSHL). MediSave Care is a separate application but uses the same assessment.",
    "Book a severe disability assessment with an MOH-accredited assessor (list on the AIC website). Not during hospitalisation. Nursing home residents can have the home submit the Resident Assessment Form instead.",
    "Submit the application on AIC eFASS with Singpass. A caregiver can submit for a mentally incapacitated insured.",
    "Pay the assessment fee if required: $100 clinic-based, $250 non-clinic-based. CSHL: first assessment waived. ES and MSC: pay upfront, reimbursed if severe. MediSave cannot be used.",
    "Payouts arrive by the middle of each month. Set up the bank account (local account is the default).",
    "AIC may later ask for a disability review, and for a quarterly survivorship check if the member lives overseas."
   ],
   "say": [
    "Premiums stop while the member is severely disabled and their status is unchanged. If the disability began in the first policy year, the first premium is still due. Premiums restart if they no longer have severe disability.",
    "Supplements and private insurance: claimed with the insurer, separately. Contact the insurer for the process."
   ],
   "faqs": [
    "When am I eligible to make a CareShield Life/ElderShield claim?",
    "How do I make a CareShield Life claim?",
    "How do I make an ElderShield claim?",
    "How do I apply for MediSave Care?",
    "I am an existing ElderShield insured. If I am eligible for ElderShield claims, should I claim from ElderShield or join CareShield Life?",
    "Do I have to continue paying for CareShield Life premiums in the event of severe disability?",
    "Do I still need to pay premiums if I am eligible for ElderShield benefit claim payout?",
    "Can I submit a claim for both CareShield Life/ElderShield and MediSave Care concurrently?",
    "How do I claim from both CareShield Life or ElderShield and Supplements?"
   ],
   "links": [
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ],
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ]
   ],
   "related": [
    "severe-disability",
    "assessment",
    "payout",
    "payout-account",
    "stacking",
    "msc"
   ],
   "cats": [
    "Claims › General enquiries on claim process and eligibility"
   ],
   "keys": "claim apply how to claim efass assessment process steps"
  },
  {
   "id": "assessment",
   "stage": "claiming",
   "title": "The severe disability assessment",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "One assessment serves all the government schemes. These are the questions members ask about it.",
   "say": [
    "Who does it: MOH-accredited assessors. They are Singapore-registered doctors, occupational therapists, physiotherapists and registered nurses with specific training. The member’s own doctor only counts if on the AIC list; otherwise they book someone who is.",
    "Fees: $100 clinic-based, $250 non-clinic-based. CSHL: the first assessment is free whatever the result; later ones are reimbursed only if severe. ES and MSC: pay first, reimbursed if severe. AIC sends a letter on reimbursement. MediSave cannot pay.",
    "The same assessment is used by CareShield Life, MediSave Care, ElderShield, ElderFund and IDAPE.",
    "Not while in hospital: the condition may still be changing. Assessors in the community (such as GPs) assess after the condition stabilises.",
    "Nursing home residents can have the home submit the Resident Assessment Form instead. The home does not charge for it.",
    "The Government is exploring accepting equivalent assessments by treating professionals. MOH and AIC will publish more as it rolls out.",
    "Mental capacity: any SMC-registered doctor can assess it. Check with the assessor before booking. Complex cases may carry an additional fee.",
    "AIC can ask for a repeat assessment (disability review) to confirm continued eligibility. The letter explains how.",
    "Dementia does not automatically qualify."
   ],
   "faqs": [
    "Who are the MOH-accredited severe disability assessors for CareShield Life/ElderShield/MediSave Care and where can I find the list of assessors if I need to arrange an assessment?",
    "Can I be assessed by my own doctor or therapist for CareShield Life/ElderShield/MediSave Care claim eligibility?",
    "Do I need to pay for the CareShield Life/ElderShield/MediSave Care disability assessment?",
    "Can my MediSave be used to pay for severe disability assessments?",
    "Why am I unable to undergo a severe disability assessment for CareShield Life/ElderShield/MediSave Care during my hospitalisation?",
    "Does the nursing home charge for performing the Resident Assessment Form (RAF) for the applicant?",
    "Who should I approach at the nursing home should I need assistance with application for schemes to support long-term care costs?",
    "Are there alternative documents I can submit for CareShield Life/ElderShield/MediSave Care claims in place of a severe disability assessment?",
    "Can the pool of assessors for CareShield Life/ElderShield/MediSave Care be expanded to include Singapore-registered doctors, therapists or nurses?",
    "Can an MOH-accredited severe disability assessor certify the applicant’s mental capacity for CareShield Life/ElderShield/MediSave Care claims?",
    "I already went for a severe disability assessment recently, why is the Agency for Integrated Care (AIC) requesting me to go for another?",
    "Does having dementia automatically qualify an individual for CareShield Life/ElderShield claims?"
   ],
   "links": [
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ],
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ]
   ],
   "related": [
    "claim-steps",
    "severe-disability",
    "claim-appeal"
   ],
   "cats": [
    "Claims › General enquiries on claim process and eligibility",
    "Claims › Appeals (AIC)"
   ],
   "keys": "assessment assessor fee reimbursed raf resident assessment form hospital mental capacity review repeat"
  },
  {
   "id": "payout",
   "stage": "claiming",
   "title": "Payout amount and timing",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "The CareShield Life payout is locked to the year the claim starts. ElderShield pays a fixed amount for a capped number of months.",
   "tables": [
    {
     "title": "CareShield Life monthly payout for someone who starts claiming in that year",
     "head": [
      "Year",
      "Monthly payout",
      "Growth"
     ],
     "rows": [
      [
       "2020",
       "$600",
       "start"
      ],
      [
       "2021",
       "$612",
       "2% a year"
      ],
      [
       "2022",
       "$624",
       "2%"
      ],
      [
       "2023",
       "$637",
       "2%"
      ],
      [
       "2024",
       "$649",
       "2%"
      ],
      [
       "2025",
       "$662",
       "2%"
      ],
      [
       "2026",
       "$689",
       "4% a year from here"
      ],
      [
       "2027",
       "$717",
       "4%"
      ],
      [
       "2028",
       "$745",
       "4%"
      ],
      [
       "2029",
       "$775",
       "4%"
      ],
      [
       "2030",
       "$806",
       "4%; beyond 2030 to be reviewed"
      ]
     ]
    }
   ],
   "say": [
    "Only $689 (2026) and $612 (2021) appear in the FAQs. The other years are from the earlier guide, so confirm on the CPF/MOH site before quoting them.",
    "Locked: the payout stops rising when a claim succeeds or at age 67, whichever comes first. It is then fixed for as long as the member is severely disabled.",
    "Examples from the FAQ: claims in 2026 at 67 or younger get $689 a month. Someone who joins at 30 in 2026 and only claims at 67 or later gets $2,941 a month. Members born 1954 or earlier who joined at 67 or above get a fixed $612.",
    "Existing claimants before 1 Jan 2026 are not affected by the 2025 Review and keep their existing payouts.",
    "The starting payout of about $600 was set from basic long-term care costs, other funding sources and what premiums people could afford.",
    "Timing: by the middle of each month.",
    "Compare: ES300 $300 for up to 60 months; ES400 $400 for up to 72 months; MediSave Care up to $200 a month in cash."
   ],
   "faqs": [
    "What is the monthly payout amount for CareShield Life?",
    "How are my monthly CareShield Life payouts determined?",
    "What does it mean that CareShield Life payouts remain fixed based on the year you start receiving them?",
    "What happens to my CareShield Life payout if I have been receiving payouts prior to 1 January 2026?",
    "When will I receive my monthly CareShield Life/ElderShield/MediSave Care payouts?",
    "How was the starting payout of $600 per month for CareShield Life determined?",
    "Why do CareShield Life payouts stop increasing once insureds stop paying premiums (e.g., when they make a claim or turn 67)?",
    "What will be the rate of premium and payout increases for CareShield Life?",
    "What are the benefits of the ElderShield scheme?",
    "Why can’t CareShield Life/ElderShield automatically reimburse long-term care costs the way MediShield Life does for hospital bills?"
   ],
   "related": [
    "payout-account",
    "whats-new-2026",
    "msc"
   ],
   "cats": [
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "keys": "payout amount how much monthly 689 612 locked fixed 4% when mid month"
  },
  {
   "id": "payout-account",
   "stage": "claiming",
   "title": "Where the money goes: bank accounts, nursing homes, MI patients",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Payouts go to a nominated bank account or, if the member wishes, straight to an approved nursing home.",
   "say": [
    "Update the bank account in eFASS (Singpass): Manage My Schemes, then Change in Scheme Details. If acting for someone without mental capacity, a Mental Incapacity Certification is needed if not already submitted.",
    "Overseas bank account: members are encouraged to nominate a local account, which is the default.",
    "Nursing home: payouts can go directly to approved healthcare institutions such as nursing homes to cover monthly bills.",
    "Mentally Incapacitated (MI) patient, three options: (1) a joint account, as long as the patient stays a joint holder; (2) the patient’s own account; (3) the caregiver’s own account, but then the caregiver must obtain a deputyship within 12 months or payouts are suspended (unless paid to the patient or the nursing home). State the arrangement on the application form.",
    "People living overseas may face a quarterly survivorship check."
   ],
   "faqs": [
    "How do I update my bank account details for my CareShield Life/ElderShield/MediSave Care payouts?",
    "I would like my monthly payouts for CareShield Life/ElderShield/MediSave Care to be made to an overseas bank account. How can I do so?",
    "Can I nominate a joint bank account with the Mentally Incapacitated (MI) Patient to receive the monthly CareShield Life/ElderShield/MediSave Care payouts?",
    "Can I nominate the Mentally Incapacitated (MI) Patient’s own bank account to receive the monthly CareShield Life/ElderShield/MediSave Care payouts?",
    "I am the family member or caregiver of a Mentally Incapacitated (MI) Patient. Can I receive CareShield Life/ElderShield/MediSave Care payouts on their behalf?",
    "I am staying in a nursing home. Can I use MediSave Care/CareShield Life/ElderShield payouts to pay for the monthly bills?",
    "Why do I have to go through the quarterly survivorship check for CareShield Life/ElderShield/MediSave Care?"
   ],
   "links": [
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ]
   ],
   "related": [
    "payout",
    "overseas",
    "assessment"
   ],
   "cats": [
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "keys": "bank account update overseas nursing home mi patient mentally incapacitated deputyship joint caregiver"
  },
  {
   "id": "stacking",
   "stage": "claiming",
   "title": "Can they claim more than one? (stacking)",
   "sch": [
    "cshl",
    "es",
    "msc",
    "supp"
   ],
   "summary": "A very common question, and one that links all four files.",
   "tables": [
    {
     "head": [
      "Combination",
      "Answer"
     ],
     "rows": [
      [
       "CareShield Life and ElderShield",
       "Not both. Joining CSHL ends ES. A severely disabled ES insured claims from ES."
      ],
      [
       "CSHL or ES, and MediSave Care",
       "Yes. They are not mutually exclusive, and both use the same assessment."
      ],
      [
       "CSHL or ES, and a Supplement",
       "Yes. Claim from AIC and from the insurer separately. Most Supplement benefits stack independently."
      ],
      [
       "CSHL and private disability insurance",
       "Yes. Separate policies, so claiming from one does not affect the other. Assessment criteria may differ; ask the private insurer."
      ],
      [
       "CSHL/ES and PioneerDAS or Home Caregiving Grant",
       "Different tests. Those are moderate-disability schemes. CSHL/ES still need the severe disability assessment."
      ]
     ]
    }
   ],
   "say": [
    "Note: the CareShield Life file has the wrong answer filed against “Can I submit a claim for both CareShield Life/ElderShield and MediSave Care concurrently?”. The ElderShield and MediSave Care files have the right one (yes). This guide shows the right one."
   ],
   "faqs": [
    "Can I submit a claim for both CareShield Life/ElderShield and MediSave Care concurrently?",
    "I have existing private insurance that covers permanent/total disability. Can I claim from both my private insurance and CareShield Life?",
    "I am receiving other disability assistance schemes such as Pioneer Generation Disability Assistance Scheme or Home Caregiving Grant. Can I qualify for CareShield Life or ElderShield claims?",
    "How do I claim from both CareShield Life or ElderShield and Supplements?",
    "Can I join both CareShield Life and ElderShield to get double the protection?",
    "Should I join CareShield Life if I already have an existing ElderShield & ElderShield Supplement plan that provides similar coverage, e.g. lifetime payouts?",
    "What happens to my existing Supplement plan bought under ElderShield if I decided to join CareShield Life?",
    "If my Supplements overlap with CareShield Life, will insurers provide a refund if I join CareShield Life?"
   ],
   "related": [
    "msc",
    "supp",
    "es-vs-cshl",
    "claim-steps"
   ],
   "cats": [
    "Claims › General enquiries on claim process and eligibility",
    "Supplements › Clarification on Supp Plan Coverage"
   ],
   "keys": "both concurrent concurrently double stack multiple claim twice supplement private insurance"
  },
  {
   "id": "claim-appeal",
   "stage": "claiming",
   "title": "Disagreeing with the outcome, or asking for a re-assessment",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "None of the four files covers appeals. Only the building blocks are here.",
   "say": [
    "AIC can ask a member to attend a disability review to confirm continued eligibility. The letter explains how.",
    "Assessments must be done by an MOH-accredited assessor; the AIC website lists them.",
    "For help: AIC 1800 650 6060, or “My Correspondences” on eFASS with Singpass."
   ],
   "gap": "Appeals against an assessment outcome, and requests to be re-assessed after a condition worsens, have no FAQ. Check the process with the team before advising.",
   "faqs": [
    "I already went for a severe disability assessment recently, why is the Agency for Integrated Care (AIC) requesting me to go for another?",
    "Why am I unable to undergo a severe disability assessment for CareShield Life/ElderShield/MediSave Care during my hospitalisation?",
    "Who are the MOH-accredited severe disability assessors for CareShield Life/ElderShield/MediSave Care and where can I find the list of assessors if I need to arrange an assessment?"
   ],
   "links": [
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ],
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ],
    [
     "AIC website",
     "https://www.aic.sg/"
    ]
   ],
   "related": [
    "assessment",
    "claim-steps"
   ],
   "cats": [
    "Claims › Appeals (AIC)"
   ],
   "keys": "appeal reject rejected re-assess reassess worsened disagree outcome"
  },
  {
   "id": "msc",
   "stage": "topup",
   "title": "MediSave Care (MSC)",
   "sch": [
    "msc"
   ],
   "summary": "A severely disabled person aged 30 or older can withdraw cash from their own and/or spouse’s MediSave each month. It tops up the insurance payout; it is not insurance.",
   "tables": [
    {
     "title": "Monthly withdrawal by MediSave balance",
     "head": [
      "MediSave balance",
      "Monthly withdrawal"
     ],
     "rows": [
      [
       "$20,000 and above",
       "$200"
      ],
      [
       "$15,000 and above",
       "$150"
      ],
      [
       "$10,000 and above",
       "$100"
      ],
      [
       "$5,000 and above",
       "$50"
      ],
      [
       "Below $5,000",
       "Nil"
      ]
     ]
    }
   ],
   "say": [
    "Eligibility: SC/PR aged 30 or older, assessed as unable to do 3 or more of 6 ADLs by an MOH-accredited assessor. Apply on AIC eFASS with Singpass. A caregiver can apply for a mentally incapacitated member.",
    "The amount follows the MediSave balance at the point of withdrawal (if the member authorised the maximum), so it changes automatically.",
    "Spouse’s MediSave: if their own balance is short, they can use their spouse’s, if the spouse has at least $5,000. The same thresholds apply and the combined total across both is capped at $200 a month, not $200 each.",
    "Example: husband has $12,000 so can take $100 from his own. If his wife has at least $10,000 he can take another $100 from hers, $200 in total.",
    "Not allowed: using parents’ or children’s MediSave (it would hurt their own MediSave adequacy). A non-SC/PR spouse of an SC/PR may be assessed case by case.",
    "Cash, so it can be used locally or overseas, or paid straight to a nursing home.",
    "Can they claim CSHL/ES at the same time? Yes.",
    "Cannot exceed $200. Beyond that: MediFund and ComCare. ElderFund pays $250 to lower-income members with low MediSave who cannot benefit from CSHL or ES.",
    "MediSave depleted? Use the spouse’s for MSC and family members’ for other healthcare, and apply for ElderFund or Home Caregiving Grant, then MediFund or ComCare.",
    "Under 30: not eligible. Other support exists (MSF, KKH/NUH, Home Caregiving Grant, MediFund, ComCare).",
    "MSC withdrawal notices go by email or SMS, like CSHL and ES notices."
   ],
   "faqs": [
    "What is MediSave Care?",
    "How do I apply for MediSave Care?",
    "Will my MediSave Care withdrawal limit automatically change as and when my MediSave balance changes?",
    "If I develop severe disability, can I withdraw up to $200 per month from my own MediSave and another $200 from my spouse’s MediSave under MediSave Care?",
    "Can I withdraw more than $200 per month under MediSave Care?",
    "What if I have insufficient MediSave balances for my healthcare and long-term care expenses?",
    "Why is the ElderFund payout ($250) higher than the MediSave Care withdrawal amount ($200)?",
    "Why am I not allowed to make MediSave Care withdrawals to cover my parent or children’s long-term care needs?",
    "Why is the withdrawal quantum under MediSave Care based on my MediSave Account balance?",
    "Why do I need to set aside the MediSave balance of at least $5,000 to be eligible for MediSave Care?",
    "Can I withdraw under MediSave Care for overseas treatment?",
    "When am I eligible to withdraw under MediSave Care?",
    "If I have developed severe disability, can I make MediSave Care withdrawals from my spouse's MediSave Account?",
    "Why is MediSave Care restricted to individuals aged 30 and above?",
    "Why am I receiving notifications for MediSave Care through email/SMS or at a contact detail different from what I expected?",
    "Can I submit a claim for both CareShield Life/ElderShield and MediSave Care concurrently?"
   ],
   "links": [
    [
     "AIC eFASS (claims portal)",
     "https://efinance.aic.sg/"
    ],
    [
     "List of MOH-accredited assessors (AIC)",
     "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
    ]
   ],
   "related": [
    "claim-steps",
    "stacking",
    "mild-moderate",
    "severe-disability"
   ],
   "cats": [
    "Claims › General enquiries on claim process and eligibility",
    "Claims › Payout-related enquiries (e.g. disbursement)"
   ],
   "keys": "medisave care msc withdraw 200 spouse elderfund balance tier"
  },
  {
   "id": "supp",
   "stage": "topup",
   "title": "Supplements (private top-up plans)",
   "sch": [
    "supp",
    "cshl",
    "es"
   ],
   "summary": "Optional plans sold by private insurers on top of CareShield Life or ElderShield. They are separate policies with their own premiums, underwriting and claims.",
   "tables": [
    {
     "title": "The three insurers",
     "head": [
      "Insurer",
      "Hotline",
      "Email",
      "Website"
     ],
     "rows": [
      [
       "Singlife",
       "6827 9933",
       "cs_life@singlife.com",
       "singlife.com"
      ],
      [
       "Great Eastern",
       "1800 248 2888",
       "wecare-sg@greateasternlife.com",
       "greateasternlife.com"
      ],
      [
       "Income Insurance",
       "6788 1777",
       "healthcare@income.com.sg",
       "income.com.sg"
      ]
     ]
    }
   ],
   "say": [
    "What: plans that add benefits such as higher monthly payouts or higher disability coverage. Some also offer lump sums or death benefits. There is no limit on how many a member can buy.",
    "Who can buy: existing CSHL or ES policyholders. For CSHL there is no waiting period after enrolling. Some Supplements work with ES, CSHL or both; ask the insurer or adviser.",
    "Underwriting is each insurer’s own call on commercial and actuarial grounds, including for pre-existing illnesses.",
    "Paying: MediSave can be used up to $600 per calendar year per insured person. Premiums vary widely with the benefits. This was a gap in the earlier guide (MediSave transactions for Supplements).",
    "Checking what a member has: ask the insurer or use its portal. If they do not know the insurer, the Healthcare dashboard (CareShield Life/ElderShield, then Supplements section) names it. Dependants must use their own dashboard. Nothing shows if there is no Supplement.",
    "Joining CSHL: the Supplement is unaffected, premiums and benefits stay, they can claim both, and insurers do not refund for overlap. Supplement premiums already paid do not count towards CSHL premiums; only ES premiums do.",
    "Stop paying and the Supplement lapses.",
    "Versus CSHL: private disability plans usually cover total and permanent disability and stop at 60 to 70. CSHL is for life and does not lapse if they cannot pay. A Supplement is not exempted from the compulsory CSHL.",
    "Claims: CSHL/ES go to AIC, Supplements to the insurer.",
    "The 2025 Review does not change Supplement premiums, and most Supplement benefits stack independently. Members should check with their insurer.",
    "Members holding a Supplement (or paying for one) are not eligible for APS.",
    "The ElderShield insurers (Singlife, Great Eastern, Income) continue to administer ES Supplements."
   ],
   "gap": "Complaints about insurers or their agents have no FAQ. Give the insurer contacts above.",
   "faqs": [
    "What are CareShield Life and ElderShield Supplement plans?",
    "How do I check the types of CareShield Life and ElderShield Supplement plans I have purchased for myself or dependants?",
    "Can the Supplements work with both CareShield Life and ElderShield?",
    "Should I join CareShield Life if I already have an existing ElderShield & ElderShield Supplement plan that provides similar coverage, e.g. lifetime payouts?",
    "What happens to my existing Supplement plan bought under ElderShield if I decided to join CareShield Life?",
    "If my Supplements overlap with CareShield Life, will insurers provide a refund if I join CareShield Life?",
    "What should I consider before buying a CareShield Life or ElderShield Supplement plan?",
    "I am born in 1980 or later. If I have private insurance coverage similar to CareShield Life, can I be exempted from universal coverage?",
    "What happens if I stop paying for my Supplements if I join CareShield Life?",
    "Can I purchase CareShield Life Supplement(s) if I have pre-existing illnesses?",
    "Will ElderShield insurers continue selling Supplements?",
    "How do I claim from both CareShield Life or ElderShield and Supplements?",
    "How do Supplement plans and other private insurance plans for disability differ from CareShield Life?",
    "How will my CareShield Life Supplement premiums be affected by the CareShield Life changes?"
   ],
   "links": [
    [
     "Comparison of Supplement plans (MOH)",
     "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/careshield-life/careshield-life-and-eldershield-supplements"
    ],
    [
     "Healthcare dashboard",
     "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
    ]
   ],
   "related": [
    "stacking",
    "aps",
    "scam",
    "bp",
    "es-vs-cshl"
   ],
   "cats": [
    "Supplements › Clarification on Supp Plan Coverage",
    "Supplements › Clarification on MediSave Transaction for Supp Plan",
    "Supplements › Feedback on Supp Plan Insurers",
    "Supplements › Feedback on Supp Policy"
   ],
   "keys": "supplement supplements singlife great eastern income insurer private top up $600"
  },
  {
   "id": "bp",
   "stage": "topup",
   "title": "Insurer (Business Partner) enquiries",
   "sch": [
    "supp"
   ],
   "summary": "The earlier guide assumed “BP” means the private insurers that sell Supplements. None of the four files covers these enquiries.",
   "say": [
    "Assumed meanings (unconfirmed): BP = Business Partner (the insurers), OIC = Officer-in-Charge, Supp Return files = regular data submissions by insurers.",
    "Known contacts: Singlife, Great Eastern and Income Insurance (see Supplements)."
   ],
   "gap": "Return files, manual requests, OIC enquiries and investigation reporting have no FAQ. Confirm internally.",
   "faqs": [
    "Will ElderShield insurers continue selling Supplements?"
   ],
   "related": [
    "supp"
   ],
   "cats": [
    "Supplements › (For BP) Supp Return files",
    "Supplements › (For BP) Supp Manual request",
    "Supplements › (For BP) Supp Enquiry for Insurer OIC",
    "Supplements › (For BP) Supp Investigation reporting"
   ],
   "keys": "bp business partner oic return files manual investigation insurer"
  },
  {
   "id": "ltc-basics",
   "stage": "care",
   "title": "Long-term care: the basics",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Background and where to send members for services, subsidies and nursing home help.",
   "say": [
    "Long-term care is the personal and medical care needed when someone develops disability through age or poor health. It can be at home or in places like nursing homes.",
    "Why insurance: the need is growing as the population ages. Median time in severe disability is about 4 years, but 3 in 10 stay severely disabled for 10 years or more. Savings alone may not be enough, so cohorts pool the risk.",
    "How much to set aside: it varies. Plan early. Sources include subsidies, CareShield Life or ElderShield, MediSave Care (up to $200 a month), Supplements and savings.",
    "Accessing services: once needs are assessed, medical social workers and admin staff at public hospitals and Government-funded providers refer and help apply for subsidies, and can say how much the member qualifies for. AIC: 1800 650 6060, with Care Consultants at AIC Links in public hospitals and Maxwell.",
    "Nursing home costs: subsidies are means-tested and do not depend on the home’s fees. AIC helps pick a home; MediFund can help; many homes run by voluntary welfare organisations can add support.",
    "Residents: ask the home’s medical social worker for help applying. The Resident Assessment Form is free."
   ],
   "faqs": [
    "What is long-term care?",
    "Why is CareShield Life/ElderShield necessary for Singaporeans' long-term care needs?",
    "How much should I set aside for my long-term care needs?",
    "How do I access long-term care services?",
    "Where can I seek advice on financial planning for old age or seek financial assistance for long-term care needs?",
    "Are we eligible for higher subsidies if I/my family member am/is placed in a nursing home with higher fees?",
    "How do I know how much subsidies I will receive for the long-term care service(s) that I use?",
    "Who should I approach at the nursing home should I need assistance with application for schemes to support long-term care costs?",
    "Does the nursing home charge for performing the Resident Assessment Form (RAF) for the applicant?",
    "Why can’t CareShield Life/ElderShield automatically reimburse long-term care costs the way MediShield Life does for hospital bills?"
   ],
   "links": [
    [
     "AIC website",
     "https://www.aic.sg/"
    ],
    [
     "AIC Link locations",
     "https://www.aic.sg/about-us/aic-link-locations/"
    ],
    [
     "MediFund (MOH)",
     "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund"
    ],
    [
     "ComCare (MSF)",
     "https://www.msf.gov.sg/comcare"
    ]
   ],
   "related": [
    "mild-moderate",
    "who-runs",
    "assessment"
   ],
   "cats": [
    "Claims › Other matters"
   ],
   "keys": "long term care nursing home subsidy aic financial planning how much save"
  },
  {
   "id": "mild-moderate",
   "stage": "care",
   "title": "Help for people who do not qualify",
   "sch": [
    "cshl",
    "es",
    "msc"
   ],
   "summary": "Cannot do fewer than 3 ADLs, under 30, or not eligible to join? These are the pointers the FAQs give.",
   "tables": [
    {
     "head": [
      "Situation",
      "Where to point them"
     ],
     "rows": [
      [
       "Mild or moderate disability (fewer than 3 ADLs)",
       "Means-tested Government subsidies for long-term care, Home Caregiving Grant, Seniors’ Mobility and Enabling Fund (consumables and assistive devices), MediFund and ComCare. Supplements for less severe cover. Subsidies and grants are being enhanced progressively from 2026."
      ],
      [
       "Born 1979 or earlier with disability, so cannot join CSHL",
       "Subsidies, ElderFund, MediSave and Government safety nets (MediFund, ComCare). If on ES and not yet claimed, claim ES."
      ],
      [
       "Finished ES300/400 payouts and now cannot join",
       "Subsidies, Home Caregiving Grant, ElderFund, MediSave Care, and the Seniors’ Mobility and Enabling Fund."
      ],
      [
       "Under 30 with disability",
       "MSF early intervention subsidies, KKH and NUH therapy subsidies, Home Caregiving Grant, SG Enable (1800 8585 885), MediFund, ComCare."
      ],
      [
       "Cannot afford care even after all that",
       "MediFund or ComCare. Medical social workers at the hospital or the nearest Social Service Office can help."
      ]
     ]
    }
   ],
   "say": [
    "Also tell them: the Government plans to keep looking at ways to support people with less severe disability.",
    "MSC only applies to severe disability."
   ],
   "faqs": [
    "I have mild or moderate disabilities or I can perform more than three Activities of Daily Living (ADLs). How can I get help for my long-term care costs?",
    "CareShield Life is still targeted at those with severe disability i.e. unable to perform three or more Activities of Daily Living. Why was this retained?",
    "Why are Singaporeans not covered by CareShield Life from birth?",
    "I am going to be 29 years old when CareShield Life is launched. If I have severe disability, will I be able to join the scheme earlier?",
    "Why is CareShield Life universal coverage not extended to those born in 1979 or earlier?",
    "If I am born in 1979 or earlier and have severe disability, can I join CareShield Life?",
    "If I have finished claiming my ElderShield 300/400 payouts, can I still join CareShield Life?",
    "What if I have insufficient MediSave balances for my healthcare and long-term care expenses?",
    "Where can I seek advice on financial planning for old age or seek financial assistance for long-term care needs?"
   ],
   "links": [
    [
     "AIC website",
     "https://www.aic.sg/"
    ],
    [
     "SG Enable",
     "https://www.sgenable.sg/"
    ],
    [
     "MediFund (MOH)",
     "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund"
    ],
    [
     "ComCare (MSF)",
     "https://www.msf.gov.sg/comcare"
    ]
   ],
   "related": [
    "ltc-basics",
    "severe-disability",
    "msc"
   ],
   "cats": [
    "Claims › Other matters"
   ],
   "keys": "mild moderate not eligible hcg elderfund medifund comcare smef assistive under 30 disability help"
  }
 ],
 "glossary": [
  {
   "group": "Schemes and products",
   "term": "CareShield Life (CSHL)",
   "meaning": "National lifetime insurance for severe disability, launched 2020. Pays a monthly cash amount if the person cannot do 3 or more of 6 ADLs.",
   "see": [
    "scheme-cshl"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "ElderShield (ES), ES300, ES400",
   "meaning": "The older scheme, closed to new joiners. ES300 (joined Sep 2002 to Aug 2007): $300 a month for up to 60 months. ES400 (joined from Sep 2007): $400 a month for up to 72 months.",
   "see": [
    "scheme-es",
    "es-vs-cshl"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "MediSave Care (MSC)",
   "meaning": "Not insurance. Cash withdrawals of up to $200 a month from own and/or spouse’s MediSave for severely disabled SC/PR aged 30+.",
   "see": [
    "msc"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "Supplements (CSHL/ES Supplement)",
   "meaning": "Optional private plans from Singlife, Great Eastern or Income that add benefits on top of CareShield Life or ElderShield.",
   "see": [
    "supp"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "MediShield Life (MSHL)",
   "meaning": "Basic hospital insurance for all SC/PR. A separate scheme, but its premiums, payer arrangements and APS status are often handled together with CareShield Life.",
   "see": [
    "aps",
    "how-to-pay"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "Integrated Shield Plan (ISP/IP)",
   "meaning": "A private hospital plan built on MediShield Life. Holding one makes a member ineligible for APS.",
   "see": [
    "aps"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "ElderFund",
   "meaning": "Targeted at lower-income Singaporeans who cannot benefit from CSHL or ES and have low MediSave. Pays $250 a month.",
   "see": [
    "msc",
    "mild-moderate"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "Home Caregiving Grant (HCG)",
   "meaning": "A means-tested grant for people with moderate disability (needing some help with 3 or more ADLs).",
   "see": [
    "mild-moderate",
    "severe-disability"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "PioneerDAS",
   "meaning": "Pioneer Generation Disability Assistance Scheme, for moderate disability. Different test from CSHL/ES.",
   "see": [
    "severe-disability"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "Seniors’ Mobility and Enabling Fund (SMEF)",
   "meaning": "Helps with the cost of consumables and assistive devices.",
   "see": [
    "mild-moderate"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "MediFund / ComCare",
   "meaning": "Government-funded safety nets for those who cannot pay even after subsidies and other help (MediFund via MOH, ComCare via MSF).",
   "see": [
    "mild-moderate"
   ]
  },
  {
   "group": "Schemes and products",
   "term": "IDAPE",
   "meaning": "Named in the FAQs as another scheme that uses the same severe disability assessment. The FAQs give no further detail.",
   "see": [
    "assessment"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Activities of Daily Living (ADLs)",
   "meaning": "The six basic tasks: washing, dressing, feeding, toileting, moving or walking around, and transferring.",
   "see": [
    "severe-disability"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Severe disability",
   "meaning": "Unable to do 3 or more of the 6 ADLs, confirmed by an MOH-accredited assessor.",
   "see": [
    "severe-disability"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Severe disability assessment",
   "meaning": "The formal check by an MOH-accredited assessor. One assessment serves CSHL, ES, MSC and ElderFund.",
   "see": [
    "assessment"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "MOH-accredited assessor",
   "meaning": "A Singapore-registered doctor, occupational therapist, physiotherapist or registered nurse trained to assess severe disability. Listed on the AIC website.",
   "see": [
    "assessment"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Resident Assessment Form (RAF)",
   "meaning": "Completed by a nursing home for its resident, in place of the assessment. Free of charge.",
   "see": [
    "assessment"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Disability review",
   "meaning": "A repeat assessment AIC can request to confirm continued eligibility, or one requested when applying to join CSHL.",
   "see": [
    "assessment",
    "underwriting"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "eFASS",
   "meaning": "AIC’s eService portal. Used to submit claims, change bank details and view correspondence.",
   "see": [
    "claim-steps",
    "payout-account"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Mentally Incapacitated (MI) patient",
   "meaning": "Someone unable to make decisions for themselves. Special rules apply to who receives payouts.",
   "see": [
    "payout-account"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Mental Incapacity Certification",
   "meaning": "Needed when changing bank details on behalf of a care recipient who lacks mental capacity.",
   "see": [
    "payout-account"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Deputyship",
   "meaning": "Legal authority to act for a mentally incapacitated person. A caregiver receiving payouts into their own account must obtain it within 12 months.",
   "see": [
    "payout-account"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Quarterly survivorship check",
   "meaning": "AIC check for payout recipients living overseas, to verify continued eligibility.",
   "see": [
    "overseas"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Free-look period (FLP)",
   "meaning": "60 days from the start of cover for people who joined by choice. They can opt out in this window.",
   "see": [
    "opt-out"
   ]
  },
  {
   "group": "Disability and claims",
   "term": "Paid-up / reduced paid-up",
   "meaning": "An ES policy where the insured stopped paying after a minimum number of years and gets a lower payout.",
   "see": [
    "es-premiums",
    "catch-up"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Premium",
   "meaning": "The yearly price of cover. For CSHL, payable to 67 (10 years if joined at 59+). Depends on age, gender and cohort.",
   "see": [
    "premium-amount"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Policy year / policy anniversary",
   "meaning": "The 12 months from the policy start. Renewal premiums come out within 1 month of the anniversary.",
   "see": [
    "how-to-pay"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Gross premium / net premium",
   "meaning": "Gross is before Government help; net is what is left to pay after Transitional Support, subsidies and any APS.",
   "see": [
    "help-ladder"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Base premium",
   "meaning": "The core CSHL premium for people born 1979 or earlier. Paid from joining to 67, or 10 years if joined at 59+.",
   "see": [
    "catch-up"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Catch-up component",
   "meaning": "A flat amount over 10 years on top of base premium for some born 1979 or earlier, depending on ElderShield history. Not subsidised.",
   "see": [
    "catch-up"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Uninsured-individual premium",
   "meaning": "The premium basis used for someone whose ES lapsed through non-payment.",
   "see": [
    "catch-up",
    "lapse-reinstate"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Cohort",
   "meaning": "People born in the same range of years. Premiums and rules differ by cohort.",
   "see": [
    "premium-amount"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Premium payer",
   "meaning": "Whoever pays: the member or a family member using their MediSave.",
   "see": [
    "payers"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "MediSave",
   "meaning": "The healthcare part of CPF. Pays premiums by default. OA and SA cannot be used for them.",
   "see": [
    "how-to-pay"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Basic Healthcare Sum (BHS)",
   "meaning": "The MediSave level for basic subsidised healthcare in old age. Top-ups to reach it are encouraged, not required.",
   "see": [
    "how-to-pay"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "GIRO",
   "meaning": "Automatic bank deduction. Renewal premiums yearly; overdue premiums from earlier years by monthly instalment.",
   "see": [
    "how-to-pay",
    "arrears"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "Arrears / Demand Note",
   "meaning": "Overdue premiums; a Demand Note is a formal notice of them. No FAQ covers demand notes.",
   "see": [
    "arrears"
   ]
  },
  {
   "group": "Premiums and who pays",
   "term": "GST",
   "meaning": "Goods and Services Tax, charged on these premiums like other insurance.",
   "see": [
    "premium-amount"
   ]
  },
  {
   "group": "Government help",
   "term": "Premium Subsidy (PS)",
   "meaning": "Means-tested discount of up to 30% for lower- and middle-income households. PRs get half the SC rate.",
   "see": [
    "ps"
   ]
  },
  {
   "group": "Government help",
   "term": "Transitional Support (TS)",
   "meaning": "Temporary help for 2026 to 2030 for everyone whose gross premium rises. Not means-tested. “TS” is a best-guess abbreviation.",
   "see": [
    "help-ladder"
   ]
  },
  {
   "group": "Government help",
   "term": "Participation Incentive (PI)",
   "meaning": "Payment spread over 10 years for SC born 1979 or earlier covered by 31 Dec 2024. Can be $0.",
   "see": [
    "pi"
   ]
  },
  {
   "group": "Government help",
   "term": "API",
   "meaning": "Best guess: Additional Participation Incentive. Unconfirmed.",
   "see": [
    "pi"
   ]
  },
  {
   "group": "Government help",
   "term": "Additional Premium Support (APS)",
   "meaning": "Last-resort help for those who still cannot afford premiums and lack family support. By invitation. Not for ISP or Supplement holders.",
   "see": [
    "aps"
   ]
  },
  {
   "group": "Government help",
   "term": "Means-testing",
   "meaning": "Checking household finances to decide the level of help.",
   "see": [
    "ps"
   ]
  },
  {
   "group": "Government help",
   "term": "Annual Value (AV)",
   "meaning": "The estimated yearly rent of a property, used to gauge wealth. AVs as at 2024 are used for 2025 eligibility.",
   "see": [
    "ps"
   ]
  },
  {
   "group": "Government help",
   "term": "Household check",
   "meaning": "The process and e-Service for gathering household income and AV data. Any member can disallow access, which blocks subsidies for the household.",
   "see": [
    "ps"
   ]
  },
  {
   "group": "Government help",
   "term": "Pioneer / Merdeka Generation (PG/MG)",
   "meaning": "Older cohorts who get extra Participation Incentives. All were born before 1960.",
   "see": [
    "pi"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Underwriting",
   "meaning": "The health screening before cover is granted. For CSHL, reinstated from 1 Jan 2026 for those born 1979 or earlier.",
   "see": [
    "underwriting"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Pre-existing condition vs pre-existing disability",
   "meaning": "A medical condition does not bar entry or raise the premium. Being unable to do one or more ADLs (disability) bars entry since 1 Jan 2026.",
   "see": [
    "underwriting"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Enrolment criterion",
   "meaning": "The condition for joining: no pre-existing disability.",
   "see": [
    "underwriting",
    "whats-new-2026"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Auto-enrolment",
   "meaning": "Automatic cover without applying: born 1980 or later at 30; certain ES400 holders from 1 Dec 2021.",
   "see": [
    "who-covered"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Opt out",
   "meaning": "Leaving CSHL. Only possible inside the 60-day free-look period for those who joined by choice.",
   "see": [
    "opt-out"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Lapse / reinstatement",
   "meaning": "A lapse is cover ending through non-payment (ES, Supplements). CSHL does not lapse for inability to pay.",
   "see": [
    "lapse-reinstate"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Waiting for Cover",
   "meaning": "Status after approval, until the first premium is deducted. Cover has already begun.",
   "see": [
    "waiting-cover"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "SC / PR",
   "meaning": "Singapore Citizen / Permanent Resident.",
   "see": [
    "who-covered"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Singpass",
   "meaning": "National digital ID. Required for the online applications.",
   "see": [
    "apply-track"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "Welcome Package / Renewal notice",
   "meaning": "Letters at the start of cover and each year, accurate as at the date on page 1.",
   "see": [
    "letters-notifs"
   ]
  },
  {
   "group": "Enrolment and status",
   "term": "CareShield Life Council",
   "meaning": "The independent body that reviews payouts and premiums. Led the 2025 Review.",
   "see": [
    "whats-new-2026"
   ]
  },
  {
   "group": "Tools and portals",
   "term": "Healthcare dashboard",
   "meaning": "CPF page showing CSHL/ES, MediShield Life and Supplement insurer details, for self and dependants.",
   "see": [
    "letters-notifs"
   ]
  },
  {
   "group": "Tools and portals",
   "term": "Premium Checker",
   "meaning": "CPF e-Service for personalised CSHL premiums, subsidies and incentives.",
   "see": [
    "premium-amount"
   ]
  },
  {
   "group": "Tools and portals",
   "term": "Household Check e-Service",
   "meaning": "Where household members view or change their disclosure status.",
   "see": [
    "ps"
   ]
  },
  {
   "group": "Tools and portals",
   "term": "Activities",
   "meaning": "CPF page to check the status of applications, including opt-out.",
   "see": [
    "apply-track"
   ]
  },
  {
   "group": "Tools and portals",
   "term": "Change Payer e-Service",
   "meaning": "Used by a family member to take over paying premiums with their MediSave.",
   "see": [
    "payers"
   ]
  },
  {
   "group": "Business-partner terms (best guess)",
   "term": "BP (Business Partner)",
   "meaning": "Most likely the insurers who sell Supplements. Unconfirmed.",
   "see": [
    "bp"
   ]
  },
  {
   "group": "Business-partner terms (best guess)",
   "term": "OIC (Officer-in-Charge)",
   "meaning": "Most likely the insurer’s designated contact. Unconfirmed.",
   "see": [
    "bp"
   ]
  },
  {
   "group": "Business-partner terms (best guess)",
   "term": "Supp Return files",
   "meaning": "Most likely regular data files insurers submit about Supplement policies. Unconfirmed.",
   "see": [
    "bp"
   ]
  }
 ],
 "numbers": [
  {
   "title": "Coverage and dates",
   "rows": [
    [
     "Born 1980 or later",
     "Covered from 1 Oct 2020 or at age 30, whichever is later"
    ],
    [
     "Born 1970–1979 on ES400",
     "Auto-enrolled from 1 Dec 2021; opt-out deadline 31 Dec 2023 (passed)"
    ],
    [
     "Born 1979 or earlier, joining by choice",
     "Needs no pre-existing disability from 1 Jan 2026; no maximum entry age"
    ],
    [
     "Free-look period",
     "60 days from commencement of cover"
    ],
    [
     "2025 Review effective",
     "1 Jan 2026 (announced 27 Aug 2025)"
    ],
    [
     "Digital notifications start",
     "24 Nov 2025"
    ]
   ]
  },
  {
   "title": "Payouts",
   "rows": [
    [
     "CareShield Life 2026",
     "$689 a month (+4% a year to 2030; locked at claim year or age 67)"
    ],
    [
     "CareShield Life, joined at 30 in 2026, claims at 67+",
     "$2,941 a month (FAQ example)"
    ],
    [
     "Born 1954 or earlier, joined at 67+",
     "Fixed $612 a month"
    ],
    [
     "ElderShield 300",
     "$300 a month, up to 60 months"
    ],
    [
     "ElderShield 400",
     "$400 a month, up to 72 months"
    ],
    [
     "MediSave Care",
     "Up to $200 a month by MediSave balance ($5,000 minimum)"
    ],
    [
     "ElderFund",
     "$250 a month"
    ],
    [
     "Payout date",
     "By the middle of each month"
    ]
   ]
  },
  {
   "title": "Premiums",
   "rows": [
    [
     "Payable until",
     "67 (including the year they turn 67); 10 years if joined at 59 or older"
    ],
    [
     "Yearly increase 2026–2030",
     "About $38 on average, no more than $75 (excluding GST)"
    ],
    [
     "First premium deducted",
     "Within 2 months of policy start"
    ],
    [
     "Later premiums",
     "Within 1 month of the policy anniversary"
    ],
    [
     "Catch-up component",
     "Flat amount over 10 years, on top of base; not subsidised"
    ],
    [
     "Refund if the insured dies",
     "Only within the first 60 days of the first policy year"
    ],
    [
     "ES last premium",
     "Policy year that starts while still aged 65"
    ]
   ]
  },
  {
   "title": "Help with premiums",
   "rows": [
    [
     "Premium Subsidy",
     "Up to 30%; PRs get half the SC rate"
    ],
    [
     "Subsidy test",
     "Per capita household income, AV up to $31,000, no more than one property"
    ],
    [
     "Households eligible",
     "Up to two-thirds of resident households"
    ],
    [
     "Participation Incentive",
     "SC born 1979 or earlier covered by 31 Dec 2024; over 10 years; not a lump sum"
    ],
    [
     "APS",
     "By invitation; not for ISP or Supplement holders"
    ]
   ]
  },
  {
   "title": "Claims and assessment",
   "rows": [
    [
     "Severe disability",
     "Unable to do 3 or more of 6 ADLs"
    ],
    [
     "Assessment fee",
     "$100 clinic-based, $250 non-clinic-based"
    ],
    [
     "First CSHL assessment",
     "Fee waived whatever the result"
    ],
    [
     "ES / MSC assessment",
     "Pay first; reimbursed if severe"
    ],
    [
     "Can MediSave pay the assessment?",
     "No"
    ],
    [
     "Deputyship for caregiver receiving MI payouts",
     "Within 12 months"
    ],
    [
     "Application outcome",
     "About 7 working days"
    ],
    [
     "Opt-out in free-look period",
     "Processed after one working day"
    ]
   ]
  },
  {
   "title": "Supplements",
   "rows": [
    [
     "MediSave limit",
     "$600 per calendar year per insured person"
    ],
    [
     "Insurers",
     "Singlife, Great Eastern, Income Insurance"
    ]
   ]
  }
 ],
 "contacts": [
  [
   "Healthcare Hotline (CPF)",
   "1800 222 3399 (+65 6222 3399 from overseas), Mon to Fri 8.30am to 5.30pm. Household check: pick language, press 3, then 2"
  ],
  [
   "AIC",
   "1800 650 6060; “My Correspondences” on eFASS"
  ],
  [
   "SG Enable",
   "1800 8585 885"
  ],
  [
   "Singpass helpdesk",
   "6643 0555, support@singpass.gov.sg"
  ],
  [
   "Singlife",
   "6827 9933, cs_life@singlife.com"
  ],
  [
   "Great Eastern",
   "1800 248 2888, wecare-sg@greateasternlife.com"
  ],
  [
   "Income Insurance",
   "6788 1777, healthcare@income.com.sg"
  ]
 ],
 "linkgroups": [
  [
   "Member tools",
   [
    "premchk",
    "dash",
    "apply",
    "act",
    "payer",
    "topup",
    "giro",
    "stop",
    "hh",
    "txn",
    "acct"
   ]
  ],
  [
   "Claims and care",
   [
    "efass",
    "assessors",
    "aic",
    "aiclink",
    "enable",
    "medifund",
    "comcare"
   ]
  ],
  [
   "Help and policy",
   [
    "apsapply",
    "apsinfo",
    "prem",
    "cshlpg",
    "espg",
    "council",
    "review",
    "supp",
    "hd",
    "write",
    "singpass"
   ]
  ]
 ],
 "links": {
  "premchk": [
   "Premium Checker",
   "https://www.cpf.gov.sg/member/ds/dashboards/healthcare/careshield-life-premiums"
  ],
  "dash": [
   "Healthcare dashboard",
   "https://www.cpf.gov.sg/member/ds/dashboards/healthcare"
  ],
  "apply": [
   "Application to join CareShield Life",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/application-to-join-careshield-life"
  ],
  "payer": [
   "Change Payer e-Service",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/change-payer-for-medishield-life-careshield-life-eldershield"
  ],
  "topup": [
   "Top up MediSave Account",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
  ],
  "giro": [
   "Set up GIRO for healthcare premiums",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
  ],
  "stop": [
   "Opt-out / terminate CareShield Life or ElderShield",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/stop-careshield-life-or-eldershield-cover"
  ],
  "efass": [
   "AIC eFASS (claims portal)",
   "https://efinance.aic.sg/"
  ],
  "assessors": [
   "List of MOH-accredited assessors (AIC)",
   "https://www.aic.sg/financial-assistance/severe-disability-assessment/"
  ],
  "aic": [
   "AIC website",
   "https://www.aic.sg/"
  ],
  "aiclink": [
   "AIC Link locations",
   "https://www.aic.sg/about-us/aic-link-locations/"
  ],
  "hh": [
   "Household Check e-Service",
   "https://medishieldlife.moh.gov.sg/"
  ],
  "apsapply": [
   "Apply for APS (no Singpass needed)",
   "https://www.cpf.gov.sg/APSapplication"
  ],
  "apsinfo": [
   "APS information (ask.gov.sg)",
   "https://ask.gov.sg/moh?topic=MediShield%20Life&subtopic=Additional%20Premium%20Support#content"
  ],
  "prem": [
   "CareShield Life premiums & subsidies",
   "https://www.cpf.gov.sg/member/healthcare-financing/careshield-life/careshield-premiums-and-subsidies"
  ],
  "cshlpg": [
   "CareShield Life (CPF)",
   "https://www.cpf.gov.sg/member/healthcare-financing/careshield-life"
  ],
  "espg": [
   "ElderShield premiums (CPF)",
   "https://www.cpf.gov.sg/member/healthcare-financing/eldershield"
  ],
  "council": [
   "CareShield Life Council (MOH)",
   "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/careshield-life/careshield-life-council"
  ],
  "review": [
   "CareShield Life 2025 Review (CPF)",
   "https://www.cpf.gov.sg/member/infohub/news/cpf-related-announcements/careshieldlife-2025-review"
  ],
  "supp": [
   "Comparison of Supplement plans (MOH)",
   "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/careshield-life/careshield-life-and-eldershield-supplements"
  ],
  "singpass": [
   "Singpass",
   "https://www.singpass.gov.sg/main/"
  ],
  "txn": [
   "MediSave transaction history",
   "https://www.cpf.gov.sg/member/ds/statements/transaction-history"
  ],
  "acct": [
   "CPF account settings (contact details)",
   "https://www.cpf.gov.sg/member/ds/account-settings"
  ],
  "write": [
   "Write to CPF",
   "https://www.cpf.gov.sg/service/feedback"
  ],
  "hd": [
   "PR health declaration form",
   "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/health-declaration-pr-applicants"
  ],
  "enable": [
   "SG Enable",
   "https://www.sgenable.sg/"
  ],
  "medifund": [
   "MediFund (MOH)",
   "https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund"
  ],
  "comcare": [
   "ComCare (MSF)",
   "https://www.msf.gov.sg/comcare"
  ],
  "act": [
   "Activities (application status)",
   "https://www.cpf.gov.sg/Activities"
  ]
 },
 "look": [
  [
   "Payer Management vs Payment Arrangement",
   "Payer Management asks WHO pays (family, death of payer, stopping). Payment Arrangement asks HOW and from WHAT (MediSave, top-up, GIRO, taking over arrears)."
  ],
  [
   "Premium Computation vs Premium Enforcement",
   "Computation is how much and when it is collected. Enforcement is what happens when it is not paid."
  ],
  [
   "Premium Subsidies vs Participation Incentives vs APS",
   "Subsidies cut the premium by income. Incentives reward older SC who joined early. APS is last-resort help for those who truly cannot pay."
  ],
  [
   "Opt-out vs cease payment vs termination",
   "Opt-out is an SC/PR leaving CSHL. Cease payment is a family payer stopping. Termination is for non-SC/PR."
  ],
  [
   "Coverage vs Policy Servicing",
   "Coverage is getting in (apply, appeal, start date). Policy Servicing looks after an existing policy (status, leaving, letters)."
  ],
  [
   "Claims vs premium topics",
   "If the person is disabled or about to receive money, it is Claims. If money is leaving MediSave, it is a premium category."
  ],
  [
   "ElderShield, MediSave Care, Supplement: which file?",
   "Insurance (CSHL/ES) and MediSave Care share the claim FAQs. Supplement questions belong to the insurer, apart from the checks on the dashboard."
  ]
 ],
 "enquiries": [
  [
   "Supplements",
   [
    [
     "Clarification on Supp Plan Coverage",
     [
      "supp",
      "stacking",
      "es-vs-cshl"
     ],
     ""
    ],
    [
     "Feedback on Supp Plan Insurers",
     [
      "supp"
     ],
     "Insurer contacts only; no complaints FAQ"
    ],
    [
     "Fraud/Mis-selling/Soliciting of Supp Plan",
     [
      "scam",
      "supp"
     ],
     ""
    ],
    [
     "Feedback on Supp Policy",
     [
      "supp",
      "policy-why"
     ],
     ""
    ],
    [
     "Clarification on MediSave Transaction for Supp Plan",
     [
      "supp"
     ],
     "Now answered: MediSave up to $600 a calendar year per insured"
    ],
    [
     "(For BP) Supp Return files",
     [
      "bp"
     ],
     "No FAQ"
    ],
    [
     "(For BP) Supp Manual request",
     [
      "bp"
     ],
     "No FAQ"
    ],
    [
     "(For BP) Supp Enquiry for Insurer OIC",
     [
      "bp"
     ],
     "No FAQ"
    ],
    [
     "(For BP) Supp Investigation reporting",
     [
      "bp"
     ],
     "No FAQ"
    ]
   ]
  ],
  [
   "Claims",
   [
    [
     "Other matters",
     [
      "ltc-basics",
      "who-runs",
      "mild-moderate",
      "scam"
     ],
     ""
    ],
    [
     "Policy-related enquiries/feedback",
     [
      "policy-why",
      "whats-new-2026"
     ],
     ""
    ],
    [
     "General enquiries on claim process and eligibility",
     [
      "claim-steps",
      "assessment",
      "severe-disability",
      "stacking"
     ],
     ""
    ],
    [
     "Payout-related enquiries (e.g. disbursement)",
     [
      "payout",
      "payout-account"
     ],
     ""
    ],
    [
     "Appeals (AIC)",
     [
      "claim-appeal"
     ],
     "No FAQ"
    ],
    [
     "Digital notification and website-related enquiries",
     [
      "letters-notifs"
     ],
     ""
    ]
   ]
  ],
  [
   "Coverage",
   [
    [
     "Appeal (Backdating of Cover/Mandatory Cohort/Family Members)",
     [
      "exemption-appeal"
     ],
     "Only the exemption FAQ"
    ],
    [
     "Application",
     [
      "who-covered",
      "join-upgrade",
      "apply-track",
      "foreigners",
      "es-vs-cshl"
     ],
     ""
    ],
    [
     "Issuance of cover",
     [
      "waiting-cover"
     ],
     ""
    ]
   ]
  ],
  [
   "Payer Management",
   [
    [
     "Appeal to pay premiums for other family members",
     [
      "payers"
     ],
     ""
    ],
    [
     "Auto-switch premium payer or Family Support",
     [
      "payers",
      "death"
     ],
     ""
    ],
    [
     "Cease/stop premium payment and request for refunds",
     [
      "payers",
      "overseas",
      "es-vs-cshl"
     ],
     ""
    ]
   ]
  ],
  [
   "Payment Arrangement",
   [
    [
     "Change of premium payer to pay for outstanding/current premiums",
     [
      "payers",
      "arrears"
     ],
     ""
    ],
    [
     "Deduction/Recovery of Premiums",
     [
      "how-to-pay"
     ],
     ""
    ],
    [
     "Payment mode/options to pay premiums",
     [
      "how-to-pay"
     ],
     ""
    ],
    [
     "Top-up of MediSave to pay premiums",
     [
      "how-to-pay"
     ],
     ""
    ],
    [
     "GIRO applications to pay CSHL Premium arrears (apply or to terminate GIRO)",
     [
      "arrears"
     ],
     "No FAQ"
    ]
   ]
  ],
  [
   "Policy Servicing",
   [
    [
     "Coverage status",
     [
      "waiting-cover",
      "death",
      "apply-track"
     ],
     ""
    ],
    [
     "Opt-out request from SC/PR",
     [
      "opt-out"
     ],
     ""
    ],
    [
     "Reinstatement of cover",
     [
      "lapse-reinstate"
     ],
     ""
    ],
    [
     "Termination/Cancellation of cover for non-SC/PR",
     [
      "foreigners"
     ],
     "No FAQ"
    ],
    [
     "Welcome Booklet and Renewal Notice",
     [
      "letters-notifs"
     ],
     ""
    ]
   ]
  ],
  [
   "Premium Computation and Collection",
   [
    [
     "Premium amount and rates",
     [
      "premium-amount",
      "catch-up"
     ],
     ""
    ],
    [
     "Premium deduction",
     [
      "how-to-pay",
      "waiting-cover"
     ],
     ""
    ]
   ]
  ],
  [
   "Premium Enforcement",
   [
    [
     "Demand Notes (e.g. undelivered, returned demand notes)",
     [
      "unpaid"
     ],
     "No FAQ"
    ],
    [
     "Enforcement measures for non-payment of CSHL premiums",
     [
      "unpaid"
     ],
     "No FAQ"
    ],
    [
     "Extension of payment deadline/instalment plan",
     [
      "arrears"
     ],
     "No FAQ"
    ],
    [
     "Waiver of interest/penalty imposed on CSHL premium arrears",
     [
      "unpaid"
     ],
     "No FAQ"
    ]
   ]
  ],
  [
   "Underwriting",
   [
    [
     "Underwriting for enrolment",
     [
      "underwriting",
      "foreigners"
     ],
     ""
    ]
   ]
  ],
  [
   "Premium Support and Subsidies",
   [
    [
     "Appeal for higher Premium Subsidies (PS)",
     [
      "ps"
     ],
     ""
    ],
    [
     "APS outcome",
     [
      "aps"
     ],
     ""
    ],
    [
     "Appeal on APS Outcome",
     [
      "aps"
     ],
     "No FAQ"
    ],
    [
     "Eligibility for Participation Incentives (PI, API)",
     [
      "pi"
     ],
     ""
    ],
    [
     "Eligibility for Premium Subsidies (PS, TS)",
     [
      "ps",
      "help-ladder"
     ],
     ""
    ],
    [
     "Request for assistance to pay premiums",
     [
      "aps",
      "help-ladder",
      "how-to-pay"
     ],
     ""
    ]
   ]
  ]
 ],
 "quick": [
  [
   "Is it compulsory?",
   "who-covered"
  ],
  [
   "How much is the payout?",
   "payout"
  ],
  [
   "Why is my participation incentive $0?",
   "pi"
  ],
  [
   "“Waiting for Cover”",
   "waiting-cover"
  ],
  [
   "Can I opt out?",
   "opt-out"
  ],
  [
   "Can I claim from both?",
   "stacking"
  ],
  [
   "Where do I check my premium?",
   "premium-amount"
  ],
  [
   "MediSave not enough",
   "how-to-pay"
  ],
  [
   "Premium subsidy / household check",
   "ps"
  ],
  [
   "Is this call a scam?",
   "scam"
  ]
 ],
 "wizard": {
  "start": "n1",
  "nodes": {
   "n1": {
    "q": "Is the person a Singapore Citizen or a Permanent Resident?",
    "opts": [
     [
      "Yes, SC or PR",
      "n2"
     ],
     [
      "No, a foreigner",
      "=r_foreigner"
     ],
     [
      "Applying for PR, or just became a PR",
      "=r_newpr"
     ]
    ]
   },
   "n2": {
    "q": "When were they born?",
    "opts": [
     [
      "1980 or later",
      "=r_1980"
     ],
     [
      "1979 or earlier",
      "n3"
     ]
    ]
   },
   "n3": {
    "q": "What ElderShield cover do they hold today?",
    "opts": [
     [
      "ElderShield 400",
      "n4a"
     ],
     [
      "ElderShield 300",
      "n4b"
     ],
     [
      "None (never joined, opted out, or lapsed)",
      "n4c"
     ],
     [
      "Not sure",
      "=r_unsure"
     ]
    ]
   },
   "n4a": {
    "q": "Can they do all six daily activities without help (washing, dressing, feeding, toileting, moving around, transferring)?",
    "opts": [
     [
      "Yes, all six",
      "=r_es400"
     ],
     [
      "Unable to do 1 or 2",
      "=r_some"
     ],
     [
      "Unable to do 3 or more",
      "=r_severe_es"
     ]
    ]
   },
   "n4b": {
    "q": "Can they do all six daily activities without help (washing, dressing, feeding, toileting, moving around, transferring)?",
    "opts": [
     [
      "Yes, all six",
      "=r_es300"
     ],
     [
      "Unable to do 1 or 2",
      "=r_some"
     ],
     [
      "Unable to do 3 or more",
      "=r_severe_es"
     ]
    ]
   },
   "n4c": {
    "q": "Can they do all six daily activities without help (washing, dressing, feeding, toileting, moving around, transferring)?",
    "opts": [
     [
      "Yes, all six",
      "=r_none"
     ],
     [
      "Unable to do 1 or 2",
      "=r_some"
     ],
     [
      "Unable to do 3 or more",
      "=r_severe_none"
     ]
    ]
   }
  },
  "results": {
   "r_foreigner": {
    "title": "Not eligible for CareShield Life",
    "points": [
     "CareShield Life only applies to Singapore Citizens and Permanent Residents.",
     "If they later become an SC/PR the rules by birth year apply, and the catch-up component applies if born 1979 or earlier."
    ],
    "faqs": [
     "How can I join CareShield Life if I am a foreigner?",
     "Is CareShield Life mandatory and do I have to join it?"
    ],
    "topics": [
     "foreigners",
     "who-covered"
    ]
   },
   "r_newpr": {
    "title": "PR applicant: health declaration first",
    "points": [
     "After ICA In-Principle Approval (wait one day), submit the MediShield Life and CareShield Life health declaration. It does not affect the PR application.",
     "Age 21+: the applicant uses Singpass (“Myself”), or an SC/PR family member submits for them. Under 21: a parent or guardian submits.",
     "Once they are SC/PR: born 1980 or later are covered at 30. Born 1979 or earlier are auto-enrolled if they have no severe disability (residency granted by 31 Dec 2025) or no disability (from 1 Jan 2026), with a catch-up component.",
     "PRs get half the SC subsidy and no Participation Incentive."
    ],
    "faqs": [
     "How do I submit the MediShield Life and CareShield Life Health Declaration form for Permanent Residence applicants?",
     "Is CareShield Life mandatory and do I have to join it?"
    ],
    "topics": [
     "foreigners",
     "ps"
    ]
   },
   "r_1980": {
    "title": "Covered automatically from age 30",
    "points": [
     "Covered from 1 Oct 2020 or at 30, whichever is later, whatever their health. No opt-out and no exemption, even if terminally ill or holding similar private insurance.",
     "Welcome Package arrives about 2 months before the 30th birthday.",
     "Pre-existing severe disability: still covered, but they pay one year’s premium to join, less than the first monthly payout.",
     "Premiums paid from MediSave, with subsidies if the household qualifies."
    ],
    "faqs": [
     "Is CareShield Life mandatory and do I have to join it?",
     "I am born in 1980 or later. What do I need to do to be covered by CareShield Life?",
     "Am I still eligible to be covered under CareShield Life if I have pre-existing disabilities?"
    ],
    "topics": [
     "who-covered",
     "waiting-cover",
     "exemption-appeal"
    ]
   },
   "r_es400": {
    "title": "Probably already in CareShield Life; if not, they can upgrade",
    "points": [
     "Those born 1970 to 1979 on ES400 with no severe disability were auto-enrolled from 1 Dec 2021 (welcome package Nov 2021). The opt-out deadline, 31 Dec 2023, has passed. Check the Healthcare dashboard to see which scheme they are in.",
     "If not auto-enrolled, they can upgrade with Singpass: ES premiums paid are taken into account, ES ends, and an ES Supplement is unaffected.",
     "ES400 members who joined CSHL from 1 Jan 2022 pay a catch-up component.",
     "60-day free-look period: opting out returns them to ES400 with a full refund.",
     "From 1 Jan 2026 they need no pre-existing disability to join."
    ],
    "faqs": [
     "I am an existing ElderShield/ElderShield Supplement policyholder. Do I have to join CareShield Life?",
     "Should I upgrade to/join CareShield Life?",
     "If I am currently on ElderShield 300/400 and choose to upgrade to CareShield Life, can I opt out or downgrade to ElderShield 300/400 subsequently?"
    ],
    "topics": [
     "es-vs-cshl",
     "join-upgrade",
     "catch-up"
    ]
   },
   "r_es300": {
    "title": "Can upgrade (optional)",
    "points": [
     "Apply with Singpass. An assessment may be needed.",
     "Catch-up component applies to ES300 members.",
     "ES premiums paid count towards the CSHL premium, ES ends, and any ES Supplement continues.",
     "Subsidies are available to ES upgraders. Check the Premium Checker first.",
     "60-day free-look period: opting out returns them to ES300 with a full refund."
    ],
    "faqs": [
     "Should I upgrade to/join CareShield Life?",
     "I am an existing ElderShield/ElderShield Supplement policyholder. Do I have to join CareShield Life?",
     "Will ElderShield 300 or 400 insureds receive premium subsidies if they upgrade to CareShield Life?"
    ],
    "topics": [
     "join-upgrade",
     "es-vs-cshl",
     "catch-up"
    ]
   },
   "r_none": {
    "title": "Can join (optional)",
    "points": [
     "No maximum entry age. Apply with Singpass; an assessment may be needed.",
     "Catch-up component applies if they were not insured or joined ES late. If ES lapsed through non-payment, the premium is as for an uninsured person.",
     "No extra premium for pre-existing medical conditions.",
     "No CPF account? They can still join (open one with a MediSave top-up, or a family member becomes payer).",
     "Participation Incentives only if covered by 31 Dec 2024, so likely $0."
    ],
    "faqs": [
     "I was born in 1979 or earlier. Can I join or upgrade to CareShield Life?",
     "I do not have a CPF account. Can I still join CareShield Life?",
     "The current ElderShield scheme has a maximum entry age of 64 years old. Can I join CareShield Life if I am older?"
    ],
    "topics": [
     "join-upgrade",
     "catch-up",
     "pi"
    ]
   },
   "r_some": {
    "title": "Cannot join CareShield Life now",
    "points": [
     "Since 1 Jan 2026, being unable to do even one ADL means they cannot join.",
     "If they hold ElderShield, they keep it. Not enough to claim yet (needs 3 or more ADLs).",
     "Point to means-tested subsidies, Home Caregiving Grant, the Seniors’ Mobility and Enabling Fund, MediFund and ComCare. Supplements need an existing CSHL/ES policy and the insurer’s underwriting."
    ],
    "faqs": [
     "I have mild or moderate disabilities or I can perform more than three Activities of Daily Living (ADLs). How can I get help for my long-term care costs?",
     "Who can still enrol in CareShield Life after 1 January 2026?"
    ],
    "topics": [
     "mild-moderate",
     "underwriting"
    ]
   },
   "r_severe_es": {
    "title": "Claim ElderShield now",
    "points": [
     "Severely disabled ElderShield insureds should claim from ES; they are not eligible for CareShield Life.",
     "ES300 pays $300 a month for up to 60 months; ES400 pays $400 for up to 72 months.",
     "Book an assessment with an MOH-accredited assessor, then apply on AIC eFASS with Singpass.",
     "MediSave Care (age 30+) can be claimed at the same time. After the ES payouts end: subsidies, ElderFund, Home Caregiving Grant."
    ],
    "faqs": [
     "I am an existing ElderShield insured. If I am eligible for ElderShield claims, should I claim from ElderShield or join CareShield Life?",
     "How do I make an ElderShield claim?",
     "If I have finished claiming my ElderShield 300/400 payouts, can I still join CareShield Life?"
    ],
    "topics": [
     "claim-steps",
     "msc",
     "mild-moderate"
    ]
   },
   "r_severe_none": {
    "title": "Not eligible to join; look at other help",
    "points": [
     "They cannot join CareShield Life with a disability, and have no ES to claim.",
     "Severe disability and age 30+: MediSave Care (needs MediSave balance of $5,000 or more).",
     "Other pointers: means-tested subsidies, ElderFund, Home Caregiving Grant, MediFund, ComCare, and AIC for services."
    ],
    "faqs": [
     "If I am born in 1979 or earlier and have severe disability, can I join CareShield Life?",
     "I have mild or moderate disabilities or I can perform more than three Activities of Daily Living (ADLs). How can I get help for my long-term care costs?"
    ],
    "topics": [
     "msc",
     "mild-moderate",
     "ltc-basics"
    ]
   },
   "r_unsure": {
    "title": "Check what they actually hold",
    "points": [
     "The Healthcare dashboard (CareShield Life/ElderShield section) shows whether they are in CSHL or ES. Its Supplements section names any Supplement insurer.",
     "Then restart this helper from the ElderShield question."
    ],
    "faqs": [
     "How do I check the types of CareShield Life and ElderShield Supplement plans I have purchased for myself or dependants?"
    ],
    "topics": [
     "supp",
     "who-covered"
    ]
   }
  }
 }
};
const CSS="#guide{display:none;flex:1;min-width:0;min-height:0;flex-direction:column;background:var(--ink)}\nbody.tpl-mode.guide-mode #guide{display:flex}\nbody.guide-mode #tplside,body.guide-mode .tplmain{display:none!important}\n#guide .g-seg{width:170px;flex:none}\n#guide #gsearch{flex:1 1 260px;max-width:520px;background:var(--ink);border:1px solid var(--line);border-radius:3px;padding:7px 10px;color:var(--beige)}\n#g-scroll{flex:1;overflow:auto;min-height:0;padding:22px 24px 70px}\n.g-wrap{max-width:1000px;margin:0 auto}\n#guide a{color:inherit;text-decoration:none}\n#guide a.btn{display:inline-block}\n.g-h1{font:600 30px/1.2 var(--serif);color:var(--sand);margin:6px 0 8px}\n.g-sub{color:var(--beige2);margin:0 0 6px;max-width:75ch}\n.g-lead{font:18px/1.55 var(--serif);color:var(--sand);margin:12px 0;max-width:75ch}\n.g-sec{margin:26px 0 10px;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--beige2)}\n.g-crumbs{display:flex;flex-wrap:wrap;gap:6px;font-size:13px;color:var(--beige2);margin-bottom:6px}\n.g-crumbs a{text-decoration:underline;text-underline-offset:2px}\n.g-crumbs .sep{opacity:.6}\n.chips{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:8px 0}\n.chips small{color:var(--beige2)}\n.g-chip{display:inline-block;background:var(--panel2);border:1px solid var(--line);color:var(--beige);border-radius:999px;padding:2px 11px;font-size:12.5px;line-height:1.5}\n.g-chip.big{font-size:13.5px;padding:4px 13px;border-color:var(--beige2)}\na.g-chip:hover,button.g-chip:hover{border-color:var(--sand);background:var(--panel)}\nbutton.g-chip{cursor:pointer;font-family:inherit}\n.g-chip.cat{border-style:dashed;color:var(--beige2)}\n.g-chip.gap{border-color:#c4806a;color:#e0a794}\n.g-chip.s-cshl{border-color:#d8ccb2}.g-chip.s-es{border-color:#c4a484;color:#d8b99b}.g-chip.s-msc{border-color:#9fb3a0;color:#b6c8b7}.g-chip.s-supp{border-color:#a7a3c9;color:#bdb9dc}\n.g-quick{display:flex;flex-wrap:wrap;gap:8px}\n.g-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:12px}\n.g-grid.t{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}\n.g-card{display:block;position:relative;background:var(--panel);border:1px solid var(--line);border-radius:4px;padding:14px 16px;color:var(--beige)}\n.g-card:hover{border-color:var(--beige2)}\n.g-card h3{font:600 17px/1.3 var(--serif);color:var(--sand);margin:0 0 5px}\n.g-card p{margin:0 0 6px;font-size:14px;color:var(--beige)}\n.g-card small{color:var(--beige2)}\n.g-card .num{position:absolute;top:12px;right:14px;font:600 26px var(--serif);color:var(--beige2);opacity:.6}\n.g-card ul{margin:6px 0 0;padding-left:18px;font-size:13px;color:var(--beige2)}\n.g-card.tool{background:var(--panel2)}\n.g-strip{background:var(--panel2);border:1px solid var(--line);border-radius:4px;padding:8px 14px;font-size:13.5px;color:var(--sand);margin-bottom:12px}\n.g-lanes{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px}\n.g-lanes .lane{display:flex;flex-direction:column;gap:10px}\n.lane-t{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--beige2)}\n.g-card.sch{border-left-width:4px}\n.g-card.s-cshl{border-left-color:#d8ccb2}.g-card.s-es{border-left-color:#c4a484}.g-card.s-msc{border-left-color:#9fb3a0}.g-card.s-supp{border-left-color:#a7a3c9}\n.g-step{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 12px}\n.g-step .st{display:flex;gap:7px;align-items:center;border:1px solid var(--line);border-radius:999px;padding:3px 12px 3px 4px;font-size:13px;color:var(--beige2)}\n.g-step .st b{background:var(--panel2);border-radius:50%;width:22px;height:22px;display:grid;place-items:center;font-size:12px;color:var(--beige)}\n.g-step .st.on{background:var(--beige);color:var(--ink);border-color:var(--beige)}.g-step .st.on b{background:var(--ink);color:var(--beige)}\n.g-step .st:hover{border-color:var(--beige2)}\n.g-note{background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--beige2);border-radius:3px;padding:9px 13px;margin:12px 0;font-size:14px}\n.g-note.warn{border-left-color:#e0a794}\n.g-note ul{margin:4px 0 0;padding-left:18px}\n.g-say,.g-steps{margin:0;padding-left:20px;font:16px/1.55 var(--serif);color:var(--sand);max-width:80ch}\n.g-say li,.g-steps li{margin:0 0 8px}\n.g-steps{list-style:decimal}\n.g-tblwrap{margin:14px 0;overflow-x:auto}\n.g-tt{font:600 15px var(--serif);color:var(--sand);margin-bottom:6px}\n.g-tbl{border-collapse:collapse;width:100%;font-size:14px;background:var(--panel)}\n.g-tbl th,.g-tbl td{border:1px solid var(--line);padding:7px 10px;text-align:left;vertical-align:top;overflow-wrap:anywhere}\n.g-tbl thead th{background:var(--panel2);color:var(--sand);font-weight:600}\n.g-tbl tbody th{color:var(--sand);font-weight:600;background:var(--panel)}\n.g-pn,.g-next{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin:30px 0 0}\n.gq-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.gq-head .sp,.sp{flex:1}\n.gq{border:1px solid var(--line);border-radius:4px;margin:0 0 8px;background:var(--panel)}\n.gq>summary{cursor:pointer;padding:10px 14px;display:flex;gap:10px;align-items:baseline;list-style:none}\n.gq>summary::-webkit-details-marker{display:none}\n.gq>summary::before{content:'\u25b8';color:var(--beige2);flex:none}\n.gq[open]>summary::before{content:'\u25be'}\n.gq>summary:hover{background:var(--panel2)}\n.gq-q{flex:1;font:16px/1.4 var(--serif);color:var(--sand);overflow-wrap:anywhere}\n.gq-tag{flex:none;font-size:11.5px;color:var(--beige2);border:1px solid var(--line);border-radius:999px;padding:0 8px;white-space:nowrap}\n.gq.miss .gq-q{color:var(--beige2)}\n.gq-body{padding:0 14px 14px}\n.gq-bar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:2px 0 10px}\n.gq-files{color:var(--beige2);font-size:12.5px}\n.g-term{border-bottom:1px solid var(--line);padding:9px 0}\n.g-term p{margin:3px 0;font-size:14.5px}\n.g-fi{width:100%;max-width:420px;background:var(--ink);border:1px solid var(--line);border-radius:3px;padding:7px 10px;color:var(--beige);margin:6px 0}\n.g-cat{border:1px solid var(--line);border-radius:4px;margin:0 0 12px;background:var(--panel)}\n.g-cat>summary{padding:10px 14px;font:600 17px var(--serif);color:var(--sand);cursor:pointer;display:flex;gap:10px;align-items:baseline}\n.g-cat>summary small{font:400 12.5px var(--sans);color:var(--beige2)}\n.g-enq{padding:9px 14px;border-top:1px solid var(--line)}\n.g-enq .nm{display:flex;gap:8px;flex-wrap:wrap;align-items:center;color:var(--sand)}\n.g-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}\n.g-links a{display:block;background:var(--panel);border:1px solid var(--line);border-radius:4px;padding:8px 12px}\n.g-links a:hover{border-color:var(--beige2)}\n.g-links small{display:block;color:var(--beige2);font-size:11.5px;overflow-wrap:anywhere}\n.g-q h2,.g-result h2{font:600 22px/1.3 var(--serif);color:var(--sand);margin:14px 0}\n.g-opts{display:flex;flex-direction:column;gap:8px;align-items:flex-start}\n#guide .btn.big{padding:10px 18px;font-size:16px}\n.g-result{background:var(--panel);border:1px solid var(--beige2);border-radius:4px;padding:6px 18px 14px;margin:10px 0}\n@media(max-width:760px){\n #g-scroll{padding:16px 12px 60px}\n .g-lanes{grid-template-columns:1fr}\n .g-h1{font-size:25px}\n #guide #gsearch{flex-basis:100%;max-width:none;order:5}\n #guide .g-seg{width:100%}\n}\n";
/* ===== Engine ===== */
const SCH={cshl:'CSHL',es:'ES',msc:'MSC',supp:'Supp'};
const topicById=new Map(DATA.topics.map(t=>[t.id,t]));
const stageById=new Map(DATA.stages.map(s=>[s.id,s]));
const $=s=>document.querySelector(s);
const h=(tag,a,...kids)=>{const e=document.createElement(tag);if(a)for(const k in a){const v=a[k];if(v==null||v===false)continue;if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k==='html')e.innerHTML=v;else if(k.slice(0,2)==='on')e[k]=v;else e.setAttribute(k,v===true?'':v)}
 kids.flat(9).forEach(c=>{if(c==null||c===false)return;e.append(c.nodeType?c:document.createTextNode(c))});return e};
const norm=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'');
const txt=html=>{const d=document.createElement('div');d.innerHTML=html;return d.textContent.replace(/\s+/g,' ').trim()};
const toast_=m=>{try{toast(m)}catch(e){}};

/* ---------- FAQ index (live from the loaded templates) ---------- */
let IDX={byKey:new Map(),rows:[],keys:[],cache:new Map()};
function buildIndex(){
 IDX={byKey:new Map(),rows:[],keys:[],cache:new Map()};
 const files=(typeof T!=='undefined'&&T.files)||[];
 files.forEach(f=>f.rows.forEach(r=>{
  if(r._q===undefined){r._q=txt(r.mid);r._a=norm(txt(r.right));r._t=(r._q+' '+txt(r.right)).toLowerCase()}
  const k=norm(r._q),o={f,r};IDX.rows.push(o);
  if(!IDX.byKey.has(k))IDX.byKey.set(k,[]);IDX.byKey.get(k).push(o)}));
 IDX.keys=[...IDX.byKey.keys()];
}
const words=s=>new Set(String(s).toLowerCase().match(/[a-z0-9]+/g)||[]);
function resolve(q){
 if(IDX.cache.has(q))return IDX.cache.get(q);
 let hits=IDX.byKey.get(norm(q));
 if(!hits&&IDX.rows.length){const w=words(q);let best=0,bk=null;
  IDX.keys.forEach(k=>{const r=IDX.byKey.get(k)[0].r._q,v=words(r);let i=0;w.forEach(x=>{if(v.has(x))i++});const j=i/(w.size+v.size-i);if(j>best){best=j;bk=k}});
  if(best>=.8)hits=IDX.byKey.get(bk)}
 let out=null;
 if(hits&&hits.length){
  const groups=new Map();hits.forEach(x=>{(groups.get(x.r._a)||groups.set(x.r._a,[]).get(x.r._a)).push(x)});
  const best=[...groups.values()].sort((a,b)=>b.length-a.length)[0];
  const titles=[...new Set(hits.map(x=>x.f.title))];
  const odd=groups.size>1?[...new Set(hits.filter(x=>!best.includes(x)).map(x=>x.f.title))]:[];
  out={f:best[0].f,r:best[0].r,titles,odd,qtext:best[0].r._q}}
 IDX.cache.set(q,out);return out}

/* ---------- routing ---------- */
let route='home',gmode='guide',lastQ='';
const parse=r=>{const p=String(r||'home').split('/');return{view:p[0]||'home',arg:decodeURIComponent(p.slice(1).join('/')||'')}};
function go(r,o){o=o||{};route=r;
 if(!o.silent){try{history[o.replace?'replaceState':'pushState']({g:r},'','#guide/'+r)}catch(e){}}
 render();if(!o.keepScroll){const s=$('#g-scroll');if(s)s.scrollTop=0}}
const href=r=>'#guide/'+r;
const link=(r,cls,...k)=>h('a',{href:href(r),class:cls,onclick:e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();go(r)}},...k);

/* ---------- small components ---------- */
const chip=(t,c)=>h('span',{class:'g-chip '+(c||'')},t);
const schChips=a=>(a||[]).map(s=>chip(SCH[s],'s-'+s));
function catChip(c){const term=c.split('›').pop().trim();
 return h('button',{class:'g-chip cat',title:'Search the Inventory tree for “'+term+'”',onclick:()=>findInInventory(term)},c)}
function findInInventory(term){
 try{setTab('inv');const q=$('#q');q.value=term;q.oninput();
  if(typeof mode!=='undefined'&&mode==='graph'){$('#gq').value=term;$('#gq').dispatchEvent(new Event('input'))}}catch(e){}}
function showInList(q){
 const hit=resolve(q),query=hit?hit.qtext:q;
 T.q=query;$('#tq').value=query;T.selFiles.clear();T.selHeads.clear();tplFilters();tplCards();setMode('list')}
function table(t){
 return h('div',{class:'g-tblwrap'},t.title&&h('div',{class:'g-tt'},t.title),
  h('table',{class:'g-tbl'},h('thead',null,h('tr',null,t.head.map(x=>h('th',null,x)))),
   h('tbody',null,t.rows.map(r=>h('tr',null,r.map((c,i)=>h(i===0?'th':'td',{scope:i===0?'row':null},c)))))))}
function banner(){
 if(typeof T==='undefined')return null;
 if(!T.loaded)return h('div',{class:'g-note'},'Loading FAQ answers…');
 if(!T.files.length)return h('div',{class:'g-note warn'},'No FAQ files are loaded, so answers will not open here. Put the .docx files in the templates folder (with templates/index.json), or use Add files in All FAQs.',' ',h('button',{class:'btn sm',onclick:()=>setMode('list')},'Open All FAQs'));
 return null}

/* FAQ accordion */
function faqItem(q,toks){
 const hit=resolve(q),d=h('details',{class:'gq'+(hit?'':' miss')});
 const sm=h('summary',null,h('span',{class:'gq-q'},hit?hit.qtext:q));
 if(hit){sm.append(h('span',{class:'gq-tag'},hit.r.header))}
 d.append(sm);
 if(!hit){d.append(h('div',{class:'gq-body'},h('div',{class:'g-note'},'This FAQ is not in the loaded files. It may have been renamed or the file is missing.')));return d}
 d.addEventListener('toggle',()=>{if(!d.open||d._f)return;d._f=1;
  const paper=h('div',{class:'paper'},h('div',{html:hit.r.right}));
  const bar=h('div',{class:'gq-bar'},
   h('button',{class:'btn sm',onclick:async()=>{try{await copyRich(hit.r.right);toast_('Copied')}catch(e){}}},'Copy answer'),
   hit.r.urls&&hit.r.urls[0]&&h('a',{class:'btn sm',href:hit.r.urls[0],target:'_blank',rel:'noopener noreferrer'},'Source page'),
   h('button',{class:'btn sm',onclick:()=>showInList(q)},'Show in All FAQs'),
   h('span',{class:'gq-files'},'In: '+hit.titles.join(' · ')));
  const body=h('div',{class:'gq-body'},bar,paper);
  if(hit.odd.length)body.append(h('div',{class:'g-note warn'},'The copy in '+hit.odd.join(', ')+' has different wording. This is the version most files agree on.'));
  d.append(body);if(toks&&toks.length&&typeof hlText==='function')hlText(paper,toks)});
 return d}
function faqList(qs,toks){
 if(!qs||!qs.length)return null;
 const box=h('div',{class:'gq-list'});
 const bar=h('div',{class:'gq-head'},h('div',{class:'g-sec'},'FAQs ('+qs.length+')'),
  h('span',{class:'sp'}),h('button',{class:'btn sm',onclick:()=>box.querySelectorAll('details').forEach(d=>d.open=true)},'Expand all'),
  h('button',{class:'btn sm',onclick:()=>box.querySelectorAll('details').forEach(d=>d.open=false)},'Collapse all'));
 const wrap=h('div',null,bar,banner(),box);qs.forEach(q=>box.append(faqItem(q,toks)));return wrap}

/* ---------- views ---------- */
function crumbs(...parts){return h('nav',{class:'g-crumbs'},parts.flatMap((p,i)=>[i?h('span',{class:'sep'},'›'):null,p.r?link(p.r,'',p.t):h('span',null,p.t)]))}
function stepper(cur){return h('div',{class:'g-step'},DATA.stages.filter(s=>s.n>0).map(s=>link('stage/'+s.id,'st'+(s.id===cur?' on':''),h('b',null,s.n),h('span',null,s.title))))}

function viewHome(){
 const w=h('div',{class:'g-wrap'});
 w.append(h('h1',{class:'g-h1'},'Member guide'),
  h('p',{class:'g-sub'},'CareShield Life · ElderShield · MediSave Care · Supplements. Pick where the member is in their journey, use a tool below, or search above. Rules shown are as at 1 Jan 2026. Always check CPF and MOH before quoting numbers.'));
 w.append(h('div',{class:'g-sec'},'Quick jumps'),h('div',{class:'g-quick'},DATA.quick.map(([l,t])=>link('topic/'+t,'g-chip big',l))));
 w.append(h('div',{class:'g-sec'},'The member’s journey'));
 w.append(h('div',{class:'g-grid j'},DATA.stages.map(s=>
  link('stage/'+s.id,'g-card',h('div',{class:'num'},s.n||'★'),h('h3',null,s.title),h('p',null,s.blurb),h('div',{class:'chips'},s.cats.map(c=>chip(c))),
   h('small',null,DATA.topics.filter(t=>t.stage===s.id).length+' topics')))));
 w.append(h('div',{class:'g-sec'},'Tools'));
 w.append(h('div',{class:'g-grid t'},[
  ['practice','Practice with sample members','Fake enquiries to test yourself.'],
  ['wizard','Which scheme applies?','Answer 3–4 taps about the member.'],
  ['enquiries','Find by enquiry type','Category › Enquiry, mapped to topics.'],
  ['numbers','Numbers cheat sheet','Payouts, dates, fees, limits.'],
  ['glossary','Jargon-buster','Every acronym in plain English.'],
  ['contacts','Contacts and links','Hotlines, insurers, e-services.'],
  ['topic/who-runs','Who does what','CPF, AIC, MOH, insurers.']].map(([r,t,d])=>link(r,'g-card tool',h('h3',null,t),h('p',null,d)))));
 w.append(h('div',{class:'g-sec'},'The four schemes and how they fit'));
 w.append(h('div',{class:'g-strip'},'Same severe disability assessment · same 3-of-6 ADL test · same AIC eFASS portal · same payout timing (CSHL, ES and MSC)'));
 const lanes=[...new Set(DATA.schemes.map(s=>s.lane))];
 w.append(h('div',{class:'g-lanes'},lanes.map(l=>h('div',{class:'lane'},h('div',{class:'lane-t'},l),
  DATA.schemes.filter(s=>s.lane===l).map(s=>link('topic/'+s.topic,'g-card sch s-'+s.id,h('h3',null,s.name+' ',chip(s.short,'s-'+s.id)),h('p',null,s.line),h('ul',null,s.facts.map(f=>h('li',null,f)))))))));
 w.append(h('p',{class:'g-sub'},link('topic/big-picture','','Side-by-side comparison and how to claim across all four →')));
 return w}

function viewStage(id){
 const s=stageById.get(id);if(!s)return viewHome();
 const w=h('div',{class:'g-wrap'});
 w.append(crumbs({r:'home',t:'Guide'},{t:s.n?'Stage '+s.n+' · '+s.title:s.title}),s.n?stepper(id):null,
  h('h1',{class:'g-h1'},s.n?s.n+'. '+s.title:s.title),h('p',{class:'g-sub'},s.blurb));
 if(s.cats.length)w.append(h('div',{class:'chips'},h('small',null,'Inventory categories: '),s.cats.map(c=>chip(c))));
 const list=DATA.topics.filter(t=>t.stage===id);
 w.append(h('div',{class:'g-grid'},list.map(t=>link('topic/'+t.id,'g-card',h('h3',null,t.title),h('p',null,t.summary),
  h('div',{class:'chips'},schChips(t.sch),t.gap&&chip('gap','gap'))))));
 const i=DATA.stages.findIndex(x=>x.id===id),nx=DATA.stages[i+1];
 if(nx)w.append(h('p',{class:'g-next'},link('stage/'+nx.id,'btn pri','Next: '+nx.n+'. '+nx.title+' →')));
 return w}

function viewTopic(id){
 const t=topicById.get(id);if(!t)return viewHome();
 const s=stageById.get(t.stage),w=h('div',{class:'g-wrap'});
 w.append(crumbs({r:'home',t:'Guide'},{r:'stage/'+s.id,t:s.n?s.n+'. '+s.title:s.title},{t:t.title}),
  h('h1',{class:'g-h1'},t.title),h('div',{class:'chips'},schChips(t.sch),(t.cats||[]).map(catChip)),
  h('p',{class:'g-lead'},t.summary));
 if(t.wizard)w.append(h('p',null,link('wizard','btn','Open “Which scheme applies?” helper')));
 if(t.gap)w.append(h('div',{class:'g-note warn'},h('b',null,'Gap. '),t.gap));
 (t.tables||[]).forEach(x=>w.append(table(x)));
 if(t.steps&&t.steps.length)w.append(h('div',{class:'g-sec'},'Steps'),h('ol',{class:'g-steps'},t.steps.map(x=>h('li',null,x))));
 if(t.say&&t.say.length)w.append(h('div',{class:'g-sec'},'What to tell the member'),h('ul',{class:'g-say'},t.say.map(x=>h('li',null,x))));
 if(t.watch&&t.watch.length)w.append(h('div',{class:'g-note'},h('b',null,'Watch out. '),h('ul',null,t.watch.map(x=>h('li',null,x)))));
 const rel=(t.related||[]).map(r=>topicById.get(r)).filter(Boolean);
 if(rel.length||(t.links||[]).length){
  w.append(h('div',{class:'g-sec'},'Go deeper'),h('div',{class:'chips'},rel.map(r=>link('topic/'+r.id,'g-chip big',r.title)),
   (t.links||[]).map(([l,u])=>h('a',{class:'g-chip big ext',href:u,target:'_blank',rel:'noopener noreferrer'},l+' ↗'))))}
 const fl=faqList(t.faqs);if(fl)w.append(fl);
 const sib=DATA.topics.filter(x=>x.stage===t.stage),i=sib.indexOf(t);
 w.append(h('div',{class:'g-pn'},i>0?link('topic/'+sib[i-1].id,'btn','← '+sib[i-1].title):h('span'),i<sib.length-1?link('topic/'+sib[i+1].id,'btn','Next: '+sib[i+1].title+' →'):(s.n&&stageById.get(DATA.stages[DATA.stages.indexOf(s)+1]?.id)?link('stage/'+DATA.stages[DATA.stages.indexOf(s)+1].id,'btn pri','Next stage →'):h('span'))));
 return w}

function viewGlossary(){
 const w=h('div',{class:'g-wrap'});w.append(crumbs({r:'home',t:'Guide'},{t:'Jargon-buster'}),h('h1',{class:'g-h1'},'Jargon-buster'));
 const f=h('input',{type:'search',class:'g-fi',placeholder:'Filter terms'}),box=h('div');
 const draw=()=>{box.innerHTML='';const q=f.value.toLowerCase().split(/\s+/).filter(Boolean);let last='';
  DATA.glossary.filter(x=>q.every(k=>(x.term+' '+x.meaning).toLowerCase().includes(k))).forEach(x=>{
   if(x.group!==last){last=x.group;box.append(h('div',{class:'g-sec'},x.group))}
   box.append(glossItem(x))});if(!box.children.length)box.append(h('div',{class:'empty'},'No terms match.'))};
 f.oninput=draw;w.append(f,box);draw();return w}
function glossItem(x){return h('div',{class:'g-term'},h('b',null,x.term),h('p',null,x.meaning),h('div',{class:'chips'},x.see.map(s=>topicById.get(s)).filter(Boolean).map(t=>link('topic/'+t.id,'g-chip',t.title))))}

function viewNumbers(){
 const w=h('div',{class:'g-wrap'});w.append(crumbs({r:'home',t:'Guide'},{t:'Numbers'}),h('h1',{class:'g-h1'},'Numbers cheat sheet'),
  h('p',{class:'g-sub'},'Figures taken from the FAQs. Payout years other than 2021 and 2026 come from the earlier guide (see Payout topic).'));
 DATA.numbers.forEach(n=>w.append(table({title:n.title,head:['Item','Figure'],rows:n.rows})));return w}

function viewEnquiries(){
 const w=h('div',{class:'g-wrap'});w.append(crumbs({r:'home',t:'Guide'},{t:'By enquiry type'}),h('h1',{class:'g-h1'},'Find by enquiry type'),
  h('p',{class:'g-sub'},'Category › Enquiry from the Inventory hierarchy. “No FAQ” means none of the four files answers it yet.'));
 DATA.enquiries.forEach(([cat,items])=>{const d=h('details',{class:'g-cat',open:true},h('summary',null,cat,h('small',null,items.length+' enquiries')));
  items.forEach(([e,tp,note])=>d.append(h('div',{class:'g-enq'},h('div',{class:'nm'},e,note&&chip(note,/^No FAQ/.test(note)?'gap':'')),
   h('div',{class:'chips'},tp.map(x=>topicById.get(x)).filter(Boolean).map(t=>link('topic/'+t.id,'g-chip big',t.title)),
    h('button',{class:'g-chip cat',title:'Search the Inventory tree',onclick:()=>findInInventory(e.replace(/^\(For BP\)\s*/,''))},'Find in Inventory')))));w.append(d)});
 w.append(h('div',{class:'g-sec'},'Look-alike categories'),table({head:['Pair','How to tell them apart'],rows:DATA.look}));return w}

function viewContacts(){
 const w=h('div',{class:'g-wrap'});w.append(crumbs({r:'home',t:'Guide'},{t:'Contacts and links'}),h('h1',{class:'g-h1'},'Contacts and links'));
 w.append(table({title:'Phone and email',head:['Who','Contact'],rows:DATA.contacts}));
 DATA.linkgroups.forEach(([t,ks])=>{w.append(h('div',{class:'g-sec'},t),h('div',{class:'g-links'},ks.map(k=>DATA.links[k]).map(([l,u])=>h('a',{href:u,target:'_blank',rel:'noopener noreferrer'},h('b',null,l),h('small',null,u)))))});return w}

function viewWizard(id){
 const W=DATA.wizard,w=h('div',{class:'g-wrap'});
 w.append(crumbs({r:'home',t:'Guide'},{t:'Which scheme applies?'}),h('h1',{class:'g-h1'},'Which scheme applies?'));
 const trail=h('p',{class:'g-sub'},'Rules as at 1 Jan 2026.');w.append(trail);
 const key=id||W.start;
 if(W.results[key]){const r=W.results[key];
  w.append(h('div',{class:'g-result'},h('h2',null,r.title),h('ul',{class:'g-say'},r.points.map(p=>h('li',null,p))),
   h('div',{class:'chips'},r.topics.map(x=>topicById.get(x)).map(t=>link('topic/'+t.id,'g-chip big',t.title)))));
  const fl=faqList(r.faqs);if(fl)w.append(fl);
  w.append(h('p',null,link('wizard','btn','Start over')));return w}
 const n=W.nodes[key];w.append(h('div',{class:'g-q'},h('h2',null,n.q),h('div',{class:'g-opts'},n.opts.map(([l,nx])=>link('wizard/'+nx.replace(/^=/,''),'btn big',l)))));
 if(key!==W.start)w.append(h('p',null,link('wizard','btn sm','Start over')));return w}

/* ---------- search ---------- */
function search(q){
 const toks=q.toLowerCase().split(/\s+/).filter(Boolean),res={topics:[],gloss:[],faqs:[]};
 if(!toks.length)return{res,toks};
 DATA.topics.forEach(t=>{
  const hay=(t.title+' '+t.summary+' '+(t.say||[]).join(' ')+' '+(t.steps||[]).join(' ')+' '+(t.watch||[]).join(' ')+' '+(t.keys||'')+' '+(t.cats||[]).join(' ')+' '+(t.tables||[]).map(x=>x.rows.flat().join(' ')).join(' ')+' '+(t.gap||'')).toLowerCase();
  if(!toks.every(k=>hay.includes(k)))return;
  let sc=0;toks.forEach(k=>{if(t.title.toLowerCase().includes(k))sc+=5;if((t.keys||'').includes(k))sc+=3;if(t.summary.toLowerCase().includes(k))sc+=2;if((t.cats||[]).join(' ').toLowerCase().includes(k))sc+=3;sc+=1});
  res.topics.push([sc,t])});
 res.topics.sort((a,b)=>b[0]-a[0]);
 DATA.glossary.forEach(x=>{const hay=(x.term+' '+x.meaning).toLowerCase();if(toks.every(k=>hay.includes(k)))res.gloss.push(x)});
 IDX.rows.forEach(o=>{if(!toks.every(k=>o.r._t.includes(k)))return;let sc=0;const ql=o.r._q.toLowerCase();toks.forEach(k=>{if(ql.includes(k))sc+=3;sc+=1});res.faqs.push([sc,o])});
 res.faqs.sort((a,b)=>b[0]-a[0]);
 const seen=new Set();res.faqs=res.faqs.filter(([s,o])=>{const k=norm(o.r._q);if(seen.has(k))return false;seen.add(k);return true});
 return{res,toks}}
function viewSearch(q){
 const w=h('div',{class:'g-wrap'}),{res,toks}=search(q);
 w.append(h('h1',{class:'g-h1'},'Results for “'+q+'”'),banner());
 const total=res.topics.length+res.gloss.length+res.faqs.length;
 if(!total)w.append(h('div',{class:'empty'},'Nothing found. Try fewer or different words, or check the Jargon-buster.'));
 if(res.topics.length){w.append(h('div',{class:'g-sec'},'Guide topics ('+res.topics.length+')'),h('div',{class:'g-grid'},res.topics.slice(0,12).map(([s,t])=>link('topic/'+t.id,'g-card',h('h3',null,t.title),h('p',null,t.summary),h('div',{class:'chips'},schChips(t.sch))))))}
 if(res.gloss.length)w.append(h('div',{class:'g-sec'},'Jargon ('+res.gloss.length+')'),res.gloss.slice(0,8).map(glossItem));
 if(res.faqs.length){const qs=res.faqs.slice(0,30).map(([s,o])=>o.r._q);
  const box=h('div',{class:'gq-list'});qs.forEach(x=>box.append(faqItem(x,toks)));
  w.append(h('div',{class:'gq-head'},h('div',{class:'g-sec'},'FAQs ('+res.faqs.length+(res.faqs.length>30?', showing 30':'')+')'),h('span',{class:'sp'}),
   h('button',{class:'btn sm',onclick:()=>{T.q=q;$('#tq').value=q;T.selFiles.clear();T.selHeads.clear();tplFilters();tplCards();setMode('list')}},'Open all in All FAQs')),box)}
 return w}

/* ---------- shell ---------- */
let shell=null;
function render(){
 if(!shell)return;const body=$('#g-body');body.innerHTML='';
 const {view,arg}=parse(route);
 const m={home:viewHome,stage:()=>viewStage(arg),topic:()=>viewTopic(arg),glossary:viewGlossary,numbers:viewNumbers,enquiries:viewEnquiries,contacts:viewContacts,wizard:()=>viewWizard(arg),search:()=>viewSearch(arg),practice:()=>window.Quiz?Quiz.view(arg,Guide.api):h('div',{class:'g-wrap'},h('div',{class:'g-note warn'},'Practice mode needs quiz.js next to guide.js, loaded after it.'))};
 body.append((m[view]||viewHome)());
 const gs=$('#gsearch');if(view!=='search'&&gs.value&&document.activeElement!==gs)gs.value=''}
function setMode(m){gmode=m;document.body.classList.toggle('guide-mode',m==='guide');const a=$('#gm-guide'),b=$('#gm-list');if(a){a.classList.toggle('on',m==='guide');b.classList.toggle('on',m==='list')}}
function build(){
 const tpl=$('#tpl');if(!tpl||shell)return;
 const st=document.createElement('style');st.textContent=CSS;document.head.append(st);
 shell=h('div',{id:'guide'},
  h('div',{class:'gbar'},h('div',{class:'seg g-seg'},h('button',{id:'gm-guide',class:'on',onclick:()=>setMode('guide')},'Guide'),h('button',{id:'gm-list',onclick:()=>setMode('list')},'All FAQs')),
   h('input',{id:'gsearch',type:'search',placeholder:'Search the guide, jargon and every FAQ',autocomplete:'off','aria-label':'Search the guide',oninput:e=>{const v=e.target.value.trim();clearTimeout(build.t);build.t=setTimeout(()=>{if(v){lastQ=v;go('search/'+encodeURIComponent(v),{replace:parse(route).view==='search'})}else if(parse(route).view==='search')go('home')},150)}}),
   link('home','btn sm','Home'),link('wizard','btn sm','Which scheme?'),link('practice','btn sm','Practice')),
  h('div',{id:'g-scroll'},h('div',{id:'g-body'})));
 tpl.append(shell);
 const tg=$('#tguide');if(tg)tg.onclick=()=>setMode('guide');
 window.addEventListener('popstate',()=>{const m=location.hash.match(/^#guide\/(.*)$/);route=m?m[1]:'home';if(m)setMode('guide');render()});
}
const Guide={
 onOpen(){build();if(!Guide._seen){Guide._seen=1;const m=location.hash.match(/^#guide\/(.*)$/);route=m?m[1]:'home';setMode('guide')}
  buildIndex();render()},
 refresh(){if(!shell)return;buildIndex();render()},
 go,setMode
};
Guide.api={h,chip,link,go,faqItem,resolve,topicById,DATA,norm,crumbs,table};
window.Guide=Guide;
if(/^#guide/.test(location.hash)){const t=()=>{try{setTab('tpl')}catch(e){setTimeout(t,50)}};t()}

})();
