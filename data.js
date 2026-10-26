const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 26 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Monday, 26 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22753.20,
      dayChange: 153.20,
      dayChangePct: 0.68,
      weekChangePct: -0.59, // five sessions to 26 Oct, vs the 19 Oct close of 22,888.95
      spark: [22888.95, 22811.35, 22687.65, 22600.00, 22753.20], // last 5 closes: 19 Oct, 21 Oct, 22 Oct, 23 Oct, 26 Oct
      note: "The benchmark snapped a four-session losing streak and closed at its high of 22,753.20, up 153.20 points or 0.68%, after falling to 22,387.35 in the opening hour — a 366-point swing. Metal (+2.2%), pharma (+1.8%) and oil & gas (+1.4%) led, 15 of the 16 major sector gauges ended higher, and the biggest Nifty gainers were Dr Reddy's (+6.62%), JSW Steel (+6.28%), BSE (+3.97%), Adani Ports (+2.92%) and Eternal (+2.57%); Shriram Finance (-4.62%), Tata Consumer (-2.84%) and Bajaj Finance (-1.10%) lagged. The close put the index back above its 20-day simple moving average and its 200-week average, while India VIX firmed about 1.5% to 17.11. (The 22,753.20 close and the 153.20-point gain are cross-checked across The Hindu BusinessLine, Business Standard, CNBC-TV18, Upstox, HDFC Sky, Rediff and IANS; the +0.68% is arithmetically 153.20 ÷ 22,600.00. The week figure is measured over the five sessions since Monday 19 October — the last full trading week — because this week began today.)"
    },
    {
      name: "Nifty Next 50",
      close: 66477.15,
      dayChange: 648.55,
      dayChangePct: 0.99,
      weekChangePct: -3.23, // five sessions to 26 Oct, vs the 19 Oct close of 68,695.85
      spark: [68695.85, 67655.30, 67354.15, 65828.60, 66477.15], // last 5 closes: 19 Oct, 21 Oct, 22 Oct, 23 Oct, 26 Oct
      note: "The 'next rung' of large caps rebounded 648.55 points, or 0.99%, to 66,477.15 — also a close at the day's high — after touching 64,999.15 in the morning, its lowest level of the session. Adani Green Energy (+5.48%), Vodafone Idea (+5.19%) and Polycab India (+4.02%) contributed most of the points as 39 of the 50 constituents advanced; Tata Motors was the biggest drag. Over the five sessions to Monday the index is still down 3.23%, and it trades 3.6% below its 20-day average and 7.0% below its 50-day average. (Closing level of 66,477.15 and a gain of 648.55 points agree exactly across Dhan's index page and Strota's close table; the five-session fall of -3.23% matches Dhan's published 1-week return.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 20812.25,
      dayChange: 219.50,
      dayChangePct: 1.07,
      weekChangePct: -3.20, // five sessions to 26 Oct, vs the 19 Oct close of 21,499.30
      spark: [21499.30, 21200.25, 21028.65, 20592.75, 20812.25], // last 5 closes: 19 Oct, 21 Oct, 22 Oct, 23 Oct, 26 Oct
      note: "Midcaps outperformed the headline index, rising 219.50 points, or 1.07%, to 20,812.25 and closing within three points of the session high of 20,814.55 after an intraday low of 20,336.10; 102 of the 149 constituents advanced. Indian Overseas Bank (+5.93%), Swiggy (+5.54%) and ITC Hotels (+5.16%) added the most points, while AU Small Finance Bank (-6.85%) and Supreme Industries (-4.13%) were the heaviest drags. The gauge remains 7.8% below its 50-day average and 6.2% below its 200-day average, and is down 3.20% over the five sessions since 19 October. (Closing level of 20,812.25 and a gain of 219.50 points per Dhan's post-close index page; the five-session change of -3.20% matches Dhan's published 1-week return and is arithmetically 219.50 ÷ 20,592.75 for the day.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 16570.50,
      dayChange: 185.35,
      dayChangePct: 1.13,
      weekChangePct: -5.29, // five sessions to 26 Oct, vs the 19 Oct close of 17,495.90
      spark: [17495.90, 17041.95, 16856.20, 16385.15, 16570.50], // last 5 closes: 19 Oct, 21 Oct, 22 Oct, 23 Oct, 26 Oct
      note: "Small caps led the bounce, adding 185.35 points, or 1.13%, to 16,570.50 after a low of 16,134.95 — a 435-point intraday recovery — with 158 of the 248 constituents higher. Ather Energy (+14.13%), Mangalore Refinery & Petrochemicals (+12.55%) and Tata Teleservices (Maharashtra) (+10.22%) added the most points; Five Star Business Finance (-7.48%) was the biggest drag. Even so the index is still down 5.29% over the five sessions since 19 October and 8.2% below its 50-day average, and remains the worst-hit size gauge of the past fortnight. (Closing level of 16,570.50 and a gain of 185.35 points agree exactly across Dhan's index page and Strota's close table; the day's +1.13% is 185.35 ÷ 16,385.15, and IANS/Business Standard separately report the Nifty Smallcap 100 up 1.38%.)"
    },
    {
      name: "BSE SME Index",
      close: 111599.92,
      dayChange: -484.79,
      dayChangePct: -0.43,
      weekChangePct: -7.03, // five sessions to 26 Oct, vs the 19 Oct close of 1,20,033.96
      spark: [120033.96, 116484.98, 115572.87, 112084.71, 111599.92], // last 5 closes: 19 Oct, 21 Oct, 22 Oct, 23 Oct, 26 Oct
      note: "The BSE SME IPO index was the one corner of the market that stayed red, slipping 484.79 points, or 0.43%, to 1,11,599.92 — a fourth straight lower close — after trading between 1,10,505.15 and 1,12,083.68. It has now lost 7.03% over the five sessions since 19 October and 8.5% from its 16 October close, the sharpest fall of any gauge on this board, as the most speculative end of the market kept bleeding even on a recovery day. (Closing level of 1,11,599.92, a fall of 484.79 points and a change of -0.43% per Anand Rathi's BSE SME IPO page, which shows market status 'closed' and a 3:59 pm stamp; the same 1,11,599.92 close is consistent with the BSE series showing the index at 1,11,785.86 by 12:09 pm and still falling. The five-session fall of -7.03% is computed from the BSE SME IPO closing series, 1,20,033.96 on 19 October.)"
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Sensex jumps 483 points (+0.66%) to 73,607 and Nifty 153 points (+0.68%) to 22,753 as metal, pharma and oil & gas ride to the rescue — a 1,092-point intraday swing snaps a four-session losing streak; Midcap 150 (+1.07%) and Smallcap 250 (+1.13%) beat the benchmarks but the BSE SME index slips again",
    summary: "Indian equities pulled off a sharp intraday reversal on Monday, 26 October 2026, closing at their highs to snap a four-session losing streak. The Sensex opened lower at 72,990.04, fell as far as 72,514.57 — more than 600 points below Friday's close — and then climbed all the way back to end 482.92 points, or 0.66%, higher at 73,606.75; the Nifty 50 went from an opening 22,524.40 and a low of 22,387.35 to a close of 22,753.20, up 153.20 points or 0.68%. The trigger was two-fold. First, crude cooled: Brent fell about 2% to roughly $114–$115 a barrel from Friday's six-month high, easing the imported-inflation worry that had driven the previous week's 2.4% fall in the Nifty. Second, September-quarter earnings did the heavy lifting at the stock level. JSW Steel jumped 6.28% after a near-threefold rise in quarterly profit and Dr Reddy's Laboratories 6.62% on a profit beat, lifting the Nifty Metal index 2.2% and the Nifty Pharma index 1.8%; the Nifty Oil & Gas index added 1.4% as BPCL rose 3% and MRPL 12.55%. BSE Ltd gained 3.97% on a broker upgrade, Kotak Mahindra Bank 2.4% on a better-than-expected quarter, Adani Ports 2.92% and Eternal 2.57%. Fifteen of the 16 major sector gauges closed higher, and the broader market beat the benchmarks: the Nifty Midcap 150 rose 1.07%, the Nifty Smallcap 250 1.13%, the Nifty Next 50 0.99% and the Nifty 500 0.85% to 21,608.75. The selling was concentrated in lenders and staples — Shriram Finance fell 4.62% after cutting its loan-growth guidance and drawing a CLSA target cut, Tata Consumer Products 2.84%, Bajaj Finance 1.10% and HDFC Life 0.91% — while among smaller names AU Small Finance Bank lost 6.85%, Five Star Business Finance 7.48% and City Union Bank 6.32% after their quarterly numbers. Breadth turned positive on the NSE at 2,063 advances against 1,525 declines, yet more than 500 stocks still touched 52-week lows, India VIX firmed about 1.5% to 17.11, and the rupee weakened for a third session to 95.19 a dollar. The BSE SME IPO index was the lone holdout, down 0.43% to 1,11,599.92.",
    stats: ["Nifty +0.68%", "Sensex +0.66%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Monday — the week's wrap is Saturday-only

  dayByDay: [
    { date: "2026-10-20", label: "Tue 20 Oct", niftyClose: null, note: "Markets closed for Dussehra (Vijaya Dashami) — the NSE and BSE shut for the day, making it a four-session trading week." },
    { date: "2026-10-21", label: "Wed 21 Oct", niftyClose: 22811.35, niftyChangePct: -0.34, sensexChangePct: -0.19, note: "An 800-point morning rally turned into a lower close: the Sensex fell 143.21 points (-0.19%) to 73,709.69 and the Nifty 50 77.60 points (-0.34%) to 22,811.35, its second straight decline, after the Sensex hit an intraday high of 74,682.19 and the Nifty 23,120.90 before crude above $111, US 10-year yields near 5.13% and persistent FII selling reversed the move. IT was the only sector in the green, the Nifty IT index up 2.88% to 32,422.50 — an eight-month high — as Infosys (+3.30%), HCL Technologies (+3.21%), Tech Mahindra (+3.13%) and TCS (+2.77%) led the Nifty gainers and L&T Technology Services jumped 8.75% on a 66% rise in Q2 net profit to Rs 548 crore. Bajaj Finance (-3.27%) was the worst Nifty performer on margin worries, with BSE Ltd (-2.63%), Eternal (-2.45%), Eicher Motors (-2.43%) and Trent (-2.41%) close behind; autos fell on weak October registration data. The Nifty Chemicals index (-2.64%) led sector losses, ahead of Metal (-1.71%), Auto (-1.54%) and Energy (-1.39%). The broader market was hit far harder — Midcap 150 -1.39%, Smallcap 250 -2.26%, Microcap 250 -2.61%, 322 BSE stocks at 52-week lows — India VIX rose 6.29% to 15.70, NSE breadth was 603 advances vs 2,995 declines, and the Rs 30,213-crore Jio Platforms IPO was fully subscribed within about 100 minutes of opening." },
    { date: "2026-10-22", label: "Thu 22 Oct", niftyClose: 22687.65, niftyChangePct: -0.54, sensexChangePct: -0.62, note: "A third straight decline, this one driven by crude: the Sensex fell 460.30 points (-0.62%) to 73,249.39 and the Nifty 50 123.70 points (-0.54%) to 22,687.65, closing below 22,700, after Brent surged more than 3% to a four-month high above $112 on a Houthi strike on Saudi Aramco's Shaybah field and fears of a US-Iran escalation. The Sensex fell as much as 705 points to a low of 73,005.11 and the Nifty to 22,554.85 before a late recovery; the rupee weakened to about 94.8. Fifteen of 16 sector gauges fell, led by Media (-2.35%), FMCG (-1.41%), IT (-1.05%), Consumer Durables (-0.96%) and Oil & Gas (-0.86%); only Pharma (+0.12%), PSU Bank (+0.07%) and Healthcare (+0.05%) ended green. Bajaj Finance (+1.74%), Cipla (+1.29%) and UltraTech Cement (+1.00%) led the Nifty gainers; Nestle India (-2.78%, on an FSSAI notice), Eternal (-2.53%), HDFC Life (-2.09%) and Reliance Industries (-2.03%) led the losers. The broader market underperformed — Midcap 150 -0.81%, Smallcap 250 -1.09%, Microcap 250 -1.03% — India VIX rose about 0.9% to 15.82, NSE breadth was 1,026 advances vs 2,512 declines, and BSE market capitalisation fell about Rs 4 lakh crore. In the Nifty 500, IGIL (+10%, upper circuit) and Indian Hotels (+4.5%) led the gainers, while KEI Industries (-8.5%) and Swiggy (-6.1%, a fresh 52-week low) led the losers." },
    { date: "2026-10-23", label: "Fri 23 Oct", niftyClose: 22600.00, niftyChangePct: -0.39, sensexChangePct: -0.17, note: "A fourth straight decline, and a wild one: the Sensex opened higher at 73,665.64 and touched 73,766.51 before crashing as much as 1,314 points to 72,452.37, and the Nifty hit 22,787.25 before sliding to 22,372.00, before a late recovery left the Sensex down 125.56 points (-0.17%) at 73,123.83 and the Nifty down 87.65 points (-0.39%) at 22,600.00 — completing the week's slide. Brent rose about 1% to a four-month high above $114 on West Asia tension, and the rupee slipped to 94.94. All 16 major sector gauges fell, led by Metal (-2.71%), Consumer Durables (-2.63%), Realty (-2.38%) and PSU Bank (-2.26%); IT (-0.27%) was least affected. Eternal (+4.25%), Apollo Hospitals (+1.65%) and ONGC (+1.11%) led the Nifty gainers; Shriram Finance (-3.98%), Adani Enterprises (-2.86%) and JSW Steel (-2.83%) led the losers. The broader market fell far harder — Midcap 150 -2.07%, Smallcap 250 -2.79%, Microcap 250 -2.32%, Nifty 500 -1.24% to 21,427.60. In the Nifty 500, IGIL (+7.91%) and Cyient (+7.81%) led the gainers, while Swiggy plunged 16.75% to a fresh 52-week low on its Q2 miss and J&K Bank fell 16.28%. India VIX jumped 6.32% to 16.76, NSE breadth was 624 advances vs 3,011 declines, and BSE market capitalisation fell about Rs 7.42 lakh crore." },
    { date: "2026-10-26", label: "Mon 26 Oct", niftyClose: 22753.20, niftyChangePct: 0.68, sensexChangePct: 0.66, note: "A late-hour rescue ended the four-day slide: the Sensex opened at 72,990.04, sank to 72,514.57 and then rallied more than 1,000 points off that low to close 482.92 points (+0.66%) higher at 73,606.75, with the Nifty going from 22,387.35 to 22,753.20, up 153.20 points (+0.68%) — both at their session highs. Brent's 2% slide to about $114–$115 helped, but the real fuel was earnings: JSW Steel (+6.28%) after a near-threefold jump in September-quarter profit, Dr Reddy's (+6.62%) on a profit beat, BSE (+3.97%) on a broker upgrade, Kotak Mahindra Bank (+2.4%), Adani Ports (+2.92%) and Eternal (+2.57%). Metal (+2.2%), Pharma (+1.8%) and Oil & Gas (+1.4%) led 15 of 16 sector gauges higher. Shriram Finance (-4.62%, on a cut to its AUM guidance and a CLSA target cut), Tata Consumer (-2.84%), Bajaj Finance (-1.10%) and HDFC Life (-0.91%) fell. The broader market beat the benchmarks — Midcap 100 +1.19% to 56,465.40, Smallcap 100 +1.38%, Midcap 150 +1.07%, Smallcap 250 +1.13%, Next 50 +0.99%, Nifty 500 +0.85% to 21,608.75 — while the BSE SME IPO index fell 0.43% to 1,11,599.92. India VIX firmed about 1.5% to 17.11, NSE breadth was 2,063 advances against 1,525 declines, more than 500 stocks touched 52-week lows, and the rupee weakened 25 paise to 95.19 a dollar." }
  ],

  sectors: [
    { name: "Nifty Metal", changePct: 2.2, note: "The day's best sector, up 2.2%, recovering from a 5.4% slide over the previous four sessions. JSW Steel (+6.28%) reported a near-threefold jump in September-quarter profit on record volumes, Tata Steel added 1.3% and Hindalco 1.8%. (Per HDFC Sky's closing sectoral snapshot and the IANS close report; Liquide's closing heatmap puts the gain at 2.21%.)" },
    { name: "Nifty Pharma", changePct: 1.8, note: "Rose about 1.8% as Dr Reddy's Laboratories jumped 6.62% after its Q2 profit beat consensus even though reported profit fell year-on-year, and Max Healthcare added 2.4%. (Per HDFC Sky; IANS reports 1.67% and Liquide 1.76%, so the range across closing reports is 1.67%–1.8%.)" },
    { name: "Nifty Energy", changePct: 1.46, note: "Advanced 1.46% as Reliance Industries (+1%) and BPCL (+3%) recovered even with Brent near $115 a barrel, reversing part of the previous session's fall. (Per Liquide's closing sector heatmap; HDFC Sky's close report names energy among the day's leaders.)" },
    { name: "Nifty Oil & Gas", changePct: 1.4, note: "Gained 1.4% after sliding 2.1% over the previous five sessions, helped by MRPL's 12.55% surge on a retained 'Buy' rating and BPCL's 3% rise. (Per HDFC Sky's closing snapshot.)" },
    { name: "Nifty IT", changePct: 0.87, note: "IT turned around to close up about 0.87%, with Coforge (+4.87%) and Infosys (over 1% higher, despite cutting its FY27 growth guidance) leading; the gauge had been the worst performer in the morning, down 1.79% at one point as Infosys opened sharply lower. (Per Liquide's closing heatmap and CNBC-TV18's close report; Finology's mid-morning print still showed the index negative at -0.25%.)" },
    { name: "Nifty Realty", changePct: 0.68, note: "Added 0.68% as rate-sensitive property names recovered with the broader market. (Per Liquide's closing heatmap.)" },
    { name: "Nifty Auto", changePct: 0.44, note: "Rose 0.44% on selective buying, with Sona BLW Precision Forgings (+3.86%) standing out after its Q2 numbers. (Per Liquide's closing heatmap; Finology's mid-morning print had the index slightly negative.)" },
    { name: "Nifty Financial Services", changePct: 0.21, note: "Barely positive as lenders were sold: AU Small Finance Bank fell 6.85%, Five Star Business Finance 7.48%, City Union Bank 6.32% and Shriram Finance 4.62% after their quarterly numbers and guidance. (Per Liquide's closing heatmap.)" },
    { name: "Nifty Bank", changePct: 0.15, note: "Edged up 0.15%, or 79.35 points, to 54,366.70 after trading on either side of the flat line all session, as Kotak Mahindra Bank (+2.4%) and Axis Bank offset HDFC Bank (-0.69%) and Bajaj Finance (-1.10%). (Closing level of 54,366.70 and a gain of 79.35 points agree across Liquide, CNBC-TV18, Business Standard and Strota.)" },
    { name: "Nifty Consumer Durables", changePct: -0.21, note: "The weakest gauge in the closing heatmap, down about 0.21%, as Havells India (-2.05%), Amber Enterprises (-1.61%), Kajaria Ceramics (-1.60%) and Voltas fell. Business Standard and IANS both name consumer durables among the day's worst performers. Nifty FMCG and Nifty Media were reported lower by some outlets and marginally higher by others — they are left out here rather than guessed at." }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 day gainers and losers for Monday, 26 October 2026, screened across the full Nifty 500 universe (Nifty 50 + Nifty Next 50 + Nifty Midcap 150 + Nifty Smallcap 250), not just the Nifty 50/Midcap 100/Smallcap 100 sub-indices. Percentage moves taken from Research & Investment's NIFTY 500 gainers-and-losers tables as of 16:08 IST on 26 October and cross-checked name by name against Upstox's closing Nifty 50/Midcap 100/Smallcap 100 lists (Ather Energy, MRPL, Coforge, AU Small Finance Bank, Supreme Industries, Bank of India, City Union Bank, CreditAccess Grameen) and CNBC-TV18's closing report (Ather Energy, Graphite India, ITC Hotels, Indian Overseas Bank, Supreme Industries). Where feeds differ by a few basis points the closing percentage is used; intraday-only prints (e.g. Ather Energy at +17.6% intraday, Five Star at -5.35%) are not used.",
    gainers: [
      { name: "Ather Energy", changePct: 14.13, cap: "Smallcap", note: "The Nifty 500's biggest gainer, up 14.13% to Rs 1,575 after the electric-scooter maker reported its first quarterly profit — Rs 1.26 crore in Q2 FY27 against a Rs 154-crore loss a year earlier — with revenue up 62.8% to Rs 1,464 crore and EBITDA of Rs 11.3 crore against a Rs 133-crore EBITDA loss" },
      { name: "Mangalore Refinery & Petrochemicals", changePct: 12.55, cap: "Smallcap", note: "Surged 12.55% to Rs 182.61 after a brokerage retained its 'Buy' rating following strong September-quarter earnings, as refiners benefited from the elevated crude complex" },
      { name: "Tata Teleservices (Maharashtra)", changePct: 10.22, cap: "Smallcap", note: "Jumped 10.22% to Rs 41.53 on heavy volume of 13.66 crore shares, part of a broader rally in telecom names (Vodafone Idea +5.19%)" },
      { name: "Carborundum Universal", changePct: 9.76, cap: "Midcap", note: "Added 9.76% to Rs 1,129.20, one of the strongest midcap moves of the session as abrasives and industrial-ceramics names were re-rated" },
      { name: "TD Power Systems", changePct: 7.63, cap: "Smallcap", note: "Rose 7.63% to Rs 688.35, reversing Friday's 5.03% slide as capital-goods names recovered with the metal and energy complex" }
    ],
    losers: [
      { name: "Five Star Business Finance", changePct: -7.48, cap: "Smallcap", note: "The Nifty 500's worst performer, down 7.48% to Rs 414.85 after its September-quarter numbers disappointed and credit costs stayed elevated; the stock is now close to its 52-week low of Rs 338.15" },
      { name: "AU Small Finance Bank", changePct: -6.85, cap: "Midcap", note: "Slid 6.85% to Rs 869 after Q2 results that investors read as a miss, making it the biggest drag on both the Nifty Midcap 100 and Midcap 150" },
      { name: "City Union Bank", changePct: -6.32, cap: "Smallcap", note: "Fell 6.32% to Rs 207.98 on its quarterly results, among the sharpest declines in the small-cap indices (Upstox's closing table shows -6.38%)" },
      { name: "Shriram Finance", changePct: -4.62, cap: "Largecap", note: "The biggest Nifty 50 loser, down 4.62% to Rs 825 even though standalone Q2 profit rose 59% year-on-year to Rs 3,677 crore, after the NBFC cut its annual loan-growth (AUM) guidance and flagged higher credit costs; CLSA cut its target to Rs 1,100" },
      { name: "Supreme Industries", changePct: -4.13, cap: "Midcap", note: "Dropped 4.13% to Rs 3,250 despite a 58.8% rise in Q2 net profit to Rs 262 crore, because revenue and margins came in below consensus and management trimmed its guidance" }
    ],
    sensexWinners: ["Adani Ports", "Eternal", "Kotak Mahindra Bank"],
    sensexLaggards: ["Bajaj Finance", "HDFC Bank", "Maruti Suzuki"]
  },

  watch: [
    {
      title: "The Federal Reserve's decision on Wednesday",
      detail: "The US central bank concludes its 27–28 October meeting on Wednesday, and most economists expect no change in rates. For India the decision matters less for the rate itself than for the dollar, US yields and the flow of foreign money into emerging markets: the rupee has weakened three sessions running to 95.19 a dollar, and a hawkish surprise would tighten financial conditions just as crude stays near $115. Watch the statement language on inflation and the dollar index the morning after."
    },
    {
      title: "Crude above $114 — the single biggest swing factor",
      detail: "Brent fell about 2% on Monday to roughly $114–$115 a barrel, retreating from Friday's six-month high, on reports of renewed diplomatic effort in West Asia — a Qatari delegation in Tehran and a partial resumption at Riyadh's King Khalid airport. But Houthi attacks on shipping in the Strait of Hormuz continue and the Iran conflict is close to entering its ninth month. For India, the world's third-largest crude importer, every $5 on Brent feeds the import bill, the current-account gap and corporate margins. A sustained move back above $118 would likely undo Monday's recovery."
    },
    {
      title: "Q2 FY27 earnings: the beats and the misses are diverging sharply",
      detail: "Monday showed how brutally stock-specific this season has become. JSW Steel rose 6.28% on a near-threefold profit jump and Dr Reddy's 6.62% on a profit beat, while Shriram Finance fell 4.62% on guidance, Supreme Industries 4.13% despite a 59% profit rise, AU Small Finance Bank 6.85% and Five Star Business Finance 7.48%. Tata Consumer Products, Mankind Pharma, REC, Paytm, ITC Hotels, Aegis Logistics, Sona BLW and Indian Overseas Bank reported on Monday; the tail of the season runs through this week. Expect index-level moves to stay small and single-stock moves to stay violent."
    },
    {
      title: "Technicals: the Nifty has reclaimed two key averages",
      detail: "Monday's close of 22,753.20 put the Nifty back above both its 20-day simple moving average and its 200-week average, improving the immediate structure after last week's breakdown. Immediate support sits at 22,600 and resistance at 22,800–22,900; a sustained close above 22,800 is what analysts say is needed to confirm momentum. The put-call ratio rose to about 1.12, which suggests better downside positioning, but India VIX at 17.11 says traders still expect wide swings — so position sizing matters more than direction here."
    },
    {
      title: "Breadth is still ugly underneath the index gain",
      detail: "Despite the 0.68% Nifty gain and positive NSE breadth (2,063 advances against 1,525 declines), more than 500 stocks printed 52-week lows on Monday, including Bank of India, Tata Consumer Products, UTI AMC, Voltas and Canara Bank. Foreign investors bought Rs 887.65 crore of equities on Friday and domestic institutions Rs 3,236 crore, but FIIs have sold about Rs 51,500 crore this month. Watch the evening FII/DII prints and whether the small-cap and SME indices — still down 5.3% and 7.0% over five sessions — stop making lower lows."
    }
  ],

  reads: [
    {
      title: "Stock Market Today Highlights, October 26: Stock markets rebound after 4-day slump; Sensex jumps 483 points",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-26-october-2026/article71622964.ece"
    },
    {
      title: "Sensex Today | Stock Market Highlights: Sensex rises 483 points, Nifty ends at 22,753; Dr Reddy's jumps 7%",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/stock-market-live-updates-nifty-50-sensex-today-oil-banks-it-midcaps-smallcaps-infosys-kotak-idfc-boi-tata-motors-bpcl-share-price-liveblog-20018878.htm"
    },
    {
      title: "Market wrap: Dr Reddys, JSW Steel, Shriram Finance, Tata Consumer top gainers and losers on Nifty and Sensex on Monday",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/market-wrap-dr-reddys-jsw-steel-shriram-finance-tata-consumer-top-gainers-and-losers-on-nifty-and-sensex-on-monday/articleshow/135209828.cms"
    },
    {
      title: "Sectoral Snapshot Today, October 26, 2026: Metal, Pharma, Oil & Gas Stocks Rally; JSW Steel, Dr Reddy's Lead Gains",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/sectoral-snapshot-today-october-26-2026-metal-pharma-oil-jsw-steel-dr-reddys-lead-gains"
    },
    {
      title: "Top gainers and losers, Oct 26: Dr. Reddy's rallies 7%, JSW Steel gains 6%, Shriram Finance falls 5%; check list",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-26-dr-reddy-s-rallies-7-jsw-steel-gains-6-shriram-finance-falls-5-check-list/article-202405/"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Current Ratio",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF the pages are 30 lower than the printed numbers you see in the report (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = Total current assets ÷ Total current liabilities",
    formulaNote: "The current ratio asks a blunt, practical question: if every short-term obligation came due at once, could the company pay it from the assets it can turn into cash within a year? Current assets are cash, current investments, receivables and other balances due within twelve months; current liabilities are trade payables, lease instalments due within a year, accrued expenses, tax payable and provisions. A ratio above 1 means short-term assets cover short-term obligations. It says nothing about profitability or debt structure — it is purely a liquidity cushion test — which is why it is read alongside the cash-flow statement and the debt ratios rather than on its own.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets, as at March 31, 2026", value: "Rs 1,03,489 crore", page: "p. 316–317" },
      { label: "Total current liabilities, as at March 31, 2026", value: "Rs 52,322 crore", page: "p. 316–317" },
      { label: "Total current assets, as at March 31, 2025 (for the year-on-year comparison)", value: "Rs 97,099 crore", page: "p. 316–317" },
      { label: "Total current liabilities, as at March 31, 2025 (for the year-on-year comparison)", value: "Rs 42,850 crore", page: "p. 316–317" }
    ],
    working: "Step 1 — Take the current assets. The Consolidated Balance Sheet (Ind AS) at printed pp. 316–317 shows total current assets of Rs 1,03,489 crore as at March 31, 2026, built from current investments Rs 12,950 crore, trade receivables Rs 35,234 crore, cash and cash equivalents Rs 22,201 crore, loans Rs 234 crore, other financial assets Rs 15,890 crore, income tax assets Rs 1,835 crore and other current assets Rs 15,145 crore. Step 2 — Take the current liabilities. The same statement shows total current liabilities of Rs 52,322 crore, made up of lease liabilities Rs 3,160 crore, trade payables Rs 4,744 crore, other financial liabilities Rs 21,483 crore, other current liabilities Rs 15,779 crore, provisions Rs 1,512 crore and income tax liabilities Rs 5,644 crore. Step 3 — Divide: Current ratio = 1,03,489 ÷ 52,322 = 1.9779, i.e. 1.98. Step 4 — Do the same for FY25: 97,099 ÷ 42,850 = 2.2660, i.e. 2.27. In plain terms, Infosys had about Rs 1.98 of short-term assets for every Rs 1 of short-term obligations at 31 March 2026, down from Rs 2.27 a year earlier.",
    result: "1.98 (FY25: 2.27)",
    meaning: "A current ratio of 1.98 is a comfortable cushion: Infosys could settle every rupee of liabilities falling due within a year and still be left with 98 paise of current assets per rupee. For a services business this is close to ideal — enough liquidity to fund wages, subcontractor bills and tax through the year without borrowing, but not so much that capital is idle. The fall from 2.27 to 1.98 is worth understanding rather than worrying about: current liabilities grew 22% (from Rs 42,850 crore to Rs 52,322 crore) while current assets grew only 6.6%. Most of that is the company's own capital return — Infosys bought back 10 crore shares during FY26 and paid out large dividends, which draws down cash and reserves, while unearned revenue and employee-benefit obligations rose. A shrinking ratio driven by returning cash to shareholders is a very different thing from one driven by a liquidity squeeze, and Infosys still holds Rs 35,151 crore of cash and current investments against Rs 52,322 crore of current liabilities — plus it generates cash faster than it spends it. The number to watch is whether the ratio stabilises near 2 or keeps sliding as buybacks continue.",
    crossCheck: "The result reconciles cleanly across two independent presentations of the same audited year. The IFRS consolidated balance sheet in Infosys' Q4 FY26 audited statement lists current assets of Rs 1,03,489 crore and current liabilities of Rs 52,322 crore as at March 31, 2026 — identical totals to the Ind AS balance sheet in the annual report, even though the line items are grouped differently (IFRS splits out unbilled revenue, derivative instruments and unearned revenue, Ind AS folds them into other financial assets, other current assets and other current liabilities). Both give 1.98. On Screener.in and Trendlyne the figure can differ by a few tenths of a point, and the reason is convention rather than error: those screeners build the ratio from a narrower set of balance-sheet buckets — typically treating lease liabilities as part of 'debt' rather than current liabilities, and mapping 'other current liabilities' into a generic 'other liabilities' line — so their current-asset and current-liability totals are not the same denominators as the audited statements. The audited Ind AS figure of 1.98 is used here because it is the number the company itself reports and files.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (Ind AS), printed pp. 316–317 (PDF pp. 286–287), for total current assets (Rs 1,03,489 crore; Rs 97,099 crore) and total current liabilities (Rs 52,322 crore; Rs 42,850 crore) as at March 31, 2026 and March 31, 2025, together with the underlying line items; cross-checked against the audited IFRS consolidated balance sheet in Infosys' Q4 FY26 results, which reports the same two totals."
  }
};
