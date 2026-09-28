const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 28 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Monday, 28 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22780.25,
      dayChange: -360.25,
      dayChangePct: -1.56,
      weekChangePct: -1.56, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23329.00, 23446.80, 23063.10, 23140.50, 22780.25] // last 5 closes: 22, 23, 24, 25, 28 Sep
    },
    {
      name: "Sensex",
      close: 72771.72,
      dayChange: -1124.02,
      dayChangePct: -1.52,
      weekChangePct: -1.52, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [74529.08, 74828.25, 73580.54, 73895.74, 72771.72] // last 5 closes: 22, 23, 24, 25, 28 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.63,
      weekChangePct: null,
      spark: null,
      note: "Midcaps sank with the market: the Nifty Midcap 100 fell 1.63% to 59,914.20 and the Nifty Next 50 dropped 2.05%, with the slide driven more by long unwinding than outright selling ahead of the monthly expiry. Zydus Lifesciences bucked the trend, hitting a 52-week high after a clean USFDA inspection of its New Jersey pharmacovigilance system, while Aster DM fell about 2.7% despite Motilal Oswal initiating coverage with a Buy (target Rs 910) and Godrej Properties slipped after bagging a Rs 6,000-crore Mumbai project."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.85,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps bore the brunt: the Nifty Smallcap 100 slid 1.85% to 19,351.10. Manappuram Finance (-6.29%), Physicswallah (-4.80%), IFCI (-4.46%), City Union Bank (-4.24%) and Urban Company (-4.15%) led the fall, while refiner MRPL (+3.31%), Great Eastern Shipping (+2.46%) and Brainbees Solutions (+2.36%) gained as crude and shipping rates firmed."
    }
  ],

  weeklyWrap: {
    headline: "Bears stampede: crude above $107 and 5.2% US yields knock the Nifty below 22,800 to a three-month low",
    niftyFiveSessionPct: -2.71,   // vs 21 Sep close of 23,414.30
    sensexFiveSessionPct: -2.79,  // vs 21 Sep close of 74,858.99
    summary: "Monday brought the week's worst fears forward: the Sensex crashed 1,124.02 points (1.52%) to 72,771.72 and the Nifty 50 fell 360.25 points (1.56%) to 22,780.25 - its first close below 23,000 since April and a fresh three-month low - wiping out nearly Rs 7.5 lakh crore of BSE market capitalisation. Only three of 50 Nifty stocks (Dr Reddy's, Infosys, HDFC Life) ended higher, and India VIX spiked more than 12% to around 13.6, a one-month high. The triggers: Brent surged past $107 after President Trump rejected Iran's proposal for a seven-day ceasefire and reopening of the Strait of Hormuz, the US 10-year Treasury yield pushed further above 5.2% with traders pricing roughly two-thirds odds of another Fed hike in October, and the rupee slid toward 96 a dollar. Banks led the damage - Bank Nifty lost 1.99% to 54,471.65 and PSU banks crashed 3.24% - while realty (-2.12%), metals (-1.78%) and autos (-1.64%) also sank; IT fell the least (-0.26%) as Infosys ended as the only Sensex stock in the green. Midcaps (Midcap 100 -1.63%) and smallcaps (Smallcap 100 -1.85%) were hit by long unwinding ahead of this week's monthly expiry, and FIIs, who sold Rs 3,694 crore on Friday (Rs 25,682 crore so far this month), stayed on the sell side. Over the last five sessions the Nifty is down 2.71% and the Sensex 2.79%."
  },

  dayByDay: [
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: -0.26, note: "Least-bad sector as defensives held up - Infosys (+0.30%) was the only major IT name in the green; TCS, HCL Tech and Tech Mahindra slipped but far less than the market" },
    { name: "Nifty Pharma", changePct: -0.89, note: "Dr Reddy's (+1.67%) topped the Nifty as investors hid in defensive pharma; Zydus Lifesciences hit a 52-week high after a clean USFDA inspection" },
    { name: "Nifty FMCG", changePct: -1.47, note: "Staples fell roughly in line with the benchmarks" },
    { name: "Nifty Auto", changePct: -1.64, note: "Tata Motors PV (-3.0%, a three-year low) and Bajaj Auto (-2.8%) dragged; Hero MotoCorp (+0.26%) was the lone gainer" },
    { name: "Nifty Metal", changePct: -1.78, note: "Metals slid despite record copper prices as the risk-off wave and strong dollar outweighed commodity strength" },
    { name: "Nifty Bank", changePct: -1.99, note: "Bank Nifty tumbled 1,108.75 points to 54,471.65; private banks fell 1.51% with HDFC Bank (-2.30%), ICICI Bank (-1.90%) and SBI (-2.10%) all lower" },
    { name: "Nifty Realty", changePct: -2.12, note: "Rate-sensitive realty slumped as US yields climbed past 5.2%" },
    { name: "Nifty PSU Bank", changePct: -3.24, note: "Day's worst sector - Bank of India, Bank of Maharashtra and Union Bank led the collapse" }
  ],

  movers: {
    gainers: [
      { name: "Dr Reddy's Laboratories", changePct: 1.67, cap: "Largecap", note: "Top Nifty gainer, closing at 1,221 - one of only three Nifty 50 stocks (with Infosys and HDFC Life) to end higher as investors rushed into defensive pharma" },
      { name: "Infosys", changePct: 0.30, cap: "Largecap", note: "Closed at 1,003.20 - the only Sensex constituent in the green - as IT (-0.26%) fell the least of all sectors amid the carnage" },
      { name: "MRPL", changePct: 3.31, cap: "Smallcap", note: "Top gainer in the Nifty Smallcap 100 as refiners and energy names rallied with crude above $107; Great Eastern Shipping (+2.46%) and Brainbees Solutions (+2.36%) followed" }
    ],
    losers: [
      { name: "Jio Financial Services", changePct: -3.35, cap: "Largecap", note: "Worst Nifty 50 stock, closing at 219.40 - a fresh 52-week low - as financials bore the brunt of the sell-off" },
      { name: "Adani Enterprises", changePct: -3.31, cap: "Largecap", note: "Closed at 2,820 after falling as much as 2.7% intraday; Adani Ports (-2.6%) and Tata Motors PV (-3.0%, a three-year low) also slumped" },
      { name: "Manappuram Finance", changePct: -6.29, cap: "Smallcap", note: "Biggest fall in the Nifty Smallcap 100; Physicswallah (-4.80%), IFCI (-4.46%) and City Union Bank (-4.24%) also tumbled" }
    ],
    sensexWinners: ["Infosys"],
    sensexLaggards: ["Larsen & Toubro", "Power Grid", "Tata Motors", "HDFC Bank", "Reliance Industries"]
  },

  watch: [
    {
      title: "How far below 22,800 can the Nifty slide?",
      detail: "Monday's close at 22,780.25 sits right on the first support zone of 22,675-22,785. Analysts flag 22,700-22,650 as the next cushion and 22,550 as stronger support, with 22,200 a major level below that; resistance is stacked at 22,850-22,950, then 23,000. For the Sensex, watch 72,600-72,400 support against 73,000-73,300 resistance. A close below 22,800, some warn, risks a slide toward 22,600."
    },
    {
      title: "Crude and the US-Iran standoff",
      detail: "Brent surged past $107 a barrel (WTI near $96) after President Trump rejected Iran's proposal for a seven-day ceasefire plus reopening of the Strait of Hormuz, and Tehran vowed not to back down. JPMorgan says it no longer has a defined baseline oil scenario - a first since the war began in February - and winter demand plus China's stockpiling may keep prices elevated. Crude drives India's import bill, inflation and the rupee."
    },
    {
      title: "US yields at multi-decade highs",
      detail: "The US 10-year Treasury yield pushed further above 5.2% - its highest in over two decades - with the 30-year above 5.5% and the 2-year above 4.9%, and traders pricing roughly two-thirds odds of another Fed hike in October. The narrowing India-US yield spread risks accelerating FII outflows (already Rs 25,682 crore this month) and pressure on the rupee, which closed near 96.24 a dollar."
    },
    {
      title: "Monthly F&O expiry on Wednesday",
      detail: "Much of Monday's midcap and smallcap damage was long unwinding rather than outright selling ahead of this week's monthly derivatives expiry, and some late buying was short-covering. Expect choppy, headline-driven sessions until expiry clears - especially with heavy put open interest at 22,800 and call writing at 22,900-23,000."
    },
    {
      title: "FIIs vs DIIs, and the RBI's next move",
      detail: "FIIs sold Rs 3,694 crore on Friday, taking September's outflows to about Rs 25,682 crore, while DIIs bought roughly Rs 2,838 crore. With markets also gearing up for the RBI's policy decision, watch whether domestic flows keep absorbing foreign selling - and whether the central bank signals anything on crude-driven inflation risks."
    }
  ],

  reads: [
    {
      title: "Sensex ends over 1,100 points lower, Nifty below 23,000; Reliance, SBI among top losers",
      source: "India Today",
      url: "https://www.indiatoday.in/business/story/sensex-ends-over-1100-points-lower-nifty-below-23000-reliance-hdfc-bank-sbi-among-top-losers-3004788-2026-09-28"
    },
    {
      title: "Closing Bell: Rs 7.5 lakh crore mcap wiped out as Sensex tanks 1,124 points, Nifty below 22,800 - Key reasons explained",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-rs-75-lakh-crore-mcap-wiped-out-as-sensex-tanks-1124-points-nifty-below-22800-key-reasons-explained-402976"
    },
    {
      title: "Stock market crash today: BSE Sensex crashes over 1,000 points, Nifty50 below 22,850 - top reasons for fall",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/stock-market-crash-today-why-bse-sensex-and-nifty50-have-crashed-on-september-28-2026-us-iran-war-crude-oil-rupee-top-reasons-for-fall/articleshow/134532562.cms"
    },
    {
      title: "Stock Market Crash Today: 3 Reasons Sensex, Nifty Fell on Sep 28 Amid Crude Oil Surge, US Yields, FII Outflow",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-crash-today-3-reasons-sensex-nifty-fell-on-sep-28-crude-oil-us-yields-fii-outflow-article-156238870"
    },
    {
      title: "Top gainers and losers, September 28: Tata Motors PV, AEL, Jio Financials tumble 3%; Dr. Reddy's up 2%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-september-28-tata-motors-pv-ael-jio-financials-tumble-3-dr-reddy-s-up-2/article-200997/"
    },
    {
      title: "Markets sink to April lows at noon; crude surge, FII selling batter sentiment across sectors",
      source: "Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/markets-sink-to-april-lows-at-noon-crude-surge-fii-selling-batter-sentiment-across-sectors/article71518803.ece"
    },
    {
      title: "Crude Above $107 Adds To Market Jitters, Sensex Plunges 1,124 Points As Nifty Drops 1.56% And PSU Banks Sink",
      source: "Free Press Journal",
      url: "https://www.freepressjournal.in/business/crude-above-107-adds-to-market-jitters-sensex-plunges-1124-points-as-nifty-drops-156-and-psu-banks-sink"
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
