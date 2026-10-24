const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 24 October 2026, 5:30 PM IST — Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 23 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22600.00,
      dayChange: -87.65,
      dayChangePct: -0.39,
      weekChangePct: -2.36, // week vs prior Friday, 16 Oct close of 23,146.15
      spark: [23146.15, 22888.95, 22811.35, 22687.65, 22600.00], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The benchmark lost 546.15 points, or 2.36%, over the holiday-shortened week to close at 22,600.00, snapping a two-week winning streak, as Brent crude rose almost 7% to a five-month high near $114–$117 on West Asia supply fears. The Nifty fell in all four sessions and ended below both its 200-week and 20-day moving averages; its weekly range was about 803 points, and only seven of the 50 constituents finished the week higher, led by HCL Technologies, TCS and ONGC. (Week change of -2.36% cross-checked across MarketCue, BNP Paribas Mutual Fund, Upstox, The Hindu BusinessLine and Finology; closing level of 22,600.00 per the NSE.)"
    },
    {
      name: "Nifty Next 50",
      close: 65828.60,
      dayChange: -1525.55,
      dayChangePct: -2.26,
      weekChangePct: -4.58, // week vs prior Friday, 16 Oct close of 68,988.60
      spark: [68988.60, 68695.85, 67655.30, 67354.15, 65828.60], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The 'next rung' of large caps fell 4.58% over the week to 65,828.60, underperforming the Nifty's 2.36% fall as its heavier tilt to capital-goods, PSU and mid-sized financial names came under pressure in the broad risk-off move; the index traded as low as about 65,081 intraday. (Week change of -4.58% per MarketCue and BNP Paribas Mutual Fund; closing level of 65,828.60 and a daily fall of 2.26% agree across Anand Rathi and Investing.com.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 20592.75,
      dayChange: -435.90,
      dayChangePct: -2.07,
      weekChangePct: -5.26, // week vs prior Friday, 16 Oct close of 21,736.75
      spark: [21736.75, 21499.30, 21200.25, 21028.65, 20592.75], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "Midcaps fell 5.26% for the week to 20,592.75 — their worst week in 20 months — underperforming the headline index as the sell-off spread well beyond large caps; the gauge still trades at about 27 times earnings even after the fall. (Week change of -5.26% cross-checked across MarketCue, BNP Paribas Mutual Fund and LiveMint; closing level of 20,592.75 and a daily fall of 2.07% per Screener.in and Investing.com.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 16385.15,
      dayChange: -471.05,
      dayChangePct: -2.79,
      weekChangePct: -7.10, // week vs prior Friday, 16 Oct close of 17,637.65
      spark: [17637.65, 17495.90, 17041.95, 16856.20, 16385.15], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "Small caps were the weakest of the main size indices, shedding 7.10% for the week to 16,385.15 — their steepest weekly fall since February 2025 and their worst in 20 months — as risk aversion hit the smallest end hardest; the index still trades near 34 times earnings. (Week change of -7.10% per MarketCue and BNP Paribas Mutual Fund; closing level of 16,385.15 and a daily fall of 2.79% cross-checked across Investing.com and Moneycontrol.)"
    },
    {
      name: "BSE SME Index",
      close: 112084.71,
      dayChange: -3488.16,
      dayChangePct: -3.02,
      weekChangePct: -8.10, // week vs prior Friday, 16 Oct close of 1,21,957.58
      spark: [121957.58, 120033.96, 116484.98, 115572.87, 112084.71], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The BSE SME IPO index fell 8.10% over the week to 1,12,084.71 as the risk-off mood hit the most speculative end of the market hardest, extending its slide to a fourth straight session on Friday with a 3.02% fall (3,488.16 points) after touching an intraday low of 1,11,095.35. (Week change of -8.10% and a daily fall of 3.02% cross-checked across the BSE Indices historical series and Anand Rathi; closing level of 1,12,084.71 also per Goodreturns and 5paisa.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: null, // Saturday — the week's wrap sits in weeklyWrap below

  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "Sensex sheds 1,605 points (-2.15%) to 73,123 and Nifty falls 546 points (-2.36%) to 22,600 as crude tops $114 on West Asia tension — a holiday-shortened week snaps a two-week winning streak; Midcap 150 (-5.26%) and Smallcap 250 (-7.10%) post their worst week in 20 months and Nifty IT (+0.22%) is the only sector to gain",
    summary: "Indian equities snapped a two-week winning streak in the holiday-shortened week of 19–23 October 2026, with the Sensex shedding 1,605.44 points, or 2.15%, to close at 73,123.83 and the Nifty 50 falling 546.15 points, or 2.36%, to 22,600.00, as a fresh surge in crude oil and renewed foreign selling overwhelmed an otherwise solid run of September-quarter earnings. The week's defining move was oil: Brent climbed almost 7% from about $109.65 a barrel on Monday to a five-month high near $114–$117 on Friday after Houthi attacks on Saudi Arabian energy infrastructure and fears of a wider US–Iran confrontation, reviving imported-inflation worries for India, the world's third-largest crude importer. The rupee traded in a 94.32–94.97 band and ended virtually flat at 94.94 a dollar. All four sessions closed lower — Monday 19 October (Nifty -1.11%), Wednesday 21 October (-0.34%), Thursday 22 October (-0.54%) and Friday 23 October (-0.39%) — with the market shut on Tuesday, 20 October, for Dussehra. The damage was far heavier outside the large caps: the Nifty Midcap 150 fell 5.26% and the Nifty Smallcap 250 7.10%, their worst week in 20 months, and the broader Nifty 500 dropped 3.78% to 21,427.60, while the Nifty Next 50 slid 4.58%. Only one of the 16 major NSE sector gauges rose — Nifty IT, up 0.22%, as TCS (+2.6% for the week), HCL Technologies (+3.1%) and Infosys (which added 2.48% on Friday after its Q2 results) benefited from a rotation into software and away from the global AI-hardware trade. Everything else fell: PSU Bank (-0.3%), Cement (-1.1%), Oil & Gas (-1.7%), Pharma (-1.8%), Healthcare (-1.9%) and Bank (-2.79%) held up best, while Auto (-3.52%), FMCG (-4.34%), Realty (-5.0%), Media (-5.1%), Metal (-5.40%), Capital Markets (-6.0%), Consumer Durables (-6.4%), India Defence (-7.0%) and Chemicals (-7.19%) were the worst hit. In the Nifty 500, the week's biggest gainers were International Gemmological Institute (+16.93%, after a 43% jump in Q2 net profit), Chennai Petroleum (+4.9%), India Cements (+4.47%), Anand Rathi Wealth (+3.5%) and HCL Technologies (+3.1%), while Himadri Speciality Chemical (-25.5%, its worst week since 2008 on margin compression), Swiggy (-24.5% to a record low on a weak September quarter), KEI Industries (-16.9%), CreditAccess Grameen (-16.7%) and Urban Company (-16.0%) led the losses. India VIX jumped about 19% over the week to 16.76 and the market value of BSE-listed companies fell roughly Rs 20.6 lakh crore, of which mid- and small-caps accounted for about Rs 8.9 lakh crore. The week also left the RBI's repo rate at 5.50% after a 25-basis-point hike earlier in October, and saw Reliance Industries' Rs 30,213-crore Jio Platforms IPO — India's largest ever — close heavily oversubscribed.",
    stats: ["Nifty -2.36%", "Sensex -2.15%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    { date: "2026-10-19", label: "Mon 19 Oct", niftyClose: 22888.95, niftyChangePct: -1.11, sensexChangePct: -1.17, note: "The two-week rally ended with a thud: the Sensex fell 876.37 points (-1.17%) to 73,852.90 and the Nifty 50 257.20 points (-1.11%) to 22,888.95, slipping back below 23,000, as private banks and IT — the previous week's leaders — led the decline after mixed Q2 results and with Brent near $108. Axis Bank (-4.19%) was the worst Nifty performer on a Q2 profit that missed consensus, followed by Tata Motors Passenger Vehicles (-3.09%), Infosys (-2.63%), Bajaj Finance (-2.52%) and Apollo Hospitals (-2.41%); HDFC Bank lost 2.31%. PSU banks were the lone sector in the green, the Nifty PSU Bank index up 2.46% as PNB (+4.73%, Q2 PAT Rs 5,500 crore) and Union Bank of India rallied. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) topped the gainers. Breadth was poor (1,163 advances vs 2,925 declines), the Nifty 500 fell 1.03% to 22,041.60, Midcap 100 -1.09% and Smallcap 100 -1.01%, India VIX rose 4.48% to 14.69 and the rupee closed 3 paise lower at 94.92." },
    { date: "2026-10-20", label: "Tue 20 Oct", niftyClose: null, note: "Markets closed for Dussehra (Vijaya Dashami) — the NSE and BSE shut for the day, making it a four-session trading week." },
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." },
    { date: "2026-10-22", label: "Thu 22 Oct", niftyClose: 22687.65, niftyChangePct: -0.54, sensexChangePct: -0.62, note: "A third straight decline, this one driven by crude: the Sensex fell 460.30 points (-0.62%) to 73,249.39 and the Nifty 50 123.70 points (-0.54%) to 22,687.65, closing below 22,700, after Brent surged more than 3% to a four-month high above $112 on a Houthi strike on Saudi Aramco's Shaybah field and fears of a US-Iran escalation. The Sensex fell as much as 705 points to a low of 73,005.11 and the Nifty to 22,554.85 before a late recovery; the rupee weakened to about 94.8. Fifteen of 16 sector gauges fell, led by Media (-2.35%), FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%) and Oil & Gas (-0.86%); only Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) ended green. Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the Nifty gainers; Nestle India (-2.78%, on an FSSAI notice), Eternal (-2.53%), HDFC Life (-2.09%) and Reliance Industries (-2.03%) led the losers. The broader market underperformed — Midcap 150 -0.81%, Smallcap 250 -1.09%, Microcap 250 -1.03% — India VIX rose about 0.9% to 15.82, NSE breadth was 1,026 advances vs 2,512 declines, and BSE market capitalisation fell about Rs 4 lakh crore. In the Nifty 500, IGIL (+10%, upper circuit) and Indian Hotels (+4.5%) led the gainers, while KEI Industries (-8.5%) and Swiggy (-6.1%, a fresh 52-week low) led the losers." },
    { date: "2026-10-23", label: "Fri 23 Oct", niftyClose: 22600.00, niftyChangePct: -0.39, sensexChangePct: -0.17, note: "A fourth straight decline, and a wild one: the Sensex opened higher at 73,665.64 and touched 73,766.51 before crashing as much as 1,314 points to 72,452.37, and the Nifty hit 22,787.25 before sliding to 22,372.00, before a late recovery left the Sensex down 125.56 points (-0.17%) at 73,123.83 and the Nifty down 87.65 points (-0.39%) at 22,600.00 — completing the week's slide. Brent rose about 1% to a four-month high above $114 on West Asia tension, and the rupee slipped to 94.94. All 16 major sector gauges fell, led by Metal (-2.71%), Consumer Durables (-2.63%), Realty (-2.38%) and PSU Bank (-2.26%); IT (-0.27%) was least affected. Eternal (+4.25%), Apollo Hospitals (+1.65%) and ONGC (+1.11%) led the Nifty gainers; Shriram Finance (-3.98%), Adani Enterprises (-2.86%) and JSW Steel (-2.83%) led the losers. The broader market fell far harder — Midcap 150 -2.07%, Smallcap 250 -2.79%, Microcap 250 -2.32%, Nifty 500 -1.24% to 21,427.60. In the Nifty 500, IGIL (+7.91%) and Cyient (+7.81%) led the gainers, while Swiggy plunged 16.75% to a fresh 52-week low on its Q2 miss and J&K Bank fell 16.28%. India VIX jumped 6.32% to 16.76, NSE breadth was 624 advances vs 3,011 declines, and BSE market capitalisation fell about Rs 7.42 lakh crore." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 0.22, note: "The week's only gaining sector, up 0.22%, as investors rotated into software and away from a global sell-off in AI-hardware names; TCS (+2.6% for the week), HCL Technologies (+3.1%) and Infosys led, and the gauge held up while every other major index fell. (Weekly change of +0.22% per MarketCue and BNP Paribas Mutual Fund; Upstox also flags IT as the only weekly gainer.)" },
    { name: "Nifty PSU Bank", changePct: -0.3, note: "The mildest faller among the major gauges, down about 0.3% to 8,070.70, after leading Monday's session higher on quarterly earnings and steady asset quality. (Per Zee Business's weekly sector table.)" },
    { name: "Nifty Cement", changePct: -1.1, note: "Lost about 1.1% to 13,446.15, a comparatively small fall as cement names were treated as defensives. (Per Zee Business.)" },
    { name: "Nifty Oil & Gas", changePct: -1.7, note: "Slipped 1.7% to 10,380.55 despite crude's rally above $114 — upstream gains could not offset weakness elsewhere. (Per Zee Business and BNP Paribas Mutual Fund.)" },
    { name: "Nifty Services Sector", changePct: -1.79, note: "A relative outlier, easing only 1.79% as services names cushioned the fall. (Per BNP Paribas Mutual Fund.)" },
    { name: "Nifty Pharma", changePct: -1.8, note: "Down 1.8% to 25,329.45, giving back part of the previous week's gains. (Per Zee Business.)" },
    { name: "Nifty Healthcare", changePct: -1.9, note: "Fell 1.9% to 15,387, among the smaller weekly declines. (Per Zee Business.)" },
    { name: "Nifty Bank", changePct: -2.79, note: "The banking gauge lost 2.79% (1,556.65 points) to close at 54,287.35, with private lenders and NBFCs under pressure; it swung more than 1,000 points intraday on Friday. (Per Finology and Zee Business.)" },
    { name: "Nifty Auto", changePct: -3.52, note: "Fell 3.52% to 24,862.30 as higher crude raised fuel, logistics and raw-material cost worries for the sector. (Per Finology and Zee Business.)" },
    { name: "Nifty FMCG", changePct: -4.34, note: "Slid 4.34% to 42,680.70, extending a rough run for staples as crude-led inflation worries weighed on the defensive pack. (Per Finology, Zee Business and BNP Paribas Mutual Fund.)" },
    { name: "Nifty Realty", changePct: -5.0, note: "Lost 5.0% to 784.35, among the weakest sectors as rate-sensitive property names were hit hard. (Per Zee Business, Upstox and Moneycontrol.)" },
    { name: "Nifty Media", changePct: -5.1, note: "Fell 5.1% to 1,563.40. (Per Zee Business and Upstox.)" },
    { name: "Nifty Metal", changePct: -5.40, note: "Tumbled 5.40% to 11,478.20, the weakest of the large sectors, as JSW Steel, Tata Steel and Hindalco led the fall. (Per BNP Paribas Mutual Fund, Zee Business and Upstox.)" },
    { name: "Nifty Capital Markets", changePct: -6.0, note: "Dropped about 6% as brokers and wealth managers — Motilal Oswal Financial Services, KFin Technologies, 360 ONE WAM and Angel One — were sold off hard. (Per Moneycontrol.)" },
    { name: "Nifty Consumer Durables", changePct: -6.4, note: "Fell 6.4% to 33,922, the second-worst performer, as consumer-discretionary names were dumped. (Per Zee Business and Upstox.)" },
    { name: "Nifty India Defence", changePct: -7.0, note: "Plunged about 7% — 7.1% per Upstox — the week's worst-hit theme, as defence names such as HAL and BEL came under heavy selling. (Per Moneycontrol and Upstox.)" },
    { name: "Nifty Chemicals", changePct: -7.19, note: "The week's weakest sector, down 7.19% (about 2,039 points) to 26,325 from 28,364.25, as speciality-chemical names were hammered. (Per MarketCue and Zee Business.)" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 week gainers and losers for the week of 19–23 October 2026, screened across the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250), not just the Nifty 50/Midcap 100/Smallcap 100 sub-indices. Weekly percentage moves cross-checked across the NSE-sourced weekly gainers-and-losers tables reproduced by Upstox (Nifty 50, Midcap 100 and Smallcap 100), MarketsMojo's weekly stock-in-action notes (International Gemmological Institute, Swiggy), and LiveMint / The Economic Times / Kotak Neo stock pages for the individual names. Notably, Sun TV Network — a Nifty 500 name outside the Midcap 100/Smallcap 100 sub-indices — fell about 9.3% over the week and was screened across the full universe but ranked outside the top five losers, while India Cements (+4.47%) is included among the gainers precisely because it, too, sits outside those sub-index tables. Where feeds round or timestamp differently, the closing figure is used and the range is noted.",
    gainers: [
      { name: "International Gemmological Institute", changePct: 16.93, cap: "Smallcap", note: "The Nifty 500's best performer for the week, up 16.93% to about Rs 382 from Rs 326.95, after consolidated Q2 FY27 net profit jumped 43% year-on-year to Rs 185.8 crore on revenue up 31% to Rs 398 crore; the stock hit the 10% upper circuit on Thursday and added another 8.5% on Friday, closing near its 52-week high" },
      { name: "Chennai Petroleum Corporation", changePct: 4.9, cap: "Smallcap", note: "Rose 4.9% over the week to about Rs 1,476, one of the few Nifty 500 names to gain as refiners benefited from the crude rally; it was also among Friday's small-cap gainers" },
      { name: "India Cements", changePct: 4.47, cap: "Smallcap", note: "Added 4.47% for the week to Rs 315.80, including a 12.04% surge on Wednesday 21 October, standing out in a falling market — a Nifty 500 name outside the Midcap 100 and Smallcap 100 sub-indices" },
      { name: "Anand Rathi Wealth", changePct: 3.5, cap: "Smallcap", note: "Gained 3.5% over the week, one of the strongest small-cap performers as the broader market fell" },
      { name: "HCL Technologies", changePct: 3.1, cap: "Largecap", note: "The best Nifty 50 performer for the week, up 3.1%, as IT stayed the only sector in the green amid a rotation into software" }
    ],
    losers: [
      { name: "Himadri Speciality Chemical", changePct: -25.5, cap: "Smallcap", note: "The Nifty 500's worst performer for the week, down 25.5% — its steepest weekly fall since 2008 — after Q2 FY27 revenue rose 44% year-on-year but material costs rose faster and squeezed the EBITDA margin to 20% from 22.7%" },
      { name: "Swiggy", changePct: -24.5, cap: "Midcap", note: "Plunged about 24.5% over the week (about 24.9% on the NSE tables) to a record low of about Rs 176, its biggest weekly fall, after a September quarter that showed a Rs 922-crore net loss and widening Instamart losses; several brokerages cut targets" },
      { name: "KEI Industries", changePct: -16.9, cap: "Midcap", note: "Slid about 16.9% over the week, among the worst midcap falls, as cables and electrical names were de-rated" },
      { name: "CreditAccess Grameen", changePct: -16.7, cap: "Smallcap", note: "Fell about 16.7% for the week, one of the sharpest small-cap declines as microfinance and lending names came under pressure" },
      { name: "Urban Company", changePct: -16.0, cap: "Smallcap", note: "Dropped about 16% after its Q2 FY27 consolidated net loss widened to Rs 182.5 crore from Rs 59.3 crore a year earlier" }
    ],
    sensexWinners: ["HCL Technologies", "Tata Consultancy Services", "UltraTech Cement"],
    sensexLaggards: ["Adani Enterprises", "Shriram Finance", "Tata Motors"]
  },

  watch: [
    {
      title: "Crude above $114 and the West Asia risk premium",
      detail: "Brent rose almost 7% over the week to a five-month high near $114–$117 a barrel — December futures touched $115 on Friday evening — on Houthi attacks on Saudi energy infrastructure and fears of a US–Iran escalation, with WTI near $100. For India, the world's third-largest crude importer, higher oil lifts the import bill, squeezes corporate margins and feeds straight into equity weakness and a softer rupee (94.94 a dollar). Analysts see Brent testing $118 in the coming days. A sustained moderation in crude — and a steadier rupee — is what the market needs for a durable recovery."
    },
    {
      title: "Q2 FY27 earnings: the results season's decisive stretch",
      detail: "The results season is delivering sharp divergences. Himadri Speciality Chemical fell 25.5% for the week on margin compression despite strong revenue; Swiggy plunged to a record low on a Rs 922-crore quarterly net loss and widening Instamart losses; Urban Company slid on a wider loss; but International Gemmological Institute surged 17% on a 43% profit jump and IT names (TCS, HCL Technologies, Infosys) held up. Investors are rewarding beats and punishing misses hard, so expect stock-specific action rather than index-level moves as the last of the large companies report."
    },
    {
      title: "FII flows and a rupee near 94.94 remain swing factors",
      detail: "Foreign institutional investors remained net sellers for a ninth consecutive week, offloading about Rs 2,697 crore of equities, though the pace eased from earlier weeks; they sold about Rs 3,459 crore on Thursday alone. Domestic institutions kept buying (about Rs 10,942 crore for the week). The rupee ended virtually flat at 94.94 a dollar after trading a 94.32–94.97 band. Watch the FII/DII prints each evening and the rupee's move against the dollar."
    },
    {
      title: "Technical breakdown: Nifty below its 200-week average",
      detail: "Friday's close at 22,600.00 pushed the Nifty below its 200-week moving average (about 22,650) and its 20-day moving average, weakening the overall market structure, with a lower-high formation intact and a hidden bearish divergence on the RSI. Analysts see the 22,200 level as crucial support — a decisive breakdown could trigger another leg of selling — with immediate support at 22,500 and resistance at 22,700–22,800. Keep positions light and watch Brent crude, which above $110 could further dampen sentiment."
    },
    {
      title: "Jio Platforms' listing, and the 10 November Diwali holiday",
      detail: "Reliance Industries' Jio Platforms IPO — India's largest ever, at about Rs 30,213 crore — closed for bidding on Friday, 23 October, heavily oversubscribed (about 13.8 times by the close, and reportedly about 22 times including anchor demand), draining some market liquidity during the week; its listing will be a near-term sentiment marker for the telecom and broader market. Meanwhile, the next exchange holiday is Tuesday, 10 November 2026, for Diwali-Balipratipada, with Muhurat trading on Sunday, 8 November; before that, markets trade every weekday."
    }
  ],

  reads: [
    {
      title: "Market weekly wrap: SENSEX, NIFTY50 snap winning streak, fall 2% as crude oil prices hit $117/bbl; Adani Ent top loser",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-weekly-wrap-sensex-nifty-50-snap-winning-streak-fall-2-as-crude-oil-prices-hit-117-bbl-adani-ent-shriram-finance-top-losers/article-202330/"
    },
    {
      title: "Tumultuous week: Midcaps and smallcaps suffer worst losses in 20 months",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/tumultuous-week-midcaps-and-smallcaps-suffer-worst-losses-in-20-months-126102301443_1.html"
    },
    {
      title: "Crude surge hammers markets; smallcaps bear the brunt",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/crude-surge-hammers-markets-smallcaps-near-the-brunt/article71615938.ece"
    },
    {
      title: "Pulse of the Street: earnings strengthen, but stocks lose ground",
      source: "LiveMint",
      url: "https://www.livemint.com/market/stock-market-news/pulse-of-the-street-earnings-strengthen-but-stocks-lose-ground-11792761423089.html"
    },
    {
      title: "Sensex, Nifty snap 2-week rally as oil shock, FII selling weigh on D-Street",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/photos/business/markets/sensex-nifty-snap-2-week-rally-as-oil-shock-fii-selling-weigh-on-d-street-14058980.html"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every week; the company stays Infosys Ltd.
  ratio: {
    name: "Operating Margin",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Operating Margin = Operating profit ÷ Revenue (× 100)",
    formulaNote: "Operating margin measures how much of every rupee of revenue is left as operating profit — profit from the core business, before interest, other income and tax. Take operating profit (revenue less cost of sales and operating expenses) and divide it by revenue. It is the cleanest read on a company's underlying pricing power and cost discipline, because it strips out financing and one-off items. For Infosys it is also the number management itself guides on: the company runs a stated operating-margin band (20%–22% for FY27) and is judged each quarter on whether it holds it. A high, stable operating margin is the signature of a services business whose revenue scales faster than its cost base.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Revenue, year ended March 31, 2026", value: "Rs 1,78,650 crore", page: "p. 318" },
      { label: "Cost of sales, year ended March 31, 2026", value: "Rs 1,24,735 crore", page: "p. 318" },
      { label: "Gross profit, year ended March 31, 2026", value: "Rs 53,915 crore", page: "p. 318" },
      { label: "Selling and marketing expenses, year ended March 31, 2026", value: "Rs 9,077 crore", page: "p. 318" },
      { label: "Administrative expenses, year ended March 31, 2026", value: "Rs 8,584 crore", page: "p. 318" },
      { label: "Total operating expenses (selling & marketing + administrative), year ended March 31, 2026", value: "Rs 17,661 crore", page: "p. 318" },
      { label: "Operating profit, year ended March 31, 2026", value: "Rs 36,254 crore", page: "p. 318" }
    ],
    working: "Step 1 — Take the top line. The Consolidated Statement of Comprehensive Income (IFRS) (printed p. 318) shows revenues of Rs 1,78,650 crore for the year ended March 31, 2026, up 9.6% on FY25's Rs 1,62,990 crore. Step 2 — Work down to operating profit. Cost of sales was Rs 1,24,735 crore, giving a gross profit of Rs 53,915 crore. From that, selling and marketing expenses of Rs 9,077 crore and administrative expenses of Rs 8,584 crore (together Rs 17,661 crore) are deducted, leaving an operating profit of Rs 36,254 crore. Step 3 — Divide: Operating margin = 36,254 ÷ 1,78,650 = 0.20293, i.e. 20.29%, or about 20.3%. In plain terms, Infosys kept about Rs 20 of operating profit for every Rs 100 of revenue in FY26.",
    result: "20.3%",
    meaning: "Infosys earned an operating margin of about 20.3% in FY26 — roughly Rs 20 of operating profit for every Rs 100 of revenue. That is a strong, steady figure for a company of its size and is the product of its model: a capital-light services business where revenue grows faster than the cost base, so operating profit scales with the top line. The reported margin slipped about 80 basis points from FY25's 21.1%, but a large part of that was a one-off: provisions under the Government of India's new Labour Codes (notified in November 2025) added about Rs 1,289 crore to gratuity and leave liabilities, which cut the reported margin by roughly 0.7 percentage points. Excluding that, Infosys' adjusted operating margin was 21.0% — essentially flat year-on-year — and within the 20%–22% band the company guides on. For investors the key questions are durability and mix: whether cost levers such as Project Maximus and a lower onsite mix can keep offsetting wage hikes, acquisition amortisation and the shift of work to AI, and whether the mid-teens constant-currency deal pipeline converts into the volume growth that would let the margin expand rather than merely hold.",
    crossCheck: "Infosys' own investor material quotes a reported IFRS operating margin of 20.3% for FY26 and an adjusted operating margin of 21.0% — matching the figure worked through here exactly (36,254 ÷ 1,78,650 = 20.3%). Screener.in's consolidated page for Infosys shows an OPM of about 24% for FY26, which is higher than the reported figure for a definitional reason worth understanding: Screener computes operating profit after stripping depreciation and finance cost out of total expenses, whereas the IFRS operating profit used here already bears depreciation within cost of sales and operating expenses. The same convention gap explains why Trendlyne-style screeners generally show Infosys' operating margin running a few points above the company's own reported number. On any consistent basis the message is the same: Infosys earns a high, stable operating margin in the low-20s, comfortably inside its guided 20%–22% band. The audited IFRS figure of 20.3% is the one used here because it is the number the company itself reports and guides on.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (IFRS), printed p. 318 (PDF p. 288), for revenues, cost of sales, gross profit, selling and marketing expenses, administrative expenses, total operating expenses and operating profit for the year ended March 31, 2026"
  }
};
