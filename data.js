const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 27 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Tuesday, 27 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22749.75,
      dayChange: -3.45,
      dayChangePct: -0.02,
      weekChangePct: 0.66, // two sessions to 27 Oct, vs the 23 Oct (prior Friday) close of 22,600.00
      spark: [22811.35, 22687.65, 22600.00, 22753.20, 22749.75], // last 5 closes: 21 Oct, 22 Oct, 23 Oct, 26 Oct, 27 Oct
      note: "A flat close that hides a lot of movement underneath. The Nifty 50 finished 3.45 points, or 0.02%, lower at 22,749.75 — an eight-point day after a 193-point range — after sinking to 22,636.85 in the afternoon and then clawing back to a high of 22,829.75. It was the monthly F&O expiry, and the index simply refused to go anywhere while its constituents went everywhere: Tata Consumer Products (+6.78%), Bharti Airtel (+3.20%), Bajaj Auto (+3.17%), BSE (+2.44%) and Trent (+2.42%) led the gainers, while Asian Paints (-1.94%), Coal India (-1.73%), Grasim (-1.67%), SBI (-1.63%) and TCS (-1.50%) dragged. The damage was concentrated in lenders and cement — Nifty Private Bank -0.73%, Nifty Bank -0.72%, Nifty Cement -2.03% — while Media (+3.66%), Realty (+1.94%) and Pharma (+1.91%) ran. India VIX fell 4.41% to 16.40. (The 22,749.75 close, the -3.45 point change and the -0.02% are taken from NSE's official index close file for 27-10-2026 and match The Hindu BusinessLine, Business Standard, ET Now, Angel One and Upstox; the 22,753.20 previous close is NSE's 26 October close. The week figure is measured against the prior Friday, 23 October.)"
    },
    {
      name: "Nifty Next 50",
      close: 67343.95,
      dayChange: 866.80,
      dayChangePct: 1.30,
      weekChangePct: 2.30, // two sessions to 27 Oct, vs the 23 Oct (prior Friday) close of 65,828.60
      spark: [67655.30, 67354.15, 65828.60, 66477.15, 67343.95], // last 5 closes: 21 Oct, 22 Oct, 23 Oct, 26 Oct, 27 Oct
      note: "The 'next rung' of large caps was the day's quiet winner among the size gauges, jumping 866.80 points, or 1.30%, to 67,343.95 — closing within 15 points of its session high of 67,359.45 after opening at 66,547.85 and dipping to 66,515. That is a 1.30% gain on a day the Nifty 50 closed flat, and it lifts the index 2.30% above Friday's 65,828.60 close, comfortably the best two-session run of the five cards here. Vodafone Idea's Supreme Court relief on AGR dues and a strong session for Adani group and power names did the heavy lifting. (Close of 67,343.95, change of +866.80 and +1.30% are from NSE's official index close file for 27-10-2026; note that intraday snapshots published during the session — Anand Rathi at 10:55 am showed 67,153.50 and Dhan at 2:38 pm showed 67,073.10 — are mid-session prints, not the close.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 21003.15,
      dayChange: 190.90,
      dayChangePct: 0.92,
      weekChangePct: 1.99, // two sessions to 27 Oct, vs the 23 Oct (prior Friday) close of 20,592.75
      spark: [21200.25, 21028.65, 20592.75, 20812.25, 21003.15], // last 5 closes: 21 Oct, 22 Oct, 23 Oct, 26 Oct, 27 Oct
      note: "Midcaps made it two up-days in a row, adding 190.90 points, or 0.92%, to 21,003.15 after a session range of 20,778.85 to 21,033.00. Mankind Pharma (+8.24%) on a strong September-quarter beat, APL Apollo Tubes (+6.55%), Bank of Maharashtra (+5.10%), GE Vernova T&D (+5.01%) and Bank of India (+4.51%) led; M&M Financial (-6.59%), REC (-3.92%) and Paytm (-3.21%) were the heaviest drags. The gauge is now 1.99% above Friday's close but still about 6% below where it started October, and it closed above 21,000 for the first time since 23 October. (Close of 21,003.15, change of +190.90 and +0.92% are from NSE's official index close file for 27-10-2026. The Nifty Midcap 100, a narrower gauge, closed 1.00% higher at 57,029.90 — reported as such by Upstox and ET Now.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 16933.70,
      dayChange: 363.20,
      dayChangePct: 2.19,
      weekChangePct: 3.35, // two sessions to 27 Oct, vs the 23 Oct (prior Friday) close of 16,385.15
      spark: [17041.95, 16856.20, 16385.15, 16570.50, 16933.70], // last 5 closes: 21 Oct, 22 Oct, 23 Oct, 26 Oct, 27 Oct
      note: "Small caps ran hardest, up 363.20 points, or 2.19%, to 16,933.70 — the biggest one-day gain of the five gauges here — after trading between 16,578.20 and 16,952.25. Ola Electric (+16.23%), Onesource Specialty Pharma (+13.78%), Acutaas Chemicals (+13.27%) and Data Patterns (+9.16%) were the standouts, and the Nifty Smallcap 100 closed 2.69% higher at 18,468.70. Even after two strong sessions the index is only 3.35% above Friday's 16,385.15 close and remains the weakest size gauge over a month. (Close of 16,933.70, change of +363.20 and +2.19% are from NSE's official index close file for 27-10-2026; the Nifty Smallcap 100's +2.69% to 18,468.70 is corroborated by Upstox and Business Standard.)"
    },
    {
      name: "BSE SME Index",
      close: 113104.26,
      dayChange: 1504.34,
      dayChangePct: 1.35,
      weekChangePct: 0.91, // two sessions to 27 Oct, vs the 23 Oct (prior Friday) close of 1,12,084.71
      spark: [116484.98, 115572.87, 112084.71, 111599.92, 113104.26], // last 5 closes: 21 Oct, 22 Oct, 23 Oct, 26 Oct, 27 Oct
      note: "The most speculative corner of the market bounced hardest of all, with the BSE SME IPO index up 1,504.34 points, or 1.35%, to 1,13,104.26 — snapping a four-session losing streak. It opened at 1,11,982.41, ran to a high of 1,13,423.99 and never traded below 1,11,858.96. That still leaves it only 0.91% above Friday's 1,12,084.71 close, and about 8% below its 14 October high of 1,23,211.97, after last week's 7% slide. (VERIFICATION NOTE: the previous close of 1,11,599.92, the open of 1,11,982.41 and the day's 1,11,858.96-1,13,423.99 range are confirmed identically by ICICI Direct, The Economic Times and Anand Rathi. The 1,13,104.26 close and the +1,504.34 / +1.35% change are ICICI Direct's post-close print; ET's latest update (12:05 IST) showed 1,13,056.16 and Dhan's 2:38 pm snapshot 1,13,039.58, so the direction and rough size of the move are agreed across three feeds but the exact end-of-day print could not be confirmed on a second post-close source.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex ends 8 points lower at 73,599 and Nifty 3 points down at 22,750 as a 392-point Bank slide cancels out a 2.2% smallcap surge — Media (+3.66%), Realty (+1.94%) and Pharma (+1.91%) run while cement drops 2%, and breadth stays firmly positive at 2,455 advances",
    summary: "Indian equities finished Tuesday, 27 October 2026 almost exactly where they started. The Sensex closed 8.08 points, or 0.01%, lower at 73,598.67 and the Nifty 50 3.45 points, or 0.02%, lower at 22,749.75 — an eight-point move at the index level on a day the Nifty travelled between 22,636.85 and 22,829.75 and the Sensex between 73,210.76 and 73,762.98. It was the monthly derivatives expiry, and the flat headline concealed three quite different markets. First, financials bled: the Nifty Bank fell 391.80 points (-0.72%) to 53,974.90, Nifty Private Bank -0.73% and Nifty Financial Services -0.62%, with SBI (-1.63%), Axis Bank (-1.17%), ICICI Bank (-1.15%) and HDFC Bank (-1.14%) all lower, and AU Small Finance Bank (-2.42%) and M&M Financial (-6.59%) hit harder still. Second, cement cracked: Ambuja Cements fell 5.22%, Dalmia Bharat 6.57% and the Nifty Cement index 2.03%, the day's worst sector. Third, everything rate-sensitive and domestic bid higher — Nifty Media +3.66% on Sun TV's 10.92% jump, Nifty Realty +1.94%, Nifty Pharma +1.91% as Mankind Pharma rose 8.24% and Divi's Laboratories 5.03%, Nifty Chemicals +1.80%, Nifty Healthcare +1.65%, Nifty Auto +1.48% and Nifty Consumer Durables +1.19%. Tata Consumer Products was the Nifty's best stock, up 6.78% to Rs 1,000 after a 16% year-on-year rise in September-quarter net profit; Bharti Airtel added 3.20% on strong September subscriber data from TRAI, Bajaj Auto 3.17%, BSE 2.44% and Trent 2.42%. The macro backdrop was unchanged and unhelpful: Brent crude stayed near $115.8 a barrel, the rupee closed at 95.12 to the dollar, and foreign investors had sold another Rs 1,462.49 crore of equities on Monday. Two themes did the day's real work. Trendlyne attributed the IT drag (Nifty IT -0.26%, TCS -1.50%) to Anthropic's IPO announcement, and defence names jumped after the Defence Acquisition Council cleared order proposals worth Rs 2.1 lakh crore, lifting the Nifty India Defence index 1.82%. The broader market was unambiguously stronger than the benchmarks: Nifty Next 50 +1.30% to 67,343.95, Nifty Midcap 150 +0.92% to 21,003.15, Nifty Smallcap 250 +2.19% to 16,933.70, Nifty Microcap 250 +1.72%, Nifty 500 +0.58% to 21,734.90, and even the BSE SME IPO index +1.35% to 1,13,104.26. Breadth on the NSE was 2,455 advances against 1,103 declines across 3,665 stocks traded, though 157 stocks still printed 52-week lows against 28 fresh highs. India VIX dropped 4.41% to 16.40.",
    stats: ["Nifty -0.02%", "Sensex -0.01%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Tuesday — the week's wrap is Saturday-only

  dayByDay: [
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." },
    { date: "2026-10-22", label: "Thu 22 Oct", niftyClose: 22687.65, niftyChangePct: -0.54, sensexChangePct: -0.62, note: "A third straight decline, this one driven by crude: the Sensex fell 460.30 points (-0.62%) to 73,249.39 and the Nifty 50 123.70 points (-0.54%) to 22,687.65, closing below 22,700, after Brent surged more than 3% to a four-month high above $112 on a Houthi strike on Saudi Aramco's Shaybah field and fears of a US-Iran escalation. The Sensex fell as much as 705 points to a low of 73,005.11 and the Nifty to 22,554.85 before a late recovery; the rupee weakened to about 94.8. Fifteen of 16 sector gauges fell, led by Media (-2.35%), FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%) and Oil & Gas (-0.86%); only Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) ended green. Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the Nifty gainers; Nestle India (-2.78%, on an FSSAI notice), Eternal (-2.53%), HDFC Life (-2.09%) and Reliance Industries (-2.03%) led the losers. The broader market underperformed — Midcap 150 -0.81%, Smallcap 250 -1.09%, Microcap 250 -1.03% — India VIX rose about 0.9% to 15.82, NSE breadth was 1,026 advances vs 2,512 declines, and BSE market capitalisation fell about Rs 4 lakh crore. In the Nifty 500, IGIL (+10%, upper circuit) and Indian Hotels (+4.5%) led the gainers, while KEI Industries (-8.5%) and Swiggy (-6.1%, a fresh 52-week low) led the losers." },
    { date: "2026-10-23", label: "Fri 23 Oct", niftyClose: 22600.00, niftyChangePct: -0.39, sensexChangePct: -0.17, note: "A fourth straight decline, and a wild one: the Sensex opened higher at 73,665.64 and touched 73,766.51 before crashing as much as 1,314 points to 72,452.37, and the Nifty hit 22,787.25 before sliding to 22,372.00, before a late recovery left the Sensex down 125.56 points (-0.17%) at 73,123.83 and the Nifty down 87.65 points (-0.39%) at 22,600.00 — completing the week's slide. Brent rose about 1% to a four-month high above $114 on West Asia tension, and the rupee slipped to 94.94. All 16 major sector gauges fell, led by Metal (-2.71%), Consumer Durables (-2.63%), Realty (-2.38%) and PSU Bank (-2.26%); IT (-0.27%) was least affected. Eternal (+4.25%), Apollo Hospitals (+1.65%) and ONGC (+1.11%) led the Nifty gainers; Shriram Finance (-3.98%), Adani Enterprises (-2.86%) and JSW Steel (-2.83%) led the losers. The broader market fell far harder — Midcap 150 -2.07%, Smallcap 250 -2.79%, Microcap 250 -2.32%, Nifty 500 -1.24% to 21,427.60. In the Nifty 500, IGIL (+7.91%) and Cyient (+7.81%) led the gainers, while Swiggy plunged 16.75% to a fresh 52-week low on its Q2 miss and J&K Bank fell 16.28%. India VIX jumped 6.32% to 16.76, NSE breadth was 624 advances vs 3,011 declines, and BSE market capitalisation fell about Rs 7.42 lakh crore." },
    { date: "2026-10-26", label: "Mon 26 Oct", niftyClose: 22753.20, niftyChangePct: 0.68, sensexChangePct: 0.66, note: "A late-hour rescue ended the four-day slide: the Sensex opened at 72,990.04, sank to 72,514.57 and then rallied more than 1,000 points off that low to close 482.92 points (+0.66%) higher at 73,606.75, with the Nifty going from 22,387.35 to 22,753.20, up 153.20 points (+0.68%) — both at their session highs. Brent's 2% slide to about $114-$115 helped, but the real fuel was earnings: JSW Steel (+6.28%) after a near-threefold jump in September-quarter profit, Dr Reddy's (+6.62%) on a profit beat, BSE (+3.97%) on a broker upgrade, Kotak Mahindra Bank (+2.4%), Adani Ports (+2.92%) and Eternal (+2.57%). Metal (+2.21%), Pharma (+1.76%) and Oil & Gas (+1.35%) led 15 of 16 sector gauges higher. Shriram Finance (-4.62%, on a cut to its AUM guidance and a CLSA target cut), Tata Consumer (-2.84%), Bajaj Finance (-1.10%) and HDFC Life (-0.91%) fell. The broader market beat the benchmarks — Midcap 100 +1.19% to 56,465.40, Smallcap 100 +1.38% to 17,985.00, Midcap 150 +1.07%, Smallcap 250 +1.13%, Next 50 +0.99%, Nifty 500 +0.85% to 21,608.75 — while the BSE SME IPO index fell 0.43% to 1,11,599.92. India VIX firmed 1.78% to 17.16, NSE breadth was 2,062 advances against 1,525 declines, more than 500 stocks touched 52-week lows, and the rupee weakened 25 paise to 95.19 a dollar." },
    { date: "2026-10-27", label: "Tue 27 Oct", niftyClose: 22749.75, niftyChangePct: -0.02, sensexChangePct: -0.01, note: "An eight-point day on monthly F&O expiry. The Sensex closed 8.08 points (-0.01%) lower at 73,598.67 and the Nifty 50 3.45 points (-0.02%) lower at 22,749.75, after the Nifty sank to 22,636.85 and recovered to a high of 22,829.75 and the Sensex traded between 73,210.76 and 73,762.98. Underneath, financials and cement were sold — Nifty Bank -0.72% to 53,974.90, Private Bank -0.73%, Financial Services -0.62%, Cement -2.03% (Ambuja -5.22%, Dalmia Bharat -6.57%) — while media, realty, pharma and autos rose: Nifty Media +3.66%, Realty +1.94%, Pharma +1.91%, Chemicals +1.80%, Healthcare +1.65%, Auto +1.48%. Tata Consumer Products led the Nifty with a 6.78% jump to Rs 1,000 on a 16% rise in Q2 net profit, followed by Bharti Airtel (+3.20%), Bajaj Auto (+3.17%), BSE (+2.44%) and Trent (+2.42%); Asian Paints (-1.94%), Coal India (-1.73%), Grasim (-1.67%), SBI (-1.63%) and TCS (-1.50%) led the losers. The broader market beat the benchmarks by a distance — Next 50 +1.30% to 67,343.95, Midcap 150 +0.92% to 21,003.15, Smallcap 250 +2.19% to 16,933.70, Microcap 250 +1.72%, Nifty 500 +0.58% to 21,734.90, BSE SME IPO +1.35% to 1,13,104.26. Defence stocks jumped after the Defence Acquisition Council cleared orders worth Rs 2.1 lakh crore (Nifty India Defence +1.82%), while Trendlyne linked the IT drag to Anthropic's IPO announcement. India VIX fell 4.41% to 16.40, NSE breadth was 2,455 advances against 1,103 declines out of 3,665 stocks traded, 28 stocks hit 52-week highs and 157 hit lows, and the rupee closed at 95.12 a dollar." }
  ],

  sectors: [
    { name: "Nifty Media", changePct: 3.66, note: "The day's best sector by a wide margin, up 3.66% to 1,615.05, as Sun TV Network jumped 10.92% to Rs 634.55 and Prime Focus 9.04%; PVR INOX added 4.22%. Trendlyne's own sector dashboard put media's rise even higher at 5.4%, reflecting a different weighting basket. (Change of +3.66% and the 1,615.05 close are from NSE's official index close file for 27-10-2026; Trendlyne and Business Standard both name media the day's top-performing sector.)" },
    { name: "Nifty Realty", changePct: 1.94, note: "Rose 1.94% to 805.05 as rate-sensitive property names were bought back after last week's 2.38% slide; Sobha gained 4.40% to Rs 1,195.60. (Per NSE's official index close file; Business Standard lists realty among the day's gainers in the 2-3% range.)" },
    { name: "Nifty Pharma", changePct: 1.91, note: "Added 1.91% to 26,267.25 on a strong earnings day for drug makers: Mankind Pharma jumped 8.24% after a September-quarter beat, Divi's Laboratories 5.03%, Emcure Pharmaceuticals 5.34% and Concord Biotech 4.89%. (Per NSE's official index close file; Business Standard, ET Now and Upstox all report pharma among the day's leaders.)" },
    { name: "Nifty Chemicals", changePct: 1.80, note: "Up 1.80% to 26,827.45, reversing last week's 2.64% fall, as Acutaas Chemicals surged 13.27%, Navin Fluorine 7.73%, Privi Speciality 5.20% and Aether Industries 4.48%. (Per NSE's official index close file for 27-10-2026.)" },
    { name: "Nifty Healthcare", changePct: 1.65, note: "Gained 1.65% to 15,917.60, tracking pharma higher; the wider Nifty500 Healthcare index rose 2.07% and Nifty MidSmall Healthcare 2.84%, the strongest sub-index on the board. (Per NSE's official index close file for 27-10-2026.)" },
    { name: "Nifty Auto", changePct: 1.48, note: "Advanced 1.48% to 25,340.80 as Bajaj Auto rose 3.17% to Rs 10,390 and Sona BLW Precision Forgings jumped 8.95% after its numbers; Schaeffler India added 4.38% and Force Motors 4.74%. (Per NSE's official index close file; ET Now and Business Standard both name autos among the day's gainers.)" },
    { name: "Nifty Consumer Durables", changePct: 1.19, note: "Rose 1.19% to 34,254.80, recovering from last week's steep falls, with Bata India +6.09%, Whirlpool of India +5.44% and PG Electroplast +5.38%. (Per NSE's official index close file for 27-10-2026; Business Standard lists consumer durables among the outperformers.)" },
    { name: "Nifty FMCG", changePct: 0.74, note: "Up 0.74% to 43,118.20, carried almost entirely by Tata Consumer Products' 6.78% jump to Rs 1,000 after its 16% rise in September-quarter net profit; the index still sits more than 20% below its 52-week high. (Per NSE's official index close file; Upstox and Angel One both report Tata Consumer as the Nifty's top gainer at +6.78%.)" },
    { name: "Nifty Energy", changePct: 0.68, note: "Added 0.68% to 35,261.85 even with Brent near $115.80 a barrel, as JSW Energy rose 4.45% and Adani Energy Solutions 4.26%. (Per NSE's official index close file for 27-10-2026.)" },
    { name: "Nifty Metal", changePct: 0.64, note: "Edged 0.64% higher to 11,806.70, extending Monday's 2.21% rebound, though JSW Steel slipped 0.58%; Vedanta Iron and Steel hit the 5% upper circuit. (Per NSE's official index close file; Strota's closing table shows JSW Steel at -0.58%.)" },
    { name: "Nifty PSU Bank", changePct: 0.41, note: "Rose 0.41% to 8,126.70 as state-run lenders rallied late on reports the government is considering allowing up to 49% direct foreign investment in public-sector banks — Bank of India +4.51%, Bank of Maharashtra +5.10%, Canara Bank and Bank of Baroda up more than 2.5%. (Per NSE's official index close file; the FDI report and the individual moves are from Trade In Zone's closing round-up and Upstox.)" },
    { name: "Nifty IT", changePct: -0.26, note: "Slipped 0.26% to 32,189.45 as TCS fell 1.50%, despite a 2.7% gain for Infosys and strength in mid-cap IT (Coforge +4%, eClerx +4.8%, Firstsource +8.1%). Trendlyne attributed the weakness to Anthropic's IPO announcement. (Per NSE's official index close file; ET Now, Business Standard and Trendlyne all report IT as a drag. Note that some intraday prints showed the index down as much as 1.42% before the late recovery.)" },
    { name: "Nifty Financial Services", changePct: -0.62, note: "Fell 0.62% to 24,303.75 as lenders were sold across the board: HDFC Bank -1.14%, ICICI Bank -1.15%, Axis Bank -1.17%, SBI -1.63%, with M&M Financial down 6.59% and AU Small Finance Bank 2.42%. (Per NSE's official index close file; Business Standard names private banks and financial services the day's top laggards.)" },
    { name: "Nifty Bank", changePct: -0.72, note: "The banking gauge lost 391.80 points, or 0.72%, to close at 53,974.90 — back below 54,000 — after trading between 53,951.20 and 54,654.05. AU Small Finance Bank, SBI and IndusInd Bank were the biggest drags, with Kotak Mahindra Bank the main offset. (Closing level of 53,974.90 and a fall of 391.80 points are from NSE's official index close file for 27-10-2026; ET Now reports the index fell more than 350 points to close below 54,000, consistent with the NSE print. Intraday snapshots during the session showed the index still in the green.)" },
    { name: "Nifty Private Bank", changePct: -0.73, note: "Down 0.73% to 26,628.45, the weakest of the financial gauges, as HDFC Bank, ICICI Bank and Axis Bank all fell more than 1%. (Per NSE's official index close file; Business Standard names private banks the day's top laggard sector.)" },
    { name: "Nifty Cement", changePct: -2.03, note: "The day's worst sector, down 2.03% to 13,426.65, as Ambuja Cements fell 5.22% to Rs 348.80, Dalmia Bharat 6.57% to Rs 1,519.00 and UltraTech Cement gave up early gains. Cement was the one large domestic cyclical that did not participate in the broader rally. (Per NSE's official index close file; the individual moves are from Strota's closing Nifty 500 table and Trendlyne's closing report.)" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Tuesday, 27 October 2026, screened across the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250), not just the Nifty 50/Midcap 100/Smallcap 100 sub-indices. Percentage moves and closing prices are taken from Research & Investment's NIFTY 500 gainers-and-losers tables as of 16:08 IST on 27 October and cross-checked name by name against Strota's closing Nifty 500 lists, which agree on all ten names and on nine of the ten percentages; the tenth (Data Patterns) shows 9.16% on Research & Investment and Strota against 9.49% on Upstox's Smallcap 100 table, and the lower print is used here. Intraday-only snapshots (e.g. Ola Electric at +11.79% and Onesource at +13.78% at 12:19 pm on 5paisa, Aegis Logistics at -8.66% at 10:09 am on Upstox) are not used.",
    gainers: [
      { name: "Ola Electric Mobility", changePct: 16.23, cap: "Smallcap", note: "The Nifty 500's biggest gainer, up 16.23% to Rs 34.80 on volume of 33.2 crore shares — the heaviest turnover of any stock on the board — extending a recovery that began late last week as the electric two-wheeler maker's turnaround narrative regained traction" },
      { name: "Onesource Specialty Pharma", changePct: 13.78, cap: "Smallcap", note: "Surged 13.78% to Rs 1,589.80 on Rs 1,240 crore of traded value, part of a broad re-rating of pharma and healthcare names after Mankind Pharma's strong quarter" },
      { name: "Acutaas Chemicals", changePct: 13.27, cap: "Smallcap", note: "Jumped 13.27% to Rs 3,793.30, closing just below its 52-week high of Rs 3,900, as the specialty-chemicals complex rebounded with the Nifty Chemicals index up 1.80%" },
      { name: "Sun TV Network", changePct: 10.92, cap: "Midcap", note: "Rose 10.92% to Rs 634.55, single-handedly lifting the Nifty Media index 3.66% — the day's best sector" },
      { name: "Data Patterns (India)", changePct: 9.16, cap: "Smallcap", note: "Added 9.16% to Rs 4,119.40 as defence electronics names rallied after the Defence Acquisition Council approved order proposals worth Rs 2.1 lakh crore (Upstox's Smallcap 100 table shows 9.49%)" }
    ],
    losers: [
      { name: "Aegis Logistics", changePct: -7.05, cap: "Midcap", note: "The Nifty 500's worst performer, down 7.05% to Rs 1,200.10, giving back part of a strong run — the stock was at Rs 1,291.10 on Monday and is still up more than 60% over twelve months" },
      { name: "Mahindra & Mahindra Financial Services", changePct: -6.59, cap: "Midcap", note: "Slid 6.59% to Rs 260.85, the biggest drag on the Nifty Midcap 100 and Midcap 150, as NBFCs were sold and the Nifty NBFC index fell 0.33%" },
      { name: "Dalmia Bharat", changePct: -6.57, cap: "Largecap", note: "Fell 6.57% to Rs 1,519.00 after its September-quarter numbers, leading the cement pack lower alongside Ambuja Cements (-5.22%) as the Nifty Cement index dropped 2.03%" },
      { name: "Mazagon Dock Shipbuilders", changePct: -6.45, cap: "Midcap", note: "Dropped 6.45% to Rs 1,754.00 on Rs 726 crore of traded value, a sharp reversal for a defence name on the very day the DAC cleared Rs 2.1 lakh crore of orders" },
      { name: "Ambuja Cements", changePct: -5.22, cap: "Largecap", note: "Lost 5.22% to Rs 348.80, one of the heaviest weights dragging the Sensex and the Nifty Cement index to the day's worst sector performance" }
    ],
    sensexWinners: ["Bharti Airtel", "Trent", "Maruti Suzuki"],
    sensexLaggards: ["State Bank of India", "Axis Bank", "TCS"]
  },

  watch: [
    {
      title: "The Federal Reserve's decision on Wednesday",
      detail: "The US central bank concludes its 27-28 October meeting on Wednesday, and most economists expect no change in rates. For India the decision matters less for the rate itself than for the dollar, US yields and the flow of foreign money into emerging markets. The rupee closed at 95.12 to the dollar on Tuesday, up 3 paise, and foreign investors sold another Rs 1,462.49 crore of Indian equities on Monday. A hawkish surprise would tighten financial conditions just as crude sits near $115. Watch the statement language on inflation and the dollar index on Thursday morning."
    },
    {
      title: "Crude at $115.80 is still the single biggest swing factor",
      detail: "Brent barely moved on Tuesday, dipping 0.03% to $115.80 a barrel, but that is still close to a four-month high and roughly $10 above where it sat at the start of October. For India, the world's third-largest crude importer, every $5 on Brent feeds the import bill, the current-account gap and corporate margins. The day's sector map showed the tension clearly: energy and oil & gas held up, refiners were firm, but paint makers (Asian Paints -1.94%, the Nifty's worst stock) and other crude-derivative consumers were sold. A sustained move back above $118 would likely be the trigger for another broad risk-off day."
    },
    {
      title: "Anthropic's IPO announcement just repriced Indian IT",
      detail: "Trendlyne attributed Tuesday's IT weakness — Nifty IT -0.26%, TCS -1.50% — to Anthropic's IPO announcement, on the reading that a listed, well-capitalised frontier AI lab changes the competitive map for outsourced services. The nuance matters: Infosys rose 2.7% and mid-cap IT was strong (Firstsource +8.1%, eClerx +4.8%, Coforge +4%), so this was a large-cap, deal-pipeline worry rather than a sector-wide sell-off. Watch whether the read-through hardens into a de-rating of the big-cap IT names as the Q2 season's guidance cuts get revisited."
    },
    {
      title: "Rs 2.1 lakh crore of defence orders — but not for everyone",
      detail: "The Defence Acquisition Council cleared order proposals worth Rs 2.1 lakh crore, and the Nifty India Defence index rose 1.82% to 8,819.90. Paras Defence, Apollo Micro Systems and ideaForge rose sharply, while Mazagon Dock Shipbuilders fell 6.45% and Bharat Dynamics 2.24% — a reminder that in this theme the award, not the headline, is what moves a stock. Watch the formal contract announcements over the coming weeks and which companies are actually named."
    },
    {
      title: "The earnings tail, and a market that is quietly broadening",
      detail: "With monthly F&O expiry out of the way, the rest of this week belongs to Q2 FY27 results. Tuesday's split was instructive: Mankind Pharma +8.24% and Tata Consumer +6.78% on beats, against Dalmia Bharat -6.57%, Ambuja Cements -5.22%, Aegis Logistics -7.05% and M&M Financial -6.59% on disappointments. Underneath the flat indices the market is broadening — 2,455 NSE advances against 1,103 declines, Nifty Smallcap 250 +2.19%, Microcap 250 +1.72% — but 157 stocks still printed 52-week lows against 28 fresh highs, so the breadth is uneven. Watch whether the mid- and small-cap bid survives the next round of results."
    }
  ],

  reads: [
    {
      title: "Sensex today | Stock Market Highlights: Stock markets end largely unchanged amid elevated crude oil prices, selling in bank stocks",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-27-october-2026/article71626702.ece"
    },
    {
      title: "Stock Market Close: Sensex ends flat, Nifty at 22,750; pharma, realty, consumer durables outperform",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-october-27-nse-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-jio-ipo-listing-price-126102700086_1.html"
    },
    {
      title: "Sensex, Nifty end flat; Tata Consumer tops gainers, financials drag market",
      source: "ET Now",
      url: "https://www.etnownews.com/markets/sensex-nifty-close-flat-financial-services-drag-top-gainers-losers-october-27-article-156415273"
    },
    {
      title: "Market closes flat, weighed down by losses in IT stocks",
      source: "Trendlyne",
      url: "https://trendlyne.com/posts/5911590/market-closes-flat-weighed-down-by-losses-in-it-stocks"
    },
    {
      title: "Top gainers and losers, Oct 27: Asian Paints, Coal India fall 2%; Tata Consumer Products jumps 7%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-27-asian-paints-coal-india-fall-2-tata-consumer-products-jumps-7/article-202481/"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Working Capital",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288); the balance sheet pages cited below, printed pp. 316-317, are PDF pp. 286-287.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Working Capital = Total current assets - Total current liabilities",
    formulaNote: "Working capital is the rupee answer to a question the current ratio only answers as a multiple: after paying everything that falls due within a year, how much cash-convertible resource is left over to run the business? It is the operating buffer — the money that funds a month of salaries, a subcontractor invoice, an unplanned hardware purchase, without touching borrowings. Unlike the current ratio it is measured in rupees, so it scales with the size of the company and cannot be compared across firms; what it is good for is watching a single company's cushion expand or contract year after year. A positive number is normal for an asset-light services business; a negative one is normal for a retailer that funds itself on suppliers' credit. The number is a snapshot of a single day, so it is always read alongside the cash-flow statement rather than instead of it.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets, as at March 31, 2026", value: "Rs 1,03,489 crore", page: "p. 316-317" },
      { label: "Total current liabilities, as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 316-317" },
      { label: "Total current assets, as at March 31, 2025 (for the year-on-year comparison)", value: "Rs 97,099 crore", page: "p. 316-317" },
      { label: "Total current liabilities, as at March 31, 2025 (for the year-on-year comparison)", value: "Rs 42,850 crore", page: "p. 316-317" }
    ],
    working: "Step 1 — Take the current assets. The Consolidated Balance Sheet (Ind AS) at printed pp. 316-317 shows total current assets of Rs 1,03,489 crore as at March 31, 2026, built from current investments Rs 12,950 crore, trade receivables Rs 35,234 crore, cash and cash equivalents Rs 22,201 crore, loans Rs 234 crore, other financial assets Rs 15,890 crore, income tax assets Rs 1,835 crore and other current assets Rs 15,145 crore. Step 2 — Take the current liabilities. The same statement shows total current liabilities of Rs 52,322 crore, made up of lease liabilities Rs 3,160 crore, trade payables Rs 4,744 crore, other financial liabilities Rs 21,483 crore, other current liabilities Rs 15,779 crore, provisions Rs 1,512 crore and income tax liabilities Rs 5,644 crore. Step 3 — Subtract: Working capital = 1,03,489 - 52,322 = Rs 51,167 crore. Step 4 — Do the same for FY25: 97,099 - 42,850 = Rs 54,249 crore. Step 5 — Measure the change: 51,167 - 54,249 = -Rs 3,082 crore, a fall of 5.68%. In plain terms, at 31 March 2026 Infosys had Rs 51,167 crore of short-term resources left over after meeting every obligation due within a year — about Rs 3,082 crore less buffer than it had a year earlier.",
    result: "Rs 51,167 crore (FY25: Rs 54,249 crore)",
    meaning: "Rs 51,167 crore is an enormous cushion for a services business. Infosys could clear every rupee of liabilities due within twelve months and still hold Rs 51,167 crore of short-term resources — more than twice its trade payables, other current liabilities and provisions combined (Rs 4,744 crore + Rs 15,779 crore + Rs 1,512 crore = Rs 22,035 crore). That is the balance sheet of a company that does not need to borrow to operate. What matters more is the direction. Current liabilities grew 22.1% (from Rs 42,850 crore to Rs 52,322 crore) while current assets grew only 6.6% (from Rs 97,099 crore to Rs 1,03,489 crore), and the gap is what shrank the buffer by Rs 3,082 crore. Read the composition rather than the headline: the increase sits largely in other financial liabilities (up sharply) and other current liabilities, which for an IT services firm is the accrual of employee-benefit obligations, unearned revenue and the payable for a large capital return — Infosys bought back 10 crore shares during FY26 and paid substantial dividends, both of which draw cash and reserves down. A working-capital cushion that shrinks because a company is handing cash back to shareholders is a very different thing from one that shrinks because customers are paying late or a lender is calling in short-term debt, and the consolidated cash-flow statement in the same audited financial statements is what tells you which. The number to watch is whether the buffer stabilises around Rs 50,000 crore or keeps contracting while buybacks continue.",
    crossCheck: "The result reconciles cleanly across two independent presentations of the same audited year. The IFRS consolidated balance sheet in Infosys' Q4 FY26 audited statement reports current assets of Rs 1,03,489 crore and current liabilities of Rs 52,322 crore as at March 31, 2026 — identical totals to the Ind AS balance sheet in the annual report, even though the line items are grouped differently (IFRS splits out unbilled revenue, derivative instruments and unearned revenue, while Ind AS folds them into other financial assets, other current assets and other current liabilities). Both presentations give working capital of Rs 51,167 crore. On Screener.in and Trendlyne the figure can differ by a few hundred crore, and the reason is convention rather than error: those screeners build working capital from a narrower set of balance-sheet buckets — typically excluding current investments and income tax assets from the asset side and mapping 'other current liabilities' into a generic 'other liabilities' line — so their numerators and denominators are not the same as the audited statements. The audited Ind AS figure is used here because it is the number the company itself reports and files.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (Ind AS), printed pp. 316-317 (PDF pp. 286-287), for total current assets (Rs 1,03,489 crore; Rs 97,099 crore) and total current liabilities (Rs 52,322 crore; Rs 42,850 crore) as at March 31, 2026 and March 31, 2025, together with the underlying line items; the capital-return detail (the FY26 share buyback and dividends) is from the consolidated cash-flow statement in the same audited financial statements; cross-checked against the audited IFRS consolidated balance sheet in Infosys' Q4 FY26 results, which reports the same two totals."
  }
};
