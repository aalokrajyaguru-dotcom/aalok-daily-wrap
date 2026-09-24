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
      note: "Midcaps fell harder than the benchmarks. The Nifty Midcap 100 slumped 2.25% to 60,990.15 as the IRDAI distribution-reform draft hammered insurance-linked names - Max Financial Services and PB Fintech tumbled about 10% and L&T Finance lost over 7%; Escorts Kubota and Tech Mahindra were among the few gainers."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.53,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps fell less than midcaps but still slid. The Nifty Smallcap 100 dropped 1.53%; Vikran Engineering (+9.5%) and Avantel (+6.5%) surged on fresh order wins, while Concord Biotech slid 5% after shareholders approved a 1:1 bonus issue."
    }
  ],

  weeklyWrap: {
    headline: "Global bond rout, $102+ crude and the IRDAI draft trigger the sharpest selloff in weeks",
    niftyFiveSessionPct: -0.89,   // vs 17 Sep close of 23,270.60
    sensexFiveSessionPct: -0.99,  // vs 17 Sep close of 74,314.59
    summary: "The Nifty tumbled 1.64% to 23,063.10 on Thursday - its first close below 23,100 since June 11 and its lowest level since early April - while the Sensex crashed 1,247.71 points to 73,580.54 as a global bond rout, spiking crude and an IRDAI consultation paper combined into the market's sharpest fall in weeks. Over the last five sessions the Nifty is down 0.89% and the Sensex 0.99%; week-to-date (from Friday's close) the Nifty is down 1.21% and the Sensex 0.96%. The US 10-year Treasury yield jumped nearly 14 bps to 5.11%, its highest since 2007, lifting October Fed rate-hike odds to about 66%, while Brent surged back above $102 (trading up to ~$106) as US-Iran tensions simmered. IRDAI's draft distribution reforms crushed insurers and insurance-distributing banks and NBFCs: HDFC Life lost 6.2%, Bajaj Finance 5.9%, and PB Fintech suffered its biggest fall on record - down as much as 26% intraday. India VIX spiked 22.8% to 12.70, the Bank Nifty lost 1.7%, the Nifty Midcap 100 2.25% and the Nifty Smallcap 100 1.53%; only three of the 50 Nifty stocks closed higher. Amid the mayhem, the NSE itself listed on the BSE at Rs 1,800 (+0.84% over the Rs 1,785 IPO price) and rallied up to Rs 1,878 intraday - a market cap of about Rs 4.6 lakh crore, making it India's ninth most valued listed company. BSE-listed companies shed roughly Rs 2.5 lakh crore of market value. FIIs were net buyers on Wednesday (Rs 1,617 crore) and DIIs bought for a 31st straight session (Rs 2,341 crore)."
  },

  dayByDay: [
    { date: "2026-09-18", label: "Fri 18 Sep", niftyClose: 23346.40, niftyChangePct: 0.33, sensexChangePct: -0.03, note: "Third straight Nifty gain; midcaps +1.24% and smallcaps +1.74% outperform. FIIs sell Rs 3,209 cr, DIIs absorb." },
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyChangePct: -0.36, sensexChangePct: -0.44, niftyClose: 23329.00, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Global bond rout and $102+ crude trigger a deep cut on monthly Sensex expiry: Nifty closes below 23,100 for the first time since June 11; IRDAI draft norms slam insurers and NBFCs; NSE lists at a modest premium." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: -0.44, note: "Least-bad major sector after four straight weak sessions; Cipla, ONGC and NTPC were the only Nifty 50 stocks in the green" },
    { name: "Nifty FMCG", changePct: -1.0 },
    { name: "Nifty Energy", changePct: -1.2 },
    { name: "Nifty Oil & Gas", changePct: -1.3 },
    { name: "Nifty PSU Bank", changePct: -1.3 },
    { name: "Nifty Auto", changePct: -1.5 },
    { name: "Nifty Bank", changePct: -1.7, note: "Bajaj Finance (-5.87%), Axis Bank (-4.56%) and Bajaj Finserv (-4.33%) led the slide on the IRDAI draft" },
    { name: "Nifty Metal", changePct: -1.9, note: "A day after leading the rally on record copper, metals gave way as the dollar strengthened and copper's six-session win streak ended" },
    { name: "Nifty Private Bank", changePct: -2.2, note: "Worst sector of the day" }
  ],

  movers: {
    gainers: [
      { name: "Cipla", changePct: 1.16, cap: "Largecap", note: "Top Nifty 50 gainer, one of only three constituents to end in the green" },
      { name: "Escorts Kubota", changePct: 0.9, cap: "Midcap", note: "Among the few mid-cap gainers on an otherwise brutal day for the segment" },
      { name: "Vikran Engineering", changePct: 9.5, cap: "Smallcap", note: "Jumped on new orders worth ~Rs 154 crore from Power Grid Corporation of India" }
    ],
    losers: [
      { name: "HDFC Life Insurance", changePct: -6.16, cap: "Largecap", note: "Top Nifty 50 loser as IRDAI's draft distribution norms threaten insurer commissions and expense limits" },
      { name: "PB Fintech", changePct: -10.0, cap: "Midcap", note: "Biggest fall on record - down as much as 26% intraday - on the IRDAI draft; over Rs 25,000 crore of market value wiped out" },
      { name: "Concord Biotech", changePct: -5.0, cap: "Smallcap", note: "Declined 5% after shareholders approved a 1:1 bonus issue" }
    ],
    sensexWinners: ["Cipla", "NTPC"],
    sensexLaggards: ["Bajaj Finance", "Axis Bank", "Bajaj Finserv", "IndiGo", "Asian Paints", "Kotak Mahindra Bank", "Trent"]
  },

  watch: [
    {
      title: "NSE settles into listed life",
      detail: "The exchange listed at Rs 1,800 (+0.84% over the Rs 1,785 IPO price) and rallied up to Rs 1,878 intraday, with a market cap of about Rs 4.6 lakh crore - India's ninth most valued listed company, ahead of HUL and Sun Pharma. Macquarie has initiated with an Outperform (TP Rs 1,965) and Emkay with a Buy (TP Rs 2,050). Pre-IPO shareholders are locked in for 6-18 months, so watch how price discovery plays out with limited supply."
    },
    {
      title: "Nifty on the verge of a breakdown",
      detail: "Thursday's close of 23,063.10 sits below the crucial 23,100 support (the June 11 low) and is the index's lowest level since early April. Analysts see 23,000 as the immediate make-or-break - a decisive break could drag the Nifty to 22,600 quickly - while any bounce may struggle below 23,300."
    },
    {
      title: "Crude and the US 10-year yield",
      detail: "Brent is back above $102 a barrel (it traded near $106 intraday) as US-Iran tensions persist, and the US 10-year Treasury yield is at 5.11%, its highest since 2007, with traders pricing a 66% chance of an October Fed hike. Geojit's V K Vijayakumar: a smart recovery in equities looks remote as long as these two headwinds remain."
    },
    {
      title: "IRDAI draft fallout and DII support",
      detail: "The insurance regulator's consultation paper on distribution reforms and EoM caps hit insurers, distributors and bancassurance-heavy banks and NBFCs - watch for company responses and any regulatory clarification. DIIs have now bought for 31 straight sessions, cushioning FII selling."
    }
  ],

  reads: [
    {
      title: "Taking Stock: Nifty breaches 23,100 for first time since June 11; Sensex tanks 1,248 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/taking-stock-nifty-breaches-23-100-for-first-time-since-june-11-sensex-tanks-1-248-pts-14037384.html"
    },
    {
      title: "Sensex, Nifty crash; fear index shoots up 23%: Key factors weighing on the market",
      source: "BusinessToday",
      url: "https://www.businesstoday.in/markets/stocks/story/sensex-nifty-crash-fear-index-shoots-up-24-key-factors-weighing-on-the-market-557562-2026-09-24"
    },
    {
      title: "Stock market crash today: Sensex tanks over 1,200 points, Nifty goes below 23,100 - top reasons for fall",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/stock-market-crash-today-why-are-sensex-nifty-down-on-september-24-2026-op-reasons-for-fall/articleshow/134456699.cms"
    },
    {
      title: "NSE Share price today: NSE shares extend gains up to 5% shortly after market debut; should you buy, sell, or hold?",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/ipo/nse-share-price-today-nse-stock-lists-at-nearly-1pc-premium-over-ipo-price-on-bse-should-you-buy-sell-or-hold-14036948.html"
    },
    {
      title: "NSE makes historic market debut at a premium of 1%, rises further on listing",
      source: "Indian Express",
      url: "https://indianexpress.com/article/business/nse-ipo-listing-market-cap-bse-insurance-stocks-irdai-10891795/"
    },
    {
      title: "Stock market crash: Nifty 50, Sensex fall 1% as crude tops $102; financial, insurance stocks slide on IRDAI proposal",
      source: "Livemint",
      url: "https://www.livemint.com/market/stock-market-news/stock-market-crash-nifty-50-sensex-fall-1-as-crude-tops-102-financial-insurance-stocks-slide-on-irdai-proposal-11790221859967.html"
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
