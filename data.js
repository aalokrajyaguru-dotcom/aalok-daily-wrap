// The Daily Wrap — Indian Markets
// Generated: Monday, 21 September 2026 (after market close)
// All closing levels are provisional exchange closing data; rupee close is provisional (PTI).
// Copy this file to your GitHub repo as data.js.

const dailyWrapData = {

  site: {
    name: "The Daily Wrap",
    edition: "Indian Markets",
    timezone: "Asia/Kolkata"
  },

  updatedLabel: "Updated Monday, 21 September 2026, after market close",

  asOfLabel: "Levels as of the closing session, Monday, 21 September 2026 (3:30 PM IST)",

  indices: [
    {
      name: "Nifty 50",
      exchange: "NSE",
      close: 23414.30,
      change: 67.90,
      changePct: 0.29,
      open: 23330.20,
      spark: [23118.60, 23217.60, 23270.60, 23346.40, 23414.30] // Sep 15, 16, 17, 18, 21
    },
    {
      name: "Sensex",
      exchange: "BSE",
      close: 74858.99,
      change: 564.03,
      changePct: 0.76,
      open: 74535.18,
      spark: [74003.82, 74336.45, 74314.59, 74294.96, 74858.99] // Sep 15, 16, 17, 18, 21
    },
    {
      name: "Bank Nifty",
      exchange: "NSE",
      close: 56470.65,
      change: 111.95,
      changePct: 0.20,
      spark: [55794.75, 56292.45, 56055.75, 56358.70, 56470.65] // Sep 15, 16, 17, 18, 21
    },
    {
      name: "Nifty Midcap 100",
      exchange: "NSE",
      close: null, // exact closing level not published in wires; % change verified
      change: null,
      changePct: -0.29,
      spark: []
    },
    {
      name: "Nifty Smallcap 100",
      exchange: "NSE",
      close: null, // exact closing level not published in wires; % change verified
      change: null,
      changePct: -0.07,
      spark: []
    },
    {
      name: "Nifty 500",
      exchange: "NSE",
      close: 22860.05,
      change: 19.50,
      changePct: 0.09,
      spark: []
    },
    {
      name: "India VIX",
      exchange: "NSE",
      close: 11.26,
      change: -0.12,
      changePct: -1.07,
      spark: []
    }
  ],

  weeklyWrap: {
    label: "Week so far (Monday, 21 September) and the week that was",
    headline: "Bargain hunting + falling crude: Nifty notches a fourth straight daily gain as markets look to end a six-week losing streak",
    summary: "Indian benchmarks closed higher on Monday after six consecutive weekly declines — the longest losing streak since 2020. The Sensex jumped 564.03 points (0.76%) to 74,858.99 and the Nifty 50 rose 67.90 points (0.29%) to 23,414.30, its fourth straight daily gain. Value buying in beaten-down large caps and a roughly 2% fall in Brent crude (to about $101 a barrel) on hopes of US–Iran diplomatic engagement at this week's UN meetings drove the recovery. The Nifty closed above 23,400 for the first time in a week, though gains were narrow — midcaps (-0.29%) and smallcaps (-0.07%) lagged, and decliners narrowly outnumbered gainers on the BSE. Last week (Sep 14–18, a truncated week with Monday off for Ganesh Chaturthi), the Sensex fell 0.65% and the Nifty 0.22% — a sixth straight weekly loss. FIIs sold a net Rs 7,620 crore last week (fifth straight week of selling), cushioned by DII buying of Rs 11,232 crore.",
    highlights: [
      "Crude cools, markets rally: Brent fell about 2% to ~$101 (after trading above $108 last week) as Saudi shipments showed partial recovery and investors bet on US–Iran diplomacy at the UN General Assembly. WTI slipped to ~$98. Lower crude eases India's inflation, import-bill and corporate-cost worries.",
      "Rupee strengthens: The rupee closed 15 paise higher at 95.81 (provisional) against the dollar — a third straight session of gains — helped by softer crude and softer US Treasury yields.",
      "India VIX cools: The fear gauge fell about 1% to 11.26; the 10-year G-sec yield eased to 7.065%.",
      "Six-week losing streak under pressure: Both benchmarks had fallen for six straight weeks — the longest such run since 2020 — before Monday's bounce; the Sensex still trades below its 50-DMA, which itself sits below the 200-DMA.",
      "Breadth stayed weak: On the BSE, 2,224 shares rose and 2,232 fell (250 unchanged) — a rally led by heavyweights, not the broader market."
    ]
  },

  dayByDay: [
    { day: "Mon, Sep 14", nifty: null, niftyPct: null, sensex: null, sensexPct: null, note: "Market holiday — Ganesh Chaturthi" },
    { day: "Tue, Sep 15", nifty: 23118.60, niftyPct: -1.19, sensex: 74003.82, sensexPct: -1.04, note: "Sharp selloff after the Fed's 25 bps hike; Nifty's lowest close in five months" },
    { day: "Wed, Sep 16", nifty: 23217.60, niftyPct: 0.43, sensex: 74336.45, sensexPct: 0.45, note: "Value buying returns; banks lead the rebound" },
    { day: "Thu, Sep 17", nifty: 23270.60, niftyPct: 0.23, sensex: 74314.59, sensexPct: -0.03, note: "Mixed close on BSE weekly derivatives expiry; NSE IPO opens" },
    { day: "Fri, Sep 18", nifty: 23346.40, niftyPct: 0.33, sensex: 74294.96, sensexPct: -0.03, note: "Sixth straight weekly loss despite third daily gain in a row" },
    { day: "Mon, Sep 21", nifty: 23414.30, niftyPct: 0.29, sensex: 74858.99, sensexPct: 0.76, note: "Bargain hunting + falling crude; Nifty back above 23,400" }
  ],

  sectors: [
    { name: "Nifty Pharma", changePct: 1.16 },
    { name: "Nifty Realty", changePct: 1.14 },
    { name: "Nifty Healthcare", changePct: 1.10 },
    { name: "Nifty FMCG", changePct: 0.95 },
    { name: "Nifty Consumer Durables", changePct: 0.95 },
    { name: "Nifty Oil & Gas", changePct: 0.53 },
    { name: "Nifty Private Bank", changePct: 0.29 },
    { name: "Nifty Financial Services 25/50", changePct: 0.20 },
    { name: "Nifty PSU Bank", changePct: -0.06 },
    { name: "Nifty IT", changePct: -0.08 },
    { name: "Nifty Metal", changePct: -0.61 }
  ],

  movers: {
    niftyGainers: [
      { name: "Eternal", close: 335.90, changePct: 2.8 },
      { name: "HCL Technologies", close: 1281.00, changePct: 2.5 },
      { name: "ITC", close: 267.00, changePct: 1.8 },
      { name: "Sun Pharmaceutical Industries", close: 1868.90, changePct: 1.7 },
      { name: "Reliance Industries", close: 1247.40, changePct: 1.7 },
      { name: "Titan Company", close: 4875.00, changePct: 1.6 },
      { name: "HDFC Life Insurance", close: 559.40, changePct: 1.5 }
    ],
    niftyLosers: [
      { name: "Bharti Airtel", close: 1830.20, changePct: -3.3 },
      { name: "Adani Ports & SEZ", close: 1787.10, changePct: -2.0 },
      { name: "Bajaj Finance", close: 1021.30, changePct: -1.8 },
      { name: "Power Grid Corporation", close: 266.10, changePct: -1.6 },
      { name: "Adani Enterprises", close: 2975.00, changePct: -1.5 },
      { name: "Wipro", close: 164.60, changePct: -1.4 },
      { name: "Infosys", close: 1038.50, changePct: -1.2 }
    ],
    sensex: {
      topGainer: { name: "UltraTech Cement", changePct: 4.11 },
      note: "HCLTech (+3.42%), Eternal (+2.59%), Titan (+2.49%) and ITC (+1.93%) were the other big Sensex movers on the upside."
    },
    broaderMarket: {
      gainers: [
        { name: "Jaiprakash Power Ventures", changePct: 12.5, note: "Best BSE 500 stock after NARCL settlement terms" },
        { name: "Patanjali Foods", changePct: 8.0 },
        { name: "Mankind Pharma", changePct: 6.0 },
        { name: "Solar Industries India", changePct: 3.8 }
      ],
      losers: [
        { name: "Oracle Financial Services", changePct: -8.3 },
        { name: "UNO Minda", changePct: -4.4 },
        { name: "APL Apollo Tubes", changePct: -3.9 }
      ]
    }
  },

  watch: [
    {
      title: "NSE IPO closes — listing on Sep 24",
      detail: "The Rs 22,562 crore National Stock Exchange IPO (entirely an offer for sale, price band Rs 1,700–1,785) closed today after drawing bids for about 49.4 crore shares against 8.86 crore on offer — roughly 5.6x subscribed by late trade, with QIBs the heaviest bidders. The grey market premium cooled from Rs 142 to about Rs 48 (~3% over the cap). Allotment is due Sep 22; listing on BSE on Sep 24 — watch for the liquidity and sentiment impact."
    },
    {
      title: "US–Iran diplomacy at the UN",
      detail: "Brent's retreat below ~$102 hinges on this week's UN General Assembly meetings, where US President Trump is expected to meet Iran's President. Trump warned Iran of economic collapse or leadership change unless a deal is reached; Iran's military has threatened a strong response to any fresh attack. Crude direction remains the single biggest driver for Indian equities."
    },
    {
      title: "Trump–Xi meeting in Washington",
      detail: "US President Trump meets Chinese President Xi Jinping in Washington later this week. Weekend preparatory talks between Treasury Secretary Scott Bessent and Vice Premier He Lifeng covered trade, tariffs, critical minerals and AI. Asian markets were already rallying on AI-infrastructure demand; Dow futures were up ~380 points on Monday."
    },
    {
      title: "Rates and yields",
      detail: "The US 10-year Treasury yield is holding above 5% after last week's 25 bps Fed hike to 3.75%–4.00% — the first since 2023 — with more tightening signalled. The Bank of Japan also raised rates to a 31-year high of 1.25%. Elevated US yields keep FII flows and the rupee sensitive; India's 10-year G-sec eased to 7.065%."
    },
    {
      title: "Nifty levels to track",
      detail: "Nifty closed back above 23,400 with immediate support at 23,300–23,238 and resistance at 23,443; 23,600 remains the key hurdle that would strengthen the recovery, while 23,000–23,100 is the crucial support zone. The Sensex is still below its 50-DMA, which is below the 200-DMA — a cautious medium-term technical picture."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty end higher as crude falls and markets recover from six-week slide",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/sensex-ends-564-points-higher-nifty-above-23400-hcltech-up-3-why-markets-rose-today-2999495-2026-09-21"
    },
    {
      title: "Sensex settles 564 pts higher; Nifty ends above 23,400 level",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/capital-market-news/sensex-settles-564-pts-higher-nifty-ends-above-23-400-level-126092100713_1.html"
    },
    {
      title: "Closing Bell: Nifty 50 ends higher for 4th day as crude oil prices ease",
      source: "Dalal Street Investment Journal",
      url: "https://insights.dsij.in/dsijarticledetail/closing-bell-nifty-50-ends-higher-for-4th-day-as-crude-oil-prices-ease-59636"
    },
    {
      title: "Market closes higher, led by gains in pharma and realty stocks",
      source: "Trendlyne",
      url: "https://trendlyne.com/posts/5853865/market-closes-higher-led-by-gains-in-pharma-and-realty-stocks"
    },
    {
      title: "NSE IPO Day 3: GMP falls to Rs 48; final day bidding begins",
      source: "CNBC TV18",
      url: "https://www.cnbctv18.com/market/nse-ipo-day-3-subscription-gmp-grey-market-premium-falls-final-day-bidding-allotment-listing-dates-19994558.htm"
    },
    {
      title: "Sensex, Nifty post sixth weekly loss; TCS, Titan among top laggards",
      source: "Business Today",
      url: "https://www.businesstoday.in/markets/stocks/story/sensex-nifty-post-sixth-weekly-loss-tcs-titan-among-top-laggards-slip-up-to-4-556484-2026-09-18"
    },
    {
      title: "Indian rupee eyes portfolio flows, oil prices; bonds face liquidity drain",
      source: "Reuters",
      url: "https://www.reuters.com/world/india/indian-rupee-eyes-portfolio-flows-oil-prices-bonds-face-liquidity-drain-2026-09-21/"
    }
  ],

  glossary: [
    { term: "Nifty 50", definition: "The National Stock Exchange's benchmark index of 50 large, liquid stocks representing about two-thirds of free-float market cap." },
    { term: "Sensex", definition: "The BSE's benchmark index of 30 established companies, India's oldest and most widely tracked equity index." },
    { term: "Bank Nifty", definition: "An NSE index of the 12 largest and most liquid banking stocks; a proxy for banking-sector health." },
    { term: "Midcap / Smallcap", definition: "Indices tracking companies ranked below the large caps by market capitalisation — the Nifty Midcap 100 and Nifty Smallcap 100 capture the broader market beyond the blue chips." },
    { term: "India VIX", definition: "The NSE's volatility index, derived from Nifty option prices. It measures the market's expectation of near-term volatility; lower means calmer." },
    { term: "FII / DII", definition: "Foreign and domestic institutional investors. Their daily net buying and selling often sets the market's direction." },
    { term: "OFS (Offer for Sale)", definition: "An IPO route where existing shareholders sell their shares; the company itself receives no proceeds — as with the NSE IPO." },
    { term: "GMP (Grey Market Premium)", definition: "The unofficial premium a share commands in the grey market before listing — an indicative, not guaranteed, signal of listing-day gains." },
    { term: "Market breadth", definition: "The ratio of advancing to declining shares. Monday's rally had weak breadth — gains were concentrated in heavyweights." },
    { term: "Brent crude", definition: "The global oil benchmark. India imports most of its crude, so Brent above $100 is a direct hit to inflation, the current account and the rupee." }
  ]
};

// Allow use in Node (build scripts) as well as the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = dailyWrapData;
}
