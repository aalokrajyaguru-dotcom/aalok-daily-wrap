const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Thursday, 12 November 2026, 5:30 PM IST",
  asOfLabel: "Closing levels as of the 12 November 2026 close (3:30 PM IST); every day move measured from the 11 November close, and every weekly move from the 6 November close",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition \u2014 they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee \u2014 a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25299.35,
      dayChange: 44.30,
      dayChangePct: 0.18,
      weekChangePct: 1.07, // vs the 6 Nov (prior Friday) close of 25,030.35
      spark: [25030.35, 24986.40, 25044.65, 25255.05, 25299.35], // last 5 closes: 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov \u2014 10 Nov was a holiday
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The third straight gain, the highest close since 26 February 2026, and the closest the index has come to the wall it has been talking about all week. The Nifty opened at 25,213.50 on Wednesday's 25,255.05, dipped to 25,142.95 in the morning, ran to 25,384.80 in the afternoon and settled at 25,299.35, up 44.30 points or 0.18%. Note the shape: the close is 85 points under the high and 156 above the low, so the day was bought and held rather than gapped and sold \\u2014 the opposite of Wednesday's 329-point giveaway. The index is now +1.07% on the week against the 6 November close of 25,030.35 and +1.5% off the 1 October close. What the headline hides is the rotation: only 20 of the 50 constituents rose and 30 fell, so a 0.18% index gain was produced by financials and real estate while autos, FMCG and IT were sold. India VIX fell 5.35% to 16.62 from 17.56, its calmest print of the week. (researchandinvest's 16:02 IST index table carries 25,299.35, +0.18%, the 25,384.80 high, the 25,142.95 low and the 25,255.05 previous close; Goodreturns' NSE sector watch, hindi.economictimes' 3:47 pm table, Moneycontrol, HDFC Sky, BusinessLine, PTI and Business Standard all carry 25,299.35 and +44.30.)"
    },
    {
      name: "Nifty Next 50",
      close: 73481.25,
      dayChange: -4.95,
      dayChangePct: -0.01,
      weekChangePct: 2.54, // vs the 6 Nov (prior Friday) close of 71,657.80
      spark: [71657.80, 71991.70, 72789.45, 73486.20, 73481.25], // last 5 closes: 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov
      returns: { oneY: 3.40, threeY: 16.58, fiveY: 10.70 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The only one of the five cards to close red, and it closed red by four rupees ninety-five paise: 73,481.25 against Wednesday's 73,486.20, a fall of 0.01%. That is a flat line, not a signal, but the flatness is the point \\u2014 after leading the Nifty on Wednesday (+0.96% against +0.84%) this basket stopped leading on a day the Smallcap 250 rose 1.10%. The internals say the same: 25 of the 50 constituents advanced and 25 declined. It traded 73,238.55 to 73,948.80, so the intraday range was 710 points and the close landed 467 under the high. On the week it is still +2.54%, second only to the Smallcap 250's +3.50%, and it sits 2.0% below its 52-week high of 75,000.40. Read it as the first pause in a four-session rotation down the market, not as the end of it: the money did not leave the broader market on Thursday, it went one rung lower. (researchandinvest's 16:02 IST table carries 73,481.25, -0.01%, the 73,948.80 high, the 73,238.55 low and the 73,486.20 previous close; hindi.economictimes' 3:47 pm table and Goodreturns both carry 73,481.25 and -0.01%; Anand Rathi's 12:04 pm snapshot carried 73,393.40 and -0.13%, an intraday print.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22760.75,
      dayChange: 162.80,
      dayChangePct: 0.72,
      weekChangePct: 2.20, // vs the 6 Nov (prior Friday) close of 22,271.15
      spark: [22271.15, 22327.85, 22408.55, 22597.95, 22760.75], // last 5 closes: 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov
      returns: { oneY: 1.59, threeY: 14.20, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Up 162.80 points, or 0.72%, to 22,760.75 \\u2014 four times the Nifty's gain and the fourth straight session in which the broader market has beaten the benchmark. It ran 22,555.25 to 22,820.85, closing 60 points under the high. The nesting is instructive: Nifty Midcap Select rose 0.91% and Midcap 100 0.85%, while this wider 150-stock pool managed 0.72% \\u2014 so the largest and most liquid mid-caps did the work and the tail lagged, which is what a financial-led day looks like in this index. The movers inside it were the theme of the session in miniature: PB Fintech +7.59% to Rs 1,050.10, One 97 Communications (Paytm) +7.31% to Rs 1,925, Kalyan Jewellers +7.10% to Rs 710.90, Aditya Birla Capital +5.93% to Rs 419.50 and Phoenix Mills +5.57% to Rs 2,292, against Page Industries' 12.9% collapse on its September-quarter numbers. (researchandinvest's 16:02 IST table for 22,760.75, +0.72%, the 22,820.85 high, the 22,555.25 low and the 22,597.95 previous close; hindi.economictimes' 3:47 pm table carries 22,760.75, +162.80 and +0.72% with 87 advances to 62 declines; Moneycontrol's broader-market wrap carries the Midcap 100 at +0.85% to 62,039.00; the stock moves are researchandinvest's Nifty 500 table and Upstox's Midcap 100 list.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17994.50,
      dayChange: 196.35,
      dayChangePct: 1.10,
      weekChangePct: 3.50, // vs the 6 Nov (prior Friday) close of 17,386.15
      spark: [17386.15, 17594.10, 17577.00, 17798.15, 17994.50], // last 5 closes: 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov
      returns: { oneY: 1.90, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The day's best of the five cards for the second session running, and the one that makes the day's real argument: +196.35 points, or 1.10%, to 17,994.50, from a 17,840.80 low to an 18,030.20 high. On the week it is +3.50%, the best of any card. Breadth inside the index agreed \\u2014 165 constituents advanced and 83 declined. The detail that matters is where the day's biggest moves were: of the ten best-performing stocks in the entire Nifty 500 on Thursday, seven are on NSE's Nifty Smallcap 250 list \\u2014 Gabriel India +16.53% to Rs 1,641.20, Aditya Birla Real Estate +10.16% to Rs 1,198, Cupid +8.70% to Rs 384.80, Avanti Feeds +8.35% to Rs 762.90, Elecon +5.82%, Anant Raj +5.68% and Signatureglobal +5.27%. That is not a defensive tape; it is a market paying up for the smallest, least liquid names while the Sensex does nothing. (researchandinvest's 16:02 IST table for 17,994.50, +1.10%, the 18,030.20 high, the 17,840.80 low and the 17,798.15 previous close; hindi.economictimes' 3:47 pm table carries 17,994.50, +196.35 and +1.10% with 165 advances to 83 declines; Moneycontrol and Upstox both call the Smallcap 100 the day's outstanding index at +1.12% to 19,706.75; membership from NSE's Nifty Smallcap 250 constituent file.)"
    },
    {
      name: "BSE SME Index",
      close: null, // today's close not published by any provider reachable at the time of this edition \u2014 see the note
      dayChange: null,
      dayChangePct: null,
      weekChangePct: null,
      spark: [115864.00, 115996.69, 117740.39, 116940.52, 117661.57], // 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov, 11 Nov \u2014 today's close unverified, so the spark ends at the last confirmed close
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Left blank rather than guessed, for the third edition running, and the reason is the same each time: BSE Indices' own series for this index is published with a lag. Its chart data, read at 5:30 pm on 12 November, still ends at the 11 November value of 1,17,661.57. What can be said without guessing is the direction and the shape. The index opened at 1,17,722.92 on Wednesday's 1,17,661.57 and traded up through the day: Angel One printed 1,17,763.22 (+0.09%) at 13:33, Anand Rathi 1,17,959.38 (+0.25%) at 12:20 and 1,17,994.12 (+0.28%) at 11:54, on a day range of 1,17,720.36 to 1,18,435.16 \\u2014 a 715-point range that never broke below Wednesday's close. None of those is a close. The index remains 4.3% below its 52-week high of 1,23,353.65 and 60% above its 52-week low of 73,866.86, and on Anand Rathi's closing series it is up 3.58% over the week. The level will be filled in on the next edition. (BSE Indices' index page for BSE SME IPO, code 76, chart data ending 11 Nov 2026; Anand Rathi's BSE SME IPO page, price history and closing-price table through 11 Nov; Angel One's BSE SME IPO quote at 13:33 on 12 Nov; livemint's 11 Nov close of 1,17,661.57, +721.05, +0.62%.)"
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,299.35 and the Sensex at 81,911.01 as realty jumps 4.51% and the small caps run \\u2014 a third straight gain in which only 20 of the Nifty 50 rose",
    summary: "The third session of November's second leg added almost nothing to the index and a great deal to the story. The Nifty opened at 25,213.50 on Wednesday's 25,255.05, fell to 25,142.95, ran to 25,384.80 in the afternoon and closed at 25,299.35, up 44.30 points or 0.18%; the Sensex ranged 81,576.15 to 82,325.61 and settled at 81,911.01, up 31.61 points or 0.04%. Both are the highest closes since 26 February 2026 and both are the third consecutive gain \\u2014 but the composition inverted completely. Wednesday was financials and autos; Thursday was real estate, media and the small end. Nifty Realty rose 4.51% to 934.25, closing at its high of 934.45 after a 43.45-point range, with Aditya Birla Real Estate +10.16% to Rs 1,198, Anant Raj +5.68%, Phoenix Mills +5.57% to Rs 2,292, Signatureglobal +5.27%, Godrej Properties +4.50%, Sobha +4.40%, Lodha +4.38% to Rs 1,226, Prestige +4.24%, Oberoi +4.17% to Rs 1,817 and DLF +3.59% to Rs 769.30. Nifty Media added 2.46% to 1,761.25 on PVR Inox +4.37%, Prime Focus +3.91% and Zee +3.73%. The financial complex carried on where it left off \\u2014 Financial Services +1.42% to 28,057.15, PSU Bank +1.51% to 9,305.95, Bank +1.19% to 61,518.50, Private Bank +0.87% to 30,206.05 \\u2014 and the Nifty's four best stocks were all financial: HDFC Life +4.23% to Rs 597.80, Shriram Finance +3.58% to Rs 1,003.80, Bajaj Finance +3.36% to Rs 1,115 and SBI +2.38% to Rs 1,085. What fell fell for reasons that were already visible on Wednesday. Nifty Auto lost 1.02% to 28,231.00, a second day of reversal after an eight-session run, with M&M -2.23% to Rs 3,387.70, Motherson -2.57%, Hyundai -2.32%, Maruti -1.65% and Exide -1.52%; Nifty FMCG -0.74% on HUL -2.46% to Rs 1,972.60 and Nestle -1.92% to Rs 1,263.30; Nifty IT -0.41% on TCS -1.54% to Rs 2,434.10; Nifty Energy -0.42% on HPCL -2.67%, Chennai Petroleum -2.64% and IOC -2.02%. Breadth stayed positive but narrowed: 2,377 advances to 1,878 declines and 195 unchanged on the NSE, and only 20 of the Nifty 50 closed higher against 30 that fell. The broader market did the work \\u2014 Smallcap 250 +1.10% to 17,994.50, Midcap 150 +0.72% to 22,760.75, Nifty 500 +0.36% to 23,865.80 \\u2014 while Nifty Next 50 slipped 0.01% to 73,481.25, the only one of the five broad cards in the red. India VIX fell 5.35% to 16.62 from 17.56. The fuel was the same fuel: FPIs have bought $6.43 billion of Indian equities in November, their biggest monthly purchase in more than two years, restoring India to the fifth-largest market by capitalisation; Brent slipped 0.44% to $92.50; and the rupee closed 33 paise weaker at 94.04 (provisional), which is the one input that did not help. The day's most useful number is not the index: it is that the Nifty has now traded up to 25,384.80 without clearing 25,500, and that the buying is happening below the headline rather than in it.",
    stats: ["Nifty +0.18%", "Sensex +0.04%"],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
    {
      date: "2026-11-06",
      label: "Fri 6 Nov",
      niftyClose: 25030.35,
      niftyChangePct: 2.01,
      sensexChangePct: 2.17,
      note: "The seventh straight gain and the first close above 25,000 since 27 February, made by two banks and almost nothing else. The Nifty opened at 24,538.20, dipped to 24,388.00 and closed at its high of 25,030.35, up 493.75 points or 2.01%; the Sensex ran from 79,413.66 to 81,028.02, up 1,718.01 points or 2.17%, also at its high. ICICI Bank +4.75% to Rs 1,571.20 and HDFC Bank +3.72% to Rs 788.25 supplied most of the index arithmetic, with HDFC Life +3.95%, M&M +5.11%, Titan +3.42% and Bharti Airtel +2.45% behind them. The fuel was Thursday's foreign flow \\u2014 FIIs bought Rs 14,975 crore of cash equities, the largest single-day purchase in nearly six years \\u2014 plus a rupee at a six-month high of 93.90 against 94.41 and Brent 0.71% lower at $97.59. Sectorally it was a financials day and almost only that: Private Bank +3.22%, Financial Services +2.57%, Bank +2.27% to 59,086.00, Consumer Durables +1.70%, Pharma +1.21%, Infra +0.77%, Auto +0.76%, FMCG +0.67%, Metal +0.66% and IT only +0.43% to 32,977.90 despite a 5.52% overnight fall in the Nasdaq. What fell fell hard: Media -1.52%, Defence -0.92% and Energy -0.05%, with BSE Capital Goods -1.36% as Thermax collapsed 17.27% on a Q2 miss, Astral 9.68% on a 13.1% margin and Apar Industries 9.65%. Breadth was the tell: 1,438 NSE advances against 2,141 declines and 127 unchanged, the Midcap 150 -0.09% to 22,271.15, the Smallcap 250 -0.85% to 17,386.15, the Nifty 500 only +1.00% to 23,456.95 and the BSE SME IPO index +0.11% to 1,15,996.69 on 86 advances to 97 declines. India VIX rose 13.35% to 17.66 while the index rose 2.01%. The next session was the Muhurat trading hour on Sunday, 8 November, 2:20 pm to 3:30 pm."
    },
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
    }
  ],

  sectors: [
    {
      name: "Nifty Realty",
      changePct: 4.51,
      note: "The day's engine, and the most violent single-sector move since the rally began: +4.51% to 934.25 from Wednesday's 893.95, having opened at 891.80, dipped to 890.80 and closed at 934.45 \\u2014 within 20 paise of its high. Every one of the index's heavyweights rose together, which is what a sector re-rating looks like rather than a stock story: Aditya Birla Real Estate +10.16% to Rs 1,198.00, Anant Raj +5.68% to Rs 484.75, Phoenix Mills +5.57% to Rs 2,292, Signatureglobal +5.27% to Rs 777.60, Godrej Properties +4.50% to Rs 1,879.50, Sobha +4.40% to Rs 1,298.60, Lodha +4.38% to Rs 1,226, Prestige +4.24% to Rs 1,693.90, Oberoi +4.17% to Rs 1,817 and DLF +3.59% to Rs 769.30. Read it against Wednesday, when the same sector fell 0.42% and Oberoi, Lodha and DLF all fell between 1.6% and 1.8% after a 10.17% week \\u2014 one session of distribution, then a 4.5% bid, which is a market unwilling to let the rate-sensitive trade go. (researchandinvest's 16:02 IST sectoral table and Goodreturns' NSE sector watch both carry 934.25, +4.51%, the 934.45 high, the 890.80 low and the 893.95 previous close; Moneycontrol and HDFC Sky printed 3.7% intraday, which is the same move measured before the closing auction.)"
    },
    {
      name: "Nifty Media",
      changePct: 2.46,
      note: "Second at 2.46% to 1,761.25 from 1,719.00, on a 49.80-point range of 1,718.75 to 1,768.55, and the second-best sector of the day after two months in which it was the market's funding source. PVR Inox +4.37% to Rs 1,652.60, Prime Focus +3.91% to Rs 274.90 and Zee Entertainment +3.73% to Rs 73.50 led, with Sun TV and the broadcasters behind them. This is the mirror image of Wednesday's split, when Sun TV rose 7.21% while Prime Focus fell 5.38% \\u2014 the whole basket moved this time, which is a change in kind rather than degree. (researchandinvest's 16:02 IST sectoral table for 1,761.25, +2.46%, the 1,768.55 high and the 1,719.00 previous close; Moneycontrol carries 2.4% and the same level; the stock moves are researchandinvest's Nifty 500 gainers table.)"
    },
    {
      name: "Nifty PSU Bank",
      changePct: 1.51,
      note: "Third at 1.51% to 9,305.95 from 9,167.20, a second consecutive session of leadership for the state lenders after Wednesday's 2.94%. The close is 21 points under the 9,327.45 high and 143 above the 9,163.30 low, so the gain was made early and held. SBI did the arithmetic at +2.38% to Rs 1,085.00 on 15.9 lakh shares and was the fourth-best stock in the Nifty 50. The index has now gained 4.5% in two sessions after a 14.00% month, and the pattern of this rally is unchanged: the cheapest, highest-beta way to own the foreign bid is the first thing bought. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch both carry 9,305.95, +1.51%, the 9,327.45 high, the 9,163.30 low and the 9,167.20 previous close; Moneycontrol printed 1.4% intraday; SBI's move is ET Now's closing table.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 1.42,
      note: "Fourth at 1.42% to 28,057.15 from 27,663.40, and the widest of the financial indices on the day \\u2014 wider than Nifty Bank's 1.19% because this composite carries the insurers and asset managers, which is where the money went. HDFC Life +4.23% to Rs 597.80, SBI Life +2.97%, ICICI Life +3.77%, Max Financial +5.53% to Rs 1,375, Canara HSBC Life +7.72% to Rs 132.10, Aditya Birla Sun Life AMC +3.50% to Rs 929.75, CDSL +3.41% to Rs 1,455, Motilal Oswal +5.21% to Rs 1,216.80 and L&T Finance +4.11% to Rs 282.39. A day when both the lenders and the life insurers rise 3-4% is a day when the market is buying duration and the rupee's weakness is being read as a rate story rather than a currency problem. (researchandinvest's 16:02 IST sectoral table for 28,057.15, +1.42%, the 28,059.95 high and the 27,663.40 previous close; the stock moves are researchandinvest's Nifty 500 gainers table and Upstox's Nifty 50 list.)"
    },
    {
      name: "Nifty Bank",
      changePct: 1.19,
      note: "Fifth at 1.19% to 61,518.50 from 60,792.40, closing 27 points under its high of 61,545.85 \\u2014 the tightest close-to-high gap of any sector on the day. The internals are the story of the week in one line: SBI +2.38% and IndusInd Bank +3.48% to Rs 931.35 did the work, ICICI Bank added 1.17% to Rs 1,588.30 and HDFC Bank 0.39% to Rs 811.85, while Kotak was flat at 0.14% and Reliance \\u2014 not a bank, but the index's largest single weight in the wider market \\u2014 rose 0.05% to Rs 1,334.10. The private banks rose 0.87% against the PSUs' 1.51%, the same inversion as Wednesday and the opposite of last week. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch carry 61,518.50, +1.19%, the 61,545.85 high, the 60,723.10 low and the 60,792.40 previous close; Moneycontrol printed 1% intraday; the stock moves are ET Now's and Upstox's closing tables.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 0.87,
      note: "Sixth at 0.87% to 30,206.05 from 29,946.20, roughly half the PSU index's move for the second session running. ICICI Bank +1.17% to Rs 1,588.30, HDFC Bank +0.39% to Rs 811.85 and IndusInd +3.48% to Rs 931.35 carried it; Kotak managed 0.14% at Rs 488.70 on the day's heaviest Nifty volume of 29.2 lakh shares. The gap between this index and the state lenders has now persisted through three sessions, which is the single clearest evidence that the November bid is a valuation trade rather than a quality trade. (researchandinvest's 16:02 IST sectoral table for 30,206.05, +0.87%, the 30,247.90 high, the 29,901.25 low and the 29,946.20 previous close; Moneycontrol printed 0.87% and the same level; the stock moves are ET Now's closing table.)"
    },
    {
      name: "Nifty Metal",
      changePct: -0.11,
      note: "Seventh and the first faller, at -0.11% to 12,772.60 from 12,786.15, and a reversal of Wednesday's +0.96%. Hindustan Zinc -2.25% to Rs 565.95 and Vedanta -1.71% to Rs 259.37 led the decline, with Vedanta Aluminium -1.96%; the steel names were mixed rather than weak, which is why the index lost only 14 points on a 139-point range. Two sessions of gains followed by a flat-to-down session on falling metal prices is a pause, not a reversal \\u2014 but it is the fourth time in six sessions this index has failed to follow through. (researchandinvest's 16:02 IST sectoral table for 12,772.60, -0.11%, the 12,892.00 high, the 12,753.10 low and the 12,786.15 previous close; the stock moves are researchandinvest's Nifty 500 losers table.)"
    },
    {
      name: "Nifty Pharma",
      changePct: -0.35,
      note: "Eighth at -0.35% to 28,675.75 from 28,776.45, the second consecutive small decline after Monday's 1.65% gain, and a day of two halves inside the basket: Alkem -2.45% to Rs 5,314.50, GlaxoSmithKline -2.67% to Rs 2,655, Ipca -1.86% to Rs 1,902.30 and Narayana Hrudayalaya -1.66% against Granules +5.16% to Rs 840.50, Neuland +3.56% to Rs 20,923 and Emcure +3.67% to Rs 2,314.40. Pharma has now alternated direction for seven sessions while the index has risen 1.1%; that is the signature of a sector being used as a source of funds, and it is being used that way again. (researchandinvest's 16:02 IST sectoral table for 28,675.75, -0.35%, the 28,771.70 high and the 28,776.45 previous close; Moneycontrol printed -0.57% intraday; the stock moves are researchandinvest's Nifty 500 tables.)"
    },
    {
      name: "Nifty Infrastructure",
      changePct: -0.39,
      note: "Ninth at -0.39% to 9,513.15 from 9,550.50, and the third straight session in which the capital-goods and railway names have failed to hold a morning bid: it ran to 9,562.45 early and closed 49 points under it. RVNL -1.78% to Rs 205.67, IRFC -1.70% to Rs 85.23, RITES -1.48% to Rs 198.05, KEC International -1.59% to Rs 340.15 and Triveni Turbine -1.75% led the fall \\u2014 the same railway-and-PSU complex that led Wednesday's 0.93% gain. A sector that reverses its own leadership within 24 hours is a sector without a bid underneath it. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch both carry 9,513.15, -0.39%, the 9,562.45 high, the 9,484.40 low and the 9,550.50 previous close; the stock moves are researchandinvest's Nifty 500 losers table.)"
    },
    {
      name: "Nifty IT",
      changePct: -0.41,
      note: "Tenth at -0.41% to 32,163.55 from 32,295.60 \\u2014 the fourth decline in five sessions, and the sector that has now fallen in every session of the November rally except the two biggest. TCS -1.54% to Rs 2,434.10, HCL Technologies -1.12% to Rs 1,378, Tech Mahindra and Mphasis behind them, against a rare green print from Fractal Analytics at +4.14% to Rs 821.80. The cause is unchanged and external: the money arriving in Indian financials is the money leaving AI-linked US equities, and this is the one Indian sector levered to that capex. It opened at 32,065.70, ran to 32,334.15 and closed 171 points under the high. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch carry 32,163.55, -0.41%, the 32,334.15 high, the 31,794.35 low and the 32,295.60 previous close; Moneycontrol and HDFC Sky both carry -0.4%; the stock moves are researchandinvest's Nifty 500 tables.)"
    },
    {
      name: "Nifty Energy",
      changePct: -0.42,
      note: "Eleventh at -0.42% to 37,389.10 from 37,548.05, and the cleanest read on crude of any index: HPCL -2.67% to Rs 389.45, Chennai Petroleum -2.64% to Rs 1,425.70, Indian Oil -2.02% to Rs 145.38, BPCL -1.54% to Rs 310.40 and GAIL -1.56% to Rs 186.93 all fell on a day Brent slipped 0.44% to $92.50, while Reliance was flat at +0.05% to Rs 1,334.10. The refiners have now fallen two sessions running after the crude rally of 10-11 November, which is the correct response to a $92 print and a wrong one if the Middle East talks stall. (researchandinvest's 16:02 IST sectoral table for 37,389.10, -0.42%, the 37,667.90 high and the 37,548.05 previous close; the stock moves are researchandinvest's Nifty 500 losers table and ET Now's closing table.)"
    },
    {
      name: "Nifty FMCG",
      changePct: -0.74,
      note: "Twelfth at -0.74% to 46,838.50 from 47,188.55 \\u2014 a full reversal of Wednesday's 1.13%, and the widest fall of any defensive sector. HUL -2.46% to Rs 1,972.60, Nestle -1.92% to Rs 1,263.30, Marico -2.71% to Rs 899.90 and Godfrey Phillips led the decline, against Radico Khaitan +4.46% to Rs 4,638.20 and the small end. Two heavyweights falling 2-2.5% on a day the index rose is not rotation out of defensives for its own sake; it is the same festival-consumption trade that was bought for two weeks being sold at the first sign that the financial bid is broadening. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch carry 46,838.50, -0.74%, the 47,390.85 high, the 46,726.05 low and the 47,188.55 previous close; Moneycontrol printed -0.88% intraday; the stock moves are researchandinvest's Nifty 500 tables.)"
    },
    {
      name: "Nifty Auto",
      changePct: -1.02,
      note: "Last at -1.02% to 28,231.00 from 28,523.30, and the day's most consequential move because it is the second consecutive fall after an eight-session run that added more than 12%. M&M -2.23% to Rs 3,387.70 on 23.9 lakh shares, Motherson -2.57% to Rs 165.33, Hyundai Motor India -2.32% to Rs 2,106.70, Maruti -1.65% to Rs 12,961 and Exide -1.52% to Rs 380.10 all fell, and the index closed 157 points under its 28,565.75 high. The irony sits in the same day's movers table: Gabriel India, an auto-components maker, rose 16.53% and was the best stock in the Nifty 500. The end market is being sold while the supplier is being bought, which is a rotation inside the theme rather than out of it. (researchandinvest's 16:02 IST table and Goodreturns' NSE sector watch carry 28,231.00, -1.02%, the 28,565.75 high, the 28,068.60 low and the 28,523.30 previous close; Moneycontrol printed -1% and the same level; the stock moves are researchandinvest's Nifty 500 tables and ET Now's closing table.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 single-session price returns for 12 November 2026, taken from researchandinvest's full-universe gainers table (live, 16:08 IST) and its losers table (a 15:09 IST snapshot, so the closing prices below are taken from The Economic Times' NIFTY 500 losers list as on 12 Nov 2026, 16:00 IST), and cross-read against 5paisa's Nifty 500 heatmap at 16:40 IST, Upstox's Nifty 50 and Midcap 100 closing lists, Moneycontrol's closing-bell tables and capitalmarket.com's live 'A' group movers file. The universe is the full 500 \\u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \\u2014 so a name outside the headline sub-indices still ranks. Cap tags follow NSE's own constituent files: ONGC is in the Nifty 50 and is tagged Largecap; Godrej Industries and Bharat Dynamics appear in NSE's Nifty Midcap 150 file and Page Industries is in that index on HDFC Sky's and Upstox's identification; Gabriel India, Aditya Birla Real Estate, Cupid, Avanti Feeds, Caplin Point and Welspun Living appear in NSE's Nifty Smallcap 250 constituent list. Honest limitation: two providers print different magnitudes for the same stock, and the gap is timing rather than fact \\u2014 researchandinvest's 15:09 snapshot has Page Industries at -12.52% and Caplin Point at -4.85%, while ET's post-close list and Upstox have Page at -12.9%; NDTV Profit reported a 10% lower circuit at Rs 32,915 in the afternoon before the stock traded lower again into the close. The direction and the ordering are identical across all of them. Breadth context: 2,377 stocks advanced and 1,878 declined with 195 unchanged, and only 20 of the Nifty 50 rose, so the top of this table and the index did not agree \\u2014 which is the day's point.",
    gainers: [
      {
        name: "Gabriel India",
        changePct: 16.53,
        cap: "Smallcap",
        note: "The Nifty 500's biggest gainer by a distance, up 16.53% to Rs 1,641.20 on 80.6 lakh shares, and a 52-week high within 3% of the close \\u2014 its 52-week high of Rs 1,690.00 against a low of Rs 795.70. Gabriel is an auto-components maker \\u2014 shock absorbers and ride-control parts, Anand Group \\u2014 and it rose four times as much as the auto sector fell 1.02%: the end market was sold while the supplier was bought. It was added to the Nifty Smallcap 250 in NSE Indices' semi-annual review effective 30 March 2026, so this is a stock that has just been through an index-inclusion bid and is now being re-rated on its own numbers. Nothing in the day's wire explains 16.5% on 80 lakh shares, and that is worth saying plainly rather than inventing a reason. (researchandinvest's 12 Nov Nifty 500 gainers table for +16.53%, Rs 1,641.20, the 80.6 lakh volume and the 52-week range; 5paisa's heatmap at 16:40 IST carries 1,641.20 and 16.53%; NSE Indices' 23 February 2026 press release lists Gabriel India among the Nifty Smallcap 250 inclusions; ET's listing page confirms the index membership.)"
      },
      {
        name: "Godrej Industries",
        changePct: 11.88,
        cap: "Midcap",
        note: "Second at 11.88% to Rs 1,084.10 on 45.4 lakh shares, and the move that made the day's holding-company trade explicit: Godrej Industries is the group's listed parent, and Godrej Properties rose 4.50% and Godrej Consumer was bid on the same day. The stock closed 25% below its 52-week high of Rs 1,443.00 and 46% above its low of Rs 744.20, so this is a re-rating from a low base rather than a breakout. It sits in the Nifty Midcap 150, and on 45 lakh shares a near-12% move in a Rs 36,000-crore company is a real position being taken, not a squeeze. (researchandinvest's gainers table for +11.88%, Rs 1,084.10, the 45.4 lakh volume and the 52-week range; 5paisa's heatmap carries 1,084.10 and 11.88%; HDFC Sky's close report independently cites Godrej Industries at +11.9%; NSE's Nifty Midcap 150 constituent file confirms membership.)"
      },
      {
        name: "Aditya Birla Real Estate",
        changePct: 10.16,
        cap: "Smallcap",
        note: "Third at 10.16% to Rs 1,198.00 on 31.9 lakh shares, and the single largest contributor to Nifty Realty's 4.51%: the sector's biggest percentage gainer is a small-cap, which is what tells you the bid was for beta rather than for quality. ABREL is the renamed Century Textiles' real-estate arm, sits in the Nifty Smallcap 250, and closed 37% below its 52-week high of Rs 1,914.00 \\u2014 so a 10% day still leaves it deep in a drawdown. Note the volume: 31.9 lakh shares against a stock that trades a fraction of that on a normal day. (researchandinvest's gainers table for +10.16%, Rs 1,198.00, the 31.9 lakh volume and the 52-week range; 5paisa's heatmap carries 1,198.00 and 10.16%; NSE's Nifty Smallcap 250 constituent file confirms membership.)"
      },
      {
        name: "Cupid",
        changePct: 8.70,
        cap: "Smallcap",
        note: "Fourth at 8.70% to Rs 384.80 on 5.06 crore shares \\u2014 the heaviest turnover of any gainer on the list by an order of magnitude, and 13 times the volume of a stock a hundred times its size. Cupid makes condoms and latex products for export and for public-health programmes; its revenue is a tender business, which makes an 8.7% move on 5 crore shares look like a contract or an order-flow story the tape knew about before the wire did. It closed within 1% of its 52-week high of Rs 389.00, having traded at Rs 46.00 at the low a year ago \\u2014 an eight-fold move that is the single most extreme 52-week range in the Nifty 500. (researchandinvest's gainers table for +8.70%, Rs 384.80, the 5.06 crore volume and the 52-week range; 5paisa's heatmap carries 384.80 and 8.69%; NSE's Nifty Smallcap 250 constituent file confirms membership.)"
      },
      {
        name: "Avanti Feeds",
        changePct: 8.35,
        cap: "Smallcap",
        note: "Fifth at 8.35% to Rs 762.90 on 1.59 crore shares, and the second FMCG-adjacent small cap in the top five on a day Nifty FMCG fell 0.74%. Avanti is India's largest shrimp-feed and processed-shrimp exporter, so its revenue line is an aquaculture and export-price story rather than a domestic consumption one \\u2014 which is why it can rise 8.35% while HUL falls 2.46%. It closed 52% below its 52-week high of Rs 1,593.80, so this is a beaten-down exporter being bought, not a leader extending. (researchandinvest's gainers table for +8.35%, Rs 762.90, the 1.59 crore volume and the 52-week range; 5paisa's heatmap carries 762.90 and 8.35%; NSE's Nifty Smallcap 250 constituent file confirms membership.)"
      }
    ],
    losers: [
      {
        name: "Page Industries",
        changePct: -12.90,
        cap: "Midcap",
        note: "The Nifty 500's worst stock of the day by a wide margin, down 12.90% to Rs 31,850 on 2.3 lakh shares, from a previous close of Rs 36,570 \\u2014 and the single name that turned a good day for the mid-caps into a mixed one. The cause is disclosed and specific: September-quarter revenue rose 11.5% to Rs 1,439.6 crore but net profit rose only 3.8% to Rs 202.5 crore and EBITDA 7.4% to Rs 300.2 crore, so the market marked down a Jockey-and-Speedo franchise that could not convert a strong top line into profit. The mechanics are worth noting: NDTV Profit reported a 10% lower circuit at Rs 32,915 in the afternoon, and the stock traded below that into the close, which means the band was revised or the circuit was a BSE-only print. It now sits 27% below its 52-week high of Rs 43,855 and 7% above its low of Rs 29,805. (ET's 12 Nov NIFTY 500 losers list as on 16:00 IST for Rs 31,850 and a Rs 4,720 fall; Upstox's closing list for -12.9%; researchandinvest's 15:09 snapshot for -12.52% at Rs 31,990; NDTV Profit for the Q2 numbers, the lower circuit and the Rs 36,570 previous close; HDFC Sky confirms it as a Nifty Midcap 150 constituent.)"
      },
      {
        name: "Caplin Point Laboratories",
        changePct: -5.32,
        cap: "Smallcap",
        note: "Second at 5.32% lower to Rs 2,386.00 from Rs 2,521.00, on a thin 4.3 lakh shares, and the sharpest fall in a healthcare basket that lost only 0.35% overall \\u2014 a stock-specific repricing inside a flat sector. Caplin makes injectables for Latin America and other emerging markets, a business whose earnings are levered to a handful of regulated-market approvals; a 5% fall on 4 lakh shares is the market taking a view on one of them. It is 20% below its 52-week high of Rs 2,990.00. (ET's 16:00 IST losers list for Rs 2,386 and a Rs 134 fall; researchandinvest's 15:09 snapshot for -4.85% at Rs 2,398; capitalmarket.com's live 'A' group file for -4.66% at 14:44, an intraday print; NSE's Nifty Smallcap 250 constituent file confirms membership.)"
      },
      {
        name: "Oil & Natural Gas",
        changePct: -4.39,
        cap: "Largecap",
        note: "Third at 4.39% lower to Rs 224.50 from Rs 234.81, and the only Nifty 50 constituent in the five worst stocks of the whole 500 \\u2014 which is exactly what a crude-linked producer does on a day Brent slips to $92.50 and the market starts pricing a Middle East settlement. ONGC closed 27% below its 52-week high of Rs 307.50 and within 3% of its 52-week low of Rs 218.53, so the stock is now at the floor of its range while the index is at an eight-month high. That divergence is the cleanest single illustration of what this rally is not: it is not a bet on oil. (ET's 16:00 IST losers list for Rs 224.50 and a Rs 10.31 fall; researchandinvest's 15:09 snapshot for -4.43% at Rs 224.39; Moneycontrol, HDFC Sky and Business Standard all name ONGC among the Nifty 50's biggest losers; its Nifty 50 membership is not in doubt.)"
      },
      {
        name: "Bharat Dynamics",
        changePct: -4.08,
        cap: "Midcap",
        note: "Fourth at 4.08% lower to Rs 1,055.00 from Rs 1,099.91, on 54.7 lakh shares \\u2014 and unlike Page Industries this one has a disclosed number behind it: standalone net profit fell 15% year on year to Rs 183 crore for the September quarter against Rs 216 crore, on revenue that did not grow enough to carry the margin. BDL is the guided-missile maker in the Nifty Midcap 150, a stock that re-rated violently through 2024-25 on the defence order book; it is now 35% below its 52-week high of Rs 1,633.40. The read-across matters more than the stock: HAL fell 2.28%, so the whole defence complex is being de-rated on delivery rather than on orders. (ET's 16:00 IST losers list for Rs 1,055 and a Rs 44.91 fall; Upstox's closing list for -4.08% with the same earnings detail; researchandinvest's 15:09 snapshot for -3.64% at Rs 1,059.95; NSE's Nifty Midcap 150 constituent file confirms membership.)"
      },
      {
        name: "Welspun Living",
        changePct: -3.17,
        cap: "Smallcap",
        note: "Fifth at 3.17% lower to Rs 247.62 from Rs 255.73, on 34.1 lakh shares, and the counterpoint to Avanti Feeds' 8.35%: two export-facing consumer names, 11.5 percentage points apart on the same day. Welspun Living is the home-textiles arm of the Welspun group \\u2014 towels and bed linen sold largely into US retail \\u2014 and its sister company Welspun Corp fell 3.05% on the same tape, so this is a group-level de-rating rather than a stock-specific one. It closed within 8% of its 52-week high of Rs 267.42 after a year in which it nearly doubled off a low of Rs 107.10. (ET's 16:00 IST losers list for Rs 247.62 and an Rs 8.11 fall; researchandinvest's 15:09 snapshot for -3.19% at Rs 247.56; NSE's Nifty Smallcap 250 constituent file confirms membership.)"
      }
    ]
  },

  watch: [
    {
      title: "25,400-25,500 has now been tested three sessions running, and Thursday's high was the closest yet",
      detail: "The Nifty touched 25,384.80 on Thursday \\u2014 16 points under the bottom of the band that HDFC Securities' Nagaraj Shetti called strong overhead resistance on Wednesday \\u2014 and closed 85 points below its own high. The published technical map has not changed in three days: 25,400-25,500 is the wall, a close above 25,500 opens 26,000, and support sits at 24,800-24,700, which is roughly where the 20-day average is catching up to the price. LKP's Vatsal Bhuva called the index overbought on Wednesday and still expects a retracement to 25,000-24,800; Religare's Ajit Mishra put the buy zone at 24,800-25,000 with an invalidation at 24,600. What Thursday added is evidence that the market wants to test the band from below without paying for it: the index gained 0.18% while 30 of its 50 constituents fell. A close above 25,500 on breadth like Wednesday's would settle it; a fourth rejection would make the band a ceiling."
    },
    {
      title: "Realty's 4.51% is either the start of a rotation or one of the cleanest one-day squeezes of the month",
      detail: "The sector fell 0.42% on Wednesday with Oberoi, Lodha and DLF all down between 1.6% and 1.8%, then rose 4.51% on Thursday and closed at its high of 934.45. Both moves happened with the same inputs: crude at $92, rates unchanged, and a rupee that weakened 33 paise to 94.04 on the day of the rally \\u2014 which is the opposite of the stronger-currency story that is supposed to lift developers. That inconsistency is the reason to watch it rather than chase it. If realty holds above 900 into next week, the rotation has a new leg and the 10.17% week it had in early November was a base, not a blow-off. If it gives back Thursday's gain on Friday, the 4.51% was a short squeeze in the most shorted sector of the fortnight."
    },
    {
      title: "Auto and FMCG are now falling while the index rises, and that is the shape of a maturing rally",
      detail: "Nifty Auto lost 1.02% on Thursday after losing 1% on Wednesday, ending an eight-session run that had added more than 12%; Nifty FMCG fell 0.74% with HUL down 2.46% and Nestle 1.92%. Neither fall has an obvious external cause \\u2014 crude at $92.50 is a direct input-cost cut for both \\u2014 so the selling is portfolio-driven: money that was parked in the festival-consumption trade for two weeks is being moved into financials and real estate. Watch the two together. If auto and FMCG fall again on a day the index rises, the rotation is confirmed and the Nifty's next 200 points will be made by lenders and developers. If they stabilise, Thursday was a single day of profit-taking in the two sectors that had run the hardest."
    },
    {
      title: "The foreign bid is large, hedged, and now the only thing holding the rupee up",
      detail: "FPIs have bought $6.43 billion of Indian equities in November, their biggest monthly purchase in more than two years, and the rupee still closed 33 paise weaker at 94.04 against the dollar. That combination is the most important unresolved question in this market: either the equity flow is being offset by something larger in the currency market, or the flow is hedged and therefore reversible. FIIs were net short roughly 90,741 index futures contracts as of the last published position, which supports the second reading. The tell is the daily FII/DII line rather than the monthly total, and the rupee's 94 level is the tripwire \\u2014 a break through 94.10 takes the financials, which have done all the work this month, down with it."
    },
    {
      title: "The risk has moved from the index to the mid-cap earnings season, and Thursday showed what that looks like",
      detail: "Page Industries fell 12.9% on revenue growth of 11.5% and profit growth of 3.8%; Bharat Dynamics fell 4.08% on a 15% fall in quarterly profit; Caplin Point fell 5.32% with no disclosed trigger at all. Three stocks, three different reasons, and the Smallcap 250 still rose 1.10% \\u2014 which is the point. This is a market in which a Q2 miss costs a stock 5-13% in a session and does nothing to the index, so the damage is invisible in the headline and very visible in a portfolio. The next two weeks of September-quarter results, and the 24 November market holiday that shortens the settlement calendar around them, are where the risk now sits."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty End Flat After Volatile Session on Thursday",
      source: "HDFC SKY",
      url: "https://hdfcsky.com/news/market-close-report-today-november-12-2026-nifty-sensex-pause-the-party"
    },
    {
      title: "Taking Stock: Sensex, Nifty end flat amid volatility; realty shines, IT, auto drag",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/stocks/taking-stock-sensex-nifty-end-flat-amid-volatility-realty-shines-it-auto-drag-14078066.html"
    },
    {
      title: "Broader markets outperform: Mid, smallcaps gain for 4th straight day; PB Fintech, Paytm rally",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/broader-markets-outperform-mid-smallcaps-gain-for-4th-straight-day-pb-fintech-paytm-rally-14078358.html"
    },
    {
      title: "Top gainers and losers, Nov 12: HDFC Life, Shriram Finance gain 4%, Bajaj Finance rises 3%, Nestle falls 2%",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-nov-12-hdfc-lic-shriram-finance-gain-4-bajaj-finance-rises-3-nestle-falls-2-check-list/article-203377/"
    },
    {
      title: "Stock Market Today Highlights, Nov 12: Markets extend gains for 3rd day; Sensex ends above 81,900 on FII inflows, lower crude oil",
      source: "The Hindu BusinessLine",
      url: "https://www.thehindubusinessline.com/markets/sensex-nifty50-today-stock-market-highlights-12-november-2026/article71689385.ece"
    }
  ],

  ratio: {
    name: "Interest Coverage Ratio",
    category: "Solvency / debt servicing",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288); every page cited below is the printed page number. The profit and loss account covers the year ended 31 March 2026, and the balance-sheet lines are at that date.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Interest Coverage Ratio = earnings before interest and tax (EBIT) \u00f7 finance cost. EBIT is built from the profit and loss account as profit before tax plus finance cost \u2014 adding the interest back to the profit that was struck after deducting it. The answer is a plain multiple: how many times over the company's operating profit would cover its interest bill if the bill stayed exactly where it is.",
    formulaNote: "This is the ratio that is supposed to answer one question \u2014 can this company pay its lenders? \u2014 and Infosys is the company that shows why the answer, at the top end, stops being informative. The interest bill is Rs 416 crore against EBIT of Rs 40,411 crore, so the multiple is 97.14. A company covering its interest 97 times is not a company with a debt-servicing question; it is a company whose interest line is a rounding error, and the ratio's real content is the explanation of what that line is. Infosys carries no borrowings in the ordinary sense. Its entire Rs 9,176 crore of what a screen calls 'debt' is lease liabilities \u2014 Rs 6,016 crore non-current and Rs 3,160 crore current on the balance sheet \u2014 and the Rs 416 crore of finance cost is the interest embedded in those leases under Ind AS 116. So this is not a coverage ratio on borrowed money; it is a coverage ratio on office and campus rents. Three things follow. First, a high coverage ratio is a floor test, not a ranking tool: it tells you the company will not default, and tells you nothing about which of two such companies is the better business. Second, the ratio is almost entirely a function of the denominator, which is why it can jump 30% in a year without anything happening to the numerator. Third, and this is the trap, the exceptional item matters: FY26 carries a Rs 1,289 crore one-off charge for the Labour Codes notified on 21 November 2025, which raised gratuity and leave liabilities. Strip it out and coverage is 100.24 times; leave it in, as the audited accounts do, and it is 97.14. Both are correct, and you have to know which one you are quoting.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Profit before tax, FY26 \u2014 the starting point of the numerator, after the exceptional item", value: "Rs 39,995 crore", page: "p. 318" },
      { label: "Finance cost, FY26 \u2014 the denominator, and the amount added back to reach EBIT", value: "Rs 416 crore", page: "p. 318" },
      { label: "Profit before exceptional item and tax, FY26 \u2014 the numerator before the Labour Codes charge", value: "Rs 41,284 crore", page: "p. 318" },
      { label: "Exceptional item \u2014 impact of the Labour Codes notified on 21 November 2025", value: "Rs 1,289 crore", page: "p. 318" },
      { label: "Depreciation and amortisation expenses, FY26 \u2014 needed for the EBITDA variant of the ratio", value: "Rs 4,902 crore", page: "p. 318" },
      { label: "Revenue from operations, FY26 \u2014 not in the formula, but the scale against which a Rs 416 crore interest bill sits", value: "Rs 1,78,650 crore", page: "p. 318" },
      { label: "Other income, net, FY26 \u2014 added to revenue to reach total income, and the line that makes the PBT cross-check work", value: "Rs 4,322 crore", page: "p. 318" },
      { label: "Total expenses, FY26 \u2014 deducted from total income to reach profit before exceptional item and tax", value: "Rs 1,41,688 crore", page: "p. 318" },
      { label: "Profit before tax, FY25 \u2014 the prior-year numerator, with no exceptional item in it", value: "Rs 37,608 crore", page: "p. 318" },
      { label: "Finance cost, FY25 \u2014 the prior-year denominator, unchanged at Rs 416 crore", value: "Rs 416 crore", page: "p. 318" },
      { label: "Lease liabilities, non-current, 31 March 2026 \u2014 the 'debt' behind the interest bill, and the whole of it", value: "Rs 6,016 crore", page: "p. 317" },
      { label: "Lease liabilities, current, 31 March 2026 \u2014 the second half of the same Rs 9,176 crore", value: "Rs 3,160 crore", page: "p. 317" }
    ],
    working: "Step 1 \u2014 Build the numerator off the Consolidated Statement of Profit and Loss (p. 318): EBIT = profit before tax + finance cost = 39,995 + 416 = Rs 40,411 crore. Adding the interest back is the whole of the method; it converts a profit struck after interest into one struck before it. Step 2 \u2014 Divide by the same page's finance cost: 40,411 \u00f7 416 = 97.142, so 97.14 times. Step 3 \u2014 Do the prior year identically (p. 318): 37,608 + 416 = 38,024, and 38,024 \u00f7 416 = 91.404, so 91.40 times. The improvement of 5.74 turns is entirely numerator: the finance cost did not move by a single rupee, from Rs 416 crore to Rs 416 crore. Step 4 \u2014 Run the exceptional-item variant. FY26 profit before the Labour Codes charge is Rs 41,284 crore (p. 318), so 41,284 + 416 = 41,700 and 41,700 \u00f7 416 = 100.24 times. That is the figure you get if you treat the Rs 1,289 crore as not belonging to the year's operating performance; the audited accounts do not, and neither does the headline 97.14. Step 5 \u2014 Run the EBITDA variant, which some providers quote instead. 40,411 + 4,902 (depreciation and amortisation, p. 318) = 45,313, and 45,313 \u00f7 416 = 108.93 times. The 11.8-turn gap between 97.14 and 108.93 is exactly what the depreciation add-back is worth here, which is why the two conventions are never comparable. Step 6 \u2014 Prove the PBT is the report's and not ours, using only p. 318. Total income = revenue 1,78,650 + other income 4,322 = 1,82,972. Total income less total expenses = 1,82,972 \u2212 1,41,688 = 41,284, which ties to the printed 'Profit before exceptional item and tax'. Then 41,284 \u2212 1,289 = 39,995, which ties to the printed 'Profit before tax'. Every rupee of the numerator is now reproduced from four other printed lines. Step 7 \u2014 Size the denominator. Finance cost of Rs 416 crore on revenue of Rs 1,78,650 crore is 0.23% of revenue. Against the balance sheet (p. 317), the lease liabilities that generate it total 6,016 + 3,160 = Rs 9,176 crore, which at Rs 416 crore of annual interest implies an effective rate of about 4.5% \u2014 an ordinary Indian lease discount rate, and a useful check that the interest is lease interest and not borrowing cost. Step 8 \u2014 Ask the question the ratio is meant to answer, in reverse. At 97.14 times, EBIT would have to fall 98.97% \u2014 from Rs 40,411 crore to about Rs 416 crore \u2014 before coverage reached 1.0. There is no plausible operating scenario in which that happens, which is the honest conclusion: for this company the ratio is a confirmation, not a finding.",
    result: "97.14 times at 31 March 2026, against 91.40 times at 31 March 2025 \u2014 on a finance cost that did not change at all between the two years; 100.24 times excluding the Rs 1,289 crore Labour Codes exceptional item, and 108.93 times on an EBITDA basis",
    meaning: "An interest coverage ratio of 97 tells you almost nothing about Infosys and a great deal about the ratio. The company has no borrowings: what a data provider reports as Rs 9,176 crore of debt is entirely lease liabilities for offices and campuses, and the Rs 416 crore of finance cost is the unwinding of those leases under Ind AS 116. So the first lesson is that you must know what the denominator is before you interpret the answer. On a company that borrows, a coverage ratio of 3 is comfortable and 1.5 is a warning. On a company that leases, the same ratio measures rent, and a 97 is simply the arithmetic of a business that owns almost nothing it sits in. The second lesson is that the ratio moved 6% in a year in which the company did nothing to its balance sheet: 91.40 to 97.14, because EBIT grew 6.3% (38,024 to 40,411) while interest stayed flat at 416. That is a denominator effect dressed as an operating improvement, and it is why this ratio should never be read alone. The third lesson is the exceptional item. FY26 contains a Rs 1,289 crore charge for the Labour Codes \u2014 past-service gratuity and leave liabilities recognised on notification \u2014 which is a genuine cost of the year and a one-off in the same breath. Include it and coverage is 97.14; exclude it and it is 100.24. A ratio that swings 3% on a definitional choice is a ratio you should quote with the definition attached. What the number is genuinely good for is the reverse test. At 97 times, EBIT could fall by 99% and the interest would still be paid. That is not a description of a strong business \u2014 the strong business is in the 20% operating margin and the Rs 33,097 crore of free cash flow \u2014 it is a description of a business with no financial risk at all. Read it as the floor under the equity, not as the reason to own it.",
    crossCheck: "Three checks, and the first is exact. topstockresearch prints an interest coverage of 97.14 for Mar-26 against the same Rs 416 crore of interest \u2014 a match to two decimal places, which is what happens when a provider uses the same PBT-plus-interest definition we did. The second check is arithmetic against Screener.in: its consolidated profit and loss for Mar 2026 prints interest of Rs 416 crore, profit before tax of Rs 39,995 crore and depreciation of Rs 4,902 crore, which reproduce 97.14 exactly; Screener's own ratio block did not show an interest-coverage line in the columns we could read, so the check here is on the inputs rather than on a published ratio. The third check is where the conventions separate, and they separate widely. ifinltd prints 188.23 for Mar 2026, which implies an interest base of about Rs 215 crore \u2014 roughly half the reported finance cost, the signature of a standalone or part-year convention rather than a consolidated one. TipRanks prints 86.91, which is close to the IFRS figure (IFRS operating profit of Rs 36,254 crore \u00f7 Rs 416 crore = 87.2) rather than to the Ind AS one, because IFRS presents cost of sales and operating expenses in a different shape. GuruFocus, on older data, prints 177.35. Four providers, four numbers between 86.9 and 188.2, and all of them defensible under some definition \u2014 which is the most useful thing this ratio can teach. One genuine data gap to flag: topstockresearch shows 0 for Mar-25 despite the Rs 416 crore of finance cost that year, the same missing-figure problem that provider had with the current ratio in the last edition; a company with Rs 416 crore of interest and Rs 37,608 crore of pre-tax profit does not have zero coverage.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288), for revenue from operations Rs 1,78,650 crore, other income Rs 4,322 crore, total expenses Rs 1,41,688 crore, profit before exceptional item and tax Rs 41,284 crore, the exceptional item of Rs 1,289 crore for the Labour Codes, profit before tax Rs 39,995 crore, finance cost Rs 416 crore and depreciation and amortisation Rs 4,902 crore, with the FY25 comparatives of Rs 1,62,990 crore, Rs 37,608 crore, Rs 416 crore and Rs 4,812 crore; Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for lease liabilities of Rs 6,016 crore non-current and Rs 3,160 crore current at 31 March 2026. Cross-checked against topstockresearch (interest coverage 97.14 for Mar-26), Screener.in's consolidated profit and loss for Mar 2026 (interest Rs 416 crore, PBT Rs 39,995 crore, depreciation Rs 4,902 crore), ifinltd (188.23), TipRanks (86.91) and Infosys' own IFRS Three Year Overview data sheet (operating profit Rs 36,254 crore, finance cost Rs 416 crore), with the convention gaps noted above."
  }
};

