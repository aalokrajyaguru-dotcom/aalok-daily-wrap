const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 24 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 24 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23063.10,
      dayChange: -383.70,
      dayChangePct: -1.64,
      weekChangePct: -1.21, // week-to-date vs Fri, 18 Sep close of 23,346.40
      spark: [23346.40, 23414.30, 23329.00, 23446.80, 23063.10] // last 5 closes: 18, 21, 22, 23, 24 Sep
    },
    {
      name: "Sensex",
      close: 73580.54,
      dayChange: -1247.71,
      dayChangePct: -1.67,
      weekChangePct: -0.96, // week-to-date vs Fri, 18 Sep close of 74,294.96
      spark: [74294.96, 74858.99, 74529.08, 74828.25, 73580.54] // last 5 closes: 18, 21, 22, 23, 24 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -2.25,
      weekChangePct: null,
      spark: null,
      note: "Midcaps bore the brunt of the selloff. The Nifty Midcap 100 was the day's worst major index, falling 2.25% to 60,990.15; PB Fintech (-36%) crashed on the IRDAI commission-cap proposal while Avantel and Vikran Engineering gained on order wins."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.53,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps fell less than midcaps. The Nifty Smallcap 100 declined about 1.5%; newly listed insurtech Turtlemint (-20%) hit its lower circuit on the IRDAI draft, while Vikran Engineering (+9.5%) jumped on new Power Grid orders."
    }
  ],

  weeklyWrap: {
    headline: "Worst session since March as US yields top 5% and crude hits $106; Nifty cracks 23,100",
    niftyFiveSessionPct: -0.89,   // vs 17 Sep close of 23,270.60
    sensexFiveSessionPct: -0.99,  // vs 17 Sep close of 74,314.59
    summary: "The Nifty crashed 1.64% to 23,063.10 and the Sensex 1.67% to 73,580.54 on Thursday - the worst single-day fall since March 9 - after the US 10-year Treasury yield jumped about 14 basis points to 5.11%, its highest since 2007, and Brent crude surged back above $106 a barrel with no sign of the US-Iran standoff easing. Traders now price a 66% chance of an October Fed hike. Every major sectoral index ended in the red - Nifty IT (-0.44%) was the least-bad while financial services (-2.4%) and private banks (-2.2%) fell hardest - and all 30 Sensex constituents were in the red at the close. The IRDAI's proposal to bring back hard caps on insurance commissions crushed insurance-linked names: PB Fintech plunged 36%, newly listed Turtlemint hit its lower circuit (-20%) and HDFC Life (-6.2%) was the top Nifty loser. The Bank Nifty fell 1.7% to below 56,000, the Nifty Midcap 100 dropped 2.25% to 60,990.15, and India VIX spiked 22.8% to 12.70. Over the last five sessions the Nifty is down 0.89% and the Sensex 0.99%. The day's silver lining: the NSE finally made its market debut, listing at Rs 1,800 (0.8% above the Rs 1,785 issue price) and extending gains to trade around Rs 1,850-1,875 - a market value of roughly Rs 4.6 lakh crore, placing India's largest exchange among the country's ten most-valued listed companies."
  },

  dayByDay: [
    { date: "2026-09-18", label: "Fri 18 Sep", niftyClose: 23346.40, niftyChangePct: 0.33, sensexChangePct: -0.03, note: "Third straight Nifty gain; midcaps +1.24% and smallcaps +1.74% outperform. FIIs sell Rs 3,209 cr, DIIs absorb." },
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: -0.44, note: "The 'best' sector of a terrible day - every major sectoral index ended in the red" },
    { name: "Nifty Pharma", changePct: -0.46, note: "Defensives held up best; Cipla (+1.16%) was the top Nifty stock" },
    { name: "Nifty Media", changePct: -0.75 },
    { name: "Nifty FMCG", changePct: -1.18 },
    { name: "Nifty Auto", changePct: -1.46 },
    { name: "Nifty Bank", changePct: -1.7, note: "Bank Nifty slipped about 1.7% to below 56,000 as private banks slid" },
    { name: "Nifty Metal", changePct: -1.9, note: "Sharp reversal from Wednesday's 2.4% copper-led rally as the dollar and yields surged" },
    { name: "Nifty Private Bank", changePct: -2.2, note: "Worst major sector as the IRDAI proposal and rate fears hit banks and insurers" }
  ],

  movers: {
    gainers: [
      { name: "Cipla", changePct: 1.16, cap: "Largecap", note: "Top Nifty gainer, closing at 1,399 - one of the only Nifty stocks in the green; ONGC, NTPC and BEL also held gains" },
      { name: "Vikran Engineering", changePct: 9.5, cap: "Smallcap", note: "Jumped after winning new orders worth about Rs 154 crore from Power Grid Corporation" },
      { name: "Avantel", changePct: 6.5, cap: "Smallcap", note: "Surged after securing an order worth Rs 177.35 crore" }
    ],
    losers: [
      { name: "HDFC Life Insurance", changePct: -6.2, cap: "Largecap", note: "Top Nifty loser, closing around 527, as the IRDAI draft on insurance commissions hit life insurers" },
      { name: "PB Fintech", changePct: -36.0, cap: "Midcap", note: "Record single-day fall - closed at 1,207, erasing over Rs 25,000 crore of market value on the IRDAI commission-cap proposal" },
      { name: "Turtlemint Fintech Solutions", changePct: -20.0, cap: "Smallcap", note: "Newly listed insurtech hit its lower circuit, closing at 109, on the IRDAI draft" }
    ],
    sensexWinners: [],
    sensexLaggards: ["Bajaj Finance", "Axis Bank", "Bajaj Finserv", "InterGlobe Aviation (IndiGo)", "Asian Paints", "Trent"]
  },

  watch: [
    {
      title: "Nifty's make-or-break at 23,000",
      detail: "Thursday's close of 23,063.10 is the lowest since mid-June and the worst single-day fall since March 9. Immediate support sits at 23,000, then 22,800; any bounce faces resistance at 23,200-23,300 - the zone the index broke down from during the session."
    },
    {
      title: "US yields at a 19-year high",
      detail: "The US 10-year Treasury yield jumped about 14 basis points to 5.11% - its highest since 2007 - after US business-activity data came in at a five-year high, and traders now assign a 66% probability to an October Fed rate hike. Watch whether the global bond rout extends."
    },
    {
      title: "Crude and the US-Iran standoff",
      detail: "Brent spiked as much as 3.2% to about $106 a barrel after Iran's president told the UN General Assembly that Tehran would never surrender to US pressure. Crude drives India's import bill, inflation and the rupee, which slipped to about 95.87 per dollar."
    },
    {
      title: "IRDAI's commission-cap proposal",
      detail: "The insurance regulator's consultation paper proposing lower Expenses of Management caps and hard, product-level commission caps hit distributors hard - PB Fintech fell 36% and Turtlemint 20%. Banks and NBFCs with higher insurance fee income (Axis Bank, Bajaj Finance among names JM Financial flagged) stay in focus; watch for industry feedback on the draft."
    },
    {
      title: "NSE settles in after its debut",
      detail: "NSE listed at Rs 1,800 on the BSE - just 0.8% above the Rs 1,785 issue price - then extended gains to trade around Rs 1,850-1,875, valuing India's largest exchange at roughly Rs 4.6 lakh crore, the ninth-largest listed company in India. Macquarie started coverage with Outperform (target Rs 1,965) and Emkay with Buy (target Rs 2,050)."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty crash; fear index shoots up 23%: Key factors weighing on the market",
      source: "Business Today",
      url: "https://www.businesstoday.in/markets/stocks/story/sensex-nifty-crash-fear-index-shoots-up-24-key-factors-weighing-on-the-market-557562-2026-09-24"
    },
    {
      title: "Taking Stock: Nifty breaches 23,100 for first time since June 11; Sensex tanks 1,248 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/taking-stock-nifty-breaches-23-100-for-first-time-since-june-11-sensex-tanks-1-248-pts-14037384.html"
    },
    {
      title: "SENSEX, NIFTY50 posts worst day in over six months as crude surges, US bond yield tops 5%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/sensex-nifty-50-posts-worst-day-in-over-six-months-as-crude-surges-us-bond-yield-tops-5/article-200831/"
    },
    {
      title: "Stock market crash today: Sensex ends over 1,200 points, Nifty goes below 23,100 - top reasons for fall",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/stock-market-crash-today-why-are-sensex-nifty-down-on-september-24-2026-op-reasons-for-fall/articleshow/134456699.cms"
    },
    {
      title: "NSE shares defy the over Rs 20,000-crore IPO curse by listing at a premium",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/nse-defies-the-over-rs-20-000-crore-ipo-curse-by-listing-at-a-premium-14037111.html"
    }
  ],

  glossary: [
    {
      term: "Offer for Sale (OFS)",
      meaning: "An IPO mechanism where existing shareholders sell their shares to the public; the company itself raises no money. The NSE IPO is entirely an OFS, so all Rs 22,561 crore of proceeds go to selling shareholders, not the exchange."
    },
    {
      term: "QIB",
      meaning: "Qualified Institutional Buyer - banks, mutual funds, insurers and other large institutions allowed to bid in IPOs. The QIB portion of the NSE IPO was subscribed 12.68 times, driving the overall 5.7x figure."
    },
    {
      term: "GMP (Grey Market Premium)",
      meaning: "The unofficial premium at which IPO shares trade before listing. NSE shares were quoting around Rs 55 (about 3%) over the Rs 1,785 upper price band ahead of Thursday's listing - an informal signal, not a guarantee of listing gains."
    }
  ]
};
