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

  updatedLabel: "Monday, 21 September 2026",
  asOfLabel: "Market close, Monday 21 September 2026",

  // ---------- INDEX DASHBOARD ----------
  // dayPct / weekPct are percentages. Positive = green, negative = red.
  // spark = the last 5 closes — drawn as a mini chart.
  indices: [
    {
      name: "BSE Sensex",
      value: "74,858.99",
      dayPts: 564.03, dayPct: 0.76,
      weekPct: 0.76,
      spark: [74003.82, 74336.45, 74314.59, 74294.96, 74858.99],
      note: "Best day in weeks — heavyweight UltraTech led the charge"
    },
    {
      name: "Nifty 50",
      value: "23,414.30",
      dayPts: 67.90, dayPct: 0.29,
      weekPct: 0.29,
      spark: [23118.60, 23217.60, 23270.60, 23346.40, 23414.30],
      note: "Fourth straight session of gains — closed above 23,400"
    },
    {
      name: "BSE 150 MidCap",
      value: "16,855.8",
      dayPts: -3.4, dayPct: -0.02,
      weekPct: -0.02,
      spark: [16850, 16860, 16855, 16859, 16856],
      note: "Barely moved — the rally belonged to the big boys today"
    },
    {
      name: "BSE 250 SmallCap",
      value: "7,209.4",
      dayPts: 6.5, dayPct: 0.09,
      weekPct: 0.09,
      spark: [7190, 7200, 7205, 7203, 7209],
      note: "Small stocks stayed on the sidelines"
    },
    {
      name: "GIFT Nifty",
      value: "23,338",
      dayPts: 0, dayPct: 0.0,
      weekPct: 0,
      spark: [23338, 23338, 23338, 23338, 23338],
      note: "Monday morning reading — signal for Tuesday's open"
    }
  ],

  // ---------- TODAY'S STORIES ----------
  weeklyWrap: [
    {
      headline: "Markets bounce after six losing weeks",
      body: "The Sensex jumped 564.03 points (0.76%) to close at 74,858.99 — its best session in weeks — while the Nifty rose for a fourth straight day to end above 23,400 at 23,414.30. After six consecutive weekly declines, their longest losing streak since 2020, bargain-hunters finally stepped in. The new week begins on a green note."
    },
    {
      headline: "Crude oil cooled, and that changed everything",
      body: "Brent crude fell 2.36% to about $101.40 a barrel as investors saw signs of recovering Saudi shipments and hoped for diplomatic engagement in the Iran-US conflict. India imports most of its oil, so cheaper crude means less pressure on the rupee, inflation and imported costs — and oil-sensitive stocks rallied on the news."
    },
    {
      headline: "Foreign investors came back as buyers",
      body: "Foreign institutional investors (FIIs) bought Indian equities worth Rs 599.54 crore on Friday, per exchange data — their first meaningful buying after weeks of relentless selling that drove the six-week slump. Asian and European markets were also up today, giving the recovery global support."
    },
    {
      headline: "NSE IPO: the Rs 22,561-crore giant closed today",
      body: "The National Stock Exchange's own IPO — India's second-largest ever — closed its subscription today, booked about 3.8 times overall, with institutions bidding 7.8x their quota and retail investors 1.09x. Nearly 31 lakh applications came in. Allotment is expected September 22 and listing on September 24. The grey market hints at a modest 3-4% listing pop."
    }
  ],

  // ---------- LAST 5 SESSIONS ----------
  dayByDay: [
    { day: "Tue, Sep 15", nifty: "23,118.60", niftyMove: "-1.19%", sensex: "74,003.82", sensexMove: "-1.04%", note: "Crude and US yields spiked; Nifty's lowest close in 5 months" },
    { day: "Wed, Sep 16", nifty: "23,217.60", niftyMove: "+0.43%", sensex: "74,336.45", sensexMove: "+0.45%", note: "Recovery as crude paused and bond yields eased" },
    { day: "Thu, Sep 17", nifty: "23,270.60", niftyMove: "+0.23%", sensex: "74,314.59", sensexMove: "-0.03%", note: "Mixed — investors digested the Fed's rate decision" },
    { day: "Fri, Sep 18", nifty: "23,346.40", niftyMove: "+0.33%", sensex: "74,294.96", sensexMove: "-0.03%", note: "Nifty's third straight gain; Tata and IT stocks dragged the Sensex" },
    { day: "Mon, Sep 21", nifty: "23,414.30", niftyMove: "+0.29%", sensex: "74,858.99", sensexMove: "+0.76%", note: "Today — the bounce after six losing weeks; breadth roughly even (2,224 up vs 2,232 down)" }
  ],

  // ---------- SECTOR SCOREBOARD ----------
  sectors: [
    { name: "Pharma", dir: "up",   note: "Advanced again — extending its winning run", leaders: "One of the day's strongest sectors" },
    { name: "Realty", dir: "up",  note: "Rebounded after four weekly declines", leaders: "Recovery from oversold levels" },
    { name: "FMCG", dir: "up",     note: "Kept climbing — ITC among the Sensex winners", leaders: "ITC" },
    { name: "Metals", dir: "down", note: "Declined despite the broader rally", leaders: "Global demand worries" },
    { name: "IT", dir: "down",     note: "Sector slipped, though HCL Tech stood out with ~3% gains", leaders: "HCL Tech defied the slide" },
    { name: "PSU Banks", dir: "down", note: "State-run banks ended lower", leaders: "Waited out the rally" }
  ],

  // ---------- MOVERS ----------
  movers: {
    gainers: ["UltraTech Cement +4.1%", "HCL Tech +3%", "Eternal", "Titan", "ITC", "Tech Mahindra"],
    losers: ["Bharti Airtel", "Power Grid", "Infosys", "Adani Ports"],
    note: "Monday's Sensex standouts. UltraTech Cement surged 4.11% to top the 30-stock index, while Bharti Airtel, Power Grid and Infosys were the biggest drags."
  },

  // ---------- WHAT TO WATCH ----------
  watch: [
    "NSE IPO allotment tomorrow (Tuesday, Sep 22) — and its BSE listing on Thursday, Sep 24. The grey market is hinting at a modest 3-4% opening gain.",
    "Can the Nifty build on 23,400 and finally snap the six-week losing streak by Friday's close?",
    "Crude oil's direction — Brent around $101 after today's fall. If it cools further, the recovery has room to run.",
    "Whether foreign investors keep buying after Friday's return — one green day is a data point, two is a trend."
  ],

  // ---------- READING LIST ----------
  reads: [
    { title: "Sensex settles 564 pts higher; Nifty ends above 23,400 level", source: "Business Standard", url: "https://www.business-standard.com/markets/capital-market-news/sensex-settles-564-pts-higher-nifty-ends-above-23-400-level-126092100713_1.html" },
    { title: "Sensex, Nifty end higher; crude falls as markets recover from six-week slide", source: "India Today", url: "https://www.indiatoday.in/business/market/story/sensex-ends-564-points-higher-nifty-above-23400-hcltech-up-3-why-markets-rose-today-2999495-2026-09-21" },
    { title: "Sensex jumps 564 pts, Nifty rallies on easing oil, FII inflows (PTI)", source: "Rediff Money", url: "https://money.rediff.com/news/market/sensex-jumps-564-pts-nifty-rallies-on-easing-oil-fii-inflows/54718820260921" },
    { title: "NSE IPO subscribed 3.8x on Day 3 amid strong QIB demand", source: "Business Today", url: "https://www.businesstoday.in/markets/ipo-corner/story/nse-ipo-subscribed-3-8x-on-day-3-amid-strong-qib-demand-key-details-556800-2026-09-21" },
    { title: "NSE IPO closes today: 15 brokers say 'subscribe'", source: "Business Today", url: "https://www.businesstoday.in/markets/ipo-corner/story/nse-ipo-closes-today-top-15-brokers-say-subscribe-as-issue-attracts-20-4-lakh-applications-556741-2026-09-21" },
    { title: "Nifty ends above 23,400 level amid easing crude prices", source: "Capital Market", url: "https://www.capitalmarket.com/markets/news/live-news/sensex-settles-564-pts-higher;-nifty-ends-above-23-400-level/1733252" }
  ],

  // ---------- PLAIN-ENGLISH DECODER ----------
  glossary: [
    { term: "Index (Sensex / Nifty)", def: "A scorecard for the market. The Sensex tracks 30 big companies on the BSE; the Nifty 50 tracks 50 big companies on the NSE. When people say 'the market rose', they mean these scores rose." },
    { term: "Points vs percent", def: "The Sensex gaining 564 points sounds huge, but 564 out of 74,859 is 0.76%. Percent is what matters; points are the raw scoreboard ticks." },
    { term: "FII / DII", def: "Foreign Institutional Investors (big foreign funds) and Domestic Institutional Investors (Indian mutual funds, insurers). Today's story was FIIs turning buyers after weeks of selling." },
    { term: "Basis point (bps)", def: "One hundredth of one percent. A '25 bps' rate hike = 0.25%. Small number, big consequences for where money flows." },
    { term: "Brent crude", def: "The world's benchmark oil price. India imports ~85% of its oil, so when Brent rises, the rupee, inflation and stock market all feel it. Today it fell 2.36% to ~$101 — a big reason the market rallied." },
    { term: "IPO & GMP", def: "An IPO is when a company sells shares to the public for the first time. GMP (grey market premium) is the unofficial price traders bet the shares will list at — today, Rs 48 above NSE's Rs 1,785 cap, hinting at a ~3% listing gain. It's street sentiment, not a guarantee." }
  ]
};
