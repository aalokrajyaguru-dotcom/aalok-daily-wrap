const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 10 October 2026, 5:30 PM IST — Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Friday, 9 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22520.45,
      dayChange: 288.65,
      dayChangePct: 1.30,
      weekChangePct: 0.44, // week (Mon 5 Oct to Fri 9 Oct) vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22555.75, 22776.10, 22603.05, 22231.80, 22520.45], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The benchmark snapped an eight-week losing streak — its longest since 2001 — eking out a weekly gain of 98.50 points, or 0.44%, to 22,520.45. Nearly all of it came on Friday, when the index jumped 288.65 points (+1.30%) after IT led a relief rally following TCS's Q2 beat. The path there was volatile: +0.60% Monday, +0.98% Tuesday, then -0.76% Wednesday on the RBI's 25-bps rate hike and -1.64% Thursday to a fresh 2026 low of 22,231.80 before Friday's rebound."
    },
    {
      name: "Nifty Next 50",
      close: 68150.75,
      dayChange: 536.25,
      dayChangePct: 0.79,
      weekChangePct: -1.20, // week (Mon 5 Oct to Fri 9 Oct) vs Thu, 1 Oct close of 68,981.35
      spark: [69213.75, 69973.70, 69404.00, 67614.50, 68150.75], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The 'next rung' of large caps rose about 0.8% on Friday to 68,150.75 but could not recover the week, ending down about 1.2% — weaker than the Nifty as the RBI's hawkish turn and Thursday's risk-off hit the more rate-sensitive mid-large names harder."
    },
    {
      name: "Nifty Midcap 150",
      close: 21529.60,
      dayChange: 218.10,
      dayChangePct: 1.02,
      weekChangePct: -0.53, // week (Mon 5 Oct to Fri 9 Oct) vs Thu, 1 Oct close of 21,643.85
      spark: [21755.30, 21979.45, 21838.00, 21311.50, 21529.60], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "Midcaps kept pace with the benchmarks on Friday (the Nifty Midcap 150 up about 1.0%), but over the week the segment slipped about 0.5% and the Nifty Midcap 100 finished broadly flat — the broader market lagged the headline indices as risk appetite stayed fragile."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17561.05,
      dayChange: 72.75,
      dayChangePct: 0.42,
      weekChangePct: -0.16, // week (Mon 5 Oct to Fri 9 Oct) vs Thu, 1 Oct close of 17,589.05
      spark: [17655.35, 17902.30, 17917.75, 17488.30, 17561.05], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "Small caps lagged the large-cap rebound, the Nifty Smallcap 250 up only about 0.4% on Friday and roughly flat for the week (the Nifty Smallcap 100 up about 0.5% for the week). Thursday's broad sell-off weighed heaviest on the smaller, less liquid names."
    },
    {
      name: "BSE SME Index",
      close: 121343.93,
      dayChange: 267.55,
      dayChangePct: 0.22,
      weekChangePct: 0.81, // week (Mon 5 Oct to Fri 9 Oct) vs Thu, 1 Oct close of 1,20,363.48
      spark: [120356.62, 121277.76, 122910.34, 121076.38, 121343.93], // last 5 closes: 5 Oct, 6 Oct, 7 Oct, 8 Oct, 9 Oct
      note: "The S&P BSE SME IPO index edged up about 0.2% on Friday to 1,21,344 and held a weekly gain of about 0.8%, proving more resilient than the main-board broader market as a steady stream of new SME listings kept the platform active."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: null, // Saturday edition — the week's wrap sits in weeklyWrap below

  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "Nifty snaps its longest losing streak in 25 years: benchmarks eke out a weekly gain as Friday's IT-led rebound outweighs the RBI hike and Thursday's rout",
    summary: "The Nifty 50 ended an eight-week losing run — its longest since 2001 — with a narrow weekly gain of 98.50 points, or 0.44%, to 22,520.45, while the Sensex rose 562.63 points, or 0.78%, to 72,472.33. Almost all of that came on Friday, when the benchmarks jumped 1.30% and 1.23% respectively, led by IT after TCS opened the September-quarter earnings season with a beat. But the week was anything but smooth. The Nifty rose on Monday (+0.60%) and Tuesday (+0.98%) as Brent slipped back below $100, then fell 0.76% on Wednesday after the RBI, in a unanimous vote, raised the repo rate 25 bps to 5.50% — its first hike since February 2023 — and shifted its stance from neutral to 'calibrated tightening', and slumped 1.64% on Thursday to a fresh 2026 low of 22,231.80 as Brent surged above $104 and global risk appetite soured. Friday's relief rally was helped by cooling crude (Brent around $103-104), a firmer rupee and value buying, and the market looked past the US suspension of several IT firms, including TCS and Infosys, from the PERM green-card programme. Sectors were split: Nifty FMCG (+2.5%) and PSU Bank (+2.4%) led, with Private Bank, Financials, Bank and IT all higher, while Realty and Metal were the joint-worst, down about 3.7% each, and Auto lost 2.1%. The Nifty 500 finished broadly flat, with mid and small caps mixed. Foreign investors sold a net Rs 30,294 crore across the five sessions, almost entirely absorbed by domestic institutions' Rs 30,313 crore of buying. India VIX eased about 0.6% over the week.",
    stats: ["Nifty +0.44%", "Sensex +0.78%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." },
    { date: "2026-10-06", label: "Tue 6 Oct", niftyClose: 22776.10, niftyChangePct: 0.98, sensexChangePct: 0.95, note: "A second straight gain, and a broad one: the Nifty closed at its intraday high, up 220 points to 22,776, and the Sensex added 685 points to 73,068 as Brent fell back below $100. Trent surged ~12.6% on a strong Q2 update, Kotak Mahindra Bank rose 3.8% on 24.7% advance growth, and Reliance gained 2.5%; FMCG, pharma, telecom and consumer durables led. Mid and small caps outperformed (Midcap 100 +1.08%, Smallcap 100 +1.56%). IT was the main drag — Infosys -1.1%, Tech Mahindra -2.3%. Breadth was a firm 1,809 advances vs 809 declines and India VIX cooled ~8% to 13.6 ahead of the RBI decision." },
    { date: "2026-10-07", label: "Wed 7 Oct", niftyClose: 22603.05, niftyChangePct: -0.76, sensexChangePct: -0.59, note: "RBI shock: the MPC's unanimous 25-bps repo-rate hike to 5.50% — the first since February 2023 — and its shift to 'calibrated tightening' ended a two-day rebound. The Nifty fell 173 points to 22,603 and the Sensex 429 points to 72,639, both closing near the day's low; metal (-2.33%), realty (-1.77%), auto (-1.58%) and IT (-1.34%) led the slide, while PSU banks (+1.00%) and media (+0.69%) rose. Titan (-3.80%) and Adani Enterprises (-3.75%) were the top Nifty losers and Kotak Mahindra Bank (+1.88%) the top gainer. Breadth was negative (2,018 advances vs 2,353 declines), BSE market cap fell about Rs 2.6 lakh crore, the rupee slipped to 96.77 and India VIX rose 2.25% to 13.92." },
    { date: "2026-10-08", label: "Thu 8 Oct", niftyClose: 22231.80, niftyChangePct: -1.64, sensexChangePct: -1.44, note: "Bloodbath on expiry day: the Sensex crashed 1,045 points to 71,593.24 and the Nifty sank 1.64% to 22,231.80, hitting a fresh 52-week low of 22,179.90 intraday, as Brent jumped over 4% to above $104 a barrel, the RBI's hawkish stance weighed and FIIs sold for a ninth straight session (~Rs 57,000 crore). Every Nifty sector ended red — metal -3.55%, realty -3.16%, media -2.79%, auto -2.49%, pharma -2.32% — with IT the only bright spot: Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) were the sole Nifty 50 gainers, while Adani Enterprises (-5.36%), JSW Steel (-4.46%) and ITC (-4.03%) fell hardest. BSE breadth was 1,018 advances vs 3,412 declines, mid and small caps dropped over 2% each, India VIX spiked 10.37% to 15.33, and about Rs 10 lakh crore of wealth was wiped out. TCS reported Q2 results after the close." },
    { date: "2026-10-09", label: "Fri 9 Oct", niftyClose: 22520.45, niftyChangePct: 1.30, sensexChangePct: 1.23, note: "Relief rally: the Sensex rebounded 879.09 points (+1.23%) to 72,472.33 and the Nifty jumped 288.65 points (+1.30%) to 22,520.45, snapping a two-day slide and regaining nearly 80% of Thursday's fall. IT led after TCS's Q2 beat (net profit +15% YoY to Rs 13,884 crore), the Nifty IT index surging 3.02%, while cooling crude (Brent ~$103), softer bond yields and a firmer rupee helped. Every Nifty sector closed green barring Oil & Gas — FMCG +2.20%, PSU Bank +1.63%, Auto +1.42%, Financials +1.36%. Apollo Hospitals (+4.72%), ITC (+4.31%), Eicher Motors (+4.17%), TCS (+4.60%) and Adani Ports led; BSE (-1.43%), Reliance (-0.65%) and JSW Steel (-0.61%) lagged. NSE breadth was 2,524 advances vs 1,864 declines, India VIX fell 6.07% to 14.35, and the rebound ended the Nifty's eight-week losing streak." }
  ],

  sectors: [
    { name: "Nifty FMCG", changePct: 2.50, note: "Consumer staples were the week's best sector (+2.5%), led by ITC (+3.95% for the week) as investors rotated into defensives and GST-related relief helped names such as Colgate-Palmolive" },
    { name: "Nifty PSU Bank", changePct: 2.40, note: "State-run lenders outperformed (+2.4%) as strong quarterly business updates and the RBI's decision not to tighten liquidity beyond the repo hike supported the sector" },
    { name: "Nifty Private Bank", changePct: 2.00, note: "Private banks gained 2.0% over the week, with HDFC Bank and Kotak Mahindra Bank among the leaders" },
    { name: "Nifty Financial Services", changePct: 1.70, note: "Financials rose 1.7% for the week, helped by upbeat Q2 business updates from lenders and NBFCs and by the absence of extra liquidity withdrawal by the RBI" },
    { name: "Nifty Financial Services Ex-Bank", changePct: 1.50, note: "The non-bank financials gauge added 1.5% over the week" },
    { name: "Nifty Bank", changePct: 1.50, note: "Bank Nifty rose 1.5% for the week to 55,256.65, holding up even after the rate hike as lenders' margin outlook stayed firm" },
    { name: "Nifty IT", changePct: 1.00, note: "IT ended the week up about 1% — a strong Friday (+3.02%) after TCS's Q2 beat more than offset earlier weakness and the US PERM-programme suspension news" },
    { name: "Nifty Smallcap 100", changePct: 0.50, note: "Small caps edged up about 0.5% for the week, lagging the headline indices" },
    { name: "Nifty Media", changePct: 0.50, note: "Media rose about 0.5% over the week, helped by Sun TV Network's rally" },
    { name: "Nifty Consumer Durables", changePct: 0.10, note: "Durables were essentially flat, up about 0.1% for the week" },
    { name: "Nifty Oil & Gas", changePct: -1.20, note: "Oil & gas slipped 1.2% even as crude cooled, with Reliance Industries among the notable laggards" },
    { name: "Nifty Pharma", changePct: -1.30, note: "Pharma fell 1.3% over the week, one of the weaker pockets" },
    { name: "Nifty Healthcare", changePct: -1.50, note: "Healthcare lost about 1.5% for the week" },
    { name: "Nifty Cement", changePct: -1.80, note: "Cement dropped about 1.8% as rate-sensitive construction-linked names came under pressure" },
    { name: "Nifty Auto", changePct: -2.10, note: "Autos were among the worst-hit cyclicals after the rate hike, down 2.1% for the week" },
    { name: "Nifty Metal", changePct: -3.70, note: "Metal slumped 3.7%, the week's joint-worst sector, on the global risk-off and cost worries as crude spiked" },
    { name: "Nifty Realty", changePct: -3.70, note: "Realty fell 3.7%, the most rate-sensitive sector hit hardest by the RBI's calibrated-tightening shift" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 weekly gainers and losers for the week ended 9 Oct 2026 (Trendlyne's Nifty 500 top gainers/losers weekly screeners, cross-checked with Zee Business's Nifty 500 winners-and-laggards list, The Economic Times' 1-week returns and individual NSE/BSE company pages; individual readings vary slightly between these sources)",
    gainers: [
      { name: "Physicswallah", changePct: 19.60, cap: "Midcap", note: "The week's biggest Nifty 500 gainer, up about 19.6%, extending a sharp run on heavy volume even as Kotak Institutional Equities initiated coverage with a 'Reduce' rating" },
      { name: "Cupid", changePct: 17.20, cap: "Smallcap", note: "Up about 17.2% to a fresh all-time high after the company raised its FY27 revenue and profit guidance on strong business momentum in domestic and export markets" },
      { name: "Trent", changePct: 13.10, cap: "Largecap", note: "Up about 13.1% after a strong quarterly business update — its consumer businesses grew 25% year-on-year, led by Westside and Zudio" },
      { name: "Black Box", changePct: 12.10, cap: "Smallcap", note: "Up about 12.1% on heavy volume, among the strongest mid/small names as the IT-services rebound lifted the broader digital-infrastructure basket" },
      { name: "PTC Industries", changePct: 11.40, cap: "Midcap", note: "Up about 11.4% after launching a Rs 1,800-crore QIP to cut debt and fund capacity expansion at its aerospace and defence subsidiary Aerolloy Technologies" }
    ],
    losers: [
      { name: "Prime Focus", changePct: -13.40, cap: "Smallcap", note: "The week's worst Nifty 500 performer, down about 13.4%, on continued stock-specific weakness in the media-services name" },
      { name: "Bandhan Bank", changePct: -10.80, cap: "Midcap", note: "Down about 10.8% for the week, the weakest large lender, as rate-sensitive financials and the broad risk-off tone weighed" },
      { name: "Avenue Supermarts (DMart)", changePct: -7.80, cap: "Largecap", note: "Down about 7.8% over the week, underperforming even as the headline indices rebounded on Friday" },
      { name: "HBL Power Systems", changePct: -7.80, cap: "Smallcap", note: "Down about 7.8%, extending a weak run in the capital-goods/industrial-battery name" },
      { name: "Vedanta Aluminium Metal", changePct: -7.70, cap: "Midcap", note: "Down about 7.7%, one of the weakest metal names in a week when the Nifty Metal index fell 3.7%" }
    ],
    sensexWinners: ["ITC", "TCS", "Infosys"],
    sensexLaggards: ["Reliance Industries", "IndusInd Bank", "ICICI Bank"]
  },

  watch: [
    {
      title: "Q2 FY27 earnings season takes centre stage",
      detail: "TCS opened the September-quarter season with a beat, and Friday's rally was built on it. The focus now shifts to the other large IT names — HCL Technologies reports on 12 October, Wipro and Tech Mahindra on 15 October — followed by HDFC Bank, Nestlé India, Jio Financial Services and Bajaj Housing Finance between 15 and 17 October. Deal wins, growth guidance and spending by overseas banking and retail clients will decide whether the sector's rebound gains traction, and whether earnings can turn the relief rally into a durable uptrend."
    },
    {
      title: "September CPI and WPI inflation",
      detail: "With the RBI now in 'calibrated tightening', every inflation print matters. India's September CPI is due on Monday, 12 October, and WPI on 14 October, offering the first fresh read on price pressures since the 25-bps rate hike. Inflation has been trending above the RBI's 4% tolerance ceiling since June; a softer print would ease rate worries for banks, NBFCs, autos and real estate, while a hotter one would reinforce the hawkish stance."
    },
    {
      title: "Crude oil and the rupee",
      detail: "Brent stayed above $100 on every closing day of the week, seesawing in a $97-106 range before ending around $103-104. Oil is India's biggest import, so a sustained fall would ease inflation and current-account pressure; the rupee's weakness, meanwhile, adds to imported-inflation and foreign-outflow worries. Watch whether crude's retreat after the US-Iran signal holds, and whether the rupee stabilises."
    },
    {
      title: "Foreign outflows versus the domestic cushion",
      detail: "FIIs were net sellers on all five sessions, offloading a provisional Rs 30,294 crore for the week, while DIIs bought roughly Rs 30,313 crore — almost fully offsetting the foreign selling. That divergence is the market's key support. A durable rebound needs foreign selling to slow; a recovery carried only by domestic buying and short-covering can fade."
    },
    {
      title: "Can the rebound hold above 22,500?",
      detail: "The Nifty closed at 22,520.45, reclaiming 22,500, with that level now the first one to defend. Immediate resistance sits around 22,600-22,800, and a sustained move above 22,800 could open the way to 23,000; on the downside, 22,400 is the first support, then 22,200 and the psychological 22,000. The index still trades below key moving averages, so the rally needs confirmation before it can be read as a trend reversal."
    }
  ],

  reads: [
    {
      title: "Market weekly wrap: SENSEX, NIFTY50 break 8 weeks of losing streak; oil prices, RBI rate hike, among key triggers",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-weekly-wrap-sensex-nifty-50-break-8-weeks-of-losing-streak-oil-prices-rbi-rate-hike-among-key-triggers/article-201624/"
    },
    {
      title: "Barometers snap eight-week slide; investors turn focus to Q2 earnings",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/the-week-that-was-news/barometers-snap-eight-week-slide;-investors-turn-focus-to-q2-earnings/1736001"
    },
    {
      title: "Friday heavy lifting saves Nifty from record nine weeks of losses. Can bulls take charge now?",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/friday-heavy-lifting-saves-nifty-from-record-nine-weeks-of-losses-can-bulls-take-charge-now/articleshow/134830751.cms"
    },
    {
      title: "Nifty ends longest weekly losing streak in 25 years: What should one expect next week? Check key trading levels",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/nifty-ends-longest-weekly-losing-streak-in-25-years-what-should-one-expect-next-week-check-key-trading-levels-14048655.html"
    },
    {
      title: "Indian Market Weekly Wrap: Nifty Ends Eight-Week Losing Streak As TCS, RBI And Oil Drive Volatility",
      source: "Dalal Street Investment Journal",
      url: "https://insights.dsij.in/dsijarticledetail/indian-market-weekly-wrap-nifty-ends-eight-week-losing-streak-as-tcs-rbi-and-oil-drive-volatility-id022-59938"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Days Sales Outstanding (DSO)",
    category: "Working capital / Efficiency",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page number (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Days Sales Outstanding = Trade receivables ÷ Revenue from operations × 365",
    formulaNote: "Days Sales Outstanding — also called debtor days — measures how long, on average, a company waits to be paid after it bills a customer. The numerator is trade receivables, the money clients owe for work already invoiced; the denominator is revenue for the year; multiplying by 365 turns the ratio into a number of days. A lower figure is better, because cash comes in faster and less of the company's money sits tied up in unpaid bills. Infosys' DSO is high in absolute terms — it bills large overseas clients on long payment cycles — but the number is stable and well understood, which is why it is a key working-capital gauge for the IT-services sector.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Trade receivables as at March 31, 2026", value: "Rs 35,234 crore", page: "p. 317" },
      { label: "Revenue from operations (FY26)", value: "Rs 1,78,650 crore", page: "p. 318" },
      { label: "Unbilled revenue as at March 31, 2026 (for the cross-check)", value: "Rs 15,483 crore", page: "p. 317" }
    ],
    working: "Step 1 — Trade receivables as at March 31, 2026 = Rs 35,234 crore (Consolidated Balance Sheet, p. 317). Step 2 — Revenue from operations for FY26 = Rs 1,78,650 crore (Consolidated Statement of Comprehensive Income, p. 318). Step 3 — Receivables-to-revenue = 35,234 ÷ 1,78,650 = 0.19723. Step 4 — × 365 = 71.99, i.e. about 72 days.",
    result: "72 days",
    meaning: "On average, Infosys collected cash from its clients about 72 days after raising an invoice in FY26 — roughly two-and-a-half months of revenue sitting in unpaid bills. That is normal for a large IT-services company, which bills overseas clients on long cycles and carries 'unbilled revenue' on top of trade receivables for work done but not yet invoiced. A stable, slightly rising DSO (72 days in FY26 versus 70 in FY25) is worth watching: if it stretches much further it would signal slower collections or tougher client terms, tying up cash even as the company reports profits. Because Infosys carries no borrowings, the cost of that working capital is opportunity cost rather than interest — but it still matters for how much cash the business throws off.",
    crossCheck: "Screener.in reports Debtor Days of 72 for Infosys' FY26 (consolidated), and mirrors that carry the same Screener.in data (Flash Finance, MarketNetra) also show 72 days — an exact match to the figure worked through above. Some data providers show a much higher number (around 104 days) because they add 'unbilled revenue' (Rs 15,483 crore at March 31, 2026) to trade receivables: (35,234 + 15,483) ÷ 1,78,650 × 365 = 103.6 days. That gap is a definition, not a disagreement — Infosys keeps billed and unbilled amounts on separate lines, and DSO on trade receivables alone is the standard like-for-like measure.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317) and Consolidated Statement of Comprehensive Income (p. 318)"
  }
};
