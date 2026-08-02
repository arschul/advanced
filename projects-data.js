/* ===================================================================
   ADVANCED PROJECT LAB — canonical catalogue
   Loaded by:  /advanced/project-lab.html
               /tools/teacher-dashboard/teacher-dashboard.html
   Both pages are served from arschul.github.io, so a plain
   <script src="/advanced/projects-data.js"> works from either.

   Do not renumber step ids once a project has been assigned to a
   class: run records freeze a copy of the milestones, but reused ids
   with different meanings would corrupt progress on live runs.
   Bump `version` on a project when its steps change materially.
   =================================================================== */

var ADVANCED_PROJECTS_META = {
  version: 1,
  updated: "2026-08-02"
};

/* Shared rubric. Every project is scored on these four criteria plus
   one project-specific criterion (see `extra` on each project).
   Bands are 1-4; the dashboard averages them and maps to a letter. */
var PROJECT_RUBRIC = [
  { id: "lang",     label: "Language range & accuracy", labelPt: "Linguagem",    bands: [
      "Relies on memorised phrases; errors block meaning.",
      "Manages the task with simple language; frequent errors, meaning usually clear.",
      "Uses the target language of the project with reasonable accuracy; errors do not block meaning.",
      "Wide range, including the project's target structures used naturally; errors are rare and self-corrected." ] },
  { id: "task",     label: "Task completion",           labelPt: "Cumprimento",  bands: [
      "Several deliverables missing or unfinished.",
      "Most deliverables present but thin or rushed.",
      "All deliverables complete and to brief.",
      "All deliverables complete, with genuine care and at least one thing beyond the brief." ] },
  { id: "collab",   label: "Collaboration",             labelPt: "Colaboração",  bands: [
      "Left the work to others or worked alone against the team.",
      "Did an assigned share, but needed chasing.",
      "Reliable team member; met deadlines and helped others.",
      "Drove the team forward; unblocked others and raised the standard of the work." ] },
  { id: "delivery", label: "Delivery",                  labelPt: "Apresentação", bands: [
      "Read from the page; inaudible or unrehearsed.",
      "Delivered the content but with little contact with the audience.",
      "Clear, audible, mostly unscripted; handled questions.",
      "Confident and engaging; handled unexpected questions fluently." ] }
];

var PROJECT_BANDS = ["Below", "Approaching", "Meets", "Exceeds"];

/* ------------------------------------------------------------------
   Project schema
   id, version, icon, title, hook, level, hours, teamSize, theme,
   skills[], tags[], scenario, deliverables[],
   stages[ { id, name, hours, focus, steps[ { n, text } ] } ],
   extra { id, label, note }, phrases[], notes
   ------------------------------------------------------------------ */
var ADVANCED_PROJECTS = [

/* ============================ 1 ================================= */
{
  id: "invention-pitch",
  version: 1,
  icon: "\uD83D\uDE80",
  title: "The Invention Pitch",
  hook: "One product, one shot, and a room full of investors looking for holes.",
  level: "B1+",
  hours: 8,
  teamSize: "3-4",
  theme: "Business & enterprise",
  skills: ["speaking", "design", "writing"],
  tags: ["invention", "startup", "pitch", "shark tank", "marketing", "logo", "product", "company", "advertising"],
  scenario: "Your team is a start-up with one product and one shot. In two weeks you present to a room of investors — your classmates and your teacher — who decide whether to fund you. They will try to find the holes in your idea, so you had better find them first.",
  deliverables: [
    "A labelled drawing or model of the invention, with a spec sheet",
    "Company name, logo and two brand colours",
    "A twenty-word mission statement and a slogan",
    "A storyboarded and performed 60-second TV advert",
    "An honest list of three drawbacks, with your answers to them",
    "A live investor pitch with unscripted questions"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Agreeing and delegating — shall we / why don't we / I'd rather / that's down to you",
      steps: [
        { n: 1, text: "Read the brief; each member writes down one everyday thing that annoys them" },
        { n: 2, text: "Share all the annoyances aloud; the team keeps three" },
        { n: 3, text: "Assign roles: Product Lead, Design Lead, Marketing Lead, Money Lead" },
        { n: 4, text: "Name the team (this is not the company name yet)" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Comparatives and evaluation — the problem with X is / it already exists but / far more effective than",
      steps: [
        { n: 6, text: "For each of your three problems, find out whether a solution already exists" },
        { n: 7, text: "Write one sentence on why each existing solution is not good enough" },
        { n: 8, text: "Choose ONE problem. Write the problem statement in 25 words or fewer" },
        { n: 9, text: "Sketch three rough versions of your invention" },
        { n: 10, text: "Vote and commit to one. Write down why you rejected the other two" }
      ] },
    { id: "s3", name: "Build the Core", hours: 2,
      focus: "Describing function and purpose — it works by -ing / it allows you to / it is designed for",
      steps: [
        { n: 11, text: "Draw or model the invention with a label on every part" },
        { n: 12, text: "Write the spec sheet: size, materials, power, price" },
        { n: 13, text: "Write the how-it-works paragraph (80-100 words)" },
        { n: 14, text: "Define your user: who buys this, how old they are, why they need it" },
        { n: 15, text: "Explain in one sentence what your invention does that nothing else does" },
        { n: 16, text: "Show the draft to another team; write down the first question they ask" }
      ] },
    { id: "s4", name: "Company & Identity", hours: 1.5,
      focus: "Brand language and formal register — we stand for / our mission is to / built for people who",
      steps: [
        { n: 17, text: "Name the company; check the name means nothing embarrassing in Portuguese or English" },
        { n: 18, text: "Design the logo (hand-drawn is fine) and choose two brand colours" },
        { n: 19, text: "Write the mission statement in 20 words, with no cliches" },
        { n: 20, text: "Write the slogan: produce five options, keep one" },
        { n: 21, text: "Storyboard the 60-second TV advert in six frames" },
        { n: 22, text: "Write the advert script with lines assigned to each team member" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Concession and hedging — admittedly / it is true that / one drawback is / we would argue that",
      steps: [
        { n: 23, text: "List three genuine drawbacks: cost, safety, environment, or who it excludes" },
        { n: 24, text: "For each drawback, write your honest answer to it" },
        { n: 25, text: "Predict the three hardest questions the investors will ask" },
        { n: 26, text: "Swap with another team; they attack your idea for five minutes while you take notes" },
        { n: 27, text: "Fix one weakness they exposed" }
      ] },
    { id: "s6", name: "Present", hours: 1,
      focus: "Signposting and handling questions — moving on to / to come back to your point / I'm glad you asked",
      steps: [
        { n: 28, text: "Build the pitch: problem, solution, company, advert, drawbacks, the ask" },
        { n: 29, text: "Write the 30-second version in case you are cut short" },
        { n: 30, text: "Rehearse once with a timer; every member speaks" },
        { n: 31, text: "Pitch live and take investor questions unscripted" }
      ] }
  ],
  extra: { id: "honesty", label: "Critical honesty", note: "How seriously the team handled Stage 5 rather than defending the idea at all costs." },
  phrases: ["cutting-edge", "a game-changer", "target market", "break-even", "it addresses a gap in the market",
            "the main downside is", "we've priced it at", "in the long run", "mass-produce", "patent it",
            "user-friendly", "it pays for itself", "scale up", "a proof of concept", "we're asking for",
            "in exchange for a stake", "that's a fair point, but", "what sets us apart is"],
  notes: "Stage 2 is where teams cling to a bad idea; the rejection sentence in step 10 is what breaks the attachment - do not let them skip it. Step 26 needs two teams at the same stage, so pace the class together. If you are short on time, cut steps 15, 20 and 26. Money Lead is the role nobody wants and the one that produces the best language, so assign it rather than letting them choose."
},

/* ============================ 2 ================================= */
{
  id: "streaming-launch",
  version: 1,
  icon: "\uD83D\uDCFA",
  title: "Streaming Service Launch",
  hook: "Build the platform that wins the audience Netflix keeps ignoring.",
  level: "B2",
  hours: 8,
  teamSize: "3-4",
  theme: "Media & entertainment",
  skills: ["writing", "design", "speaking"],
  tags: ["streaming", "netflix", "film", "tv", "series", "trailer", "branding", "subscription", "media"],
  scenario: "Every streaming platform is chasing the same audience. Your team has spotted one that nobody serves properly. You have two weeks to design the platform, fill it, brand it, price it, and cut a trailer — then convince a room of investors that people will actually pay for it.",
  deliverables: [
    "An audience definition and a positioning line",
    "A catalogue of eight shows with synopses, at least two of them originals",
    "Platform name, logo and interface colour scheme",
    "Three subscription tiers priced in reais",
    "A launch poster for the flagship show",
    "A 45-60 second trailer script, performed or recorded"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Talking about habits and preferences — I tend to / I'm into / I gave up on it after",
      steps: [
        { n: 1, text: "Read the brief; each member lists three things they have actually watched this month" },
        { n: 2, text: "Say what made you keep watching, and what made you quit something halfway" },
        { n: 3, text: "Name an audience that the big platforms serve badly" },
        { n: 4, text: "Assign roles: Content Lead, Brand Lead, Business Lead, Trailer Lead" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Comparing and identifying gaps — whereas / by contrast / neither of them offers",
      steps: [
        { n: 6, text: "Compare three real platforms on price, catalogue and who they are for" },
        { n: 7, text: "Write one sentence per platform naming its biggest weakness" },
        { n: 8, text: "Define your audience in one sentence: age, country, what they want" },
        { n: 9, text: "Pitch two platform concepts to your own team and vote" },
        { n: 10, text: "Write the positioning line: 'X is the only place where...'" }
      ] },
    { id: "s3", name: "Build the Catalogue", hours: 2,
      focus: "Synopsis writing — present-tense narration, genre lexis, when a young widow discovers...",
      steps: [
        { n: 11, text: "Choose eight shows: at least four genres and at least two originals" },
        { n: 12, text: "Write a one-line synopsis for each, 20 words maximum" },
        { n: 13, text: "Expand your flagship original into a 60-word synopsis" },
        { n: 14, text: "Design the home screen: what does a brand-new user see first?" },
        { n: 15, text: "Decide the release model - all at once or weekly - and justify it" },
        { n: 16, text: "Get a rival team to guess your audience from the catalogue alone" }
      ] },
    { id: "s4", name: "Brand & Business", hours: 1.5,
      focus: "Pricing and persuasion — it works out at / for the price of a coffee / cancel any time",
      steps: [
        { n: 17, text: "Name the platform; check it is not taken and not rude in Portuguese" },
        { n: 18, text: "Design the logo and pick the interface colour scheme" },
        { n: 19, text: "Build three subscription tiers with prices in reais and a reason for each" },
        { n: 20, text: "Design the launch poster for your flagship show" },
        { n: 21, text: "Write the trailer script for the flagship, 45-60 seconds" },
        { n: 22, text: "Record or perform the trailer voiceover" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Hedging and prediction — the risk is that / churn / they may well cancel once",
      steps: [
        { n: 23, text: "List three reasons a subscriber cancels in month two" },
        { n: 24, text: "Write your answer to each of them" },
        { n: 25, text: "Work out what licensing eight shows would cost. Where does the money come from?" },
        { n: 26, text: "A rival team plays sceptical investor for five minutes; take notes" },
        { n: 27, text: "Fix your weakest tier or your weakest show" }
      ] },
    { id: "s6", name: "Launch", hours: 1,
      focus: "Presenting and fielding questions — as you can see / that brings me to / let me come back to that",
      steps: [
        { n: 28, text: "Build the launch presentation: gap, audience, catalogue, brand, tiers, risks" },
        { n: 29, text: "Write the 30-second elevator version" },
        { n: 30, text: "Rehearse with a timer; everyone speaks" },
        { n: 31, text: "Present live, play the trailer, and take questions" }
      ] }
  ],
  extra: { id: "coherence", label: "Audience coherence", note: "Does every decision - catalogue, brand, price - point at the same audience?" },
  phrases: ["binge-watch", "a slow burn", "critically acclaimed", "target demographic", "subscriber churn",
            "an ensemble cast", "it caters to", "what sets us apart is", "a niche audience", "on a shoestring budget",
            "licensing rights", "word of mouth", "it dropped in January", "must-see television", "a loyal following",
            "the algorithm pushes", "a limited series", "renewed for a second season"],
  notes: "Teams default to 'everything for everybody'. Step 16 is the check that stops it - if the rival team cannot guess the audience, send them back to step 11. Step 25 is where the B2 language lives; keep the numbers rough but make them answer it. If short on time, cut steps 14 and 20."
},

/* ============================ 3 ================================= */
{
  id: "city-district",
  version: 1,
  icon: "\uD83C\uDFD9\uFE0F",
  title: "Redesign a City District",
  hook: "Take a real corner of Curitiba and rebuild it for the people who use it least.",
  level: "B2",
  hours: 10,
  teamSize: "4-5",
  theme: "Civic & society",
  skills: ["research", "speaking", "design", "writing"],
  tags: ["city", "urban", "curitiba", "planning", "architecture", "community", "transport", "budget", "civic"],
  scenario: "The city has given your team a real neighbourhood, a limited budget and one instruction: make it work for people under twenty-five without ruining it for everyone else. In two weeks you present to the town hall - your class - who will vote to approve or reject your plan. Three groups of residents will object. Be ready.",
  deliverables: [
    "A defined area with an annotated before-and-after map",
    "Three named interventions with 40-word justifications each",
    "A budget with an explicit cut and the reasoning behind it",
    "One piece of signage or wayfinding design",
    "Three stakeholder objections in their own voices, plus your responses",
    "A town-hall presentation ending in a vote"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Describing places and problems — it's run-down / there's nowhere to / people avoid it because",
      steps: [
        { n: 1, text: "Read the brief; each member names a place in Curitiba they avoid, and why" },
        { n: 2, text: "Choose one real neighbourhood, square or street to redesign" },
        { n: 3, text: "Assign roles: Mapping Lead, Transport Lead, Budget Lead, Community Lead, Presentation Lead" },
        { n: 4, text: "Agree the boundary of your area and draw it" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 2,
      focus: "Passives and current state — it was built in / has been neglected / is used mainly by",
      steps: [
        { n: 6, text: "Walk it, or use street view, and record five concrete problems" },
        { n: 7, text: "Profile three users: a 15-year-old, a parent with a pushchair, a 70-year-old" },
        { n: 8, text: "Rank the five problems by how many people they affect" },
        { n: 9, text: "Choose the three problems you will actually solve" },
        { n: 10, text: "Write the current-state paragraph: what the area is like now (100 words)" }
      ] },
    { id: "s3", name: "Build the Plan", hours: 2.5,
      focus: "Conditionals and purpose — so that / in order to / if we widened it, people would",
      steps: [
        { n: 11, text: "Sketch the base map with existing streets and buildings" },
        { n: 12, text: "Design intervention 1 and give it a name" },
        { n: 13, text: "Design intervention 2 and give it a name" },
        { n: 14, text: "Design intervention 3 and give it a name" },
        { n: 15, text: "Mark all three on the annotated map with a key" },
        { n: 16, text: "Write a 40-word justification for each intervention" },
        { n: 17, text: "Decide what has to be removed or reduced to make room" }
      ] },
    { id: "s4", name: "Budget & Identity", hours: 2,
      focus: "Trade-offs and priorities — at the expense of / we opted for / that has to give way to",
      steps: [
        { n: 18, text: "Give the redesign a project name and a one-line vision" },
        { n: 19, text: "Estimate a cost band for each intervention: low, medium or high" },
        { n: 20, text: "You have ten budget tokens. Spend them. Something must be cut" },
        { n: 21, text: "Write the sentence explaining what you cut and why" },
        { n: 22, text: "Design one piece of signage or wayfinding for the new district" },
        { n: 23, text: "Produce the before-and-after visual" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1.5,
      focus: "Objection and polite disagreement — with respect / I take your point, but / that overlooks",
      steps: [
        { n: 24, text: "Identify three stakeholder groups who lose something and name them" },
        { n: 25, text: "Write each group's strongest objection in their own voice" },
        { n: 26, text: "Write your response to each objection" },
        { n: 27, text: "Work out who pays for this, and over how many years" },
        { n: 28, text: "A rival team plays the city council and challenges you; take notes" },
        { n: 29, text: "Adjust one intervention in response" }
      ] },
    { id: "s6", name: "Town Hall", hours: 1,
      focus: "Formal presenting and defending — I'd like to draw your attention to / on the contrary",
      steps: [
        { n: 30, text: "Build the presentation: problem, users, plan, budget, objections, the ask" },
        { n: 31, text: "Prepare the map for projection or display" },
        { n: 32, text: "Write the 30-second version" },
        { n: 33, text: "Rehearse with a timer; everyone speaks" },
        { n: 34, text: "Present at the town hall; the class votes to approve or reject" }
      ] }
  ],
  extra: { id: "feasibility", label: "Evidence & feasibility", note: "Is the plan grounded in the real place, or could it be anywhere?" },
  phrases: ["run-down", "pedestrianise", "green space", "mixed-use", "footfall", "a bottleneck",
            "well-lit", "accessible", "public consultation", "at the expense of", "in the long term",
            "a knock-on effect", "residents have complained that", "with respect, that overlooks",
            "it would pay for itself within", "the site is currently", "we propose relocating"],
  notes: "This is the longest project and the one most likely to drift. Step 9 is the hinge - three problems, no more. Step 20 (ten tokens) is the single best language generator in the catalogue; give it a full twenty minutes. Step 25 works best if you assign the three stakeholder groups yourself so nobody picks three groups who all agree with them."
},

/* ============================ 4 ================================= */
{
  id: "podcast",
  version: 1,
  icon: "\uD83C\uDF99\uFE0F",
  title: "Launch a Podcast",
  hook: "Record something people would actually listen to past minute two.",
  level: "B1+",
  hours: 8,
  teamSize: "2-3",
  theme: "Media & entertainment",
  skills: ["speaking", "writing"],
  tags: ["podcast", "audio", "interview", "recording", "hosting", "sponsor", "media", "speaking"],
  scenario: "Anyone can start a podcast. Almost nobody gets past episode three. Your team is making a real series: name it, plan it, record it, and find out from a live audience exactly where they stopped listening.",
  deliverables: [
    "A series concept, listener profile and 50-word description",
    "Outlines for three episodes",
    "A word-for-word cold open and eight open questions",
    "Cover art and a tagline",
    "A 30-second sponsor read for an invented sponsor",
    "A recorded episode of at least five minutes, plus a 90-second clip for the class"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Talking about listening habits — I'm hooked on / I stick with it because / I zone out when",
      steps: [
        { n: 1, text: "Read the brief; each member names a podcast or channel they actually follow" },
        { n: 2, text: "Say what keeps you listening past minute two" },
        { n: 3, text: "Choose your format: interview, two-host chat, storytelling or debate" },
        { n: 4, text: "Assign roles: Host, Producer, Researcher (rotate if there are only two of you)" },
        { n: 5, text: "Fill in the team contract, including who owns the recording" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Defining an angle — what we're really about is / unlike them, we / it's aimed at",
      steps: [
        { n: 6, text: "List five topics you could talk about for twenty minutes without preparing" },
        { n: 7, text: "Narrow to one series concept and write it in a single sentence" },
        { n: 8, text: "Define your listener: who are they, and when do they listen?" },
        { n: 9, text: "Find two real podcasts on a similar topic; note what you will do differently" },
        { n: 10, text: "Write the series description in 50 words" }
      ] },
    { id: "s3", name: "Build the Episode", hours: 2,
      focus: "Discourse markers and question forms — anyway / so here's the thing / what made you",
      steps: [
        { n: 11, text: "Outline episode 1: hook, three segments, sign-off" },
        { n: 12, text: "Outline episodes 2 and 3 in three lines each" },
        { n: 13, text: "Write the cold open - the first thirty seconds, word for word" },
        { n: 14, text: "Write eight questions, none of which can be answered with yes or no" },
        { n: 15, text: "Write the segment transitions (the 'anyway, moving on' lines)" },
        { n: 16, text: "Do a dry run of episode 1 without recording, and time it" }
      ] },
    { id: "s4", name: "Identity & Record", hours: 1.5,
      focus: "Advertising register and delivery — this episode is brought to you by / head over to",
      steps: [
        { n: 17, text: "Name the series; say it aloud ten times and see whether it survives" },
        { n: 18, text: "Design the cover art - square, and readable at thumbnail size" },
        { n: 19, text: "Write the tagline" },
        { n: 20, text: "Invent a sponsor and write a 30-second sponsor read" },
        { n: 21, text: "Record episode 1: five minutes minimum" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Self-evaluation — it drags a bit / we talked over each other / that bit fell flat",
      steps: [
        { n: 22, text: "Listen back and mark every place where you would have skipped ahead" },
        { n: 23, text: "Cut or fix three of them" },
        { n: 24, text: "Answer honestly: why would anyone choose this over the podcast they already listen to?" },
        { n: 25, text: "Another team listens to two minutes and reports where they lost interest" },
        { n: 26, text: "Re-record your weakest sixty seconds" }
      ] },
    { id: "s6", name: "Launch", hours: 1,
      focus: "Pitching a format — the idea behind it is / each episode follows / we're releasing weekly",
      steps: [
        { n: 27, text: "Build the launch pitch: concept, listener, episodes, brand, clip" },
        { n: 28, text: "Choose the 90-second clip you will play to the class" },
        { n: 29, text: "Present the series, play the clip, and take questions" }
      ] }
  ],
  extra: { id: "listenability", label: "Fluency & listenability", note: "Does it sound like speech rather than a read-aloud essay?" },
  phrases: ["welcome back to", "in today's episode", "let's dive in", "that's a great question",
            "moving on", "to be fair", "hang on, though", "we'll be right back", "thanks for having me",
            "wrap up", "a quick word from our sponsor", "don't forget to subscribe", "I'd push back on that",
            "long story short", "here's where it gets interesting", "so what you're saying is"],
  notes: "Phones are fine as recorders; do not lose a lesson to audio software. The rule that saves this project is one microphone, one speaker at a time. Step 22 is uncomfortable and essential - they will want to defend the recording instead of judging it. Pairs work better than threes here. If short on time, cut steps 12 and 20."
},

/* ============================ 5 ================================= */
{
  id: "museum-right-now",
  version: 1,
  icon: "\uD83C\uDFDB\uFE0F",
  title: "Museum of Right Now",
  hook: "Curate eight objects that explain this decade to someone born in 2110.",
  level: "B2",
  hours: 8,
  teamSize: "3-4",
  theme: "Culture & history",
  skills: ["writing", "research", "speaking"],
  tags: ["museum", "exhibition", "curate", "history", "culture", "objects", "audio guide", "2020s"],
  scenario: "A museum has given your team one room and one instruction: explain the 2020s to a visitor from 2125 using eight objects. You choose the objects, write the wall texts, design the route and give the opening speech. Then your class walks through it and tells you what you got wrong.",
  deliverables: [
    "An exhibition title, angle and 40-word introduction",
    "Eight objects, at least two of them intangible",
    "A 40-word wall text and a full label for every object",
    "A floor plan with the visitor route marked",
    "An audio-guide script for three objects",
    "A 90-second opening-night speech"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Justifying a choice - what makes it worth keeping is / it says something about",
      steps: [
        { n: 1, text: "Read the brief; each member proposes one object that would confuse a visitor from 2125" },
        { n: 2, text: "Argue for your object; the team ranks every suggestion" },
        { n: 3, text: "Assign roles: Curator, Writer, Designer, Guide" },
        { n: 4, text: "Agree the exhibition's angle: what is this decade actually about?" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Significance and evidence - it demonstrates / stands for / is evidence of",
      steps: [
        { n: 6, text: "Draw up a longlist of fifteen candidate objects" },
        { n: 7, text: "For each one, write the single thing about our decade it proves" },
        { n: 8, text: "Cut to eight. At least two must be intangible: an app, a sound, a habit" },
        { n: 9, text: "Check the balance: is this only about technology? Fix it if it is" },
        { n: 10, text: "Write the exhibition title and a 40-word introduction" }
      ] },
    { id: "s3", name: "Write the Exhibition", hours: 2,
      focus: "Relative clauses and formal register - which was worn by / at a time when / a device that",
      steps: [
        { n: 11, text: "Write the wall text for objects 1 and 2, 40 words each" },
        { n: 12, text: "Write the wall text for objects 3, 4 and 5" },
        { n: 13, text: "Write the wall text for objects 6, 7 and 8" },
        { n: 14, text: "Write the date, origin and why-it-is-here label for all eight" },
        { n: 15, text: "Read all eight aloud and cut every repeated phrase" },
        { n: 16, text: "Decide the order visitors meet them in, and why" }
      ] },
    { id: "s4", name: "Design & Extras", hours: 1.5,
      focus: "Spatial description and narration - as you turn the corner / to your left you'll find",
      steps: [
        { n: 17, text: "Draw the floor plan with the visitor route marked" },
        { n: 18, text: "Design the exhibition poster" },
        { n: 19, text: "Choose the one object that goes in the entrance hall and defend the choice" },
        { n: 20, text: "Write the audio-guide script for three objects, 60 seconds each" },
        { n: 21, text: "Write the opening-night speech, 90 seconds" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Acknowledging limits - admittedly / it says little about / from a narrow perspective",
      steps: [
        { n: 22, text: "List three things about the 2020s your exhibition leaves out completely" },
        { n: 23, text: "Decide which omission is the most serious, and say why" },
        { n: 24, text: "Ask: whose decade is this? Would a visitor think everyone lived like you?" },
        { n: 25, text: "Another team walks the route and reports what confused them" },
        { n: 26, text: "Replace or re-label one object" }
      ] },
    { id: "s6", name: "Opening Night", hours: 1,
      focus: "Guiding and public speaking - if you'd like to follow me / thank you all for coming",
      steps: [
        { n: 27, text: "Assemble the exhibition for display" },
        { n: 28, text: "Assign who guides which section" },
        { n: 29, text: "Rehearse the route once with a timer" },
        { n: 30, text: "Open the exhibition; the class walks through as visitors" },
        { n: 31, text: "Deliver the opening speech and take questions" }
      ] }
  ],
  extra: { id: "curation", label: "Curatorial reasoning", note: "Are the eight objects an argument, or just eight things?" },
  phrases: ["on display", "artefact", "a defining feature of", "at the height of", "it fell out of use",
            "widely regarded as", "this object belonged to", "which marked a turning point",
            "future generations may struggle to", "seemingly trivial", "it captures the moment when",
            "a snapshot of", "worth preserving", "the collection as a whole", "curated by", "loaned to us by"],
  notes: "The intangible objects in step 8 are what lift this from a show-and-tell to a B2 task - hold the line on it. Step 24 is the heart of the project; if the answer is 'everyone lived like us', send them back to step 6. Wall texts must be exactly 40 words: the constraint is what forces the redrafting."
},

/* ============================ 6 ================================= */
{
  id: "food-truck",
  version: 1,
  icon: "\uD83C\uDF2E",
  title: "Food Truck Empire",
  hook: "Design the truck, write the menu, then survive a rainy Tuesday.",
  level: "B1",
  hours: 6,
  teamSize: "3-4",
  theme: "Business & enterprise",
  skills: ["writing", "design", "speaking"],
  tags: ["food", "menu", "restaurant", "truck", "cooking", "business", "branding", "prices", "advertising"],
  scenario: "Your team has one truck, one kitchen the size of a wardrobe and a city full of people who are already eating somewhere else. Design the concept, write a menu that makes people hungry, price it so you survive, and then work out what happens when it rains.",
  deliverables: [
    "A concept, a customer profile and a one-sentence point of difference",
    "A full menu of six to eight items with prices in reais",
    "A 15-word appetising description for each signature item",
    "Truck name, logo and livery design",
    "One social media launch post and a 30-second radio advert script",
    "A pitch to the class, who vote with imaginary money"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Talking about food - I'm not keen on / it's the sort of thing you crave / it's worth the queue",
      steps: [
        { n: 1, text: "Read the brief; each member describes the best thing they have eaten this month" },
        { n: 2, text: "Choose a cuisine or concept the city does not have enough of" },
        { n: 3, text: "Assign roles: Chef, Brand Lead, Money Lead, Operations Lead" },
        { n: 4, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1,
      focus: "Comparing offers - cheaper than / nowhere near as good as / the same thing but",
      steps: [
        { n: 5, text: "Name three places that sell something similar and note their prices" },
        { n: 6, text: "Write what makes yours different in one sentence" },
        { n: 7, text: "Define your customer: who, where and at what time of day" },
        { n: 8, text: "Choose your three signature items" }
      ] },
    { id: "s3", name: "Build the Menu", hours: 1.5,
      focus: "Adjective order and describing taste - crispy, slow-cooked / with a hint of / melts in the mouth",
      steps: [
        { n: 9, text: "Write the full menu: six to eight items grouped into sections" },
        { n: 10, text: "Write a 15-word appetising description for each signature item" },
        { n: 11, text: "Set prices in reais and check that nothing is priced like a restaurant" },
        { n: 12, text: "Work out roughly what each signature item costs you to make" },
        { n: 13, text: "Choose your pitch: where does the truck park, and on which days?" }
      ] },
    { id: "s4", name: "Brand & Advertise", hours: 1.5,
      focus: "Slogans and advertising - grab yours / made fresh every morning / find us at",
      steps: [
        { n: 14, text: "Name the truck and test the name on someone outside your team" },
        { n: 15, text: "Design the logo" },
        { n: 16, text: "Design the livery: what the truck looks like from twenty metres away" },
        { n: 17, text: "Write the slogan" },
        { n: 18, text: "Design one social media post announcing the launch" },
        { n: 19, text: "Write the 30-second radio advert script" }
      ] },
    { id: "s5", name: "Stress Test", hours: 0.5,
      focus: "Problems and contingency - what happens if / we'd have to / that would leave us",
      steps: [
        { n: 20, text: "List three things that go wrong on a rainy Tuesday" },
        { n: 21, text: "The queue is fifteen people long and one item runs out. What do you do?" },
        { n: 22, text: "Another team orders from your menu and says what they would change" },
        { n: 23, text: "Fix the item nobody wanted" }
      ] },
    { id: "s6", name: "Pitch", hours: 0.5,
      focus: "Short persuasive pitching - come and try / you won't find this anywhere else",
      steps: [
        { n: 24, text: "Build the pitch: gap, concept, menu, brand, problems" },
        { n: 25, text: "Rehearse once; everyone speaks" },
        { n: 26, text: "Pitch to the class; the class votes with imaginary money" }
      ] }
  ],
  extra: { id: "appetite", label: "Appetite appeal", note: "Does the written menu actually make a reader hungry?" },
  phrases: ["freshly made", "slow-cooked", "a hint of", "melts in the mouth", "generous portions",
            "crispy on the outside", "our house special", "sourced locally", "takeaway", "a bargain at",
            "queue round the block", "we're parked outside", "regulars", "sold out by two",
            "it's worth the wait", "mild, medium or hot"],
  notes: "The shortest project in the catalogue and the best one to start a group with - six hours, low stakes, everyone can access it. Step 12 (what it costs to make) is where the maths reveals that half the menus were priced at a loss; do not skip it. Step 10's 15-word limit is the language target, not decoration."
},

/* ============================ 7 ================================= */
{
  id: "campaign-for-change",
  version: 1,
  icon: "\uD83D\uDCE2",
  title: "Campaign for Change",
  hook: "Pick a real problem, demand one real thing, and defend it against the best argument on the other side.",
  level: "B2",
  hours: 8,
  teamSize: "3-4",
  theme: "Civic & society",
  skills: ["speaking", "writing", "research"],
  tags: ["campaign", "activism", "petition", "poster", "psa", "persuasion", "debate", "society", "change"],
  scenario: "Your team is running a campaign about something that genuinely should change at this school or in this city. You need a name, a poster, a film, a petition and one clear demand. You also need an answer to the strongest argument against you, because you will hear it live.",
  deliverables: [
    "A 25-word problem statement backed by three sourced facts",
    "A named decision-maker and a named target audience",
    "A campaign name, slogan and poster",
    "A 60-second PSA, filmed or performed",
    "A 120-word petition and a 150-word formal letter",
    "Three rebuttals to the strongest arguments against you"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Expressing conviction - it's about time / there's no excuse for / what bothers me is",
      steps: [
        { n: 1, text: "Read the brief; each member writes one thing at school or in the city that should change" },
        { n: 2, text: "Share and group the suggestions; the team keeps three" },
        { n: 3, text: "Check each one: can this actually change? Cut anything that cannot" },
        { n: 4, text: "Assign roles: Campaign Lead, Design Lead, Film Lead, Research Lead" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Cause and effect - as a result / this leads to / the root of the problem is",
      steps: [
        { n: 6, text: "Choose your single issue and write it as a 25-word problem statement" },
        { n: 7, text: "Find three facts or figures that support you, and note where each came from" },
        { n: 8, text: "Identify your decision-maker: who has the power to say yes?" },
        { n: 9, text: "Identify your audience: who do you need on your side first?" },
        { n: 10, text: "Write your one demand as a single sentence beginning 'We are asking...'" }
      ] },
    { id: "s3", name: "Build the Campaign", hours: 2,
      focus: "Modals of obligation and persuasion - must / ought to / it is unacceptable that",
      steps: [
        { n: 11, text: "Name the campaign and write the slogan" },
        { n: 12, text: "Write the petition text, 120 words, with the demand at the top" },
        { n: 13, text: "Design the poster: one image, six words maximum" },
        { n: 14, text: "Storyboard the 60-second PSA in six frames" },
        { n: 15, text: "Write the PSA script" },
        { n: 16, text: "Film or perform the PSA" }
      ] },
    { id: "s4", name: "Reach", hours: 1.5,
      focus: "Register shifting - formal letter vs social post; I am writing to request / tag someone who",
      steps: [
        { n: 17, text: "Write the social post that gets shared, in three different versions" },
        { n: 18, text: "Write the formal letter to the decision-maker: 150 words, formal register" },
        { n: 19, text: "Plan your first week: what happens on days 1, 3 and 7" },
        { n: 20, text: "Design one piece of merchandise or one public stunt" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Concession and rebuttal - granted / that may be so, but / the evidence suggests otherwise",
      steps: [
        { n: 21, text: "Write the strongest argument AGAINST your campaign, honestly and in full" },
        { n: 22, text: "Write two more objections you would hear" },
        { n: 23, text: "Write your rebuttal to each without insulting the other side" },
        { n: 24, text: "Check your three facts again: would they survive a fact-check?" },
        { n: 25, text: "Another team argues the opposite side for five minutes; take notes" },
        { n: 26, text: "Rewrite the weakest part of your petition" }
      ] },
    { id: "s6", name: "Launch", hours: 1,
      focus: "Public speaking under pressure - let me be clear / I'd challenge that assumption",
      steps: [
        { n: 27, text: "Build the launch presentation: problem, evidence, demand, campaign, rebuttals" },
        { n: 28, text: "Decide who delivers the emotional part and who delivers the facts" },
        { n: 29, text: "Rehearse with a timer" },
        { n: 30, text: "Launch to the class, play the PSA, and take hostile questions" }
      ] }
  ],
  extra: { id: "opposition", label: "Handling opposition", note: "Did they steelman the other side, or knock down a straw man?" },
  phrases: ["it is unacceptable that", "we are calling on", "sign the petition", "raise awareness",
            "the current situation", "long overdue", "a matter of fairness", "we are asking for one thing",
            "granted, but", "the evidence suggests", "according to a study by", "grassroots",
            "make your voice heard", "this affects every one of us", "I'd challenge that assumption", "change starts here"],
  notes: "Step 3 is what stops this becoming a rant about the canteen; the demand must be something a named person could actually grant. Step 21 is the whole project - insist they write the opposing argument as well as its own supporters would. If a team picks a genuinely sensitive personal issue, redirect them to something structural rather than about individuals."
},

/* ============================ 8 ================================= */
{
  id: "build-an-app",
  version: 1,
  icon: "\uD83D\uDCF1",
  title: "Build an App",
  hook: "One app, one job, and an honest answer about what it costs the user.",
  level: "B1+",
  hours: 8,
  teamSize: "3-4",
  theme: "Technology & design",
  skills: ["design", "writing", "speaking"],
  tags: ["app", "technology", "design", "ux", "mockup", "startup", "privacy", "personas", "demo"],
  scenario: "Your team is building an app that solves one problem a teenager actually has. Not five problems - one. You will design the screens, write every word the user reads, and then explain what your app takes from them in exchange.",
  deliverables: [
    "A one-sentence problem statement and two user personas",
    "A core promise in the form 'In one tap, you can...'",
    "Five sketched screens including the success state",
    "Complete microcopy: every button label and one empty-state message",
    "App name, icon and App Store page with three feature bullets",
    "A named privacy or wellbeing trade-off, and a live demo walkthrough"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Describing habits and frustrations - I'm forever forgetting / there's no decent way to",
      steps: [
        { n: 1, text: "Read the brief; each member lists three apps they open every single day" },
        { n: 2, text: "Each member names one problem a teenager has that no app solves well" },
        { n: 3, text: "Choose one problem and write it in a single sentence" },
        { n: 4, text: "Assign roles: Product Lead, Design Lead, User Lead, Demo Lead" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Research & Decide", hours: 1.5,
      focus: "Describing users - she tends to / what she needs is / for someone like him",
      steps: [
        { n: 6, text: "Find two apps that try to solve this and note what is wrong with them" },
        { n: 7, text: "Write user persona 1: name, age, a day in their life, why they need this" },
        { n: 8, text: "Write user persona 2: someone quite different from persona 1" },
        { n: 9, text: "Write the core promise: 'In one tap, you can...'" },
        { n: 10, text: "Decide the ONE thing your app does. Cut every other feature" }
      ] },
    { id: "s3", name: "Design the Screens", hours: 2,
      focus: "Sequencing and purpose - first you / once you've done that / so that the user can",
      steps: [
        { n: 11, text: "List the user journey in five steps, from opening the app to done" },
        { n: 12, text: "Sketch screen 1: what a brand-new user sees" },
        { n: 13, text: "Sketch screens 2 and 3" },
        { n: 14, text: "Sketch screens 4 and 5, including the 'it worked' screen" },
        { n: 15, text: "Write the microcopy: every button label and one empty-state message" },
        { n: 16, text: "Walk another team through the screens without explaining; watch where they get stuck" }
      ] },
    { id: "s4", name: "Identity & Store Page", hours: 1.5,
      focus: "Marketing copy - never miss another / designed for / join thousands of",
      steps: [
        { n: 17, text: "Name the app; check the name is searchable and not already taken" },
        { n: 18, text: "Design the icon; it must work at thumbnail size" },
        { n: 19, text: "Write the App Store description: a hook line plus 80 words" },
        { n: 20, text: "Write three feature bullets" },
        { n: 21, text: "Decide the business model - free, ads or subscription - and justify it" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Trade-offs and speculation - at the cost of / it could be misused to / in theory",
      steps: [
        { n: 22, text: "Name the privacy or wellbeing trade-off your app creates" },
        { n: 23, text: "What data do you collect? Would you be comfortable if it leaked tomorrow?" },
        { n: 24, text: "What happens when only twelve people use it? Does the app still work?" },
        { n: 25, text: "List three reasons a user deletes it after a week" },
        { n: 26, text: "Another team tries to break your idea; fix one thing" }
      ] },
    { id: "s6", name: "Demo", hours: 1,
      focus: "Demonstrating - as you can see here / if I tap this / let me show you what happens when",
      steps: [
        { n: 27, text: "Build the demo: problem, persona, walkthrough, store page, trade-off" },
        { n: 28, text: "Prepare the screens for projection" },
        { n: 29, text: "Rehearse the walkthrough; everyone speaks" },
        { n: 30, text: "Demo live and take questions" }
      ] }
  ],
  extra: { id: "empathy", label: "User empathy", note: "Is the design built around the personas, or around what the team found fun to draw?" },
  phrases: ["user-friendly", "in one tap", "seamless", "onboarding", "push notification",
            "opt in", "the free tier", "it syncs across devices", "a clean interface", "at a glance",
            "we collect only", "there's a trade-off here", "designed for people who", "it takes seconds",
            "never miss another", "we'd rather do one thing well"],
  notes: "Step 10 is the entire project. Teams will fight to keep six features; make them cut to one and the language gets sharper immediately. Paper sketches are fine and usually better - do not let anyone spend a lesson learning a design tool. Step 22 is the drawback stage and produces the best B2 speaking in this project."
},

/* ============================ 9 ================================= */
{
  id: "time-capsule",
  version: 1,
  icon: "\u23F3",
  title: "Time Capsule 2075",
  hook: "Ten objects, one letter, and five predictions you will be judged on in fifty years.",
  level: "B1+",
  hours: 6,
  teamSize: "3-4",
  theme: "Culture & history",
  skills: ["writing", "speaking"],
  tags: ["future", "predictions", "time capsule", "letter", "2075", "history", "documentary", "narration"],
  scenario: "In 2075, students at this school will open a box your team sealed. They will judge what you thought mattered, and they will laugh at some of it. Choose the ten things that go in, write them a letter, and make five predictions you are willing to put your name to.",
  deliverables: [
    "Ten items, each with a 30-word label and a stated reason",
    "One item nominated as the must-survive object",
    "A 200-word group letter to 2075",
    "Five predictions, each rated for certainty",
    "The capsule design and its instruction label",
    "A narrated documentary-style presentation"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Talking about change over time - back then / it wouldn't happen nowadays / it strikes me as odd",
      steps: [
        { n: 1, text: "Read the brief; each member names one thing from 1975 that seems absurd now" },
        { n: 2, text: "Agree who the capsule is for: students at this school in 2075" },
        { n: 3, text: "Assign roles: Archivist, Writer, Forecaster, Narrator" },
        { n: 4, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Select", hours: 1,
      focus: "Justifying inclusion - it belongs in there because / it's the only thing that shows",
      steps: [
        { n: 5, text: "Longlist twenty candidate items: objects, images, sounds, screenshots" },
        { n: 6, text: "Cut to ten; every item needs a one-line reason" },
        { n: 7, text: "Check the mix: at least three must be about ordinary daily life, not news events" },
        { n: 8, text: "Choose the one item that must survive if everything else is lost" }
      ] },
    { id: "s3", name: "Write to the Future", hours: 1.5,
      focus: "Describing and confiding - you probably won't recognise / what we couldn't work out was",
      steps: [
        { n: 9, text: "Write the 30-word label for items 1 to 5" },
        { n: 10, text: "Write the 30-word label for items 6 to 10" },
        { n: 11, text: "Draft the group letter to 2075, 200 words" },
        { n: 12, text: "Include one thing you are proud of and one thing you are ashamed of" },
        { n: 13, text: "Read the letter aloud and cut anything that sounds fake" }
      ] },
    { id: "s4", name: "Predict", hours: 1.5,
      focus: "Future forms and certainty - is bound to / may well / there's every chance that / I doubt",
      steps: [
        { n: 14, text: "Write five predictions for 2075, each with a reason" },
        { n: 15, text: "Rate each prediction: certain, likely, possible or unlikely" },
        { n: 16, text: "Write the one prediction you would bet money on" },
        { n: 17, text: "Design the capsule itself and the instruction label on the lid" },
        { n: 18, text: "Write the narration script for a documentary-style presentation" }
      ] },
    { id: "s5", name: "Stress Test", hours: 0.5,
      focus: "Self-criticism and clarification - on reflection / that assumes / it needs explaining",
      steps: [
        { n: 19, text: "Which of your predictions will look stupidest in 2075? Keep it anyway and say why" },
        { n: 20, text: "Would a student in 2075 understand item 4 without explanation? Fix it" },
        { n: 21, text: "Another team reads your letter and says what they would cut" },
        { n: 22, text: "Cut it" }
      ] },
    { id: "s6", name: "Sealing", hours: 1,
      focus: "Narration and ceremony - what you are looking at is / we leave this to you",
      steps: [
        { n: 23, text: "Assemble the capsule contents for display" },
        { n: 24, text: "Rehearse the narration with a timer" },
        { n: 25, text: "Present the capsule item by item" },
        { n: 26, text: "Read the letter aloud and seal it" }
      ] }
  ],
  extra: { id: "reasoning", label: "Reasoning about the future", note: "Are the predictions argued from something, or just guessed?" },
  phrases: ["by then", "it's bound to", "there's every chance that", "I very much doubt",
            "looking back", "at the time of writing", "we take it for granted that", "in fifty years",
            "if all goes well", "it strikes us as", "we were the generation that", "for better or worse",
            "you'll find this hard to believe", "on reflection", "sealed until", "to whoever opens this"],
  notes: "Step 12 is what makes the letter worth reading; without the shameful thing it becomes a brochure. Step 7 keeps the capsule from being ten news headlines. Six hours makes this a good short filler between longer projects, and it pairs well with Museum of Right Now if you want to run both across a term."
},

/* ============================ 10 ================================ */
{
  id: "newsroom",
  version: 1,
  icon: "\uD83D\uDCF0",
  title: "The Newsroom",
  hook: "Run a real outlet for two weeks, then defend your front page to a hostile room.",
  level: "B2",
  hours: 10,
  teamSize: "4-6",
  theme: "Media & entertainment",
  skills: ["writing", "research", "speaking"],
  tags: ["news", "journalism", "newspaper", "magazine", "articles", "editorial", "headlines", "bias", "interview"],
  scenario: "Your team is an editorial staff with a beat, a deadline and a reputation to build. You will report four stories, run an opinion piece, design a front page and publish. Then the class reads it and accuses you of bias, and you answer for every choice you made.",
  deliverables: [
    "An editorial line in one sentence and a masthead",
    "Four reported articles of 200-250 words with verified facts",
    "One clearly labelled opinion piece",
    "Headlines under nine words for all five pieces",
    "A laid-out front page with standfirsts and captions",
    "A published edition plus a correction or editor's note"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Talking about trust and sources - I take it with a pinch of salt / they're pretty reliable on",
      steps: [
        { n: 1, text: "Read the brief; each member names a news source they trust and one they do not" },
        { n: 2, text: "Decide your outlet's beat: school, city, youth culture or general" },
        { n: 3, text: "Agree the editorial line in one sentence" },
        { n: 4, text: "Assign roles: Editor, two Reporters, Opinion Writer, Sub-editor, Layout" },
        { n: 5, text: "Fill in the team contract with a hard publication deadline" }
      ] },
    { id: "s2", name: "Newsgathering", hours: 2,
      focus: "Pitching and questioning - I've got a lead on / who can confirm that / on the record",
      steps: [
        { n: 6, text: "Hold an editorial meeting and pitch six possible stories" },
        { n: 7, text: "Cut to four and assign one to each writer" },
        { n: 8, text: "For each story, list who you need to talk to" },
        { n: 9, text: "Conduct or script two interviews and take direct quotes" },
        { n: 10, text: "Check every fact you plan to print; mark anything you cannot verify" }
      ] },
    { id: "s3", name: "Write", hours: 2.5,
      focus: "Reported speech and news register - denied that / is understood to / according to",
      steps: [
        { n: 11, text: "Write article 1, 200-250 words, with a clear lead paragraph" },
        { n: 12, text: "Write article 2" },
        { n: 13, text: "Write article 3" },
        { n: 14, text: "Write article 4" },
        { n: 15, text: "Write the opinion piece, 200 words, clearly labelled as opinion" },
        { n: 16, text: "Write headlines for all five; each under nine words" },
        { n: 17, text: "Sub-edit: swap articles and fix another writer's grammar and clarity" }
      ] },
    { id: "s4", name: "Publish", hours: 2,
      focus: "Nominalisation and layout copy - growing concern over / a rise in / calls for an inquiry",
      steps: [
        { n: 18, text: "Name the outlet and design the masthead" },
        { n: 19, text: "Write the editorial: what your outlet stands for, 120 words" },
        { n: 20, text: "Choose the lead story and justify the choice to the team" },
        { n: 21, text: "Lay out the front page" },
        { n: 22, text: "Write the standfirsts and the photo captions" },
        { n: 23, text: "Produce the final printed or displayed edition" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1.5,
      focus: "Fact versus opinion - it is claimed that / arguably / that is a judgement, not a fact",
      steps: [
        { n: 24, text: "Reread the front page: whose voice is missing?" },
        { n: 25, text: "Find the sentence in your own paper that a lawyer would query" },
        { n: 26, text: "Where have you stated opinion as fact? Fix it" },
        { n: 27, text: "Another team reads your edition and accuses you of bias; write down their case" },
        { n: 28, text: "Write the correction or editor's note you would publish" }
      ] },
    { id: "s6", name: "Editorial Meeting", hours: 1,
      focus: "Defending decisions - we stand by the story / that was an editorial judgement",
      steps: [
        { n: 29, text: "Prepare to defend your choice of lead story" },
        { n: 30, text: "Prepare to defend your most controversial line" },
        { n: 31, text: "Rehearse who answers what" },
        { n: 32, text: "Hold the live editorial meeting; the class questions your choices" },
        { n: 33, text: "Announce what you would do differently in the next edition" }
      ] }
  ],
  extra: { id: "accuracy", label: "Accuracy & fairness", note: "Verified facts, attributed quotes, and opinion kept where it belongs." },
  phrases: ["according to sources", "declined to comment", "it is understood that", "sparked criticism",
            "a spokesperson said", "on the record", "the story broke", "we stand by our reporting",
            "an exclusive", "growing concern over", "calls for an inquiry", "in a statement released",
            "alleged", "the paper understands", "a correction", "for the sake of balance"],
  notes: "Ten hours and six roles - this is the project to run when you want the whole class working like a staff rather than four separate teams. Step 10 is non-negotiable: no unverified fact reaches the page. Step 27 works best if you assign the accusing team in advance so they read properly. The sub-editing swap in step 17 produces more accurate writing than any correction you could give them."
},

/* ============================ 11 ================================ */
{
  id: "escape-room",
  version: 1,
  icon: "\uD83D\uDD10",
  title: "Escape Room Design",
  hook: "Five puzzles, one lock, and every solution written in English.",
  level: "B1+",
  hours: 8,
  teamSize: "3-4",
  theme: "Games & design",
  skills: ["writing", "design", "speaking"],
  tags: ["escape room", "puzzle", "game", "design", "riddle", "wordplay", "instructions", "playtest"],
  scenario: "Your team is designing an escape room that another team will actually play. Every puzzle must be solved by using English - not by luck, not by guessing. You write the story, build the locks, run the room as Game Master, and watch a real team break everything you got wrong.",
  deliverables: [
    "A theme, a 100-word backstory and a stated winning condition",
    "A room layout sketch and a puzzle chain diagram",
    "Five built puzzles with a complete solution key",
    "Printed player handouts and props",
    "Three escalating hints and a Game Master intro speech",
    "A live playtest with a rival team and a debrief"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Describing games - the trick is to / you have to work out / it clicked when I realised",
      steps: [
        { n: 1, text: "Read the brief; each member describes the best puzzle or game they have played" },
        { n: 2, text: "Choose a theme - no gore, and nothing that would genuinely frighten a classmate" },
        { n: 3, text: "Agree the winning condition: what does escaping actually mean here?" },
        { n: 4, text: "Assign roles: Story Lead, Puzzle Lead, Build Lead, Game Master" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Design & Decide", hours: 1.5,
      focus: "Narrative setup and rules - you find yourselves / you have forty minutes to / under no circumstances",
      steps: [
        { n: 6, text: "Write the 100-word backstory that players read before entering" },
        { n: 7, text: "Decide the time limit and what happens when it runs out" },
        { n: 8, text: "Sketch the room layout with the entry point and the hiding places" },
        { n: 9, text: "Decide the puzzle chain: which puzzle unlocks which" },
        { n: 10, text: "Check that every puzzle is solved by using English, not by luck" }
      ] },
    { id: "s3", name: "Build the Puzzles", hours: 2,
      focus: "Imperatives and prepositions of place - underneath / third from the left / turn it clockwise",
      steps: [
        { n: 11, text: "Build puzzle 1 - easy, and it teaches players how the room works" },
        { n: 12, text: "Build puzzle 2" },
        { n: 13, text: "Build puzzle 3 - the hard one" },
        { n: 14, text: "Build puzzle 4" },
        { n: 15, text: "Build puzzle 5 - the final lock" },
        { n: 16, text: "Write the solution key for all five with the exact accepted answers" }
      ] },
    { id: "s4", name: "Materials & Extras", hours: 1.5,
      focus: "Clear written instructions - do not open until / place the tiles in order of",
      steps: [
        { n: 17, text: "Name the room and write the one-line teaser" },
        { n: 18, text: "Produce the printed player handouts and props" },
        { n: 19, text: "Write the three hints the Game Master can give, in escalating order" },
        { n: 20, text: "Write the intro speech the Game Master reads at the door" },
        { n: 21, text: "Write the ending text players receive when they escape" }
      ] },
    { id: "s5", name: "Playtest", hours: 1,
      focus: "Reporting what went wrong - they got stuck on / it wasn't obvious that / nobody noticed",
      steps: [
        { n: 22, text: "Solve your own room in order and time it" },
        { n: 23, text: "Find the puzzle that has more than one possible answer and fix it" },
        { n: 24, text: "Find the puzzle a player could skip entirely and fix it" },
        { n: 25, text: "Ask: could someone who cannot reach high, or cannot see well, still play?" },
        { n: 26, text: "Another team plays fifteen minutes of it; watch in silence and take notes" },
        { n: 27, text: "Fix the puzzle that broke" }
      ] },
    { id: "s6", name: "Run It", hours: 1,
      focus: "Game-mastering - listen carefully / here's your first hint / you've got ten minutes left",
      steps: [
        { n: 28, text: "Set the room up properly" },
        { n: 29, text: "Brief the Game Master on hint timing" },
        { n: 30, text: "Run the room live for a rival team, then debrief them afterwards" }
      ] }
  ],
  extra: { id: "clarity", label: "Clarity of instructions", note: "Could a stranger play this using only what is written, with no one explaining?" },
  phrases: ["you'll need to", "hidden underneath", "in a clockwise direction", "the third one along",
            "unscramble", "it doesn't belong with the others", "read the first letter of each",
            "you have forty minutes", "here's your first hint", "you're on the right track",
            "that's not quite it", "time's nearly up", "well spotted", "the code is four digits",
            "do not open this until", "congratulations, you're out"],
  notes: "Step 10 is the reason this is an English project and not a craft lesson - reject any puzzle solved by moving furniture. Step 26 is the payoff and needs two teams synchronised, so run this with an even number of teams. Envelopes, folded paper and word locks beat anything electronic. Step 25 catches the team who hid the key on top of a cupboard."
},

/* ============================ 12 ================================ */
{
  id: "rebrand-it",
  version: 1,
  icon: "\u267B\uFE0F",
  title: "Rebrand It",
  hook: "Fix a real brand that is failing, and admit who you lose in the process.",
  level: "B2",
  hours: 8,
  teamSize: "3-4",
  theme: "Business & enterprise",
  skills: ["research", "design", "speaking", "writing"],
  tags: ["brand", "rebrand", "marketing", "logo", "strategy", "advertising", "press release", "business"],
  scenario: "Pick a real brand your team thinks is failing or embarrassing. Audit it honestly, reposition it, redesign it, and launch the campaign. Then face the board - your class - and answer the one question every rebrand has to answer: who did you just lose?",
  deliverables: [
    "An 80-word professional audit of what is wrong",
    "A positioning statement and three defined brand values",
    "A new logo keeping one recognisable element, plus a palette",
    "A tagline chosen from five",
    "A launch ad, a five-frame video storyboard and a script",
    "A 120-word press release with a CEO quote, and a named cost of the rebrand"
  ],
  stages: [
    { id: "s1", name: "Brief & Team", hours: 1,
      focus: "Evaluating brands - it's lost its way / it feels dated / nobody our age would be seen with it",
      steps: [
        { n: 1, text: "Read the brief; each member names a brand they think is failing or embarrassing" },
        { n: 2, text: "Choose one. It must be real, and it must still exist" },
        { n: 3, text: "Check you can find enough about it to work with" },
        { n: 4, text: "Assign roles: Strategy Lead, Design Lead, Campaign Lead, Research Lead" },
        { n: 5, text: "Fill in the team contract: who does what, by when" }
      ] },
    { id: "s2", name: "Audit", hours: 1.5,
      focus: "Softened criticism and evaluation - it arguably suffers from / has failed to keep pace with",
      steps: [
        { n: 6, text: "List everything currently wrong: look, message, products, reputation" },
        { n: 7, text: "Rank the problems: which one causes the others?" },
        { n: 8, text: "Identify who still buys from them, and why" },
        { n: 9, text: "Identify who used to buy from them and stopped" },
        { n: 10, text: "Write the audit summary in 80 words - critical, but professional" }
      ] },
    { id: "s3", name: "Reposition", hours: 2,
      focus: "Brand strategy language - we're repositioning it as / it stands for / for people who value",
      steps: [
        { n: 11, text: "Write the new positioning statement: for whom, against whom, and why" },
        { n: 12, text: "Decide what stays. A rebrand that changes everything fools nobody" },
        { n: 13, text: "Write the three new brand values, each defined in one sentence" },
        { n: 14, text: "Write the tagline: produce five, keep one" },
        { n: 15, text: "Design the new logo, keeping one recognisable element from the old one" },
        { n: 16, text: "Choose the new colour palette and justify it" }
      ] },
    { id: "s4", name: "Campaign", hours: 1.5,
      focus: "Press release register - is delighted to announce / marks a new chapter for",
      steps: [
        { n: 17, text: "Design the launch ad: one image, one line" },
        { n: 18, text: "Storyboard a 45-second video ad in five frames" },
        { n: 19, text: "Write the script" },
        { n: 20, text: "Write the press release announcing the rebrand, 120 words" },
        { n: 21, text: "Write the CEO's quote for the press release" }
      ] },
    { id: "s5", name: "Stress Test", hours: 1,
      focus: "Owning a cost - we accept that / the trade-off is / we'd rather lose them than",
      steps: [
        { n: 22, text: "Name the customers your rebrand will lose" },
        { n: 23, text: "Is that a price worth paying? Answer honestly, in writing" },
        { n: 24, text: "What will people post online in the first 24 hours? Write three realistic comments" },
        { n: 25, text: "Write the company's public reply to the worst one" },
        { n: 26, text: "Another team plays loyal customers and complains; take notes" }
      ] },
    { id: "s6", name: "Board Pitch", hours: 1,
      focus: "Boardroom presenting - if we do nothing / the projected return / I'd urge the board to",
      steps: [
        { n: 27, text: "Build the before-and-after presentation: audit, positioning, identity, campaign, risk" },
        { n: 28, text: "Prepare the visual comparison" },
        { n: 29, text: "Pitch to the class as if they are the brand's board, and take questions" }
      ] }
  ],
  extra: { id: "strategy", label: "Strategic honesty", note: "Does the team own the cost of the rebrand rather than pretending it has none?" },
  phrases: ["it has lost its way", "dated", "out of touch with", "a loyal customer base",
            "we're repositioning it as", "brand values", "a fresh start", "keep what works",
            "alienate", "the trade-off is", "we accept that", "market share",
            "is delighted to announce", "marks a new chapter", "a return to form", "the projected return"],
  notes: "Step 12 is what separates a rebrand from a new company; teams who change everything have not understood the task. Step 22 is the drawback stage and the one that produces genuine B2 concession language. Discourage picking a brand nobody else in the room knows - the pitch lands better when the class has an opinion about the original."
}

];

/* Convenience lookups used by both apps. */
var PROJECT_THEMES = ["Business & enterprise", "Media & entertainment", "Civic & society",
                      "Culture & history", "Technology & design", "Games & design"];

function projectById(id){
  for (var i = 0; i < ADVANCED_PROJECTS.length; i++){
    if (ADVANCED_PROJECTS[i].id === id) return ADVANCED_PROJECTS[i];
  }
  return null;
}
function projectStepCount(p){
  var n = 0;
  for (var i = 0; i < p.stages.length; i++) n += p.stages[i].steps.length;
  return n;
}
function projectCriteria(p){
  return PROJECT_RUBRIC.concat(p.extra ? [{ id: p.extra.id, label: p.extra.label, labelPt: p.extra.labelPt || p.extra.label, note: p.extra.note, project: true }] : []);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ADVANCED_PROJECTS: ADVANCED_PROJECTS, PROJECT_RUBRIC: PROJECT_RUBRIC };
}
