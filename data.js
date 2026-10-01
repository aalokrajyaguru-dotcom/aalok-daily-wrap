const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 1 October 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 1 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22421.95,
      dayChange: -198.50,
      dayChangePct: -0.88,
      weekChangePct: -3.11, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23140.50, 22780.25, 22716.20, 22620.45, 22421.95] // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
    },
    {
      name: "Sensex",
      close: 71909.70,
      dayChange: -570.59,
      dayChangePct: -0.79,
      weekChangePct: -2.69, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [73895.74, 72771.72, 72529.07, 72480.29, 71909.70] // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.99,
      weekChangePct: null,
      spark: null,
      note: "Mid-caps gave back more than the benchmarks: the S&P BSE 150 MidCap fell 0.99% and the Nifty Midcap 100 slipped 1.01%, while the Nifty Next 50 lost 1.1% - all worse than the Nifty 50. The selling was broad-based, with 2,574 of the 3,707 NSE stocks declining and the BSE 100 large-cap index down 0.95%; IT names were the one place to hide, led by Coforge (+4.18%)."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.23,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps underperformed too: the S&P BSE 250 SmallCap dropped 1.23% and the Nifty Smallcap 100 fell 0.97%. As many as 291 stocks touched fresh 52-week lows against 78 at 52-week highs, and 199 hit the lower circuit versus 95 at the upper circuit; Mphasis (+4.45%) was the pick of the mid-cap gainers even as the small-cap index slid."
    }
  ],

  weeklyWrap: {
    headline: "The losing streak stretches to eight weeks - the longest in 25 years - as the Nifty closes at a fresh low below 22,450 with autos in freefall",
    niftyFiveSessionPct: -2.78,   // vs 24 Sep close of 23,063.10
    sensexFiveSessionPct: -2.27,  // vs 24 Sep close of 73,580.54
    summary: "Thursday was the fourth straight decline and the eighth consecutive weekly loss - the longest such streak in 25 years - as the Nifty 50 fell 198.50 points, or 0.88%, to close at 22,421.95 and the Sensex shed 570.59 points, or 0.79%, to 71,909.70. The session was a slow bleed that turned into a midday rout: the Nifty opened at 22,543.70 and touched a high of 22,610.60 before a sharp bout of afternoon selling dragged it to an intraday low of 22,217.30 - a fresh low just 1.07% above its 52-week low of 22,182.55 - wiping out roughly Rs 9 lakh crore of investor wealth in about an hour and pulling BSE market capitalisation down to Rs 466.89 lakh crore, a loss of nearly Rs 5 lakh crore on the day. Autos led the damage after a disappointing set of September sales: the Nifty Auto index crashed 3.46% to 25,384, with Bajaj Auto (-7.62%) the day's worst Nifty stock, Maruti Suzuki (-4.86%) at a 52-week low and M&M (-3.17%) also touching one. Metal (-2.35%), media (-2.33%), consumer durables (-1.91%) and FMCG (-1.61%) all fell, and only IT stood tall, gaining 2.17% to 28,304 as Infosys (+4.11%), HCL Tech (+1.66%) and TCS (+1.22%) rallied on a weaker rupee and a defensive rotation into dollar earners. The Bank Nifty slipped just 0.33% to 54,450.75, cushioned by HDFC Bank (+1.76%) and HDFC Life (+2.49%). India VIX climbed 7.04% to 14.44, a three-month high. The macro backdrop stayed hostile: the US 10-year Treasury yield touched 5.31%, its highest since 2007, FIIs have now sold about $3.6 billion over five sessions - taking their 2026 outflows to a record $27.8 billion - and the rupee slid 0.5% to 96.3150 a dollar, its weakest in two months. Over the last five sessions the Nifty is down 2.78% and the Sensex 2.27%; the market is shut on Friday for Gandhi Jayanti, and all eyes now turn to the RBI's 5-7 October policy meeting and the Q2 earnings season."
  },

  dayByDay: [
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 - touching its 200-week moving average for the first time since the Covid crash - before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." },
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Fourth straight fall and an eighth weekly loss - the longest in 25 years: the Nifty opens at 22,543.70, peaks at 22,610.60, then a midday sell-off drags it to 22,217.30 (a fresh low just above the 52-week low of 22,182.55) before a partial recovery to 22,421.95; auto September sales miss sends Nifty Auto (-3.46%) tumbling, Bajaj Auto (-7.62%) and Maruti (-4.86%) lead the losers, while IT (+2.17%) is the lone gainer as Infosys (+4.11%) soars; India VIX jumps 7% to 14.44; the rupee breaches 96 to end at 96.3150, its weakest in two months; FII selling continues into a record 2026." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 2.17, note: "The lone gainer among major sectors, closing at 28,304 as the rupee's slide to 96.31 a dollar and a defensive rotation lifted dollar earners: Infosys (+4.11%), Mphasis and Coforge gained around 4%, with HCL Tech (+1.66%) and TCS (+1.22%) also higher" },
    { name: "Nifty Healthcare", changePct: -0.26, note: "The most resilient of the fallers as the defensive healthcare trade held up better than the cyclicals; Apollo Hospitals and Max Healthcare were among the bigger decliners within the pack" },
    { name: "Nifty Bank", changePct: -0.33, note: "Bank Nifty closed at 54,450.75 (-182.30 points), holding up far better than the benchmarks as HDFC Bank (+1.76%) and Kotak Mahindra Bank advanced; a sustained move above 55,000 is needed to build recovery momentum" },
    { name: "Nifty Financial Services", changePct: -0.38, note: "Financials slipped only mildly, with the private banks cushioning the fall even as NBFCs such as Shriram Finance (-3.84%) led the declines" },
    { name: "Nifty Pharma", changePct: -0.48, note: "Pharma ended marginally lower after its late-September slide, relatively insulated from the auto and metal rout; Dr Reddy's Laboratories was among the day's weaker large caps" },
    { name: "Nifty Oil & Gas", changePct: -1.32, note: "Energy names fell as crude eased toward $97: Reliance Industries (-1.40%) slipped, while Chennai Petroleum (-6.35%) was one of the BSE 500's worst performers on refining-margin worries" },
    { name: "Nifty Realty", changePct: -1.46, note: "Rate-sensitive realty stayed under pressure with the US 10-year yield at 5.31% and an RBI rate hike looming over the sector" },
    { name: "Nifty FMCG", changePct: -1.61, note: "Staples were sold off, with ITC (-2.96%) and Hindustan Unilever (-2.32%) among the biggest Sensex losers as the defensive bid rotated into IT" },
    { name: "Nifty Consumer Durables", changePct: -1.91, note: "Durables extended their decline, with Titan and Voltas among the weaker names in the pack" },
    { name: "Nifty Media", changePct: -2.33, note: "Media gave back the previous session's gains, with the high-beta pack falling sharply in the broad risk-off move" },
    { name: "Nifty Metal", changePct: -2.35, note: "Metal was among the worst sectors: Tata Steel (-3.33%) and Grasim (-3.09%) led the slide on growth and input-cost worries" },
    { name: "Nifty Auto", changePct: -3.46, note: "The day's worst sector by a distance, closing at 25,384 after September auto sales missed expectations; Bajaj Auto (-7.62%) led the rout, with Maruti Suzuki (-4.86%) and M&M (-3.17%) hitting 52-week lows" }
  ],

  movers: {
    gainers: [
      { name: "Infosys", changePct: 4.11, cap: "Largecap", note: "Top Nifty gainer, closing at Rs 1,035 as IT - the only sector in the green - rose 2.17%; the rupee's slide to 96.31 a dollar and a defensive rotation into dollar earners lifted the pack, with HCL Tech (+1.66%), TCS (+1.22%) and Tech Mahindra also higher" },
      { name: "HDFC Life Insurance", changePct: 2.49, cap: "Largecap", note: "Second-biggest Nifty gainer, closing at Rs 534.20 as select financials held up; HDFC Bank (+1.76%, Rs 721.20) was the third-biggest gainer and Kotak Mahindra Bank (+0.31%) also advanced" },
      { name: "Schneider Electric", changePct: 6.19, cap: "Largecap", note: "The top BSE 500 gainer, riding the capital-goods bid; IDBI Bank (+5.56%) and Welspun Living (+5.03%) were the other big broader-market winners even as the mid- and small-cap indices fell about 1%" }
    ],
    losers: [
      { name: "Bajaj Auto", changePct: -7.62, cap: "Largecap", note: "The day's worst Nifty stock, closing at Rs 10,045 after opening at Rs 10,701, as September auto sales missed expectations; the Nifty Auto index crashed 3.46%, its sharpest fall in months" },
      { name: "Maruti Suzuki", changePct: -4.86, cap: "Largecap", note: "Closed at Rs 11,386, hitting a 52-week low as the auto pack was sold off; M&M (-3.17%) also touched a 52-week low and Eicher Motors was among the other big auto decliners" },
      { name: "Shriram Finance", changePct: -3.84, cap: "Largecap", note: "Closed at Rs 945, among the weakest financials as NBFCs bore the brunt of the risk-off mood; Tata Steel (-3.33%) and Grasim (-3.09%) were the other big Nifty losers" }
    ],
    sensexWinners: ["Infosys", "HCL Technologies", "HDFC Bank", "TCS", "Kotak Mahindra Bank"],
    sensexLaggards: ["Maruti Suzuki", "Tata Steel", "Mahindra & Mahindra", "ITC", "Adani Ports"]
  },

  watch: [
    {
      title: "Eighth weekly loss - the longest in 25 years",
      detail: "The Nifty's close at 22,421.95 keeps the trend firmly negative and leaves it just 1.07% above its 52-week low of 22,182.55. Zee Business's Anil Singhvi flags 22,175-22,325 as the last major short-term support zone - a close below it could accelerate selling - while 22,600-22,800 is the immediate resistance band. HST Wealth's Hariselvan Radhakrishnan says a failure to defend 22,400 could open 22,200-22,000; Axis Securities sees a sustained move above 22,800 as the trigger for 23,000-23,100."
    },
    {
      title: "FII selling: record outflows, record year",
      detail: "FIIs sold a net Rs 10,148 crore on Wednesday and have offloaded roughly $3.6 billion over five sessions, taking their 2026 cash-market selling to a record $27.8 billion. DIIs have absorbed it, buying Rs 11,271 crore on Wednesday for a 36th straight session, but a pause in domestic buying while FIIs keep selling would pull the floor out from under the broader market."
    },
    {
      title: "RBI policy on 5-7 October",
      detail: "The Monetary Policy Committee meets next week with a Reuters poll showing 35 of 61 economists expecting a 25-basis-point hike to 5.50% - the first increase since February 2023 - as inflation and a weak rupee bite. One-year overnight index swaps are pricing about 100 bps of tightening over the next year; the guidance beyond the meeting matters as much as the decision itself."
    },
    {
      title: "Crude eases, but US yields at decadal highs",
      detail: "Brent traded around $97 a barrel, down about 1%, as Gulf exports recovered and US inventories rose unexpectedly, though it is still up roughly 14% for September. The US 10-year Treasury yield touched 5.31% - its highest since 2007 and its biggest quarterly jump since 1994 - and the 30-year topped 5.65%, the highest since 2002, keeping global liquidity tight and emerging-market flows under pressure."
    },
    {
      title: "Rupee breaches 96, then a long weekend",
      detail: "The rupee slid 0.5% to 96.3150 a dollar - its weakest in two months and sharpest single-day fall in over two months - despite state-run banks selling dollars for the RBI. Markets are shut on Friday for Gandhi Jayanti, so traders go into an extended break with the rupee, crude and the US yield complex all unresolved."
    }
  ],

  reads: [
    {
      title: "Taking Stock: Bears tighten grip; Nifty below 22,500, Sensex sheds 571 points",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/taking-stock-bears-tighten-grip-nifty-below-22-500-sensex-sheds-571-points-14042771.html"
    },
    {
      title: "Stock Market Highlights, Oct 1: Sensex falls 571 points, Nifty slips 0.88% as auto stocks drag markets",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-stock-market-highlights-1-october-2026/article71528461.ece"
    },
    {
      title: "Market wrap: Infosys, HDFC Bank, Bajaj Auto, Maruti Suzuki among top gainers and losers on Nifty and Sensex on Thursday",
      source: "Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/market-wrap-infosys-hdfc-bank-bajaj-auto-maruti-suzuki-among-top-gainers-and-losers-on-nifty-and-sensex-on-thursday/articleshow/134617786.cms"
    },
    {
      title: "Stock Market Today: Sensex, Nifty Fall 1% as Losing Streak Hits 25 Years",
      source: "The Indian Express",
      url: "https://indianexpress.com/article/business/market/indian-stock-markets-worst-losing-streak-25-years-10902435/"
    },
    {
      title: "Why is stock market crashing today? Rs 9 lakh crore wiped out as Dalal Street heads for worst week in 25 years",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/business/india-business/why-is-sensex-crashing-rs-9-lakh-crore-wiped-out-as-dalal-street-heads-for-worst-week-in-25-years/articleshow/134613883.cms"
    },
    {
      title: "Closing Bell: Rs 5 lakh crore mcap wiped out as Sensex falls 571 points; Nifty below 22,450 - Auto, metal stocks top losers",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-rs-5-lakh-crore-mcap-wiped-out-as-sensex-falls-571-points-nifty-below-22450-auto-metal-stocks-top-losers-403209"
    },
    {
      title: "Top Gainers and Losers on October 1, 2026: Infosys and HDFC Life Gain, While Bajaj Auto Drops Over 7%",
      source: "Angel One",
      url: "https://www.angelone.in/news/market-updates/top-gainers-and-losers-on-october-1-2026-infosys-and-hdfc-life-gain-while-bajaj-auto-drops-over-7"
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
