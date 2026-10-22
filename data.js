const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 22 October 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 22 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22687.65,
      dayChange: -123.70,
      dayChangePct: -0.54,
      weekChangePct: -1.98, // week vs prior Friday, 16 Oct close of 23,146.15
      spark: [22997.35, 23146.15, 22888.95, 22811.35, 22687.65], // last 5 closes: 15 Oct, 16 Oct, 19 Oct, 21 Oct, 22 Oct
      note: "The benchmark closed 123.70 points, or 0.54%, lower at 22,687.65 for a third straight decline, after opening at 22,687.75 and ranging between an intraday high of 22,785 and a low of 22,554.85 — a swing of about 230 points — before a late recovery lifted it off the lows. Fifteen of the NSE's 16 major sector gauges fell, with Media, FMCG and IT the worst hit; Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the few gainers, while Nestle India (-2.78%), Eternal (-2.53%), HDFC Life (-2.09%), Tata Motors Passenger Vehicles (-2.07%) and Reliance Industries (-2.03%) led the losses. NSE breadth was 1,026 advances against 2,512 declines, and India VIX rose about 0.9% to 15.82. (Close and change cross-checked across Business Standard, Upstox, NDTV Profit and the exchange boards.)"
    },
    {
      name: "Nifty Next 50",
      close: 67354.15,
      dayChange: -301.15,
      dayChangePct: -0.45,
      weekChangePct: -2.37, // week vs prior Friday, 16 Oct close of 68,988.60
      spark: [68671.60, 68988.60, 68695.85, 67655.30, 67354.15], // last 5 closes: 15 Oct, 16 Oct, 19 Oct, 21 Oct, 22 Oct
      note: "The 'next rung' of large caps fell 0.45% to 67,354.15, holding up better than the Nifty's 0.54% fall as its heavier tilt to PSU banks and select industrials offered partial shelter, even as capital-goods MNCs such as ABB India (-5.94%) stayed weak. The index ranged between an intraday low of 66,487.25 and a high of 67,543.10. (Close of 67,354.15 and a fall of 0.45% agree across ET Money, Chola Securities' index board and TrendRipperX's closing snapshot.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 21028.65,
      dayChange: -171.60,
      dayChangePct: -0.81,
      weekChangePct: -3.26, // week vs prior Friday, 16 Oct close of 21,736.75
      spark: [21756.35, 21736.75, 21499.30, 21200.25, 21028.65], // last 5 closes: 15 Oct, 16 Oct, 19 Oct, 21 Oct, 22 Oct
      note: "Midcaps fell 0.81% to 21,028.65, underperforming the headline index as selling spread well beyond large caps. KEI Industries (-8.5%) — a Midcap 150 constituent — was among the day's worst performers after its Q2 EBITDA missed estimates, while Kalyan Jewellers (-4.3%), Mazagon Dock (-3.7%) and M&M Financial Services also fell sharply; KEI and Swiggy were named the top losers in the midcap basket. The gauge traded between 20,836.85 and 21,143.60. (Close of 21,028.65 and a fall of 0.81% cross-checked across ET Money, News18 and Chola Securities' index board.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 16856.20,
      dayChange: -185.75,
      dayChangePct: -1.09,
      weekChangePct: -4.43, // week vs prior Friday, 16 Oct close of 17,637.65
      spark: [17627.05, 17637.65, 17495.90, 17041.95, 16856.20], // last 5 closes: 15 Oct, 16 Oct, 19 Oct, 21 Oct, 22 Oct
      note: "Small caps were the weakest of the main size indices, the gauge shedding 1.09% to 16,856.20 as risk aversion hit the smallest end hardest. Jindal Saw and Finolex Cables were among the biggest small-cap losers, and Garden Reach Shipbuilders and Mazagon Dock hit fresh 52-week lows. The index moved between 16,756.75 and 17,012.20. The Nifty Smallcap 100 fell 1.14% to 18,275.90 and the Microcap 250 lost 1.03%. (Levels per ET Money, News18's closing wrap and Chola Securities, which agree on a fall of about 1.09%.)"
    },
    {
      name: "BSE SME Index",
      close: 115572.87,
      dayChange: -912.11,
      dayChangePct: -0.78,
      weekChangePct: -5.24, // week vs prior Friday, 16 Oct close of 1,21,957.58
      spark: [122185.91, 121957.58, 120033.96, 116484.98, 115572.87], // last 5 closes: 15 Oct, 16 Oct, 19 Oct, 21 Oct, 22 Oct
      note: "The BSE SME IPO index fell 0.78% to 1,15,572.87 from Wednesday's 1,16,484.98 — a drop of 912.11 points — after opening at 1,16,605.18 and touching a low of 1,14,995. The SME platform, which had touched a 52-week high of 1,23,353.65 earlier in the month, kept giving back ground as the risk-off mood weighed on the most speculative end of the market. (Feeds differ slightly on the closing print: BSE Indices and Goodreturns show 1,15,572.87, down 0.78%, while Anand Rathi's board quotes 1,15,784.63, down 0.60%; the BSE/Goodreturns figure is used.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex falls 460 points (-0.62%) to 73,249 and Nifty slips 124 points (-0.54%) to 22,688 — a third straight down day as Brent tops $112 on Middle East escalation, Media (-2.35%), FMCG (-1.41%) and IT (-1.05%) lead the fall and only Pharma, PSU Bank and Healthcare end green",
    summary: "Indian equities fell for a third straight session on Thursday, 22 October 2026, with the Sensex dropping 460.30 points, or 0.62%, to 73,249.39 and the Nifty 50 shedding 123.70 points, or 0.54%, to close at 22,687.65, below the 22,700 mark. The trigger was crude: Brent futures jumped more than 3% to a four-month high above $112 a barrel after Houthi rebels struck Saudi Aramco's Shaybah oilfield and reports pointed to a possible US-Iran escalation after next month's mid-term elections, reviving imported-inflation worries for India, the world's third-largest crude importer. The rupee weakened to about 94.8 a dollar and foreign selling persisted. The session was volatile both ways — the Sensex fell as much as 705 points to an intraday low of 73,005.11 and the Nifty to 22,554.85, before a late recovery trimmed the losses; the Sensex had earlier touched a high of 73,720.83 and the Nifty 22,785. Fifteen of the NSE's 16 major sector gauges ended in the red. Media (-2.35%) was the worst hit, followed by FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%), Oil & Gas (-0.86%), Chemicals (-0.83%) and Auto (-0.73%). Only three ended higher — Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) — with Cement roughly flat. On the Nifty 50, Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the gainers, while Nestle India (-2.78%, hit by an FSSAI notice over 'misleading claims' on two infant-nutrition products), Eternal (-2.53%), HDFC Life (-2.09%), Tata Motors Passenger Vehicles (-2.07%) and Reliance Industries (-2.03%) were the biggest losers. The broader market underperformed: the Nifty Midcap 150 fell 0.81%, the Smallcap 250 1.09%, the Microcap 250 1.03% and the Nifty 500 0.65%. India VIX rose about 0.9% to 15.82. Breadth was heavily negative — 1,026 NSE stocks advanced against 2,512 that declined, 104 were unchanged, and BSE market capitalisation fell by roughly Rs 4 lakh crore. In the wider Nifty 500, International Gemological Institute (+10%) hit its upper circuit after a 43% jump in Q2 profit, Indian Hotels (+4.5%) touched a 52-week high on a guidance raise, and Balkrishna Industries (+3.6%) and Kaynes Technology (+3.1%) gained; on the losing side KEI Industries (-8.5%) plunged after a Q2 margin miss and Swiggy (-6.1%) hit a fresh 52-week low ahead of its results. In the day's earnings, Swiggy reported a Q2 net loss of Rs 922 crore on revenue up 54% and Reliance Industries' Jio Platforms IPO, India's largest, stayed fully subscribed.",
    stats: ["Nifty -0.54%", "Sensex -0.62%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Thursday — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-15", label: "Thu 15 Oct", niftyClose: 22997.35, niftyChangePct: 1.66, sensexChangePct: 2.11, note: "Bumper rally: the Sensex vaulted 1,533.72 points (+2.11%) to 74,315.61 and the Nifty 50 374.65 points (+1.66%) to 22,997.35, its best day in about four months, as a global sell-off in AI-linked technology stocks and hot US inflation made India's large-caps relatively attractive. IT (+1.82% to 30,719.80), private banks (+1.89%), services (+1.83%), autos (+1.67%) and financials (+1.60%) led; Brent fell over 2% to about $103.9 and the rupee rose 12 paise to 95.05, a fifth straight gain. Tech Mahindra (+4.75%), ICICI Bank (+3.80%), Reliance (+3.44%) and Bharti Airtel (+3.31%) topped the Nifty gainers; Nestle India (-7.76%), Trent and Adani Enterprises fell, and PSU Bank (-1.55%) and FMCG (-1.06%) lagged. But the rally was narrow: the Smallcap 250 fell about 1.15% and the Midcap 150 0.29%, NSE breadth was 980 advances vs 1,912 declines, and India VIX cooled 4.58% to 13.96." },
    { date: "2026-10-16", label: "Fri 16 Oct", niftyClose: 23146.15, niftyChangePct: 0.65, sensexChangePct: 0.56, note: "Second straight day of gains, again led by IT: the Sensex rose 413.66 points (+0.56%) to 74,729.27 and the Nifty 50 148.80 points (+0.65%) to 23,146.15, holding above 23,100 and closing near the day's high. Tech Mahindra surged about 8% after a strong September quarter and a 1:1 bonus recommendation, with TCS (+~4.6%) and Infosys (+~4.5%) following; the Nifty IT index climbed about 3.9%, a fourth straight session of gains and roughly 11.5% for the week. Media (+2.05%), Metal (+0.84%), PSU Bank (+0.71%) and Auto (+0.70%) rose, while FMCG (-0.57%), Oil & Gas (-0.47%) and Realty (-0.42%) slipped. IndiGo (-1.9%), BSE Ltd (-1.9%), Max Healthcare (-1.4%), Tata Consumer Products (-1.3%) and Jio Financial Services (-1.3%) were the weakest Nifty names. Breadth stayed positive (about 2,221 NSE advances vs 1,791 declines) but the broader market lagged: Midcap 150 -0.15%, Smallcap 250 +0.06%. India VIX closed near 14.0." },
    { date: "2026-10-19", label: "Mon 19 Oct", niftyClose: 22888.95, niftyChangePct: -1.11, sensexChangePct: -1.17, note: "The two-day rally ended with a thud: the Sensex fell 876.37 points (-1.17%) to 73,852.90 and the Nifty 50 257.20 points (-1.11%) to 22,888.95, slipping back below 23,000, as private banks and IT — last week's leaders — led the decline after mixed Q2 results and with Brent near $108. Axis Bank (-4.19%) was the worst Nifty performer on a Q2 profit that missed consensus, followed by Tata Motors Passenger Vehicles (-3.09%), Infosys (-2.63%), Bajaj Finance (-2.52%) and Apollo Hospitals (-2.41%); HDFC Bank lost 2.31%. PSU banks were the lone sector in the green, the Nifty PSU Bank index up 2.46% as PNB (+4.73%, Q2 PAT Rs 5,500 crore) and Union Bank of India rallied. JSW Steel (+2.06%), ONGC (+1.35%), SBI (+1.15%), L&T (+0.96%) and Eicher Motors (+0.89%) topped the gainers. Breadth was poor (1,163 advances vs 2,925 declines), the Nifty 500 fell 1.03% to 22,041.60, Midcap 100 -1.09% and Smallcap 100 -1.01%, India VIX rose 4.48% to 14.69 and the rupee closed 3 paise lower at 94.92. Markets were shut on Tuesday, 20 October, for Dussehra." },
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." },
    { date: "2026-10-22", label: "Thu 22 Oct", niftyClose: 22687.65, niftyChangePct: -0.54, sensexChangePct: -0.62, note: "A third straight decline, this one driven by crude: the Sensex fell 460.30 points (-0.62%) to 73,249.39 and the Nifty 50 123.70 points (-0.54%) to 22,687.65, closing below 22,700, after Brent surged more than 3% to a four-month high above $112 on a Houthi strike on Saudi Aramco's Shaybah field and fears of a US-Iran escalation. The Sensex fell as much as 705 points to a low of 73,005.11 and the Nifty to 22,554.85 before a late recovery; the rupee weakened to about 94.8. Fifteen of 16 sector gauges fell, led by Media (-2.35%), FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%) and Oil & Gas (-0.86%); only Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) ended green. Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the Nifty gainers; Nestle India (-2.78%, on an FSSAI notice), Eternal (-2.53%), HDFC Life (-2.09%) and Reliance Industries (-2.03%) led the losers. The broader market underperformed — Midcap 150 -0.81%, Smallcap 250 -1.09%, Microcap 250 -1.03% — India VIX rose about 0.9% to 15.82, NSE breadth was 1,026 advances vs 2,512 declines, and BSE market capitalisation fell about Rs 4 lakh crore. In the Nifty 500, IGIL (+10%, upper circuit) and Indian Hotels (+4.5%) led the gainers, while KEI Industries (-8.5%) and Swiggy (-6.1%, a fresh 52-week low) led the losers." }
  ],

  sectors: [
    { name: "Nifty Pharma", changePct: 0.12, note: "The day's best sector, up about 0.12% to 25,596.65, as defensive healthcare names drew buying in the risk-off mood — Cipla (+1.29%) was the second-best Nifty 50 gainer, and Zydus Lifesciences and Sun Pharma also firmed." },
    { name: "Nifty PSU Bank", changePct: 0.07, note: "Eked out a small gain of about 0.07% to 8,257.40, holding up as state-run lenders attracted support amid the broader sell-off." },
    { name: "Nifty Healthcare", changePct: 0.05, note: "Barely changed, up 0.05% to 15,515.25, as pharma and hospital names stayed resilient even as the wider market fell." },
    { name: "Nifty Cement", changePct: 0.04, note: "Roughly flat, up 0.04% to 13,487.45, helped by UltraTech Cement (+1.00%) — one of the Nifty's top gainers — and Ambuja Cements (+2.89%)." },
    { name: "Nifty Bank", changePct: -0.09, note: "The banking gauge was the most resilient of the big losers, down just 0.09% to 54,925.70, as ICICI Bank (+0.97%) and SBI (+0.73%) offset weakness in HDFC Bank (-1.85%)." },
    { name: "Nifty Private Bank", changePct: -0.14, note: "Down 0.14% to 26,866.05, a mild fall as private lenders broadly held their ground." },
    { name: "Nifty Financial Services", changePct: -0.14, note: "The financials gauge slipped about 0.14% to 24,657.70, with insurers and lenders mixed." },
    { name: "Nifty Realty", changePct: -0.30, note: "Lost 0.30% to 803.45, one of the milder falls, as rate-sensitive property names held up better than the broader market." },
    { name: "Nifty Infrastructure", changePct: -0.49, note: "Eased about 0.49% to 8,592.10, holding up better than the benchmark." },
    { name: "Nifty Metal", changePct: -0.52, note: "Dropped 0.52% to 11,798.35, with metal names sold off as crude-led inflation worries weighed on cyclicals." },
    { name: "Nifty Services Sector", changePct: -0.55, note: "Fell about 0.55% to 29,997.95, dragged by the IT-services names inside it." },
    { name: "Nifty Auto", changePct: -0.73, note: "Fell 0.73% to 25,011.50, with Tata Motors Passenger Vehicles (-2.07%) among the Nifty's worst performers and Eicher Motors and Maruti Suzuki also lower." },
    { name: "Nifty Chemicals", changePct: -0.83, note: "Down 0.83% to 26,950.65, extending a rough run for speciality-chemical names." },
    { name: "Nifty Oil & Gas", changePct: -0.86, note: "Slipped 0.86% to 10,445.65 even as crude rallied above $112 — upstream names such as ONGC could not offset weakness elsewhere, and Reliance Industries (-2.03%) dragged." },
    { name: "Nifty Consumer Durables", changePct: -0.96, note: "Lost 0.96% to 34,837.65, with consumer-facing names under pressure on the inflation and rate worries." },
    { name: "Nifty IT", changePct: -1.05, note: "Fell 1.05% to 32,081.25, giving back part of the prior session's 2.88% surge, with Oracle Financial Services Software (-4.0%), Mphasis (-2.5%) and Coforge (-2.7%) the biggest drags." },
    { name: "Nifty Energy", changePct: -1.05, note: "Down 1.05% to 35,101.45, as energy majors weakened despite the crude spike." },
    { name: "Nifty MNC", changePct: -1.07, note: "Down 1.07% to 28,319.60, with capital-goods MNC ABB India (-5.94%) among the heaviest large-cap fallers of the day." },
    { name: "Nifty FMCG", changePct: -1.41, note: "Fell 1.41% to 43,105.45, one of the day's worst sectors, as Nestle India (-2.78%, on an FSSAI notice over 'misleading claims'), Radico Khaitan and Dabur led the decline." },
    { name: "Nifty Media", changePct: -2.35, note: "The weakest sector of the day, down 2.35% to 1,584.50, as media names were dumped across the board." }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Thursday, 22 Oct 2026, over the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250). Closing percentage moves cross-checked across Anand Rathi's closing top gainers and losers boards, Flash Finance's NSE top-500 screen, QuantsApp's F&O closing movers (15:40 IST), Upstox's buzzing-stocks and 'third straight session' wrap, CNBC-TV18's Nifty 500 results-movers report, Dhan's Nifty 500 gainers board and Moneycontrol's buzzing-stocks note. Where feeds round or timestamp differently, the closing figure is used and the range is noted; intraday extremes (e.g. KEI Industries at -11.6%, Indian Hotels at +5.5%) are flagged as such. Other notable Nifty 500 fallers whose closing prints varied across feeds include M&M Financial Services (down about 6%) and Garden Reach Shipbuilders.",
    gainers: [
      { name: "International Gemological Institute", changePct: 10.00, cap: "Smallcap", note: "The Nifty 500's best performer, locked at its 10% upper circuit at Rs 353.20, after consolidated net profit jumped 43% year-on-year to Rs 186 crore in Q2 FY27 on revenue up 31% to Rs 398 crore; volumes were about eight times the recent average" },
      { name: "Indian Hotels Company", changePct: 4.48, cap: "Largecap", note: "Rose 4.48% to Rs 786.75, touching a fresh 52-week high of Rs 794.65 intraday, after a record Q2 with net profit up 19.4% to Rs 380 crore on revenue up 21.7% to Rs 2,484 crore and an upgrade to its FY27 revenue-growth guidance; Nomura and Axis Securities raised targets" },
      { name: "Balkrishna Industries", changePct: 3.55, cap: "Largecap", note: "Gained 3.55% to Rs 2,112.00 after announcing a major collaboration with Italy's Pirelli, one of the world's largest tyre makers, lifting sentiment on the off-highway tyre exporter" },
      { name: "Kaynes Technology India", changePct: 3.11, cap: "Midcap", note: "Climbed 3.11% to Rs 3,263.50 as the electronics-manufacturing services name led the F&O gainers, part of a broader bid in select mid-cap capital-goods and electronics stocks" },
      { name: "ITC Hotels", changePct: 3.09, cap: "Midcap", note: "Added 3.09% to Rs 161.01, riding the hospitality bid alongside Indian Hotels as strong Q2 hotel demand and guidance upgrades lifted the whole sector" }
    ],
    losers: [
      { name: "KEI Industries", changePct: -8.50, cap: "Midcap", note: "The Nifty 500's worst performer, down 8.50% to Rs 3,880.10 (and as much as 11.6% intraday to Rs 3,749.85), after Q2 revenue rose 38.5% to Rs 3,776 crore but EBITDA and margin missed estimates — the EBITDA margin stayed at 9.9% against an expected 11.2%; the stock hit volume eight times its average" },
      { name: "Swiggy", changePct: -6.10, cap: "Largecap", note: "Slid 6.10% to Rs 209.30, hitting a fresh 52-week low ahead of its Q2 results (which, reported after close, showed a net loss of Rs 922 crore on revenue up 54%), as investors weighed quick-commerce losses at Instamart against record food-delivery profitability" },
      { name: "Kalyan Jewellers", changePct: -4.30, cap: "Midcap", note: "Fell 4.30% to Rs 532.55 as the broader risk-off mood hit consumer-discretionary and jewellery names" },
      { name: "Oracle Financial Services Software", changePct: -4.00, cap: "Largecap", note: "Dropped 4.00% to Rs 9,856.00, the biggest drag inside the Nifty IT index as the sector gave back part of the prior session's rally" },
      { name: "Mazagon Dock Shipbuilders", changePct: -3.70, cap: "Midcap", note: "Lost 3.70% to Rs 1,919.00 and hit a fresh 52-week low of Rs 1,865, part of a broad sell-off in defence and shipbuilding names; Garden Reach Shipbuilders also slid and touched a 52-week low" }
    ],
    sensexWinners: ["Bajaj Finance", "UltraTech Cement", "ICICI Bank"],
    sensexLaggards: ["Reliance Industries", "Eternal", "HDFC Bank"]
  },

  watch: [
    {
      title: "Middle East escalation and crude above $112: the macro overhang",
      detail: "Brent crude rose more than 3% to a four-month high above $112 a barrel after Houthi rebels struck Saudi Aramco's Shaybah oilfield and reports pointed to a possible US-Iran confrontation after next month's mid-term elections. For India, the world's third-largest crude importer, higher oil lifts the import bill and squeezes corporate margins, and it fed straight into Thursday's equity weakness and a softer rupee (about 94.8 a dollar). A sustained moderation in crude — and a steadier rupee — is what the market needs for a durable recovery."
    },
    {
      title: "Q2 FY27 earnings: Swiggy's big loss, IHCL's guidance raise, KEI's margin miss",
      detail: "The results season is delivering sharp divergences. Swiggy reported a Q2 net loss of Rs 922 crore even as revenue rose 54%, and the stock hit a fresh 52-week low; Indian Hotels posted a record quarter and raised its FY27 revenue-growth guidance, sending it to a 52-week high; KEI Industries beat on revenue but missed on margin, and fell over 8%. Investors are rewarding beats and punishing misses hard, so expect stock-specific action rather than index-level moves as more companies report through the coming sessions."
    },
    {
      title: "FII flows and a weakening rupee remain swing factors",
      detail: "Persistent foreign institutional selling through much of 2026 has left Indian equities vulnerable to shifts in global sentiment, and the rupee's slide towards 94.8 a dollar adds to the pressure by raising imported-inflation risks. Domestic flows and resilient Q2 earnings have cushioned the falls so far. Watch the FII/DII prints each evening and the rupee's move against the dollar."
    },
    {
      title: "RBI MPC minutes keep inflation and rate uncertainty in focus",
      detail: "The Reserve Bank of India's latest Monetary Policy Committee minutes, released on 21 October, kept inflation and interest-rate uncertainty in the spotlight. The RBI raised the repo rate 25 basis points to 5.50% earlier in October, September retail inflation stood at 5.54% and the RBI's projected average inflation for October-December is 6%. Any signal of further tightening could weigh on rate-sensitive sectors and equity valuations."
    },
    {
      title: "Can the Nifty hold 22,550-22,600? And Jio Platforms' IPO closes Friday",
      detail: "Thursday's close at 22,687.65 left the Nifty just below the 22,800 resistance zone, with 22,600-22,550 seen as the immediate support and 22,500 the line that, if broken, could open the way to 22,300-22,200. Meanwhile, Reliance Industries' Jio Platforms IPO — India's largest ever, at about Rs 30,213 crore — stays fully subscribed and closes for bidding on Friday, 23 October, with its listing set to be a near-term sentiment marker for the telecom and broader market."
    }
  ],

  reads: [
    {
      title: "Market wrap: Bajaj Finance, Cipla, Nestle India, Eternal top gainers and losers on Nifty and Sensex on Thursday",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/market-wrap-bajaj-finance-cipla-nestle-india-eternal-top-gainers-and-losers-on-nifty-and-sensex-on-thursday/articleshow/135117923.cms"
    },
    {
      title: "Stock Market Close: Sensex falls 460 pts, Nifty ends at 22,688; RIL, Eternal, HDFC Bank top losers",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-october-22-nse-bse-sensex-today-nifty50-gift-nifty-jio-ipo-today-126102200085_1.html"
    },
    {
      title: "SENSEX, NIFTY50 fall for third straight session as crude tops $112 per barrel",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/sensex-nifty-50-fall-for-third-straight-session-as-crude-tops-112-per-barrel/article-202240/"
    },
    {
      title: "Nifty 500: IGI, Indian Hotels gain; M&M Finance, KEI Industries, GRSE hit 52-week lows",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stocks/nifty-500-stocks-share-price-igi-indian-hotels-mm-finance-kei-industries-grse-mazagon-dock-q2-results-20016646.htm"
    },
    {
      title: "Tata Teleservices narrows Q2 loss to Rs 59 crore, revenue up 8%; stock surges 9% on results day",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/stock-markets/ttml-narrows-q2-loss-to-59-crore-revenue-up-8-stock-surges-9-on-results-day/article71610687.ece"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Operating Margin",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288, printed p. 317 = PDF p. 287).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Operating Margin = Operating profit ÷ Revenue (× 100)",
    formulaNote: "Operating margin measures how much of every rupee of revenue a company keeps as operating profit — that is, after the direct cost of delivering the work and the everyday costs of selling and running the business, but before interest, other income and tax. Take operating profit (revenue minus cost of sales and total operating expenses) and divide it by revenue. It is a pure measure of the core business's profitability and, crucially, it is unaffected by how the company is financed or by one-off items below the operating line. Unlike return on equity — a whole-year return that ties the income statement to the balance sheet and is flattered by a shrinking equity base — operating margin isolates the operating engine itself. Infosys, with almost no debt and a capital-light model, runs one of the highest and steadiest operating margins among large Indian companies; the market watches it closely because a few tenths of a percent either way move profit materially at its scale.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Revenue from operations, year ended March 31, 2026", value: "Rs 1,78,650 crore", page: "p. 318" },
      { label: "Cost of sales, year ended March 31, 2026", value: "Rs 1,24,735 crore", page: "p. 318" },
      { label: "Gross profit, year ended March 31, 2026", value: "Rs 53,915 crore", page: "p. 318" },
      { label: "Total operating expenses (selling & marketing Rs 9,077 crore + administrative Rs 8,584 crore), year ended March 31, 2026", value: "Rs 17,661 crore", page: "p. 318" },
      { label: "Operating profit, year ended March 31, 2026", value: "Rs 36,254 crore", page: "p. 318" }
    ],
    working: "Step 1 — Take revenue. The Consolidated Statement of Comprehensive Income (IFRS) (printed p. 318) shows revenue from operations of Rs 1,78,650 crore for the year ended March 31, 2026. Step 2 — Take the cost of sales: Rs 1,24,735 crore (printed p. 318), which gives gross profit of Rs 1,78,650 crore minus Rs 1,24,735 crore = Rs 53,915 crore. Step 3 — Subtract the operating expenses: selling and marketing of Rs 9,077 crore plus administrative expenses of Rs 8,584 crore = Rs 17,661 crore (printed p. 318). Step 4 — Operating profit = Rs 53,915 crore minus Rs 17,661 crore = Rs 36,254 crore, which is the figure the report itself prints as 'Operating profit' (printed p. 318). Step 5 — Operating margin = 36,254 ÷ 1,78,650 = 0.2029, i.e. 20.29%, or about 20.3%. In plain terms, Infosys kept about Rs 20 of operating profit for every Rs 100 of revenue it billed.",
    result: "20.3%",
    meaning: "Infosys earned an operating margin of about 20.3% in FY26 — it kept roughly Rs 20 of operating profit on every Rs 100 of revenue. That is a high, stable margin for a services business of its scale and a direct product of its model: a capital-light, largely debt-free operation whose biggest cost is people, so efficiency in utilisation, offshore mix and automation flows almost straight through to the operating line. The margin slipped modestly year-on-year — from 21.1% in FY25 — mainly because revenue growth of 9.6% in rupee terms (3.1% in constant currency) came with higher subcontractor and compensation costs, and because FY26 absorbed a one-off Rs 1,289-crore provision for the Government of India's new Labour Codes (an increase in gratuity and leave liabilities). Excluding that provision, Infosys reports an adjusted operating margin of 21.0%. The key question for investors is durability: management has guided to a 20%-22% operating margin band for FY27 and is leaning on its Project Maximus cost programme to hold the line while it invests in AI, talent and sales, so the margin is likely to stay in the low-20s barring a sharp demand shock or currency swing.",
    crossCheck: "Infosys reports the number itself: its FY26 results release and the Integrated Annual Report's key-financials table state reported IFRS operating margin of 20.3% and adjusted operating margin of 21.0%, and the Management's Discussion and Analysis in the report lists the consolidated operating margin at 20.3% for FY26 versus 21.1% for FY25 — matching the 20.3% worked through here. Screener.in and Trendlyne, which derive the same ratio from the same audited consolidated statements, show Infosys' FY26 operating margin (OPM) in the low-20s. Two convention gaps are worth flagging: (1) the 'adjusted' margin of 21.0% excludes the one-off Rs 1,289-crore Labour Codes provision, which lifts operating profit to Rs 37,543 crore (37,543 ÷ 1,78,650 = 21.0%), whereas the reported 20.3% includes it; and (2) some data providers compute operating margin on standalone rather than consolidated numbers, or define operating profit to include other income, which would change the figure. The reported consolidated, ex-other-income method used here is the one Infosys itself describes.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (IFRS), printed p. 318 (PDF p. 288), for revenue from operations, cost of sales, gross profit, selling and marketing expenses, administrative expenses, total operating expenses and operating profit for the year ended March 31, 2026; Management's Discussion and Analysis, Key Financial Ratios, for the reported and adjusted consolidated operating margin and the Labour Codes provision"
  }
};
