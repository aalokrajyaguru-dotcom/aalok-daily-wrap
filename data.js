/* ============================================================
   THE DAILY WRAP — DATA FILE
   ------------------------------------------------------------
   This is the ONLY file that changes with every daily update.
   Ask your assistant to refresh it each day; it fills in the
   numbers, links and notes. Everything else is permanent.
   ============================================================ */

window.SITE_DATA = {

  site: {
    name: "The Daily Wrap",
    tagline: "Indian markets, explained in plain English",
  },

  updatedLabel: "Sunday, 20 September 2026",
  asOfLabel: "Week ended Friday, 18 September 2026",

  // ---------- INDEX DASHBOARD ----------
  // dayPct / weekPct are percentages. Positive = green, negative = red.
  // spark = the last 5 closes (Fri, Tue, Wed, Thu, Fri) — drawn as a mini chart.
  indices: [
    {
      name: "BSE Sensex",
      value: "74,294.96",
      dayPts: -19.63, dayPct: -0.03,
      weekPct: -0.65,
      spark: [74782.26, 74003.82, 74336.45, 74314.59, 74294.96],
      note: "Sixth straight weekly fall — longest streak since 2020"
    },
    {
      name: "Nifty 50",
      value: "23,346.40",
      dayPts: 75.80, dayPct: 0.33,
      weekPct: -0.22,
      spark: [23398.10, 23118.60, 23217.60, 23270.60, 23346.40],
      note: "Recovered after Tuesday's 5-month low, but week still down"
    },
    {
      name: "Nifty Midcap 100",
      value: "62,191.25",
      dayPts: 759.15, dayPct: 1.24,
      weekPct: -0.9,
      spark: [62700, 61500, 61800, 61432, 62191],
      note: "Third consecutive weekly decline, despite Friday bounce"
    },
    {
      name: "Nifty Smallcap 100",
      value: "19,875.70",
      dayPts: 340.00, dayPct: 1.74,
      weekPct: -0.6,
      spark: [19900, 19600, 19700, 19536, 19876],
      note: "Second straight weekly decline"
    },
    {
      name: "GIFT Nifty",
      value: "23,360",
      dayPts: 0, dayPct: 0.0,
      weekPct: 0,
      spark: [23360, 23360, 23360, 23360, 23360],
      note: "Flat — early signal for Monday's open"
    }
  ],

  // ---------- THE WEEK THAT WAS ----------
  weeklyWrap: [
    {
      headline: "Six down weeks in a row — longest losing streak since 2020",
      body: "The Sensex and Nifty fell for the sixth consecutive week, their longest weekly losing run since 2020. The Sensex lost 0.65% over the week to close at 74,294.96; the Nifty slipped 0.22% to 23,346.40. Monday was a holiday for Ganesh Chaturthi, so the week had just four trading sessions."
    },
    {
      headline: "The US Federal Reserve raised interest rates",
      body: "The Fed hiked its benchmark rate by 25 basis points to 3.75%–4% — its first increase since 2023 — and left the door open to one more this year. Higher US rates pull money away from emerging markets like India, and the US 10-year Treasury yield crossed 5%, its highest level since 2007."
    },
    {
      headline: "Crude oil above $108 kept the pressure on",
      body: "Brent crude climbed above $108 a barrel amid continuing Middle East tensions and supply concerns. India imports most of its crude, so expensive oil pressures the rupee, fuels inflation, and hurts sentiment. Friday's partial recovery came as crude eased a touch."
    },
    {
      headline: "Foreign money kept flowing out",
      body: "Foreign institutional investors (FIIs) continued to sell Indian equities through the week, adding to the pressure. Domestic mutual funds — powered by record SIP inflows — have been absorbing much of this selling, which is why the fall has been gradual rather than a crash."
    }
  ],

  // ---------- DAY BY DAY ----------
  dayByDay: [
    { day: "Mon, Sep 14", nifty: null, niftyMove: null, sensex: null, sensexMove: null, note: "Market holiday — Ganesh Chaturthi" },
    { day: "Tue, Sep 15", nifty: "23,118.60", niftyMove: "-1.19%", sensex: "74,003.82", sensexMove: "-1.04%", note: "Worst day — crude and US yields spiked; Nifty's lowest close in 5 months" },
    { day: "Wed, Sep 16", nifty: "23,217.60", niftyMove: "+0.43%", sensex: "74,336.45", sensexMove: "+0.45%", note: "Recovery as crude paused and bond yields eased" },
    { day: "Thu, Sep 17", nifty: "23,270.60", niftyMove: "+0.23%", sensex: "74,314.59", sensexMove: "-0.03%", note: "Mixed — investors digested the Fed's rate decision" },
    { day: "Fri, Sep 18", nifty: "23,346.40", niftyMove: "+0.33%", sensex: "74,294.96", sensexMove: "-0.03%", note: "Nifty's third straight gain; Tata and IT stocks dragged the Sensex" }
  ],

  // ---------- SECTOR SCOREBOARD ----------
  sectors: [
    { name: "FMCG", dir: "up",   note: "Top sector gainer — snapped a 5-week losing streak", leaders: "Patanjali, Colgate" },
    { name: "Pharma", dir: "up",  note: "Green for a second straight week", leaders: "Alkem, Abbott" },
    { name: "Oil & Gas", dir: "up", note: "Gained despite expensive crude", leaders: "Adani Total Gas, Aegis Logistics" },
    { name: "Banking", dir: "down", note: "Fourth consecutive weekly fall", leaders: "Federal Bank, ICICI among the laggards" },
    { name: "IT", dir: "down", note: "Third straight weekly decline", leaders: "TCS, Persistent" },
    { name: "Realty", dir: "down", note: "Fourth weekly fall in a row", leaders: "Prestige, Godrej Properties" },
    { name: "Defence", dir: "down", note: "Worst sector of the week", leaders: "Solar Industries, Apollo Microsystems" }
  ],

  // ---------- MOVERS ----------
  movers: {
    gainers: ["Adani Ports", "Adani Enterprises", "HDFC Bank", "AU Bank", "Poonawalla", "Welspun Corp"],
    losers: ["TCS", "Tata Motors PV", "Titan", "NetWeb Tech", "IFCI"],
    note: "Friday's biggest Nifty movers. Adani group stocks led the recovery; TCS and Tata Motors dragged the Sensex down."
  },

  // ---------- WHAT TO WATCH ----------
  watch: [
    "NSE's own IPO — subscription closes Monday, Sep 21; expected listing around Sep 24. The price band is set at Rs 1,700–1,785 per share.",
    "Whether the Nifty can hold above the 23,300 zone after Friday's recovery — below it, the next support sits near 23,100.",
    "Crude oil and US bond yields — Friday's bounce came as both eased. If they climb again, expect the pressure to return.",
    "Foreign investor (FII) flows — six weeks of selling has been the market's biggest drag."
  ],

  // ---------- READING LIST ----------
  reads: [
    { title: "Weekly Stock Market Report: Sensex & Nifty Extend Loss for Sixth Week", source: "Finance Outlook India", url: "https://www.financeoutlookindia.com/news/weekly-stock-market-report-sensex-nifty-extend-loss-for-sixth-week-nwid-8785.html" },
    { title: "Markets end on a mixed note; Nifty up 76 points, Sensex dips", source: "The Hindu", url: "https://www.thehindu.com/business/markets/markets-end-on-a-mixed-note-nifty-up-sensex-dips-on-september-18-2026/article71480440.ece" },
    { title: "Indices end lower as crude, global yields weigh on sentiment", source: "Capital Market", url: "https://www.capitalmarket.com/markets/news/live-news/indices-end-lower-as-crude-global-yields-weigh-on-sentiment/1733010" },
    { title: "Sensex, Nifty end flat as Tata stocks tumble, crude oil eases", source: "India Today", url: "https://www.indiatoday.in/business/market/story/sensex-today-flat-nifty-today-up-76-tata-stocks-tumble-crude-oil-eases-2997674-2026-09-18" },
    { title: "Stock Market Closing Today, Sep 18: top gainers and losers", source: "ET Now", url: "https://www.etnownews.com/markets/stock-market-closing-today-sep-18-sensex-ends-marginally-down-nifty-near-23350-check-top-gainers-and-losers-article-156181310" },
    { title: "Weekend Mega Linkfest — curated long-form reads", source: "Alpha Ideas", url: "https://alphaideas.in/" }
  ],

  // ---------- PLAIN-ENGLISH DECODER ----------
  glossary: [
    { term: "Index (Sensex / Nifty)", def: "A scorecard for the market. The Sensex tracks 30 big companies on the BSE; the Nifty 50 tracks 50 big companies on the NSE. When people say 'the market fell', they mean these scores fell." },
    { term: "Points vs percent", def: "The Nifty gaining 76 points sounds big, but 76 out of 23,346 is just 0.33%. Percent is what matters; points are the raw scoreboard ticks." },
    { term: "FII / DII", def: "Foreign Institutional Investors (big foreign funds) and Domestic Institutional Investors (Indian mutual funds, insurers). When FIIs sell and DIIs buy, the market stays balanced." },
    { term: "Basis point (bps)", def: "One hundredth of one percent. A '25 bps' rate hike = 0.25%. Small number, big consequences for where money flows." },
    { term: "Brent crude", def: "The world's benchmark oil price. India imports ~85% of its oil, so when Brent rises, the rupee, inflation and stock market all feel it." },
    { term: "IPO", def: "Initial Public Offering — when a company sells shares to the public for the first time and lists on an exchange. The NSE's own IPO is this month's biggest event." }
  ]
};
