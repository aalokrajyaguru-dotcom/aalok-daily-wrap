const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 2 October 2026, 5:30 PM IST — Markets closed today - Mahatma Gandhi Jayanti",
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
      name: "Sensex",
      close: 71909.70,
      dayChange: -570.59,
      dayChangePct: -0.79,
      weekChangePct: -2.69, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [73895.74, 72771.72, 72529.07, 72480.29, 71909.70] // last 5 closes: 25, 28, 29, 30 Sep, 1 Oct
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.99,
      weekChangePct: null,
      spark: null,
      note: "Midcaps fell in line with, but harder than, the large caps: the S&P BSE 150 MidCap slipped 0.99% and the Nifty Midcap 100 lost 1.01%, while the Nifty Next 50 fell about 1.1%. The BSE100 large-cap index was down 0.95% - the whole size spectrum ended in the red."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: -1.23,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps were the worst-hit size bucket: the S&P BSE 250 SmallCap dropped 1.23% and the Nifty Smallcap 100 lost 0.97%. Breadth was grim - 291 NSE stocks touched fresh 52-week lows against just 78 at 52-week highs, and 199 hit the lower circuit versus 95 at the upper circuit."
    }
  ],

  weeklyWrap: {
    headline: "Dalal Street's worst week in 25 years: an eighth straight weekly loss as autos and heavyweights crack, IT the lone refuge and the Nifty stops just above its 52-week low",
    niftyFiveSessionPct: -2.78,   // vs 24 Sep close of 23,063.10
    sensexFiveSessionPct: -2.27,  // vs 24 Sep close of 73,580.54
    summary: "Thursday closed out the market's worst week in 25 years: the Nifty fell 198.50 points (-0.88%) to 22,421.95 and the Sensex 570.59 points (-0.79%) to 71,909.70, capping an eighth consecutive weekly loss - the longest such streak since 2001. The sell-off was led by the heavyweights and the auto pack: Bajaj Auto (-7.62%) was the worst Nifty stock after a weak September sales print, with Maruti Suzuki (-4.86%), M&M (-3.1%), Eicher Motors (-3.2%), Shriram Finance (-3.84%) and Tata Steel (-3.4%) all down sharply, while Adani Ports, ITC, HUL, L&T and UltraTech added to the drag. The BSE 150 Midcap (-0.99%) and BSE 250 Smallcap (-1.23%) fell harder than the benchmarks, and only 1,023 of 3,707 NSE stocks advanced. IT was the lone pocket of strength - the Nifty IT index gained 2.17% to 28,304, with Infosys (+4.11%), HDFC Life (+2.49%) and HDFC Bank (+1.76%) the top Nifty gainers - after softer-than-expected US August inflation eased rate worries. India VIX jumped 7% to 14.44, a three-month high, and the Nifty closed just 1.07% above its 52-week low of 22,182.55. The macro backdrop stayed hostile: FIIs pulled out more than Rs 26,000 crore this week (including Rs 20,128 crore in the last two sessions alone, taking 2026 outflows to a record ~$27.8 billion), the 10-year US Treasury yield touched 5.31% - its highest since 2007 - Brent held near $97-100 after a 14% September surge, and the rupee slid to a two-month low of 96.3150. Markets are shut on Friday for Gandhi Jayanti; the October series now turns on Q2 earnings, US inflation data and the RBI's next move."
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
    gainers: [
      { name: "Infosys", changePct: 4.11, cap: "Largecap", note: "Top Nifty gainer, closing at Rs 1,035, as IT rallied on softer US inflation data; Mphasis and Coforge rose about 4% each and the Nifty IT index (+2.17%) was the only sector in the green" },
      { name: "HDFC Life Insurance", changePct: 2.49, cap: "Largecap", note: "Second-best Nifty gainer at Rs 534.20, leading an insurance rebound even as SBI Life (+1.5%) and HDFC Bank (+1.76%) also advanced" },
      { name: "Schneider Electric Infrastructure", changePct: 6.19, cap: "Midcap", note: "Top gainer across the BSE 500, bucking the capital-goods sell-off; IDBI Bank (+5.56%) and Welspun Living (+5.03%) were the next best broader-market performers" }
    ],
    losers: [
      { name: "Bajaj Auto", changePct: -7.62, cap: "Largecap", note: "Worst Nifty 50 stock, closing at Rs 10,045 after a disappointing September two-wheeler sales print; also the top large-cap loser in the BSE 500" },
      { name: "Maruti Suzuki", changePct: -4.86, cap: "Largecap", note: "Closed at Rs 11,386 as the entire auto pack was hammered; M&M (-3.1%) and Eicher Motors (-3.2%) also featured among the biggest Nifty losers" },
      { name: "PB Fintech", changePct: -7.69, cap: "Midcap", note: "Top loser across the BSE 500, plunging on profit-taking and valuation concerns; CPCL (-6.35%) was the worst smallcap performer" }
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

  glossary: [
    {
      term: "Offer for Sale (OFS)",
      meaning: "An IPO mechanism where existing shareholders sell their shares to the public; the company itself raises no money. The NSE IPO is entirely an OFS, so all Rs 22,561 crore of proceeds go to selling shareholders, not the exchange."
    },
    {
      term: "QIB",
      meaning: "Qualified Institutional Buyer - banks, mutual funds, insurers and other large institutions allowed to bid in IPOs. The QIB portion of the NSE IPO was subscribed 12.68 times, driving the overall 5.7x figure."
    },
    {
      term: "GMP (Grey Market Premium)",
      meaning: "The unofficial premium at which IPO shares trade before listing. NSE shares were quoting around Rs 55 (about 3%) over the Rs 1,785 upper price band ahead of Thursday's listing - an informal signal, not a guarantee of listing gains."
    }
  ]
};
