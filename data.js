const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 30 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 30 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22620.45,
      dayChange: -95.75,
      dayChangePct: -0.42,
      weekChangePct: -2.25, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23063.10, 23140.50, 22780.25, 22716.20, 22620.45] // last 5 closes: 24, 25, 28, 29, 30 Sep
    },
    {
      name: "Sensex",
      close: 72480.29,
      dayChange: -48.78,
      dayChangePct: -0.07,
      weekChangePct: -1.92, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [73580.54, 73895.74, 72771.72, 72529.07, 72480.29] // last 5 closes: 24, 25, 28, 29, 30 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.17,
      weekChangePct: null,
      spark: null,
      note: "Midcaps held up better than the headline indices: the Nifty Midcap 100 ended almost flat (the Midcap Select index rose 0.42%) even as the Nifty 50 lost 0.42%. J K Cements (+5.22%) led the segment on cement buying, while Fortis Healthcare (-6.56%) was hammered as hospital stocks crumbled; breadth was near-even at 79 advances to 71 declines in the BSE midcap universe."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.00,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps eked out a positive finish to a brutal month: the Nifty Smallcap 100 gained 0.27% (Smallcap 250 +0.29%), leaving the BSE 250 SmallCap index unchanged on the day - a rare session of resilience after the September-series battering."
    }
  ],

  weeklyWrap: {
    headline: "September and the quarter sign off in the red, but a bank-led fightback keeps the Nifty above its 200-week moving average even as hospital stocks crumble",
    niftyFiveSessionPct: -3.52,   // vs 23 Sep close of 23,446.80
    sensexFiveSessionPct: -3.14,  // vs 23 Sep close of 74,828.25
    summary: "Wednesday was a fade-out finish to a rough month and quarter: the Sensex opened at 72,441 and rose as much as 185 points to an intraday high of 73,062 before profit booking on a rebound in crude (Brent back above $103) dragged it to 72,480.29 (-0.07%), while the Nifty slipped 0.42% to 22,620.45 - a third straight loss but a controlled one, with the index staying above Tuesday's 22,569 low and the 200-week moving average. Banks led the fightback: the Bank Nifty rose 0.69% to 54,633.05 as Kotak Mahindra Bank (+2.86%), ICICI Bank (+2.31%) and Axis Bank (+1.41%) attracted safety-seeking large-cap money, while auto stocks raced ahead of September sales data. Hospital stocks fell hard on Supreme Court scrutiny of treatment mark-ups - Max Healthcare, Apollo Hospitals and Fortis (-6.56%) slumped - and pharma (-1.84%), metal (-1.50%) and consumer durables (-1.35%) stayed under pressure. India VIX inched up to 13.50. September thus ends with the Nifty down about 6% and the Sensex a similar amount - the worst month for the index since 2018 and its worst September F&O series in 25 years, with the Bank Nifty down 5.74% - as elevated crude, US 10-year yields at 5.293% (a 19-year high) and FII selling (Tuesday's Rs 9,980-crore outflow was the biggest in about four months; roughly $2.7 billion left in September) kept risk appetite muted. The rupee gained 16 paise to 95.82 a dollar. Over the last five sessions the Nifty is down 3.52% and the Sensex 3.14%. Attention now turns to the October series, Q2 earnings and the US inflation print."
  },

  dayByDay: [
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 - touching its 200-week moving average for the first time since the Covid crash - before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Quarter-end fade: an early 185-point Sensex rally (high 73,062) melts on profit booking as Brent rebounds past $103; banks (Kotak +2.86%, ICICI +2.31%) and autos race ahead, but hospital stocks crash on Supreme Court scrutiny of mark-ups and pharma, metal and durables drag; Bank Nifty +0.69% to 54,633; BSE Ltd debuts in the Nifty 50 replacing Wipro; September ends with the Nifty down ~6% - its worst month since 2018." }
  ],

  sectors: [
    { name: "Nifty Media", changePct: 2.74, note: "The day's best sector by a distance, powered by Sun TV's sharpest single-day rally in nine years - the stock has surged about 45% over the last seven sessions - as broadcasters attracted momentum money on a day little else worked" },
    { name: "Nifty Realty", changePct: 1.62, note: "Rate-sensitive realty bounced even with US yields at multi-decade highs, recovering a slice of the roughly 7% the sector lost across the September series" },
    { name: "Nifty Private Bank", changePct: 0.95, note: "The large-cap safety trade: Kotak Mahindra Bank (+2.86%), ICICI Bank (+2.31%), Axis Bank (+1.41%) and IndusInd (+2.05%) all gained as investors gravitated to attractive valuations and a margin of safety, even as HDFC Bank (-1.43%) lagged" },
    { name: "Nifty Bank", changePct: 0.69, note: "The Bank Nifty ended at 54,633.05, comfortably above the 54,000 level it defended all week, ahead of quarterly updates from the sector; a move above 54,500-54,600 is seen opening the next leg higher" },
    { name: "Nifty PSU Bank", changePct: 0.54, note: "State-run banks joined the recovery for a second session after Monday's 3.2% crash, keeping the sector among the better performers on the day" },
    { name: "Nifty IT", changePct: 0.13, note: "Resilient despite US 10-year yields at a 19-year high: Tech Mahindra (+0.82%), TCS (+0.69%) and HCL Tech (+0.33%) gained, though Infosys (-1.04%) stayed weak after Tuesday's bounce" },
    { name: "Nifty Metal", changePct: -1.50, note: "Tata Steel (-1.76%) led the slide as the risk-off tone and firm crude kept input-cost worries alive; FMCG (-0.63%) and consumer durables (-1.35%) also ended lower" },
    { name: "Nifty Healthcare", changePct: -2.57, note: "The day's worst sector: Max Healthcare and Apollo Hospitals were among the top Nifty losers and Fortis Healthcare (-6.56%) tumbled as the Supreme Court scrutinised hospital treatment mark-ups; pharma gave back Tuesday's gains, with Sun Pharma (-2.15%) and the Nifty Pharma index (-1.84%) sliding" }
  ],

  movers: {
    gainers: [
      { name: "Kotak Mahindra Bank", changePct: 2.86, cap: "Largecap", note: "Top Nifty 50 gainer as the bank pack attracted the day's clearest buying - Geojit's Vinod Nair noted investors favouring banking and IT large caps for 'relatively attractive valuations and a higher margin of safety' amid macro uncertainty" },
      { name: "ICICI Bank", changePct: 2.31, cap: "Largecap", note: "The heavyweight private lender scaled 2.31% to lead the Bank Nifty's 0.69% rise to 54,633; IndiGo (+2.05%) and Axis Bank (+1.41%) were the other big index movers, with UltraTech (+1.18%), Maruti Suzuki and HUL also gaining" },
      { name: "J K Cements", changePct: 5.22, cap: "Midcap", note: "The BSE midcap segment's best stock on renewed infra-spending optimism in cement, leading a flat day for midcaps; Sun TV's nine-year-high rally powered media (+2.74%) at the sector level" }
    ],
    losers: [
      { name: "Eternal", changePct: -2.31, cap: "Largecap", note: "The worst Nifty 50 stock as consumer-facing names stayed out of favour; Titan (-2.01%) sank with consumer durables (-1.35%) and ONGC and SBI Life also featured among the top index losers" },
      { name: "Sun Pharma", changePct: -2.15, cap: "Largecap", note: "Led pharma's (-1.84%) retreat after Tuesday's defensive rally; the healthcare index (-2.57%) was the day's worst sector as hospitals came under Supreme Court scrutiny of treatment mark-ups" },
      { name: "Fortis Healthcare", changePct: -6.56, cap: "Midcap", note: "The sharpest midcap fall as the hospital selloff broadened - Max Healthcare and Apollo Hospitals were among the top Nifty 50 losers on the mark-up investigation; Tata Steel (-1.76%) and Adani Ports (-1.76%) dragged the large caps" }
    ],
    sensexWinners: ["Kotak Mahindra Bank", "ICICI Bank", "Axis Bank", "Hindustan Unilever"],
    sensexLaggards: ["Eternal", "Sun Pharma", "Titan", "Tata Steel", "Adani Ports"]
  },

  watch: [
    {
      title: "October series opens with the damage contained",
      detail: "The new F&O series began on a positive note with the Nifty holding above Tuesday's 22,569 low and its 200-week moving average near 22,600. Analysts mark immediate support at 22,500-22,550 and resistance at 22,900-23,000; Thincredblu's Gaurav Udani says a sustained move above 23,050 is needed to signal a trend reversal, until which rallies are likely to be sold into."
    },
    {
      title: "BSE Ltd's first session inside the Nifty 50",
      detail: "The exchange operator's stock declined on the day it officially replaced Wipro in the benchmark, while Wipro gained after moving down to the Nifty Next 50 - a classic index-event pattern. The reshuffle drove roughly $630 million of estimated passive inflows into BSE and $152 million of outflows from Wipro as funds rebalanced after Tuesday's close."
    },
    {
      title: "Crude's see-saw and the Hormuz question",
      detail: "Brent swung between about $102 and $104 before settling around $103.8 (+1.2%), as Saudi Arabia restored half the capacity of its East-West pipeline after drone attacks but uncertainty over the Strait of Hormuz persisted amid the US-Iran conflict. Oil marketing companies HPCL, BPCL and IOC gained on the intraday dip in crude; every dollar on the barrel feeds India's import bill, inflation and the rupee."
    },
    {
      title: "US yields at multi-decade highs - and FIIs still leaving",
      detail: "The US 10-year Treasury yield closed at 5.293%, its highest since June 2007, and the 30-year at 5.62%, the highest since June 2002. Odds of another Fed hike in October slipped to about 51.5% after New York Fed President John Williams urged patience, and the US inflation print is the next big trigger. FIIs sold Rs 9,980 crore on Tuesday - the biggest single-day outflow in about four months - taking September's tally to roughly $2.7 billion."
    },
    {
      title: "Hospitals under the Supreme Court lens",
      detail: "Hospital stocks took the day's sharpest hit as the Supreme Court scrutinised mark-ups on treatment costs - Max Healthcare, Apollo Hospitals and Fortis (-6.56%) all fell. With the Q2 earnings season starting in October, healthcare pricing will stay in focus; auto makers' September sales numbers, released around the month-end, were the day's other data point and drove the auto rally."
    }
  ],

  reads: [
    {
      title: "Market Close: Sensex Ends 49 Points Lower, Nifty Slips Below 22,650; Bank Stocks Gain, Pharma, Metal Drag",
      source: "News18",
      url: "https://www.news18.com/business/markets/market-close-sensex-ends-49-points-lower-nifty-slips-below-22650-bank-stocks-gain-pharma-metal-drag-ws-l-10361074.html"
    },
    {
      title: "Nifty ends below 22,650 amid FII selling",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/live-news/nifty-ends-below-22-650-amid-fii-selling/1734696"
    },
    {
      title: "Sensex today, Nifty today: Crude oil, FII outflows keep markets under pressure",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/sensex-today-nifty-today-crude-oil-fii-outflows-market-close-3006537-2026-09-30"
    },
    {
      title: "Market Wrap: Nifty Slips Below 22,700 as Auto Rally Fails to Offset Broad Weakness",
      source: "Dhan (ScanX)",
      url: "https://scanx.trade/stock-market-news/markets/market-today-closing-bell-update-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-30-09-2026/52308682"
    },
    {
      title: "Sensex Today | Stock Market LIVE Updates: GIFT Nifty hints at flat opening; Wall Street slips, Asian markets gain",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-30-09-2026-alpha-liveblog-14041471.html"
    },
    {
      title: "Live: Nifty starts Oct series on a positive note; hospital stocks drop | Closing Bell",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/videos/business/markets/live-nifty-starts-oct-series-on-a-positive-note-hospital-stocks-drop-closing-bell-14041914.html"
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
