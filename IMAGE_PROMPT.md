# Parent image_gen prompts — v2

The parent Codex desktop session generated this original 20-story newspaper on 18 November 2026, then corrected generated fiscal-year labels in story 06. This build session only normalized the final supplied image. The earlier six-story prompt remains in git history. Both prompts below are actual recorded inputs, not reconstructions. The supplied correction-prompt text file contained `undefined`; the correction below was extracted directly from the parent native custom tool call.

## Generation prompt

Use case: infographic-diagram. Create an original, exceptionally polished, densely informative illustrated newspaper FRONT PAGE as a perfectly square flat image, designed to stay readable at 1024x1024. This is a world-news digest of TUESDAY 17 NOVEMBER 2026. It must look like a meticulously typeset international broadsheet, with handsome black editorial serif headlines, restrained navy and rust red section labels, crisp thin rules, warm ivory paper, clean ink, generous tiny gutters. No perspective, folds, mockup, fake texture, watermark, or copied newspaper logo. Original symbolic editorial illustrations, not purported news photographs. Prioritize accurate readable text and a strong hierarchy over illustration area.

Masthead top: "THE WORLD DAILY" in strong elegant serif, with tiny kicker "INDEPENDENT ILLUSTRATED NEWS DIGEST". Below, very prominent date "TUESDAY 17 NOVEMBER 2026". Small edition line "20 STORIES • WORLD EDITION • A DAY IN CONTEXT". Date must be correct, Tuesday.

Design: roughly top 12% masthead; next 25% three main stories across with horizontal compact editorial illustrations, strong headlines and two-line explanations. Next 35% a precise 3-column x 3-row grid of nine smaller illustrated reports, each a small icon or scene next to real headline and explanatory line. Next 23% bottom newspaper briefs, arranged in two clean columns four stories each, with small numbered red labels and no filler pseudo-text. Final 5% source strip. Stories numbered 01 through 20 exactly once. Body copy crisp black, not gray, never decorative unreadable squiggles. All supplied text below is in our own words and must be rendered faithfully. You may intelligently line-wrap; do not invent extra factual claims. Main headlines about 24px at 1024; grid headlines 17-20px, briefs 14-16px, body 13-15px. Keep the whole image balanced like a real information-rich paper. All text fits without collisions.

MAIN LEADS, left to right:
01 EUROPE • UKRAINE
Headline "Ukraine says Kerch bridge span destroyed"
Body "Reuters verifies damage footage. Kyiv claims a span and arch fell; Russian accounts dispute the extent."
Art: simplified actual Kerch Strait bridge crossing blue water, damaged road gap, small location inset Crimea/Russia; no graphic casualties. Small source Reuters.

02 MIDDLE EAST • GAZA
Headline "Fragile Gaza truce faces UN warning"
Body "Board of Peace tells the Security Council the ceasefire could collapse without implementation."
Art: UN chamber silhouette above aid trucks and tents; no claim ceasefire already collapsed. Source AP.

03 ASIA • DIPLOMACY
Headline "Quad leaders meet in Manila"
Body "US, India, Japan and Australia back secure sea lanes, cables and technology cooperation."
Art: four correctly drawn small national flags at summit table, Manila locator. Source White House / Japan MFA. Do not claim a critical-minerals deal, not established in the release.

NINE SMALLER REPORTS in 3x3 grid:
04 CLIMATE • ANTALYA
"COP31 draft exposes divisions"
"Finance and fossil fuels remain disputed; talks continue."
Art conference globe, heat and funding symbols. Source Le Monde / UNFCCC.

05 TRADE • BEIJING
"China rejects US chip curbs"
"17 Nov response criticizes controls announced on 16 Nov."
Art microchip separated by trade barrier. Source China MFA.

06 BUSINESS • UNITED STATES
"Nvidia quarterly sales double"
"$115.8bn revenue, up 103% year on year; fiscal Q3 results."
Art chip and simple two-bar comparison labeled "$57.0bn" and "$115.8bn", no stock price inference. Source Nvidia, 17 Nov.

07 HEALTH • AMERICAS
"PAHO urges measles action"
"Close vaccination gaps and halt outbreaks, agency urges."
Art vaccine and simple Americas silhouette. Source PAHO, 17 Nov. Do not invent numbers or revoked statuses.

08 AFRICA • SUDAN
"UN documents civilian toll"
"2,230+ killed Jan–Oct; 1,630+ by drones. Actual toll likely higher."
Art protective civilian silhouettes, report document, small drone icon; sober non-graphic. Source UN OHCHR, 17 Nov report. Numbers explicitly period totals, NOT daily deaths.

09 POLITICS • MONGOLIA
"President says he will resign"
"Khurelsukh denies railway graft claims; parliament must accept."
Art Mongolia flag and resignation document. Source AP, 17 Nov.

10 MIGRATION • CANARY ISLANDS
"Atlantic arrivals surge"
"11,000+ reached the islands in November's first half."
Art small rescue boat/route Atlantic to Canary Islands. Source AP, reported 17 Nov. Explicit period, not daily arrivals.

11 WEATHER • PACIFIC
"Xavier threatens northern Cooks"
"Severe cyclone strengthens; no direct threat to Fiji reported."
Art weather swirl with northern Cook Islands locator, geographically east of Fiji in South Pacific. Source Fiji Met / PACNEWS, 17 Nov. No landfall or casualty claims.

12 JUSTICE • MOZAMBIQUE
"Mondlane goes on trial"
"Opposition leader faces charges linked to 2024 unrest."
Art Mozambique flag, courtroom scales. Source AP, 17 Nov. Allegations, no conviction claim.

EIGHT BRIEFS, four in each bottom column, concise real text:
13 "MUMBAI • EARTHSHOT" — "Five environmental winners receive £1m each at the awards ceremony. (AP)"
14 "FRANCE • PROTESTS" — "146,000 march, ministry says; CGT counts over 500,000. (Reuters)"
15 "SPORT • BRAZIL 7–0 SINGAPORE" — "Vinicius Jr hits a hat-trick in the Singapore friendly. (CNA)"
16 "KENYA • HUMANITARIAN AID" — "WFP reports food support for people who fled Ethiopian violence. (UN News)"
17 "UK • SETTLEMENT SANCTIONS" — "Eight construction firms and Gaza aid-blocking group Tzav 9 targeted. (AP)"
18 "YEMEN • ADEN DEFENCES" — "Saudi-backed forces reinforce positions to deter Houthi attacks. (AP)"
19 "ITALY • ANTISEMITISM LAW" — "Parliament passes law; critics warn of limits on political speech. (AP)"
20 "JERUSALEM • VATICAN ENVOY" — "Pope's envoy brings support to Holy Land Christians. (AP)"

Tiny disciplined footer: "EVENTS & REPORTS FROM 17 NOVEMBER 2026 • PERIOD TOTALS LABELLED • CLAIMS ATTRIBUTED"
"Sources: Reuters · AP · UN / OHCHR · PAHO · UNFCCC · Le Monde · China & Japan MFA · White House · Nvidia · Fiji Met · CNA"
All facts, date and qualifiers must remain faithful. No invented dummy paragraphs, no new numbers or random unlabeled charts, no extraneous headline. Clear newspaper information density with 12 distinct small original spot illustrations, all 20 stories legible.


## Correction prompt

Edit this newspaper image with ONE precise factual correction only. In story 06, the Nvidia two-bar chart currently labels the bars Q3 FY2025 and Q3 FY2026. Those fiscal years are wrong. Change the text UNDER the left $57.0bn bar to 'Q3 FY2026', and change the text UNDER the right $115.8bn bar to 'Q3 FY2027'. Keep both dollar amounts, bar heights, Nvidia story headline/body and the rest of the newspaper EXACTLY unchanged: all 20 stories, source labels, typography, layout, date TUESDAY 17 NOVEMBER 2026, all illustrations. Do not alter any other text or claim. The earnings report on17November2026 is fiscalQ3 2027 compared with fiscalQ3 2026. Carefully preserve sharp readable type throughout.
