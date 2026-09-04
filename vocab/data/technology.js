/* Technology & AI — 40 items at C1. Schema: word, pos, def, colls[3], ex, note, pitfall, family, tags */
window.VOCAB = window.VOCAB || {};
window.VOCAB.technology = {
  slug: "technology",
  title: "Technology & AI",
  icon: "🖥️",
  blurb: "Systems, security, artificial intelligence and life online.",
  items: [
    {
      word: "algorithm", pos: "n",
      def: "A set of rules a computer follows to solve a problem or make a decision.",
      colls: ["a recommendation algorithm", "tweak / train an algorithm", "the algorithm decides"],
      ex: "The feed algorithm rewards outrage because outrage keeps people scrolling.",
      note: "Increasingly used as a shorthand for automated decision-making in general.",
      pitfall: "Spelling: algo-rithm, with th. Stress on the first syllable.",
      family: "algorithmic (adj)",
      tags: ["tech"]
    },
    {
      word: "automation", pos: "n",
      def: "The use of machines or software to do work previously done by people.",
      colls: ["widespread automation", "automate a process", "automation replaces jobs"],
      ex: "Automation cut the assembly time in half and the payroll by a third.",
      note: "Uncountable. The verb is automate.",
      pitfall: "Not *automatize* or *automatization* — those exist but sound wrong to native ears. Use automate / automation.",
      family: "automate (v) · automated (adj)",
      tags: ["tech"]
    },
    {
      word: "encryption", pos: "n",
      def: "The scrambling of data so that only authorized people can read it.",
      colls: ["end-to-end encryption", "strong encryption", "encrypt a message"],
      ex: "End-to-end encryption means the company itself cannot read what you send.",
      note: "The opposite process is decryption.",
      pitfall: "Uncountable. The verb is encrypt, not *encryptate*.",
      family: "encrypt (v) · encrypted (adj)",
      tags: ["tech"]
    },
    {
      word: "data breach", pos: "n",
      def: "An incident in which private data is accessed or released without permission.",
      colls: ["suffer a data breach", "a massive breach", "disclose a breach"],
      ex: "The hospital took eleven weeks to disclose a breach affecting 40,000 patients.",
      note: "Companies suffer or disclose breaches; attackers cause them.",
      pitfall: "Leak suggests carelessness; breach suggests something was broken into. Choose deliberately.",
      family: "breach (v)",
      tags: ["tech"]
    },
    {
      word: "surveillance", pos: "n",
      def: "Close and continuous observation of people, often by cameras or software.",
      colls: ["under surveillance", "mass surveillance", "surveillance capitalism"],
      ex: "Every purchase, route and pause feeds a system of commercial surveillance.",
      note: "Formal and slightly ominous; monitoring is the neutral word.",
      pitfall: "Pronounced /sərˈveɪləns/ — no v sound in the middle. Not related to vigilance, which means alertness.",
      family: "surveil (v)",
      tags: ["formal", "tech"]
    },
    {
      word: "bandwidth", pos: "n",
      def: "The amount of data a connection can carry, or figuratively, capacity to cope.",
      colls: ["limited bandwidth", "consume bandwidth", "not have the bandwidth for something"],
      ex: "I don't have the bandwidth to take on another class this semester.",
      note: "The figurative sense is now common in professional speech.",
      pitfall: "Uncountable in both senses. The figurative use is informal — avoid it in academic writing.",
      family: "",
      tags: ["tech", "figurative"]
    },
    {
      word: "glitch", pos: "n",
      def: "A small, usually temporary fault in a system.",
      colls: ["a minor glitch", "iron out the glitches", "a technical glitch"],
      ex: "A billing glitch charged some customers twice and no one noticed for a week.",
      note: "Countable and informal; suggests something brief rather than serious.",
      pitfall: "A bug is a flaw in the code; a glitch is a passing malfunction. They aren't interchangeable.",
      family: "glitchy (adj)",
      tags: ["informal", "tech"]
    },
    {
      word: "obsolete", pos: "adj",
      def: "No longer used or useful because something better exists.",
      colls: ["become obsolete", "render something obsolete", "technologically obsolete"],
      ex: "Cloud storage rendered the office server room obsolete within three years.",
      note: "Render obsolete is the standard formal collocation.",
      pitfall: "Say become obsolete, not *get obsolete*. Stress: OB-so-lete.",
      family: "obsolescence (n)",
      tags: ["formal"]
    },
    {
      word: "interface", pos: "n",
      def: "The point where a user and a system meet, or where two systems connect.",
      colls: ["a clean / intuitive interface", "the user interface", "interface with a system"],
      ex: "The data is excellent; the interface makes it almost impossible to reach.",
      note: "Also a verb meaning to connect or communicate with.",
      pitfall: "As a verb it takes with: the app interfaces with the school database.",
      family: "interface (v)",
      tags: ["tech"]
    },
    {
      word: "seamless", pos: "adj",
      def: "Working so smoothly that no joins or interruptions are noticeable.",
      colls: ["a seamless transition", "seamless integration", "work seamlessly"],
      ex: "Moving between the phone and the desktop version is close to seamless.",
      note: "Marketing language, but standard in technical writing about systems.",
      pitfall: "From seam (a join in cloth) — nothing to do with seem. Watch the spelling.",
      family: "seamlessly (adv)",
      tags: ["tech", "figurative"]
    },
    {
      word: "scalable", pos: "adj",
      def: "Able to grow to handle much greater demand without redesign.",
      colls: ["a scalable solution", "scale up / scale back", "scale to millions of users"],
      ex: "The prototype worked beautifully for fifty users and was never scalable beyond that.",
      note: "The verb scale is used intransitively: it doesn't scale.",
      pitfall: "Scale up means grow; scale back means reduce. Don't mix them up.",
      family: "scale (v) · scalability (n)",
      tags: ["tech", "business"]
    },
    {
      word: "disruptive", pos: "adj",
      def: "Radically changing an established market or way of doing things.",
      colls: ["a disruptive technology", "disrupt an industry", "disruptive innovation"],
      ex: "Streaming was disruptive because it made owning a film pointless.",
      note: "Positive in business writing, negative everywhere else.",
      pitfall: "The same word describes a badly behaved student. In Portuguese, disruptivo has drifted toward the positive sense only.",
      family: "disrupt (v) · disruption (n)",
      tags: ["business", "tech"]
    },
    {
      word: "prototype", pos: "n",
      def: "An early working model built to test an idea.",
      colls: ["build a prototype", "a working prototype", "prototype something quickly"],
      ex: "They built a rough prototype in a weekend and abandoned it on Monday.",
      note: "Also a verb: to prototype.",
      pitfall: "A prototype works, at least partly. A mock-up only looks right.",
      family: "prototype (v) · prototyping (n)",
      tags: ["tech"]
    },
    {
      word: "deploy", pos: "v",
      def: "To put a system into active use.",
      colls: ["deploy a system / update", "deploy to production", "a phased deployment"],
      ex: "The update was deployed on a Friday afternoon, which explains the weekend.",
      note: "Originally military — troops are deployed too.",
      pitfall: "In software, deploy means release into use, not merely install on a machine.",
      family: "deployment (n)",
      tags: ["tech"]
    },
    {
      word: "legacy system", pos: "n",
      def: "Old software that is still in use because replacing it is difficult.",
      colls: ["a legacy system", "legacy code", "migrate off a legacy platform"],
      ex: "Payroll still runs on a legacy system that only two people understand.",
      note: "Neutral to negative in tech, unlike legacy elsewhere, which suggests something valuable inherited.",
      pitfall: "A legacy system isn't a prestigious one. The connotation is a burden inherited from the past.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "open-source", pos: "adj",
      def: "Released with code that anyone can inspect, use and modify.",
      colls: ["open-source software", "release something as open source", "an open-source model"],
      ex: "They released the model as open source and a community formed around it in a month.",
      note: "Hyphenated before a noun, two words after a verb.",
      pitfall: "Open source doesn't automatically mean free of charge, and free software is a distinct movement.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "proprietary", pos: "adj",
      def: "Owned by a company and not available for others to use or modify.",
      colls: ["proprietary software", "a proprietary format", "proprietary technology"],
      ex: "The data is locked in a proprietary format the vendor no longer supports.",
      note: "The direct opposite of open-source in most sentences.",
      pitfall: "False friend risk: Portuguese proprietário means owner, which is proprietor in English. Proprietary describes the thing owned, not the person.",
      family: "proprietor (n)",
      tags: ["formal", "tech"]
    },
    {
      word: "cutting-edge", pos: "adj",
      def: "At the most advanced stage of development.",
      colls: ["cutting-edge research", "at the cutting edge of something", "cutting-edge technology"],
      ex: "The lab was cutting-edge in 2015 and is ordinary equipment now.",
      note: "State-of-the-art is a close synonym; bleeding-edge means advanced and still unreliable.",
      pitfall: "Hyphenated as an adjective, but no hyphen in the noun phrase: at the cutting edge.",
      family: "",
      tags: ["figurative"]
    },
    {
      word: "roll out", pos: "v",
      def: "To introduce a product or system gradually and in stages.",
      colls: ["roll out an update", "a phased rollout", "roll out across the region"],
      ex: "The feature will roll out to Brazilian users in March.",
      note: "Noun is one word: rollout.",
      pitfall: "Verb is two words, noun is one. A staged release is a rollout; you roll it out.",
      family: "rollout (n)",
      tags: ["tech", "business"]
    },
    {
      word: "downtime", pos: "n",
      def: "A period when a system is unavailable, or time spent not working.",
      colls: ["scheduled downtime", "minimize downtime", "downtime between classes"],
      ex: "Two hours of unplanned downtime cost more than the upgrade would have.",
      note: "Two senses: system failure, and personal rest. Context separates them cleanly.",
      pitfall: "Uncountable. Opposite in the technical sense is uptime.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "machine learning", pos: "n",
      def: "A method by which systems improve at a task by finding patterns in data.",
      colls: ["a machine learning model", "apply machine learning to something", "machine learning techniques"],
      ex: "Machine learning found the fraud pattern that four years of auditing had missed.",
      note: "A subfield of artificial intelligence, not a synonym for it.",
      pitfall: "Uncountable and takes no article: research in machine learning, not *in the machine learning*.",
      family: "",
      tags: ["tech", "academic"]
    },
    {
      word: "training data", pos: "n",
      def: "The examples a model learns from.",
      colls: ["trained on data", "the training data set", "biased training data"],
      ex: "A model trained mainly on American English will mishear everyone else.",
      note: "Train something on something is the fixed pattern.",
      pitfall: "Data is uncountable in normal use: the data is biased, not *are biased*, in most modern writing.",
      family: "train (v)",
      tags: ["tech"]
    },
    {
      word: "hallucinate", pos: "v",
      def: "Of an AI system, to produce confident information that is simply false.",
      colls: ["hallucinate a citation", "prone to hallucination", "a hallucinated source"],
      ex: "The summary hallucinated two studies that do not exist.",
      note: "A recent technical sense borrowed from psychology, now standard in the field.",
      pitfall: "The system hallucinates the content; the content doesn't hallucinate. Noun: hallucination.",
      family: "hallucination (n)",
      tags: ["tech"]
    },
    {
      word: "algorithmic bias", pos: "n",
      def: "Systematic unfairness produced by an automated system.",
      colls: ["exhibit algorithmic bias", "correct for bias", "bias against a group"],
      ex: "The hiring tool showed clear bias against applicants with gaps in their employment.",
      note: "Bias against a group, bias toward an outcome, bias in favor of something.",
      pitfall: "Bias is uncountable when general, countable when specific: a bias toward recent data.",
      family: "biased (adj)",
      tags: ["tech", "academic"]
    },
    {
      word: "black box", pos: "n",
      def: "A system whose internal workings cannot be inspected or explained.",
      colls: ["a black box model", "the black box problem", "open up the black box"],
      ex: "The bank cannot explain a refusal because the model is a black box.",
      note: "Also the flight recorder on an aircraft — a different metaphor entirely.",
      pitfall: "Hyphenate before a noun: a black-box system.",
      family: "",
      tags: ["figurative", "tech"]
    },
    {
      word: "prompt", pos: "n",
      def: "The instruction given to an AI system to produce a response.",
      colls: ["write a prompt", "refine your prompt", "prompt engineering"],
      ex: "Half the skill is knowing that a vague prompt produces a vague answer.",
      note: "Also a verb in this sense, and an old teaching word for cueing a student.",
      pitfall: "False friend: Portuguese pronto means ready. English prompt as an adjective means punctual — a prompt reply.",
      family: "prompt (v) · promptly (adv)",
      tags: ["tech"]
    },
    {
      word: "generative", pos: "adj",
      def: "Able to produce new text, images or sound rather than only classify them.",
      colls: ["generative AI", "a generative model", "generative tools"],
      ex: "Generative tools reached the classroom faster than any policy about them did.",
      note: "Distinguishes newer systems from earlier predictive or classifying ones.",
      pitfall: "Not a synonym for AI in general. A spam filter is AI but not generative.",
      family: "generate (v) · generation (n)",
      tags: ["tech"]
    },
    {
      word: "deepfake", pos: "n",
      def: "A synthetic video or recording that convincingly imitates a real person.",
      colls: ["a convincing deepfake", "detect deepfakes", "deepfake audio"],
      ex: "A deepfake of the mayor circulated for six hours before anyone checked.",
      note: "Countable, one word, no capital letter.",
      pitfall: "A deepfake imitates a specific real person. AI-generated images of imaginary people are not deepfakes.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "misinformation", pos: "n",
      def: "False information spread without the intention to deceive.",
      colls: ["spread misinformation", "combat misinformation", "a wave of misinformation"],
      ex: "Most of what circulated was misinformation — worried people sharing what they'd been sent.",
      note: "Disinformation is the deliberate version.",
      pitfall: "Intent is the whole difference. Uncountable: *misinformations* is wrong.",
      family: "misinform (v)",
      tags: ["academic", "formal"]
    },
    {
      word: "digital footprint", pos: "n",
      def: "The trail of data a person leaves through online activity.",
      colls: ["leave a digital footprint", "shrink your footprint", "an extensive digital footprint"],
      ex: "By the time she applied, her digital footprint stretched back eleven years.",
      note: "Verbs follow the metaphor: leave, trace, erase.",
      pitfall: "Distinct from carbon footprint, which is about emissions. Don't blend the two.",
      family: "",
      tags: ["figurative", "tech"]
    },
    {
      word: "opt out", pos: "v",
      def: "To choose not to take part in something you are enrolled in by default.",
      colls: ["opt out of data sharing", "an opt-out system", "opt in to notifications"],
      ex: "You can opt out of tracking, but the setting is four menus deep.",
      note: "The opposite is opt in. Adjective and noun are hyphenated: an opt-out clause.",
      pitfall: "Always with of: opt out of the scheme, never *opt out from*.",
      family: "opt-out (n, adj) · opt in (v)",
      tags: ["tech", "formal"]
    },
    {
      word: "phishing", pos: "n",
      def: "Fraud that tricks people into giving up passwords or bank details.",
      colls: ["a phishing email", "fall for a phishing scam", "phishing attempt"],
      ex: "The message imitated the payroll system closely enough that two people fell for it.",
      note: "Deliberately misspelled fishing; targeted versions are called spear phishing.",
      pitfall: "Pronounced exactly like fishing. Uncountable — say a phishing email, not *a phishing*.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "malware", pos: "n",
      def: "Software designed to damage a system or steal from it.",
      colls: ["install malware", "malware infection", "detect malware"],
      ex: "The malware sat undetected on the network for four months.",
      note: "Covers viruses, ransomware, spyware and more.",
      pitfall: "Uncountable, like software: a piece of malware, never *a malware*.",
      family: "",
      tags: ["tech"]
    },
    {
      word: "streamline", pos: "v",
      def: "To simplify a process so it runs faster and with less waste.",
      colls: ["streamline a process", "streamline operations", "a streamlined workflow"],
      ex: "Streamlining enrollment removed three forms and a week of waiting.",
      note: "From aerodynamics — the image is reducing drag.",
      pitfall: "Nothing to do with streaming video. Different word, different root.",
      family: "streamlined (adj)",
      tags: ["business", "figurative"]
    },
    {
      word: "tech-savvy", pos: "adj",
      def: "Skilled and confident with technology.",
      colls: ["tech-savvy users", "increasingly tech-savvy", "less tech-savvy customers"],
      ex: "The design assumes a tech-savvy user, which excludes most of the people who need it.",
      note: "Savvy alone works as an adjective and a noun.",
      pitfall: "Informal. In formal writing prefer digitally literate.",
      family: "savvy (adj, n)",
      tags: ["informal"]
    },
    {
      word: "early adopter", pos: "n",
      def: "Someone who starts using a new technology before most people do.",
      colls: ["early adopters of a platform", "appeal to early adopters", "an early-adopter market"],
      ex: "Early adopters paid twice the price for half the battery life.",
      note: "From diffusion of innovations theory, alongside laggards and the early majority.",
      pitfall: "Adopt, not *adapt*. Adopt means take up; adapt means change to fit.",
      family: "adopt (v) · adoption (n)",
      tags: ["business", "academic"]
    },
    {
      word: "planned obsolescence", pos: "n",
      def: "Designing products to stop working or feel outdated after a set time.",
      colls: ["accuse a company of planned obsolescence", "built-in obsolescence", "a cycle of obsolescence"],
      ex: "A battery that cannot be replaced is planned obsolescence with a warranty attached.",
      note: "Built-in obsolescence means the same thing.",
      pitfall: "Spelling: obsolescence, with -sc-. Uncountable.",
      family: "obsolete (adj)",
      tags: ["formal", "academic"]
    },
    {
      word: "content moderation", pos: "n",
      def: "The reviewing and removal of harmful material on a platform.",
      colls: ["content moderation policies", "moderate a platform", "outsourced moderation"],
      ex: "Moderation is outsourced to contractors reviewing a thousand posts a shift.",
      note: "A moderator is the person; moderation is the process.",
      pitfall: "Moderation also means restraint, as in drink in moderation. Two unrelated senses.",
      family: "moderate (v) · moderator (n)",
      tags: ["tech", "formal"]
    },
    {
      word: "digital detox", pos: "n",
      def: "A deliberate period away from screens and online life.",
      colls: ["go on a digital detox", "a weekend digital detox", "detox from social media"],
      ex: "A weekend digital detox is a lot easier to announce than to finish.",
      note: "Countable, mildly journalistic; the same metaphor as a dietary detox.",
      pitfall: "Detox from something, not *detox of*.",
      family: "detox (v)",
      tags: ["informal", "figurative"]
    },
    {
      word: "screen time", pos: "n",
      def: "The amount of time a person spends looking at screens.",
      colls: ["limit screen time", "excessive screen time", "average daily screen time"],
      ex: "Her screen time report arrived on Sunday and ruined the morning.",
      note: "Two words as a noun; increasingly a metric people track.",
      pitfall: "Uncountable: three hours of screen time, not *three screen times*.",
      family: "",
      tags: ["informal"]
    }
  ]
};
