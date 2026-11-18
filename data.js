const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Wednesday, 18 November 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of the 18 November 2026 close (3:30 PM IST), the third session of the week; every day move is measured from the 17 November 2026 close and every weekly move from the 13 November 2026 close, the last close of the previous week",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition — they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee — a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25227.95,
      dayChange: -159.45,
      dayChangePct: -0.63,
      weekChangePct: 0.33, // measured from the 13 Nov close of 25,144.30, three sessions in
      spark: [25299.35, 25144.3, 25291.1, 25387.4, 25227.95], // the last five sessions: 12, 13, 16, 17 and 18 Nov — 10 Nov was the Diwali-Balipratipada holiday
      returns:     { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "25,227.95, down 159.45 points or 0.63% — the first fall in three sessions, and it was made early. The index opened at 25,323.15, 64 points below Tuesday's close, ran to 25,390.80 inside the first hour, then slid to 25,141.80 before the closing auction lifted it 86 points off the low. The close is 163 points below the high, so the afternoon was a grind rather than a flush. Breadth was the part that hurt: 1,098 NSE stocks rose against 2,485 that fell, 126 hit lower circuits against 80 upper circuits, and 91 stocks printed one-year lows against 67 at 52-week highs. India VIX closed at 15.57, up 0.29%, which is a rise but not a fear reading. (NSE's own ind_close_all file for 18 November for the open, high, low, close and points change; Upstox's 16:02 IST wrap, Business Standard and Capital Market's 16:38 IST close report all print 25,227.95 and -0.63% on the same 25,387.40 previous close.)"
    },
    {
      name: "Nifty Next 50",
      close: 71714.7,
      dayChange: -978.3,
      dayChangePct: -1.35,
      weekChangePct: -1.59, // measured from the 13 Nov close of 72,874.69
      spark: [73481.25, 72874.69, 72490.25, 72693, 71714.7], // the last five sessions: 12, 13, 16, 17 and 18 Nov
      returns:     { oneY: 3.4, threeY: 16.58, fiveY: 10.7 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "71,714.70, down 978.30 points or 1.35%, and the gap to the Nifty is the story: 72 basis points on a day when the benchmark fell 63. It opened at 72,500.05 — already 193 points below Tuesday — made a high of 72,580.25 and a low of 71,546.80, closing 866 points under the high and 168 above the low. This is the bucket that carries the consumer-durables and auto weightings, and those two sectors fell 3.13% and 1.35%, so a 1.35% index fall is roughly what the composition implies rather than a separate event. Two sessions of gains are now gone and more: the index sits 1.59% below Friday's 72,874.69. (NSE's ind_close_all file for 18 November; ET's index watch and researchandinvest's 16:08 IST table both print 71,714.70 and -1.35% on a 72,693.00 previous close.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22389.75,
      dayChange: -258.95,
      dayChangePct: -1.14,
      weekChangePct: -1.29, // measured from the 13 Nov close of 22,681.25
      spark: [22760.75, 22681.25, 22588.35, 22648.7, 22389.75], // the last five sessions: 12, 13, 16, 17 and 18 Nov
      returns:     { oneY: 1.59, threeY: 14.2, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "22,389.75, down 258.95 points or 1.14%, and the ordering inside the mid-cap bucket was uniform for once: the 150 fell 1.14%, the Midcap 100 1.22%, the Midcap 50 1.33% and the Midcap Select 1.36%, so the narrower the index the worse it did — the reverse of Tuesday, when the 50 and the 100 both beat the 150. The range was 22,365.05 to 22,620.50 and the close sat 231 points under the high; advance-decline inside the 150 was 21 up and 128 down. The names that hurt were the cables and capital-goods line: Apar Industries -4.45%, KEI Industries -4.20%, Ashok Leyland -4.17%, APL Apollo -2.74%. (ET's closing print of 22,389.75, -258.96, -1.14%; Capital Market's 16:38 IST close report and ET's index watch both give -1.14%. ET's point change of -258.96 is a paise larger than the exact difference from the 22,648.70 previous close, a rounding artefact in the feed; -258.95 is used here so the close and the change reconcile.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17668.0,
      dayChange: -86.85,
      dayChangePct: -0.49,
      weekChangePct: -1.52, // measured from the 13 Nov close of 17,940.54
      spark: [17994.5, 17940.54, 17771.25, 17754.85, 17668], // the last five sessions: 12, 13, 16, 17 and 18 Nov
      returns:     { oneY: 1.9, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "17,668.00, down 86.85 points or 0.49% — the smallest fall of the four equity cards, and the only one where the tape improved through the afternoon. Moneycontrol's 13:09 IST snapshot had the index at 17,633.85, down 0.68%, inside a 17,619.35 to 17,780.35 range; the close of 17,668.00 is 34 points above that intraday print, so the last two hours were net buying in the smallest names while the Nifty was still drifting lower. That reverses the pattern of the previous two sessions, when the small-caps fell while the large-caps rose. (ET's index watch and closing list print 17,668 and -0.49%; Capital Market's 16:38 IST report gives -0.49%. The level is carried at the rupee because no second source published this index to two decimals at the close — the percentage is double-confirmed, the paise are not.)"
    },
    {
      name: "BSE SME Index",
      close: 113874.59,
      dayChange: -759.1,
      dayChangePct: -0.66,
      weekChangePct: -2.88, // measured from the 13 Nov close of 1,17,247.82
      spark: [117808.56, 117247.82, 115359.64, 114633.69, 113874.59], // the last five sessions: 12, 13, 16, 17 and 18 Nov — every point printed
      returns:     { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "1,13,874.59, down 759.10 points or 0.66% — the fourth consecutive fall, which has taken the platform 3.34% below its 12 November close of 1,17,808.56. It opened at 1,14,523.34, made a 1,14,820.30 high and a 1,13,706 low, closing 946 points under the high and 169 above the low. The comparison that matters is with the small-cap tape: the Nifty Smallcap 250 fell 0.49% today against the SME platform's 0.66%, a gap of 17 basis points after Tuesday's 54, so the de-rating of the smallest listed companies continues but is slowing. (Goodreturns' BSE index table for 18 November for the close, open, high, low and the 1,14,633.69 previous close; the 0.66% fall reconciles with that previous close to the paisa.)"
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,227.95 and the Sensex at 82,031.81, down 0.63% and 0.61%, as consumer durables lost 3.13% and metal 2.46%, PSU banks and pharma held, and 2,485 stocks fell against 1,098 that rose",
    summary: "Two sessions of gains, gone in one. The Nifty opened at 25,323.15, ran to 25,390.80 and then spent the rest of the day sliding to a 25,141.80 low before closing at 25,227.95, down 159.45 points or 0.63%; the Sensex traded between 81,780.47 and 82,578.87 and settled at 82,031.81, down 500.38 points or 0.61%, after falling 751.72 points at its worst. The selling was concentrated and specific. Nifty Consumer Durables fell 3.13% with Titan down 5.30% to Rs 4,648.10 and Kalyan Jewellers down 4.80%, Nifty Metal fell 2.46% as global commodity prices eased and the dollar firmed to 103.76, and Nifty IT fell 1.24% with TCS down 2.13% — on the morning after Nvidia beat estimates. Only three sector indices closed green: PSU Bank 0.59% on SBI's 2.38%, Media 0.46% on Sun TV's 5.56%, Pharma 0.15% on Cipla's 2.09%. The broader market did worse than the benchmarks — the Nifty 500 fell 0.81% with 376 decliners against 122 advancers, and across the NSE 2,485 stocks fell against 1,098 that rose, with 126 lower circuits and 91 one-year lows. India VIX closed at 15.57, up 0.29%, and market capitalisation of NSE-listed firms slipped to Rs 501.55 lakh crore. The reason given in every close report is profit-booking after the two-session run, with a second worry about whether November's record foreign inflow holds: FPIs bought another Rs 4,195 crore on Tuesday, taking the five-session total to Rs 35,190 crore, but the rupee at 93.44 against the dollar and a US 10-year at 5.095% are the counterweights.",
    stats: [
      "Nifty -0.63%",
      "Sensex -0.61%"
    ],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
{
      date: "2026-11-12",
      label: "Thu 12 Nov",
      niftyClose: 25299.35,
      niftyChangePct: 0.18,
      sensexChangePct: 0.04,
      note: "The week's high-water mark, and nobody noticed at the time: 44.30 points or 0.18% to 25,299.35, the highest close of the week, after trading between 25,142.95 and 25,384.80, with the Sensex up just 31.61 points or 0.04% at 81,911.01. Three sessions into the week the Nifty had added 1.21% and the Sensex 1.25%. The rotation inside the day ran the other way from Wednesday's: the Nifty Next 50 gave back 0.01% to 73,481.25 and IT stayed weak, while the broader market carried on — Midcap 150 closed at 22,760.75 and Smallcap 250 at 17,994.50, both the week's highs. The day's news was not Indian. Nvidia's chief executive resigned and global bond yields rose, which is what set Friday up: a market that had spent four sessions climbing a wall of domestic worry met a global one at the top. (Capital Market's week-in-review for 25,299.35, 81,911.01, +44.30, +31.61 and the three-session cumulative +1.21% and +1.25%; exa.ai's daily record for the 25,213.50 open and the 25,142.95 to 25,384.80 range; the Midcap 150 and Smallcap 250 closes are arithmetic on Friday's printed close and day change — 22,681.25 + 79.50 and 17,940.54 + 53.96 — not separate prints.)"
    },
{
      date: "2026-11-13",
      label: "Fri 13 Nov",
      niftyClose: 25144.3,
      niftyChangePct: -0.61,
      sensexChangePct: -0.39,
      note: "The first fall of November, and it was made in the afternoon rather than at the open. The Nifty started near 25,139, sank to 25,054.40, recovered to a 25,246 high and closed at 25,144.30, down 155.05 points or 0.61%; the Sensex closed at 81,592.45, down 318.56 points or 0.39%. Breadth was the month's weakest: 1,446 NSE stocks rose and 2,179 fell, and 38 of the 50 constituents closed lower. The trigger was entirely macro — October CPI at 6.09% against September's 5.54%, food inflation at 8.94% from 7.74% — and the tape immediately began pricing a December repo hike. The 10-year benchmark yield rose to 7.302% from 7.249%, a five-basis-point repricing in a single session, and the rupee closed at 94.24 to the dollar on Moneycontrol's weekly count, 33 paise weaker than the prior Friday's 93.91, though some Friday wraps printed 94.20. Every NSE sector except energy (+0.03%) and FMCG (-0.01%) fell, led by realty -1.39%, auto -1.07% and metal -0.98%, while the wider market lost less than the benchmark for a fourth session: Midcap 150 -0.35%, Smallcap 250 -0.30%, Nifty 500 -0.55%. Brent settled at $95.28 for December delivery. What the day did not do is break the week. (This page's Friday edition for the session's own detail, built on NSE's closing file and researchandinvest's 16:08 IST tables; Moneycontrol's weekly wrap for the 94.24 close against 93.91 and the 93.61-94.94 weekly range; Capital Market and Upstox for the two closes and point changes; ET's indices board for the sector percentages.)"
    },
{
      date: "2026-11-16",
      label: "Mon 16 Nov",
      niftyClose: 25291.1,
      niftyChangePct: 0.58,
      sensexChangePct: 0.63,
      note: "A large-cap day that the rest of the market did not attend. The Nifty opened at 25,206.15, dipped to 25,172.10, ran to 25,337.60 and closed at 25,291.10, up 146.80 points or 0.58%; the Sensex ran from 81,810.98 to a 82,311.65 high and a 81,762.82 low before settling at 82,104.79, up 512.34 points or 0.63%. Underneath that, breadth was the worst of the month: of 3,774 NSE stocks traded, 1,175 advanced, 2,515 declined and 84 were unchanged. Nifty FMCG was the best sector at +1.87% to 47,708.10, closing on its high; Nifty Bank made a record close at 61,575.90, up 541.80 points or 0.89% and 189 points short of its 3 February intraday record of 61,764, with 13 of its 14 constituents higher and Bank of Baroda the only faller at -1.33%. Against that, Nifty Pharma -1.53%, Nifty Metal -1.50%, Nifty Realty -1.34% and Nifty Auto -1.29%. India VIX closed at 15.68, up 1.16%, on a day the index rose — the options market did not read Monday as a de-risking. NSE-listed market capitalisation ended at Rs 504.63 lakh crore. The single biggest stock event was Tata Motors PV, down 8.70% to Rs 262.40 after a September-quarter loss of Rs 5,531 crore and a cut to JLR's FY27 guidance, which put it 1.3% above its 52-week low."
    },
{
      date: "2026-11-17",
      label: "Tue 17 Nov",
      niftyClose: 25387.4,
      niftyChangePct: 0.38,
      sensexChangePct: 0.52,
      note: "A second gain that the afternoon trimmed. The Nifty opened at 25,277.30, fell to 25,267.30, ran to 25,501.35 — its first print above 25,500 since February 2026 — and closed at 25,387.40, up 96.30 points or 0.38%; the Sensex traded between 82,091.90 and 82,897.49 before settling at 82,532.19, up 427.40 points or 0.52%. Breadth was negative on the NSE at 2,012 advancing against 2,148 declining, and near-even on the BSE at 1,817 up and 1,813 down, so the index rose while the median stock fell. Nifty PSU Bank was the best sector at +1.95% to 9,486.60, with Bank of Maharashtra +4.34%, Bank of India +4.12% and PNB +3.74%; Nifty Realty added 1.94% to 926.50 on pre-sales data that showed Q2 FY27 bookings up 92% year on year across the listed developers; and Nifty Bank closed at a record 62,273.25, up 697.35 points or 1.13%, after an all-time intraday high of 62,442.20. Nifty IT was the worst at -0.90% to 31,654.10 on a global selloff in AI and semiconductor shares ahead of Nvidia's results, with HCLTech -2.09% and Tech Mahindra -1.43%. India VIX fell 1.02% to 15.52. The rupee appreciated 46 paise to 93.47, Brent eased to about $92.68, and foreign portfolio inflows into Indian equities reached a record $9.53 billion for November. Brainbees Solutions (FirstCry) was the 500's biggest gainer on a Q2 loss that narrowed 75% to Rs 12.6 crore."
    },
    {
      date: "2026-11-18",
      label: "Wed 18 Nov",
      niftyClose: 25227.95,
      niftyChangePct: -0.63,
      sensexChangePct: -0.61,
      note: "A fall the close reports called profit-booking and the tape called something narrower. The Nifty opened 64 points lower at 25,323.15, made a 25,390.80 high inside the first hour, then slid to 25,141.80 — 246 points below Tuesday's close — before the closing auction took it to 25,227.95, down 159.45 points or 0.63%. The Sensex fell 751.72 points to a 81,780.47 low and closed at 82,031.81, down 500.38 points or 0.61%. The damage was in consumer durables (-3.13%, Titan -5.30%) and metal (-2.46%), not in banks: Nifty Bank fell 0.38% and PSU Bank rose 0.59% on SBI +2.38%. Breadth was the real signal — 1,098 advances against 2,485 declines on the NSE, 126 lower circuits, 91 stocks at one-year lows — while India VIX rose only 0.29% to 15.57. FPIs had bought Rs 4,195.38 crore on Tuesday; the 18 November flow print was not available at the close. (NSE ind_close_all for 18 November; Upstox 16:02 IST, Capital Market 16:38 IST, Business Standard and India Today for the same closes and the breadth numbers.)"
    }
  ],

  sectors: [
    {
      name: "Nifty PSU Bank",
      changePct: 0.59,
      note: "9,542.80 against 9,486.60, up 56.20 points or 0.59% — the day's leader, and the only sector bought from the open: it started at 9,480.15, dipped to 9,415.90, ran to 9,561.85 and closed 19 points under the high. SBI did the work, up 2.38% and the best stock in the Nifty 50; Bank of Maharashtra printed Rs 96.00, a 52-week high by a paisa, and PNB slipped 0.29% to Rs 149.57 after Tuesday's 3.74%. This is the mirror image of Tuesday, when private banks beat PSU banks by 106 basis points; today the gap is 97 points the other way, and nothing in the quarter's numbers changed between the two sessions. (NSE's ind_close_all file for the open, high, low, close and previous close; Upstox and India Today for the constituent moves; researchandinvest's 52-week-high table for Bank of Maharashtra.)"
    },
    {
      name: "Nifty Media",
      changePct: 0.46,
      note: "1,782.80 against 1,774.65, up 8.15 points or 0.46%, from a 1,773.00 open to a 1,793.05 high and a 1,765.65 low — a 27-point range on an index this size is wide. Sun TV Network did it, up 5.56% to Rs 696.35 at a 52-week high, with PVR INOX up 2.21% to Rs 1,714.40, also a 52-week high. Nothing in the sector's earnings changed today; two cash-generative broadcasters were bought as defensives in a tape that fell 0.63%. (NSE's ind_close_all file for the levels; researchandinvest's Nifty 500 tables for the two 52-week highs; ET's index watch for the 0.46%.)"
    },
    {
      name: "Nifty Pharma",
      changePct: 0.15,
      note: "28,200.50 against 28,157.10, up 43.40 points or 0.15%, after a 28,436.65 high and a 28,132.20 low. Cipla was the engine at +2.09%, the second-best Nifty 50 stock; Laurus Labs rose 5.32%, Ipca Labs 2.36% and Glenmark 1.68%. Against that, Caplin Point fell 7.20% to Rs 2,085.30, the worst stock in the Nifty 500. A 0.15% index gain covering a 7.2% single-stock fall is what a defensive rotation inside a falling market looks like — the money leaving metals and durables has to land somewhere, and healthcare is the usual parking spot. (NSE's ind_close_all file for the levels; Upstox and India Today for Cipla; researchandinvest's Nifty 500 tables for Caplin Point and Laurus.)"
    },
    {
      name: "Nifty FMCG",
      changePct: -0.09,
      note: "47,569.10 against 47,611.60, down 42.50 points or 0.09% — flat, and flat is the achievement on a day like this. It opened at 47,343.15, fell to 47,079.10 and recovered to close 490 points above the low, with ITC +1.13%, Tata Consumer Products +1.66% and Honasa Consumer +1.29% to Rs 524.50 doing the lifting. The sector has been the market's least volatile for a week — -0.20% on Tuesday, -0.09% today, against the Nifty's -0.63%. (NSE's ind_close_all file for the levels; Upstox and Kotak Neo for the constituent moves; researchandinvest for Honasa's 52-week high.)"
    },
    {
      name: "Nifty Bank",
      changePct: -0.38,
      note: "62,038.65 against 62,273.25, down 234.60 points or 0.38% — the smallest fall among the big sector indices, one session after closing at an all-time high. The range was 61,765.45 to 62,363.75 and the close sits 325 points under the high. HDFC Bank fell 0.83%, Bajaj Finance 2.43% and Jio Financial 2.44%, but SBI's 2.38% and the PSU complex held the index up. Private Bank fell 0.62% against PSU Bank's +0.59%, the widest one-day gap between the two since Monday, in the other direction. (NSE's ind_close_all file for the Bank levels; ET's index watch for Private Bank's -0.62%; Capital Market for the three Nifty drags.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: -0.72,
      note: "27,992.25 against 28,195.00, down 202.75 points or 0.72%, from a 28,119.30 open to a 27,886.65 low, closing 105 points above it. This is the index carrying the most weight in the Nifty and it fell more than the Nifty, which is the arithmetic behind the benchmark's 0.63%: HDFC Bank -0.83%, Bajaj Finance -2.43%, Jio Financial -2.44% and HDFC Life -3.29% against SBI's +2.38% and IIFL Finance's +4.01% to Rs 661.95 on the Fairfax block-deal news. (NSE's ind_close_all file for the levels; Upstox and India Today for the constituents; Capital Market for the IIFL block deal.)"
    },
    {
      name: "Nifty Realty",
      changePct: -0.85,
      note: "918.65 against 926.50, down 7.85 points or 0.85%, after a 924.15 open, a 931.05 high and a 917.75 low. Tuesday's 1.94% — the second-best sector of that session, earned on pre-sales data — is being returned a piece at a time, and the mechanism has not changed: the rate-sensitive trade runs on the ten-year, which was flat at 7.251% today, while the dollar index firmed 0.19% to 103.76 and the same Fed-hike expectations that hit metals also hit property. The sector is still up on the week, so this is a pause rather than a reversal. (NSE's ind_close_all file for the levels; Capital Market for the bond yield and the dollar index.)"
    },
    {
      name: "Nifty IT",
      changePct: -1.24,
      note: "31,262.30 against 31,654.10, down 391.80 points or 1.24%, and the second consecutive session in the red — Tuesday took 0.90% off, today 1.24%, for 2.12% in two sessions. It opened at 31,435.00, made a 31,605.35 high and a 31,247.05 low, closing 15 points off the low, so there was no afternoon defence. TCS fell 2.13% and Infosys about 1%, which puts the fall in the large caps rather than in a corner. The timing is the point: Nvidia beat estimates after Tuesday's US close with revenue up 103%, and Indian IT still fell 1.24% — the rupee's move to 93.44 from 93.5125 is a headwind for dollar earners and is now the more powerful variable. (NSE's ind_close_all file for the levels; Upstox and India Today for TCS and Infosys; Capital Market for the rupee.)"
    },
    {
      name: "Nifty Auto",
      changePct: -1.35,
      note: "27,394.95 against 27,769.15, down 374.20 points or 1.35%, from a 27,708.40 open to a 27,310.45 low, closing 84 points above it. Tata Motors Passenger Vehicles fell 2.57% to Rs 252.55 at a 52-week low, Ashok Leyland 4.17% and Escorts Kubota 0.03% at its own one-year low, while the two-wheeler names were mixed with Hero MotoCorp 0.57% lower. Auto has now fallen in three of the last four sessions and the passenger-vehicle line is the weakest part of it. (NSE's ind_close_all file for the levels; researchandinvest's Nifty 500 tables for the 52-week lows and the constituent moves.)"
    },
    {
      name: "Nifty Metal",
      changePct: -2.46,
      note: "12,222.30 against 12,530.30, down 308.00 points or 2.46% — the second-worst sector of the day and the biggest one-day fall in the index since late October. It opened at 12,441.85, made a 12,448.05 high and a 12,208.75 low, closing 13 points off the bottom, which means there was no afternoon bid at all. Hindalco fell 2.99% and Vedanta Aluminium 5.67%. The cause given across the close reports is the same everywhere: global commodity prices lower, the dollar firmer at 103.76 and rising expectations of a US rate hike at the December FOMC. (NSE's ind_close_all file for the levels; Upstox, Business Standard and India Today for the sector and the two stocks; Capital Market for the dollar index and the Fed context.)"
    },
    {
      name: "Nifty Consumer Durables",
      changePct: -3.13,
      note: "The worst sector of the day by a distance: -3.13% on Upstox's close table, with India Today printing -3.08% and the BSE Consumer Durables index -3.14% to 60,677.75 from 62,644.58. Titan Company was the trigger — down 5.30% to Rs 4,648.10, the worst stock in the Nifty 50 — with Kalyan Jewellers -4.80% to Rs 650.00 and Amber Enterprises -7.68% behind it. Jewellery is the specific problem: two of the three worst names here are jewellers, in a week when gold on MCX fell 2.32% to Rs 1,31,106 per 10 grams, so the trade is a de-rating of the festive-demand story rather than a miss in it. (Upstox's 16:02 IST sector table; India Today's wrap for -3.08%; Goodreturns' BSE table for the BSE Consumer Durables close and previous close; researchandinvest's Nifty 500 tables for Kalyan and Amber; Kotak Neo for the MCX gold print.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 price returns for the single session of Wednesday 18 November 2026, measured from the 17 November 2026 close, taken from researchandinvest.com's Nifty 500 top-gainers and top-losers tables read at their 16:08 IST final snapshot, which are built from NSE's daily bhavcopy, its corporate-action file and the Nifty 500 constituent list. The Nifty 50 names are cross-read against Upstox's 16:02 IST wrap, India Today's close report, Angel One's gainers-and-losers page and Kotak Neo's closing bell, which agree on Titan -5.30% at Rs 4,648.10, SBI +2.38%, Cipla +2.09%, HDFC Life -3.29% and Hindalco -2.99%. The universe is the full 500 — Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together — so a name outside the headline sub-indices still ranks, and all ten names below are outside the Nifty 50 except Titan. Three basis notes, stated because they matter. First, cap tags follow NSE's size buckets where a name's index membership is unambiguous (Nifty 50 = Largecap, Nifty Midcap 150 = Midcap, Nifty Smallcap 250 = Smallcap); where membership was not checked against the constituent list today the tag is an approximation from market capitalisation and is not a claim of index membership. Second, Vedanta Aluminium is a demerged listing with a short price history; the source's Nifty 500 table ranks it, and its 52-week range is not used here for that reason. Third, the percentages are price returns from the previous close and include no adjustment for any corporate action dated today, which is the same basis the index cards use.",
    gainers: [
      {
        name: "INOX India",
        changePct: 7.81,
        cap: "Smallcap",
        note: "+7.81% to Rs 2,123.20, the best stock in the Nifty 500, and the arithmetic checks against Tuesday's close of about Rs 1,969: 2,123.20 is 7.81% above it. It is a capital-goods name in a session when that bucket fell 1.00%, so the move is stock-specific and it came on a day when only 47.9% of the Nifty 500 was above its 200-day average. No exchange filing was found in the sources checked, so the honest read is a single-stock re-rating inside a falling sector rather than a company event. (researchandinvest.com's Nifty 500 top-gainers table at 16:08 IST for the price and the percentage; ET's smallcap constituents table for Tuesday's Rs 1,969 level.)"
      },
      {
        name: "Urban Company",
        changePct: 6.87,
        cap: "Midcap",
        note: "+6.87% to Rs 172.73, the second-best in the 500, and a bounce rather than a trend: the stock fell 5.86% on Tuesday to Rs 161.63, so it is now 6.9% above Monday's close and still about 6% below its 52-week high of Rs 183.97. Consumer services fell 1.20% today, so this is not a sector bid. No company filing was found in the sources checked. (researchandinvest.com's Nifty 500 top-gainers table for the close and the percentage; this page's Tuesday edition for the 5.86% fall and the 52-week range.)"
      },
      {
        name: "Sun TV Network",
        changePct: 5.56,
        cap: "Midcap",
        note: "+5.56% to Rs 696.35 at a 52-week high, on a day when Nifty Media rose 0.46% — the stock did 5.1 percentage points better than its own sector. It is the third session in four in which the media index has risen while the Nifty fell. No company announcement was found in the sources checked; what there is, is a cash-rich broadcaster being bought as a defensive in a tape that lost 0.63%. (researchandinvest.com's Nifty 500 tables for the price, the percentage and the 52-week high; NSE's ind_close_all file for the Media index close.)"
      },
      {
        name: "HFCL",
        changePct: 4.95,
        cap: "Smallcap",
        note: "+4.95% to Rs 197.50 on a day when telecom fell 0.27% and Sterlite Technologies rose 4.93% alongside it — the optical-fibre pair moving together, which is the tell that this is a sector read and not a company one. Tuesday the two fell 3.59% and 5.00%, so today is a partial recovery rather than a new high. No company filing was found in the sources checked. (researchandinvest.com's Nifty 500 top-gainers table for both prices and percentages; this page's Tuesday edition for the prior session's falls.)"
      },
      {
        name: "Sterlite Technologies",
        changePct: 4.93,
        cap: "Smallcap",
        note: "+4.93% to Rs 673.15, and the interesting number is not the gain but the level: it closed 35.96% below its 52-week high of Rs 1,051.10 and 696% above its low of Rs 84.60, on 29.1 lakh shares. Tuesday's -5.00% and today's +4.93% are the same trade marked both ways, and the pairing with HFCL (+4.95%) is the cleanest sector signal on the board. No company filing was found in the sources checked. (researchandinvest.com's Nifty 500 top-gainers table for the price, the percentage and the range; this page's Tuesday edition for the -5.00%.)"
      }
    ],
    losers: [
      {
        name: "Caplin Point Laboratories",
        changePct: -7.2,
        cap: "Smallcap",
        note: "-7.20% to Rs 2,085.30, the worst stock in the 500, on a day when Nifty Pharma rose 0.15% — a 7.35-point divergence between a stock and its own sector, with peer Laurus Labs up 5.32% in the same session. No company filing was found in the sources checked. A fall of this size inside a flat-to-up pharma tape is usually about a shareholder, a guidance cut or a regulatory letter, and nothing in today's public sources identifies which. (researchandinvest.com's Nifty 500 top-losers table at 16:08 IST for the price and the percentage; NSE's ind_close_all file for the Pharma close.)"
      },
      {
        name: "CreditAccess Grameen",
        changePct: -5.75,
        cap: "Midcap",
        note: "-5.75% to Rs 1,046.20, and the company is the second-worst in the 500 but not the only microfinance lender sold: Manappuram Finance fell 4.59% to Rs 283.00 in the same session, while Nifty Financial Services fell only 0.72%. Two MFI lenders falling five times faster than their sector is a read on credit cost expectations in the segment rather than on either balance sheet. No company filing was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for both prices and percentages; NSE's ind_close_all file for the sector close.)"
      },
      {
        name: "Vedanta Aluminium Metal",
        changePct: -5.67,
        cap: "Largecap",
        note: "-5.67% to Rs 374.50 on a day when Nifty Metal fell 2.46% and Hindalco 2.99% — the aluminium trade being sold harder than the diversified metal index, which is what a single-commodity exposure does when the dollar firms to 103.76 and US rate-hike expectations build. It is a demerged listing with a short price history, so no 52-week range is quoted here; the source's Nifty 500 table ranks it in the universe. No company announcement was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for the price and the percentage; Capital Market for the dollar index and the Fed context.)"
      },
      {
        name: "Titan Company",
        changePct: -5.3,
        cap: "Largecap",
        note: "-5.30% to Rs 4,648.10, the worst stock in the Nifty 50 and the single largest drag on the consumer-durables index's -3.13%, with Kalyan Jewellers -4.80% behind it. Gold on MCX fell 2.32% to Rs 1,31,106 per 10 grams, and a jewellery de-rating on a falling gold price is the reverse of the usual festive trade: the metal that supports the ticket size is going down, so the market marks down the studded-ratio premium at the same time. No company announcement was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for the price and the percentage; Upstox, India Today and Angel One for the Nifty 50 ranking; Kotak Neo for the MCX gold print.)"
      },
      {
        name: "Polycab India",
        changePct: -5.12,
        cap: "Midcap",
        note: "-5.12% to Rs 7,307.50, and it was not alone: KEI Industries -4.20%, Apar Industries -4.45% and APL Apollo -2.74% all fell with it while capital goods fell 1.00%. Cables and wires have been the market's momentum trade for two years and today they were the funding source for the PSU-bank and pharma bid — a 5.1% fall in the group's largest name on a day the Nifty lost 0.63% is rotation, not a demand signal. No company filing was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for the price and the percentage; ET's Midcap 150 constituents table for KEI, Apar and APL Apollo.)"
      }
    ]
  },

  watch: [
    {
      title: "Nvidia's beat is in, and Indian IT fell anyway — that is the read-across to test on Thursday",
      detail: "Nvidia reported third-quarter fiscal 2027 revenue of $115.8 billion, up 103% year on year and 20% sequentially, with net income up 105% to $65.3 billion, diluted EPS up 108% to $2.70 and data-centre revenue up 110% to $107.6 billion. Indian IT fell 1.24% on the day that news broke, after falling 0.90% the day before, with TCS -2.13% and Infosys about -1%. So the sector is no longer trading the AI capex cycle — it is trading the rupee, which moved to 93.44 against the dollar from 93.5125, and the discount rate, with the US 10-year at 5.095%. Watch Thursday's open: a gap-up in TCS and Infosys would mean the Nvidia read-across is finally being paid for; another down day means the sector has decoupled from its usual global proxy for as long as the rupee keeps appreciating. (Capital Market's 16:38 IST close report for the Nvidia numbers and the rupee; NSE's ind_close_all file for the IT index; Upstox and India Today for the constituent moves.)"
    },
    {
      title: "A Fed hike, not a cut, is what the December FOMC is now priced for — and metals are the first casualty",
      detail: "The dollar index rose 0.19% to 103.76, the US 10-year yield sat at 5.095% and the close reports attribute the metal selloff directly to rising expectations of a rate hike at the December FOMC. Nifty Metal fell 2.46%, its worst day in about four weeks, with Hindalco -2.99% and Vedanta Aluminium -5.67%; Nifty Realty fell 0.85% for the same reason, and the ten-year G-sec was flat at 7.251%. If that expectation hardens, the two sectors that have led November — metals and realty — are the two with the most to lose, and the rupee's 93.44 is the pressure valve. Watch the dollar index and the US 10-year into the December meeting. (Upstox and Rediff for the Fed context; Capital Market for the DXY, the US 10-year, the G-sec and Brent at $92.03; NSE's ind_close_all file for the sector closes.)"
    },
    {
      title: "November's foreign inflow is a record $9.53 billion, and one down day does not test it",
      detail: "FPIs bought Rs 4,195.38 crore of Indian equities on Tuesday, taking the five-session total to Rs 35,190.54 crore while domestic institutions sold Rs 20,341.40 crore over the same five sessions — the mirror image of the pattern through the summer. Today's fall was attributed in part to doubts about whether that flow can continue, and the mechanism is narrow: with DIIs net sellers, the marginal buyer of Indian large-caps this month has been foreign. Watch the 19 November cash-market print. A single negative FII day after five positive ones is noise; two in a row would put the Nifty's 25,000 support — the level every technical note on the street is quoting — in play. (researchandinvest.com's FII/DII table for the daily and five-day totals; Upstox and Rediff for the flow narrative; ET's market wrap for the 25,000 support and 25,300 resistance levels.)"
    },
    {
      title: "SEBI's free-float idea took 1.96% off the capital-market index in one session",
      detail: "Nifty Capital Markets fell 1.96% to 5,783 after SEBI chairman Tuhin Kanta Pandey reportedly said the regulator is considering linking margin-trading-facility limits to a stock's free float. CAMS fell 3.76%, KFin Technologies 3.34%, Angel One 3.29%, BSE 2.83%, MCX 2.33% and CDSL 1.61%; only 360 ONE WAM (+0.68%), Aditya Birla Sun Life AMC (+0.57%) and IEX (+0.52%) closed green. The index is still up 10.32% over 30 days, so this is a policy headline landing on a crowded trade. Watch for the consultation paper: if MTF limits are tied to free float, the smaller and more closely-held brokers lose the most leverage capacity. (Capital Market's 16:38 IST close report for the SEBI remark and every constituent move; NSE's ind_close_all file for the index level.)"
    }
  ],

  reads: [
    {
      title: "Market wrap, Nov 18: SENSEX falls 500 pts, NIFTY50 ends below 25,250; 126 stocks hit lower circuit, Titan Company top loser",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-nov-18-sensex-falls-500-pts-nifty-50-ends-below-25-250-126-stocks-hits-lower-circuit-titan-company-top-loser/article-203645/"
    },
    {
      title: "Stock Market Close: Sensex sheds 500 pts, Nifty at 25,228; consumer durables top sectoral loser",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/stock-market-live-november-18-nse-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-bond-yields-hero-motocorp-share-price-hcltech-stock-price-today-ipo-today-126111800134_1.html"
    },
    {
      title: "Sensex falls 500 points, Nifty settles at 25,228; Titan sinks over 4%",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/sensex-falls-500-points-nifty-settles-at-25228-titan-sinks-over-4-3041463-2026-11-18"
    },
    {
      title: "Sensex drops 500 points, Nifty slips below 25,250 on profit booking",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/live-news/sensex-drops-500-points-nifty-slips-below-25-250-on-profit-booking/1751185"
    },
    {
      title: "Closing Bell, 18 November 2026: Profit Booking Coupled With a Decline in Metal Stocks Drag Benchmarks",
      source: "Kotak Neo",
      url: "https://www.kotakneo.com/news/market-news/market-wrap-18-november-2026-profit-booking-and-a-drag-in-metal-stocks-pull-benchmarks-down/"
    }
  ],

  ratio: {
    name: "Current Ratio",
    category: "Liquidity / short-term solvency",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287). The comparison year is FY25, the prior-year column of the same balance sheet, read on the same date one year earlier.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Current Ratio = total current assets ÷ total current liabilities, both taken from the balance sheet on the same date. The rule the ratio encodes is simple: everything the company expects to turn into cash inside twelve months, divided by everything it expects to pay inside twelve months. Below 1 means long-term assets are being funded with short-term money; far above 2 usually means cash is sitting idle. Both halves are read at the close of the year rather than averaged, because the question is what the position was on the last day of the period.",
    formulaNote: "This is the first liquidity ratio in this series, and it is the one that makes least sense for a software company read alone and most sense read next to yesterday's asset turnover. Infosys carries no borrowings to speak of, so 1.98 is not a solvency warning — it is a measure of how much of a very liquid balance sheet is short-dated. The answer lands almost exactly on the textbook 2, which is a coincidence of two large numbers moving in step rather than a management target: current assets grew Rs 6,390 crore and current liabilities grew Rs 9,472 crore in the same year, and the ratio fell because the second grew faster.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      {
        label: "Total current assets, 31 March 2026 — the numerator",
        value: "Rs 1,03,489 crore",
        page: "p. 317"
      },
      {
        label: "Total current liabilities, 31 March 2026 — the denominator",
        value: "Rs 52,322 crore",
        page: "p. 317"
      },
      {
        label: "Total current assets, 31 March 2025 — the prior-year numerator",
        value: "Rs 97,099 crore",
        page: "p. 317"
      },
      {
        label: "Total current liabilities, 31 March 2025 — the prior-year denominator",
        value: "Rs 42,850 crore",
        page: "p. 317"
      },
      {
        label: "Cash and cash equivalents, 31 March 2026 — the most liquid line inside the numerator",
        value: "Rs 22,201 crore",
        page: "p. 317"
      },
      {
        label: "Trade receivables, 31 March 2026 — the largest single current asset",
        value: "Rs 35,234 crore",
        page: "p. 317"
      },
      {
        label: "Lease liabilities due within a year, 31 March 2026 — the convention-sensitive line",
        value: "Rs 3,160 crore",
        page: "p. 317"
      },
      {
        label: "Total equity, 31 March 2026 — for the leverage cross-read",
        value: "Rs 93,297 crore",
        page: "p. 317"
      }
    ],
    working: "Step 1 — Take the numerator off the Consolidated Balance Sheet: total current assets are Rs 1,03,489 crore at 31 March 2026 (printed p. 317, PDF p. 287), made up of investments Rs 12,950 crore, trade receivables Rs 35,234 crore, cash and cash equivalents Rs 22,201 crore, loans Rs 234 crore, other financial assets Rs 15,890 crore, income tax assets Rs 1,835 crore and other current assets Rs 15,145 crore. Step 2 — Take the denominator from the same page: total current liabilities are Rs 52,322 crore, made up of lease liabilities Rs 3,160 crore, trade payables Rs 4,744 crore, other financial liabilities Rs 21,483 crore, other current liabilities Rs 15,779 crore, provisions Rs 1,512 crore and income tax liabilities Rs 5,644 crore. Step 3 — Divide: 1,03,489 ÷ 52,322 = 1.978, so 1.98. Step 4 — Repeat for FY25 on the same page: 97,099 ÷ 42,850 = 2.266, so 2.27. Step 5 — Cross-read the two halves as a working-capital number: 1,03,489 - 52,322 = Rs 51,167 crore of net working capital, which is 32.8% of total assets of Rs 1,55,967 crore (p. 317).",
    result: "1.98 — Rs 1.03 of current assets for every rupee of current liabilities due within a year, against 2.27 a year earlier. Put in rupees, Infosys ended FY26 with Rs 51,167 crore of net working capital on a Rs 1,55,967 crore balance sheet, and the ratio fell 0.29 turns because current liabilities grew Rs 9,472 crore (up 22.1%) while current assets grew Rs 6,390 crore (up 6.6%). The fall is not a liquidity problem: Rs 22,201 crore of the numerator is cash, Rs 35,234 crore is receivables from clients who pay in about 72 days, and the company carries no borrowings. The rise in the denominator is largely other financial liabilities (up Rs 3,345 crore) and other current liabilities (up Rs 4,014 crore) — the accounts a services business runs its payables and accrued costs through.",
    meaning: "Read alone, 1.98 says Infosys can pay everything it owes within a year and still keep 98 paise of every rupee — comfortable, not bloated, and almost exactly the 2.0 that textbooks hold up as the benchmark. Read properly, it says something more useful about the model: a software company's balance sheet is mostly receivables and cash, its liabilities are mostly accrued salaries and tax, and neither side needs much managing. The ratio's job here is as a warning light for the one thing that could move it — a stretch in client payment cycles, which would lift receivables without lifting cash. That is why the same page is worth reading for debtor days, at 72 in FY26, as for this number.",
    crossCheck: "Three checks and one honest convention gap. First, the arithmetic is reproducible from the balance sheet's own subtotals: the seven current-asset lines on printed p. 317 add to exactly Rs 1,03,489 crore and the six current-liability lines to exactly Rs 52,322 crore, which is the strongest kind of internal check. Second, the ratio agrees to two decimals with three independent screeners read on 18 November 2026 — ETMoney's Infosys financials page prints 1.98 for FY26 and 2.27 for FY25, TopStockResearch prints the same pair with a -12.71% year-on-year change, and TrueCAGR prints 1.98 and 2.27 in its five-year table. Third, Screener.in's consolidated page for Infosys carries ROCE of 40% and working capital days of 33 for FY26 but no current-ratio row, so the check against it is qualitative: its balance-sheet lines are the same ones used here. The gap is whether current lease liabilities of Rs 3,160 crore belong in the denominator. This page includes them, because Ind AS puts them inside total current liabilities and the report's own subtotal does too; a screener that strips them out would print 1,03,489 ÷ 49,162 = 2.11, which is how the same company can show a current ratio 0.13 apart on two sites without either being wrong.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for total current assets of Rs 1,03,489 crore at 31 March 2026 and Rs 97,099 crore at 31 March 2025; total current liabilities of Rs 52,322 crore at 31 March 2026 and Rs 42,850 crore at 31 March 2025; the seven current-asset lines (investments Rs 12,950 crore, trade receivables Rs 35,234 crore, cash and cash equivalents Rs 22,201 crore, loans Rs 234 crore, other financial assets Rs 15,890 crore, income tax assets Rs 1,835 crore, other current assets Rs 15,145 crore); the six current-liability lines (lease liabilities Rs 3,160 crore, trade payables Rs 4,744 crore, other financial liabilities Rs 21,483 crore, other current liabilities Rs 15,779 crore, provisions Rs 1,512 crore, income tax liabilities Rs 5,644 crore); and total assets of Rs 1,55,967 crore and total equity of Rs 93,297 crore at the same date. All page numbers are the report's printed numbers."
  }
};
