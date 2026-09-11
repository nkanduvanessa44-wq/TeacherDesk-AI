import { CurriculumSubject } from "./types";

export const PROVINCES_OF_ZAMBIA = [
  "Central",
  "Copperbelt",
  "Eastern",
  "Luapula",
  "Lusaka",
  "Muchinga",
  "Northern",
  "North-Western",
  "Southern",
  "Western"
];

export const SUBJECTS_LIST = [
  "Mathematics",
  "Integrated Science",
  "Biology",
  "Chemistry",
  "Physics",
  "English Language",
  "Social Studies",
  "Civic Education",
  "Home Economics",
  "Agricultural Science",
  "Information & Communications Technology (ICT)",
  "Early Childhood Education",
  "Fashion and Fabrics",
  "Commerce",
  "Principles of Accounts",
  "Food and Nutrition",
  "Geography",
  "Design and Technology",
  "Literature in English"
];

export const GRADES_LIST = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12"
];

export const CURRICULUM_DATA_ZAMBIA: CurriculumSubject[] = [
  {
    id: "ece",
    name: "Early Childhood Education",
    grades: ["Grade 1", "Grade 2"],
    topics: [
      {
        grade: "Grade 1",
        topicName: "Pre-Literacy & Language",
        subtopics: ["Alphabet letter recognition", "Phonics sounds on simple vowels", "Telling simple folktales orally"],
        competencies: ["Formulate basic phonetic associations", "Recite simple nursery songs and rhymes"],
        outcomes: ["Understand vocabulary for local classroom objects", "Demonstrate active listing & conversational turn-taking"]
      },
      {
        grade: "Grade 1",
        topicName: "Pre-Mathematics & Science",
        subtopics: ["Counting and writing numbers 1 to 10", "Sorting shapes on size & color", "Our five senses exploration"],
        competencies: ["Compare collections of basic counters", "Perform object sorting on simple attributes"],
        outcomes: ["Identify basic circles, squares, and triangles", "Demonstrate understanding of hot/cold and day/night cycles"]
      },
      {
        grade: "Grade 1",
        topicName: "Creative & Technology Studies",
        subtopics: ["Scribbling and hand coordination", "Basic pattern coloring", "Technology tool spotting (phones, tablets)"],
        competencies: ["Grip coloring instruments using tripod fingers", "Conduct finger painting and paper folding"],
        outcomes: ["Express creativity through musical song and dance", "Spot simple everyday technology gadgets safely"]
      }
    ]
  },
  {
    id: "science",
    name: "Integrated Science",
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"],
    topics: [
      {
        grade: "Grade 1",
        topicName: "Our Body and Senses",
        subtopics: ["Identifying main body parts", "The five senses and their organs", "Personal hygiene: Washing hands"],
        competencies: ["Name basic parts of the body", "Demonstrate how to wash hands with clean water and soap"],
        outcomes: ["Recognize the five sensory organs", "Explain the importance of keeping the body clean"]
      },
      {
        grade: "Grade 2",
        topicName: "Plants Around Us",
        subtopics: ["Parts of a local plant", "Things plants need to grow (sun, water, soil)", "Useful plants in our community"],
        competencies: ["Draw and label three parts of a plant", "Observe and describe how seeds sprout in local soil"],
        outcomes: ["List the basic requirements for healthy plant growth", "Identify crops grown for food locally"]
      },
      {
        grade: "Grade 8",
        topicName: "Ecosystems and Environment",
        subtopics: ["Food Chains and Webs", "Producers & Decomposers", "Biotic and Abiotic Factors", "Zambian Wildlife Conservation"],
        competencies: ["Identify feeding relationships", "Diagram trophic levels", "Advocate for environmental preservation in local communities"],
        outcomes: ["Trace energy flow through trophic food web levels", "Distinguish abiotic elements from biotic organisms"]
      },
      {
        grade: "Grade 8",
        topicName: "The Human Digestive System",
        subtopics: ["Organs of Digestion", "Enzymes & Chemical Digestion", "Absorption of Nutrients", "Malnutrition and Zambian Diets"],
        competencies: ["Label digestion anatomy", "Determine enzyme operations", "Design balanced organic school feeding charts"],
        outcomes: ["Explain ingestion, digestion, and absorption", "Analyze consequences of protein-energy malnutrition"]
      },
      {
        grade: "Grade 9",
        topicName: "The Circulatory System",
        subtopics: ["Structure of the Heart", "Blood Composition & Transport", "Circulatory Diseases", "Anemia and Sickle Cell in Africa"],
        competencies: ["Take pulse measurements", "Identify red and white blood cells under a lens", "Recommend heart-healthy exercise habits"],
        outcomes: ["Trace blood pathways through pulmonary and systemic loops", "Describe role of hemoglobin in oxygen transportation"]
      }
    ]
  },
  {
    id: "biology",
    name: "Biology",
    grades: ["Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 10",
        topicName: "Concepts and Methods in Biology",
        subtopics: ["Scientific inquiry steps", "Branches of biology", "Levels of biological organisation"],
        competencies: ["Apply scientific inquiry in biological experiments", "Classify levels of biological organisation from cells to biosphere"],
        outcomes: ["Formulate research hypotheses", "Acknowledge biology's role in addressing health and environmental challenges"]
      },
      {
        grade: "Grade 10",
        topicName: "Principles of Cellular Life",
        subtopics: ["Eukaryotic and prokaryotic cells", "Organelle structures and functions", "Microscope usage & staining"],
        competencies: ["Examine plant and animal cell structures under a light microscope", "Conduct simple cell staining on specimens"],
        outcomes: ["Explain cell specialization", "Demonstrate correct microscope focusing and calibration techniques"]
      },
      {
        grade: "Grade 10",
        topicName: "Chemicals of Life",
        subtopics: ["Carbohydrates, Lipids, Proteins and Nucleic acids", "Monomers and polymers", "Food tests and reagents"],
        competencies: ["Prepare reagents like Benedict's and Biuret solutions", "Conduct confirmatory tests for organic molecules in food samples"],
        outcomes: ["Describe dehydration synthesis and hydrolysis reactions", "Summarize the nutritional value of different organic groups"]
      },
      {
        grade: "Grade 11",
        topicName: "Nutrition in Plants & Animals",
        subtopics: ["Photosynthesis mechanics", "Holozoic nutrition in humans", "Alimentary canal structure", "Enzyme functions"],
        competencies: ["Examine the cross-section of a dicotyledonous leaf", "Model nutritional values of different diets"],
        outcomes: ["Formulate chemical equations for photosynthesis", "Detail ingestion, chemical digestion, and absorption stages"]
      },
      {
        grade: "Grade 11",
        topicName: "Gaseous Exchange & Respiration",
        subtopics: ["Respiratory systems in insects, fish and humans", "Alveoli structures", "Aerobic vs Anaerobic respiration"],
        competencies: ["Calculate respiratory rates of human subjects", "Model chemical paths of ATP production"],
        outcomes: ["Trace gas diffusing pathways over mammalian membranes", "Highlight negative respiratory impacts page of smoking and smog"]
      },
      {
        grade: "Grade 12",
        topicName: "Excretion & Homeostasis",
        subtopics: ["Structure of the human kidney", "Urine formation and osmoregulation", "Thermoregulation", "The human skin"],
        competencies: ["Label cross-sections of human kidneys", "Deduce positive/negative feedback loops on body temperature"],
        outcomes: ["Explain ultrafiltration and selective reabsorption in Nephrons", "Specify kidney stone and failure hazards"]
      },
      {
        grade: "Grade 12",
        topicName: "Heredity & Variation",
        subtopics: ["Mendelian monohybrid crosses", "Chromosomes & DNA structures", "Genetic mutations (Down's, Sickle Cell)", "Variation in populations"],
        competencies: ["Solve Mendelian genetics problems using Punnett squares", "Analyse variation types (continuous vs discontinuous)"],
        outcomes: ["State principles of natural selection and evolution", "Acknowledge genetic engineering ethical boundaries"]
      }
    ]
  },
  {
    id: "math",
    name: "Mathematics",
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 1",
        topicName: "Numbers up to 20",
        subtopics: ["Counting and writing numbers 1 to 20", "More than and less than concepts", "Basic addition under 10"],
        competencies: ["Count 20 items consecutively", "Compare quantities of objects using counters"],
        outcomes: ["Recognize and write numbers from 1 to 20", "Solve basic pictorial aggregate arithmetic"]
      },
      {
        grade: "Grade 8",
        topicName: "Integers and Algebra",
        subtopics: ["Addition of Signed Integers", "Simplifying Polynomials", "Solving Linear Equations", "Zambian Market Word Problems"],
        competencies: ["Model numbers on standard axes", "Factor algebraic terms", "Apply mental arithmetic for shopkeeping scenarios"],
        outcomes: ["Solve systems of linear equations in one variable", "State distributive and associative algebra rules"]
      },
      {
        grade: "Grade 9",
        topicName: "Geometry & Mensuration",
        subtopics: ["Angles on Parallel Lines", "Area of Triangles and Circles", "Volume of Prisms and Pyramids", "Drafting Plan Diagrams"],
        competencies: ["Utilize protractor accurately", "Calculate volumes of grain silos", "Prove parallel angle theorems"],
        outcomes: ["Calculate surface areas and volumes of 3D shapes", "Demonstrate basic Pythagoras theorem applications"]
      },
      {
        grade: "Grade 10",
        topicName: "Sets & Venn Diagrams",
        subtopics: ["Set notation", "Union, intersection and complement of sets", "Venn diagrams on up to 3 sets"],
        competencies: ["Solve word problems involving set properties using Venn diagrams", "Perform set shading and listing exercises"],
        outcomes: ["Understand set language", "Express real life demographics geometrically using set theory"]
      },
      {
        grade: "Grade 10",
        topicName: "Algebraic Processes",
        subtopics: ["Expansion of quadratic expressions", "Factorisation", "Algebraic fractions simplification"],
        competencies: ["Operate carry-over algebra solutions", "Solve quadratic mathematical operations safely"],
        outcomes: ["Factorise simple differences of two squares structures", "Combine and condense fractional algebra"]
      },
      {
        grade: "Grade 11",
        topicName: "Coordinate Geometry & Functions",
        subtopics: ["Mid-point and gradient of a straight line", "Equation of a straight line", "Types of relations & mappings", "Inverse functions"],
        competencies: ["Determine slopes on the cartesian axes plane", "Find intersections of linear lines", "Formulate inverse equation codes"],
        outcomes: ["Construct direct equations from two coordinates", "Differentiate composite functions from simple relations"]
      },
      {
        grade: "Grade 11",
        topicName: "Trigonometry & Bearing",
        subtopics: ["Trigonometric ratios (Sine, Cosine, Tangent)", "Sine and Cosine rules", "Three-figure compass bearings"],
        competencies: ["Calculate missing angles in obtuse triangles", "Solve navigation problems involving vector directions"],
        outcomes: ["Formulate heights and distances using trigonometry", "Find real distance values from bearings maps"]
      },
      {
        grade: "Grade 12",
        topicName: "Matrices and Transformations",
        subtopics: ["Addition, subtraction & multiplication of matrices", "Determinant and inverse of a 2x2 matrix", "Geometrical transformations (Translation, Reflection, Rotation)"],
        competencies: ["Evaluate matrix operations", "Analyze on-axis coordinate movements under reflection matrices"],
        outcomes: ["Solve simultaneous equations using matrix inverses", "Categorize transformations into isometric or non-isometric operations"]
      },
      {
        grade: "Grade 12",
        topicName: "Calculus & Probability",
        subtopics: ["Rules of limits & differentiation", "Definite Integration of polynomials", "Theoretical & experimental probability"],
        competencies: ["Compute first derivatives of polynomial equations", "Calculate area under curve lines", "Model complex probability matrices"],
        outcomes: ["Evaluate velocity-time rates", "Acknowledge probability ratios for independent events"]
      }
    ]
  },
  {
    id: "english",
    name: "English Language",
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Grammar & Sentence Construction",
        subtopics: ["Subject-Verb Agreement", "Active and Passive Voice", "Prepositions of Place and Direction", "Storytelling and Zambian Folklore"],
        competencies: ["Draft grammatical story compositions", "Correct verb tense mismatches", "Participate in structured spelling drills"],
        outcomes: ["Formulate written profiles using compound sentences", "Convert narrative text into passive formats"]
      },
      {
        grade: "Grade 9",
        topicName: "Letter Writing & Communication",
        subtopics: ["Formal Letters to Authorities", "Informal Letters to Peers", "E-mail Communication Standards", "Zambian Career Cover Letters"],
        competencies: ["Structure professional salutations", "Advise on local civil complaints", "Write concise requests for academic sponsorship"],
        outcomes: ["Demonstrate writing a coherent 300-word block explaining community sanitation proposals", "Organize paragraphs logically"]
      },
      {
        grade: "Grade 10",
        topicName: "Comprehension & Vocabulary",
        subtopics: ["Reading for main ideas", "Contextual vocabulary analysis", "Précis/Summary writing rules"],
        competencies: ["Identify main arguments in long articles", "Draft a precise summary block restricted to 100 words"],
        outcomes: ["Deduce meaning from context", "Condense technical passages into simplified and concise summaries"]
      },
      {
        grade: "Grade 11",
        topicName: "Report and Speech Writing",
        subtopics: ["Investigative school reports", "Persuasive writing and public speeches", "Formal minutes of meetings"],
        competencies: ["Structure and write official school assembly reports", "Deliver a persuasive presentation on cross-cutting themes"],
        outcomes: ["Demonstrate reporting objectivity in summaries", "Explain structural specifications of formal executive minutes"]
      }
    ]
  },
  {
    id: "literature",
    name: "Literature in English",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Introduction to Literature",
        subtopics: ["Meaning and functions of literature", "Prose, Drama, and Poetry genres overview", "Literary terminologies"],
        competencies: ["Distinguish between story text and daily reports", "Draft basic short creative fables"],
        outcomes: ["Explain five primary functions of literature", "Recognize simple literary structures"]
      },
      {
        grade: "Grade 8",
        topicName: "Forms of Oral Literature",
        subtopics: ["Traditional folktales and myths", "Zambian riddles and proverbs", "Traditional songs and praises"],
        competencies: ["Recite oral praise poems from local traditions", "Explain meanings of common cultural proverbs"],
        outcomes: ["Summarize the morality traits inside folklore", "Acknowledge the role of oral literature in passing on history"]
      },
      {
        grade: "Grade 9",
        topicName: "Elements of Oral & Written Prose",
        subtopics: ["Plot elements (Exposition, rising action, climax)", "Character traits (Protagonist, antagonist, flat/round)", "Theme and setting parameters"],
        competencies: ["Analyse the setting inside custom short stories", "Create short stories reflecting cross-cutting social issues"],
        outcomes: ["Deduce the conflict resolutions in written works", "Compare round and flat characters in textual context"]
      },
      {
        grade: "Grade 10",
        topicName: "Zambian Written Literature",
        subtopics: ["Historical development of Zambian writing", "Works of prominent Zambian authors (Kaunda, Sinyangwe, Mulikita)", "Cultural conflicts in novels"],
        competencies: ["Contrast modern themes with traditional cultural roots in stories", "Present analytical character sketches from national core books"],
        outcomes: ["Deconstruct authors' motives and perspectives on colonial transformation", "Summarize complex thematic chapters"]
      },
      {
        grade: "Grade 11",
        topicName: "Drama & Theater Studies",
        subtopics: ["Elements of plays (acts, scenes, dialogue)", "Dramatisation mechanics and staging", "Tragedy vs comedy forms"],
        competencies: ["Dramatise short scenes focusing on voice projection and gestures", "Interpret staging directions correctly"],
        outcomes: ["Detail the dramatic irony instances inside scripts", "Outline responsibilities of costume, sound, and lighting controllers"]
      },
      {
        grade: "Grade 12",
        topicName: "Poetry Analysis",
        subtopics: ["Elements of verse (stanzas, rhyme schema, meter)", "Poetic devices (simile, metaphor, personification, imagery)", "Analysis of prescribed poetry books"],
        competencies: ["Deconstruct sound devices like assonance and consonance", "Compose structured poetry reflecting environmental stewardship"],
        outcomes: ["Deduce implicit meanings behind metaphorical language", "Summarize overall emotional/didactic objectives of selected verses"]
      }
    ]
  },
  {
    id: "civic_education",
    name: "Civic Education",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Introduction to Civic Education",
        subtopics: ["Meaning, goal and importance of Civic Education", "Rights and responsibilities as a Zambian citizen", "Personal finance basics"],
        competencies: ["Explain civic responsibilities in community welfare", "Practise basic budget mapping for personal expenditures"],
        outcomes: ["Acknowledge why civic education is vital to democratic societies", "Develop positive and collaborative citizen habits"]
      },
      {
        grade: "Grade 8",
        topicName: "Political Development & Governance",
        subtopics: ["Political transitions from 1890 to present day", "Meaning and types of governance", "Good vs bad governance indicators"],
        competencies: ["Analyse historic parameters of Zambia's independence path", "Contrast democratic systems with dictatorial structures"],
        outcomes: ["State characteristics of transparency and accountability in governance", "Acknowledge the role of institutions in community services"]
      },
      {
        grade: "Grade 9",
        topicName: "Constitution & Elections",
        subtopics: ["The Constitution: types and development process", "Zambian Constitution structure and Bill of Rights", "Elections: purpose and role of ECZ"],
        competencies: ["Explain stages of constitution adoption in Zambia", "Analyse voting procedures and election ethics"],
        outcomes: ["Detail the civic rights protected under the Bill of Rights", "Suggest measures to mitigate electoral malpractices"]
      },
      {
        grade: "Grade 9",
        topicName: "Economic & Social Development",
        subtopics: ["Factors of production and trade", "Taxation types and the function of ZRA", "E-Commerce and banking services in Zambia"],
        competencies: ["Calculate basic taxes on trade operations", "Explain safe digital payment transactions and consumer protection"],
        outcomes: ["Detail the economic importance of tax compliance", "Know channels for reporting consumer exploitations in local regions"]
      },
      {
        grade: "Grade 10",
        topicName: "Corruption & Crime",
        subtopics: ["Types of corruption: Grand, petty, political", "Institutions fighting corruption (ACC, Auditor General)", "Effects of drug abuse on community health"],
        competencies: ["Explain methods to identify and report corrupt situations", "Formulate school campaigns on anti-drug and substance abuse"],
        outcomes: ["Assess the economic impacts of corruption on public infrastructures", "Explain the legal consequences of unlawful drug handling"]
      },
      {
        grade: "Grade 11",
        topicName: "The Legal System & Family Law",
        subtopics: ["Civil vs criminal cases in Zambian courts", "Trial stages in the legal system", "Family law structures and child protection"],
        competencies: ["Differentiate civil trespasses from criminal offenses", "Recommend mitigation steps during family disputes or child abuse"],
        outcomes: ["Describe the judicial hierarchy from local courts to supreme court", "Highlight the protective mandates of ZISC and social systems"]
      },
      {
        grade: "Grade 12",
        topicName: "Global Issues & Poverty Alleviation",
        subtopics: ["Zambia's role in regional (SADC, AU) and global (UN) bodies", "Poverty causes and alleviation development plans", "Gender equity, credit access, and retirement planning"],
        competencies: ["Evaluate national development plans (NDPs)", "Formulate saving blueprints and outline credit options for small business startup"],
        outcomes: ["Explain international environmental treaties", "Assess benefits and strategies of gender equity in workforces"]
      }
    ]
  },
  {
    id: "agricultural_science",
    name: "Agricultural Science",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Agriculture in Zambia",
        subtopics: ["Importance and value of agriculture", "Agro-ecological zones in Zambia", "Types of farmers: Subsistence, small scale, commercial"],
        competencies: ["Locate main agro-ecological zones on a map of Zambia", "Classify farmers based on levels of scale and mechanisation"],
        outcomes: ["Acknowledge economic contribution of agriculture to Zambia", "Summarize main crops suitable for different rainfall zones"]
      },
      {
        grade: "Grade 8",
        topicName: "Soil & Water Science",
        subtopics: ["Soil composition: air, water, organic matter, minerals", "Soil texture, structure, pH testing", "Methods of irrigation vs soil erosion"],
        competencies: ["Demonstrate testing of soil pH using local chemical guides", "Set up simple clay/sand water drainage experiments"],
        outcomes: ["Acknowledge properties of sand, clay, silit", "Deduce soil fertility conservation methods"]
      },
      {
        grade: "Grade 9",
        topicName: "Climate-Smart Agriculture",
        subtopics: ["Climate change impacts on Zambian farming", "Zero tillage, conservation tillage, mulch", "Adoption of drought-resistant seeds"],
        competencies: ["Formulate crop rotation schedules containing legumes", "Evaluate water harvesting irrigation setups"],
        outcomes: ["Explain biological value of organic composting", "Suggest methods of mitigating climate change on small farms"]
      },
      {
        grade: "Grade 10",
        topicName: "Plant Morphology & Crop Production",
        subtopics: ["Plant morphology (roots, stems, leaves)", "Cereal crop cultivation: Maize, sorghum, wheat", "Vegetative propagation: Budding, grafting, cuttings"],
        competencies: ["Perform grafting on local fruit trees", "Manage cereal growing from seedbeds to harvest"],
        outcomes: ["State main factors in selecting crop farming sites", "Detail common crop pests feeding habits and systemic controls"]
      },
      {
        grade: "Grade 11",
        topicName: "Farm Structures & Power",
        subtopics: ["Selecting farm building sites", "Building simple structures (fences, brick arrays)", "Sources of farm power: Solar, wind, diesel, biomass"],
        competencies: ["Practice safety protocols operating garden tools", "Draft layouts for nursery structures"],
        outcomes: ["Distinguish internal combustion engine structures (piston, valves, spark plug)", "Outline maintenance routines for diesel tractive engines"]
      },
      {
        grade: "Grade 12",
        topicName: "Livestock Production",
        subtopics: ["Poultry biology & broiler/layer management", "Pig production (farrowing, castration, feeding)", "Ruminants (cattle, goats) breeding and health"],
        competencies: ["Formulate basic livestock feed rations", "Identify symptoms of East Coast Fever and Foot and Mouth"],
        outcomes: ["Compare intensive battery cage vs deep litter poultry rearing", "Trace digestive structure pathways of ruminant stomachs"]
      },
      {
        grade: "Grade 12",
        topicName: "Farm Business Management",
        subtopics: ["Farm records & inventories", "Profit and loss accounts, balance sheets", "Agricultural cooperatives benefits"],
        competencies: ["Draft a monthly cash flow budget for agricultural operations", "Calculate gross margins per hectare of crop yield"],
        outcomes: ["Acknowledge law of diminishing returns in input metrics", "Detail procedure of establishing local agricultural cooperatives"]
      }
    ]
  },
  {
    id: "fashion",
    name: "Fashion and Fabrics",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Introduction to Textile & Clothing",
        subtopics: ["Key definitions of fashion and fabrics", "Functions and characteristics of needles/scissors", "Setting up and operating manual sewing machines"],
        competencies: ["Operate needlework tools safely", "Thread a sewing machine to adjust bobbin tension"],
        outcomes: ["List factors to consider when choosing everyday vs seasonal clothing", "Describe workroom hygiene rules"]
      },
      {
        grade: "Grade 9",
        topicName: "Sewing Construction Processes",
        subtopics: ["Group of hand stitches (decorative, neatening)", "Crossway strips cutting and joining", "Making simple openings and fasteners"],
        competencies: ["Work out French seams on cotton fabric scrap", "Execute manual embroidery and attachments of zips"],
        outcomes: ["Understand correct application of casing and waistline finishes", "State properties of plain, twill, and satin weaves"]
      },
      {
        grade: "Grade 10",
        topicName: "Textile Design & Crafts",
        subtopics: ["Principles of design: Balance, proportion, emphasis", "Dyeing techniques and color schemes", "Basketry materials and crocheting stitches"],
        competencies: ["Create block printing patterns on cotton fabrics", "Interpret crocheting abbreviations like ss, sc, dc"],
        outcomes: ["Explain cultural costume elements in Zambian heritage", "Select outfits matching personal figure shapes"]
      },
      {
        grade: "Grade 11",
        topicName: "Pattern Drafting & Garment Realisation",
        subtopics: ["Pattern markings and symbols meaning", "Drafting basic paper patterns of bices, pockets, skirts", "Sleeve types (Set-in, Raglan, Puff)"],
        competencies: ["Acquire body measurements for pattern adaptations", "Manipulate templates to create custom collar designs"],
        outcomes: ["Perform garment fitting alterations to camouflage body irregularities", "Assess fabric finishes like flame proofing and antistatic"]
      },
      {
        grade: "Grade 12",
        topicName: "Fashion Business & Industry",
        subtopics: ["Market research in textiles", "Preparing textile business plan", "Organising clothing exhibitions"],
        competencies: ["Analyse financial pricing strategies of suppliers", "Manage a mock fashion presentation project"],
        outcomes: ["Write a brief business proposal detailing production budgets", "Understand care label symbols and dry-cleaning paths"]
      }
    ]
  },
  {
    id: "accounting",
    name: "Principles of Accounts",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Introduction to Books & Ledgers",
        subtopics: ["Principles of bookkeeping", "The accounting equation: Assets = Capital + Liabilities", "Double entry rules in nominal/real accounts"],
        competencies: ["Debit and credit transactions appropriately across account books", "Balance off ledger ledgers accurately"],
        outcomes: ["Recognize users and importance of accounting info", "Verify accounting terminologies like inventory and payables"]
      },
      {
        grade: "Grade 9",
        topicName: "Day Books & Subsidiary Journals",
        subtopics: ["Purchases, sales, returns inward/outward day books", "Source documents: invoices, credit notes, receipts", "Posting from day books to ledgers"],
        competencies: ["Record cash and credit sales entries in appropriate day books", "Extract a basic Trial Balance from ledger accounts"],
        outcomes: ["Demonstrate understanding of the relationship between source papers and subsidiary book layouts", "Differentiate trade from cash discounts"]
      },
      {
        grade: "Grade 10",
        topicName: "Financial Statements of a Sole Trader",
        subtopics: ["Trading Profit or Loss Account (Income Statement)", "Calculation of Gross Profit and Net Profit", "Statement of Financial Position (Balance sheet) layout", "Introduction to accounting ratios"],
        competencies: ["Prepare complete trading profit sheets", "Compute current and acid-test liquidity ratios"],
        outcomes: ["Distinguish capital expenditure from revenue expense", "Draw balance sheets using coordinates mapping liabilities and net worth"]
      },
      {
        grade: "Grade 11",
        topicName: "Book Adjustments & Reconciliation",
        subtopics: ["Accruals and prepayments ledger adjustment", "Bad debts and provision for doubtful debts", "Preparing adjusted trading accounts"],
        competencies: ["Deduce adjusted calculations of expenses", "Execute correct allowances rules on ledger values"],
        outcomes: ["Trace accrued liabilities fields", "Recognize the importance of matching and prudence concepts"]
      },
      {
        grade: "Grade 12",
        topicName: "Partnerships & Specialty Accounts",
        subtopics: ["Incomplete records & Net Worth methods", "Partnership capital and profit-sharing accounts", "Manufacturing accounts & production cost division", "Data processing systems in accounting"],
        competencies: ["Draw up partnership statements of financial position", "Calculate prime costs of factories, overheads and production totals"],
        outcomes: ["Compare manual accounting methods with computerized digital spreadsheet databases", "Produce receipts and payments sheets for non-profit clubs"]
      }
    ]
  },
  {
    id: "nutrition",
    name: "Food and Nutrition",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Kitchen Safety & Personal Hygiene",
        subtopics: ["Kitchen design layouts (L-shaped, U-shaped)", "Equipment, tools, and utensils safely", "First aid and fire safety in food labs"],
        competencies: ["Practice hygiene controls in food handling", "Organize workspace boundaries to prevent falls/burns"],
        outcomes: ["Explain correct sterilization methods for utensils", "State procedural rules for managing grease fires"]
      },
      {
        grade: "Grade 8",
        topicName: "Basic Human Nutrition",
        subtopics: ["Macronutrients: Carbohydrates, proteins, fats", "Micronutrients: Vitamins, minerals, water", "Digestion, transport, absorption pathways"],
        competencies: ["Analyse dietary plans for deficiency disorders like rickets & beriberi", "Map digest tracts from mouth to stomach to intestine"],
        outcomes: ["Formulate balanced meals using local food pyramids", "Explain biochemical role of enzymes in nutrient breakdowns"]
      },
      {
        grade: "Grade 9",
        topicName: "Meal Planning & Catering",
        subtopics: ["Designing multi-course meals", "Catering dietary needs for pregnant women, toddlers, diabetics", "Traditional and modern table settings"],
        competencies: ["Draft detailed time plans for practical cooking classes", "Calculate portion budgets based on family sizes"],
        outcomes: ["Select appropriate beverages to complement family menus", "Acknowledge table etiquettes parameters"]
      },
      {
        grade: "Grade 10",
        topicName: "Food Science: Spoilage & Preservation",
        subtopics: ["Causes of food spoilage (enzymes, mold, bacteria)", "Traditional checks: Salting, drying, smoking", "Modern methods: Refrigeration, canning, pasteurisation"],
        competencies: ["Evaluate food labels for ingredients and expiry indicators", "Design small scale food hygiene control systems"],
        outcomes: ["State difference between food contamination and food poisoning", "Apply vacuum packing constraints accurately"]
      },
      {
        grade: "Grade 11",
        topicName: "Stocks, Sauces, and Starches",
        subtopics: ["Making vegetable, bone and fish stocks", "Roux sauces classification", "Flour mixtures: batters, pastry, cakes, yeast doughs"],
        competencies: ["Formulate recipes for roux based white/brown sauces", "Analyse chemical leavening reactions in baking"],
        outcomes: ["Determine starch gelatinisation temperatures", "Differentiate yeast mixtures from baking powder batters"]
      },
      {
        grade: "Grade 12",
        topicName: "Nutrition Research & Enterprise",
        subtopics: ["Conducting food science surveys", "Setting up food service businesses (bakeries, diners)", "Consumer education: protecting spending on groceries"],
        competencies: ["Draft a complete 2-page food service business plan", "Formulate research questionnaires checking community dietary habits"],
        outcomes: ["Demonstrate creative food presentation skills on plates", "Understand local health department certification criteria"]
      }
    ]
  },
  {
    id: "g",
    name: "Geography",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "The Solar System & Planet Earth",
        subtopics: ["Earth's position in solar system", "Grid lines: Latitude and Longitude", "Zambia geographic coordinates", "Rotation and Revolution mechanics"],
        competencies: ["Calculate local timezone differences from Greenwich Mean Time", "Differentiate solstice from equinox dates"],
        outcomes: ["Explain proof of Earth's spherical shape & size", "Relate rotation directly to successive night/day loops"]
      },
      {
        grade: "Grade 8",
        topicName: "Weather & Climate",
        subtopics: ["Instruments measuring temperature, humidity, rainfall", "Climatic regions: Tropical Savannah, Desert, Forest", "Weather hazards and mitigation"],
        competencies: ["Record daily class barometer and rain gauge logs", "Graph temperature ranges during winter vs summer"],
        outcomes: ["Compare characteristics of tropical rainforest from dry savannah zones", "Acknowledge basic steps of mitigating climate storms"]
      },
      {
        grade: "Grade 9",
        topicName: "Basic Map Work & Techniques",
        subtopics: ["Types of map scales", "Venn map symbols and legends", "4-figure and 6-figure coordinates grid lines", "Determining coordinates and bearings on contoured sheets"],
        competencies: ["Find exact locations on grid files", "Acknowledge gradient slopes calculation using contours line overlays"],
        outcomes: ["Measure real ground boundary scales from paper sheets lines", "Identify river drainage patterns like dendritic and trellis on maps"]
      },
      {
        grade: "Grade 10",
        topicName: "Physical Lands: Earth Geomorphology",
        subtopics: ["Structure of the internal Earth (crust, core, mantle)", "Rock categories: sedimentary, igneous, metamorphic", "Tectonic earth movement forces: folding, faulting, volcanism"],
        competencies: ["Examine characteristics of local rock profiles", "Diagram rift valley fault block lines"],
        outcomes: ["Contrast features of intrusive vs extrusive volcanic structures", "Trace weathering types: chemical, physical, and biological"]
      },
      {
        grade: "Grade 11",
        topicName: "Economic Resources of Zambia",
        subtopics: ["Forestry and forest reserves location", "Agriculture: shifting farming vs commercial irrigation", "Mining industries: copper, coal, manganese extraction", "Tourism attractions (Victoria Falls, game parks)"],
        competencies: ["Compare open-pit extraction with shaft mining methods", "Locate major hydro-electric power (HEP) dams on the map of Zambia"],
        outcomes: ["Detail agricultural land tenure and ecological borders in Zambia", "Discuss manufacturing and processing transportation logistics"]
      }
    ]
  },
  {
    id: "design_tech",
    name: "Design and Technology",
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    topics: [
      {
        grade: "Grade 8",
        topicName: "Safety, Timber & Graphic Basics",
        subtopics: ["Personal workshop protective wear (PPE)", "Classifying woods: softwoods vs hardwoods", "Basic drawing instruments and plane geometry"],
        competencies: ["Execute safe procedures operating timber chisels and saws", "Construct precise geometric lines and circles manually"],
        outcomes: ["Define physical properties of natural timber grains", "Acknowledge the steps of the design process in modeling objects"]
      },
      {
        grade: "Grade 9",
        topicName: "Metals, Boards & CAD Drawings",
        subtopics: ["Man-made board structures (plywood, chipboard)", "Classifying metals: ferrous vs non-ferrous", "Orthographic projections layout", "CAD drawing command menu systems"],
        competencies: ["Examine metal properties visually under testing", "Draw 3-view orthographic blocks of rectangular elements", "Operate CAD drawing tools for simple shapes"],
        outcomes: ["State the difference between mild steel, iron, and brass alloys", "Model surface developments in product layouts"]
      },
      {
        grade: "Grade 10",
        topicName: "Energy, Electricity & Mechanisms",
        subtopics: ["Harnessing solar, wind, and biomass power", "Constructing simple electrical circuits", "Fittings: hinges, locks, bolts", "Levers and linkages mechanisms"],
        competencies: ["Assemble series and parallel lamp circuits with switches", "Apply principles of moments in designing simple levers"],
        outcomes: ["Trace electronic components like resistors, diodes, and capacitors symbols", "Acknowledge how linkages alter direction of motions"]
      },
      {
        grade: "Grade 11",
        topicName: "Pattern Realisation & Business Plan",
        subtopics: ["Joining mechanisms: welding, riveting, screwing", "Preparing precise workshop layouts and plans", "Business proposals for structural products", "Financial ledger entries"],
        competencies: ["Analyze workshop manufacturing tasks", "Write components lists with detailed costing dimensions"],
        outcomes: ["Evaluate structural stability of timber or steel framework joints", "Explain proper record-keeping for custom product operations"]
      }
    ]
  }
];

export function getTopicsFor(subjectName: string, grade: string) {
  // Broad subject-matching helper
  const subject = CURRICULUM_DATA_ZAMBIA.find(s => 
    s.name.toLowerCase().includes(subjectName.toLowerCase()) || 
    subjectName.toLowerCase().includes(s.name.toLowerCase()) ||
    (s.id === "science" && ["Integrated Science", "Chemistry", "Physics"].includes(subjectName)) ||
    (s.id === "biology" && subjectName === "Biology") ||
    (s.id === "ece" && subjectName === "Early Childhood Education") ||
    (s.id === "fashion" && subjectName === "Fashion and Fabrics") ||
    (s.id === "commerce" && subjectName === "Commerce") ||
    (s.id === "accounting" && subjectName === "Principles of Accounts") ||
    (s.id === "nutrition" && subjectName === "Food and Nutrition") ||
    (s.id === "geography" && subjectName === "Geography") ||
    (s.id === "design_tech" && subjectName === "Design and Technology") ||
    (s.id === "literature" && subjectName === "Literature in English") ||
    (s.id === "civic_education" && subjectName === "Civic Education") ||
    (s.id === "agricultural_science" && subjectName === "Agricultural Science")
  );

  if (!subject) return [];
  return subject.topics.filter(t => t.grade === grade);
}
