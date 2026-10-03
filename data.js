const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 3 October 2026, 5:30 PM IST — Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Thursday, 1 October 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22421.95,
      dayChange: -198.50,
      dayChangePct: -0.88,
      weekChangePct: -3.10, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23140.50, 22780.25, 22716.20, 22620.45, 22421.95] // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
    },
    {
      name: "Nifty Next 50",
      close: 68981.35,
      dayChange: -765.60,
      dayChangePct: -1.10,
      weekChangePct: -3.90, // week-to-date vs Fri, 25 Sep close of 71,778.65
      spark: [71778.65, 70309.50, 69460.20, 69746.95, 68981.35], // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
      note: "The 'next rung' of large caps fell 1.10% to 68,981.35, a touch harder than the Nifty 50 and now about 8% below its 52-week high as foreign selling hit the index heavyweights."
    },
    {
      name: "Nifty Midcap 150",
      close: 21643.85,
      dayChange: -223.65,
      dayChangePct: -1.02,
      weekChangePct: -3.54, // week-to-date vs Fri, 25 Sep close of 22,437.00
      spark: [22437.00, 22071.30, 21853.30, 21867.50, 21643.85], // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
      note: "Midcaps fell in line with, but harder than, the large caps - down 1.02% to 21,643.85 and roughly 8.5% below their August record. Breadth was weak: only 38 of the 150 advanced."
    },
    {
      name: "Nifty Smallcap 250",
      close: 17589.05,
      dayChange: -209.75,
      dayChangePct: -1.18,
      weekChangePct: -3.14, // week-to-date vs Fri, 25 Sep close of 18,158.90
      spark: [18158.90, 17863.20, 17747.25, 17798.80, 17589.05], // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
      note: "The worst-hit size bucket: smallcaps slid 1.18% to 17,589.05 as breadth turned grim - 291 NSE stocks touched fresh 52-week lows against just 78 at highs, and 199 hit the lower circuit versus 95 at the upper circuit."
    },
    {
      name: "BSE SME Index",
      close: 120363.48,
      dayChange: -1621.81,
      dayChangePct: -1.33,
      weekChangePct: -0.73, // week-to-date vs Fri, 25 Sep close of 1,21,243.82
      spark: null,
      note: "The S&P BSE SME IPO index, which tracks newly listed small and medium enterprises, slid 1.33% to 1,20,363.48 - still within about 2% of its 52-week high after a strong September run."
    }
  ],

  // The narrative that leads the page. On trading days this is the DAY's wrap (dailyWrap);
  // on Saturdays it is the WEEK's wrap (weeklyWrap). weeklyWrap takes precedence when present;
  // set whichever is not in use to null.
  dailyWrap: null, // Saturday edition - the week's wrap sits in weeklyWrap below

  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "Dalal Street's worst week in 25 years: an eighth straight weekly loss as autos and heavyweights crack, IT the lone refuge and the Nifty stops just above its 52-week low",
    summary: "The week closed out the market's worst in 25 years: the Nifty fell 3.10% over the holiday-shortened week and the Sensex 2.69%, capping an eighth consecutive weekly loss - the longest such streak since 2001. Thursday's session alone took the Nifty down 198.50 points (-0.88%) to 22,421.95 and the Sensex 570.59 points (-0.79%) to 71,909.70. The sell-off was led by the heavyweights and the auto pack: Bajaj Auto (-7.62%) was the worst Nifty stock after a weak September sales print, with Maruti Suzuki (-4.86%), M&M (-3.1%), Eicher Motors (-3.2%), Shriram Finance (-3.84%) and Tata Steel (-3.4%) all down sharply, while Adani Ports, ITC, HUL, L&T and UltraTech added to the drag. The Nifty Midcap 150 (-3.54% for the week) and Nifty Smallcap 250 (-3.14%) fell harder than the benchmarks, and on Thursday only 1,023 of 3,707 NSE stocks advanced. IT was the lone pocket of strength - the Nifty IT index gained 2.17% on Thursday (and about 0.5% for the week), with Infosys (+4.11%), HDFC Life (+2.49%) and HDFC Bank (+1.76%) the top Nifty gainers - after softer-than-expected US August inflation eased rate worries. India VIX jumped 7% to 14.44, a three-month high, and the Nifty closed just 1.07% above its 52-week low of 22,182.55. The macro backdrop stayed hostile: FIIs pulled out more than Rs 26,000 crore this week (taking 2026 outflows to a record ~$27.8 billion), the 10-year US Treasury yield touched 5.31% - its highest since 2007 - Brent held near $97-100 after a 14% September surge, and the rupee slid to a two-month low of 96.3150. Markets are shut on Friday for Gandhi Jayanti; the October series now turns on Q2 earnings, US inflation data and the RBI's next move.",
    stats: ["Nifty -3.10%", "Sensex -2.69%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 - touching its 200-week moving average for the first time since the Covid crash - before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." },
    { date: "2026-10-01", label: "Thu 1 Oct", niftyClose: 22421.95, niftyChangePct: -0.88, sensexChangePct: -0.79, note: "Worst week in 25 years and an eighth straight weekly fall: the Nifty briefly breached 22,300 (intraday low 22,217) and the Sensex touched 71,292 before both clawed back, still leaving the Nifty just 1.07% above its 52-week low. Autos led the carnage - Bajaj Auto -7.6% on weak September sales, Maruti -4.9%, M&M, Eicher and Shriram Finance - as FIIs sold another Rs 20,128 crore over two sessions and the 10-year US yield hit 5.31%. IT was the only green sector (Nifty IT +2.17%) with Infosys (+4.1%) the top gainer; India VIX jumped 7% to 14.44 and the rupee slid 0.5% to a two-month low of 96.3150." }
  ],

  sectors: [
    { name: "Nifty IT", changePct: 2.17, note: "The lone gainer, closing at 28,304: softer-than-expected US August inflation eased rate worries and pulled money back into the beaten-down sector, with Infosys (+4.11%), TCS (+1.2%), HCL Tech (+1.1%) and Mphasis and Coforge (both up ~4%) leading" },
    { name: "Nifty Healthcare", changePct: -0.26, note: "Relatively resilient after Wednesday's drubbing, though Apollo Hospitals (-2.8%) and Max Healthcare stayed under pressure even as Max clawed back into the green by the close" },
    { name: "Nifty Bank", changePct: -0.33, note: "Bank Nifty closed at 54,450.75 (-182 points), giving back part of Wednesday's 0.69% gain as record FII selling and the RBI's rupee defence weighed; 54,000 remains the key support, with Kotak Mahindra Bank (+0.3%) one of the few gainers" },
    { name: "Nifty Financial Services", changePct: -0.38, note: "Financials slipped in line with banks; Shriram Finance (-3.84%) was among the Nifty's worst losers as rate-sensitive lenders stayed volatile" },
    { name: "Nifty Pharma", changePct: -0.48, note: "Pharma held up better than most; the defensive bid that unwound on Wednesday steadied, with Dr Reddy's and Sun Pharma mixed" },
    { name: "Nifty Oil & Gas", changePct: -1.32, note: "Crude stayed elevated (Brent ~$97-100 after a 14% September surge) but the sector still gave back gains as ONGC and the refiners slid; CPCL (-6.35%) was among the day's worst BSE 500 losers" },
    { name: "Nifty Realty", changePct: -1.46, note: "Rate-sensitive realty resumed its slide as US yields hit multi-year highs, unwinding Wednesday's 1.62% rebound" },
    { name: "Nifty Consumer Durables", changePct: -1.91, note: "Titan and the durables pack stayed under pressure; Consumer was the week's worst sector, down about 6.15%" },
    { name: "Nifty Media", changePct: -2.33, note: "High-beta media gave back most of Wednesday's 2.74% bounce as the broader market turned risk-off again" },
    { name: "Nifty Metal", changePct: -2.35, note: "Tata Steel (-3.4%), JSW Steel (-2.44%) and Hindalco slid as the crude-led inflation scare and China-demand worries revived input-cost and growth concerns" },
    { name: "Nifty FMCG", changePct: -2.35, note: "Staples were dumped: ITC (-2.6%) and Hindustan Unilever (-2.55%) were among the biggest Nifty drags as the defensive bid evaporated" },
    { name: "Nifty Auto", changePct: -3.46, note: "The day's worst sector, closing at 25,384: Bajaj Auto (-7.62%) crashed after a weak September two-wheeler sales print, with Maruti Suzuki (-4.86%), M&M (-3.1%), Eicher Motors (-3.2%) and Tata Motors close behind" }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week", // "day" on trading days, "week" on Saturdays
    source: "Nifty 500 weekly movers, week ended 1 Oct 2026 (Trendlyne Nifty 500 screener for gainers; NSE weekly returns for losers)",
    gainers: [
      { name: "Sun TV Network", changePct: 16.9, cap: "Smallcap", note: "Top Nifty 500 weekly gainer, up 16.9% - a mid-smallcap name outside the Nifty 50/Next 50/Midcap 100/Smallcap 100 lists, which is why the full Nifty 500 universe matters" },
      { name: "Cupid", changePct: 15.7, cap: "Smallcap", note: "Up 15.7% for the week" },
      { name: "Sterlite Technologies", changePct: 14.1, cap: "Smallcap", note: "Up 14.1% for the week, on a telecom-equipment bid" },
      { name: "MTAR Technologies", changePct: 13.0, cap: "Smallcap", note: "Up 13.0% for the week" },
      { name: "HFCL", changePct: 12.8, cap: "Smallcap", note: "Up 12.8% for the week" }
    ],
    losers: [
      { name: "PB Fintech", changePct: -18.8, cap: "Midcap", note: "Worst Nifty 500 weekly loser, down 18.8%, extending its slide after the IRDAI commission-cap consultation" },
      { name: "IFCI", changePct: -13.4, cap: "Smallcap", note: "Down 13.4% for the week" },
      { name: "Ola Electric Mobility", changePct: -12.8, cap: "Smallcap", note: "Down 12.8% for the week" },
      { name: "Patanjali Foods", changePct: -12.3, cap: "Midcap", note: "Down 12.3% for the week" },
      { name: "Swiggy", changePct: -11.0, cap: "Midcap", note: "Down 11% for the week" }
    ],
    sensexWinners: ["Infosys", "HDFC Bank", "TCS", "HCL Technologies", "Kotak Mahindra Bank"],
    sensexLaggards: ["Bajaj Auto", "Maruti Suzuki", "UltraTech Cement", "Eternal", "Bharat Electronics"]
  },

  watch: [
    {
      title: "The worst week in 25 years",
      detail: "The Nifty and Sensex fell for an eighth straight week - the longest losing streak since 2001. The Nifty has broken below its weekly 200-SMA zone of 22,600-22,580 and nearly tested 22,400; HST Wealth's Hariselvan Radhakrishnan says a failure to defend 22,400 could open 22,200-22,000, with 22,600-22,800 now the immediate resistance band. The Nifty closed just 1.07% above its 52-week low of 22,182.55."
    },
    {
      title: "FIIs: Rs 26,000 crore out in a week",
      detail: "FIIs sold more than Rs 26,000 crore of Indian equities this week, including Rs 20,128 crore in the last two sessions alone (Rs 10,743 crore Monday and Rs 10,148 crore Wednesday). That takes 2026 net selling to a record ~$27.8 billion (about Rs 2.6 lakh crore), with DIIs absorbing most of it - and September marked the first month in two years that FPIs were net sellers across both equity and debt."
    },
    {
      title: "Bond yields and crude: the twin overhang",
      detail: "The 10-year US Treasury yield touched 5.31%, its highest since 2007 and its biggest quarterly rise since 1994, while the 30-year moved above 5.65%. Brent held near $97-100 a barrel after a 14% September surge on the US-Iran standoff. Both keep India's import bill, inflation and equity valuations under pressure; a genuine de-escalation in West Asia remains the trigger for a relief rally."
    },
    {
      title: "Rupee at a two-month low as RBI defends 96",
      detail: "The rupee ended 0.5% lower at 96.3150 per dollar, its sharpest single-day fall in over two months, breaching the 96 mark before state-run banks sold dollars, likely on the RBI's behalf. Traders see the central bank intent on preventing a sustained break past 96, with the dollar index at a three-month high."
    },
    {
      title: "A long weekend, then Q2 earnings",
      detail: "Markets are closed on Friday, 2 October, for Gandhi Jayanti, and again on 20 October for Dussehra. The October series then turns on Q2 results (Cipla reports on 27 October), US inflation data and the RBI's next policy decision - with the Nifty already at post-Covid-low valuations of about 17.4x one-year forward earnings."
    }
  ],

  reads: [
    {
      title: "Stock market holiday today on October 2: BSE, NSE to remain closed for Gandhi Jayanti",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-holiday-today-on-october-2-bse-nse-to-remain-closed-today-for-gandhi-jayanti-14043118.html"
    },
    {
      title: "Equities post eighth straight weekly loss as global headwinds intensify",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/equities-post-eighth-straight-weekly-loss-as-global-headwinds-intensify/article71532691.ece"
    },
    {
      title: "Foreign Investors Sell Again: FIIs Pull Out Rs 34,970 Crore As Nifty Falls For 8th Week",
      source: "ABP Live",
      url: "https://news.abplive.com/business/mutual-funds/foreign-investors-remain-sellers-fiis-nifty-falls-1869402"
    },
    {
      title: "Investors worried over bloodbath as Nifty 50 sees longest weekly losing streak in 25 yrs - Outlook for H2 from experts",
      source: "Mint",
      url: "https://www.livemint.com/market/stock-market-news/investors-worried-over-bloodbath-as-nifty-50-sees-longest-weekly-losing-streak-in-25-yrs-outlook-for-h2-from-experts-11790922247662.html"
    },
    {
      title: "Nifty, Bank Nifty, Nifty IT: Technical analysts decode outlook for H2 FY27",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/nifty-bank-nifty-nifty-it-technical-analysts-decode-outlook-for-h2-fy27-126100100103_1.html"
    }
  ],

  // Today's financial ratio, worked through with one Nifty 500 company's last
  // audited financial statements. Both the ratio and the company change every day.
  ratio: {
    name: "Return on Capital Employed (ROCE)",
    category: "Profitability",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), audited consolidated financial statements. The report's printed page numbers run 30 ahead of the PDF page (printed p. 318 = PDF p. 288).",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "ROCE = EBIT ÷ Capital Employed × 100",
    formulaNote: "EBIT = profit before interest and tax. Capital Employed = Total Assets − Current Liabilities (the same as Total Equity + Non-current Liabilities).",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Profit before tax", value: "Rs 39,995 crore", page: "p. 318" },
      { label: "Finance cost", value: "Rs 416 crore", page: "p. 318" },
      { label: "Total assets", value: "Rs 1,55,967 crore", page: "p. 316" },
      { label: "Current liabilities", value: "Rs 52,322 crore", page: "p. 317" }
    ],
    working: "Step 1 - EBIT: profit before tax + finance cost = 39,995 + 416 = Rs 40,411 crore (p. 318). Step 2 - capital employed: total assets − current liabilities = 1,55,967 − 52,322 = Rs 1,03,645 crore (p. 316-317; the same as total equity Rs 93,297 cr + non-current liabilities Rs 10,348 cr). Step 3 - ROCE = 40,411 ÷ 1,03,645 × 100 = 39.0%.",
    result: "≈ 39%",
    meaning: "For every Rs 100 of long-term capital Infosys employs, it earns about Rs 39 of operating profit. Asset-light IT businesses that carry almost no debt typically screen well above 25-30%, while capital-heavy sectors (refining, telecom, utilities) often sit in single digits to low teens. Always compare ROCE within the same sector, and check it comfortably beats the company's cost of capital (roughly 11-14% for a stable Indian large-cap) - below that floor a business is destroying value even if its profit looks large.",
    crossCheck: "Screener.in reports Infosys' FY26 ROCE at 40%; the small gap is convention (whether the one-off Labour Codes charge of Rs 1,289 cr and other income are folded in). Either way it is far above the ~12% cost of capital.",
    source: "Infosys Integrated Annual Report 2025-26 - Consolidated Balance Sheet (pp. 316-317) and Consolidated Statement of Profit and Loss (p. 318)"
  }
};
