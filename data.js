const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 25 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 25 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23140.50,
      dayChange: 77.40,
      dayChangePct: 0.34,
      weekChangePct: -0.88, // week-to-date vs Fri, 18 Sep close of 23,346.40
      spark: [23414.30, 23329.00, 23446.80, 23063.10, 23140.50] // last 5 closes: 21, 22, 23, 24, 25 Sep
    },
    {
      name: "Sensex",
      close: 73895.74,
      dayChange: 315.20,
      dayChangePct: 0.43,
      weekChangePct: -0.54, // week-to-date vs Fri, 18 Sep close of 74,294.96
      spark: [74858.99, 74529.08, 74828.25, 73580.54, 73895.74] // last 5 closes: 21, 22, 23, 24, 25 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.25,
      weekChangePct: null,
      spark: null,
      note: "Midcaps missed the bounce. The S&P BSE 150 Midcap fell 0.25% and the Nifty Midcap 100 slipped 0.14%, with large caps clearly favoured; Max Financial (+3.42%) was the best midcap while Meesho (-6.87%) slumped."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.01,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps were flattish: the Nifty Smallcap 100 added 0.15% while the S&P BSE 250 Smallcap eased just 0.01%. Whirlpool India (+7.3%) and Welspun Corp (+4.9%, record order win) led; Ola Electric (-9.5%) was the day's biggest BSE 500 loser."
    }
  ],

  weeklyWrap: {
    headline: "Value buying pulls Nifty back above 23,100, but a seventh straight weekly loss keeps the bears in charge",
    niftyFiveSessionPct: -0.56,   // vs 17 Sep close of 23,270.60
    sensexFiveSessionPct: -0.56,  // vs 17 Sep close of 74,314.59
    summary: "The Nifty 50 rose 0.34% to 23,140.50 and the Sensex 0.43% to 73,895.74 on Friday, as value hunting after Thursday's rout combined with reports that the US and Iran are working on a plan to end the war, plus a modest cooling in Brent crude to about $105, lifted the benchmarks off their morning lows. The recovery was selective rather than broad: 8 of 11 key sectoral indices advanced, led by consumer durables (+0.95%) and realty (+0.92%), while IT was the biggest laggard with the US 10-year yield near a 19-year high - Infosys fell 1.41%. Axis Bank (+3.03%) was the top Nifty stock and the biggest index contributor (+22.49 points), rebounding from Thursday's IRDAI-driven slide, while Max Healthcare (-3.06%) brought up the rear on hospital charge-capping worries. The Bank Nifty rose just 0.26%, the Nifty Midcap 100 slipped 0.14% and the Nifty Smallcap 100 eked out 0.15%; India VIX cooled about 4% to 12.16 after Thursday's 23% spike. The bounce, though, couldn't rescue the week: the Nifty fell 0.88% over the five sessions - a seventh consecutive weekly decline - and remains near a five-and-a-half-month low, with FIIs still selling (₹5,027 crore out on Thursday) and only domestic institutions absorbing the flow."
  },

  dayByDay: [
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Calm rebound after the rout: value buying and US-Iran truce hopes lift the Nifty back above 23,100; realty and consumer durables lead while IT lags on US yields; VIX cools 4% - but a seventh straight weekly loss is sealed." }
  ],

  sectors: [
    { name: "Nifty Consumer Durables", changePct: 0.95, note: "Best major index of the day; Whirlpool India (+7.3%) topped the BSE 500 gainers" },
    { name: "Nifty Realty", changePct: 0.92, note: "Top Nifty sectoral gainer, with DLF up more than 1.8%" },
    { name: "Nifty Auto", changePct: 0.46, note: "Held in the green through the close; M&M (+1.75%) and the Bajaj names firmed up" },
    { name: "Nifty Metal", changePct: 0.45, note: "Recovered some of Thursday's 1.9% slide as the dollar paused" },
    { name: "Nifty Bank", changePct: 0.26, note: "Bank Nifty underperformed the benchmarks in only a mild rebound from Thursday's IRDAI-led rout" },
    { name: "Nifty Media", changePct: -0.23, note: "Third straight session of losses" },
    { name: "Nifty Healthcare", changePct: -0.51, note: "Max Healthcare (-3.06%) and Fortis (-4.97%) slid on hospital charge-capping reports" },
    { name: "Nifty IT", changePct: -0.71, note: "Biggest sectoral laggard: with the US 10-year yield near a 19-year high, Infosys fell 1.41% and TCS ended in the red" }
  ],

  movers: {
    gainers: [
      { name: "Axis Bank", changePct: 3.03, cap: "Largecap", note: "Top Nifty gainer, closing at 1,222.40, and the biggest index contributor (+22.49 points) as it rebounded from Thursday's IRDAI-driven slide; Asian Paints (+2.14%) and M&M (+1.75%) also stood out" },
      { name: "Whirlpool India", changePct: 7.30, cap: "Smallcap", note: "Top gainer in the BSE 500, powering consumer durables; Aether Industries (+7.15%) and Engineers India (+6.37%) followed" },
      { name: "Welspun Corp", changePct: 4.91, cap: "Smallcap", note: "Jumped after winning its largest-ever order - $412.5 million of high-frequency-induction-welded pipes; Vascon Engineers (+4.42%) also rose on a $69 million order win" }
    ],
    losers: [
      { name: "Max Healthcare", changePct: -3.06, cap: "Largecap", note: "Biggest Nifty laggard, closing at 1,014, as hospital stocks slid on reports of proposed charge capping" },
      { name: "Meesho", changePct: -6.87, cap: "Midcap", note: "Among the worst BSE 500 decliners as midcaps stayed out of favour; the Nifty Midcap 100 fell 0.14%" },
      { name: "Ola Electric", changePct: -9.48, cap: "Smallcap", note: "Worst performer in the BSE 500 on a brutal day for the EV maker; Fortis Healthcare (-4.97%) also slumped on hospital charge-cap worries" }
    ],
    sensexWinners: ["Axis Bank", "Asian Paints", "Mahindra & Mahindra", "Bajaj Finance", "Power Grid", "HCL Technologies"],
    sensexLaggards: ["Infosys", "ONGC", "Trent", "Bharti Airtel", "ICICI Bank", "Tata Consumer Products"]
  },

  watch: [
    {
      title: "Seven weeks of losses",
      detail: "Friday's bounce couldn't save the week: the Nifty fell 0.88% over the five sessions - a seventh consecutive weekly decline - and sits near a five-and-a-half-month low. The next big test is whether the 23,000 support holds; below it, analysts see 22,900-22,700."
    },
    {
      title: "US-Iran: talks, but no truce yet",
      detail: "Reports that Washington and Tehran are working on a plan to end the war lifted Friday's mood, but President Trump has indicated a deal could come only after the November US midterms. Brent held near $105-106 a barrel - watch India's import bill and the rupee, around 95.85-96 per dollar."
    },
    {
      title: "US yields at 19-year highs",
      detail: "The US 10-year Treasury yield sits near 5.1-5.2% and the 30-year is at its highest since 2004, keeping rate-sensitive IT stocks under pressure (Infosys -1.41% Friday) and traders assigning roughly a two-in-three chance of an October Fed hike."
    },
    {
      title: "The IRDAI hangover",
      detail: "After Thursday's carnage (PB Fintech -36%), insurance-linked names stayed under a cloud - PB Fintech slipped another 3.68% Friday. Hospital stocks joined in: Max Healthcare (-3.06%) and Fortis (-4.97%) fell on charge-capping reports. Watch for industry feedback on the drafts."
    },
    {
      title: "FII selling vs DII support",
      detail: "Foreign investors sold Rs 5,027 crore of Indian equities on Thursday - the latest in a persistent run of outflows - while domestic institutions bought Rs 4,301 crore. Which side blinks first will decide whether 23,000 holds."
    }
  ],

  reads: [
    {
      title: "Stock Market Closing Today, Sep 25: Sensex closes 315 pts higher, Nifty above 23,100; check top gainers and losers",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-25-sensex-closes-315-pts-higher-nifty-above-23100-check-top-gainers-and-losers-article-156223937"
    },
    {
      title: "Stock Market Closing Bell: Sensex gains over 300 points, Nifty ends above 23,100; Auto, realty shine",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-stock-market-closing-bell-sensex-gains-over-300-points-nifty-ends-above-23100-auto-realty-shine-402864"
    },
    {
      title: "Sensex gains 300 pts from day's low, Nifty above 23,100: Value buying among key factors behind market rise",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/sensex-gains-300-pts-from-day-s-low-nifty-above-23-100-value-buying-among-key-factors-behind-market-rise-14037935.html"
    },
    {
      title: "Nifty ends above 23,100 level; consumer durables shares climb",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/capital-market-news/nifty-ends-above-23-100-level-consumer-durables-shares-climb-126092500786_1.html"
    },
    {
      title: "Stock markets turn volatile as oil prices, rising bond yields weigh on sentiments",
      source: "The Hindu",
      url: "https://www.thehindu.com/business/markets/stock-market-updates-sept-25-2026/article71507144.ece"
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
