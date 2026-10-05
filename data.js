const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 5 October 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Monday, 5 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22555.75,
      dayChange: 133.80,
      dayChangePct: 0.60,
      weekChangePct: 0.60, // week-to-date vs Thu, 1 Oct close of 22,421.95 (Fri, 2 Oct was a Gandhi Jayanti holiday)
      spark: [22780.25, 22716.20, 22620.45, 22421.95, 22555.75], // last 5 closes: 28, 29, 30 Sep, 1 Oct, 5 Oct
      note: "The benchmark reclaimed the 22,500 mark, up 0.60% to 22,555.75 — its first gain in five sessions — as Brent eased to ~$102 and Fed-hike fears faded; ICICI Bank, ITC and Reliance led the recovery."
    },
    {
      name: "Nifty Next 50",
      close: 69205.75,
      dayChange: 224.40,
      dayChangePct: 0.33,
      weekChangePct: 0.33, // week-to-date vs Thu, 1 Oct close of 68,981.35
      spark: [70309.50, 69460.20, 69746.95, 68981.35, 69205.75], // last 5 closes: 28, 29, 30 Sep, 1 Oct, 5 Oct
      note: "The 'next rung' of large caps rose 0.33% to 69,205.75, lagging the Nifty 50 and still about 6% below its 52-week high after the eight-week slide."
    },
    {
      name: "Nifty Midcap 150",
      close: 21725.55,
      dayChange: 81.70,
      dayChangePct: 0.38,
      weekChangePct: 0.38, // week-to-date vs Thu, 1 Oct close of 21,643.85
      spark: [22071.30, 21853.30, 21867.50, 21643.85, 21725.55], // last 5 closes: 28, 29, 30 Sep, 1 Oct, 5 Oct
      note: "Midcaps rose 0.38% to 21,725.55 (88 of the 150 advanced) but stayed about 8% below their 52-week high of 23,647.50."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17593.40,
      dayChange: 4.35,
      dayChangePct: 0.02,
      weekChangePct: 0.02, // week-to-date vs Thu, 1 Oct close of 17,589.05
      spark: [17863.20, 17747.25, 17798.80, 17589.05, 17593.40], // last 5 closes: 28, 29, 30 Sep, 1 Oct, 5 Oct
      note: "The small-cap gauge barely moved, up 0.02% to 17,593.40, even as the rebound lifted most size buckets — a sign the recovery was led by large caps."
    },
    {
      name: "BSE SME Index",
      close: 120356.62,
      dayChange: -6.86,
      dayChangePct: -0.01,
      weekChangePct: -0.01, // week-to-date vs Thu, 1 Oct close of 1,20,363.48
      spark: [120839.23, 121271.07, 121985.29, 120363.48, 120356.62], // last 5 closes: 28, 29, 30 Sep, 1 Oct, 5 Oct
      note: "The S&P BSE SME IPO index, which tracks newly listed small and medium enterprises, ended flat at 1,20,356.62 — still within about 2% of its 52-week high after a strong September run."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Snap-back: Nifty reclaims 22,500 and the Sensex jumps 473 points as crude cools and Fed-hike fears fade — ITC, BSE and Bajaj Finance lead the four-day losing streak's end",
    summary: "Dalal Street finally caught a bid. The Nifty 50 rose 133.80 points (+0.60%) to 22,555.75 and the Sensex 472.77 points (+0.66%) to 72,382.47 on Monday, snapping a four-session losing streak and lifting the benchmark off the 52-week low it flirted with last week. The trigger was a double relief: Brent crude slipped to about $101.90 a barrel, easing the import-bill and inflation scare, and softer-than-expected US jobs data cut the odds of a Federal Reserve rate hike this month to below 25%, steadying global risk appetite. FMCG led the advance — ITC jumped about 5.1% after Citi upgraded the stock and said its earnings downgrade cycle was largely over — with PSU banks and financials close behind on a run of strong September-quarter business updates (PNB +2.5%, Bank of Baroda, Bajaj Finance +2.3%). Consumer durables, media, energy, realty, metal and auto all closed green. The two soft spots were the ones that had carried the market last week: IT finished flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains despite Accenture's upbeat outlook, and pharma (-0.74%) was the day's only big loser. The rebound was broad but shallow on the ground: only 1,745 of 3,706 NSE stocks advanced against 1,846 declines, and the Nifty Smallcap 250 barely moved (+0.02%). India VIX firmed about 2% to ~14.8 as traders hedged into the RBI's policy decision on 7 October.",
    stats: ["Nifty +0.60%", "Sensex +0.66%"],
    statsLabel: "Day"
  },

  weeklyWrap: null, // Monday edition — the week's wrap sits in dailyWrap above

  dayByDay: [
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 — touching its 200-week moving average for the first time since the Covid crash — before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." },
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Worst week in 25 years and an eighth straight weekly fall: the Nifty briefly breached 22,300 (intraday low 22,217) and the Sensex touched 71,292 before both clawed back, still leaving the Nifty just 1.07% above its 52-week low. Autos led the carnage — Bajaj Auto -7.6% on weak September sales, Maruti -4.9%, M&M, Eicher and Shriram Finance — as FIIs sold another Rs 20,128 crore over two sessions and the 10-year US yield hit 5.31%. IT was the only green sector (Nifty IT +2.17%) with Infosys (+4.1%) the top gainer; India VIX jumped 7% to 14.44 and the rupee slid 0.5% to a two-month low of 96.3150." },
    { date: "2026-10-05", label: "Mon 5 Oct", niftyClose: 22555.75, niftyChangePct: 0.60, sensexChangePct: 0.66, note: "Snap-back after four down days: the Nifty reclaimed 22,500 and the Sensex rose 473 points as Brent eased to ~$101.90 and weaker US jobs data cut Fed-hike odds below 25%. FMCG led (ITC +5.1% on a Citi upgrade), PSU banks and financials rallied on strong Q2 business updates, and 9 of 11 key sectoral indices closed green; pharma (-0.74%) was the only big loser and IT ended flat as Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains. Breadth stayed weak — 1,745 advances vs 1,846 declines — and India VIX firmed ~2% to ~14.8 ahead of the RBI's 7 October decision." }
  ],

  sectors: [
    { name: "Nifty FMCG", changePct: 1.80, note: "The day's best sector, closing at 44,579.65: ITC (+5.1%) jumped after Citi upgraded the stock and said its earnings downgrade cycle was largely over, snapping a four-day slide for the pack" },
    { name: "Nifty Consumer Durables", changePct: 1.53, note: "Buying across consumer counters — Titan, Crompton Greaves Consumer (+4.6%) and the durables pack — lifted the index" },
    { name: "Nifty Infrastructure", changePct: 1.02, note: "Infrastructure and capex names firmed as crude eased; L&T was among the Sensex gainers" },
    { name: "Nifty PSU Bank", changePct: 0.97, note: "PSU banks led the financials rebound after strong Q2 business updates: PNB (+2.5%) on 14.8% advance growth, Bank of Baroda (+0.9%) on 18% advances and Bank of India on a 21% jump in global business" },
    { name: "Nifty Media", changePct: 0.92, note: "Media advanced on ad-spend and content-monetisation optimism, holding onto its recent relative strength" },
    { name: "Nifty Energy", changePct: 0.57, note: "Energy rose as Reliance and the oil & gas majors firmed even as Brent cooled to ~$102" },
    { name: "Nifty Realty", changePct: 0.56, note: "Rate-sensitive realty bounced after the recent selloff, though the RBI's 7 October decision looms over the sector" },
    { name: "Nifty Bank", changePct: 0.48, note: "Bank Nifty closed at 54,714.10 (+263 points) as lenders rose on strong Q2 updates; HDFC Bank (-2.3%), though, was among the biggest Nifty drags after naming Anup Bagchi its next CEO" },
    { name: "Nifty Financial Services", changePct: 0.41, note: "Financials followed banks higher; Bajaj Finance (+2.3%) led after its board approved a capital raise of up to Rs 17,500 crore" },
    { name: "Nifty Metal", changePct: 0.30, note: "Select metal counters recovered modestly after the recent crude-led selloff" },
    { name: "Nifty Auto", changePct: 0.15, note: "Autos ended barely higher: Tata Motors PV (+3.3%) surged but Bajaj Auto and M&M fell after reporting a drop in September domestic sales" },
    { name: "Nifty IT", changePct: -0.01, note: "IT ended flat despite Accenture's upbeat outlook and a softer Fed backdrop: TCS (+1.9%) and Wipro rose but Infosys (-1.6%) and HCL Tech (-3.5%) gave back Thursday's gains" },
    { name: "Nifty Pharma", changePct: -0.74, note: "The day's worst sector and the only big loser: Sun Pharma (-1.2%) and Cipla fell even as the broader market rallied" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 daily movers for 5 Oct 2026 (Upstox close lists for Nifty 50 / Nifty Midcap 100 / Nifty Smallcap 100, cross-checked with NSE and Business Uptrend)",
    gainers: [
      { name: "Physicswallah", changePct: 9.01, cap: "Smallcap", note: "Top Nifty 500 gainer on the day, up 9.01% — a Nifty Smallcap 100 name outside the Nifty 50/Next 50/Midcap 100 lists, which is why the full Nifty 500 universe matters" },
      { name: "Nuvama Wealth Management", changePct: 6.38, cap: "Smallcap", note: "Up 6.38% for the day" },
      { name: "Netweb Technologies India", changePct: 5.42, cap: "Smallcap", note: "Up 5.42% for the day" },
      { name: "R R Kabel", changePct: 5.39, cap: "Smallcap", note: "Up 5.39% for the day" },
      { name: "Kalyan Jewellers", changePct: 5.36, cap: "Midcap", note: "Up 5.36% for the day, topping the Nifty Midcap 100 gainers" }
    ],
    losers: [
      { name: "Bandhan Bank", changePct: -4.39, cap: "Smallcap", note: "Worst Nifty 500 loser of the day, down 4.39%, after a Q2 business update showed loan growth staying modest (advances +1.8% QoQ)" },
      { name: "Welspun Corp", changePct: -4.02, cap: "Smallcap", note: "Down 4.02% for the day" },
      { name: "HCL Technologies", changePct: -3.31, cap: "Largecap", note: "Down 3.31%, the biggest Nifty 50 loser, as IT gave back Thursday's gains" },
      { name: "Emmvee Photovoltaic Power", changePct: -3.24, cap: "Smallcap", note: "Down 3.24% for the day" },
      { name: "Max Financial Services", changePct: -3.16, cap: "Midcap", note: "Down 3.16%, the biggest Nifty Midcap 100 loser" }
    ],
    sensexWinners: ["ITC", "Eternal", "Bharti Airtel", "Bajaj Finance", "Adani Ports"],
    sensexLaggards: ["HCL Tech", "HDFC Bank", "Sun Pharma", "Infosys", "Asian Paints"]
  },

  watch: [
    {
      title: "RBI policy on 7 October",
      detail: "The Monetary Policy Committee meets from 5 to 7 October, with the decision due Wednesday. The repo rate stands at 5.25%, and the market is pricing in the possibility of a 25-basis-point hike amid higher inflation and elevated crude prices. Rate-hike expectations could keep banks, NBFCs, autos and real estate volatile."
    },
    {
      title: "Q2 FY27 earnings season kicks off",
      detail: "TCS is set to report later this week, opening the IT earnings run, with Poonawalla Finance on 9 October, ICICI Prudential Life on 13 October and HDFC AMC on 15 October. Early September-quarter business updates from banks and NBFCs were mostly strong; the prints will test whether the four-session rebound has legs."
    },
    {
      title: "Crude and the rupee stay the swing factors",
      detail: "Brent eased to about $101.90 a barrel and WTI to ~$90.50 as Middle East exports rose and G7 nations released stock, offering India some relief. But crude is still up sharply over recent weeks, and the rupee remains near a two-month low (~96.30 to the dollar), keeping the import bill, inflation and FII flows under pressure."
    },
    {
      title: "Can the rebound hold after eight down weeks?",
      detail: "Monday snapped a four-day losing streak, but the Nifty is still down about 8.7% over its eight-week slide — the longest losing run in 25 years. Technically, 22,500-22,600 is now the first resistance zone and 22,750-22,850 the next, with 22,200-22,000 the immediate support. Breadth stayed weak on Monday (1,846 declines vs 1,745 advances), so follow-through matters."
    },
    {
      title: "Foreign flows and the October series",
      detail: "FIIs have sold heavily through the recent slump, taking 2026 outflows to a record. A sustained rebound would need oil to keep easing and foreign selling to slow; the October F&O series, the RBI decision and the start of Q2 results are the near-term triggers to watch."
    }
  ],

  reads: [
    {
      title: "Stock Market Highlights, Oct 5: Sensex rises 472 pts to end at 72,382, Nifty settles at 22,555; ITC, Eternal lead gainers",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-5th-october-2026/article71544056.ece"
    },
    {
      title: "Sensex settles 450 pts higher, Nifty ends above 22,550: Easing crude prices among key reasons behind market gain",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/sensex-rises-450-pts-nifty-reclaims-22-550-easing-crude-prices-among-key-reasons-behind-market-gain-14044481.html"
    },
    {
      title: "Sensex ends 472 points higher, Nifty above 22,500; ITC up 4%",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/market-closing-sensex-ends-472-points-higher-nifty-above-22500-itc-up-4-it-stocks-down-3009872-2026-10-05"
    },
    {
      title: "Market Close Report Today, October 5, 2026: Nifty, Sensex End Losing Streak As Fed Fears Recede",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/market-close-report-today-october-5-2026-nifty-sensex-end-losing-streak-as-fed-fears-recede"
    },
    {
      title: "Nifty Ends Above 22,500 Mark After 8th Straight Weekly Fall in Last 25 Years",
      source: "DSIJ",
      url: "https://insights.dsij.in/dsijarticledetail/nifty-ends-above-22500-mark-after-8th-straight-weekly-fall-in-last-25-years-59845"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. The ratio rotates every day; the company stays Infosys Ltd.
  ratio: {
    name: "Current Ratio",
    category: "Liquidity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements. The report's printed page numbers run 30 ahead of the PDF page (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = Total current assets ÷ Total current liabilities",
    formulaNote: "Current assets are everything the company expects to turn into cash within a year — cash and equivalents, short-term investments, trade receivables, unbilled revenue, prepayments and other current assets. Current liabilities are everything due within a year — trade payables, unearned revenue, employee-benefit obligations, provisions, current tax, lease and other liabilities. The ratio measures how many rupees of near-term assets back every rupee of near-term obligations.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 — total current assets = Rs 1,03,489 crore (p. 317; cash and equivalents 22,201 + current investments 12,950 + trade receivables 35,234 + unbilled revenue 15,483 + other current assets 17,621). Step 2 — total current liabilities = Rs 52,322 crore (p. 317; trade payables 4,744 + unearned revenue 11,838 + employee-benefit obligations 3,524 + other current liabilities and provisions 32,216). Step 3 — Current Ratio = 1,03,489 ÷ 52,322 = 1.98x.",
    result: "≈ 1.98x",
    meaning: "Infosys holds about Rs 1.98 of current assets for every Re 1 of liabilities falling due within a year, so its short-term liquidity is very comfortable. A current ratio above 1 means a company can cover the bills it must pay in the next 12 months; well below 1 is a red flag. For asset-light, cash-rich IT services firms, a ratio near 2 is typical — Infosys carries a large cash-and-investments pile (about Rs 43,075 crore of consolidated cash and investments) and almost no borrowings, which is exactly why it can fund dividends and buybacks without stress. Treat the ratio with care across sectors: a utility or a retailer may run a current ratio below 1 by design (steady cash flows, fast inventory turns) and still be perfectly healthy, while a manufacturing firm with a 2.5x ratio might be sitting on slow-moving inventory. Compare within a sector, and always read it next to the debt and cash-flow picture.",
    crossCheck: "Screener.in and Trendlyne show Infosys' current ratio at about 2x for FY26; the raw ratio from the audited consolidated balance sheet is 1.98x. Small gaps are pure convention — some screeners exclude lease liabilities from current liabilities or treat non-current investments and 'other financial assets' differently — but every measure points to a very strong liquidity position.",
    source: "Infosys Integrated Annual Report 2025-26 — Consolidated Balance Sheet (p. 317)"
  }
};
