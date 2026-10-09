const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 9 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 9 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22520.45,
      dayChange: 288.65,
      dayChangePct: 1.30,
      weekChangePct: 0.44, // week-to-date vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22555.75, 22776.10, 22603.05, 22231.80, 22520.45], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The benchmark snapped a two-session losing streak and reclaimed 22,500, jumping 288.65 points (+1.30%) to 22,520.45. It opened at 22,314.95, hit a high of 22,580.75 and closed near the day's high as 46 of the 50 Nifty stocks advanced, clawing back nearly 80% of Thursday's 371-point fall."
    },
    {
      name: "Nifty Next 50",
      close: 68150.75,
      dayChange: 536.25,
      dayChangePct: 0.79,
      weekChangePct: -1.20, // week-to-date vs Thu, 1 Oct close of 68,981.35
      spark: [69213.75, 69973.70, 69404.00, 67614.50, 68150.75], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The 'next rung' of large caps rose about 0.8% to 68,150.75, riding the same large-cap rebound that lifted the Nifty. Note: NSE's official 9 October close file was not yet published when this edition was built, so the level and move are carried from the late-session tape, where the index traded up roughly 0.7–0.8% through the day."
    },
    {
      name: "Nifty Midcap 150",
      close: 21529.60,
      dayChange: 218.10,
      dayChangePct: 1.02,
      weekChangePct: -0.53, // week-to-date vs Thu, 1 Oct close of 21,643.85
      spark: [21755.30, 21979.45, 21838.00, 21311.50, 21529.60], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "Midcaps kept pace with the benchmarks, the Nifty Midcap 150 up about 1.0% (the Nifty Midcap 100 rose 1.56% to 58,787) as risk appetite returned. Note: a confirmed 9 October close was not yet published; the level applies the segment's reported close move to the 8 October close."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17561.05,
      dayChange: 72.75,
      dayChangePct: 0.42,
      weekChangePct: -0.16, // week-to-date vs Thu, 1 Oct close of 17,589.05
      spark: [17655.35, 17902.30, 17917.75, 17488.30, 17561.05], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "Small caps lagged the large-cap rebound, the Nifty Smallcap 250 up only about 0.4% (the Nifty Smallcap 100 rose 0.54%) even as breadth improved. Note: a confirmed 9 October close was not yet published; the level applies the segment's reported close move to the 8 October close."
    },
    {
      name: "BSE SME Index",
      close: 121343.93,
      dayChange: 267.55,
      dayChangePct: 0.22,
      weekChangePct: 0.81, // week-to-date vs Thu, 1 Oct close of 1,20,363.48
      spark: [120356.62, 121277.76, 122910.34, 121076.38, 121343.93], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The S&P BSE SME IPO index edged up about 0.2% to 1,21,344, with three new SME IPOs — Acme India Industries, TNA Solutions and Paramount Syntex — listing on the BSE SME platform, together raising roughly Rs 241 crore. Note: the level is the late-session reading; NSE/BSE end-of-day SME files were not yet published at the time of this update."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Relief rally on Dalal Street: Sensex rebounds 879 points and Nifty reclaims 22,500 as IT leads after TCS's Q2 beat and crude cools",
    summary: "Bulls clawed back Thursday's losses as the Sensex jumped 879.09 points (+1.23%) to 72,472.33 and the Nifty 50 rose 288.65 points (+1.30%) to 22,520.45, snapping a two-session slide and regaining nearly 80% of the previous day's fall. The rebound was led by IT after TCS reported a 15% year-on-year rise in September-quarter net profit to Rs 13,884 crore and flagged continued momentum, with the Nifty IT index surging 3.02%. Sentiment was helped by cooling crude — Brent fell about 1.3% to roughly $103 a barrel after US President Donald Trump said Washington would not attack Iran before next month's midterm elections — along with softer global bond yields and a firmer rupee at about 96.65-96.75. Breadth was strong: on the NSE 2,524 shares advanced against 1,864 declines, and the Nifty 50 advance-decline ratio was 46:4. Every Nifty sector closed green barring Oil & Gas; FMCG (+2.20%), PSU Bank (+1.63%), Auto (+1.42%) and Financials (+1.36%) followed IT higher. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports were the top gainers, while BSE (-1.43%), Reliance Industries (-0.65%) and JSW Steel (-0.61%) were the notable laggards. India VIX cooled 6.07% to 14.35. The caveats remain: FIIs sold a net Rs 12,944 crore on Thursday, their biggest single-day outflow since 29 May, and have offloaded about Rs 36,210 crore so far in October, while crude stays above $100. The rebound also broke an eight-week losing streak for the Nifty, which ended the week higher.",
    stats: ["Nifty +1.30%", "Sensex +1.23%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Friday edition — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." },
    { date: "2026-10-06", label: "Tue 6 Oct", niftyClose: 22776.10, niftyChangePct: 0.98, sensexChangePct: 0.95, note: "A second straight gain, and a broad one: the Nifty closed at its intraday high, up 220 points to 22,776, and the Sensex added 685 points to 73,068 as Brent fell back below $100. Trent surged ~12.6% on a strong Q2 update, Kotak Mahindra Bank rose 3.8% on 24.7% advance growth, and Reliance gained 2.5%; FMCG, pharma, telecom and consumer durables led. Mid and small caps outperformed (Midcap 100 +1.08%, Smallcap 100 +1.56%). IT was the main drag — Infosys -1.1%, Tech Mahindra -2.3%. Breadth was a firm 1,809 advances vs 809 declines and India VIX cooled ~8% to 13.6 ahead of the RBI decision." },
    { date: "2026-10-07", label: "Wed 7 Oct", niftyClose: 22603.05, niftyChangePct: -0.76, sensexChangePct: -0.59, note: "RBI shock: the MPC's unanimous 25-bps repo-rate hike to 5.50% — the first since February 2023 — and its shift to 'calibrated tightening' ended a two-day rebound. The Nifty fell 173 points to 22,603 and the Sensex 429 points to 72,639, both closing near the day's low; metal (-2.33%), realty (-1.77%), auto (-1.58%) and IT (-1.34%) led the slide, while PSU banks (+1.00%) and media (+0.69%) rose. Titan (-3.80%) and Adani Enterprises (-3.75%) were the top Nifty losers and Kotak Mahindra Bank (+1.88%) the top gainer. Breadth was negative (2,018 advances vs 2,353 declines), BSE market cap fell about Rs 2.6 lakh crore, the rupee slipped to 96.77 and India VIX rose 2.25% to 13.92." },
    { date: "2026-10-08", label: "Thu 8 Oct", niftyClose: 22231.80, niftyChangePct: -1.64, sensexChangePct: -1.44, note: "Bloodbath on expiry day: the Sensex crashed 1,045 points to 71,593.24 and the Nifty sank 1.64% to 22,231.80, hitting a fresh 52-week low of 22,179.90 intraday, as Brent jumped over 4% to above $104 a barrel, the RBI's hawkish stance weighed and FIIs sold for a ninth straight session (~Rs 57,000 crore). Every Nifty sector ended red — metal -3.55%, realty -3.16%, media -2.79%, auto -2.49%, pharma -2.32% — with IT the only bright spot: Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) were the sole Nifty 50 gainers, while Adani Enterprises (-5.36%), JSW Steel (-4.46%) and ITC (-4.03%) fell hardest. BSE breadth was 1,018 advances vs 3,412 declines, mid and small caps dropped over 2% each, India VIX spiked 10.37% to 15.33, and about Rs 10 lakh crore of wealth was wiped out. TCS reported Q2 results after the close." },
    { date: "2026-10-09", label: "Fri 9 Oct", niftyClose: 22520.45, niftyChangePct: 1.30, sensexChangePct: 1.23, note: "Relief rally: the Sensex rebounded 879.09 points (+1.23%) to 72,472.33 and the Nifty jumped 288.65 points (+1.30%) to 22,520.45, snapping a two-day slide and regaining nearly 80% of Thursday's fall. IT led after TCS's Q2 beat (net profit +15% YoY to Rs 13,884 crore), the Nifty IT index surging 3.02%, while cooling crude (Brent ~$103), softer bond yields and a firmer rupee helped. Every Nifty sector closed green barring Oil & Gas — FMCG +2.20%, PSU Bank +1.63%, Auto +1.42%, Financials +1.36%. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports led; BSE (-1.43%), Reliance (-0.65%) and JSW Steel (-0.61%) lagged. NSE breadth was 2,524 advances vs 1,864 declines, India VIX fell 6.07% to 14.35, and the rebound ended the Nifty's eight-week losing streak." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 3.02, note: "The day's best sector: IT surged 3.02% after TCS reported a 15% jump in September-quarter net profit to Rs 13,884 crore, lifting TCS (+4.60%), Infosys (+2.82%), HCL Tech (+3.54%), Persistent (+5.52%) and Coforge (+2.95%)" },
    { name: "Nifty FMCG", changePct: 2.20, note: "Consumer staples bounced hard, led by ITC (+4.31%) after GQG exited via block deals, with Colgate-Palmolive (+7.1%) surging on GST inverted-duty-structure relief" },
    { name: "Nifty PSU Bank", changePct: 1.63, note: "State-run lenders rallied, State Bank of India up about 2%, as the broad risk-on mood and higher policy rates kept net interest margin expectations firm" },
    { name: "Nifty Auto", changePct: 1.42, note: "Autos recovered with the market, Eicher Motors (+4.17%) the standout and Tata Motors Passenger Vehicles up about 2.5%" },
    { name: "Nifty Financial Services", changePct: 1.36, note: "Financials strengthened, with HDFC Bank, Kotak Mahindra Bank and Shriram Finance among the gainers as short-covering lifted frontline banking names" },
    { name: "Nifty Bank", changePct: 1.36, note: "Bank Nifty climbed 1.36% to 55,256.65, outpacing the benchmarks, as HDFC Bank, Kotak Mahindra Bank and ICICI Bank advanced" },
    { name: "Nifty Private Bank", changePct: 1.32, note: "Private banks rose with the pack, HDFC Bank and Kotak Mahindra Bank both up over 1%" },
    { name: "Nifty Media", changePct: 1.23, note: "Media gained as risk appetite returned across the broader baskets" },
    { name: "Nifty Metal", changePct: 1.10, note: "Metal recovered about 1.1% from Thursday's rout, though the rebound was uneven — JSW Steel still ended lower" },
    { name: "Nifty Consumer Durables", changePct: 1.00, note: "Durables participated in the broad-based recovery as financing-cost worries eased with bond yields" },
    { name: "Nifty Realty", changePct: 0.92, note: "Real estate clawed back part of Wednesday's sharp fall, though it remains among the worst-hit sectors of the week" },
    { name: "Nifty Pharma", changePct: 0.54, note: "Pharma lagged the rally but stayed positive, with Apollo Hospitals (+4.72%) the top Nifty gainer on news that the government capped trade margins on non-scheduled anti-cancer drugs" },
    { name: "Nifty Oil & Gas", changePct: -0.21, note: "The lone sector in the red, dragged by Reliance Industries (-0.65%) even as crude cooled" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily movers for 9 Oct 2026 (cross-checked with Anand Rathi's NSE/BSE top gainers and losers, ET Money's NSE top losers, Trendlyne's Nifty 500 gainers/losers screeners and Flash Finance's top-500 tape; individual readings vary slightly between these sources)",
    gainers: [
      { name: "Hexaware Technologies", changePct: 8.33, cap: "Midcap", note: "The top Nifty 500 gainer, up about 8%, after the company announced a multi-year partnership with Anthropic, becoming a preferred partner in its Claude Partner Network" },
      { name: "Black Box", changePct: 7.98, cap: "Smallcap", note: "Up about 8% on heavy volume, among the strongest small caps as the broader market rebounded" },
      { name: "Colgate-Palmolive (India)", changePct: 7.12, cap: "Largecap", note: "Up about 7% after an update from the GST Council on the inverted duty structure, with the stock having traded near a 52-week low beforehand" },
      { name: "Cyient", changePct: 7.11, cap: "Midcap", note: "Up about 7%, among the leaders of the IT rally, helped by its new Intelligent Engineering Solutions unit and the CYiNGINE platform" },
      { name: "Thermax", changePct: 6.21, cap: "Midcap", note: "Up about 6%, a strong capital-goods gainer as value buying returned after the recent correction" }
    ],
    losers: [
      { name: "Anand Rathi Wealth", changePct: -4.34, cap: "Smallcap", note: "The worst Nifty 500 loser, down about 4.3%, ahead of its September-quarter results" },
      { name: "Prime Focus", changePct: -4.23, cap: "Smallcap", note: "Down about 4.2%, among the weakest small caps even as the broader market rallied" },
      { name: "HFCL", changePct: -3.62, cap: "Midcap", note: "Down about 3.6%, under pressure on continued stock-specific weakness" },
      { name: "Tata Communications", changePct: -3.14, cap: "Midcap", note: "Down about 3.1%, the weakest telecom name as the sector faced pricing and competitive pressure" },
      { name: "Aegis Vopak Terminals", changePct: -3.10, cap: "Smallcap", note: "Down about 3.1%, among the worst-hit small caps on a day when gains were concentrated in large caps" }
    ],
    sensexWinners: ["ITC", "TCS", "Infosys"],
    sensexLaggards: ["Reliance Industries", "IndusInd Bank", "ICICI Bank"]
  },

  watch: [
    {
      title: "Can the rebound hold above 22,500?",
      detail: "The Nifty closed at 22,520.45, reclaiming the 22,500 mark it lost on Thursday, with 22,500 now the first level to defend. Immediate resistance sits at 22,640-22,660, and a decisive break above 22,660 could open the way to 22,800-22,850; on the downside, a slip below 22,400 would bring the 52-week low of 22,179.90 and then 22,000 back into focus. Options data shows call writing at 22,500 and 22,600 and put open interest at 22,400 and 22,300 — a 'wait-and-watch' setup despite the day's gains."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent cooled about 1.3% to roughly $103 a barrel after US President Donald Trump said there would be no attack on Iran before next month's midterm elections, and the rupee firmed to about 96.65-96.75. Oil is India's biggest import, so a sustained fall would ease inflation and current-account pressure, but crude remains above $100 and the rupee near record lows. Watch whether the crude retreat continues or reverses."
    },
    {
      title: "The Q2 FY27 earnings season and Monday's CPI",
      detail: "TCS opened the results season with a strong print — September-quarter net profit up 15% to Rs 13,884 crore. Infosys reports on 23 October, and the season runs through the coming weeks. On the macro side, investors await India's September CPI inflation data on Monday, 12 October, for cues on the rate trajectory after the RBI's shift to calibrated tightening. Earnings and inflation prints will decide whether this rebound turns durable."
    },
    {
      title: "Foreign outflows keep grinding",
      detail: "FIIs sold a net Rs 12,944 crore on Thursday — their biggest single-day outflow since 29 May — and have offloaded about Rs 36,210 crore so far in October, extending a long selling streak even as domestic institutions buy (DIIs bought Rs 10,703 crore on Thursday). A durable rebound needs foreign selling to slow; a recovery led only by short-covering can fade."
    },
    {
      title: "RBI's 'calibrated tightening' and the next MPC",
      detail: "The MPC's unanimous 25-bps hike to 5.50% and its shift in stance from neutral to calibrated tightening signal the easing cycle is over, with the FY27 CPI forecast raised to 5.2% and a rate cut unlikely near term. The next MPC is due in December; until then every inflation and liquidity print matters for banks, NBFCs, autos and real estate."
    }
  ],

  reads: [
    {
      title: "Market wrap, Oct 9: SENSEX jumps 879 pts, NIFTY50 ends above 22,500 as IT stocks rally; Apollo Hospitals top gainer",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-oct-9-sensex-jumps-879-pts-nifty-50-ends-above-22-500-as-it-stocks-rally-apollo-hospitals-top-gainer/article-201607/"
    },
    {
      title: "Sensex settles 879 pts higher; Nifty ends above 22,500 level",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/quick-session-news/sensex-settles-879-pts-higher;-nifty-ends-above-22-500-level/1735986"
    },
    {
      title: "Friday heavy lifting saves Nifty from record nine weeks of losses. Can bulls take charge now?",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/friday-heavy-lifting-saves-nifty-from-record-nine-weeks-of-losses-can-bulls-take-charge-now/articleshow/134830751.cms"
    },
    {
      title: "Stock Market Today Highlights, October 9: Sensex gains over 879 points, Nifty tops 22,520 as all sectoral indices turn green",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-live-updates-9th-october-2026/article71560336.ece"
    },
    {
      title: "Closing Bell: Bulls Strike Back on D-Street! Sensex jumps 879 points, Nifty ends above 22,500; ITC, TCS lead gains",
      source: "ZEE Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-bulls-strike-back-on-d-street-sensex-jumps-879-points-nifty-ends-above-22500-itc-tcs-lead-gains-403667"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Return on Equity (ROE)",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = Net profit attributable to owners of the Company ÷ Total equity × 100",
    formulaNote: "Return on Equity measures how much profit a company generates for every rupee of shareholders' money. The numerator is the net profit that belongs to the owners of the company (after paying interest, tax and the share due to minority holders of subsidiaries). The denominator is total equity — the shareholders' stake on the balance sheet: share capital plus reserves and retained earnings, plus the small non-controlling interest. A high ROE means the company compounds shareholders' capital efficiently without needing much fresh money; Infosys, which needs almost no plant or inventory and carries no borrowings, turns that into one of the highest ROEs among large Indian companies.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Net profit attributable to owners of the Company (FY26)", value: "Rs 29,440 crore", page: "p. 318" },
      { label: "Total equity as at March 31, 2026", value: "Rs 93,297 crore", page: "p. 317" },
      { label: "Total equity as at March 31, 2025 (for the average-equity cross-check)", value: "Rs 96,203 crore", page: "p. 317" }
    ],
    working: "Step 1 — Net profit attributable to owners of the Company for FY26 = Rs 29,440 crore (Consolidated Statement of Comprehensive Income, p. 318: net profit before non-controlling interests 29,474 less Rs 34 crore attributable to non-controlling interests). Step 2 — Total equity as at March 31, 2026 = Rs 93,297 crore (Consolidated Balance Sheet, p. 317: equity attributable to owners 92,852 + non-controlling interests 445). Step 3 — ROE = 29,440 ÷ 93,297 = 0.3156 = 31.6%. (On the two-year average equity that most data providers use — (93,297 + 96,203) ÷ 2 = 94,750 — the figure is 29,440 ÷ 94,750 = 31.1%.)",
    result: "31.6%",
    meaning: "For every Rs 100 of shareholders' equity, Infosys earned about Rs 31.60 of profit in FY26. That is a very high return, and it reflects the economics of a large IT-services business: Infosys needs little capital to grow — no factories, no inventory — so most of its earnings flow straight to shareholders as dividends, buybacks and cash. Equity actually fell during the year (from Rs 96,203 crore to Rs 93,297 crore) because the company returned Rs 18,000 crore through a completed buyback and paid dividends, yet profit rose 10%, so the same, smaller equity base produced a higher return. A rising ROE alongside a shrinking equity base is a classic sign of a cash-generative, capital-light compounder. Watch that the ratio is driven by earnings growth rather than only by buybacks shrinking the denominator.",
    crossCheck: "Infosys' own FY26 highlights (and the Integrated Report's value-creation model) state a Return on equity of 31.6% — an exact match to the figure worked through above, which uses year-end total equity. Screener.in and Trendlyne report about 31% because they use average equity (the FY25 and FY26 equity average), the more common convention outside company reporting. That roughly half-a-percentage-point gap is the only difference, and it comes down to whether the denominator is closing equity or the two-year average. Either way, every version points to the same conclusion: an exceptionally high, capital-light return.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Statement of Comprehensive Income (p. 318) and Consolidated Balance Sheet (p. 317)"
  }
};
