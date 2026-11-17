const dailyWrapData = {
  site: {
    name: "The Daily Wrap",
    edition: "Market Close — India",
    tagline: "The day on Dalal Street, in one scroll"
  },
  updatedLabel: "Updated: Tuesday, 17 November 2026, 5:30 PM IST — Market Close",
  asOfLabel: "Closing levels as of the 17 November 2026 close (3:30 PM IST), the second session of the week; every day move is measured from the 16 November 2026 close and every weekly move from the 13 November 2026 close, the last close of the previous week, so the weekly numbers on this page are two sessions old rather than five",
  returnsBasis: "1Y returns are absolute; 3Y and 5Y are annualised (CAGR), point-to-point from the closes nearest 6 November 2025, 6 November 2023 and 5 November 2021, measured to the 6 November 2026 close and carried forward unchanged from Saturday's edition — they are not recomputed for a single session's close. USD/INR returns are the dollar's return against the rupee — a positive number means the rupee weakened.",

  indices: [
    {
      name: "Nifty 50",
      close: 25387.4,
      dayChange: 96.3,
      dayChangePct: 0.38,
      weekChangePct: 0.97, // measured from the 13 Nov close of 25,144.30, two sessions in
      spark: [25255.05, 25299.35, 25144.3, 25291.1, 25387.4], // the last five sessions: 11, 12, 13, 16 and 17 Nov — 10 Nov was the Diwali-Balipratipada holiday
      returns: { oneY: -1.88, threeY: 8.84, fiveY: 6.92 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "The highest close since February, made the hard way. The benchmark opened at 25,277.30, slipped to 25,267.30 in the first hour, ran to 25,501.35 — the first print above 25,500 since February 2026 — and then gave back two-thirds of that move in the afternoon to settle at 25,387.40, up 96.30 points or 0.38%. Breadth said the same thing the shape did: 2,012 NSE stocks rose and 2,148 fell, so the index gained while more stocks lost. The composition explains it. Nifty Bank closed at a record 62,273.25, up 1.13%, PSU Bank rose 1.95% and Realty 1.94%, while IT fell 0.90% and FMCG 0.20%. Adani Enterprises +3.24% and Eicher Motors +3.01% led the constituents; HCLTech -2.09%, Power Grid -1.60%, HDFC Life -1.56%, ONGC -1.53% and Coal India -1.50% lagged. Against Friday's 25,144.30 close the week is +0.97% after two sessions. (NSE closes via researchandinvest.com's 16:08 IST table and Capital Market's provisional close, both printing 25,387.40 on the same 25,291.10 previous close; Moneycontrol and India Today for the open, the high and the low; HDFC Sky for the 2,012-against-2,148 breadth count; Upstox and India Today for the constituent moves.)"
    },
    {
      name: "Nifty Next 50",
      close: 72693,
      dayChange: 202.75,
      dayChangePct: 0.28,
      weekChangePct: -0.25, // measured from the 13 Nov close of 72,874.69
      spark: [73486.2, 73481.25, 72874.69, 72490.25, 72693], // the last five sessions: 11, 12, 13, 16 and 17 Nov
      returns: { oneY: 3.4, threeY: 16.58, fiveY: 10.7 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "72,693.00, up 202.75 points or 0.28%, and the useful fact is the size of the gap rather than the direction. It opened at 72,382.60, dipped to 72,278.40, climbed to 72,960.60 and closed 267 points below that high. Monday's divergence between this index and the Nifty was 111 basis points; today's is ten, which says the money that left the second rung of large-caps on Monday did not leave again on Tuesday. The week is still negative at -0.25% against Friday's 72,874.70, and this is the only one of the four equity cards where the index is below its 13 November close while the Nifty is 0.97% above it. (researchandinvest.com's 16:08 IST table and Anand Rathi's indices board both print 72,693.00, +0.28%, on the 72,490.25 previous close, with the same 72,960.60 high and 72,278.40 low. Kotak Neo's page was still printing 72,771.05 and +0.39% when read, a figure between the open and the high; it is treated as a stale intraday snapshot and not used.)"
    },
    {
      name: "Nifty Midcap 150",
      close: 22648.7,
      dayChange: 60.35,
      dayChangePct: 0.27,
      weekChangePct: -0.14, // measured from the 13 Nov close of 22,681.25
      spark: [22599.02, 22760.75, 22681.25, 22588.35, 22648.7], // the last five sessions: 11, 12, 13, 16 and 17 Nov
      returns: { oneY: 1.59, threeY: 14.2, fiveY: 13.62 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "22,648.70, up 60.35 points or 0.27%, after trading between 22,531.90 and 22,749.00. The mid-caps stopped falling but did not join the rally, and for once the three size buckets moved together — the 150 +0.27%, the Midcap 100 +0.25%, the Midcap 50 +0.27% — after Monday's inversion in which the larger mid-caps fell hardest. The real story was inside the index rather than in it: Laurus Labs +5.32% a session after falling 8.42%, Bank of Maharashtra +4.34%, Bank of India +4.12%, Exide Industries +4.01% and Prestige Estates +3.22%, against Apar Industries -4.45%, KEI Industries -4.20%, Ashok Leyland -4.17% and Kalyan Jewellers -3.59%. Capital goods were sold to buy financials and realty; that is a rotation, not a direction. Against Friday's 22,681.25 the week is -0.14%. (researchandinvest.com's 16:08 IST table and Capital Market's provisional close both print +0.27% on the 22,588.35 previous close; Upstox prints the Midcap 100 at 61,730.00, +153.60 and +0.25%.)"
    },
    {
      name: "Nifty Smallcap 250",
      close: 17754.85,
      dayChange: -16.4,
      dayChangePct: -0.09,
      weekChangePct: -1.04, // measured from the 13 Nov close of 17,940.55
      spark: [17798.47, 17994.5, 17940.54, 17771.25, 17754.85], // the last five sessions: 11, 12, 13, 16 and 17 Nov
      returns: { oneY: 1.9, threeY: 11.97, fiveY: 12.42 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "17,754.85, down 16.40 points or 0.09% — a third consecutive fall, and the smallest move on the board after the SME card. The range was 17,704.55 to 17,897.45 and the close sat near the bottom of it, 143 points below the high, so the index spent the afternoon giving back an intraday gain rather than building on one. The size gradient inside the bucket is the part worth keeping: the 250 fell 0.09%, the Smallcap 100 fell 0.22% and the Smallcap 50 fell 0.27%, which means the smaller the stock the worse it did — the reverse of a broad de-risking, and consistent with the losers' table, where Urban Company -5.86%, Sterlite Technologies -5.00%, India Cements -4.56%, Concord Biotech -4.51% and Apar Industries -4.45% all sit. Against Friday's 17,940.55 the week is -1.04%, the worst of the four equity cards. (researchandinvest.com's 16:08 IST table and Capital Market both print 17,754.85 and -0.09% on the same 17,771.25 previous close; Moneycontrol and Upstox print the Smallcap 100 at -0.22% to 19,398.70.)"
    },
    {
      name: "BSE SME Index",
      close: 114633.69,
      dayChange: -725.95,
      dayChangePct: -0.63,
      weekChangePct: -2.23, // measured from the 13 Nov close of 1,17,247.82
      spark: [117661.57, 117808.56, 117247.82, 115359.64, 114633.69], // the last five sessions: 11, 12, 13, 16 and 17 Nov — every point printed
      returns: { oneY: 9.81, threeY: 40.48, fiveY: 70.41 }, // 1Y absolute; 3Y and 5Y annualised, measured to the 6 Nov 2026 close
      note: "1,14,633.69, down 725.95 points or 0.63% — a third consecutive fall that has taken the platform from 1,17,808.56 on 12 November to here, 2.69% lower in three sessions. It opened at 1,15,219.95, already below Monday's close, made a 1,15,493.84 high, sank to 1,14,611.53 and closed 22 points off that low. The number that matters is not the fall but its deceleration: 1.61% on Monday, 0.63% today, which is what a thin, retail-heavy index does when the forced selling stops rather than when buyers arrive. Against Friday's 1,17,247.82 the week is -2.23%, still the worst card on the board. (Anand Rathi's BSE indices board at 3:34 pm prints 1,14,633.69 with a change of -0.63% on the 1,15,359.64 previous close, and Dhan's 4:27 pm board prints the same 1,14,633.69; the arithmetic checks: 1,15,359.64 - 1,14,633.69 = 725.95, or 0.63%. Anand Rathi's own 1:44 pm snapshot printed 1,14,921.59 and Kotak Neo's page was still carrying Monday's 1,15,359.64 when read, so neither is used.)"
    }
  ],

  dailyWrap: {
    label: "The Day That Was",
    kicker: "Daily Wrap",
    headline: "Nifty ends at 25,387.40 and the Sensex at 82,532.19, up 0.38% and 0.52%, as PSU banks and realty ran, a record Bank Nifty closed, and IT fell 0.90%",
    summary: "A second straight gain, and a narrower one than the intraday tape promised. The Nifty opened at 25,277.30, ran to 25,501.35 — above 25,500 for the first time since February 2026 — and closed at 25,387.40, up 96.30 points or 0.38%; the Sensex ran from a 82,091.90 low to a 82,897.49 high before settling at 82,532.19, up 427.40 points or 0.52%. Underneath, 2,012 NSE stocks rose and 2,148 fell, so the index gained while the median stock did not. The leadership was financial and property: Nifty PSU Bank +1.95% to 9,486.60 and Nifty Realty +1.94% to 926.50, with Nifty Bank closing at a record 62,273.25, up 697.35 points or 1.13%, after an all-time intraday high of 62,442.20. The drag was technology: Nifty IT -0.90% to 31,654.10 on a global selloff in AI and semiconductor names, with HCLTech -2.09%, Tech Mahindra -1.43% and Infosys -1.20% to -1.39% depending on the print, and Nifty FMCG -0.20% gave back a fifth of Monday's 1.87%. Three macro facts did the work: foreign portfolio inflows into Indian equities reached a record $9.53 billion for November, the rupee appreciated 46 paise to 93.47 against the dollar in a second straight session, and Brent eased to about $92.68 a barrel. India VIX fell 1.02% to 15.52. The single biggest stock move was Brainbees Solutions (FirstCry), up about 11% to 13% on a Q2 loss that narrowed 75% year on year.",
    stats: [
      "Nifty +0.38%",
      "Sensex +0.52%"
    ],
    statsLabel: "Day"
  },

  weeklyWrap: null,

  dayByDay: [
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
    },
    {
      date: "2026-11-17",
      label: "Tue 17 Nov",
      niftyClose: 25387.4,
      niftyChangePct: 0.38,
      sensexChangePct: 0.52,
      note: "A second gain that the afternoon trimmed. The Nifty opened at 25,277.30, fell to 25,267.30, ran to 25,501.35 — its first print above 25,500 since February 2026 — and closed at 25,387.40, up 96.30 points or 0.38%; the Sensex traded between 82,091.90 and 82,897.49 before settling at 82,532.19, up 427.40 points or 0.52%. Breadth was negative on the NSE at 2,012 advancing against 2,148 declining, and near-even on the BSE at 1,817 up and 1,813 down, so the index rose while the median stock fell. Nifty PSU Bank was the best sector at +1.95% to 9,486.60, with Bank of Maharashtra +4.34%, Bank of India +4.12% and PNB +3.74%; Nifty Realty added 1.94% to 926.50 on pre-sales data that showed Q2 FY27 bookings up 92% year on year across the listed developers; and Nifty Bank closed at a record 62,273.25, up 697.35 points or 1.13%, after an all-time intraday high of 62,442.20. Nifty IT was the worst at -0.90% to 31,654.10 on a global selloff in AI and semiconductor shares ahead of Nvidia's results, with HCLTech -2.09% and Tech Mahindra -1.43%. India VIX fell 1.02% to 15.52. The rupee appreciated 46 paise to 93.47, Brent eased to about $92.68, and foreign portfolio inflows into Indian equities reached a record $9.53 billion for November. Brainbees Solutions (FirstCry) was the 500's biggest gainer on a Q2 loss that narrowed 75% to Rs 12.6 crore."
    }
  ],

  sectors: [
    {
      name: "Nifty PSU Bank",
      changePct: 1.95,
      note: "The day's leader, and a wide one: 9,486.60 against 9,305.30, up 181.30 points or 1.95%, after trading from 9,309.55 to 9,545.80 — a 236-point range on an index that closed 59 points below its high. Monday this index rose only 0.50% while private banks led, the first session in five in which the state-owned lenders did not; one session later the order is reversed and the gap is 106 basis points. The individual moves are the evidence: Bank of Maharashtra +4.34% to Rs 95.99, within 11 paise of its 52-week high of Rs 96.10, Bank of India +4.12% to Rs 159.28, PNB +3.74% to Rs 150.00 and within Rs 1.67 of its own 52-week high, with more than 140 stocks across the market touching 52-week highs on the day. This is the flow trade, not a margin trade — nothing in the quarter's numbers changed between Monday and Tuesday. (researchandinvest.com's 16:08 IST sector table for the close, the range and the previous close; Moneycontrol and India Today for the 1.95% and the 52-week-high count; researchandinvest's Nifty 500 gainers table for the three bank moves.)"
    },
    {
      name: "Nifty Realty",
      changePct: 1.94,
      note: "926.50 against 908.90, up 17.60 points or 1.94%, and the intraday high of 936.45 was the day's real statement: it left the index 3.10 points short of its 52-week high of 939.60, set on 10 July 2026. Moneycontrol's 12 pm reading of 935.60 and +2.87% shows how much of the move was made before lunch. The trigger was data rather than flows: Axis Direct's read across the listed developers put Q2 FY27 pre-sales at about Rs 19,523 crore, up 92% year on year, with Oberoi Realty's 360 North launch in Gurugram contributing roughly Rs 7,800 crore of that. The constituents: Signatureglobal +9.14%, Aditya Birla Real Estate +3.68%, Brigade +3.37%, Prestige +3.22%, Sobha +3.12%, Godrej Properties +2.75%, Oberoi +2.60%, DLF +1.5% and Phoenix Mills +1.2%. The index is up 12.48% in a month and down 1.72% over a year, which is the whole shape of the trade. (researchandinvest.com for the close, the range and the constituent moves; Moneycontrol for the 935.60 intraday print, the 939.60 52-week high, the pre-sales figures and the Axis Direct note; HDFC Sky for the same constituent list at 4:41 pm.)"
    },
    {
      name: "Nifty Bank",
      changePct: 1.13,
      note: "A record close, one session after the last one: 62,273.25 against 61,575.90, up 697.35 points or 1.13%, and an all-time intraday high of 62,442.20 that clears the previous intraday record of 61,764 set on 3 February 2026 by 678 points. The low of the day was 61,488.00, so the index never traded below Monday's close for long and spent the afternoon in the upper half of a 954-point range. Two days have now added 1,239 points, or 2.03%, to the index, and the sequence inside the banking complex has inverted cleanly from Monday: PSU Bank +1.95% leads, Bank +1.13% is second, Private Bank +0.89% third. The heavyweights did the work — Axis Bank +1.98% to 2.06%, SBI +1.74%, ICICI Bank +1.42%, with Reliance Industries +2.01% outside the index. (researchandinvest.com for the close, the range and the previous close; Capital Market for the record-high description; India Today and Upstox for the constituent percentages, which differ in the second decimal between providers.)"
    },
    {
      name: "Nifty Private Bank",
      changePct: 0.89,
      note: "30,512.15 against 30,242.85, up 269.30 points or 0.89%, from a 30,186.10 low to a 30,618.55 high — a 432-point range and a close 106 points below the top. It is the third-best sector and the third-best bank index, which is the reversal worth noting: on Monday private banks beat PSU banks by 38 basis points, today they trail by 106. Axis Bank +1.98% to +2.06% depending on the provider and ICICI Bank +1.42% carried it; HDFC Bank, the heaviest weight in the Nifty itself, was not among the day's named gainers. Nothing in the private-bank story deteriorated between the two sessions — the money simply moved down the credit curve for a day, which is what a record-setting Bank index plus a 1.95% PSU Bank day looks like. (researchandinvest.com for the close, the range and the previous close; India Today and Upstox for the constituent moves.)"
    },
    {
      name: "Nifty Auto",
      changePct: 0.72,
      note: "27,769.15 against 27,570.25, up 198.90 points or 0.72%, after ranging from 27,587.45 to 27,933.40. The index rose on a day when one of its largest constituents fell 4.17% — Ashok Leyland to Rs 160.50 — which tells you the move was concentrated: Eicher Motors +3.01% to Rs 7,828.00, Mahindra & Mahindra +1.98%, Exide Industries +4.01% to Rs 380.15, UNO Minda +2.97%, Sansera -3.13% and Force Motors +2.87%. Monday the index fell 1.29% on Tata Motors PV's 8.70% collapse; today it recovered a little more than half of that without Tata Motors PV, which is what a sector does when the bad news is company-specific and the buyers are looking at the rest of the list. (researchandinvest.com for the close, the range and the previous close; researchandinvest's Nifty 500 tables for the constituent moves; India Today for the +0.72%.)"
    },
    {
      name: "Nifty Financial Services",
      changePct: 0.64,
      note: "28,195.00 against 28,015.40, up 179.60 points or 0.64%, between a 27,994.75 low and a 28,350.95 high. The broad financial index rose less than Bank (+1.13%) and Private Bank (+0.89%) and more than the Nifty (+0.38%), which is the arithmetic of its composition: it holds the lenders plus insurers and asset managers, and the insurance names were mixed to weak — HDFC Life -1.56%, SBI Life -1.26% — while the capital-market and housing-finance names ran: Aditya Birla Sun Life AMC +3.07%, CAMS +2.86%, KFin +2.85%, LIC Housing +2.81%, Can Fin Homes +2.70%, AU Small Finance Bank +2.24% and RBL Bank +2.15%. Read together with PSU Bank's 1.95%, the day's financial bid was for lenders and fee earners, not for protection sellers. (researchandinvest.com for the close, the range and the previous close; researchandinvest's Nifty 500 tables for the constituent moves; Upstox and India Today for the sector percentage, printed as 0.64% and 0.6% respectively.)"
    },
    {
      name: "Nifty Media",
      changePct: 0.64,
      note: "1,774.65 against 1,763.30, up 11.35 points or 0.64%, between 1,752.65 and 1,788.45. A ten-stock index adding eleven points is close to noise, but the internals were not: Prime Focus +4.26% to Rs 279.00 and PVR INOX +2.32% to Rs 1,677.40, the latter within Rs 12.60 of its 52-week high of Rs 1,690.00 and named among the day's 52-week-high list, against Tata Communications -2.61% to Rs 1,802.20, Bharti Hexacom -2.18% and Vodafone Idea -1.84%. Monday this index rose 0.32% while the Nifty rose 0.58%; today it rose 0.64% while the Nifty rose 0.38%, so it has quietly beaten the benchmark twice. That is a two-session pattern in a basket this small, not a sector view. (researchandinvest.com for the close, the range and the previous close; researchandinvest's Nifty 500 tables for the constituent moves.)"
    },
    {
      name: "Nifty Metal",
      changePct: 0.58,
      note: "12,530.30 against 12,458.35, up 71.95 points or 0.58%, after a 12,333.25 to 12,575.85 range. The index that fell 1.50% on Monday turned on one large constituent: Adani Enterprises, which NSE classifies in this bucket, rose 3.24% to Rs 2,745.10 after its wholly owned subsidiary Adani Wind began producing a 91.2-metre turbine blade — the longest made in India — at its integrated plant in Mundra, Gujarat. RHI Magnesita +4.04% to Rs 343.50 reversed part of Monday's 9.57% fall, and Vedanta Aluminium +3.05%. Against that, Vedanta Iron and Steel -2.23% and UPL -2.09%. A 0.58% index day built from one stock's news is not a metals recovery, and the sector is still the year's laggard. (researchandinvest.com for the close, the range and the previous close; Upstox for the Adani Wind blade and the Adani Enterprises move; researchandinvest's Nifty 500 tables for the rest.)"
    },
    {
      name: "Nifty Pharma",
      changePct: 0.21,
      note: "28,157.10 against 28,098.40, up 58.70 points or 0.21%, between 28,028.65 and 28,248.60 — the smallest gain among the eight sectors that rose, and a reversal of Monday's 1.53% fall that recovers almost none of it. The internals were a wash: Laurus Labs +5.32% to Rs 2,338.00 recovered a third of Monday's 8.42% drop, but Concord Biotech -4.51%, Caplin Point -4.25%, Gland Pharma -4.06% and Sai Life Sciences -2.71% fell, and the hospital and diagnostics names that led Monday's rotation — Max Healthcare +2.08% today — are no longer in this index. Two sessions of hospital-plus-diagnostics strength against two of pharma weakness is a rotation inside healthcare, not a healthcare call, and the index level is the wrong place to look for it. (researchandinvest.com for the close, the range and the previous close; Upstox and researchandinvest's Nifty 500 tables for the constituent moves.)"
    },
    {
      name: "Nifty FMCG",
      changePct: -0.2,
      note: "47,611.60 against 47,708.10, down 96.50 points or 0.20%, after a 47,460.85 low and a 48,018.45 high. Monday's best sector at +1.87% gave back a fifth of that in one session, and the shape of the day explains why: the defensive bid that ran on Monday was replaced by a banking and realty bid on Tuesday, and the money that funds one is the money that leaves the other. Honasa Consumer +3.30% to Rs 517.80 was the exception, within Rs 6.20 of its 52-week high, and it is in the FMCG bucket. The index is still up on the week and still the second-best sector over two sessions; one down day at -0.20% is a pause, not a reversal. (researchandinvest.com for the close, the range and the previous close; researchandinvest's Nifty 500 gainers table for Honasa; India Today for the -0.20%.)"
    },
    {
      name: "Nifty IT",
      changePct: -0.9,
      note: "The day's worst sector, and the only one down more than a fifth of a percent: 31,654.10 against 31,941.05, down 286.95 points or 0.90%, from a 32,068.90 high to a 31,578.90 low. The cause was external. A selloff in global technology and AI-linked shares, with Nvidia's quarterly results still ahead, took the sector down regardless of anything Indian: HCLTech -2.09% to Rs 1,355.70, Tech Mahindra -1.43%, Infosys -1.20% to -1.39% depending on the provider, Wipro -1.89%, Birlasoft -3.27%, Oracle Financial Services -2.23%, Zensar -2.06% and LTM -1.95%, with Hexaware +2.15% the lone large gainer. There is a second, quieter pressure: the rupee appreciated 46 paise to 93.47 in a second straight session, and a stronger rupee is a margin cut for a business that bills in dollars and pays in rupees. Two sessions, two different reasons to sell the same sector. (researchandinvest.com for the close, the range and the previous close; India Today, Upstox and TrendRipperX for the constituent moves, which differ in the second decimal on Infosys; Moneycontrol for the rupee close.)"
    }
  ],

  movers: {
    universe: "Nifty 500",
    scope: "day",
    source: "NIFTY 500 price returns for the single session of Tuesday 17 November 2026, measured from the 16 November 2026 close, taken from researchandinvest.com's Nifty 500 top-gainers and top-losers tables read at their 16:08 IST final snapshot, which are built from NSE's daily bhavcopy, its corporate-action file and the Nifty 500 constituent list. The Nifty 50 names are cross-read against Upstox's 16:14 IST closing list and India Today's 16:03 IST wrap, which agree on Adani Enterprises +3.24% at Rs 2,745.10, Eicher Motors +3.01% at Rs 7,828.00, HCLTech -2.09% at Rs 1,355.70 and Power Grid -1.60%. The universe is the full 500 — Nifty 50, Nifty Next 50, Nifty Midcap 150 and Nifty Smallcap 250 together — so a name outside the headline sub-indices still ranks, and four of the ten names below are outside the Nifty 50. Three basis notes, stated because they matter. First, where providers disagree on a close this page says so in the note and, where a closing print is available from a second source, uses the one that reconciles with the day's high and low: Brainbees is the case in point, and Deepak Fertilisers, Apar Industries and Urban Company carry smaller gaps of 0.2 to 0.4 percentage points between snapshots. Second, cap tags follow NSE's size buckets where a name's index membership is unambiguous (Nifty 50 = Largecap, Nifty Midcap 150 = Midcap, Nifty Smallcap 250 = Smallcap); for names outside those buckets the tag is an approximation from market capitalisation and is not a claim of index membership. Third, the percentages are price returns from the previous close and include no adjustment for any corporate action dated today, which is the same basis the index cards use.",
    gainers: [
      {
        name: "Brainbees Solutions (FirstCry)",
        changePct: 10.59,
        cap: "Smallcap",
        note: "The Nifty 500's biggest gainer, and the one number on this page that could not be settled to a single print: stockanalysis.com's NSE price history records a Rs 175.39 close, up 10.59% from Rs 158.59, while researchandinvest's 16:08 table prints Rs 178.97 and +12.85% and Upstox's 16:17 close note says the stock closed 13% higher. The Rs 178.97 cannot be a close — the day's high was Rs 178.70 — so this page uses Rs 175.39, which reconciles with that high and with the midday prints (Capital Market had +10.65% at Rs 175.10 at 11:44 am, Business Standard +10.7% at Rs 175.67 at 12:10 pm). The trigger is company-specific and dated: Saturday's Q2 FY27 results showed revenue up 14.1% to Rs 2,395.8 crore and the net loss narrowing 75% to Rs 12.6 crore, and on Monday's call management guided to accelerating growth and recovering margins in the December quarter as diaper discounting eased. JM Financial kept a buy and cut its target to Rs 245 from Rs 255. Turnover was Rs 2,419 crore, about half the free float, and the stock is still down 39% this year. (stockanalysis.com for the close; Business Standard, Moneycontrol, Upstox and the company's NSE investor presentation for the quarter and the guidance.)"
      },
      {
        name: "Signatureglobal (India)",
        changePct: 9.14,
        cap: "Smallcap",
        note: "+9.14% to Rs 835.60, the second-best in the 500 and the extreme end of a realty day in which the sector index rose 1.94%. The arithmetic checks against the Rs 765.60 close of 16 November: 835.60 is 9.14% above it. There is no company announcement behind it in the sources checked; what there is, is a sector bid on pre-sales data — Axis Direct's read across the listed developers put Q2 FY27 bookings up 92% year on year — and a stock that had fallen for two sessions before today, sits 26.9% lower year-to-date and trades above its 20, 50 and 200-day averages after a descending-triangle breakout that Trade Brains flagged at 2:45 pm. The company's own quarter, reported on 16 November, was mixed: revenue about Rs 820 crore against Rs 330 crore, net profit about Rs 70 crore against a loss, but pre-sales down 9% and units sold down 19%. A 9% day on falling volumes is a technical and sector move, not an earnings one. (researchandinvest.com's Nifty 500 gainers table for the close; xflot and exa.ai for the Rs 765.60 previous close; MarketsMojo for the intraday path; Moneycontrol and HDFC Sky for the pre-sales context; newcitiesindia for the quarter.)"
      },
      {
        name: "Welspun Living",
        changePct: 7.92,
        cap: "Midcap",
        note: "+7.92% to Rs 265.62 on 1.22 crore shares, and the notable fact is where it closed: Rs 1.88 below its 52-week high of Rs 267.50 and 148% above its 52-week low of Rs 107.10. A home-textiles exporter at the top of its range on a day the rupee appreciated 46 paise is the counter-intuitive part — a stronger rupee is a headwind for a dollar-earning exporter — which makes this a stock-specific move rather than a currency trade. No company filing was found in the sources checked. It is the third-best gainer in the 500 and one of only two non-financial, non-realty names in the top five, which is worth keeping in view when the day's narrative is written as a banks-and-property session. (researchandinvest.com's Nifty 500 top-gainers table at 16:08 IST for the price, the percentage, the volume and the 52-week range.)"
      },
      {
        name: "Aptus Value Housing Finance India",
        changePct: 7.19,
        cap: "Smallcap",
        note: "+7.19% to Rs 188.58 on 3.07 crore shares — heavy turnover for a stock of this size — and still 39% below its 52-week high of Rs 309.00, only 10% above its low of Rs 171.32. That combination is the point: a housing-finance name near the bottom of a two-year range, moving 7% on volume, in a session when the whole financial complex was bid and the realty index rose 1.94%. It is the affordable-housing lender in a day when LIC Housing +2.81%, Can Fin Homes +2.70% and AU Small Finance Bank +2.24% also rose, so the move is a sector rotation into housing credit rather than a company event, but the magnitude is four times the sector's. No company announcement was found in the sources checked. (researchandinvest.com's Nifty 500 top-gainers table for the price, the percentage, the volume and the 52-week range.)"
      },
      {
        name: "Deepak Fertilisers & Petrochemicals",
        changePct: 6.72,
        cap: "Midcap",
        note: "+6.72% to Rs 1,443.70, the fifth-best in the 500 and the second consecutive session in this table — it was up 7.21% on Monday at Rs 1,352.80, so two days have added 14.5%. Upstox's smallcap list prints +6.45% for the same stock, a 0.27-point gap that comes from a different snapshot time; researchandinvest's 16:08 table is the later one and is used here. It closed 14.1% below its 52-week high of Rs 1,681.00 and 66.6% above its low of Rs 866.40, on 24.3 lakh shares. No company filing was found in the sources checked. The sector context is thin — Nifty Commodities rose only 0.21% — so this is two days of single-stock accumulation in an industrial chemicals and fertiliser name, and the honest read is that the cause is not in the public sources. (researchandinvest.com's Nifty 500 top-gainers table for the price, percentage and range; Upstox for the divergent +6.45% print; this page's Monday edition for the prior session's 7.21%.)"
      }
    ],
    losers: [
      {
        name: "Urban Company",
        changePct: -5.86,
        cap: "Smallcap",
        note: "-5.86% to Rs 161.63, the worst in the 500 on 2.88 crore shares — Upstox's smallcap list prints -5.47% for the same session, a 0.39-point gap between snapshots, and researchandinvest's 16:08 close is used here. The stock closed Rs 1.66 above its 52-week low of Rs 100.70 and 12.1% below its 52-week high of Rs 183.97, which puts it at the wrong end of a range that has been narrowing all year. No company announcement was found in the sources checked. The read is a consumer-platform de-rating that has not finished: a 5.9% day in a stock already 12% off its high, on heavy volume, in a session when the Nifty rose and the consumer-facing indices were flat to lower. (researchandinvest.com's Nifty 500 top-losers table at 16:08 IST for the price, percentage, volume and range; Upstox for the divergent print.)"
      },
      {
        name: "Sterlite Technologies",
        changePct: -5.0,
        cap: "Midcap",
        note: "-5.00% to Rs 641.50 on 29.1 lakh shares — Upstox prints exactly -5.00% as well, so this is the one fall on either list that two providers agree on to the decimal. It closed 39.0% below its 52-week high of Rs 1,051.10 and 658% above its low of Rs 84.60, a range that tells you what the optical-fibre and telecom-equipment trade did this year and then undid. No company filing was found in the sources checked. Nifty Media and Nifty Metal both rose today and the telecom names were mixed, with HFCL -3.59%, Bharti Hexacom -2.18% and Vodafone Idea -1.84%, so this is a sector's second-tier being sold rather than one stock breaking. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage, volume and range; Upstox for the confirming -5.00%.)"
      },
      {
        name: "India Cements",
        changePct: -4.56,
        cap: "Smallcap",
        note: "-4.56% to Rs 321.50 on 9.3 lakh shares, the third-worst in the 500 and the only construction-materials name in the bottom five on a day when its larger peers went the other way: Ambuja Cements +2.15% to Rs 390.20. It closed 33.8% below its 52-week high of Rs 485.80 and 12.2% above its low of Rs 286.50. No company announcement was found in the sources checked. A 4.6% fall against a 2.2% gain in the sector leader is the kind of divergence that is usually about a shareholder or an index weight rather than about cement demand, and nothing in the day's news supports a demand story either way. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage, volume and range.)"
      },
      {
        name: "Concord Biotech",
        changePct: -4.51,
        cap: "Smallcap",
        note: "-4.51% to Rs 554.80 on 6.9 lakh shares, and the sharpest fall in a pharma basket that ended the day almost flat — Nifty Pharma rose 0.21%. It closed 31.3% below its 52-week high of Rs 807.50 and 12.4% above its low of Rs 493.50. No company announcement was found in the sources checked. Read against the rest of the healthcare tape, this is the mirror image of Monday: then the manufacturers were sold and the hospitals bought; today Laurus Labs +5.32% and Max Healthcare +2.08% rose while Concord -4.51%, Caplin Point -4.25% and Gland Pharma -4.06% fell. A 4.5% fall inside a 0.2% sector is a stock problem wearing a sector label. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage, volume and range; researchandinvest's sector table for the Pharma close.)"
      },
      {
        name: "Apar Industries",
        changePct: -4.45,
        cap: "Midcap",
        note: "-4.45% to Rs 14,171.00 on 1.6 lakh shares — Upstox's midcap list prints -4.86%, a 0.41-point gap that is the largest divergence on either list and comes from a different snapshot; researchandinvest's 16:08 close is used. It closed 26.4% below its 52-week high of Rs 19,265.00 and 108% above its low of Rs 6,801.00, and it was the worst performer in the Nifty Midcap 100 on a day that index rose 0.25%. No company announcement was found in the sources checked. The pattern is the day's clearest rotation: conductors and cables were sold (KEI Industries -4.20%, Polycab -3.19%, Finolex Cables -1.95%, Carborundum -4.29%) while the financial and realty names they lost money to were bought. (researchandinvest.com's Nifty 500 top-losers table for the price, percentage, volume and range; Upstox for the divergent print and the Midcap 100 ranking.)"
      }
    ]
  },

  watch: [
    {
      title: "The record Bank Nifty is now the load-bearing wall of this rally",
      detail: "Nifty Bank closed at an all-time high of 62,273.25, up 697.35 points or 1.13%, one session after setting its previous record, and made an all-time intraday high of 62,442.20 — 678 points above the 61,764 record of 3 February 2026. Two sessions have added 2.03%. The composition is what to watch rather than the level: on Monday private banks led and PSU banks trailed by 38 basis points; today PSU Bank +1.95% led Bank +1.13% and Private Bank +0.89% by a wide margin, and the individual moves were in the second tier — Bank of Maharashtra +4.34% to within 11 paise of its 52-week high, Bank of India +4.12%, PNB +3.74%. A record index being carried by its smaller constituents is a flow trade, and flow trades reverse on someone else's calendar. Watch whether HDFC Bank, ICICI Bank and Axis Bank confirm the level or whether the index keeps needing the tail."
    },
    {
      title: "IT is being sold for two different reasons in two sessions, and both are still live",
      detail: "Nifty IT fell 0.90% to 31,654.10, the worst sector of the day, with HCLTech -2.09%, Tech Mahindra -1.43%, Wipro -1.89% and Infosys -1.20% to -1.39% depending on the provider. The first reason is global: a selloff in AI and semiconductor shares ahead of Nvidia's quarterly results, which hit Indian IT regardless of its own numbers. The second is domestic and quieter — the rupee appreciated 46 paise to 93.47 in a second straight session, and every 1% of rupee strength is roughly 20 to 30 basis points off an IT margin. Both pressures point the same way and neither has resolved. Watch the Nvidia print and the rupee together: a strong Nvidia number with a stronger rupee would leave Indian IT caught between a better sentiment and a worse translation."
    },
    {
      title: "November's foreign inflow is now a record $9.53 billion, and the exit door is narrow",
      detail: "Foreign portfolio investors have bought a record $9.53 billion of Indian equities this month, according to Reuters' reading of depository data, which has taken the Nifty up about 10.1% and the Sensex 10.8% in November and put both at their highest close since February. Monday alone saw Rs 4,864.68 crore of net FII buying against Rs 3,519.05 crore of net DII selling. The mechanism matters more than the number: a flow this large is a flow that can reverse on a global event, and the triggers named in the coverage are all external — AI-stock weakness, crude, the dollar. On top of that, SEBI was reported on Tuesday to be considering restrictions on leveraged stock purchases through the margin trading facility, which would remove one domestic source of the same bid. Watch the daily depository prints, not the monthly headline."
    },
    {
      title: "Realty's 1.94% was earned on pre-sales data, and the rate risk has not gone away",
      detail: "Nifty Realty rose 1.94% to 926.50, within 3.10 points of its 52-week high, after Axis Direct's read across the listed developers put Q2 FY27 pre-sales at about Rs 19,523 crore, up 92% year on year — a number flattered by one launch, Oberoi Realty's 360 North in Gurugram, which contributed roughly Rs 7,800 crore. Strip that out and the sector grew modestly, and Signatureglobal's own quarter showed pre-sales down 9% and units down 19% even as its stock rose 9.14%. The index is up 12.48% in a month and down 1.72% over a year. The thing to watch is the one Axis Direct itself flagged: an interest-rate hike environment is unfavourable for the sector, and October CPI at 6.09% has already put a December repo decision in play. Pre-sales momentum and a rising cost of money cannot both be right for long."
    }
  ],

  reads: [
    {
      title: "Sensex, Nifty recover US-Iran war losses: 5 reasons behind market rally as Nifty hits 9-month high",
      source: "CNBC TV18",
      url: "https://www.cnbctv18.com/market/sensex-nifty-recover-us-iran-war-losses-5-reasons-behind-market-rally-as-nifty-hits-9-month-high-20035910.htm"
    },
    {
      title: "Taking Stock: Markets extend gains; Nifty ends near 25,400, Sensex jumps 427 pts",
      source: "Moneycontrol",
      url: "https://www.moneycontrol.com/news/business/stocks/taking-stock-markets-extend-gains-nifty-ends-near-25-400-sensex-jumps-427-pts-14082389.html"
    },
    {
      title: "Dalal Street extends winning streak; Sensex up 427 points, Nifty above 25,350",
      source: "India Today",
      url: "https://www.indiatoday.in/business/market/story/dalal-street-extends-winning-streak-sensex-up-427-points-nifty-above-25350-3040722-2026-11-17"
    },
    {
      title: "Top gainers and losers, Nov 17: Adani Ent, Eicher Motors jump 3%, HCLTech, Power Grid fall 2%; check list",
      source: "Upstox",
      url: "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-nov-17-adani-ent-eicher-motors-jump-3-hcl-tech-power-grid-fall-2-check-list/article-203584/"
    },
    {
      title: "Realty, PSU Bank Stocks Lead Sectoral Rally",
      source: "HDFC Sky",
      url: "https://hdfcsky.com/news/sectoral-snapshot-today-november-17-2026-realty-psu-banks-lead-rally-it-stocks-drag"
    }
  ],

  ratio: {
    name: "Asset Turnover",
    category: "Efficiency / capital productivity",
    company: "Infosys Ltd",
    companyNote: "IT services · Nifty 50 / Nifty 500",
    period: "Every figure is from Infosys' Integrated Annual Report 2025-26 (FY26), the audited consolidated financial statements prepared under Indian Accounting Standards (Ind AS), in rupees crore. The report's printed page numbers run 30 ahead of the PDF page number, so in the PDF every page cited below is 30 lower than the printed number you see in the report (printed p. 317 = PDF p. 287, printed p. 318 = PDF p. 288, printed p. 319 = PDF p. 289); every page cited below is the printed page number. Revenue covers the years ended 31 March 2026 and 31 March 2025; total assets are the Consolidated Balance Sheet at those two dates.",
    report: {
      label: "Download the Infosys Integrated Annual Report 2025-26 (PDF) and follow along",
      url: "https://www.infosys.com/investors/reports-filings/annual-report/annual/documents/infosys-ar-26.pdf"
    },
    formula: "Asset Turnover = revenue from operations ÷ average total assets, the average taken across the opening and the closing balance sheet. Both choices are deliberate. The numerator is revenue from operations, not total income, because other income is what the cash earns and not what the assets do — including it would flatter the ratio in a year of high treasury yields and would not be comparable across companies. The denominator is total assets averaged over the year for the same reason it is averaged in return on assets: the revenue was earned across twelve months and the balance sheet is a single day's photograph.",
    formulaNote: "This is the other half of yesterday's ratio, and it is the half that decides what kind of company you are looking at. Return on assets splits exactly into net margin × asset turnover, and Infosys is the clean illustration of a business that earns its return on the margin side rather than the volume side: 16.50% of every rupee of revenue becomes profit, and every rupee of assets produces only 1.17 rupees of revenue in a year. A supermarket runs the same identity from the other end — a 3% margin on four or five turns. Neither is better. What matters is which half the company is playing, because that is the half a competitor, a currency or a regulator can attack. Infosys defends a margin, not a shelf.",
    inputsLabel: "The numbers we need, straight from the report",
    inputs: [
      {
        label: "Revenue from operations, FY26 — the numerator",
        value: "Rs 1,78,650 crore",
        page: "p. 318"
      },
      {
        label: "Revenue from operations, FY25 — the prior-year top line, for the like-for-like check",
        value: "Rs 1,62,990 crore",
        page: "p. 318"
      },
      {
        label: "Total assets, 31 March 2026 — the closing balance sheet",
        value: "Rs 1,55,967 crore",
        page: "p. 317"
      },
      {
        label: "Total assets, 31 March 2025 — the opening balance sheet",
        value: "Rs 1,48,903 crore",
        page: "p. 317"
      },
      {
        label: "Total current assets, 31 March 2026 — two-thirds of the asset base",
        value: "Rs 1,03,489 crore",
        page: "p. 317"
      },
      {
        label: "Trade receivables, 31 March 2026 — the largest single current asset",
        value: "Rs 35,234 crore",
        page: "p. 317"
      },
      {
        label: "Cash and cash equivalents, 31 March 2026 — the second-largest",
        value: "Rs 22,201 crore",
        page: "p. 317"
      }
    ],
    working: "Step 1 — Take the numerator off the Consolidated Statement of Profit and Loss: revenue from operations is Rs 1,78,650 crore for FY26 and Rs 1,62,990 crore for FY25 (printed p. 318). Step 2 — Take the denominator off the Consolidated Balance Sheet: total assets are Rs 1,55,967 crore at 31 March 2026 and Rs 1,48,903 crore at 31 March 2025 (p. 317). Step 3 — Average the denominator: (1,55,967 + 1,48,903) ÷ 2 = Rs 1,52,435 crore. Step 4 — Divide: 1,78,650 ÷ 1,52,435 = 1.1720, so 1.17 turns of the balance sheet in a year. Step 5 — Run the variants so you can see what each choice costs. On closing assets instead of average: 1,78,650 ÷ 1,55,967 = 1.1454 turns. For FY25 on the same closing basis: 1,62,990 ÷ 1,48,903 = 1.0946 turns. Like for like, the ratio improved from 1.09 to 1.15 turns in a year, which is the same 4.6% improvement the average-assets version shows against a FY25 figure this page cannot compute, because it would need the FY24 balance sheet. Step 6 — Close the loop with yesterday's ratio: net margin 29,474 ÷ 1,78,650 = 16.50% (p. 318), times 1.1720 turns = 19.33% return on assets on average total assets (p. 317 and p. 318). The identity reproduces the earlier number exactly — 29,474 ÷ 1,52,435 = 19.33% — because the revenue cancels; rounding the margin to 16.50% before multiplying gives 19.34%, which is the rounding, not the ratio. Step 7 — Say what the turns are made of. Of the Rs 1,55,967 crore of assets, Rs 1,03,489 crore is current and Rs 52,478 crore is not (p. 317), so 66.4% of everything Infosys owns is working capital and cash rather than plant. Trade receivables of Rs 35,234 crore are 72.0 days of revenue (35,234 ÷ 1,78,650 × 365), and cash of Rs 22,201 crore is 14.2% of total assets. The asset base is a billing cycle and a bank balance, not a factory.",
    result: "1.17 turns of average total assets in FY26 — Rs 1,78,650 crore of revenue on an average asset base of Rs 1,52,435 crore, against 1.15 turns on the closing balance sheet and 1.09 turns for FY25 on the same closing basis. Read with yesterday's ratio it closes exactly: 16.50% net margin × 1.1720 turns = 19.33% return on assets, the same figure the direct division gives. Two-thirds of the assets being turned are current assets, and 72 days of the year's revenue sits in trade receivables.",
    meaning: "One rupee of assets producing one rupee and seventeen paise of revenue a year is a low number by industrial standards and the correct one for a software business — a steel plant turns its assets less than once, a retailer four or five times, and Infosys sits at the low end because the thing it sells does not need a balance sheet to make. That is not a weakness; it is the reason a 16.50% net margin can compound into a 19.33% return on assets and a 31% return on equity without a rupee of borrowing. The number to keep is 72 days: the receivables book is Rs 35,234 crore, which is 22.6% of the assets and 72 days of billings, so the constraint on this business is how fast its clients pay, not how much plant it owns. A company with 1.17 turns has no capex story to tell; every improvement in its return has to come from price, utilisation of people, or the speed of collection.",
    crossCheck: "Two checks and one honest gap. The first is the numerator: Screener.in's consolidated profit-and-loss for Infosys, read on 17 November 2026, prints sales of Rs 1,78,650 crore for March 2026 and Rs 1,62,990 crore for March 2025 — identical to the report to the rupee, which is the strongest kind of confirmation, and its quarterly sum for FY26 (6,924 + 7,375 + 6,666 + 8,509) comes to Rs 29,474 crore of net profit, again matching the report. The second is the denominator: Screener totals Infosys' March 2026 assets at Rs 1,54,288 crore, Rs 1,679 crore less than the audited Rs 1,55,967 crore, and a turnover rebuilt on its base and the report's revenue is 1,78,650 ÷ 1,54,288 = 1.158 turns against our 1.17 — a 0.4% gap that is entirely its asset aggregation. The gap is convention rather than arithmetic: providers differ on closing versus average assets, and the four defensible FY26 answers are 1.17 on average assets, 1.15 on closing assets, and 1.16 on Screener's asset base on either basis. Screener's key-ratio panel publishes ROCE of 40.0% and ROE of 31.9% but no asset-turnover line, so there is no provider print to quote directly; the reconciliation is rebuilt from its own sales and asset lines, and the identity check against yesterday's return on assets is what closes the loop internally.",
    source: "Infosys Ltd, Integrated Annual Report 2025-26, Consolidated Financial Statements under Ind AS for the year ended 31 March 2026: Consolidated Balance Sheet, printed p. 317 (PDF p. 287), for total assets of Rs 1,55,967 crore at 31 March 2026 and Rs 1,48,903 crore at 31 March 2025, total current assets of Rs 1,03,489 crore, total non-current assets of Rs 52,478 crore, trade receivables of Rs 35,234 crore and cash and cash equivalents of Rs 22,201 crore; and the Consolidated Statement of Profit and Loss, printed p. 318 (PDF p. 288), for revenue from operations of Rs 1,78,650 crore for FY26 and Rs 1,62,990 crore for FY25 and for profit for the year of Rs 29,474 crore, continuing on printed p. 319 (PDF p. 289) for the profit attributable to the owners of the company. Cross-checked against Screener.in's Infosys consolidated page read on 17 November 2026, whose sales of Rs 1,78,650 crore and Rs 1,62,990 crore and quarterly net-profit sum of Rs 29,474 crore match the report exactly, and whose March 2026 asset total of Rs 1,54,288 crore differs from the audited figure by Rs 1,679 crore."
  }
};
