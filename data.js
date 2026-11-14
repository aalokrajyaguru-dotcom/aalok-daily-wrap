const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close \u2014 India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Saturday, 14 November 2026, 5:30 PM IST \u2014 Weekly Wrap (markets closed for the weekend)",
  asOfLabel: "Closing levels as of the 13 November 2026 close (3:30 PM IST), the last session of the week; every day move is measured from the previous session's close and every weekly move from the 6 November 2026 close \u2014 the week had four sessions, with Tuesday 10 November a holiday",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition \u2014 they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee \u2014 a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25144.30,
      dayChange: -155.05,
      dayChangePct: -0.61,
      weekChangePct: 0.46, // vs the 6 Nov (prior Friday) close of 25,030.35
      spark: [24986.40, 25044.65, 25255.05, 25299.35, 25144.30], // the week's closes: 8 Nov (Muhurat), 9 Nov, 11 Nov, 12 Nov, 13 Nov \u2014 10 Nov was a holiday
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Three steps up and one back, and the one back was made by a statistician rather than a company. Monday added 58.25 points or 0.23% to 25,044.65; Tuesday was the Diwali-Balipratipada holiday; Wednesday added 210.40 points or 0.84% to 25,255.05 after gapping to 25,337.80 and touching 25,424.35; Thursday added 44.30 points or 0.18% to 25,299.35, the week's closing high; and Friday gave back 155.05 points or 0.61% to 25,144.30 once October CPI printed at 6.09%. Against the 6 November close of 25,030.35 that is still +113.95 points or 0.46% \u2014 a third consecutive weekly gain \u2014 and the four-session range was 25,054.40 to 25,424.35, about 1.5%, against 1,823 points the week before. Note the arithmetic of the basis: the one-hour Muhurat session of 8 November, which closed 0.18% lower, sits inside this +0.46% because the weekly move is measured from the 6 November close, so the four regular sessions on their own added 0.27% from Monday's open of 25,076.40. Breadth finished the week badly \u2014 1,446 NSE stocks up and 2,179 down on Friday, with 38 of the 50 constituents lower \u2014 which is why the headline index was the week's second-worst performer among the five on this page. (Capital Market's 'The Week That Was' of 13 November at 17:03 IST for all four daily closes and point changes; MarketCue's week-46 page for 25,144.30 / +113.95 / +0.46% and the 586-point range; Upstox's weekly wrap for +113.95 and 0.5%; Downstox for the 25,076.40 Monday open and the +0.46% from 25,030.35.)"
    },
    {
      name: "Nifty Next 50",
      close: 72874.69,
      dayChange: -606.56,
      dayChangePct: -0.83,
      weekChangePct: 1.70, // vs the 6 Nov (prior Friday) close of 71,657.80
      spark: [71991.70, 72789.45, 73486.20, 73481.25, 72874.69], // 8 Nov, 9 Nov, 11 Nov, 12 Nov, 13 Nov
      returns: { oneY: 3.40, threeY: 16.58, fiveY: 10.70 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The week the second rung of the market stopped being second. The Next 50 rose 1.11% to 72,789.45 on Monday, 0.96% to 73,486.20 on Wednesday \u2014 its high for the week \u2014 and then sat still at 73,481.25 on Thursday before falling 606.56 points or 0.83% on Friday, a heavier fall than the Nifty's 0.61%. The week still ends +1.70% against the 6 November close of 71,657.80, nearly four times the Nifty's +0.46%, and the Friday close of 72,874.69 is the week's second-highest. The pattern is the one that ran through the whole week: money went down the size scale, and it went there on Wednesday in particular, when the index out-gained the benchmark by 12 basis points on a day the benchmark rose 0.84%. Thursday's close of 73,481.25 is not a separately printed number \u2014 it is Friday's 72,874.69 plus the 606.56-point fall the exchange reported \u2014 and Wednesday's 73,486.20 is printed by both Oquilia and Assetmaster. (Oquilia's 11 November close report and Assetmaster's recap for 73,486.20 / +696.75 / +0.96%; MarketCue for 72,874.70 / +1.70%; the 9 November close of 72,789.45 and the 8 November Muhurat close of 71,991.70 are from this page's daily editions for those sessions, built on NSE's closing values.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22681.25,
      dayChange: -79.50,
      dayChangePct: -0.35,
      weekChangePct: 1.84, // vs the 6 Nov (prior Friday) close of 22,271.15
      spark: [22327.85, 22408.55, 22599.02, 22760.75, 22681.25], // 8 Nov, 9 Nov, 11 Nov, 12 Nov, 13 Nov \u2014 11 Nov is derived, see the note
      returns: { oneY: 1.59, threeY: 14.20, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Mid-caps did the week's quiet work: +0.36% to 22,408.55 on Monday, +0.85% on Wednesday, a close of 22,760.75 on Thursday that was the week's high, then -79.50 points or 0.35% on Friday to 22,681.25. That leaves +1.84% against the 6 November close of 22,271.15, four times the Nifty's gain and a full point behind the small-caps \u2014 the same ordering the market has held since the last week of October. Friday's fall was also smaller than the benchmark's (-0.35% against -0.61%), so the index gave up less on the day it mattered. One number here is arithmetic rather than a print: the 11 November close of 22,599.02 is Monday's 22,408.55 compounded by the +0.85% day move Stocktale reports for the session; the 12 November close of 22,760.75 is Friday's 22,681.25 plus the 79.50-point fall the exchange printed. (MarketCue for 22,681.25 / +1.84%; Stocktale's 11 November close note for Midcap 150 +0.85%; the 9 November close of 22,408.55 and the 8 November Muhurat close of 22,327.85 are from this page's daily editions for those sessions.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17940.54,
      dayChange: -53.96,
      dayChangePct: -0.30,
      weekChangePct: 3.19, // vs the 6 Nov (prior Friday) close of 17,386.15
      spark: [17594.10, 17577.00, 17798.47, 17994.50, 17940.54], // 8 Nov, 9 Nov, 11 Nov, 12 Nov, 13 Nov \u2014 11 Nov is derived, see the note
      returns: { oneY: 1.90, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The best of the five by a distance, and the one that shows what the week was really about. The Smallcap 250 slipped 0.10% to 17,577.00 on Monday, jumped 1.26% on Wednesday, added 1.10% on Thursday to 17,994.50 \u2014 the week's high \u2014 and lost only 53.96 points or 0.30% on Friday, the mildest fall of the four equity cards. The week is +3.19% against the 6 November close of 17,386.15, which is more than double the Next 50 and seven times the Nifty, and 292 of the 497 Nifty 500 stocks ended the week higher with the median one up 0.8% \u2014 so this is breadth, not a handful of names carrying an index. The internal ordering on Friday was the mirror of Wednesday's: the smallest names took the most, with the Smallcap 100 -0.26% and the Smallcap 50 -0.15%, and the Nifty Microcap 250 outside this card lost 0.39%. On a day the market began pricing a December rate hike, the smallest and most rate-sensitive end being sold first is the textbook order of operations. (MarketCue for 17,940.55 / +3.19% and the Nifty 500's +1.18%; Stocktale and FinMinutes for the +1.26% day move on 11 November, from which the 17,798.47 close is derived off Monday's printed 17,577.00; Oquilia's weekly breadth count of 292 of 497 up and a median +0.8%; the 12 November close of 17,994.50 is Friday's 17,940.54 plus the printed 53.96-point fall.)"
    },
    {
      name: "BSE SME Index",
      close: 117247.82,
      dayChange: -560.74,
      dayChangePct: -0.48,
      weekChangePct: 1.08, // vs the 6 Nov close of 115,996.69
      spark: [117740.39, 116940.52, 117661.57, 117808.56, 117247.82], // 8 Nov, 9 Nov, 11 Nov, 12 Nov, 13 Nov \u2014 every point printed
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The SME platform had a good week and a bad Friday, and both are worth keeping apart. From the 6 November close of 115,996.69 the BSE SME IPO index is up 1.08% at 117,247.82, but the path was not the small-cap path: it rose 1.50% in the Muhurat session to 117,740.39, fell 0.68% on Monday to 116,940.52, then added 0.62% on Wednesday to 117,661.57 and 0.12% on Thursday to 117,808.56 before losing 560.74 points or 0.48% on Friday. Compare that with the Nifty Smallcap 250's +3.19% on the same four sessions: the SME index gained less than a third as much and is still 4.95% below its 52-week high of 123,353.65, with a 52-week low of 73,866.86 behind it. The reason to watch this card at all is that it is the only place where the IPO pipeline shows up as a price \u2014 and in a week when foreign money bought large and mid caps, the smallest listed companies got the least of it. Every point on this spark is a printed close, not a derivation. (BSE Indices' own chart data for the 6 November 115,996.69 and the 8 November 117,740.39; Anand Rathi's closing table for 9, 11, 12 and 13 November and for the printed 1-week return of 1.08%; ICICI Direct, Angel One, LiveMint and Investing.com for 117,247.82, -560.74 and -0.48% on 13 November; Anand Rathi again for the 52-week range.)"
    }
  ],

  dailyWrap: null,

  weeklyWrap: {
    label: "The Week That Was",
    kicker: "Weekly Wrap",
    headline: "Nifty ends the week at 25,144.30 and the Sensex at 81,592.45, up 0.46% and 0.70%, as PSU banks and about Rs 45,320 crore of FII buying outweighed a 6.09% CPI print",
    summary: "Four sessions, three of them up, and the week belonged to foreign money and public sector banks rather than to the index. The Nifty rose 113.95 points or 0.46% to 25,144.30 and the Sensex 564.43 points or 0.70% to 81,592.45 against the 6 November closes \u2014 a third consecutive weekly gain for both \u2014 but the shape matters more than the total: Monday +0.23%, Tuesday closed for Diwali-Balipratipada, Wednesday +0.84%, Thursday +0.18% to the week's high of 25,299.35, and Friday -0.61% once October CPI printed at 6.09% against September's 5.54%, the first breach of the RBI's 6% tolerance band in two years, with food inflation at 8.94%. Underneath, the market was much wider than the benchmark: Nifty Next 50 +1.70%, Midcap 150 +1.84%, Smallcap 250 +3.19%, Nifty 500 +1.18%, and 292 of the 497 Nifty 500 stocks closed higher with the median one up 0.8%. PSU Bank +7.50% was the week's sector, its biggest weekly gain in seven months, led by Punjab National Bank +12.8%, Bank of India +11.2% and Bank of Baroda +9.4% on Upstox's count; Media +5.22%, Bank +3.30% and Realty +2.74% followed. IT -3.17% was the only sector to fall meaningfully, snapping a six-week winning streak as the global AI and chip trade sold off and Nvidia's chief executive resigned, with Cement -2.08% and Metal -0.24% behind it. Flows did the work: FIIs bought about Rs 45,320 crore of Indian equities in the week beginning 9 November on NSDL data, DIIs sold for a second straight week, and Brent fell nearly 2.5% over the week before closing at $96.13. What stopped the rally was domestic and it stopped it on the last day: the 10-year yield went to 7.302% from 7.249%, the rupee weakened 33 paise on the week to 94.24, and the market began pricing a December repo hike within hours of the CPI print. India VIX fell 11.2% to 15.78, so nobody was buying protection \u2014 they were only taking profits.",
    stats: ["Nifty +0.46%", "Sensex +0.70%"],
    statsLabel: "Five sessions"
  },

  dayByDay: [
    {
      date: "2026-11-09",
      label: "Mon 9 Nov",
      niftyClose: 25044.65,
      niftyChangePct: 0.23,
      sensexChangePct: 0.13,
      note: "The recovery, and it was made in the public sector banks. The Nifty opened at 25,076.40, fell to 24,838.75 in the afternoon and closed at 25,044.65, up 58.25 points or 0.23%; the Sensex ran from 80,519.31 to 81,339.41 and settled at 81,106.65, up 107.25 points or 0.13%. The buying was concentrated rather than broad: Nifty PSU Bank +3.73% to 8,905.35 \u2014 Union Bank of India +5.60% to Rs 197, Punjab National Bank +5.27% to Rs 132.17, Bank of India +4.5%, Indian Bank +4.3% \u2014 with Nifty Bank +1.51% to 59,741.25 at its high, Pharma +1.65% to 28,896.10, Financial Services +0.75% to 27,384.90 and Private Bank +0.74% to 29,608.15. IT was the drag at -1.22% to 32,468.90: Infosys -1.89% to Rs 1,149.50, HCL Technologies -2.64% to Rs 1,404, Tech Mahindra -1.80% to Rs 1,796.90; Metal fell 0.46% with Tata Steel -2.81% to Rs 184.85, and FMCG 0.15% with ITC -1.45% to Rs 279.35. In the Nifty 50, 21 rose and 28 fell. The broader market was mixed rather than weak: Next 50 +1.11% to 72,789.45, Midcap 150 +0.36% to 22,408.55, Midcap 100 +0.55%, Smallcap 100 +0.10%, Smallcap 250 -0.10% to 17,577.00 and Nifty 500 +0.33% to 23,567.00. India VIX fell 5.48% to 17.42, Brent slipped about 1% to $97.46 a barrel, the rupee closed at 93.93 to the dollar and FIIs bought Rs 7,212.22 crore of equities against DII selling of Rs 7,172 crore, their eighth straight session of net selling. (Capital Market's week-in-review for 25,044.65, 81,106.65, +58.25 and +107.25; PTI's and BusinessLine's 9 November reports for the same two closes; the sector levels and stock prices are the 9 November closing prints carried in this page's daily edition for that session, taken from NSE's closing file, with the FII/DII figures from Moneycontrol's flow table.)"
    },
    {
      date: "2026-11-10",
      label: "Tue 10 Nov",
      note: "NSE and BSE were closed for Diwali-Balipratipada, the second market holiday of the Samvat 2083 fortnight after the one-hour Muhurat session on Sunday 8 November. Nothing traded, so there is no close and no change to report \u2014 the week's four sessions are 9, 11, 12 and 13 November. The holiday is why the weekly statistics on this page say five sessions and the tape delivered four."
    },
    {
      date: "2026-11-11",
      label: "Wed 11 Nov",
      niftyClose: 25255.05,
      niftyChangePct: 0.84,
      sensexChangePct: 0.95,
      note: "The week's big session, and it carried its own warning. The Nifty gapped up to 25,337.80 \u2014 about 293 points above Monday's close \u2014 touched 25,424.35 before ten in the morning, slid to 25,095.35 by 3:12 pm, and then gained about 125 points in the closing auction to finish at 25,255.05, up 210.40 points or 0.84%. The Sensex rose 772.75 points or 0.95% to 81,879.40 after touching 82,520.40, a level last seen on 26 February. Banks and autos led: Nifty PSU Bank +2.94% to 9,167.20, Auto +2.14% to 28,523.30, Bank +1.76% to 60,792.40, Private Bank +1.14%, FMCG +1.13% to 47,188.55, Energy +1.03% to 37,548.05 and Financial Services +1.02% to 27,663.40, while IT fell 0.53% to 32,295.60, Realty 0.42% to 893.95 and Pharma 0.41% to 28,776.45. Breadth was the week's best: 1,969 NSE stocks rose, 756 fell and 21 were unchanged, and 37 of the 50 Nifty constituents closed higher. The wider market kept up: Next 50 +0.96% to 73,486.20, Midcap 150 +0.85%, Smallcap 250 +1.26% and Nifty 500 +0.90% to 23,779.30. India VIX closed at 17.56. (Oquilia's 11 November close report for the Nifty level, the breadth count and the index closes; Capital Market, HDFC Sky and Deccan Herald all carry 25,255.05 and 81,879.40 with the point changes; Stocktale for the closing-auction arithmetic and the Midcap 150 and Smallcap 250 day moves; PTI via ThePrint for the 82,520.40 intraday high and the near-nine-month-high description.)"
    },
    {
      date: "2026-11-12",
      label: "Thu 12 Nov",
      niftyClose: 25299.35,
      niftyChangePct: 0.18,
      sensexChangePct: 0.04,
      note: "The week's high-water mark, and nobody noticed at the time: 44.30 points or 0.18% to 25,299.35, the highest close of the week, after trading between 25,142.95 and 25,384.80, with the Sensex up just 31.61 points or 0.04% at 81,911.01. Three sessions into the week the Nifty had added 1.21% and the Sensex 1.25%. The rotation inside the day ran the other way from Wednesday's: the Nifty Next 50 gave back 0.01% to 73,481.25 and IT stayed weak, while the broader market carried on \u2014 Midcap 150 closed at 22,760.75 and Smallcap 250 at 17,994.50, both the week's highs. The day's news was not Indian. Nvidia's chief executive resigned and global bond yields rose, which is what set Friday up: a market that had spent four sessions climbing a wall of domestic worry met a global one at the top. (Capital Market's week-in-review for 25,299.35, 81,911.01, +44.30, +31.61 and the three-session cumulative +1.21% and +1.25%; exa.ai's daily record for the 25,213.50 open and the 25,142.95 to 25,384.80 range; the Midcap 150 and Smallcap 250 closes are arithmetic on Friday's printed close and day change \u2014 22,681.25 + 79.50 and 17,940.54 + 53.96 \u2014 not separate prints.)"
    },
    {
      date: "2026-11-13",
      label: "Fri 13 Nov",
      niftyClose: 25144.30,
      niftyChangePct: -0.61,
      sensexChangePct: -0.39,
      note: "The first fall of November, and it was made in the afternoon rather than at the open. The Nifty started near 25,139, sank to 25,054.40, recovered to a 25,246 high and closed at 25,144.30, down 155.05 points or 0.61%; the Sensex closed at 81,592.45, down 318.56 points or 0.39%. Breadth was the month's weakest: 1,446 NSE stocks rose and 2,179 fell, and 38 of the 50 constituents closed lower. The trigger was entirely macro \u2014 October CPI at 6.09% against September's 5.54%, food inflation at 8.94% from 7.74% \u2014 and the tape immediately began pricing a December repo hike. The 10-year benchmark yield rose to 7.302% from 7.249%, a five-basis-point repricing in a single session, and the rupee closed at 94.24 to the dollar on Moneycontrol's weekly count, 33 paise weaker than the prior Friday's 93.91, though some Friday wraps printed 94.20. Every NSE sector except energy (+0.03%) and FMCG (-0.01%) fell, led by realty -1.39%, auto -1.07% and metal -0.98%, while the wider market lost less than the benchmark for a fourth session: Midcap 150 -0.35%, Smallcap 250 -0.30%, Nifty 500 -0.55%. Brent settled at $95.28 for December delivery. What the day did not do is break the week. (This page's Friday edition for the session's own detail, built on NSE's closing file and researchandinvest's 16:08 IST tables; Moneycontrol's weekly wrap for the 94.24 close against 93.91 and the 93.61-94.94 weekly range; Capital Market and Upstox for the two closes and point changes; ET's indices board for the sector percentages.)"
    }
  ],

  sectors: [
    {
      name: "Nifty PSU Bank",
      changePct: 7.50,
      note: "The week's sector by a distance, and its biggest weekly gain in seven months: 9,258.60 against 8,612.65, up 7.50%, with the index at its highest level since March. The buying was broad inside the basket rather than a single rerating \u2014 Punjab National Bank +12.8%, Bank of India +11.2%, Bank of Baroda +9.4%, Union Bank of India +8.6% and Punjab & Sind Bank +7.9% on Upstox's count, and the index had gained about 15% over three weeks. Two things drove it. Foreign money came into Indian financials all week, and PSU banks are the most rate-sensitive way to own that. And the sector is the cheapest large pool in the market, so a week in which the 10-year yield rose and a December hike started being priced was a week in which the cheap end of the lending complex was bought before the expensive end. Read the move with that in mind: this is a 7.5% week in a sector whose earnings did not change this week. (Craytheon's sector scorecard for 13 November for 9,258.60 and +7.50%; Upstox's weekly wrap for +7.5% and the five stock-level contributions; Zee Business for the same 7.5%; LiveMint and Newsdrum round the same move to 'about 8%' \u2014 the printed index change is 7.50%, and the 8% figures are rounded descriptions of it.)"
    },
    {
      name: "Nifty Media",
      changePct: 5.22,
      note: "The second-best sector and the one nobody expected: 1,757.70, up 5.22% for the week, against a Nifty that rose 0.46%. It is a ten-stock index, so a 5% week is one or two names moving rather than a sector being re-rated, and the composition says so \u2014 Prime Focus, the largest single name in the basket, fell 5.60% over the same four sessions, which means the gain came from the rest of the index and concentrated in the broadcasters. That divergence is the useful part of this card: a sector index at +5.22% containing its own worst-performing stock at -5.60% is a reminder that sector returns are weighted averages and not verdicts. (Strota's sector-flow table for 1,757.70 and +5.22%; Moneycontrol's weekly wrap and Upstox's both print 5.2% for Nifty Media; the Prime Focus figure is from Oquilia's Nifty 500 weekly losers table and is independently printed by OneTrader.)"
    },
    {
      name: "Nifty Bank",
      changePct: 3.30,
      note: "3.30% to 61,034.10 from 59,086.00, a gain of 1,948.10 points, and the sector that did most of Wednesday's heavy lifting on its own (+1.76% to 60,792.40 that day, 602 points below its intraday high of 61,394.30). The interesting number is the gap inside the banking complex: PSU Bank +7.50% against Bank +3.30% and Private Bank +1.60%. That ordering \u2014 the state-owned end gaining more than twice what the private end did \u2014 is what a liquidity-and-valuation trade looks like rather than a credit-cycle trade, because if the market were buying loan growth the private banks would have led. HDFC Bank and SBI were both among the Nifty 50's weekly gainers, SBI at +6.3%, and the index closed the week at a level it had not seen since February. (Zee Business's weekly table for 61,034.10 against 59,086.00, +1,948.1 and +3.3%; Craytheon and Downstox both print +3.30% from 59,086.00; Zee Business and Upstox for Private Bank +1.6%; Oquilia for SBI's +6.30%.)"
    },
    {
      name: "Nifty Realty",
      changePct: 2.74,
      note: "2.74% to 921.30 from 896.70 \u2014 and then a 1.39% fall on Friday that gave back roughly a third of it in one session. Realty is the longest-duration trade on the board, so it is the first thing bought when yields fall and the first thing sold when the market starts pricing a hike, and this week it did both: the index gained through Wednesday and Thursday and then led the Friday falls, with Prestige Estates -2.59%, Sobha -2.1%, Brigade -2.06%, Phoenix Mills -1.61%, DLF -1.37% and Godrej Properties -1.31%. For the week it still ranks fourth, which is the point worth keeping: a sector can be the week's fourth-best and the day's worst, and both are true at once. (Zee Business's weekly table for 921.30 against 896.70, +24.6 and +2.7%; Craytheon prints +2.74% and Upstox 2.7%; the Friday stock-level falls are from this page's Friday edition, built on Capital Market's closing report.)"
    },
    {
      name: "Nifty Pharma",
      changePct: 2.13,
      note: "2.13% to 28,535.80 from 27,940.40, a gain of 595.40 points, and a week of two halves: +1.65% on Monday to 28,896.10 and then a 0.41% fall on Wednesday to 28,776.45 before the Friday slide. Defensives did what defensives are supposed to do in a week when the index gained less than half a percent \u2014 pharma beat the Nifty by 167 basis points without a single large event behind it, which is exactly the profile of a sector being used as a parking place while the flows arrive elsewhere. The absence of news is the story: no price-control order, no USFDA action of consequence, and no earnings surprise large enough to move a twenty-stock index. (Zee Business's weekly table for 28,535.80 against 27,940.40, +595.4 and +2.1%; Craytheon independently prints +2.13%; the Monday and Wednesday closes are from the daily editions of this page for those sessions.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 2.10,
      note: "2.10% to 27,855.50 from 27,284.00, a gain of 571.60 points, and the index that sits between the banks and everything else \u2014 NBFCs, insurers, asset managers. It rose 1.02% on Wednesday to 27,663.40 and then gave back little on Friday, which is why it closed the week above the Bank index's own percentage only in the sense of trailing it by 1.2 points. The sub-index to keep an eye on is the 25/50 version, which prints +2.0% to 29,863.60 from 29,269.10: the narrower the financial index, the better the week, which is another way of saying the gains were in the largest lenders and not in the smaller non-bank lenders. (Zee Business's weekly table for both financial indices, with closes and point changes; Zee Business's text and Upstox's weekly wrap for the +2.1% round figure; the 11 November close is from that session's daily edition.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 1.60,
      note: "1.60% to 29,978.00 from 29,503.40, up 474.55 points \u2014 the laggard of the three banking indices and the clearest single piece of evidence about what kind of week this was. If the market had been buying credit growth, this index would have led: it holds the best-capitalised, fastest-growing lenders in the country. It rose 1.14% on Wednesday and 0.74% on Monday and then did nothing, which is what a sector does when the money arriving is looking for cheap exposure rather than good exposure. (Zee Business's weekly table for 29,978.00 against 29,503.40, +474.55 and +1.6%; Zee Business's text and Upstox both print 1.6%; the Monday close of 29,608.15 is from that session's daily edition.)"
    },
    {
      name: "Nifty Auto",
      changePct: 0.42,
      note: "0.42% to 27,929.90 from 27,811.80, a gain of 118.10 points \u2014 and a much better week than that number suggests, because almost all of it came on one day: +2.14% on Wednesday to 28,523.30, then two sessions of giving it back, including a 1.07% fall on Friday that made autos the day's second-worst sector. Two-wheeler and auto-component names were the weakest cluster on Friday, with Gabriel India -5.39% after a +16.53% Wednesday, which is the cleanest illustration in the market of what a momentum round trip looks like. The week's monthly context matters here: Nifty Auto is still 4.07% lower over three months while the Nifty is up 2.06%, so this is a bounce inside a downtrend rather than a turn. (Zee Business's weekly table for 27,929.90 against 27,811.80, +118.1 and +0.4%; Craytheon prints +0.42%; Craytheon's 3-month column for -4.07% against the Nifty's +2.06%; the Wednesday close is from that session's daily edition.)"
    },
    {
      name: "Nifty FMCG",
      changePct: 0.10,
      note: "0.10% to 46,833.60 from 46,785.60, a gain of 48 points \u2014 flat, and the only sector other than energy to hold its ground on Friday, when it closed 0.01% lower on a day the Nifty lost 0.61%. That is the defensive bid doing its job twice in one week: FMCG was the place money went on Wednesday (+1.13% to 47,188.55) and the place it stayed on Friday. The three-month number is the one that stings \u2014 5.14% lower while the Nifty is up 2.06% \u2014 so a flat week in a falling quarter is relative strength, not strength. (Zee Business's weekly table for 46,833.60 against 46,785.60, +48 and +0.1%; Craytheon independently prints +0.10%; Craytheon for the 3-month -5.14%; the Friday -0.01% close is from this page's Friday edition.)"
    },
    {
      name: "Nifty Metal",
      changePct: -0.24,
      note: "Down 30.30 points or 0.24% to 12,647.90 from 12,678.20 \u2014 technically the week's second-worst sector and in practice flat, because a 0.24% move on a 12,600 index is 30 points on a basket that routinely moves 300. The detail is more interesting than the total: the index fell 0.98% on Friday as the rate-hike pricing hit the most cyclical basket, but had risen 0.96% on Wednesday to 12,786.15 when the Iran de-escalation hopes were strongest, and Tata Steel reported a 16.2% year-on-year rise in September-quarter net profit to Rs 3,700 crore in the middle of it. A flat week for metals in a week of falling crude and a firm dollar is the neutral outcome; the four-month trend is where the damage is, at 5.30% below the Nifty over thirteen weeks. (Zee Business's weekly table for 12,647.90 against 12,678.20 and -30.3; Upstox's weekly wrap prints Metal -0.2% as one of only two laggards; the Wednesday close and the Tata Steel result are from Capital Market's week-in-review; Strota's 13-week relative figure for the trend.)"
    },
    {
      name: "Nifty Cement",
      changePct: -2.08,
      note: "Down 303.40 points or 2.08% to 14,270.40 from 14,573.80 \u2014 the week's second-worst sector on the printed numbers and the only one of the twelve here that rests on a single source. It is also the most logical fall of the week: cement is a freight-heavy, diesel-heavy, credit-dependent business, and a week in which crude ended near $96, the rupee weakened 33 paise and a December hike began being priced is a week in which its three biggest cost and demand inputs all moved the wrong way at once. UltraTech, the index's anchor, fell 3.19% over the week to Rs 12,100.00 while gaining 12.6% over the month, so the week's fall is profit-taking inside a strong month rather than a change of trend. (Zee Business's weekly table for 14,270.40 against 14,573.80, -303.4 and -2.1%; the -2.08% is that change recomputed \u2014 303.40 / 14,573.80 \u2014 and no second source printed the level this week, so treat the percentage as Zee Business's arithmetic and the level as unconfirmed by a second provider; Oquilia for UltraTech's weekly -3.19% and monthly +12.6%.)"
    },
    {
      name: "Nifty IT",
      changePct: -3.17,
      note: "The week's only real casualty: 31,931.15 against 32,977.90, down 1,046.80 points or 3.17%, and the end of a six-week winning streak. It fell on every one of the week's four sessions \u2014 1.22% on Monday to 32,468.90, 0.53% on Wednesday to 32,295.60, and then the Friday slide \u2014 and the cause was imported: a global sell-off in AI and semiconductor shares, with Nvidia's chief executive resigning on Thursday, hit the Indian end of the trade harder than the Indian market. The stock-level damage was uniform, which is what a sector de-rating looks like rather than a stock story: HCL Technologies -4.44%, TCS -3.65%, Tech Mahindra -3.60%, Infosys -2.57% and Birlasoft -4.30% over the four sessions. Two things to hold together: IT is still up 12.63% over a month and 2.65% over three, so this is a 3% week inside a strong quarter; and the FII buying that carried the rest of the market is, on Upstox's reading, partly the same anti-AI rotation in developed markets, which means the sector that fell is the sector whose fall paid for the rally. (Zee Business's weekly table for 31,931.20 against 32,977.90, -1,046.8 and -3.2%; Craytheon, Downstox and Strota all print -3.17% from the same 32,977.90 base; Moneycontrol and BusinessLine round it to 3.2-3.7%; Oquilia's weekly losers table for the five stock-level moves; Craytheon for the 1-month and 3-month context.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "week",
    source: "NIFTY 500 weekly price returns for the four sessions from the 8 November 2026 (Muhurat) close to the 13 November 2026 close, taken from Oquilia's Nifty 500 weekly gainers and losers tables, which are built from NSE's daily bhavcopy, its corporate-action file and its Nifty 500 constituent list, and independently cross-read against OneTrader's weekly wrap-up for 9-13 November, which prints the same five losers at the same percentages (Page Industries -12.40%, Tata Teleservices (Maharashtra) -8.70%, NHPC -6.43%, R R Kabel -6.24%, Prime Focus -5.60%) and the same PB Fintech +14.27% and Punjab National Bank +13.75% among the gainers, and against Capital Market's week-in-review for Kalyan Jewellers and the PSU bank names, Upstox's weekly wrap for Data Patterns and the PSU bank contributions, and this page's Friday edition for the 13 November closes. The universe is the full 500 \u2014 Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together \u2014 so a name outside the headline sub-indices still ranks. Two basis notes. First, these returns run from the 8 November close, the last close before Monday's session, while the index cards measure the week from the 6 November close; the difference is the one-hour Muhurat session, which is why Capital Market prints Kalyan Jewellers at 18.14% for the week and this table prints 17.74%. Second, cap tags are NSE's size buckets (Nifty 100 = Largecap, Nifty Midcap 150 = Midcap, Nifty Smallcap 250 = Smallcap); where a constituent file could not be read the tag follows market capitalisation, and no tag is used to claim index membership anywhere in this block.",
    gainers: [
      {
        name: "Kalyan Jewellers India",
        changePct: 17.74,
        cap: "Midcap",
        note: "The Nifty 500's biggest weekly gainer: +17.74% to Rs 697.00, which leaves it 1.96% below its 52-week high after a month in which it has gained 22.1%. The trigger was the September-quarter print \u2014 consolidated net profit up 64% year on year to Rs 427.1 crore from Rs 260.51 crore \u2014 and the market treated it as a festive-season confirmation rather than a one-off quarter, because the stock's whole year had been about whether gold prices were suppressing volumes. Note the two percentages in circulation for this same move: Oquilia's 17.74% runs from the 8 November close, Capital Market's 18.14% from the 6 November close, and the gap is the Muhurat session. (Oquilia's Nifty 500 weekly gainers table for the price, the percentage and the 52-week context; Capital Market's week-in-review for the 64% profit growth to Rs 427.1 crore and the 18.14% weekly move; Upstox's weekly wrap for the same result and the Rs 260.51 crore base.)"
      },
      {
        name: "Data Patterns (India)",
        changePct: 15.23,
        cap: "Smallcap",
        note: "+15.23% to Rs 4,268.00 over the week \u2014 13.5% below its 52-week high and only 3.0% higher over the month, which tells you the move came out of a flat base rather than off a high. The reason was a September-quarter result the market read forward: an order book of Rs 1,724 crore at 30 September and Rs 955.76 crore of orders negotiated but not yet received, which for a defence-electronics supplier is the number that matters more than the quarter's revenue. It is the highest-priced name in this list by a factor of four and the least liquid of the five, so 15% in four sessions is a re-rating on thin supply as much as a verdict on earnings. (Oquilia's Nifty 500 weekly gainers table for the price, the percentage and the 52-week and monthly context; Upstox's weekly wrap for the order book, the Rs 955.76 crore of negotiated orders and the 'strong H2FY27 outlook' description.)"
      },
      {
        name: "Godrej Industries",
        changePct: 15.15,
        cap: "Midcap",
        note: "+15.15% to Rs 1,117.15, still 21.2% below its 52-week high and up 11.9% over the month. No company-specific announcement was found in the sources checked, and the honest way to read a holding company's 15% week is through its parts: the two big listed stakes are Godrej Consumer in FMCG, which rose 0.10% this week, and Godrej Properties in realty, which rose 2.74%. A 15% move in the parent while neither engine moved more than 2.74% is a holding-company discount narrowing, not a business getting better \u2014 and that distinction is the whole reason to look at the sum-of-parts rather than the price. Treat the observation as an observation; the sources did not give a cause. (Oquilia's Nifty 500 weekly gainers table for the price, the percentage and the 52-week and monthly context; Zee Business's weekly sector table for FMCG +0.10% and Realty +2.74%; no company filing or news item explaining the move was found in the sources checked for this edition.)"
      },
      {
        name: "PB Fintech",
        changePct: 14.27,
        cap: "Midcap",
        note: "+14.27% to Rs 1,105.00 \u2014 and still 43.5% below its 52-week high, the deepest drawdown of any name in either list here. The month is +3.6%, so almost the entire month's gain arrived in these four sessions, and the move is seven times the 2.10% that Nifty Financial Services delivered. That ratio is the point: when a stock outruns its sector by a factor of seven on no company news in the sources checked, what moved was positioning, not the business. Its 52-week range makes the same argument from the other side \u2014 a stock 43% under its high that gains 14% in a week is being bought for the distance from the high, and that is a different trade from being bought for earnings. (Oquilia's Nifty 500 weekly gainers table for the price, the percentage, the 52-week and monthly context; OneTrader's weekly wrap-up independently prints +14.27%; Zee Business for Nifty Financial Services +2.10%.)"
      },
      {
        name: "Punjab National Bank",
        changePct: 13.75,
        cap: "Largecap",
        note: "Punjab National Bank +13.75% to Rs 142.81, closing the week at its 52-week high on Oquilia's measure (0.00% from it) and up 22.5% over the month \u2014 the single best illustration of what a 7.50% week for Nifty PSU Bank looks like at the stock level, since the index's biggest contributor did roughly twice the index. Upstox prints PNB at +12.8% on its own count, which is the same move measured from the 6 November close instead of the 8 November one. The bank is the largest of the listed state lenders by branch network and the one with the most to gain from a week in which foreign money came into Indian financials; it is also the one whose re-rating has the longest way to run, which is why the market bought it before it bought HDFC Bank. (Oquilia's Nifty 500 weekly gainers table for the price, the percentage, the 52-week and monthly context; OneTrader's weekly wrap-up independently prints +13.75%; Upstox's weekly wrap for the +12.8% contributor figure and the PSU Bank basket; LiveMint for the PNB-led 8% index week.)"
      }
    ],
    losers: [
      {
        name: "Page Industries",
        changePct: -12.40,
        cap: "Midcap",
        note: "The Nifty 500's worst week: -12.40% to Rs 31,325.00, which takes the month to -15.6% and leaves the stock 28.2% below its 52-week high. No company-specific announcement explains it in the sources checked, and the context makes the fall more striking rather than less: the Nifty Smallcap 250 rose 3.19%, 292 of 497 Nifty 500 stocks rose, and the median Nifty 500 stock gained 0.8%. A 12% fall in that tape is a stock being re-rated on its own multiple \u2014 Page trades at a premium that assumes steady volume growth in innerwear, and a week in which the consumer discretionary end was bought selectively is exactly when that multiple gets questioned. Read it as an idiosyncratic de-rating, not as a sector signal. (Oquilia's Nifty 500 weekly losers table for the price, the percentage and the 52-week and monthly context; OneTrader's weekly wrap-up independently prints -12.40%; no company filing or news item explaining the fall was found in the sources checked for this edition.)"
      },
      {
        name: "Tata Teleservices (Maharashtra)",
        changePct: -8.70,
        cap: "Smallcap",
        note: "-8.70% to Rs 37.90, after a month in which it gained 12.3% \u2014 so this is a give-back of roughly two-thirds of a speculative run, not a new low. It sits 29.8% below its 52-week high and is the cheapest name in either list at under Rs 40, which is the whole explanation of its behaviour: it trades on telecom-adjacent flow and retail positioning rather than on earnings, and it moves in multiples of the sector. The week it fell was a week the telecom-adjacent indices rose \u2014 Nifty Telecommunications gained 2.38% on 11 November alone \u2014 which is the definition of a stock-specific move. (Oquilia's Nifty 500 weekly losers table for the price, the percentage and the 52-week and monthly context; OneTrader's weekly wrap-up independently prints -8.70%; Oquilia's 11 November close report for Nifty Telecommunications +2.38%.)"
      },
      {
        name: "NHPC",
        changePct: -6.43,
        cap: "Largecap",
        note: "-6.43% to Rs 75.83, still 3.2% higher over the month and 11.2% below its 52-week high. Power was the week's quiet corner and it was quietly weak: NTPC fell 1.12%, Power Grid 1.49% and Torrent Power 4.18% over the same four sessions, with NHPC the worst of them. That ordering is worth noting \u2014 the hydro generator fell more than twice as much as the thermal major \u2014 because in a week when the 10-year yield rose to 7.302% and a December hike began being priced, the utility with the longest construction pipeline and the least pricing power is the one that gets sold first. No company-specific announcement was found in the sources checked. (Oquilia's Nifty 500 weekly losers table for the price, the percentage and the 52-week and monthly context; OneTrader's weekly wrap-up independently prints -6.43%; the NTPC, Power Grid and Torrent Power weekly moves are from the same Oquilia table.)"
      },
      {
        name: "R R Kabel",
        changePct: -6.24,
        cap: "Midcap",
        note: "-6.24% to Rs 1,983.50 \u2014 and the month is -24.1%, the worst monthly fall in either list \u2014 32.3% below its 52-week high. The oddity is Friday: on the last session it rose 1.83% as the entire transformer, cable and switchgear complex was bought on Hitachi Energy's order-inflow commentary, with Hitachi Energy itself +10.68%, GE Vernova T&D +5.24%, Siemens Energy +2.90%, Apar Industries +2.15% and TD Power Systems +1.86%. So the week's fall came before Friday's bid, and the stock is still 32% under its high: a group de-rating being worked off one session at a time, with the weakest balance sheet in the group last to recover. (Oquilia's Nifty 500 weekly losers table for the price, the percentage and the 52-week and monthly context; OneTrader's weekly wrap-up independently prints -6.24%; the Friday moves are from this page's Friday edition, built on researchandinvest's 16:08 IST tables and CNBC-TV18's closing report.)"
      },
      {
        name: "Prime Focus",
        changePct: -5.60,
        cap: "Smallcap",
        note: "-5.60% to Rs 269.95 in a week when Nifty Media rose 5.22% and was the second-best sector on the board \u2014 the cleanest example in this edition of a stock falling inside a rising sector, and the reason a sector index should never be read as a verdict on its members. It is the largest single constituent of that ten-stock index, which means the index's 5.22% was delivered by the rest of the basket against its own biggest name. The month is -3.2% and the stock is 24.5% below its 52-week high. No company-specific announcement was found in the sources checked. (Oquilia's Nifty 500 weekly losers table for the price, the percentage and the 52-week and monthly context; OneTrader's weekly wrap-up independently prints -5.60%; Strota's sector table and Moneycontrol's weekly wrap for Nifty Media +5.22%.)"
      }
    ]
  },

  watch: [
    {
      title: "December is now a live rate-hike meeting, and Friday was the first day of the repricing",
      detail: "October CPI at 6.09% is the first breach of the RBI's 6% upper tolerance band in two years, and it did not arrive alone: September was 5.54% and food inflation jumped to 8.94% from 7.74%, driven by onions, garlic and ginger. The bond market moved before the equity market did \u2014 the 10-year benchmark yield went to 7.302% from 7.249%, a five-basis-point repricing in a single session \u2014 and the equity market spent Friday pricing the same thing. Three things to watch from here. The December policy statement itself, which until Friday was priced as a hold. The next CPI print, because a second month above 6% turns a base effect into a trend and makes the hike a question of when rather than whether. And the rupee, which closed the week at 94.24 against the dollar, 33 paise weaker than the prior Friday's 93.91, after trading a 93.61-94.94 range: a weaker rupee is imported inflation, which is the one thing that would make a second breach more likely. (BusinessLine and PTI on the economists moving to a December hike; Capital Market's week-in-review for the CPI detail and the 7.302% yield; Moneycontrol's weekly wrap for the rupee's 94.24 close, the 33-paise weekly fall and the 93.61-94.94 range.)"
    },
    {
      title: "IT's six-week winning streak is over, and the cause was global",
      detail: "Nifty IT fell 3.17% to 31,931.15, the only sector to fall meaningfully in a week when the Nifty rose 0.46%, and it fell on all four sessions: -1.22% on Monday, -0.53% on Wednesday, and further on Thursday and Friday as a global sell-off in AI and semiconductor shares met Nvidia's chief executive resigning. The damage at stock level was uniform \u2014 HCL Technologies -4.44%, TCS -3.65%, Tech Mahindra -3.60%, Infosys -2.57%, Birlasoft -4.30% \u2014 which is what a de-rating looks like rather than a stock story. The thing to hold in mind is the circularity: Upstox attributes part of the week's foreign buying in India to the anti-AI rotation in developed markets, so the sector that fell in India is, in a real sense, the sector whose fall paid for the Indian rally. If that rotation reverses, both legs of the trade unwind at once. Watch the first two sessions after the weekend for whether the FII bid survives an IT bounce. (Moneycontrol, Upstox and BusinessLine for the weekly IT numbers and the six-week streak ending; Capital Market's week-in-review for the Nvidia resignation and rising global bond yields; Oquilia's weekly losers table for the five stock-level moves; Craytheon for the sector level and the -3.17%.)"
    },
    {
      title: "The flows are doing the work, and they are one-sided in a way that rarely lasts",
      detail: "FIIs bought about Rs 45,320 crore of Indian equities in the week beginning 9 November on NSDL data, taking November's total to roughly Rs 84,291 crore, while DIIs sold Rs 24,191.81 crore for a second consecutive week. Two caveats worth carrying into next week. The first is that the providers disagree on the weekly total \u2014 Moneycontrol prints Rs 33,342.70 crore for the same week on exchange data against Upstox's Rs 45,319.60 crore on NSDL \u2014 so the direction is certain and the magnitude is not; both agree it was a third straight week of net buying. The second is that foreign buying at this pace into a market that has now risen three weeks running, with the rupee falling and a rate hike being priced, is the set-up for a sharp reversal on any global risk-off. The single most useful thing to watch next week is not the index level but whether the FII number stays positive when IT stops falling. (Upstox's weekly wrap for the Rs 45,319.60 crore weekly and Rs 84,291 crore monthly NSDL figures; Moneycontrol's weekly wrap for Rs 33,342.70 crore of FII buying and Rs 24,191.81 crore of DII selling on exchange data; MarketCue's week-46 page for the three-of-five-sessions flow split.)"
    }
  ],

  reads: [
    {
      title: "Indices climb for 3rd straight week; broader mrkt outperforms",
      source: "Capital Market",
      url: "https://www.capitalmarket.com/markets/news/the-week-that-was-news/indices-climb-for-3rd-straight-week;-broader-mrkt-outperforms/1749404"
    },
    {
      title: "Market weekly wrap: NIFTY50, SENSEX extend rally for 3rd week; PSU Banks top sectoral gainers",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-weekly-wrap-nifty-50-sensex-extend-rally-for-3rd-week-psu-banks-top-sectoral-gainers-check-top-gainer-and-losers/article-203457/"
    },
    {
      title: "Markets extend winning streak to third week on FII buying; rupee weakens 33 paise",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/markets-extend-winning-streak-to-third-week-on-fii-buying-rupee-weakens-33-paise-14080002.html"
    },
    {
      title: "Sensex, Nifty Gain for Third Straight Week as FIIs Buy",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/sensex-nifty-extend-winning-streak-to-third-week-as-fiis-pour-rs84000-crore-inflation-at-6-09percent-and-crude-at-96-cap-gains"
    },
    {
      title: "Nifty50 Clocks 3rd Weekly Gain: 3 factors, key levels to track next week; expert buy calls",
      source: "Zee Business",
      url: "https://www.zeebiz.com/market-news/news-nifty50-sensex-niftybank-nov-9-13-trading-week-third-straight-weekly-gain-led-by-psu-bank-stocks-it-under-pressure-next-week-market-cues-and-stocks-to-buy-405549"
    }
  ],

  ratio: {
    name: "Return on Equity",
    category: "Profitability / shareholder returns",
    company: "Infosys Ltd",
    companyNote: "IT services \u00b7 Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288, printed p. 319 = PDF p. 289); every page cited below is the printed page number. Profit and equity cover the years ended 31 March 2026 and 31 March 2025.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Equity = profit attributable to the owners of the company \u00f7 average total equity, the average taken across the opening and the closing balance sheet. The numerator is the profit line after non-controlling interests, not the profit before them \u2014 the owners are the ones whose return this is. The denominator is total equity from the Consolidated Balance Sheet, meaning equity share capital plus other equity plus non-controlling interests, averaged over the year, because the profit was earned across twelve months while the balance sheet is a single day's photograph. The answer is a percentage: rupees of profit for every Rs 100 of shareholders' money left in the business.",
    formulaNote: "ROE is the one ratio that answers what the business earns on the capital it keeps, and Infosys is a clean case because the operations barely changed while the answer did. Profit attributable to owners rose 10.2%, from Rs 26,713 crore to Rs 29,440 crore, on revenue growth of 9.6%. Total equity fell 3.0%, from Rs 96,203 crore to Rs 93,297 crore, because the company returned capital faster than it earned it \u2014 the consolidated statement of changes in equity that follows the balance sheet shows a Rs 16,346 crore buyback and the year's dividends coming out of retained earnings. Profit up, equity down, so the ratio has to rise, and it does. That is the first lesson and the one most often missed: ROE can improve because the numerator grew or because the denominator shrank, and those two mean opposite things for the next five years. Here it is mostly the numerator \u2014 10.2% of profit growth against 3.0% of equity shrinkage \u2014 but not entirely, and the arithmetic is easy to check. The second lesson is the basis. Average equity is the honest denominator and gives 31.07%; closing equity gives 31.55%; equity attributable to owners only, ignoring Rs 445 crore of non-controlling interests, gives 31.71%, which is the number most screens print. None of those is wrong. They are three answers to three slightly different questions, and the gap between the highest and the lowest is 0.64 of a percentage point on the very same year.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      { label: "Profit attributable to the owners of the company, FY26 \u2014 the numerator", value: "Rs 29,440 crore", page: "p. 319" },
      { label: "Profit attributable to the owners of the company, FY25 \u2014 the prior-year numerator", value: "Rs 26,713 crore", page: "p. 319" },
      { label: "Profit for the year before non-controlling interests, FY26 \u2014 the line above it", value: "Rs 29,474 crore", page: "p. 318" },
      { label: "Profit for the year before non-controlling interests, FY25", value: "Rs 26,750 crore", page: "p. 318" },
      { label: "Total equity, 31 March 2026 \u2014 the closing denominator", value: "Rs 93,297 crore", page: "p. 317" },
      { label: "Total equity, 31 March 2025 \u2014 the opening denominator", value: "Rs 96,203 crore", page: "p. 317" },
      { label: "Total equity attributable to owners, 31 March 2026", value: "Rs 92,852 crore", page: "p. 317" },
      { label: "Total equity attributable to owners, 31 March 2025", value: "Rs 95,818 crore", page: "p. 317" },
      { label: "Non-controlling interests, 31 March 2026 \u2014 the Rs 445 crore between the two equity totals", value: "Rs 445 crore", page: "p. 317" },
      { label: "Equity share capital, 31 March 2026 \u2014 unchanged in rupee terms, and smaller than last year's", value: "Rs 2,024 crore", page: "p. 317" },
      { label: "Other equity, 31 March 2026 \u2014 the retained earnings the buyback came out of", value: "Rs 90,828 crore", page: "p. 317" },
      { label: "Total assets, 31 March 2026 \u2014 for the DuPont asset-turnover check", value: "Rs 1,55,967 crore", page: "p. 317" },
      { label: "Total assets, 31 March 2025 \u2014 the opening side of that average", value: "Rs 1,48,903 crore", page: "p. 317" },
      { label: "Revenue from operations, FY26 \u2014 for the DuPont margin check", value: "Rs 1,78,650 crore", page: "p. 318" },
      { label: "Revenue from operations, FY25", value: "Rs 1,62,990 crore", page: "p. 318" },
      { label: "Profit before tax, FY26 \u2014 after the Rs 1,289 crore Labour Codes charge", value: "Rs 39,995 crore", page: "p. 318" },
      { label: "Tax expense, FY26 \u2014 current tax Rs 11,767 crore less deferred tax Rs 1,246 crore", value: "Rs 10,521 crore", page: "p. 318" }
    ],
    working: "Step 1 \u2014 Take the numerator off the Consolidated Statement of Profit and Loss: profit attributable to the owners of the company is Rs 29,440 crore for FY26 and Rs 26,713 crore for FY25 (printed p. 319). Step 2 \u2014 Take the denominator off the Consolidated Balance Sheet: total equity is Rs 93,297 crore at 31 March 2026 and Rs 96,203 crore at 31 March 2025 (p. 317), the sum of equity attributable to owners of Rs 92,852 crore and Rs 95,818 crore plus non-controlling interests of Rs 445 crore and Rs 385 crore. Step 3 \u2014 Average the denominator: (93,297 + 96,203) \u00f7 2 = 94,750. Step 4 \u2014 Divide: 29,440 \u00f7 94,750 = 0.31071, so 31.07%. Step 5 \u2014 Run the prior year on the same average basis for comparison, which needs the equity at 31 March 2024 that this two-year balance sheet does not print; the honest alternative is to compare like with like on closing equity, and there FY26 gives 29,440 \u00f7 93,297 = 31.55% against FY25's 26,713 \u00f7 96,203 = 27.77%, a rise of 3.79 percentage points. Step 6 \u2014 Show how much the basis matters: on average total equity 31.07%, on closing total equity 31.55%, on average equity attributable to owners (92,852 + 95,818) \u00f7 2 = 94,335 and 29,440 \u00f7 94,335 = 31.21%, and on closing equity attributable to owners 29,440 \u00f7 92,852 = 31.71%. Step 7 \u2014 Decompose the change into its two causes: profit grew 29,440 \u00f7 26,713 = +10.21%; equity shrank 93,297 \u00f7 96,203 = -3.02%; and 1.1021 \u00f7 0.9698 = 1.1364, so the ratio rises 13.6% \u2014 from 27.77% to 31.55% \u2014 of which the numerator supplies 10.2 points of growth and the denominator 3.4. Step 8 \u2014 Check it with the DuPont identity, which multiplies three ratios that come off the same two pages: net margin 29,440 \u00f7 1,78,650 = 16.48%; asset turnover 1,78,650 \u00f7 average total assets of (1,55,967 + 1,48,903) \u00f7 2 = 1,52,435, so 1.1720 times; and leverage 1,52,435 \u00f7 94,750 = 1.6088. Multiply: 0.1648 \u00d7 1.1720 \u00d7 1.6088 = 0.3107, which is 31.07% \u2014 the same number to four decimals. Step 9 \u2014 Note what the leverage term is made of: total liabilities are Rs 62,670 crore of which Rs 9,176 crore is lease liabilities and the rest is payables, accruals, tax and deferred tax. Infosys carries no borrowings, so a 1.61 leverage multiplier is not debt; it is the ordinary gap between a company's assets and its equity.",
    result: "31.07% on average total equity for FY26, from Rs 29,440 crore of profit attributable to owners on an average equity base of Rs 94,750 crore \u2014 against 27.77% for FY25 measured on closing equity, or 31.55% for FY26 on that same closing basis. The three defensible versions of the same year are 31.07% (average total equity), 31.55% (closing total equity) and 31.71% (closing equity attributable to owners only); the DuPont identity reproduces the first to four decimals at 16.48% net margin \u00d7 1.17 times asset turnover \u00d7 1.61 times leverage.",
    meaning: "A return on equity of 31% is a business earning roughly Rs 31 a year on every Rs 100 of capital shareholders have left in it, and the number matters less than where it comes from. Infosys gets there on a 16.5% net margin and 1.17 turns of asset \u2014 a high-margin, asset-light service business \u2014 and the leverage term of 1.61 is not borrowed money at all but the ordinary difference between total assets and equity, since the balance sheet carries no borrowings and the Rs 9,176 crore a screen calls debt is lease liabilities for the offices it occupies. So this is a return on capital, not a return on leverage, which is the version of 31% that can persist. The second thing the ratio teaches is that a buyback flatters it. Rs 16,346 crore of shares were bought back in FY26, which took equity from Rs 96,203 crore to Rs 93,297 crore, and every rupee of profit now divides by a smaller base: roughly 1.1 of the 3.8 percentage-point improvement is the denominator, not the business. The third is that ROE is a ratio of a flow to a stock and is therefore easy to game \u2014 a company can raise it by buying back stock, by paying out everything, or by carrying more debt, none of which makes it a better business. The check that keeps you honest is the DuPont split: if the margin and the turnover are flat and only the leverage line rose, the ROE improvement is financial engineering. Here the margin is flat at 16.5% against 16.4% and the turnover barely moved, so the improvement is mostly the smaller denominator \u2014 which is real, but it is a decision about capital rather than a change in the business.",
    crossCheck: "Five checks, and the tightest one is exact. Screener.in prints a return on equity of 31.9% for Infosys with 32% for the last year and 31% over three years and five years. Topstockresearch prints 31.71% for Mar-26 and 27.88% for Mar-25 \u2014 which are precisely 29,440 \u00f7 92,852 and 26,713 \u00f7 95,818, the profit attributable to owners divided by the equity attributable to owners, so that provider's method is reproduced to the paise and validates both of our printed numerators and both denominators. Infosys' own Additional Information 2025-26 ratio analysis prints return on equity of 31.6% for FY26, 29.0% for FY25 and 32.1% for FY24 and states the method as PAT divided by average equity; the Integrated Report's business highlights and the Three Year Overview page print the same 31.6 / 29.0 / 32.1. The gap between our 31.07% and Infosys' 31.6% is translation, not arithmetic: the company's series is computed in US dollars, as the Additional Information footnote says, and the rupee moved against the dollar across the year. The 2.6-point gap between our 31.55% and Screener's 31.9% is basis \u2014 Screener's 'last year' figure is on a different denominator convention. Two conventions are worth knowing before comparing this number with another site's: Screener's consolidated balance sheet presents total equity as reserves plus share capital without the Rs 445 crore of non-controlling interests, so its equity base is Rs 92,852 crore and its ROE therefore lands nearer 31.7% than 31.1%; and any provider computing ROE on closing rather than average equity will be roughly half a point above ours on this particular year, because equity fell. None of these differences is an error; each is a stated choice, and the choice should be stated.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for total equity of Rs 93,297 crore at 31 March 2026 and Rs 96,203 crore at 31 March 2025, equity attributable to owners of Rs 92,852 crore and Rs 95,818 crore, non-controlling interests of Rs 445 crore and Rs 385 crore, equity share capital of Rs 2,024 crore, other equity of Rs 90,828 crore, total assets of Rs 1,55,967 crore and Rs 1,48,903 crore, total current liabilities of Rs 52,322 crore and total non-current liabilities of Rs 10,348 crore; and the Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288), for revenue from operations of Rs 1,78,650 crore and Rs 1,62,990 crore, profit before tax of Rs 39,995 crore and tax expense of Rs 10,521 crore, continuing on printed p. 319 (PDF p. 289) for profit attributable to the owners of the company of Rs 29,440 crore and Rs 26,713 crore and for the statement of changes in equity that shows the Rs 16,346 crore buyback. Cross-checked against Screener.in's Infosys consolidated page (ROE 31.9%, last year 32%, 3-year and 5-year 31%), Topstockresearch's ROE history (31.71% for Mar-26 and 27.88% for Mar-25, which reproduce our attributable-equity calculation exactly), and Infosys' Additional Information 2025-26 ratio analysis and Three Year Overview balance-sheet ratios page (ROE 31.6% / 29.0% / 32.1% in USD terms, stated as PAT over average equity), with the basis and translation gaps noted above."
  }
};
