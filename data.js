const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 16 October 2026, 5:30 PM IST — Daily Wrap",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 16 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23146.15,
      dayChange: 148.80,
      dayChangePct: 0.65,
      weekChangePct: 2.78, // week-to-date vs prior Friday, 9 Oct close of 22,520.45
      spark: [22363.35, 22721.95, 22622.70, 22997.35, 23146.15], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The benchmark rose for a second straight session, adding 148.80 points (+0.65%) to close at 23,146.15 and holding above the 23,100 mark, as IT stocks led again. The Nifty IT index climbed about 3.9% — its fourth consecutive session of gains — after Tech Mahindra's strong Q2 and a 1:1 bonus recommendation; Tech Mahindra (+~8%), TCS (+~4.6%) and Infosys (+~4.5%) were the top gainers, along with Bharti Airtel and M&M. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) led the losers. Breadth stayed positive — about 2,221 NSE stocks rose against 1,791 that fell — though the broader market lagged. India VIX closed near 14.0, roughly flat."
    },
    {
      name: "Nifty Next 50",
      close: 68988.60,
      dayChange: 317.00,
      dayChangePct: 0.46,
      weekChangePct: 1.21, // week-to-date vs prior Friday, 9 Oct close of 68,166.70
      spark: [68351.70, 68927.95, 68999.30, 68671.60, 68988.60], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The 'next rung' of large caps joined the advance, rising about 0.46% to 68,988.60, though it again lagged the headline indices. Feeds differ on the exact close and on Thursday's base: Yahoo Finance puts Friday's close at 68,988.60 (up from 68,671.60), Kotak Neo quotes 69,019.00 (+0.51%) and 5paisa 68,974.50 (+0.44%); all three agree the index ended modestly higher on a day the Sensex gained 0.56%."
    },
    {
      name: "Nifty Midcap 150",
      close: 21724.50,
      dayChange: -31.85,
      dayChangePct: -0.15,
      weekChangePct: 0.56, // week-to-date vs prior Friday, 9 Oct close of 21,603.25
      spark: [21620.50, 21829.40, 21820.40, 21756.35, 21724.50], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "Midcaps slipped about 0.15% to 21,724.50 (open 21,782.85, high 21,785.45, low 21,609.90), sitting out a rally that stayed concentrated in large-cap IT and heavyweights — the second session in a row that the broader market failed to keep pace. Flash Finance puts the close at 21,724.50 (down 31.85 points), while Screener.in quoted the index around 21,706 (-0.23%) later in the session; both agree it was a marginal down day."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17637.65,
      dayChange: 10.60,
      dayChangePct: 0.06,
      weekChangePct: 0.36, // week-to-date vs prior Friday, 9 Oct close of 17,574.85
      spark: [17772.80, 17833.45, 17832.35, 17627.05, 17637.65], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "Small caps were essentially flat, the Nifty Smallcap 250 edging up about 0.06% to 17,637.65 (open 17,653.60, high 17,692.60, low 17,557.30) with 133 of its constituents up against 116 down — a quiet, mixed session that again diverged from the large-cap advance. Screener.in quoted the index a touch higher at about 17,653 (+0.15%); the two readings bracket a flat close."
    },
    {
      name: "BSE SME Index",
      close: 121957.58,
      dayChange: -228.33,
      dayChangePct: -0.19,
      weekChangePct: 0.22, // week-to-date vs prior Friday, 9 Oct close of 1,21,686.21
      spark: [122178.64, 122287.90, 123211.97, 122185.91, 121957.58], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The S&P BSE SME IPO index eased about 0.19% to roughly 1,21,958, cooling from its 14 October peak as the SME platform drifted lower with small caps. It opened at 1,22,127.86 and traded between 1,22,304.74 and 1,21,691.88. (Note: Thursday's SME close is 1,22,185.91 — the figure in the previous edition of this page — so the two-day move is being measured against that base.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex adds 414 points to 74,729 and Nifty holds above 23,100 as IT extends its rally for a fourth day — Tech Mahindra surges ~8% on a 1:1 bonus — but mid and small caps stay flat",
    summary: "Indian equities rose for a second straight session on Friday, with the benchmarks again carried by technology. The Sensex gained 413.66 points, or 0.56%, to 74,729.27 and the Nifty 50 added 148.80 points, or 0.65%, to 23,146.15, holding comfortably above the 23,100 mark and closing near the day's high. The Nifty IT index climbed about 3.9%, its fourth consecutive session of gains and a weekly gain of roughly 11.5% — its best week in nearly 18 years — after Tech Mahindra reported a strong September quarter and its board recommended a 1:1 bonus issue. Tech Mahindra was the star, up about 8% (its best single-day move in years); TCS rose about 4.6% and Infosys about 4.5%, with Wipro, KPIT Technologies and Tata Elxsi also up sharply. Bharti Airtel and Mahindra & Mahindra were the other notable large-cap gainers. Sentiment was helped early on by a regulator's reversal of its earlier plan to settle expiring derivatives contracts via a closing auction session, and by the continued fall in US Treasury yields. The rally, though, stayed narrow. FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped, and the broader market barely moved: the Nifty Midcap 150 fell about 0.15% and the Nifty Smallcap 250 was flat (+0.06%), the second session in a row that mid and small caps lagged. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth on the NSE stayed positive, with about 2,221 stocks advancing against 1,791 declining. In the Nifty 500, HBL Engineering (+17.02%), Tech Mahindra (+8.11%), Wipro (+6.25%), Authum Investment & Infrastructure (+6.11%) and KPIT Technologies (+5.18%) led, while R R Kabel (-7.92%), CCL Products (-7.20%), Ipca Laboratories (-5.17%), APAR Industries (-5.01%) and Sterling and Wilson Renewable Energy (-4.95%) fell hardest. India VIX closed near 14.0, roughly flat, and the rupee opened stronger at 94.72 against Thursday's close of 95.05, with Brent still elevated around $106 a barrel. The message from Friday: the IT-led recovery is real and has momentum, but it still has not widened into the broader market.",
    stats: ["Nifty +0.65%", "Sensex +0.56%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // trading day — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-12", label: "Mon 12 Oct", niftyClose: 22363.35, niftyChangePct: -0.70, sensexChangePct: -0.76, note: "The benchmarks gave up early gains and closed lower, the Sensex down 547.65 points to 71,924.68 and the Nifty down 157.10 points to 22,363.35, after opening higher on easing crude. Selling was broad — ITC, Tech Mahindra and Avenue Supermarts (-4.32%) were among the biggest drags, with Apollo Hospitals (-3.15%) the sharpest Nifty faller, while Dr Reddy's (+2.71%) and Bajaj Auto (+2.62%) led the gainers. Interestingly the broader market held up better than the benchmarks: small caps rose about 1.4% and mid caps about 0.1%. India VIX rose 6.07% to 15.25, the rupee firmed about 1% to 95.77 after the RBI's forex measures, and FIIs sold a net Rs 1,708 crore even as DIIs bought Rs 3,045 crore. September CPI came in hotter than expected at 5.54%." },
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." },
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." },
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." },
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 3.87, note: "IT led the sector board for a fourth straight session, up 3.87% to about 31,909.80 and taking its weekly gain to roughly 11.5% — its best week in nearly 18 years — as Tech Mahindra jumped about 8% on a strong Q2 and a 1:1 bonus, with TCS (+~4.6%), Infosys (+~4.5%), Wipro and KPIT Technologies also surging" },
    { name: "Nifty Media", changePct: 2.05, note: "Media added 2.05% to 1,650.30, one of the day's best-performing pockets, helped by strength in select broadcasting and entertainment names" },
    { name: "Nifty Services Sector", changePct: 1.45, note: "Services rose 1.45% to 30,429.55, riding the technology and telecom names — Bharti Airtel was among the top Nifty gainers" },
    { name: "Nifty Metal", changePct: 0.84, note: "Metal gained 0.84% to 12,119.80, with Hindalco and JSW Steel among the stronger large-cap names" },
    { name: "Nifty PSU Bank", changePct: 0.71, note: "Public-sector banks rebounded 0.71% to 8,098.30, recovering part of Thursday's 1.55% fall" },
    { name: "Nifty Auto", changePct: 0.70, note: "Autos added 0.70% to 25,755.25, helped by Mahindra & Mahindra (+~2.1%)" },
    { name: "Nifty Infrastructure", changePct: 0.33, note: "Infrastructure edged up 0.33% to 8,714.15 on mild buying in engineering and capital-goods names" },
    { name: "Nifty Financial Services", changePct: -0.06, note: "Financial services were little changed, down 0.06%, as the day's money went into technology rather than lenders" },
    { name: "Nifty Bank", changePct: -0.08, note: "The Bank Nifty slipped 0.08% to 55,764.65, a muted session for lenders (feeds quote the close between roughly 55,690 and 55,844 and the change between -0.21% and +0.13%, i.e. essentially flat)" },
    { name: "Nifty Private Bank", changePct: -0.12, note: "Private banks eased 0.12% to 27,646.05, giving back a little of Thursday's sharp 1.89% gain" },
    { name: "Nifty Pharma", changePct: -0.15, note: "Pharma dipped 0.15% to 25,780.35, a quiet day for defensives" },
    { name: "Nifty Realty", changePct: -0.42, note: "Realty fell 0.42% to 825.25, one of the rate-sensitive sectors to sit out the rally" },
    { name: "Nifty Oil & Gas", changePct: -0.47, note: "Oil & gas slipped 0.47% to 10,554.95 even as crude stayed elevated near $106 a barrel" },
    { name: "Nifty FMCG", changePct: -0.57, note: "The day's weakest defensive, FMCG fell 0.57% to 44,534.65 as ITC (-~1.0%) and Hindustan Unilever (-~1.0%) were among the Sensex laggards" },
    { name: "Nifty Capital Markets", changePct: -1.21, note: "The day's worst sector, down 1.21% to 5,234.55, as capital-market plays such as Angel One (-~4.3%) and BSE Ltd (-1.9%) were sold off" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily gainers and losers for Friday, 16 Oct 2026 (TradingJumbo's Nifty 500 movers screen, captured 3:06 pm IST; Moneycontrol's NIFTY 500 top-gainers list; ET Money's and Quantsapp's NSE gainers/losers lists; Capital Market's 'A'-group losers note at 14:45 IST; CNBC-TV18's Nifty 500 note; and Flash Finance's 15:50 IST top-500 readings; because the TradingJumbo screen was captured about 25 minutes before the close, readings vary between feeds — e.g. R R Kabel's fall is quoted between roughly -7.1% and -8.3%, and Ipca Laboratories' between about -4.2% and -5.2%, depending on the source and the time of capture)",
    gainers: [
      { name: "HBL Engineering", changePct: 17.02, cap: "Smallcap", note: "The day's runaway Nifty 500 gainer, up about 17% to Rs 831.40 on heavy volumes (about 3.66 crore shares); Moneycontrol's morning screen had it up about 13% and it accelerated through the session" },
      { name: "Tech Mahindra", changePct: 8.11, cap: "Largecap", note: "Surged about 8% to Rs 1,783.80 after its September-quarter results beat on dollar revenue and deal wins and the board recommended a 1:1 bonus issue and a Rs 15 dividend; it was the top Sensex and Nifty 50 gainer (feeds quote the day's gain between about 7.4% and 8.5%)" },
      { name: "Wipro", changePct: 6.25, cap: "Largecap", note: "Rose about 6.25% to Rs 184.93, extending the IT rally ahead of and around its own quarterly print" },
      { name: "Authum Investment & Infrastructure", changePct: 6.11, cap: "Smallcap", note: "Climbed about 6.1% to Rs 574.40 on relatively light volumes (about 4.9 lakh shares), a sharp move in a non-index mid/small-cap financial" },
      { name: "KPIT Technologies", changePct: 5.18, cap: "Midcap", note: "Added about 5.2% to Rs 553.25, one of the strongest auto-tech names on a day when IT and technology services led" }
    ],
    losers: [
      { name: "R R Kabel", changePct: -7.92, cap: "Midcap", note: "The day's worst Nifty 500 performer, down about 7.9% to Rs 2,397.80 on heavy volumes; other feeds quote the fall between about -7.1% and -8.3% depending on the capture time" },
      { name: "CCL Products (India)", changePct: -7.20, cap: "Smallcap", note: "Tumbled about 7.2% to Rs 1,007.30 after its September-quarter results — despite net profit up 29% YoY — marking its biggest single-day fall since 2020" },
      { name: "Ipca Laboratories", changePct: -5.17, cap: "Midcap", note: "Fell about 5.2% to Rs 1,814.10; ET Money quoted a smaller fall of about -4.2%, so treat the magnitude as approximate" },
      { name: "APAR Industries", changePct: -5.01, cap: "Midcap", note: "Slipped about 5% to Rs 16,066.00, giving back part of a strong recent run in the cables and speciality-fluids maker" },
      { name: "Sterling and Wilson Renewable Energy", changePct: -4.95, cap: "Smallcap", note: "Fell about 4.95% to Rs 166.30, among the weakest small caps on the day" }
    ],
    sensexWinners: ["Tech Mahindra", "TCS", "Infosys"],
    sensexLaggards: ["IndiGo (InterGlobe Aviation)", "Reliance Industries", "ITC"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings: the IT prints are in, the lenders are next",
      detail: "Tech Mahindra, Wipro, Infosys and TCS have now reported, and the IT index's ~11.5% weekly surge shows how much the market has paid for strong numbers and AI-led deal wins. The baton now passes to banks and financials, where HDFC Bank, ICICI Bank and others report in the coming sessions. Deal wins, margins and FY27 growth guidance — especially any pickup in AI-led spending by overseas banking and retail clients — will decide whether the IT and financials rally becomes a durable trend or a one-day pop."
    },
    {
      title: "Dussehra holiday: markets shut on Tuesday, 20 October",
      detail: "The NSE and BSE will be closed on Tuesday, 20 October for Dussehra — the next trading holiday on the 2026 calendar. With a long weekend approaching, volumes may thin and positions may be trimmed. Diwali-Balipratipada (10 November), Guru Nanak Jayanti (24 November) and Christmas (25 December) are the other closures left in 2026, and Muhurat trading will be held on Sunday, 8 November."
    },
    {
      title: "Can the IT-led rally broaden beyond large caps?",
      detail: "For a second session the Sensex and Nifty advanced while the Nifty Midcap 150 fell about 0.15% and the Nifty Smallcap 250 was flat. The Nifty 50 closed at 23,146.15, just above the 23,050-23,150 resistance band; a decisive close above it would open the way higher, with 22,900-23,000 as near-term support. For the move to read as a genuine trend reversal rather than a narrow IT-led bounce, mid and small caps need to start participating — watch whether the broader indices follow next week."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent stayed elevated around $106 a barrel on Friday amid supply worries, while the rupee opened stronger at 94.72 against Thursday's close of 95.05 — a sixth straight session of gains — helped by the RBI's measures. Watch whether crude retreats and whether the rupee's stabilisation holds: both feed directly into the outlook for cyclicals, autos, oil-marketing companies and the import bill."
    },
    {
      title: "Foreign outflows versus the domestic cushion",
      detail: "Friday's advance came again without confirmed foreign buying, and FPIs have been net sellers for weeks (they sold a net Rs 5,285 crore on Thursday, with DIIs buying Rs 3,319 crore). A durable rally needs foreign selling to slow; a rebound carried only by domestic buying and short-covering can fade. Watch the daily FII/DII numbers and whether the global AI-led sell-off abates."
    }
  ],

  reads: [
    {
      title: "Stock Market Close: Sensex gains for 2nd day, rises 414 pts, Nifty at 23,146; IT index zooms 4%",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-october-16-nse-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-q2-results-ipo-today-126101600083_1.html"
    },
    {
      title: "Stock Market Highlights, Oct 16: Sensex gains 413 pts, Nifty ends at 23,146 led by IT stocks",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-16-october-2026/article71587755.ece"
    },
    {
      title: "Closing Bell: Nifty above 23,100, Sensex gains 413 pts led by IT, media and metal stocks",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-16-10-2026-alpha-liveblog-14053420.html"
    },
    {
      title: "Nifty 500: Karur Vysya hits record high, CCL Products fall 7% on Q2 results; Check others",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty-500-share-price-karur-vysya-bank-tech-mahindra-ccl-products-persistent-systems-lt-finance-q2-results-20013219.htm"
    },
    {
      title: "Closing Bell: Sensex rises 414 points, Nifty gains 149 points as IT stocks rally; Tech Mahindra jumps nearly 8%",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-sensex-rises-414-points-nifty-gains-149-points-as-it-stocks-rally-tech-mahindra-jumps-nearly-8-404073"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Debt-to-Equity",
    category: "Solvency / Leverage",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Debt-to-Equity = Total debt ÷ Total equity",
    formulaNote: "Debt-to-equity measures how much a company is financed by borrowing versus by its owners' money. 'Debt' means interest-bearing obligations — term loans, bonds, working-capital borrowings and, under IFRS, lease liabilities — and 'equity' is the shareholders' stake (share capital plus reserves, plus any non-controlling interests). A ratio below 1 means the owners fund more of the business than the lenders; a ratio above 1 means lenders do. The lower the number, the less the company depends on debt, the smaller its fixed interest bill, and the better it can weather a downturn. For an asset-light, cash-rich software-services firm such as Infosys, which has no borrowings at all, the ratio is tiny — the only 'debt' on the books is lease liabilities for its offices, so debt-to-equity here is really a test of how close the company is to being financed entirely by its own money.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Non-current lease liabilities as at March 31, 2026", value: "Rs 6,016 crore", page: "p. 317" },
      { label: "Current lease liabilities as at March 31, 2026", value: "Rs 3,160 crore", page: "p. 317" },
      { label: "Total equity as at March 31, 2026 (equity attributable to owners Rs 92,852 crore + non-controlling interests Rs 445 crore)", value: "Rs 93,297 crore", page: "p. 317" },
      { label: "Borrowings (term loans, bonds, working-capital debt) as at March 31, 2026", value: "Nil — Infosys carries no borrowings", page: "p. 317" }
    ],
    working: "Step 1 — Identify total debt. The Consolidated Balance Sheet (p. 317) shows no borrowings line at all: Infosys funds itself entirely from its own cash. The only interest-bearing obligation is lease liabilities, which appear twice — Rs 6,016 crore under non-current liabilities and Rs 3,160 crore under current liabilities (both p. 317). Total debt = 6,016 + 3,160 = 9,176. Step 2 — Identify total equity. The same balance sheet (p. 317) shows equity attributable to owners of the Company of Rs 92,852 crore plus non-controlling interests of Rs 445 crore, for total equity of Rs 93,297 crore. Step 3 — Debt-to-Equity = 9,176 ÷ 93,297 = 0.098. So Infosys' debt-to-equity at the end of FY26 was about 0.10 — roughly 10 paise of debt for every rupee of owners' money.",
    result: "0.10 (about 10%)",
    meaning: "Infosys ended FY26 almost entirely financed by its own money: about 10 paise of debt for every rupee of equity. Three things stand out. First, the 'debt' is not borrowing at all — Infosys carries no term loans, bonds or working-capital debt, so the entire Rs 9,176 crore is lease liabilities (the accounting value of its office and facility leases), which is a far softer obligation than a bank loan. Second, the denominator is large and high-quality: Rs 93,297 crore of equity built from years of retained profit, even after the company returned Rs 18,000 crore to shareholders through a buyback and paid Rs 48 a share in dividends during FY26. Third, a ratio this low means a tiny fixed charge: Infosys' finance cost for the year was only Rs 416 crore against Rs 36,254 crore of operating profit, so its interest cover is enormous. In plain terms, the company can fund its operations, dividends, buybacks and acquisitions from its own balance sheet, can absorb a downturn in client spending without reaching for lenders, and would be among the last large caps to be troubled by a rise in interest rates.",
    crossCheck: "Data platforms such as Screener.in and Trendlyne derive debt-to-equity from the same balance sheet. Screener.in shows Infosys' debt-to-equity at roughly 0.00 because it counts only borrowings — and Infosys has none — so it effectively excludes IFRS-16 lease liabilities; Trendlyne, which does fold lease liabilities into 'debt', lands close to the ~0.10 worked through here. That is the convention gap: whether leases are treated as debt. The reported IFRS consolidated balance sheet (p. 317) is unambiguous — no borrowings, only lease liabilities — so the honest range for Infosys' debt-to-equity in FY26 is 0.00 (borrowings only) to about 0.10 (including leases). Either way, Infosys is effectively debt-free.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
