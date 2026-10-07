const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 7 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 7 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22603.05,
      dayChange: -173.05,
      dayChangePct: -0.76,
      weekChangePct: 0.81, // week-to-date vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22620.45, 22421.95, 22555.75, 22776.10, 22603.05], // last 5 closes: 30 Sep, 1 Oct, 5 Oct, 6 Oct, 7 Oct
      note: "The benchmark snapped a two-day winning streak and closed near its intraday low, down 0.76% to 22,603.05, after the RBI raised the repo rate 25 bps to 5.50% and shifted its stance to 'calibrated tightening'; only 9 of the 50 Nifty stocks closed higher."
    },
    {
      name: "Nifty Next 50",
      close: 69385.93,
      dayChange: -587.77,
      dayChangePct: -0.84,
      weekChangePct: 0.59, // week-to-date vs Thu, 1 Oct close of 68,981.35
      spark: [69746.95, 68981.35, 69213.75, 69973.70, 69385.93], // last 5 closes: 30 Sep, 1 Oct, 5 Oct, 6 Oct, 7 Oct
      note: "The 'next rung' of large caps fell 0.84% to about 69,386 as high-beta names such as Adani Power, Vedanta and Jindal Steel were among the drags, even as PSU banks and Adani Green held up."
    },
    {
      name: "Nifty Midcap 150",
      close: 21821.84,
      dayChange: -138.35,
      dayChangePct: -0.63,
      weekChangePct: 0.82, // week-to-date vs Thu, 1 Oct close of 21,643.85
      spark: [21867.50, 21643.85, 21725.55, 21960.19, 21821.84], // last 5 closes: 30 Sep, 1 Oct, 5 Oct, 6 Oct, 7 Oct
      note: "Midcaps gave back part of the previous day's gains — the Nifty Midcap 100 closed 0.63% lower at 59,382.60, with National Aluminium, IndusInd Bank and Tube Investments leading the fall. The Nifty Midcap 150 level is derived from the segment's reported close move applied to the prior close carried in the series."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17984.56,
      dayChange: 53.79,
      dayChangePct: 0.30,
      weekChangePct: 2.25, // week-to-date vs Thu, 1 Oct close of 17,589.05
      spark: [17798.80, 17589.05, 17655.35, 17930.77, 17984.56], // last 5 closes: 30 Sep, 1 Oct, 5 Oct, 6 Oct, 7 Oct
      note: "Small caps bucked the trend — the Nifty Smallcap 100 rose about 0.3% and the Nifty Smallcap 50 0.25%, with Bank of Maharashtra, Kalyan Jewellers and Chennai Petroleum among the gainers. The Nifty Smallcap 250 level is derived from the segment's reported close move applied to the prior close carried in the series."
    },
    {
      name: "BSE SME Index",
      close: 122115.36,
      dayChange: 837.60,
      dayChangePct: 0.69,
      weekChangePct: 1.46, // week-to-date vs Thu, 1 Oct close of 1,20,363.48
      spark: [121985.29, 120363.48, 120356.62, 121277.76, 122115.36], // last 5 closes: 30 Sep, 1 Oct, 5 Oct, 6 Oct, 7 Oct
      note: "The S&P BSE SME IPO index held up, up about 0.7% to 1,22,115, as newly listed SMEs stayed firm against the broader weakness. This is the last available reading (10:39 IST); a confirmed 7 October close was not published by the sources checked."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "RBI's first rate hike in nearly four years snaps a two-day rally: Sensex slumps 429 points and Nifty slips below 22,650 as metal, realty and auto tumble",
    summary: "Dalal Street's two-day rebound ended on Wednesday after the Reserve Bank of India's Monetary Policy Committee unanimously raised the repo rate by 25 basis points to 5.50% — its first hike since February 2023 — and changed its stance from 'neutral' to 'calibrated tightening'. The Nifty 50 fell 173.05 points (-0.76%) to 22,603.05 and the Sensex lost 429.11 points (-0.59%) to 72,638.70, both closing close to their intraday lows after a late-session slide. Rate-sensitive sectors bore the brunt: Nifty Metal (-2.33%), Nifty Realty (-1.77%), Nifty Auto (-1.58%), Nifty IT (-1.34%) and Nifty Consumer Durables (-1.14%) led the decline, while banks proved resilient — Nifty PSU Bank (+1.00%) was the day's best sector and Nifty Media (+0.69%) the only other notable gainer. In the Nifty 50, only 9 of 50 stocks closed higher: Kotak Mahindra Bank (+1.88%), BSE (+1.54%), Bharti Airtel (+1.29%), ICICI Bank (+1.09%) and Coal India (+0.69%) led the gainers, while Titan (-3.80%, on softer-than-expected Q2 jewellery growth), Adani Enterprises (-3.75%), Hindalco (-3.15%), Bharat Electronics (-2.35%) and JSW Steel (-2.35%) fell the most. The broader market was mixed: the Nifty Midcap 100 shed 0.63% to 59,382.60 and the Nifty Next 50 fell 0.84%, but small caps held up (Nifty Smallcap 50 +0.25%). Breadth was negative — 2,018 BSE advances against 2,353 declines — and the market capitalisation of BSE-listed firms fell about Rs 2.6 lakh crore. The rupee weakened around 45 paise to 96.77 and India VIX rose 2.25% to 13.92. Governor Sanjay Malhotra said the economy remains strong and revised the FY27 real GDP forecast up to 7.1%, but flagged that inflation has run above the 4% tolerance band since June and that a rate cut is unlikely in the near term. Attention now turns to the Q2 FY27 earnings season — TCS reports on 8 October — and the release of the US Federal Reserve's meeting minutes.",
    stats: ["Nifty -0.76%", "Sensex -0.59%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Wednesday edition — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." },
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Worst week in 25 years and an eighth straight weekly fall: the Nifty briefly breached 22,300 (intraday low 22,217) and the Sensex touched 71,292 before both clawed back, still leaving the Nifty just 1.07% above its 52-week low. Autos led the carnage — Bajaj Auto -7.6% on weak September sales, Maruti -4.9%, M&M, Eicher and Shriram Finance — as FIIs sold another Rs 20,128 crore over two sessions and the 10-year US yield hit 5.31%. IT was the only green sector (Nifty IT +2.17%) with Infosys (+4.1%) the top gainer; India VIX jumped 7% to 14.44 and the rupee slid 0.5% to a two-month low of 96.3150." },
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." },
    { date: "2026-10-06", label: "Tue 6 Oct", niftyClose: 22776.10, niftyChangePct: 0.98, sensexChangePct: 0.95, note: "A second straight gain, and a broad one: the Nifty closed at its intraday high, up 220 points to 22,776, and the Sensex added 685 points to 73,068 as Brent fell back below $100. Trent surged ~12.6% on a strong Q2 update, Kotak Mahindra Bank rose 3.8% on 24.7% advance growth, and Reliance gained 2.5%; FMCG, pharma, telecom and consumer durables led. Mid and small caps outperformed (Midcap 100 +1.08%, Smallcap 100 +1.56%). IT was the main drag — Infosys -1.1%, Tech Mahindra -2.3%. Breadth was a firm 1,809 advances vs 809 declines and India VIX cooled ~8% to 13.6 ahead of the RBI decision." },
    { date: "2026-10-07", label: "Wed 7 Oct", niftyClose: 22603.05, niftyChangePct: -0.76, sensexChangePct: -0.59, note: "RBI shock: the MPC's unanimous 25-bps repo-rate hike to 5.50% — the first since February 2023 — and its shift to 'calibrated tightening' ended a two-day rebound. The Nifty fell 173 points to 22,603 and the Sensex 429 points to 72,639, both closing near the day's low; metal (-2.33%), realty (-1.77%), auto (-1.58%) and IT (-1.34%) led the slide, while PSU banks (+1.00%) and media (+0.69%) rose. Titan (-3.80%) and Adani Enterprises (-3.75%) were the top Nifty losers and Kotak Mahindra Bank (+1.88%) the top gainer. Breadth was negative (2,018 advances vs 2,353 declines), BSE market cap fell about Rs 2.6 lakh crore, the rupee slipped to 96.77 and India VIX rose 2.25% to 13.92." }
  ],

  sectors: [
    { name: "Nifty PSU Bank", changePct: 1.00, note: "The day's best sector: state-run lenders gained as higher policy rates can widen net interest margins, with Union Bank, Canara Bank and PNB among the leaders" },
    { name: "Nifty Media", changePct: 0.69, note: "The only other notable gainer, helped by ad-spend optimism; Media Entertainment & Publication was the top BSE sector" },
    { name: "Nifty Private Bank", changePct: 0.08, note: "Private banks flatlined but held up — Kotak Mahindra Bank (+1.88%) and ICICI Bank (+1.09%) rose even as most of the market fell" },
    { name: "Nifty Bank", changePct: -0.11, note: "Bank Nifty ended roughly flat as the RBI's hike was seen as net-positive for lenders' margins; the RBI announced no extra liquidity tightening" },
    { name: "Nifty Financial Services", changePct: -0.12, note: "Financials were steady; the wider basket dipped slightly as NBFCs and insurers such as Shriram Finance and SBI Life softened" },
    { name: "Nifty Healthcare", changePct: -0.26, note: "Healthcare slipped mildly, outperforming the broader market" },
    { name: "Nifty Pharma", changePct: -0.43, note: "Pharma was soft but defensive, holding up better than the cyclicals" },
    { name: "Nifty FMCG", changePct: -0.89, note: "FMCG fell as HUL, ITC, Nestle India and Britannia came under pressure on consumer-spending worries in a tighter-rate environment" },
    { name: "Nifty Consumer Durables", changePct: -1.14, note: "Durables fell with the rate-sensitives as financing costs for big-ticket purchases were seen rising" },
    { name: "Nifty IT", changePct: -1.34, note: "IT was among the big losers as Infosys (-2.07%) and the export-facing pack fell ahead of the Q2 earnings season" },
    { name: "Nifty Auto", changePct: -1.58, note: "Autos slid as higher borrowing costs clouded vehicle-financing demand; Ashok Leyland, Bajaj Auto and Maruti led the fall" },
    { name: "Nifty Realty", changePct: -1.77, note: "Real estate fell sharply as higher home-loan rates threatened housing demand; DLF, Godrej Properties and Prestige Estates declined" },
    { name: "Nifty Metal", changePct: -2.33, note: "The day's worst sector: metal stocks were hammered as global commodity prices stayed under pressure, with National Aluminium (-4.7%), Adani Enterprises (-3.89%) and Hindalco (-2.76%) leading the slide" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily movers for 7 Oct 2026 (cross-checked with Upstox and HDFC Sky closing top gainers/losers, Capital Market's closing report, Dhan's Nifty 500 gainers list and CNBC-TV18's Nifty 500 stock reactions)",
    gainers: [
      { name: "PTC Industries", changePct: 6.82, cap: "Smallcap", note: "Top Nifty 500 gainer, up 6.82%, after the aerospace-and-defence alloy maker launched a Rs 1,800 crore qualified institutional placement and hit a 52-week high" },
      { name: "Mangalore Refinery & Petrochemicals", changePct: 4.66, cap: "Midcap", note: "Up 4.66% on the day as refining margins stayed firm despite crude holding above $101 a barrel" },
      { name: "KFin Technologies", changePct: 4.27, cap: "Smallcap", note: "Up 4.27%, among the strongest small-cap moves on the Nifty 500" },
      { name: "Bank of Maharashtra", changePct: 4.15, cap: "Midcap", note: "Up 4.15%, the top Nifty Midcap 100 gainer, as PSU banks rallied on the RBI's rate hike" },
      { name: "Chennai Petroleum", changePct: 4.06, cap: "Smallcap", note: "Up about 4.1%, extending a strong 2026 run on improved refining performance and profitability" }
    ],
    losers: [
      { name: "National Aluminium", changePct: -4.73, cap: "Midcap", note: "Worst Nifty 500 loser, down 4.73% and the top Nifty Midcap 100 faller, as the metal pack sold off" },
      { name: "Titan Company", changePct: -3.80, cap: "Largecap", note: "Down 3.80%, the biggest Nifty 50 loser, after Q2 FY27 jewellery growth of about 21% year-on-year missed several analysts' estimates" },
      { name: "Adani Enterprises", changePct: -3.75, cap: "Largecap", note: "Down 3.75% as high-beta Adani counters fell with the metals, energy and infrastructure complex" },
      { name: "Tube Investments of India", changePct: -3.43, cap: "Midcap", note: "Down 3.43% with the auto-ancillary pack as the Nifty Auto index fell 1.58%" },
      { name: "Hindalco Industries", changePct: -3.15, cap: "Largecap", note: "Down 3.15% as metal stocks led the day's decline on weak global commodity prices" }
    ],
    sensexWinners: ["Kotak Mahindra Bank", "Bharti Airtel", "ICICI Bank", "Bajaj Finance"],
    sensexLaggards: ["Titan Company", "Asian Paints", "Infosys", "Larsen & Toubro", "Hindalco Industries"]
  },

  watch: [
    {
      title: "RBI's 'calibrated tightening' and what comes next",
      detail: "The MPC's unanimous 25-bps hike to 5.50% and the shift in stance from neutral to calibrated tightening signal that the easing cycle is over — Governor Malhotra said a rate cut is unlikely in the near term with inflation above the 4% tolerance band since June. The next MPC is due in December; until then every inflation and liquidity print matters for rate-sensitive banks, NBFCs, autos and real estate."
    },
    {
      title: "Q2 FY27 earnings season kicks off",
      detail: "TCS reports on 8 October, opening the IT results run, with Poonawalla Finance on 9 October and Avenue Supermarts on 10 October. September-quarter business updates from banks and retailers have been mostly strong; the actual prints will show whether earnings can offset the RBI's hawkish turn."
    },
    {
      title: "Crude and the rupee stay the swing factors",
      detail: "Brent held above $101 a barrel and the rupee weakened about 45 paise to 96.77, keeping the import bill, inflation and foreign flows in focus. A sustained oil rally or further rupee weakness would compound the market's rate worries."
    },
    {
      title: "Can the market find a floor after the RBI shock?",
      detail: "The Nifty is back below both its 50-day and 200-day moving averages after losing 3.4% over three weeks, and closed near the day's low. Technically, 22,500-22,400 is the immediate support zone, with 22,800-22,900 the first resistance. Breadth has turned negative again (2,018 advances vs 2,353 declines), so follow-through matters."
    },
    {
      title: "Foreign flows and the earnings-led recovery",
      detail: "FIIs sold Rs 2,961 crore on 6 October while DIIs bought Rs 5,089 crore, extending the pattern of the recent slump. A durable rebound would need oil to cool and foreign selling to slow; the RBI decision, the start of Q2 results and the October F&O series are the near-term triggers."
    }
  ],

  reads: [
    {
      title: "Closing Bell: Rs 2.6 lakh crore mcap wiped out after RBI rate hike! Sensex falls 429 pts; Nifty below 22,650",
      source: "ZEE Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-rs-259-lakh-crore-mcap-wiped-out-as-sensex-falls-429-points-nifty-below-22650-after-rbi-rate-hike-403527"
    },
    {
      title: "Market snaps two-day winning streak; Nifty ends below 22,650",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/live-news/market-snaps-two-day-winning-streak;-nifty-ends-below-22-650/1735595"
    },
    {
      title: "Sensex ends 429 points lower, Nifty nearly 22,600 after RBI hikes repo rate by 25 bps",
      source: "India TV",
      url: "https://www.indiatvnews.com/business/markets/sensex-ends-429-points-lower-nifty-nearly-22-600-after-rbi-hikes-repo-rate-by-25-bps-2026-10-07-1056315"
    },
    {
      title: "Top gainers and losers, Oct 7: Titan, AEL tumble 4%, Kotak Mahindra Bank jumps 2%; check list",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-7-titan-ael-tumble-4-kotak-mahindra-bank-jumps-2-check-list/article-201467/"
    },
    {
      title: "Nifty 500 stock reactions: PTC Industries hits record high, Titan falls despite strong Q2 update, check others",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty500-share-price-ptc-industries-qip-record-high-chennai-petro-pvr-inox-titan-q2-physicswallah-prime-focus-20006245.htm"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Debt-to-Equity",
    category: "Leverage",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements. The report's printed page numbers run 30 ahead of the PDF page (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Debt-to-Equity = Total debt ÷ Total equity",
    formulaNote: "Debt-to-Equity (D/E) measures how much a company has borrowed for every rupee of shareholders' money. 'Total debt' normally means interest-bearing borrowings — bank loans, debentures, bonds and other term debt — and 'total equity' is what belongs to the owners (equity share capital plus reserves, and non-controlling interests). A high D/E means the business leans on lenders and is more exposed when interest rates rise; a low D/E means it is funded mostly by its own money. Because Infosys funds itself from operations, this ratio is the clearest single test of how conservative its balance sheet is — and with the RBI now raising rates, low leverage is a genuine advantage.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total equity", value: "Rs 93,297 crore", page: "p. 317" },
      { label: "Total borrowings", value: "Rs 0 crore (no bank or term borrowings on the balance sheet)", page: "p. 317" },
      { label: "Lease liabilities (non-current + current)", value: "Rs 6,016 crore + Rs 3,160 crore = Rs 9,176 crore", page: "p. 317" }
    ],
    working: "Step 1 — total equity = Rs 93,297 crore (p. 317; equity share capital 2,024 + other equity 90,828 = equity attributable to owners 92,852, plus non-controlling interests 445). Step 2 — total debt: the consolidated balance sheet shows no borrowings (no loans, debentures or term-debt line); the only debt-like obligation is lease liabilities, so total borrowings = Rs 0 crore (p. 317). Step 3 — Debt-to-Equity on borrowings alone = 0 ÷ 93,297 = 0.00x. Step 4 — if lease liabilities are counted as debt, total debt = 6,016 + 3,160 = Rs 9,176 crore (p. 317), and D/E = 9,176 ÷ 93,297 = 0.098 ≈ 0.10x.",
    result: "≈ 0.10x counting lease liabilities; 0.00x on borrowings alone",
    meaning: "Infosys runs an essentially debt-free balance sheet. On interest-bearing borrowings alone, Debt-to-Equity is zero — the company has no bank loans or term debt, and it funds itself from the cash it generates (free cash flow was Rs 33,097 crore, or 112.3% of net profit, in FY26). The only leverage of any kind is lease liabilities of Rs 9,176 crore for offices and equipment; count those as debt and D/E is still only about 0.10x, meaning roughly 10 paise of debt-like obligations for every rupee of equity. That is exceptionally conservative — most capital-intensive companies run D/E well above 1x. For a shareholder, low leverage means profits are not eaten by interest, there is room to borrow if an opportunity appears, and the dividend and buyback are funded from surplus cash rather than debt. Watch it over time: a rising D/E alongside large acquisitions would be the first sign the balance sheet is loosening.",
    crossCheck: "Screener.in and Trendlyne both show Infosys as virtually debt-free, with a Debt-to-Equity of about 0.00-0.01 — because they count only interest-bearing borrowings and exclude lease liabilities. Add the lease liabilities back (Rs 9,176 crore) and the ratio rises to about 0.10x, still a very low figure. That is the only convention gap: whether leases sit in 'debt' or not. Infosys' own annual report describes the balance sheet as 'debt-free and liquid', which matches the borrowings-based measure. Every version of the calculation points to the same conclusion — minimal leverage.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
