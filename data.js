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
      note: "Midcaps were hammered along with the banks: the Nifty Midcap 100 crashed 991.80 points to 59,914.20 as the 10-year US yield sat near a 20-year high of 5.2%. Yes Bank (-5.87%), Bank of India (-5.76%) and Vodafone Idea (-5.54%) led the slide, while Dixon Technologies (+1.87%) and Voltas (+1.55%) gained after appliance makers announced a third round of price hikes for October 1."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.85,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps bore the brunt of the risk-off: the Nifty Smallcap 100 slid 364.15 points to 19,351.10. Manappuram Finance (-6.29%) and Physicswallah (-4.80%) were the biggest losers, while MRPL (+3.31%) and Great Eastern Shipping (+2.46%) stayed afloat. Analysts read the correction as long unwinding rather than outright selling ahead of the monthly expiry."
    }
  ],

  weeklyWrap: {
    headline: "Nifty cracks below 22,800 as crude, US yields and Iran worries trigger a Rs 7.5 lakh crore rout",
    niftyFiveSessionPct: -2.71,   // vs 21 Sep close of 23,414.30
    sensexFiveSessionPct: -2.79,  // vs 21 Sep close of 74,858.99
    summary: "The Nifty tumbled 1.56% to 22,780.25 and the Sensex 1.52% to 72,771.72 on Monday - a three-month low for the benchmarks - as nearly Rs 7.5 lakh crore of BSE market capitalisation was wiped out in a single session. Brent crude surged about 3.8% past $108 a barrel after the US rejected an Iranian ceasefire proposal, dashing hopes of an early de-escalation, while the US 10-year yield held near 5.2%, a near 20-year high, keeping foreign money flowing out of Indian equities. Banks led the carnage: Bank Nifty sank 1.99% to 54,471.65 with the PSU Bank index down 3.24% (HDFC Bank -2.30%, SBI -2.10%, ICICI Bank -1.90%), and the Nifty Next 50 lost 2.05%. Only three of 50 Nifty stocks advanced - Dr. Reddy's (+1.67%), Infosys (+0.30%) and HDFC Life (+0.11%) - while Tata Motors PV (-3%), Adani Enterprises (-2.93%) and Jio Financial (-2.86%) brought up the rear. IT was the day's relative shelter (Nifty IT -0.26%), with Infosys the sole major Sensex gainer (+0.20%). India VIX spiked about 12% to 13.64, and breadth was ugly: 2,716 of 3,676 NSE stocks declined, with 177 hitting 52-week lows. Midcaps (Nifty Midcap 100 -1.63%) and smallcaps (-1.85%) fell harder than the benchmarks. FIIs sold another Rs 3,694 crore on Friday, taking September outflows past Rs 25,000 crore even as DIIs kept buying. Over the last five sessions the Nifty is down 2.71% and the Sensex 2.79%."
  },

  dayByDay: [
    { date: "2026-09-22", label: "Tue 22 Sep", niftyClose: 23329.00, niftyChangePct: -0.36, sensexChangePct: -0.44, note: "Streak snapped: early gains fade into the weekly F&O expiry as IT, FMCG and PSU banks drag; media, realty and metals gain." },
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Brent surges ~3.8% past $108 after the US rejects an Iran ceasefire proposal and the US 10-year yield sits near 5.2%; banks lead a Rs 7.5 lakh crore mcap rout, VIX jumps 12%, Nifty ends below 22,800 at a three-month low." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: -0.26, note: "The day's relative shelter after six straight sessions of falls - Infosys (+0.20%) was the only major Sensex stock to end higher, though TCS (-0.59%), HCL Tech (-0.45%) and Tech Mahindra (-0.24%) stayed in the red" },
    { name: "Nifty Pharma", changePct: -0.89, note: "Dr. Reddy's (+1.67%) was the top Nifty gainer of the day as defensive names found buyers" },
    { name: "Nifty FMCG", changePct: -1.47, note: "Consumer staples slid with the market; appliance makers were the exception - Dixon (+1.87%) and Voltas (+1.55%) rose on an October 1 price-hike round (ACs up 5-8%)" },
    { name: "Nifty Private Bank", changePct: -1.51, note: "HDFC Bank -2.30%, ICICI Bank -1.90% as bond yields climbed" },
    { name: "Nifty Auto", changePct: -1.64, note: "Tata Motors PV (-3%) was the worst Nifty stock of the session" },
    { name: "Nifty Metal", changePct: -1.78, note: "Fell despite the commodity surge as risk appetite drained" },
    { name: "Nifty Realty", changePct: -2.12, note: "Rate-sensitives gave back all of Friday's gains as US yields hit multi-decade highs" },
    { name: "Nifty PSU Bank", changePct: -3.24, note: "Day's worst sector - Bank of India (-5.76%) and IDFC First Bank (-3.88%) among the battered" }
  ],

  movers: {
    gainers: [
      { name: "Dr. Reddy's Laboratories", changePct: 1.67, cap: "Largecap", note: "Top Nifty gainer on a day when only three of the 50 index constituents advanced" },
      { name: "Dixon Technologies", changePct: 1.87, cap: "Midcap", note: "Best Nifty Midcap 100 stock - appliance and consumer-electronics makers announced a third 2026 round of price hikes from October 1, with AC prices set to rise 5-8%" },
      { name: "Mangalore Refinery & Petrochemicals", changePct: 3.31, cap: "Smallcap", note: "Top Nifty Smallcap 100 gainer as refining names rode the crude surge" }
    ],
    losers: [
      { name: "Tata Motors Passenger Vehicles", changePct: -3.0, cap: "Largecap", note: "Worst Nifty stock of the day, ahead of Adani Enterprises (-2.93%), Jio Financial (-2.86%), Power Grid (-2.84%) and L&T (-2.83%); among Sensex names L&T (-2.70%) led the fall" },
      { name: "Yes Bank", changePct: -5.87, cap: "Midcap", note: "Worst Nifty Midcap 100 stock as banking stocks crumbled under the weight of near-20-year-high US yields, followed by Bank of India (-5.76%) and Vodafone Idea (-5.54%)" },
      { name: "Manappuram Finance", changePct: -6.29, cap: "Smallcap", note: "Worst Nifty Smallcap 100 stock despite the bullish technical setup brokerages flagged in the morning; Physicswallah (-4.80%) and IFCI (-4.46%) also plunged" }
    ],
    sensexWinners: ["Infosys"],
    sensexLaggards: ["Larsen & Toubro", "Power Grid", "Adani Ports", "HDFC Bank", "Reliance Industries"]
  },

  watch: [
    {
      title: "Nifty staring at 22,600 after breaking 22,800",
      detail: "Monday's close at 22,780.25 sits right on the 22,675-22,785 support zone Zee Business's Anil Singhvi flagged; a sustained close below 22,800, he warns, opens the door to about 22,600, with 22,200 the next major level. Hedged.in sees immediate support at 22,700-22,650, then a stronger floor near 22,550, with resistance stacked at 22,850-22,950 (Sensex support 72,600-72,400, resistance 73,000-73,300). Resistance above that sits at 23,000-23,750."
    },
    {
      title: "Crude and the collapsed US-Iran truce hopes",
      detail: "Brent jumped about 3.8% to $108.30 a barrel (WTI $95.93) after the US rejected a ceasefire proposal - Geojit's Vinod Nair says this raises fears that West Asia tensions, supply disruptions and higher commodity prices could persist. Winter demand in Europe and China's stock-building are adding real demand to the supply-side squeeze, dimming hopes of an early price decline. Crude drives India's import bill, inflation and the rupee."
    },
    {
      title: "US yields near 20-year highs and FPI outflows",
      detail: "The US 10-year Treasury yield hovered around 5.2%, its highest in nearly 20 years, and traders are bracing for another Fed rate hike - expectations of which have kept the dollar firm. The narrowing India-US yield spread is encouraging foreign outflows: FIIs sold Rs 3,694 crore on Friday, taking September's total equity outflows past Rs 25,000 crore even as DIIs kept buying. Watch whether the global bond rout extends."
    },
    {
      title: "Monthly F&O expiry on Wednesday",
      detail: "Much of Monday's selling was long unwinding and position-cutting ahead of the monthly derivatives expiry on 30 September, with investors postponing fresh buying. Expect choppy trade until the expiry clears; some of Monday's late stabilisation was already short-covering."
    },
    {
      title: "Bank Nifty tests 54,300-54,600 support",
      detail: "Bank Nifty fell 1.99% to 54,471.65 - its worst sector showing was PSU banks at -3.24%. Singhvi sees the next support at 54,300-54,600 with position-lightening likely near 55,000-55,300 on any bounce; a close below 55,300 would be unfavourable, and the index is already well under it. RBI's upcoming policy decision adds another overhang for rate-sensitives."
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
      title: "Top gainers and losers, September 28: Tata Motors PV, AEL, Jio Financials tumble 3%; Dr. Reddy's up 2%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-september-28-tata-motors-pv-ael-jio-financials-tumble-3-dr-reddy-s-up-2/article-200997/"
    },
    {
      title: "Stock market crash today: BSE Sensex crashes over 1,000 points, Nifty50 below 22,850 - top reasons for fall",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/stock-market-crash-today-why-bse-sensex-and-nifty50-have-crashed-on-september-28-2026-us-iran-war-crude-oil-rupee-top-reasons-for-fall/articleshow/134532562.cms"
    },
    {
      title: "India shares lower at close of trade; Nifty 50 down 1.56%",
      source: "Investing.com",
      url: "https://in.investing.com/news/stock-market-news/india-shares-lower-at-close-of-trade-nifty-50-down-156-5608476"
    },
    {
      title: "Sensex, Nifty 50 Today | Stock Market LIVE, 28 September 2026",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/sensex-nifty-50-stock-today-market-live-updates-28-september-2026-sensex-nifty-today-share-price-action-gainers-losers-and-sector-performance-liveblog-156238372"
    },
    {
      title: "Sensex today | Stock Market Live: Markets sink - BusinessLine live blog, 28 September 2026",
      source: "Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-live-updates-28-septmeber-2026/article71515691.ece"
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
