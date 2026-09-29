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
      weekChangePct: -0.28, // week-to-date vs Mon, 28 Sep close of 22,780.25
      spark: [23446.80, 23063.10, 23140.50, 22780.25, 22716.20] // last 5 closes: 23, 24, 25, 28, 29 Sep
    },
    {
      name: "Sensex",
      close: 72529.07,
      dayChange: -242.65,
      dayChangePct: -0.33,
      weekChangePct: -0.33, // week-to-date vs Mon, 28 Sep close of 72,771.72
      spark: [74828.25, 73580.54, 73895.74, 72771.72, 72529.07] // last 5 closes: 23, 24, 25, 28, 29 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.99,
      weekChangePct: null,
      spark: null,
      note: "Midcaps fell harder than the benchmarks again: the Nifty Midcap 100 dropped 0.99% on monthly-expiry day. Mankind Pharma (up about 2%) rode the pharma rally and Kalyan Jewellers gained 1.7%, but United Spirits (-2.7%) and ICICI Prudential Life (-2.4%) were among the bigger losers, and NCC fell 1.76% despite winning a Rs 1,077-crore order from the Andhra Pradesh government."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.81,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps extended their slide: the Nifty Smallcap 100 slipped 0.81%. Vishal Mega Mart hit the upper circuit (+3.46% to Rs 104.30) and Ellenbarrie Industrial Gases rose 2.72% on a Rs 481-crore BHEL order, but breadth stayed negative - 2,039 declines to 1,529 advances on the NSE, with 227 stocks hitting 52-week lows against 66 new highs and 130 stocks locked in lower circuits."
    }
  ],

  weeklyWrap: {
    headline: "Expiry-day escape act: Nifty slices through its 200-week moving average to 22,569, then claws back to close just 0.3% lower at a fresh six-month low",
    niftyFiveSessionPct: -2.63,   // vs 22 Sep close of 23,329.00
    sensexFiveSessionPct: -2.68,  // vs 22 Sep close of 74,529.08
    summary: "Tuesday was an expiry-day rollercoaster: the Nifty sliced through its 200-week moving average to an intraday low of 22,569.65 - its first brush with that Covid-crash line since 2020 - before a pharma-led pullback pared the damage to a 64.05-point (0.28%) loss at 22,716.20, a fresh six-month low. The Sensex slumped as much as 707.72 points (0.97%) to an intraday low of 72,064 before recovering to end 242.65 points (0.33%) down at 72,529.07, its second straight losing session. The September F&O series expired with the Nifty down roughly 6% for the month. Metal, pharma and healthcare were the only sectors in the green - Dr Reddy's (+2.02%) topped the Nifty for a second day - while consumer durables (-2.14%), IT (-1.48%), realty and autos sank as Brent held near $106 on the deadlocked US-Iran standoff and the US 10-year yield stayed above 5.2%. India VIX spiked above 14.7 intraday before cooling to end about 2% lower near 13.4, and the rupee cracked 96 a dollar before RBI action and index-rebalancing inflows steadied it. FIIs sold for a third straight session. Adani Ports (+13.4 points) and HDFC Bank (+12.2 points) supported the Nifty while Reliance (-22.8 points), ICICI Bank (-15.3) and Titan (-13.1) dragged. Over the last five sessions the Nifty is down 2.63% and the Sensex 2.68%."
  },

  dayByDay: [
    { date: "2026-09-23", label: "Wed 23 Sep", niftyClose: 23446.80, niftyChangePct: 0.50, sensexChangePct: 0.40, note: "Rebound to a two-week high as metals rally on record copper and sub-$100 crude on US-Iran diplomacy hopes; IT the only major laggard." },
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day swing: Nifty plunges through its 200-week moving average to 22,569.65 before pharma-led buying claws back most of the loss; metal, pharma and healthcare the only green sectors; VIX cools ~2% to ~13.4 after spiking above 14.7 intraday." }
  ],

  sectors: [
    { name: "Nifty Pharma", changePct: 0.65, note: "Dr Reddy's (+2.02%) led the Nifty for a second straight session as crude above $106 sent investors into defensives; Cipla, Sun Pharma and Apollo Hospitals also gained, with Mankind Pharma up about 2% in the midcap space" },
    { name: "Nifty Metal", changePct: 0.39, note: "Tata Steel (+1.10%) was among the top five Nifty gainers and Adani Enterprises rallied hard as the sector clawed back part of Monday's 1.78% slide" },
    { name: "Nifty PSU Bank", changePct: 0.07, note: "A marginal, fragile rebound after Monday's 3.24% crash - the market's most beaten-down sector caught its breath on expiry day" },
    { name: "Nifty Bank", changePct: -0.59, note: "Bank Nifty underperformed the benchmarks as ICICI Bank weighed; Kotak Mahindra (+1.28%) and HDFC Bank turned around late after a weak morning for the pack" },
    { name: "Nifty Auto", changePct: -0.81, note: "Rate-sensitive autos slid with consumer names; the sector has lost roughly 9% across the September series - among the worst of any sector" },
    { name: "Nifty FMCG", changePct: -0.94, note: "Hindustan Unilever was among the Sensex laggards and Colgate-Palmolive fell 2.05% to Rs 1,808.10 in the closing session" },
    { name: "Nifty Realty", changePct: -1.12, note: "All 10 realty constituents ended negative and the index closed below all its key moving averages, extending the slide that began with US yields pushing past 5.2%" },
    { name: "Nifty IT", changePct: -1.48, note: "HCL Tech (-1.93%), Infosys and Wipro (-2.33%) all fell hard; Wipro's exit from the Nifty 50 - making way for BSE Ltd - takes effect with Thursday's session, an estimated $152 million of passive outflow" },
    { name: "Nifty Consumer Durables", changePct: -2.14, note: "Day's worst sector - Titan (-2.54%) was the biggest Nifty loser as jewellery and discretionary demand took the brunt of the risk-off" }
  ],

  movers: {
    gainers: [
      { name: "Dr Reddy's Laboratories", changePct: 2.02, cap: "Largecap", note: "Top Nifty gainer for a second straight session - crude above $106 and a sliding rupee sent investors rushing into export-heavy defensive pharma" },
      { name: "Adani Enterprises", changePct: 1.95, cap: "Largecap", note: "Bounced hard from Monday's 3.3% slump, rising as much as 5% intraday before settling up about 2%; Adani Ports (+1.38%) was also strong and contributed a Nifty-topping 13.44 points" },
      { name: "Vishal Mega Mart", changePct: 3.46, cap: "Midcap", note: "Hit the upper circuit at Rs 104.30 in the closing session - one of the few broader-market names with firm buying even as 2,039 NSE stocks declined" }
    ],
    losers: [
      { name: "Titan Company", changePct: -2.54, cap: "Largecap", note: "Worst Nifty 50 stock of the day as the consumer durables sector (-2.14%) took the hardest hit of any sector" },
      { name: "Wipro", changePct: -2.33, cap: "Largecap", note: "Second-worst on the Nifty in its final session as a constituent - it exits the index on 30 September, replaced by BSE Ltd, with an estimated $152 million of passive outflow" },
      { name: "Hindustan Aeronautics", changePct: -3.98, cap: "Largecap", note: "Ended at Rs 4,549.30, the steepest fall among heavyweights as defence and capital-goods names joined the slide" }
    ],
    sensexWinners: ["Adani Ports", "Sun Pharma", "Tata Steel", "Kotak Mahindra Bank"],
    sensexLaggards: ["Titan", "HCL Tech", "TCS", "UltraTech Cement", "Tech Mahindra"]
  },

  watch: [
    {
      title: "The 200-week moving average - the Covid-crash line",
      detail: "The Nifty slipped to its 200-week moving average, placed around 22,600, for the first time since the Covid crash (LKP Securities). A decisive break below it could trigger a sharper correction; holding above it opens a recovery toward the higher end. Immediate resistance sits at 22,800, with Axis Direct flagging 22,700-22,550 as support and 23,000-23,050 as resistance. Kotak Securities' Shrikant Chouhan calls the market temporarily oversold, with 22,800 the key level to reclaim."
    },
    {
      title: "Crude and the Strait of Hormuz",
      detail: "Brent climbed toward $106 a barrel (WTI near $93) as US-Iran negotiations stayed deadlocked, though Saudi Arabia's East-West pipeline resumed flows after repairs - a partial supply offset. Sanctions relief for Iran hinges on nuclear-talks progress. JPMorgan says it no longer has a defined baseline oil scenario - a first since the war began in February. Every dollar of crude feeds directly into India's import bill, inflation and the rupee."
    },
    {
      title: "Index rebalancing: BSE Ltd in, Wipro out",
      detail: "BSE Ltd enters the Nifty 50 on 30 September, replacing Wipro, with its 6-month average free-float market cap of Rs 1,40,879 crore easily clearing the 1.5x threshold (Wipro: Rs 55,930 crore). Estimated passive flows: BSE +$630 million, Wipro -$152 million. The Nifty 100 also adds Hitachi Energy India, Polycab India, Vedanta Aluminium Metal and Vodafone Idea. Expiry-day rebalancing inflows already helped steady the rupee on Tuesday."
    },
    {
      title: "The rupee at 96 and the FII treadmill",
      detail: "The rupee cracked 96 a dollar intraday before RBI action, a pullback in global crude and rebalancing-driven foreign inflows restored some stability; watch 96.30 as resistance and 95.80 as support (HDFC Securities). FIIs have now sold for a third straight session - more than Rs 5,300 crore on Monday alone - keeping the pressure on domestic institutions to absorb the outflows."
    },
    {
      title: "October series: earnings, the Fed and oversold bounces",
      detail: "With the September series expired (Nifty down ~6% for the month), focus shifts to Q2 earnings - expectations already tempered versus Q1 (Geojit) - plus US GDP data and monthly auto sales numbers flagged by analysts ahead. Geojit's Anand James sees a near-term pullback toward 23,020 possible from oversold momentum readings, though the broader trend stays weak below 23,150."
    }
  ],

  reads: [
    {
      title: "Closing Bell: Nifty Ends Below 22,700 Mark, Hits New 6-Month Low",
      source: "DSIJ Insights",
      url: "https://insights.dsij.in/dsijarticledetail/closing-bell-nifty-ends-below-22700-mark-hits-new-6-month-low-59752"
    },
    {
      title: "Stock Market Today Highlights: Stock markets fall for 2nd day as elevated oil prices, foreign fund outflows weigh",
      source: "Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-live-updates-29-september-2026/article71520150.ece"
    },
    {
      title: "Closing Bell: Nifty below 22,750 on expiry day; Sensex falls 240 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-29-09-2026-alpha-liveblog-14040455.html"
    },
    {
      title: "No respite after Monday blues: Sensex slumps 568 points, Nifty below 22,650; what's dragging the market?",
      source: "Fortune India",
      url: "https://www.fortuneindia.com/markets/no-respite-after-monday-blues-sensex-slumps-568-points-nifty-below-22650-whats-dragging-the-market/161708"
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
    },
    {
      title: "Stock Market Crashes Today Live Updates: BSE Sensex tumbles over 600 points, Nifty50 below 22,650",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/sensex-stock-market-today-29-september-2026-live-updates-nse-bse-gift-nifty-50-top-gainers-losers-mcx-stocks-in-focus-market-news/liveblog/134555297.cms"
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
