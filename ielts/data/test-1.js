/* IELTS Listening Practice — Test 1. 40 questions in four parts.
   Schema: parts[{n, title, ctx, speakers{id:{n,g,acc}}, groups[…], script[…]}]
   script lines: {nar} narrator · {pause:s} reading time · {sp, t, tts?} speech.
   [[n|text]] marks where the answer to question n is heard (one per question). */
window.IELTS = window.IELTS || {};
window.IELTS["test-1"] = {
  slug: "test-1",
  title: "Test 1",
  blurb: "Booking a party venue, a nature-reserve orientation, a study-spaces project and a lecture on the nineteenth-century ice trade.",
  parts: [

  /* ─────────────────────────────── PART 1 ─────────────────────────────── */
  {
    n: 1,
    title: "Hiring a room",
    ctx: "A man calls a community center to book a room for a party.",
    speakers: {
      R: { n: "Receptionist", g: "f", acc: "en-US" },
      C: { n: "Daniel", g: "m", acc: "en-GB" }
    },
    groups: [
      {
        type: "form", from: 1, to: 6,
        instr: "Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
        limit: { w: 1, num: true },
        title: "Riverside Community Center · Room Booking",
        rows: [
          ["Name", "Daniel {1}"],
          ["Contact number", "{2}"],
          ["Date", "Saturday, March {3}"],
          ["Event", "60th birthday party"],
          ["Number of guests", "{4}"],
          ["Room", "the {5} Room"],
          ["Hire includes", "tables, chairs and use of the {6}"]
        ],
        ans: {
          1: ["Halvorsen"],
          2: ["0917 482 330", "0917482330"],
          3: ["15", "15th", "fifteenth"],
          4: ["85", "eighty-five"],
          5: ["Willow"],
          6: ["kitchen"]
        }
      },
      {
        type: "short", from: 7, to: 10,
        instr: "Answer the questions below. Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.",
        limit: { w: 2, num: true },
        items: [
          { n: 7, q: "By what time must guests leave the building?" },
          { n: 8, q: "What must Daniel show when he collects the keys?" },
          { n: 9, q: "How much is the deposit?" },
          { n: 10, q: "On which day will Daniel visit the center?" }
        ],
        ans: {
          7: ["11:30", "11.30", "11:30 pm", "11.30 pm", "11:30pm", "11.30pm", "11:30 p.m.", "eleven thirty"],
          8: ["photo ID", "photo identification", "photographic ID", "ID"],
          9: ["$150", "150", "150 dollars"],
          10: ["Thursday"]
        }
      }
    ],
    script: [
      { nar: "Part 1. You will hear a telephone conversation between a man who wants to hire a room and a receptionist at a community center. First, you have some time to look at questions 1 to 6." },
      { pause: 30 },
      { nar: "Now listen carefully and answer questions 1 to 6." },
      { sp: "R", t: "Good morning, Riverside Community Center. This is Megan speaking. How can I help you?" },
      { sp: "C", t: "Oh, hi. I’m calling about hiring one of your rooms for a party. A friend of mine had her wedding reception there last year, and she said it was great." },
      { sp: "R", t: "That’s nice to hear. I can certainly help you with that. Let me just open a booking form. Could I start with your name, please?" },
      { sp: "C", t: "Sure. It’s Daniel Halvorsen." },
      { sp: "R", t: "Could you spell the surname for me?" },
      { sp: "C", t: "Yes, it’s [[1|H-A-L-V-O-R-S-E-N]]." },
      { sp: "R", t: "Thank you, Mr. Halvorsen. And what’s the best number to reach you on?" },
      { sp: "C", t: "My cell is probably best. It’s [[2|0917 482 330]].", tts: "My cell is probably best. It’s oh nine one seven, four eight two, three three oh." },
      { sp: "R", t: "Got it. And what date are you thinking of?" },
      { sp: "C", t: "It’s a Saturday — the fourteenth of March. No, wait, sorry, I’m looking at the wrong calendar. The fourteenth is a Friday. It’s Saturday the [[3|fifteenth]]." },
      { sp: "R", t: "Saturday the fifteenth of March. Let me check… yes, we still have rooms available that evening. What sort of event is it?" },
      { sp: "C", t: "It’s my father’s sixtieth birthday. We’re planning a surprise party, so he doesn’t know anything about it yet." },
      { sp: "R", t: "How lovely. And roughly how many guests are you expecting?" },
      { sp: "C", t: "Well, we sent out seventy invitations, but a lot of people are bringing partners, so it’s looking more like [[4|eighty-five]]." },
      { sp: "R", t: "Eighty-five. Okay, that rules out the Oak Room, I’m afraid. It only holds sixty people. But the [[5|Willow]] Room on the ground floor takes up to a hundred and twenty, and it opens onto the garden." },
      { sp: "C", t: "The garden sounds perfect. Let’s go with that one." },
      { sp: "R", t: "Great. The charge for an evening is three hundred and twenty dollars, and that includes tables, chairs and use of the [[6|kitchen]]. The sound system is extra, though." },
      { sp: "C", t: "How much extra?" },
      { sp: "R", t: "Forty dollars. But most people bring their own speaker these days." },
      { sp: "C", t: "I think we’ll do that, then." },
      { nar: "Before you hear the rest of the conversation, you have some time to look at questions 7 to 10." },
      { pause: 30 },
      { nar: "Now listen and answer questions 7 to 10." },
      { sp: "C", t: "Can I ask about timing? What time can we get in to set up?" },
      { sp: "R", t: "You can have access from four in the afternoon. The party itself can go on until eleven, and then guests need to be out of the building by [[7|eleven thirty]], because the caretaker locks up at midnight." },
      { sp: "C", t: "Eleven thirty. That should be fine. My dad’s not really a late-night person anyway." },
      { sp: "R", t: "Now, you’ll need to collect the keys the day before. You don’t need to bring the booking confirmation, because we’ll have it on file, but you will need to show some [[8|photo ID]]. A driver’s license or a passport is fine." },
      { sp: "C", t: "Okay. And is there a deposit?" },
      { sp: "R", t: "Yes. To secure the room, we take a deposit of [[9|one hundred and fifty dollars]]. You get that back after the event, as long as there’s no damage. Some places charge two hundred, so we’re quite reasonable." },
      { sp: "C", t: "That’s fine. Can I pay it now, over the phone?" },
      { sp: "R", t: "You can, or you can pay when you come in. Actually, would you like to come and see the room first? A lot of people do." },
      { sp: "C", t: "Yes, I’d like that. I work late on Mondays and Tuesdays. Would Wednesday be possible?" },
      { sp: "R", t: "We’re closed to visitors on Wednesdays for cleaning, unfortunately. How about [[10|Thursday]]? Any time after ten." },
      { sp: "C", t: "Thursday works. I’ll come in the morning and pay the deposit then." },
      { sp: "R", t: "Perfect. I’ll put a note on your booking. See you on Thursday, Mr. Halvorsen." },
      { sp: "C", t: "Thanks so much. Bye." },
      { nar: "That is the end of Part 1. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 2 ─────────────────────────────── */
  {
    n: 2,
    title: "Volunteering at a nature reserve",
    ctx: "A volunteer coordinator welcomes new volunteers to a nature reserve.",
    speakers: {
      J: { n: "Joanne", g: "f", acc: "en-AU" }
    },
    groups: [
      {
        type: "mc", from: 11, to: 14,
        instr: "Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
        items: [
          { n: 11, q: "Before it became a nature reserve, the site was mainly used for", o: ["farming.", "extracting gravel.", "storing water."], a: 1 },
          { n: 12, q: "Most of the reserve’s funding comes from", o: ["the city.", "the café.", "its members."], a: 2 },
          { n: 13, q: "In their first year, volunteers will mainly", o: ["repair paths and fences.", "carry out bird surveys.", "lead guided walks."], a: 0 },
          { n: 14, q: "Volunteers are asked to bring their own", o: ["waterproof clothing.", "gloves.", "water bottle."], a: 2 }
        ]
      },
      {
        type: "map", from: 15, to: 20,
        instr: "Label the map below. Write the correct letter, <b>A–H</b>, next to questions 15–20.",
        title: "Hollin Marsh Nature Reserve",
        letters: "ABCDEFGH",
        svg: `<svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of Hollin Marsh Nature Reserve">
  <rect class="m-bg" x="1" y="1" width="598" height="458" rx="10"/>
  <path class="m-wood" d="M440 18 L590 18 L590 250 L505 250 L462 205 L445 130 Z"/>
  <text class="m-lbl" x="548" y="236">Woodland</text>
  <ellipse class="m-path" cx="280" cy="170" rx="175" ry="100"/>
  <ellipse class="m-water" cx="280" cy="170" rx="140" ry="68"/>
  <text class="m-lbl m-big" x="280" y="176">Lake</text>
  <line class="m-path" x1="455" y1="170" x2="525" y2="110"/>
  <circle class="m-clear" cx="525" cy="105" r="24"/>
  <line class="m-path" x1="280" y1="270" x2="280" y2="300"/>
  <line class="m-path" x1="280" y1="350" x2="280" y2="440"/>
  <line class="m-path" x1="190" y1="400" x2="280" y2="400"/>
  <rect class="m-bld" x="230" y="300" width="100" height="50" rx="4"/>
  <text class="m-lbl" x="280" y="329">Visitor center</text>
  <rect class="m-bld2" x="192" y="310" width="38" height="30" rx="3"/>
  <rect class="m-bld2" x="330" y="310" width="38" height="30" rx="3"/>
  <rect class="m-bld2" x="305" y="382" width="36" height="28" rx="3"/>
  <rect class="m-car" x="40" y="365" width="150" height="70" rx="6"/>
  <text class="m-lbl" x="115" y="404">Car park</text>
  <line class="m-gate" x1="262" y1="440" x2="298" y2="440"/>
  <text class="m-lbl" x="280" y="456">Main entrance</text>
  <g class="m-north"><line x1="40" y1="60" x2="40" y2="28"/><path d="M33 36 L40 24 L47 36 Z"/><text x="40" y="76">N</text></g>
  <g class="m-key"><circle cx="211" cy="325" r="13"/><text x="211" y="330">A</text></g>
  <g class="m-key"><circle cx="349" cy="325" r="13"/><text x="349" y="330">B</text></g>
  <g class="m-key"><circle cx="105" cy="170" r="13"/><text x="105" y="175">C</text></g>
  <g class="m-key"><circle cx="280" cy="70" r="13"/><text x="280" y="75">D</text></g>
  <g class="m-key"><circle cx="455" cy="170" r="13"/><text x="455" y="175">E</text></g>
  <g class="m-key"><circle cx="525" cy="105" r="13"/><text x="525" y="110">F</text></g>
  <g class="m-key"><circle cx="110" cy="342" r="13"/><text x="110" y="347">G</text></g>
  <g class="m-key"><circle cx="323" cy="396" r="13"/><text x="323" y="401">H</text></g>
</svg>`,
        items: [
          { n: 15, q: "Café", a: "B" },
          { n: 16, q: "Volunteers’ room", a: "H" },
          { n: 17, q: "Bird hide", a: "D" },
          { n: 18, q: "Tool store", a: "E" },
          { n: 19, q: "Picnic area", a: "F" },
          { n: 20, q: "First-aid point", a: "A" }
        ]
      }
    ],
    script: [
      { nar: "Part 2. You will hear a woman talking to a group of new volunteers at a nature reserve. First, you have some time to look at questions 11 to 14." },
      { pause: 30 },
      { nar: "Now listen carefully and answer questions 11 to 14." },
      { sp: "J", t: "Good morning, everyone, and welcome to Hollin Marsh Nature Reserve. My name’s Joanne Pryce, and I coordinate the volunteer program here. Thank you all for giving up your Saturday morning. Before we head outside, I’d like to tell you a little about the reserve and what you’ll be doing over the next few months." },
      { sp: "J", t: "Some of you may know that this site wasn’t always a nature reserve. People often assume it was farmland, and it’s true that a few cows grazed around the edges. But for most of the twentieth century, this was actually a [[11|gravel quarry]]. When the digging stopped in the 1980s, there was a plan to turn the site into a reservoir. That never happened. Instead, the old pits filled with rainwater, and the wildlife moved in almost immediately." },
      { sp: "J", t: "These days, the reserve is run by a charitable trust. We do get a small grant from the city, but it covers less than a tenth of our costs. By far the biggest share of our income comes from [[12|membership fees]]. The café makes a contribution too, though not nearly as much as people imagine." },
      { sp: "J", t: "Now, what will you actually be doing? I know several of you put down bird surveys as your first choice on the application form. I’m afraid those are carried out by our trained ecologists, so they’re not something volunteers can join, at least not in your first year. The guided walks are led by staff, too. What we really need help with is [[13|maintaining the paths and fences]]. It isn’t glamorous, but without it, visitors simply can’t get around the site." },
      { sp: "J", t: "A quick word about what to wear. We provide gloves and all the tools, and there are waterproof jackets in the volunteers’ room if you need one. Most of you have sensible boots on today, which is great. The one thing we ask you to bring yourselves is a [[14|refillable water bottle]]. We stopped selling plastic bottles in the café two years ago, and we’d like volunteers to set an example." },
      { nar: "Before you hear the rest of the talk, you have some time to look at questions 15 to 20." },
      { pause: 30 },
      { nar: "Now listen and answer questions 15 to 20." },
      { sp: "J", t: "Right. If you look at the map in your information pack, I’ll show you where everything is. We’re in the visitor center now, which is straight ahead of you as you come in through the main entrance. The [[15|café is attached to the right-hand side of this building]], as you face it from the entrance, so you can grab a coffee before you start." },
      { sp: "J", t: "Your base will be the volunteers’ room. A lot of people expect it to be in here, but in fact it’s the [[16|small wooden building just inside the main gate, on your right as you come in]], so it’s on the opposite side of the path from the car park." },
      { sp: "J", t: "The bird hide is the place most visitors want to see. There used to be one on the western shore of the lake, but it was badly damaged in a storm last winter, and it’s been taken down. So the [[17|main hide is now on the far side of the lake, at the northern end]], directly opposite the visitor center." },
      { sp: "J", t: "Every morning, you’ll collect your equipment from the tool store. That’s [[18|on the eastern shore, at the point where the lakeside path meets the edge of the woodland]]. Please make sure you sign everything out and back in again." },
      { sp: "J", t: "We used to have picnic tables just north of the car park, but we moved them because of the traffic noise. The [[19|picnic area is now in the clearing in the middle of the woodland]], and it’s a lovely spot for your lunch break." },
      { sp: "J", t: "And finally, safety. The first-aid kit and the emergency phone are kept in the [[20|small extension on the left-hand side of the visitor center]], next to the restrooms. If anyone is hurt, go there first, and then let a member of staff know." },
      { sp: "J", t: "Okay, that’s everything for now. Let’s go and meet the rest of the team." },
      { nar: "That is the end of Part 2. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 3 ─────────────────────────────── */
  {
    n: 3,
    title: "A study-spaces project",
    ctx: "Two students, Lena and Marcus, discuss their research project with their tutor.",
    speakers: {
      T: { n: "Tutor", g: "m", acc: "en-AU" },
      L: { n: "Lena", g: "f", acc: "en-US" },
      M: { n: "Marcus", g: "m", acc: "en-GB" }
    },
    groups: [
      {
        type: "mc2", from: 21, to: 22,
        instr: "Choose <b>TWO</b> letters, <b>A–E</b>.",
        q: "Which <b>TWO</b> problems did the students have with their questionnaire?",
        o: [
          "It was too long.",
          "Some questions were understood in different ways.",
          "Too few people replied.",
          "It was sent out at a bad time.",
          "There was no space for comments."
        ],
        a: [1, 3]
      },
      {
        type: "match", from: 23, to: 26,
        instr: "What does the tutor say about each source? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to questions 23–26.",
        title: "Comments",
        opts: [
          ["A", "It is out of date."],
          ["B", "It is too general."],
          ["C", "It is based on a small sample."],
          ["D", "It may not be objective."],
          ["E", "Part of it is worth quoting directly."],
          ["F", "It is difficult to get hold of."]
        ],
        items: [
          { n: 23, q: "the university’s own survey", a: "C" },
          { n: 24, q: "the magazine article", a: "D" },
          { n: 25, q: "the government report", a: "A" },
          { n: 26, q: "the textbook chapter", a: "E" }
        ]
      },
      {
        type: "mc", from: 27, to: 30,
        instr: "Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
        items: [
          { n: 27, q: "The students have decided to observe the study spaces", o: ["at lunchtime.", "early in the morning.", "late in the evening."], a: 0 },
          { n: 28, q: "The tutor says photographs of the spaces will be most useful for", o: ["measuring how full they are.", "recording how the furniture is arranged.", "illustrating the final presentation."], a: 1 },
          { n: 29, q: "The students disagree about", o: ["how many spaces to visit.", "whether to interview staff.", "how to present their findings."], a: 2 },
          { n: 30, q: "What will the students do next?", o: ["contact the library staff", "redesign the questionnaire", "start the literature review"], a: 0 }
        ]
      }
    ],
    script: [
      { nar: "Part 3. You will hear two students, Lena and Marcus, talking to their tutor about a research project on how students use study spaces. First, you have some time to look at questions 21 to 26." },
      { pause: 30 },
      { nar: "Now listen carefully and answer questions 21 to 26." },
      { sp: "T", t: "Come in, both of you. So, how’s the study-spaces project going?" },
      { sp: "L", t: "Pretty well, I think. We’ve had the questionnaire responses back, but honestly, some of the results were a bit disappointing." },
      { sp: "T", t: "In what way?" },
      { sp: "M", t: "Well, we were worried the questionnaire was too long. It had twenty-five questions. But actually, that wasn’t a problem. Almost everyone who started it finished it." },
      { sp: "L", t: "The real issue was the wording of a couple of questions. For example, we asked how often people used the quiet zones, and it turned out half of them didn’t know which areas we meant. So [[21|people interpreted some of the questions in completely different ways]]." },
      { sp: "M", t: "And the timing was bad. We [[22|sent it out during exam week]], so I think a lot of people just ignored the email at first." },
      { sp: "T", t: "How many responses did you get in the end?" },
      { sp: "L", t: "A hundred and forty, which is actually more than we were hoping for." },
      { sp: "T", t: "That’s a healthy number. And did you give people space to add their own comments?" },
      { sp: "M", t: "Yes, there was a box at the end, and quite a few people used it." },
      { sp: "T", t: "Good. Now, let’s talk about your background reading. You’ve listed four main sources here. Let’s start with the university’s own survey from last year." },
      { sp: "L", t: "We thought that would be really useful, because it’s about this campus." },
      { sp: "T", t: "It’s certainly relevant, but bear in mind that [[23|only about thirty students took part]], so I wouldn’t base any big claims on it." },
      { sp: "M", t: "Okay. What about the magazine article? It had some great figures on noise levels." },
      { sp: "T", t: "It’s a lively read, but think about who wrote it. The journalist was writing on behalf of a [[24|company that sells library furniture]], so there may be a commercial angle. Use it carefully." },
      { sp: "L", t: "Right. And the government report on university facilities?" },
      { sp: "T", t: "People sometimes say it’s too general, but it actually has a whole chapter on study spaces. The real problem is that it was [[25|published in 2004]]. Students’ habits have changed enormously since then. Think about laptops and phones." },
      { sp: "M", t: "And the chapter by Hartley in the course textbook?" },
      { sp: "T", t: "That’s the strongest of the four, in my view, and it’s easy to find. There are several copies in the library. Her definition of a learning space is so precise that I’d [[26|use her exact words in your introduction]] rather than paraphrase them." },
      { nar: "Before you hear the rest of the discussion, you have some time to look at questions 27 to 30." },
      { pause: 30 },
      { nar: "Now listen and answer questions 27 to 30." },
      { sp: "T", t: "So what are your plans for the observation stage?" },
      { sp: "M", t: "We were going to go in the evenings, because that’s when we usually study. But the main library closes at nine now, so there wouldn’t be much to see." },
      { sp: "L", t: "And early mornings are almost empty. So we’ve decided to [[27|go at lunchtime]], between twelve and two, because that’s when it’s busiest." },
      { sp: "T", t: "Sensible. While you’re there, I’d take photographs of each space. Not of the students, obviously. You’d need permission for that." },
      { sp: "M", t: "We thought about that. Could we use the photos to count how many seats are taken?" },
      { sp: "T", t: "You could, but a simple tally sheet is quicker for counting. The real value of photos is that they [[28|show exactly how the tables and chairs are laid out]], which you’ll forget otherwise. And please don’t think of them as decoration for your presentation." },
      { sp: "L", t: "Okay. We both agree that four spaces is enough to visit, and we’ll interview two members of the library staff as well." },
      { sp: "T", t: "Good. Is there anything you don’t agree on?" },
      { sp: "M", t: "Well, [[29|Lena wants to present the results as bar charts]], and I think a floor plan with the data marked on it would be much clearer." },
      { sp: "L", t: "I just think charts are easier to compare." },
      { sp: "T", t: "You could do both, but you’ll need to decide before you start writing up. So, what’s your next step?" },
      { sp: "L", t: "We were going to start on the literature review this week." },
      { sp: "T", t: "I’d leave that for now. The library staff are very busy at this time of year, so I’d [[30|contact them today and book a time to talk]]. The reading can wait a few days. And your questionnaire is finished, so don’t start changing it now." },
      { sp: "M", t: "Okay. I’ll email them this afternoon." },
      { nar: "That is the end of Part 3. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 4 ─────────────────────────────── */
  {
    n: 4,
    title: "The ice trade",
    ctx: "A lecture on the history of the trade in natural ice.",
    speakers: {
      P: { n: "Lecturer", g: "m", acc: "en-US" }
    },
    groups: [
      {
        type: "notes", from: 31, to: 40,
        instr: "Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.",
        limit: { w: 1, num: false },
        title: "The nineteenth-century ice trade",
        lines: [
          "## Origins",
          "1806: first shipment of ice from Boston to the Caribbean",
          "First cargo mostly melted: there was no {31} on the island",
          "## Solving the problems",
          "Insulation: ice was packed in {32}, a cheap waste product",
          "Harvested in winter, mainly from {33}",
          "1820s: a horse-drawn {34} cut the ice into identical blocks",
          "Tight stacking meant less {35} on long voyages",
          "## Markets and effects",
          "1833: ice reached {36} in India",
          "In cities, the biggest change was to people’s {37}",
          "Breweries could produce {38} all year round",
          "Homes kept ice in a wooden {39}",
          "## Decline",
          "Main reason: fear of {40} in lakes and rivers"
        ],
        ans: {
          31: ["storage"],
          32: ["sawdust"],
          33: ["ponds", "pond"],
          34: ["plow", "plough"],
          35: ["melting"],
          36: ["Calcutta", "Kolkata"],
          37: ["diet", "diets"],
          38: ["beer"],
          39: ["icebox", "ice-box"],
          40: ["pollution"]
        }
      }
    ],
    script: [
      { nar: "Part 4. You will hear a lecture about the history of the ice trade. You now have some time to look at questions 31 to 40." },
      { pause: 45 },
      { nar: "Now listen carefully and answer questions 31 to 40." },
      { sp: "P", t: "Good afternoon. Today I want to look at an industry that most people have never heard of, but which changed the way millions of people ate and drank in the nineteenth century: the trade in natural ice." },
      { sp: "P", t: "Before refrigerators, ice was a luxury. Wealthy families in cold climates sometimes cut ice from frozen lakes in winter and kept it underground, but the idea of selling it on a large scale, let alone shipping it across oceans, seemed absurd." },
      { sp: "P", t: "The trade really began in 1806, when a young Boston merchant sent a ship loaded with ice to the Caribbean island of Martinique. People laughed at him, and in a sense they were right. The ice arrived in reasonable condition, but there was nowhere to keep it. The island had no [[31|storage]] of any kind, so most of the cargo simply melted on the dock, and he lost a great deal of money." },
      { sp: "P", t: "Over the next twenty years, he and others solved the problem step by step. They experimented with straw, with rice husks, even with seaweed. But the material that worked best was [[32|sawdust]]. It was an excellent insulator, and because it was a waste product from the lumber mills of New England, it cost almost nothing." },
      { sp: "P", t: "The ice itself was harvested in winter, mostly from [[33|ponds]] near Boston. Rivers were tried, but the moving water produced uneven ice that was full of dirt." },
      { sp: "P", t: "Harvesting was slow and dangerous work until the 1820s, when a new tool appeared: a horse-drawn ice [[34|plow]]. It cut grooves into the surface in a grid pattern, so that the ice could be broken into blocks of exactly the same size." },
      { sp: "P", t: "That might sound like a small detail, but it made a huge difference. Identical blocks could be stacked together with almost no gaps between them, and less air between the blocks meant much less [[35|melting]] during long voyages." },
      { sp: "P", t: "By the 1830s, ships were carrying New England ice halfway around the world. The most famous voyage reached [[36|Calcutta]], in India, in 1833, after four months at sea, with around two-thirds of the cargo still intact." },
      { sp: "P", t: "So what effect did all this ice have on ordinary people? In American cities, the most important change was to people’s [[37|diet]]. For the first time, families could keep meat, milk and butter fresh for several days, even in summer, and fruit and vegetables could be brought in from farms much farther away." },
      { sp: "P", t: "Ice also transformed some industries. Fishing boats could stay at sea for longer, and breweries, which had always struggled in hot weather, could now make [[38|beer]] all year round." },
      { sp: "P", t: "At home, ice was delivered several times a week by the iceman, who carried the blocks inside and placed them in a wooden [[39|icebox]]: a kind of cupboard lined with metal, with the ice at the top and the food below." },
      { sp: "P", t: "Then, toward the end of the century, the trade began to decline. Mechanical refrigeration is usually given as the reason, and it certainly played a part, but the early machines were expensive and unreliable. In fact, the bigger problem was public confidence. As cities and factories grew, sewage and industrial waste flowed into the same lakes and rivers that supplied the ice, and doctors began to warn that natural ice could spread disease. It was this fear of [[40|pollution]] that finally pushed customers toward ice made in factories from clean, filtered water." },
      { sp: "P", t: "By the 1920s, the natural ice trade had all but disappeared. But for about a hundred years, it was one of America’s most surprising exports. Next week, we’ll look at how mechanical refrigeration developed." },
      { nar: "That is the end of Part 4. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  }
  ]
};
