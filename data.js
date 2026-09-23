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
      dayChangePct: 0.63,
      weekChangePct: null,
      spark: null,
      note: "Midcaps outperformed as the Nifty Midcap 100 rose 0.70% to 62,396.45. SAIL (+6.57%), PB Fintech (+4.50%) and Motilal Oswal (+3.53%) led, while Persistent Systems (-2.35%) and Paytm (-2.17%) lagged."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.65,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps gained as the Nifty Smallcap 100 climbed 0.89% to 19,991.50. Whirlpool of India (+20%) and Ola Electric (+10.69%) surged, while Pine Labs (-4.29%) and Inox Wind (-3.70%) fell."
    }
  ],

  weeklyWrap: {
    headline: "Benchmarks back in the green at a two-week high as metals rally on record copper and crude eases below $100",
    niftyFiveSessionPct: 0.99,   // vs 16 Sep close of 23,217.60
    sensexFiveSessionPct: 0.66,  // vs 16 Sep close of 74,336.45
    summary: "Tuesday's slip proved brief: the Nifty rose 117.80 points to 23,446.80 and the Sensex 299.17 points to 74,828.25 on Wednesday, both finishing at two-week highs. The rally was powered by metal stocks after copper hit a fresh all-time high of $6.92 a pound (its seventh straight session of gains) and by crude oil slipping below $100 a barrel on hopes of progress in US-Iran talks at the UN. Bank Nifty gained about 333 points to 56,549 and India VIX eased 6.41% to 10.29. Over the last five sessions the Nifty is up 0.99% and the Sensex 0.66%; week-to-date the Nifty is +0.43% and the Sensex +0.72%. FIIs sold a net Rs 3,810 crore on Tuesday even as DIIs bought Rs 4,120 crore, and IT remained the weak spot, falling for a fourth session on demand-outlook concerns."
  },

  dayByDay: [
    { date: "2026-09-17", label: "Thu 17 Sep", niftyClose: 23270.60, niftyChangePct: 0.23, sensexChangePct: -0.03, note: "Flat close as value buying offsets elevated crude (Brent ~$104); NSE IPO opens for subscription." },
    { date: "2026-09-18", label: "Fri 18 Sep", niftyClose: 23346.40, niftyChangePct: 0.33, sensexChangePct: -0.03, note: "Third straight Nifty gain; midcaps +1.24% and smallcaps +1.74% outperform. FIIs sell Rs 3,209 cr, DIIs absorb." },
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Two-week high close as metals surge on record copper prices and crude eases below $100 on US-Iran talk hopes; IT lags again." }
  ],

  sectors: [
    { name: "BSE Commodities", changePct: 2.83, note: "Best sector of the day as copper hit an all-time high and steel names rallied" },
    { name: "Nifty Metal", changePct: 2.40, note: "Driven by SAIL, Nalco, Hindalco, Tata Steel and Vedanta" },
    { name: "Nifty FMCG", changePct: 1.32, note: "ITC up around 2% among index heavyweights" },
    { name: "Nifty PSU Bank", changePct: 1.14 },
    { name: "Nifty Realty", changePct: 1.10 },
    { name: "Nifty Pharma", changePct: 0.90 },
    { name: "Nifty Media", changePct: -0.50 },
    { name: "Nifty IT", changePct: -0.87, note: "Fourth straight red session on demand-outlook concerns; Persistent, LTIM and Oracle Financial pressured the pack" }
  ],

  movers: {
    gainers: [
      { name: "Bajaj Finance", changePct: 3.41, cap: "Largecap", note: "Top large-cap gainer, rebounding after two days of declines" },
      { name: "Steel Authority of India", changePct: 6.57, cap: "Midcap", note: "Top mid-cap gainer on record copper prices and improving steel demand" },
      { name: "Whirlpool of India", changePct: 20.00, cap: "Smallcap", note: "Top small-cap and BSE 500 gainer of the day" }
    ],
    losers: [
      { name: "HCL Technologies", changePct: -1.08, cap: "Largecap", note: "Top large-cap loser as IT stayed under pressure" },
      { name: "Persistent Systems", changePct: -2.35, cap: "Midcap", note: "Top mid-cap loser on IT-services profit booking" },
      { name: "Pine Labs", changePct: -4.29, cap: "Smallcap", note: "Top small-cap loser on the Nifty Smallcap 100" }
    ],
    sensexWinners: ["Tata Steel", "Bajaj Finance", "ITC", "UltraTech Cement", "Power Grid", "Larsen & Toubro", "Bajaj Finserv"],
    sensexLaggards: ["HCL Technologies", "Titan Company", "Tata Consultancy Services", "Infosys", "Mahindra & Mahindra", "ICICI Bank"]
  },

  watch: [
    {
      title: "NSE IPO lists tomorrow",
      detail: "Shares in the Rs 22,561-crore NSE IPO (subscribed 5.7x) were credited to allottees today; the stock makes its BSE debut on Thursday, 24 September - the exchange's first listing in over a decade."
    },
    {
      title: "Crude and the US-Iran talks",
      detail: "Brent slipped below $100 a barrel for a second straight session on expectations of a diplomatic solution to the US-Iran conflict through talks at the UN in New York. Watch whether the relief for India's import bill and inflation holds."
    },
    {
      title: "Copper at record highs",
      detail: "US copper futures touched an all-time high of $6.92 a pound, rising for a seventh consecutive session amid demand strength and supply disruptions. The metal pack's momentum - SAIL, Hindalco, Tata Steel, Vedanta - hinges on whether it extends."
    },
    {
      title: "IT weakness and FII flows",
      detail: "Nifty IT has now fallen four sessions in a row on global tech-spending worries, with the Nasdaq's AI-led record run doing little to lift Indian IT. FIIs sold a net Rs 3,810 crore on Tuesday; DII buying of Rs 4,120 crore continues to cushion the market."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty close at 2-week high: Crude, metals and financials drive gains",
      source: "CNBC TV18",
      url: "https://www.cnbctv18.com/market/sensex-nifty-close-at-2-week-high-crude-metals-and-financials-drive-gains-19996687.htm"
    },
    {
      title: "Stock Market Closing Today, Sep 23: Sensex up 299 pts, Nifty closes near 23,450; Metal, FMCG, PSU Bank stocks surge",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-23-sensex-up-299-pts-nifty-near-23450-metal-fmcg-psu-bank-stocks-surge-article-156209145"
    },
    {
      title: "Market wrap, Sept 23: SENSEX, NIFTY50 gain as metal stocks rally, crude oil price eases; Bajaj Fin, Hindalco top gainers",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-sept-23-sensex-nifty-50-gain-as-metal-stocks-rally-crude-oil-price-ease-bajaj-fin-hindalco-top-gainers/article-200759/"
    },
    {
      title: "Top gainers and losers, September 23: Bajaj Finance, Hindalco jump 3%, HCLTech, Titan fall 1%; check list",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-september-23-bajaj-finance-hindalco-jump-3-hcl-tech-titan-fall-1-check-list/article-200761/"
    },
    {
      title: "Sensex closes 299 points higher, Nifty nears 23,450; ITC up 2%",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/market-closing-sensex-closes-299-points-higher-nifty-nears-23450-itc-shares-up-3-3001079-2026-09-23"
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
