const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 19 October 2026, 5:30 PM IST — Daily Wrap (markets closed tomorrow, Tuesday 20 Oct, for Dussehra)",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Monday, 19 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22888.95,
      dayChange: -257.20,
      dayChangePct: -1.11,
      weekChangePct: -1.11, // week vs prior Friday, 16 Oct close of 23,146.15
      spark: [22721.95, 22622.70, 22997.35, 23146.15, 22888.95], // last 5 closes: 13 Oct, 14 Oct, 15 Oct, 16 Oct, 19 Oct
      note: "The benchmark snapped a two-day winning run, falling 257.20 points, or 1.11%, to 22,888.95 — back below the 23,000 mark it had reclaimed only last Thursday — after opening higher at 23,150.85 and touching an intraday high of 23,175.25 before sliding to a low of 22,845. The sell-off was led by index-heavy private banks and IT, the two engines of last week's 2.78% rally, with Axis Bank (-4.19%), Infosys (-2.63%) and Bajaj Finance (-2.52%) the biggest drags. Breadth was weak — 1,163 advances against 2,925 declines on the NSE — and 15 of the 16 major sector indices closed red; only the PSU Bank index gained. India VIX rose about 4.5% to near 14.7."
    },
    {
      name: "Nifty Next 50",
      close: 68695.85,
      dayChange: -292.75,
      dayChangePct: -0.42,
      weekChangePct: -0.42, // week vs prior Friday, 16 Oct close of 68,988.60
      spark: [68927.95, 68999.30, 68671.60, 68988.60, 68695.85], // last 5 closes: 13 Oct, 14 Oct, 15 Oct, 16 Oct, 19 Oct
      note: "The 'next rung' of large caps held up far better than the headline index, easing just 0.42% to 68,695.85 even as the Nifty fell 1.11% — because this basket is lighter on private banks and IT and heavier on PSU banks and industrials. PNB (+4.73%), Canara Bank, Union Bank of India, CG Power (+2.23%) and Bank of Baroda (+1.64%) led the gainers, while LTM (-2.16%), Polycab India (-1.84%) and Tata Capital (-1.43%) lagged. (Levels cross-checked across Anand Rathi, Goodreturns and Kotak Neo, which agree at 68,695.85.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 21499.30,
      dayChange: -237.45,
      dayChangePct: -1.09,
      weekChangePct: -1.09, // week vs prior Friday, 16 Oct close of 21,736.75
      spark: [21829.40, 21820.40, 21756.35, 21736.75, 21499.30], // last 5 closes: 13 Oct, 14 Oct, 15 Oct, 16 Oct, 19 Oct
      note: "Midcaps fell in line with the market, the index shedding 1.09% to 21,499.30 — its second straight lower close — after opening at 21,736.75. The damage was broad: SJVN (-5.05%), Dalmia Bharat (-3.88%), NLC India (-3.71%) and JSW Infrastructure (-3.28%) were the biggest losers, while PSU and regional banks bucked the trend (Bank of India +3.4%, Federal Bank +2.9%, Gujarat Fluorochemicals +2.33%). (Levels per Anand Rathi's close; intraday snapshots from Moneycontrol and Screener showed the index between 21,470 and 21,570 before the final settlement.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17495.90,
      dayChange: -141.75,
      dayChangePct: -0.80,
      weekChangePct: -0.80, // week vs prior Friday, 16 Oct close of 17,637.65
      spark: [17833.45, 17832.35, 17627.05, 17637.65, 17495.90], // last 5 closes: 13 Oct, 14 Oct, 15 Oct, 16 Oct, 19 Oct
      note: "Small caps fell 0.80% to 17,495.90, a milder decline than the Nifty's 1.11% but still a third straight down session. HFCL (+5.00%), Karur Vysya Bank (+4.25%) and Syngene International (+3.34%) were among the gainers, while the segment's worst losses came from Urban Company (-10.45%) after a widening quarterly loss, Himadri Speciality Chemical (-9.19%) and Deepak Fertilisers (-6.46%). The Nifty Smallcap 100 fell 1.01% to 18,935.75. (Levels per Kotak Neo, with the prior close of 17,637.65 matching Friday's print.)"
    },
    {
      name: "BSE SME Index",
      close: 120033.96,
      dayChange: -1923.62,
      dayChangePct: -1.58,
      weekChangePct: -1.58, // week vs prior Friday, 16 Oct close of 1,21,957.58
      spark: [122287.90, 123211.97, 122185.91, 121957.58, 120033.96], // last 5 closes: 13 Oct, 14 Oct, 15 Oct, 16 Oct, 19 Oct
      note: "The BSE SME IPO index was among the day's weakest pockets, sliding 1.58% to 1,20,033.96 from Friday's 1,21,957.58 — a fall of 1,923.62 points — after opening at 1,22,137.96 and touching a low of 1,19,872.79. The SME platform, which had touched a 52-week high of 1,23,353.65 earlier in the month, gave back ground as the risk-off mood hit the smallest, most speculative end of the market hardest. (All figures per BSE Indices, Anand Rathi and Goodreturns.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex slides 876 points (-1.17%) to 73,853 and Nifty drops 257 points (-1.11%) to 22,889, snapping a two-day rally as private banks and IT reverse — Axis Bank tumbles 4.2% on a Q2 miss — but PSU banks jump 2.5% on strong PNB and Union Bank results",
    summary: "Indian equities snapped a two-day winning run on Monday, 19 October 2026, with the Sensex tumbling 876.37 points, or 1.17%, to 73,852.90 and the Nifty 50 shedding 257.20 points, or 1.11%, to close below the 23,000 mark at 22,888.95 — a sell-off led by index-heavy private banks and information-technology shares after mixed September-quarter earnings, with Brent crude still elevated near $108 a barrel. Axis Bank was the day's worst Nifty performer, sliding 4.19% to Rs 1,236, as its Q2 standalone net profit of Rs 7,003 crore (up 37.6% year-on-year) fell just short of the Rs 7,124-crore consensus, with net interest margin slipping and other income weak; HDFC Bank lost 2.31%, Infosys 2.63%, Bajaj Finance 2.52% and Apollo Hospitals 2.41%, the last after the NPPA capped trade margins at 30% on 137 non-scheduled anti-cancer drugs. Public-sector banks bucked the trend, the Nifty PSU Bank index jumping 2.46% to 8,294.10 as PNB (Q2 PAT Rs 5,500 crore, ahead of estimates) and Union Bank of India rallied on improving margins and asset quality. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) were the Nifty's top gainers. The decline was broad — 15 of 16 sector indices closed red, breadth was weak at 1,163 advances against 2,925 declines on the NSE, the Nifty Midcap 100 fell 1.09% and the Smallcap 100 1.01% — while India VIX rose about 4.5% to 14.69 and the rupee eased 3 paise to close at 94.92. Markets are closed on Tuesday, 20 October, for Dussehra.",
    stats: ["Nifty -1.11%", "Sensex -1.17%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Monday — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-13", label: "Tue 13 Oct", niftyClose: 22721.95, niftyChangePct: 1.60, sensexChangePct: 1.54, note: "Sharp recovery: the Nifty posted its best single-day gain since 12 June, up 358.60 points (+1.60%) to 22,721.95 — closing at the day's high after an intraday low of 22,288 — and the Sensex added 1,109.10 points (+1.54%) to 73,033.78. IT led a broad rally after HCL Technologies' strong September-quarter results, the Nifty IT index surging 5.22% (best in 17 months) as HCLTech rose 8.42% and TCS 6.79%, with Finance Minister Nirmala Sitharaman's LTCG/STCG remarks adding to the optimism. 46 of the 50 Nifty stocks closed higher; Realty (+2.46%), Consumer Durables (+1.56%) and Financials (+1.46%) followed IT, and Pharma (-0.01%) was the lone laggard. In the Nifty 500, Bandhan Bank (+~9.2%) and RBL Bank (-~7.1%) were the day's biggest mover and loser. Mid and small caps lagged (Midcap 100 +1.06%, Smallcap 250 +0.34%) and India VIX fell about 7.4% to 14.12." },
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." },
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." },
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." },
    { date: "2026-10-19", label: "Mon 19 Oct", niftyClose: 22888.95, niftyChangePct: -1.11, sensexChangePct: -1.17, note: "The two-day rally ended with a thud: the Sensex fell 876.37 points (-1.17%) to 73,852.90 and the Nifty 50 257.20 points (-1.11%) to 22,888.95, slipping back below 23,000, as private banks and IT — last week's leaders — led the decline after mixed Q2 results and with Brent near $108. Axis Bank (-4.19%) was the worst Nifty performer on a Q2 profit that missed consensus, followed by Tata Motors Passenger Vehicles (-3.09%), Infosys (-2.63%), Bajaj Finance (-2.52%) and Apollo Hospitals (-2.41%); HDFC Bank lost 2.31%. PSU banks were the lone sector in the green, the Nifty PSU Bank index up 2.46% as PNB (+4.73%, Q2 PAT Rs 5,500 crore) and Union Bank of India rallied. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) topped the gainers. Breadth was poor (1,163 advances vs 2,925 declines), the Nifty 500 fell 1.03% to 22,041.60, Midcap 100 -1.09% and Smallcap 100 -1.01%, India VIX rose 4.48% to 14.69 and the rupee closed 3 paise lower at 94.92. Markets are shut on Tuesday, 20 October, for Dussehra." }
  ],

  sectors: [
    { name: "Nifty PSU Bank", changePct: 2.46, note: "The day's only gainer, up 2.46% to 8,294.10, as state-run lenders were rewarded for improving margins and asset quality. PNB jumped 4.73% (Q2 PAT Rs 5,500 crore, ahead of estimates), Union Bank of India gained 5.55%, Canara Bank 2.71% and Bank of Baroda 3.38%, even as private banks were sold off." },
    { name: "Nifty Oil & Gas", changePct: -0.12, note: "Effectively flat, down just 0.12%, as crude held near $108 a barrel and ONGC (+1.35%), Oil India (+0.70%) and HPCL advanced, cushioning the sector against the broader sell-off." },
    { name: "Nifty Media", changePct: -0.26, note: "Down only about 0.26% — the second-best sector on a red day — helped by Zee Entertainment (+1.92%) and selective buying in broadcasting names." },
    { name: "Nifty Metal", changePct: -0.55, note: "Slipped 0.55% but outperformed, with JSW Steel (+2.06%) the top Nifty gainer and Shyam Metalics (+2.40%) firm, though Hindustan Copper (-3.96%) and NMDC fell." },
    { name: "Nifty Pharma", changePct: -0.65, note: "Fell about 0.65% as hospital chains and oncology-exposed drugmakers came under pressure after the NPPA capped trade margins at 30% on 137 non-scheduled anti-cancer formulations, effective 9 November; Apollo Hospitals fell 2.41%." },
    { name: "Nifty Infrastructure", changePct: -0.68, note: "Eased 0.68% to 8,666.50, holding up better than the benchmark on L&T's (+0.96%) order win — a Rs 15,000-crore EPC contract for the New Tashkent International Airport in Uzbekistan." },
    { name: "Nifty Auto", changePct: -0.69, note: "Slipped 0.69%, a relatively mild fall, as Eicher Motors (+0.89%) and Maruti Suzuki gained while Tata Motors Passenger Vehicles (-3.09%) dropped sharply." },
    { name: "Nifty India Defence", changePct: -0.94, note: "Down about 0.94%, giving back part of its recent run as high-valuation defence names saw profit-booking." },
    { name: "Nifty Consumption", changePct: -1.05, note: "Fell about 1.05% as consumer-facing names weakened, with Hindustan Unilever (-2.14%) among the bigger Nifty losers." },
    { name: "Nifty Realty", changePct: -1.20, note: "Lost 1.20% to 816.05, one of the weaker pockets as rate-sensitive property names slipped on the risk-off mood." },
    { name: "Nifty IT", changePct: -1.28, note: "The leader of last week's rally gave back 1.28% to 31,516.30, reversing part of Friday's 3.9% jump; Infosys (-2.63%), HCLTech, TCS and KPIT Technologies (-3.10%) all fell as investors booked profits after the sector's 11.7% weekly surge." },
    { name: "Nifty Cement", changePct: -1.30, note: "Dropped about 1.30% after UltraTech Cement (-2.36%) reported Q2 net profit of Rs 1,490 crore that missed estimates even as revenue and EBITDA beat; Dalmia Bharat fell 3.88%." },
    { name: "Nifty Financial Services", changePct: -1.38, note: "The Nifty Financial Services 25/50 index fell 1.38% as private lenders dragged; HDFC Bank (-2.31%), Bajaj Finance (-2.52%), Bajaj Finserv and Kotak Mahindra Bank (-1.87%) all declined." },
    { name: "Nifty FMCG", changePct: -1.44, note: "Down 1.44% to 43,975.50, one of the worst sectors, as Hindustan Unilever (-2.14%), Nestle India, Tata Consumer Products and Britannia fell amid lingering food-inflation worries." },
    { name: "Nifty Chemicals", changePct: -1.59, note: "The weakest sector of the day, down 1.59%, as speciality-chemical and fertiliser names were dumped — Himadri Speciality Chemical (-9.19%), Deepak Fertilisers (-6.46%) and Aarti Industries (-5.19%) led the fall." },
    { name: "Nifty Private Bank", changePct: -1.85, note: "The biggest drag on the market, down 1.85%, after HDFC Bank and Axis Bank reported September-quarter results that disappointed on margins and other income even as headline profits grew." }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Monday, 19 Oct 2026, over the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250). Daily percentage moves cross-checked across Moneycontrol's NSE top-gainers list, Upstox's Nifty 50 / Midcap 100 / Smallcap 100 gainers-and-losers note, CNBC-TV18's Nifty 500 movers report, Quantsapp's F&O movers, Business Standard's PSU-bank wrap and the Goodreturns NSE sector watch. Where feeds round or time-stamp differently (e.g. Union Bank of India's day gain is quoted between +4.9% and +5.6%, and PNB's between +4.7% and +5.3%), the range is noted.",
    gainers: [
      { name: "Union Bank of India", changePct: 5.55, cap: "Midcap", note: "Rose 5.55% to Rs 181.20 as the PSU lender's September-quarter profit and asset quality beat expectations and net interest margin improved — among the strongest Nifty 500 gainers on a day when PSU banks were the only sector in the green (feeds quote the day's gain between +4.9% and +5.6%)" },
      { name: "HFCL", changePct: 5.00, cap: "Smallcap", note: "Jumped 5.00% to Rs 268.81, the best of the small caps, on continued buying in telecom-gear and defence-adjacent technology names" },
      { name: "Punjab National Bank", changePct: 4.73, cap: "Largecap", note: "Added 4.73% to Rs 121.80 after Q2 PAT of Rs 5,500 crore (up about 13% year-on-year) beat estimates on higher net interest income, better treasury gains and lower provisions, with NIMs expanding (the stock was up as much as 7% intraday)" },
      { name: "Jammu & Kashmir Bank", changePct: 4.30, cap: "Smallcap", note: "Climbed 4.30% to Rs 140.10 as PSU and regional banks rallied together on the strong PNB print" },
      { name: "Karur Vysya Bank", changePct: 4.25, cap: "Smallcap", note: "Gained 4.25% to Rs 370.75, touching an all-time high of Rs 374.95 intraday, after reporting higher profit and an improvement in asset quality" }
    ],
    losers: [
      { name: "Urban Company", changePct: -10.45, cap: "Smallcap", note: "The Nifty 500's worst performer, down 10.45%, after its Q2 consolidated net loss widened to Rs 182.5 crore from Rs 59.3 crore a year earlier even as revenue rose 41.4% and the operating loss widened; the board also approved a fundraise of up to Rs 2,500 crore" },
      { name: "Himadri Speciality Chemical", changePct: -9.19, cap: "Smallcap", note: "Slid 9.19% amid a sharp sell-off in speciality-chemicals names, the day's weakest sector" },
      { name: "Deepak Fertilisers & Petrochemicals", changePct: -6.46, cap: "Smallcap", note: "Fell 6.46% as chemicals and fertiliser stocks came under heavy pressure" },
      { name: "Sammaan Capital", changePct: -6.36, cap: "Smallcap", note: "Dropped 6.36% with financials weak and the broader small-cap space under selling pressure" },
      { name: "Aarti Industries", changePct: -5.19, cap: "Midcap", note: "Lost 5.19%, part of the day's broad weakness in chemicals" }
    ],
    sensexWinners: ["State Bank of India", "Adani Ports & SEZ", "Larsen & Toubro"],
    sensexLaggards: ["Axis Bank", "UltraTech Cement", "Infosys"]
  },

  watch: [
    {
      title: "Dussehra holiday: markets shut on Tuesday, 20 October",
      detail: "The NSE and BSE will be closed on Tuesday, 20 October for Dussehra; trading resumes on Wednesday, 21 October. It is the second exchange holiday of the month after Gandhi Jayanti (2 October). Diwali-Balipratipada (10 November), Guru Nanak Jayanti (24 November) and Christmas (25 December) are the remaining closures in 2026, with the customary Muhurat trading session on Sunday, 8 November."
    },
    {
      title: "Jio Platforms' record IPO opens on Wednesday, 21 October",
      detail: "Reliance Industries' digital arm Jio Platforms opens its initial public offering on 21 October and closes on 23 October, offering 27 crore fresh shares at Rs 1,065-1,119 each — about Rs 30,213 crore at the top end, which would make it India's largest-ever public issue (Hyundai Motor India's Rs 27,870-crore IPO in 2024 is the current record). Watch how the issue absorbs market liquidity and what it does to telecom and broader market sentiment."
    },
    {
      title: "Q2 FY27 earnings: the banks have reported — read the fine print",
      detail: "HDFC Bank's Q2 net profit rose 4.7% year-on-year to Rs 19,510 crore but its net interest margin narrowed to 3.16% from 3.30%, and Axis Bank beat on profit growth yet missed consensus — which is why private lenders were sold and PSU banks with improving NIMs (PNB, Union Bank) were rewarded. Investors are looking past headline profit at margins, costs and asset quality, and more results are due through the coming sessions."
    },
    {
      title: "Crude near $108 and a steadier rupee: the macro overhang",
      detail: "Brent crude stayed elevated around $108 a barrel even as it eased intraday, keeping imported-inflation and corporate-margin worries alive; the rupee ended 3 paise lower at 94.92 after a seventh straight session of gains. FII flows remain the swing factor — foreign investors have been net sellers for much of the recent past, and a sustained return needs softer crude and a stable currency."
    },
    {
      title: "Can the Nifty reclaim 23,000 and can the rally broaden?",
      detail: "The Nifty's close below 23,000 and weak breadth (1,163 advances against 2,925 declines) show Monday's pullback was broad, with mid and small caps falling about 1% each. For a durable recovery the index needs to hold the 22,800-22,820 support zone and reclaim 23,000-23,186, and the broader market has to join in rather than lag the large caps."
    }
  ],

  reads: [
    {
      title: "Stock Market Today: Sensex, Nifty close over 1% lower; private bank, IT stocks push markets lower",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-19th-october-2026/article71600731.ece"
    },
    {
      title: "Sensex, Nifty end in red as private banks, IT stocks drag markets",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/market-close-sensex-ends-876-points-lower-nifty-below-22900-axis-yes-bank-down-3020712-2026-10-19"
    },
    {
      title: "Sensex tanks 1,020 pts intraday: Bank stocks, FPI selling among key factors",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/sensex-crashes-765-pts-intraday-bank-stocks-fpi-selling-among-key-factors-126101900390_1.html"
    },
    {
      title: "Top gainers and losers, October 19: Axis Bank tumbles 4%, TMPV, Infosys fall 3%, JSW Steel rises 2%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-october-19-axis-bank-tumbles-4-tmpv-infosys-fall-3-jsw-steel-rises-2/article-202096/"
    },
    {
      title: "Nifty 500: PNB jumps up to 7%; Urban Company plunges 7%, Axis Bank falls up to 5% on Q2 result",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty500-stocks-share-price-pnb-karur-vysya-gabriel-india-urban-company-federal-bank-axis-bank-q2-result-20014665.htm"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Current Ratio",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = Total current assets ÷ Total current liabilities",
    formulaNote: "The current ratio measures whether a company can pay the bills that fall due within a year. 'Current assets' are the things it expects to turn into cash inside twelve months — cash, short-term investments, money owed by customers (trade receivables), work done but not yet billed and other short-term assets. 'Current liabilities' are the obligations due inside the same window — money owed to suppliers (trade payables), revenue collected in advance, employee-benefit obligations and other short-term liabilities. Dividing the first by the second tells you how many rupees of near-term resources stand behind every rupee of near-term obligation. A ratio above 1 means the company can cover its short-term dues from short-term assets; around 2 is conventionally seen as comfortable, though too high a number can also mean idle cash rather than efficiency. Because it uses only balance-sheet items, the current ratio is a quick, year-end snapshot of liquidity.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets as at March 31, 2026", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 317" },
      { label: "Total current assets as at March 31, 2025 (prior year)", value: "Rs 97,099 crore", page: "p. 317" },
      { label: "Total current liabilities as at March 31, 2025 (prior year)", value: "Rs 42,850 crore", page: "p. 317" }
    ],
    working: "Step 1 — Take the current assets. The Consolidated Balance Sheet (printed p. 317) shows total current assets of Rs 1,03,489 crore at March 31, 2026, made up largely of cash and cash equivalents of Rs 22,201 crore, current investments of Rs 12,950 crore, trade receivables of Rs 35,234 crore, unbilled revenue of Rs 15,483 crore and other current assets of Rs 17,621 crore. Step 2 — Take the current liabilities. The same page shows total current liabilities of Rs 52,322 crore, chiefly trade payables of Rs 4,744 crore, unearned revenue of Rs 11,838 crore, employee-benefit obligations of Rs 3,524 crore and other current liabilities and provisions of Rs 32,216 crore. Step 3 — Current Ratio = 1,03,489 ÷ 52,322 = 1.98. So Infosys held about Rs 1.98 of current assets for every rupee of current liabilities at the end of FY26 — effectively 2:1. Step 4 — Run the same arithmetic on the prior year: 97,099 ÷ 42,850 = 2.27, i.e. the ratio slipped from about 2.3 to about 2.0 over the year because current liabilities grew faster than current assets.",
    result: "1.98×",
    meaning: "Infosys entered FY27 with roughly Rs 1.98 of current assets for every rupee of current liabilities — essentially a 2:1 cushion, which is a strong liquidity position for a business of its size. The comfort comes from the asset side: about Rs 35,000 crore of the current assets sit in cash, cash equivalents and current investments, so the company could clear its entire short-term obligations from cash and near-cash alone. Two things explain the small year-on-year dip from 2.3 to 2.0. First, current liabilities jumped 22% — from Rs 42,850 crore to Rs 52,322 crore — driven mainly by 'other current liabilities and provisions' and by unearned revenue (money clients have paid in advance), which rises as the order book grows. Second, current assets grew more slowly, by about 7%, because a large part of the year's cash generation was returned to shareholders rather than piled onto the balance sheet — Infosys completed an Rs 18,000-crore buyback and paid Rs 48 a share in dividends during FY26. In plain terms, a current ratio near 2 tells a lender or supplier that Infosys can comfortably meet everything it owes within the year; the mild decline is a sign of generous cash returns and a growing advance-billing book, not of any liquidity strain.",
    crossCheck: "Infosys itself publishes this measure: the Management's Discussion and Analysis lists a consolidated current ratio of 2.0 times for FY26, down from 2.3 times in FY25 — matching the 1.98 worked through here, with the company simply rounding to one decimal. Screener.in and Trendlyne, which derive the ratio from the same audited balance sheet, both put Infosys' current ratio at about 2.0 for FY26. The convention gap worth noting is definitional: some screeners report a 'quick' or acid-test ratio that strips out inventories and prepaid items, which for Infosys barely changes the number because an IT-services balance sheet carries no inventory at all.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (IFRS), printed p. 317 (PDF p. 287); current ratio of 2.0 times per the Management's Discussion and Analysis, Key Financial Ratios"
  }
};
