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
      dayChangePct: -0.14,
      weekChangePct: null,
      spark: null,
      note: "Midcaps lagged the relief rally as investors stayed selective: the Nifty Midcap 100 slipped 0.14% (BSE 150 MidCap -0.25%). Welspun Corp (+4.91%) surged to a record high on its largest-ever order - about Rs 4,000 crore from its US arm - and Radico Khaitan (+1.69%) gained, while Meesho fell after Nomura initiated with a Reduce (target Rs 167) and Oracle Financial Services slid on its parent's data-centre power troubles."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.15,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps just about stayed afloat: the Nifty Smallcap 100 edged up 0.15% (BSE 250 SmallCap -0.01%). Vascon Engineers (+4.42%) jumped on a Rs 660.79-crore work order from Qualcomm India, while ESDS Software and PVP Ventures hit their 5% lower circuits and Ola Electric slumped in early trade."
    }
  ],

  weeklyWrap: {
    headline: "Nifty reclaims 23,100 in a relief rally, but a seventh straight weekly loss keeps the bears in charge",
    niftyFiveSessionPct: -0.88,   // vs 18 Sep close of 23,346.40
    sensexFiveSessionPct: -0.54,  // vs 18 Sep close of 74,294.96
    summary: "The Nifty rose 0.34% to 23,140.50 and the Sensex 0.43% to 73,895.74 on Friday - a measured recovery after Thursday's 1.6% rout - as value buying in beaten-down blue chips, softer crude (Brent about $105.4, down 1.1%) and reports that US and Iranian negotiators were exploring a phased end to the war steadied nerves. Thirty-four of 50 Nifty stocks and 19 of 30 Sensex constituents advanced, and India VIX cooled about 4% to around 12.1 after Thursday's 23% spike. But it was only a partial repair job: the Nifty still logged a seventh consecutive weekly loss (-0.88%) and closed the week near five-and-a-half-month lows. IT remained the sore spot, falling for a sixth straight session (down about 4% over the period) as the US 10-year yield sat near 5.2%, a 19-year high, and the dollar stayed firm; Infosys (-1.41%) was the biggest single drag on the Nifty. Realty (+0.92%) was the day's best sector, with auto, consumer durables, oil & gas and financials also higher; media (-0.23%) and healthcare slipped. Bank Nifty underperformed with a 0.26% gain (around 55,580) - Axis Bank soared 3.03% while ICICI Bank fell 0.58%. Midcaps lagged (Nifty Midcap 100 -0.14%) and smallcaps edged up 0.15%. FIIs had sold Rs 5,027 crore on Thursday, their biggest single-day outflow of the month, even as DIIs bought for a record 32nd straight session. Over the last five sessions the Nifty is down 0.88% and the Sensex 0.54%."
  },

  dayByDay: [
    { date: "2026-09-21", label: "Mon 21 Sep", niftyClose: 23414.30, niftyChangePct: 0.29, sensexChangePct: 0.76, note: "Fourth straight gain on easing crude; NSE IPO closes 5.7x subscribed with ~Rs 90,000 cr of demand." },
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." }
  ],

  sectors: [
    { name: "Nifty Realty", changePct: 0.92, note: "Day's best sector - DLF gained more than 1.8% as rate-sensitives rebounded" },
    { name: "Nifty Bank", changePct: 0.26, note: "Bank Nifty underperformed the benchmarks at around 55,580; Axis Bank (+3.03%) led while ICICI Bank (-0.58%) dragged" },
    { name: "Nifty Media", changePct: -0.23, note: "Third straight session of decline" },
    { name: "Nifty IT", changePct: -0.6, note: "Only major sector in the red - a sixth straight daily fall (down about 4% over the period) as US yields near 19-year highs and the dollar firms; Infosys (-1.41%) was the top Nifty drag. Auto, consumer durables, oil & gas and financials closed higher" }
  ],

  movers: {
    gainers: [
      { name: "Axis Bank", changePct: 3.03, cap: "Largecap", note: "Top Nifty gainer, closing at 1,222.40, and the biggest single-stock lift on the index (+22.49 points) after Thursday's IRDAI-led selloff" },
      { name: "Welspun Corp", changePct: 4.91, cap: "Midcap", note: "Hit an all-time high of 2,836.50 after its US arm won its largest-ever order - about Rs 4,000 crore ($412.5 million) of high-frequency induction-welded pipes - taking the global order book to a record ~Rs 45,000 crore" },
      { name: "Vascon Engineers", changePct: 4.42, cap: "Smallcap", note: "Jumped after receiving a work order worth Rs 660.79 crore from Qualcomm India" }
    ],
    losers: [
      { name: "Max Healthcare", changePct: -3.06, cap: "Largecap", note: "Top Nifty loser, closing at 1,014, as healthcare stocks slipped" },
      { name: "Infosys", changePct: -1.41, cap: "Largecap", note: "Second-worst Nifty stock and the index's biggest single-stock drag (-11.01 points) as IT fell for a sixth straight session; TCS, Wipro and Tech Mahindra also ended lower" },
      { name: "ESDS Software Solution", changePct: -5.0, cap: "Smallcap", note: "Hit its 5% lower circuit after mixed Q1 FY27 results - adjusted net profit rose 14% YoY but fell 57% sequentially" }
    ],
    sensexWinners: ["Axis Bank", "Mahindra & Mahindra", "Asian Paints", "Bajaj Finance", "HCL Tech", "Titan"],
    sensexLaggards: ["Trent", "Infosys", "Kotak Mahindra Bank", "ICICI Bank", "Tata Steel"]
  },

  watch: [
    {
      title: "Can the rebound stick at 23,000-23,300?",
      detail: "Friday's bounce lifted the Nifty back above 23,100 but the index remains near a five-and-a-half-month low after a seventh straight weekly loss (-0.88%). Immediate support sits at 23,000 - backed by the heaviest put open interest - then 22,900/22,700; resistance is stacked at 23,200-23,300, the zone Thursday's breakdown came from. A decisive break below 23,000 could open the door to 22,600, analysts warn."
    },
    {
      title: "US yields at 19-year highs",
      detail: "The US 10-year Treasury yield hovered around 5.2% - its highest since 2007 - and the 30-year touched 5.5%, the highest since 2004, with the dollar index above 101. Traders now see roughly 70% odds of another Fed rate hike in October. Watch whether the global bond rout extends; it is the single biggest overhang for Indian equities and the rupee (about 95.8-96 per dollar)."
    },
    {
      title: "Crude and the US-Iran talks",
      detail: "Brent cooled about 1.1% to $105.4 a barrel after Thursday's Houthi missile attack on Saudi Arabia had pushed it toward $106. Reports say US and Iranian negotiators are exploring a phased end to the war - Tehran reopening the Strait of Hormuz, Washington lifting its economic blockade - though President Trump says a deal may only come after the November midterms. Crude drives India's import bill, inflation and the rupee."
    },
    {
      title: "IRDAI's insurance proposals",
      detail: "PB Fintech bounced about 1.6% on Friday after Thursday's 36% crash on the IRDAI consultation paper capping insurance commissions, but HSBC downgraded it to Hold, nearly halving its target to Rs 1,150, and Motilal Oswal cut to Neutral at the same price. Management called the proposal 'quite extreme' and warned hiring may slow. Watch for industry feedback on the draft and further swings in insurers and bancassurance-heavy banks."
    },
    {
      title: "IPO conveyor belt and FII outflows",
      detail: "Four IPOs opened today - Runwal Enterprises (~Rs 500 cr), German Green Steel & Power (~Rs 304 cr), Orient Cables (~Rs 552 cr) and AceVector - with Moneyview already subscribed 6x by close. Meanwhile FIIs sold Rs 5,027 crore on Thursday, their biggest single-day outflow this month, against a record 32nd straight session of DII buying. The tug-of-war between the two decides how durable any rebound is."
    }
  ],

  reads: [
    {
      title: "Stock Market Closing Today, Sep 25: Sensex closes 315 pts higher, Nifty above 23,100",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-25-sensex-closes-315-pts-higher-nifty-above-23100-check-top-gainers-and-losers-article-156223937"
    },
    {
      title: "Stock Market Closing Bell: Sensex gains over 300 points, Nifty ends above 23,100; Auto, realty shine",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-stock-market-closing-bell-sensex-gains-over-300-points-nifty-ends-above-23100-auto-realty-shine-402864"
    },
    {
      title: "Sensex gains 315 points, Nifty settles above 23,100 on value buying",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/capital-market-news/sensex-gains-315-points-nifty-settles-above-23-100-on-value-buying-126092500907_1.html"
    },
    {
      title: "Closing Bell: Nifty 50 Closes Above 23,100 Mark but Extends Losing Streak to 7th Consecutive Week",
      source: "DSIJ",
      url: "https://insights.dsij.in/dsijarticledetail/closing-bell-nifty-50-closes-above-23100-mark-but-extends-losing-streak-to-7th-consecutive-week-59717"
    },
    {
      title: "Sensex gains 300 pts from day's low, Nifty above 23,100: Value buying among key factors behind market rise",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/sensex-gains-300-pts-from-day-s-low-nifty-above-23-100-value-buying-among-key-factors-behind-market-rise-14037935.html"
    },
    {
      title: "IT shares fall for sixth straight session; OFSS, Infosys top losers: Here's why",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/it-shares-fall-for-sixth-straight-session-ofss-infosys-top-losers-here-s-why-14038025.html"
    },
    {
      title: "Welspun Corp hits record high, PB Fintech rebounds; Ola Electric, Meesho fall on Nifty500 market open",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty-500-welspun-corp-pb-fintech-ola-electric-meesho-oracle-financial-irdai-market-open-share-price-19998252.htm"
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
