const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 9 November 2026, 5:30 PM IST \u2014 Market Close (next session is Wednesday, 11 November, after the Diwali-Balipratipada holiday)",
  asOfLabel: "Closing levels as of the 9 November 2026 close (3:30 PM IST); every day move measured from the 8 November Muhurat session close, every weekly move from the 6 November close",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition \u2014 they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee \u2014 a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25044.65,
      dayChange: 58.25,
      dayChangePct: 0.23,
      weekChangePct: 0.06, // vs the 6 Nov (prior Friday) close of 25,030.35
      spark: [23960.60, 24536.60, 25030.35, 24986.40, 25044.65], // last 5 closes: 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "A session that was down 206 points at its worst and still closed at an eight-month high. The index opened at 25,076.40, slid to 24,838.75 as the Diwali-week profit-taking met the IT sell-off, then recovered to settle at 25,044.65, up 58.25 points or 0.23% \u2014 its highest close since 27 February 2026 and its second straight session above 25,000. Against the 6 November close of 25,030.35 the week-to-date is just +0.06%, which is the honest read of a day like this: the market defended a level rather than extended a rally that had already added 8.58% in the previous week. 21 of the 50 members rose and 28 fell, and the arithmetic was done by the banks \u2014 SBI +2.56% to Rs 1,042, HDFC Bank +1.75% to Rs 797.80, ICICI Bank +1.53% to Rs 1,589 and L&T +1.82% to Rs 4,185 \u2014 against Tata Steel -2.81% to Rs 184.85, HCL Technologies -2.64% to Rs 1,404 and Infosys -1.89% to Rs 1,149.50. (NSE's own index file carries 25,044.65, +58.25 and +0.23% with a 24,838.75 low and a 25,076.40 open; the same four numbers appear in Upstox's wrap, HDFC Sky's close report, PTI via The Hindu and researchandinvest's 9 Nov table.)"
    },
    {
      name: "Nifty Next 50",
      close: 72789.45,
      dayChange: 797.75,
      dayChangePct: 1.11,
      weekChangePct: 1.58, // vs the 6 Nov (prior Friday) close of 71,657.80
      spark: [70795.00, 71768.65, 71657.80, 71991.70, 72789.45], // last 5 closes: 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov
      returns: { oneY: 3.40, threeY: 16.58, fiveY: 10.70 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The best of the five cards and the day's real surprise: +797.75 points, or 1.11%, to 72,789.45, closing on its session high of 72,802.50 after a low of 71,864.15. It beat the Nifty by 88 basis points on a day the Nifty barely moved, and it has now gained 1.58% since the 6 November close against the Nifty's 0.06% \u2014 the first time in a fortnight that the second rung of the market has led. The composition explains it: this basket carries Union Bank of India (+5.60%), Punjab National Bank (+5.27%) and the other state lenders that did Monday's work, and almost none of the IT names that lost 1.2%. It had already outperformed in Sunday's Muhurat session (+0.47% against the Nifty's -0.18%), so the two sessions together read as money rotating down from the index heavyweights rather than leaving. (researchandinvest's 9 Nov index table carries 72,789.45, +1.11%, the 72,802.50 high and the 71,991.70 previous close; NSE's 8 November file carries the 71,991.70 base and the Muhurat gain, and Upstox's wrap confirms the broader market closed higher while the benchmarks stalled.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22408.55,
      dayChange: 80.70,
      dayChangePct: 0.36,
      weekChangePct: 0.62, // vs the 6 Nov (prior Friday) close of 22,271.15
      spark: [21867.30, 22290.40, 22271.15, 22327.85, 22408.55], // last 5 closes: 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov
      returns: { oneY: 1.59, threeY: 14.20, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Up 80.70 points, or 0.36%, to 22,408.55 \u2014 and the tell is in the shape rather than the size: the index closed exactly at its session high of 22,408.55 after trading as low as 22,184.85, so the mid-cap ladder was bought into the close rather than sold. It beat the Nifty by 13 basis points and lagged the Next 50 by 75, which is what a day led by large PSU banks and a handful of mid-cap lenders looks like: IREDA +7.47% to Rs 119.65, GSK Pharmaceuticals +6.71% to Rs 2,710, Union Bank +5.60% and Jubilant Foodworks -4.99% to Rs 428.50 inside the same index. Note the divergence to watch: Nifty Midcap 100 rose 0.55% and Midcap 50 0.53% on the same day, so the smaller half of this 150-stock index did less work than the top. (researchandinvest's 9 Nov table for 22,408.55, +0.36%, the 22,408.55 high and the 22,327.85 previous close; NSE's 8 November file carries the Muhurat close of 22,327.85, +0.25%, and News18's close report carries the Midcap 150's 0.36%.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17577.00,
      dayChange: -17.10,
      dayChangePct: -0.10,
      weekChangePct: 1.10, // vs the 6 Nov (prior Friday) close of 17,386.15
      spark: [17398.35, 17535.70, 17386.15, 17594.10, 17577.00], // last 5 closes: 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat), 9 Nov
      returns: { oneY: 1.90, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The only one of the five cards that fell: -17.10 points, or 0.10%, to 17,577.00, from a 17,594.10 Muhurat close, having run between 17,434.95 and 17,588.70. Read it against the session before it, because the two together are the story \u2014 the index rose 1.20% on Sunday while the Nifty fell 0.18%, and gave back a tenth of that on Monday, so over the two sessions it is still up 1.09%. The internal split is the interesting part: Nifty Smallcap 100 managed +0.10% and Smallcap 50 +0.46% on the same day, so the smallest names in this 250-stock pool \u2014 R R Kabel -6.90%, Finolex Cables -5.85%, Sterlite Technologies -5.00%, HFCL -4.63% \u2014 dragged the wider index under water. Three of those four are cables and telecom equipment, repriced for a third consecutive session. (researchandinvest's 9 Nov table for 17,577.00, -0.10% and the day range; NSE's 8 November file for the 17,594.10 base and the +1.20% Muhurat move; Upstox's wrap for the Smallcap 100 at +0.10%.)"
    },
    {
      name: "BSE SME Index",
      close: null, // today's close not published by any provider reachable at the time of this edition \u2014 see the note
      dayChange: null,
      dayChangePct: null,
      weekChangePct: null,
      spark: [113070.91, 113592.99, 115864.00, 115996.69, 117740.39], // 3 Nov, 4 Nov, 5 Nov, 6 Nov, 8 Nov (Muhurat) \u2014 today's close unverified, so the spark ends at the last confirmed close
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Deliberately left blank rather than guessed. The S&P BSE SME IPO index closed Sunday's Muhurat session at 1,17,740.39, up 1,743.70 points or 1.50% \u2014 the strongest of any index on the day and a second consecutive session of more than 1.5%. Monday then opened at 1,17,985.02 and traded down: 5paisa printed 1,17,316.97 (-0.36%) at 12:12 pm, Angel One 1,17,273.19 (-0.40%) at 12:29 pm and Dhan 1,17,478.38 (-0.22%) at 11:02 am, all on a day range of 1,17,118.19 to 1,17,986.78, with 54 constituents up and 48 down at that point. None of those is a close, and no provider reachable at 5:30 pm had published a post-close print \u2014 BSE Indices' own series still ended at 8 November, Anand Rathi's closing-price table still ended at 8 November, and ICICI Direct's page still carried 6 November. So the card shows no level for today, the spark runs to the last confirmed close, and the level will be filled in on the next edition. What can be said without guessing: the index is 4.5% below its 52-week high of 1,23,353.65 and roughly 59% above its 52-week low of 73,866.86, and it has now risen in five of the last six sessions."
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Down 206 points at the low and up 58 at the close: the Nifty ends at 25,044.65 and the Sensex at 81,106.65 as PSU banks surge 3.73% and IT gives back 1.22% \u2014 an eight-month high bought on negative breadth",
    summary: "The rally paused without breaking. The Nifty opened at 25,076.40, fell to 24,838.75 by the afternoon \u2014 206 points under Friday's close \u2014 and then recovered to settle at 25,044.65, up 58.25 points or 0.23%, its highest close since 27 February 2026. The Sensex ran from 80,519.31 to 81,339.41 and closed at 81,106.65, up 107.25 points or 0.13%. The work was done by the state lenders: Nifty PSU Bank jumped 3.73% to 8,905.35 on Union Bank of India +5.60%, Punjab National Bank +5.27%, Bank of India +4.5% and Indian Bank +4.3%, with SBI +2.56% to Rs 1,042 leading the Nifty 50. Nifty Bank added 1.51% to 59,741.25, closing at its high, and Pharma rose 1.65% to 28,896.10 on GSK Pharmaceuticals +6.71% and Gland Pharma +5.41%. IT was the day's problem: Nifty IT fell 1.22% to 32,468.95 as Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404 and Tech Mahindra -1.80% tracked the AI-infrastructure sell-off that has hit Wall Street, and Nifty Metal lost 0.46% with Tata Steel -2.81% to Rs 184.85. Inside the Nifty 50, 21 stocks rose and 28 fell; behind SBI came Trent +2.02%, Nestle India +1.91%, NTPC +1.87%, L&T +1.82% and HDFC Bank +1.75%. Breadth was negative on every provider's count \u2014 1,922 advances against 2,316 declines on NSE's provisional file, or 1,629 against 1,959 on Upstox's \u2014 which is the honest caveat on a close like this: the recovery was bought in the index's heaviest lenders, not across the market. The broader market still edged up, with the Next 50 the best of the lot at +1.11% and the Smallcap 250 the only faller at -0.10%. India VIX dropped 5.48% to 17.42, its first meaningful fall of the month. The macro backdrop stayed friendly: Brent slipped about 1% to $97.46, the rupee closed at 93.93 after touching a six-month high of 93.69, and foreign investors have bought more than $4.1 billion of Indian equities in November, the strongest month since September 2024. There is no session on Tuesday \u2014 NSE and BSE are shut for Diwali-Balipratipada and reopen on Wednesday, 11 November.",
    stats: ["Nifty +0.23%", "Sensex +0.13%"],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
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
      note: "The recovery, and what it was made of. The Nifty opened at 25,076.40, fell to 24,838.75 in the afternoon, and closed at 25,044.65, up 58.25 points or 0.23%; the Sensex ran from 80,519.31 to 81,339.41 and settled at 81,106.65, up 107.25 points or 0.13%. Both are the highest closes since 27 February 2026, and both came on negative breadth. The buying was concentrated in the public sector banks: Nifty PSU Bank +3.73% to 8,905.35 \u2014 Union Bank of India +5.60% to Rs 197, Punjab National Bank +5.27% to Rs 132.17, Bank of India +4.5%, Indian Bank +4.3% \u2014 with Nifty Bank +1.51% to 59,741.25 at its high, Pharma +1.65% to 28,896.10, Consumer Durables +0.92%, Realty +0.77% to 897.70, Financial Services +0.75% to 27,384.90 and Private Bank +0.74% to 29,608.15. IT was the drag at -1.22% to 32,468.95: Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404, Tech Mahindra -1.80% to Rs 1,796.90, Mphasis -2.7%; Metal -0.46% with Tata Steel -2.81% to Rs 184.85; FMCG -0.15% with ITC -1.45% to Rs 279.35. In the Nifty 50, 21 rose and 28 fell. The broader market was mixed rather than weak: Next 50 +1.11% to 72,789.45, Midcap 150 +0.36% to 22,408.55, Midcap 100 +0.55%, Smallcap 100 +0.10%, Smallcap 250 -0.10% to 17,577.00 and Nifty 500 +0.33% to 23,567.00. Breadth was negative on every count \u2014 1,922 advances to 2,316 declines and 205 unchanged on one NSE tally, 1,629 to 1,959 and 110 unchanged on Upstox's \u2014 and India VIX fell 5.48% to 17.42 after opening at 18.43 and ranging 16.77-18.44. Brent slipped about 1% to $97.46 a barrel, the rupee closed at 93.93 to the dollar (93.9275 on Reuters' print) after a six-month high of 93.69, and the provisional FII/DII figures for the day were not out at the time of this edition; the November month-to-date FII purchase stood at Rs 38,971 crore, or more than $4.1 billion, the strongest since September 2024. The next session is Wednesday, 11 November."
    }
  ],

  sectors: [
    {
      name: "Nifty PSU Bank",
      changePct: 3.73,
      note: "The day's engine, up 3.73% to 8,905.35 and by far the widest sector move of the session: Union Bank of India +5.60% to Rs 197, Punjab National Bank +5.27% to Rs 132.17, Bank of India +4.5%, Indian Bank +4.3% and State Bank of India +2.56% to Rs 1,042, with SBI the single largest contributor to the Nifty's 58-point gain. This is catch-up rather than discovery \u2014 the index rose only 4.59% last week while Nifty Private Bank added 9.06% and Nifty Bank 8.04%, so the state lenders were the cheapest way to own the foreign bid that has put $4.1 billion into Indian equities this month. (HDFC Sky's close report, News18 and Moneycontrol all carry 3.7%; researchandinvest's 9 Nov sector table carries 8,905.35 and +3.73%; the individual stock moves are Moneycontrol's and researchandinvest's.)"
    },
    {
      name: "Nifty Pharma",
      changePct: 1.65,
      note: "Second at 1.65% to 28,896.10, the defensive that finally behaved like one: GSK Pharmaceuticals +6.71% to Rs 2,710, Gland Pharma +5.41% to Rs 3,302.40 and Sai Life Sciences +5.32% to Rs 1,836.80 led, and Nifty Healthcare added 1.33%. The timing matters \u2014 pharma rose on the day IT fell 1.22%, which is what a rotation out of the global-trade sectors and into the domestic-defensive ones looks like. Note the caveat: the index traded as high as 29,224.85 and gave back 329 points into the close, so the buying faded. (News18 and HDFC Sky carry 1.65% and 1.6%; researchandinvest's table carries 28,896.10, +1.65%, the 29,224.85 high and the 28,427.75 previous close.)"
    },
    {
      name: "Nifty Bank",
      changePct: 1.51,
      note: "Third at 1.51% to 59,741.25, and it closed exactly at its session high \u2014 the cleanest bullish print of the day \u2014 after a low of 58,877.85. The private banks supplied the weight (HDFC Bank +1.75% to Rs 797.80, ICICI Bank +1.53% to Rs 1,589) and the PSU banks supplied the beta. Two sessions of arithmetic: the index is now up 8.04% over the last week and 1.5% today, and BSE Bankex rose 1.41% to 67,235.21 on the same day, so the two exchanges agree on the size of the move. (researchandinvest's 9 Nov table for 59,741.25, +1.51%, the 59,741.25 high and the 58,850.65 previous close; HDFC Sky, News18 and Moneycontrol for the 1.51%.)"
    },
    {
      name: "Nifty Consumer Durables",
      changePct: 0.92,
      note: "Fourth at 0.92%, and the quiet confirmation that the Diwali-consumption trade is still being paid for: this was the third-best sector of the previous week at +10.08% and it held its gains on a day the market's breadth was negative. Crude below $100 is the input-cost line for paints, adhesives and appliances, and it stayed below $100. (News18's close report carries 0.92% and HDFC Sky 0.9%; the previous week's 10.08% is from the sector table in Saturday's edition.)"
    },
    {
      name: "Nifty Realty",
      changePct: 0.77,
      note: "Fifth at 0.77% to 897.70, having traded 882.60 to 897.85. Realty was the second-best sector of last week at +10.17% and has now added another 0.77%, which is unusual \u2014 rate-sensitive, high-beta sectors normally give back a fifth of a 10% week on the first red-breadth day. The bid held because the inputs held: crude down 1%, the rupee at 93.93 and no change to the rate expectation. (researchandinvest's 9 Nov table for 897.70, +0.77% and the day range; HDFC Sky and News18 for 0.8% and 0.77%.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 0.75,
      note: "Sixth at 0.75% to 27,384.90, with an intraday high of 27,468.00 and a low of 27,134.15. The composite is the cleanest read on where the money went: the lenders rose, the insurers and asset managers did not do much, and the index's gain is roughly half of Nifty Bank's. Last week it was the market's best sector at +10.41%. (researchandinvest's table for 27,384.90 and +0.75%; HDFC Sky and News18 for 0.7% and 0.75%.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 0.74,
      note: "Seventh at 0.74% to 29,608.15, well behind the PSU banks' 3.73% \u2014 the exact inverse of last week, when private banks added 9.06% and the state lenders 4.59%. HDFC Bank +1.75% and ICICI Bank +1.53% did the work; the index closed 58 points below its high of 29,666.60. (researchandinvest's table for 29,608.15, +0.74% and the range; News18 for 0.74%.)"
    },
    {
      name: "Nifty Media",
      changePct: 0.48,
      note: "Eighth at 0.48% to 1,707.20 after last week's +2.41%. Media is small, high-beta and full of the loss-making new-age names, so a 0.48% gain on a negative-breadth day is not a signal of anything except that the sector was not where the selling was. (researchandinvest's 9 Nov table for 1,707.20 and +0.48%; HDFC Sky for 0.5%.)"
    },
    {
      name: "Nifty Energy",
      changePct: 0.38,
      note: "Ninth at 0.38% to 37,164.95, and this is the number to watch next: crude fell about 1% to $97.46 and the index that is most levered to it still rose, because Reliance and the gas distributors are buyers of crude rather than sellers. It closed at its high of 37,167.30. Last week the sector added 5.46%. (researchandinvest's table for 37,164.95, +0.38% and the high; NSE's sector file for the level.)"
    },
    {
      name: "Nifty Auto",
      changePct: 0.30,
      note: "Tenth at 0.30% to 27,925.90, closing at its high after a 27,592.05 low, and a long way from last week's +9.40%. The domestic-cyclical trade has stopped leading; it has not reversed. (researchandinvest's table for 27,925.90, +0.30% and the range; HDFC Sky for 0.3%.)"
    },
    {
      name: "Nifty Infrastructure",
      changePct: 0.23,
      note: "Eleventh at 0.23% to 9,462.90, with L&T +1.82% to Rs 4,185 doing most of the work inside a basket whose capital-goods names were the day's worst performers elsewhere in the market \u2014 R R Kabel -6.90%, Finolex Cables -5.85%, TD Power -6.26%. That split is the sector's whole story this fortnight. (researchandinvest's table for 9,462.90 and +0.23%; Goodreturns' NSE sector watch carries the same 9,462.90 and +0.23%.)"
    },
    {
      name: "Nifty FMCG",
      changePct: -0.15,
      note: "Twelfth and the first loser, at -0.15% to 46,660.65, after Nestle India +1.91% and Trent +2.02% \u2014 the index fell anyway because ITC dropped 1.45% to Rs 279.35 and the sector's heavyweights are ITC, Hindustan Unilever and the tobacco-to-foods complex. It had risen 7.28% last week. (researchandinvest's table for 46,660.65 and -0.15%; News18 and HDFC Sky for -0.15% and -0.1%; ITC's fall is Moneycontrol's.)"
    },
    {
      name: "Nifty Metal",
      changePct: -0.46,
      note: "Thirteenth at -0.46% to 12,664.65, with Tata Steel -2.81% to Rs 184.85 the worst stock in the Nifty 50 and the index's biggest single drag. Metals had added 7.58% last week on the crude-and-dollar move; a 1% fall in Brent on Monday was not enough to extend it, and China's demand story gave nothing. (researchandinvest's table for 12,664.65, -0.46% and the 12,554.15 low; HDFC Sky and News18 for -0.5% and -0.46%.)"
    },
    {
      name: "Nifty IT",
      changePct: -1.22,
      note: "Last at -1.22% to 32,468.95, and the only sector that fell by more than half a percent. Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404, Tech Mahindra -1.80% to Rs 1,796.90 and Mphasis -2.7% \u2014 four of the five biggest Nifty losers were this index. The cause is external: the AI-infrastructure sell-off on Wall Street has now run for a fortnight, and Indian IT is the one part of this market that prices it directly. The sector gained just 1.14% in a week the Nifty rose 8.58%, and has now given back 1.22% in a session; it is the clearest example in this market of a sector that is cheap for a reason rather than by accident. (researchandinvest's table for 32,468.95, -1.22% and the 32,151.80 low; HDFC Sky, News18 and Moneycontrol all carry -1.2%; the individual falls are Moneycontrol's and Upstox's.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 single-session price returns for 9 November 2026, taken from researchandinvest's full-universe movers table built on the day's NSE closing prices, and cross-read against Upstox's Nifty 50 / Midcap 100 / Smallcap 100 gainers-and-losers lists, Moneycontrol's Nifty 50 closing table and Investing.com's session summary. The universe is the full 500 \u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \u2014 so a name outside the headline sub-indices still ranks, and the cap tags follow index membership (Nifty Next 50 and Nifty 50 are tagged Largecap, Midcap 150 Midcap, Smallcap 250 Smallcap). Honest limitation: two providers print different magnitudes for the same stock \u2014 researchandinvest has R R Kabel at -6.90% and TD Power at -6.26% while Upstox's Smallcap 100 list has them at -7.4% and -6.4% \u2014 which is a difference of adjusted-close convention rather than of fact, and the direction and ordering are identical in both. Breadth context: on NSE's provisional tally 1,922 stocks advanced and 2,316 declined with 205 unchanged, so a day with ten double-digit-worthy movers was a day with more decliners than advancers.",
    gainers: [
      {
        name: "Data Patterns (India)",
        changePct: 8.67,
        cap: "Smallcap",
        note: "The Nifty 500's biggest gainer of the day, up 8.67% to Rs 4,025.00 \u2014 and the most interesting thing about it is what it says about the rotation. Data Patterns is defence electronics, the highest-multiple corner of the capital-goods complex, and it rose 8.67% on a day Nifty Capital Goods was one of the market's weakest baskets and three cable makers fell 5-7%. That is stock-specific buying, not a sector bid: the name had been sold through last week's AI-and-capex unwind and Monday's move is a partial recovery inside a falling sector. (researchandinvest's 9 Nov Nifty 500 gainers table for the +8.67% and the Rs 4,025 close; Upstox's Smallcap 100 gainers list independently puts it at +8.6% as the day's best smallcap.)"
      },
      {
        name: "IREDA",
        changePct: 7.47,
        cap: "Midcap",
        note: "Second at 7.47% to Rs 119.65, and the purest expression of Monday's trade: the Indian Renewable Energy Development Agency is a lender, it sits in the Nifty Midcap 150, and it rose almost exactly twice as much as the PSU Bank index because it is a high-beta financial with a small float. It was the second-best gainer on the Midcap 100 as well, and it is the only name on either list that combines the day's two themes \u2014 the financial bid and the domestic-infrastructure book. (researchandinvest's Nifty 500 gainers table for +7.47% and Rs 119.65; Upstox's Midcap 100 list for +7.4%.)"
      },
      {
        name: "Glaxosmithkline Pharmaceuticals",
        changePct: 6.71,
        cap: "Midcap",
        note: "Third at 6.71% to Rs 2,710.00, and the reason Nifty Pharma managed 1.65% while the market's breadth was negative. GSK Pharma is the largest pure-play MNC pharma in the Nifty Midcap 150 and a low-float, high-price stock, which is exactly the profile that moves hardest when institutional money rotates into a defensive. No company-specific news was needed: the sector rose, the stock rose three times as much. (researchandinvest's Nifty 500 gainers table for +6.71% and Rs 2,710; NSE's own Nifty Midcap 150 constituent file confirms the index membership that the cap tag here is based on.)"
      },
      {
        name: "Union Bank of India",
        changePct: 5.60,
        cap: "Largecap",
        note: "Fourth at 5.60% to Rs 197.00, and the biggest single reason Nifty PSU Bank rose 3.73%. Union Bank is the high-beta state lender \u2014 smaller than SBI, more sensitive to a re-rating of the sector's net interest margin, and the first place money goes when foreigners buy the PSU bank trade. It rose more than twice as much as SBI's 2.56% on the same day, which is the definition of beta inside a sector move. (researchandinvest's Nifty 500 gainers table for +5.60% and Rs 197; Moneycontrol's Nifty 50 closing table and News18's sector report carry the PSU Bank index at +3.73% with SBI at +2.56%.)"
      },
      {
        name: "Sansera Engineering",
        changePct: 5.42,
        cap: "Smallcap",
        note: "Fifth at 5.42% to Rs 4,653.40, an auto-ancillary that makes precision-forged components \u2014 and note how it got there: Nifty Auto rose only 0.30% on the day, so this is a 5.4% move in a flat sector, which means the buying was stock-specific rather than thematic. Sansera sits in the Nifty Smallcap 250, the one broad card that fell on Monday (-0.10%), so it beat its own index by 552 basis points. (researchandinvest's Nifty 500 gainers table for +5.42% and Rs 4,653.40; NSE's Nifty Midcap 150 constituent file is the check that it is not in that index, which places it in the Smallcap 250.)"
      }
    ],
    losers: [
      {
        name: "R R Kabel",
        changePct: -6.90,
        cap: "Smallcap",
        note: "The Nifty 500's worst stock of the day, down 6.90% to Rs 1,969.40, and the third consecutive session in which the cables complex has been repriced. R R Kabel makes wires and cables for construction and power \u2014 a high-multiple industrial bought for volume growth \u2014 and the quarter that broke the trade is still being marked. Upstox prints -7.4% for the same session, which is a convention difference on the adjusted close rather than a disagreement about the direction. (researchandinvest's 9 Nov Nifty 500 losers table for -6.90% and Rs 1,969.40; Upstox's Smallcap 100 losers list for -7.4%.)"
      },
      {
        name: "TD Power Systems",
        changePct: -6.26,
        cap: "Smallcap",
        note: "Second at -6.26% to Rs 571.65, and a name that has now fallen in three straight sessions \u2014 it was the Nifty 500's second-worst stock of last week at -19.25%, and Monday's 6.26% takes the fortnight's fall past 24%. TD Power makes generators for industrial and export customers; the order-book story that re-rated it has been replaced by a margin story, and the market is still deciding what the right multiple is. (researchandinvest's Nifty 500 losers table for -6.26% and Rs 571.65; Upstox's Smallcap 100 list for -6.4%; the prior week's -19.25% is in Saturday's edition.)"
      },
      {
        name: "Finolex Cables",
        changePct: -5.85,
        cap: "Smallcap",
        note: "Third at -5.85% to Rs 1,232.40 \u2014 the second cable maker in the bottom three, which is the point. When two of the three worst stocks in a 500-stock universe make the same product, the move is about the product's margin, not about the two companies: copper costs, a competitive tender market and a quarter that disappointed are repricing the whole complex at once. (researchandinvest's Nifty 500 losers table for -5.85% and Rs 1,232.40.)"
      },
      {
        name: "Tata Teleservices (Maharashtra)",
        changePct: -5.25,
        cap: "Smallcap",
        note: "Fourth at -5.25% to Rs 39.33. TTML is a low-priced, low-float residual of the Tata telecom story with no operating business of consequence, and it trades on flows rather than fundamentals \u2014 which is why it appears in these lists in both directions and why a 5% move in it says nothing about the market. (researchandinvest's Nifty 500 losers table for -5.25% and Rs 39.33.)"
      },
      {
        name: "Sterlite Technologies",
        changePct: -5.00,
        cap: "Smallcap",
        note: "Fifth at exactly -5.00% to Rs 670.95, and the third telecom-equipment name in the bottom five alongside HFCL at -4.63%. Sterlite makes optical fibre and has been one of the most volatile names in the Nifty 500 all fortnight \u2014 it fell 12.69% in the week to 6 November and is now down another 5% \u2014 because its earnings are levered to a global fibre-price cycle that has not turned. (researchandinvest's Nifty 500 losers table for -5.00% and Rs 670.95; Upstox's Smallcap 100 list for -5.0% and HFCL at -4.8%.)"
      }
    ]
  },

  watch: [
    {
      title: "There is no Tuesday session \u2014 the market reopens on Wednesday, 11 November",
      detail: "NSE and BSE are shut on Tuesday, 10 November, for Diwali-Balipratipada, across equity, equity derivatives and the securities lending and borrowing segment. It is the second of November's two weekday holidays, after which the only remaining closure this month is 24 November for Guru Nanak Jayanti. What matters is not the holiday but the reopen: two days of no trading after a session in which the index was bought at its lows and sold at its highs means Wednesday's first hour carries the whole of Monday afternoon's unresolved question \u2014 whether the 245-point recovery was real buying or a closing-auction squeeze."
    },
    {
      title: "The $4.1 billion question: does the foreign bid survive a two-day break",
      detail: "Foreign portfolio investors have bought more than $4.1 billion of Indian equities in November, the strongest month since September 2024, and Rs 38,971 crore of it on NSDL's numbers to 8 November. Monday's gains were made almost entirely by the stocks that flow buys first \u2014 the PSU banks, the large private banks, the index heavyweights \u2014 while 2,316 stocks fell against 1,922 that rose. That is what a flow-driven rally looks like from the inside, and the tell for the rest of the month is whether the advances-declines line flips positive on a day the index rises less than half a percent."
    },
    {
      title: "IT has become the market's one genuinely global exposure",
      detail: "Nifty IT fell 1.22% on Monday while every other large sector except Metal rose, and it has now gained 1.14% in a week in which the Nifty added 8.58%. The cause is the AI-infrastructure unwind on Wall Street, which has run for a fortnight and which hits Indian IT directly because the same foreign money that is leaving AI capex is arriving in Indian financials. Infosys at Rs 1,149.50 and HCL Technologies at Rs 1,404 are the two to watch: both fell more than 2.5% on Monday, and a third session of that would say the rotation is a de-rating rather than a pause."
    },
    {
      title: "Crude below $100 and a rupee at 93.93 are the two inputs under everything",
      detail: "Brent settled about 1% lower at $97.46 a barrel and the rupee closed at 93.93 to the dollar after touching a six-month high of 93.69, and those two numbers are the reason Nifty PSU Bank could rise 3.73% and Nifty Auto could hold its 9.4% week. Both are now near the edge of their recent ranges: the rupee's support sits at 93.50 and its resistance at 94.30 on HDFC Securities' levels, and crude has held under $100 for five sessions. A reversal in either would take the financials and the domestic cyclicals down first, because that is where the money went on the strength of them."
    },
    {
      title: "The cables and capital-goods tail is still being marked, session by session",
      detail: "R R Kabel -6.90%, Finolex Cables -5.85%, TD Power -6.26%, Sterlite Technologies -5.00%, HFCL -4.63% \u2014 five of the ten biggest movers in the Nifty 500 on Monday, all in the same corner of the market, and all falling in a session where the index rose. This is the third session of that repricing and it is not finished, because the mechanism is a change in the multiple the market will pay for order-book growth, and multiples do not reset in a week. Any remaining Q2 print in cables, wires, capital goods or building materials is a binary event rather than an earnings event."
    }
  ],

  reads: [
    {
      title: "Stock markets end higher amid easing crude oil prices, buying in banks",
      source: "The Hindu / PTI",
      url: "https://www.thehindu.com/business/markets/stock-markets-end-higher-amid-easing-crude-oil-prices-buying-in-banks/article71682332.ece"
    },
    {
      title: "Sensex ends 107 pts higher, Nifty above 25,000; PSU banks surge 3.7%, IT slides 1.2%",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-nifty50-share-price-sensex-share-price-crude-fii-gift-nifty-rupee-latest-updates-09-11-2026-liveblog-alpha-liveblog-14075064.html"
    },
    {
      title: "Market wrap, Nov 9: SENSEX rises 107 pts, NIFTY50 ends at 25,044 as PSU Bank, pharma stocks rally; SBI leads gains",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-nov-9-sensex-rises-107-pts-nifty-50-ends-at-25-044-as-psu-bank-pharma-stocks-rally-sbi-leads-gains/article-203225/"
    },
    {
      title: "Market Close Report Today, November 9, 2026: Nifty, Sensex Post Modest Gains As Diwali Party Pauses For Breath",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/market-close-report-today-november-9-2026-nifty-sensex-post-modest-gains-as-diwali-party-pauses-for-breath"
    },
    {
      title: "Muhurat Trading: Sensex, Nifty break 9-year Diwali streak; why the rally fizzled",
      source: "Financial Express",
      url: "https://www.financialexpress.com/market/muhurat-tradingsensex-nifty-break-9-year-diwali-streak-why-the-rally-fizzled-4379715/"
    }
  ],

  ratio: {
    name: "Return on Equity (ROE)",
    category: "Profitability / shareholder returns",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 318 = PDF p. 288, printed p. 317 = PDF p. 287, printed p. 320 = PDF p. 290); every page cited below is the printed page number.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = Profit for the year attributable to the owners of the Company ÷ average total equity attributable to the owners, where the average is the mean of the opening balance at 31 March 2025 and the closing balance at 31 March 2026. Both come off the same two statements: the Consolidated Statement of Profit and Loss gives the numerator, the Consolidated Balance Sheet gives the denominator. The answer is a percentage: how many paise of profit the business earned this year for every rupee the shareholders have left in it.",
    formulaNote: "ROE is the one ratio every Indian screen publishes and almost none of them agree on, and Infosys is the perfect company to see why: the same audited statements produce 31.2%, 31.6% and 31.9% depending on three choices, none of them wrong. The first is which profit. The company earned Rs 29,474 crore, of which Rs 29,440 crore belongs to the owners and Rs 34 crore to non-controlling interests \u2014 so a numerator that uses total profit is pairing a number that includes other people's money with a denominator that does not. The second is which equity. ROE is a return on capital over a period, so the honest denominator is the average of the equity you started with and the equity you ended with; a closing-balance ROE flatters any company whose equity shrank during the year, and Infosys' equity shrank by Rs 2,966 crore because an Rs 18,000 crore buyback completed in FY26. The third is whether to strip the exceptional item: FY26 carries a Rs 1,289 crore one-off charge for the Labour Codes notified on 21 November 2025, which cut profit before tax by that amount and cut tax by Rs 318 crore, so underlying profit was about Rs 971 crore higher than reported. Work all three and you get a range of roughly 31.1% to 32.3% for the same year of the same company \u2014 which is why this page shows the arithmetic rather than a single decimal.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      {
        label: "Profit for the year, FY26 \u2014 after tax, before it is split between owners and non-controlling interests",
        value: "Rs 29,474 crore",
        page: "p. 318"
      },
      {
        label: "Profit attributable to the owners of the Company, FY26 \u2014 the numerator used here",
        value: "Rs 29,440 crore",
        page: "p. 318"
      },
      {
        label: "Profit attributable to non-controlling interests, FY26 \u2014 the Rs 34 crore that is not the owners'",
        value: "Rs 34 crore",
        page: "p. 318"
      },
      {
        label: "Profit attributable to the owners of the Company, FY25 \u2014 the prior year, for direction",
        value: "Rs 26,713 crore",
        page: "p. 318"
      },
      {
        label: "Equity share capital, 31 March 2026 \u2014 404.7 crore shares of Rs 5 each",
        value: "Rs 2,024 crore",
        page: "p. 317"
      },
      {
        label: "Other equity (reserves and surplus), 31 March 2026",
        value: "Rs 90,828 crore",
        page: "p. 317"
      },
      {
        label: "Total equity attributable to owners, 31 March 2026 \u2014 2,024 + 90,828, the closing denominator",
        value: "Rs 92,852 crore",
        page: "p. 317"
      },
      {
        label: "Equity share capital, 31 March 2025 \u2014 before the buyback cancelled shares",
        value: "Rs 2,073 crore",
        page: "p. 317"
      },
      {
        label: "Other equity, 31 March 2025",
        value: "Rs 93,745 crore",
        page: "p. 317"
      },
      {
        label: "Total equity attributable to owners, 31 March 2025 \u2014 2,073 + 93,745, the opening denominator",
        value: "Rs 95,818 crore",
        page: "p. 317"
      },
      {
        label: "Non-controlling interests, 31 March 2026 and 31 March 2025 \u2014 the Rs 445 crore and Rs 385 crore that sit outside the owners' equity",
        value: "Rs 445 crore / Rs 385 crore",
        page: "p. 317"
      },
      {
        label: "Total equity including non-controlling interests, 31 March 2026 \u2014 the denominator Infosys itself uses",
        value: "Rs 93,297 crore",
        page: "p. 317"
      },
      {
        label: "Exceptional item: impact of the Labour Codes notified on 21 November 2025, charged in FY26",
        value: "Rs 1,289 crore",
        page: "p. 318"
      },
      {
        label: "Tax effect of that exceptional item \u2014 current tax is Rs 363 crore lower than FY25 partly because of it; the company states Rs 318 crore",
        value: "Rs 318 crore",
        page: "p. 318"
      },
      {
        label: "Buyback of equity shares completed during FY26, at Rs 1,800 a share \u2014 why owners' equity fell despite a profitable year",
        value: "Rs 18,000 crore",
        page: "p. 320"
      },
      {
        label: "Infosys' own published return on equity for FY26, and the 29.0% it reports for FY25",
        value: "31.6% (FY26) / 29.0% (FY25)",
        page: "pp. 50-51"
      }
    ],
    working: "Step 1 \u2014 Rebuild the closing denominator from its two printed lines (p. 317) rather than trusting a subtotal: equity share capital Rs 2,024 crore + other equity Rs 90,828 crore = Rs 92,852 crore attributable to the owners. Step 2 \u2014 Do the same for the opening balance (p. 317): Rs 2,073 crore + Rs 93,745 crore = Rs 95,818 crore. Step 3 \u2014 Average the two: (92,852 + 95,818) ÷ 2 = Rs 94,335 crore. Step 4 \u2014 Take the numerator the balance sheet matches: profit attributable to the owners Rs 29,440 crore (p. 318), not the Rs 29,474 crore total. Step 5 \u2014 Divide: 29,440 ÷ 94,335 = 0.3121, or 31.21%. Step 6 \u2014 Now do it the other two ways so you can see the range. Total-equity version: total profit Rs 29,474 crore ÷ average total equity ((93,297 + 96,203) ÷ 2 = Rs 94,750 crore) = 31.11%. Infosys' own version: Rs 29,474 crore ÷ the closing total equity of Rs 93,297 crore = 31.59%, which is the 31.6% the company prints on pp. 50-51. Step 7 \u2014 Strip the one-off: the Labour Codes charge cut profit before tax by Rs 1,289 crore and tax by Rs 318 crore, so underlying profit was about Rs 971 crore higher at roughly Rs 30,445 crore, and 30,445 ÷ 94,335 = 32.27%. Step 8 \u2014 Set the direction of travel. Owners' equity fell Rs 2,966 crore (95,818 → 92,852) in a year the company earned Rs 29,440 crore, because Rs 18,000 crore went out in the buyback (p. 320) and the dividend took most of the rest; profit rose 10.2% on revenue up 9.6% (Rs 1,78,650 crore from Rs 1,62,990 crore, p. 318). A shrinking denominator and a growing numerator is why ROE improved 2.6 percentage points to 31.6% on the company's own basis.",
    result: "31.2% on average equity attributable to owners; 31.6% on Infosys' closing-equity basis; 32.3% before the Rs 1,289 crore Labour Codes charge",
    meaning: "31% is a business that doubles the owners' money in about two and a half years without paying out a rupee, and it is the number that explains why Infosys trades at 14-15 times earnings rather than at the market's multiple: the market is not paying for growth, it is paying for a very high return on a very small capital base. Three things are worth holding on to. First, this ROE is partly manufactured by capital return \u2014 Rs 18,000 crore of buyback and a Rs 48 dividend per share took equity down 3.1% while profit rose 10.2%, so a quarter of the improvement is arithmetic rather than performance. Second, the capital base is tiny relative to the business: Rs 1,78,650 crore of revenue is run on Rs 92,852 crore of equity because an IT services firm owns almost nothing except people and receivables, which is why every asset-light comparison of ROE between an IT company and a manufacturer is close to meaningless. Third, the number is stable to the point of being boring \u2014 31.6% in FY26, 29.0% in FY25, 32.1% in FY24, and Screener's five-year average at 31% \u2014 and stability at that level is the actual investment case. Watch the denominator, not the numerator: another buyback would lift ROE without adding a rupee of profit, and a large acquisition would cut it for a year or two even if the deal were good.",
    crossCheck: "Reconciled three ways. First, internally: 2,024 + 90,828 = 92,852 and 2,073 + 93,745 = 95,818 are both rebuilt from the report's own printed lines, and 29,440 + 34 = 29,474 ties the owners' profit back to the total. Second, against the company's own disclosure: Infosys prints 31.6% for FY26 and 29.0% for FY25 on the Financial Capital pages (pp. 50-51), and says it improved 2.6 percentage points \u2014 which is exactly what 29,474 ÷ 93,297 = 31.59% reproduces, so the company's convention is closing total equity over total profit, not the average-equity method used here. Third, against two independent screens on 9 November 2026: Screener.in shows ROE of 31.9% with a three-year average of 31% and a five-year average of 31%, and Alphave shows 31.2% for FY26 against 29.1% for FY25. The 31.2% computed here matches Alphave to the decimal because both use average equity attributable to owners; Screener's 31.9% is about 70 basis points higher, which is the closing-balance-versus-average convention and, on a year when equity fell 3.1%, exactly the direction and rough size of gap you would predict. No provider's figure contradicts the arithmetic; they differ only on which equity they divide by.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287) for equity share capital, other equity, total equity attributable to owners, non-controlling interests and total equity at both 31 March 2026 and 31 March 2025; Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288) for revenue, profit for the year, the split between owners and non-controlling interests, the Rs 1,289 crore Labour Codes exceptional item and its tax effect; Consolidated Statement of Changes in Equity, printed p. 320 (PDF p. 290) for the Rs 18,000 crore buyback; Financial Capital, printed pp. 50-51 for the company's own 31.6% ROE and the 2.6 percentage point improvement. Cross-checked against Screener.in's consolidated ROE of 31.9% and Alphave's 31.2% for 9 November 2026."
  }
};
