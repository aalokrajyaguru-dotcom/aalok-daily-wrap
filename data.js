const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 17 October 2026, 5:30 PM IST — Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 16 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 23146.15,
      dayChange: 148.80,
      dayChangePct: 0.65,
      weekChangePct: 2.78, // week vs prior Friday, 9 Oct close of 22,520.45
      spark: [22363.35, 22721.95, 22622.70, 22997.35, 23146.15], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The benchmark rose 625.70 points, or 2.78%, over the five sessions to 23,146.15 — its second straight weekly gain and its best week since early April — adding 148.80 points (+0.65%) on Friday alone and closing near the day's high. The move was carried almost entirely by technology: the Nifty IT index surged 11.72% for the week, its best in about 18 years. Monday had begun with a 0.70% fall to 22,363.35 as ITC, Tech Mahindra and Avenue Supermarts slid and September CPI came in hot at 5.54%; Tuesday rebounded 1.60% to 22,721.95 on HCLTech's results, Wednesday gave back 0.44%, and Thursday (+1.66%) and Friday (+0.65%) extended the recovery. India VIX eased about 2% over the week to near 14.0."
    },
    {
      name: "Nifty Next 50",
      close: 68988.60,
      dayChange: 317.00,
      dayChangePct: 0.46,
      weekChangePct: 1.21, // week vs prior Friday, 9 Oct close of 68,166.70
      spark: [68351.70, 68927.95, 68999.30, 68671.60, 68988.60], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The 'next rung' of large caps rose about 1.21% over the week to 68,988.60, comfortably positive but well behind the Nifty 50 as the rally stayed concentrated in the IT heavyweights of the headline index. It added 0.46% on Friday. Feeds differ on the exact level: Yahoo Finance and Anand Rathi put Friday's close at 68,988.60 (up from 68,671.60), while one weekly review quoted a much higher level near 73,000 — inconsistent with its own intra-week high — and is best disregarded. All credible feeds agree the index ended the week modestly higher."
    },
    {
      name: "Nifty Midcap 150",
      close: 21724.50,
      dayChange: -31.85,
      dayChangePct: -0.15,
      weekChangePct: 0.56, // week vs prior Friday, 9 Oct close of 21,603.25
      spark: [21620.50, 21829.40, 21820.40, 21756.35, 21724.50], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "Midcaps badly lagged a week the benchmarks will remember, rising only about 0.56% to 21,724.50, and they slipped 0.15% on Friday — sitting out a rally that stayed in large-cap IT. Moneycontrol put the Nifty Midcap 100 up about 0.6% for the week and the Financial Express about 0.58%, so the mid-cap space as a whole was roughly flat-to-marginally-up while the Nifty 50 gained 2.78%. IT names (Tata Elxsi, KPIT, Mphasis, L&T Technology Services) were the exceptions; lenders and consumer names dragged."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17637.65,
      dayChange: 10.60,
      dayChangePct: 0.06,
      weekChangePct: 0.36, // week vs prior Friday, 9 Oct close of 17,574.85
      spark: [17772.80, 17833.45, 17832.35, 17627.05, 17637.65], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "Small caps were the week's laggards, edging up about 0.36% to 17,637.65 and flat on Friday (+0.06%). The Nifty Smallcap 100 ended the week marginally lower (Reuters put broader small caps down about 0.1%; the Financial Express about -0.12%), with the AI-driven rally skipping the segment — indeed the Smallcap 250 fell about 1.15% on Thursday alone even as the Nifty jumped 1.66%. IT small caps (Tata Elxsi, KPIT, Zensar, Birlasoft) were the standouts; Anant Raj, RBL Bank, Physicswallah, Sai Life Sciences, Reliance Power and Neuland Laboratories fell 5-10%."
    },
    {
      name: "BSE SME Index",
      close: 121957.58,
      dayChange: -228.33,
      dayChangePct: -0.19,
      weekChangePct: 0.22, // week vs prior Friday, 9 Oct close of 1,21,686.21
      spark: [122178.64, 122287.90, 123211.97, 122185.91, 121957.58], // last 5 closes: 12 Oct, 13 Oct, 14 Oct, 15 Oct, 16 Oct
      note: "The S&P BSE SME IPO index closed the week up about 0.22% at 1,21,957.58, having touched a week's peak of 1,23,211.97 on Wednesday before drifting lower in the last two sessions (Friday -0.19%). It opened the week at 1,21,803.68 and traded between a weekly low near 1,21,427 and the Wednesday high. The SME platform moved broadly with small caps — a touch higher over the week, but without the IT-led momentum that drove the main indices. (All five daily closes are per BSE Indices and Anand Rathi.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: null, // weekend — the week's wrap sits in weeklyWrap below

  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "Sensex leaps 2,257 points (+3.11%) and Nifty 626 points (+2.78%) to 23,146 for the best week since April, as the Nifty IT index rockets 11.7% — its best week in 18 years — on blockbuster Q2 earnings, but mid and small caps sit out the rally",
    summary: "Indian equities closed the week ended Friday, 16 October 2026 with their strongest gains in six months, the benchmarks advancing for a second straight week on the back of a historic rally in information-technology shares. The Sensex jumped 2,256.94 points, or 3.11%, to 74,729.27 and the Nifty 50 added 625.70 points, or 2.78%, to 23,146.15 — their best week since the first week of April — while the Nifty IT index soared 11.72% to 31,924.10, its biggest weekly gain in about 18 years (since April 2008). The trigger was a global sell-off in AI-infrastructure stocks, which turned investors towards India's beaten-down software-services names just as Q2 FY27 results from TCS, HCL Technologies, Tech Mahindra and Wipro beat expectations on revenue, margins and AI-led deal wins. Tech Mahindra led the market with an 18.2% weekly gain after a strong quarter and a 1:1 bonus recommendation, followed by TCS (+14.3%), Infosys (+13.5%) and HCL Technologies (+13.4%); a rebound in the rupee (to 94.95 a dollar, up 178 paise on the week, helped by the RBI's dollar window for oil marketing companies and tighter hedging norms) and easing crude added to the mood. The rally, however, was narrow and large-cap led: the Nifty Midcap 150 rose only about 0.56% and the Nifty Smallcap 250 about 0.36%, with the Smallcap 100 ending marginally lower, so the broader market badly lagged the headline indices. On the sector board, IT (+11.7%), media (+6.1%), auto (+3.7%), realty (+2.7%) and defence (+2.3%) led, while FMCG (-0.55%), pharma (-0.69%) and healthcare (-1.08%) were the weakest as Nestle India flagged food-inflation pressure. The week began poorly — the Nifty fell 0.70% on Monday as ITC, Tech Mahindra and Avenue Supermarts slid and September CPI came in hot at 5.54% — before Tuesday's 1.60% rebound (the best day since 12 June) on HCLTech's results; Wednesday gave back 0.44%, and Thursday (+1.66%) and Friday (+0.65%) sealed the recovery. India VIX eased about 2% over the week to near 14.0. Foreign investors were net sellers for an eighth straight week (about Rs 8,991 crore), but domestic buying (about Rs 7,813 crore) and a return of foreign buying on Friday (Rs 1,166 crore) cushioned the market, and BSE-listed market capitalisation rose by more than Rs 7 lakh crore.",
    stats: ["Nifty +2.78%", "Sensex +3.11%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    { date: "2026-10-12", label: "Mon 12 Oct", niftyClose: 22363.35, niftyChangePct: -0.70, sensexChangePct: -0.76, note: "The benchmarks gave up early gains and closed lower, the Sensex down 547.65 points to 71,924.68 and the Nifty down 157.10 points to 22,363.35, after opening higher on easing crude. Selling was broad — ITC, Tech Mahindra and Avenue Supermarts (-4.32%) were among the biggest drags, with Apollo Hospitals (-3.15%) the sharpest Nifty faller, while Dr Reddy's (+2.71%) and Bajaj Auto (+2.62%) led the gainers. Interestingly the broader market held up better than the benchmarks: small caps rose about 1.4% and mid caps about 0.1%. India VIX rose 6.07% to 15.25, the rupee firmed about 1% to 95.77 after the RBI's forex measures, and FIIs sold a net Rs 1,708 crore even as DIIs bought Rs 3,045 crore. September CPI came in hotter than expected at 5.54%." },
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." },
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." },
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." },
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 11.72, note: "The week's runaway leader, up 11.72% to 31,924.10 — its biggest weekly gain in about 18 years, since April 2008. A global sell-off in AI-infrastructure stocks pushed money towards India's software-services names, and Q2 FY27 results from TCS, HCLTech, Tech Mahindra and Wipro beat expectations, with management pointing to growing AI-led revenue. The index has now recovered roughly half of its 2026 losses." },
    { name: "Nifty India Digital", changePct: 6.11, note: "Up 6.11% to 8,670.15, carried along by the technology-led rally and the same AI-revenue optimism that lifted the IT index." },
    { name: "Nifty Media", changePct: 6.11, note: "Added about 6.1% to 1,648.25 — the second-best performing sector — helped by strength in broadcasting and entertainment names, with Media rallying 2.05% on Friday alone." },
    { name: "Nifty Auto", changePct: 3.65, note: "Rose about 3.7% to 25,768.50 as Bajaj Auto rebounded 6.4% from its September-sales slide and festive-season demand hopes supported M&M, Eicher Motors and Hero MotoCorp." },
    { name: "Nifty India Railways PSU", changePct: 3.29, note: "Gained about 3.3% to 2,601.85 on buying in railway capital-goods names." },
    { name: "Nifty Realty", changePct: 2.74, note: "Up about 2.7% to 825.95, one of the rate-sensitive pockets to benefit as crude eased and bond yields steadied." },
    { name: "Nifty India Defence", changePct: 2.26, note: "Advanced about 2.3% to 9,210.60, continuing to draw order-book optimism." },
    { name: "Nifty Cement", changePct: 2.09, note: "Added about 2.1% to 13,596.10, helped by expectations of infrastructure and housing demand." },
    { name: "Nifty Oil & Gas", changePct: 2.04, note: "Rose about 2.0% to 10,556.75 even as crude stayed elevated near $105 a barrel, with oil-marketing names helped by the RBI's dollar window." },
    { name: "Nifty Infrastructure", changePct: 1.76, note: "Edged up about 1.8% to 8,725.60 on mild buying in engineering and capital-goods names." },
    { name: "Nifty Private Bank", changePct: 1.76, note: "Gained about 1.8% to 27,700.55, helped by Thursday's sharp 1.89% move, though lenders largely took a back seat to IT for the week." },
    { name: "Nifty Financial Services", changePct: 1.68, note: "Rose about 1.7% to 25,387.10 as financials followed the market higher into the weekend." },
    { name: "Nifty PSU Bank", changePct: -0.39, note: "Slipped about 0.4% to 8,094.95, one of the few sectors to end the week lower despite a 0.67% rebound on Friday." },
    { name: "Nifty FMCG", changePct: -0.55, note: "Fell about 0.55% to 44,616.15 as Nestle India flagged food and commodity inflation, dragging the defensive pack lower even as the market rallied." },
    { name: "Nifty Pharma", changePct: -0.69, note: "Down about 0.7% to 25,781.65, under pressure through the week as money rotated out of defensives into technology." },
    { name: "Nifty Healthcare", changePct: -1.08, note: "The week's weakest sector, down about 1.1% to 15,683.55, with Max Healthcare and Apollo Hospitals extending their slide." }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 weekly gainers and losers for the week ended Friday, 16 Oct 2026, over the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250). Weekly percentage moves cross-checked across Angel One's Nifty IT weekly review (12-16 Oct), the Navia weekly roundup, CNBC-TV18's and Moneycontrol's weekly wraps, the Financial Express weekly review, MarketsMojo weekly stock notes (RBL Bank, Anant Raj), and Upstox's NSE-based five-session returns; the Nifty IT-index constituents are the source of the big IT gains and the small/mid-cap laggards sit in the Midcap 150 and Smallcap 250 legs of the index. Where feeds round differently (e.g. Tech Mahindra's weekly gain is quoted between +17.5% and +18.22%), the more precise figure is used and the range noted.",
    gainers: [
      { name: "Tata Elxsi", changePct: 23.01, cap: "Smallcap", note: "The Nifty 500's biggest weekly gainer, up 23.01% to Rs 3,850.10 from Rs 3,130.00 a week earlier, as the design-and-engineering arm rode the IT rally — it rose 4.06% on Friday alone (some feeds quote the Friday close at Rs 3,845)" },
      { name: "Tech Mahindra", changePct: 18.22, cap: "Largecap", note: "Surged 18.22% over the week to Rs 1,790.00 after its September-quarter results beat on dollar revenue and deal wins and the board recommended a 1:1 bonus issue and a Rs 15 dividend; the top Nifty 50 and Sensex gainer for the week (feeds quote the weekly gain between +17.5% and +18.22%)" },
      { name: "KPIT Technologies", changePct: 15.87, cap: "Smallcap", note: "Climbed 15.87% to Rs 555.00 from Rs 479.00, one of the strongest auto-tech names as IT and technology services led the week" },
      { name: "Tata Consultancy Services (TCS)", changePct: 14.33, cap: "Largecap", note: "Rose 14.33% to Rs 2,465.00 from Rs 2,156.00, extending a rally that began with its 8 October Q2 results ($9.6 billion of deal wins, AI now over 10% of revenue) — up nearly 19% since that print" },
      { name: "L&T Technology Services", changePct: 13.59, cap: "Midcap", note: "The best mid-cap IT performer, up 13.59% to Rs 3,714.60 from Rs 3,270.10, leading the Nifty Midcap 150 IT pack (Infosys +13.46%, Wipro +13.43% and HCLTech +13.42% followed close behind)" }
    ],
    losers: [
      { name: "Anant Raj", changePct: -10.44, cap: "Smallcap", note: "The Nifty 500's worst weekly performer, down 10.44%, as the real-estate small cap gave back recent gains; MarketsMojo flagged valuation and momentum concerns" },
      { name: "RBL Bank", changePct: -9.43, cap: "Midcap", note: "Fell 9.43% over the week to Rs 378.00 from Rs 417.35, tumbling 7.55% on Tuesday alone amid heavy put-option activity and a valuation downgrade, even as its September quarter was strong" },
      { name: "Nestle India", changePct: -5.06, cap: "Largecap", note: "Down 5.06% for the week despite a 36% jump in quarterly profit, after the FMCG major flagged rising food and commodity inflation; it slid 7.76% on Thursday alone" },
      { name: "Max Healthcare Institute", changePct: -4.28, cap: "Largecap", note: "Fell 4.28% as healthcare and hospitals stayed under pressure through the week" },
      { name: "InterGlobe Aviation (IndiGo)", changePct: -3.02, cap: "Largecap", note: "Slipped 3.02% for the week — the worst Nifty performer on Friday (-1.9%) after the government told the Supreme Court that aviation air-fare rules had been finalised, with crude near $105 adding to cost worries" }
    ],
    sensexWinners: ["Tech Mahindra", "TCS", "Infosys"],
    sensexLaggards: ["IndiGo (InterGlobe Aviation)", "Larsen & Toubro", "ITC"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings: the IT prints are in, the banks are next",
      detail: "TCS, HCL Technologies, Tech Mahindra, Wipro and Infosys have now reported, and the IT index's 11.7% weekly surge shows how much the market paid for strong numbers and AI-led deal wins. The baton now passes to the lenders: HDFC Bank, Axis Bank and ICICI Bank report in the coming sessions. Deal wins, margins, NPA trends and FY27 credit-growth guidance will decide whether the IT-led recovery broadens or fades."
    },
    {
      title: "Dussehra holiday: markets shut on Tuesday, 20 October",
      detail: "The NSE and BSE will be closed on Tuesday, 20 October for Dussehra — the next trading holiday on the 2026 calendar. With a long weekend approaching, volumes may thin and positions may be trimmed. Diwali-Balipratipada (10 November), Guru Nanak Jayanti (24 November) and Christmas (25 December) are the other closures left in 2026, and Muhurat trading will be held on Sunday, 8 November."
    },
    {
      title: "Jio Platforms' record IPO opens on 21 October",
      detail: "Reliance Industries' digital arm Jio Platforms launches its initial public offering on 21 October and closes on 23 October, offering 27 crore fresh shares at Rs 1,065-1,119 each — about Rs 30,213 crore at the top end, which would make it India's largest-ever public issue (Hyundai Motor India's Rs 27,870-crore IPO in 2024 is the current record). Watch how the issue absorbs market liquidity and what it does to the telecom and broader market sentiment."
    },
    {
      title: "RBI MPC minutes and the calibrated-tightening debate",
      detail: "The RBI's monetary policy minutes are due mid-week and should shed light on the 4-2 split over the shift to a calibrated-tightening stance, after the central bank raised the daily CRR-maintenance requirement and opened a special dollar window for oil-marketing companies. September CPI (5.54%) and a record-high WPI print have revived fears of further tightening, so the tone of the minutes matters for bonds, banks and rate-sensitives."
    },
    {
      title: "Can the rally broaden, and does foreign money return?",
      detail: "The week's advance was narrow: the Nifty 50 gained 2.78% while the Nifty Midcap 150 rose only 0.56% and the Smallcap 100 ended marginally lower. For the move to read as a durable trend rather than an IT-led bounce, mid and small caps need to join in. Also watch FII flows — foreign investors were net sellers for an eighth straight week (about Rs 8,991 crore) but turned net buyers on Friday (Rs 1,166 crore); a sustained return, alongside a stable rupee and softer crude, would give the rally a firmer footing."
    }
  ],

  reads: [
    {
      title: "Market wrap: Nifty IT surges 11.5% for biggest weekly gain in nearly 18 years",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/market-wrap-nifty-it-surges-11-5-pc-for-biggest-weekly-gain-in-nearly-18-years-20013672.htm"
    },
    {
      title: "Market posts strongest weekly rally since April as IT stocks lead",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/photos/business/markets/market-posts-strongest-weekly-rally-since-april-as-it-stocks-lead-14054255.html"
    },
    {
      title: "IT lifts Nifty to second weekly gain as global AI rotation fuels tech rally",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/it-lifts-nifty-to-second-weekly-gain-as-global-ai-rotation-fuels-tech-rally/article71592201.ece"
    },
    {
      title: "Indices log best weekly gain in six months",
      source: "The Financial Express",
      url: "https://www.financialexpress.com/market/indices-log-best-weekly-gain-in-six-months-4363441/"
    },
    {
      title: "Barometers rally for week on growth optimism despite inflation concerns",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/the-week-that-was-news/markets-rally-for-week-on-growth-optimism-despite-inflation-concerns/1737351"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every week; the company stays Infosys Ltd.
  ratio: {
    name: "Return on Equity",
    category: "Profitability / Returns",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288, printed p. 317 = PDF p. 287).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = Net profit (attributable to owners) ÷ Average equity (attributable to owners)",
    formulaNote: "Return on equity measures how much profit a company earns on the money its shareholders have left in the business. 'Net profit' is the profit left after every cost, interest and tax — and here we use the share that belongs to the owners of the company (not the slice owed to minority shareholders in subsidiaries). 'Equity' is the shareholders' stake: share capital plus reserves and retained earnings. Because equity changes through the year (profit adds to it, dividends and buybacks take away from it), the fair base is the average of the opening and closing balances rather than either one alone — which is exactly how Infosys itself computes 'return on net worth' in its Management's Discussion and Analysis. A high ROE means the company converts each rupee of owners' money into a lot of profit; a low ROE means the opposite. For a cash-rich, debt-free firm such as Infosys, ROE is driven almost entirely by profitability, not by leverage.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Net profit attributable to owners of the Company for FY26 (year ended March 31, 2026)", value: "Rs 29,440 crore", page: "p. 318" },
      { label: "Equity attributable to owners of the Company as at March 31, 2026", value: "Rs 92,852 crore", page: "p. 317" },
      { label: "Equity attributable to owners of the Company as at March 31, 2025 (opening balance)", value: "Rs 95,818 crore", page: "p. 317" },
      { label: "Non-controlling interests (shown separately; not part of owners' equity used here)", value: "Rs 445 crore at March 31, 2026", page: "p. 317" }
    ],
    working: "Step 1 — Take the net profit that belongs to the owners. The Consolidated Statement of Comprehensive Income (p. 318) reports net profit for FY26 of Rs 29,474 crore in total, of which Rs 29,440 crore is attributable to owners of the Company and the rest to non-controlling interests; we use Rs 29,440 crore. Step 2 — Take the equity base. The Consolidated Balance Sheet (p. 317) shows equity attributable to owners of Rs 92,852 crore at March 31, 2026 and Rs 95,818 crore a year earlier. Average equity = (95,818 + 92,852) ÷ 2 = 94,335. Step 3 — Return on Equity = 29,440 ÷ 94,335 = 0.312. So Infosys earned about 31.2% on its average shareholders' equity in FY26 — roughly 31 paise of profit for every rupee the owners had in the business.",
    result: "31.2%",
    meaning: "Infosys generated a return of about 31.2% on the average money its owners had left in the company in FY26 — a high figure for a large, mature business, and one that stands out because it is achieved without financial engineering. Three things explain it. First, margins are strong: the company earned an operating profit of Rs 36,254 crore on revenue of Rs 1,78,650 crore, a 20.3% operating margin, leaving Rs 29,440 crore of net profit after tax. Second, there is almost no debt to amplify the number: Infosys carries no borrowings at all, so the return comes from the business itself, not from borrowing to shrink the equity base. Third, the equity base is deliberately kept lean by returning cash to shareholders — Infosys completed an Rs 18,000-crore buyback and paid Rs 48 a share in dividends during FY26, which reduces equity and lifts ROE, even as retained profit keeps rebuilding it. In plain terms, a 31% ROE tells an owner that the company is a powerful compounding machine: it earns far more on the capital it keeps than a typical business, and it hands back the surplus rather than hoarding it. The caveat is that a high ROE achieved partly through buybacks and dividends is less 'cheap' than one achieved purely from profit growth — so it is worth reading alongside growth in revenue and profit.",
    crossCheck: "Infosys itself publishes this measure: the FY26 highlights state a return on equity of 31.6%, and the Management's Discussion and Analysis shows 'return on net worth' (net profit ÷ average net worth) of 31.2% on a consolidated basis for FY26, up from 29.0% in FY25 — the small gap between 31.6% and 31.2% is simply the base used (closing equity gives the 31.6% headline; average equity gives the 31.2% worked through here). Screener.in and Trendlyne, which derive ROE from the same audited statements, both land in the 30-32% band for Infosys in FY26. Any way it is computed, the picture is the same: Infosys earns around 31 rupees of profit for every 100 rupees of shareholders' money.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (printed p. 318) and Consolidated Balance Sheet (printed p. 317); 'Return on net worth' per Management's Discussion and Analysis, and FY26 highlights"
  }
};
