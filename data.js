const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 8 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 8 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22231.80,
      dayChange: -371.25,
      dayChangePct: -1.64,
      weekChangePct: -0.85, // week-to-date vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22421.95, 22555.75, 22776.10, 22603.05, 22231.80], // last 5 closes: 1 Oct, 5 Oct, 6 Oct, 7 Oct, 8 Oct
      note: "The benchmark crashed 371.25 points (-1.64%) to 22,231.80, its lowest close in nearly 18 months, after hitting a fresh 52-week low of 22,179.90 intraday. It opened at 22,599.05 and stayed under pressure all day, closing near the session low. Only 3 of the 50 Nifty stocks ended higher."
    },
    {
      name: "Nifty Next 50",
      close: 68704.10,
      dayChange: -699.90,
      dayChangePct: -1.01,
      weekChangePct: -0.40, // week-to-date vs Thu, 1 Oct close of 68,981.35
      spark: [68981.35, 69213.75, 69973.70, 69404.00, 68704.10], // last 5 closes: 1 Oct, 5 Oct, 6 Oct, 7 Oct, 8 Oct
      note: "The 'next rung' of large caps fell 1.01% to 68,704.10, cushioned by PSU banks and financials — PNB (+2.39%), Union Bank (+2.80%), Canara Bank (+1.13%) and Bank of Baroda (+0.78%) all rose — even as Adani Green (-7.5%), Adani Energy (-5.0%) and Jindal Steel (-4.5%) were hammered. Note: intraday readings for this index diverged widely between sources; the closing level is cross-checked against two data providers."
    },
    {
      name: "Nifty Midcap 150",
      close: 21296.42,
      dayChange: -541.58,
      dayChangePct: -2.48,
      weekChangePct: -1.61, // week-to-date vs Thu, 1 Oct close of 21,643.85
      spark: [21643.85, 21755.30, 21979.45, 21838.00, 21296.42], // last 5 closes: 1 Oct, 5 Oct, 6 Oct, 7 Oct, 8 Oct
      note: "Midcaps underperformed the benchmark, with the Nifty Midcap 150 down 2.48% (the Nifty Midcap 100 fell 2.53% to 57,882.50). Jubilant FoodWorks, Tube Investments and Paytm led the fall. The 150 level is the prior NSE close carried in the series with the segment's reported close move applied, as a confirmed 8 October close file was not yet published."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17471.60,
      dayChange: -446.15,
      dayChangePct: -2.49,
      weekChangePct: -0.67, // week-to-date vs Thu, 1 Oct close of 17,589.05
      spark: [17589.05, 17655.35, 17902.30, 17917.75, 17471.60], // last 5 closes: 1 Oct, 5 Oct, 6 Oct, 7 Oct, 8 Oct
      note: "Small caps were hit hard too — the Nifty Smallcap 250 fell 2.49% and the Nifty Smallcap 100 2.34% to 19,050.10 — as risk appetite collapsed, with Inox Wind, Amber Enterprises and Aegis Logistics among the worst. The 250 level is the prior NSE close carried in the series with the segment's reported close move applied, as a confirmed 8 October close file was not yet published."
    },
    {
      name: "BSE SME Index",
      close: 120764.42,
      dayChange: -2145.92,
      dayChangePct: -1.75,
      weekChangePct: 0.33, // week-to-date vs Thu, 1 Oct close of 1,20,363.48
      spark: [120363.48, 120356.62, 121277.76, 122910.34, 120764.42], // last 5 closes: 1 Oct, 5 Oct, 6 Oct, 7 Oct, 8 Oct
      note: "The S&P BSE SME IPO index gave back part of its recent run, falling about 1.75% to 1,20,764 after touching a 52-week high of 1,23,353.65, even as six new SME IPOs (led by EverestIMS Technologies) listed on the platform during the day."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Bloodbath on Dalal Street: Sensex crashes 1,045 points and Nifty sinks 1.64% to a fresh 52-week low as crude tops $104 and foreign selling grinds on",
    summary: "The sell-off deepened on Thursday as the Reserve Bank's hawkish turn, a spike in crude oil and relentless foreign outflows combined. The Nifty 50 crashed 371.25 points (-1.64%) to 22,231.80 — its lowest close in nearly 18 months — after touching a fresh 52-week low of 22,179.90 intraday, while the Sensex plunged 1,045.46 points (-1.44%) to 71,593.24, its weakest close since February 2024. Roughly Rs 10 lakh crore of investor wealth was wiped out. The immediate trigger was a jump in Brent crude of over 4% to above $104 a barrel on fresh Middle East supply concerns; on top of that, the RBI's surprise 25-bps repo-rate hike to 5.50% and its shift to 'calibrated tightening' kept borrowing-cost worries alive, FIIs extended their selling to about Rs 57,000 crore over nine straight sessions, and the US Fed's minutes pointed to another hike. Breadth was brutal — on the BSE 1,018 shares advanced against 3,412 declines, and on the NSE 2,645 stocks fell against 693 that rose. Every Nifty sector closed in the red, with Nifty Metal (-3.55%) the worst, followed by Realty (-3.16%), Media (-2.79%), Auto (-2.49%) and Pharma (-2.32%); IT was the lone pocket of strength ahead of TCS's Q2 results, with Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) the only three Nifty 50 gainers. In the Nifty 50, Adani Enterprises (-5.36%), JSW Steel (-4.46%), ITC (-4.03%), Max Healthcare (-3.81%) and InterGlobe Aviation (-3.55%) fell the most. Mid and small caps underperformed the benchmarks, and the India VIX spiked 10.37% to 15.33. TCS reported its September-quarter results after the close; the near-term question is whether the Nifty can defend the 22,180-22,000 support zone.",
    stats: ["Nifty -1.64%", "Sensex -1.44%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Thursday edition — the day's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Worst week in 25 years and an eighth straight weekly fall: the Nifty briefly breached 22,300 (intraday low 22,217) and the Sensex touched 71,292 before both clawed back, still leaving the Nifty just 1.07% above its 52-week low. Autos led the carnage — Bajaj Auto -7.6% on weak September sales, Maruti -4.9%, M&M, Eicher and Shriram Finance — as FIIs sold another Rs 20,128 crore over two sessions and the 10-year US yield hit 5.31%. IT was the only green sector (Nifty IT +2.17%) with Infosys (+4.1%) the top gainer; India VIX jumped 7% to 14.44 and the rupee slid 0.5% to a two-month low of 96.3150." },
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." },
    { date: "2026-10-06", label: "Tue 6 Oct", niftyClose: 22776.10, niftyChangePct: 0.98, sensexChangePct: 0.95, note: "A second straight gain, and a broad one: the Nifty closed at its intraday high, up 220 points to 22,776, and the Sensex added 685 points to 73,068 as Brent fell back below $100. Trent surged ~12.6% on a strong Q2 update, Kotak Mahindra Bank rose 3.8% on 24.7% advance growth, and Reliance gained 2.5%; FMCG, pharma, telecom and consumer durables led. Mid and small caps outperformed (Midcap 100 +1.08%, Smallcap 100 +1.56%). IT was the main drag — Infosys -1.1%, Tech Mahindra -2.3%. Breadth was a firm 1,809 advances vs 809 declines and India VIX cooled ~8% to 13.6 ahead of the RBI decision." },
    { date: "2026-10-07", label: "Wed 7 Oct", niftyClose: 22603.05, niftyChangePct: -0.76, sensexChangePct: -0.59, note: "RBI shock: the MPC's unanimous 25-bps repo-rate hike to 5.50% — the first since February 2023 — and its shift to 'calibrated tightening' ended a two-day rebound. The Nifty fell 173 points to 22,603 and the Sensex 429 points to 72,639, both closing near the day's low; metal (-2.33%), realty (-1.77%), auto (-1.58%) and IT (-1.34%) led the slide, while PSU banks (+1.00%) and media (+0.69%) rose. Titan (-3.80%) and Adani Enterprises (-3.75%) were the top Nifty losers and Kotak Mahindra Bank (+1.88%) the top gainer. Breadth was negative (2,018 advances vs 2,353 declines), BSE market cap fell about Rs 2.6 lakh crore, the rupee slipped to 96.77 and India VIX rose 2.25% to 13.92." },
    { date: "2026-10-08", label: "Thu 8 Oct", niftyClose: 22231.80, niftyChangePct: -1.64, sensexChangePct: -1.44, note: "Bloodbath on expiry day: the Sensex crashed 1,045 points to 71,593.24 and the Nifty sank 1.64% to 22,231.80, hitting a fresh 52-week low of 22,179.90 intraday, as Brent jumped over 4% to above $104 a barrel, the RBI's hawkish stance weighed and FIIs sold for a ninth straight session (~Rs 57,000 crore). Every Nifty sector ended red — metal -3.55%, realty -3.16%, media -2.79%, auto -2.49%, pharma -2.32% — with IT the only bright spot: Infosys (+0.50%), Tech Mahindra (+0.34%) and Axis Bank (+0.20%) were the sole Nifty 50 gainers, while Adani Enterprises (-5.36%), JSW Steel (-4.46%) and ITC (-4.03%) fell hardest. BSE breadth was 1,018 advances vs 3,412 declines, mid and small caps dropped over 2% each, India VIX spiked 10.37% to 15.33, and about Rs 10 lakh crore of wealth was wiped out. TCS reported Q2 results after the close." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 1.33, note: "The lone green sector: IT held up ahead of TCS's September-quarter results, with Infosys (+0.50%), Tech Mahindra (+0.34%) and TCS (+1.66%) all firm as investors sought defensive, dollar-earning names" },
    { name: "Nifty PSU Bank", changePct: 0.30, note: "State-run lenders stayed resilient after the RBI hike — PNB (+2.39%), Union Bank (+2.80%), Canara Bank (+1.13%) and Bank of Baroda (+0.78%) all rose as higher policy rates support net interest margins" },
    { name: "Nifty Private Bank", changePct: 0.08, note: "Private banks were roughly flat but far better than the market; Axis Bank (+0.20%) closed higher even as most heavyweights fell" },
    { name: "Nifty Bank", changePct: -0.27, note: "Bank Nifty slipped only marginally, outperforming the benchmarks, as the rate hike was read as net-positive for lenders' margins" },
    { name: "Nifty FMCG", changePct: -0.86, note: "FMCG was relatively defensive but still fell as ITC (-4.03%) dragged the basket lower" },
    { name: "Nifty Consumer Durables", changePct: -1.14, note: "Durables declined with the rate-sensitives as financing costs for big-ticket purchases were seen rising" },
    { name: "Nifty Pharma", changePct: -2.32, note: "Pharma and healthcare fell sharply, with Max Healthcare (-3.81%) among the biggest Nifty 50 losers" },
    { name: "Nifty Auto", changePct: -2.49, note: "Autos slid as higher borrowing costs clouded vehicle-financing demand and crude spiked" },
    { name: "Nifty Media", changePct: -2.79, note: "Media was among the worst-hit sectors as risk-off selling spread across the mid-cap baskets" },
    { name: "Nifty Realty", changePct: -3.16, note: "Real estate was hammered as higher home-loan rates threatened housing demand, with DLF, Lodha and Godrej Properties falling" },
    { name: "Nifty Metal", changePct: -3.55, note: "The day's worst sector: all 15 metal constituents fell, with Adani Enterprises (-5.36%), Jindal Steel (-4.52%) and JSW Steel (-4.46%) leading the slide on weak global commodity prices and demand worries" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily movers for 8 Oct 2026 (cross-checked with Trendlyne's Nifty 500 top gainers/losers, TBTflow's NSE F&O tape, HDFC Securities' closing gainers, and Upstox's Nifty 50 closing list)",
    gainers: [
      { name: "IFCI", changePct: 7.60, cap: "Smallcap", note: "The top Nifty 500 gainer, up 7.60%, as state-run financials rallied on the RBI's rate hike and improved margin expectations" },
      { name: "LIC Housing Finance", changePct: 4.50, cap: "Midcap", note: "Up about 4.5% after a falling-wedge breakout on the daily chart, with the 20- and 50-day EMAs in a bullish crossover" },
      { name: "Mphasis", changePct: 3.31, cap: "Midcap", note: "Up 3.31%, among the strongest IT names, as investors turned to defensive tech ahead of the Q2 earnings run" },
      { name: "PNB Housing Finance", changePct: 2.53, cap: "Smallcap", note: "Up about 2.5% as housing-finance stocks gained on the falling-wedge breakout theme" },
      { name: "SRF", changePct: 2.43, cap: "Midcap", note: "Up 2.43%, a rare gainer in a deeply negative market, helped by firm specialty-chemicals sentiment" }
    ],
    losers: [
      { name: "Adani Green Energy", changePct: -7.52, cap: "Largecap", note: "The worst Nifty 500 loser, down 7.52%, as the high-beta Adani complex was hit by the crude spike and broad risk-off selling" },
      { name: "Jubilant FoodWorks", changePct: -6.91, cap: "Midcap", note: "Down 6.91% after its Q2 business update showed only 4.1% same-store sales growth at Domino's India, missing expectations" },
      { name: "Inox Wind", changePct: -6.56, cap: "Smallcap", note: "Down 6.56%, among the weakest small caps, as the broader mid- and small-cap baskets plunged over 2%" },
      { name: "Tube Investments of India", changePct: -5.78, cap: "Midcap", note: "Down 5.78% with the auto-ancillary pack as the Nifty Auto index fell 2.49%" },
      { name: "Adani Enterprises", changePct: -5.58, cap: "Largecap", note: "Down 5.58%, the biggest Nifty 50 loser, as Adani group stocks bore the brunt of the sell-off" }
    ],
    sensexWinners: ["Infosys", "Tech Mahindra", "Axis Bank"],
    sensexLaggards: ["JSW Steel", "ITC", "InterGlobe Aviation", "Adani Ports", "Power Grid"]
  },

  watch: [
    {
      title: "Can the Nifty hold its 52-week low?",
      detail: "The Nifty closed at 22,231.80, just 0.6% above its intraday 52-week low of 22,179.90 (and the April 2026 low of 22,182.55), and is trading below both its 50-day and 200-day moving averages. Analysts see 22,200-22,180 as the support to defend; a decisive break could open the door to 21,700-22,000, while 22,400-22,600 is the first resistance band. The next few sessions decide whether this becomes a deeper break."
    },
    {
      title: "Crude above $104 and the rupee",
      detail: "Brent jumped over 4% to above $104 a barrel on fresh Middle East supply worries, with the rupee near Rs 97 and the 10-year US yield above 5.3%. Oil is India's biggest import, so a sustained rally would stoke inflation, pressure the current account and hurt oil-marketing, paint and aviation stocks. Watch whether crude cools or extends its run."
    },
    {
      title: "The Q2 FY27 earnings season",
      detail: "TCS reported its September-quarter results after the close on 8 October, opening the IT results run, with Poonawalla Finance on 9 October and Avenue Supermarts on 10 October. Infosys reports on 23 October. September-quarter business updates from banks and retailers were mostly strong; the actual prints will show whether earnings can offset the RBI's hawkish turn."
    },
    {
      title: "Foreign outflows keep grinding",
      detail: "FIIs have now sold about Rs 57,000 crore over nine straight sessions, while domestic institutions have been buyers. A durable rebound would need oil to cool and foreign selling to slow; the RBI's stance, the start of Q2 results and the October F&O series are the near-term triggers."
    },
    {
      title: "RBI's 'calibrated tightening' and the next MPC",
      detail: "The MPC's unanimous 25-bps hike to 5.50% and its shift in stance from neutral to calibrated tightening signal the easing cycle is over, with the FY27 CPI forecast raised to 5.2% and a rate cut unlikely near term. The next MPC is due in December; until then every inflation and liquidity print matters for banks, NBFCs, autos and real estate."
    }
  ],

  reads: [
    {
      title: "Market Wrap, Oct 8: Sensex plunges 1,045 pts, Nifty sinks 1.6% as oil tops $104; over Rs 10 lakh crore wiped out",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-oct-8-sensex-crashes-1-045-pts-nifty-50-dip-1-6-as-crude-oil-prices-hit-over-104-bbl-adani-enterprises-top-loser/article-201532/"
    },
    {
      title: "Sensex nosedives 1,045 pts; Nifty ends below 22,250",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/quick-session-news/sensex-nosedives-1-045-pts;-nifty-ends-below-22-250/1735785"
    },
    {
      title: "Investors lose Rs 11.37 lakh crore as Sensex, Nifty fall 1.5%",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/market-crash-sensex-ends-1045-points-lower-nifty-below-22300-ril-down-2-3012407-2026-10-08"
    },
    {
      title: "Metal stocks crash: Rs 76,000 crore mcap wiped out! Why Vedanta, JSW Steel, Tata Steel and others are falling",
      source: "ZEE Business",
      url: "https://www.zeebiz.com/market-news/news-metal-stocks-crash-rs-76000-crore-mcap-wiped-out-why-are-vedanta-jsw-steel-tata-steel-others-falling-403589"
    },
    {
      title: "Top Gainers & Losers, October 8, 2026 at 3:30 PM IST: Infosys leads gainers",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/top-gainers-losers-october-8-2026-at-3-30-pm"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Current Ratio",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements (IFRS, in rupees). The report's printed page numbers run 30 ahead of the PDF page (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = Total current assets ÷ Total current liabilities",
    formulaNote: "The Current Ratio measures whether a company can pay the bills that fall due within a year. 'Current assets' are everything expected to turn into cash within twelve months — cash, short-term investments, receivables and unbilled revenue. 'Current liabilities' are what must be paid within twelve months — trade payables, unearned revenue, tax and employee dues and other current obligations. A ratio above 1 means current assets cover current liabilities; comfortably above 1 signals a strong liquidity cushion. For a services company like Infosys, which carries no inventory, this ratio is the clearest single test of short-term financial strength.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities", value: "Rs 52,322 crore", page: "p. 317" },
      { label: "Inventories", value: "Rs 0 crore (Infosys is a services business and carries no inventory on the balance sheet)", page: "p. 317" }
    ],
    working: "Step 1 — total current assets = Rs 1,03,489 crore (p. 317; cash and cash equivalents 22,201 + current investments 12,950 + trade receivables 35,234 + unbilled revenue 15,483 + prepayments and other current assets 15,703 + income tax assets 1,835 + derivative financial instruments 83). Step 2 — total current liabilities = Rs 52,322 crore (p. 317; trade payables 4,744 + current lease liabilities 3,160 + derivative financial instruments 593 + current income tax liabilities 5,644 + unearned revenue 11,838 + employee benefit obligations 3,524 + provisions 1,512 + other current liabilities 21,307). Step 3 — Current Ratio = 1,03,489 ÷ 52,322 = 1.978 ≈ 1.98x.",
    result: "1.98x",
    meaning: "For every Rs 1 of liabilities due within a year, Infosys holds about Rs 1.98 of current assets — a comfortable liquidity cushion of nearly two times. In plain terms, the company could pay off all its near-term obligations and still have roughly half of its current assets left. That cushion is built on quality assets: about Rs 35,000 crore of cash and short-term investments, and a large book of trade receivables and unbilled revenue from blue-chip clients, rather than slow-moving stock. Because Infosys carries no inventory, there is no risk of unsold goods clogging the balance sheet. A current ratio near 2 is typical of a large, well-run IT-services firm and tells a shareholder that the dividend, buyback and day-to-day operations are comfortably funded from the company's own resources. Watch for the ratio drifting toward 1 (a liquidity squeeze) or above 3 (idle cash that could be put to better use).",
    crossCheck: "Screener.in, StockAnalysis.com, TipRanks and TheScreener all put Infosys' FY26 (March 2026) consolidated current ratio at about 1.98 — an exact match to the figure worked through above from the annual report. One aggregator (IFIN) shows 1.86 because it uses a narrower definition of current assets. That is the only convention gap: how much of 'prepayments and other current assets' and of the current lease liability each data source folds in. Every version points to the same conclusion — a strong, near-2x liquidity position.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
