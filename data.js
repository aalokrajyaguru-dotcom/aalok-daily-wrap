const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 29 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Tuesday, 29 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22716.20,
      dayChange: -64.05,
      dayChangePct: -0.28,
      weekChangePct: -1.83, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23446.80, 23063.10, 23140.50, 22780.25, 22716.20] // last 5 closes: 23, 24, 25, 28, 29 Sep
    },
    {
      name: "Sensex",
      close: 72529.07,
      dayChange: -242.65,
      dayChangePct: -0.33,
      weekChangePct: -1.85, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [74828.25, 73580.54, 73895.74, 72771.72, 72529.07] // last 5 closes: 23, 24, 25, 28, 29 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.99,
      weekChangePct: null,
      spark: null,
      note: "Midcaps stayed on the back foot: the Nifty Midcap 100 fell 0.99% (the Midcap 150 lost 0.68%) and the Nifty Next 50 slipped about 0.31%, deepening a September-series slide of roughly 7% for midcaps as the correction that began in largecaps spread market-wide. Hindustan Aeronautics (-3.98%) was among the day's biggest single-stock falls, while Adani Power (+1.07%) and Tata Elxsi (+0.65%) found buyers on volume spikes."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.81,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps slipped again, though far less than Monday's rout: the Nifty Smallcap 100 shed 0.81% after losing 1.85% a day earlier. Breadth was negative but not brutal - 1,529 NSE stocks advanced against 2,039 declines - and Vishal Mega Mart (+3.46%) hit its upper circuit at Rs 104.30 to headline a short list of winners."
    }
  ],

  weeklyWrap: {
    headline: "September series signs off in the red: Nifty dives to a fresh six-month low on its 200-week moving average before a pharma-led fightback trims the damage",
    niftyFiveSessionPct: -2.63,   // vs 22 Sep close of 23,329.00
    sensexFiveSessionPct: -2.68,  // vs 22 Sep close of 74,529.08
    summary: "Tuesday's monthly expiry was a wild round trip: the Nifty plunged as much as 0.9% to 22,569.65 - a fresh six-month low that put the index on its 200-week moving average near 22,600 for the first time since the Covid crash - before a pharma-and-metal-led fightback lifted it to 22,716.20 (-0.28%), while the Sensex clawed back from an intraday low of 72,064 to close at 72,529.07 (-0.33%). India VIX spiked to about 14.8 in the morning before cooling to roughly 13.4. The September F&O series thus ended with the Nifty and Sensex down about 6% each - midcaps roughly 7% and smallcaps about 3% - as elevated crude (Brent near $106-107 on US-Iran uncertainty, with both sides now talking separately to mediators), US 10-year yields near a 19-year high of about 5.27% and persistent FII selling (Monday's Rs 5,353-crore outflow was the month's biggest single-day) kept risk appetite muted. The month's damage was broad: auto and IT fell about 9% each, realty, infrastructure and PSU banks about 7%, and Bank Nifty about 5%, while pharma eked out a marginal gain. Over the last five sessions the Nifty is down 2.63% and the Sensex 2.68%; from Friday's close they are down 1.83% and 1.85% week-to-date. Attention now turns to the October series, Q2 earnings and the Nifty 50 reshuffle effective 30 September that brings BSE Ltd in place of Wipro."
  },

  dayByDay: [
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 - touching its 200-week moving average for the first time since the Covid crash - before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." }
  ],

  sectors: [
    { name: "Nifty Pharma", changePct: 0.65, note: "The day's best sector: Dr Reddy's (+2.02%) topped the Nifty for a second straight session and Sun Pharma featured among the Sensex winners as investors kept favouring defensives" },
    { name: "Nifty Metal", changePct: 0.39, note: "Adani Enterprises (+1.95%, the index's heaviest weight) and Tata Steel (+1.10%) kept metals in the green even as the risk-off tone persisted elsewhere" },
    { name: "Nifty PSU Bank", changePct: 0.07, note: "Caught its breath after Monday's 3.24% collapse: Bank of Baroda (+0.89%), PNB (+0.47%) and SBI (+0.17%) edged higher to leave the index flat" },
    { name: "Nifty Bank", changePct: -0.20, note: "Bank Nifty slipped below 54,000 in the morning before recovering to end around 54,365 (-0.2%); Kotak Mahindra Bank rose about 1% while IndusInd (-1.42%), Union Bank (-1.23%) and Canara Bank (-1.03%) lagged" },
    { name: "Nifty Auto", changePct: -0.81, note: "Tata Motors PV, still near Monday's three-year low, was among the early laggards; the sector has lost roughly 9% in the September series, among the worst of any sector" },
    { name: "Nifty FMCG", changePct: -0.94, note: "Hindustan Unilever - which hit a fresh 52-week low in morning trade - and Colgate Palmolive (-2.05%) weighed on staples" },
    { name: "Nifty Realty", changePct: -1.12, note: "All 10 constituents ended lower and the index closed below its key moving averages, extending the rate-sensitive slide; realty is down about 7% for the September series" },
    { name: "Nifty IT", changePct: -1.48, note: "Day's weakest major sector: Infosys (-2.16%) and HCL Tech (-1.93%) slumped as US Treasury yields near two-decade highs hit rate-sensitive tech; IT has shed about 9% in the September series" }
  ],

  movers: {
    gainers: [
      { name: "Dr Reddy's Laboratories", changePct: 2.02, cap: "Largecap", note: "Top Nifty gainer for a second straight session as investors kept rushing into defensive pharma; Adani Enterprises (+1.95%) and Adani Ports (+1.38%) followed, with the Adani duo contributing about 24 Nifty points between them" },
      { name: "Tata Steel", changePct: 1.10, cap: "Largecap", note: "Among the top five Nifty gainers on expiry day, helping the metal index (+0.39%) stay in the green; NTPC and Kotak Mahindra Bank (about +1%) also featured among the winners" },
      { name: "Vishal Mega Mart", changePct: 3.46, cap: "Midcap", note: "Hit the upper circuit to close at Rs 104.30 - the standout broader-market move on a weak day; Adani Power (+1.07%) and Tata Elxsi (+0.65%) also ended higher on volume spikes" }
    ],
    losers: [
      { name: "Titan Company", changePct: -3.00, cap: "Largecap", note: "Worst Nifty 50 stock, closing at Rs 4,675 as the consumer-durables index (-2.14%) was the day's worst sector; Eternal (-2.02%) and HDFC Life (-1.94%) also sank" },
      { name: "Infosys", changePct: -2.16, cap: "Largecap", note: "Closed at Rs 981.50 as IT (-1.48%) was the weakest major sector; HCL Tech (-1.93%, Rs 1,228.40) followed, and TCS, UltraTech Cement, HUL and Tech Mahindra featured among the Sensex laggards" },
      { name: "Hindustan Aeronautics", changePct: -3.98, cap: "Largecap", note: "Ended at Rs 4,549.30 - one of the sharpest single-stock falls of the session as defence names stayed out of favour" }
    ],
    sensexWinners: ["Adani Ports", "Sun Pharma", "Tata Steel", "Kotak Mahindra Bank"],
    sensexLaggards: ["Titan", "HCL Tech", "Tata Consultancy Services", "UltraTech Cement", "Hindustan Unilever"]
  },

  watch: [
    {
      title: "Nifty's line in the sand: the 200-week moving average",
      detail: "Tuesday's low of 22,569.65 landed right on the 200-week moving average near 22,600 - a level the index hasn't tested since the Covid crash. LKP Securities' Rupak De says a decisive break below it risks a sharper correction, while holding it could fuel a recovery towards 22,800, the immediate resistance. Kotak Securities' Shrikant Chouhan calls the market temporarily oversold, with 22,800 the key level and support at 22,650-22,550."
    },
    {
      title: "BSE Ltd replaces Wipro in the Nifty 50",
      detail: "The index change takes effect from 30 September, with the adjustment done after Tuesday's close. BSE's 6-month average free-float market cap of Rs 1,40,879 crore is about 2.5x Wipro's Rs 55,930 crore; analysts estimate passive inflows of about $630 million into BSE and outflows of $152 million from Wipro."
    },
    {
      title: "Crude and the US-Iran backchannel",
      detail: "Brent held above $106 a barrel as the US and Iran engaged separately with mediators in renewed efforts to end the conflict, after Washington rejected Iran's seven-day Strait of Hormuz ceasefire proposal on Monday. Geojit's Vinod Nair says a meaningful de-escalation could trigger a sharp relief rally - until then, elevated crude keeps feeding India's import bill, inflation and rupee worries."
    },
    {
      title: "US yields at a 19-year high, FIIs still leaving",
      detail: "The US 10-year Treasury yield is near 5.27% - its highest in about 19 years - keeping global risk assets under pressure and narrowing the India-US spread. FIIs sold Rs 5,353 crore on Monday, September's biggest single-day outflow, taking the month's tally to roughly Rs 24,000 crore, though DIIs absorbed nearly all of it with Rs 5,189 crore of buying."
    },
    {
      title: "October series: Q2 earnings, the rupee and the RBI",
      detail: "With the September series closed, focus shifts to Q2 results - expectations already tempered versus Q1 - and the RBI's next policy decision. The rupee briefly cracked 96 a dollar on Tuesday before RBI action and index-rebalancing inflows stabilised it; HDFC Securities sees resistance at 96.30 and support at 95.80."
    }
  ],

  reads: [
    {
      title: "Stock markets fall for 2nd day as elevated oil prices, foreign fund outflows weigh",
      source: "Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-live-updates-29-september-2026/article71520150.ece"
    },
    {
      title: "Closing Bell: Nifty below 22,750 on expiry day; Sensex falls 240 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-29-09-2026-alpha-liveblog-14040455.html"
    },
    {
      title: "Closing Bell: Nifty ends above 22,700 mark after hitting new 6-month low",
      source: "DSIJ Insights",
      url: "https://insights.dsij.in/dsijarticledetail/closing-bell-nifty-ends-above-22700-mark-after-hitting-new-6-month-low"
    },
    {
      title: "Sensex Closes 242 Points Lower Amid Mixed Global Cues",
      source: "NDTV",
      url: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-29-september-us-iran-war-oil-prices-12112191"
    },
    {
      title: "September series selloff broadens beyond largecaps, SMIDs join the correction",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/september-series-selloff-broadens-beyond-largecaps-smids-join-the-correction-14040627.html"
    },
    {
      title: "5 reasons why market is down today: Sensex, Nifty hit six month lows; India VIX spikes",
      source: "Business Today",
      url: "https://www.businesstoday.in/markets/stocks/story/5-reasons-why-market-is-down-today-sensex-nifty-hit-six-month-lows-india-vix-spikes-558436-2026-09-29"
    },
    {
      title: "India VIX Surges 6.6% to 14.54 as Nifty Falls Below 22,700",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/india-vix-rises-6-6percent-to-14-54-as-oil-us-yields-and-nifty-selling-lift-volatility-september-29-2026"
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
