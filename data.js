const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 22 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Tuesday, 22 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23329.00,
      dayChange: -85.30,
      dayChangePct: -0.36,
      weekChangePct: -0.07, // week-to-date vs Fri, 18 Sep close of 23,346.40
      spark: [23217.60, 23270.60, 23346.40, 23414.30, 23329.00] // last 5 closes: 16, 17, 18, 21, 22 Sep
    },
    {
      name: "Sensex",
      close: 74529.08,
      dayChange: -329.91,
      dayChangePct: -0.44,
      weekChangePct: 0.32, // week-to-date vs Fri, 18 Sep close of 74,294.96
      spark: [74336.45, 74314.59, 74294.96, 74858.99, 74529.08] // last 5 closes: 16, 17, 18, 21, 22 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.02,
      weekChangePct: null,
      spark: null,
      note: "Midcaps ended flat; the Nifty Midcap 100 closed lower for a second straight session. Concor, Voltas and Blue Star were the top Midcap 100 losers, while Meesho surged 9.66%."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.25,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps slipped for a second session. Aegis Vopak, Kaynes and Aegis Logistics were the top Smallcap 100 losers; Gabriel India jumped 14.11%."
    }
  ],

  weeklyWrap: {
    headline: "Four-day winning streak snapped as IT, FMCG and PSU banks drag",
    niftyFiveSessionPct: 0.91,   // vs 15 Sep close of 23,118.60
    sensexFiveSessionPct: 0.71,  // vs 15 Sep close of ~74,003
    summary: "The Nifty had risen for four straight sessions (16-21 Sep) on easing crude prices and bargain buying after a six-week correction, before Tuesday's 85-point slip ended the run. Over the last five sessions the Nifty is up 0.91% and the Sensex roughly 0.7%; week-to-date (from Friday's close) the Nifty is down 0.07% while the Sensex holds a 0.32% gain. Early gains on Tuesday faded as IT stocks fell for a third consecutive session, with Brent crude rebounding to around $99-100 a barrel after four sessions of declines and foreign outflows weighing on sentiment. The 10-year G-sec yield eased to 7.010% and the rupee held near 95.8 to the dollar."
  },

  dayByDay: [
    { date: "2026-09-16", label: "Wed 16 Sep", niftyClose: 23217.60, niftyChangePct: 0.43, sensexChangePct: 0.45, note: "Benchmarks rebound as bargain buying returns after a violent start to the week." },
    { date: "2026-09-17", label: "Thu 17 Sep", niftyClose: 23270.60, niftyChangePct: 0.23, sensexChangePct: -0.03, note: "Flat close as value buying offsets elevated crude (Brent ~$104); NSE IPO opens for subscription." },
    { date: "2026-09-18", label: "Fri 18 Sep", niftyClose: 23346.40, niftyChangePct: 0.33, sensexChangePct: -0.03, note: "Third straight Nifty gain; midcaps +1.24% and smallcaps +1.74% outperform. FIIs sell Rs 3,209 cr, DIIs absorb." },
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." }
  ],

  sectors: [
    { name: "BSE Commodities", changePct: 2.71, note: "Best sector of the day, powered by Coal India's 3%+ rally" },
    { name: "Nifty Media", changePct: 1.21, note: "Sun TV and Saregama led the index higher" },
    { name: "Nifty Realty", changePct: 0.94 },
    { name: "Nifty Metal", changePct: 0.14 },
    { name: "Nifty PSU Bank", changePct: -0.49, note: "Fedbank, SBI and PNB among losers; Nifty Bank also snapped a two-day winning streak" },
    { name: "Nifty FMCG", changePct: -0.53 },
    { name: "Nifty IT", changePct: -0.86, note: "Third straight red session on demand-outlook concerns; Persistent, Mphasis and TCS dragged" },
    { name: "BSE Consumer Goods", changePct: -0.87, note: "Worst sector of the day" }
  ],

  movers: {
    gainers: [
      { name: "Coal India", changePct: 3.35, cap: "Largecap", note: "Top large-cap gainer on commodity-price optimism" },
      { name: "Meesho", changePct: 9.66, cap: "Midcap", note: "Top mid-cap gainer on e-commerce growth hopes" },
      { name: "Gabriel India", changePct: 14.11, cap: "Smallcap", note: "Top small-cap gainer on sectoral tailwinds" }
    ],
    losers: [
      { name: "Larsen & Toubro", changePct: -3.01, cap: "Largecap", note: "Top large-cap loser on margin and order-inflow concerns" },
      { name: "Container Corporation of India", changePct: -4.23, cap: "Midcap", note: "Top mid-cap loser on weak volumes and rising costs" },
      { name: "Acutaas Chemical", changePct: -6.11, cap: "Smallcap", note: "Top small-cap loser amid profit booking in specialty chemicals" }
    ],
    sensexWinners: ["Eternal", "InterGlobe Aviation", "Titan", "Tata Steel", "NTPC", "Maruti Suzuki", "Adani Ports"],
    sensexLaggards: ["Bajaj Finserv", "Trent", "Bajaj Finance", "Sun Pharma", "TCS", "UltraTech Cement"]
  },

  watch: [
    {
      title: "NSE IPO: allotment today, listing Thursday",
      detail: "The Rs 22,561-crore NSE IPO (subscribed 5.7x) finalises allotment today; shares are credited on 23 Sep and the stock lists on the BSE on 24 September - the exchange's market debut after a decade-long wait."
    },
    {
      title: "Nifty at a technical crossroads",
      detail: "Immediate support sits at 23,300 and then 23,200; resistance is placed at 23,500-23,600. The index remains below key short-term moving averages, so a sustained move above 23,600 is needed to strengthen the recovery."
    },
    {
      title: "Crude and the rupee",
      detail: "Brent rebounded to roughly $99-100 a barrel after four sessions of declines - watch whether the relief for import costs and inflation lasts. The rupee is holding near 95.8 per dollar."
    },
    {
      title: "IT demand outlook and FII flows",
      detail: "Nifty IT has fallen three sessions in a row on global tech-spending worries, and foreign investors remain net sellers (over Rs 7,600 cr sold across four sessions to Friday). Continued DII support is cushioning the market."
    }
  ],

  reads: [
    {
      title: "Stock Market Closing Today, Sep 22: Sensex closes 330 pts lower, Nifty below 23,350",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-22-sensex-closes-330-pts-lower-nifty-below-23350-check-top-gainers-and-losers-article-156202845"
    },
    {
      title: "Sensex and Nifty Slip Amid Broad Sector Weakness; Coal India and Meesho Lead Gains",
      source: "MarketsMojo",
      url: "https://www.marketsmojo.com/news/stock-market-news/sensex-and-nifty-slip-amid-broad-sector-weakness-coal-india-and-meesho-lead-gains-4201550"
    },
    {
      title: "NSE IPO subscribed 5.7x, generates Rs 90.2k crore demand",
      source: "The Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/nse-ipo-subscribed-5-7x-generates-rs-90-2k-crore-demand/articleshow/134397811.cms"
    },
    {
      title: "Tata Listing Will Add Fresh Equity To Market",
      source: "Rediff.com",
      url: "https://www.rediff.com/business/report/tata-listing-will-add-fresh-equity-to-market/20260922.htm"
    },
    {
      title: "Nifty 50, Sensex Erase Gains as IT Shares Weigh on Markets",
      source: "Dalal Street Investment Journal",
      url: "https://insights.dsij.in/dsijarticledetail/nifty-50-sensex-erase-gains-as-it-shares-weigh-on-markets-59644"
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
