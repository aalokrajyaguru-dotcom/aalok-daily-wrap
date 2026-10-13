const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 13 October 2026, 5:30 PM IST — Daily Wrap",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Tuesday, 13 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22721.95,
      dayChange: 358.60,
      dayChangePct: 1.60,
      weekChangePct: 0.89, // week-to-date vs prior Friday, 9 Oct close of 22,520.45
      spark: [22603.05, 22231.80, 22520.45, 22363.35, 22721.95], // last 5 closes: 7 Oct, 8 Oct, 9 Oct, 12 Oct, 13 Oct
      note: "The benchmark snapped a two-session slide with its sharpest single-day percentage gain since 12 June, closing at the day's high of 22,721.95, up 358.60 points (+1.60%). IT powered the move — the Nifty IT index jumped 5.22%, its best day in 17 months — after HCL Technologies' September-quarter beat, with TCS (+6.79%) and Infosys (+4.44%) close behind. Finance Minister Nirmala Sitharaman's remarks on LTCG/STCG taxation, while talking to Bloomberg, added to the optimism. 46 of the 50 Nifty constituents closed higher."
    },
    {
      name: "Nifty Next 50",
      close: 68927.95,
      dayChange: 576.25,
      dayChangePct: 0.84,
      weekChangePct: 1.12, // week-to-date vs prior Friday, 9 Oct close of 68,166.70
      spark: [69404.00, 67614.50, 68166.70, 68351.70, 68927.95], // last 5 closes: 7 Oct, 8 Oct, 9 Oct, 12 Oct, 13 Oct
      note: "The 'next rung' of large caps rose 0.84% to 68,927.95, keeping pace with the headline index as the rally stayed concentrated in IT and financial heavyweights rather than spreading evenly."
    },
    {
      name: "Nifty Midcap 150",
      close: 21830.20,
      dayChange: 209.70,
      dayChangePct: 0.97,
      weekChangePct: 1.05, // week-to-date vs prior Friday, 9 Oct close of 21,603.25
      spark: [21838.00, 21311.50, 21603.25, 21620.50, 21830.20], // last 5 closes: 7 Oct, 8 Oct, 9 Oct, 12 Oct, 13 Oct
      note: "Midcaps lagged the benchmarks: the Nifty Midcap 150 rose 0.97% to 21,830.20, and the Nifty Midcap 100 gained 1.06%. The day's gains came mainly from large-cap IT names, so mid-cap participation was steady rather than exuberant."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17833.20,
      dayChange: 60.40,
      dayChangePct: 0.34,
      weekChangePct: 1.47, // week-to-date vs prior Friday, 9 Oct close of 17,574.85
      spark: [17917.75, 17488.30, 17574.85, 17772.80, 17833.20], // last 5 closes: 7 Oct, 8 Oct, 9 Oct, 12 Oct, 13 Oct
      note: "Small caps trailed badly, the Nifty Smallcap 250 up just 0.34% to 17,833.20 (the Nifty Smallcap 100 managed only +0.11%) — evidence the rally was selective and risk appetite remained uneven. Bandhan Bank, Birlasoft and KPIT Technologies added the most points to the index."
    },
    {
      name: "BSE SME Index",
      close: 122287.90,
      dayChange: 109.26,
      dayChangePct: 0.09,
      weekChangePct: 0.49, // week-to-date vs prior Friday, 9 Oct close of 1,21,686.21
      spark: [122910.34, 121076.38, 121686.21, 122178.64, 122287.90], // last 5 closes: 7 Oct, 8 Oct, 9 Oct, 12 Oct, 13 Oct
      note: "The S&P BSE SME IPO index edged up 0.09% to 1,22,287.90, lagging the main board as the SME platform stayed subdued even as the headline indices staged a broad rally."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "HCLTech's Q2 beat ignites a 5% IT rally: Nifty posts its sharpest one-day gain since June, up 359 points to 22,722, as the Sensex jumps 1,109 points",
    summary: "A blowout quarter from HCL Technologies jolted Indian equities out of a two-session slump on Tuesday, powering the Nifty 50 to its steepest single-day percentage gain since 12 June. The Nifty closed at 22,721.95, up 358.60 points, or 1.60%, and the Sensex jumped 1,109.10 points, or 1.54%, to 73,033.78, with the Bank Nifty adding 563.05 points to 55,481.05. IT led the charge: the Nifty IT index surged 5.22% to 29,830.10 — its best day in 17 months — as HCL Technologies leapt 8.42% (its biggest single-day gain since September 2020) after reporting a September-quarter beat with operating margin up 130 bps quarter-on-quarter, record bookings and AI-led deal wins, while TCS climbed 6.79% and Infosys rose 4.44%. Finance Minister Nirmala Sitharaman's remarks on long- and short-term capital gains taxation, in an interview with Bloomberg, added to the bullish mood. The rally was broad: 46 of the 50 Nifty constituents closed higher, and every NSE sectoral index ended green except Nifty Pharma, which slipped 0.01%. Realty (+2.46%), Consumer Durables (+1.56%), Financial Services (+1.46%), PSU Bank (+1.44%), FMCG (+1.40%), Auto (+1.23%) and Metal (+1.15%) all advanced. In the Nifty 500, Bandhan Bank surged about 9.2% on expectations of a strong Q2 and reports of stake interest, the day's biggest gainer; RBL Bank was the worst, falling about 7.1% as higher-than-expected provisions overshadowed a sharp jump in Q2 profit, with brokerages split. The broader market lagged the headline indices: the Nifty Midcap 100 rose 1.06% and the Nifty Midcap 150 0.97%, while the Nifty Smallcap 250 added just 0.34%. India VIX eased about 7.4% to 14.12, signalling cooling near-term nerves. The gains came a day after the benchmarks fell on Monday (Nifty -0.70% to 22,363.35, Sensex -0.76% to 71,924.68), and against a backdrop of elevated crude (Brent around $104-106), September retail inflation of 5.54% and persistent foreign outflows.",
    stats: ["Nifty +1.60%", "Sensex +1.54%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // trading day — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-07", label: "Wed 7 Oct", niftyClose: 22603.05, niftyChangePct: -0.76, sensexChangePct: -0.59, note: "RBI shock: the MPC's unanimous 25-bps repo-rate hike to 5.50% — the first since February 2023 — and its shift to 'calibrated tightening' ended a two-day rebound. The Nifty fell 173 points to 22,603 and the Sensex 429 points to 72,639, both closing near the day's low; metal (-2.33%), realty (-1.77%), auto (-1.58%) and IT (-1.34%) led the slide, while PSU banks (+1.00%) and media (+0.69%) rose. Titan (-3.80%) and Adani Enterprises (-3.75%) were the top Nifty losers and Kotak Mahindra Bank (+1.88%) the top gainer. Breadth was negative (2,018 advances vs 2,353 declines), BSE market cap fell about Rs 2.6 lakh crore, the rupee slipped to 96.77 and India VIX rose 2.25% to 13.92." },
    { date: "2026-10-08", label: "Thu 8 Oct", niftyClose: 22231.80, niftyChangePct: -1.64, sensexChangePct: -1.44, note: "Bloodbath on expiry day: the Sensex crashed 1,045 points to 71,593.24 and the Nifty sank 1.64% to 22,231.80, hitting a fresh 52-week low of 22,179.90 intraday, as Brent jumped over 4% to above $104 a barrel, the RBI's hawkish stance weighed and FIIs sold for a ninth straight session (~Rs 57,000 crore). Every Nifty sector ended red — metal -3.55%, realty -3.16%, media -2.79%, auto -2.49%, pharma -2.32% — with IT the only bright spot: Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) were the sole Nifty 50 gainers, while Adani Enterprises (-5.36%), JSW Steel (-4.46%) and ITC (-4.03%) fell hardest. BSE breadth was 1,018 advances vs 3,412 declines, mid and small caps dropped over 2% each, India VIX spiked 10.37% to 15.33, and about Rs 10 lakh crore of wealth was wiped out. TCS reported Q2 results after the close." },
    { date: "2026-10-09", label: "Fri 9 Oct", niftyClose: 22520.45, niftyChangePct: 1.30, sensexChangePct: 1.23, note: "Relief rally: the Sensex rebounded 879.09 points (+1.23%) to 72,472.33 and the Nifty jumped 288.65 points (+1.30%) to 22,520.45, snapping a two-day slide and regaining nearly 80% of Thursday's fall. IT led after TCS's Q2 beat (net profit +15% YoY to Rs 13,884 crore), the Nifty IT index surging 3.02%, while cooling crude (Brent ~$103), softer bond yields and a firmer rupee helped. Every Nifty sector closed green barring Oil & Gas — FMCG +2.20%, PSU Bank +1.63%, Auto +1.42%, Financials +1.36%. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports led; BSE (-1.43%), Reliance (-0.65%) and JSW Steel (-0.61%) lagged. NSE breadth was 2,524 advances vs 1,864 declines, India VIX fell 6.07% to 14.35, and the rebound ended the Nifty's eight-week losing streak." },
    { date: "2026-10-12", label: "Mon 12 Oct", niftyClose: 22363.35, niftyChangePct: -0.70, sensexChangePct: -0.76, note: "The benchmarks gave up early gains and closed lower, the Sensex down 547.65 points to 71,924.68 and the Nifty down 157.10 points to 22,363.35, after opening higher on easing crude. Selling was broad — ITC, Tech Mahindra and Avenue Supermarts (-4.32%) were among the biggest drags, with Apollo Hospitals (-3.15%) the sharpest Nifty faller, while Dr Reddy's (+2.71%) and Bajaj Auto (+2.62%) led the gainers. Interestingly the broader market held up better than the benchmarks: small caps rose about 1.4% and mid caps about 0.1%. India VIX rose 6.07% to 15.25, the rupee firmed about 1% to 95.77 after the RBI's forex measures, and FIIs sold a net Rs 1,708 crore even as DIIs bought Rs 3,045 crore. September CPI came in hotter than expected at 5.54%." },
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 5.22, note: "The day's runaway leader, up 5.22% to 29,830.10 — its best session in 17 months — after HCL Technologies' Q2 beat, with HCLTech (+8.42%), TCS (+6.79%), Infosys (+4.44%) and Tech Mahindra (+4.93%) all surging on AI-led deal wins and record bookings" },
    { name: "Nifty Realty", changePct: 2.46, note: "Realty jumped 2.46%, among the day's strongest, as rate-sensitive names rebounded with easing bond yields and a firmer rupee" },
    { name: "Nifty Consumer Durables", changePct: 1.56, note: "Consumer durables rose 1.56%, helped by broad buying in discretionary and housing-linked names" },
    { name: "Nifty Financial Services", changePct: 1.46, note: "Financials added 1.46% to 25,228.55 as lenders rallied on rate-relief hopes and the rupee's recovery" },
    { name: "Nifty PSU Bank", changePct: 1.44, note: "State-run lenders gained 1.44%, extending their recent resilience" },
    { name: "Nifty FMCG", changePct: 1.40, note: "FMCG rose 1.40%, with Hindustan Unilever (+2.94%) among the Sensex leaders" },
    { name: "Nifty Auto", changePct: 1.23, note: "Autos gained 1.23% as cyclicals firmed, though Maruti Suzuki stayed under pressure and hit an 18-month low" },
    { name: "Nifty Metal", changePct: 1.15, note: "Metal rose 1.15% even as Vedanta (-3.25%) bucked the sector" },
    { name: "Nifty Bank", changePct: 1.03, note: "Bank Nifty rose 1.03% to 55,481.05, helped by HDFC Bank and Shriram Finance (+6.31%)" },
    { name: "Nifty Private Bank", changePct: 0.74, note: "Private banks added 0.74%, lagging the broader financials gauge" },
    { name: "Nifty Media", changePct: 0.42, note: "Media edged up 0.42%, a modest gain in an otherwise strong session" },
    { name: "Nifty Pharma", changePct: -0.01, note: "The lone sectoral laggard, essentially flat at -0.01%, as healthcare names missed the rally and Divi's Laboratories slipped" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily gainers and losers for Tuesday, 13 Oct 2026 (TBTflow's 13 Oct closing tape, cross-checked with CNBC-TV18's Nifty 500 movers, Bajaj Broking's Nifty 500 top gainers and MarketsMojo's BSE 500 gainers/losers; readings vary slightly between sources — e.g. Bandhan Bank's gain is quoted between ~8% and ~9.2% depending on the feed)",
    gainers: [
      { name: "Bandhan Bank", changePct: 9.20, cap: "Midcap", note: "The day's biggest Nifty 500 gainer, up about 9.2% (its most in almost six months), on expectations of a strong September quarter and reports that IHC and First Abu Dhabi are in early talks to buy a stake in its founder firm" },
      { name: "HCL Technologies", changePct: 8.42, cap: "Largecap", note: "Its biggest single-day gain since September 2020 after a Q2 beat — operating margin up 130 bps QoQ, record bookings and AI-led deal wins; the stock that ignited the IT rally" },
      { name: "KPIT Technologies", changePct: 6.81, cap: "Midcap", note: "Rode the IT-services surge and was among the top Nifty 500 gainers on the day" },
      { name: "Tata Consultancy Services", changePct: 6.79, cap: "Largecap", note: "Extended its post-Q2 run — up roughly 10% over three sessions — as the Nifty IT index had its best day in 17 months" },
      { name: "Shriram Finance", changePct: 6.31, cap: "Largecap", note: "Jumped about 6.3% on reports that Mitsubishi UFJ Financial Group (MUFG) is raising its stake in the lender" }
    ],
    losers: [
      { name: "RBL Bank", changePct: -7.10, cap: "Midcap", note: "The worst Nifty 500 performer, down about 7.1% — its most in nine months — as higher-than-expected provisions overshadowed a sharp jump in Q2 net profit, leaving brokerages split on the stock" },
      { name: "ICICI Prudential Life Insurance", changePct: -3.54, cap: "Largecap", note: "Declined after its Q2 value of new business (VNB) and VNB margin missed Street estimates" },
      { name: "Hitachi Energy India", changePct: -3.32, cap: "Midcap", note: "Among the weakest capital-goods names, giving back recent gains" },
      { name: "Vedanta", changePct: -3.25, cap: "Largecap", note: "The metal heavyweight slipped even as the Nifty Metal index edged up 1.15%" },
      { name: "Multi Commodity Exchange (MCX)", changePct: -2.42, cap: "Midcap", note: "Fell about 2.4%, cooling off after a strong run" }
    ],
    sensexWinners: ["HCL Technologies", "TCS", "Infosys"],
    sensexLaggards: ["Kotak Mahindra Bank", "Maruti Suzuki", "Asian Paints"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings season gathers pace",
      detail: "HCL Technologies' strong September-quarter print was the trigger for Tuesday's rally, following TCS's beat the previous week. The focus now turns to the next batch of results — Infosys, Wipro and Tech Mahindra report on 15 October, alongside HDFC Bank, Nestlé India, Jio Financial Services and Bajaj Housing Finance between 15 and 17 October. Deal wins, margins and FY27 growth guidance — especially any pickup in AI-led spending by overseas banking and retail clients — will decide whether the IT rebound becomes a durable trend or a one-day pop."
    },
    {
      title: "Inflation and the RBI's hawkish turn",
      detail: "September retail inflation came in hotter than expected at 5.54%, moving closer to the RBI's 6% upper tolerance limit and reinforcing the central bank's 'calibrated tightening' stance after its 25-bps repo-rate hike on 7 October. September WPI is due on 14 October. A softer print would ease rate worries for banks, NBFCs, autos and real estate; a hotter one would keep the hawkish pressure on."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent has stayed elevated — around $104-106 a barrel — keeping India's import bill, inflation and current-account pressure in focus. The rupee, however, has found some relief from the RBI's forex-derivative measures, firming about 1% to around 95.77 to the dollar, which helped slow foreign selling on Monday. Watch whether crude retreats and whether the rupee's stabilisation holds."
    },
    {
      title: "Foreign outflows versus the domestic cushion",
      detail: "FIIs remain net sellers — offloading a provisional Rs 1,708 crore on Monday — while DIIs keep absorbing the supply (Rs 3,045 crore bought on Monday, helped by record September mutual-fund inflows). That divergence is the market's key support. A durable rally needs foreign selling to slow; a rebound carried only by domestic buying and short-covering can fade."
    },
    {
      title: "Can the rally hold above 22,700?",
      detail: "The Nifty closed at 22,721.95, reclaiming 22,700, with that level now the first support to defend (next at 22,650-22,600, then 22,450). Immediate resistance sits at 22,800-22,900 — a decisive break above that zone would add conviction to the short-term outlook and open the way toward 23,000. The index still trades below key moving averages, so the move needs follow-through before it can be read as a trend reversal."
    }
  ],

  reads: [
    {
      title: "HCLTech sparks IT-led surge; Nifty posts sharpest single-day gain since June",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/hcltech-sparks-it-led-surge-nifty-posts-sharpest-single-day-gain-since-june/article71579061.ece"
    },
    {
      title: "Market Today: Sensex Jumps 1,100 Points, Nifty Near 22,750; IT Stocks Rally Over 5%",
      source: "News18",
      url: "https://www.news18.com/business/markets/market-today-sensex-jumps-1100-points-nifty-near-22750-it-stocks-rally-over-5-ws-l-10380020.html"
    },
    {
      title: "FM's LTCG remarks, IT rally power 1,100 point Sensex rally; Nifty ends above 22,700",
      source: "Fortune India",
      url: "https://www.fortuneindia.com/markets/fms-ltcg-remarks-it-rally-lift-sensex-1100-points-nifty-closes-above-22700/164421"
    },
    {
      title: "Nifty 500: Bandhan Bank surges 8%, RBL Bank falls 6% despite sharp profit jump; Check others",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty-500-share-price-bandhan-bank-birlasoft-hcl-tech-rbl-bank-sterlite-tech-great-eastern-shipping-q2-results-20010498.htm"
    },
    {
      title: "Stock Market Closing Today, Oct 13: Sensex rallies 1,109 pts, Nifty ends above 22,700; check top gainers and losers",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-oct-13-sensex-rallies-1109-pts-nifty-ends-above-22700-check-top-gainers-and-losers-article-156329067"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Return on Capital Employed (ROCE)",
    category: "Profitability / Return",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Capital Employed = EBIT (operating profit) ÷ Capital Employed, where Capital Employed = Total assets − Total current liabilities",
    formulaNote: "Return on Capital Employed measures how much operating profit a company earns for every rupee of capital tied up in the business, regardless of how that capital is funded (debt or equity). The numerator is EBIT — earnings before interest and tax, here the reported operating profit, which leaves out other income and finance cost — and the denominator is capital employed: everything the company owns (total assets) less the short-term liabilities that are not really 'capital' (total current liabilities). Because Infosys carries essentially no borrowings, capital employed is almost entirely shareholders' money, so ROCE and the operating return on equity move closely together. A higher ROCE is better: it shows the business converts invested capital into profit efficiently. Infosys is famously asset-light, so its ROCE is high in absolute terms.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Operating profit (EBIT) for FY26", value: "Rs 36,254 crore", page: "p. 318" },
      { label: "Total assets as at March 31, 2026", value: "Rs 1,55,967 crore", page: "p. 317" },
      { label: "Total current liabilities as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 — Operating profit (EBIT) for FY26 = Rs 36,254 crore (Consolidated Statement of Comprehensive Income, p. 318). Step 2 — Total assets as at March 31, 2026 = Rs 1,55,967 crore, and total current liabilities = Rs 52,322 crore (Consolidated Balance Sheet, p. 317). Step 3 — Capital employed = 1,55,967 − 52,322 = Rs 1,03,645 crore. Step 4 — ROCE = 36,254 ÷ 1,03,645 = 0.3498, i.e. about 35.0%.",
    result: "34.98% (about 35.0%)",
    meaning: "For every Rs 100 of capital tied up in Infosys in FY26, the company earned roughly Rs 35 of operating profit. That is an exceptionally high return — a tribute to the asset-light IT-services model, which needs little plant, inventory or debt to grow, so almost all capital is shareholders' equity and the return on it is very large. Two things are worth keeping in mind. First, ROCE here uses the reported operating profit and excludes 'other income' (largely interest earned on Infosys' large cash pile), so it measures the core business rather than the treasury. Second, because Infosys carries no meaningful borrowings, there is no 'leverage' boost to the number — the 35% is a pure operating return. A sustained, high ROCE is what lets the company fund its large dividends and buybacks out of earnings rather than debt.",
    crossCheck: "On the report's own definition the answer is 34.98%. Data platforms such as Screener.in and Trendlyne compute ROCE slightly differently: they use EBIT = profit before tax + finance cost, which pulls in 'other income'. On that convention, EBIT = 39,995 + 416 = Rs 40,411 crore, so ROCE = 40,411 ÷ 1,03,645 = 39.0%. The roughly four-percentage-point gap is a definition, not a disagreement — it simply reflects whether treasury/other income is counted in the return. Screener.in and Trendlyne publish Infosys' ROCE in the high-30s on this broader basis, consistent with the 39.0% figure; the 34.98% worked through above is the pure operating-return version, using the report's operating profit line.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (p. 318) and Consolidated Balance Sheet (p. 317)"
  }
};
