let selectedQuestionCount = "all"; // Default to "all" questions

// Questions Array
const allQuestions = [
    {
        question: "What was the primary reason William the Conqueror claimed the English throne in 1066?",
        options: [
            "He was the closest living relative of Edward the Confessor",
            "Edward the Confessor allegedly promised him the throne",
            "Harold Godwinson invited him to claim the throne",
            "The Witan supported his claim"
        ],
        correct: 1
    },

        {
            question: "What was the primary reason William the Conqueror claimed the English throne in 1066?",
            options: [
                "He was the closest living relative of Edward the Confessor",
                "Edward the Confessor allegedly promised him the throne",
                "Harold Godwinson invited him to claim the throne",
                "The Witan supported his claim"
            ],
            correct: 1
        },
        {
            question: "Why was Harold Godwinson's army at a disadvantage during the Battle of Hastings?",
            options: [
                "They lacked proper training",
                "They were outnumbered by the Normans",
                "They had just fought a battle against Viking invaders",
                "They were betrayed by the Witan"
            ],
            correct: 2
        },
        {
            question: "What was the primary challenge William faced after being crowned King of England?",
            options: [
                "Securing the loyalty of the Anglo-Saxon nobility",
                "Defeating the remaining Viking invaders",
                "Establishing a new legal system",
                "Gaining the support of the French king"
            ],
            correct: 0
        },
        {
            question: "What strategy did William use to pacify dissenting English nobles?",
            options: [
                "He offered them positions in the Norman court",
                "He destroyed their lands to set an example",
                "He allowed them to retain their titles under Norman rule",
                "He married into Anglo-Saxon noble families"
            ],
            correct: 1
        },
        {
            question: "Why did William introduce French as the official language of the court?",
            options: [
                "To strengthen ties with the French king",
                "To assert Norman dominance over England",
                "To simplify communication with the Church",
                "To replace Latin as the administrative language"
            ],
            correct: 1
        },
        {
            question: "What was the significance of the Doomsday Book?",
            options: [
                "It was a record of all English laws",
                "It documented the resources and land ownership in England",
                "It was a guide for Norman military campaigns",
                "It served as a religious text for the Church"
            ],
            correct: 1
        },
        {
            question: "What does the Doomsday Book reveal about the Norman feudal system?",
            options: [
                "It was based on equality and fairness",
                "It relied heavily on taxation and record-keeping",
                "It was decentralized and chaotic",
                "It excluded the Church from land ownership"
            ],
            correct: 1
        },
        {
            question: "Why was the Doomsday Book considered comprehensive?",
            options: [
                "It included records of every English citizen",
                "It detailed all resources, landowners, and tenants",
                "It was written in multiple languages",
                "It covered both England and Normandy"
            ],
            correct: 1
        },
        {
            question: "What was the primary purpose of the Norman feudal system?",
            options: [
                "To ensure equal distribution of land",
                "To centralize power under the king",
                "To promote trade and commerce",
                "To reduce military obligations"
            ],
            correct: 1
        },
        {
            question: "How did William disband the English nobility?",
            options: [
                "By confiscating their land",
                "By exiling them to Normandy",
                "By forcing them to convert to Christianity",
                "By granting them new titles"
            ],
            correct: 0
        },
         
            {
                question: "What was the primary reason William the Conqueror claimed the English throne in 1066?",
                options: [
                    "He was the closest living relative of Edward the Confessor",
                    "Edward the Confessor allegedly promised him the throne",
                    "Harold Godwinson invited him to claim the throne",
                    "The Witan supported his claim"
                ],
                correct: 1
            },
            {
                question: "Why was Harold Godwinson's army at a disadvantage during the Battle of Hastings?",
                options: [
                    "They lacked proper training",
                    "They were outnumbered by the Normans",
                    "They had just fought a battle against Viking invaders",
                    "They were betrayed by the Witan"
                ],
                correct: 2
            },
            {
                question: "What was the primary challenge William faced after being crowned King of England?",
                options: [
                    "Securing the loyalty of the Anglo-Saxon nobility",
                    "Defeating the remaining Viking invaders",
                    "Establishing a new legal system",
                    "Gaining the support of the French king"
                ],
                correct: 0
            },
            {
                question: "What strategy did William use to pacify dissenting English nobles?",
                options: [
                    "He offered them positions in the Norman court",
                    "He destroyed their lands to set an example",
                    "He allowed them to retain their titles under Norman rule",
                    "He married into Anglo-Saxon noble families"
                ],
                correct: 1
            },
            {
                question: "Why did William introduce French as the official language of the court?",
                options: [
                    "To strengthen ties with the French king",
                    "To assert Norman dominance over England",
                    "To simplify communication with the Church",
                    "To replace Latin as the administrative language"
                ],
                correct: 1
            },
            {
                question: "What was the significance of the Doomsday Book?",
                options: [
                    "It was a record of all English laws",
                    "It documented the resources and land ownership in England",
                    "It was a guide for Norman military campaigns",
                    "It served as a religious text for the Church"
                ],
                correct: 1
            },
            {
                question: "What does the Doomsday Book reveal about the Norman feudal system?",
                options: [
                    "It was based on equality and fairness",
                    "It relied heavily on taxation and record-keeping",
                    "It was decentralized and chaotic",
                    "It excluded the Church from land ownership"
                ],
                correct: 1
            },
            {
                question: "Why was the Doomsday Book considered comprehensive?",
                options: [
                    "It included records of every English citizen",
                    "It detailed all resources, landowners, and tenants",
                    "It was written in multiple languages",
                    "It covered both England and Normandy"
                ],
                correct: 1
            },
            {
                question: "What was the primary purpose of the Norman feudal system?",
                options: [
                    "To ensure equal distribution of land",
                    "To centralize power under the king",
                    "To promote trade and commerce",
                    "To reduce military obligations"
                ],
                correct: 1
            },
            {
                question: "How did William disband the English nobility?",
                options: [
                    "By confiscating their land",
                    "By exiling them to Normandy",
                    "By forcing them to convert to Christianity",
                    "By granting them new titles"
                ],
                correct: 0
            },
            {
                question: "What was the role of vassals in the feudal system?",
                options: [
                    "They owned all the land in the kingdom",
                    "They provided military service in exchange for land",
                    "They were responsible for collecting taxes",
                    "They were commoners who worked the land"
                ],
                correct: 1
            },
            {
                question: "What was the primary obligation of serfs in the feudal system?",
                options: [
                    "To serve in the military",
                    "To pay rents and fees to the lord of the manor",
                    "To manage the king's estates",
                    "To oversee the Church's landholdings"
                ],
                correct: 1
            },
            {
                question: "Why was the feudal system considered exploitative?",
                options: [
                    "It excluded women and children from land ownership",
                    "It required serfs to work without any compensation",
                    "It concentrated power and wealth in the hands of a few",
                    "It prevented the rise of towns and urban areas"
                ],
                correct: 2
            },
            {
                question: "What led to the decline of the feudal system in England?",
                options: [
                    "The rise of towns and urban migration",
                    "The introduction of the Doomsday Book",
                    "The Norman Conquest",
                    "The Church's growing influence"
                ],
                correct: 0
            },
            {
                question: "How did the Church replicate the feudal hierarchy?",
                options: [
                    "By appointing clergy as vassals",
                    "By forming ecclesiastical courts",
                    "By distributing land to commoners",
                    "By enforcing military service among priests"
                ],
                correct: 1
            },
            {
                question: "What was the primary function of ecclesiastical courts?",
                options: [
                    "To resolve disputes involving Church property and land rights",
                    "To oversee the taxation of Church lands",
                    "To enforce the king's laws",
                    "To manage the feudal system"
                ],
                correct: 0
            },
            {
                question: "Why did the Church's power pose a challenge to the king's authority?",
                options: [
                    "The Church refused to pay taxes",
                    "The Church undermined the king's role as arbiter of justice",
                    "The Church supported the Anglo-Saxon nobility",
                    "The Church controlled the military"
                ],
                correct: 1
            },
            {
                question: "What was one consequence of the Church's growing power in England?",
                options: [
                    "The separation of Church and state",
                    "The establishment of the Inquisition",
                    "The overlap of secular and ecclesiastical jurisdictions",
                    "The decline of feudalism"
                ],
                correct: 2
            },
            {
                question: "What was the king's dilemma regarding the Church's authority?",
                options: [
                    "He needed the Church's support but feared its growing power",
                    "He wanted to abolish the Church entirely",
                    "He sought to replace the Church with secular courts",
                    "He relied on the Church to manage the feudal system"
                ],
                correct: 0
            },
            {
                question: "What was the primary punishment used by ecclesiastical courts?",
                options: [
                    "Excommunication and spiritual discipline",
                    "Imprisonment and execution",
                    "Confiscation of land",
                    "Forced military service"
                ],
                correct: 0
            },
            {
                question: "What was the relationship between William the Conqueror and the French king?",
                options: [
                    "They were allies throughout William's reign",
                    "They had a strained relationship that led to conflict",
                    "The French king supported William's claim to the English throne",
                    "They were rivals for control of Normandy"
                ],
                correct: 1
            },
            {
                question: "What was the significance of the Battle of Hastings?",
                options: [
                    "It marked the end of Viking invasions in England",
                    "It established Norman rule in England",
                    "It was the first battle fought using feudal armies",
                    "It resulted in the death of Edward the Confessor"
                ],
                correct: 1
            },
            {
                question: "What was one of the reasons William's victory at Hastings did not immediately secure his rule?",
                options: [
                    "The Witan refused to recognize him as king",
                    "The English nobility continued to resist his authority",
                    "The Viking invaders still controlled parts of England",
                    "Harold Godwinson's family reclaimed the throne"
                ],
                correct: 1
            },
            {
                question: "What was the purpose of William's claim that Edward the Confessor wanted him as heir?",
                options: [
                    "To justify his invasion to the French king",
                    "To appease the Anglo-Saxon nobility",
                    "To gain the support of the Church",
                    "To convince Harold Godwinson to step down"
                ],
                correct: 1
            },
            {
                question: "What was the significance of William's fortification campaign across England?",
                options: [
                    "It was meant to protect England from Viking invasions",
                    "It was a strategy to suppress dissent and establish control",
                    "It was designed to expand Norman territory into Scotland",
                    "It was a defensive measure against the French king"
                ],
                correct: 1
            },
            {
                question: "Why did William spend significant time away from England during his reign?",
                options: [
                    "He was engaged in military campaigns in Normandy",
                    "He was negotiating alliances with the French king",
                    "He was overseeing the construction of the Doomsday Book",
                    "He was avoiding conflicts with the English nobility"
                ],
                correct: 0
            },
            {
                question: "What event marked the end of William's reign?",
                options: [
                    "His death during a campaign near Paris",
                    "His abdication in favor of his son",
                    "His defeat by the French king",
                    "His assassination by English nobles"
                ],
                correct: 0
            },
            {
                question: "What was the primary reason for the creation of the Doomsday Book?",
                options: [
                    "To document the history of the Norman Conquest",
                    "To establish a system for taxation and administration",
                    "To record the genealogy of Norman aristocracy",
                    "To serve as a legal code for the feudal system"
                ],
                correct: 1
            },
            {
                question: "What does the survival of the Doomsday Book for nine centuries indicate?",
                options: [
                    "Its importance in English legal history",
                    "Its use as a religious text by the Church",
                    "Its role in the decline of feudalism",
                    "Its influence on modern taxation systems"
                ],
                correct: 0
            },
            {
                question: "What was one of the key features of the Doomsday Book?",
                options: [
                    "It recorded all taxable resources in England",
                    "It outlined the rights of serfs under feudal law",
                    "It provided a guide for military campaigns",
                    "It documented the history of the Anglo-Saxon kings"
                ],
                correct: 0
            },
            {
                question: "What was the king's role in the feudal system?",
                options: [
                    "To act as the sole owner of all land in the kingdom",
                    "To oversee the Church's administration",
                    "To ensure equal distribution of land among nobles",
                    "To manage the daily affairs of the serfs"
                ],
                correct: 0
            },
            {
                question: "How did William ensure the loyalty of his vassals?",
                options: [
                    "By granting them land in exchange for military service",
                    "By allowing them to form independent armies",
                    "By exempting them from taxation",
                    "By giving them control over the Church"
                ],
                correct: 0
            },
            {
                question: "What was the relationship between lords and serfs in the feudal system?",
                options: [
                    "Lords provided protection in exchange for rents and labor",
                    "Serfs were allowed to own land under the lords' supervision",
                    "Lords and serfs shared equal rights under feudal law",
                    "Serfs were required to serve in the military alongside lords"
                ],
                correct: 0
            },
            {
                question: "What was one of the reasons the feudal system was highly centralized?",
                options: [
                    "The king controlled all land and distributed it at his discretion",
                    "The Church managed the feudal hierarchy",
                    "The serfs were allowed to vote for their lords",
                    "The nobles had equal power to the king"
                ],
                correct: 0
            },
            {
                question: "What was a major factor in the decline of feudalism?",
                options: [
                    "The rise of towns and urban migration",
                    "The introduction of the Doomsday Book",
                    "The Norman Conquest",
                    "The Church's growing influence"
                ],
                correct: 0
            },
            {
                question: "What was the role of lesser lords in the feudal hierarchy?",
                options: [
                    "They acted as intermediaries between the king and serfs",
                    "They managed the Church's landholdings",
                    "They provided military service to the Church",
                    "They were responsible for collecting taxes from the nobility"
                ],
                correct: 0
            },
            {
                question: "What was the primary obligation of barons under the feudal system?",
                options: [
                    "To provide military service to the king",
                    "To oversee the Church's administration",
                    "To manage the serfs' daily affairs",
                    "To ensure the decline of urban migration"
                ],
                correct: 0
            },
            {
                question: "What was the primary economic role of serfs in the feudal system?",
                options: [
                    "To produce food and resources for the entire hierarchy",
                    "To manage the king's estates",
                    "To oversee the construction of fortifications",
                    "To serve as soldiers in the king's army"
                ],
                correct: 0
            },
            {
                question: "What was one way the feudal system maintained control over the population?",
                options: [
                    "By tying serfs to the land they worked",
                    "By allowing serfs to own small plots of land",
                    "By granting serfs the right to vote for their lords",
                    "By exempting serfs from military service"
                ],
                correct: 0
            },
            {
                question: "What was the relationship between the Church and the feudal system?",
                options: [
                    "The Church replicated the feudal hierarchy in its own structure",
                    "The Church opposed the feudal system and sought its abolition",
                    "The Church controlled all land distribution under feudal law",
                    "The Church exempted serfs from their obligations"
                ],
                correct: 0
            },
            {
                question: "What was one of the main functions of ecclesiastical courts?",
                options: [
                    "To resolve disputes involving Church property and land rights",
                    "To oversee the taxation of Church lands",
                    "To enforce the king's laws",
                    "To manage the feudal system"
                ],
                correct: 0
            },
            {
                question: "What was one of the key issues between the Church and the secular courts?",
                options: [
                    "The Church refused to recognize the king's authority in legal matters",
                    "The Church demanded control over military campaigns",
                    "The Church sought to abolish the feudal system",
                    "The Church wanted to replace the king as the ruler of England"
                ],
                correct: 0
            },
            {
                question: "What was the primary reason the king needed the Church's support?",
                options: [
                    "To maintain tangible power over the people",
                    "To ensure the success of military campaigns",
                    "To gain access to Church wealth",
                    "To prevent the rise of urban migration"
                ],
                correct: 0
            },
            {
                question: "What was one of the punishments used by ecclesiastical courts?",
                options: [
                    "Excommunication and spiritual discipline",
                    "Imprisonment and execution",
                    "Confiscation of land",
                    "Forced military service"
                ],
                correct: 0
            },
            {
                question: "What was the Church's role in the feudal system?",
                options: [
                    "It replicated the feudal hierarchy and played by its rules",
                    "It opposed the feudal system and sought to abolish it",
                    "It controlled all land distribution under feudal law",
                    "It exempted serfs from their obligations"
                ],
                correct: 0
            },
            {
                question: "What was one of the consequences of the Church's growing power in England?",
                options: [
                    "The overlap of secular and ecclesiastical jurisdictions",
                    "The decline of feudalism",
                    "The separation of Church and state",
                    "The establishment of the Inquisition"
                ],
                correct: 0
            },
            {
                question: "What was the relationship between the Church and the laity in legal matters?",
                options: [
                    "The Church exerted authority over laity according to its own rules",
                    "The laity were exempt from Church laws",
                    "The Church only dealt with disputes involving clergy members",
                    "The laity were required to serve in ecclesiastical courts"
                ],
                correct: 0
            },
            {
                question: "What was one of the reasons the Church's power weakened the king's authority?",
                options: [
                    "The Church did not recognize the king as the arbiter of justice",
                    "The Church refused to pay taxes to the king",
                    "The Church supported the Anglo-Saxon nobility",
                    "The Church controlled the military"
                ],
                correct: 0
            },
            {
                question: "What was the long-term impact of the Norman Conquest on England's legal system?",
                options: [
                    "The introduction of Norman feudal law and record-keeping",
                    "The abolition of the Anglo-Saxon legal system",
                    "The establishment of a centralized monarchy",
                    "The creation of a democratic government"
                ],
                correct: 0
            },
            {
                question: "How did the Norman Conquest affect the English language?",
                options: [
                    "It introduced French as the language of the court and administration",
                    "It replaced Old English with Latin as the official language",
                    "It led to the decline of regional dialects",
                    "It established English as the dominant language in Europe"
                ],
                correct: 0
            },
            {
                question: "What was one of the reasons the Doomsday Book was significant for William's successors?",
                options: [
                    "It provided a foundation for taxation and administration",
                    "It served as a guide for military campaigns",
                    "It documented the genealogy of Norman aristocracy",
                    "It outlined the rights of serfs under feudal law"
                ],
                correct: 0
            },
            {
                question: "What was the relationship between the Norman aristocracy and the English nobility after the Conquest?",
                options: [
                    "The Norman aristocracy replaced the English nobility in positions of power",
                    "The English nobility retained their titles under Norman rule",
                    "The Norman aristocracy and English nobility shared power equally",
                    "The English nobility were exiled to Normandy"
                ],
                correct: 0
            },
            {
                question: "What was one of the ways William ensured the stability of his rule?",
                options: [
                    "By implementing the Norman feudal and legal system",
                    "By granting independence to English nobles",
                    "By forming alliances with Viking leaders",
                    "By abolishing the feudal system"
                ],
                correct: 0
            },
            {
                question: "What was the significance of the Norman feudal system in England?",
                options: [
                    "It centralized power under the king",
                    "It allowed serfs to own land",
                    "It reduced the influence of the Church",
                    "It abolished the Anglo-Saxon nobility"
                ],
                correct: 0
            },
            {
                question: "What was one of the reasons the Norman Conquest is considered a turning point in English history?",
                options: [
                    "It introduced a new ruling class and legal system",
                    "It marked the end of Viking invasions",
                    "It established England as a dominant European power",
                    "It led to the decline of the Church's influence"
                ],
                correct: 0
            },
            {
                question: "What was the role of the Doomsday Book in the feudal system?",
                options: [
                    "It recorded land ownership and resources for taxation purposes",
                    "It outlined the rights and responsibilities of serfs",
                    "It served as a guide for military campaigns",
                    "It documented the history of the Norman Conquest"
                ],
                correct: 0
            },
            {
                question: "What was one of the reasons the Norman Conquest led to cultural changes in England?",
                options: [
                    "The introduction of French customs and language",
                    "The abolition of the Anglo-Saxon Church",
                    "The establishment of a new educational system",
                    "The replacement of Christianity with Norman paganism"
                ],
                correct: 0
            },
            {
                question: "What was the long-term impact of the Norman Conquest on England's governance?",
                options: [
                    "The establishment of a centralized monarchy",
                    "The creation of a democratic government",
                    "The decline of urban migration",
                    "The separation of Church and state"
                ],
                correct: 0
            },
                {
                    question: "What was the primary cause of conflict among William the Conqueror's descendants?",
                    options: [
                        "Disputes over the Doomsday Book",
                        "Rivalries over succession and land ownership",
                        "Conflicts with the Church",
                        "Rebellion against feudal obligations"
                    ],
                    correct: 1
                },
                {
                    question: "What happened to Robert, William the Conqueror's eldest son?",
                    options: [
                        "He became King of England",
                        "He pawned Normandy and died under mysterious circumstances",
                        "He was killed in a hunting accident",
                        "He was exiled to France"
                    ],
                    correct: 1
                },
                {
                    question: "What was unusual about the deaths of William II and Richard, William the Conqueror's sons?",
                    options: [
                        "Both were assassinated by rivals",
                        "Both died in hunting accidents",
                        "Both were executed for treason",
                        "Both died in battle"
                    ],
                    correct: 1
                },
                {
                    question: "Why was William II described as a 'proper ruler'?",
                    options: [
                        "He was known for his military conquests",
                        "He was cunning and shrewd",
                        "He ruled for over 50 years",
                        "He established peace with the Church"
                    ],
                    correct: 1
                },
                {
                    question: "What was the main reason for the instability following William the Conqueror's death?",
                    options: [
                        "The lack of a clear successor",
                        "The conflicts among his children and grandchildren",
                        "The invasion of England by France",
                        "The collapse of the feudal system"
                    ],
                    correct: 1
                },
                {
                    question: "Why was King Stephen unable to manage his kingdom effectively?",
                    options: [
                        "He lacked support from the Church",
                        "He failed to calculate the risks of conflicts with Matilda and her son",
                        "He was overthrown by the nobility",
                        "He refused to implement the feudal system"
                    ],
                    correct: 1
                },
                {
                    question: "What was the state of the treasury when Henry II became king?",
                    options: [
                        "It was full due to successful taxation",
                        "It was empty due to King Stephen's mismanagement",
                        "It was controlled by the Church",
                        "It was used to fund the Crusades"
                    ],
                    correct: 1
                },
                {
                    question: "What was Henry II's approach to dealing with unruly nobility?",
                    options: [
                        "He granted them more privileges",
                        "He destroyed their castles and demoted them to manor house owners",
                        "He exiled them to France",
                        "He allowed them to form independent armies"
                    ],
                    correct: 1
                },
                {
                    question: "What was the purpose of 'shield-money' under Henry II?",
                    options: [
                        "To fund mercenary armies instead of relying on barons' troops",
                        "To pay for the construction of castles",
                        "To bribe the Church for support",
                        "To finance the Crusades"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Henry II prefer mercenary armies over baronial troops?",
                    options: [
                        "Mercenaries were more loyal than barons",
                        "Mercenaries were cheaper to maintain",
                        "Barons refused to fight in his campaigns",
                        "Mercenaries were better trained"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Henry II marry Eleanor of Aquitaine?",
                    options: [
                        "For love and companionship",
                        "To gain her valuable territories in France",
                        "To secure an alliance with the French king",
                        "To prevent her from marrying King Stephen"
                    ],
                    correct: 1
                },
                {
                    question: "What was Eleanor of Aquitaine's dowry?",
                    options: [
                        "A large sum of gold",
                        "Valuable territories in France",
                        "Control of the Church in England",
                        "A fleet of ships"
                    ],
                    correct: 1
                },
                {
                    question: "Why did Eleanor of Aquitaine need to marry?",
                    options: [
                        "To protect her lands and titles",
                        "To gain the support of the Church",
                        "To secure her position as Queen of France",
                        "To avoid exile"
                    ],
                    correct: 0
                },
                {
                    question: "What was ironic about Henry II's marriage to Eleanor?",
                    options: [
                        "It was arranged by the Church",
                        "It led to conflicts over the very lands it was meant to secure",
                        "It strengthened his relationship with France",
                        "It ended in a peaceful separation"
                    ],
                    correct: 1
                },
                {
                    question: "What was Eleanor's relationship with King Louis VII before marrying Henry II?",
                    options: [
                        "She was his sister",
                        "She was his queen",
                        "She was his political rival",
                        "She was his ally in the Crusades"
                    ],
                    correct: 1
                },
                {
                    question: "How many legitimate children did Henry II and Eleanor of Aquitaine have?",
                    options: [
                        "Five",
                        "Eight",
                        "Ten",
                        "Three"
                    ],
                    correct: 1
                },
                {
                    question: "What was the primary cause of conflict between Henry II and his sons?",
                    options: [
                        "Disputes over succession and power-sharing",
                        "Their loyalty to the French king",
                        "Their refusal to marry",
                        "Their support for the Church"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Henry II distrust his sons?",
                    options: [
                        "He feared they would forcefully take the throne",
                        "They allied with the Church against him",
                        "They refused to fight in his campaigns",
                        "They supported Eleanor's rule over Aquitaine"
                    ],
                    correct: 0
                },
                {
                    question: "What role did Eleanor of Aquitaine play in the conflicts between Henry II and his sons?",
                    options: [
                        "She encouraged their rebellion against their father",
                        "She acted as a mediator between them",
                        "She supported Henry II unconditionally",
                        "She exiled her sons to France"
                    ],
                    correct: 0
                },
                {
                    question: "What was the Great Revolt of 1174?",
                    options: [
                        "A rebellion led by Henry II's sons against him",
                        "A conflict between England and France",
                        "A revolt by the English nobility against feudal obligations",
                        "A rebellion by the Church against Henry II"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Henry II limit Eleanor's rule of Aquitaine?",
                    options: [
                        "To prevent her from allying with France",
                        "To keep her and their sons dependent on him",
                        "To strengthen his relationship with the Church",
                        "To avoid conflicts with the English nobility"
                    ],
                    correct: 1
                },
                {
                    question: "What was the relationship between Richard and John?",
                    options: [
                        "They were allies against their father",
                        "They were rivals due to Henry II's favoritism",
                        "They ruled England together",
                        "They both supported Eleanor's rule of Aquitaine"
                    ],
                    correct: 1
                },
                {
                    question: "Why did Richard rebel against Henry II?",
                    options: [
                        "Henry's mismanagement of Aquitaine",
                        "Henry's refusal to recognize him as heir",
                        "Richard's loyalty to the French king",
                        "Richard's desire to abolish the feudal system"
                    ],
                    correct: 0
                },
                {
                    question: "What was the primary reason for the animosity between Henry II's sons?",
                    options: [
                        "Their pragmatic minds and desire for power",
                        "Their loyalty to Eleanor over Henry",
                        "Their refusal to follow feudal obligations",
                        "Their support for the Church against their father"
                    ],
                    correct: 0
                },
                {
                    question: "What was the outcome of Henry II's expansionist ambitions?",
                    options: [
                        "They created conflicts within his family and with France",
                        "They strengthened his relationship with the Church",
                        "They led to the decline of the feudal system",
                        "They resulted in peace with France"
                    ],
                    correct: 0
                },
                {
                    question: "What was the role of Henry II's eldest son, Henry?",
                    options: [
                        "Co-regent without executive authority",
                        "Ruler of Aquitaine",
                        "Archbishop of Canterbury",
                        "Leader of the Great Revolt"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Henry II favor John over Geoffrey?",
                    options: [
                        "John was more loyal",
                        "Geoffrey allied with France",
                        "Geoffrey refused to support feudalism",
                        "John was the eldest son"
                    ],
                    correct: 0
                },
                {
                    question: "What was Eleanor's relationship with her sons during the conflicts?",
                    options: [
                        "She supported their rebellion",
                        "She remained neutral",
                        "She sided with Henry II",
                        "She exiled them"
                    ],
                    correct: 0
                },
                {
                    question: "What was the primary reason for the Great Revolt of 1174?",
                    options: [
                        "Henry II's refusal to share power",
                        "The Church's opposition to Henry II",
                        "The French king's invasion",
                        "Eleanor's desire to rule Aquitaine"
                    ],
                    correct: 0
                },
                {
                    question: "What was the long-term impact of Henry II's family conflicts?",
                    options: [
                        "Weakened the Angevin Empire",
                        "Strengthened his relationship with the Church",
                        "Peace with France",
                        "Abolished feudalism"
                    ],
                    correct: 0
                },
                {
                    question: "What was the relationship between Henry II and his mother, Matilda?",
                    options: [
                        "He relied on her for guidance",
                        "He excluded her from politics",
                        "He undermined her authority",
                        "He had a contentious relationship with her"
                    ],
                    correct: 0
                },
                {
                    question: "What was the primary reason for Eleanor's animosity toward Henry II?",
                    options: [
                        "His desire to limit her control over Aquitaine",
                        "His refusal to recognize her sons as heirs",
                        "His alliance with the Church",
                        "His favoritism toward Geoffrey"
                    ],
                    correct: 0
                },
                {
                    question: "What was the significance of Aquitaine in Henry II's reign?",
                    options: [
                        "It was a source of wealth and conflict",
                        "It was the base of his military campaigns",
                        "It was controlled by the Church",
                        "It was the site of the Great Revolt"
                    ],
                    correct: 0
                },
                {
                    question: "What was the role of mercenaries in Henry II's reign?",
                    options: [
                        "They replaced baronial troops",
                        "They were used to suppress the Church",
                        "They were funded by the Church",
                        "They were used to invade France"
                    ],
                    correct: 0
                },
                {
                    question: "What was the relationship between Henry II and his sons during his later years?",
                    options: [
                        "Constant rebellion and conflict",
                        "Peaceful cooperation",
                        "Support for his expansionist ambitions",
                        "Alliance against France"
                    ],
                    correct: 0
                },
                {
                    question: "What was the primary reason for John's rivalry with Richard?",
                    options: [
                        "Henry II's favoritism toward John",
                        "Richard's loyalty to Eleanor",
                        "John's alliance with France",
                        "Richard's refusal to share power"
                    ],
                    correct: 0
                },
                {
                    question: "What was the outcome of the Great Revolt of 1174?",
                    options: [
                        "Henry II suppressed the rebellion",
                        "Eleanor gained control of Aquitaine",
                        "Richard became king",
                        "The French king invaded England"
                    ],
                    correct: 0
                },
                {
                    question: "What was the significance of Eleanor's autonomy early in her marriage?",
                    options: [
                        "It allowed her to maintain control over Aquitaine",
                        "It strengthened her alliance with France",
                        "It led to her rebellion against Henry II",
                        "It weakened her sons' claims to the throne"
                    ],
                    correct: 0
                },
                {
                    question: "What was the primary reason for Henry II's conflicts with France?",
                    options: [
                        "Control over Aquitaine",
                        "Disputes over the Church",
                        "French support for Eleanor",
                        "French invasion of England"
                    ],
                    correct: 0
                },
                {
                    question: "What was the long-term impact of Henry II's reign?",
                    options: [
                        "A weakened Angevin Empire",
                        "Strengthened ties with the Church",
                        "Peaceful succession",
                        "Decline of feudalism"
                    ],
                    correct: 0
                },

                    {
                        question: "What was the main issue between Henry II and his sons and wife?",
                        options: [
                            "His refusal to relinquish power",
                            "His alliance with the Church",
                            "His military failures",
                            "His favoritism toward John"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the common theme in Henry II's problematic relationships?",
                        options: [
                            "His military failures",
                            "His unwillingness to share power",
                            "His alliance with the Church",
                            "His favoritism toward Eleanor"
                        ],
                        correct: 1
                    },
                    {
                        question: "What was the purpose of coronation in Anglo-Saxon kingship?",
                        options: [
                            "To symbolize the union of secular and divine power",
                            "To establish the king's military authority",
                            "To collect taxes for the Church",
                            "To ensure the king's independence from the Church"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the Church's role in the 12th century?",
                        options: [
                            "To support the king's military campaigns",
                            "To mobilize people and influence socio-political circumstances",
                            "To collect taxes for the king",
                            "To oversee the feudal system"
                        ],
                        correct: 1
                    },
                    {
                        question: "What led to the scandal with Thomas Becket?",
                        options: [
                            "The Church's influence surpassing that of the king",
                            "Becket's refusal to support the Great Revolt",
                            "Becket's alliance with Eleanor of Aquitaine",
                            "Becket's opposition to feudal taxes"
                        ],
                        correct: 0
                    },
                    {
                        question: "What position did Thomas Becket hold before becoming Archbishop of Canterbury?",
                        options: [
                            "Chancellor",
                            "Bishop of London",
                            "Advisor to the Pope",
                            "Earl of Canterbury"
                        ],
                        correct: 0
                    },
                    {
                        question: "Why did Henry II appoint Becket as Archbishop of Canterbury?",
                        options: [
                            "To strengthen his relationship with the Church",
                            "To limit the Church's interference in secular courts",
                            "To reward Becket for his loyalty",
                            "To appease the Pope"
                        ],
                        correct: 1
                    },
                    {
                        question: "What caused the rift between Henry II and Becket?",
                        options: [
                            "Becket's loyalty to the Church over the king",
                            "Becket's refusal to support the Great Revolt",
                            "Becket's alliance with Eleanor of Aquitaine",
                            "Becket's opposition to feudal taxes"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was Becket's position on clergy accused of crimes?",
                        options: [
                            "They should be tried in royal courts",
                            "They should be tried in ecclesiastical courts",
                            "They should be exiled",
                            "They should be pardoned by the Pope"
                        ],
                        correct: 1
                    },
                    {
                        question: "What was Henry II's goal in passing laws about clergy?",
                        options: [
                            "To limit the Church's judicial power",
                            "To increase taxes on the clergy",
                            "To abolish ecclesiastical courts",
                            "To gain support from the Pope"
                        ],
                        correct: 0
                    },
                    {
                        question: "Why did Becket flee Canterbury?",
                        options: [
                            "To escape assassination",
                            "To seek support from the Pope",
                            "To avoid imprisonment by Henry II",
                            "To join the Great Revolt"
                        ],
                        correct: 1
                    },
                    {
                        question: "Who supported Becket's return to England?",
                        options: [
                            "The Pope and Eleanor of Aquitaine",
                            "Henry II's knights",
                            "The English nobility",
                            "The French king"
                        ],
                        correct: 0
                    },
                    {
                        question: "Where was Thomas Becket assassinated?",
                        options: [
                            "Westminster Abbey",
                            "Canterbury Cathedral",
                            "The Tower of London",
                            "The royal court"
                        ],
                        correct: 1
                    },
                    {
                        question: "What phrase is attributed to Henry II regarding Becket's death?",
                        options: [
                            "Who will rid me of this turbulent priest?",
                            "Let the Church decide his fate",
                            "Becket must be silenced",
                            "The Pope will hear of this"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the public reaction to Becket's assassination?",
                        options: [
                            "Support for Henry II increased",
                            "Henry II faced backlash from the Church and public",
                            "The nobility revolted against the king",
                            "The Pope excommunicated Henry II"
                        ],
                        correct: 1
                    },
                    {
                        question: "What was the significance of Becket's canonization in 1173?",
                        options: [
                            "It marked the start of the Great Revolt",
                            "It made Canterbury a pilgrimage site",
                            "It ended the conflict between Henry II and the Church",
                            "It strengthened Henry II's authority"
                        ],
                        correct: 1
                    },
                    {
                        question: "How did Henry II publicly repent for Becket's murder?",
                        options: [
                            "By exiling his knights",
                            "By accepting flogging from bishops and monks",
                            "By abdicating the throne",
                            "By funding a new cathedral"
                        ],
                        correct: 1
                    },
                    {
                        question: "What was the long-term impact of Becket's assassination on Henry II's reign?",
                        options: [
                            "It strengthened his relationship with the Church",
                            "It exacerbated conflicts with his family and the public",
                            "It led to his excommunication",
                            "It ended the Great Revolt"
                        ],
                        correct: 1
                    },
                    {
                        question: "What year was Becket canonized?",
                        options: [
                            "1170",
                            "1173",
                            "1174",
                            "1180"
                        ],
                        correct: 1
                    },
                    {
                        question: "What was the relationship between Becket and Henry II before the controversy?",
                        options: [
                            "They were political rivals",
                            "They were close friends",
                            "They were distant allies",
                            "They were family members"
                        ],
                        correct: 1
                    },
                    // ... (previous 20 questions remain the same, then continue with:)
    {
        question: "Why was Richard I nicknamed 'Lionheart'?",
        options: [
            "For his military campaigns in the Crusades",
            "For his loyalty to the Church",
            "For his reforms in England",
            "For his alliance with France"
        ],
        correct: 0
    },
    {
        question: "What was Richard I's other nickname?",
        options: [
            "The Absent King",
            "The Warrior King",
            "The Holy King",
            "The Crusader King"
        ],
        correct: 0
    },
    {
        question: "How did Richard I fund his Crusades?",
        options: [
            "By increasing taxes",
            "By selling royal lands",
            "By borrowing from the Church",
            "By confiscating baronial estates"
        ],
        correct: 0
    },
    {
        question: "What was the impact of Richard I's absence on England?",
        options: [
            "It strengthened the feudal system",
            "It left the kingdom in the hands of advisors",
            "It led to a rebellion by the nobility",
            "It improved relations with France"
        ],
        correct: 1
    },
    {
        question: "Who influenced England during Richard I's absence?",
        options: [
            "Eleanor of Aquitaine",
            "The Pope",
            "The French king",
            "John Lackland"
        ],
        correct: 0
    },
    {
        question: "What caused Richard I's death?",
        options: [
            "A wound sustained in battle",
            "Assassination by John",
            "Illness during the Crusades",
            "A hunting accident"
        ],
        correct: 0
    },
    {
        question: "Who did Richard I name as his heir?",
        options: [
            "John",
            "Arthur, son of Geoffrey",
            "Eleanor of Aquitaine",
            "Philip of France"
        ],
        correct: 1
    },
    {
        question: "Why did John ally with France during Richard I's reign?",
        options: [
            "To secure the throne",
            "To oppose the Church",
            "To fund his military campaigns",
            "To gain control of Aquitaine"
        ],
        correct: 0
    },
    {
        question: "What was John's relationship with Eleanor of Aquitaine?",
        options: [
            "She supported his claim to the throne",
            "She opposed his alliance with France",
            "She exiled him from England",
            "She pleaded for his return to England"
        ],
        correct: 3
    },
    {
        question: "What nickname did John earn after becoming king?",
        options: [
            "Lackland",
            "Softsword",
            "Both a and b",
            "The Crusader King"
        ],
        correct: 2
    },
    {
        question: "Why did Richard I name Arthur, son of Geoffrey, as his heir?",
        options: [
            "To strengthen ties with France",
            "To prevent John from taking the throne",
            "To appease the Church",
            "To reward Arthur for his loyalty"
        ],
        correct: 1
    },
    {
        question: "What was John's strategy to gain power during Richard I's absence?",
        options: [
            "Forming an alliance with France",
            "Supporting the Crusades",
            "Gaining the Pope's favor",
            "Marrying Eleanor of Aquitaine"
        ],
        correct: 0
    },
    {
        question: "Why did John dispose of his first wife?",
        options: [
            "To marry someone with political connections",
            "To gain the Pope's approval",
            "To avoid paying dowry",
            "To strengthen his claim to the throne"
        ],
        correct: 0
    },
    {
        question: "What was the outcome of John's conflict with Richard I?",
        options: [
            "John was exiled from England",
            "Richard defeated John's forces",
            "John was crowned king",
            "Richard named John as his heir"
        ],
        correct: 1
    },
    {
        question: "What happened to Richard I in 1199?",
        options: [
            "He was assassinated by John",
            "He died from a wound sustained in battle",
            "He abdicated the throne",
            "He was excommunicated by the Church"
        ],
        correct: 1
    },
    {
        question: "Why was John crowned king after Richard I's death?",
        options: [
            "There was little opposition in England",
            "He was the rightful heir under Angevine law",
            "Arthur supported his claim",
            "The Church endorsed him"
        ],
        correct: 0
    },
    {
        question: "What was John's relationship with Arthur, his nephew?",
        options: [
            "He supported Arthur's claim to the throne",
            "He was suspected of killing Arthur",
            "He exiled Arthur to France",
            "He named Arthur as his heir"
        ],
        correct: 1
    },
    {
        question: "What nickname did John earn due to his military failures?",
        options: [
            "Lackland",
            "Softsword",
            "The Inept King",
            "The Exiled King"
        ],
        correct: 1
    },
    {
        question: "What territory did John lose during his reign?",
        options: [
            "Normandy",
            "Aquitaine",
            "Both Normandy and Aquitaine",
            "None of the above"
        ],
        correct: 2
    },
    {
        question: "What was the significance of shield-money under John's reign?",
        options: [
            "It was heavily abused to fund mercenary armies",
            "It was used to build castles",
            "It was abolished by the barons",
            "It was used to fund the Crusades"
        ],
        correct: 0
    },
    {
        question: "What was John's primary method of funding his military campaigns?",
        options: [
            "Increasing taxes",
            "Borrowing from the Church",
            "Selling royal lands",
            "Confiscating baronial estates"
        ],
        correct: 0
    },
    {
        question: "What was the main cause of John's military failures?",
        options: [
            "His inability to lead",
            "Lack of support from the Church",
            "Opposition from the nobility",
            "Insufficient funds"
        ],
        correct: 0
    },
    {
        question: "What was the Duchy of Aquitaine's role in John's reign?",
        options: [
            "It caused conflicts between John and the French",
            "It was John's primary source of income",
            "It was lost to the Church",
            "It was given to Arthur"
        ],
        correct: 0
    },
    {
        question: "What was John's relationship with the Church?",
        options: [
            "He was excommunicated for six years",
            "He strengthened ties with the Pope",
            "He abolished ecclesiastical courts",
            "He funded the Crusades"
        ],
        correct: 0
    },
    {
        question: "What was the impact of John's excommunication?",
        options: [
            "Religious services were discontinued in England",
            "The barons revolted against him",
            "He lost support from the French king",
            "He was forced to abdicate"
        ],
        correct: 0
    },
    {
        question: "What led to the barons' rebellion against John?",
        options: [
            "Over-taxation and oppression",
            "His alliance with France",
            "His refusal to sign the Magna Carta",
            "His excommunication by the Church"
        ],
        correct: 0
    },
    {
        question: "What was the purpose of the Magna Carta?",
        options: [
            "To limit the king's power",
            "To abolish feudalism",
            "To strengthen the Church's authority",
            "To establish a new monarchy"
        ],
        correct: 0
    },
    {
        question: "Who drafted the Magna Carta?",
        options: [
            "The Archbishop of Canterbury",
            "The Pope",
            "The French king",
            "The English nobility"
        ],
        correct: 0
    },
    {
        question: "What was one of the key stipulations of the Magna Carta?",
        options: [
            "Barons could not be imprisoned indefinitely",
            "The king could not collect taxes",
            "The Church was exempt from royal authority",
            "Serfs were granted full freedom"
        ],
        correct: 0
    },
    {
        question: "What was the long-term impact of the Magna Carta?",
        options: [
            "It paved the way for the decline of feudalism",
            "It abolished the monarchy",
            "It strengthened the king's authority",
            "It ended the barons' rebellion"
        ],
        correct: 0
    },
    {
        question: "Why did John sign the Magna Carta?",
        options: [
            "He was defeated on many fronts",
            "He wanted to strengthen ties with the Church",
            "He sought to end the First Barons' War",
            "He wanted to abolish feudal taxes"
        ],
        correct: 0
    },
    {
        question: "What was John's attitude toward the Magna Carta?",
        options: [
            "He never intended to endorse it",
            "He fully supported its principles",
            "He sought to expand its provisions",
            "He used it to gain support from the Church"
        ],
        correct: 0
    },
    {
        question: "What was the First Barons' War?",
        options: [
            "A rebellion against John after the Magna Carta",
            "A conflict between England and France",
            "A war between the Church and the nobility",
            "A revolt led by Eleanor of Aquitaine"
        ],
        correct: 0
    },
    {
        question: "What role did the Magna Carta play in feudalism?",
        options: [
            "It problematized the hierarchical nature of the system",
            "It abolished feudal taxes",
            "It strengthened the king's control over the barons",
            "It ended the feudal system entirely"
        ],
        correct: 0
    },
    {
        question: "What was the Church's agenda in the Magna Carta?",
        options: [
            "Equalizing ecclesiastical courts with royal courts",
            "Abolishing royal authority over the clergy",
            "Increasing taxes on the nobility",
            "Supporting John's reign"
        ],
        correct: 0
    },
    {
        question: "What was the significance of the Magna Carta for serfs?",
        options: [
            "It included some articles reflecting on their rights",
            "It abolished serfdom entirely",
            "It granted them freedom from taxes",
            "It allowed them to own land"
        ],
        correct: 0
    },
    {
        question: "What was the role of the barons in the Magna Carta?",
        options: [
            "They monitored the king's activities",
            "They abolished feudal taxes",
            "They supported John's military campaigns",
            "They strengthened ties with the Church"
        ],
        correct: 0
    },
    {
        question: "What was the relationship between John and the Plantagenet line?",
        options: [
            "His successors dealt with the conflicts he created",
            "He abolished the Plantagenet dynasty",
            "He strengthened the Plantagenet rule",
            "He was the last Plantagenet king"
        ],
        correct: 0
    },
    {
        question: "Why was John excommunicated by the Church?",
        options: [
            "For refusing to recognize the Pope's authority",
            "For failing to fund the Crusades",
            "For imprisoning the Archbishop of Canterbury",
            "For assassinating Arthur"
        ],
        correct: 0
    },
    {
        question: "What was the political impact of John's excommunication?",
        options: [
            "It weakened his authority over the barons",
            "It strengthened his relationship with France",
            "It led to his abdication",
            "It ended the First Barons' War"
        ],
        correct: 0
    },
    {
        question: "What was the significance of the Magna Carta for the Church?",
        options: [
            "It reinforced the Church's independence from royal authority",
            "It abolished ecclesiastical courts",
            "It allowed the king to tax the clergy",
            "It reduced the Church's influence over the nobility"
        ],
        correct: 0
    },
    {
        question: "What was the long-term effect of the Magna Carta on the monarchy?",
        options: [
            "It limited the king's power permanently",
            "It abolished the monarchy",
            "It strengthened the king's control over the barons",
            "It had no significant impact"
        ],
        correct: 0
    },
    {
        question: "What was the role of the Archbishop of Canterbury in the Magna Carta?",
        options: [
            "He drafted the document",
            "He opposed its signing",
            "He supported John's refusal to endorse it",
            "He led the First Barons' War"
        ],
        correct: 0
    },
    {
        question: "What was the First Barons' War a direct result of?",
        options: [
            "John's refusal to honor the Magna Carta",
            "John's alliance with France",
            "The Church's excommunication of John",
            "The death of Richard I"
        ],
        correct: 0
    },
    {
        question: "What was the Magna Carta's impact on feudal taxes?",
        options: [
            "It limited the king's ability to impose taxes on the barons",
            "It abolished all feudal taxes",
            "It increased taxes on the clergy",
            "It allowed the king to tax the nobility freely"
        ],
        correct: 0
    },
    {
        question: "What was the Magna Carta's stance on imprisonment?",
        options: [
            "It restricted the king's authority to imprison barons indefinitely",
            "It abolished imprisonment for all crimes",
            "It allowed the Church to oversee all imprisonments",
            "It gave the king unlimited power to imprison his enemies"
        ],
        correct: 0
    },
    {
        question: "What was the Magna Carta's impact on the feudal system?",
        options: [
            "It challenged the hierarchical nature of feudalism",
            "It abolished feudalism entirely",
            "It strengthened the king's control over the system",
            "It had no impact on feudalism"
        ],
        correct: 0
    },
    {
        question: "What was the significance of the Magna Carta for common people?",
        options: [
            "It had limited immediate impact but laid the groundwork for future rights",
            "It granted them full freedom from feudal obligations",
            "It allowed them to participate in royal courts",
            "It abolished serfdom entirely"
        ],
        correct: 0
    },
    {
        question: "What was John's primary motivation for signing the Magna Carta?",
        options: [
            "To avoid further rebellion by the barons",
            "To gain the Pope's favor",
            "To strengthen his alliance with France",
            "To abolish feudal taxes"
        ],
        correct: 0
    },
    {
        question: "What was the Church's role during John's excommunication?",
        options: [
            "It discontinued all religious services in England",
            "It supported John's military campaigns",
            "It exiled John from England",
            "It declared war on the barons"
        ],
        correct: 0
    },
    // ... (continuing from the previous questions)
    {
        question: "What was the Magna Carta's stance on justice?",
        options: [
            "It stipulated conditions for attaining justice in royal courts",
            "It abolished royal courts entirely",
            "It allowed the king to decide all legal matters",
            "It gave the Church control over the justice system"
        ],
        correct: 0
    },
    {
        question: "What was the Magna Carta's impact on the barons?",
        options: [
            "It granted them more freedom and rights",
            "It abolished their feudal obligations",
            "It reduced their influence over the king",
            "It forced them to pay higher taxes"
        ],
        correct: 0
    },
    {
        question: "What was the significance of the Magna Carta for the Church's courts?",
        options: [
            "It equalized their status with royal courts",
            "It abolished ecclesiastical courts",
            "It reduced their authority over the clergy",
            "It allowed the king to oversee Church trials"
        ],
        correct: 0
    },
    {
        question: "What was the Magna Carta's stance on liberty?",
        options: [
            "It recognized barons as free men",
            "It abolished all forms of feudalism",
            "It granted liberty to all commoners",
            "It allowed the king to define liberty"
        ],
        correct: 0
    },
    {
        question: "What was the long-term significance of the Magna Carta?",
        options: [
            "It laid the foundation for constitutional governance",
            "It abolished the monarchy",
            "It strengthened the king's authority",
            "It ended the feudal system immediately"
        ],
        correct: 0
    },
    {
        question: "What was the main reason for dissatisfaction with King John's reign?",
        options: [
            "His over-taxation and military failures",
            "His alliance with France",
            "His refusal to fund the Crusades",
            "His strong relationship with the Church"
        ],
        correct: 0
    },
    {
        question: "What was the impact of John's reign on feudalism?",
        options: [
            "It gradually paved the way for its disintegration",
            "It strengthened the feudal system",
            "It abolished feudal obligations",
            "It had no impact on feudalism"
        ],
        correct: 0
    },
    {
        question: "What was John's relationship with the economy?",
        options: [
            "He abused the treasury to fund military campaigns",
            "He strengthened the economy through reforms",
            "He abolished taxes on the nobility",
            "He relied on the Church to fund his campaigns"
        ],
        correct: 0
    },
    {
        question: "What was the significance of John's reign for the Plantagenet line?",
        options: [
            "It created conflicts that his successors had to resolve",
            "It ended the Plantagenet dynasty",
            "It strengthened the Plantagenet rule",
            "It abolished the monarchy"
        ],
        correct: 0
    },
    {
        question: "What was the ultimate legacy of King John's reign?",
        options: [
            "It led to transformative moments in British history",
            "It strengthened the monarchy",
            "It abolished the feudal system entirely",
            "It ended the Church's influence in England"
        ],
        correct: 0
    },

        {
            question: "When was Oxford University founded?",
            options: [
                "1167",
                "1209",
                "1261",
                "1250"
            ],
            correct: 0
        },
        {
            question: "When was Cambridge University founded?",
            options: [
                "1167",
                "1209",
                "1261",
                "1250"
            ],
            correct: 1
        },
        {
            question: "What subject areas were taught at Oxford and Cambridge in their early years?",
            options: [
                "Medicine and science",
                "Law and the humanities",
                "Theology and mathematics",
                "Engineering and architecture"
            ],
            correct: 1
        },
        {
            question: "Which king issued the royal charter for the University of Northampton?",
            options: [
                "John",
                "Henry II",
                "Henry III",
                "Edward I"
            ],
            correct: 2
        },
        {
            question: "Why was the University of Northampton's charter rescinded?",
            options: [
                "It became too competitive with Oxford",
                "It failed to attract students",
                "It was destroyed during a war",
                "It was too expensive to maintain"
            ],
            correct: 0
        },
        {
            question: "What did the development of universities signify in medieval society?",
            options: [
                "The decline of feudalism",
                "The rise of urbanization and new trades",
                "The dominance of the Church",
                "The enforcement of male primogeniture"
            ],
            correct: 1
        },
        {
            question: "What was the purpose of the Charters of Freedom?",
            options: [
                "To regulate the autonomy of towns",
                "To abolish feudal taxes",
                "To establish universities",
                "To enforce male primogeniture"
            ],
            correct: 0
        },
        {
            question: "What spurred migrations to urban areas during this period?",
            options: [
                "The enforcement of male primogeniture",
                "The rise of feudalism",
                "The decline of the Church's influence",
                "The expansion of the Crusades"
            ],
            correct: 0
        },
        {
            question: "What event inspired the Crusades?",
            options: [
                "The Great Schism of 1054",
                "The signing of the Magna Carta",
                "The rise of the Ottoman Empire",
                "The fall of the Byzantine Empire"
            ],
            correct: 0
        },
        {
            question: "What was the Great Schism?",
            options: [
                "The separation of the Christian Church into Roman Catholic and Orthodox branches",
                "The division of the Islamic Empire",
                "The collapse of the Byzantine Empire",
                "The conflict between the Pope and the English king"
            ],
            correct: 0
        },
        {
            question: "Who initiated the first Crusade?",
            options: [
                "Pope Urban II",
                "Emperor Alexius",
                "Richard I",
                "Edward I"
            ],
            correct: 0
        },
        {
            question: "What was the primary goal of the Crusades?",
            options: [
                "To regain control of the Holy Land",
                "To expand the Byzantine Empire",
                "To convert the Islamic Empire to Christianity",
                "To establish trade routes in the Middle East"
            ],
            correct: 0
        },
        {
            question: "When did the Crusades officially begin?",
            options: [
                "1054",
                "1095",
                "1217",
                "1365"
            ],
            correct: 1
        },
        {
            question: "Which English king participated in the Third Crusade?",
            options: [
                "John",
                "Edward I",
                "Richard I",
                "Henry III"
            ],
            correct: 2
        },
        {
            question: "What was the primary symbol of the Crusaders?",
            options: [
                "The sword",
                "The cross",
                "The crown",
                "The shield"
            ],
            correct: 1
        },
        {
            question: "What was a major consequence of the Crusades in Europe?",
            options: [
                "The persecution of heretics and dissenters",
                "The unification of the Christian Church",
                "The decline of the Byzantine Empire",
                "The abolition of feudalism"
            ],
            correct: 0
        },
        {
            question: "What was the focus of the later Crusades in the 13th century?",
            options: [
                "Persecution of heretics and non-believers",
                "Liberation of the Holy Land",
                "Expansion of the Byzantine Empire",
                "Establishment of trade routes"
            ],
            correct: 0
        },
        {
            question: "Which king began the Plantagenet line?",
            options: [
                "Henry II",
                "Richard I",
                "John",
                "Edward I"
            ],
            correct: 0
        },
        {
            question: "Why are Henry II, Richard I, and John also referred to as the Anjou?",
            options: [
                "Due to their Angevine lands and relations",
                "Because they ruled from Anjou",
                "Because they were born in Anjou",
                "Due to their alliance with France"
            ],
            correct: 0
        },
        {
            question: "What is the Plantagenet period often described as?",
            options: [
                "One of the bloodiest in English history",
                "A time of peace and prosperity",
                "The golden age of feudalism",
                "The rise of the Church's power"
            ],
            correct: 0
        },
        {
            question: "How did Edward II allegedly die?",
            options: [
                "By a hot-iron poker",
                "From dysentery",
                "By strangulation",
                "From a stroke"
            ],
            correct: 0
        },
        {
            question: "What was the cause of Richard II's death?",
            options: [
                "Starvation in captivity",
                "Assassination",
                "Illness",
                "Execution"
            ],
            correct: 0
        },
        {
            question: "What financial crisis did Henry III inherit from his father, John?",
            options: [
                "The loss of the Duchy of Normandy",
                "The failure of the Crusades",
                "The collapse of the feudal system",
                "The rebellion of the barons"
            ],
            correct: 0
        },
        {
            question: "What was Henry III's major architectural legacy?",
            options: [
                "The reconstruction of Westminster Abbey",
                "The construction of the Tower of London",
                "The building of Oxford University",
                "The creation of the Magna Carta"
            ],
            correct: 0
        },
        {
            question: "Who was Simon de Montfort?",
            options: [
                "A religious zealot and former crusader",
                "A French king",
                "A baron loyal to Henry III",
                "A military leader in the Crusades"
            ],
            correct: 0
        },
            {
                question: "What caused the Second Barons' War?",
                options: [
                    "Henry III's reckless military campaigns",
                    "The signing of the Magna Carta",
                    "The loss of the Holy Land",
                    "The rise of the Plantagenet line"
                ],
                correct: 0
            },
            {
                question: "What was the Provisions of Oxford?",
                options: [
                    "A document to limit Henry III's power",
                    "A treaty with France",
                    "A charter for the University of Oxford",
                    "A set of laws for the barons"
                ],
                correct: 0
            },
            {
                question: "How did Simon de Montfort die?",
                options: [
                    "He was killed and mutilated in the Battle of Evesham",
                    "He was executed by Henry III",
                    "He died of illness",
                    "He was assassinated by Edward I"
                ],
                correct: 0
            },
            {
                question: "What was Edward I's nickname?",
                options: [
                    "Longshanks",
                    "Lionheart",
                    "Softsword",
                    "Lackland"
                ],
                correct: 0
            },
            {
                question: "What was Edward I's major contribution to governance?",
                options: [
                    "Establishing Parliament as an institution",
                    "Abolishing feudalism",
                    "Expanding the Crusades",
                    "Signing the Magna Carta"
                ],
                correct: 0
            },
            {
                question: "What was the Hundred Rolls?",
                options: [
                    "A record of corruption and abuse of power",
                    "A list of barons loyal to Edward I",
                    "A census of England's population",
                    "A record of the Crusades"
                ],
                correct: 0
            },
            {
                question: "What was Edward I's strategy after the Second Barons' War?",
                options: [
                    "Decentralizing power to benefit the kingdom",
                    "Strengthening the barons' authority",
                    "Abolishing the monarchy",
                    "Expanding the feudal system"
                ],
                correct: 0
            },
            {
                question: "What event coincided with Edward I's return from the Crusades?",
                options: [
                    "The death of his father, Henry III",
                    "The signing of the Magna Carta",
                    "The start of the Second Barons' War",
                    "The fall of the Byzantine Empire"
                ],
                correct: 0
            },
            {
                question: "What was a key feature of towns during the rise of universities?",
                options: [
                    "Autonomy and self-management through Charters of Freedom",
                    "Strict control by the monarchy",
                    "Dominance of feudal lords",
                    "Exclusive focus on agriculture"
                ],
                correct: 0
            },
            {
                question: "What did the Charters of Freedom require from towns?",
                options: [
                    "Payment to the reigning monarch",
                    "Complete independence from the monarchy",
                    "Military service to the king",
                    "Abolition of taxes"
                ],
                correct: 0
            },
            {
                question: "What was the lifestyle in towns compared to feudal manors?",
                options: [
                    "It offered more freedom and social mobility",
                    "It was more isolated and restrictive",
                    "It was dominated by agricultural work",
                    "It was controlled by the Church"
                ],
                correct: 0
            },
            {
                question: "What was the Byzantine Empire's role in the Crusades?",
                options: [
                    "It sought aid from Western Europe against the Islamic Empire",
                    "It initiated the Crusades to expand its territory",
                    "It opposed the Roman Catholic Church",
                    "It remained neutral throughout the Crusades"
                ],
                correct: 0
            },
            {
                question: "What was Pope Urban II's appeal at the Council of Clermont in 1095?",
                options: [
                    "To regain control of the Holy Land",
                    "To unite the Christian Church",
                    "To establish trade routes in the Middle East",
                    "To oppose the Byzantine Empire"
                ],
                correct: 0
            },
            {
                question: "What was a key motivation for European kings to join the Crusades?",
                options: [
                    "Acquiring wealth and resources for their kingdoms",
                    "Strengthening ties with the Byzantine Empire",
                    "Avoiding conflicts with the Church",
                    "Expanding their influence in Europe"
                ],
                correct: 0
            },
            {
                question: "What was the legacy of the Crusades in Europe?",
                options: [
                    "The persecution of heretics and dissenters",
                    "The unification of the Christian Church",
                    "The decline of the Roman Catholic Church",
                    "The abolition of feudalism"
                ],
                correct: 0
            },
            {
                question: "Which English king participated in the Eighth or Ninth Crusade?",
                options: [
                    "Edward I",
                    "Richard I",
                    "Henry III",
                    "John"
                ],
                correct: 0
            },
            {
                question: "What was the primary focus of the Crusades in the 11th and 12th centuries?",
                options: [
                    "Liberation of holy places and suppression of the Islamic Empire",
                    "Persecution of heretics in Europe",
                    "Establishment of trade routes in the Middle East",
                    "Expansion of the Byzantine Empire"
                ],
                correct: 0
            },
            {
                question: "What was the cause of the Second Barons' War?",
                options: [
                    "Henry III's reckless military campaigns and disregard for agreements",
                    "The signing of the Magna Carta",
                    "The loss of the Holy Land",
                    "The rise of the Plantagenet line"
                ],
                correct: 0
            },
            {
                question: "What was the outcome of the Battle of Lewes in 1264?",
                options: [
                    "Simon de Montfort captured Henry III and Edward I",
                    "Henry III defeated the rebels",
                    "Edward I was killed in battle",
                    "The Magna Carta was annulled"
                ],
                correct: 0
            },
            {
                question: "What was the Provisions of Oxford?",
                options: [
                    "A document to limit Henry III's power",
                    "A treaty with France",
                    "A charter for the University of Oxford",
                    "A set of laws for the barons"
                ],
                correct: 0
            },
            {
                question: "Why did Simon de Montfort lose support from the barons?",
                options: [
                    "He was seen as a tyrant pursuing personal interests",
                    "He failed to defeat Henry III",
                    "He allied with the French king",
                    "He abolished the Magna Carta"
                ],
                correct: 0
            },
            {
                question: "What was the significance of the Battle of Evesham in 1265?",
                options: [
                    "Edward I defeated Simon de Montfort and rescued Henry III",
                    "Henry III signed the Provisions of Oxford",
                    "The Magna Carta was reinstated",
                    "Simon de Montfort became king"
                ],
                correct: 0
            },
            {
                question: "What was Edward I's approach to governance after the Second Barons' War?",
                options: [
                    "Decentralizing power and addressing corruption",
                    "Strengthening the barons' authority",
                    "Abolishing the monarchy",
                    "Expanding the feudal system"
                ],
                correct: 0
            },
            {
                question: "What was Edward I's major contribution to English governance?",
                options: [
                    "Establishing Parliament as an institution",
                    "Abolishing feudalism",
                    "Expanding the Crusades",
                    "Signing the Magna Carta"
                ],
                correct: 0
            },
            {
                question: "What event coincided with Edward I's return from the Crusades?",
                options: [
                    "The death of his father, Henry III",
                    "The signing of the Magna Carta",
                    "The start of the Second Barons' War",
                    "The fall of the Byzantine Empire"
                ],
                correct: 0
            },

                {
                    question: "When did the war with Wales officially begin?",
                    options: [
                        "1276",
                        "1282",
                        "1284",
                        "1265"
                    ],
                    correct: 0
                },
                {
                    question: "What event marked the end of the war with Wales?",
                    options: [
                        "The Treaty of Worcester",
                        "The death of Llywelyn ap Gruffudd",
                        "The Treaty of Pipton",
                        "The execution of Dafydd"
                    ],
                    correct: 1
                },
                {
                    question: "What title did the King take after Llywelyn's death?",
                    options: [
                        "Prince of Wales",
                        "Duke of Gwynedd",
                        "Lord of the Marches",
                        "King of Wales"
                    ],
                    correct: 0
                },
                {
                    question: "Who currently holds the title of Prince of Wales?",
                    options: [
                        "Prince Harry",
                        "Prince William",
                        "King Charles III",
                        "Prince George"
                    ],
                    correct: 1
                },
                {
                    question: "What was the Treaty of Worcester?",
                    options: [
                        "A peace agreement between Llywelyn the Great and Henry III",
                        "A treaty that ended the war with Wales",
                        "An agreement between Llywelyn the Great and John",
                        "A treaty that established the Marcher Lords"
                    ],
                    correct: 2
                },
                {
                    question: "What happened to Gruffydd, Dafydd's brother?",
                    options: [
                        "He was executed by Edward I",
                        "He died trying to escape from the Tower of London",
                        "He became Prince of Wales",
                        "He was exiled to France"
                    ],
                    correct: 1
                },
                {
                    question: "What was the Treaty of Pipton?",
                    options: [
                        "An agreement between Llywelyn ap Gruffudd and Simon de Montfort",
                        "A treaty that ended the Second Barons' War",
                        "A peace agreement between Edward I and Llywelyn ap Gruffudd",
                        "A treaty that established the Marcher Lords"
                    ],
                    correct: 0
                },
                {
                    question: "Why did Edward I imprison his cousin Eleanor de Montfort?",
                    options: [
                        "To prevent her marriage to Llywelyn ap Gruffudd",
                        "To punish her for supporting Simon de Montfort",
                        "To use her as a hostage in negotiations",
                        "To claim her lands"
                    ],
                    correct: 0
                },
                {
                    question: "What happened to Dafydd, Llywelyn ap Gruffudd's heir?",
                    options: [
                        "He was executed by Edward I",
                        "He became Prince of Wales",
                        "He fled to Scotland",
                        "He signed a peace treaty with Edward I"
                    ],
                    correct: 0
                },
                {
                    question: "How long did it take for the next Welsh independence attempt after Llywelyn's death?",
                    options: [
                        "50 years",
                        "100 years",
                        "150 years",
                        "200 years"
                    ],
                    correct: 1
                },
                {
                    question: "When did Scotland officially become part of the United Kingdom of Great Britain?",
                    options: [
                        "1297",
                        "1328",
                        "1707",
                        "1801"
                    ],
                    correct: 2
                },
                {
                    question: "What was the Act of Union of 1707?",
                    options: [
                        "An agreement between England and Scotland to form the Kingdom of Great Britain",
                        "A treaty that ended the Scottish Wars of Independence",
                        "A peace agreement between Edward I and Robert the Bruce",
                        "A treaty that established the Church of Scotland"
                    ],
                    correct: 0
                },
                {
                    question: "What was a major concern for the Scottish regarding the Act of Union?",
                    options: [
                        "Protestant domination on the British Isles",
                        "Loss of their national Church",
                        "Economic instability",
                        "Loss of their monarchy"
                    ],
                    correct: 0
                },
                {
                    question: "What did Scotland retain after the Act of Union?",
                    options: [
                        "Its national Church and separate institutions",
                        "Its monarchy",
                        "Its military independence",
                        "Its legislative independence"
                    ],
                    correct: 0
                },
                {
                    question: "Who was Margaret, Maid of Norway?",
                    options: [
                        "The daughter of Alexander III of Scotland",
                        "The wife of Edward I",
                        "The Queen of Scotland",
                        "The leader of the Scottish rebellion"
                    ],
                    correct: 0
                },
                {
                    question: "Who was John Balliol?",
                    options: [
                        "The King of Scotland chosen by Edward I",
                        "The leader of the Scottish rebellion",
                        "The Earl of Scone",
                        "The King of England"
                    ],
                    correct: 0
                },
                {
                    question: "What was the nickname of John Balliol?",
                    options: [
                        "Toom Tabard (Empty Coat)",
                        "Braveheart",
                        "The Lion of Scotland",
                        "The Stone King"
                    ],
                    correct: 0
                },
                {
                    question: "What was the Stone of Destiny?",
                    options: [
                        "A symbol of Scottish monarchy taken by Edward I",
                        "A relic used in the coronation of English kings",
                        "A treaty between England and Scotland",
                        "A weapon used in the Battle of Stirling Bridge"
                    ],
                    correct: 0
                },
                {
                    question: "Who led the Scottish forces at the Battle of Stirling Bridge?",
                    options: [
                        "William Wallace",
                        "Robert the Bruce",
                        "John Balliol",
                        "Edward I"
                    ],
                    correct: 0
                },
                {
                    question: "What was the outcome of the Battle of Falkirk in 1298?",
                    options: [
                        "A severe defeat for the Scottish forces",
                        "A victory for William Wallace",
                        "The capture of Edward I",
                        "The signing of a peace treaty"
                    ],
                    correct: 0
                },
                {
                    question: "What happened to William Wallace in 1305?",
                    options: [
                        "He was captured and executed in London",
                        "He became King of Scotland",
                        "He defeated Edward I in battle",
                        "He signed a peace treaty with England"
                    ],
                    correct: 0
                },
                {
                    question: "Who was crowned King of Scotland in 1306?",
                    options: [
                        "Robert the Bruce",
                        "William Wallace",
                        "John Balliol",
                        "Edward II"
                    ],
                    correct: 0
                },
                {
                    question: "When did Edward III recognize Scotland as a sovereign state?",
                    options: [
                        "1328",
                        "1305",
                        "1297",
                        "1327"
                    ],
                    correct: 0
                },
                {
                    question: "What language was predominantly spoken by the English nobility during Edward II's reign?",
                    options: [
                        "French",
                        "Anglo-Saxon",
                        "Latin",
                        "English"
                    ],
                    correct: 0
                },
                {
                    question: "Who was Piers Gaveston?",
                    options: [
                        "Edward II's close companion and rumored lover",
                        "A Scottish nobleman",
                        "A French diplomat",
                        "A baron loyal to Edward I"
                    ],
                    correct: 0
                },

                    {
                        question: "What nickname was given to Edward II's wife, Isabella?",
                        options: [
                            "The She-Wolf of France",
                            "The Maid of Norway",
                            "The Queen of Hearts",
                            "The Iron Lady"
                        ],
                        correct: 0
                    },
                    {
                        question: "What caused tensions between Edward II and the barons?",
                        options: [
                            "His favoritism toward Piers Gaveston",
                            "His refusal to fight the Scottish",
                            "His alliance with the French",
                            "His rejection of the Magna Carta"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the fate of Piers Gaveston?",
                        options: [
                            "He was executed by Thomas Lancaster",
                            "He was exiled to France",
                            "He became a baron",
                            "He was killed in battle"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the Dispensers' role during Edward II's reign?",
                        options: [
                            "They were mercenaries who caused widespread destruction",
                            "They were barons loyal to Edward II",
                            "They were Scottish rebels",
                            "They were French diplomats"
                        ],
                        correct: 0
                    },
                    {
                        question: "What led to Edward II's downfall?",
                        options: [
                            "His alliance with the Dispensers and mismanagement of the kingdom",
                            "His defeat by the Scottish",
                            "His refusal to sign the Magna Carta",
                            "His alliance with France"
                        ],
                        correct: 0
                    },
                    {
                        question: "What is the rumored cause of Edward II's death?",
                        options: [
                            "Sodomization with a hot poker",
                            "Starvation in captivity",
                            "Execution by hanging",
                            "Assassination by poison"
                        ],
                        correct: 0
                    },
                    {
                        question: "Who succeeded Edward II as King of England?",
                        options: [
                            "Edward III",
                            "Edward I",
                            "Richard II",
                            "Henry III"
                        ],
                        correct: 0
                    },
                    {
                        question: "Who was Llywelyn the Great?",
                        options: [
                            "The Prince of Wales who negotiated peace with John and Henry III",
                            "The leader of Dafydd's Rebellion",
                            "The first Prince of Wales to rebel against Edward I",
                            "The founder of the Marcher Lords"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the relationship between Llywelyn ap Gruffudd and Simon de Montfort?",
                        options: [
                            "They were allies through the Treaty of Pipton",
                            "They were enemies during the Second Barons' War",
                            "Llywelyn betrayed Montfort during the war",
                            "Montfort imprisoned Llywelyn"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the Marcher Lords' role in Wales?",
                        options: [
                            "They were powerful noble families controlling border territories",
                            "They were Welsh rebels fighting against Edward I",
                            "They were allies of Llywelyn ap Gruffudd",
                            "They were military leaders appointed by Simon de Montfort"
                        ],
                        correct: 0
                    },
                    {
                        question: "What happened to Llywelyn ap Gruffudd in 1282?",
                        options: [
                            "He was killed in battle against Edward I's forces",
                            "He signed a peace treaty with Edward I",
                            "He fled to Scotland",
                            "He became a vassal of Edward I"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the significance of Dafydd's Rebellion?",
                        options: [
                            "It marked the final Welsh resistance against Edward I",
                            "It led to the Treaty of Worcester",
                            "It resulted in the independence of Wales",
                            "It established Dafydd as Prince of Wales"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the significance of the Stone of Destiny?",
                        options: [
                            "It symbolized the power of the Scottish monarchy",
                            "It was used to crown English kings",
                            "It marked the end of the Scottish Wars of Independence",
                            "It was a relic of the Crusades"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the outcome of the Battle of Dunbar in 1296?",
                        options: [
                            "Edward I invaded Scotland and took the Stone of Destiny",
                            "William Wallace defeated Edward I's forces",
                            "Robert the Bruce was crowned King of Scotland",
                            "The Scottish forces won independence"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the result of the Battle of Stirling Bridge in 1297?",
                        options: [
                            "A victory for William Wallace and the Scottish forces",
                            "A decisive defeat for the Scottish forces",
                            "The capture of Robert the Bruce",
                            "The signing of a peace treaty with Edward I"
                        ],
                        correct: 0
                    },
                    {
                        question: "What happened to William Wallace after the Battle of Falkirk?",
                        options: [
                            "He went into exile",
                            "He was captured and executed",
                            "He became King of Scotland",
                            "He signed a peace treaty with Edward I"
                        ],
                        correct: 0
                    },
                    {
                        question: "Who was crowned King of Scotland in 1306?",
                        options: [
                            "Robert the Bruce",
                            "William Wallace",
                            "John Balliol",
                            "Edward II"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the significance of the Treaty of 1328?",
                        options: [
                            "It recognized Scotland as a sovereign state",
                            "It ended the Second Barons' War",
                            "It established the Marcher Lords",
                            "It marked the end of the Crusades"
                        ],
                        correct: 0
                    },
                    {
                        question: "What role did the French play in the Scottish Wars of Independence?",
                        options: [
                            "They allied with the Scottish against England",
                            "They supported Edward I's invasion of Scotland",
                            "They remained neutral throughout the conflict",
                            "They provided military support to William Wallace"
                        ],
                        correct: 0
                    },
                    {
                        question: "Why was Piers Gaveston controversial among the English barons?",
                        options: [
                            "He was seen as arrogant and disrespectful",
                            "He was a Scottish nobleman",
                            "He led a rebellion against Edward II",
                            "He refused to fight in the Crusades"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was Isabella's role in Edward II's reign?",
                        options: [
                            "She acted as a diplomat to diffuse conflicts",
                            "She led a rebellion against Edward II",
                            "She supported Piers Gaveston's execution",
                            "She became Queen of Scotland"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the Dispensers' impact on Edward II's reign?",
                        options: [
                            "They caused widespread destruction and unrest",
                            "They supported Edward II's military campaigns",
                            "They helped Edward II defeat the Scottish",
                            "They negotiated peace with the barons"
                        ],
                        correct: 0
                    },
                    {
                        question: "What led to Edward II's unpopularity among the barons?",
                        options: [
                            "His reliance on the Dispensers and favoritism toward Gaveston",
                            "His refusal to fight the Scottish",
                            "His alliance with France",
                            "His rejection of the Magna Carta"
                        ],
                        correct: 0
                    },
                    {
                        question: "What was the rumored cause of Edward II's death?",
                        options: [
                            "Sodomization with a hot poker",
                            "Starvation in captivity",
                            "Execution by hanging",
                            "Assassination by poison"
                        ],
                        correct: 0
                    },
                    {
                        question: "Who succeeded Edward II as King of England?",
                        options: [
                            "Edward III",
                            "Edward I",
                            "Richard II",
                            "Henry III"
                        ],
                        correct: 0
                    },

                        {
                            question: "How long did Edward III rule England?",
                            options: [
                                "40 years",
                                "50 years",
                                "30 years",
                                "60 years"
                            ],
                            correct: 1
                        },
                        {
                            question: "Who succeeded Edward III?",
                            options: [
                                "Edward the Black Prince",
                                "Richard II",
                                "John of Gaunt",
                                "Henry IV"
                            ],
                            correct: 1
                        },
                        {
                            question: "What was Edward III's approach to the nobility?",
                            options: [
                                "He alienated them",
                                "He heavily relied on them",
                                "He abolished their power",
                                "He ignored them in Parliament"
                            ],
                            correct: 1
                        },
                        {
                            question: "What legendary theme influenced Edward III's court?",
                            options: [
                                "The Crusades",
                                "Arthurian legends",
                                "The Magna Carta",
                                "The Hundred Years' War"
                            ],
                            correct: 1
                        },
                        {
                            question: "What was the Black Death?",
                            options: [
                                "A war between England and France",
                                "A pandemic of the bubonic plague",
                                "A rebellion against Edward III",
                                "A famine that struck England"
                            ],
                            correct: 1
                        },
                        {
                            question: "What years did the Black Death occur?",
                            options: [
                                "1346–1353",
                                "1327–1337",
                                "1377–1381",
                                "1400–1410"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was one major socio-political effect of the Black Death?",
                            options: [
                                "The rise of feudalism",
                                "The emergence of free farmers",
                                "The abolition of Parliament",
                                "The end of the Hundred Years' War"
                            ],
                            correct: 1
                        },
                        {
                            question: "What economic change did the Black Death cause?",
                            options: [
                                "Increased demand for labor and higher wages",
                                "A decline in trade and commerce",
                                "The rise of serfdom",
                                "A decrease in agricultural production"
                            ],
                            correct: 0
                        },
                        {
                            question: "How old was Richard II when he became king?",
                            options: [
                                "8 years old",
                                "10 years old",
                                "12 years old",
                                "15 years old"
                            ],
                            correct: 1
                        },
                        {
                            question: "Who were Richard II's uncles and advisors?",
                            options: [
                                "John of Gaunt and Thomas of Woodstock",
                                "Edward the Black Prince and Henry IV",
                                "Wat Tyler and Simon Sudbury",
                                "Henry Bolingbroke and Robert Hale"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was a major problem during Richard II's reign?",
                            options: [
                                "Heavy taxation due to the Hundred Years' War",
                                "The rise of feudalism",
                                "The abolition of Parliament",
                                "The loss of the Magna Carta"
                            ],
                            correct: 0
                        },
                        {
                            question: "What class began to rise during Richard II's reign?",
                            options: [
                                "Yeomen",
                                "Serfs",
                                "Nobles",
                                "Merchants"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was John of Gaunt's role in Richard II's reign?",
                            options: [
                                "He was an influential advisor",
                                "He led a rebellion against Richard II",
                                "He became King of England",
                                "He abolished Parliament"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was John of Gaunt criticized for?",
                            options: [
                                "Nepotism and self-interest",
                                "Supporting the Peasants' Revolt",
                                "Losing territories in France",
                                "Opposing Parliament"
                            ],
                            correct: 0
                        },
                        {
                            question: "What tax caused the Peasants' Revolt of 1381?",
                            options: [
                                "Poll tax",
                                "Land tax",
                                "Income tax",
                                "War tax"
                            ],
                            correct: 0
                        },
                        {
                            question: "Who led the Peasants' Revolt?",
                            options: [
                                "Wat Tyler",
                                "John Ball",
                                "Simon Sudbury",
                                "Robert Hale"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was the poll tax?",
                            options: [
                                "A fixed tax for every person in a household",
                                "A tax on agricultural production",
                                "A tax on imported goods",
                                "A tax on land ownership"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was the initial trigger for the Peasants' Revolt?",
                            options: [
                                "Tax collection by officials",
                                "The death of Wat Tyler",
                                "The Hundred Years' War",
                                "The Black Death"
                            ],
                            correct: 0
                        },
                        {
                            question: "What did the rebels do during the Peasants' Revolt?",
                            options: [
                                "Burned administrative records and executed officials",
                                "Signed a peace treaty with the King",
                                "Established a new Parliament",
                                "Overthrew the monarchy"
                            ],
                            correct: 0
                        },
                        {
                            question: "Who was executed by the rebels during the revolt?",
                            options: [
                                "Archbishop Simon Sudbury and Robert Hale",
                                "John of Gaunt and Thomas of Woodstock",
                                "Edward III and Richard II",
                                "Henry Bolingbroke and Wat Tyler"
                            ],
                            correct: 0
                        },
                        {
                            question: "What happened to Wat Tyler during negotiations with the King?",
                            options: [
                                "He was killed",
                                "He was imprisoned",
                                "He became a noble",
                                "He signed a treaty"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was the outcome of the Peasants' Revolt?",
                            options: [
                                "The rebellion was suppressed violently",
                                "The King abolished the poll tax",
                                "The rebels overthrew the monarchy",
                                "Parliament was dissolved"
                            ],
                            correct: 0
                        },
                        {
                            question: "What did Parliament do after the revolt?",
                            options: [
                                "Argued against further tax increases",
                                "Abolished the poll tax",
                                "Supported the King's actions",
                                "Dissolved itself"
                            ],
                            correct: 0
                        },
                        {
                            question: "Who was Henry Bolingbroke?",
                            options: [
                                "The son of John of Gaunt",
                                "The leader of the Peasants' Revolt",
                                "The Archbishop of Canterbury",
                                "The Earl of Gloucester"
                            ],
                            correct: 0
                        },
                        {
                            question: "What did Richard II do after John of Gaunt's death?",
                            options: [
                                "Confiscated the Lancaster estates",
                                "Declared war on France",
                                "Abolished Parliament",
                                "Signed a peace treaty with Henry Bolingbroke"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was the result of Richard II's actions against Henry Bolingbroke?",
                            options: [
                                "Bolingbroke deposed Richard II",
                                "Bolingbroke fled to France",
                                "Richard II strengthened his rule",
                                "Parliament supported Richard II"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was the Cousins' War also known as?",
                            options: [
                                "The War of the Roses",
                                "The Hundred Years' War",
                                "The Peasants' Revolt",
                                "The Barons' War"
                            ],
                            correct: 0
                        },
                        {
                            question: "What happened to Richard II after he was deposed?",
                            options: [
                                "He was kept in captivity and likely strangled",
                                "He fled to France",
                                "He was executed publicly",
                                "He became a monk"
                            ],
                            correct: 0
                        },
                        {
                            question: "Who became king after Richard II?",
                            options: [
                                "Henry IV",
                                "Edward III",
                                "John of Gaunt",
                                "Wat Tyler"
                            ],
                            correct: 0
                        },
                        {
                            question: "What was a long-term effect of the Peasants' Revolt?",
                            options: [
                                "Prevented further tax increases",
                                "Ended the Hundred Years' War",
                                "Abolished serfdom",
                                "Strengthened the monarchy"
                            ],
                            correct: 0
                        },


                            {
                                question: "What was the main goal of the Lollardy movement?",
                                options: [
                                    "To support the Crusades",
                                    "To reform the Western Church",
                                    "To establish a new monarchy",
                                    "To abolish universities"
                                ],
                                correct: 1
                            },
                            {
                                question: "Who was the leader of the Lollardy movement?",
                                options: [
                                    "Geoffrey Chaucer",
                                    "John Wycliff",
                                    "Henry IV",
                                    "Thomas Aquinas"
                                ],
                                correct: 1
                            },
                            {
                                question: "What was a key idea of the Lollards?",
                                options: [
                                    "The Church was essential for salvation",
                                    "Individuals should read the Bible themselves",
                                    "The King should control the Church",
                                    "Pardons were necessary for salvation"
                                ],
                                correct: 1
                            },
                            {
                                question: "What language did the Lollards translate the Bible into?",
                                options: [
                                    "Latin",
                                    "French",
                                    "English",
                                    "German"
                                ],
                                correct: 2
                            },
                            {
                                question: "Why was the Lollard Bible banned?",
                                options: [
                                    "It was poorly translated",
                                    "It challenged the Church's authority",
                                    "It was written in Latin",
                                    "It supported the monarchy"
                                ],
                                correct: 1
                            },
                            {
                                question: "Which king suppressed the Lollards?",
                                options: [
                                    "Edward III",
                                    "Henry IV",
                                    "Richard II",
                                    "Henry V"
                                ],
                                correct: 1
                            },
                            {
                                question: "What did the Lollards criticize about the Church?",
                                options: [
                                    "Its support for the monarchy",
                                    "Its corruption and inaccessibility",
                                    "Its military campaigns",
                                    "Its rejection of universities"
                                ],
                                correct: 1
                            },
                            {
                                question: "When did the Hundred Years' War begin?",
                                options: [
                                    "1337",
                                    "1346",
                                    "1453",
                                    "1415"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the main cause of the Hundred Years' War?",
                                options: [
                                    "Religious differences",
                                    "Territorial disputes between England and France",
                                    "The Black Death",
                                    "The Peasants' Revolt"
                                ],
                                correct: 1
                            },
                            {
                                question: "Which English king started the Hundred Years' War?",
                                options: [
                                    "Edward III",
                                    "Henry V",
                                    "Richard II",
                                    "Henry VI"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the outcome of the Battle of Crecy (1346)?",
                                options: [
                                    "A major English victory",
                                    "A French victory",
                                    "A truce between England and France",
                                    "The end of the war"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who led the French to victory at the Battle of Orleans?",
                                options: [
                                    "Joan of Arc",
                                    "Charles VII",
                                    "Henry V",
                                    "Edward III"
                                ],
                                correct: 0
                            },
                            {
                                question: "What treaty ended the Hundred Years' War?",
                                options: [
                                    "Treaty of Troyes",
                                    "Treaty of Paris (1453)",
                                    "Treaty of Calais",
                                    "Treaty of Westminster"
                                ],
                                correct: 1
                            },
                            {
                                question: "What was the only French territory England retained after the war?",
                                options: [
                                    "Normandy",
                                    "Gascony",
                                    "Calais",
                                    "Aquitaine"
                                ],
                                correct: 2
                            },
                            {
                                question: "What was a major consequence of the Hundred Years' War for England?",
                                options: [
                                    "Increased taxation and dissatisfaction among the commons",
                                    "The rise of feudalism",
                                    "The abolition of Parliament",
                                    "The end of the monarchy"
                                ],
                                correct: 0
                            },
                            {
                                question: "What event started the Wars of the Roses?",
                                options: [
                                    "The Battle of St. Albans (1455)",
                                    "The Battle of Bosworth Field (1485)",
                                    "The death of Edward III",
                                    "The Peasants' Revolt"
                                ],
                                correct: 0
                            },
                            {
                                question: "Which two houses fought in the Wars of the Roses?",
                                options: [
                                    "Lancaster and York",
                                    "Plantagenet and Tudor",
                                    "Lancaster and Tudor",
                                    "York and Stuart"
                                ],
                                correct: 0
                            },
                            {
                                question: "What symbol represented the House of Lancaster?",
                                options: [
                                    "Red rose",
                                    "White rose",
                                    "Crown",
                                    "Lion"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who defeated Richard III at the Battle of Bosworth Field?",
                                options: [
                                    "Henry Tudor (Henry VII)",
                                    "Edward IV",
                                    "Henry VI",
                                    "Richard II"
                                ],
                                correct: 0
                            },
                            {
                                question: "What marked the end of the Wars of the Roses?",
                                options: [
                                    "The Battle of Bosworth Field",
                                    "The Treaty of Paris",
                                    "The death of Henry VI",
                                    "The coronation of Edward IV"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who was the first English-speaking king of England?",
                                options: [
                                    "Henry IV",
                                    "Edward III",
                                    "Richard II",
                                    "Henry V"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the symbol of the House of York?",
                                options: [
                                    "White rose",
                                    "Red rose",
                                    "Crown",
                                    "Cross"
                                ],
                                correct: 0
                            },
                            {
                                question: "How did Henry IV claim the throne?",
                                options: [
                                    "By deposing Richard II",
                                    "By inheritance from Edward III",
                                    "By defeating the French",
                                    "By marriage to Catherine of Valois"
                                ],
                                correct: 0
                            },
                            {
                                question: "What rebellion did Henry IV suppress during his reign?",
                                options: [
                                    "The Welsh rebellion",
                                    "The Peasants' Revolt",
                                    "The Lollard uprising",
                                    "The Hundred Years' War"
                                ],
                                correct: 0
                            },
                            {
                                question: "What major battle did Henry V win in 1415?",
                                options: [
                                    "Battle of Agincourt",
                                    "Battle of Crecy",
                                    "Battle of Orleans",
                                    "Battle of Bosworth Field"
                                ],
                                correct: 0
                            },
                            {
                                question: "What treaty recognized Henry V as heir to the French throne?",
                                options: [
                                    "Treaty of Troyes",
                                    "Treaty of Paris",
                                    "Treaty of Westminster",
                                    "Treaty of Calais"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who was Henry V's wife?",
                                options: [
                                    "Catherine of Valois",
                                    "Margaret of Anjou",
                                    "Joan of Arc",
                                    "Eleanor of Aquitaine"
                                ],
                                correct: 0
                            },
                            {
                                question: "What illness likely caused Henry V's death?",
                                options: [
                                    "Dysentery",
                                    "Plague",
                                    "Tuberculosis",
                                    "Smallpox"
                                ],
                                correct: 0
                            },
                            {
                                question: "How old was Henry VI when he became king?",
                                options: [
                                    "9 months",
                                    "2 years",
                                    "5 years",
                                    "10 years"
                                ],
                                correct: 0
                            },
                            {
                                question: "What title did Henry VI hold in addition to King of England?",
                                options: [
                                    "King of France",
                                    "Holy Roman Emperor",
                                    "Duke of Normandy",
                                    "Prince of Wales"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who was the first York king of England?",
                                options: [
                                    "Edward IV",
                                    "Richard III",
                                    "Henry VI",
                                    "Edward V"
                                ],
                                correct: 0
                            },
                            {
                                question: "What battle led to Edward IV's rise to power?",
                                options: [
                                    "Battle of Wakefield",
                                    "Battle of Bosworth Field",
                                    "Battle of Agincourt",
                                    "Battle of Orleans"
                                ],
                                correct: 0
                            },
                            {
                                question: "What strategy did Edward IV use to secure his rule?",
                                options: [
                                    "Pardoning and rewarding former opponents",
                                    "Executing all his enemies",
                                    "Abolishing Parliament",
                                    "Marrying into the Lancaster family"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who was Edward IV's main rival during his reign?",
                                options: [
                                    "Henry VI",
                                    "Richard III",
                                    "Henry Tudor",
                                    "Margaret of Anjou"
                                ],
                                correct: 3
                            },
                            {
                                question: "What was Edward IV's approach to governance?",
                                options: [
                                    "Pragmatic and diplomatic",
                                    "Tyrannical and cruel",
                                    "Militaristic and aggressive",
                                    "Passive and ineffective"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the relationship between the Lollards and the monarchy?",
                                options: [
                                    "The monarchy supported the Lollards",
                                    "The monarchy persecuted the Lollards",
                                    "The Lollards were indifferent to the monarchy",
                                    "The Lollards allied with the monarchy"
                                ],
                                correct: 1
                            },
                            {
                                question: "What was the main reason the Church opposed the Lollards?",
                                options: [
                                    "They supported the monarchy",
                                    "They translated the Bible into English",
                                    "They rejected the idea of salvation",
                                    "They allied with France"
                                ],
                                correct: 1
                            },
                            {
                                question: "What literary work criticized the corruption of the Church during this period?",
                                options: [
                                    "The Canterbury Tales",
                                    "The Divine Comedy",
                                    "Utopia",
                                    "Beowulf"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the significance of the Battle of Poitiers (1356)?",
                                options: [
                                    "It was a major English victory",
                                    "It ended the Hundred Years' War",
                                    "It marked the rise of Joan of Arc",
                                    "It was a decisive French victory"
                                ],
                                correct: 0
                            },
                            {
                                question: "What role did Joan of Arc play in the Hundred Years' War?",
                                options: [
                                    "She led the French to victory at Orleans",
                                    "She negotiated the Treaty of Troyes",
                                    "She led the English army",
                                    "She ended the war with the Treaty of Paris"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the outcome of the Treaty of Troyes?",
                                options: [
                                    "Henry V was recognized as heir to the French throne",
                                    "The war ended",
                                    "England gained control of all French territories",
                                    "Joan of Arc was executed"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the significance of the Battle of Agincourt (1415)?",
                                options: [
                                    "It was a major English victory despite the odds",
                                    "It marked the end of the war",
                                    "It was a decisive French victory",
                                    "It led to the Treaty of Paris"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the final outcome of the Hundred Years' War for England?",
                                options: [
                                    "England retained only Calais",
                                    "England gained control of France",
                                    "England lost all its French territories",
                                    "England signed a truce with France"
                                ],
                                correct: 0
                            },
                            {
                                question: "What caused the Wars of the Roses?",
                                options: [
                                    "Rival claims to the throne by the Lancaster and York families",
                                    "The Hundred Years' War",
                                    "The Peasants' Revolt",
                                    "The death of Edward IV"
                                ],
                                correct: 0
                            },
                            {
                                question: "Who was the last York king of England?",
                                options: [
                                    "Richard III",
                                    "Edward IV",
                                    "Edward V",
                                    "Henry VI"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the significance of the Battle of Wakefield (1460)?",
                                options: [
                                    "It led to the death of the Duke of York",
                                    "It ended the Wars of the Roses",
                                    "It marked the rise of Henry Tudor",
                                    "It was a decisive York victory"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was the outcome of the Battle of Bosworth Field (1485)?",
                                options: [
                                    "Henry Tudor defeated Richard III",
                                    "Edward IV regained the throne",
                                    "The York family won the war",
                                    "The Lancaster family was defeated"
                                ],
                                correct: 0
                            },
                            {
                                question: "What marked the beginning of British modern history?",
                                options: [
                                    "The end of the Wars of the Roses",
                                    "The signing of the Treaty of Paris",
                                    "The coronation of Edward IV",
                                    "The Peasants' Revolt"
                                ],
                                correct: 0
                            },
                            {
                                question: "What was Henry IV's claim to the throne based on?",
                                options: [
                                    "His inheritance from John of Gaunt",
                                    "His deposition of Richard II",
                                    "His victory in the Hundred Years' War",
                                    "His marriage to Catherine of Valois"
                                ],
                                correct: 1
                            },
                            {
                                question: "What was a major challenge Henry VI faced during his reign?",
                                options: [
                                    "His mental illness and loss of French territories",
                                    "The Peasants' Revolt",
                                    "The Hundred Years' War",
                                    "The rise of the Lollards"
                                ],
                                correct: 0
                            },

                                {
                                    question: "Who was the first Tudor king of England?",
                                    options: [
                                        "Henry VIII",
                                        "Edward IV",
                                        "Henry VII",
                                        "Richard III"
                                    ],
                                    correct: 2
                                },
                                {
                                    question: "Where did Henry VII spend most of his life before becoming king?",
                                    options: [
                                        "Spain",
                                        "France",
                                        "Scotland",
                                        "Ireland"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "What was Henry VII's claim to the throne based on?",
                                    options: [
                                        "His marriage to Elizabeth of York",
                                        "His victory at the Battle of Bosworth Field",
                                        "His descent from John of Gaunt",
                                        "All of the above"
                                    ],
                                    correct: 3
                                },
                                {
                                    question: "What symbol represented the Tudor dynasty?",
                                    options: [
                                        "A red rose",
                                        "A white rose",
                                        "A combination of red and white roses",
                                        "A golden crown"
                                    ],
                                    correct: 2
                                },
                                {
                                    question: "What was Henry VII's main strategy to stabilize the kingdom?",
                                    options: [
                                        "Strengthening ties with the Church",
                                        "Establishing order among the nobility",
                                        "Expanding the military",
                                        "Abolishing Parliament"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "Which European country did Henry VII strengthen relations with through marriage?",
                                    options: [
                                        "France",
                                        "Spain",
                                        "Portugal",
                                        "Scotland"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "Who did Henry VII arrange to marry Catherine of Aragon?",
                                    options: [
                                        "Henry VIII",
                                        "Arthur, Prince of Wales",
                                        "Edward VI",
                                        "Richard III"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "What was one of Henry VII's key economic policies?",
                                    options: [
                                        "Limiting court expenditure",
                                        "Dissolving monasteries",
                                        "Increasing taxes on the nobility",
                                        "Expanding the navy"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "Who succeeded Henry VII as king?",
                                    options: [
                                        "Edward VI",
                                        "Henry VIII",
                                        "Mary I",
                                        "Elizabeth I"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "What was Henry VIII's first marriage?",
                                    options: [
                                        "Anne Boleyn",
                                        "Catherine of Aragon",
                                        "Jane Seymour",
                                        "Anne of Cleves"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "Why did Henry VIII seek a divorce from Catherine of Aragon?",
                                    options: [
                                        "She was unable to produce a male heir",
                                        "She was a Catholic",
                                        "She opposed the Reformation",
                                        "She was married to his brother"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What title did the Pope give Henry VIII before their conflict?",
                                    options: [
                                        "Defender of the Faith",
                                        "Supreme Head of the Church",
                                        "Holy Roman Emperor",
                                        "Protector of the Realm"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the Reformation Parliament?",
                                    options: [
                                        "A council that declared Henry VIII the head of the Church of England",
                                        "A group that opposed the Catholic Church",
                                        "A meeting to dissolve monasteries",
                                        "A treaty with the Pope"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the Dissolution of Monasteries?",
                                    options: [
                                        "The closure and confiscation of Church lands by Henry VIII",
                                        "The establishment of Protestant monasteries",
                                        "The destruction of Catholic cathedrals",
                                        "The exile of Catholic clergy"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "Who was Henry VIII's only son?",
                                    options: [
                                        "Edward VI",
                                        "Arthur, Prince of Wales",
                                        "Richard III",
                                        "Henry VII"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "Which of Henry VIII's wives gave birth to Elizabeth I?",
                                    options: [
                                        "Anne Boleyn",
                                        "Catherine of Aragon",
                                        "Jane Seymour",
                                        "Catherine Parr"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the Third Succession Act?",
                                    options: [
                                        "An act that restored Mary and Elizabeth to the line of succession",
                                        "A law that abolished female heirs",
                                        "A treaty with Spain",
                                        "A declaration of war on France"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "Which wife outlived Henry VIII?",
                                    options: [
                                        "Catherine Parr",
                                        "Anne Boleyn",
                                        "Jane Seymour",
                                        "Anne of Cleves"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "How old was Edward VI when he became king?",
                                    options: [
                                        "9 years old",
                                        "10 years old",
                                        "15 years old",
                                        "16 years old"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was Edward VI's religious stance?",
                                    options: [
                                        "Catholic",
                                        "Protestant",
                                        "Methodist",
                                        "Presbyterian"
                                    ],
                                    correct: 1
                                },
                                {
                                    question: "What was the Edwardian Reformation?",
                                    options: [
                                        "A movement to make England officially Protestant",
                                        "A return to Catholicism",
                                        "A rebellion against the monarchy",
                                        "A treaty with the Pope"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What caused Edward VI's death?",
                                    options: [
                                        "Tuberculosis",
                                        "Plague",
                                        "Smallpox",
                                        "Dysentery"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "How long did Edward VI rule?",
                                    options: [
                                        "6 years",
                                        "10 years",
                                        "16 years",
                                        "20 years"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the Counter-Reformation?",
                                    options: [
                                        "A Catholic movement to stop the spread of Protestantism",
                                        "A Protestant rebellion against the monarchy",
                                        "A treaty between Catholics and Protestants",
                                        "A movement to abolish the Anglican Church"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What tool did the Catholic Church use during the Counter-Reformation?",
                                    options: [
                                        "The Inquisition",
                                        "The Reformation Parliament",
                                        "The Magna Carta",
                                        "The Treaty of Troyes"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main cause of religious conflict in England during the Tudor period?",
                                    options: [
                                        "The establishment of the Anglican Church",
                                        "The Hundred Years' War",
                                        "The Dissolution of Monasteries",
                                        "The Peasants' Revolt"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "Which religious group dominated Ireland during the Tudor period?",
                                    options: [
                                        "Catholics",
                                        "Protestants",
                                        "Presbyterians",
                                        "Methodists"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main goal of the Counter-Reformation?",
                                    options: [
                                        "To re-establish Catholic supremacy in England",
                                        "To abolish Protestantism in Europe",
                                        "To create a new Protestant Church",
                                        "To end religious wars"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main reason for Henry VIII's break with the Catholic Church?",
                                    options: [
                                        "His desire for a male heir",
                                        "His support for Martin Luther",
                                        "His opposition to the Pope's authority",
                                        "His desire to dissolve monasteries"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the long-term impact of the Dissolution of Monasteries?",
                                    options: [
                                        "The Church lost land and wealth",
                                        "Protestantism became dominant in England",
                                        "The nobility gained more power",
                                        "All of the above"
                                    ],
                                    correct: 3
                                },
                                {
                                    question: "Who was the mother of Mary I (Bloody Mary)?",
                                    options: [
                                        "Catherine of Aragon",
                                        "Anne Boleyn",
                                        "Jane Seymour",
                                        "Catherine Parr"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main reason for the religious conflicts during Edward VI's reign?",
                                    options: [
                                        "The Edwardian Reformation",
                                        "The Counter-Reformation",
                                        "The Dissolution of Monasteries",
                                        "The Peasants' Revolt"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the relationship between Edward VI, Mary I, and Elizabeth I?",
                                    options: [
                                        "Siblings",
                                        "Cousins",
                                        "Half-siblings",
                                        "Unrelated"
                                    ],
                                    correct: 2
                                },
                                {
                                    question: "What was the main cause of power struggles during Edward VI's reign?",
                                    options: [
                                        "His young age and poor health",
                                        "His opposition to the nobility",
                                        "His alliance with the Catholic Church",
                                        "His military campaigns"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the Third Succession Act's significance?",
                                    options: [
                                        "It restored Mary and Elizabeth to the line of succession",
                                        "It abolished the Anglican Church",
                                        "It declared Edward VI the sole heir",
                                        "It ended the Wars of the Roses"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main economic impact of the Reformation?",
                                    options: [
                                        "Redistribution of Church wealth",
                                        "Increased taxes on the nobility",
                                        "Decline in trade",
                                        "Abolition of feudalism"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main political impact of the Reformation?",
                                    options: [
                                        "Strengthening of the monarchy",
                                        "Weakening of the monarchy",
                                        "Rise of the Catholic Church",
                                        "Abolition of Parliament"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the main cultural impact of the Reformation?",
                                    options: [
                                        "Spread of Protestant ideas",
                                        "Decline of Catholic art",
                                        "Rise of secular literature",
                                        "All of the above"
                                    ],
                                    correct: 3
                                },
                                {
                                    question: "What was the main reason for Edward VI's short reign?",
                                    options: [
                                        "His poor health",
                                        "His lack of support from the nobility",
                                        "His opposition to the Catholic Church",
                                        "His military failures"
                                    ],
                                    correct: 0
                                },
                                {
                                    question: "What was the long-term impact of the Tudor Reformation?",
                                    options: [
                                        "Religious divisions in the British Isles",
                                        "The rise of Protestantism in Europe",
                                        "The decline of the Catholic Church",
                                        "All of the above"
                                    ],
                                    correct: 3
                                },

                                    {
                                        question: "What was Mary I's primary goal as queen?",
                                        options: [
                                            "To strengthen Protestantism in England",
                                            "To restore Catholicism in England",
                                            "To expand England's territories",
                                            "To abolish the monarchy"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "Why was Mary I nicknamed 'Bloody Mary'?",
                                        options: [
                                            "She led England into a bloody war",
                                            "She executed over 300 Protestants",
                                            "She was known for her violent temper",
                                            "She executed her sister Elizabeth"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "Who was Mary I's mother?",
                                        options: [
                                            "Anne Boleyn",
                                            "Catherine of Aragon",
                                            "Jane Seymour",
                                            "Catherine Parr"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "Who was Mary I's husband?",
                                        options: [
                                            "Philip of Spain",
                                            "Francis of France",
                                            "Edward VI",
                                            "Henry VIII"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was the result of Mary I's marriage to Philip of Spain?",
                                        options: [
                                            "A male heir was born",
                                            "It strengthened England's alliance with Spain",
                                            "It caused tension and no children were born",
                                            "It led to a war with France"
                                        ],
                                        correct: 2
                                    },
                                    {
                                        question: "What illness likely caused Mary I's death?",
                                        options: [
                                            "Tuberculosis",
                                            "Ovarian cancer",
                                            "Smallpox",
                                            "Dysentery"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What did Mary I believe her false pregnancy symbolized?",
                                        options: [
                                            "God's punishment for not persecuting enough heretics",
                                            "A sign of divine favor",
                                            "A political conspiracy",
                                            "A curse from her enemies"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Mary I's relationship with Elizabeth I?",
                                        options: [
                                            "They were close allies",
                                            "They were half-sisters and rivals",
                                            "They were cousins",
                                            "They were political allies"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's approach to religion?",
                                        options: [
                                            "She was a devout Catholic",
                                            "She adopted a neutral and moderate stance",
                                            "She was a strict Protestant",
                                            "She abolished all religious practices"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's nickname?",
                                        options: [
                                            "Bloody Mary",
                                            "The Virgin Queen",
                                            "The Queen of Scots",
                                            "The Renaissance Queen"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's relationship with her father, Henry VIII?",
                                        options: [
                                            "She was his favorite child",
                                            "She was initially regarded as a disappointment",
                                            "She was disinherited by him",
                                            "She was raised by him personally"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What major naval victory occurred during Elizabeth I's reign?",
                                        options: [
                                            "The defeat of the Spanish Armada",
                                            "The Battle of Agincourt",
                                            "The Battle of Bosworth Field",
                                            "The Siege of Calais"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "Who was Elizabeth I's mother?",
                                        options: [
                                            "Catherine of Aragon",
                                            "Anne Boleyn",
                                            "Jane Seymour",
                                            "Catherine Parr"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's stance on marriage?",
                                        options: [
                                            "She married a foreign prince",
                                            "She remained unmarried to maintain her power",
                                            "She married multiple times for political alliances",
                                            "She was forced into marriage by Parliament"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What title did Elizabeth I adopt to emphasize her role as a ruler?",
                                        options: [
                                            "Defender of the Faith",
                                            "Mother of the People",
                                            "Supreme Head of the Church",
                                            "Queen of the World"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's greatest military achievement?",
                                        options: [
                                            "Defeating the Spanish Armada in 1588",
                                            "Conquering Ireland",
                                            "Expanding England's territories in France",
                                            "Establishing a permanent navy"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's approach to national identity?",
                                        options: [
                                            "She emphasized the idea of 'true English blood'",
                                            "She promoted multiculturalism",
                                            "She aligned England with Spain",
                                            "She abolished the concept of nationalism"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's relationship with Mary, Queen of Scots?",
                                        options: [
                                            "They were allies",
                                            "Elizabeth executed Mary for treason",
                                            "Mary was Elizabeth's closest advisor",
                                            "They ruled England together"
                                        ],
                                        correct: 1
                                    },
                                    {
                                        question: "What was Elizabeth I's strategy for maintaining power?",
                                        options: [
                                            "Relying on loyal counsellors and spies",
                                            "Marrying a powerful foreign prince",
                                            "Expanding England's military",
                                            "Suppressing Parliament"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was the Golden Age of England?",
                                        options: [
                                            "A period of cultural, economic, and political prosperity under Elizabeth I",
                                            "The reign of Henry VIII",
                                            "The time of the English Civil War",
                                            "The period of the Norman Conquest"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What marked the end of the Tudor dynasty?",
                                        options: [
                                            "The death of Elizabeth I",
                                            "The execution of Mary, Queen of Scots",
                                            "The defeat of the Spanish Armada",
                                            "The coronation of James I"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's greatest cultural contribution?",
                                        options: [
                                            "Supporting the arts and the English Renaissance",
                                            "Establishing the Anglican Church",
                                            "Writing religious texts",
                                            "Building the Tower of London"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's policy towards Ireland?",
                                        options: [
                                            "Military expeditions to suppress rebellions",
                                            "Granting Ireland independence",
                                            "Converting Ireland to Protestantism",
                                            "Forming an alliance with Irish leaders"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's relationship with her counsellors?",
                                        options: [
                                            "She relied heavily on their intelligence and advice",
                                            "She distrusted all of them",
                                            "She ruled without their input",
                                            "She replaced them frequently"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's approach to religious conflict?",
                                        options: [
                                            "She promoted tolerance and moderation",
                                            "She strictly enforced Protestantism",
                                            "She restored Catholicism",
                                            "She abolished all religious practices"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's greatest naval achievement?",
                                        options: [
                                            "Establishing England as a dominant naval power",
                                            "Conquering Spain",
                                            "Building the largest navy in Europe",
                                            "Defeating the French navy"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's stance on foreign alliances?",
                                        options: [
                                            "She avoided marriage to maintain independence",
                                            "She formed alliances through marriage",
                                            "She allied with Spain against France",
                                            "She sought alliances with the Catholic Church"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's role in the execution of Mary, Queen of Scots?",
                                        options: [
                                            "She signed the order for Mary's execution",
                                            "She opposed Mary's execution",
                                            "She exiled Mary to France",
                                            "She pardoned Mary"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's greatest political strength?",
                                        options: [
                                            "Her ability to balance religious tensions",
                                            "Her military conquests",
                                            "Her alliances with foreign powers",
                                            "Her strict enforcement of laws"
                                        ],
                                        correct: 0
                                    },
                                    {
                                        question: "What was Elizabeth I's lasting legacy?",
                                        options: [
                                            "The establishment of a strong, unified England",
                                            "The expansion of England's empire",
                                            "The end of religious conflict in England",
                                            "The abolition of the monarchy"
                                        ],
                                        correct: 0
                                    }
];

// Variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let studentFirstName = '';
let studentLastName = '';

// Navigation Functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'quiz') {
        // Reset quiz view to show student form
        document.getElementById('student-form').style.display = 'block';
        document.getElementById('quiz-content').style.display = 'none';
        // Clear previous inputs
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
    } else if (sectionId === 'study-guide') {
        populateStudyGuide();
    }
}

// Study Guide Functions
function populateStudyGuide() {
    const container = document.getElementById('study-guide-content');

    // Clear only the dynamically generated content, not the entire container
    const dynamicContent = container.querySelectorAll('.question-item');
    dynamicContent.forEach(item => item.remove());

    // Dynamically add questions
    allQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        let optionsHtml = '<ul class="options-list">';
        q.options.forEach((option, i) => {
            const isCorrect = i === q.correct;
            optionsHtml += `
                <li class="option-item ${isCorrect ? 'correct-answer' : ''}">
                    ${option}
                </li>
            `;
        });
        optionsHtml += '</ul>';

        questionDiv.innerHTML = `
            <div class="question-text">
                ${index + 1}. ${q.question}
            </div>
            ${optionsHtml}
        `;
        container.appendChild(questionDiv);
    });
}

// Quiz Functions
function startQuiz() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const questionCount = document.getElementById('questionCount').value;

    if (!firstName || !lastName) {
        alert('Please enter both first and last name');
        return;
    }

    studentFirstName = firstName;
    studentLastName = lastName;
    selectedQuestionCount = questionCount; // Store the selected question count

    document.getElementById('student-form').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';

    initializeQuiz(questionCount);
}

function initializeQuiz(questionCount) {
    if (questionCount === "all") {
        // Include all questions if "All Questions" is selected
        currentQuestions = [...allQuestions];
    } else {
        // Otherwise, include the specified number of questions
        currentQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5) // Shuffle the questions
            .slice(0, parseInt(questionCount, 10)); // Select the desired number of questions
    }

    // Shuffle the options for each question
    currentQuestions = currentQuestions.map(question => {
        const options = [...question.options];
        const correctAnswer = question.correct;

        // Shuffle the options
        const shuffledOptions = options
            .map((option, index) => ({ option, index }))
            .sort(() => Math.random() - 0.5);

        // Find the new index of the correct answer
        const newCorrectIndex = shuffledOptions.findIndex(
            item => item.index === correctAnswer
        );

        // Return the question with shuffled options and updated correct index
        return {
            ...question,
            options: shuffledOptions.map(item => item.option),
            correct: newCorrectIndex
        };
    });

    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    answered = false;
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsHtml = question.options.map((option, index) => `
        <div class="option" onclick="selectOption(${index})">
            ${option}
        </div>
    `).join('');
    
    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('nextBtn').style.display = 'none';
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function selectOption(selectedIndex) {
    if (answered) return;
    answered = true;

    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options[selectedIndex].classList.add(
        selectedIndex === question.correct ? 'correct' : 'wrong'
    );

    if (selectedIndex === question.correct) {
        score++;
    }

    options[question.correct].classList.add('correct');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    // Check if this is the last question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        
        // Create Show Results button
        const showResultsDiv = document.createElement('div');
        showResultsDiv.className = 'option';
        showResultsDiv.textContent = 'Show Results';
        showResultsDiv.style.backgroundColor = '#2e7d32';
        showResultsDiv.style.color = 'white';
        showResultsDiv.style.marginTop = '20px';
        showResultsDiv.style.textAlign = 'center';
        showResultsDiv.style.cursor = 'pointer'; // Add cursor pointer
        
        // Add click event listener
        showResultsDiv.onclick = function() {
            showResults();
        };

        // Add the button to the DOM
        const optionsContainer = document.getElementById('options');
        optionsContainer.appendChild(showResultsDiv);
    } else {
        document.getElementById('nextBtn').style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}



function showResults() {
    const quizContent = document.getElementById('quiz-content');
    if (quizContent) {
        const totalQuestions = currentQuestions.length;
        const correctAnswers = score;
        const incorrectAnswers = totalQuestions - correctAnswers;
        const percentage = (score / totalQuestions) * 100;

        quizContent.innerHTML = `
            <div class="question-card">
                <div class="results-container" style="background: #ffffff; border-radius: 10px; ; padding: 20px; text-align: center;">
                    <h3 style="color: #4361ee; font-size: 1.5rem; margin-bottom: 20px;">Results for ${studentFirstName} ${studentLastName}</h3>
                    <div class="results-detail" style="text-align: left; margin-bottom: 20px;">
                        <p>Total Questions: <span class="score-highlight" style="font-weight: bold; color: #4361ee;">${totalQuestions}</span></p>
                        <p>Correct Answers: <span class="score-highlight" style="font-weight: bold; color: #4361ee;">${correctAnswers}</span></p>
                        <p>Incorrect Answers: <span class="score-highlight" style="font-weight: bold; color: #4361ee;">${incorrectAnswers}</span></p>
                        <p>Score: <span class="score-highlight" style="font-weight: bold; color: #4361ee;">${percentage.toFixed(1)}%</span></p>
                    </div>
                    <div class="results-buttons" style="display: flex; flex-direction: column; gap: 10px;">
                        <button class="btn" onclick="tryAgain()" style="background: #4361ee; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 1rem;">Try Again</button>
                        <button class="btn btn-secondary" onclick="showSection('home')" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 1rem;">Back to Home</button>
                    </div>
                </div>
            </div>
        `;
    }
}

function tryAgain() {
    // Reset the quiz content to its original structure
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="progress-bar">
            <div id="progress" style="width: 0%"></div>
        </div>
        <div class="question-card">
            <div id="questionNumber"></div>
            <div id="questionText"></div>
            <div id="options"></div>
            <button id="nextBtn" onclick="nextQuestion()" style="display: none; background: #4361ee; color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; width: 100%; font-size: 16px; margin-top: 20px;">Next Question</button>
        </div>
    `;
    
    // Reinitialize the quiz with the previously selected question count
    initializeQuiz(selectedQuestionCount);
}

// Initialize the page
window.onload = () => {
    showSection('home');
};

document.getElementById('questionCount').addEventListener('change', function () {
    console.log(`Number of Questions Selected: ${this.value}`);
});



