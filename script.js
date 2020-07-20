const chart = {"Apathy": ["Absurd", "All alone", "Blase", "Bleak", "Bored", "Can't win", "Careless", "Cold", "Confused", "Cut off", "Dead", "Defeated", "Depressed", "Demoralized", "Desolate", "Depressed", "Depleted", "Despair", "Discouraged", "Disillusioned", "Disinterest", "Dismal", "Dispassion", "Disregard", "Doomed", "Drained", "Dull", "Exhausted", "Emoti onless", "Estranged", "Failure", "Fatalistic", "Fatigued", "Forgetful", "Forlorn", "Futile", "Giving up", "Hardened", "Helpless", "Hopeless", "Humorless", "I can't", "I don't care", "I don't count", "Immobile", "Impossible", "Inactive", "Inattentive", "Indecisive", "Indifferent", "Invisible", "Isolated", "It's too late", "Lazy", "letdown", "Let it wait", "Lethargic", "Listless", "Loser", "Lost", "Meaningless", "Mechanical", "Moping", "Negative", "Numb", "Overwhelmed", "Passive", "Pessimistic", "Pointless", "Powerless", "Resigned", "Senseless", "Shock", "Sluggish", "Slump", "Spaced out", "Stagnant", "Stoned", "Stuck", "Too hard", "Too late", "Too old", "Too tired", "Too young", "Unfeeling", "Unfocused", "Unfulfilling", "Unresponsive", "Useless", "Vague", "Weak", "Wasted", "What's the use?", "Who cares?", "Why Try?", "Why bother?", "Withdrawn", "Worthless"], "Grief": ["Abandoned", "Abused", "Accused", "Agony", "Anguished", "Ashamed", "Bereaved", "Betrayed", "Blue", "Cheated", "Desolation", "Despair", "Depression", "Disappointed", "Distraught", "Distress", "Embarrassed", "Forgotten", "Gloom", "Grieving", "Guilty", "Heartache", "Heartbroken", "Heartsick", "Helpless", "Hopeless", "Hurt", "If only", "Ignored", "Inadequate", "Inconsolable", "Irretrievable loss", "It's not fair", "Left out", "Longing", "Loss", "Melancholy", "Misery", "Misunderstood", "Mortified", "Mourning", "Neglected", "Nobody cares", "Nobody loves me", "Nostalgia", "Nothing helps", "Pain", "Passed over", "Pessimism", "Pity", "Poor me", "Regret", "Rejected", "Remorse", "Sadness", "Sorrow", "Tearful", "Too difficult", "Tormented", "Torn", "Tortured", "Unhappy", "Unloved", "Unwanted", "Vulnerable", "Why me?", "Wounded", "Won't make it"], "Fear": ["Anxious", "Apologetic", "Apprehensive", "Blocked", "Cautious", "Chaotic", "Clammy", "Cold feet", "Cold sweat", "Concern", "Cowardice", "Defensive", "Distrust", "Doubt", "Dread", "Embarrassed", "Evasive", "Exposed", "Fidgety", "Foreboding", "Frantic", "Fright", "Frozen", "Guilty", "Hesitant", "Horrified", "Hyper-focused", "Hyper-vigilant", "Hysterical", "Indecisive", "Inhibited", "Insecure", "Irrational", "Nausea", "Nervous", "Nightmare", "Overwhelmed", "Panic", "Paralyzed", "Paranoid", "Phobia", "Procrastination", "Scared", "Self-sabotage", "Secretive", "Shaky", "Shy", "Skeptical", "Stage fright", "Speechless", "Superstitious", "Suspicious", "Tense", "Terrified", "Threatened", "Timid", "Trapped", "Traumatized", "Trembling", "Trepidation", "Uncertain", "Uneasy", "Vulnerable", "Want to scape", "Wary", "Worry"], "Lust": ["Abandon", "Acquisitive", "Addictive", "Ambitious", "Anticipation", "Appetite", "Callous", "Can't wait", "Clinging", "Compulsive", "Control", "Craving", "Demanding", "Desire", "Desperate", "Devious", "Driven", "Envy", "Enslaved", "Exaggeration", "Excessive", "Excitement", "Exploitative", "Extravagant", "Fixated", "Frenzy", "Frustrated", "Glamorization", "Gluttonous", "Greedy", "Hankering", "Hoarding", "Horny", "Hunger", "I want", "Impatient", "Insatiable", "Itch", "Jealous", "Lavi sh", "Lecherous", "Less than", "Libido", "Longing", "Manic", "Manipulative", "Miserly", "Must have it", "Needy", "Never Enough", "Never Satisfied", "Oblivious", "Obsessed", "Over ambition", "Over-Indulgent", "Over-eating", "Possessive", "Predatory", "Pushy", "Ravenous", "Reckless", "Risqu\u00c3\u00a9", "Ruthless", "Scheming", "Seductive", "Selfish", "Sensuality", "Thirst", "Urge", "Voracious", "Weakness for", "Wild", "Yearning"], "Anger": ["Abrasive", "Abusive", "Aggressive", "Agitated", "Animosity", "Annoyed", "Antagonistic", "Argumentative", "Attack", "Belligerent", "Boiling", "Brooding", "Brutal", "Caustic", "Contempt", "Cruel", "Defiant", "Demanding", "Destructive", "Disgust", "Exasperation", "Explosive", "Ferocious", "Fierce", "Frustrated", "Fuming", "Furious", "Harsh", "Hatred", "Heartless", "Hostility", "Impatience", "Indignant", "Infuriated", "Instigating", "Irate", "Irritated", "Jealous", "Livid", "Mad", "Malicious", "Mean", "Merciless", "Miffed", "Murderous", "Nasty", "Negativity", "Outraged", "Passive-aggressive", "Peeved", "Petulant", "Pouting", "Punishing", "Pushy", "Rage", "Rebellious", "Resentment", "Resistant", "Revenge", "Revolted", "Rude", "Ruthless", "Sarcastic", "Savage", "Simmering", "Sizzling", "Smolder ing", "Spiteful", "Steely", "Stern", "Stewing", "Stubborn", "Sullen", "Temper", "Vengeful", "Vicious", "Vindictive", "Violent", "Wicked", "Volcanic", "Wicked", "Willful", "Wrath"], "Pride": ["Above it all", "Above reproach", "Aloof", "Arrogant", "Better than", "Bigoted", "Boastful", "Bored", "Bragging", "Clever", "Closed", "Complacent", "Conceited", "Condescending", "Contemptuous", "Cool", "Critical", "Denial", "Disdain", "Disrespectful", "Dogmatic", "Egotistical", "False dignity", "False humility", "False virtue", "Fancy talk", "Gloating", "Haughty", "Holier than thou", "Hypocritical", "Icy", "Inflated", "Irreverent", "Isolated", "Judgmental", "Know it all", "Narcissistic", "Narrow minded", "Never wrong", "One-up", "Opinionated", "Overbearing", "Over-valuation", "Patronizing", "Pious", "Playing the martyr", "Pigeonholing", "Pompous", "Prejudiced", "Presumptuous", "Pretentious", "Rejecting", "Righteous", "Rigid", "Self absorbed", "Self centered", "Self glorification", "Self satisfied", "Self worship", "Selfish", "Showing off", "Smug", "Snobbish", "Special", "Spoiled", "Stoic", "Stubborn", "Stuck-up", "Superior", "Swaggering", "Uncompromising", "Unfeeling", "Unforgiving", "Unyielding", "Vain"], "Courage": ["Able", "Active", "Adaptive", "Adequate", "Adventurous", "Alert", "Alive", "Assured", "Aware", "Balanced", "Brave", "Capable", "Centered", "Certain", "Cheerful", "Clarity", "Commitment", "Compassion", "Competent", "Confident", "Cooperative", "Creative", "Daring", "Decisive", "Dedicated", "Determined", "Dynamic", "Eager", "Energetic", "Enthusiastic", "Exhilaration", "Explorative", "Flexible", "Focused", "Generous", "Giving", "Happy", "Honesty", "Honorable", "Hopeful", "Humor", "I can", "Independent", "Initiative", "Integrity", "Inventive", "Invincible", "Joyous", "Loving", "Lucid", "Motivated", "Non-resistant", "Open", "Optimistic", "Passionate", "Persevering", "Persistent", "Perspective", "Positive", "Purposeful;", "Receptive", "Resilient", "Resolute", "Resourceful", "Responsive", "Risk taker", "Secure", "Self - sufficient", "Sharp", "Skillful", "Spirit", "Spontaneous", "Strong", "Supportive", "Tireless", "Valiant", "Vigorous", "Visionary", "Willing", "Zealous", "Zest"], "Acceptance": ["Abundance", "Accepting", "Appreciative", "Attuned", "Balanced", "Beautiful", "Belonging", "Be of service", "Benevolent", "Caring", "Childlike", "Compassion", "Connected", "Considerate", "Content", "Delight", "Elated", "Embracing", "Empathy", "Enjoyment", "Enriched", "Everything's okay", "Flowing", "Friendly", "Fulfillment", "Fullness", "Gentle", "Glowing", "Goodwill", "Gracious", "Grounded", "Happiness", "Harmonious", "Harmony", "I have", "Innocent", "Intuitive", "In tune", "It's okay", "Joyful", "Loving", "Magnanimous", "Mellow", "Naturalness", "Non-judgmental", "Nothing to change", "Open", "Playful", "Radiant", "Receptive", "Relaxed", "Satisfied", "Secure", "Soft", "Self worth", "Stability", "Tender", "Understanding", "Warm", "Well-being", "Wonder"], "Love": ["Affectionate", "Appreciation", "Complete", "Collaborative", "Forgiving", "Generous", "Gracious", "Gratitu de", "Heart felt", "Holistic", "Humility", "Nurturing", "Protective", "Purity", "Steadfast", "Sweetness", "Uplifting", "Vision", "Warmth"], "Peace": ["Actionless", "Ageless", "Awareness", "Balanced", "Being", "Bliss", "Boundless", "Calm", "Centered", "Complete", "Composed", "Connected", "Eterna l", "Flawless", "Free", "Fulfilled", "Glowing", "I am", "Imperturbable", "Infinite", "Knowingness", "Light", "Limitless", "Oneness", "Perfection", "Presence", "Pure", "Quiet", "Self possessed", "Selfless", "Serenity", "Silence", "Space", "Still", "Timeless", "Tranquility", "United", "Unlimited", "Whole", "Witnessing"]}

function buildHTML() {
  // Construct HTML elements
  const main = document.getElementById("main");

  // For each key in object create a div with a head and a list
  for (const [key, value] of Object.entries(chart)) {
    // Create elements
    let div = document.createElement("div");
    div.classList.add("column");
    let head = document.createElement("h2");
    head.classList.add("subheader");
    let ul = document.createElement("ul");
    ul.classList.add("list");

    // Create header named after key
    head.appendChild(document.createTextNode(key));

    // For each item in list create a li and add to the ul
    for (const subItem of value) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(subItem));
      ul.appendChild(li);
    }
    // Add the head and the ul to the div and div to the main
    div.appendChild(head);
    div.appendChild(ul);
    main.appendChild(div);
  }
}

function setBackground() {
  // Get window dimensions
  const width = document.documentElement.offsetWidth;
  const height = document.documentElement.offsetHeight;

  var randomBackground = new Image();
  // Wait for image to load then display a filter over it
  randomBackground.addEventListener("load", () => {
    document.body.style.background =
        `linear-gradient( rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88) ), ` + // This makes it dark
        `url('${randomBackground.src}') ` +
        `no-repeat center`;
  });
  // Get the background
  randomBackground.src = `https://source.unsplash.com/featured/${width}x${height}/?clouds`;
}

buildHTML();
setBackground();
