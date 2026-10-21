const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 21 October 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 21 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22811.35,
      dayChange: -77.60,
      dayChangePct: -0.34,
      weekChangePct: -1.45, // week vs prior Friday, 16 Oct close of 23,146.15
      spark: [22622.70, 22997.35, 23146.15, 22888.95, 22811.35], // last 5 closes: 14 Oct, 15 Oct, 16 Oct, 19 Oct, 21 Oct
      note: "The benchmark gave back a strong morning rally to close 77.60 points, or 0.34%, lower at 22,811.35 — a second straight down session — after opening at 23,016 and surging to an intraday high of 23,120.90 before sliding to a low of 22,649.90, a swing of about 471 points from peak to trough. A late closing-auction recovery lifted the index about 73 points off its 3:15 pm level. The sell-off was led by banks, autos, metals and realty, with Bajaj Finance (-3.27%) the worst Nifty performer and BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; only the IT pack held up. Breadth was lopsided — 34 of the 50 Nifty stocks closed red and NSE breadth was roughly 603 advances against 2,995 declines — while India VIX jumped 6.29% to 15.70 after touching 16.17 intraday."
    },
    {
      name: "Nifty Next 50",
      close: 67655.30,
      dayChange: -1040.55,
      dayChangePct: -1.51,
      weekChangePct: -1.93, // week vs prior Friday, 16 Oct close of 68,988.60
      spark: [68999.30, 68671.60, 68988.60, 68695.85, 67655.30], // last 5 closes: 14 Oct, 15 Oct, 16 Oct, 19 Oct, 21 Oct
      note: "The 'next rung' of large caps fell 1.51% to 67,655.30, underperforming the Nifty's 0.34% decline as the day's damage was concentrated in capital goods and consumer names rather than IT. Siemens (-5.6%) and ABB India (-5.9%) — both Next 50 constituents — were among the day's heaviest large-cap fallers as investors reacted to the parent ABB group's results, while the index's heavier tilt to industrials and PSU banks offered only partial shelter. (Levels cross-checked across IIFL Capital, Dhan's all-indices board and News18's closing wrap, which agree at 67,655.30 and a fall of about 1.51%.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 21200.25,
      dayChange: -299.05,
      dayChangePct: -1.39,
      weekChangePct: -2.47, // week vs prior Friday, 16 Oct close of 21,736.75
      spark: [21820.40, 21756.35, 21736.75, 21499.30, 21200.25], // last 5 closes: 14 Oct, 15 Oct, 16 Oct, 19 Oct, 21 Oct
      note: "Midcaps fell harder than the headline index, the gauge shedding 1.39% to 21,200.25 as the broader market came under broad-based selling. The damage was split: IT and healthcare-linked midcaps rose (L&T Technology Services +8.75%, Ipca Labs +7.25%, Hexaware Technologies +5.47%, Persistent Systems +2.24%), while speciality chemicals, cable and defence names were dumped — SRF (-5.22%) hit a fresh 52-week low, with Meesho (-5%), United Spirits (-4.96%), Cochin Shipyard (-4.84%) and KEI Industries (-4.76%) the other big losers. (Close of 21,200.25 and a fall of 1.39% cross-checked across IIFL Capital, NDTV Profit's closing-auction snapshot and the Nifty Midcap 150 tracker.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17041.95,
      dayChange: -393.20,
      dayChangePct: -2.26,
      weekChangePct: -3.38, // week vs prior Friday, 16 Oct close of 17,637.65
      spark: [17832.35, 17627.05, 17637.65, 17495.90, 17041.95], // last 5 closes: 14 Oct, 15 Oct, 16 Oct, 19 Oct, 21 Oct
      note: "Small caps were the worst hit of the main size indices, down 2.26% to 17,041.95 as risk aversion swept the most speculative end of the market. Himadri Speciality Chemical (-10.87%), Gallantt Ispat (-8.38%), CreditAccess Grameen (-6.96%), TD Power Systems (-6.38%) and Jyoti CNC Automation (-6.33%) were the biggest losers, while Firstsource Solutions (+2.97%), Anand Rathi Wealth (+1.67%), Tata Elxsi (+1.55%) and KPIT Technologies (+1.44%) were among the few gainers. The Nifty Smallcap 100 fell 2.37% to 18,487.30 and the Microcap 250 lost 2.61%. (Levels per IIFL Capital and News18's closing wrap, which agree on a fall of about 2.26%.)"
    },
    {
      name: "BSE SME Index",
      close: 116484.98,
      dayChange: -3548.98,
      dayChangePct: -2.96,
      weekChangePct: -4.49, // week vs prior Friday, 16 Oct close of 1,21,957.58
      spark: [123211.97, 122185.91, 121957.58, 120033.96, 116484.98], // last 5 closes: 14 Oct, 15 Oct, 16 Oct, 19 Oct, 21 Oct
      note: "The BSE SME IPO index was the day's weakest pocket, sliding 2.96% to 1,16,484.98 from Monday's 1,20,033.96 — a fall of 3,548.98 points — after opening at 1,20,223.05 and touching a low of 1,16,348.37. The SME platform, which had touched a 52-week high of 1,23,353.65 earlier in the month, gave back ground as the risk-off mood and a spate of 52-week lows hit the smallest, most speculative end of the market hardest. (All figures per BSE Indices, Goodreturns' BSE sector watch and Dhan's all-BSE-indices board.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex slips 143 points (-0.19%) to 73,710 and Nifty falls 77 points (-0.34%) to 22,811 as an 800-point morning rally reverses on crude above $111 and FII selling — but IT is the lone bright spot, the Nifty IT index up 2.88% on Infosys (+3.3%) and HCLTech (+3.2%)",
    summary: "Indian equities gave back a bright opening to close lower for a second straight session on Wednesday, 21 October 2026, with the Sensex slipping 143.21 points, or 0.19%, to 73,709.69 and the Nifty 50 down 77.60 points, or 0.34%, at 22,811.35 — a day that began with the Sensex up more than 800 points and the Nifty above 23,100 before rising Brent crude, firm US bond yields and persistent foreign selling turned the session around. The Sensex had opened at 74,337.93 and touched an intraday high of 74,682.19 before slumping to a low of 73,229.45; the Nifty ranged from a high of 23,120.90 to a low of 22,649.90. Information technology was the only sector to finish in the green, the Nifty IT index climbing 2.88% to 32,422.50 as investors rotated back into the beaten-down pack: Infosys rose 3.30%, HCL Technologies 3.21%, Tech Mahindra 3.13% and TCS 2.77%, with L&T Technology Services surging 8.75% on a 66% jump in Q2 net profit to Rs 548 crore. Everything else was sold. Bajaj Finance (-3.27%) was the worst Nifty performer as analysts flagged further margin compression despite a 29% year-on-year rise in Q2 consolidated net profit to Rs 6,367 crore; BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) followed, and autos fell after weak October vehicle-registration data. The Nifty Chemicals index (-2.64%), Nifty Metal (-1.71%), Nifty Auto (-1.54%) and Nifty Energy (-1.39%) led the declines, while PSU banks, FMCG and private banks lost about half a percent to a percent each. The broader market was hit far harder than the benchmarks — the Nifty Midcap 150 fell 1.39%, the Smallcap 250 2.26% and the Microcap 250 2.61%, with 322 BSE stocks printing fresh 52-week lows — and India VIX jumped 6.29% to 15.70. On the exchanges, 603 NSE stocks advanced against 2,995 that declined. The session also saw the Rs 30,213-crore Jio Platforms IPO open for subscription and get fully subscribed within about 100 minutes. FIIs had sold Rs 1,148.64 crore of equities on Monday while DIIs bought Rs 3,201.19 crore.",
    stats: ["Nifty -0.34%", "Sensex -0.19%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Wednesday — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-14", label: "Wed 14 Oct", niftyClose: 22622.70, niftyChangePct: -0.44, sensexChangePct: -0.34, note: "Profit-booking after Tuesday's surge: the Nifty 50 fell 99.25 points (-0.44%) to 22,622.70 and the Sensex 251.89 points (-0.34%) to 72,781.89, as crude rebounded to about $106-107 a barrel, foreign outflows persisted and investors turned cautious ahead of US inflation data. The session was split — IT (+1.14%), Energy (+1.47%), FMCG (+1.21%) and Oil & Gas advanced, while Pharma (-1.30%), Financial Services (-1.21%), Auto (-0.93%) and Metal (-0.32%) fell. Nestle India (+3.69%), Tata Consumer Products (+2.91%), Infosys (+2.44%), TCS (+2.11%) and Coal India (+2.08%) led the Nifty gainers; Shriram Finance (-3.85%), HDFC Life (-2.85%), Bajaj Finance, Bajaj Finserv and SBI Life Insurance led the losers. In the Nifty 500, Transformers & Rectifiers jumped about 16% on a strong Q2, with Vedanta Power and IDBI Bank also up sharply, while Meesho, LIC Housing Finance, Polycab India, Bank of Baroda and Shriram Finance fell the most. Midcaps were flat (Midcap 150 -0.04%), the Smallcap 250 rose about 0.30%, India VIX rose about 3.5% to 14.61, and September WPI inflation hit a series high of 11.39%." },
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." },
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." },
    { date: "2026-10-19", label: "Mon 19 Oct", niftyClose: 22888.95, niftyChangePct: -1.11, sensexChangePct: -1.17, note: "The two-day rally ended with a thud: the Sensex fell 876.37 points (-1.17%) to 73,852.90 and the Nifty 50 257.20 points (-1.11%) to 22,888.95, slipping back below 23,000, as private banks and IT — last week's leaders — led the decline after mixed Q2 results and with Brent near $108. Axis Bank (-4.19%) was the worst Nifty performer on a Q2 profit that missed consensus, followed by Tata Motors Passenger Vehicles (-3.09%), Infosys (-2.63%), Bajaj Finance (-2.52%) and Apollo Hospitals (-2.41%); HDFC Bank lost 2.31%. PSU banks were the lone sector in the green, the Nifty PSU Bank index up 2.46% as PNB (+4.73%, Q2 PAT Rs 5,500 crore) and Union Bank of India rallied. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) topped the gainers. Breadth was poor (1,163 advances vs 2,925 declines), the Nifty 500 fell 1.03% to 22,041.60, Midcap 100 -1.09% and Smallcap 100 -1.01%, India VIX rose 4.48% to 14.69 and the rupee closed 3 paise lower at 94.92. Markets were shut on Tuesday, 20 October, for Dussehra." },
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 2.88, note: "The day's only gainer and its standout, up 2.88% to 32,422.50 — an eight-month high — as investors rotated into the beaten-down pack on improving earnings visibility and the global 'anti-AI' trade. Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers, while L&T Technology Services surged 8.75% after a 66% jump in Q2 net profit." },
    { name: "Nifty Cement", changePct: 0.46, note: "One of only two sector indices to close higher, up about 0.46% to 13,482, helped by UltraTech Cement (+1.87%) — the lone non-IT name among the Nifty's top five gainers — and JK Cement (+2.16%)." },
    { name: "Nifty Services Sector", changePct: 0.21, note: "Eked out a small gain of about 0.21% to 30,163.75, lifted by the IT-services names inside it." },
    { name: "Nifty Oil & Gas", changePct: -0.07, note: "Effectively flat, down just 0.07% to 10,536.30, as crude above $111 lifted upstream names (ONGC, Oil India) enough to offset weakness elsewhere." },
    { name: "Nifty Pharma", changePct: -0.19, note: "The mildest of the falls among defensive sectors, down about 0.19% to 25,565.90, with healthcare largely holding its ground." },
    { name: "Nifty Infrastructure", changePct: -0.38, note: "Eased about 0.38% to 8,634.00, holding up better than the benchmark." },
    { name: "Nifty PSU Bank", changePct: -0.51, note: "Gave back part of Monday's 2.46% jump, slipping 0.51% to 8,251.50 as profit-booking set in after the PNB and Union Bank rally." },
    { name: "Nifty FMCG", changePct: -0.58, note: "Fell about 0.58% to 43,720.70 as consumer names weakened, with Varun Beverages (-2.31%) and Godfrey Phillips (-2.4%) among the bigger drags." },
    { name: "Nifty Bank", changePct: -0.92, note: "The banking gauge lost 0.92% to 54,976.90 (down 511.20 points) as private lenders bore the brunt of the selling." },
    { name: "Nifty Private Bank", changePct: -1.04, note: "Down 1.04% to 26,904.35, with Bajaj Finance (-3.27%) the worst Nifty performer on margin worries and Axis Bank, Kotak Mahindra Bank and HDFC Bank all lower." },
    { name: "Nifty Financial Services", changePct: -1.18, note: "The Nifty Financial Services 25/50 index shed about 0.96% while the broader financials gauge fell 1.18% to 24,691.45 as lenders and insurers weakened together." },
    { name: "Nifty Realty", changePct: -1.25, note: "Lost 1.25% to 805.85, one of the weaker pockets, as rate-sensitive property names slipped on the risk-off mood and firm bond yields." },
    { name: "Nifty Media", changePct: -1.29, note: "Fell about 1.29% to 1,622.65 despite being one of the few indices in positive territory over the past month." },
    { name: "Nifty Energy", changePct: -1.39, note: "Down 1.39% to 35,474.75 even as crude rallied, with the refiners and gas names unable to hold early gains." },
    { name: "Nifty Auto", changePct: -1.54, note: "Fell 1.54% to 25,196.65 after the release of October vehicle-registration data, with Eicher Motors (-2.43%), Maruti Suzuki, Bajaj Auto and Mahindra & Mahindra all down 2-3%." },
    { name: "Nifty Metal", changePct: -1.71, note: "Dropped 1.71% to 11,859.55, one of the day's worst sectors, as metal names were sold off across the board." },
    { name: "Nifty MNC", changePct: -2.10, note: "Down 2.10% to 28,626.65, with capital-goods MNCs Siemens (-5.6%) and ABB India (-5.9%) among the heaviest large-cap fallers of the day." },
    { name: "Nifty Chemicals", changePct: -2.64, note: "The weakest sector of the day, down 2.64% to 27,176.35, as speciality-chemical and fertiliser names were dumped — Himadri Speciality Chemical (-10.87%) led the Nifty 500 losers, with Deepak Fertilisers and Aarti Industries also weak." }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Wednesday, 21 Oct 2026, over the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250). Daily percentage moves cross-checked across Kotak Neo's and ET Money's Nifty 500 / market top-gainers boards, Upstox's Nifty 50, Midcap 100 and Smallcap 100 gainers-and-losers note, Moneycontrol's closing-session movers tables, Trendlyne's largecap/midcap movers post, CNBC-TV18's Nifty 500 results-movers report and the NSE's own top gainers/losers page. Where feeds round or time-stamp differently (e.g. L&T Technology Services' day gain is quoted between +7.3% and +8.75%, and India Cements' between +9.0% and +9.5%), the closing figure is used and the range is noted.",
    gainers: [
      { name: "India Cements", changePct: 9.48, cap: "Smallcap", note: "The Nifty 500's best performer, up 9.48% to Rs 322.25 on a big spike in volumes (about 15 times its two-week average) — feeds quote the day's gain between +9.0% and +9.5%" },
      { name: "L&T Technology Services", changePct: 8.75, cap: "Midcap", note: "Surged 8.75% to Rs 3,927.40 after Q2 net profit rose 66% year-on-year to Rs 548 crore on revenue of Rs 3,040 crore, with EBIT margin up 60 basis points to 16.3% and an interim dividend of Rs 20 a share declared; the stock was up as much as 15% intraday (feeds quote the close between +7.3% and +8.75%)" },
      { name: "Fractal Analytics", changePct: 7.95, cap: "Smallcap", note: "Climbed 7.95% to Rs 770.15 after the software-services company named Shilpa Kedia as its new Chief Financial Officer, on volumes about 19 times its recent average" },
      { name: "Hexaware Technologies", changePct: 4.27, cap: "Midcap", note: "Added 4.27% to Rs 598.80 as the IT-services rally lifted the entire pack" },
      { name: "Wipro", changePct: 3.71, cap: "Largecap", note: "Rose 3.71% to Rs 188.90, part of the broad IT bid that saw the Nifty IT index gain 2.88%" }
    ],
    losers: [
      { name: "Himadri Speciality Chemical", changePct: -10.87, cap: "Smallcap", note: "The Nifty 500's worst performer, down 10.87%, as speciality-chemicals names were dumped — the day's weakest sector" },
      { name: "Gallantt Ispat", changePct: -8.38, cap: "Smallcap", note: "Slid 8.38% after reporting a lower net profit for the September quarter" },
      { name: "CreditAccess Grameen", changePct: -6.96, cap: "Midcap", note: "Fell 6.96% as microfinance and small-cap financials came under heavy selling pressure" },
      { name: "TD Power Systems", changePct: -6.38, cap: "Smallcap", note: "Dropped 6.38% amid a sharp sell-off in power, cables and capital-goods names" },
      { name: "Jyoti CNC Automation", changePct: -6.33, cap: "Smallcap", note: "Lost 6.33%, part of the day's broad weakness in industrials and engineering" }
    ],
    sensexWinners: ["Infosys", "UltraTech Cement", "Tata Consultancy Services"],
    sensexLaggards: ["Bajaj Finance", "Eternal", "Maruti Suzuki"]
  },

  watch: [
    {
      title: "Jio Platforms' record IPO: open now, closes Friday 23 October",
      detail: "Reliance Industries' digital arm Jio Platforms opened its initial public offering on Wednesday, 21 October, and closes on 23 October, offering 27 crore fresh shares at Rs 1,065-1,119 each — about Rs 30,213 crore at the top end, India's largest-ever public issue. The book was fully subscribed within roughly 100 minutes of opening. Watch how the issue absorbs market liquidity and what it does to telecom and broader market sentiment over the next two sessions."
    },
    {
      title: "Crude above $111 and US 10-year yields near 5.13%: the macro overhang",
      detail: "Brent crude rose above $111 a barrel on Middle East supply fears and risks to Red Sea shipping, while the US 10-year Treasury yield held near 5.13% — two forces that reinforce each other as imported-inflation and borrowing-cost headwinds for India. Higher oil raises the import bill and squeezes corporate margins, and higher global yields make emerging-market equities less attractive. A sustained moderation in both, plus a steadier rupee (which opened at 94.78), is what the market needs for a durable recovery."
    },
    {
      title: "FII flows remain the swing factor",
      detail: "Foreign institutional investors sold Rs 1,148.64 crore of equities on Monday while domestic institutions bought Rs 3,201.19 crore. Persistent foreign selling through much of 2026 has left Indian equities vulnerable to shifts in global sentiment, even as strong domestic flows and resilient Q2 earnings cushion the falls. Watch the FII/DII prints each evening."
    },
    {
      title: "Q2 FY27 earnings: the read-through is stock-specific",
      detail: "The results season is delivering sharp divergences — L&T Technology Services jumped 8.75% on a 66% profit rise, while SRF fell 5.22% to a 52-week low on a margin miss, Gallantt Ispat dropped 8.38% on lower profit and Himadri Speciality Chemical lost 10.87%. Investors are rewarding earnings beats and punishing misses hard, so expect stock-specific action rather than index-level moves as more companies report through the coming sessions."
    },
    {
      title: "Can the Nifty hold 22,650 and can the rally broaden?",
      detail: "Wednesday's close at 22,811.35 left the Nifty near its 20-day moving average of about 22,800, with 22,650-22,700 — around the 200-week moving average — seen as the crucial support zone and 23,000 the immediate resistance. The bigger worry is breadth: midcaps fell 1.39%, small caps 2.26% and 322 BSE stocks hit fresh 52-week lows. For a durable recovery the index needs to hold support and the broader market has to join in rather than lag the large caps."
    }
  ],

  reads: [
    {
      title: "Sensex settles nearly 1,000 pts lower from day's high, Nifty ends near 22,800: Five key reasons behind market decline",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/sensex-falls-600-pts-from-day-s-high-nifty-below-22-950-key-reasons-behind-market-decline-14056444.html"
    },
    {
      title: "Top gainers and losers, October 21: Bajaj Finance, BSE shares drop 3%; Infosys, HCLTech gain 3%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-october-21-bajaj-finance-bse-shares-drop-3-infosys-hcl-tech-gain-3/article-202171/"
    },
    {
      title: "Nifty reverses gap-up gains as 322 stocks hit 52-week lows",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/gap-up-gone-nifty-reverses-early-gains-322-stocks-hit-52-week-lows/article71606718.ece"
    },
    {
      title: "Midcap 100, Smallcap 100 index down 1%; MRF, Biocon, Swiggy at 52-week lows",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/midcap-100-smallcap-100-index-down-1-mrf-biocon-swiggy-at-52-week-lows-126102100269_1.html"
    },
    {
      title: "CAS swings: Nifty's indicative price jumps 500 points in seconds, closes higher than pre-CAS level",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/cas-swings-niftys-indicative-price-jumps-500-points-in-seconds-closes-higher-than-pre-cas-level/articleshow/135089898.cms"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Return on Equity (ROE)",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288, printed p. 317 = PDF p. 287).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = Net profit attributable to shareholders ÷ Average shareholders' equity (× 100)",
    formulaNote: "Return on equity measures how much profit a company generates for every rupee of shareholders' money left in the business. Take the net profit that belongs to the owners (after tax, interest and minority interests) and divide it by the average shareholders' equity over the year — the average of the opening and closing balances, because the equity base itself changes through the year as profits are added and dividends or buybacks take money out. The result is the percentage return the company earned on the owners' capital. A high, stable ROE is the hallmark of a capital-light, high-margin business; Infosys, with almost no debt and a huge cash pile, runs one of the highest in the Nifty. Unlike the operating margin (a flow measure off the income statement that ignores how the business is financed), ROE is a return measure that ties the income statement to the balance sheet. Unlike the current ratio (a year-end liquidity snapshot), ROE is a whole-year performance number.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Net profit attributable to owners of the Company, year ended March 31, 2026", value: "Rs 29,440 crore", page: "p. 318" },
      { label: "Total equity attributable to equity holders of the Company, as at March 31, 2026", value: "Rs 92,852 crore", page: "p. 317" },
      { label: "Total equity attributable to equity holders of the Company, as at March 31, 2025", value: "Rs 95,818 crore", page: "p. 317" },
      { label: "Average shareholders' equity for FY26 (computed)", value: "Rs 94,335 crore", page: "p. 317" }
    ],
    working: "Step 1 — Take the net profit that belongs to shareholders. The Consolidated Statement of Comprehensive Income (printed p. 318) shows profit for the year of Rs 29,474 crore, of which Rs 29,440 crore is attributable to owners of the Company and Rs 34 crore to non-controlling interests. ROE is about the owners, so we use Rs 29,440 crore. Step 2 — Take the shareholders' equity. The Consolidated Balance Sheet (printed p. 317) shows total equity attributable to equity holders of the Company of Rs 92,852 crore as at March 31, 2026, down from Rs 95,818 crore as at March 31, 2025. Step 3 — Average the two balances, because the equity base moved during the year: (92,852 + 95,818) ÷ 2 = Rs 94,335 crore. Step 4 — Return on Equity = 29,440 ÷ 94,335 = 31.21%, i.e. about 31.2%. In plain terms, every Rs 100 of shareholders' money left in the business at the start of the year produced about Rs 31 of profit.",
    result: "31.2%",
    meaning: "Infosys earned a return of about 31.2% on the average shareholders' equity it employed in FY26 — an exceptional number for a company of its size, and a direct consequence of a capital-light model: it needs very little fixed capital or debt to run, so almost all of the profit it makes accrues to shareholders rather than to lenders. Two forces pushed the ratio up year-on-year. First, profit grew: net profit attributable to owners rose 10.2% to Rs 29,440 crore from Rs 26,713 crore. Second, the equity base actually shrank: it fell 3.1% from Rs 95,818 crore to Rs 92,852 crore, because Infosys completed an Rs 18,000-crore buyback during the year (10 crore shares bought back and extinguished) and paid Rs 18,653 crore of dividends, which together took more out of equity than the year's profit added. A shrinking denominator and a growing numerator both flatter ROE, so the honest read is that the improvement is real but partly mechanical. The key question is durability: with revenue growth of only 3.1% in constant currency, Infosys is returning cash to shareholders faster than it is growing the business, which lifts ROE today but cannot be repeated indefinitely.",
    crossCheck: "Infosys reports the number itself: the Management's Discussion and Analysis in the Integrated Annual Report (Key Financial Ratios) states that 'return on net worth is computed as net profit by average net worth', that consolidated net profit rose from Rs 26,713 crore to Rs 29,440 crore, and that return on net worth 'has increased in line with the net profit increase and changes in average net worth on account of dividends and buyback' — matching the 31.2% worked through here. Screener.in and Trendlyne, which derive ROE from the same audited consolidated statements, show Infosys' FY26 ROE in the low-30s. Two convention gaps are worth flagging: (1) if you divide by closing equity instead of average equity you get a higher figure (29,440 ÷ 92,852 = 31.7%), and using total equity including non-controlling interests you get a slightly lower one (29,474 ÷ 94,750 = 31.1%); and (2) some providers compute ROE on standalone rather than consolidated numbers, or use profit before minority interests. The average-equity, owners'-share method used here is the one Infosys itself describes.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (IFRS), printed p. 318 (PDF p. 288), for net profit attributable to owners; Consolidated Balance Sheet (IFRS), printed p. 317 (PDF p. 287), for total equity attributable to equity holders as at March 31, 2026 and March 31, 2025; Management's Discussion and Analysis, Key Financial Ratios, for the return-on-net-worth definition and trend"
  }
};
