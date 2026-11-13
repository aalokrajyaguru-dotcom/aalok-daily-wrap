const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Friday, 13 November 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of the 13 November 2026 close (3:30 PM IST); every day move measured from the 12 November close, and every weekly move from the 6 November close",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition \u2014 they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee \u2014 a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25144.30,
      dayChange: -155.05,
      dayChangePct: -0.61,
      weekChangePct: 0.46, // vs the 6 Nov (prior Friday) close of 25,030.35
      spark: [24986.40, 25044.65, 25255.05, 25299.35, 25144.30], // last 5 closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov \u2014 10 Nov was a holiday
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The first fall of November, and it was made in the afternoon rather than at the open. The Nifty started near 25,139 \u2014 roughly 160 points under Wednesday's 25,299.35, per NDTV's opening tick \u2014 sank to 25,054.40, recovered to a 25,246 high and closed at 25,144.30, down 155.05 points or 0.61%. Breadth was the widest of the month in the wrong direction: on the NSE 1,446 stocks rose and 2,179 fell with 96 unchanged, and 38 of the 50 constituents closed lower, against the 20 that rose on Wednesday. The trigger was entirely macro. October CPI printed at 6.09% against 5.54% in September \u2014 the first breach of the RBI's 6% upper tolerance band in two years \u2014 with food inflation at 8.94% from 7.74%, and the tape immediately began pricing a December repo hike. The 10-year benchmark yield rose to 7.302% from 7.249% and the rupee closed at 94.20. What the day did not do is break the week: against last Friday's 25,030.35 the index is still +0.46%, and the close sits 111 points above the 6 November level after the three-day run that added 1.21%. (The Hindu BusinessLine, PTI via The Week, Moneycontrol, capitalmarket.com, Upstox and Zee Business all carry 25,144.30, -155.05 and -0.61%; the 25,054.40 low is Upstox's, and the 25,246 high is Beyondex's, matching TheGangesToday's published 25,054-25,246 day range.)"
    },
    {
      name: "Nifty Next 50",
      close: 72874.69,
      dayChange: -606.56,
      dayChangePct: -0.83,
      weekChangePct: 1.70, // vs the 6 Nov (prior Friday) close of 71,657.80
      spark: [71991.70, 72789.45, 73486.20, 73481.25, 72874.69], // last 5 closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov
      returns: { oneY: 3.40, threeY: 16.58, fiveY: 10.70 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The worst of the five cards, and the one that had led on Wednesday: 72,874.69 against 73,481.25, a fall of 606.56 points or 0.83% \u2014 so the basket that closed dead flat on a day the Nifty rose 0.18% gave back more than the benchmark lost on a day it fell 0.61%. That is what a high-beta, domestic-cyclical pool does at a turn, and the nesting makes the argument: the Nifty 100 fell 0.65% and the Nifty 50 0.61%, while this 50-stock rung below them fell 0.83%. Losses widen as you go down the size ladder, until the small caps, where they narrow again \u2014 the reverse of Wednesday's ordering. On the week it is still +1.70% against 6 November's 71,657.80, the second-best of the five. (ET's indices board at 16:15 IST carries 72,875 at -0.83% and its own 1W column prints +1.70%; 73,481.25 less 606.56 gives 72,874.69 exactly. Investing.com's tile printed -0.90% at 16:22 off a different base, so the ET close and the arithmetic are used.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22681.25,
      dayChange: -79.50,
      dayChangePct: -0.35,
      weekChangePct: 1.84, // vs the 6 Nov (prior Friday) close of 22,271.15
      spark: [22327.85, 22408.55, 22597.95, 22760.75, 22681.25], // last 5 closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov
      returns: { oneY: 1.59, threeY: 14.20, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Down 79.50 points, or 0.35%, to 22,681.25 \u2014 the mildest fall of the four equity cards, and a fourth straight session in which the wider market has beaten the benchmark, this time by losing less rather than by gaining. The internals repeat Wednesday's lesson in reverse: Nifty Midcap 100 fell 0.24% and Midcap 50 just 0.04%, so the further you go down the mid-cap ladder the harder the selling \u2014 the 150-stock pool took the worst of it because the 50 names outside the Midcap 100 are the least liquid of the set. That is the shape you get when the reason to sell is a rate expectation rather than a company: the marginal holder of the smallest, least-covered name is the first to reduce. On the week it is +1.84% against 6 November's 22,271.15, and the close is 410 points above that level. (ET's board at 16:15 carries 22,681, -0.35% and a 1W of +1.84%; 22,760.75 less 79.50 gives 22,681.25; capitalmarket.com independently prints -0.35%.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17940.54,
      dayChange: -53.96,
      dayChangePct: -0.30,
      weekChangePct: 3.19, // vs the 6 Nov (prior Friday) close of 17,386.15
      spark: [17594.10, 17577.00, 17798.15, 17994.50, 17940.54], // last 5 closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov
      returns: { oneY: 1.90, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "-53.96 points, or 0.30%, to 17,940.54 \u2014 the mildest fall of the five, and the best week of them at +3.19% against 6 November's 17,386.15. The internal ordering inverts Wednesday's: the Smallcap 100 fell 0.26% and the Smallcap 50 only 0.15%, so the smallest names took the most, and the Nifty Microcap 250 \u2014 outside this card but the same argument \u2014 lost 0.39%, more than any of the small-cap indices. On a day the 10-year yield rose 5 basis points and the market began pricing a December hike, the smallest and most rate-sensitive end being sold first is the textbook order of operations, and it is the mirror image of Wednesday, when 165 constituents advanced and 83 declined and this index rose 1.10%. The week still belongs to it: +3.19% is more than double the Nifty's +0.46%. (ET's board at 16:15 for 17,941, -0.30% and the +3.19% 1W; 17,994.50 less 53.96 gives 17,940.54; capitalmarket.com independently prints -0.30%.)"
    },
    {
      name: "BSE SME Index",
      close: 117247.82, // single post-close source \u2014 see the note
      dayChange: -560.74,
      dayChangePct: -0.47,
      weekChangePct: 1.08, // vs the 6 Nov close of 1,15,996.69
      spark: [117740.39, 116940.52, 117661.57, 117808.56, 117247.82], // last 5 closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The first edition in four in which this card carries a closing number, and the number is single-sourced, which is why it is flagged rather than buried: 1,17,247.82, down 560.74 points or 0.47%, read off The Economic Times' BSE all-indices board at 17:11 IST \u2014 a post-close print, but the only post-close print of this index we could reach at 17:30. Everything else corroborates the direction, not the level: Dhan carried 1,16,915.63 at 12:29, 5paisa 1,17,043.38 at 13:20 and Angel One 1,16,907.81 at 13:47, all between 0.6% and 0.8% down, and all four sources agree the index opened at 1,17,771.34 and ran 1,16,840.97 to 1,17,927.91 \u2014 a 1,087-point range, the widest of the week. BSE Indices' own chart series and Anand Rathi's close table both still ended at Wednesday's 1,17,808.56 when checked, the same publication lag that left this card blank in the previous three editions. On the week it is +1.08% against 6 November's 1,15,996.69, and it sits 5.0% under its 52-week high of 1,23,353.65 with a low of 73,866.86 behind it. Treat the level as provisional until BSE Indices publishes."
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,144.30 and the Sensex at 81,592.45 as October CPI at 6.09% breaks the RBI's band and ends a three-day rally",
    summary: "The rally did not break on a company or a sector; it broke on a number released before the market opened. October CPI came in at 6.09% against September's 5.54% \u2014 the first breach of the RBI's 6% upper tolerance band in two years, with food inflation at 8.94% from 7.74% \u2014 and the session was spent pricing a December repo hike instead of extending Wednesday's gain. The Nifty opened near 25,139, fell to 25,054.40, recovered to 25,246 and closed at 25,144.30, down 155.05 points or 0.61%; the Sensex ran from 81,288.75 \u2014 a 622.26-point fall at the low \u2014 back to 81,592.45, down 318.56 points or 0.39%. Breadth was the month's weakest: 1,446 NSE stocks rose and 2,179 fell, and 38 of the Nifty 50 closed lower. Every NSE sector except energy (+0.03%) and FMCG (-0.01%) fell, led by the three most rate- and crude-sensitive baskets \u2014 realty (-1.39%), auto (-1.07%) and metal (-0.98%) \u2014 while the wider market lost less than the benchmark for a fourth session: Midcap 150 -0.35%, Smallcap 250 -0.30%, Nifty 500 -0.55%. Brent held above $95 at $95.28 for December settlement, the 10-year rose to 7.302% and the rupee closed at 94.20. The week still ends higher: Nifty +0.46% and Sensex +0.70% against Friday 6 November.",
    stats: ["Nifty -0.61%", "Sensex -0.39%"],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
    {
      date: "2026-11-08",
      label: "Sun 8 Nov (Muhurat)",
      niftyClose: 24986.4,
      niftyChangePct: -0.18,
      sensexChangePct: -0.04,
      note: "The Muhurat session that broke a nine-year habit. The one-hour Diwali Laxmi Pujan session opened Samvat 2083 at 25,070.45, ran to 25,131.85, and then gave all of it back to close at 24,986.40, down 43.95 points or 0.18% \\u2014 the first red Muhurat close for the Sensex and Nifty in nine years, and the end of a seven-session winning streak. The Sensex settled at 80,999.40, down 28.62 points or 0.04%, after touching 81,442. The divergence underneath was the point: Nifty Next 50 +0.47% to 71,991.70, Smallcap 250 +1.20% to 17,594.10, Smallcap 100 +1.01% to 19,166.40, Midcap 150 +0.25% to 22,327.85, Microcap 250 +1.46%, Nifty 500 +0.14% to 23,489.20, and the BSE SME IPO index +1.50% to 1,17,740.39 \\u2014 the small end was bought while the heavyweights were sold. Flows were almost nil because the book was thin: FIIs net sold Rs 0.25 crore and DIIs Rs 700.31 crore, against Rs 13,749.82 crore of FII buying on Friday. Read it as a sentiment print and nothing more; a 70-minute session after a week in which the Nifty rose 8.58% was always going to be about whether holders took profit, and they did, mildly. (NSE's ind_close_all_08112026.csv carries all of the index closes, the -43.95 and the -0.18%; Outlook Money, Financial Express, Fortune India, Business Standard and 5paisa each carry 80,999.40 and 24,986.40 with the intraday highs, and Moneycontrol's FII/DII table carries the two flow numbers.)"
    },
    {
      date: "2026-11-09",
      label: "Mon 9 Nov",
      niftyClose: 25044.65,
      niftyChangePct: 0.23,
      sensexChangePct: 0.13,
      note: "The recovery, and what it was made of. The Nifty opened at 25,076.40, fell to 24,838.75 in the afternoon, and closed at 25,044.65, up 58.25 points or 0.23%; the Sensex ran from 80,519.31 to 81,339.41 and settled at 81,106.65, up 107.25 points or 0.13%. Both are the highest closes since 27 February 2026, and both came on negative breadth. The buying was concentrated in the public sector banks: Nifty PSU Bank +3.73% to 8,905.35 \\u2014 Union Bank of India +5.60% to Rs 197, Punjab National Bank +5.27% to Rs 132.17, Bank of India +4.5%, Indian Bank +4.3% \\u2014 with Nifty Bank +1.51% to 59,741.25 at its high, Pharma +1.65% to 28,896.10, Consumer Durables +0.92%, Realty +0.77% to 897.70, Financial Services +0.75% to 27,384.90 and Private Bank +0.74% to 29,608.15. IT was the drag at -1.22% to 32,468.95: Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404, Tech Mahindra -1.80% to Rs 1,796.90, Mphasis -2.7%; Metal -0.46% with Tata Steel -2.81% to Rs 184.85; FMCG -0.15% with ITC -1.45% to Rs 279.35. In the Nifty 50, 21 rose and 28 fell. The broader market was mixed rather than weak: Next 50 +1.11% to 72,789.45, Midcap 150 +0.36% to 22,408.55, Midcap 100 +0.55%, Smallcap 100 +0.10%, Smallcap 250 -0.10% to 17,577.00 and Nifty 500 +0.33% to 23,567.00. Breadth was negative on every count \\u2014 1,922 advances to 2,316 declines and 205 unchanged on one NSE tally, 1,629 to 1,959 and 110 unchanged on Upstox's \\u2014 and India VIX fell 5.48% to 17.42 after opening at 18.43 and ranging 16.77-18.44. Brent slipped about 1% to $97.46 a barrel, the rupee closed at 93.93 to the dollar after a six-month high of 93.69, and FIIs bought Rs 7,212.22 crore of equities on the day against DII selling of Rs 7,172 crore, their eighth straight session of net selling."
    },
    {
      date: "2026-11-11",
      label: "Wed 11 Nov",
      niftyClose: 25255.05,
      niftyChangePct: 0.84,
      sensexChangePct: 0.95,
      note: "The gap that became a grind, and the broadest breadth of the month. The Nifty opened at 25,337.80 on Monday's 25,044.65, hit 25,424.35 in the first hour, slipped to 25,095.35, and closed at 25,255.05, up 210.40 points or 0.84% \\u2014 a ninth consecutive regular-session gain, excluding the red Muhurat hour, and the highest close since 26 February 2026. The Sensex ran from 80,939.40 to 82,520.40 \\u2014 a 1,413.75-point range \\u2014 and settled at 81,879.40, up 772.75 points or 0.95%. The buying was domestic and cyclical: PSU Bank +2.94% to 9,167.20 with Bank of Baroda +5.77% to Rs 275, PNB +4.77% to Rs 138.48, Bank of India +3.86% and Federal Bank +5.09% to Rs 361.60; Auto +2.14% to 28,523.30 on M&M +5.30% to Rs 3,465, Eicher and Motherson +4.81%; Chemicals +2.10% to 28,562.80 on FACT +8.67%, Navin Fluorine +5.97%, Coromandel +5.95%, Gujarat Fluorochemicals +5.46% and Deepak Fertilisers +6.11%; Bank +1.76% to 60,792.40; FMCG +1.13%; Metal +0.96% with Tata Steel +2.01%; Infrastructure +0.93%. Four sectors fell and they are the four that have been failing all fortnight: IT -0.53% to 32,295.60 on Tech Mahindra -1.50%, HCL Tech -1.04% and Mphasis -2.65%, Realty -0.42% to 893.95 with Oberoi -1.73%, Lodha -1.72% and DLF -1.64%, Pharma -0.41% and Healthcare -0.32% with Divi's -1.72% and Aurobindo -1.50%. Breadth finally agreed with the index: 2,756 advances against 1,555 declines and 162 unchanged. Every broad card rose \\u2014 Next 50 +0.96% to 73,486.20, Midcap 150 +0.85% to 22,597.95, Smallcap 250 +1.26% to 17,798.15, Smallcap 100 +1.59%, Midcap 100 +0.81%, Nifty 500 +0.90% to 23,779.30 \\u2014 and India VIX rose 0.80% to 17.56 while the index rose. Brent was $92.94, up 1.58% on the day but 24% below the $118 of 30 October after a two-month low of $89.16; the rupee closed 24 paise stronger at 93.69; and FPI inflows for November reached Rs 53,739 crore between 2 and 9 November, the strongest month since September 2024. Moody's lifted its FY27 India GDP forecast, and the Sensex and Nifty both hit eight-month highs."
    },
    {
      date: "2026-11-12",
      label: "Thu 12 Nov",
      niftyClose: 25299.35,
      niftyChangePct: 0.18,
      sensexChangePct: 0.04,
      note: "The smallest gain of the rally and the biggest rotation of it. The Nifty opened at 25,213.50 on Wednesday's 25,255.05, dipped to 25,142.95, ran to 25,384.80 and closed at 25,299.35, up 44.30 points or 0.18% \\u2014 a third straight gain and the highest close since 26 February 2026, with the close 85 points under the high rather than 169 under it as on Wednesday. The Sensex ranged 81,576.15 to 82,325.61 and settled at 81,911.01, up 31.61 points or 0.04%, its own third straight gain. The leadership changed hands entirely: Realty +4.51% to 934.25, closing at its high of 934.45, on Aditya Birla Real Estate +10.16% to Rs 1,198, Anant Raj +5.68%, Phoenix Mills +5.57%, Signatureglobal +5.27%, Godrej Properties +4.50%, Sobha +4.40%, Lodha +4.38%, Prestige +4.24%, Oberoi +4.17% and DLF +3.59%; Media +2.46% to 1,761.25 on PVR Inox +4.37%, Prime Focus +3.91% and Zee +3.73%; Financial Services +1.42% to 28,057.15, PSU Bank +1.51% to 9,305.95, Bank +1.19% to 61,518.50 and Private Bank +0.87% to 30,206.05. The Nifty's best were HDFC Life +4.23% to Rs 597.80, Shriram Finance +3.58%, Bajaj Finance +3.36% and SBI +2.38%; its worst were HUL -2.46%, M&M -2.23%, Nestle -1.92%, Power Grid -1.78% and Maruti -1.65%. Only 20 of the 50 constituents rose. Auto -1.02% to 28,231.00 gave back a second day of its eight-session run, FMCG -0.74%, Energy -0.42% on HPCL -2.67% and Chennai Petroleum -2.64%, IT -0.41% on TCS -1.54%, and Metal -0.11% with Hindustan Zinc -2.25% and Vedanta -1.71%. Breadth narrowed but held: 2,377 advances against 1,878 declines and 195 unchanged. The broader market did the work \\u2014 Smallcap 250 +1.10% to 17,994.50 on 165 advances to 83 declines, Midcap 150 +0.72% to 22,760.75, Nifty 500 +0.36% to 23,865.80 \\u2014 and Nifty Next 50 was the only card in the red at 73,481.25, down 4.95 points or 0.01%, with 25 of its 50 constituents up. India VIX fell 5.35% to 16.62. Brent slipped 0.44% to $92.50, the rupee closed 33 paise weaker at 94.04 provisional, and FPIs' November purchases stood at $6.43 billion, the largest monthly inflow in more than two years. (researchandinvest's 16:02 IST index table, Goodreturns' NSE sector watch, hindi.economictimes' 3:47 pm table, Moneycontrol's closing bell and broader-market wraps, HDFC Sky's close report, BusinessLine and PTI for the Sensex and Nifty closes and the rupee, and Reuters via Business Recorder for the flow figure and the sector breadth of 11 of 16 sectors down.)"
    },
    {
      date: "2026-11-13",
      label: "Fri 13 Nov",
      niftyClose: 25144.30,
      niftyChangePct: -0.61,
      sensexChangePct: -0.39,
      note: "The first fall of the month, and it was made by a number released before the open rather than by anything a company said. October CPI came in at 6.09% against September's 5.54% \u2014 the first breach of the RBI's 6% upper tolerance band in two years, with food inflation at 8.94% from 7.74% \u2014 and the session was spent pricing a December repo hike. The Nifty opened near 25,139, fell to 25,054.40 in the afternoon, recovered to 25,246 and closed at 25,144.30, down 155.05 points or 0.61%. The Sensex was down 622.26 points at its 81,288.75 low and closed at 81,592.45, down 318.56 points or 0.39%. Breadth was the month's weakest: 1,446 NSE stocks rose and 2,179 fell, 96 were unchanged, and 38 of the Nifty 50 closed lower. Every NSE sector except energy (+0.03%) and FMCG (-0.01%) fell. What the day did not do is undo the week: the three sessions to Wednesday had added 1.25% to the Sensex and 1.21% to the Nifty, and this one took 0.39% and 0.61% of it back, so Friday closes the week at Nifty +0.46% and Sensex +0.70% against 6 November."
    }
  ],
  sectors: [
    {
      name: "Nifty Energy",
      changePct: 0.03,
      note: "The only sector on the NSE to close green, and by three-hundredths of a percentage point: 37,399 against 37,387, a gain of roughly 11 points. It is the sector that benefits from the thing hurting everything else. Brent for December settlement settled at $95.28, down 54 cents or 0.56% on the day but still $3 above where it began the week, after Upstox reported an intraday high of $96.76 on President Trump's comments that he would not hesitate to resume military strikes on Iran. Within the index the split was upstream against downstream: ONGC rose 0.47% and was one of the five best Nifty 50 stocks, while the refiners fell hard \u2014 BPCL -3.05% to Rs 302.00, HPCL -2.33% to Rs 381.50, Petronet LNG -3.27% to Rs 324.05 \u2014 because a higher crude price with a fixed retail price is a margin cut for the buyer and a revenue line for the producer. (ET's indices board at 16:15 IST for 37,399 and +0.03%; Tradebrains' closing summary independently prints Energy +0.03%, and Moneycontrol's closing note lists energy as one of only two sectors not in the red.)"
    },
    {
      name: "Nifty FMCG",
      changePct: -0.01,
      note: "Flat, and the only other sector that did not fall: 46,834, down one-hundredth of a percent, on a day the Nifty lost 0.61%. That is the defensive bid doing its job, and it is where the day's few winners were \u2014 Nestle India +0.66% to Rs 1,269.20 and Asian Paints +0.45%, both in the Nifty 50's top five, with Hindustan Unilever named among the Sensex gainers by BusinessLine and PTI. A word of caution on that last name: Upstox's own wrap lists Hindustan Unilever at -0.96% in its gainers table, which cannot be right in either direction, so the stock-level detail is left out here and only the index level is used. Two sectors holding flat on a day the benchmark falls 0.61% is the market rotating into what does not need a rate cut to earn. (ET's board at 16:15 for 46,834 and -0.01%; capitalmarket.com, which says all sectors ended red, and Moneycontrol, which says FMCG held up, disagree at this level of precision \u2014 the ET closing board is used because it is the post-close print.)"
    },
    {
      name: "Nifty Media",
      changePct: -0.20,
      note: "Down 0.20% to 1,758 from 1,761.25, a shallow fall that hides a wide dispersion: Sun TV Network fell 3.25% to Rs 646.70 and was among the twenty worst stocks in the Nifty 500, while the index itself barely moved. That is the arithmetic of a small, lopsided sector \u2014 one broadcaster carries enough weight to matter and not enough to decide. It is also the second consecutive session in which this index has been the market's quietest, after Wednesday's 2.46% surge, so the two-day picture is a big up day and a nothing day rather than a reversal. (ET's board at 16:15 for 1,758 and -0.20%; the Sun TV move is researchandinvest's 16:08 IST Nifty 500 losers table.)"
    },
    {
      name: "Nifty Pharma",
      changePct: -0.49,
      note: "Down 0.49% to 28,536, and inside it the divergence was almost complete: Alkem Laboratories -3.55% to Rs 5,114.00, Granules India -3.25% to Rs 813.20 and Cohance Lifesciences -2.77% fell, while Emcure Pharmaceuticals rose 2.04% to Rs 2,361.70 on 2.9 lakh shares. The index has been the year's best large sector \u2014 the published one-year numbers put it near +27% \u2014 so a half-percent fall on a risk-off day is a pause rather than distribution, and capitalmarket.com lists it among the three sectors that outperformed the Nifty, which is the more useful way to read it. (ET's board at 16:15 for 28,536 and -0.49%; capitalmarket.com's closing note for the outperformance ranking; the stock moves are researchandinvest's 16:08 IST tables.)"
    },
    {
      name: "Nifty PSU Bank",
      changePct: -0.51,
      note: "The first fall after two sessions of leadership: 9,259 against Wednesday's 9,305.95, down 0.51% \u2014 still better than the Nifty's 0.61%, which is now three sessions in a row in which the state lenders have beaten the benchmark. Bank of India rose 1.78% to Rs 154.10 on 1.85 crore shares against a 52-week high of Rs 178.36, so the bid has not disappeared; it has narrowed to the second line. The sector is the cleanest read on the December rate question in the whole market: it has run 15.9% in a month on the expectation that the hiking cycle is over, and a December hike priced in earnest is the one thing that would take it back. (ET's board at 16:15 for 9,259 and -0.51%; the Bank of India move is researchandinvest's 16:08 IST gainers table; the one-month figure is ET's own 1M column.)"
    },
    {
      name: "Nifty Oil & Gas",
      changePct: -0.68,
      note: "Down 0.68% to 11,312, and the reason is the same crude price that lifted Nifty Energy: the marketing companies pay for the barrel and sell at a administered price, so $95 is a tax on them. BPCL -3.05%, HPCL -2.33% and Petronet LNG -3.27% were the visible damage, and Reliance Industries \u2014 the largest weight in the sector and in the market \u2014 was named among the Sensex gainers by BusinessLine and PTI, which is why an index of refiners and marketers fell only two-thirds of a percent. Watch this one against Nifty Energy: the two indices now trade the same input in opposite directions, and the spread between them is the cleanest measure of how much of the crude move the market thinks is permanent. (ET's board at 16:15 for 11,312 and -0.68%; the stock moves are researchandinvest's 16:08 IST losers table and PTI's Sensex list.)"
    },
    {
      name: "Nifty IT",
      changePct: -0.72,
      note: "Down 0.72% to 31,931.15, and the internals say this was a large-cap fall rather than a sector verdict: Mphasis rose 1.87% to Rs 2,455.00, Cyient 1.42% to Rs 1,104.90, Black Box 1.91% to Rs 900.70 and eClerx 1.87% to Rs 1,578.30, all in the Nifty 500's top forty gainers, while the index fell. The cause was global and it arrived overnight: Nvidia's co-founder and chief executive Jensen Huang resigned with immediate effect on Thursday, the stock fell 4.34% to $166.19 after dropping as much as 14.3% intraday, and the Nasdaq closed 0.39% lower. Indian IT has been the worst large sector of 2026 by a distance \u2014 the one-year number sits near -11% \u2014 so a half-percent-ish fall on an AI-leadership shock is the market saying it has already priced a lot of this. (ET's board at 16:15 for 31,931.15 and -0.72%; the Nvidia detail is capitalmarket.com's and Upstox's closing copy; the stock moves are researchandinvest's 16:08 IST gainers table.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: -0.72,
      note: "Down 0.72% to 27,856 from 28,057.15, giving back about half of Wednesday's 1.42%, and the damage was concentrated exactly where Wednesday's gain was: the lenders and asset managers rather than the insurers. Aditya Birla Sun Life AMC -3.66% to Rs 895.75, IIFL Finance -3.33% to Rs 641.10, Manappuram -3.73% to Rs 308.00, Muthoot Finance -3.17% to Rs 2,840.00, Shriram Finance -3.37% to Rs 970.00 \u2014 the five worst financials were all in the Nifty 500's top ten losers \u2014 with HDFC AMC -2.45%, CAMS -2.28% and Aditya Birla Capital -2.74% behind them. A rate-hike expectation is a funding-cost story for exactly this group, and the market took it in one session. (ET's board at 16:15 for 27,856 and -0.72%; the stock moves are researchandinvest's 16:08 IST losers table, cross-read against Upstox's Nifty 50 list, which carries Shriram at -3.37%.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: -0.76,
      note: "Down 0.76% to 29,978 from 30,206.05, ending a run in which this index had outperformed the state lenders for three straight sessions. The gap has now closed from both ends: PSU Bank fell 0.51% and this one 0.76%, so the private banks underperformed on the way down, which is what happens when the buying was valuation-led rather than quality-led. Nifty Bank's own fall of 0.79% to 61,034 is the composite version of the same fact, and it is the first time in a week that the banks have led the market lower rather than higher. (ET's board at 16:15 for 29,978, -0.76% and for Bank at 61,034, -0.79%; capitalmarket.com independently prints the same direction for both.)"
    },
    {
      name: "Nifty Bank",
      changePct: -0.79,
      note: "Down 0.79% to 61,034.10 from 61,518.50, the first fall in four sessions and a bigger one than the Nifty's 0.61% \u2014 the reverse of Wednesday, when the banks rose 1.19% against the index's 0.18%. This is the single most consequential number on the page for the next two weeks. The banking complex has done most of the work of November's rally, on the explicit premise that the rate cycle had peaked; October CPI at 6.09% is direct evidence against that premise, and the sector that gained the most from the premise is the one that has to re-price first. The published one-month return of +12.0% is what is now at risk, not the year's +3.9%. (ET's board at 16:15 for 61,034.10 and -0.79%; its 1M and 1Y columns for the return figures; Tradebrains and Zee Business both print Bank Nifty -0.79%.)"
    },
    {
      name: "Nifty Metal",
      changePct: -0.98,
      note: "Down 0.98% to 12,648 from Wednesday's 12,772.60, giving back the whole of that session's +0.96% and a little more. Hindalco Industries fell 2.12% and was the fourth-worst stock in the Nifty 50; the metal index is the most globally-driven of the domestic sectors, and on a day when the dollar index was up 0.04% to 103.21 and US 10-year yields rose to 5.129, the dollar-priced complex had no reason to bid. It is also the sector with the best one-year record on the board (+22.7%) and the second-best momentum rank, so a one-day 1% fall is noise inside a strong trend \u2014 unless the global yield move continues. (ET's board at 16:15 for 12,648 and -0.98%; Wednesday's 12,772.60 close is from this page's own prior edition and reconciles the two exactly; Hindalco is Upstox's and researchandinvest's.)"
    },
    {
      name: "Nifty Auto",
      changePct: -1.07,
      note: "The second-worst sector and the day's clearest loser by construction: 27,929.85, down 1.07%, with the two halves of the old Tata Motors leading it down \u2014 Tata Motors Passenger Vehicles -3.31% to Rs 287.40 and Tata Motors (the demerged commercial-vehicle entity) -4.38% to Rs 433.55 \u2014 followed by Ashok Leyland -2.73% to Rs 169.20 and CIE Automotive -2.60%. Not everything fell: Eicher Motors rose 1.34% to Rs 7,650.00 and was the best stock in the Nifty 50 ahead of its results, and Minda rose 1.77% to Rs 736.15, so this was a fall in the volume names rather than a verdict on the sector. Auto has lost ground on three of the last four sessions after a month in which it gained 12.5%. (ET's board at 16:15 for 27,929.85 and -1.07%; capitalmarket.com and Zee Business both print -1.07%; the stock moves are researchandinvest's 16:08 IST tables and Upstox's Nifty 50 list.)"
    },
    {
      name: "Nifty Realty",
      changePct: -1.39,
      note: "The worst sector of the day and the exact reversal of Wednesday's best: 921.25 against 934.25, down 13.00 points or 1.39%, giving back roughly a third of Wednesday's 4.51%. Every heavyweight fell and none of them by a small amount \u2014 Prestige Estates -2.59% to Rs 1,650.00, Sobha -2.1%, Brigade Enterprises -2.06%, Phoenix Mills -1.61%, DLF -1.37%, Godrej Properties -1.31%, Anant Raj -1.28% and Oberoi Realty -1.07% \u2014 which is what a sector-wide de-rating looks like rather than a stock story, and it is the answer to the question this page posed on Wednesday: the 4.51% was a squeeze in the most-shorted sector of the fortnight, not the start of a rotation. Real estate is the longest-duration trade on the board, so it is the first thing sold when the market starts pricing a hike. (capitalmarket.com's closing report carries the full list of realty falls; ET's board at 16:15 for 921.25 and -1.39%; Wednesday's 934.25 close is from this page's prior edition and 921.25 / 934.25 - 1 = -1.39% exactly.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 single-session price returns for 13 November 2026, taken from researchandinvest's full-universe gainers and losers tables, both stamped 16:08 IST after the close, and cross-read against CNBC-TV18's closing report, Upstox's Nifty 50 gainers and losers list, Moneycontrol's Taking Stock close, Zee Business's closing bell and capitalmarket.com's live sector and 'A' group files. The universe is the full 500 \u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \u2014 so a name outside the headline sub-indices still ranks. Cap tags are NSE's own size buckets (Nifty 100 = Largecap, Nifty Midcap 150 = Midcap, Nifty Smallcap 250 = Smallcap); where a name's constituent file could not be read at 17:30 IST the tag is the provider's size bucket, and no tag is used to claim index membership anywhere in this block.",
    gainers: [
      {
        name: "Hitachi Energy India",
        changePct: 10.68,
        cap: "Midcap",
        note: "The Nifty 500's biggest gainer by more than a point and a half: +10.68% to Rs 31,595.00 on 8.9 lakh shares, against a 52-week high of Rs 38,785.00 and a low of Rs 16,111.00. CNBC-TV18 attributes the move to strong order inflows and a healthy outlook, and the read-across was visible in the same table: GE Vernova T&D +5.24% to Rs 4,420.00, Siemens Energy India +2.90% to Rs 3,125.90, Kirloskar Oil Engines +3.30% to Rs 1,692.30, Cummins India +2.60% to Rs 4,369.00, Thermax +1.98%, Apar Industries +2.15%, R R Kabel +1.83%, ABB India +1.90% to Rs 7,054.50 and TD Power Systems +1.86%. That is the grid, transformer and capital-goods complex being bought as one block on a day the Nifty fell 0.61% \u2014 the same trade that took Hitachi Energy to a 52-week high in a month in which the sector's orders, not its margins, are the story. (researchandinvest's 16:08 IST gainers table for the price, the percentage and the volume; CNBC-TV18's closing report for the round-number '11%' and the order-inflow reason.)"
      },
      {
        name: "Amber Enterprises India",
        changePct: 9.07,
        cap: "Midcap",
        note: "+9.07% to Rs 6,772.00 on 27.2 lakh shares \u2014 the second-biggest gainer and the heaviest volume in the top three \u2014 against a 52-week high of Rs 8,974.00 and a low of Rs 5,400.50. CNBC-TV18 attributes it to higher-than-expected revenue growth in its results, and the size of the move is the point: this is an air-conditioner contract manufacturer whose earnings are seasonal and whose stock is 25% below its year's high, so a revenue beat is being bought as a de-rating reversing rather than as a single good quarter. Voltas, the branded end of the same trade, rose 1.65% to Rs 1,133.10 on 11.0 lakh shares in the same session, which is the smaller, more telling number. (researchandinvest's 16:08 IST gainers table; CNBC-TV18's closing report for the revenue-beat reason.)"
      },
      {
        name: "Anupam Rasayan India",
        changePct: 8.22,
        cap: "Smallcap",
        note: "+8.22% to Rs 1,300.60 on 17.4 lakh shares, against a 52-week high of Rs 1,415.00 and a low of Rs 1,053.60 \u2014 the third-best stock in the Nifty 500 and the day's best specialty-chemicals name, with no company announcement behind it that we could verify. The sector read is mixed rather than uniform, which is why this looks stock-specific: Clean Science and Technology rose 2.94% to Rs 724.00 and Swan Corp fell 2.67% to Rs 232.49, Sumitomo Chemical India -2.82% and Paradeep Phosphates -2.40% in the same session. An 8% move on a flat sector tape with no disclosed trigger is the kind of print to treat as flow rather than information. (researchandinvest's 16:08 IST tables for the price, the percentage, the volume and the 52-week range; the sector peers are from the same two tables.)"
      },
      {
        name: "Aegis Vopak Terminals",
        changePct: 7.05,
        cap: "Smallcap",
        note: "+7.05% to Rs 285.93 on 34.4 lakh shares, against a 52-week high of Rs 320.95 and a low of Rs 158.00 \u2014 the fourth-best gainer and one of the most heavily traded small caps of the session, turning over more than a third of the free float implied by that range. Aegis Vopak runs bulk liquid storage terminals at Indian ports, a business whose revenue is tied to throughput rather than to price, which is why it moves on volume news and not on the crude print that dominated the rest of the tape. It closed 11% under its year's high after a year in which it nearly doubled off the low. (researchandinvest's 16:08 IST gainers table for the price, percentage, volume and 52-week range.)"
      },
      {
        name: "ITI",
        changePct: 6.80,
        cap: "Smallcap",
        note: "+6.80% to Rs 268.07 on 2.34 crore shares \u2014 the heaviest volume of any name in the top ten gainers by a wide margin, and roughly eight times Aegis Vopak's \u2014 against a 52-week high of Rs 332.95 and a low of Rs 210.76. ITI is the state-owned telecom equipment maker, and a 6.8% move on that kind of turnover is a positioning event rather than an earnings one; there was no filing behind it that we could verify. Note the pairing: the telecom names were the day's second-strongest cluster after capital goods, with Bharti Hexacom +4.54% to Rs 1,665.50, Indus Towers +2.34% to Rs 396.00 and Tata Communications +1.69% to Rs 1,772.90, while Bharti Airtel rose 1.12% to Rs 2,119.50 and was the second-best stock in the Nifty 50. (researchandinvest's 16:08 IST gainers table; Upstox's Nifty 50 list for the Bharti Airtel move.)"
      }
    ],
    losers: [
      {
        name: "Techno Electric & Engineering",
        changePct: -5.64,
        cap: "Smallcap",
        note: "The Nifty 500's worst stock: -5.64% to Rs 958.75 on 8.1 lakh shares, against a 52-week high of Rs 1,383.90 and a low of Rs 802.00. Techno Electric builds and runs power transmission and distribution infrastructure \u2014 the same end-market as Hitachi Energy, which rose 10.68% in the same session \u2014 so the divergence is the whole story of the day in one pair: the market paid up for order books and sold the EPC contractor that has to execute them at a fixed price. There was no company announcement we could verify behind the fall. (researchandinvest's 16:08 IST losers table for the price, percentage, volume and 52-week range; the Hitachi Energy move is from the same source's gainers table.)"
      },
      {
        name: "Gabriel India",
        changePct: -5.39,
        cap: "Smallcap",
        note: "-5.39% to Rs 1,552.70 on 12.3 lakh shares, one session after leading the entire Nifty 500 with +16.53% to Rs 1,641.20 \u2014 so it has given back roughly a third of Wednesday's gain and sits 8.1% under its 52-week high of Rs 1,690.00, with a low of Rs 795.70 behind it. Gabriel makes shock absorbers and ride-control parts, largely for two-wheelers and passenger cars, and the round trip is the cleanest illustration of what a momentum print looks like: a 16% day followed by a 5% day on nothing but the same flow reversing. Two-wheeler and auto-component names were the day's weakest cluster as Nifty Auto fell 1.07%. (researchandinvest's 16:08 IST losers table; Wednesday's +16.53% to Rs 1,641.20 is from this page's prior edition and the same source.)"
      },
      {
        name: "Tata Motors",
        changePct: -4.38,
        cap: "Largecap",
        note: "-4.38% to Rs 433.55 on 68.8 lakh shares \u2014 the demerged commercial-vehicle entity, now separately listed, and the second auto name in this list. Its former sibling Tata Motors Passenger Vehicles fell 3.31% to Rs 287.40 and was the second-worst stock in the Nifty 50, so both halves of the old company fell 3-4% on a day the sector lost 1.07%: this was a sector move with a stock-specific amplifier, and the amplifier is that both had run. TMPV's 52-week high of Rs 417.50 sits 45% above today's close, and TMCV's own history does not yet have a full year of its own to compare against after the demerger. (researchandinvest's 16:08 IST losers table for both Tata Motors lines; Upstox's Nifty 50 list for TMPV's -3.31% at Rs 287.40.)"
      },
      {
        name: "Reliance Power",
        changePct: -3.79,
        cap: "Smallcap",
        note: "-3.79% to Rs 18.55 on 2.30 crore shares, against a 52-week high of Rs 43.37 and a low of Rs 15.98 \u2014 a stock still 57% below its year's high and only 16% above its low, which is why a 3.8% fall matters more here than the same move would in a large cap. The volume is the tell: 2.3 crore shares is the second-heaviest turnover in the losers' top five, and this is a name that trades on retail and momentum flow rather than on earnings. Power generation peers were mixed \u2014 Tata Power fell 2.52% to Rs 348.00 while NTPC was named among the Sensex laggards by PTI. (researchandinvest's 16:08 IST losers table for the price, percentage, volume and 52-week range; PTI's Sensex list for NTPC.)"
      },
      {
        name: "Manappuram Finance",
        changePct: -3.73,
        cap: "Midcap",
        note: "-3.73% to Rs 308.00 on 3.20 crore shares \u2014 the heaviest volume in the losers' top five \u2014 against a 52-week high of Rs 381.55 and a low of Rs 245.15. It is the gold-loan NBFC, and it fell with the whole lender complex rather than on its own news: IIFL Finance -3.33%, Muthoot Finance -3.17%, Shriram Finance -3.37% and Aditya Birla Capital -2.74% in the same session. For this group a December rate hike is a direct funding-cost line, and unlike the banks they cannot pass it on as quickly; that is why five of the ten worst Nifty 500 stocks on Friday were lenders. (researchandinvest's 16:08 IST losers table; the peer moves are from the same table.)"
      }
    ]
  },
  watch: [
    {
      title: "December is now a live rate-hike meeting, and the market began pricing it on Friday",
      detail: "October CPI at 6.09% is the first breach of the RBI's 6% upper tolerance band in two years, and it did not arrive alone: September was 5.54% and food inflation jumped to 8.94% from 7.74%. BusinessLine and PTI both report economists moving to a December repo hike within hours of the print, and the bond market moved first \u2014 the 10-year benchmark yield rose to 7.302% from 7.249%, a five-basis-point repricing in a single session. Three things to watch from here. The December policy statement itself, which until Friday was priced as a hold. The next CPI print, because a second month above 6% turns a base effect into a trend. And the rupee, which closed at 94.2025 against the dollar from 94.1200 and is the channel through which imported inflation reaches the same number. The equity market's own tell is simpler: the banking complex did most of November's work on the premise that the cycle had peaked, and Friday was the first session in four in which Nifty Bank (-0.79%) fell harder than the Nifty (-0.61%)."
    },
    {
      title: "25,000-24,800 is now the support that matters, and Friday's low stopped 54 points above the top of it",
      detail: "The Nifty's 25,054.40 low on Friday is the first test of the support zone the published technical map has carried all week, and it held on a closing basis \u2014 the index finished 90 points above it. The resistance side is unchanged and now three sessions old: 25,400-25,500, which the index has approached from below three times without closing through, with Wednesday's 25,384.80 the closest attempt. The asymmetry is what to watch. A close below 25,000 puts the 20-day average and the 24,800-24,700 band in play, and the strategists who called this week's rally overbought \u2014 LKP's Vatsal Bhuva looking for a retracement to 25,000-24,800, Religare's Ajit Mishra putting the buy zone at 24,800-25,000 with an invalidation at 24,600 \u2014 get their move. A recovery above 25,300 keeps the higher-highs sequence alive into the 25,500 test. Friday's close of 25,144.30 sits almost exactly in the middle of that range, which is why Monday's first hour is the whole question."
    },
    {
      title: "Crude above $95 with a rupee at 94.20 is the combination that decides whether this is a pause or a turn",
      detail: "Brent for December settlement closed at $95.28, down 54 cents on the day but up more than $3 on the week, after touching $96.76 intraday on President Trump's comments that he would not hesitate to resume military strikes on Iran. Layer on a rupee at 94.20 \u2014 down 8 paise on the day and 4.6% for the year \u2014 and the import bill is being hit twice. The equity market has already started to sort itself along that line: upstream ONGC rose 0.47%, while the downstream BPCL -3.05%, HPCL -2.33% and Petronet LNG -3.27% fell, and Nifty Energy closed +0.03% against Nifty Oil & Gas -0.68%. What has not yet repriced is the third layer \u2014 autos, paints and airlines, where crude is a raw material and a weak rupee is a translation loss. Nifty Auto fell 1.07% on Friday, but on volume names rather than on input costs. If $95 holds through next week, that changes."
    },
    {
      title: "The Q2 FY27 season now costs a stock 5-13% a session without moving the index, and Friday's example was Grasim",
      detail: "Grasim Industries reported a consolidated net loss of Rs 234 crore for the quarter ended 30 September against a Rs 595 crore profit a year earlier, and fell 2.60% to Rs 3,034.00 \u2014 a modest fall for a swing to loss, because the market had already marked it down. The wider pattern is what matters. Friday alone produced Techno Electric -5.64%, Gabriel India -5.39% (a day after +16.53%), Tata Motors -4.38%, Reliance Power -3.79% and Manappuram -3.73% in the Nifty 500, and Thursday produced Page Industries at -12.9% on revenue growth of 11.5% and profit growth of 3.8%. The Smallcap 250 fell 0.30% on the same tape. This is a market where a quarterly miss is a portfolio event and not an index event, so the risk in the next two weeks of results sits in individual holdings and is invisible in the headline number."
    },
    {
      title: "Nvidia lost its chief executive on Thursday, and the AI trade lost its reference price",
      detail: "Jensen Huang resigned with immediate effect; chief financial officer Colette Kress was named interim chief executive while the board searches for a successor, and Harvey C. Jones was appointed chairman. The stock fell 4.34% to $166.19 after dropping as much as 14.3% intraday, the Nasdaq closed 0.39% lower and the S&P 500 0.35%, and Nebius Group fell 16.84% after cutting its 2026 revenue outlook. The Indian read-across is not obvious and that is why it is worth watching: Nifty IT fell only 0.72%, with Mphasis +1.87%, Cyient +1.42% and Black Box +1.91% rising, while the capital-goods names that have run on the same AI-infrastructure theme \u2014 Hitachi Energy +10.68%, GE Vernova T&D +5.24%, Siemens Energy +2.90% \u2014 were the day's best performers. Watch Monday's Asian open: if the AI-infrastructure complex holds while Nvidia stays weak, the Indian trade is about grid and data-centre orders and not about the chip cycle."
    }
  ],
  reads: [
    {
      title: "Stock Market Today Highlights, Nov 13: Markets snap 3-day rally; Sensex drops 318 points, Nifty slips below 25,150",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-13-november-2026/article71693403.ece"
    },
    {
      title: "Taking Stock: Market snaps 3-day gains; Nifty below 25,150, Sensex slips 319 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/stocks/taking-stock-market-snaps-3-day-gains-nifty-below-25-150-sensex-slips-319-pts-14079376.html"
    },
    {
      title: "Market wrap, Nov 13: Indices snap winning streak; SENSEX falls 319 pts, NIFTY50 ends at 25,144; Shriram Fin top loser",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-nov-13-indices-snap-winning-streak-sensex-falls-319-pts-nifty-50-ends-at-25-144-shriram-fin-top-loser/article-203442/"
    },
    {
      title: "Sensex falls 319 points, Nifty slips below 25,200: What dragged Dalal Street today?",
      source: "CNBC-TV18",
      url: "https://www.cnbctv18.com/market/sensex-falls-319-points-nifty-slips-below-25200-what-dragged-dalal-street-today-20033516.htm"
    },
    {
      title: "Nifty settles below 25,150 mark; realty index underperforms",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/live-news/nifty-settles-below-25-150-mark;-realty-index-underperforms/1749389"
    }
  ],

  ratio: {
    name: "Current Ratio",
    category: "Liquidity / short-term solvency",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288); every page cited below is the printed page number. The balance-sheet lines are at 31 March 2026 and 31 March 2025, and the profit-and-loss line covers the year ended 31 March 2026.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = total current assets \u00f7 total current liabilities. Both sides come off the Consolidated Balance Sheet, and both are totals the company prints rather than subtotals you assemble: current assets are everything expected to be turned into cash, sold or consumed within twelve months (current investments, trade receivables, cash and cash equivalents, current loans, other current financial assets, current income tax assets and other current assets), and current liabilities are everything expected to be paid within twelve months (current lease liabilities, trade payables, other current financial liabilities, other current liabilities, provisions and current income tax liabilities). The answer is a plain multiple: rupees of near-cash available per rupee of near-term obligation.",
    formulaNote: "This is the first ratio most people are taught and the one most often read without looking at what moved. Infosys' current ratio fell from 2.27 to 1.98 \u2014 12.8% \u2014 in a year in which revenue grew 9.6%, the company stayed net-cash and its total equity was Rs 93,297 crore. Nothing about that is a liquidity problem. What happened is arithmetic on the two totals: current liabilities grew 22.1% while current assets grew 6.6%, so the ratio had to fall even though both sides got bigger. The reason to work the ratio rather than read it is the next question \u2014 which current liability grew? \u2014 and the answer, on p. 317, is other financial liabilities (+Rs 3,345 crore), other current liabilities (+Rs 4,014 crore), current income tax liabilities (+Rs 791 crore) and trade payables (+Rs 580 crore). Those are the balances of a company that has collected less, accrued more and owes more tax, not one that has borrowed. And that is the second lesson: the ratio has a denominator made of payables and accruals, so a company can 'improve' it by paying suppliers late and 'worsen' it by paying them early.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Total current assets, 31 March 2026 \u2014 the numerator", value: "Rs 1,03,489 crore", page: "p. 317" },
      { label: "Total current liabilities, 31 March 2026 \u2014 the denominator", value: "Rs 52,322 crore", page: "p. 317" },
      { label: "Total current assets, 31 March 2025 \u2014 the prior-year numerator", value: "Rs 97,099 crore", page: "p. 317" },
      { label: "Total current liabilities, 31 March 2025 \u2014 the prior-year denominator", value: "Rs 42,850 crore", page: "p. 317" },
      { label: "Cash and cash equivalents, 31 March 2026 \u2014 the most liquid line in the numerator", value: "Rs 22,201 crore", page: "p. 317" },
      { label: "Current investments, 31 March 2026 \u2014 the second most liquid", value: "Rs 12,950 crore", page: "p. 317" },
      { label: "Trade receivables, current, 31 March 2026 \u2014 the largest single line in the numerator", value: "Rs 35,234 crore", page: "p. 317" },
      { label: "Other financial assets, current, 31 March 2026", value: "Rs 15,890 crore", page: "p. 317" },
      { label: "Other current assets, 31 March 2026 \u2014 the least liquid line, and the one stripped out for the strict variant", value: "Rs 15,145 crore", page: "p. 317" },
      { label: "Current loans, 31 March 2026", value: "Rs 234 crore", page: "p. 317" },
      { label: "Current income tax assets (net), 31 March 2026", value: "Rs 1,835 crore", page: "p. 317" },
      { label: "Trade payables, current, 31 March 2026 \u2014 the smallest of the six liability lines", value: "Rs 4,744 crore", page: "p. 317" },
      { label: "Other financial liabilities, current, 31 March 2026 \u2014 the biggest single addition to the denominator", value: "Rs 21,483 crore", page: "p. 317" },
      { label: "Other current liabilities, 31 March 2026 \u2014 the fastest-growing line, up 34.1%", value: "Rs 15,779 crore", page: "p. 317" },
      { label: "Provisions, current, 31 March 2026", value: "Rs 1,512 crore", page: "p. 317" },
      { label: "Current income tax liabilities (net), 31 March 2026", value: "Rs 5,644 crore", page: "p. 317" },
      { label: "Lease liabilities, current, 31 March 2026 \u2014 the only 'debt' inside current liabilities", value: "Rs 3,160 crore", page: "p. 317" },
      { label: "Total assets, 31 March 2026 \u2014 the scale the current block sits inside", value: "Rs 1,55,967 crore", page: "p. 317" },
      { label: "Total equity, 31 March 2026 \u2014 unchanged by the ratio, but the reason a 1.98 is not a warning", value: "Rs 93,297 crore", page: "p. 317" },
      { label: "Revenue from operations, FY26 \u2014 the context for a balance sheet that grew on both sides", value: "Rs 1,78,650 crore", page: "p. 318" }
    ],
    working: "Step 1 \u2014 Take the two totals off the Consolidated Balance Sheet (p. 317) for the current year: current assets Rs 1,03,489 crore, current liabilities Rs 52,322 crore. Step 2 \u2014 Divide: 1,03,489 \u00f7 52,322 = 1.9779, so 1.98 times. Step 3 \u2014 Do the prior year identically from the same page: 97,099 \u00f7 42,850 = 2.2661, so 2.27 times. The ratio fell 0.29 turns, or 12.8%. Step 4 \u2014 Explain the fall by looking at the growth rate of each side, not the levels: current assets 1,03,489 \u00f7 97,099 = +6.58%; current liabilities 52,322 \u00f7 42,850 = +22.11%. Step 5 \u2014 Rebuild both totals from their components on p. 317 to prove the printed totals: assets 12,950 + 35,234 + 22,201 + 234 + 15,890 + 1,835 + 15,145 = 1,03,489; liabilities 3,160 + 4,744 + 21,483 + 15,779 + 1,512 + 5,644 = 52,322. Both reconcile to the rupee. Step 6 \u2014 Locate the growth inside the denominator: other financial liabilities 21,483 against 18,138 = +Rs 3,345 crore (+18.4%); other current liabilities 15,779 against 11,765 = +Rs 4,014 crore (+34.1%); current income tax liabilities 5,644 against 4,853 = +Rs 791 crore; trade payables 4,744 against 4,164 = +Rs 580 crore; current lease liabilities 3,160 against 2,455 = +Rs 705 crore; provisions 1,512 against 1,475 = +Rs 37 crore. Those six changes sum to +Rs 9,472 crore, which is the whole of the Rs 9,472 crore rise in current liabilities. Step 7 \u2014 Run the strict variant, stripping out the least liquid line in the numerator (other current assets, p. 317): (1,03,489 \u2212 15,145) \u00f7 52,322 = 88,344 \u00f7 52,322 = 1.6885, so 1.69 times. Step 8 \u2014 Run the cash variant on the two genuinely liquid lines: (22,201 + 12,950) \u00f7 52,322 = 35,151 \u00f7 52,322 = 0.6718, so 0.67 times. Step 9 \u2014 Convert the ratio into rupees of working capital, which is what actually moved: 1,03,489 \u2212 52,322 = Rs 51,167 crore at 31 March 2026 against 97,099 \u2212 42,850 = Rs 54,249 crore a year earlier, a fall of Rs 3,082 crore \u2014 which is the same number Infosys prints as 'net current assets' on its own IFRS three-year data sheet, and the same number a 1.98 and a 2.27 are describing.",
    result: "1.98 times at 31 March 2026 against 2.27 times at 31 March 2025 \u2014 a fall of 0.29 turns, or 12.8%, on working capital that shrank from Rs 54,249 crore to Rs 51,167 crore; 1.69 times on a strict definition that strips out other current assets, and 0.67 times on cash and current investments alone",
    meaning: "A current ratio is a payment calendar expressed as a multiple, and Infosys is the case that shows both what it measures and what it does not. The 2.27 to 1.98 fall looks like deterioration and is, in the narrow sense: for every rupee falling due in the next twelve months, the company now holds Rs 1.98 of things that will turn into rupees, against Rs 2.27 a year ago. But the company's total equity is Rs 93,297 crore against total assets of Rs 1,55,967 crore, it holds Rs 35,151 crore in cash and current investments alone, and the Rs 9,176 crore a screen calls its borrowings is entirely lease liabilities for offices it occupies. There is no short-term solvency question here at all. What the ratio is actually telling you is that the payment side of the balance sheet grew four times faster than the collection side \u2014 other current liabilities up 34.1% and other financial liabilities up 18.4% against trade receivables up 13.1% \u2014 which is a working-capital cycle question, not a credit question. The second lesson is the one that trips up screens: with no inventory, the current ratio and the quick ratio are arithmetically identical, which is why providers print 1.98 twice; strip the genuinely slow line out and the strict number is 1.69, and the cash number is 0.67. A company can run a 0.67 cash ratio indefinitely if its receivables arrive \u2014 which is what a services business is. Third lesson: the denominator is discretionary at the margin. Paying suppliers in 30 days instead of 45 raises this ratio without a rupee of new business; stretching them to 60 lowers it. So read the direction over years, not the level on a day: 2.00, 1.81, 2.31, 2.27, 1.98 over the last five March-ends is a company converting a very cash-rich pandemic balance sheet into ordinary working capital, and 1.98 is still a fortress.",
    crossCheck: "Four checks and the first three are exact. Moneycontrol's key-ratios page prints a current ratio of 1.98 for Mar 26 and 2.27 for Mar 25; TipRanks prints the same pair, with the same quick-ratio pair; smart-investing.in prints 1.98 and 2.27 with the five-year series behind them (Mar 24 2.31, Mar 23 1.81, Mar 22 2.00). Infosys' own IFRS Three Year Overview balance-sheet data sheet prints net current assets of Rs 51,167 crore for FY26 and Rs 54,249 crore for FY25 \u2014 exactly 1,03,489 \u2212 52,322 and 97,099 \u2212 42,850 \u2014 which validates both printed totals without restating the ratio. The convention gaps are worth knowing before you compare this number with another site's. Screener.in's consolidated balance sheet uses a different split of the same balance sheet: it shows 'other liabilities' of Rs 52,260 crore against the report's Rs 52,322 crore of current liabilities (a Rs 62 crore difference, because it classifies the current lease liability and part of provisions differently) and folds current and non-current investments into a single Rs 21,880 crore line, so its current ratio cannot be reproduced from its printed columns \u2014 the check against Screener is on the totals (total assets Rs 1,54,288 crore in its presentation, reserves Rs 90,828 crore, borrowings Rs 9,176 crore), not on the ratio. Moneycontrol and TipRanks print a quick ratio identical to the current ratio because Infosys carries no inventory; that is true but it also means they are not stripping other current assets, which is why our strict variant is 1.69 rather than 1.98. And GuruFocus prints 1.96 for the fiscal year because it converts the balance sheet to US dollars at its own rate \u2014 in rupees the answer is 1.98, and the difference is translation, not accounting.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for total current assets Rs 1,03,489 crore and total current liabilities Rs 52,322 crore at 31 March 2026 with the FY25 comparatives of Rs 97,099 crore and Rs 42,850 crore; and for the component lines used in the rebuild \u2014 current investments Rs 12,950 crore, trade receivables Rs 35,234 crore, cash and cash equivalents Rs 22,201 crore, current loans Rs 234 crore, other current financial assets Rs 15,890 crore, current income tax assets Rs 1,835 crore and other current assets Rs 15,145 crore on the asset side; current lease liabilities Rs 3,160 crore, trade payables Rs 4,744 crore, other current financial liabilities Rs 21,483 crore, other current liabilities Rs 15,779 crore, provisions Rs 1,512 crore and current income tax liabilities Rs 5,644 crore on the liability side, with total assets of Rs 1,55,967 crore and total equity of Rs 93,297 crore at the same date; and the Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288), for revenue from operations of Rs 1,78,650 crore. Cross-checked against Moneycontrol's Infosys key-ratios page (1.98 for Mar 26, 2.27 for Mar 25), TipRanks (1.98 / 2.27), smart-investing.in (1.98 / 2.27 with the five-year series), Infosys' IFRS Three Year Overview balance-sheet data sheet (net current assets Rs 51,167 crore for FY26 and Rs 54,249 crore for FY25) and Screener.in's consolidated balance sheet (total assets, reserves and borrowings), with the convention gaps noted above."
  }
};
