const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 30 September 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of market close (3:30 PM IST), Wednesday, 30 September 2026",

  indices: [
    {
      name: "Nifty 50",
      close: 22620.45,
      dayChange: -95.75,
      dayChangePct: -0.42,
      weekChangePct: -2.25, // week-to-date vs Fri, 25 Sep close of 23,140.50
      spark: [23063.10, 23140.50, 22780.25, 22716.20, 22620.45] // last 5 closes: 24, 25, 28, 29, 30 Sep
    },
    {
      name: "Sensex",
      close: 72480.29,
      dayChange: -48.78,
      dayChangePct: -0.07,
      weekChangePct: -1.92, // week-to-date vs Fri, 25 Sep close of 73,895.74
      spark: [73580.54, 73895.74, 72771.72, 72529.07, 72480.29] // last 5 closes: 24, 25, 28, 29, 30 Sep
    },
    {
      name: "S&P BSE 150 Midcap",
      close: null,
      dayChange: null,
      dayChangePct: -0.17,
      weekChangePct: null,
      spark: null,
      note: "Midcaps finally steadied after three brutal weeks: the Nifty Midcap 100 ended flat (+0.02%) and the Nifty Next 50 gained 0.41%, while the BSE 150 MidCap slipped just 0.17% - all outperforming the Nifty 50. Order-winners led the way: Transrail Lighting (+5%, new orders worth over Rs 574 crore) and KSB (+5%, an export order of up to Rs 118 crore)."
    },
    {
      name: "S&P BSE 250 Smallcap",
      close: null,
      dayChange: null,
      dayChangePct: 0.00,
      weekChangePct: null,
      spark: null,
      note: "Smallcaps outperformed the benchmarks: the Nifty Smallcap 100 gained 0.27% and the BSE 250 SmallCap ended unchanged. Beneath the calm, more than 120 stocks still touched fresh 52-week lows - including Britannia, Voltas, Godrej Consumer, Havells India and Wipro - while new listing Adroit Industries closed 85% above its issue price."
    }
  ],

  weeklyWrap: {
    headline: "September signs off as the worst month since 2018: the October series opens with a fade-out at a fresh six-month low even as banks, media and realty fight back",
    niftyFiveSessionPct: -3.52,   // vs 23 Sep close of 23,446.80
    sensexFiveSessionPct: -3.14,  // vs 23 Sep close of 74,828.25
    summary: "Wednesday was a round trip in reverse: the Nifty opened the October series on a firm footing and crossed 22,800 intraday (high of 22,809.35), with the Sensex up more than 500 points at 73,062.23, before final-hour selling erased nearly everything to leave the Nifty at 22,620.45 (-0.42%) - a fresh six-month closing low - and the Sensex at 72,480.29 (-0.07%). It was the third straight decline, but the first in a while that the market's innards held up: midcaps ended flat, smallcaps gained 0.27%, and the Bank Nifty (+0.69% to 54,633.05) led from the front as Kotak Mahindra Bank (+2.71%), ICICI Bank (+2.31%) and IndusInd (+2.05%) rallied on a Macquarie upgrade of the sector. Pharma (-1.84%), healthcare (-2.57%) and metal (-1.50%) bore the brunt of profit booking - Apollo Hospitals (-5.70%) was the day's worst Nifty stock - while media (+2.74%) and realty (+1.62%) topped the sector board. India VIX closed around 13.5. The macro backdrop stayed hostile: Brent rebounded 1.2% to about $103.8 a barrel after US President Trump ruled out easing sanctions on Iran, the US 10-year Treasury yield sits near 5.29% (its highest since 2007), and FIIs sold a net Rs 9,980 crore on Tuesday - their biggest single-day outflow in about four months. September thus ends with the Nifty down roughly 6.7% - its worst month since 2018 and its worst September F&O series in 25 years. Over the last five sessions the Nifty is down 3.52% and the Sensex 3.14%; the October series now turns on Q2 earnings, US inflation data and the RBI's next move."
  },

  dayByDay: [
    { date: "2026-09-24", label: "Thu 24 Sep", niftyClose: 23063.10, niftyChangePct: -1.64, sensexChangePct: -1.67, note: "Worst session since 9 March: US 10-year yield tops 5.1% and Brent hits $106 as the US-Iran standoff simmers; IRDAI commission-cap draft sinks insurers (PB Fintech -36%); VIX jumps 23%; NSE lists at a small premium and extends gains." },
    { date: "2026-09-25", label: "Fri 25 Sep", niftyClose: 23140.50, niftyChangePct: 0.34, sensexChangePct: 0.43, note: "Rebound after the rout: value buying, softer crude (~$105) and US-Iran truce talk lift the Nifty back above 23,100; IT falls for a sixth straight day; still a seventh consecutive weekly loss (-0.88%)." },
    { date: "2026-09-28", label: "Mon 28 Sep", niftyClose: 22780.25, niftyChangePct: -1.56, sensexChangePct: -1.52, note: "Rout: Trump rejects Iran's Hormuz ceasefire proposal, Brent tops $107 and the US 10-year yield sits above 5.2%; Nifty closes below 23,000 for the first time since April as Rs 7.5 lakh cr of mcap is wiped out; VIX spikes ~12%; PSU banks crash 3.2%." },
    { date: "2026-09-29", label: "Tue 29 Sep", niftyClose: 22716.20, niftyChangePct: -0.28, sensexChangePct: -0.33, note: "Expiry-day rollercoaster: the Nifty dives to a new six-month low of 22,569.65 - touching its 200-week moving average for the first time since the Covid crash - before pharma, metal and PSU-bank buying claws back nearly all the losses; IT and consumer durables (-2.14%) lag; VIX spikes to ~14.8 intraday, then cools to ~13.4; September series ends with the Nifty down about 6%." },
    { date: "2026-09-30", label: "Wed 30 Sep", niftyClose: 22620.45, niftyChangePct: -0.42, sensexChangePct: -0.07, note: "Third straight fall, but a round trip: the Nifty opens the October series above 22,800 (intraday high 22,809) before final-hour selling leaves a fresh six-month closing low; Bank Nifty (+0.69%) leads as Macquarie upgrades banks while Apollo Hospitals (-5.7%) drags pharma and healthcare; BSE Ltd drops ~4% on its Nifty 50 debut as Goldman Sachs and BNP Paribas sell Rs 2,186 crore of shares; September ends as the Nifty's worst month since 2018." }
  ],

  sectors: [
    { name: "Nifty Media", changePct: 2.74, note: "The day's best sector by a distance as high-beta media names bounced hardest with the morning recovery that took the Nifty above 22,800" },
    { name: "Nifty Realty", changePct: 1.62, note: "Rate-sensitive realty rebounded even with the US 30-year yield at its highest since 2002; the index had lost roughly 7% in the September series and was among Monday's worst-hit sectors" },
    { name: "Nifty Private Bank", changePct: 0.95, note: "Kotak Mahindra Bank (+2.71%) led, with ICICI Bank (+2.31%) and IndusInd (+2.05%) close behind after Macquarie turned bullish on banks, arguing insurers have underperformed on regulatory concerns while lenders offer value" },
    { name: "Nifty Bank", changePct: 0.69, note: "Bank Nifty closed at 54,633.05 (+373 points), defending the 54,000 mark for a second straight session and ending as the day's best major index; a move above 54,500-54,600 is now the bulls' next test" },
    { name: "Nifty PSU Bank", changePct: 0.54, note: "PSU banks caught their breath after a two-day slide of nearly 3.9%; Bank of Baroda was among the stocks Macquarie upgraded to Outperform" },
    { name: "Nifty IT", changePct: 0.13, note: "IT stayed resilient against the two-decade-high US Treasury yields that have battered it all month (about -9% for the September series): Tech Mahindra (+0.82%) and TCS (+0.69%) gained while Infosys (-1.04%) lagged" },
    { name: "Nifty FMCG", changePct: -0.63, note: "Britannia and Godrej Consumer touched fresh 52-week lows even as Hindustan Unilever found buyers; staples stayed out of favour as the defensive bid rotated into banks" },
    { name: "Nifty Consumer Durables", changePct: -1.35, note: "Titan (-2.01%) and Voltas (a fresh 52-week low) kept durables among the weakest sectors, extending Tuesday's 2.14% drubbing" },
    { name: "Nifty Metal", changePct: -1.50, note: "Tata Steel (-1.76%) and Adani Enterprises (-2.88%) gave back much of Tuesday's rebound as crude's renewed rise revived input-cost and demand worries" },
    { name: "Nifty Pharma", changePct: -1.84, note: "The month's defensive trade unwound: Sun Pharma (-2.15%) slid and the index closed at 26,438 (-495.65 points) as investors booked profits after pharma's steady outperformance" },
    { name: "Nifty Healthcare", changePct: -2.57, note: "Day's worst sector: Apollo Hospitals (-5.70%) was the biggest Nifty loser by a distance and Max Healthcare also featured among the top five decliners" }
  ],

  movers: {
    gainers: [
      { name: "Kotak Mahindra Bank", changePct: 2.71, cap: "Largecap", note: "Top Nifty gainer, closing at Rs 417 after Macquarie upgraded it - along with Bank of Baroda, Paytm and M&M Financial - to Outperform as part of a bullish call on lenders; it was also the best Sensex performer, up about 2.9%" },
      { name: "ICICI Bank", changePct: 2.31, cap: "Largecap", note: "Closed at Rs 1,323 as private banks rallied on the sector upgrade; IndusInd Bank (+2.05%), Axis Bank (+1.41%) and UltraTech Cement (+1.18%) were the other big Sensex movers, while InterGlobe Aviation and Tech Mahindra rounded out the Nifty's top five" },
      { name: "Transrail Lighting", changePct: 5.00, cap: "Midcap", note: "Surged 5% on new orders worth more than Rs 574 crore; fellow order-winners KSB (+5%, an export order of up to Rs 118 crore) and Power Mech Projects (+4%, a Rs 549-crore order) also rallied in a broader market that finally outperformed the benchmarks" }
    ],
    losers: [
      { name: "Apollo Hospitals", changePct: -5.70, cap: "Largecap", note: "Worst Nifty 50 stock by a distance, closing at Rs 8,165.50 (-493.50) as the healthcare index (-2.57%) - the day's worst sector - met heavy profit booking after its phase of steady outperformance" },
      { name: "SBI Life Insurance", changePct: -2.90, cap: "Largecap", note: "Closed at Rs 1,684.70, extending the insurance slide that Macquarie flagged as regulatory-concern-driven underperformance; Max Healthcare also featured among the Nifty's top five losers" },
      { name: "BSE Ltd", changePct: -4.00, cap: "Largecap", note: "A bruised Nifty 50 debut: the exchange stock, which replaced Wipro in the index effective today, fell about 4% as Goldman Sachs and BNP Paribas sold shares worth Rs 2,186 crore; Adani Enterprises (-2.88%), Eternal (-2.31%) and Sun Pharma (-2.15%) also sank" }
    ],
    sensexWinners: ["Kotak Mahindra Bank", "ICICI Bank", "IndusInd Bank", "Axis Bank", "UltraTech Cement"],
    sensexLaggards: ["Eternal", "Sun Pharma", "Titan", "Tata Steel", "HDFC Bank"]
  },

  watch: [
    {
      title: "October series opens at a six-month low",
      detail: "The Nifty's new closing low of 22,620.45 keeps the underlying trend negative. HDFC Securities' Nagaraj Shetti says a break below 22,500 could open 22,200-22,100, with 22,800 the key resistance after Wednesday's long-upper-shadow candle; Religare's Ajit Mishra flags 22,600 as immediate support and 22,750-22,800 as the hurdle to clear before 23,000."
    },
    {
      title: "US inflation data and a Fed on the fence",
      detail: "Investors turned cautious ahead of US inflation data due this week. The US 10-year Treasury yield ended Tuesday at 5.293% - its highest since June 2007 - and the 30-year at 5.62%, the steepest since 2002, but odds of an October Fed hike fell to about 51.5% after New York Fed President John Williams said the central bank has time to assess incoming data."
    },
    {
      title: "Crude rebounds as Trump rules out easing Iran sanctions",
      detail: "Brent added 1.2% to about $103.8 a barrel after the US President denied he would ease sanctions on Iran while Qatar pushed for peace talks, even as Saudi crude exports recover from Red Sea ports. Elevated crude keeps India's import bill, inflation and the ~96-per-dollar rupee under pressure; a genuine de-escalation remains the trigger for a relief rally."
    },
    {
      title: "FIIs: the month's biggest outflow and record index shorts",
      detail: "FIIs sold a net Rs 9,980 crore of Indian equities on Tuesday - their biggest single-day outflow in about four months - taking September's tally to roughly $2.7 billion, while their net index-futures shorts stand near 267,000 contracts after Nifty futures open interest rose nearly 30%. DIIs continue to absorb most of the selling."
    },
    {
      title: "Q2 earnings and the RBI in the October series",
      detail: "With the worst month since 2018 closed out, the October series brings Q2 results (expectations already tempered versus Q1), the RBI's next policy decision and the rupee's path around 95.82 a dollar - 16 paise firmer on Wednesday. The BSE-Wipro index change is done; watch how passive flows settle."
    }
  ],

  reads: [
    {
      title: "Taking Stock: Sensex, Nifty end flat amid volatility; metal, pharma stocks drag",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/taking-stock-sensex-nifty-end-flat-amid-volatility-metal-pharma-stocks-drag-14041874.html"
    },
    {
      title: "Market Close: Sensex Ends 49 Points Lower, Nifty Slips Below 22,650; Bank Stocks Gain, Pharma, Metal Drag",
      source: "News18",
      url: "https://www.news18.com/business/markets/market-close-sensex-ends-49-points-lower-nifty-slips-below-22650-bank-stocks-gain-pharma-metal-drag-ws-l-10361074.html"
    },
    {
      title: "Nifty ends below 22,650 amid FII selling",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/live-news/nifty-ends-below-22-650-amid-fii-selling/1734696"
    },
    {
      title: "Sensex Ends At 72,480.29 And Nifty At 22,620.45, Rising Crude Extends Market Losses To Third Session",
      source: "Free Press Journal",
      url: "https://www.freepressjournal.in/business/sensex-ends-at-7248029-and-nifty-at-2262045-rising-crude-extends-market-losses-to-third-session"
    },
    {
      title: "Sensex rises 130 points, Nifty falls below 22,700 amid cooling oil, rising bond yields. What lies ahead?",
      source: "Economic Times",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/sensex-rises-130-points-nifty-falls-below-22700-amid-cooling-oil-rising-bond-yields-what-lies-ahead/articleshow/134582066.cms"
    },
    {
      title: "Closing Bell: Market fails to hold gains; Nifty at day's low",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-30-09-2026-alpha-liveblog-14041471.html"
    },
    {
      title: "Sensex Today | Stock Market Live Updates: GIFT Nifty down 30 pts; Bernstein cuts target for PB Fintech",
      source: "CNBC TV18",
      url: "https://www.cnbctv18.com/market/stock-market-live-updates-sensex-nifty-50-today-october-series-banks-midcaps-oil-bse-wipro-avalon-pb-fintech-share-price-liveblog-20001494.htm"
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
