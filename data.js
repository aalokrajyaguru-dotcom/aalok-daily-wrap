const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 23 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 23 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23446.80,
      dayChange: 117.80,
      dayChangePct: 0.50,
      weekChangePct: 0.43, // week-to-date vs Fri, 18 Sep close of 23,346.40
      spark: [23270.60, 23346.40, 23414.30, 23329.00, 23446.80] // last 5 closes: 17, 18, 21, 22, 23 Sep
    },
    {
      name: "Sensex",
      close: 74828.25,
      dayChange: 299.17,
      dayChangePct: 0.40,
      weekChangePct: 0.72, // week-to-date vs Fri, 18 Sep close of 74,294.96
      spark: [74314.59, 74294.96, 74858.99, 74529.08, 74828.25] // last 5 closes: 17, 18, 21, 22, 23 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.43,
      weekChangePct: null,
      spark: null,
      note: "Midcaps rose with the market. The Nifty Midcap 100 climbed 0.70% to 62,396.45; SAIL (+6.57%), PB Fintech and Motilal Oswal led, while Persistent Systems, Paytm and Swiggy lagged."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.52,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps outpaced largecaps. The Nifty Smallcap 100 rose 0.89% to 19,991.50; Whirlpool of India (+20%), Ola Electric and Wockhardt led, while Pine Labs, Inox Wind and Devyani International lagged."
    }
  ],

  weeklyWrap: {
    headline: "Benchmarks rebound to a two-week high as metals rally on record copper",
    niftyFiveSessionPct: 0.99,   // vs 16 Sep close of 23,217.60
    sensexFiveSessionPct: 0.66,  // vs 16 Sep close of 74,336.45
    summary: "The Nifty snapped back on Wednesday, rising 0.50% to 23,446.80 - a two-week high - as metal stocks rallied on record copper prices and Brent crude slipped below $100 a barrel on hopes of US-Iran talks at the UN. Over the last five sessions the Nifty is up 0.99% and the Sensex 0.66%; week-to-date (from Friday's close) the Nifty is up 0.43% and the Sensex 0.72%. Market breadth was firmly positive at roughly 2:1 (2,344 advances vs 1,232 declines on the NSE), the Bank Nifty gained 0.59% to about 56,549, and India VIX eased 6.4% to 10.29. S&P and Fitch raised their India FY27 GDP growth forecasts to 7% and 6.9% respectively, while FIIs sold Rs 3,810 crore on Tuesday - once again absorbed by DII buying of Rs 4,120 crore. IT was the lone weak major sector for a fourth session. Three IPOs - Hero Motors, Jindal Supreme and SS Retail - listed with debut gains of 17-76%."
  },

  dayByDay: [
    { date: "2026-09-17", label: "Thu 17 Sep", niftyClose: 23270.60, niftyChangePct: 0.23, sensexChangePct: -0.03, note: "Flat close as value buying offsets elevated crude (Brent ~$104); NSE IPO opens for subscription." },
    { date: "2026-09-18", label: "Fri 18 Sep", niftyClose: 23346.40, niftyChangePct: 0.33, sensexChangePct: -0.03, note: "Third straight Nifty gain; midcaps +1.24% and smallcaps +1.74% outperform. FIIs sell Rs 3,209 cr, DIIs absorb." },
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." }
  ],

  sectors: [
    { name: "BSE Commodities", changePct: 2.83, note: "Best sector of the day as copper prices hit a fresh all-time high" },
    { name: "Nifty Metal", changePct: 2.4, note: "SAIL, Nalco, Hindalco, Tata Steel and Vedanta led the charge" },
    { name: "Nifty FMCG", changePct: 1.32 },
    { name: "Nifty PSU Bank", changePct: 1.14 },
    { name: "Nifty Realty", changePct: 1.1 },
    { name: "Nifty Pharma", changePct: 0.9 },
    { name: "Nifty Media", changePct: -0.5 },
    { name: "Nifty IT", changePct: -0.87, note: "Worst sector of the day; a fourth straight weak session on demand-outlook concerns" }
  ],

  movers: {
    gainers: [
      { name: "Bajaj Finance", changePct: 3.41, cap: "Largecap", note: "Top large-cap gainer, leading the financials rebound" },
      { name: "SAIL", changePct: 6.57, cap: "Midcap", note: "Top mid-cap gainer on the record copper price rally" },
      { name: "Whirlpool of India", changePct: 20.0, cap: "Smallcap", note: "Top small-cap gainer on the Nifty Smallcap 100" }
    ],
    losers: [
      { name: "HCL Technologies", changePct: -1.08, cap: "Largecap", note: "Top large-cap loser as IT lagged for yet another session" },
      { name: "Persistent Systems", changePct: -2.35, cap: "Midcap", note: "Top mid-cap loser despite strong Q1 revenue growth" },
      { name: "Pine Labs", changePct: -4.29, cap: "Smallcap", note: "Top small-cap loser amid profit booking in new-age names" }
    ],
    sensexWinners: ["Tata Steel", "Bajaj Finance", "Hindalco Industries", "JSW Steel", "ITC", "Power Grid Corporation of India", "UltraTech Cement"],
    sensexLaggards: ["HCL Technologies", "Infosys", "Coal India", "Tata Consultancy Services", "Titan Company", "Mahindra & Mahindra"]
  },

  watch: [
    {
      title: "NSE IPO lists tomorrow",
      detail: "The Rs 22,561-crore NSE IPO (subscribed 5.7x) makes its market debut on the BSE on Thursday, 24 September - the exchange's listing after a decade-long wait. Shares were quoting around Rs 55 (about 3%) above the Rs 1,785 upper band in the grey market."
    },
    {
      title: "Nifty back above 23,400",
      detail: "Wednesday's close of 23,446.80 is a two-week high. The 23,500-23,600 zone remains the key resistance that capped Tuesday's recovery; immediate support sits at 23,300, with 23,200 below that."
    },
    {
      title: "Crude and the US-Iran talks",
      detail: "Brent traded below $100 a barrel for a second straight session on hopes of a diplomatic solution to the US-Iran conflict through talks at the UN in New York - watch whether the de-escalation holds, as it drives import costs, inflation and the rupee."
    },
    {
      title: "IT weakness and FII flows",
      detail: "Nifty IT fell again on Wednesday, a fourth straight weak session on global tech-spending concerns. FIIs sold Rs 3,810 crore on Tuesday while DIIs bought Rs 4,120 crore - continued domestic institutional support is cushioning the market."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty close at 2-week high: Crude, metals and financials drive gains",
      source: "CNCTV18",
      url: "https://www.cnbctv18.com/market/sensex-nifty-close-at-2-week-high-crude-metals-and-financials-drive-gains-19996687.htm"
    },
    {
      title: "Stock Market Closing Today, Sep 23: Sensex up 299 pts, Nifty closes near 23,450; Metal, FMCG, PSU Bank stocks surge",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-23-sensex-up-299-pts-nifty-near-23450-metal-fmcg-psu-bank-stocks-surge-article-156209145"
    },
    {
      title: "Market wrap, Sept 23: SENSEX, NIFTY50 gain as metal stocks rally, crude oil price ease; Bajaj Fin, Hindalco top gainers",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-sept-23-sensex-nifty-50-gain-as-metal-stocks-rally-crude-oil-price-ease-bajaj-fin-hindalco-top-gainers/article-200759/"
    },
    {
      title: "Top gainers and losers, September 23: Bajaj Finance, Hindalco jump 3%, HCLTech, Titan fall 1%; check list",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-september-23-bajaj-finance-hindalco-jump-3-hcl-tech-titan-fall-1-check-list/article-200761/"
    },
    {
      title: "Nifty Ends Higher at 23,446; Gems & Media Lead Rally",
      source: "ScanX (Dhan)",
      url: "https://scanx.trade/stock-market-news/markets/market-today-closing-bell-update-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-23-09-2026/51703979"
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
