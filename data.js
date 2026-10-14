const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 14 October 2026, 5:30 PM IST — Daily Wrap",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 14 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22622.70,
      dayChange: -99.25,
      dayChangePct: -0.44,
      weekChangePct: 0.45, // week-to-date vs prior Friday, 9 Oct close of 22,520.45
      spark: [22231.80, 22520.45, 22363.35, 22721.95, 22622.70], // last 5 closes: 8 Oct, 9 Oct, 12 Oct, 13 Oct, 14 Oct
      note: "The benchmark gave back part of Tuesday's 359-point surge, closing 99.25 points (-0.44%) lower at 22,622.70 as profit-booking, a rebound in Brent crude to about $106-107 a barrel and persistent foreign outflows outweighed strength in IT and energy. The index swung between an intraday high of 22,757.95 and a low of 22,558.95, closing off its low. Breadth stayed positive on the NSE (2,564 advances vs 1,805 declines) even as the headline index slipped, with 34 of the 50 Nifty constituents ending lower. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the gainers; Shriram Finance, HDFC Life, Bajaj Finance, Bajaj Finserv and SBI Life Insurance were the biggest losers."
    },
    {
      name: "Nifty Next 50",
      close: 68999.30,
      dayChange: 71.35,
      dayChangePct: 0.10,
      weekChangePct: 1.22, // week-to-date vs prior Friday, 9 Oct close of 68,166.70
      spark: [67614.50, 68166.70, 68351.70, 68927.95, 68999.30], // last 5 closes: 8 Oct, 9 Oct, 12 Oct, 13 Oct, 14 Oct
      note: "The 'next rung' of large caps held up better than the headline index, edging up 71.35 points (+0.10%) to 68,999.30, helped by consumer and select financial names even as the Nifty 50 slipped."
    },
    {
      name: "Nifty Midcap 150",
      close: 21820.40,
      dayChange: -9.00,
      dayChangePct: -0.04,
      weekChangePct: 1.01, // week-to-date vs prior Friday, 9 Oct close of 21,603.25
      spark: [21311.50, 21603.25, 21620.50, 21829.40, 21820.40], // last 5 closes: 8 Oct, 9 Oct, 12 Oct, 13 Oct, 14 Oct
      note: "Midcaps closed almost unchanged: the Nifty Midcap 150 slipped just 9 points (-0.04%) to 21,820.40, a near-flat finish that masked sharp stock-level moves. JSW Energy (+6.47%) was the index's top gainer while Meesho (down about 5%) was the biggest drag; 64 of 149 constituents advanced against 85 decliners."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17886.30,
      dayChange: 52.85,
      dayChangePct: 0.30,
      weekChangePct: 1.77, // week-to-date vs prior Friday, 9 Oct close of 17,574.85
      spark: [17488.30, 17574.85, 17772.80, 17833.45, 17886.30], // last 5 closes: 8 Oct, 9 Oct, 12 Oct, 13 Oct, 14 Oct
      note: "Small caps bucked the trend, the Nifty Smallcap 250 rising about 0.30% to 17,886.30 as Transformers & Rectifiers (+~16%), Vedanta Power and IDBI Bank added the most points to the index. The narrower Nifty Smallcap 100, by contrast, fell 0.32%, a reminder that the small-cap advance was concentrated in a handful of stocks."
    },
    {
      name: "BSE SME Index",
      close: 123211.97,
      dayChange: 924.07,
      dayChangePct: 0.76,
      weekChangePct: 1.25, // week-to-date vs prior Friday, 9 Oct close of 1,21,686.21
      spark: [121076.38, 121686.21, 122178.64, 122287.90, 123211.97], // last 5 closes: 8 Oct, 9 Oct, 12 Oct, 13 Oct, 14 Oct
      note: "The S&P BSE SME IPO index rose about 0.76% to 1,23,211.97, holding close to its 52-week high of 1,23,353.65, as the SME platform stayed firm while the main-board benchmarks slipped."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Profit-booking halts the rally: Nifty slips 99 points to 22,623 and the Sensex 252 points as crude nears $107, even as IT, energy and FMCG hold up",
    summary: "A day after its sharpest gain since June, the market paused. The Nifty 50 closed 99.25 points, or 0.44%, lower at 22,622.70 and the Sensex fell 251.89 points, or 0.34%, to 72,781.89, as investors booked profits after Tuesday's 1,109-point Sensex surge, a rebound in Brent crude to around $106-107 a barrel revived inflation and import-bill worries, and foreign portfolio investors kept selling. The Nifty opened flat, briefly rose to an intraday high of about 22,758, then slid to a low of 22,558.95 before closing off the low; the Sensex touched a low of 72,578.75. It was a day of two halves on the sector board: IT, energy, FMCG and oil & gas gained while pharma, financial services, auto and metal fell. The Nifty IT index added 1.14% to 30,171.00, extending Tuesday's 5.2% jump, with Infosys (+2.44%), TCS (+2.11%) and Tech Mahindra (+~2%) leading; the Nifty Energy index rose 1.47% to 36,503.50 on Aegis Logistics (+6.98%), JSW Energy (+6.47%) and Adani Energy Solutions (+5.17%), and FMCG added 1.21% as Nestle India (+3.69%) and Tata Consumer Products (+2.91%) topped the Nifty gainers. On the losing side, the Nifty Pharma index fell 1.30% to 25,736.95 (Divis Laboratories -2.92%, Dr Reddy's -2.37%, Sun Pharma -1.64%) and financials came under pressure, with Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance the weakest Nifty names. In the Nifty 500, Transformers & Rectifiers surged about 16% on a strong September-quarter (net profit up ~135% year on year), Vedanta Power and IDBI Bank jumped, and Tata Elxsi rose on results, while Meesho, LIC Housing Finance, Polycab India (on an insolvency-related court order), Bank of Baroda (named in a $15 billion lawsuit) and Shriram Finance were the day's biggest fallers. India VIX rose about 3.5% to 14.61 as nerves returned, and the rupee firmed to about 95 to the dollar. The broader market was mixed — the Nifty Midcap 150 was flat (-0.04%), the Nifty Smallcap 250 rose about 0.30% while the Smallcap 100 fell 0.32% — and NSE breadth stayed positive (2,564 advances vs 1,805 declines). September wholesale inflation, meanwhile, hit a series high of 11.39%.",
    stats: ["Nifty -0.44%", "Sensex -0.34%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // trading day — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-08", label: "Thu 8 Oct", niftyClose: 22231.80, niftyChangePct: -1.64, sensexChangePct: -1.44, note: "Bloodbath on expiry day: the Sensex crashed 1,045 points to 71,593.24 and the Nifty sank 1.64% to 22,231.80, hitting a fresh 52-week low of 22,179.90 intraday, as Brent jumped over 4% to above $104 a barrel, the RBI's hawkish stance weighed and FIIs sold for a ninth straight session (~Rs 57,000 crore). Every Nifty sector ended red — metal -3.55%, realty -3.16%, media -2.79%, auto -2.49%, pharma -2.32% — with IT the only bright spot: Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) were the sole Nifty 50 gainers, while Adani Enterprises (-5.36%), JSW Steel (-4.46%) and ITC (-4.03%) fell hardest. BSE breadth was 1,018 advances vs 3,412 declines, mid and small caps dropped over 2% each, India VIX spiked 10.37% to 15.33, and about Rs 10 lakh crore of wealth was wiped out. TCS reported Q2 results after the close." },
    { date: "2026-10-09", label: "Fri 9 Oct", niftyClose: 22520.45, niftyChangePct: 1.30, sensexChangePct: 1.23, note: "Relief rally: the Sensex rebounded 879.09 points (+1.23%) to 72,472.33 and the Nifty jumped 288.65 points (+1.30%) to 22,520.45, snapping a two-day slide and regaining nearly 80% of Thursday's fall. IT led after TCS's Q2 beat (net profit +15% YoY to Rs 13,884 crore), the Nifty IT index surging 3.02%, while cooling crude (Brent ~$103), softer bond yields and a firmer rupee helped. Every Nifty sector closed green barring Oil & Gas — FMCG +2.20%, PSU Bank +1.63%, Auto +1.42%, Financials +1.36%. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports led; BSE (-1.43%), Reliance (-0.65%) and JSW Steel (-0.61%) lagged. NSE breadth was 2,524 advances vs 1,864 declines, India VIX fell 6.07% to 14.35, and the rebound ended the Nifty's eight-week losing streak." },
    { date: "2026-10-12", label: "Mon 12 Oct", niftyClose: 22363.35, niftyChangePct: -0.70, sensexChangePct: -0.76, note: "The benchmarks gave up early gains and closed lower, the Sensex down 547.65 points to 71,924.68 and the Nifty down 157.10 points to 22,363.35, after opening higher on easing crude. Selling was broad — ITC, Tech Mahindra and Avenue Supermarts (-4.32%) were among the biggest drags, with Apollo Hospitals (-3.15%) the sharpest Nifty faller, while Dr Reddy's (+2.71%) and Bajaj Auto (+2.62%) led the gainers. Interestingly the broader market held up better than the benchmarks: small caps rose about 1.4% and mid caps about 0.1%. India VIX rose 6.07% to 15.25, the rupee firmed about 1% to 95.77 after the RBI's forex measures, and FIIs sold a net Rs 1,708 crore even as DIIs bought Rs 3,045 crore. September CPI came in hotter than expected at 5.54%." },
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." },
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." }
  ],

  sectors: [
    { name: "Nifty Energy", changePct: 1.47, note: "The day's top sector, up 1.47% to 36,503.50, as Aegis Logistics (+6.98%), JSW Energy (+6.47%) and Adani Energy Solutions (+5.17%) surged with crude prices" },
    { name: "Nifty FMCG", changePct: 1.21, note: "Defensive FMCG added 1.21% as Nestle India (+3.69%) and Tata Consumer Products (+2.91%) topped the Nifty gainer list and Hindustan Unilever rose about 1%" },
    { name: "Nifty IT", changePct: 1.14, note: "IT extended Tuesday's 5.2% rally, adding 1.14% to 30,171.00, as Infosys (+2.44%), TCS (+2.11%) and Tech Mahindra (+~2%) kept the sector in favour ahead of results" },
    { name: "Nifty Oil & Gas", changePct: 0.89, note: "Oil & gas rose about 0.9%, helped by ONGC (+1.3%) and higher crude, even as the rise in Brent stoked inflation worries for the broader market" },
    { name: "Nifty Infrastructure", changePct: 0.26, note: "Infrastructure edged up about 0.3%, with capital-goods names such as BHEL (+4.89%) and L&T-related engineering stocks holding firm" },
    { name: "Nifty Media", changePct: -0.05, note: "Media ended essentially flat at -0.05%, one of the few sectors to sit out the day's swings" },
    { name: "Nifty Realty", changePct: -0.20, note: "Realty slipped about 0.2% as rate-sensitive names gave back part of Tuesday's 2.46% gain" },
    { name: "Nifty Bank", changePct: -0.30, note: "The Bank Nifty fell about 0.30% to 55,316.00, with private banks easing alongside auto and metal even as IT stayed strong" },
    { name: "Nifty Metal", changePct: -0.32, note: "Metal declined about 0.32%, under pressure from profit-booking after its recent gains" },
    { name: "Nifty Auto", changePct: -0.93, note: "Autos were among the weakest sectors, down about 0.93%, with Mahindra & Mahindra (-2.47%) and other cyclicals under pressure" },
    { name: "Nifty Financial Services", changePct: -1.21, note: "Financial services ex-bank fell about 1.21%, the biggest drag on the index, as Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance and Bajaj Finserv slid" },
    { name: "Nifty Pharma", changePct: -1.30, note: "The day's worst sector for a second straight session, down 1.30% to 25,736.95, as Divis Laboratories (-2.92%), Dr Reddy's (-2.37%), Sun Pharma (-1.64%), Mankind Pharma and Cipla fell" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily gainers and losers for Wednesday, 14 Oct 2026 (Kotak Neo's and Dhan's Nifty 500 / Nifty Smallcap 250 gainer lists, CNBC-TV18's Nifty 500 movers, Moneycontrol's price-action wrap, 5paisa's and MarketsMojo's stock movers, and TBTflow's 14 Oct closing tape for the NSE F&O names; readings vary slightly between feeds — e.g. Transformers & Rectifiers' gain is quoted between roughly 14% and 17% and Meesho's fall between about 5.2% and 5.9% depending on the source)",
    gainers: [
      { name: "Transformers & Rectifiers India", changePct: 16.00, cap: "Smallcap", note: "The day's runaway Nifty 500 gainer after a blockbuster September quarter — consolidated net profit up about 135% year on year to Rs 79.8 crore and revenue up 60.7% to Rs 739.4 crore, with margins expanding; sources quote the day's gain between roughly 14% and 17%" },
      { name: "Vedanta Power", changePct: 12.62, cap: "Smallcap", note: "Among the top small-cap gainers, up about 12.6%, as the recently demerged Vedanta power entity drew strong buying" },
      { name: "IDBI Bank", changePct: 8.44, cap: "Smallcap", note: "Jumped about 8.4% on heavy volumes ahead of its September-quarter results and on expectations of a strong print" },
      { name: "Vedanta Oil & Gas", changePct: 7.58, cap: "Smallcap", note: "Rose about 7.6% as energy and oil-linked names rallied with crude" },
      { name: "Tata Elxsi", changePct: 6.83, cap: "Midcap", note: "Gained about 6.8% after its Q2 results — revenue up 15% year on year to Rs 1,055.7 crore and EBITDA margin improving to 21.9%, with broad-based growth across its verticals" }
    ],
    losers: [
      { name: "Meesho", changePct: -5.21, cap: "Midcap", note: "The worst Nifty 500 performer, down about 5.2%, as investors booked profits after a sharp recent run following its 'Mega Blockbuster' sale update" },
      { name: "LIC Housing Finance", changePct: -5.14, cap: "Midcap", note: "Fell about 5.1% on profit-booking after its recent rally, with elevated crude and rate worries adding to pressure on housing-finance names" },
      { name: "Polycab India", changePct: -4.60, cap: "Largecap", note: "Slipped about 4.6% after the NCLAT stayed an NCLT order that had admitted an insolvency plea against the company over an alleged Rs 2.79 crore operational debt" },
      { name: "Bank of Baroda", changePct: -3.96, cap: "Largecap", note: "Fell about 4% after businessman B R Shetty, founder of NMC Healthcare, filed a $15 billion damages suit against the bank and 25 others" },
      { name: "Shriram Finance", changePct: -3.85, cap: "Largecap", note: "The weakest Nifty 50 name, down about 3.9%, giving back part of Tuesday's 6.31% jump that had followed reports of a stake increase by MUFG" }
    ],
    sensexWinners: ["Nestle India", "Infosys", "Tata Consultancy Services"],
    sensexLaggards: ["Bajaj Finance", "Bajaj Finserv", "Mahindra & Mahindra"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings: Wipro, Tech Mahindra and Nestlé India report on 15 October",
      detail: "After TCS's and HCL Technologies' strong September-quarter prints drove last week's IT rebound, the next batch of results lands on 15 October — Wipro, Tech Mahindra and Nestlé India. Deal wins, margins and FY27 growth guidance, especially any pickup in AI-led spending by overseas banking and retail clients, will decide whether the IT rally becomes a durable trend or a one-day pop. HDFC Bank, Jio Financial Services and Bajaj Housing Finance also report through 15-17 October."
    },
    {
      title: "Wholesale inflation at a series high — and US CPI in focus",
      detail: "September wholesale price inflation accelerated to 11.39%, its highest in the new series, from 9.92% in August, with fuel and power inflation at 25.9%. Combined with September retail inflation of 5.54%, it keeps the RBI's 'calibrated tightening' stance in play. Investors are also waiting on US consumer-price data for clues on the Federal Reserve's rate path, which is feeding directly into global bond yields and the rupee."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent rebounded to around $106-107 a barrel on Middle East supply worries, reviving concerns over India's import bill, inflation and current-account pressure and weighing on cyclicals on Wednesday. The rupee, though, has firmed to about 95 to the dollar, helped by the RBI's forex-derivative measures. Watch whether crude retreats and whether the rupee's stabilisation holds."
    },
    {
      title: "Foreign outflows versus the domestic cushion",
      detail: "FPIs have kept selling, and Wednesday's fall was again attributed partly to foreign outflows, while domestic institutions keep absorbing the supply on the back of strong mutual-fund inflows. That divergence remains the market's key support. A durable rally needs foreign selling to slow; a rebound carried only by domestic buying and short-covering can fade."
    },
    {
      title: "Can the Nifty break out of 22,180-22,850?",
      detail: "The Nifty closed at 22,622.70 and remains boxed in a 22,180-22,850 range after Tuesday's spike was partly reversed. A decisive close above 22,850 would open the way towards 23,000 and higher; 22,180-22,200 is the support the bulls need to defend. The index still trades below key moving averages, so the move needs follow-through before it can be read as a trend reversal."
    }
  ],

  reads: [
    {
      title: "Stock Market Closing Today, Oct 14: Sensex falls 251 pts, Nifty below 22,650; check top gainers and losers",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-oct-14-sensex-falls-251-pts-nifty-below-22650-check-top-gainers-and-losers-article-156338583"
    },
    {
      title: "Closing Bell: Sensex Falls 252 Points, Nifty 50 Slips Below 22,650 as Crude Oil Nears $106",
      source: "DSIJ",
      url: "https://insights.dsij.in/dsijarticledetail/closing-bell-sensex-falls-252-points-nifty-50-slips-below-22650-as-crude-oil-nears-106"
    },
    {
      title: "IT, Energy Stocks Gain; Markets Slip on Crude, FPI Outflows",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/sectoral-snapshot-today-october-14-2026-it-energy-fmcg-stocks-gain-pharma-financials-auto-metal-shares-drag"
    },
    {
      title: "Nifty ends below 22,650 mark; Pharma shares tumble for 2nd day",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/quick-session-news/nifty-ends-below-22-650-mark;-pharma-shares-tumble-for-2nd-day/1736753"
    },
    {
      title: "Nifty 500: Transformers and Rectifiers surge 15% on Q2 result, BoB falls 3%; Check others",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty-500-share-price-transformers-rectifiers-tata-elxsi-bharat-coking-polycab-bank-of-baroda-mmtc-q2-results-20011376.htm"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Current Ratio",
    category: "Liquidity / Solvency",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = Total current assets ÷ Total current liabilities",
    formulaNote: "The current ratio measures whether a company can pay the bills that fall due within a year using the assets it can turn into cash within a year. The numerator, total current assets, bundles everything the company expects to convert to cash inside twelve months — here cash and equivalents, current investments, trade receivables, unbilled revenue and other current assets. The denominator, total current liabilities, bundles everything it must settle inside twelve months — trade payables, unearned revenue, employee-benefit obligations and other current liabilities. A ratio above 1 means short-term assets comfortably cover short-term obligations; a ratio below 1 is a warning sign. Roughly 1.5 to 2.0 is generally considered healthy, though the 'right' level varies by industry: a software-services firm, which carries no inventory and collects from clients quickly, can run a high ratio without it signalling idle capital. Because Infosys is debt-light and cash-rich, its current ratio is comfortably above 1.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets as at March 31, 2026", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 — Total current assets as at March 31, 2026 = Rs 1,03,489 crore (Consolidated Balance Sheet, p. 317). This is the sum of cash and cash equivalents (Rs 22,201 crore), current investments (Rs 12,950 crore), trade receivables (Rs 35,234 crore), unbilled revenue (Rs 15,483 crore) and other current assets (Rs 17,621 crore). Step 2 — Total current liabilities as at March 31, 2026 = Rs 52,322 crore (Consolidated Balance Sheet, p. 317), the sum of trade payables (Rs 4,744 crore), unearned revenue (Rs 11,838 crore), employee-benefit obligations (Rs 3,524 crore) and other current liabilities and provisions (Rs 32,216 crore). Step 3 — Current ratio = 1,03,489 ÷ 52,322 = 1.978, i.e. about 1.98.",
    result: "1.98 (about 2.0)",
    meaning: "For every Rs 1 of liabilities due within a year, Infosys held about Rs 1.98 of assets convertible to cash within a year — a comfortable short-term liquidity cushion. Three things are worth noting. First, the ratio is flattered by the balance sheet's cash pile: cash and current investments together are Rs 35,151 crore, roughly two-thirds of the current-liability figure on their own. Second, most of the remaining current assets are trade receivables and unbilled revenue — money owed by clients — which is high-quality for a services firm but still depends on clients paying on time. Third, the largest current liability is not borrowings (Infosys has essentially none) but 'other current liabilities and provisions' and unearned revenue — money the company owes for services not yet delivered, which is a normal, non-cash obligation. A current ratio near 2 tells you Infosys is unlikely to face any short-term funding stress, and it can fund dividends, buybacks and acquisitions out of its own balance sheet.",
    crossCheck: "Data platforms such as Screener.in and Trendlyne compute the current ratio from the same balance sheet and publish Infosys' figure at roughly 1.9-2.0, consistent with the 1.98 worked through here. The small convention gap comes from classification: the reported IFRS balance sheet groups some items under 'other current assets' and 'other current liabilities and provisions' that Ind-AS presentations (and therefore some data providers) may split differently, and a few platforms use only cash and equivalents (excluding current investments) in the numerator, which lowers the ratio. Whichever convention is used, the conclusion is the same — Infosys carries a strong short-term liquidity position.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
