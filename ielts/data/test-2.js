/* IELTS Listening Practice — Test 2. 40 questions in four parts.
   Schema: parts[{n, title, ctx, speakers{id:{n,g,acc}}, groups[…], script[…]}]
   script lines: {nar} narrator · {pause:s} reading time · {sp, t, tts?} speech.
   [[n|text]] marks where the answer to question n is heard (one per question). */
window.IELTS = window.IELTS || {};
window.IELTS["test-2"] = {
  slug: "test-2",
  title: "Test 2",
  blurb: "Applying for a festival job, a radio report on a reopened library, a food-waste project and a lecture on bioluminescence.",
  parts: [

  /* ─────────────────────────────── PART 1 ─────────────────────────────── */
  {
    n: 1,
    title: "A summer festival job",
    ctx: "A student calls a music festival to ask about summer work.",
    speakers: {
      K: { n: "Kieran", g: "m", acc: "en-AU" },
      B: { n: "Bianca", g: "f", acc: "en-GB" }
    },
    groups: [
      {
        type: "form", from: 1, to: 5,
        instr: "Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
        limit: { w: 1, num: true },
        title: "Harbor Lights Festival · Staff Application",
        rows: [
          ["Name", "Bianca {1}"],
          ["Address", "42 {2} Road"],
          ["Currently studying", "{3} at City College"],
          ["Work experience", "weekends in a {4}"],
          ["Available from", "June {5}"]
        ],
        ans: {
          1: ["Ferreira"],
          2: ["Kingsley"],
          3: ["architecture"],
          4: ["bakery"],
          5: ["21", "21st", "twenty-first"]
        }
      },
      {
        type: "table", from: 6, to: 10,
        instr: "Complete the table below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
        limit: { w: 1, num: true },
        head: ["Job", "Location", "Pay per hour", "Notes"],
        rows: [
          ["Ticket checker", "the {6} entrance", "$16", "early start"],
          ["Food stall assistant", "food court", "${7}", "needs a food hygiene {8}"],
          ["Information desk", "next to the main {9}", "$16", "must speak another {10}"]
        ],
        ans: {
          6: ["riverside"],
          7: ["17.50", "17.5", "$17.50"],
          8: ["certificate"],
          9: ["stage"],
          10: ["language"]
        }
      }
    ],
    script: [
      { nar: "Part 1. You will hear a telephone conversation between a student who wants a summer job and an organizer at a music festival. First, you have some time to look at questions 1 to 5." },
      { pause: 30 },
      { nar: "Now listen carefully and answer questions 1 to 5." },
      { sp: "K", t: "Hello, Harbor Lights Festival. Kieran speaking." },
      { sp: "B", t: "Hi. I saw your ad for summer staff online, and I wanted to ask about applying." },
      { sp: "K", t: "Great, we’re still recruiting. I can take some details now and then tell you about the jobs that are left. Is that okay?" },
      { sp: "B", t: "Yes, perfect." },
      { sp: "K", t: "So, your name first." },
      { sp: "B", t: "It’s Bianca Ferreira. The surname is [[1|F-E-R-R-E-I-R-A]]." },
      { sp: "K", t: "Double R, and then E, I, R, A at the end?" },
      { sp: "B", t: "That’s right." },
      { sp: "K", t: "And your address?" },
      { sp: "B", t: "It’s 42 Kingsley Road. That’s [[2|K-I-N-G-S-L-E-Y]]." },
      { sp: "K", t: "Thanks. Are you working or studying at the moment?" },
      { sp: "B", t: "I’m a student. I’m in my second year of [[3|architecture]] at City College. I originally applied for engineering, but I switched after the first semester." },
      { sp: "K", t: "And have you worked at events before?" },
      { sp: "B", t: "Not at a festival. But I’ve worked weekends in a café for a year. Well, actually, it’s a [[4|bakery]], but we serve coffee as well, so I’m used to dealing with customers." },
      { sp: "K", t: "That’s really useful. When would you be able to start?" },
      { sp: "B", t: "My exams finish on June eighteenth, but I’m going away with my family for a couple of days after that. So I’d be free from the [[5|twenty-first]]." },
      { sp: "K", t: "That works, because the festival starts on the twenty-fifth, and we do the training the weekend before." },
      { nar: "Before you hear the rest of the conversation, you have some time to look at questions 6 to 10." },
      { pause: 30 },
      { nar: "Now listen and answer questions 6 to 10." },
      { sp: "K", t: "Now, let me tell you about the jobs we still need to fill. There are three. The first is ticket checker. That’s at the [[6|riverside]] entrance, not the main gate. The main gate is all done by scanners now." },
      { sp: "B", t: "Okay." },
      { sp: "K", t: "It pays sixteen dollars an hour, and it’s an early start. You’d need to be there by seven. The second is food stall assistant, in the food court. That one pays a bit more: [[7|seventeen fifty]] an hour." },
      { sp: "B", t: "Do you need any special training for that?" },
      { sp: "K", t: "You don’t need experience, but you do need a food hygiene [[8|certificate]]. It’s an online course. It takes about three hours, and we pay for it." },
      { sp: "B", t: "And the third one?" },
      { sp: "K", t: "The information desk. That’s next to the main [[9|stage]], so it gets pretty loud. It’s the same pay as ticket checking, sixteen an hour. For that one, we ask that people speak another [[10|language]] as well as English, because we get a lot of international visitors." },
      { sp: "B", t: "Well, I speak Portuguese, so that might be the one for me." },
      { sp: "K", t: "Sounds ideal. I’ll email you the application form today." },
      { nar: "That is the end of Part 1. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 2 ─────────────────────────────── */
  {
    n: 2,
    title: "A library reopens",
    ctx: "A local radio presenter reports on a library that has just been renovated.",
    speakers: {
      S: { n: "Presenter", g: "m", acc: "en-GB" }
    },
    groups: [
      {
        type: "mc", from: 11, to: 13,
        instr: "Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
        items: [
          { n: 11, q: "The renovation took longer than planned because", o: ["there was not enough money.", "the roof needed extra work.", "historical remains were found."], a: 2 },
          { n: 12, q: "What is new about the library’s opening hours?", o: ["It now opens on Sundays.", "It closes later on weekdays.", "It opens earlier on Saturdays."], a: 0 },
          { n: 13, q: "Members can now borrow up to", o: ["ten items.", "fifteen items.", "twenty items."], a: 1 }
        ]
      },
      {
        type: "mc2", from: 14, to: 15,
        instr: "Choose <b>TWO</b> letters, <b>A–E</b>.",
        q: "Which <b>TWO</b> services are free for library members?",
        o: [
          "printing",
          "using the 3D printer",
          "borrowing a laptop",
          "language classes",
          "booking a meeting room"
        ],
        a: [2, 4]
      },
      {
        type: "match", from: 16, to: 20,
        instr: "Which floor is each of the following on? Write the correct letter, <b>A–D</b>, next to questions 16–20. You may use any letter more than once.",
        title: "Floors",
        opts: [
          ["A", "basement"],
          ["B", "ground floor"],
          ["C", "first floor"],
          ["D", "second floor"]
        ],
        items: [
          { n: 16, q: "recording studio", a: "A" },
          { n: 17, q: "café", a: "D" },
          { n: 18, q: "children’s library", a: "C" },
          { n: 19, q: "exhibition space", a: "B" },
          { n: 20, q: "quiet study room", a: "D" }
        ]
      }
    ],
    script: [
      { nar: "Part 2. You will hear part of a local radio program about a library that has recently reopened. First, you have some time to look at questions 11 to 13." },
      { pause: 20 },
      { nar: "Now listen carefully and answer questions 11 to 13." },
      { sp: "S", t: "And now on City Talk, some good news for book lovers. After almost two years of building work, Westgate Library reopens to the public this Saturday, and I went along for a preview." },
      { sp: "S", t: "The renovation was supposed to take twelve months. The money was all in place from the start, and the new roof went on exactly on schedule. But when the builders lifted the old floor in the basement, they found [[11|the remains of a medieval wall]], and archaeologists had to be called in. That added almost a year to the project." },
      { sp: "S", t: "So what’s changed for visitors? Well, the weekday hours are exactly the same as before, nine till eight, and on Saturdays it still opens at nine. But for the first time in its history, [[12|the library will be open on Sundays]], from eleven till four." },
      { sp: "S", t: "Borrowing limits have changed too. Members used to be able to take out ten items at a time. There was some talk of doubling that to twenty, but in the end, the library settled on [[13|fifteen]], which still seems pretty generous to me." },
      { nar: "Before you hear the rest of the program, you have some time to look at questions 14 to 20." },
      { pause: 30 },
      { nar: "Now listen and answer questions 14 to 20." },
      { sp: "S", t: "Let’s talk about services. Printing is still ten cents a page, and there’s a new 3D printer, which costs a small fee depending on how much material you use. But two things are completely free for members. You can [[14|borrow a laptop]] for up to four hours, and you can [[15|book one of the meeting rooms]], which is great news for local clubs." },
      { sp: "S", t: "The language classes are back as well, although they now charge forty dollars a term." },
      { sp: "S", t: "The layout has been completely reorganized, too. Down in the basement, next to that medieval wall, which is now on display behind glass, there’s a brand-new [[16|recording studio]], where you can make podcasts or music." },
      { sp: "S", t: "The café used to be on the ground floor, by the entrance, and a lot of people assumed it would stay there. But it’s moved [[17|right to the top of the building, on the second floor]], so you get a view over the river with your coffee." },
      { sp: "S", t: "The children’s library has been given much more space. It’s [[18|one floor up from the entrance, on the first floor]], with its own storytelling corner." },
      { sp: "S", t: "The ground floor, where the café used to be, has been turned into an [[19|exhibition space for local artists]], and the first show opens next month." },
      { sp: "S", t: "And if you need total silence, the quiet study room is up [[20|on the second floor as well, at the opposite end from the café]]." },
      { sp: "S", t: "The official opening is at ten on Saturday morning, and there’ll be free face painting for the kids. Well worth a visit." },
      { nar: "That is the end of Part 2. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 3 ─────────────────────────────── */
  {
    n: 3,
    title: "A food-waste project",
    ctx: "Two students, Priya and Jake, discuss their project on food waste with their tutor.",
    speakers: {
      T: { n: "Tutor", g: "f", acc: "en-AU" },
      P: { n: "Priya", g: "f", acc: "en-GB" },
      J: { n: "Jake", g: "m", acc: "en-US" }
    },
    groups: [
      {
        type: "mc", from: 21, to: 24,
        instr: "Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
        items: [
          { n: 21, q: "Why did the students choose this topic?", o: ["A lecturer recommended it.", "They read a news story about it.", "One of them works in a cafeteria."], a: 1 },
          { n: 22, q: "What surprised the students about previous research?", o: ["It mainly focused on households.", "Most of it came from Europe.", "It did not include students’ views."], a: 2 },
          { n: 23, q: "The tutor thinks last year’s cafeteria data is", o: ["useful for comparison.", "unreliable.", "too detailed."], a: 0 },
          { n: 24, q: "What will the students change about their schedule?", o: ["They will start earlier.", "They will visit fewer cafeterias.", "They will observe for longer."], a: 2 }
        ]
      },
      {
        type: "flow", from: 25, to: 30,
        instr: "Complete the flow chart below. Write <b>ONE WORD ONLY</b> for each answer.",
        limit: { w: 1, num: false },
        title: "Collecting the data",
        steps: [
          "Get written permission from the catering {25}",
          "Collect plates after lunch and weigh the leftovers on digital {26}",
          "Record the weight and type of food in a {27}",
          "Take {28} of some typical plates",
          "Interview about 20 students, mainly about portion {29}",
          "Present the results to the university’s {30} committee"
        ],
        ans: {
          25: ["manager"],
          26: ["scales", "scale"],
          27: ["spreadsheet"],
          28: ["photos", "photographs", "pictures"],
          29: ["sizes", "size"],
          30: ["sustainability"]
        }
      }
    ],
    script: [
      { nar: "Part 3. You will hear two students, Priya and Jake, talking to their tutor about a research project on food waste. First, you have some time to look at questions 21 to 24." },
      { pause: 30 },
      { nar: "Now listen carefully and answer questions 21 to 24." },
      { sp: "T", t: "Hi, Priya. Hi, Jake. Have a seat. So, you’ve settled on food waste in the campus cafeterias for your project?" },
      { sp: "J", t: "Yeah. People assume we picked it because I work in the cafeteria, but I actually quit that job last year." },
      { sp: "P", t: "It was really [[21|an article in the local newspaper]] that got us interested. It said the university throws away about two tons of food every week." },
      { sp: "T", t: "Goodness. I wondered whether Professor Lane had suggested it. It’s very much her area." },
      { sp: "J", t: "No, we haven’t talked to her about it yet." },
      { sp: "T", t: "And what did you find when you looked at previous research?" },
      { sp: "P", t: "Quite a lot, actually. We expected most of it to be about households, but there’s plenty on schools and hospitals too. And it isn’t just European. There are good studies from Asia and Australia." },
      { sp: "J", t: "What surprised us was that [[22|almost none of the studies asked students what they thought]]. They just weighed the waste." },
      { sp: "T", t: "That’s a real gap, and a good reason for your interviews. Now, the catering department gave you their figures from last year, didn’t they?" },
      { sp: "P", t: "Yes, but we weren’t sure whether to use them. They only show the total weight per week." },
      { sp: "T", t: "They’re not very detailed, that’s true, but they were collected carefully. I’d use them [[23|as a baseline to compare your own figures against]]." },
      { sp: "J", t: "Okay. Then there’s the timetable. We planned to observe for one week in each cafeteria, starting on the tenth." },
      { sp: "T", t: "One week is quite short. Food waste goes up and down a lot. Fridays are very different from Mondays, for example." },
      { sp: "P", t: "We could cut it down to two cafeterias instead of three?" },
      { sp: "T", t: "I’d rather you kept all three. Could you start any earlier?" },
      { sp: "J", t: "Not really. We need ethics approval first, and that won’t come through until the ninth." },
      { sp: "T", t: "Then I think you’ll have to [[24|run the observation for two weeks instead of one]]." },
      { sp: "P", t: "Okay. That’s doable." },
      { nar: "Before you hear the rest of the discussion, you have some time to look at questions 25 to 30." },
      { pause: 30 },
      { nar: "Now listen and answer questions 25 to 30." },
      { sp: "T", t: "Now, talk me through your method." },
      { sp: "J", t: "First, we need written permission. We’ve spoken to the chefs, and they’re happy to help, but they said it has to come from the catering [[25|manager]]." },
      { sp: "P", t: "Then, at the end of each lunch period, we collect the plates before they’re washed, scrape the leftovers into bags and weigh them on digital [[26|scales]]. We’re borrowing them from the chemistry department." },
      { sp: "J", t: "We record the weight and the type of food. We were going to use a notebook, but we’ll enter everything straight into a [[27|spreadsheet]] on a tablet, so it’s easier to analyze." },
      { sp: "T", t: "Good. Will you take pictures?" },
      { sp: "P", t: "Yes. We’ll take [[28|photos]] of a few typical plates each day, so we can show what kinds of food are left." },
      { sp: "T", t: "And the interviews?" },
      { sp: "J", t: "We’ll talk to about twenty students and ask them mainly about portion [[29|sizes]]: whether they’re served more than they can eat." },
      { sp: "T", t: "And who are you presenting the results to?" },
      { sp: "P", t: "Originally, just our class. But the university’s [[30|sustainability]] committee has asked to see them, so we’ll present to them as well." },
      { sp: "T", t: "Excellent. That could actually change something." },
      { nar: "That is the end of Part 3. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  },

  /* ─────────────────────────────── PART 4 ─────────────────────────────── */
  {
    n: 4,
    title: "Bioluminescence",
    ctx: "A lecture on living things that produce their own light.",
    speakers: {
      L: { n: "Lecturer", g: "f", acc: "en-US" }
    },
    groups: [
      {
        type: "sentences", from: 31, to: 36,
        instr: "Complete the sentences below. Write <b>ONE WORD ONLY</b> for each answer.",
        limit: { w: 1, num: false },
        items: [
          "Bioluminescence is the result of a {31} reaction inside the organism.",
          "Light is produced when luciferin combines with {32}.",
          "Most of the light produced in the deep sea is {33}.",
          "This color can travel the greatest {34} through seawater.",
          "Light on a fish’s underside hides its {35} from predators below.",
          "The anglerfish attracts prey with a glowing {36}."
        ],
        ans: {
          31: ["chemical"],
          32: ["oxygen"],
          33: ["blue"],
          34: ["distance"],
          35: ["outline"],
          36: ["lure"]
        }
      },
      {
        type: "summary", from: 37, to: 40,
        instr: "Complete the summary below. Write <b>ONE WORD ONLY</b> for each answer.",
        limit: { w: 1, num: false },
        title: "Defense and other uses",
        text: "Some deep-sea shrimp escape from predators by releasing a glowing {37}. Near the surface, plankton light up when the water is {38}, which may attract larger {39} that eat the plankton’s predators. In industry, an enzyme from fireflies is used to detect {40} on food equipment.",
        ans: {
          37: ["cloud"],
          38: ["disturbed"],
          39: ["fish"],
          40: ["bacteria"]
        }
      }
    ],
    script: [
      { nar: "Part 4. You will hear a lecture about bioluminescence. You now have some time to look at questions 31 to 40." },
      { pause: 45 },
      { nar: "Now listen carefully and answer questions 31 to 40." },
      { sp: "L", t: "Good morning. Today’s topic is bioluminescence: the ability of living things to produce their own light. Most of us have seen it in fireflies on a summer evening, but the vast majority of bioluminescent species actually live in the ocean, and particularly in the deep sea." },
      { sp: "L", t: "Let’s begin with how it works. Bioluminescence isn’t a form of heat, and it doesn’t involve electricity. It’s the result of a [[31|chemical]] reaction that takes place inside the organism, usually in special cells or organs." },
      { sp: "L", t: "Two substances are essential. The first is a molecule called luciferin, and the second is an enzyme called luciferase. When the enzyme helps luciferin to combine with [[32|oxygen]], energy is released in the form of light. Very little heat is produced, which is why it’s sometimes called cold light." },
      { sp: "L", t: "Now, if you could travel a thousand meters down, you’d notice that almost all of this light is [[33|blue]]. There’s a good reason for that. Red and yellow light are absorbed by seawater within a few meters, but blue light can travel the greatest [[34|distance]] through the water, so it’s the most useful color for animals that want to be seen, or to see." },
      { sp: "L", t: "One recent survey of animals filmed off the coast of California found that around three-quarters of them could produce light. So why is it so common? Researchers have identified several functions." },
      { sp: "L", t: "The first is camouflage, which might seem strange. Surely light makes you more visible? But think about a fish swimming a few hundred meters down. A predator below it looks up and sees the fish as a dark shape against the faint light from the surface. Many fish solve this problem by producing light on their undersides, which hides their [[35|outline]]. It works a little like an invisibility cloak." },
      { sp: "L", t: "The second function is hunting. The best-known example is the anglerfish, which has a long spine on its head with a glowing [[36|lure]] at the tip. Small fish swim toward the light, expecting food, and are swallowed whole." },
      { sp: "L", t: "Third, light is used for defense. Squid often escape by squirting ink, but in total darkness, black ink is useless. So some deep-sea shrimp release a glowing [[37|cloud]] instead, which confuses the predator while the shrimp swims away." },
      { sp: "L", t: "Not all bioluminescence happens in the deep, though. On some beaches, the waves glow blue at night. This is caused by tiny plankton that light up whenever the water is [[38|disturbed]], whether by a wave, a boat or a swimmer." },
      { sp: "L", t: "Why would plankton do this? The most widely accepted explanation is known as the burglar alarm theory. When a small animal starts eating the plankton, the flash of light attracts larger [[39|fish]], which then eat the animal that was feeding. In other words, the plankton are calling for help." },
      { sp: "L", t: "Finally, bioluminescence has some very practical uses. The light-producing enzyme from fireflies is now used in laboratories all over the world. Food companies, for example, use it to detect [[40|bacteria]] on surfaces and equipment, because the reaction gives off light when it meets a molecule found in all living cells." },
      { sp: "L", t: "Medical researchers use the same enzyme to follow the growth of tumors, but that’s a topic for next week." },
      { nar: "That is the end of Part 4. You now have half a minute to check your answers." },
      { pause: 30 }
    ]
  }
  ]
};
