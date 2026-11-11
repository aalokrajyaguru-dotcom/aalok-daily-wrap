const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 11 November 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of the 11 November 2026 close (3:30 PM IST); every day move measured from the 9 November close \u2014 the market was shut on Tuesday, 10 November for Diwali-Balipratipada \u2014 and every weekly move from the 6 November close",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition \u2014 they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee \u2014 a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25255.05,
      dayChange: 210.40,
      dayChangePct: 0.84,
      weekChangePct: 0.90, // vs the 6 Nov (prior Friday) close of 25,030.35
      spark: [24536.60, 25030.35, 24986.40, 25044.65, 25255.05], // last 5 closes: 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov \u2014 10 Nov was a holiday
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The ninth straight gain, and the first time since February that the index has closed two sessions in a row above 25,000. The Nifty opened at 25,337.80 \u2014 a 293-point gap on Monday's 25,044.65 \u2014 ran to 25,424.35 in the first hour, gave most of it back to a 25,095.35 low, and settled at 25,255.05, up 210.40 points or 0.84%. That is the highest close since 26 February 2026. The shape is the story: a gap-up that was 70% surrendered is a day of distribution into strength rather than accumulation, and the technical read from two brokers is the same one \u2014 HDFC Securities calls 25,400-25,500 strong overhead resistance and puts support at 24,800-24,700, while LKP Securities calls the index overbought and expects a retracement towards 25,000-24,800. The closing auction added to the noise: Moneycontrol recorded the Nifty at an indicative 25,600 before the 3:30 pm print came in at 25,255. Against the 6 November close the week-to-date is +0.90%, and against 1 October the index is up 8.6% in six trading sessions. (NSE's own index file carries 25,255.05, +210.40 and +0.84% with a 25,424.35 high and a 25,095.35 low; the same four numbers appear in PTI via The Hindu, Business Standard, Moneycontrol, India Today, Zee Business, ET Now and researchandinvest's 11 Nov index table.)"
    },
    {
      name: "Nifty Next 50",
      close: 73486.20,
      dayChange: 696.75,
      dayChangePct: 0.96,
      weekChangePct: 2.55, // vs the 6 Nov (prior Friday) close of 71,657.80
      spark: [71768.65, 71657.80, 71991.70, 72789.45, 73486.20], // last 5 closes: 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov
      returns: { oneY: 3.40, threeY: 16.58, fiveY: 10.70 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Second-best of the five cards and the second session running in which the rung below the Nifty has led it: +696.75 points, or 0.96%, to 73,486.20, having traded 73,099.05 to 73,771.55. Over the week it is +2.55% against the Nifty's +0.90%, so the rotation down the market has now persisted through the Diwali break rather than ending with it. The composition explains it again: this basket holds Bank of Baroda (+5.77% to Rs 275 on the day), Punjab National Bank (+4.77% to Rs 138.48), IRFC (+3.83%) and Motherson (+4.81%), and it holds no meaningful IT weight. Note the index is 1.9% below its 52-week high of 75,000.40 \u2014 it was there on 11 November 2026 with the whole of November's foreign bid still arriving. (researchandinvest's 11 Nov index table and Goodreturns' NSE sector watch both carry 73,486.20, +0.96%, the 73,771.55 high and the 72,789.45 previous close; Anand Rathi's 11:44 am snapshot carried 73,655.20 and +1.19%, an intraday print rather than a close.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22597.95,
      dayChange: 189.40,
      dayChangePct: 0.85,
      weekChangePct: 1.47, // vs the 6 Nov (prior Friday) close of 22,271.15
      spark: [22290.40, 22271.15, 22327.85, 22408.55, 22597.95], // last 5 closes: 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov
      returns: { oneY: 1.59, threeY: 14.20, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Up 189.40 points, or 0.85%, to 22,597.95 \u2014 fractionally ahead of the Nifty's 0.84% and the first session in a fortnight in which the mid-cap ladder did not lag. It ran 22,504.80 to 22,692.15, so the close is 94 points under the high: bought early, sold into the afternoon, held the gain. The internal split is worth noting because it inverts Monday's: Nifty Midcap 50 rose 0.93% and Midcap 100 0.81%, while this 150-stock index did 0.85% \u2014 for once the smaller names did not drag. The movers inside it were the day's theme in miniature: Kalyan Jewellers +8.63% to Rs 663.75, FACT +8.67% to Rs 813.25 and Coromandel International +5.95% to Rs 1,991 on the consumer and chemicals bid, against Cochin Shipyard -6.82% to Rs 1,202 and Vijaya Diagnostic -3.69%. (researchandinvest's 11 Nov table for 22,597.95, +0.85%, the 22,692.15 high, the 22,504.80 low and the 22,408.55 previous close; Moneycontrol and Business Standard carry the Midcap 100 at +0.81% and capitalmarket.com carried the Midcap 150 at +0.63% at 2:25 pm, an intraday print.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17798.15,
      dayChange: 221.15,
      dayChangePct: 1.26,
      weekChangePct: 2.37, // vs the 6 Nov (prior Friday) close of 17,386.15
      spark: [17535.70, 17386.15, 17594.10, 17577.00, 17798.15], // last 5 closes: 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov
      returns: { oneY: 1.90, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The day's best of the five cards, and the reversal of Monday's pattern: +221.15 points, or 1.26%, to 17,798.15, from a 17,680.95 low to a 17,883.40 high. Over the week it is +2.37%, second only to the Next 50. The detail that matters is the nesting \u2014 Smallcap 50 rose 1.46% and Smallcap 100 1.59%, both faster than this wider 250-stock pool at 1.26%, which means the smallest tail of the index lagged the leaders on the day even as the index itself rose. That is a healthier shape than Monday's, when the tail dragged the index under water while the 100 rose. Nine of the ten biggest gainers in the whole Nifty 500 universe were small caps. (researchandinvest's 11 Nov index table for 17,798.15, +1.26%, the 17,883.40 high, the 17,680.95 low and the 17,577.00 previous close; Moneycontrol and Business Standard both carry the Smallcap 100 at +1.59% and Upstox's wrap calls the Smallcap 100 the day's outstanding index.)"
    },
    {
      name: "BSE SME Index",
      close: null, // today's close not published by any provider reachable at the time of this edition \u2014 see the note
      dayChange: null,
      dayChangePct: null,
      weekChangePct: null,
      spark: [113592.99, 115864.00, 115996.69, 117740.39, 116940.52], // 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov \u2014 today's close unverified, so the spark ends at the last confirmed close
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Left blank rather than guessed, for the second edition running, and Monday's missing print is now filled in: BSE Indices' own series and Anand Rathi's closing-price table both carry 1,16,940.52 for 9 November, down 799.87 points or 0.68% from the Muhurat close of 1,17,740.39 \u2014 which is what Monday's intraday snapshots had pointed to and what the last edition could not confirm. Wednesday then opened at 1,16,928.75 and traded up: 5paisa printed 1,17,888.83 (+0.81%) at 12:40 pm, Angel One 1,17,858.63 (+0.79%) at 1:16 pm and Dhan 1,17,925.66 (+0.84%) at 11:43 am, on a day range of 1,16,847.48 to 1,18,074.61, with 72 of the 163 constituents up and 49 down at that point. None of those is a close, and no provider reachable at 5:30 pm had published a post-close print \u2014 BSE Indices' chart series still ended at 9 November. So the card shows no level for today, the spark runs to the last confirmed close, and the level will be filled in on the next edition. What can be said without guessing: the index is 4.5% below its 52-week high of 1,23,353.65 and 59% above its 52-week low of 73,866.86, and it has now risen in six of the last eight sessions."
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,255.05 and the Sensex at 81,879.40 as PSU banks jump 2.94% and autos 2.14% \u2014 a ninth straight gain, but 170 points of the opening gap handed back",
    summary: "The first session after the Diwali break opened like a continuation and closed like a decision deferred. The Nifty gapped up to 25,337.80 from Monday's 25,044.65, touched 25,424.35 within the first hour, then spent the rest of the day giving it back to close at 25,255.05, up 210.40 points or 0.84% \u2014 still its highest close since 26 February 2026 and a ninth consecutive gain. The Sensex ran from 80,939.40 to an intraday 82,520.40, a 1,413.75-point move, and settled at 81,879.40, up 772.75 points or 0.95%. The leadership was domestic and cyclical and it was broad: Nifty PSU Bank +2.94% to 9,167.20, Nifty Auto +2.14% to 28,523.30, Nifty Chemicals +2.10% to 28,562.80, Nifty Bank +1.76% to 60,792.40, Private Bank +1.14%, FMCG +1.13%, Oil & Gas +1.03%, Financial Services +1.02%, Metal +0.96% and Infrastructure +0.93%. Only four sectors fell, and the four are the same four that have been failing for a fortnight: Nifty IT -0.53% to 32,295.60, Realty -0.42% to 893.95, Pharma -0.41% to 28,776.45 and Healthcare -0.32%. Inside the Nifty 50 the arithmetic was done by Mahindra & Mahindra +5.30% to Rs 3,465, InterGlobe Aviation +4.33% to Rs 5,665 and Trent +2.59%, against Adani Ports -1.84% to Rs 1,907, Tech Mahindra -1.50%, Nestle India -1.44% and ICICI Bank -1.38% to Rs 1,566.30. Unlike Monday, breadth agreed with the index: 2,756 stocks advanced, 1,555 declined and 162 were unchanged on Moneycontrol's tally, and every one of the five broad cards rose, the Smallcap 250 best at +1.26% and the Nifty 500 at +0.90% to 23,779.30. India VIX edged up 0.80% to 17.56 even as the index rose, which is the honest caveat on the day. The fuel was the same fuel: foreign portfolio investors have bought Rs 53,739 crore of Indian equities between 2 and 9 November, the biggest monthly inflow since September 2024, and Brent crude sat at $92.94 \u2014 24% below the $118 of 30 October \u2014 while the rupee closed 24 paise stronger at 93.69. Moody's raised its FY27 India GDP forecast to 7% from 6.5% and Bernstein lifted its December Nifty target to 26,100 from 25,000. Thursday brings India's CPI print, and 25,400-25,500 is the level both brokers now name.",
    stats: ["Nifty +0.84%", "Sensex +0.95%"],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
    {
      date: "2026-11-05",
      label: "Thu 5 Nov",
      niftyClose: 24536.6,
      niftyChangePct: 2.4,
      sensexChangePct: 2.6,
      note: "The biggest single-day gain in seven months, and the sixth straight advance \u2014 the longest winning run since November 2025. The Nifty opened at 24,378.05, dipped to 24,296.30 and closed at 24,536.60, up 576.00 points or 2.40%, its highest close since early August; the Sensex ran from 78,910.94 to a 79,465.03 high and settled at 79,310.01, up 2,008.61 points or 2.60%. The trigger was overnight: Brent slid below $100 a barrel as Democrats swept the US midterms and hopes of a West Asia settlement hardened, US equities rallied, and foreign money kept arriving. The leadership was entirely financial and cyclical \u2014 Nifty Capital Markets +4.24%, Auto +4.14% to 27,601.75, Financial Services +4.01%, Realty +3.52% to 895.90, Private Bank +3.44%, Bank +3.33% to 57,773.65 and PSU Bank +3.13%, with Consumer Durables and IT +2.42% to 32,837.85 behind them. Only two sectors fell: Energy -0.52% to 36,884.45 on Reliance giving back part of Monday's 11.6% and Media -0.84%, while Chemicals was the day's worst basket on an equal-weighted basis. Bajaj Finance was the Sensex's best at +7.65%, with M&M +5.59%, Maruti +5.48%, IndusInd Bank +5.35% and ICICI Bank +5.33%; NTPC, Bharat Electronics, Adani Ports, ITC and Bharti Airtel (-0.52%) lagged. The broader market joined in but lagged the headline: Next 50 +1.38% to 71,768.65, Midcap 150 +1.93% to 22,290.40, Smallcap 250 +0.79% to 17,535.70, Midcap 100 +1.87%, Smallcap 100 +0.56%, Nifty 500 +2.00% to 23,224.70, and the BSE SME IPO index +1.99% to 1,15,864.00. Breadth on BSE was 2,868 advances against 1,384 declines and 169 unchanged; 126 of the 159 SME constituents rose. BSE-listed market capitalisation crossed Rs 501 lakh crore for the first time, adding roughly Rs 7.7 lakh crore of investor wealth in a session (newsdrum puts the gain at Rs 8.2 lakh crore). FIIs were net buyers of Rs 7,830.40 crore of equities on NSDL's numbers, against Rs 7,284.03 crore on NSE's provisional file; the rupee settled at 94.46-94.48 a dollar and Brent closed 0.73% lower at $102.80."
    },
    {
      date: "2026-11-06",
      label: "Fri 6 Nov",
      niftyClose: 25030.35,
      niftyChangePct: 2.01,
      sensexChangePct: 2.17,
      note: "The seventh straight gain and the first close above 25,000 since 27 February, made by two banks and almost nothing else. The Nifty opened at 24,538.20, dipped to 24,388.00 and closed at its high of 25,030.35, up 493.75 points or 2.01%; the Sensex ran from 79,413.66 to 81,028.02, up 1,718.01 points or 2.17%, also at its high. ICICI Bank +4.75% to Rs 1,571.20 and HDFC Bank +3.72% to Rs 788.25 supplied most of the index arithmetic, with HDFC Life +3.95%, M&M +5.11%, Titan +3.42% and Bharti Airtel +2.45% behind them. The fuel was Thursday's foreign flow \u2014 FIIs bought Rs 14,975 crore of cash equities, the largest single-day purchase in nearly six years \u2014 plus a rupee at a six-month high of 93.90 against 94.41 and Brent 0.71% lower at $97.59. Sectorally it was a financials day and almost only that: Private Bank +3.22%, Financial Services +2.57%, Bank +2.27% to 59,086.00, Consumer Durables +1.70%, Pharma +1.21%, Infra +0.77%, Auto +0.76%, FMCG +0.67%, Metal +0.66% and IT only +0.43% to 32,977.90 despite a 5.52% overnight fall in the Nasdaq. What fell fell hard: Media -1.52%, Defence -0.92% and Energy -0.05%, with BSE Capital Goods -1.36% as Thermax collapsed 17.27% on a Q2 miss, Astral 9.68% on a 13.1% margin and Apar Industries 9.65%. Breadth was the tell: 1,438 NSE advances against 2,141 declines and 127 unchanged, the Midcap 150 -0.09% to 22,271.15, the Smallcap 250 -0.85% to 17,386.15, the Nifty 500 only +1.00% to 23,456.95 and the BSE SME IPO index +0.11% to 1,15,996.69 on 86 advances to 97 declines. India VIX rose 13.35% to 17.66 while the index rose 2.01%. The next session is the Muhurat trading hour on Sunday, 8 November, 2:20 pm to 3:30 pm."
    },
    {
      date: "2026-11-08",
      label: "Sun 8 Nov (Muhurat)",
      niftyClose: 24986.4,
      niftyChangePct: -0.18,
      sensexChangePct: -0.04,
      note: "The Muhurat session that broke a nine-year habit. The one-hour Diwali Laxmi Pujan session opened Samvat 2083 at 25,070.45, ran to 25,131.85, and then gave all of it back to close at 24,986.40, down 43.95 points or 0.18% \u2014 the first red Muhurat close for the Sensex and Nifty in nine years, and the end of a seven-session winning streak. The Sensex settled at 80,999.40, down 28.62 points or 0.04%, after touching 81,442. The divergence underneath was the point: Nifty Next 50 +0.47% to 71,991.70, Smallcap 250 +1.20% to 17,594.10, Smallcap 100 +1.01% to 19,166.40, Midcap 150 +0.25% to 22,327.85, Microcap 250 +1.46%, Nifty 500 +0.14% to 23,489.20, and the BSE SME IPO index +1.50% to 1,17,740.39 \u2014 the small end was bought while the heavyweights were sold. Flows were almost nil because the book was thin: FIIs net sold Rs 0.25 crore and DIIs Rs 700.31 crore, against Rs 13,749.82 crore of FII buying on Friday. Read it as a sentiment print and nothing more; a 70-minute session after a week in which the Nifty rose 8.58% was always going to be about whether holders took profit, and they did, mildly. (NSE's ind_close_all_08112026.csv carries all of the index closes, the -43.95 and the -0.18%; Outlook Money, Financial Express, Fortune India, Business Standard and 5paisa each carry 80,999.40 and 24,986.40 with the intraday highs, and Moneycontrol's FII/DII table carries the two flow numbers.)"
    },
    {
      date: "2026-11-09",
      label: "Mon 9 Nov",
      niftyClose: 25044.65,
      niftyChangePct: 0.23,
      sensexChangePct: 0.13,
      note: "The recovery, and what it was made of. The Nifty opened at 25,076.40, fell to 24,838.75 in the afternoon, and closed at 25,044.65, up 58.25 points or 0.23%; the Sensex ran from 80,519.31 to 81,339.41 and settled at 81,106.65, up 107.25 points or 0.13%. Both are the highest closes since 27 February 2026, and both came on negative breadth. The buying was concentrated in the public sector banks: Nifty PSU Bank +3.73% to 8,905.35 \u2014 Union Bank of India +5.60% to Rs 197, Punjab National Bank +5.27% to Rs 132.17, Bank of India +4.5%, Indian Bank +4.3% \u2014 with Nifty Bank +1.51% to 59,741.25 at its high, Pharma +1.65% to 28,896.10, Consumer Durables +0.92%, Realty +0.77% to 897.70, Financial Services +0.75% to 27,384.90 and Private Bank +0.74% to 29,608.15. IT was the drag at -1.22% to 32,468.95: Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404, Tech Mahindra -1.80% to Rs 1,796.90, Mphasis -2.7%; Metal -0.46% with Tata Steel -2.81% to Rs 184.85; FMCG -0.15% with ITC -1.45% to Rs 279.35. In the Nifty 50, 21 rose and 28 fell. The broader market was mixed rather than weak: Next 50 +1.11% to 72,789.45, Midcap 150 +0.36% to 22,408.55, Midcap 100 +0.55%, Smallcap 100 +0.10%, Smallcap 250 -0.10% to 17,577.00 and Nifty 500 +0.33% to 23,567.00. Breadth was negative on every count \u2014 1,922 advances to 2,316 declines and 205 unchanged on one NSE tally, 1,629 to 1,959 and 110 unchanged on Upstox's \u2014 and India VIX fell 5.48% to 17.42 after opening at 18.43 and ranging 16.77-18.44. Brent slipped about 1% to $97.46 a barrel, the rupee closed at 93.93 to the dollar after a six-month high of 93.69, and FIIs bought Rs 7,212.22 crore of equities on the day against DII selling of Rs 7,172 crore, their eighth straight session of net selling. The next session was the Muhurat hour's successor on Wednesday, 11 November, after the Tuesday holiday."
    },
    {
      date: "2026-11-11",
      label: "Wed 11 Nov",
      niftyClose: 25255.05,
      niftyChangePct: 0.84,
      sensexChangePct: 0.95,
      note: "The gap that became a grind, and the broadest breadth of the month. The Nifty opened at 25,337.80 on Monday's 25,044.65, hit 25,424.35 in the first hour, slipped to 25,095.35, and closed at 25,255.05, up 210.40 points or 0.84% \u2014 a ninth consecutive regular-session gain, excluding the red Muhurat hour, and the highest close since 26 February 2026. The Sensex ran from 80,939.40 to 82,520.40 \u2014 a 1,413.75-point range \u2014 and settled at 81,879.40, up 772.75 points or 0.95%. The buying was domestic and cyclical: PSU Bank +2.94% to 9,167.20 with Bank of Baroda +5.77% to Rs 275, PNB +4.77% to Rs 138.48, Bank of India +3.86% and Federal Bank +5.09% to Rs 361.60; Auto +2.14% to 28,523.30 on M&M +5.30% to Rs 3,465, Eicher and Motherson +4.81%; Chemicals +2.10% to 28,562.80 on FACT +8.67%, Navin Fluorine +5.97%, Coromandel +5.95%, Gujarat Fluorochemicals +5.46% and Deepak Fertilisers +6.11%; Bank +1.76% to 60,792.40; FMCG +1.13%; Metal +0.96% with Tata Steel +2.01%; Infrastructure +0.93%. Four sectors fell and they are the four that have been failing all fortnight: IT -0.53% to 32,295.60 on Tech Mahindra -1.50%, HCL Tech -1.04% and Mphasis -2.65%, Realty -0.42% to 893.95 with Oberoi -1.73%, Lodha -1.72% and DLF -1.64%, Pharma -0.41% and Healthcare -0.32% with Divi's -1.72% and Aurobindo -1.50%. Breadth finally agreed with the index: 2,756 advances against 1,555 declines and 162 unchanged. Every broad card rose \u2014 Next 50 +0.96% to 73,486.20, Midcap 150 +0.85% to 22,597.95, Smallcap 250 +1.26% to 17,798.15, Smallcap 100 +1.59%, Midcap 100 +0.81%, Nifty 500 +0.90% to 23,779.30 \u2014 and India VIX rose 0.80% to 17.56 while the index rose. Brent was $92.94, up 1.58% on the day but 24% below the $118 of 30 October after a two-month low of $89.16; the rupee closed 24 paise stronger at 93.69; and FPI inflows for November reached Rs 53,739 crore between 2 and 9 November, the strongest month since September 2024. Moody's lifted its FY27 India GDP forecast to 7% from 6.5% and Bernstein raised its December Nifty target to 26,100 from 25,000. (NSE's index file, PTI via The Hindu and Business Standard, Moneycontrol, India Today, Zee Business, capitalmarket.com's post-session wrap and researchandinvest's 11 Nov tables carry the closes, the ranges and the sector percentages.)"
    }
  ],

  sectors: [
    {
      name: "Nifty PSU Bank",
      changePct: 2.94,
      note: "The day's engine for the second session running, up 2.94% to 9,167.20, and the widest sector move of the day by 80 basis points: Bank of Baroda +5.77% to Rs 275, Punjab National Bank +4.77% to Rs 138.48, Bank of India +3.86% to Rs 150.60, Indian Overseas Bank and Union Bank behind them. The index has now gained 14.00% in a month on capitalmarket.com's count, and the pattern is consistent \u2014 the state lenders lead on the days the foreign bid is strongest, because they are the cheapest and highest-beta way to own it. Bank of Baroda was also the largest single contributor to the Nifty's 210-point gain. (capitalmarket.com's post-session wrap carries 9,167.20 and +2.94%; Zee Business, India Today, Business Standard and newspoint all carry 2.94% and the same level; the individual stock moves are researchandinvest's and tbtflow's.)"
    },
    {
      name: "Nifty Auto",
      changePct: 2.14,
      note: "Second at 2.14% to 28,523.30, and the day's most consequential move because it was made by the heaviest single stock in the market's best-performing hands: Mahindra & Mahindra +5.30% to Rs 3,465.00, Eicher Motors in the leaders, Samvardhana Motherson +4.81% to Rs 169.69, Force Motors +5.49% to Rs 19,872 and Ramkrishna Forgings +7.19% to Rs 764.70 in the small-cap tail. Reuters attributes it to festival-season sales optimism and easing US-Iran tensions; the simpler read is that crude at $92.94 is a direct input-cost cut for a sector that sells to a domestic buyer. (Zee Business, India Today, capitalmarket.com and Moneycontrol all carry 2.14% and 28,523.30; the stock moves are researchandinvest's Nifty 500 table and tbtflow's tape.)"
    },
    {
      name: "Nifty Chemicals",
      changePct: 2.10,
      note: "Third at 2.10% to 28,562.80 \u2014 the quiet outlier of the day, and the sector with the most uniform internals: FACT +8.67% to Rs 813.25 was the single best stock in the whole Nifty 500, with Deepak Fertilisers +6.11%, Navin Fluorine +5.97% to Rs 9,659, Coromandel International +5.95% to Rs 1,991, Gujarat Fluorochemicals +5.46%, Aarti Industries +5.10% and Privi Speciality the lone faller at -3.49%. Fertilisers, fluorochemicals and specialty intermediates all moved together, which is what a subsidy-and-feedstock story looks like rather than a single stock's result. (Zee Business and India Today both carry 2.10% and 28,562.80; the stock moves are researchandinvest's Nifty 500 gainers and losers tables.)"
    },
    {
      name: "Nifty Bank",
      changePct: 1.76,
      note: "Fourth at 1.76% to 60,792.40, and note the inversion inside it: the PSU banks rose 2.94% while the private banks managed 1.14%, the exact opposite of last week when private banks added 9.06% and the state lenders 4.59%. ICICI Bank actually fell 1.38% to Rs 1,566.30 and was one of the Nifty's five worst stocks, so the composite's gain came from HDFC Bank, Axis Bank, Federal Bank +5.09% and the PSUs. The index opened at 60,524.70 and ran to 61,394.30 before closing 600 points under that high. (Goodreturns' NSE sector watch carries 60,792.40, +1.76%, the 61,394.30 high and the 59,741.25 previous close; capitalmarket.com, Zee Business and newspoint all carry 1.76%.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 1.14,
      note: "Fifth at 1.14% to 29,946.20, half the PSU index's move and a long way from last week's 9.06%. The tell is ICICI Bank: the stock that did the most arithmetic on 6 November (-1.38% to Rs 1,566.30 on Wednesday) was one of the Nifty's five worst, so the private-bank gain is HDFC Bank, Axis and the smaller names carrying a heavyweight that went ex-dividend or was simply sold. (Zee Business and India Today carry 1.14% and 29,946.20; Moneycontrol's Nifty 50 losers table carries ICICI Bank at -1.43% intraday and -1.38% at the close.)"
    },
    {
      name: "Nifty FMCG",
      changePct: 1.13,
      note: "Sixth at 1.13% to 47,188.55 \u2014 and a genuine reversal, because this was the sector that fell 0.15% on Monday when ITC dropped 1.45%. ITC was among Moneycontrol's Nifty gainers this time, Nestle India gave back 1.44% to Rs 1,283.90, and Trent +2.59% to Rs 3,209.60 did the heavy lifting from the consumer side. A defensive basket rising 1.13% on a risk-on day is not a rotation signal; it is the Diwali consumption trade being paid for a second week. (Zee Business and India Today both carry 1.13% and 47,188.55; the stock moves are Moneycontrol's closing tables.)"
    },
    {
      name: "Nifty Oil & Gas",
      changePct: 1.03,
      note: "Seventh at 1.03% to 11,451.05, and the counter-intuitive one: Brent rose 1.58% to $92.94 on the day and the sector that buys crude still went up, because Hindustan Petroleum +3.73% to Rs 400.15 and the marketing companies are beneficiaries of a fall from $118 to $93 that has not yet been fully passed through at the pump. Read the level, not the day: crude is 24% below its 30 October high and that is the single largest input to this sector's margin. (Zee Business and newspoint carry 1.03% and 11,451.05; HPCL's move is researchandinvest's.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 1.02,
      note: "Eighth at 1.02% to 27,663.40, roughly half of Nifty Bank's 1.76% and a third of the PSU banks' 2.94%. That gap is the composition: this composite carries the insurers and asset managers, and it was the capital-market names rather than the lenders that did the work \u2014 ICICI Prudential AMC +4.79% to Rs 3,113, CDSL +3.76% to Rs 1,407, IIFL Finance +6.26% to Rs 666.25 and Five-Star Business Finance +4.60%. (Zee Business carries 1.02% and 27,663.40; India Today cites the narrower Financial Services 25/50 index at +0.82%, which is a different basket; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty Metal",
      changePct: 0.96,
      note: "Ninth at 0.96% to 12,786.15, and a full reversal of Monday's -0.46% in which Tata Steel was the worst stock in the Nifty 50. Tata Steel was a leader this time at +2.01%, with Jindal Stainless +3.88% to Rs 717.85 and Jindal Saw the day's only metal name in the losers at -1.44%. Metals have now risen in five of the last six sessions and are the second-best sector of the month after financials. (Zee Business and India Today both carry 0.96% and 12,786.15; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty Infrastructure",
      changePct: 0.93,
      note: "Tenth at 0.93% to 9,550.50, from a 9,484.00 low to a 9,597.35 high. The internals are the interesting part: the railway and defence PSUs did the work \u2014 RVNL +3.82% to Rs 209.40, Railtel +3.82% to Rs 258.27, Titagarh Rail +4.01%, Engineers India +3.96% and BEML +6.05% to Rs 2,112 \u2014 while the cable and capital-goods names that led Monday's fall were still mixed, with TD Power the exception at +6.69% to Rs 609.90 after three straight sessions of losses. (Goodreturns' NSE sector watch carries 9,550.50, +0.93%, the 9,597.35 high and the 9,462.90 previous close; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty Consumer Durables",
      changePct: 0.73,
      note: "Eleventh at 0.73%, and it would have been the day's best sector but for one stock: Kalyan Jewellers rose 8.63% to Rs 663.75 and was the second-best stock in the Nifty 500, while LG Electronics India fell 2.97% to Rs 1,740.60 inside the same index. The Diwali-consumption basket has now risen in four of the last five sessions. (India Today carries 0.73%; the two stock moves are researchandinvest's Nifty 500 gainers and losers tables.)"
    },
    {
      name: "Nifty Healthcare",
      changePct: -0.32,
      note: "Twelfth and the first faller, at -0.32% \u2014 a small move that hides a wide spread underneath: Vijaya Diagnostic -3.69% to Rs 1,423.80, Rubicon Research -2.73%, Onesource Specialty Pharma -2.24%, Abbott India -2.14% to Rs 26,110 and Divi's Laboratories -1.72% to Rs 11,367, against Sai Life Sciences +4.45% to Rs 1,918.60 and Cohance Lifesciences +4.61%. When the losers outnumber the winners inside a healthcare basket on a day the market rose 0.84%, the money is going somewhere else. (India Today and Zee Business both carry -0.32%; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty Pharma",
      changePct: -0.41,
      note: "Thirteenth at -0.41% to 28,776.45, giving back part of Monday's 1.65%. Divi's -1.72%, Aurobindo -1.50% to Rs 1,827.50, Zydus Lifesciences -1.35%, Narayana Hrudayalaya -1.34% and Aster DM -1.27% against GSK Pharmaceuticals and the small-cap specialty names. Pharma has now alternated up and down for six sessions, which is what a sector does when it is being used as a funding source rather than a destination. (Zee Business and India Today both carry -0.41% and 28,776.45; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty Realty",
      changePct: -0.42,
      note: "Fourteenth at -0.42% to 893.95, and the day's most surprising faller because every input improved: crude down 24% from its October high, the rupee 24 paise stronger at 93.69 and the rate expectation unchanged. The stocks say otherwise \u2014 Oberoi Realty -1.73% to Rs 1,744.30, Lodha -1.72% to Rs 1,174.50 and DLF -1.64% to Rs 742.65, three of the four heaviest names in the index, all down together. After +10.17% last week, this is the first distribution. (Goodreturns' NSE sector watch carries 893.95, -0.42%, the 904.50 high and the 897.70 previous close; India Today and Moneycontrol both carry -0.42%; the stock moves are researchandinvest's.)"
    },
    {
      name: "Nifty IT",
      changePct: -0.53,
      note: "Last at -0.53% to 32,295.60, and the only sector to fall in both of the last two sessions. Tech Mahindra -1.50% to Rs 1,782.80, HCL Technologies -1.04% to Rs 1,394.20, Mphasis -2.65% to Rs 2,390, Zensar -2.18%, Birlasoft -1.69% and Coforge -1.44% \u2014 against a rare green print from Netweb Technologies at +8.22% to Rs 4,154.50. The cause remains external and it is now the defining irony of this rally: the same global money leaving AI-linked US equities is arriving in Indian financials, so the one Indian sector levered to AI capex is the one sector the inflow does not lift. The index opened at 32,741.50, ran to 32,787.25 and closed 491 points under that high. (Goodreturns' NSE sector watch carries 32,295.60, -0.53%, the 32,787.25 high, the 32,068 low and the 32,468.90 previous close; Zee Business, India Today, Moneycontrol and Business Standard all carry -0.53% or -0.5%; the stock moves are researchandinvest's and tbtflow's.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 single-session price returns for 11 November 2026, taken from researchandinvest's full-universe gainers and losers tables built on the day's NSE closing prices, and cross-read against tbtflow's own five-minute tape (top ten gainers and losers on the 214 NSE F&O cash names), Upstox's Nifty 50 and Midcap 100 lists and Moneycontrol's Nifty 50 closing table. The universe is the full 500 \u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \u2014 so a name outside the headline sub-indices still ranks. Cap tags follow the NSE member files: FACT, Kalyan Jewellers and Cochin Shipyard are on NSE's Nifty Midcap 150 constituent list and are tagged Midcap, while the names absent from that list and from the Nifty Next 50 file are tagged Smallcap. Honest limitation: two providers print different magnitudes for the same stock \u2014 Upstox has M&M at +3.92% and IndiGo at +3.76% while researchandinvest and tbtflow both have +5.30% and +4.33% off the closing-auction print \u2014 which is a difference of when the close is struck rather than of fact, and the direction and ordering are identical in all three. Breadth context: 2,756 stocks advanced and 1,555 declined with 162 unchanged, so this was a day when the top of the movers table and the breadth line agreed.",
    gainers: [
      {
        name: "Fertilisers and Chemicals Travancore",
        changePct: 8.67,
        cap: "Midcap",
        note: "The Nifty 500's biggest gainer of the day, up 8.67% to Rs 813.25 on 40.6 lakh shares, and the reason Nifty Chemicals was the third-best sector at +2.10%. FACT is the oldest fertiliser name on the exchange \u2014 a PSU in the Nifty Midcap 150 whose earnings are levered to the subsidy mechanism and to naphtha and gas costs \u2014 and it rose in a session when every other fertiliser and specialty chemical in the index rose too: Deepak Fertilisers +6.11%, Coromandel +5.95%, Gujarat Fluorochemicals +5.46%. That pattern says the buying was a sector bid, not a stock story. It closed 23% below its 52-week high of Rs 1,058.60. (researchandinvest's 11 Nov Nifty 500 gainers table for +8.67%, Rs 813.25 and the 40.6 lakh volume; NSE's ind_niftymidcap150list.csv confirms the index membership the cap tag is based on.)"
      },
      {
        name: "Kalyan Jewellers India",
        changePct: 8.63,
        cap: "Midcap",
        note: "Second at 8.63% to Rs 663.75 on 6.46 crore shares \u2014 more than four times FACT's turnover \u2014 and the single stock that made Consumer Durables a gainer. Kalyan is the Nifty Midcap 150's largest listed jeweller by turnover, and a move this size in it on this volume is a re-rating of the Diwali-to-wedding season demand read rather than a stock-specific event. It closed within 4% of its 52-week high of Rs 689.00, having traded at Rs 327.05 at the low a year ago. (researchandinvest's Nifty 500 gainers table for +8.63%, Rs 663.75 and the 6.46 crore volume; tbtflow's tape independently has it at +8.63% off a Rs 611.00 previous close; NSE's Nifty Midcap 150 constituent file confirms membership.)"
      },
      {
        name: "Netweb Technologies India",
        changePct: 8.22,
        cap: "Smallcap",
        note: "Third at 8.22% to Rs 4,154.50, and the anomaly of the day: a high-performance-computing and AI-server maker rising 8.22% on a session in which Nifty IT fell 0.53% and five of the six IT names in the Nifty 500 losers table were down. Netweb is not an IT-services exporter \u2014 it sells GPU and HPC hardware into Indian sovereign AI and enterprise demand \u2014 so its revenue line benefits from the capex that is hurting the services names. That is the whole point of its inclusion here: a 500-stock universe contains both sides of a trade that a 50-stock index flattens into one. (researchandinvest's Nifty 500 gainers table for +8.22% and Rs 4,154.50; its absence from NSE's Nifty Midcap 150 and Nifty Next 50 member files places it in the Smallcap 250.)"
      },
      {
        name: "Sun TV Network",
        changePct: 7.21,
        cap: "Smallcap",
        note: "Fourth at 7.21% to Rs 653.90 on 30.0 lakh shares, closing within 3% of its 52-week high of Rs 673.95. Sun TV is a south-India broadcasting and cable franchise with almost no debt and a heavy dividend history, and it moved with the rest of the media complex on a day Nifty Media added 0.69% \u2014 the stock beat its sector by 650 basis points, which is what happens when the sector index is weighted towards loss-making new-age names and the money goes to the profitable old one. (researchandinvest's Nifty 500 gainers table for +7.21% and Rs 653.90; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      },
      {
        name: "Ramkrishna Forgings",
        changePct: 7.19,
        cap: "Smallcap",
        note: "Fifth at 7.19% to Rs 764.70, closing within 1% of its 52-week high of Rs 772.80 \u2014 and the cleanest read on the day's auto theme, because this is a forged-components supplier to commercial vehicles and rail, not a carmaker. Nifty Auto rose 2.14% on M&M and Eicher; Ramkrishna rose 7.19%, more than three times its sector, which is the beta of a small-cap supplier to a large-cap end market. (researchandinvest's Nifty 500 gainers table for +7.19% and Rs 764.70; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      }
    ],
    losers: [
      {
        name: "Cochin Shipyard",
        changePct: -6.82,
        cap: "Midcap",
        note: "The Nifty 500's worst stock of the day, down 6.82% to Rs 1,202.00 on 85.1 lakh shares, from a Rs 1,290.00 previous close \u2014 and the single name that took Nifty Infrastructure's shine off. Cochin Shipyard is a defence-and-commercial shipbuilder in the Nifty Midcap 150 whose order book and margins re-rated violently through 2025; it has now given back 35% from its 52-week high of Rs 1,842.80 and sits 9% above its 52-week low. Note the divergence: the railway PSUs rose 4% on the same day, so this is not a PSU sell-off, it is a shipbuilding one. (researchandinvest's 11 Nov Nifty 500 losers table for -6.82%, Rs 1,202.00 and the 85.1 lakh volume; tbtflow's tape independently has it at -6.82% off a Rs 1,290.00 previous close; Upstox's Midcap 100 list carries the same -6.82%; NSE's Nifty Midcap 150 constituent file confirms membership.)"
      },
      {
        name: "Prime Focus",
        changePct: -5.38,
        cap: "Smallcap",
        note: "Second at -5.38% to Rs 264.55 on 47.7 lakh shares, and the counterpoint to Sun TV's 7.21%: two media names, 1,260 basis points apart on the same day. Prime Focus is the visual-effects and post-production business behind DNEG \u2014 a global, dollar-earning, high-fixed-cost operation \u2014 and it trades on the Hollywood and streaming production cycle rather than on Indian advertising. Nifty Media rose 0.69%; this fell 5.38%. (researchandinvest's Nifty 500 losers table for -5.38% and Rs 264.55; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      },
      {
        name: "Gallantt Ispat",
        changePct: -4.72,
        cap: "Smallcap",
        note: "Third at -4.72% to Rs 518.35, and a puzzle worth flagging: Nifty Metal rose 0.96% and Tata Steel, Jindal Stainless and Jindal Saw all rose, but Gallantt \u2014 a Gorakhpur-based steel and ferro-alloy producer \u2014 fell 4.72% to close 1.3% above its 52-week low of Rs 496.25. A stock trading at the floor of its range while its sector rises is telling you something stock-specific is being priced, and the market has not yet said what. (researchandinvest's Nifty 500 losers table for -4.72% and Rs 518.35; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      },
      {
        name: "Vijaya Diagnostic Centre",
        changePct: -3.69,
        cap: "Smallcap",
        note: "Fourth at -3.69% to Rs 1,423.80 on a thin 2.3 lakh shares, and the largest single drag on Nifty Healthcare's -0.32%. Vijaya runs a diagnostics chain concentrated in Telangana and Andhra Pradesh; the stock had run 68% off its 52-week low of Rs 848.00 before this session and now sits 11% under its high of Rs 1,593.60. A 3.7% fall on 2.3 lakh shares is a liquidity event, not a verdict. (researchandinvest's Nifty 500 losers table for -3.69% and Rs 1,423.80; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      },
      {
        name: "Privi Speciality Chemicals",
        changePct: -3.49,
        cap: "Smallcap",
        note: "Fifth at -3.49% to Rs 3,370.20, and the one faller inside a sector that rose 2.10% \u2014 which makes it the most informative name on either list. Privi makes aroma chemicals, a specialty niche whose raw material is crude-linked; on a day when every fertiliser, fluorochemical and agrochemical name in the Nifty 500 rose between 5% and 8%, the market chose this one to sell. It is 11% below its 52-week high of Rs 3,785.30. (researchandinvest's Nifty 500 losers table for -3.49% and Rs 3,370.20; its absence from NSE's Midcap 150 and Next 50 member files places it in the Smallcap 250.)"
      }
    ]
  },

  watch: [
    {
      title: "25,400-25,500 is the wall, and the index has now hit it twice in one session",
      detail: "The Nifty touched 25,424.35 in the first hour and closed 169 points below it, and both of the day's published technical notes name the same band. HDFC Securities' Nagaraj Shetti reads the day as a small red candle with a gap-up open that was almost fully filled, calls 25,400-25,500 strong overhead resistance and says renewed upside needs a close above 25,500 to open 26,000, with support at 24,800-24,700. LKP Securities' Vatsal Bhuva calls the index overbought and expects a retracement towards 25,000-24,800 with 25,500 as immediate resistance. Religare's Ajit Mishra puts the buy zone at 24,800-25,000, the invalidation at 24,600 and the upside target at 25,500-25,750. Three brokers, one level. The next decisive close is above 25,500 or below 24,800, and nothing in between settles anything."
    },
    {
      title: "Thursday's CPI print is the rupee's next test, and the rupee is the whole trade",
      detail: "India's consumer price inflation data is due on 12 November and it is the one scheduled event that can move the thing everything else rests on. HDFC Securities' Dilip Parmar notes the rupee gained on softer crude, strong FII inflows and an absence of central bank intervention, but that a rebounding dollar after Tuesday's US inflation figures capped the move, and puts resistance at 94.10 with support at 93.50. The rupee closed at 93.69 on Wednesday, 24 paise stronger than Monday's 93.93, and is now near a six-month high. GTRI expects Rs 92-93 if the favourable trends hold. A hot Indian print would push the currency back through 94 and take the financials \u2014 the sector that has done all the work this month \u2014 down with it."
    },
    {
      title: "The foreign bid is real, large and hedged",
      detail: "FPIs bought Rs 53,739 crore of Indian equities between 2 and 9 November, the strongest month since September 2024, and roughly $6 billion by Reuters' count. Two caveats belong next to that number. First, 2026 is still a record year of outflows at Rs 2.41 lakh crore, so this is a reversal of a small part of a large hole. Second, FIIs remain net short about 90,741 index futures contracts, which means a meaningful slice of the cash buying is hedged rather than directional. That is the structure of a rotation out of AI-heavy US equities, not a verdict on Indian earnings \u2014 and it can reverse as fast as the Nasdaq stabilises. Watch the daily FII/DII line, not the monthly total."
    },
    {
      title: "Crude at $92.94 is 24% below its October high and everything else is downstream of it",
      detail: "Brent rose 1.58% to $92.94 on Wednesday but that is the noise; the signal is that it was $118 a barrel on 30 October and hit a two-month low of $89.16 in the previous session after US officials played down further military action against Iran. India imports about 90% of its crude, so this is simultaneously the rupee's support, the input-cost cut behind Nifty Auto's 2.14% and Nifty Chemicals' 2.10%, and the reason the RBI has room. The risk is symmetric and named: renewed escalation involving Iran takes crude back through $100 and unwinds the financial and cyclical leadership in the same week. Bernstein's raised December Nifty target of 26,100 rests explicitly on 'the Iran war being effectively over'."
    },
    {
      title: "IT and realty have now fallen in both sessions since the Diwali break, and only one of them is explicable",
      detail: "Nifty IT fell 0.53% and Nifty Realty 0.42% on Wednesday, after -1.22% and +0.77% on Monday. IT's fall has a clear external cause \u2014 the AI-infrastructure unwind on Wall Street \u2014 and it is the direct mirror image of the flow that is lifting Indian financials, which makes it the one part of this market that can fall while the index rises. Realty's fall has no such explanation: crude is down 24%, the rupee is at a six-month high and rates are unchanged, yet Oberoi, Lodha and DLF all fell between 1.6% and 1.8% together after a 10.17% week. If realty falls again on Thursday with the same inputs, the sector is distributing; if IT falls again while the Nasdaq stabilises, the rotation is over."
    }
  ],

  reads: [
    {
      title: "Markets surge after Diwali; Nifty crosses 25,350 as FII inflows hit Rs 53,170 crore this month",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/markets-surge-after-diwali-nifty-crosses-25350-as-fii-inflows-hit-53170-crore-this-month/article71688274.ece"
    },
    {
      title: "CAS strikes again: Nifty surges over 2% to 25,600 before closing at 25,250; Sensex sees a spike of 375 points",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/cas-strikes-again-nifty-surges-over-2-to-25-600-before-closing-at-25-250-sensex-sees-a-spike-of-375-points-14077258.html"
    },
    {
      title: "India's battered rupee finds an unlikely rescue party in cheaper oil and Wall Street's AI rout",
      source: "The Economic Times",
      url: "https://economictimes.indiatimes.com/news/economy/indicators/indian-rupee-vs-us-dollar-crude-oil-price-fall-foreign-portfolio-investors-fpi-inflows-wall-street-ai-selloff-gtri-forecast/articleshow/135723013.cms"
    },
    {
      title: "Market Wrap, Nov 11: Sensex, Nifty50 rise 1% as banking stocks rally; Nifty Smallcap 100 outshines, M&M top gainer",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-nov-11-sensex-nifty-50-rise-1-as-banking-stocks-rally-nifty-smallcap-100-outshines-m-and-m-top-gainers/article-203302/"
    },
    {
      title: "Closing Bell: Sensex jumps 773 points, Nifty ends above 25,250; PSU Bank, Auto stocks lead gains \u2014 what drove D-Street rally?",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-closing-bell-sensex-jumps-773-points-nifty-ends-above-25250-psu-bank-auto-stocks-lead-gains-what-drove-dalal-street-rally-405431"
    }
  ],

  ratio: {
    name: "Current Ratio",
    category: "Liquidity / short-term solvency",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288, printed p. 320 = PDF p. 290); every page cited below is the printed page number. The balance-sheet date is 31 March 2026.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = total current assets \u00f7 total current liabilities, both taken from the same Consolidated Balance Sheet on the same date. The answer is a plain multiple: how many rupees of assets the company expects to convert into cash within twelve months for every one rupee it owes within twelve months. Above 1 means it can pay the year's bills from the year's assets; below 1 means it needs to refinance or sell something longer-dated.",
    formulaNote: "This is the ratio that taught a generation of investors to ask a second question, because the first answer is always flattering for a services company and always incomplete. Infosys' current assets are Rs 1,03,489 crore against Rs 52,322 crore of current liabilities, so the multiple is 1.98 \u2014 a company that can cover its short-term obligations almost twice over. What that number does not tell you is what the assets are made of. Rs 22,201 crore is cash, Rs 12,950 crore is current investments, and Rs 35,234 crore is trade receivables \u2014 money owed by clients, collectible in 67 days on Infosys' own days-sales-outstanding measure. There is almost no inventory (Rs 474 crore) because the company sells people, not products, which is why its quick ratio equals its current ratio exactly and why the 'acid test' variant of this ratio is meaningless for IT services. The more useful thing here is the direction, and the direction is down: 2.27 to 1.98 in one year, a 12.7% fall, on a balance sheet that carries no borrowings at all. That happened because current liabilities grew 22.1% (Rs 42,850 crore to Rs 52,322 crore) while current assets grew 6.6% (Rs 97,099 crore to Rs 1,03,489 crore). The driver was not debt: it was other current liabilities rising Rs 11,765 crore to Rs 15,779 crore and other financial liabilities Rs 18,138 crore to Rs 21,483 crore \u2014 accrued expenses, unearned revenue and the dividend and buyback payables that a capital-return year creates. A falling current ratio at a debt-free company is a story about payables, not about distress.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets, 31 March 2026 \u2014 the numerator, the sum of the seven current-asset lines", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities, 31 March 2026 \u2014 the denominator, the sum of the six current-liability lines", value: "Rs 52,322 crore", page: "p. 317" },
      { label: "Cash and cash equivalents, 31 March 2026 \u2014 the most liquid fifth of the numerator", value: "Rs 22,201 crore", page: "p. 317" },
      { label: "Current investments, 31 March 2026 \u2014 the second most liquid slice", value: "Rs 12,950 crore", page: "p. 317" },
      { label: "Trade receivables, 31 March 2026 \u2014 the largest single current asset, and the one that needs collecting", value: "Rs 35,234 crore", page: "p. 317" },
      { label: "Other current liabilities, 31 March 2026 \u2014 up from Rs 11,765 crore, the biggest single reason the ratio fell", value: "Rs 15,779 crore", page: "p. 317" },
      { label: "Other financial liabilities (current), 31 March 2026 \u2014 up from Rs 18,138 crore, the second biggest reason", value: "Rs 21,483 crore", page: "p. 317" },
      { label: "Lease liabilities (current), 31 March 2026 \u2014 the only borrowing-like line in current liabilities, and the one screens strip out", value: "Rs 3,160 crore", page: "p. 317" },
      { label: "Total current assets, 31 March 2025 \u2014 the prior-year numerator", value: "Rs 97,099 crore", page: "p. 317" },
      { label: "Total current liabilities, 31 March 2025 \u2014 the prior-year denominator", value: "Rs 42,850 crore", page: "p. 317" },
      { label: "Revenue from operations, FY26 \u2014 not in the formula, but the context for a liquidity ratio that fell while the business grew 9.6%", value: "Rs 1,78,650 crore", page: "p. 318" }
    ],
    working: "Step 1 \u2014 Take the numerator off the Consolidated Balance Sheet as printed, not as summed by hand (p. 317): total current assets Rs 1,03,489 crore. Step 2 \u2014 Take the denominator off the same page (p. 317): total current liabilities Rs 52,322 crore. Step 3 \u2014 Divide: 1,03,489 \u00f7 52,322 = 1.978, so 1.98. Step 4 \u2014 Do the prior year identically (p. 317): 97,099 \u00f7 42,850 = 2.266, so 2.27. Step 5 \u2014 Measure the change: 1.98 against 2.27 is down 0.29, or 12.7%. Step 6 \u2014 Prove the subtotals are the report's and not ours. Current assets: 12,950 + 35,234 + 22,201 + 234 + 15,890 + 1,835 + 15,145 = 1,03,489, which ties to the printed subtotal. Current liabilities: 3,160 + 4,744 + 21,483 + 15,779 + 1,512 + 5,644 = 52,322, which also ties. Then subtract: 1,03,489 \u2212 52,322 = 51,167, which is exactly the 'Net current assets' figure Infosys publishes for FY26 in its Three Year Overview (IFRS) \u2014 Balance Sheet Data \u2014 and 97,099 \u2212 42,850 = 54,249, which is the same table's FY25 figure. That is the cleanest check available: two numbers built from seven and six line items respectively reproduce a third number the company prints independently. Step 7 \u2014 Locate the fall. Current liabilities rose Rs 9,472 crore (+22.1%) against a Rs 6,390 crore (+6.6%) rise in current assets. Of that 9,472: other current liabilities +4,014, other financial liabilities +3,345, lease liabilities +705, income tax liabilities +791, trade payables +580, provisions +37. Not one rupee of it is a borrowing in the ordinary sense. Step 8 \u2014 Run the two convention variants so you can see what a screen does differently. Excluding the Rs 3,160 crore of current lease liabilities from the denominator gives 1,03,489 \u00f7 49,162 = 2.11, which is the 'current ratio excluding leases' that some providers print. And because inventory is only Rs 474 crore, the quick ratio is 1.98 as well \u2014 identical, which is the signature of a services balance sheet.",
    result: "1.98 at 31 March 2026, against 2.27 at 31 March 2025 \u2014 a 12.7% fall in a year in which revenue grew 9.6% and the balance sheet stayed free of borrowings; excluding current lease liabilities the multiple would be 2.11",
    meaning: "A current ratio of 1.98 is, on any textbook scale, healthy, and for Infosys it is almost too healthy to be interesting \u2014 the company could pay every rupee it owes within twelve months out of the cash and current investments alone (Rs 35,151 crore against Rs 52,322 crore, so actually about two-thirds of it) and cover the rest from receivables it collects in 67 days. What makes this ratio worth learning on this company is that it demonstrates three things a single number cannot. The first is that liquidity and solvency are different questions: Infosys' debt-to-equity ratio is nil, and it still has Rs 52,322 crore of current liabilities, because a business that employs 3,28,594 people accrues salaries, earns revenue before it delivers it and declares dividends before it pays them. The second is that a ratio can fall for a good reason. The 12.7% decline is the arithmetic of a year in which Infosys returned over Rs 37,500 crore to shareholders \u2014 an Rs 18,000 crore buyback at Rs 1,800 a share and Rs 48 a share of dividends \u2014 which builds a payable and drains an asset at the same time. A current ratio that falls because a company is handing cash back is not the same signal as one that falls because a company cannot pay its suppliers, and only the notes tell you which you are looking at. The third is the trap in the number itself: current assets include Rs 35,234 crore of receivables. If clients slow down, the ratio that looked like 1.98 becomes 1.31 the day those receivables age past a year. That is the question to ask of any liquidity ratio \u2014 not how big it is, but what it is made of, and how fast that part turns into cash.",
    crossCheck: "Three independent checks, and all three reconcile. First, against the company's own published subtotal: Infosys' Three Year Overview (IFRS) \u2014 Balance Sheet Data reports net current assets of Rs 51,167 crore for FY26 and Rs 54,249 crore for FY25, which are exactly the differences between the current-asset and current-liability subtotals we divided (1,03,489 \u2212 52,322 and 97,099 \u2212 42,850). Two independently printed subtotals reproducing a third is the strongest internal check in the report. Second, against data providers: topstockresearch, smart-investing, Laabh and TrueCAGR all print a current ratio of 1.98 for FY26 and 2.27 for FY25, and stocktitan, TipRanks and Sirius Investors print 1.98 for the latest fiscal year \u2014 seven sources, no disagreement, which is unusual for a ratio and is explained by the fact that this one is pure arithmetic on two printed subtotals with no adjusted-close or TTM convention in it. Third, against the leverage reading: TipRanks prints a debt-to-equity of 9.88% and livemint's balance-sheet table prints total debt of Rs 9,176 crore, which is almost exactly the Rs 6,016 crore of non-current plus Rs 3,160 crore of current lease liabilities (Rs 9,176 crore) \u2014 so the 'debt' a provider sees here is leases, and the Rs 3,160 crore we strip out in Step 8 is precisely the convention gap between our 1.98 and a lease-excluded 2.11. One thing that does not reconcile and should be flagged: Screener.in's own ratio block, as read on 11 November 2026, does not print a current ratio at all in the columns we could see, so it could not be used as a check here; and Topstockresearch's latest-quarter figure for the June 2026 quarter shows 0, which is a data gap on their side rather than a real reading \u2014 a company with Rs 1 lakh crore of current assets does not have a current ratio of zero.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287) for total current assets, total current liabilities and all thirteen component lines at both 31 March 2026 and 31 March 2025 \u2014 investments, trade receivables, cash and cash equivalents, loans, other financial assets, income tax assets and other current assets on the asset side, and lease liabilities, trade payables, other financial liabilities, other current liabilities, provisions and income tax liabilities on the liability side; Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288) for revenue from operations. Cross-checked against Infosys' Three Year Overview (IFRS) \u2014 Balance Sheet Data (net current assets Rs 51,167 crore for FY26 and Rs 54,249 crore for FY25), topstockresearch and smart-investing (current ratio 1.98 / 2.27), Laabh and TrueCAGR (1.98 / 2.27), stocktitan and TipRanks (1.98), and livemint's annual balance-sheet table (total debt Rs 9,176 crore, which reconciles to the lease liabilities)."
  }
};
