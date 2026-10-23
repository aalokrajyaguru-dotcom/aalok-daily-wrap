const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 23 October 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 23 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22600.00,
      dayChange: -87.65,
      dayChangePct: -0.39,
      weekChangePct: -2.36, // week vs prior Friday, 16 Oct close of 23,146.15
      spark: [23146.15, 22888.95, 22811.35, 22687.65, 22600.00], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The benchmark closed 87.65 points, or 0.39%, lower at 22,600.00 for a fourth straight decline, after opening at 22,742.20 and ranging between an intraday high of 22,787.25 and a low of 22,372.00 — a swing of more than 415 points — before a late recovery lifted it off the lows. Fifteen of the NSE's 16 major sector gauges fell, with Metal, Consumer Durables and Realty the worst hit and IT the least affected. Eternal (+4.25%), Apollo Hospitals (+1.65%) and ONGC (+1.11%) led the few gainers, while Shriram Finance (-3.98%), Adani Enterprises (-2.86%) and JSW Steel (-2.83%) led the losses. NSE breadth was heavily negative at 624 advances against 3,011 declines, and India VIX rose 6.32% to 16.76. (Close, change and intraday extremes cross-checked across Business Standard, Upstox, Moneycontrol, India Today and the exchange boards.)"
    },
    {
      name: "Nifty Next 50",
      close: 65828.60,
      dayChange: -1525.55,
      dayChangePct: -2.26,
      weekChangePct: -4.58, // week vs prior Friday, 16 Oct close of 68,988.60
      spark: [68988.60, 68695.85, 67655.30, 67354.15, 65828.60], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The 'next rung' of large caps fell 2.26% to 65,828.60, underperforming the Nifty's 0.39% fall as its heavier tilt to capital-goods, PSU and mid-sized financial names came under pressure in the broad risk-off move; the index traded as low as about 65,081 intraday. (Close of 65,828.60 and a fall of 2.26% agree across ET Money and News18's closing wrap; an earlier, intraday Anand Rathi snapshot showed a steeper fall of about 2.8%.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 20592.75,
      dayChange: -435.90,
      dayChangePct: -2.07,
      weekChangePct: -5.26, // week vs prior Friday, 16 Oct close of 21,736.75
      spark: [21736.75, 21499.30, 21200.25, 21028.65, 20592.75], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "Midcaps fell 2.07% to 20,592.75, underperforming the headline index for a fourth session as the sell-off spread well beyond large caps; the gauge has now slipped into correction territory, down more than 10% from its 31 August 52-week high. (Close of 20,592.75 and a fall of 2.07% per ET Money; Screener.in showed an intraday print of 20,576, down 2.15%, and the sister Nifty Midcap 100 index ended 2.21% lower at 55,800.65.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 16385.15,
      dayChange: -471.05,
      dayChangePct: -2.79,
      weekChangePct: -7.10, // week vs prior Friday, 16 Oct close of 17,637.65
      spark: [17637.65, 17495.90, 17041.95, 16856.20, 16385.15], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "Small caps were the weakest of the main size indices, the gauge shedding 2.79% to 16,385.15 as risk aversion hit the smallest end hardest. (Level of 16,385.15 and a fall of 2.79% cross-checked across ET Money and The Economic Times, which agree; the sister Smallcap 100 index fell 2.94% to 17,739.45 and the Microcap 250 lost 2.32%.)"
    },
    {
      name: "BSE SME Index",
      close: 112084.71,
      dayChange: -3488.16,
      dayChangePct: -3.01,
      weekChangePct: -8.09, // week vs prior Friday, 16 Oct close of 1,21,957.58
      spark: [121957.58, 120033.96, 116484.98, 115572.87, 112084.71], // last 5 closes: 16 Oct, 19 Oct, 21 Oct, 22 Oct, 23 Oct
      note: "The BSE SME IPO index fell about 3.0% to 1,12,084.71 — a drop of 3,488.16 points — after opening at 1,15,596.29 and touching an intraday low of 1,11,095.35, as the risk-off mood hit the most speculative end of the market hardest. (Feeds differ slightly on the closing print: The Economic Times shows 1,12,084.71, down 3.01%, while Anand Rathi snapshots quote 1,12,049.87, down 3.05%, and 1,12,030.78, down 3.06%; the ET post-close figure is used.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex slips 126 points (-0.17%) to 73,124 and Nifty falls 88 points (-0.39%) to 22,600 — a fourth straight down day as Brent tops $114 on West Asia tension; Metal (-2.71%), Consumer Durables (-2.63%) and Realty (-2.38%) lead the fall, Smallcap 250 slides 2.79% and Swiggy plunges 17%",
    summary: "Indian equities fell for a fourth straight session on Friday, 23 October 2026, with the Sensex dropping 125.56 points, or 0.17%, to 73,123.83 and the Nifty 50 shedding 87.65 points, or 0.39%, to close at 22,600.00 — snapping a two-week winning streak. The day was defined by a violent intraday reversal: the Sensex opened higher at 73,665.64 and touched a high of 73,766.51 before crashing as much as 1,314 points to a low of 72,452.37, and the Nifty hit 22,787.25 before sinking to 22,372.00, before a late recovery pared the losses. The trigger was crude: Brent futures rose about 1% to a four-month high above $114 a barrel (some feeds quoted $114.7) as West Asia tensions and fears of supply disruption gripped markets, reviving imported-inflation worries for India, the world's third-largest crude importer. The rupee weakened about 0.13% to 94.94 a dollar. Selling was broad — all 16 major NSE sector gauges ended in the red, led by Metal (-2.71%), Consumer Durables (-2.63%), Realty (-2.38%), Chemicals (-2.32%) and PSU Bank (-2.26%), with IT (-0.27%) the least affected after briefly trading green. On the Nifty 50, Eternal (+4.25%, helped by rival Swiggy's weak results), Apollo Hospitals (+1.65%), ONGC (+1.11%), Asian Paints (+0.97%) and TCS (+0.92%) led the gainers, while Shriram Finance (-3.98%, on worsening asset quality), Adani Enterprises (-2.86%), JSW Steel (-2.83%), Jio Financial Services (-2.74%) and Tata Steel (-2.70%) were the biggest losers. The broader market was hit far harder: the Nifty Midcap 150 fell 2.07%, the Smallcap 250 2.79% and the Microcap 250 2.32%, while the Nifty 500 dropped 1.24% to 21,427.60. In the Nifty 500, International Gemological Institute (+7.91%) and Cyient (+7.81%, on a strong September quarter) led the gainers, while Swiggy plunged 16.75% to a fresh 52-week low after its Q2 results showed a Rs 922-crore net loss and widening Instamart losses, with J&K Bank (-16.28%) and Black Box (-9.03%) the other big fallers. India VIX jumped 6.32% to 16.76. Breadth was heavily negative — 624 NSE stocks advanced against 3,011 declines (some feeds put it at 797 versus 3,275), and BSE market capitalisation fell about Rs 7.42 lakh crore to roughly Rs 451.83 lakh crore. For the week, the Nifty lost 2.36% and the Sensex 2.15%. Markets were shut on Tuesday, 20 October, for Dussehra.",
    stats: ["Nifty -0.39%", "Sensex -0.17%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Friday — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." },
    { date: "2026-10-19", label: "Mon 19 Oct", niftyClose: 22888.95, niftyChangePct: -1.11, sensexChangePct: -1.17, note: "The two-day rally ended with a thud: the Sensex fell 876.37 points (-1.17%) to 73,852.90 and the Nifty 50 257.20 points (-1.11%) to 22,888.95, slipping back below 23,000, as private banks and IT — last week's leaders — led the decline after mixed Q2 results and with Brent near $108. Axis Bank (-4.19%) was the worst Nifty performer on a Q2 profit that missed consensus, followed by Tata Motors Passenger Vehicles (-3.09%), Infosys (-2.63%), Bajaj Finance (-2.52%) and Apollo Hospitals (-2.41%); HDFC Bank lost 2.31%. PSU banks were the lone sector in the green, the Nifty PSU Bank index up 2.46% as PNB (+4.73%, Q2 PAT Rs 5,500 crore) and Union Bank of India rallied. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) topped the gainers. Breadth was poor (1,163 advances vs 2,925 declines), the Nifty 500 fell 1.03% to 22,041.60, Midcap 100 -1.09% and Smallcap 100 -1.01%, India VIX rose 4.48% to 14.69 and the rupee closed 3 paise lower at 94.92. Markets were shut on Tuesday, 20 October, for Dussehra." },
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." },
    { date: "2026-10-22", label: "Thu 22 Oct", niftyClose: 22687.65, niftyChangePct: -0.54, sensexChangePct: -0.62, note: "A third straight decline, this one driven by crude: the Sensex fell 460.30 points (-0.62%) to 73,249.39 and the Nifty 50 123.70 points (-0.54%) to 22,687.65, closing below 22,700, after Brent surged more than 3% to a four-month high above $112 on a Houthi strike on Saudi Aramco's Shaybah field and fears of a US-Iran escalation. The Sensex fell as much as 705 points to a low of 73,005.11 and the Nifty to 22,554.85 before a late recovery; the rupee weakened to about 94.8. Fifteen of 16 sector gauges fell, led by Media (-2.35%), FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%) and Oil & Gas (-0.86%); only Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) ended green. Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the Nifty gainers; Nestle India (-2.78%, on an FSSAI notice), Eternal (-2.53%), HDFC Life (-2.09%) and Reliance Industries (-2.03%) led the losers. The broader market underperformed — Midcap 150 -0.81%, Smallcap 250 -1.09%, Microcap 250 -1.03% — India VIX rose about 0.9% to 15.82, NSE breadth was 1,026 advances vs 2,512 declines, and BSE market capitalisation fell about Rs 4 lakh crore. In the Nifty 500, IGIL (+10%, upper circuit) and Indian Hotels (+4.5%) led the gainers, while KEI Industries (-8.5%) and Swiggy (-6.1%, a fresh 52-week low) led the losers." },
    { date: "2026-10-23", label: "Fri 23 Oct", niftyClose: 22600.00, niftyChangePct: -0.39, sensexChangePct: -0.17, note: "A fourth straight decline, and a wild one: the Sensex opened higher at 73,665.64 and touched 73,766.51 before crashing as much as 1,314 points to 72,452.37, and the Nifty hit 22,787.25 before sliding to 22,372.00, before a late recovery left the Sensex down 125.56 points (-0.17%) at 73,123.83 and the Nifty down 87.65 points (-0.39%) at 22,600.00 — snapping a two-week winning streak. Brent rose about 1% to a four-month high above $114 on West Asia tension, and the rupee slipped to 94.94. All 16 major sector gauges fell, led by Metal (-2.71%), Consumer Durables (-2.63%), Realty (-2.38%) and PSU Bank (-2.26%); IT (-0.27%) was least affected. Eternal (+4.25%), Apollo Hospitals (+1.65%) and ONGC (+1.11%) led the Nifty gainers; Shriram Finance (-3.98%), Adani Enterprises (-2.86%) and JSW Steel (-2.83%) led the losers. The broader market fell far harder — Midcap 150 -2.07%, Smallcap 250 -2.79%, Microcap 250 -2.32%, Nifty 500 -1.24% to 21,427.60. In the Nifty 500, IGIL (+7.91%) and Cyient (+7.81%) led the gainers, while Swiggy plunged 16.75% to a fresh 52-week low on its Q2 miss and J&K Bank fell 16.28%. India VIX jumped 6.32% to 16.76, NSE breadth was 624 advances vs 3,011 declines, and BSE market capitalisation fell about Rs 7.42 lakh crore. For the week, the Nifty lost 2.36% and the Sensex 2.15%." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: -0.27, note: "The day's best sector, down just about 0.27% to roughly 31,975, holding up as IT names were treated as a relative hedge against the global AI trade — TCS (+0.92%), Infosys and HCL Technologies held modest gains for much of the session before giving some back. (Level per Moneycontrol's sector board; the -0.27% close per India Today's and News18's closing wraps.)" },
    { name: "Nifty Auto", changePct: -0.60, note: "Fell 0.60% to about 24,786, a comparatively mild fall as autos held up better than the broader market despite the risk-off mood. (Per India Today, News18 and Moneycontrol's sector board.)" },
    { name: "Nifty Consumption", changePct: -0.69, note: "Slipped about 0.69% to roughly 10,679, with consumer-facing names only modestly weaker. (Per Moneycontrol's sector board.)" },
    { name: "Nifty Private Bank", changePct: -0.78, note: "Down 0.78% to about 26,563, a moderate fall as private lenders held up better than the PSU banks. (Per India Today and Moneycontrol's sector board.)" },
    { name: "Nifty Infrastructure", changePct: -0.81, note: "Eased about 0.81% to roughly 8,522, holding up better than the benchmark's broader declines. (Per Moneycontrol's sector board.)" },
    { name: "Nifty FMCG", changePct: -0.99, note: "Fell 0.99% to about 42,475, with staples weak as crude-led inflation worries weighed on the defensive pack. (Per India Today, News18 and Moneycontrol's sector board.)" },
    { name: "Nifty Financial Services", changePct: -1.03, note: "The financials gauge slipped about 1.03% to roughly 24,335, with insurers and lenders mixed. (Per News18 and Moneycontrol's sector board.)" },
    { name: "Nifty Pharma", changePct: -1.04, note: "Down about 1.04% to roughly 25,217, giving back part of the previous session's small gain. (Per Upstox and Moneycontrol's sector board.)" },
    { name: "Nifty Oil & Gas", changePct: -1.09, note: "Slipped about 1.09% to roughly 10,332 even as crude rallied above $114 — upstream names could not offset weakness elsewhere. (Per News18 and Moneycontrol's sector board.)" },
    { name: "Nifty Bank", changePct: -1.16, note: "The banking gauge fell 1.16% (a fall of 638 points) to close at 54,287, with Shriram Finance (-3.98%) the biggest drag. (Per News18 and CNBC-TV18.)" },
    { name: "Nifty Healthcare", changePct: -1.23, note: "Lost about 1.23% to roughly 15,324, as hospital and pharma names stayed relatively resilient but still ended lower. (Per Moneycontrol's sector board.)" },
    { name: "Nifty Media", changePct: -1.24, note: "Fell about 1.24% to roughly 1,565, a milder fall than the previous session's rout. (Per Moneycontrol's sector board.)" },
    { name: "Nifty Energy", changePct: -1.99, note: "Down about 1.99% to roughly 34,405, as energy majors weakened despite the crude spike. (Per Moneycontrol's sector board.)" },
    { name: "Nifty MNC", changePct: -2.08, note: "Down about 2.08% to roughly 27,732, with capital-goods MNCs such as ABB India (-5.02%) among the heaviest large-cap fallers. (Per Moneycontrol's sector board and QuantsApp.)" },
    { name: "Nifty PSU Bank", changePct: -2.26, note: "Fell 2.26% to about 8,050, one of the day's worst sectors as state-run lenders were sold off across the board. (Per India Today, News18 and Upstox.)" },
    { name: "Nifty Chemicals", changePct: -2.32, note: "Dropped about 2.32% to roughly 26,950, extending a rough run for speciality-chemical names. (Per News18.)" },
    { name: "Nifty Realty", changePct: -2.38, note: "Lost 2.38% to about 780, among the weakest sectors as rate-sensitive property names were hit hard. (Per India Today, News18 and Upstox.)" },
    { name: "Nifty Consumer Durables", changePct: -2.63, note: "Fell 2.63% to about 33,816, one of the day's worst as consumer-discretionary names were dumped. (Per India Today, News18 and Upstox.)" },
    { name: "Nifty Metal", changePct: -2.71, note: "The weakest of the major sector gauges, down 2.71% to about 11,448, as JSW Steel (-2.83%), Tata Steel (-2.70%) and Hindalco (-1.78%) led the fall. (Per India Today, News18, Upstox and Moneycontrol.)" },
    { name: "Nifty India Defence", changePct: -2.86, note: "Dropped about 2.86% to roughly 8,538, among the day's worst-hit themes as defence names such as HAL and BEL came under heavy selling. (Per Moneycontrol's sector board.)" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Friday, 23 Oct 2026, over the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250). Closing percentage moves cross-checked across Strota's Nifty 500 gainers-and-losers board, ET Money's top-gainers/losers table, MarketsMojo's BSE 500 movers note, QuantsApp's F&O closing movers (15:40 IST), Upstox's buzzing-stocks report and HDFC Sky's 3:30 PM movers. Where feeds round or timestamp differently, the closing figure is used and the range is noted. Notably, J&K Bank's fall was quoted at about 16.3% by the NSE-based boards (ET Money, Strota) but about 13.1% by a MarketsMojo smallcap note; the NSE closing figure is used.",
    gainers: [
      { name: "International Gemological Institute", changePct: 7.91, cap: "Smallcap", note: "The Nifty 500's best performer, up 7.91% to Rs 381.15, extending Thursday's upper-circuit run after consolidated net profit jumped 43% year-on-year to Rs 186 crore in Q2 FY27 on revenue up 31% to Rs 398 crore" },
      { name: "Cyient", changePct: 7.81, cap: "Midcap", note: "Rallied 7.81% to Rs 1,233.00 after hitting a fresh 52-week high of Rs 1,268 intraday, as investors cheered a 16.6% quarter-on-quarter jump in consolidated net profit to Rs 121.4 crore and revenue up 7.7% QoQ to Rs 2,235 crore, with order intake up 20.8% year-on-year" },
      { name: "Eternal", changePct: 4.25, cap: "Largecap", note: "Gained 4.25% to Rs 317.40, the top Nifty 50 gainer, as investors turned to the Zomato/Blinkit parent after rival Swiggy's September-quarter results disappointed on quick-commerce losses" },
      { name: "Ipca Laboratories", changePct: 2.62, cap: "Midcap", note: "Rose 2.62% to Rs 1,953.30, among the day's few pharma names to gain as the sector was otherwise sold off" },
      { name: "JSW Cement", changePct: 2.00, cap: "Midcap", note: "Added 2.00% to Rs 116.98, bucking the broader cement and materials weakness" }
    ],
    losers: [
      { name: "Swiggy", changePct: -16.75, cap: "Largecap", note: "The Nifty 500's worst performer, plunging 16.75% to Rs 176.00 and hitting a fresh 52-week low of Rs 174.95 — its biggest single-day fall — after its September-quarter results showed a consolidated net loss of Rs 922 crore (narrower year-on-year but wider than the June quarter's Rs 791 crore) on revenue up 36% to Rs 7,571 crore, with Instamart's adjusted EBITDA loss widening to about Rs 895 crore; several brokerages cut targets" },
      { name: "Jammu & Kashmir Bank", changePct: -16.28, cap: "Smallcap", note: "Slid about 16.28% to Rs 113.09, one of the sharpest falls in the small-cap space; a MarketsMojo note put the decline at a less severe 13.1%, and the NSE closing figure is used here" },
      { name: "Black Box", changePct: -9.03, cap: "Smallcap", note: "Dropped 9.03% to Rs 805.10, among the day's weakest small caps in the broad risk-off sell-off" },
      { name: "Afcons Infrastructure", changePct: -7.71, cap: "Midcap", note: "Fell 7.71% to Rs 217.84, hit hard as construction and capital-goods names were dumped" },
      { name: "Atul", changePct: -7.06, cap: "Midcap", note: "Lost 7.06% to Rs 5,576.00, part of a steep fall in speciality-chemical names" }
    ],
    sensexWinners: ["Eternal", "Larsen & Toubro", "Reliance Industries"],
    sensexLaggards: ["Tata Steel", "Adani Ports", "Trent"]
  },

  watch: [
    {
      title: "Crude above $114 and the West Asia risk premium",
      detail: "Brent rose about 1% to a four-month high above $114 a barrel (some feeds quoted $114.7) as West Asia tensions and fears of supply disruption kept the risk premium alive; WTI gained about 1.6% to near $101. For India, the world's third-largest crude importer, higher oil lifts the import bill, squeezes corporate margins and feeds straight into equity weakness and a softer rupee (94.94 a dollar on Friday). A sustained moderation in crude — and a steadier rupee — is what the market needs for a durable recovery."
    },
    {
      title: "Q2 FY27 earnings: Swiggy's big loss, Cyient's beat, and the IT pack",
      detail: "The results season is delivering sharp divergences. Swiggy plunged 17% to a fresh 52-week low on a Rs 922-crore quarterly net loss and widening Instamart losses, even as rival Eternal gained; Cyient surged 7.8% on a strong quarter; and Infosys reported its September-quarter numbers after Friday's close, with the IT pack likely to set the tone for Monday. Investors are rewarding beats and punishing misses hard, so expect stock-specific action rather than index-level moves as more companies report through the coming sessions."
    },
    {
      title: "FII flows and a rupee near 94.94 remain swing factors",
      detail: "Persistent foreign institutional selling through much of 2026 has left Indian equities vulnerable to shifts in global sentiment, and the rupee's slide towards 94.94 a dollar adds to the pressure by raising imported-inflation risks. FIIs sold about Rs 3,459 crore of equities on Thursday even as DIIs bought about Rs 2,891 crore. Watch the FII/DII prints each evening and the rupee's move against the dollar."
    },
    {
      title: "Technical breakdown: Nifty below its 200-week average",
      detail: "Friday's close at 22,600.00 has pushed the Nifty below its 200-week moving average and its 20-day moving average, weakening the overall market structure, with a lower-high formation intact. Analysts see the 22,200 level as crucial support — a decisive breakdown could trigger another leg of selling — with immediate support at 22,500 and resistance at 22,700-22,800. Keep positions light and watch Brent crude, which above $110 could further dampen sentiment."
    },
    {
      title: "Jio Platforms' listing, and the 10 November Diwali holiday",
      detail: "Reliance Industries' Jio Platforms IPO — India's largest ever, at about Rs 30,213 crore — closed for bidding on Friday, 23 October, and its listing will be a near-term sentiment marker for the telecom and broader market. Meanwhile, the next exchange holiday is Tuesday, 10 November 2026, for Diwali-Balipratipada, with Muhurat trading on Sunday, 8 November; before that, markets trade every weekday."
    }
  ],

  reads: [
    {
      title: "Market wrap, Oct 23: SENSEX falls 126 pts, NIFTY50 ends at 22,600 as crude prices jumps over $114/bbl; NIFTY Smallcap 100 underperforms",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-oct-23-sensex-falls-126-pts-nifty-50-ends-at-22-600-as-crude-prices-jumps-over-114-bbl-nifty-smallcap-100-underperforms/article-202315/"
    },
    {
      title: "Stock Market Close: Sensex falls for 4th day, ends 126 pts lower; Nifty at 22,600; VIX rises 6%",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-october-23-nse-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-jio-ipo-q2-results-today-126102300078_1.html"
    },
    {
      title: "Sensex, Nifty end lower as Midcaps tumble; Swiggy suffers biggest single-day fall",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/sensex-nifty-end-lower-as-midcaps-tumble-swiggy-suffers-biggest-single-day-fall-20018073.htm"
    },
    {
      title: "Sensex, Nifty End Two-Week Winning Streak Amid Market Sell-Off; Swiggy Shares Plunge 17%",
      source: "Fortune India",
      url: "https://www.fortuneindia.com/markets/sensex-nifty-snap-two-week-winning-streak-fall-for-fourth-straight-session-swiggy-slumps-17/166338"
    },
    {
      title: "Sensex recovers 650 pts from day's low, Nifty ends at 22,600: Key factors behind partial market rebound",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/sensex-recovers-600-pts-from-day-s-low-nifty-reclaims-22-550-key-factors-behind-partial-market-rebound-14058529.html"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Return on Equity",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288, printed p. 317 = PDF p. 287).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = Net profit ÷ Shareholders' equity (× 100)",
    formulaNote: "Return on equity measures the profit a company generates for every rupee of shareholders' money left in the business — the single best shorthand for how well management turns equity into earnings. Take net profit (after paying minority interests) and divide it by shareholders' equity. Because it ties the income statement to the balance sheet, ROE is sensitive to how the balance sheet is financed: heavy debt lifts it, and so does a shrinking equity base from buybacks or big dividends. Infosys sits at the favourable end of that trade-off — a fortress balance sheet with no borrowings, a large and growing equity base and a high, steady return on it. That combination, rather than leverage, is what produces its ROE.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Net profit, year ended March 31, 2026", value: "Rs 29,474 crore", page: "p. 318" },
      { label: "Net profit attributable to owners of the Company (after non-controlling interests), year ended March 31, 2026", value: "Rs 29,440 crore", page: "p. 318" },
      { label: "Total equity attributable to equity holders of the Company, as at March 31, 2026", value: "Rs 92,852 crore", page: "p. 317" },
      { label: "Non-controlling interests, as at March 31, 2026", value: "Rs 445 crore", page: "p. 317" },
      { label: "Total equity (equity attributable to owners + non-controlling interests), as at March 31, 2026", value: "Rs 93,297 crore", page: "p. 317" }
    ],
    working: "Step 1 — Take the profit. The Consolidated Statement of Comprehensive Income (IFRS) (printed p. 318) shows net profit of Rs 29,474 crore for the year ended March 31, 2026, of which Rs 29,440 crore is attributable to the owners of the Company (the equity holders) and Rs 34 crore to non-controlling interests. Step 2 — Take the equity. The Consolidated Balance Sheet (printed p. 317) shows total equity of Rs 93,297 crore as at March 31, 2026, made up of Rs 92,852 crore attributable to equity holders of the Company and Rs 445 crore of non-controlling interests. Step 3 — Match like with like: divide the profit belonging to the equity holders (Rs 29,440 crore) by the equity belonging to the equity holders (Rs 92,852 crore) — not the total equity, which would wrongly attribute the minority's share of profit to the parent alone. Step 4 — ROE = 29,440 ÷ 92,852 = 0.3171, i.e. 31.71%, or about 31.7%. In plain terms, Infosys earned about Rs 32 of profit for every Rs 100 of shareholders' equity in FY26.",
    result: "31.7%",
    meaning: "Infosys earned a return on equity of about 31.7% in FY26 — roughly Rs 32 of profit for every Rs 100 of shareholders' equity. That is an exceptional figure for a company of its size and a direct product of its model: a capital-light, debt-free services business that needs very little equity to fund its operations, so almost all of its large profit accrues to shareholders rather than to lenders. The improvement on FY25 came as net profit after minority interest rose 10.2% to Rs 29,440 crore even as the equity base shrank slightly — total equity attributable to owners fell from Rs 95,818 crore to Rs 92,852 crore after the year's large dividends and buyback. That is the double-edged nature of ROE: part of the rise is better earnings, part is a smaller denominator. For investors, the key questions are durability and quality — whether the low-20s operating margin and mid-teens constant-currency growth can be sustained against AI-led deflation in traditional services, and whether the very high ROE reflects genuine capital efficiency (it does) rather than leverage (it does not — Infosys carries no borrowings).",
    crossCheck: "Screener.in's consolidated page for Infosys shows an ROE of 31.9% for FY26, topstockresearch.com shows 31.71% on consolidated numbers — matching the figure worked through here exactly — and Infosys' own investor presentation quotes 'Return on Equity (ROE) 32.1%' (on an LTM / Q1 FY27 basis). Trendlyne's page shows 36.1%, but that is on a standalone basis. Two convention gaps are worth flagging: (1) standalone vs consolidated — Trendlyne's 36.1% is computed on Infosys' standalone (parent-only) statements, where equity is smaller, so it runs higher than the ~31.7% consolidated figure; and (2) average vs year-end equity — using the average of opening and closing equity ((92,852 + 95,818) ÷ 2 = Rs 94,335 crore) gives 29,440 ÷ 94,335 = 31.2%, and including non-controlling interests in the denominator gives about 31.6%. The year-end, owners-only method used here is the most conservative and the one that ties most directly to the audited balance sheet.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (IFRS), printed p. 318 (PDF p. 288), for net profit and net profit attributable to owners of the Company for the year ended March 31, 2026; Consolidated Balance Sheet (IFRS), printed p. 317 (PDF p. 287), for total equity, equity attributable to equity holders of the Company and non-controlling interests as at March 31, 2026"
  }
};
