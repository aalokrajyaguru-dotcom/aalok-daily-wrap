const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 6 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Tuesday, 6 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22776.10,
      dayChange: 220.35,
      dayChangePct: 0.98,
      weekChangePct: 1.58, // week-to-date vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22716.20, 22620.45, 22421.95, 22555.75, 22776.10], // last 5 closes: 29, 30 Sep, 1 Oct, 5 Oct, 6 Oct
      note: "The benchmark closed at its intraday high, up 0.98% to 22,776.10 — a second straight session of gains — as Brent slipped back below $100 a barrel and Trent, Kotak Mahindra Bank, HUL and Reliance led; IT was the main drag."
    },
    {
      name: "Nifty Next 50",
      close: 69973.70,
      dayChange: 759.95,
      dayChangePct: 1.10,
      weekChangePct: 1.44, // week-to-date vs Thu, 1 Oct close of 68,981.35
      spark: [69460.20, 69746.95, 68981.35, 69213.75, 69973.70], // last 5 closes: 29, 30 Sep, 1 Oct, 5 Oct, 6 Oct
      note: "The 'next rung' of large caps outpaced the Nifty, up 1.10% to 69,973.70, helped by high-beta names such as Vedanta, CG Power and Adani Power as the rebound broadened."
    },
    {
      name: "Nifty Midcap 150",
      close: 21960.19,
      dayChange: 234.64,
      dayChangePct: 1.08,
      weekChangePct: 1.46, // week-to-date vs Thu, 1 Oct close of 21,643.85
      spark: [21853.30, 21867.50, 21643.85, 21725.55, 21960.19], // last 5 closes: 29, 30 Sep, 1 Oct, 5 Oct, 6 Oct
      note: "Midcaps kept pace with the rally, up about 1.1% — the Nifty Midcap 100 closed 1.08% higher at 59,761.20, led by Motilal Oswal, Tube Investments, PB Fintech and BHEL. The Nifty Midcap 150 level is derived from the segment's reported close move applied to the verified 5 Oct close of 21,725.55."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17930.77,
      dayChange: 275.42,
      dayChangePct: 1.56,
      weekChangePct: 1.94, // week-to-date vs Thu, 1 Oct close of 17,589.05
      spark: [17747.25, 17798.80, 17589.05, 17655.35, 17930.77], // last 5 closes: 29, 30 Sep, 1 Oct, 5 Oct, 6 Oct
      note: "Small caps outperformed, up about 1.6% — the Nifty Smallcap 100 closed 1.56% higher at 19,448.70, with Urban Company, PG Electroplast and Welspun Corp leading. The Nifty Smallcap 250 level is derived from the segment's reported close move applied to the verified 5 Oct close of 17,655.35."
    },
    {
      name: "BSE SME Index",
      close: 120743.64,
      dayChange: 387.02,
      dayChangePct: 0.32,
      weekChangePct: 0.32, // week-to-date vs Thu, 1 Oct close of 1,20,363.48
      spark: [121271.07, 121985.29, 120363.48, 120356.62, 120743.64], // last 5 closes: 29, 30 Sep, 1 Oct, 5 Oct, 6 Oct
      note: "The S&P BSE SME IPO index edged up about 0.3% to 1,20,743.64 as three new SME listings began trading — Acme Universal Safezone 9 (+42% on debut), Shivchem Agro (flat) and Pind Hospitality (-20%)."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Back-to-back: Sensex jumps 685 points and Nifty reclaims 22,750 as Brent slips below $100 and Trent, Kotak Bank and Reliance lead a broad-based second day of gains",
    summary: "Dalal Street climbed for a second straight session on Tuesday, with the Nifty 50 up 220.35 points (+0.98%) to 22,776.10 and the Sensex up 685.34 points (+0.95%) to 73,067.81 — both indices closing at their intraday highs. The trigger was a double dose of relief: Brent crude slipped back below $100 a barrel, easing the import-bill and inflation scare, and a run of better-than-expected September-quarter business updates from banks and retailers steadied sentiment ahead of the RBI's policy decision on Wednesday. Trent was the star, surging about 12.6% after the Tata Group retailer's Q2 standalone revenue rose 23% year-on-year to ₹5,788 crore; Kotak Mahindra Bank rose 3.8% on 24.7% net-advance growth, Axis Bank gained 2.1% and IndusInd Bank nearly 3% on their own updates, while Reliance Industries added 2.5% on optimism over a potential Jio Platforms listing. FMCG led the defensive pack (HUL +2.8%, Nestle India +2.9%), with pharma, telecom and consumer durables all higher. The broader market outperformed: the Nifty Midcap 100 rose 1.08% and the Nifty Smallcap 100 1.56%, and BSE-listed market capitalisation added nearly ₹6 lakh crore over the two sessions. Breadth was firmly positive, with 1,809 NSE stocks advancing against 809 declines (a 2:1 ratio). The two soft spots were IT, down about 0.6% as Infosys (-1.1%), TCS (-0.9%) and Tech Mahindra (-2.3%) dragged, and realty. India VIX cooled about 8% to 13.6. All eyes now turn to the RBI's rate decision on Wednesday.",
    stats: ["Nifty +0.98%", "Sensex +0.95%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Tuesday edition — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 — touching its 200-week moving average for the first time since the Covid crash — before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." },
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Worst week in 25 years and an eighth straight weekly fall: the Nifty briefly breached 22,300 (intraday low 22,217) and the Sensex touched 71,292 before both clawed back, still leaving the Nifty just 1.07% above its 52-week low. Autos led the carnage — Bajaj Auto -7.6% on weak September sales, Maruti -4.9%, M&M, Eicher and Shriram Finance — as FIIs sold another Rs 20,128 crore over two sessions and the 10-year US yield hit 5.31%. IT was the only green sector (Nifty IT +2.17%) with Infosys (+4.1%) the top gainer; India VIX jumped 7% to 14.44 and the rupee slid 0.5% to a two-month low of 96.3150." },
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." },
    { date: "2026-10-06", label: "Tue 6 Oct", niftyClose: 22776.10, niftyChangePct: 0.98, sensexChangePct: 0.95, note: "A second straight gain, and a broad one: the Nifty closed at its intraday high, up 220 points to 22,776, and the Sensex added 685 points to 73,068 as Brent fell back below $100. Trent surged ~12.6% on a strong Q2 update, Kotak Mahindra Bank rose 3.8% on 24.7% advance growth, and Reliance gained 2.5%; FMCG, pharma, telecom and consumer durables led. Mid and small caps outperformed (Midcap 100 +1.08%, Smallcap 100 +1.56%). IT was the main drag — Infosys -1.1%, Tech Mahindra -2.3%. Breadth was a firm 1,809 advances vs 809 declines and India VIX cooled ~8% to 13.6 ahead of the RBI decision." }
  ],

  sectors: [
    { name: "Nifty Consumer Durables", changePct: 1.53, note: "The day's best Nifty sector: the durables pack led a broad risk-on move, helped by expectations of a strong festive quarter" },
    { name: "Nifty Private Bank", changePct: 1.50, note: "Private banks were among the biggest contributors after Kotak Mahindra Bank (+3.8%) and Axis Bank (+2.1%) reported healthy Q2 advance and deposit growth" },
    { name: "Nifty Infrastructure", changePct: 1.02, note: "Capex and infra names firmed as crude cooled and global risk appetite improved; L&T and Adani-linked counters held gains" },
    { name: "Nifty Financial Services", changePct: 0.95, note: "Financials followed banks higher; Reliance's Jio-listing optimism and broker upgrades lifted the broader financial basket" },
    { name: "Nifty FMCG", changePct: 0.83, note: "The defensive pack rallied as Godrej Consumer (+4.2%) guided for high-teens Q2 revenue growth and Dabur (+2.7%) flagged double-digit growth" },
    { name: "Nifty Metal", changePct: 0.83, note: "Metals recovered on softer crude and firm global cues; select steel and non-ferrous counters led" },
    { name: "Nifty Bank", changePct: 0.76, note: "Bank Nifty closed at 55,128.40 (+414 points) as lenders rose on a run of strong September-quarter business updates" },
    { name: "Nifty Pharma", changePct: 0.55, note: "Pharma turned higher after the previous session's losses, with select large-caps recovering" },
    { name: "Nifty Energy", changePct: 0.42, note: "Energy rose as Reliance Industries (+2.5%) firmed on reports of a possible Jio Platforms listing" },
    { name: "Nifty Media", changePct: 0.27, note: "Media edged up on ad-spend optimism but lagged the leaders" },
    { name: "Nifty Realty", changePct: 0.11, note: "Rate-sensitive realty finished nearly flat as the market waited for the RBI's 7 October decision" },
    { name: "Nifty Auto", changePct: 0.05, note: "Autos were the softest of the cyclicals, with Bajaj Auto and M&M muted after weak September sales" },
    { name: "Nifty PSU Bank", changePct: -0.49, note: "PSU banks were among the few laggards, giving back part of Monday's sharp rebound" },
    { name: "Nifty IT", changePct: -0.63, note: "The day's weakest sector: Tech Mahindra (-2.3%), Infosys (-1.1%), TCS (-0.9%) and HCL Tech fell as investors stayed cautious on the export-facing pack" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily movers for 6 Oct 2026 (cross-checked with marketsmojo's BSE 500 close list, Upstox close lists for Nifty 50 / Nifty Midcap 100 / Nifty Smallcap 100, and HDFC Sky top movers)",
    gainers: [
      { name: "Trent", changePct: 12.64, cap: "Largecap", note: "Top Nifty 500 gainer of the day, up 12.64% after the Tata Group retailer's Q2 standalone revenue rose 23% year-on-year to Rs 5,788 crore" },
      { name: "Alok Industries", changePct: 9.97, cap: "Smallcap", note: "Up 9.97% for the day, among the strongest small-cap moves on the BSE 500" },
      { name: "Cello World", changePct: 8.95, cap: "Smallcap", note: "Up 8.95% on elevated volumes — about 55x its one-week average" },
      { name: "Urban Company", changePct: 8.47, cap: "Smallcap", note: "Up 8.47%, the top Nifty Smallcap 100 gainer on the day" },
      { name: "PG Electroplast", changePct: 8.19, cap: "Smallcap", note: "Up 8.19% as air-conditioner and durables names rallied on expectations of strong festive demand" }
    ],
    losers: [
      { name: "DCM Shriram", changePct: -6.05, cap: "Smallcap", note: "Worst Nifty 500 loser of the day, down 6.05%, as the sugar/chloro-vinyl counter gave back recent gains" },
      { name: "GSPL Transmission", changePct: -4.99, cap: "Smallcap", note: "Down 4.99% for the day" },
      { name: "Bandhan Bank", changePct: -3.11, cap: "Smallcap", note: "Down 3.11% after a Q2 business update showed loan growth staying modest" },
      { name: "Coal India", changePct: -3.09, cap: "Largecap", note: "Down 3.09%, the biggest Nifty 50 loser, after the Power Ministry said thermal generators need not blend imported coal" },
      { name: "Phoenix Mills", changePct: -2.66, cap: "Midcap", note: "Down 2.66%, the biggest Nifty Midcap 100 loser" }
    ],
    sensexWinners: ["Kotak Mahindra Bank", "Nestle India", "Hindustan Unilever", "HDFC Life", "Reliance Industries"],
    sensexLaggards: ["Tech Mahindra", "Titan Company", "Bajaj Finance", "ITC", "UltraTech Cement"]
  },

  watch: [
    {
      title: "RBI policy on 7 October",
      detail: "The Monetary Policy Committee meets from 5 to 7 October, with the decision due Wednesday. The repo rate stands at 5.25%, and the market is watching for the stance and the commentary on inflation and growth amid elevated crude prices and a weak rupee. Rate-sensitive banks, NBFCs, autos and real estate could stay volatile around the announcement."
    },
    {
      title: "Q2 FY27 earnings season kicks off",
      detail: "TCS reports on 8 October, opening the IT earnings run, with Poonawalla Finance on 9 October and Avenue Supermarts on 10 October. September-quarter business updates from banks and retailers have been mostly strong; the actual prints will test whether the two-day rebound has legs."
    },
    {
      title: "Crude and the rupee stay the swing factors",
      detail: "Brent fell back below $100 a barrel and WTI to about $87.70, giving India — a major oil importer — some relief on the import bill and inflation. But crude is still well above where it started the year and the rupee remains near a two-month low (about 96.57 to the dollar), keeping FII flows and input costs in focus."
    },
    {
      title: "Can the rebound hold after eight down weeks?",
      detail: "Tuesday's gain was a second straight positive session, but the Nifty is still below both its 50-day and 200-day moving averages — a bearish medium-term setup. Technically, 22,800-22,850 is the first resistance zone, with 22,500-22,400 the immediate support. Breadth has improved sharply (1,809 advances vs 809 declines), so follow-through now matters."
    },
    {
      title: "Foreign flows and the October series",
      detail: "FIIs have sold heavily through the recent slump, taking 2026 outflows to a record, while DIIs have been net buyers. A sustained rebound would need oil to keep easing and foreign selling to slow; the RBI decision, the start of Q2 results and the October F&O series are the near-term triggers to watch."
    }
  ],

  reads: [
    {
      title: "Stock markets surge for second day as oil drops below $100 per barrel",
      source: "The Hindu",
      url: "https://www.thehindu.com/business/markets/stock-markets-surge-for-second-day-as-oil-drops-below-100-per-barrel/article71551193.ece"
    },
    {
      title: "Stock Market Closing Today, October 6: Sensex rallies 685 pts, Nifty closes at 22,776; check top gainers and losers",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-october-6-sensex-rallies-685-pts-nifty-closes-at-22776-check-top-gainers-and-losers-article-156284401"
    },
    {
      title: "Sensex Today | Stock Market Highlights: Market ends higher for 2nd straight day; Nifty reclaims 22,700",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stock-market-live-updates-sensex-nifty-50-today-banks-oil-yields-kotak-axis-indusind-trent-vedanta-gcpl-share-price-liveblog-20005205.htm"
    },
    {
      title: "Top gainers and losers, Oct 6: Trent rallies 13%, BSE, Kotak Bank shares jump 4%, Coal India falls 3%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-6-trent-rallies-13-bse-kotak-bank-shares-jump-4-coal-india-falls-3-check-list/article-201378/"
    },
    {
      title: "Sensex Gains 685 Pts, Nifty Reclaims 22,700 As Markets Extend Recovery",
      source: "BW Businessworld",
      url: "https://www.businessworld.in/article/sensex-gains-685-pts-nifty-reclaims-22-700-as-markets-extend-recovery-627125"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Working Capital",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements. The report's printed page numbers run 30 ahead of the PDF page (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Working Capital = Total current assets − Total current liabilities",
    formulaNote: "Working capital is the rupee cushion a company keeps to run its day-to-day operations. Current assets are everything it expects to convert into cash within a year — cash and equivalents, short-term investments, trade receivables, unbilled revenue, tax assets and other current assets. Current liabilities are everything it must settle within a year — trade payables, unearned revenue, employee-benefit obligations and other current liabilities and provisions. The difference is the money left over to fund the business after the near-term bills are paid; a negative working capital (common in asset-light retailers and subscription businesses) is not automatically a problem, but for a services firm a large positive figure signals real financial room.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 — total current assets = Rs 1,03,489 crore (p. 317; cash and cash equivalents 22,201 + current investments 12,950 + trade receivables 35,234 + unbilled revenue 15,483 + prepayments and other current assets 15,703 + income tax assets 1,835 + derivative financial instruments 83). Step 2 — total current liabilities = Rs 52,322 crore (p. 317; trade payables 4,744 + unearned revenue 11,838 + employee benefit obligations 3,524 + other current liabilities and provisions 32,216). Step 3 — Working Capital = 1,03,489 − 52,322 = Rs 51,167 crore.",
    result: "≈ Rs 51,167 crore",
    meaning: "Infosys carries about Rs 51,167 crore of net working capital — the surplus of assets it will turn into cash within a year over the bills it must pay within a year. For an asset-light, cash-rich IT services firm, that is a large and comfortable cushion: it is the money that funds the quarterly dividend, the buyback and the occasional acquisition without needing to borrow. Note that working capital is an absolute number, not a multiple, so it scales with the size of the company — compare it to revenue, to total assets or across time, not directly between a large-cap and a small-cap. Watch the trend too: a falling working-capital figure alongside rising receivables (here trade receivables rose to Rs 35,234 crore from Rs 31,158 crore a year earlier) can flag slower collections even while profits look healthy.",
    crossCheck: "Screener.in and Trendlyne don't headline a 'working capital' figure, but their FY26 balance-sheet extracts carry the same line items — total current assets of about Rs 1,03,489 crore and total current liabilities of about Rs 52,322 crore — which imply net working capital in the same Rs 51,000 crore region; the current ratio they show of roughly 2x (1.98x) is simply this same pair of numbers expressed as a multiple. Small gaps are pure convention: some providers net off short-term borrowings or treat income-tax and derivative assets differently. Every measure points to a very strong liquidity position.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
