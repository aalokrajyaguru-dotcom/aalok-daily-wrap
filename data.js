const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Monday, 16 November 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of the 16 November 2026 close (3:30 PM IST), the first session of the week; every day move is measured from the 13 November 2026 close and every weekly move from that same 13 November close, so on a Monday the two are identical by construction — the first genuinely weekly comparison of this week will be on Friday 20 November",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition — they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee — a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25291.1,
      dayChange: 146.8,
      dayChangePct: 0.58,
      weekChangePct: 0.58, // the last five closes: 9 Nov, 11 Nov, 12 Nov, 13 Nov, 16 Nov — 10 Nov was the Diwali-Balipratipada holiday
      spark: [25044.65, 25255.05, 25299.35, 25144.3, 25291.1], // the 13 Nov close was 25,144.30 — one session into the week, so this equals today's move
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The benchmark rose for the fourth session in five and did it from below rather than above. It opened at 25,206.15 — already 62 points above Friday's 25,144.30 — slid to 25,172.10 in the first hour, then spent the rest of the day climbing to a 25,337.60 high before settling at 25,291.10, up 146.80 points or 0.58%. The composition is the part worth keeping: 31 of the 50 constituents closed higher, and the five biggest gainers — Max Healthcare +6.63%, Tata Consumer +3.57%, ITC +3.54%, Apollo Hospitals +2.87%, Nestle India +2.68% — are three consumer names and two hospitals, none of them a technology or a metals company. The five biggest losers were Tata Motors PV -8.70%, Tata Steel -2.37%, Maruti -2.20%, Hindalco -2.15% and Coal India -1.49%, which is a car company being repriced on its own results and four cyclicals being sold. Against the 13 November close of 25,144.30 the week is +0.58% after one session, so the weekly number here is the daily number and should be read as such. (NSE closes via researchandinvest.com and Kotak Neo, which print the same 25,291.10 on the same 25,144.30 previous close; The Hindu, Business Today, CNBC TV18, Zee Business and Upstox for the constituent moves and the 31-up/19-down split.)"
    },
    {
      name: "Nifty Next 50",
      close: 72490.25,
      dayChange: -384.45,
      dayChangePct: -0.53,
      weekChangePct: -0.53, // the last five closes: 9 Nov, 11 Nov, 12 Nov, 13 Nov, 16 Nov
      spark: [72789.45, 73486.2, 73481.25, 72874.69, 72490.25], // the 13 Nov close was 72,874.70 — one session into the week, so this equals today's move
      returns: { oneY: 3.4, threeY: 16.58, fiveY: 10.7 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The first clean divergence of the month: the Nifty rose 0.58% and the Next 50 fell 0.53%, a 111-basis-point gap in a single session. It opened at 73,017.55, made its high of 73,062.30 almost immediately and then sold off all day to a 72,020.65 low before closing at 72,490.25, down 384.45 points. The gap is not a mystery — it is the same split that ran through the whole session, with money in the twenty or so largest and most liquid names and out of everything a rung below. Friday's 72,874.70 close means the week is -0.53% after one session. (researchandinvest.com and Kotak Neo print the identical 72,490.25 close, -384.45 and -0.53%, on the same 72,874.70 previous close; the open, high and low are from the same two tables.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22588.35,
      dayChange: -92.9,
      dayChangePct: -0.41,
      weekChangePct: -0.41, // the last five closes: 9 Nov, 11 Nov, 12 Nov, 13 Nov, 16 Nov
      spark: [22408.55, 22599.02, 22760.75, 22681.25, 22588.35], // the 13 Nov close was 22,681.25 — one session into the week, so this equals today's move
      returns: { oneY: 1.59, threeY: 14.2, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "Mid-caps gave back a little of last week's 1.84% and gave it back quietly: 92.90 points, or 0.41%, to 22,588.35, after trading between 22,465.55 and 22,755.50. The interesting number is not the index but the spread inside it. Nifty Midcap 100 fell 0.51% and the Nifty Midcap 50 fell 0.58%, both harder than the 150 — which means the damage was concentrated in the larger, more liquid mid-caps, the ones a foreign investor can actually exit, while the smaller end of the 150 held up better. That is the opposite of a retail-led selloff and consistent with the day's whole shape: the money that moved was institutional and it moved toward size. (researchandinvest.com and Capital Market, whose 1:30 pm reading of -0.64% on the same index shows the afternoon recovery; the 22,681.25 previous close is identical to Friday's close carried on this page.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17771.25,
      dayChange: -169.3,
      dayChangePct: -0.94,
      weekChangePct: -0.94, // the last five closes: 9 Nov, 11 Nov, 12 Nov, 13 Nov, 16 Nov
      spark: [17577.0, 17798.47, 17994.5, 17940.54, 17771.25], // the 13 Nov close was 17,940.55 — one session into the week, so this equals today's move
      returns: { oneY: 1.9, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The worst of the four equity cards and the one that settles what kind of day it was. Down 169.30 points or 0.94% to 17,771.25, having run from a 17,950.25 high to a 17,706.95 low — a 243-point range on an index that moves about 180 points in an average session. The Smallcap 100 fell 1.10% and the Smallcap 50 fell 0.92%, so the weakness was evenly spread across the size bucket rather than concentrated in its tail. Last week this index gained 3.19%, the best of the five cards; one session has taken back 0.94% of that, which is the ordinary arithmetic of a market that bought the small end on flows and is now watching those flows go into large caps. (researchandinvest.com and Kotak Neo print the same 17,771.25, -169.30 and -0.94%; Akashvani and Asianet Newsable independently report the Smallcap 100 down 1.1%.)"
    },
    {
      name: "BSE SME Index",
      close: 115359.64,
      dayChange: -1888.18,
      dayChangePct: -1.61,
      weekChangePct: -1.61, // the last five closes: 9 Nov, 11 Nov, 12 Nov, 13 Nov, 16 Nov — every point printed
      spark: [116940.52, 117661.57, 117808.56, 117247.82, 115359.64], // the 13 Nov close was 1,17,247.82 — one session into the week, so this equals today's move
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The sharpest fall on the board, and the only card here that fell harder than the small-caps: 1,888.18 points or 1.61% to 1,15,359.64, from a 1,16,387.48 open that was itself below Friday's close. It made a 1,16,758 high early and then a 1,15,238 low, closing near the bottom of that range. The SME platform has now given back 3.3% from its 12 November close of 1,17,808.56 in two sessions, which is what a newly listed, thinly traded, retail-heavy index does when the bid for small paper disappears — the same bid that was worth +3.19% on the Smallcap 250 last week. This is the cleanest single measure of how narrow Monday was. (Goodreturns and Finology both print 1,15,359.64 with a change of -1,888.18 and -1.61%, and the arithmetic checks: 1,17,247.82 - 1,15,359.64 = 1,888.18; Anand Rathi's 2:41 pm print of 1,15,421.85 and 5paisa's 2:25 pm print of 1,15,326.92 bracket the same path.)"
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,291.10 and the Sensex at 82,104.79, up 0.58% and 0.63%, as FMCG and a record-closing Bank Nifty outweighed 2,515 falling stocks",
    summary: "A large-cap day that the rest of the market did not attend. The Nifty added 146.80 points to 25,291.10 and the Sensex 512.34 points to 82,104.79, both recovering from an early dip and both closing in the upper half of the day's range — and both doing it while 2,515 NSE stocks fell against 1,175 that rose. The buying was concentrated where the money is largest and the earnings most visible: Nifty FMCG +1.87% closed on its high, Nifty Bank +0.89% made an all-time closing high at 61,575.90 with 13 of its 14 constituents higher, and Nifty Private Bank +0.88% beat Nifty PSU Bank's +0.50%, reversing last week's ordering exactly. Underneath, the small end was sold: Nifty Smallcap 250 -0.94%, BSE SME -1.61%, Nifty Midcap 100 -0.51%, and the worst sectors were the cyclicals — Pharma -1.53%, Metal -1.50%, Realty -1.34%, Auto -1.29%. The day's single largest stock event was Tata Motors PV, down 8.70% to Rs 262.40 and within 1.3% of its 52-week low, after a September-quarter loss of Rs 5,531 crore and a cut to JLR's FY27 margin and cash-flow guidance. Two facts explain the flow: foreign investors have bought $8.9 billion of Indian equities in November, a record single month, and Brent is at $95.51. India VIX rose 1.16% to 15.68 on a day the Nifty rose, which is the one number on the page that argues against reading Monday as calm.",
    stats: [
      "Nifty +0.58%",
      "Sensex +0.63%"
    ],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
    {
      date: "2026-11-10",
      label: "Tue 10 Nov",
      note: "NSE and BSE were closed for Diwali-Balipratipada, the second market holiday of the Samvat 2083 fortnight after the one-hour Muhurat session on Sunday 8 November. Nothing traded, so there is no close and no change to report — the week's four sessions are 9, 11, 12 and 13 November. The holiday is why the weekly statistics on this page say five sessions and the tape delivered four."
    },
    {
      date: "2026-11-11",
      label: "Wed 11 Nov",
      niftyClose: 25255.05,
      niftyChangePct: 0.84,
      sensexChangePct: 0.95,
      note: "The week's big session, and it carried its own warning. The Nifty gapped up to 25,337.80 — about 293 points above Monday's close — touched 25,424.35 before ten in the morning, slid to 25,095.35 by 3:12 pm, and then gained about 125 points in the closing auction to finish at 25,255.05, up 210.40 points or 0.84%. The Sensex rose 772.75 points or 0.95% to 81,879.40 after touching 82,520.40, a level last seen on 26 February. Banks and autos led: Nifty PSU Bank +2.94% to 9,167.20, Auto +2.14% to 28,523.30, Bank +1.76% to 60,792.40, Private Bank +1.14%, FMCG +1.13% to 47,188.55, Energy +1.03% to 37,548.05 and Financial Services +1.02% to 27,663.40, while IT fell 0.53% to 32,295.60, Realty 0.42% to 893.95 and Pharma 0.41% to 28,776.45. Breadth was the week's best: 1,969 NSE stocks rose, 756 fell and 21 were unchanged, and 37 of the 50 Nifty constituents closed higher. The wider market kept up: Next 50 +0.96% to 73,486.20, Midcap 150 +0.85%, Smallcap 250 +1.26% and Nifty 500 +0.90% to 23,779.30. India VIX closed at 17.56. (Oquilia's 11 November close report for the Nifty level, the breadth count and the index closes; Capital Market, HDFC Sky and Deccan Herald all carry 25,255.05 and 81,879.40 with the point changes; Stocktale for the closing-auction arithmetic and the Midcap 150 and Smallcap 250 day moves; PTI via ThePrint for the 82,520.40 intraday high and the near-nine-month-high description.)"
    },
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
    }
  ],

  sectors: [
    {
      name: "Nifty FMCG",
      changePct: 1.87,
      note: "The day's leader and the only sector that closed on its high: 47,708.10 against 46,833.55, up 1.87% or 874.55 points, with the low of the day at 46,793.75 — 40 points below Friday's close — so almost the entire move was made after the open and held. Three of the top five Nifty gainers came from here: Tata Consumer +3.57%, ITC +3.54% and Nestle India +2.68%. The read is defensive rather than cyclical. FMCG rose 1.71% last week while the Nifty rose 0.88%, and it rose again today while metals, autos and realty fell, which is what a market does when it wants earnings visibility and is not being paid to take duration risk. (researchandinvest.com for the close, high and low; Upstox, Liquide and India TV all print +1.87% as the day's best sector; Capmint prints the same 47,708.10.)"
    },
    {
      name: "Nifty Bank",
      changePct: 0.89,
      note: "A record close, and the arithmetic is exact: 61,575.90 against 61,034.10, up 541.80 points or 0.89%, which is the index's highest-ever close and 189 points short of the 61,764 all-time intraday high set on 3 February 2026. Thirteen of the fourteen constituents closed higher and Bank of Baroda was the only faller at -1.33% to Rs 270.20, with YES Bank the best at +3.44%. HDFC Bank, the heaviest-weighted stock in the Nifty, added 1.6% to Rs 816.50. The banking complex rose in a strict order — Bank +0.89%, Private Bank +0.88%, PSU Bank +0.50% — which reverses last week's ordering exactly, when PSU Bank led at +7.50% and Private Bank trailed at +1.60%. (researchandinvest.com and Capmint print 61,575.90; Business Today and Liquide both print +541.80 and +0.89%; CNBC TV18 independently confirms the record close and the 189-point gap.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 0.88,
      note: "30,242.85 against 29,977.95, up 264.90 points or 0.88% — a hair behind the Bank index and 39 basis points ahead of PSU Bank, which is the reversal worth noting. Last week private lenders gained 1.60% against PSU banks' 7.50%, a 590-basis-point gap; today they beat them. Reuters reported private lenders gaining 0.9% to a record high. This is the index that holds HDFC Bank, ICICI Bank, Axis and Kotak, and its leadership on a day when the small end of the market fell 0.94% says the same thing as the FMCG number: the money was buying size and balance-sheet certainty. (researchandinvest.com for the close and previous close; Upstox and Liquide print +0.88%; Reuters, carried by Business Recorder, reports the record high.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 0.57,
      note: "28,015.40 against 27,855.50, up 159.90 points or 0.57% — the widest index in the complex and therefore the dullest number in it, because it averages the banks with NBFCs, insurers and asset managers. The constituents tell the real story: SBI Life +2.11%, HDFC Life +2.07%, LIC Housing Finance +3.49%, Max Financial +1.88% and IIFL Finance +1.75% were all stronger than the index, which means the drag came from the non-lender financials rather than from insurance or housing credit. Last week this index gained 2.10% against the Nifty's 0.46%; it is now 167 basis points ahead of the Nifty over eight sessions. (researchandinvest.com and Capmint print the same 28,015.40 and +0.57%; Liquide prints +0.57% as the day's second-best sector.)"
    },
    {
      name: "Nifty PSU Bank",
      changePct: 0.5,
      note: "9,305.30 against 9,258.60, up 46.70 points or 0.50% — and the first day in five that the state-owned lenders did not lead. Last week this index rose 7.50%, its biggest weekly gain in seven months, and it was the single engine of the whole rally; today it trailed the Bank index by 39 basis points and Private Bank by 38. That is not a reversal, it is a pause — the index is still 14.46% higher over the month — but it does mark the point where the flows stopped being purely a PSU bank trade and started being a large-cap trade. The intraday range was wide for a 0.50% close: 9,265.60 to 9,391.95, a 126-point swing. (researchandinvest.com and Capmint print 9,305.30 and +0.50%; Upstox prints +0.5% as the day's third-best sector.)"
    },
    {
      name: "Nifty Media",
      changePct: 0.32,
      note: "1,763.30 against 1,757.70, up 5.60 points or 0.32% — a ten-stock index moving five points, which is not a sector view so much as noise. Last week it was the second-best sector at +5.22% on a basket this small; the fact that it could only add 0.32% today while FMCG added 1.87% says the media bid was a one-week event rather than a rotation. Sun TV Network added 1.78% to Rs 658.20 and Tata Communications 4.38% to Rs 1,850.50, both of which sit in or near this basket; Prime Focus, its largest constituent, is not on either the gainers or the losers list today. (researchandinvest.com for the close and previous close; Upstox and Asianet Newsable both report Nifty Media closing higher.)"
    },
    {
      name: "Nifty IT",
      changePct: 0.03,
      note: "31,941.05 against 31,931.15, up 9.90 points or 0.03% — flat, and flat is the story. This is the index that fell 3.17% last week on a global selloff in AI and technology stocks, its worst week in six, and it has now stopped falling without bouncing. The intraday range was 31,703.55 to 32,418.30, a 715-point spread around a nine-point close, which is what a fight between buyers and sellers of equal size looks like. Asianet Newsable read it as 0.3% lower at one point in the afternoon; the closing print from two independent tables is +0.03%, and the difference is timing rather than disagreement. (researchandinvest.com and Capmint both print 31,941.05 and +0.03% against a 31,931.15 previous close.)"
    },
    {
      name: "Nifty Auto",
      changePct: -1.29,
      note: "27,570.25 against 27,929.85, down 359.60 points or 1.29% — the second-worst sector and the one with a named cause. Tata Motors PV fell 8.70% after a September-quarter loss of Rs 5,531 crore and a cut to JLR's FY27 guidance, and Maruti Suzuki fell 2.20% to Rs 12,571 on the same day; between them they carried an index in which most constituents were not themselves down much. Last week autos rose 0.42% but only because of a single +2.14% Wednesday, and the index has now given that back. The day's high of 28,059.70 was made early and never revisited. (researchandinvest.com for the close, high and low; Upstox, Liquide, India TV and Capmint all print -1.29%.)"
    },
    {
      name: "Nifty Realty",
      changePct: -1.34,
      note: "908.90 against 921.25, down 12.35 points or 1.34% — and the index that has now fallen in two consecutive sessions, having given back 1.39% on Friday as well. Realty is the longest-duration sector on the board and the most sensitive to the rate path, so its behaviour is consistent with the CPI print that has put a December hike back on the table: 6.09% October inflation, a 10-year yield that moved to 7.302% from 7.249% on Friday. The index traded between 901.95 and 924.00 today, a 22-point range, and closed in the lower half of it. (researchandinvest.com for the close and previous close; Upstox, Liquide and India TV print -1.34%.)"
    },
    {
      name: "Nifty Metal",
      changePct: -1.5,
      note: "12,458.35 against 12,647.90, down 189.55 points or 1.50% — the second-worst close of the day and a fall that ran all session: the high of 12,654.00 was barely above Friday's close and the low of 12,419.30 came near the end. The constituents were hit harder than the index: Tata Steel -2.37% to Rs 182.30, Hindalco -2.15% to Rs 923.30, SAIL -4.23% to Rs 168.75, National Aluminium -3.35% to Rs 318.95. This index was flat last week at -0.24% and is now down 1.74% over five sessions while the Nifty is up. (researchandinvest.com and Capmint print 12,458.35; Upstox, Liquide and India TV print -1.50%.)"
    },
    {
      name: "Nifty Pharma",
      changePct: -1.53,
      note: "28,098.40 against 28,535.75, down 437.35 points or 1.53% — the day's worst sector, and the most interesting number on this page. It fell 1.53% while the hospitals and diagnostics stocks inside the broader market ripped: Max Healthcare +6.63%, Vijaya Diagnostic +5.49%, Fortis +5.13%, KIMS +4.62%, Aster DM +3.81% and Apollo Hospitals +2.87%. That is not a contradiction, it is a distinction — Nifty Pharma holds the drugmakers, and the drugmakers were sold (Divi's Laboratories -3.16%, Laurus Labs -8.42%, Sai Life Sciences -6.67%), while the providers were bought. The index had gained 2.13% last week as a defensive; one session has taken back 72% of that. (researchandinvest.com and Capmint print 28,098.40 and -1.53%; Upstox, Liquide and India TV agree.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 price returns for the single session of Monday 16 November 2026, measured from the 13 November 2026 close, taken from researchandinvest.com's Nifty 500 top-gainers and top-losers tables, which are built from NSE's daily bhavcopy, its corporate-action file and the Nifty 500 constituent list, and read at their 16:08 IST final snapshot rather than the 15:23 IST intraday one (the two snapshots differ, and where they do this page uses the later: Max Healthcare +6.43% becomes +6.63%, Deepak Fertilisers +8.16% becomes +7.21%, Fortis +4.84% becomes +5.13%, Vijaya Diagnostic +5.60% becomes +5.49%, Belrise +9.35% becomes +9.24%). The Nifty 50 names are cross-read against Upstox's market wrap, Zee Business's closing table and Liquide's post-market note, which print the same Max Healthcare +6.63% at Rs 1,009.90, Tata Consumer +3.57%, ITC +3.54%, Apollo +2.87%, Nestle +2.68% on the gainers and Tata Motors PV -8.70% at Rs 262.40, Tata Steel -2.37%, Maruti -2.20%, Hindalco -2.15% and Coal India -1.49% on the losers. The universe is the full 500 — Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together — so a name outside the headline sub-indices still ranks. Two basis notes, stated because they matter. First, cap tags follow NSE's size buckets where a name's index membership is unambiguous (Nifty 50 = Largecap, Nifty Midcap 150 = Midcap, Nifty Smallcap 250 = Smallcap); for the names outside those three buckets the tag is an approximation from market capitalisation and is not a claim of index membership anywhere in this block. Second, the percentages are price returns from the previous close and include no adjustment for any corporate action dated today, which is the same basis the index cards use.",
    gainers: [
      {
        name: "Belrise Industries",
        changePct: 9.24,
        cap: "Smallcap",
        note: "+9.24% to Rs 235.09 on 9.02 crore shares, the heaviest volume on either list — the Nifty 500's biggest gainer on a day when the Nifty 500 itself rose 0.08%. It is an auto-components maker that listed in 2025, and the move has no company announcement behind it in the sources checked; what it does have is a 52-week high of Rs 268.20, so it closed 12.3% below that, and a 52-week low of Rs 145.86. A 9% day in a stock 12% off its high, on four times normal turnover, in a session when Nifty Auto fell 1.29%, is positioning and not a rerating — and the sector context is the honest frame for it. (researchandinvest.com's Nifty 500 top-gainers table for the price, percentage, volume and 52-week range.)"
      },
      {
        name: "Deepak Fertilisers & Petrochemicals",
        changePct: 7.21,
        cap: "Midcap",
        note: "+7.21% to Rs 1,352.80, and the second-largest gainer in the 500 on a day when Nifty Commodities fell 0.09% and Nifty Metal fell 1.50%. It closed 19.5% below its 52-week high of Rs 1,681.00 and 56.2% above its low of Rs 866.40 — a stock in the middle of a wide range, moving on a day its own broad sector did nothing. There is no company filing behind it in the sources checked. The reason to keep it in the list is the contrast: an industrial chemicals and fertiliser name gaining 7% while the index it belongs to loses 1.5% is the kind of single-stock move that gets read as a sector signal and usually is not one. (researchandinvest.com's Nifty 500 top-gainers table; the earlier 3:23 pm snapshot printed +8.16% at Rs 1,364.80, so roughly a fifth of the move was given back in the closing hour.)"
      },
      {
        name: "Max Healthcare Institute",
        changePct: 6.63,
        cap: "Largecap",
        note: "+6.63% to Rs 1,009.90, the single best performer in the Nifty 50 and the one that makes the day's central contradiction visible. It rose while Nifty Pharma fell 1.53%, and it was not alone: Fortis +5.13%, Vijaya Diagnostic +5.49%, KIMS +4.62%, Aster DM +3.81% and Apollo Hospitals +2.87% all rose. Six hospital and diagnostics names in the top ten of the Nifty 500 gainers table, against a pharma index down 1.53% — the market was buying the provider and selling the pill. The stock is still 14.8% below its 52-week high of Rs 1,185.40. (researchandinvest.com, Upstox, Zee Business and Liquide all print +6.63% at Rs 1,009.90; NDTV Profit and Moneycontrol name it the top Nifty gainer.)"
      },
      {
        name: "Vijaya Diagnostic Centre",
        changePct: 5.49,
        cap: "Midcap",
        note: "+5.49% to Rs 1,487.50, and the second diagnostics name in the top four. It closed 6.7% below its 52-week high of Rs 1,593.60 and 75.4% above its low of Rs 848.00, on 8.3 lakh shares. No company announcement was found in the sources checked. Read with Max Healthcare and Fortis, the pattern is a whole sub-sector being re-rated in one session — the diagnostic lab and the private hospital — while the manufacturers of the medicines they administer were sold. That is a rotation inside healthcare rather than a healthcare rally, and it is the cleanest example today of why a sector index is not a verdict on its constituents. (researchandinvest.com's Nifty 500 top-gainers table for the price, percentage, volume and 52-week range.)"
      },
      {
        name: "Fortis Healthcare",
        changePct: 5.13,
        cap: "Largecap",
        note: "+5.13% to Rs 803.20 on 32.3 lakh shares, and the third hospital operator in the top five. It sits 22.0% below its 52-week high of Rs 1,029.90 and 13.9% above its low of Rs 704.95, which makes it the most beaten-down of the three — a stock that had already de-rated before today's 5% day. No company-specific announcement was found in the sources checked. The reason it belongs in this list rather than a sixth paragraph of the same argument is the size of the move relative to the sector: 5.13% against Nifty Pharma's -1.53% is a 666-basis-point gap inside what most screens would call one sector. (researchandinvest.com's Nifty 500 top-gainers table; the 3:23 pm snapshot printed +4.84% at Rs 801.00, so the stock strengthened into the close.)"
      }
    ],
    losers: [
      {
        name: "Kaynes Technology India",
        changePct: -13.12,
        cap: "Midcap",
        note: "-13.12% to Rs 2,980.00, the Nifty 500's worst performer, after a September quarter in which profit after tax fell 65% and margins shrank. It is the sharpest single-stock fall in the 500 on a day the index rose 0.08%, and the reason it matters is what it says about the electronics-manufacturing trade: the stock is 56.8% below its 52-week high of Rs 6,890.00 and only 8.6% above its low of Rs 2,744.00, so a 13% day is the continuation of a de-rating that has been running for months rather than a reaction to one print. The intraday fall was as steep as 18% before the close trimmed it. (researchandinvest.com's Nifty 500 top-losers table for the close and the 52-week range; Business Standard reports the 65% PAT decline and margin compression and an intraday fall of about 18%.)"
      },
      {
        name: "RHI Magnesita India",
        changePct: -9.57,
        cap: "Smallcap",
        note: "-9.57% to Rs 330.15, and the only stock on either list that closed within 2.2% of its 52-week low — Rs 323.05, against a 52-week high of Rs 499.60. That is the distinction worth making. Kaynes is falling from a very high base; RHI Magnesita is falling at the bottom of its range, where a 9.6% day is not a correction but a new low being established in slow motion. It makes refractories for steel furnaces, and Nifty Metal fell 1.50% today, so the direction is consistent with its end market even though the magnitude is nine times the sector's. No company-specific announcement was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage and 52-week range.)"
      },
      {
        name: "Tata Motors Passenger Vehicles",
        changePct: -8.7,
        cap: "Largecap",
        note: "-8.70% to Rs 262.40, the biggest faller in the Nifty 50 and the largest single piece of company news in the session. The September-quarter numbers were published after Friday's close: a consolidated net loss of Rs 5,531 crore against a profit of Rs 76,170 crore a year earlier, on exceptional items of Rs 6,738 crore — employee separation costs of Rs 3,776 crore and asset impairments of Rs 2,856 crore — with revenue up 34% to Rs 96,920 crore but below the Rs 1 lakh crore poll. The guidance was worse than the quarter: JLR's FY27 revenue outlook was cut to £25 billion from £26 billion, its EBIT margin to 2–3% from 4%, and free cash flow to an outflow of about £1.25 billion from breakeven. Motilal Oswal kept a sell and cut its target to Rs 240. The stock closed Rs 3.30 above its 52-week low of Rs 259.10. (PTI, CNBC TV18, Business Standard, Livemint and NDTV Profit all carry the loss, the exceptional items and the JLR guidance cuts; researchandinvest.com prints the -8.70% close at Rs 262.40, matching Upstox, Zee Business and Liquide.)"
      },
      {
        name: "Laurus Labs",
        changePct: -8.42,
        cap: "Largecap",
        note: "-8.42% to Rs 2,220.00 on 68.4 lakh shares, and the largest of the drugmakers sold in a session that punished the manufacturers while rewarding the hospitals. It closed 10.8% below its 52-week high of Rs 2,488.00 and 141.9% above its low of Rs 917.95. The move is 5.5 times Nifty Pharma's -1.53%, which is the same ratio question this page asked about the gainers: when a stock falls five times its sector on no company filing in the sources checked, the cause is inside the stock — positioning, an index weight, a large holder — and not inside the industry. Divi's Laboratories -3.16% and Sai Life Sciences -6.67% fell the same way for the same reason. (researchandinvest.com's Nifty 500 top-losers table; Nifty Pharma's -1.53% from researchandinvest.com and Capmint.)"
      },
      {
        name: "Premier Energies",
        changePct: -8.19,
        cap: "Midcap",
        note: "-8.19% to Rs 822.50 on 31.3 lakh shares, the fifth-worst in the 500 and the second capital-goods name in this list after Kaynes. It closed 27.5% below its 52-week high of Rs 1,134.00 and 23.3% above its low of Rs 666.90. Solar cell manufacturing is a capacity-expansion story priced on order books and execution, so it trades with the same multiple sensitivity as the electronics manufacturers — and both were sold on the same day. Waaree Energies fell 4.12% alongside it. No company-specific announcement was found in the sources checked. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage, volume and 52-week range.)"
      }
    ]
  },

  watch: [
    {
      title: "Breadth was the whole story, and it says the rally is narrower than the index does",
      detail: "Of 3,774 NSE stocks traded on Monday, 1,175 advanced and 2,515 declined — a ratio of about one to two — while the Nifty rose 0.58% and the Sensex 0.63%. The small end took the damage: Nifty Smallcap 250 -0.94%, BSE SME -1.61%, Nifty Midcap 100 -0.51% against Nifty Midcap 150's -0.41%, which means the larger mid-caps fell harder than the smaller ones, the signature of an institutional seller rather than a retail one. Four of the five worst-performing sectors were cyclical — Pharma -1.53%, Metal -1.50%, Realty -1.34%, Auto -1.29% — and the top four were all financial or defensive. What to watch next is whether that gap closes from above or below: a second session with the Nifty up and 2,500 stocks down is a distribution pattern, and a session where the small-caps stop falling while the Nifty does nothing is a rotation. Today's data does not yet distinguish them."
    },
    {
      title: "November's foreign inflow is a record, and records are the thing that makes a market fragile",
      detail: "Foreign investors have bought $8.9 billion of Indian equities on a net basis so far in November, according to National Securities Depository data cited by Reuters — the largest single-month buy on record — which has trimmed their year-to-date India outflow to $22.5 billion and the Nifty's 2026 loss to under 3.5%. FIIs bought a further Rs 5,736.55 crore on Friday alone, per exchange data. The mechanism matters more than the total: the same flow that has produced three consecutive weekly gains is a flow that can reverse on a global event rather than an Indian one, and the stated triggers are outside India's control — a selloff in AI stocks and a slide in crude. Brent at $95.51 is doing the work of a rate cut here. Watch the daily NSDL prints, not the monthly headline."
    },
    {
      title: "December is a live RBI meeting, and the ten-year is already pricing it",
      detail: "October CPI at 6.09% was the first breach of the RBI's 6% upper tolerance band in two years, and the bond market repriced before the equity market did: the 10-year benchmark went to 7.302% from 7.249% on Friday, five basis points in a single session. Today Nifty Realty fell 1.34% for the second straight session, which is the equity market's duration trade voting the same way. Nothing on Monday reversed that — the Nifty rose because FMCG and banks rose, not because the rate picture improved. The next inputs are the November CPI print and the December policy, and the thing to watch in between is whether PSU banks, which gained 7.50% last week on flows rather than on margins, keep leading if the curve steepens further."
    },
    {
      title: "JLR's guidance cut is a Tata Motors problem today and an auto-sector problem in February",
      detail: "Tata Motors PV closed 8.70% lower at Rs 262.40, 1.3% above its 52-week low, after cutting JLR's FY27 revenue outlook to £25 billion from £26 billion, its EBIT margin to 2–3% from 4% and its free cash flow to an outflow of roughly £1.25 billion from breakeven. JLR is about 80% of the company's top line, so the guidance is the company. The read-across is what to watch: Nifty Auto fell 1.29% and Maruti 2.20% on a day when neither had news, and the sector is now down 1.29% over the month against the Nifty's +11.34%. If JLR's problems are demand in China and MENA plus restructuring costs, they are not India-specific, but a 4% margin going to 2–3% in a business that size sets the comp for every Indian auto ancillary with European exposure."
    }
  ],

  reads: [
    {
      title: "Stock markets end higher on foreign fund inflows, lower crude oil; Sensex up 512 points",
      source: "The Hindu",
      url: "https://www.thehindu.com/business/Industry/stock-markets-end-higher-on-foreign-fund-inflows-lower-crude-oil-sensex-up-512-points/article71707675.ece"
    },
    {
      title: "Why did stock market end mixed today? Sensex gains 512 points, Nifty Bank hits record high",
      source: "CNBC TV18",
      url: "https://www.cnbctv18.com/market/why-did-stock-market-end-mixed-today-sensex-gains-512-points-nifty-bank-hits-record-high-20034970.htm"
    },
    {
      title: "Market wrap, Nov 16: SENSEX rises 512 pts, NIFTY50 ends at 25,291 led by FMCG stocks; Max Healthcare top gainer",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/market-wrap-nov-16-sensex-rises-512-pts-nifty-50-ends-at-25-291-led-by-fmcg-stocks-max-healthcare-top-gainer/article-203523/"
    },
    {
      title: "Sensex, Nifty resume climb in volatile trade; what lies ahead for markets?",
      source: "Business Today",
      url: "https://www.businesstoday.in/markets/stocks/story/sensex-nifty-resume-climb-in-volatile-trade-what-lies-ahead-for-markets-567683-2026-11-16"
    },
    {
      title: "Tata Motors PV shares plunge 9% after Q2 results; brokerages cut target",
      source: "Business Standard",
      url: "https://www.business-standard.com/markets/news/tata-motors-pv-shares-plunge-9-after-q2-results-brokerages-cut-target-126111600451_1.html"
    }
  ],

  ratio: {
    name: "Return on Assets",
    category: "Profitability / asset efficiency",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288, printed p. 319 = PDF p. 289); every page cited below is the printed page number. Profit and total assets cover the years ended 31 March 2026 and 31 March 2025.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Return on Assets = profit for the year ÷ average total assets, the average taken across the opening and the closing balance sheet. Two choices define the ratio and both are made deliberately here. The numerator is profit for the year before non-controlling interests, not the profit attributable to the owners, because total assets are funded by every claimant on the balance sheet — the owners and the non-controlling interests together — so the return those assets produced belongs to all of them. The denominator is total assets from the Consolidated Balance Sheet, averaged over the year, because the profit was earned across twelve months while the balance sheet is a single day's photograph.",
    formulaNote: "Return on assets is the ratio that separates a good business from a good business that needs a lot of money to run, and Infosys is the clean case because it needs almost none. It earns Rs 29,474 crore on Rs 1,52,435 crore of average assets — 19.3% — with two-thirds of that asset base sitting in current assets rather than plant. That is the structural reason its return on equity (31.07%, yesterday's ratio on this page) is so much higher than its return on assets: the gap is not borrowing, it is the ordinary difference between total assets and equity, made of trade payables, unearned revenue and provisions — money the business owes its suppliers and its customers rather than its bankers. Read the two together and you have the whole model: high margin, low capital intensity, and a balance sheet funded partly by the people it does business with.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      {
        label: "Profit for the year before non-controlling interests, FY26 — the numerator",
        value: "Rs 29,474 crore",
        page: "p. 318"
      },
      {
        label: "Profit for the year before non-controlling interests, FY25 — the prior-year numerator",
        value: "Rs 26,750 crore",
        page: "p. 318"
      },
      {
        label: "Profit attributable to the owners of the company, FY26 — the narrower numerator, used for the alternative",
        value: "Rs 29,440 crore",
        page: "p. 319"
      },
      {
        label: "Total assets, 31 March 2026 — the closing denominator",
        value: "Rs 1,55,967 crore",
        page: "p. 317"
      },
      {
        label: "Total assets, 31 March 2025 — the opening denominator",
        value: "Rs 1,48,903 crore",
        page: "p. 317"
      },
      {
        label: "Total current assets, 31 March 2026 — two-thirds of the asset base",
        value: "Rs 1,03,489 crore",
        page: "p. 317"
      },
      {
        label: "Total non-current assets, 31 March 2026 — the plant, the goodwill and the intangibles",
        value: "Rs 52,478 crore",
        page: "p. 317"
      },
      {
        label: "Total equity, 31 March 2026 — for the leverage term in the DuPont check",
        value: "Rs 93,297 crore",
        page: "p. 317"
      },
      {
        label: "Revenue from operations, FY26 — for the asset-turnover term",
        value: "Rs 1,78,650 crore",
        page: "p. 318"
      },
      {
        label: "Revenue from operations, FY25 — the prior-year top line",
        value: "Rs 1,62,990 crore",
        page: "p. 318"
      }
    ],
    working: "Step 1 — Take the numerator off the Consolidated Statement of Profit and Loss: profit for the year is Rs 29,474 crore for FY26 and Rs 26,750 crore for FY25 (printed p. 318). Step 2 — Take the denominator off the Consolidated Balance Sheet: total assets are Rs 1,55,967 crore at 31 March 2026 and Rs 1,48,903 crore at 31 March 2025 (p. 317). Step 3 — Average the denominator: (1,55,967 + 1,48,903) ÷ 2 = Rs 1,52,435 crore. Step 4 — Divide: 29,474 ÷ 1,52,435 = 0.19335, or 19.33%. Step 5 — Run the variants so you can see what each choice costs. On closing assets instead of average: 29,474 ÷ 1,55,967 = 18.90%. On the owners-only numerator: 29,440 ÷ 1,52,435 = 19.31%. On both: 29,440 ÷ 1,55,967 = 18.88%. All four are the same year; the spread between the highest and the lowest is 45 basis points and it is entirely a definitional choice. Step 6 — Reproduce it through the DuPont identity, which must come back to the same number: net margin 29,474 ÷ 1,78,650 = 16.50% (p. 318), asset turnover 1,78,650 ÷ 1,52,435 = 1.172 times (p. 318 and p. 317), and 16.50% × 1.172 = 19.33%. It does. Step 7 — For context, the asset base itself: Rs 1,03,489 crore of the Rs 1,55,967 crore is current assets and only Rs 52,478 crore is non-current (p. 317), so 66.4% of everything Infosys owns is receivables, cash, investments and prepaid tax rather than buildings and equipment.",
    result: "19.33% on average total assets for FY26, from Rs 29,474 crore of profit on an average asset base of Rs 1,52,435 crore — against 18.90% measured on the closing balance sheet, 19.31% if the numerator is cut back to the Rs 29,440 crore attributable to the owners, and 18.88% on both conventions at once. The DuPont identity reproduces the headline exactly at 16.50% net margin × 1.17 turns of asset.",
    meaning: "Nineteen paise of profit for every rupee of assets, which is a high number for an industrial company and an ordinary one for a software business — and the interesting part is where the assets are. Infosys carries Rs 1,03,489 crore of current assets against Rs 52,478 crore of everything else, and the largest single line in the current bucket is trade receivables at Rs 35,234 crore followed by cash at Rs 22,201 crore. So the capital this business ties up is mostly money its clients owe it, not money it has spent on factories. That is why a 19.33% return on assets can sit underneath a 31.07% return on equity: the equity is small relative to the assets because the assets are largely financed by the people on the other side of the ledger — suppliers, employees and customers who have paid in advance — not by shareholders and not by lenders. The balance sheet carries no borrowings at all; the Rs 9,176 crore a screen calls debt is lease liabilities for the offices it occupies.",
    crossCheck: "Four checks and one honest gap. Screener.in's ratio screen prints a return on assets of 19.94% for Infosys over twelve months; Smart-Investing prints 19.55% for March 2026 and 18.76% for March 2025; Macroaxis prints 19.25% for FY2026 against 17.93% for FY2025. Our 19.33% sits inside that 19.25%–19.94% band, which is the reassurance that the numerator and the order of magnitude are right. The gap is the denominator, and it is visible in Screener's own balance sheet: it totals assets at Rs 1,54,288 crore for March 2026 against the Rs 1,55,967 crore in the audited Consolidated Balance Sheet (p. 317), a Rs 1,679 crore difference from its own line-item aggregation, so its return is computed on a slightly smaller base. The second gap is convention: providers differ on whether to divide by closing assets or average assets, and on whether to use profit before or after non-controlling interests — the four defensible answers for FY26 are 19.33%, 19.31%, 18.90% and 18.88%, and none of them is wrong. Infosys' own Additional Information 2025-26 ratio analysis publishes return on equity but not return on assets, so there is no company-printed figure to reconcile against; that is why this note leans on three independent providers and states the spread rather than picking the closest number.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for total assets of Rs 1,55,967 crore at 31 March 2026 and Rs 1,48,903 crore at 31 March 2025, total current assets of Rs 1,03,489 crore and total non-current assets of Rs 52,478 crore, trade receivables of Rs 35,234 crore, cash and cash equivalents of Rs 22,201 crore and total equity of Rs 93,297 crore; and the Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288), for revenue from operations of Rs 1,78,650 crore and Rs 1,62,990 crore and for profit for the year before non-controlling interests of Rs 29,474 crore and Rs 26,750 crore, continuing on printed p. 319 (PDF p. 289) for profit attributable to the owners of the company of Rs 29,440 crore and Rs 26,713 crore. Cross-checked against Screener.in's Infosys consolidated page and its ROA screen (19.94% over twelve months, and a March 2026 asset total of Rs 1,54,288 crore that differs from the report's by Rs 1,679 crore), Smart-Investing's return-on-assets history (19.55% for Mar-26, 18.76% for Mar-25), Macroaxis' FY2026 return on assets (19.25% against 17.93% for FY2025) and Infosys' Additional Information 2025-26 ratio analysis, which publishes return on equity but not return on assets."
  }
};
