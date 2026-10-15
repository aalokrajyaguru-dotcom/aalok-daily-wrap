const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 15 October 2026, 5:30 PM IST — Daily Wrap",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 15 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22997.35,
      dayChange: 374.65,
      dayChangePct: 1.66,
      weekChangePct: 2.12, // week-to-date vs prior Friday, 9 Oct close of 22,520.45
      spark: [22520.45, 22363.35, 22721.95, 22622.70, 22997.35], // last 5 closes: 9 Oct, 12 Oct, 13 Oct, 14 Oct, 15 Oct
      note: "The benchmark posted its biggest single-day gain in about four months, surging 374.65 points (+1.66%) to 22,997.35 and reclaiming the 23,000 mark intraday (high 23,056.40, low 22,637.40), as a sell-off in global AI-linked technology stocks and hotter-than-expected US inflation burnished India's relative appeal and pulled money into domestic large-caps. IT, private banks and autos led: Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance Industries (+3.44%), Bharti Airtel (+3.31%) and HCLTech topped the gainers, while Nestle India (-7.76%), Trent and Adani Enterprises fell. Breadth was poor — 980 NSE stocks rose against 1,912 that declined — because the rally was confined to heavyweight large-caps."
    },
    {
      name: "Nifty Next 50",
      close: 68654.20,
      dayChange: -345.10,
      dayChangePct: -0.50,
      weekChangePct: 0.72, // week-to-date vs prior Friday, 9 Oct close of 68,166.70
      spark: [68166.70, 68351.70, 68927.95, 68999.30, 68654.20], // last 5 closes: 9 Oct, 12 Oct, 13 Oct, 14 Oct, 15 Oct
      note: "The 'next rung' of large caps was left behind by the headline surge, slipping about 0.50% to 68,654.20 as the day's buying concentrated in Nifty 50 heavyweights. Feeds differ marginally on the exact close (some quote 68,671.60, -0.47%); both put the index in the red on a day the Sensex rose 2.11%."
    },
    {
      name: "Nifty Midcap 150",
      close: 21756.35,
      dayChange: -64.05,
      dayChangePct: -0.29,
      weekChangePct: 0.71, // week-to-date vs prior Friday, 9 Oct close of 21,603.25
      spark: [21603.25, 21620.50, 21829.40, 21820.40, 21756.35], // last 5 closes: 9 Oct, 12 Oct, 13 Oct, 14 Oct, 15 Oct
      note: "Midcaps dipped 64.05 points (-0.29%) to 21,756.35 as the rally stayed concentrated in the large-cap indices. The index swung between an intraday high of 21,889.65 and a low of 21,718.35, with 87 of its constituents ending lower against 61 gainers — a mirror image of the Nifty 50's advance."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17627.05,
      dayChange: -205.30,
      dayChangePct: -1.15,
      weekChangePct: 0.30, // week-to-date vs prior Friday, 9 Oct close of 17,574.85
      spark: [17574.85, 17772.80, 17833.45, 17832.35, 17627.05], // last 5 closes: 9 Oct, 12 Oct, 13 Oct, 14 Oct, 15 Oct
      note: "Small caps were the day's clear underperformers, the Nifty Smallcap 250 sliding about 1.15% to 17,627.05 even as the Sensex jumped 2.11% — a stark divergence that underlined how narrow Thursday's rally was. The narrower Nifty Smallcap 100 fell 1.31% to 19,131.70, and Yes Bank (-14.53%) and IDBI Bank (-7.68%) were among the heaviest drags."
    },
    {
      name: "BSE SME Index",
      close: 122743.81,
      dayChange: -468.16,
      dayChangePct: -0.38,
      weekChangePct: 0.87, // week-to-date vs prior Friday, 9 Oct close of 1,21,686.21
      spark: [121686.21, 122178.64, 122287.90, 123211.97, 122743.81], // last 5 closes: 9 Oct, 12 Oct, 13 Oct, 14 Oct, 15 Oct
      note: "The S&P BSE SME IPO index eased about 0.4% to roughly 1,22,744, cooling after touching a 52-week high of 1,23,353.65, as the SME platform followed small caps lower. Intraday readings ranged widely (about 1,22,346 to 1,23,162), so treat the closing level as approximate."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Bumper rally: Sensex vaults 1,534 points to 74,316 and Nifty reclaims 22,997 as IT, private banks and autos surge on a global AI sell-off and softer crude — but small caps fall 1.3%",
    summary: "Indian equities staged their strongest single-day rally in about four months on Thursday. The Sensex soared 1,533.72 points, or 2.11%, to 74,315.61 and the Nifty 50 jumped 374.65 points, or 1.66%, to 22,997.35, closing near the day's high and reclaiming the 23,000 mark intraday for the first time since late September. The trigger was global: a sell-off in technology-heavy overseas markets, fuelled by worries over stretched artificial-intelligence valuations and a hotter-than-expected US inflation print, made India's large-cap tech look relatively attractive, and money rotated into domestic heavyweights. Falling crude (Brent down over 2% to about $103.9 a barrel), a fifth straight session of rupee gains (up 12 paise to 95.05) and softer bond yields added to the cheer. The Nifty IT index led the sector board, up 1.82% to 30,719.80, extending its three-session climb to roughly 8.4% after strong TCS and HCLTech results, while private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) followed. Among Nifty 50 names, Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance Industries (+3.44%), Bharti Airtel (+3.31%) and HCLTech led the gainers. The rally, though, was narrow and top-heavy. Nestle India tumbled 7.76% after its September-quarter print, Trent and Adani Enterprises slipped, the Nifty PSU Bank index fell 1.55% and the Nifty FMCG index lost 1.06%. Critically, the broader market moved the other way: the Nifty Smallcap 250 fell about 1.15% and the Nifty Midcap 150 0.29%, and on the NSE just 980 stocks advanced against 1,912 that declined, with the median stock down 0.72%. In the Nifty 500, Gallantt Ispat (+10.65%), RITES (+6.73%) and Tata Communications (+6.32%) led, while Yes Bank (-14.53%), Nestle India (-7.76%) and IDBI Bank (-7.68%) fell hardest. India VIX cooled 4.58% to 13.96. The message from Thursday: a genuine large-cap rebound, but one that has not yet widened into the broader market.",
    stats: ["Nifty +1.66%", "Sensex +2.11%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // trading day — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-09", label: "Fri 9 Oct", niftyClose: 22520.45, niftyChangePct: 1.30, sensexChangePct: 1.23, note: "Relief rally: the Sensex rebounded 879.09 points (+1.23%) to 72,472.33 and the Nifty jumped 288.65 points (+1.30%) to 22,520.45, snapping a two-day slide and regaining nearly 80% of Thursday's fall. IT led after TCS's Q2 beat (net profit +15% YoY to Rs 13,884 crore), the Nifty IT index surging 3.02%, while cooling crude (Brent ~$103), softer bond yields and a firmer rupee helped. Every Nifty sector closed green barring Oil & Gas — FMCG +2.20%, PSU Bank +1.63%, Auto +1.42%, Financials +1.36%. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports led; BSE (-1.43%), Reliance (-0.65%) and JSW Steel (-0.61%) lagged. NSE breadth was 2,524 advances vs 1,864 declines, India VIX fell 6.07% to 14.35, and the rebound ended the Nifty's eight-week losing streak." },
    { date: "2026-10-12", label: "Mon 12 Oct", niftyClose: 22363.35, niftyChangePct: -0.70, sensexChangePct: -0.76, note: "The benchmarks gave up early gains and closed lower, the Sensex down 547.65 points to 71,924.68 and the Nifty down 157.10 points to 22,363.35, after opening higher on easing crude. Selling was broad — ITC, Tech Mahindra and Avenue Supermarts (-4.32%) were among the biggest drags, with Apollo Hospitals (-3.15%) the sharpest Nifty faller, while Dr Reddy's (+2.71%) and Bajaj Auto (+2.62%) led the gainers. Interestingly the broader market held up better than the benchmarks: small caps rose about 1.4% and mid caps about 0.1%. India VIX rose 6.07% to 15.25, the rupee firmed about 1% to 95.77 after the RBI's forex measures, and FIIs sold a net Rs 1,708 crore even as DIIs bought Rs 3,045 crore. September CPI came in hotter than expected at 5.54%." },
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." },
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." },
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." }
  ],

  sectors: [
    { name: "Nifty Private Bank", changePct: 1.89, note: "The day's top sector, up 1.89% to 27,679.30, as ICICI Bank (+3.80%) and HDFC Bank (+2.51%) rallied on the rotation into heavyweight financials ahead of their quarterly earnings over the weekend, even as Yes Bank (-14.53%) and RBL Bank (-3.07%) slid" },
    { name: "Nifty Services Sector", changePct: 1.83, note: "Services added 1.83% to 29,995.85, helped by the strength in technology and telecom names such as Bharti Airtel (+3.31%)" },
    { name: "Nifty IT", changePct: 1.82, note: "IT led the sector board, up 1.82% to 30,719.80 and taking its three-session rise to about 8.4%, as Tech Mahindra (+4.75%), HCLTech (+2.58%), TCS (+2.28%) and Infosys (+2.03%) extended the rally after strong TCS and HCLTech results and ahead of Wipro's and Tech Mahindra's own prints" },
    { name: "Nifty Auto", changePct: 1.67, note: "Autos rebounded 1.67% to 25,576.40 as Maruti Suzuki (+2.01%) and Mahindra & Mahindra (+1.89%) recovered after Wednesday's fall" },
    { name: "Nifty Financial Services", changePct: 1.60, note: "Financial services gained 1.60%, riding the same rotation into banks and non-bank financials that lifted the private-bank index" },
    { name: "Nifty Oil & Gas", changePct: 1.41, note: "Oil & gas rose 1.41% even as crude fell, with Hindustan Petroleum (+5.27%) among the Nifty 500's biggest gainers" },
    { name: "Nifty Infrastructure", changePct: 1.23, note: "Infrastructure added about 1.2% to 8,685.90, with capital-goods and engineering names such as RITES (+6.73%) drawing strong buying" },
    { name: "Nifty Bank", changePct: 0.89, note: "The Bank Nifty rose 0.89% to 55,810.50, a more modest gain than private banks as state-run lenders lagged and Canara Bank fell about 5% after its Q2 results" },
    { name: "Nifty Realty", changePct: 0.72, note: "Realty edged up 0.72% to 828.70, a muted finish for a rate-sensitive sector on a risk-on day" },
    { name: "Nifty Metal", changePct: 0.20, note: "Metal was barely changed, up about 0.2%, as the day's gains bypassed the cyclicals" },
    { name: "Nifty FMCG", changePct: -1.06, note: "The day's biggest sectoral casualty among defensives, down 1.06% to 44,791.65, as Nestle India crashed 7.76% after its September-quarter results and dragged the index lower" },
    { name: "Nifty Media", changePct: -1.27, note: "Media fell about 1.3%, one of the few sectors to sit out the large-cap rally" },
    { name: "Nifty PSU Bank", changePct: -1.55, note: "The day's worst sector, down 1.55% to 8,041.20, as public-sector lenders were sold into strength — Canara Bank fell about 5% post-results and Punjab National Bank slid over 2%" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily gainers and losers for Thursday, 15 Oct 2026 (TradingJumbo's Nifty 500 movers list, Dhan's and Kotak Neo's Nifty 500 gainer screens, Flash Finance's 15:50 IST top-500 list, CNBC-TV18's Nifty 500 movers note, Capital Market's 'A'-group gainers and xflot's 15 Oct closing tape for the NSE names; readings vary between feeds — e.g. Gallantt Ispat's gain is quoted between roughly 8.9% and 11.3%, and Tata Communications' between about 5.5% and 6.3%, depending on the source and the time of capture)",
    gainers: [
      { name: "Gallantt Ispat", changePct: 10.65, cap: "Smallcap", note: "The day's runaway Nifty 500 gainer, up about 10.7%, reversing two days of decline on heavy volumes (roughly 2.8 crore shares traded against a one-month average near 0.5 crore); sources quote the day's gain between roughly 8.9% and 11.3%" },
      { name: "RITES", changePct: 6.73, cap: "Smallcap", note: "Jumped about 6.7% to Rs 214.27 as the engineering and consultancy PSU drew strong buying after a weak run (the stock was down over 14% in the past year)" },
      { name: "Tata Communications", changePct: 6.32, cap: "Midcap", note: "Surged about 6.3% to Rs 1,763.70 after reporting a consolidated net profit of Rs 341 crore for the July-September quarter, up 86% year on year from Rs 183 crore, making it the top gainer on the Nifty Midcap 100" },
      { name: "Hindustan Petroleum", changePct: 5.27, cap: "Largecap", note: "Rose about 5.3% to Rs 348.50 as oil-marketing names rallied with the fall in crude and the broader risk-on mood" },
      { name: "HDFC Asset Management", changePct: 5.14, cap: "Largecap", note: "Added about 5.1% to Rs 2,415.00, recovering some of the ground lost after its Q2 profit fell 10% to Rs 750 crore" }
    ],
    losers: [
      { name: "Yes Bank", changePct: -14.53, cap: "Midcap", note: "The day's worst Nifty 500 performer, crashing about 14.5% to Rs 18.12 on huge volumes (about 66.8 crore shares) amid a sharp re-rating of the lender" },
      { name: "Nestle India", changePct: -7.76, cap: "Largecap", note: "The weakest Nifty 50 name, tumbling 7.76% to Rs 1,275.80 after its September-quarter results disappointed and dragged the FMCG index down with it" },
      { name: "IDBI Bank", changePct: -7.68, cap: "Smallcap", note: "Fell about 7.7% to Rs 83.45 as investors reacted to the Union Cabinet approving the strategic sale of a 60.72% stake in the lender to Canada-based Fairfax Financial at a discount" },
      { name: "Mangalore Refinery & Petrochemicals", changePct: -7.07, cap: "Smallcap", note: "Slipped about 7.1% as the refining stock gave back part of a sharp recent run" },
      { name: "Chennai Petroleum", changePct: -5.92, cap: "Midcap", note: "Fell about 5.9% on profit-booking after a strong year in which the stock had risen more than 70%" }
    ],
    sensexWinners: ["Tech Mahindra", "ICICI Bank", "Reliance Industries"],
    sensexLaggards: ["Nestle India", "Adani Enterprises", "Trent"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings: HDFC Bank and ICICI Bank report over the weekend",
      detail: "Thursday's rally ran ahead of the results season's biggest names. Nestle India, Wipro and Tech Mahindra reported on 15 October; HDFC Bank, ICICI Bank and Jio Financial Services follow over the weekend, with Bajaj Housing Finance and others through 17 October. Deal wins, margins and FY27 growth guidance — especially any pickup in AI-led spending by overseas banking and retail clients — will decide whether the IT and financials rally becomes a durable trend or a one-day pop."
    },
    {
      title: "Dussehra holiday: markets shut on Tuesday, 20 October",
      detail: "The NSE and BSE will be closed on Tuesday, 20 October for Dussehra — the next trading holiday on the 2026 calendar. With a long weekend approaching, volumes may thin and positions may be trimmed. Diwali-Balipratipada (10 November), Guru Nanak Jayanti (24 November) and Christmas (25 December) are the other closures left in 2026, and Muhurat trading will be held on Sunday, 8 November."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent fell over 2% to about $103.9 a barrel on Thursday, easing the import-bill and inflation worries that had weighed on the market earlier in the week, while the rupee rose 12 paise to 95.05, a fifth straight session of gains. Watch whether crude keeps retreating and whether the rupee's stabilisation holds — both feed directly into the outlook for cyclicals, autos and oil-marketing companies."
    },
    {
      title: "Foreign outflows versus the domestic cushion",
      detail: "Thursday's rally was built partly on hopes that India could regain favour with foreign investors after the global AI-led sell-off. FPIs have been net sellers for weeks, though, and the day's advance came without confirmed foreign buying. A durable rally needs foreign selling to slow; a rebound carried only by domestic buying and short-covering can fade. Watch the daily FII/DII numbers."
    },
    {
      title: "Can the rally broaden beyond large caps?",
      detail: "The Sensex's 2.11% jump came with the Nifty Smallcap 250 down about 1.15% and just 980 NSE stocks advancing against 1,912 declining. The Nifty 50 closed at 22,997.35, near resistance at 23,050-23,150; a decisive close above that band would open the way higher, while 22,750-22,900 is near-term support. For the move to read as a genuine trend reversal rather than a narrow large-cap bounce, mid and small caps need to start participating."
    }
  ],

  reads: [
    {
      title: "Stock Market Close: Sensex surges 1,534 pts, Nifty at 22,997 as crude falls 2%; IT, auto shine",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-october-15-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-q2-results-ipo-today-126101500089_1.html"
    },
    {
      title: "Sensex closes 1,500 points higher, Nifty nears 23,000; RIL up 4%",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/market-closing-sensex-closes-1500-points-higher-nifty-nears-23000-ril-up-4-3017947-2026-10-15"
    },
    {
      title: "Stock Market Closing Today, Oct 15: Sensex zooms 1534 pts, Nifty ends near 23,000; factors behind Thursday's rally",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/stock-market-closing-today-oct-15-sensex-zooms-1534-pts-nifty-near-23000-factors-behind-thursdays-rally-check-top-gainers-and-losers-article-156345174"
    },
    {
      title: "Stock Market Highlights, Oct 15: Sensex jumps over 1,500 points, Nifty nears 23,000; rupee extends gains",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-stock-market-highlights-15-october-2026/article71583334.ece"
    },
    {
      title: "Top gainers and losers, Oct 15: Tech Mahindra jumps 4.7%, RIL gains 3%; Nestle India tanks 8%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-15-tech-mahindra-jumps-4-7-ril-gains-3-nestle-india-tanks-8-check-full-list/article-201925/"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Working Capital",
    category: "Liquidity / Balance Sheet",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Working Capital = Total current assets − Total current liabilities",
    formulaNote: "Working capital is the rupee cushion a company holds to run its day-to-day operations: the current assets it expects to turn into cash within a year (cash, current investments, trade receivables, unbilled revenue and other current assets) minus the current liabilities it must settle within a year (trade payables, unearned revenue, employee-benefit obligations and other current liabilities). It is the current ratio's sibling — where the current ratio expresses the same two figures as a multiple (about 1.98 for Infosys), working capital expresses the gap in absolute rupees. A positive, growing number means the business funds itself comfortably and has spare cash for dividends, buybacks, acquisitions and downturns; a negative number means short-term obligations outrun short-term resources and the company may need to borrow or raise money. For an asset-light, debt-free software-services firm such as Infosys, working capital is large and structurally positive, because it collects from clients quickly, carries no inventory and owes little to lenders.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets as at March 31, 2026", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 — Total current assets as at March 31, 2026 = Rs 1,03,489 crore (Consolidated Balance Sheet, p. 317). This is the sum of cash and cash equivalents (Rs 22,201 crore), current investments (Rs 12,950 crore), trade receivables (Rs 35,234 crore), unbilled revenue (Rs 15,483 crore) and other current assets (Rs 17,621 crore). Step 2 — Total current liabilities as at March 31, 2026 = Rs 52,322 crore (Consolidated Balance Sheet, p. 317), the sum of trade payables (Rs 4,744 crore), unearned revenue (Rs 11,838 crore), employee-benefit obligations (Rs 3,524 crore) and other current liabilities and provisions (Rs 32,216 crore). Step 3 — Working capital = 1,03,489 − 52,322 = 51,167. So Infosys' working capital at the end of FY26 was about Rs 51,167 crore.",
    result: "Rs 51,167 crore",
    meaning: "Infosys ended FY26 with roughly Rs 51,167 crore of working capital — the surplus of short-term assets over short-term obligations. Three things stand out. First, the cushion is funded almost entirely by cash and investments: cash and equivalents (Rs 22,201 crore) plus current investments (Rs 12,950 crore) alone come to Rs 35,151 crore, about 69% of the entire current-liability figure. Second, the next largest current-asset blocks are trade receivables and unbilled revenue (together Rs 50,717 crore) — money clients owe for work done — which is high-quality for a services firm but still depends on timely collection. Third, the biggest current liability is not borrowing (Infosys carries essentially none) but 'other current liabilities and provisions' and unearned revenue, i.e. money owed for services not yet delivered, a normal non-cash obligation. A working-capital pile of this size tells you Infosys can fund its operations, dividends, buybacks and acquisitions from its own balance sheet without touching lenders, and can absorb a downturn in client spending without stress.",
    crossCheck: "Data platforms such as Screener.in and Trendlyne derive working capital from the same balance sheet, and publish Infosys' current assets and current liabilities at levels consistent with the Rs 51,167 crore worked through here (their current ratio of roughly 1.9-2.0 implies a similar gap). The small convention gap comes from classification: the reported IFRS balance sheet groups some items under 'other current assets' and 'other current liabilities and provisions' that Ind-AS presentations — and therefore some data providers — may split differently, and a few platforms net off only cash and equivalents (excluding current investments), which shrinks the figure. Whichever convention is used, Infosys' working capital is strongly positive.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
