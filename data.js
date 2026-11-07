const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 7 November 2026, 5:30 PM IST \u2014 Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of the 6 November 2026 close (3:30 PM IST); every weekly move measured from the 30 October 2026 close",

  indices: [
    {
      name: "Nifty 50",
      close: 25030.35,
      dayChange: 493.75,
      dayChangePct: 2.01,
      weekChangePct: 8.58, // vs the 30 Oct (prior Friday) close of 23,053.10
      spark: [23440.80, 23810.85, 23960.60, 24536.60, 25030.35], // last 5 closes: 2 Nov, 3 Nov, 4 Nov, 5 Nov, 6 Nov
      note: "The week, not the day, is the story. The index added 1,977.25 points, or 8.58%, over the five sessions to 25,030.35 from the 30 October close of 23,053.10 \u2014 its best week since February 2021 and its highest close in nine months, above 25,000 for the first time since 27 February. Friday alone contributed 493.75 points, or 2.01%: an open at 24,538.20, a low of 24,388.05 and a close at the session high, the seventh consecutive gain and the longest winning streak in three years. 46 of the 50 members ended the week higher, three lower \u2014 Power Grid -1.92%, Infosys -0.30%, TCS -0.16% \u2014 and Apollo Hospitals was flat. The five days ran in sequence: Reliance Industries +13.31% for the week after its September-quarter beat on Monday, a 16% weekly collapse in Brent after the US midterm result, and Rs 22,693 crore of FII buying in November so far, of which Rs 14,975 crore came on 5 November alone, the largest single-day purchase in nearly six years. (NSE's own ind_close_all_06112026.csv carries the 25,030.35 close, +493.75 and +2.01% with a 24,388.05 low; the 8.58% week, the 1,977.25 points and the 23,053.10 base are confirmed identically by Zee Business, Upstox's weekly wrap, ETMoney's 1W column and Oquilia's chaining of NSE closing values.)"
    },
    {
      name: "Nifty Next 50",
      close: 71657.8,
      dayChange: -110.85,
      dayChangePct: -0.15,
      weekChangePct: 5.83, // vs the 30 Oct (prior Friday) close of 67,709.10
      spark: [68962.65, 69624.35, 70795.00, 71768.65, 71657.80], // last 5 closes: 2 Nov, 3 Nov, 4 Nov, 5 Nov, 6 Nov
      note: "A strong week that still lost to the headline index by 275 basis points: +3,948.70 points, or 5.83%, to 71,657.80 against the Nifty's 8.58%. The card is also the only one of the five that fell on Friday, down 110.85 points or 0.15%, after opening at 71,304.65 and trading as low as 70,641.00. That is a composition story rather than a sentiment one \u2014 this basket carries the industrial and capital-goods names the AI-infrastructure unwind hit hardest, and almost none of the private banks that did Friday's work: Nifty Capital Goods was among the week's two worst sectors at +2.29%. (NSE's ind_close_all_06112026.csv gives 71,657.80, -110.85 and -0.15% with the 70,641 low and 71,304.65 open; the +5.83% and the 3,948.70 points appear identically in ETMoney's 1W column and Oquilia's week table.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22271.15,
      dayChange: -19.25,
      dayChangePct: -0.09,
      weekChangePct: 5.81, // vs the 30 Oct (prior Friday) close of 21,047.50
      spark: [21310.75, 21523.35, 21867.30, 22290.40, 22271.15], // last 5 closes: 2 Nov, 3 Nov, 4 Nov, 5 Nov, 6 Nov
      note: "Flat on Friday \u2014 down 19.25 points, or 0.09%, to 22,271.15 after a week in which it added 1,223.65 points, or 5.81%. That Friday flatness is the honest tell of the week: the index made its high on Thursday at 22,290.40 and gave back only a fifth of a percent while the Nifty rose 2.01%, because the last session's buying went to index-weight financials and not down the ladder. Over the week it beat the Smallcap 250 by 210 basis points and lagged the Nifty by 277. (The 22,271.15 close, the -19.25 and the -0.09% are on NSE's ind_close_all_06112026.csv; the 5.81% week and the 21,047.50 base reconcile across ETMoney's 1W column and Anand Rathi's all-indices table.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17386.15,
      dayChange: -149.55,
      dayChangePct: -0.85,
      weekChangePct: 3.71, // vs the 30 Oct (prior Friday) close
      spark: [16991.00, 17061.65, 17398.35, 17535.70, 17386.15], // last 5 closes: 2 Nov, 3 Nov, 4 Nov, 5 Nov, 6 Nov
      note: "The weakest of the four broad cards and the only one that lost more than half a percent on Friday: -149.55 points, or 0.85%, to 17,386.15, after peaking for the week at 17,535.70 on Thursday. The week's gain of 3.71% is less than half the Nifty's 8.58%, and the reason is visible in the losers list \u2014 MTAR -20.32%, TD Power -19.25% and Sterlite Technologies -12.69% are all this index, all repriced on a single quarter or a single capex narrative. 23 Nifty 500 stocks closed the week at a 52-week low against 34 at a high. (NSE's ind_close_all_06112026.csv gives the 17,386.15 close, -149.55 and -0.85%; the +3.71% week is ETMoney's 1W column, consistent with NSE's own Smallcap 100 at +2.77% for the week.)"
    },
    {
      name: "BSE SME Index",
      close: 115996.69,
      dayChange: 132.69,
      dayChangePct: 0.11,
      weekChangePct: 3.04, // vs the 30 Oct close of 1,12,571.49
      spark: [112547.00, 113070.91, 113592.99, 115864.00, 115996.69], // last 5 closes: 2 Nov, 3 Nov, 4 Nov, 5 Nov, 6 Nov
      note: "The S&P BSE SME IPO index closed the week at 115,996.69, up 3,425.20 points or 3.04% from the 30 October close of 112,571.49, and up 132.69 points or 0.11% on Friday from 115,864.00. The shape of the week is worth noting because it inverts the usual story: this index fell 0.02% on Monday while the Nifty rose 1.68%, then did almost all of its work on Thursday (+2.00% to 115,864.00) and Friday, which is the opposite of the previous week's pattern where the small end led. The intraday range on Friday was 115,411.91 to 116,098.59, and the index is still 5.9% below its 52-week high of 123,353.65. (Anand Rathi's BSE SME IPO close history carries all five daily closes and the 112,571.49 base; Livemint, Angel One, 5paisa and Dhan each carry the 115,996.69 close, +132.69 and +0.11% with the same day's range.)"
    }
  ],

  dailyWrap: null,
  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "The best week since February 2021: the Nifty adds 8.58% to close at 25,030.35 and the Sensex 8.82% to 81,028.02 as FIIs return, crude collapses 16% and the rupee firms \u2014 but the buying is still concentrated in financials, and the small end trails",
    summary: "Five sessions, 1,977.25 points, and the first close above 25,000 since 27 February. The Nifty rose 8.58% for the week to 25,030.35 and the Sensex 6,568.49 points, or 8.82%, to 81,028.02 \u2014 the best week for both since February 2021, the seventh consecutive gain and the longest winning streak in three years. Monday started it: Reliance Industries rose 11.60% on 2 November, its biggest single-day gain since April 2020, after September-quarter net profit attributable to owners of Rs 25,548 crore on a near-28% rise in gross revenue, and Oil & Gas rose 5.95% as Brent fell 4.42%; the Nifty closed 1.68% higher at 23,440.80. Tuesday rotated instead of retreating, with FMCG +3.65% on Marico's 31% profit jump and a raised FY27 guidance, Realty +2.33% and Private Bank +1.98%, and the index added 1.58% to 23,810.85. Wednesday was the quiet one, +0.63% to 23,960.60. Thursday was the hinge: after the US midterm result crude kept falling, foreign investors bought Rs 14,975 crore of Indian equities \u2014 the largest single-day purchase in nearly six years \u2014 the rupee strengthened to 93.90 a dollar, and the index jumped 2.40% to 24,536.60. Friday's 2.01% took it through 25,000. Across the week Brent fell more than 16%, to $97.75 a barrel, its steepest weekly fall since the pandemic and its largest in absolute terms in LSEG data going back to 1988, and FIIs have bought about Rs 22,693 crore of Indian equities in November so far. The leadership was financial and domestic: Nifty Financial Services +10.41%, Realty +10.17%, Consumer Durables +10.08%, Oil & Gas +9.56%, Auto +9.40%, Private Bank +9.06% and Bank +8.04%, with Nifty NBFC the best of all 71 sectoral and thematic indices at +13.59%. The laggards were the global and capex trades: IT +1.14%, Capital Goods +2.29%, Media +2.41%, Defence +2.58% and Pharma +3.01%. The broad market joined in but lagged the headline index \u2014 Nifty 500 +7.13%, Midcap 150 +5.81%, Smallcap 250 +3.71% \u2014 and while 1,956 of 2,623 NSE main-board stocks rose against 659 that fell, the median Nifty 500 stock gained 5.5% against the Nifty's 8.58%. 34 Nifty 500 stocks closed the week at a 52-week high and 23 at a low, and India VIX rose 14.18% to 17.47 even as the index climbed, which is protection bought into Diwali rather than confidence. The Q2 tail kept taking names: Thermax -17.27% on Friday, PI Industries -17.38% for the week, TD Power -19.25%, MTAR -20.32% and AIA Engineering -13.41%. The next session is not Monday \u2014 NSE and BSE hold the Muhurat trading session for Diwali Laxmi Pujan on Sunday, 8 November, from 2:20 pm to 3:30 pm, opening Samvat 2083.",
    stats: ["Nifty 8.58%", "Sensex 8.82%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    {
      date: "2026-11-02",
      label: "Mon 2 Nov",
      niftyClose: 23440.8,
      niftyChangePct: 1.68,
      sensexChangePct: 1.66,
      note: "The day Reliance and crude did the work. The Sensex opened at 75,178.24, dipped to 74,978.12 and closed at its session high of 75,692.78, up 1,233.25 points or 1.66%; the Nifty went 23,222.30 to a 23,207.05 low and closed at its high of 23,440.80, up 387.70 points or 1.68%. Reliance Industries was the story \u2014 +11.60% to Rs 1,300.00, its biggest single-day gain since April 2020, after September-quarter net profit attributable to owners of Rs 25,548 crore (+41% year on year) on a near-28% rise in gross revenue, with the oil-to-chemicals segment riding global fuel margins and Jio Platforms adding subscribers. Brent for December fell $5.01, or 4.42%, to $108.42 a barrel and WTI 4.23% to $99.72 as Iranian and Qatari officials held a third day of talks to end the US-Israeli war with Iran. Sectorally that produced the exact inverse of Friday: Oil & Gas +5.95%, Energy +3.92%, Infra +3.70%, Metal +3.21%, Consumer Durables +2.70%, PSU Bank +1.36%, Auto +1.33%, Realty +1.03%, FMCG +0.84% and Bank +0.58% (55,002.20, +315.25), against Pharma -0.32%, Private Bank -0.40%, IT -0.50% (32,442.50) and Media -0.76%. Tata Steel +5.83% to Rs 177.37, JSW Steel +5.13% to Rs 1,309.90, Coal India +4.88% to Rs 408.00 on record October supplies of 70.3 million tonnes, and Shriram Finance +4.88% to Rs 863.35 followed Reliance; Infosys -2.03% to Rs 1,161.00, ICICI Bank -0.76%, Dr Reddy's -0.74%, Kotak Mahindra Bank -0.70% and Axis Bank -0.66% led the fallers as global money kept leaving the AI-infrastructure trade (Nasdaq -2.86% on Friday, Intel -28.6%). The broader market joined in for once: Next 50 +1.85% to 68,962.65, Smallcap 250 +1.35% to 16,991.00, Midcap 150 +1.25% to 21,310.75, Midcap 100 +1.19% to 57,983.40, Smallcap 100 +0.71% to 18,595.30 and Nifty 500 +1.58% to 22,241.40 \u2014 but the BSE SME IPO index closed flat to lower at 1,12,547.00 (-0.02%) after trading above 1,13,450 in the morning. NSE breadth was 2,503 advances against 1,900 declines and 203 unchanged; FIIs bought Rs 3,114.68 crore net and DIIs sold Rs 392.20 crore; India VIX rose 1.40% to 15.52 and the rupee closed at 94.90 a dollar."
    },
    {
      date: "2026-11-03",
      label: "Tue 3 Nov",
      niftyClose: 23810.85,
      niftyChangePct: 1.58,
      sensexChangePct: 1.62,
      note: "The rotation reversed, and both benchmarks closed at their highs. The Sensex opened at 76,089.72, never traded below that, and closed at 76,917.85, up 1,225.07 points or 1.62%; the Nifty went 23,582.25 to a 23,483.00 low and closed at 23,810.85, up 370.05 points or 1.58% \u2014 two-month highs on both, and a fourth straight gain. Monday's crude-short trades did not extend: Brent recovered about 1% to $105.60 a barrel after Monday's 7.6% slide to $104.77, so Oil & Gas went from +5.95% to flat and Metal from +3.21% to -0.14%. What replaced them was consumption and financials. Nifty FMCG rose 3.65% to 45,580 on Marico +8.77% to Rs 868.60 (September-quarter net profit up 31% to Rs 550 crore, FY27 guidance raised to mid-20s EBITDA growth), Britannia +6.36%, Nestle India +4.47%, Tata Consumer +4.29%, Radico Khaitan +3.66%, Colgate +3.60%, Hindustan Unilever +3.40% and ITC +2.82% despite an 18.7% fall in its own quarterly profit. Realty +2.33% to 841.40, Private Bank +1.98%, Financial Services +1.74%, Auto +1.71%, Infra +1.10% to 9,225.40, Bank +0.98% to 55,540.05 and Media +0.49% followed. The laggards were PSU Bank -1.27% to 8,241.10 \u2014 SBI fell 1.70% to Rs 970.25 even after a 14.28% rise in net profit to Rs 23,038 crore \u2014 with Energy -0.11%, Metal -0.14%, and Infosys -1.85% to Rs 1,139.50 the Nifty's single biggest drag on the day its Rs 26 interim dividend went ex. Two policy lines ran underneath: Finance Minister Nirmala Sitharaman said the government would consider reviewing capital gains taxes on foreign investors, and reports said SEBI had recommended scrapping long-term capital gains tax for foreign equity investors. The broader market underperformed for a second session \u2014 Midcap 150 +0.84%, Smallcap 250 +0.43%, Midcap 100 +1.06% to 58,596.25, Nifty 500 +1.25% to 22,520.35, Next 50 +0.96% to 69,624.35, BSE SME IPO +0.47% to 1,13,071.00. India VIX rose 1.42% to 15.72 on a 1.58% up-day, NSE breadth was 2,503 advances against 1,900 declines and 203 unchanged, and the rupee settled 13 paise stronger at 94.71 a dollar. In the Nifty 500 the extremes were earnings-driven: KRBL +10.59% and Trident +7.11% on profit beats, against KEC International -9.36% on an 82% fall in profit, GNFC -8.53%, MOIL -7.97% and Sheela Foam -6.98%."
    },
    {
      date: "2026-11-04",
      label: "Wed 4 Nov",
      niftyClose: 23960.6,
      niftyChangePct: 0.63,
      sensexChangePct: 0.5,
      note: "The fifth straight gain and the widest one: the Nifty closed at 23,960.60, up 149.75 points, having been down to 23,696.15 in the morning, and the Sensex added 383.55 to 77,301.40. Media +5.15% on Saregama's 14.91% post-results jump, Realty +2.85%, Metal +2.80% and Consumer Durables +2.04% led, and for the first time this week the Midcap 150 (+1.60%) and Smallcap 250 (+1.97%) beat the Nifty. IT was the only loser at -1.50%, with TCS -2.52% and Infosys -2.89%. NSE breadth 2,720 advances to 884 declines; VIX -3.24% to 15.21; Brent -0.73% to $102.80."
    },
    {
      date: "2026-11-05",
      label: "Thu 5 Nov",
      niftyClose: 24536.6,
      niftyChangePct: 2.4,
      sensexChangePct: 2.6,
      note: "The biggest single-day gain in seven months, and the sixth straight advance \u2014 the longest winning run since November 2025. The Nifty opened at 24,378.05, dipped to 24,296.30 and closed at 24,536.60, up 576.00 points or 2.40%, its highest close since early August; the Sensex ran from 78,910.94 to a 79,465.03 high and settled at 79,310.01, up 2,008.61 points or 2.60%. The trigger was overnight: Brent slid below $100 a barrel as Democrats swept the US midterms and hopes of a West Asia settlement hardened, US equities rallied, and foreign money kept arriving. The leadership was entirely financial and cyclical \u2014 Nifty Capital Markets +4.24%, Auto +4.14% to 27,601.75, Financial Services +4.01%, Realty +3.52% to 895.90, Private Bank +3.44%, Bank +3.33% to 57,773.65 and PSU Bank +3.13%, with Consumer Durables and IT +2.42% to 32,837.85 behind them. Only two sectors fell: Energy -0.52% to 36,884.45 on Reliance giving back part of Monday's 11.6% and Media -0.84%, while Chemicals was the day's worst basket on an equal-weighted basis. Bajaj Finance was the Sensex's best at +7.65%, with M&M +5.59%, Maruti +5.48%, IndusInd Bank +5.35% and ICICI Bank +5.33%; NTPC, Bharat Electronics, Adani Ports, ITC and Bharti Airtel (-0.52%) lagged. The broader market joined in but lagged the headline: Next 50 +1.38% to 71,768.65, Midcap 150 +1.93% to 22,290.40, Smallcap 250 +0.79% to 17,535.70, Midcap 100 +1.87%, Smallcap 100 +0.56%, Nifty 500 +2.00% to 23,224.70, and the BSE SME IPO index +1.99% to 1,15,864.00. Breadth on BSE was 2,868 advances against 1,384 declines and 169 unchanged; 126 of the 159 SME constituents rose. BSE-listed market capitalisation crossed Rs 501 lakh crore for the first time, adding roughly Rs 7.7 lakh crore of investor wealth in a session (newsdrum puts the gain at Rs 8.2 lakh crore). FIIs were net buyers of Rs 7,830.40 crore of equities on NSDL's numbers, against Rs 7,284.03 crore on NSE's provisional file; the rupee settled at 94.46-94.48 a dollar against 94.64 on Wednesday. India VIX closed at 15.58, up about 2.6% \u2014 it did not fall with the rally, which is the one internal contradiction in the session and the reason several strategists spent the afternoon warning about consolidation; Kotak Neo's tape printed 15.89 at the same moment, so treat the VIX level as approximate. Brent was $96.12 a barrel, up 1.59% on the day after the overnight slide."
    },
    {
      date: "2026-11-06",
      label: "Fri 6 Nov",
      niftyClose: 25030.35,
      niftyChangePct: 2.01,
      sensexChangePct: 2.17,
      note: "The seventh straight gain and the first close above 25,000 since 27 February, made by two banks and almost nothing else. The Nifty opened at 24,538.20, dipped to 24,388.00 and closed at its high of 25,030.35, up 493.75 points or 2.01%; the Sensex ran from 79,413.66 to 81,028.02, up 1,718.01 points or 2.17%, also at its high. ICICI Bank +4.75% to Rs 1,571.20 and HDFC Bank +3.72% to Rs 788.25 supplied most of the index arithmetic, with HDFC Life +3.95%, M&M +5.11%, Titan +3.42% and Bharti Airtel +2.45% behind them. The fuel was Thursday's foreign flow \u2014 FIIs bought Rs 14,975 crore of cash equities, the largest single-day purchase in nearly six years \u2014 plus a rupee at a six-month high of 93.90 against 94.41 and Brent 0.71% lower at $97.59. Sectorally it was a financials day and almost only that: Private Bank +3.22%, Financial Services +2.57%, Bank +2.27% to 59,086.00, Consumer Durables +1.70%, Pharma +1.21%, Infra +0.77%, Auto +0.76%, FMCG +0.67%, Metal +0.66% and IT only +0.43% to 32,977.90 despite a 5.52% overnight fall in the Nasdaq. What fell fell hard: Media -1.52%, Defence -0.92% and Energy -0.05%, with BSE Capital Goods -1.36% as Thermax collapsed 17.27% on a Q2 miss, Astral 9.68% on a 13.1% margin and Apar Industries 9.65%. Breadth was the tell: 1,438 NSE advances against 2,141 declines and 127 unchanged, the Midcap 150 -0.09% to 22,271.15, the Smallcap 250 -0.85% to 17,386.15, the Nifty 500 only +1.00% to 23,456.95 and the BSE SME IPO index +0.11% to 1,15,996.69 on 86 advances to 97 declines. India VIX rose 13.35% to 17.66 while the index rose 2.01%. The next session is the Muhurat trading hour on Sunday, 8 November, 2:20 pm to 3:30 pm."
    }
  ],

  sectors: [
    {
      name: "Nifty Financial Services",
      changePct: 10.41,
      note: "The week's engine, up 10.41% to 27,283.95, and the sector that did the arithmetic on the index: 46 of the 50 Nifty stocks rose, and the five biggest contributors \u2014 Shriram Finance +16.8%, Bajaj Finance +15.8%, M&M +15.7%, HDFC Bank +13.8% and Reliance +13.3% \u2014 are four financials and an energy major. Within it, Nifty NBFC was the best of all 71 NSE sectoral and thematic indices at +13.59% and Financial Services Ex-Bank +10.69%, which tells you the buying was about the lending cycle rather than about the two big banks alone. (Oquilia's week table, built on NSE closing values, and Upstox's weekly wrap; NSE's own Friday file carries the 27,283.95 close.)"
    },
    {
      name: "Nifty Realty",
      changePct: 10.17,
      note: "Second at 10.17% to 896.70, and the purest expression of the week's macro: a 16% weekly fall in crude and a rupee at a six-month high do more for a domestic rate-sensitive sector than for anything else, and the midcap end of it followed \u2014 Godrej Properties was among the Midcap 100's top five weekly gainers at +15.4%. Realty had spent most of this year underperforming; it ended the week at the top of the table. (Oquilia's week table; Upstox's weekly wrap names Realty as the week's leader at 10.2%.)"
    },
    {
      name: "Nifty Consumer Durables",
      changePct: 10.08,
      note: "Third at 10.08% to 38,003.60, a Diwali-consumption trade rather than an earnings one: Titan rose 12.70% for the week and Asian Paints 9.74%, both of which had been derated through the year, and the sector's Friday gain of 1.78% came with crude falling, which is the input cost line for paints and adhesives. (Oquilia's week table for the 10.08% and the close; Upstox's weekly wrap for the 10.1%; the stock returns are Oquilia's weekly Nifty 50 table.)"
    },
    {
      name: "Nifty Oil & Gas",
      changePct: 9.56,
      note: "Fourth at 9.56% to 11,288.10, and the strangest of the leaders: the sector rose while crude fell 16%, because the index is weighted to refiners and gas distributors for whom the fall is an input-cost and a margin event. Reliance Industries did most of it, +13.31% for the week. The Friday session was mild (+0.64%) after Thursday's surge. (Oquilia's week table for the return and close; Upstox's weekly wrap for 9.6%.)"
    },
    {
      name: "Nifty Auto",
      changePct: 9.4,
      note: "Fifth at 9.40% to 27,811.80, led by the same domestic-cyclical logic: M&M +15.73%, Maruti Suzuki +11.87%, Balkrishna Industries +16.28% and, in the midcap index, Ashok Leyland +18.8%. Cheaper crude and a stronger rupee cut both the fuel cost and the imported-component cost, and the sector's Friday move of 0.76% was its weakest of the week. (Oquilia's week table; Upstox's weekly wrap for 9.4% and the Midcap 100 gainers list.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 9.06,
      note: "Sixth at 9.06% to 29,503.40, and Friday's single best sector at +3.22%: HDFC Bank +13.78% for the week, ICICI Bank +12.39% (a 52-week high, 17.0% in a month), Axis Bank +8.70%. The week's largest FII purchase in nearly six years went to the most liquid, highest-weight lenders first, which is what the composition of both the week and the day shows. (Oquilia's week table; NSE's Friday file for the 29,503.40 close; Upstox's weekly wrap for 9.1%.)"
    },
    {
      name: "Nifty Bank",
      changePct: 8.04,
      note: "Seventh at 8.04% to 59,086.00, which on Friday meant +2.27% and 1,312.35 points. The private banks did nearly all of it; the PSU banks, a separate index, managed only +4.59% for the week, and State Bank of India actually fell 1.70% on Tuesday despite a 14.28% rise in quarterly net profit. (NSE's ind_close_all_06112026.csv for the 59,086.00 close, +1,312.35 and +2.27%; Oquilia's week table for +8.04% and the 4,399.05 weekly points.)"
    },
    {
      name: "Nifty Metal",
      changePct: 7.58,
      note: "Eighth at 7.58% to 12,678.15, with Tata Steel +11.16% for the week, JSW Steel +8.92% and Hindalco +8.33%. Metals ran on Monday's crude-and-dollar move rather than on China: the sector's best session was 2 November (+3.21%), when Brent fell 4.42% and the rupee began its recovery. (Oquilia's week table for the return and close; the stock returns are Oquilia's weekly Nifty 50 table; NSE's Friday file for the 12,678.15 level.)"
    },
    {
      name: "Nifty Infra",
      changePct: 7.36,
      note: "Ninth at 7.36% to 9,446.80. The number is respectable and still 122 basis points behind the Nifty, which is the week's quiet lesson: the infrastructure and capital-goods complex participated in the rally without leading it, and its Friday session was one of the few positives (+0.77%) while the small-cap indices fell. (Oquilia's week table for Nifty Infrastructure at 9,446.80 and +7.36%; the Friday figure is from the session's sector table.)"
    },
    {
      name: "Nifty FMCG",
      changePct: 7.28,
      note: "Tenth at 7.28% to 46,785.60, and Tuesday's best sector at +3.65% on Marico's September-quarter net profit of Rs 550 crore, up 31%, with FY27 EBITDA growth guidance raised to the mid-20s. Nestle India +9.86% and Hindustan Unilever led the week; ITC rose 2.82% on Tuesday despite an 18.7% fall in its own quarterly profit. (Oquilia's week table for the return and close; the Tuesday session detail is from the day's own wrap.)"
    },
    {
      name: "Nifty Energy",
      changePct: 5.46,
      note: "Eleventh at 5.46% to 36,867.30, roughly half the market's week. The index is weighted to Reliance, which rose 13.31%, and to the power utilities, which did not: Nifty Power was up only 3.70% for the week, and Power Grid was one of only three Nifty 50 stocks to fall, down 1.92%. (Oquilia's week table for the 36,867.30 close and +5.46%; Power Grid's -1.92% is on the same weekly table.)"
    },
    {
      name: "Nifty Pharma",
      changePct: 3.01,
      note: "Twelfth at 3.01% to 27,940.40, less than half the market, and a defensive that behaved like one in a week when defensives were not wanted. Friday's +1.21% was its best session. The Indian IT and pharma complex was where foreign money was not going, which is the mirror image of the financials trade. (Oquilia's week table for the return and close; NSE's Friday file for the 27,940.40 level.)"
    },
    {
      name: "Nifty Defence",
      changePct: 2.58,
      note: "Thirteenth at 2.58% to 8,929.40. Defence has been the market's highest-multiple theme for two years and it was left behind in a week that rewarded banks and consumer names: the order-book story does not re-rate when the discount rate debate is about crude and flows. (Oquilia's week table for the return and close.)"
    },
    {
      name: "Nifty Media",
      changePct: 2.41,
      note: "Fourteenth at 2.41%, and the only sector that fell on Friday (-1.52%). Media is small, high-beta and full of the loss-making new-age names, and its Friday fall while the Nifty rose 2.01% is a reminder of how narrow the buying was. (Oquilia's week table for the weekly return; the Friday move is from the session's sector table.)"
    },
    {
      name: "Nifty Capital Goods",
      changePct: 2.29,
      note: "Fifteenth at 2.29%, and the week's real story on the losing side. This is the complex the AI-infrastructure unwind hit: Thermax -17.27% on Friday, TD Power -19.25% for the week, MTAR -20.32%, AIA Engineering -13.41%, Apar Industries -10%. Each was a high-multiple industrial bought for growth and each was repriced on a single quarter's margin line, in a week when the index rose 8.58%. (Oquilia's week table for +2.29%; the individual returns are from Oquilia's Nifty 500 weekly losers table and Upstox's weekly wrap.)"
    },
    {
      name: "Nifty IT",
      changePct: 1.14,
      note: "Last at 1.14% to 32,977.90 \u2014 and this is the number that explains the week. Wall Street's AI-infrastructure rout took Nvidia -9%, Micron -17.5% and the S&P 500 -4.36% on Thursday night, and Indian IT barely moved: Infosys fell 0.30% for the week, TCS 0.16%, and both were among the only three Nifty 50 decliners. The same foreign money leaving AI infrastructure was arriving in Indian financials, so the sector that should have been hit hardest was the one that absorbed the least. (Oquilia's week table for the 32,977.90 close and +1.14%; NSE's Friday file for the level; Upstox's weekly wrap for the Infosys -0.3% and TCS -0.2%.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week",
    source: "NIFTY 500 weekly price returns measured from the 30 October 2026 close to the 6 November 2026 NSE close, taken from Oquilia's full-universe weekly ranking built on NSE bhavcopy prices adjusted for splits and bonuses, and cross-read against Upstox's weekly wrap (which carries the Nifty 50, Midcap 100 and Smallcap 100 lists separately), Trendlyne's Nifty 500 weekly losers screen and NSE's own index file. The universe is the full 500 \u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \u2014 so a name that sits outside the headline sub-indices still ranks. Honest limitation: the weekly ranking is one provider's bhavcopy reconstruction, and while every one of the ten names above is confirmed by a second source on the direction and rough size of the move, the exact two-decimal return for AIA Engineering rests on that single table; a stock that moved more inside the week but closed 30 October or 6 November on a circuit could legitimately rank higher on either list. Breadth context: 428 of 497 Nifty 500 stocks rose and 69 fell this week, and the median Nifty 500 stock gained 5.5%.",
    gainers: [
      {
        name: "HEG Advanced Materials",
        changePct: 23.68,
        cap: "Smallcap",
        note: "The Nifty 500's biggest gainer of the week, up 23.68% to Rs 293.87 \u2014 and the move is a re-rating rather than an event, which is what makes it interesting: HEG ended the week 0.52% below its 52-week high and has added 16.52% in a month, so the entire week's gain was a recovery to a level the stock had already traded at inside the last twelve months. It also rose against its own sector, Capital Goods, which was one of the week's two worst at +2.29%: the graphite-electrode maker is a play on electric-arc-furnace steel output and needle-coke costs, not on the AI-infrastructure capex that broke the rest of the complex. (Oquilia's Nifty 500 weekly gainers table, built on split- and bonus-adjusted NSE closing prices from 30 October to 6 November.)"
      },
      {
        name: "Cartrade Tech",
        changePct: 23.3,
        cap: "Smallcap",
        note: "Second at 23.30% to Rs 2,700.00. Cartrade is the used-vehicle classifieds platform, and its week tracks the same domestic-cyclical trade that took Nifty Auto up 9.40% and the Nifty up 8.58% \u2014 a 16% weekly fall in Brent is a direct boost to the used-car market's running costs. Note the scale of the move against the sector: +23.30% for the stock against +9.40% for the auto index is a high-beta, low-float response, the same pattern the small end showed all week. (Oquilia's Nifty 500 weekly gainers table.)"
      },
      {
        name: "UNO Minda",
        changePct: 22.49,
        cap: "Midcap",
        note: "Third at 22.49% to Rs 1,326.00. The auto-ancillary maker is the purest midcap expression of the week's best-performing cyclical: Nifty Auto rose 9.40%, M&M 15.73% and Maruti Suzuki 11.87%, and the components suppliers geared into that move. UNO Minda sits in the Midcap 150, which rose 5.81% for the week, so it beat its own index by 1,668 basis points. (Oquilia's Nifty 500 weekly gainers table; the sector and index returns are from the same week table and NSE's index file.)"
      },
      {
        name: "Linde India",
        changePct: 21.37,
        cap: "Midcap",
        note: "Fourth at 21.37% to Rs 6,859.00. Industrial gases are an input to steel, glass, cement and refining, and all four of those complexes were being bought this week \u2014 Nifty Metal +7.58%, Cement +10.37%, Oil & Gas +9.56%. It is also the kind of high-price, low-float industrial that moves hard when institutional money rotates into the space, which is what a Rs 22,693 crore FII month does. (Oquilia's Nifty 500 weekly gainers table; the sector returns are from Oquilia's week table.)"
      },
      {
        name: "Muthoot Finance",
        changePct: 19.11,
        cap: "Largecap",
        note: "Fifth at 19.11% to Rs 2,869.00, and the only largecap on either list \u2014 Muthoot sits in the Nifty Next 50, which rose 5.83% for the week, so the stock beat its own index by 1,328 basis points. The driver is the sector: Nifty NBFC was the best of all 71 NSE sectoral and thematic indices at +13.59%, and the gold-loan lender is the largest name in it. A stronger rupee and a 16% fall in crude do nothing for gold loans; a Rs 22,693 crore foreign inflow into domestic financials does. (Oquilia's Nifty 500 weekly gainers table; the NBFC index return is on Oquilia's week table.)"
      }
    ],
    losers: [
      {
        name: "MTAR Technologies",
        changePct: -20.32,
        cap: "Smallcap",
        note: "The Nifty 500's worst stock of the week, down 20.32% to Rs 5,448.50, and the top loser on the Nifty Smallcap 100 as well. MTAR is precision engineering for defence and clean-energy customers \u2014 exactly the high-multiple, order-book-led industrial that the AI-infrastructure unwind repriced, and it fell in a week when the Nifty rose 8.58% and its own sector, Capital Goods, was one of the two worst at +2.29%. (Oquilia's Nifty 500 weekly losers table for the -20.32% and the close; Upstox's weekly wrap independently puts it at -20.3% as the Smallcap 100's biggest loser.)"
      },
      {
        name: "TD Power Systems",
        changePct: -19.25,
        cap: "Smallcap",
        note: "Second at -19.25% to Rs 576.50, of which 13.85% came on Friday alone after the September-quarter print. TD Power makes generators for the same industrial and data-centre demand that had been the market's favourite story for two years; a single quarter's margin line was enough to take a fifth of the market value out in five sessions. It is the cleanest example of the week's split: the index rose on flows into financials while the capex trade was being dismantled underneath it. (Oquilia's Nifty 500 weekly losers table for the weekly figure; Upstox's weekly wrap for -19.2%; the Friday -13.85% is from the session's own movers table.)"
      },
      {
        name: "PI Industries",
        changePct: -17.38,
        cap: "Midcap",
        note: "Third at -17.38% to Rs 1,735.00, and the stock that set the pattern: PI Industries broke on its quarterly print on Thursday, before Friday's capex rout, and it was the Midcap 100's biggest weekly loser. The agrochemical maker is a midcap at a growth multiple, and the market's tolerance for a single disappointing quarter has gone to zero \u2014 the same reaction Cummins India and Thermax got in the same week. (Oquilia's Nifty 500 weekly losers table; Upstox's weekly wrap for -17.4% and its Midcap 100 losers list.)"
      },
      {
        name: "AIA Engineering",
        changePct: -13.41,
        cap: "Midcap",
        note: "Fourth at -13.41% to Rs 3,113.60. AIA makes high-chrome grinding media for cement and mining mills \u2014 a genuinely good business on a rich multiple, and one whose volumes are tied to the same industrial capex that the week's selling targeted. Its fall came while Nifty Cement rose 10.37% for the week, which is the point: the market sold the equipment supplier while buying the end-user. (Oquilia's Nifty 500 weekly losers table for the return and close; the cement index return is on Oquilia's week table.)"
      },
      {
        name: "Sterlite Technologies",
        changePct: -12.69,
        cap: "Smallcap",
        note: "Fifth at -12.69% to Rs 719.90. The optical-fibre and cables maker belongs to the complex that was repriced hardest this week alongside Apar Industries (-10% for the week per Upstox) \u2014 the wires-and-cables trade that had run on data-centre and grid capex and is now being marked down on the same AI-infrastructure unwind that left Nifty IT up only 1.14%. (Oquilia's Nifty 500 weekly losers table for the weekly figure; Upstox's weekly wrap for -12.7%.)"
      }
    ],
    sensexWinners: ["Shriram Finance +16.76%", "Bajaj Finance +15.83%", "Mahindra & Mahindra +15.73%", "HDFC Bank +13.78%", "Reliance Industries +13.31%"],
    sensexLaggards: ["Power Grid Corporation -1.92%", "Infosys -0.30%", "Tata Consultancy Services -0.16%", "Apollo Hospitals flat"],
    sensexNote: "Sensex 30 members over the same five sessions: the index added 6,568.49 points, or 8.82%, to 81,028.02. Because 46 of the Nifty 50’s members rose for the week, the Sensex’s own decliners were confined to the same short list — Power Grid -1.92%, Infosys -0.30% and TCS -0.16%, the two IT names being the sector that absorbed the Nasdaq rout rather than transmitting it — with Apollo Hospitals flat. Weekly returns from Oquilia’s Nifty 50 week table, consistent with Upstox’s weekly wrap; the 81,028.02 close and 6,568.49 points are Zee Business’s and Business Standard’s arithmetic from the 74,459.53 base."
  },

  watch: [
    {
      title: "Muhurat trading is the next session, not Monday \u2014 Sunday, 8 November, 2:20 pm to 3:30 pm",
      detail: "NSE and BSE hold the special Diwali Laxmi Pujan session on Sunday, 8 November, from 2:20 pm to 3:30 pm with the pre-open from 2:05 pm, opening Samvat 2083. It is a one-hour session with a thin book, and its only real use is as a sentiment print after a week in which the Nifty added 8.58% and the Sensex 8.82%: 428 of 497 Nifty 500 stocks rose this week, so a Muhurat close with weak breadth would be the first crack in a rally that has so far been carried by flows rather than by participation. Watch whether the private banks and NBFCs that led hold their levels, and whether the small-cap indices stop falling."
    },
    {
      title: "Whether a Rs 22,693 crore flow can broaden past the top of the market",
      detail: "The Nifty rose 8.58% and the Nifty 500 7.13%; the Midcap 150 rose 5.81% and the Smallcap 250 3.71%, and the median Nifty 500 stock gained 5.5% \u2014 308 basis points behind the headline index. Foreigners bought the large caps and left the rest: that is the difference between a week like this and a real turn. The thing to watch is whether the money rotates down the market-cap ladder now that the heavyweights have re-rated, or whether it stays in the top twenty names and the rally stays two sectors wide."
    },
    {
      title: "India VIX at 17.47, up 14.18% for the week, on a week the Nifty rose 8.58%",
      detail: "Volatility rising alongside the index is the one internal contradiction of the week. VIX at 17.47 is near a two-month high, and it rose 14.18% while the Nifty gained 8.58% \u2014 which means options buyers were paying up for protection into Diwali and the US data calendar rather than chasing the upside. The clean confirmation of the rally would be VIX back below 15; a move above 19 would say the market is pricing an event rather than a trend, and it would be the first thing to look at if the Muhurat session opens strong and fades."
    },
    {
      title: "Crude's 16% weekly collapse is now the market's biggest single input",
      detail: "Brent fell more than 16% for the week to $97.75 a barrel, its steepest weekly percentage fall since the pandemic and its largest in absolute terms in LSEG data going back to 1988, after the US midterm result turned in favour of the Democratic Party and commodity investors began pricing an end to the West Asia escalation. Everything that led this week led because of it: Oil & Gas +9.56%, Auto +9.40%, Consumer Durables +10.08%, Realty +10.17%, and a rupee that strengthened to 93.90. If crude reverses, those are the five sectors that give the gains back first, and the FII flow that arrived with it becomes the question rather than the answer."
    },
    {
      title: "The Q2 tail: Capital Goods was among the week's two worst sectors in an 8.58% week",
      detail: "Thermax -17.27% on Friday, PI Industries -17.38% for the week, TD Power -19.25%, MTAR -20.32%, AIA Engineering -13.41%, Apar Industries -10%, Astral -9.68% on Friday: seven names, all double-digit falls, in a week when the Nifty rose 8.58%. Each was a high-multiple industrial or building-material stock bought for growth and each was repriced on one quarter's margin line. Any remaining Q2 print in that complex \u2014 capital goods, cables, chemicals, building materials \u2014 is a binary event, and the fact that Nifty Capital Goods managed only +2.29% while the market added 8.58% says the repricing is already under way rather than finished."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty surge 9% in best weekly rally since Feb 2021; Rs 28.70 lakh crore added\u2013Muhurat trading in focus",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-weekly-market-wrap-sensex-nifty-surge-nearly-9-best-weekly-rally-since-feb-2021-rs-2870-lakh-crore-added-muhurat-trading-in-focus-405246"
    },
    {
      title: "Market weekly wrap: SENSEX jumps 6,568 pts, NIFTY50 rallies 9% as FIIs return; top factors explained",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-weekly-wrap-sensex-jumps-6-568-pts-nifty-50-rallies-9-as-fi-is-return-top-factors-explained/article-203148/"
    },
    {
      title: "Diwali Fireworks! Nifty surges over 8% in Nov 2-6 week, best in 6 yrs after US Midterm Election results; RIL soars 13%",
      source: "Livemint",
      url: "https://www.livemint.com/market/stock-market-news/diwali-fireworks-nifty-surges-over-8-in-nov-2-6-week-best-in-6-yrs-after-us-midterm-election-results-ril-soars-13-11794030783772.html"
    },
    {
      title: "Indian stocks buck global tech rout, post best week in 6 years",
      source: "Business Recorder / Reuters",
      url: "https://www.brecorder.com/news/40447766/indian-stocks-buck-global-tech-rout-post-best-week-in-6-years"
    },
    {
      title: "Weakest Samvat in 15 years ends on a high for mkts as Sensex, Nifty rally",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/weakest-samvat-in-15-years-ends-on-a-high-for-mkts-as-sensex-nifty-rally-126110601769_1.html"
    }
  ],

  ratio: {
    name: "Debt-to-Equity Ratio",
    category: "Leverage / capital structure",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 318 = PDF p. 288, printed p. 316 = PDF p. 286, printed p. 320 = PDF p. 290); every page cited below is the printed page number.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Debt-to-Equity = Total debt \u00f7 Total shareholders' equity, both read off the Consolidated Balance Sheet at 31 March 2026. \u2018Debt\u2019 here is every financial liability that carries a financing cost \u2014 borrowings, plus the lease liabilities Ind AS 116 requires a company to recognise \u2014 and equity is total equity, including the non-controlling interest. The answer is a multiple: how many rupees are owed to lenders and lessors for every rupee the owners have in the business. Anything under 1 means the owners are financing more of the company than the lenders are.",
    formulaNote: "Debt-to-equity is the ratio Indian screens get most confidently and most wrongly, and Infosys is the reason to work it rather than read it. Open the Consolidated Balance Sheet at printed p. 317 and look for a borrowings line: there isn't one. Not zero \u2014 absent. The company carries no bank debt, no bonds, no commercial paper. Every rupee a screen labels as Infosys' \u2018borrowings\u2019 is a lease liability: Rs 6,016 crore due after a year and Rs 3,160 crore due within one, Rs 9,176 crore in all, sitting against Rs 6,177 crore of right-of-use assets on the other side of the balance sheet. So the same company is \u2018debt-free\u2019 on one definition and carries Rs 9,176 crore of debt on another, and both statements are true. The second trap is the direction of travel. The ratio rose from 8.55% to 9.83% in FY26, and almost none of that is new borrowing: debt grew Rs 949 crore, or 11.5%, while equity fell Rs 2,906 crore, or 3.0%, because an Rs 18,000 crore buyback completed during the year and the year's dividend outran the Rs 29,474 crore of profit that was added. A leverage ratio rising while the business borrows nothing is a capital-return story, not a credit story, and the only way to know that is to look at which side of the fraction moved. The third point is what the ratio cannot tell you: for an asset-light services company whose real obligations are payables, unearned revenue and client receivables, leverage says almost nothing about risk, and a manufacturer at 0.10 would be telling you something completely different.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      {
        label: "Total equity, 31 March 2026 \u2014 the denominator: equity attributable to owners plus the non-controlling interest",
        value: "Rs 93,297 crore",
        page: "p. 317"
      },
      {
        label: "Equity attributable to owners, 31 March 2026 \u2014 equity share capital plus retained earnings",
        value: "Rs 92,852 crore",
        page: "p. 317"
      },
      {
        label: "Non-controlling interests, 31 March 2026",
        value: "Rs 445 crore",
        page: "p. 317"
      },
      {
        label: "Lease liabilities (non-current), 31 March 2026 \u2014 rent due after a year, recognised under Ind AS 116",
        value: "Rs 6,016 crore",
        page: "p. 317"
      },
      {
        label: "Lease liabilities (current), 31 March 2026 \u2014 rent due within a year",
        value: "Rs 3,160 crore",
        page: "p. 317"
      },
      {
        label: "Borrowings, 31 March 2026 \u2014 nil: the balance sheet carries no borrowings caption at all",
        value: "Nil",
        page: "p. 317"
      },
      {
        label: "Right-of-use assets, 31 March 2026 \u2014 the asset side of the same leases, for the reconciliation in step 2",
        value: "Rs 6,177 crore",
        page: "p. 316"
      },
      {
        label: "Cash and cash equivalents, 31 March 2026 \u2014 for the net-debt calculation in step 5",
        value: "Rs 22,201 crore",
        page: "p. 316"
      },
      {
        label: "Investments (current), 31 March 2026 \u2014 mutual funds and other liquid holdings, also netted in step 5",
        value: "Rs 12,950 crore",
        page: "p. 316"
      },
      {
        label: "Total equity, 31 March 2025 \u2014 the prior-year denominator, for the year-on-year move",
        value: "Rs 96,203 crore",
        page: "p. 317"
      },
      {
        label: "Buyback of equity shares completed during FY26 \u2014 the reason equity fell despite a profitable year",
        value: "Rs 18,000 crore",
        page: "p. 320"
      },
      {
        label: "Profit for the year, FY26 \u2014 context for the equity movement, not an input to the ratio",
        value: "Rs 29,474 crore",
        page: "p. 318"
      }
    ],
    working: "Step 1 \u2014 Read equity off the balance sheet (printed p. 317) and rebuild it before trusting it: equity attributable to owners Rs 92,852 crore + non-controlling interests Rs 445 crore = Rs 93,297 crore total equity. Step 2 \u2014 Read the debt side the same way. There is no borrowings caption anywhere on the balance sheet, so the numerator is entirely leases: non-current Rs 6,016 crore + current Rs 3,160 crore = Rs 9,176 crore. Sanity-check it against the asset side: right-of-use assets on printed p. 316 are Rs 6,177 crore, and the two are not required to match: the liability carries future escalations and renewals that the asset, measured at the remaining right of use, does not. Step 3 \u2014 Divide: 9,176 \u00f7 93,297 = 0.0983, or 0.10 times \u2014 9.83%. Step 4 \u2014 Do the same for the prior year so the number means something: Rs 8,227 crore of lease liabilities (Rs 5,772 crore non-current + Rs 2,455 crore current, printed p. 317) \u00f7 Rs 96,203 crore = 0.0855, or 0.09 times. Step 5 \u2014 Net it off, because a leverage ratio that ignores cash is a half-fact: 9,176 \u2212 22,201 = a negative Rs 13,025 crore, so net debt-to-equity is \u22120.14; add the Rs 12,950 crore of current investments and net cash is Rs 25,975 crore, or \u22120.28 times equity. Step 6 \u2014 Do the strict version, which is the one the report's own balance sheet supports: borrowings of nil \u00f7 93,297 = 0.00. Step 7 \u2014 Explain the move rather than the level: debt rose Rs 949 crore (8,227 \u2192 9,176), or 11.5%, while equity fell Rs 2,906 crore (96,203 \u2192 93,297), or 3.0%, on a year in which Rs 29,474 crore of profit was earned but Rs 18,000 crore went out in a buyback and the dividend took the rest. 9,176 \u00f7 93,297 = 9.83% against 8,227 \u00f7 96,203 = 8.55%.",
    result: "0.10 times (9.83%) including lease liabilities; 0.00 on borrowings alone, and a net cash position of Rs 13,025 crore",
    meaning: "A debt-to-equity of 0.10 says the owners finance about ten rupees of the business for every rupee owed to lessors, and that the company has no bank debt to speak of. But the number to hold on to is that the ratio rose from 0.09 to 0.10 in a year in which the company borrowed nothing: equity fell 3.0% because Rs 18,000 crore of buyback and the year's dividend went out against Rs 29,474 crore of profit, while the Rs 9,176 crore of 'debt' is entirely rent on offices it occupies. For an investor the practical read is that leverage is not where Infosys' risk lives — with Rs 22,201 crore of cash, Rs 12,950 crore of liquid investments and no borrowings, the balance sheet is a non-issue. The risk is in the Rs 35,234 crore of trade receivables and in the clients behind them, and in a share count that the buyback keeps shrinking, which flatters every per-share number on the page. Watch the lease line, not the borrowings line: it has grown every year since Ind AS 116 arrived, and it is the only thing that can move this ratio at all.",
    crossCheck: "Reconciled three ways. First, internally: 92,852 + 445 = 93,297 and 6,016 + 3,160 = 9,176 are both rebuilt from the report's own printed lines, and 8,227 for the prior year is the sum of the same two captions on the comparative column \u2014 nothing here is a provider's regroup. Second, against Screener.in's consolidated balance sheet, which prints \u2018Borrowings\u2019 of Rs 9,176 crore for March 2026 and Rs 8,227 crore for March 2025, and shareholder funds of Rs 92,852 crore (equity capital 2,024 + reserves 90,828): the \u2018borrowings\u2019 are exactly the lease liabilities, which is the whole point of this page. CRISIL's June 2026 rating rationale says the same thing in words, describing Infosys' total debt as completely attributed to lease financing. Third, against a published ratio: MarketXLS carries debt-to-equity of 0.10 for 31 March 2026 and 0.09 for 31 March 2025, and Trendlyne's leverage screen sits in the same 0.09\u20130.10 band \u2014 so the 9.83% computed here is the provider consensus at two decimals, arrived at from the audited Ind AS statements rather than from a screen.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed pp. 316\u2013317 (PDF pp. 286\u2013287) for total equity, equity attributable to owners, non-controlling interests, lease liabilities, the absence of any borrowings caption, right-of-use assets, cash and cash equivalents and current investments; Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288) for the Rs 29,474 crore profit used as context; Consolidated Statement of Changes in Equity, printed p. 320 (PDF p. 290) for the Rs 18,000 crore buyback. Cross-checked against Screener.in's consolidated balance sheet for March 2026 and March 2025, CRISIL's June 2026 rating rationale, MarketXLS's debt-to-equity series and Trendlyne's leverage screen."
  }
};
