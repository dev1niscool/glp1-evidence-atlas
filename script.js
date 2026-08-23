const evidenceData = {
  semaglutide: {
    name: "Semaglutide",
    kicker: "01 · Single agonist · GLP-1R",
    deck: "A GLP-1 receptor agonist with human outcomes data for weight, glucose, cardiovascular events, kidney disease, and MASH.",
    preclinicalSummary: {
      pros: [
        "GLP-1R agonism reduced intake and fat mass in obese mice without lowering energy expenditure; selected hindbrain neurons were causally required.",
        "Semaglutide reduced plaque in ApoE−/− and LDLr−/− mice, including at non-weight-lowering doses, and endothelial GLP-1R supported post-MI protection with liraglutide.",
        "In MASH mice, liver sinusoidal endothelial GLP-1R was required for benefit even when substantial weight loss still occurred."
      ],
      cons: [
        "Semaglutide did not improve cognition, amyloid, or neuroinflammation in two Alzheimer mouse models despite metabolic activity.",
        "GLP-1R knockout bone phenotypes and short neutral drug studies do not establish fracture protection; rapid weight loss remains a separate skeletal variable.",
        "Rodent thyroid C-cell tumors underpin the boxed warning, but the relevance of that rodent signal to humans remains unknown."
      ]
    },
    identity: [
      ["Targets", "GLP-1 receptor"],
      ["U.S. status", "FDA approved; indication varies by product"],
      ["Evidence span", "Phase 3 outcomes + mechanistic studies"],
      ["Key distinction", "Longest outcomes record in this atlas"]
    ],
    summaries: {
      human: "Randomized human trials establish the outcomes below in <strong>specific enrolled populations</strong>. They do not guarantee an individual result.",
      preclinical: "These experiments help explain possible mechanisms. <strong>Mouse doses, models, and biology do not map directly onto human treatment.</strong>",
      safety: "Common tolerability problems and uncommon serious risks both matter. <strong>Frequency varies by indication, dose, comparator, and trial.</strong>",
      sources: "Primary papers and regulatory documents are listed first. The Glucagon.com directory provides <strong>expert context and a path into the wider literature.</strong>"
    },
    human: [
      {
        tier: "Phase 3 RCT", year: "2021", metric: "−14.9%", title: "Mean weight change at 68 weeks",
        finding: "Semaglutide 2.4 mg plus lifestyle intervention produced a 14.9% mean weight reduction versus 2.4% with placebo in adults with overweight or obesity without diabetes.",
        context: "STEP 1 · n=1,961 · 68 weeks · placebo controlled",
        source: "STEP 1 · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2032183"
      },
      {
        tier: "Outcomes RCT", year: "2023", metric: "HR 0.80", title: "Major cardiovascular events",
        finding: "Among adults with established cardiovascular disease and overweight or obesity but no diabetes, major CV events occurred in 6.5% with semaglutide and 8.0% with placebo.",
        context: "SELECT · n=17,604 · mean follow-up 39.8 months",
        source: "SELECT · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2307563"
      },
      {
        tier: "Outcomes RCT", year: "2024", metric: "HR 0.76", title: "Major kidney and CV-death outcome",
        finding: "In people with type 2 diabetes and chronic kidney disease, the composite primary kidney/CV-death outcome was 24% lower with semaglutide than placebo.",
        context: "FLOW · n=3,533 · median follow-up 3.4 years",
        source: "FLOW · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2403347"
      },
      {
        tier: "Phase 3 RCT", year: "2025", metric: "62.9%", title: "MASH resolution without worse fibrosis",
        finding: "At 72 weeks, resolution of MASH without worsening fibrosis occurred in 62.9% with semaglutide versus 34.3% with placebo; fibrosis improvement without worse MASH occurred in 36.8% versus 22.4%.",
        context: "ESSENCE interim analysis · biopsy-defined MASH · F2–F3 fibrosis",
        source: "ESSENCE · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2413258"
      }
    ],
    preclinical: [
      {
        tier: "DIO mice", year: "2020", metric: "up to −22%", title: "Weight fell mainly through lower intake",
        finding: "Three weeks of semaglutide produced dose-dependent weight loss in diet-induced obese mice. The highest tested dose reduced body weight by about 22%, with marked food-intake suppression and relatively little lean-mass change.",
        context: "Mechanism study · high-dose mouse result · not a human forecast",
        source: "Gabery et al. · JCI Insight", url: "https://doi.org/10.1172/jci.insight.133429"
      },
      {
        tier: "Mouse models", year: "2018", metric: "less plaque", title: "Experimental atherosclerosis",
        finding: "Semaglutide reduced atherosclerotic lesion development and inflammatory gene expression in ApoE- and LDL-receptor-deficient mice, including at doses that did not lower body weight.",
        context: "ApoE−/− and LDLr−/− mice · mechanism signal",
        source: "Rakipovski et al. · JACC Basic to Translational Science", url: "https://doi.org/10.1016/j.jacbts.2018.09.004"
      },
      {
        tier: "MASH mice", year: "2026", metric: "LSEC GLP-1R", title: "A weight-independent liver pathway",
        finding: "Semaglutide improved experimental MASH despite deletion of GLP-1 receptors in canonical appetite-regulating neurons. Deleting GLP-1 receptors from liver sinusoidal endothelial cells blocked liver improvement despite roughly 20% weight loss.",
        context: "Genetic mouse models · causal receptor-localization experiment",
        source: "Gonzalez-Rellan et al. · Cell Metabolism", url: "https://doi.org/10.1016/j.cmet.2026.03.011"
      },
      {
        tier: "Null result · mice", year: "2024", metric: "no cognitive gain", title: "Alzheimer models did not improve",
        finding: "Semaglutide and tirzepatide produced expected metabolic effects but did not improve behavior, cognition, amyloid pathology, or neuroinflammation in 5XFAD and APP/PS1 mice.",
        context: "Two transgenic Alzheimer models · important negative result", tone: "null",
        source: "Forny Germano et al. · Molecular Metabolism", url: "https://doi.org/10.1016/j.molmet.2024.102019"
      }
    ],
    safety: [
      {
        tier: "FDA label", year: "2025", metric: "GI effects", title: "Common and sometimes treatment-limiting",
        finding: "Nausea, diarrhea, vomiting, constipation, abdominal pain, headache, and fatigue are among common adverse reactions. Severe gastrointestinal reactions occur and dehydration can contribute to acute kidney injury.",
        context: "Wegovy U.S. prescribing information · frequency depends on indication",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s026lbl.pdf"
      },
      {
        tier: "Outcomes RCT", year: "2023", metric: "16.6% vs 8.2%", title: "Adverse-event discontinuation",
        finding: "In SELECT, adverse events leading to permanent discontinuation were more frequent with semaglutide than placebo, largely because of gastrointestinal disorders.",
        context: "SELECT · semaglutide versus placebo · median exposure 34.2 months",
        source: "SELECT · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2307563"
      },
      {
        tier: "FDA boxed warning", year: "2025", metric: "rodent tumors", title: "Thyroid C-cell tumor warning",
        finding: "Semaglutide caused dose-dependent thyroid C-cell tumors in mice and rats. Human relevance is unknown. It is contraindicated with personal or family history of medullary thyroid carcinoma or MEN2.",
        context: "Animal carcinogenicity signal · human causality not established",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s026lbl.pdf"
      },
      {
        tier: "FDA label", year: "2025", metric: "warnings", title: "Pancreas, gallbladder, eye, aspiration",
        finding: "The label warns about acute pancreatitis, gallbladder disease, hypoglycemia with insulin or secretagogues, diabetic retinopathy complications, hypersensitivity, increased heart rate, and pulmonary aspiration during anesthesia or deep sedation.",
        context: "Risk is not the same as proof of causation for every reported event",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s026lbl.pdf"
      },
      {
        tier: "Extension study", year: "2022", metric: "~⅔ regained", title: "Stopping changed the trajectory",
        finding: "One year after semaglutide withdrawal in the STEP 1 extension, participants had regained about two-thirds of their prior weight loss on average, with cardiometabolic variables moving back toward baseline.",
        context: "Off-treatment extension · not randomized during withdrawal",
        source: "STEP 1 extension · Diabetes, Obesity and Metabolism", url: "https://doi.org/10.1111/dom.14725"
      }
    ],
    glucagon: [
      ["GLP-1 overview", "https://glucagon.com/glp1"],
      ["Adverse events", "https://glucagon.com/glp1adverseevents"],
      ["Food intake", "https://glucagon.com/glp1foodintake"],
      ["Central nervous system", "https://glucagon.com/glp1cns"],
      ["Gastric emptying", "https://glucagon.com/glp1gastric"],
      ["Cardiovascular system", "https://glucagon.com/glp1cardio"],
      ["Insulin sensitivity", "https://glucagon.com/glp1insulin"],
      ["GLP-1R knockout mice", "https://glucagon.com/glp1mice"],
      ["Human subjects", "https://glucagon.com/glp1human"],
      ["Type 2 diabetes", "https://glucagon.com/glp1actiontype2diabetes"],
      ["GLP-1 agonists", "https://glucagon.com/glp1agonists"],
      ["Inflammation & immunity", "https://glucagon.com/inflammationandimmunesystem"]
    ]
  },

  tirzepatide: {
    name: "Tirzepatide",
    kicker: "02 · Dual agonist · GIPR + GLP-1R",
    deck: "A dual GIP and GLP-1 receptor agonist studied for weight, glucose, sleep apnea, obesity-related HFpEF, and MASH.",
    preclinicalSummary: {
      pros: [
        "Tirzepatide's insulin-sensitizing effect disappeared in Gipr−/− mice, while GLP-1R was required for its shift away from fat-rich food.",
        "GIPR agonism protected intestinal barrier/stromal biology in a chemotherapy model and reduced macrophage foam-cell formation in diabetic ApoE−/− mice.",
        "Direct tirzepatide treatment improved survival, infarct area, BCAA catabolism, and inflammatory injury after experimental MI."
      ],
      cons: [
        "Whole-body or cardiomyocyte Gipr deletion protected mice after permanent coronary ligation; the phenotype involved lower HSL activation and greater cardiac triglyceride storage.",
        "Direct skeletal studies conflict: one short experiment was neutral, while a six-week db/db study reported bone loss with microbiome/metabolite changes.",
        "Neither the GIPR heart knockout nor the bone findings prove clinical harm; model, tissue, duration, and receptor perturbation differ from chronic tirzepatide exposure."
      ]
    },
    identity: [
      ["Targets", "GIP + GLP-1 receptors"],
      ["U.S. status", "FDA approved for T2D, weight management, and obesity-associated OSA"],
      ["Evidence span", "Phase 3 programs + CV outcomes"],
      ["Key distinction", "Beat semaglutide 2.4 mg in a head-to-head obesity trial"]
    ],
    summaries: {
      human: "Tirzepatide has direct randomized evidence for <strong>weight, glucose, OSA, HFpEF symptoms/events, and MASH histology</strong>; regulatory indications are narrower than the research portfolio.",
      preclinical: "Dual-receptor studies ask what GIPR adds to GLP-1R activation. <strong>Some mechanistic findings depend on species, tissue, and experimental design.</strong>",
      safety: "The dominant adverse effects are gastrointestinal. The boxed thyroid warning comes from rodents; <strong>the label says human relevance is unknown.</strong>",
      sources: "The ledger separates peer-reviewed trials, the FDA label, animal work, and Glucagon.com’s <strong>GIP/co-agonist context.</strong>"
    },
    human: [
      {
        tier: "Phase 3 RCT", year: "2022", metric: "−20.9%", title: "Mean weight change at 72 weeks",
        finding: "At 15 mg, mean weight change was −20.9%; results were −15.0% and −19.5% at 5 and 10 mg, versus −3.1% with placebo in adults without diabetes.",
        context: "SURMOUNT-1 · n=2,539 · obesity/overweight · 72 weeks",
        source: "SURMOUNT-1 · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2206038"
      },
      {
        tier: "Head-to-head RCT", year: "2025", metric: "−20.2% vs −13.7%", title: "More weight loss than semaglutide 2.4 mg",
        finding: "In adults with obesity without diabetes, maximum tolerated tirzepatide produced 20.2% mean weight loss versus 13.7% with maximum tolerated semaglutide after 72 weeks.",
        context: "SURMOUNT-5 · n=751 · open-label · active comparator",
        source: "SURMOUNT-5 · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2416394"
      },
      {
        tier: "Phase 3 RCT", year: "2021", metric: "−2.01 to −2.30", title: "HbA1c change in type 2 diabetes",
        finding: "All tirzepatide doses reduced HbA1c more than semaglutide 1 mg at 40 weeks. Between-group weight differences favored tirzepatide by 1.9, 3.6, and 5.5 kg at 5, 10, and 15 mg.",
        context: "SURPASS-2 · n=1,879 · open-label · semaglutide 1 mg comparator",
        source: "SURPASS-2 · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2107519"
      },
      {
        tier: "3-year RCT", year: "2024", metric: "1.3% vs 13.3%", title: "Progression to type 2 diabetes",
        finding: "Among SURMOUNT-1 participants with obesity and prediabetes, diagnosed type 2 diabetes occurred in 1.3% with tirzepatide and 13.3% with placebo through 176 weeks.",
        context: "n=1,032 with prediabetes · 176 weeks · exploratory estimand details matter",
        source: "SURMOUNT-1 extension · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2410819"
      },
      {
        tier: "Two phase 3 RCTs", year: "2024", metric: "less AHI", title: "Obstructive sleep apnea improved",
        finding: "In adults with obesity and moderate-to-severe OSA, tirzepatide reduced apnea–hypopnea index, body weight, hypoxic burden, inflammation, and systolic blood pressure versus placebo, with or without PAP therapy.",
        context: "SURMOUNT-OSA · two 52-week trials · FDA-approved OSA indication",
        source: "SURMOUNT-OSA · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2404881"
      },
      {
        tier: "Outcomes RCT", year: "2024", metric: "HR 0.62", title: "HFpEF worsening or CV death",
        finding: "In obesity-related HFpEF, CV death or worsening heart failure occurred in 9.9% with tirzepatide and 15.3% with placebo. The difference was driven mainly by fewer worsening-HF events.",
        context: "SUMMIT · n=731 · median follow-up 104 weeks",
        source: "SUMMIT · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2410027"
      },
      {
        tier: "Phase 2 RCT", year: "2024", metric: "44–62%", title: "MASH resolution without worse fibrosis",
        finding: "MASH resolution without worsening fibrosis occurred in 44%, 56%, and 62% across tirzepatide doses versus 10% with placebo. This was a phase 2 histology trial, not an FDA MASH indication.",
        context: "SYNERGY-NASH · n=190 · 52 weeks · F2–F3 fibrosis",
        source: "SYNERGY-NASH · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2401943"
      },
      {
        tier: "CV outcomes RCT", year: "2025", metric: "HR 0.92", title: "Noninferior—not superior—to dulaglutide",
        finding: "Major CV events occurred in 12.2% with tirzepatide and 13.1% with dulaglutide. Tirzepatide met noninferiority; superiority was not established (95.3% CI 0.83–1.01; P=0.09).",
        context: "SURPASS-CVOT · n=13,165 · type 2 diabetes + ASCVD",
        source: "SURPASS-CVOT · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2505928"
      }
    ],
    preclinical: [
      {
        tier: "DIO mice", year: "2018", metric: "dual signal", title: "Both receptors contributed",
        finding: "The discovery program found tirzepatide improved glucose control through both GIPR and GLP-1R in diet-induced obese mice and reduced weight and fat mass more than semaglutide in the tested paradigms.",
        context: "Mouse pharmacology · discovery-stage head-to-head",
        source: "Coskun et al. · Molecular Metabolism", url: "https://doi.org/10.1016/j.molmet.2018.09.009"
      },
      {
        tier: "Genetic mice", year: "2021", metric: "GIPR needed", title: "Insulin sensitization required intact GIPR",
        finding: "Tirzepatide improved insulin sensitivity in obese wild-type mice but not in GIP-receptor knockout mice, supporting a distinct GIPR contribution beyond GLP-1R activity.",
        context: "Hyperinsulinemic-euglycemic clamps · receptor knockout model",
        source: "Samms et al. · JCI Insight", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8203452/"
      },
      {
        tier: "Male mice", year: "2024", metric: "partial protection", title: "Chemotherapy gut injury",
        finding: "GIPR activation reduced 5-fluorouracil-associated gut inflammation and barrier injury. Tirzepatide partly reproduced the effect; semaglutide did not in this male-mouse model.",
        context: "5-FU intestinal injury · sex and species limit translation",
        source: "Hammoud et al. · JCI Insight", url: "https://doi.org/10.1172/jci.insight.174825"
      },
      {
        tier: "Null result · mice", year: "2024", metric: "no cognitive gain", title: "Alzheimer models did not improve",
        finding: "Despite metabolic activity, tirzepatide and semaglutide did not improve behavior, cognition, amyloid pathology, or neuroinflammation in 5XFAD and APP/PS1 mice.",
        context: "Two transgenic Alzheimer models · important negative result", tone: "null",
        source: "Forny Germano et al. · Molecular Metabolism", url: "https://doi.org/10.1016/j.molmet.2024.102019"
      }
    ],
    safety: [
      {
        tier: "FDA label", year: "2024", metric: "GI effects", title: "Nausea, diarrhea, vomiting, constipation",
        finding: "Gastrointestinal adverse reactions are common, occur most often during dose escalation, and can be severe. Dehydration can contribute to acute kidney injury.",
        context: "Zepbound U.S. prescribing information",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/217806s013lbl.pdf"
      },
      {
        tier: "FDA boxed warning", year: "2024", metric: "rat tumors", title: "Thyroid C-cell tumor warning",
        finding: "Tirzepatide caused dose-dependent thyroid C-cell tumors in rats. Human relevance is unknown. It is contraindicated with personal or family history of medullary thyroid carcinoma or MEN2.",
        context: "Rodent signal · human causality not established",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/217806s013lbl.pdf"
      },
      {
        tier: "Withdrawal RCT", year: "2023", metric: "+14.0%", title: "Weight regain after switching to placebo",
        finding: "After an initial 36 weeks of tirzepatide, people randomized to placebo regained 14.0% from randomization to week 88, while those continuing tirzepatide lost another 5.5%.",
        context: "SURMOUNT-4 · randomized withdrawal · chronic-treatment question",
        source: "SURMOUNT-4 · JAMA", url: "https://doi.org/10.1001/jama.2023.24945"
      },
      {
        tier: "FDA label", year: "2024", metric: "warnings", title: "Pancreas, gallbladder, glucose, aspiration",
        finding: "The label warns about severe GI reactions, acute kidney injury, gallbladder disease, pancreatitis, hypersensitivity, hypoglycemia with insulin or secretagogues, retinopathy complications in diabetes, and aspiration during anesthesia or deep sedation.",
        context: "Review the current label for formulation- and indication-specific details",
        source: "FDA prescribing information", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/217806s013lbl.pdf"
      },
      {
        tier: "Outcomes RCT", year: "2024", metric: "6.3% vs 1.4%", title: "Adverse-event discontinuation in HFpEF",
        finding: "In SUMMIT, adverse events leading to discontinuation were more frequent with tirzepatide than placebo, mainly gastrointestinal events.",
        context: "Obesity-related HFpEF · median follow-up 104 weeks",
        source: "SUMMIT · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2410027"
      }
    ],
    glucagon: [
      ["GIP overview", "https://glucagon.com/gip"],
      ["GIP receptor", "https://glucagon.com/gipreceptor"],
      ["GIP-based co-agonists", "https://glucagon.com/gip-basedco-agonists"],
      ["GIP and human diabetes", "https://glucagon.com/gipandhumandiabetes"],
      ["GLP-1 overview", "https://glucagon.com/glp1"],
      ["GLP-1 adverse events", "https://glucagon.com/glp1adverseevents"],
      ["GLP-1 insulin sensitivity", "https://glucagon.com/glp1insulin"],
      ["GLP-1 cardiovascular", "https://glucagon.com/glp1cardio"],
      ["Inflammation & immunity", "https://glucagon.com/inflammationandimmunesystem"],
      ["Drucker Lab publications", "https://glucagon.com/druckerpublications"]
    ]
  },

  retatrutide: {
    name: "Retatrutide",
    kicker: "03 · Triple agonist · GIPR + GLP-1R + GCGR",
    deck: "An investigational GIP, GLP-1, and glucagon receptor agonist with emerging human data for weight, glucose, and liver fat.",
    preclinicalSummary: {
      pros: [
        "GCGR activity added weight loss and lipid oxidation beyond dual incretin agonism in discovery models, while chronic GCGR agonism improved triglyceride handling and amino-acid disposal.",
        "Retatrutide reduced liver triglyceride and injury measures in obese/MASH animals and improved inflammatory/fibrotic kidney injury in db/db mice.",
        "Kidney-specific Gcgr loss caused lipid, oxidative, inflammasome, and fibrotic stress, suggesting normal renal GCGR signaling has protective metabolic functions."
      ],
      cons: [
        "Glucagon worsened recovery and survival after mouse ischemic injury, whereas cardiomyocyte Gcgr deletion reduced infarct size; cardiomyocyte Gipr deletion was also protective in a separate MI study.",
        "Retatrutide directly increased isolated mouse atrial rate through GCGR–cAMP–PKA signaling, although that preparation cannot establish human arrhythmia risk.",
        "A later MASH model found loss of both fat and lean mass and no sustained energy-expenditure increase; long-term organ and safety data remain limited."
      ]
    },
    alert: "Retatrutide is investigational. It is not FDA approved, has no approved prescribing label, and legitimate access is through registered clinical research—not retail “research peptide” sellers.",
    identity: [
      ["Targets", "GIP + GLP-1 + glucagon receptors"],
      ["U.S. status", "Investigational; not FDA approved"],
      ["Evidence span", "Phase 2 + emerging phase 3"],
      ["Key distinction", "Glucagon-receptor activity adds promise and uncertainty"]
    ],
    summaries: {
      human: "The human record includes peer-reviewed phase 2 studies and emerging phase 3 results. <strong>Company toplines are labeled and are not substitutes for full peer review.</strong>",
      preclinical: "Triple-agonist animal work supports receptor complementarity, but <strong>energy-expenditure findings are not uniform across models.</strong>",
      safety: "Without an approved label or long-term outcomes program, the safety picture is incomplete. <strong>Investigational does not mean available for self-experimentation.</strong>",
      sources: "Peer-reviewed studies are separated from sponsor announcements. Glucagon.com pages supply <strong>physiology and co-agonist context rather than retatrutide prescribing guidance.</strong>"
    },
    human: [
      {
        tier: "Phase 2 RCT", year: "2023", metric: "−24.2%", title: "Mean weight change at 48 weeks",
        finding: "In adults with obesity or overweight without diabetes, the 12-mg group had 24.2% mean weight loss versus 2.1% with placebo. The study was too small and short to establish long-term clinical outcomes.",
        context: "n=338 · 48 weeks · placebo controlled · dose-ranging",
        source: "Jastreboff et al. · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2301972"
      },
      {
        tier: "Phase 2 RCT", year: "2023", metric: "up to −2.02%", title: "HbA1c change at 24 weeks",
        finding: "In type 2 diabetes, retatrutide reduced HbA1c by up to 2.02 percentage points at 24 weeks and body weight by up to 16.94% at 36 weeks, versus 0.01 points and 3.00% with placebo.",
        context: "n=281 · dulaglutide and placebo comparators · dose-ranging",
        source: "Rosenstock et al. · The Lancet", url: "https://doi.org/10.1016/S0140-6736(23)01053-X"
      },
      {
        tier: "Phase 2 substudy", year: "2024", metric: "−82.4%", title: "Liver-fat change at 24 weeks",
        finding: "In a 98-person MASLD substudy, mean relative liver-fat change reached −81.4% and −82.4% in the 8- and 12-mg groups, versus +0.3% with placebo. This was imaging, not a liver-outcomes trial.",
        context: "MRI-PDFF substudy · small sample · 24-week endpoint",
        source: "Sanyal et al. · Nature Medicine", url: "https://doi.org/10.1038/s41591-024-03018-2"
      },
      {
        tier: "Phase 3 RCT", year: "2026", metric: "−1.94%", title: "HbA1c change at 40 weeks",
        finding: "In early type 2 diabetes, HbA1c fell 1.69, 1.86, and 1.94 percentage points across doses versus 0.81 with placebo; body weight fell 11.5%, 13.9%, and 15.3% versus 2.6%.",
        context: "TRANSCEND-T2D-1 · n=537 · 40 weeks · peer reviewed",
        source: "Bajaj et al. · The Lancet", url: "https://doi.org/10.1016/S0140-6736(26)00967-0"
      },
      {
        tier: "Company topline", year: "2026", metric: "up to −28.3%", title: "Phase 3 obesity result—full paper pending",
        finding: "Lilly reported mean weight loss of 19.0%, 25.9%, and 28.3% across doses versus 2.2% with placebo at 80 weeks under the efficacy estimand. Full peer-reviewed methods and results were not yet available when checked.",
        context: "TRIUMPH-1 · n=2,339 · sponsor announcement · not peer reviewed", tone: "company",
        source: "Eli Lilly investor release · 21 May 2026", url: "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss"
      }
    ],
    preclinical: [
      {
        tier: "Triagonist mice", year: "2015", metric: "3 receptors", title: "Foundational triple-agonist concept",
        finding: "A predecessor unimolecular GLP-1/GIP/glucagon triagonist reduced body weight and improved glucose and fatty-liver measures in obese rodents more than matched single or dual agonists in the tested models.",
        context: "Predecessor molecule—not retatrutide · mechanistic proof of concept",
        source: "Finan et al. · Nature Medicine", url: "https://doi.org/10.1038/nm.3761"
      },
      {
        tier: "Obese mice", year: "2022", metric: "GCGR mattered", title: "Retatrutide discovery pharmacology",
        finding: "Retatrutide produced greater weight loss than tirzepatide in obese mice in the tested paradigm. Experimental receptor dissection supported a glucagon-receptor contribution that included higher energy expenditure.",
        context: "Discovery-stage mouse studies · human energy expenditure not established",
        source: "Coskun et al. · Cell Metabolism", url: "https://doi.org/10.1016/j.cmet.2022.07.013"
      },
      {
        tier: "Mice + hamsters", year: "2026", metric: "−31%", title: "MASH models—and a mixed mechanism signal",
        finding: "Retatrutide lowered weight about 31% in one MASH mouse experiment and improved liver measures. Food intake fell early, while measured energy expenditure did not rise significantly in that model.",
        context: "Preclinical MASH paper · model-specific contrast with discovery work", tone: "null",
        source: "Briand et al. · Obesity", url: "https://doi.org/10.1002/oby.70155"
      }
    ],
    safety: [
      {
        tier: "Phase 2 RCT", year: "2023", metric: "dose-related GI", title: "Nausea, diarrhea, vomiting, constipation",
        finding: "Gastrointestinal adverse events were the most common and were dose-related. Discontinuation because of adverse events occurred in 6% to 16% across retatrutide dose groups versus 0% with placebo.",
        context: "Obesity phase 2 · n=338 · 48 weeks",
        source: "Jastreboff et al. · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2301972"
      },
      {
        tier: "Phase 2 RCT", year: "2023", metric: "heart rate rose", title: "Dose-dependent pulse increase",
        finding: "Heart rate increased in a dose-dependent manner, peaked around week 24, then declined. The study was not designed to determine long-term cardiovascular safety.",
        context: "Obesity phase 2 · a physiologic signal, not an outcomes verdict",
        source: "Jastreboff et al. · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2301972"
      },
      {
        tier: "Phase 2 RCT", year: "2023", metric: "7% vs 1%", title: "Skin-sensation changes",
        finding: "Skin hyperesthesia was reported by 7% across retatrutide groups and 1% with placebo. The paper also reported one pancreatitis event and one severe arrhythmia with prolonged QT in a participant receiving ondansetron.",
        context: "Small numbers · causality and incidence remain uncertain",
        source: "Jastreboff et al. · New England Journal of Medicine", url: "https://doi.org/10.1056/NEJMoa2301972"
      },
      {
        tier: "Company topline", year: "2026", metric: "4.1–11.3%", title: "Discontinuation in TRIUMPH-1",
        finding: "The sponsor reported adverse-event discontinuation rates of 4.1%, 6.9%, and 11.3% across doses versus 4.9% with placebo; nausea reached 42.4% at the highest dose and altered skin sensations were reported.",
        context: "Sponsor announcement · full peer-reviewed safety tables pending", tone: "company",
        source: "Eli Lilly investor release · 21 May 2026", url: "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss"
      },
      {
        tier: "Evidence gap", year: "2026", metric: "unknown", title: "Long-term benefit–risk is not established",
        finding: "No approved label defines contraindications, monitoring, or safe use. Cardiovascular-outcomes, durability, pregnancy, rare-event, and longer-term tolerability evidence remain incomplete.",
        context: "Absence of evidence is not evidence of safety", tone: "null",
        source: "ClinicalTrials.gov retatrutide search", url: "https://clinicaltrials.gov/search?term=retatrutide"
      }
    ],
    glucagon: [
      ["GIP-based co-agonists", "https://glucagon.com/gip-basedco-agonists"],
      ["GIP overview", "https://glucagon.com/gip"],
      ["GIP receptor", "https://glucagon.com/gipreceptor"],
      ["GLP-1 overview", "https://glucagon.com/glp1"],
      ["GLP-1 food intake", "https://glucagon.com/glp1foodintake"],
      ["GLP-1 cardiovascular", "https://glucagon.com/glp1cardio"],
      ["Glucagon overview", "https://glucagon.com/glucagon"],
      ["Glucagon receptor", "https://glucagon.com/glucagonreceptor"],
      ["Inflammation & immunity", "https://glucagon.com/inflammationandimmunesystem"],
      ["Drucker Lab publications", "https://glucagon.com/druckerpublications"]
    ]
  }
};

const organSystems = [
  ["cardiovascular", "Heart & vessels"],
  ["brain", "Brain & appetite"],
  ["pancreas", "Pancreas & glucose"],
  ["gut", "Gut"],
  ["liver", "Liver"],
  ["kidney", "Kidney"],
  ["bone", "Bone"],
  ["adipose", "Adipose & energy"],
  ["immune", "Immune system"]
];

const organEvidence = {
  semaglutide: {
    cardiovascular: {
      title: "Heart & vessels",
      summary: "GLP-1 receptor biology in the mouse heart is not a single cardiomyocyte story. Endothelial/endocardial GLP-1 receptors, neural pathways, vascular inflammation, and weight-independent signals all appear to contribute.",
      studies: [
        {
          receptor: "GLP-1R", experiment: "Tissue-specific knockout", tone: "direct",
          title: "Tie2+ GLP-1 receptors carried much of liraglutide's post-MI protection",
          model: "Wild-type and Glp1rTie2−/− mice after permanent coronary ligation.",
          perturbation: "Liraglutide treatment with GLP-1R deleted across the Tie2+ endothelial-cell expression domain.",
          result: "In controls, liraglutide reduced infarct size, improved ejection fraction, and improved survival. Those effects were attenuated after Tie2-domain Glp1r deletion.",
          mechanism: "Mouse cardiac Glp1r transcripts localized mainly to endocardial/endothelial cells; liraglutide changed atrial programs linked to inflammation, repair, proliferation, and angiogenesis.",
          reading: "This supports an endothelial/endocardial GLP-1R route for class cardioprotection, but it used liraglutide—not semaglutide—and mouse/human cardiac receptor localization differed.",
          source: "McLean et al. · Molecular Metabolism 2022", url: "https://pubmed.ncbi.nlm.nih.gov/36396031/"
        },
        {
          receptor: "GLP-1R", experiment: "Drug in disease models", tone: "direct",
          title: "Semaglutide reduced plaque without requiring weight loss",
          model: "ApoE−/− and LDLr−/− mice with experimental atherosclerosis.",
          perturbation: "Semaglutide at several doses; some exposures did not reduce body weight.",
          result: "Atherosclerotic lesion development and aortic inflammatory gene expression fell, including under dose conditions without weight loss.",
          mechanism: "The study implicated reduced vascular inflammatory signaling rather than glucose or weight change alone.",
          reading: "This is direct semaglutide evidence for vascular plaque biology in mice. It is not a myocardial-infarction survival study and does not quantify human plaque regression.",
          source: "Rakipovski et al. · JACC Basic Transl Sci 2018", url: "https://doi.org/10.1016/j.jacbts.2018.09.004"
        }
      ]
    }
  },
  tirzepatide: {
    cardiovascular: {
      title: "Heart & vessels",
      summary: "GIP receptor experiments point in opposite directions depending on the model: loss of cardiomyocyte GIPR protected against sustained ischemic injury, GIP agonism showed anti-atherosclerotic effects elsewhere, and tirzepatide itself improved post-MI outcomes in a separate mouse study.",
      studies: [
        {
          receptor: "GIPR", experiment: "Agonist + global/tissue KO", tone: "warning",
          title: "Ussher: deleting cardiomyocyte GIPR protected the ischemic heart",
          model: "Wild-type, whole-body Gipr−/−, and cardiomyocyte-selective Gipr knockout mice after permanent LAD coronary ligation; separate doxorubicin and pressure-overload heart-failure models; isolated perfused hearts.",
          perturbation: "One week of sustained [D-Ala2]GIP agonism, whole-body receptor deletion, cardiomyocyte-specific deletion, and chemical or genetic HSL activation.",
          result: "Sustained agonism did not change post-MI mortality, although scar area increased and ventricular weight trended higher. Whole-body or cardiomyocyte Gipr deletion improved survival and reduced infarct scar/remodeling after sustained ischemia. Knockout did not improve doxorubicin- or pressure-overload heart failure.",
          mechanism: "Gipr transcripts were detected in all four mouse and human heart chambers. Protected knockout hearts had lower HSL phosphorylation, more myocardial triacylglycerol, and altered fatty-acid use; activating HSL partially reversed protection. Direct GIPR agonism in isolated hearts reduced TAG and increased fatty-acid oxidation.",
          reading: "This is a real cautionary mechanistic signal for ischemic fuel handling. It does not demonstrate that tirzepatide causes myocardial injury: the agonist arm did not worsen survival, and the protective knockout phenotype was model-specific.",
          source: "Ussher et al. · Cell Metabolism 2018", url: "https://doi.org/10.1016/j.cmet.2017.11.003"
        },
        {
          receptor: "GIPR + GLP-1R", experiment: "Tirzepatide after MI", tone: "direct",
          title: "A later tirzepatide study found the opposite direction: post-MI protection",
          model: "Non-diabetic C57BL/6J mice subjected to myocardial infarction surgery.",
          perturbation: "Tirzepatide after MI, with metabolomics and a low-branched-chain-amino-acid diet experiment.",
          result: "Tirzepatide reduced mortality, infarct area, cardiomyocyte necrosis, and inflammatory infiltration while increasing fibrotic repair.",
          mechanism: "The authors linked benefit to lower BCKDHA S293 phosphorylation, increased branched-chain amino-acid catabolism, and reduced BCAA/mTOR signaling. A low-BCAA diet moved the same endpoints and added to tirzepatide's effect.",
          reading: "This directly studies tirzepatide, but it does not isolate which receptor produced the effect. It also shows why the GIPR-knockout result cannot be converted into a simple 'GIP agonism harms the heart' claim.",
          source: "Chen et al. · Cardiovascular Research 2025", url: "https://doi.org/10.1093/cvr/cvaf005"
        },
        {
          receptor: "GIPR", experiment: "Agonist in atherosclerosis", tone: "mixed",
          title: "GIP infusion suppressed macrophage-driven atherosclerosis",
          model: "Streptozotocin-diabetic ApoE−/− mice and macrophage foam-cell assays.",
          perturbation: "Four weeks of GIP infusion with or without the weak/partial GIPR antagonist [Pro3]GIP.",
          result: "GIP reduced atherosclerotic lesions without improving insulin, glucose, or plasma lipids; co-infusion of the antagonist abolished the effect.",
          mechanism: "The work pointed to direct GIPR-dependent effects on macrophage foam-cell formation rather than systemic metabolic correction.",
          reading: "GIPR signaling may be adverse in one sustained-ischemia setting yet favorable in an atherosclerosis model. Tissue and injury context matter.",
          source: "Nogi et al. · PLoS ONE 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22536426/"
        }
      ]
    }
  },
  retatrutide: {
    cardiovascular: {
      title: "Heart & vessels",
      summary: "Retatrutide combines three receptor systems with distinct cardiac experiments behind them. GLP-1R work trends protective after MI; loss of GIPR or GCGR signaling protected in some mouse ischemia models; and retatrutide itself accelerated isolated mouse atrial beating through GCGR.",
      studies: [
        {
          receptor: "GCGR", experiment: "Agonist + cardiac KO", tone: "warning",
          title: "Glucagon worsened ischemic injury; cardiomyocyte GCGR deletion protected",
          model: "Wild-type and cardiomyocyte-selective Gcgr knockout mice after LAD ligation; isolated perfused mouse hearts and cardiomyocyte cultures.",
          perturbation: "Exogenous glucagon versus adult cardiomyocyte Gcgr deletion, with p38 MAPK inhibition.",
          result: "Glucagon impaired recovery of ventricular pressure ex vivo and increased mortality after MI. Cardiac Gcgr reduction improved survival and reduced hypertrophy and infarct size.",
          mechanism: "The adverse glucagon signal required p38 MAPK and was associated with PPARα-linked fatty-acid programs and long-chain acylcarnitine accumulation. Knockout hearts had lower long-chain acylcarnitines.",
          reading: "This flags cardiac GCGR activation as a receptor-specific issue for triple agonists. It used glucagon dosing, not retatrutide, and mouse cardiac GCGR expression may not mirror humans.",
          source: "Ali et al. · Molecular Metabolism 2015", url: "https://doi.org/10.1016/j.molmet.2014.11.005"
        },
        {
          receptor: "GCGR", experiment: "Isolated atria", tone: "mixed",
          title: "Retatrutide accelerated mouse atrial rate through GCGR–cAMP–PKA signaling",
          model: "Electrically driven left atria and spontaneously beating right atria isolated from adult CD1 mice.",
          perturbation: "Retatrutide with GCGR antagonism, PKA inhibition, PDE4 inhibition, beta blockade, and cholinergic/adenosine receptor probes.",
          result: "Retatrutide did not increase left-atrial force at 100 nM but increased right-atrial beating rate. A GCGR antagonist and PKA inhibitor attenuated the chronotropic effect; propranolol did not.",
          mechanism: "The data support a GCGR-dependent cAMP/PKA pathway in the mouse sinus-node/atrial preparation rather than an indirect beta-adrenergic effect.",
          reading: "This is direct retatrutide tissue pharmacology, but an isolated mouse atrium cannot establish arrhythmia risk or the size of a heart-rate effect in humans.",
          source: "Neumann et al. · Naunyn-Schmiedeberg's Archives 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40464942/"
        },
        {
          receptor: "GIPR", experiment: "Cardiomyocyte KO", tone: "warning",
          title: "GIPR loss protected only selected cardiac injury models",
          model: "Whole-body and cardiomyocyte Gipr knockout mice after permanent MI, doxorubicin injury, or pressure overload.",
          perturbation: "Global or cardiomyocyte-specific receptor deletion; HSL rescue experiments.",
          result: "Gipr loss improved survival and remodeling after permanent coronary ligation, but not after doxorubicin or pressure overload.",
          mechanism: "Lower HSL phosphorylation, increased myocardial TAG storage, and reduced fatty-acid mobilization tracked with protection.",
          reading: "Retatrutide also activates GIPR, so this belongs in its receptor-risk map. The phenotype was ischemia-specific and does not establish net triple-agonist harm.",
          source: "Ussher et al. · Cell Metabolism 2018", url: "https://doi.org/10.1016/j.cmet.2017.11.003"
        }
      ]
    }
  }
};

const organStudy = (receptor, experiment, tone, title, model, perturbation, result, mechanism, reading, source, url) => ({
  receptor, experiment, tone, title, model, perturbation, result, mechanism, reading, source, url
});

Object.assign(organEvidence.semaglutide, {
  brain: {
    title: "Brain & appetite",
    summary: "Semaglutide reaches selected circumventricular and brainstem sites rather than entering the brain uniformly. Neuron-ablation studies support a causal hindbrain circuit for eating, while disease-model results show that metabolic activity does not guarantee neurodegenerative benefit.",
    studies: [
      organStudy("GLP-1R", "Drug mapping", "direct", "Semaglutide engaged discrete appetite circuits without broad blood–brain barrier passage", "Diet-induced obese mice studied with fluorescent semaglutide, brain clearing, c-Fos mapping, indirect calorimetry, and food-choice tests.", "Acute and repeated semaglutide across a dose range.", "Food intake, body weight, and preference for calorie-dense foods fell. Signal was concentrated in circumventricular organs and adjacent hypothalamic/brainstem circuits; energy expenditure was not reduced.", "The area postrema and arcuate nucleus were directly accessible, with secondary activation of parabrachial, amygdala, and hypothalamic networks.", "This is direct semaglutide distribution and circuit evidence in mice. It argues against the shorthand that the drug simply diffuses throughout the brain.", "Gabery et al. · JCI Insight 2020", "https://doi.org/10.1172/jci.insight.133429"),
      organStudy("GLP-1R", "Neuron ablation", "direct", "Adcyap1+ dorsal-vagal neurons were required for much of semaglutide's acute effect", "Male and female mice with intersectional ablation of Adcyap1-expressing neurons in area postrema/nucleus tractus solitarius.", "Semaglutide before and after targeted neuron ablation.", "Ablation substantially reversed acute and subchronic suppression of food intake and body weight.", "The experiment places a defined dorsal vagal complex cell population downstream of semaglutide-responsive GLP-1R circuitry.", "Ablating a circuit is stronger causal evidence than c-Fos mapping, but it does not show that this is the only human appetite pathway.", "Teixidor-Deulofeu et al. · Cell Metabolism 2025", "https://pubmed.ncbi.nlm.nih.gov/40409256/"),
      organStudy("GLP-1R/GIPR", "Negative disease models", "warning", "Metabolic efficacy did not translate into Alzheimer-model improvement", "5XFAD and APP/PS1 transgenic mice.", "Semaglutide or tirzepatide with behavioral, amyloid, and inflammatory outcomes.", "Both drugs produced expected metabolic effects but did not improve cognition, amyloid burden, or neuroinflammation.", "The null result suggests that weight/glucose improvement alone was insufficient to modify pathology in these models.", "This is an important negative result in two mouse models—not proof of no neurologic effect in people or in other diseases.", "Forny Germano et al. · Molecular Metabolism 2024", "https://doi.org/10.1016/j.molmet.2024.102019")
    ]
  },
  pancreas: {
    title: "Pancreas & glucose",
    summary: "Beta-cell GLP-1R signaling amplifies glucose-dependent insulin secretion and can engage survival pathways in injury models. Knockout and toxin experiments separate receptor action from weight loss, but toxin injury is not ordinary type 2 diabetes.",
    studies: [
      organStudy("GLP-1R", "Agonist + receptor KO", "direct", "Exenatide's metabolic effects disappeared without GLP-1R", "Wild-type and whole-body Glp1r−/− mice after 12 weeks of high-fat feeding.", "Chronic exenatide in both genotypes.", "Exenatide reduced food intake, weight gain, and glucose intolerance in wild-type mice but not in Glp1r−/− mice.", "The loss-of-function arm verifies that the tested GLP-1 agonist effects were receptor-mediated rather than nonspecific peptide effects.", "This is class-level receptor evidence using exenatide, not a semaglutide dose comparison.", "Tatarkiewicz et al. · Diabetes 2014", "https://pubmed.ncbi.nlm.nih.gov/24477544/"),
      organStudy("GLP-1R", "Beta-cell injury", "direct", "GLP-1R agonism strongly protected beta cells in a toxin model", "Wild-type, Glp1r−/−, and Gipr−/− mice exposed to streptozotocin; isolated islet/cell experiments.", "Exendin-4 or D-Ala²-GIP around streptozotocin injury.", "Exendin-4 produced a stronger anti-apoptotic and glucose-protective effect than the GIP agonist; protection required the corresponding receptor.", "GLP-1R signaling engaged beta-cell survival pathways in addition to insulin secretion.", "Streptozotocin is an acute toxic injury. The study supports a mechanism but does not establish prevention of human diabetes or pancreatitis safety.", "Maida et al. · Endocrinology 2009", "https://pubmed.ncbi.nlm.nih.gov/19766644/")
    ]
  },
  gut: {
    title: "Gut",
    summary: "Delayed gastric emptying is partly a neural GLP-1R effect and is strongest early in exposure. Separate intestinal-inflammation studies suggest epithelial and immune effects, but results vary by agonist and injury model.",
    studies: [
      organStudy("GLP-1R", "Vagal knockdown", "mixed", "Vagal GLP-1 receptors helped restrain gastric emptying", "Rats with selective Glp1r knockdown in vagal afferent neurons.", "Vagal receptor knockdown followed by gastric-emptying and feeding measurements.", "Knockdown accelerated gastric emptying and altered meal patterning.", "Peripheral GLP-1 signals can reach the gut–brain axis through vagal afferent GLP-1R rather than requiring direct central penetration.", "This supports a mechanism for delayed gastric emptying and nausea, but it is receptor physiology in rats rather than a semaglutide adverse-event trial.", "Krieger et al. · Diabetes 2016", "https://pubmed.ncbi.nlm.nih.gov/26470787/"),
      organStudy("GLP-1R", "Double-receptor knockout", "mixed", "GLP-1R mediated slow gastric emptying, but the incretin axis compensated", "Gcgr−/− mice with high endogenous GLP-1 compared with Gcgr−/−Glp1r−/− double-knockout mice.", "Additional elimination of Glp1r in the Gcgr knockout background.", "Removing Glp1r normalized delayed gastric emptying and impaired intraperitoneal glucose tolerance, yet improved oral glucose tolerance and insulin secretion persisted.", "GLP-1R carried the gastric-motility signal, while GIPR, CCKAR, GPR119, and other enteroinsular pathways adapted to preserve oral incretin function.", "This is a useful warning: receptor loss can prove one pathway while simultaneously inducing compensation elsewhere. It is not direct semaglutide pharmacology.", "Ali et al. · Journal of Clinical Investigation 2011", "https://pubmed.ncbi.nlm.nih.gov/21540554/")
    ]
  },
  liver: {
    title: "Liver",
    summary: "The strongest recent mouse evidence places a causal semaglutide signal in liver sinusoidal endothelial cells. That pathway improved experimental MASH even when canonical appetite-neuron GLP-1R deletion made mice resistant to weight loss.",
    studies: [
      organStudy("GLP-1R", "Two tissue-specific KOs", "direct", "Endothelial GLP-1R—not weight loss alone—was required for MASH improvement", "Diet-induced MASH mice with Glp1r deletion in Wnt1-lineage appetite circuits, Tie2+ endothelial cells, or liver endothelium by AAV.", "Semaglutide with genetic removal of receptor pools.", "Semaglutide still improved MASH in mice resistant to its weight-loss effect, but endothelial/liver-endothelial Glp1r loss abolished liver benefit despite about 20% weight loss.", "GLP-1R localized to liver sinusoidal endothelial cells and altered endothelial–immune communication and inflammatory remodeling.", "This is unusually strong causal localization evidence. It is a 2026 mouse study and should not be read as proof that human MASH benefit is weight-independent to the same degree.", "Gonzalez-Rellan et al. · Cell Metabolism 2026", "https://doi.org/10.1016/j.cmet.2026.03.011"),
      organStudy("GLP-1R", "Long-duration disease model", "direct", "Duration mattered in advanced diet-induced MASH", "GAN diet-induced obese mice with established steatohepatitis and fibrosis.", "Semaglutide treatment across shorter and at least 16-week durations.", "Longer treatment improved steatosis, inflammation, and fibrosis-related histology more consistently than short exposure.", "Sustained metabolic and inflammatory remodeling, rather than an immediate direct hepatocyte effect, tracked with benefit.", "The study warns against declaring a mechanism absent from short mouse experiments; the model still cannot reproduce the full human disease course.", "Kristensen et al. · AJP Gastrointestinal 2026", "https://pubmed.ncbi.nlm.nih.gov/41973550/")
    ]
  },
  kidney: {
    title: "Kidney",
    summary: "Kidney benefit can occur without obesity or diabetes in inflammatory injury models, yet renal GLP-1R localization is narrow and may include hemodynamic or renin-system effects. The cards separate tissue protection from dehydration-related clinical risk.",
    studies: [
      organStudy("GLP-1R", "Nondiabetic nephritis", "direct", "Semaglutide improved immune-mediated kidney injury without weight or glucose change", "Nonobese, nondiabetic mice with nephrotoxic-serum nephritis.", "Fourteen days of semaglutide after disease induction.", "Kidney function and pathology improved, with less mesangial expansion, better filtration-slit density, and reduced inflammatory/fibrotic transcriptional programs.", "Transcriptomics implicated immune remodeling and renin–angiotensin system changes independent of systemic metabolic correction.", "This supports a direct or kidney-adjacent protective pathway in one acute immune model; it does not identify the responsible renal cell with knockout evidence.", "Martinez et al. · Kidney360 2026", "https://pubmed.ncbi.nlm.nih.gov/41945470/"),
      organStudy("GLP-1R", "Cell localization", "mixed", "Renal GLP-1R localized mainly to vascular smooth muscle", "Mouse kidney localization with Glp1r reporter/validation and acute liraglutide or semaglutide exposure.", "Single agonist doses followed by renal gene-expression analysis.", "Validated receptor signal was concentrated in renal vascular smooth muscle; agonism increased Ren1 expression.", "A vascular–juxtaglomerular route may mediate some renal hemodynamic effects rather than direct signaling in every nephron cell.", "The renin response is mechanistically relevant but not itself a clinical benefit or harm endpoint.", "Bjørnholm et al. · Endocrinology, Diabetes & Metabolism 2021", "https://pubmed.ncbi.nlm.nih.gov/34277961/")
    ]
  },
  bone: {
    title: "Bone",
    summary: "GLP-1R loss produced a fragile cortical-bone phenotype in mice, implicating a calcitonin-linked antiresorptive axis. Short direct semaglutide experiments have been neutral, so receptor physiology should not be mistaken for proven fracture protection.",
    studies: [
      organStudy("GLP-1R", "Whole-body knockout", "mixed", "GLP-1R deficiency increased cortical fragility and bone resorption", "Adult Glp1r−/− mice with histomorphometry, mechanical testing, osteoclast markers, and thyroid C-cell assays.", "Constitutive receptor deletion; exendin-4 and calcitonin rescue experiments.", "Knockout mice had cortical osteopenia, reduced strength, and increased osteoclast/resorption markers. Exendin-4 increased calcitonin transcripts; calcitonin corrected a resorption marker in knockout mice.", "The proposed axis was GLP-1R stimulation of thyroid C-cell calcitonin, restraining osteoclast activity.", "Constitutive knockout can create developmental compensation, and rodent C-cell biology differs from humans. This is not evidence that semaglutide prevents fractures.", "Yamada et al. · Endocrinology 2008", "https://doi.org/10.1210/en.2007-1292"),
      organStudy("GLP-1R/GIPR", "Direct drug comparison", "mixed", "Four weeks of semaglutide or tirzepatide did not measurably change bone", "Diabetic mouse model assessed for bone microarchitecture and strength.", "Short-course semaglutide or tirzepatide.", "Neither agent produced a clear treatment effect on the measured bone endpoints over four weeks.", "Any receptor effect may be offset by duration, disease state, weight loss, or opposing formation/resorption signals.", "A short null study cannot settle long-term skeletal effects; it does constrain claims of rapid direct bone benefit.", "Lv et al. · Pharmaceuticals 2024", "https://pubmed.ncbi.nlm.nih.gov/39770498/")
    ]
  },
  adipose: {
    title: "Adipose & energy",
    summary: "In obese mice, semaglutide's weight effect was driven mainly by eating less rather than raising energy expenditure. Adipose inflammation and browning markers improved, but pair-feeding and receptor-localization limits make direct fat-cell claims uncertain.",
    studies: [
      organStudy("GLP-1R", "Dose response + calorimetry", "direct", "Large mouse weight loss came from lower intake, not higher expenditure", "Diet-induced obese mice during three weeks of dose-ranging semaglutide.", "Repeated semaglutide with body-composition, food-intake, and indirect-calorimetry measurements.", "Body weight fell dose-dependently, up to about 22% at the highest tested dose; fat mass fell and lean mass was relatively preserved. Energy expenditure did not rise.", "Central appetite circuitry reduced caloric intake and shifted food preference; adipose loss was primarily downstream of negative energy balance.", "The high-dose short mouse result is not a human weight-loss forecast. It also argues against labeling semaglutide a direct thermogenic drug.", "Gabery et al. · JCI Insight 2020", "https://doi.org/10.1172/jci.insight.133429"),
      organStudy("GLP-1R", "Obese-mouse adipose profiling", "mixed", "Adipose inflammation fell and browning markers rose", "High-fat-fed mice with white and brown adipose tissue profiling.", "Four weeks of semaglutide.", "Fat-pad mass, inflammatory cytokines, macrophage markers, and ER-stress markers fell; UCP1 and browning-associated signals increased.", "The authors proposed reduced adipose inflammation and enhanced beige-fat programming.", "Because semaglutide also reduced food intake and weight, this experiment cannot cleanly separate direct adipocyte signaling from secondary remodeling.", "Martins et al. · Cell Biochemistry and Function 2022", "https://pubmed.ncbi.nlm.nih.gov/36169111/")
    ]
  },
  immune: {
    title: "Immune system",
    summary: "GLP-1R signaling changes immune phenotypes in some models, but the responsible receptor-bearing cell is often endothelial, stromal, or neural rather than a classical immune cell. Disease context is decisive: an acute endotoxemia signal and chronic Alzheimer models produced different outcomes.",
    studies: [
      organStudy("GLP-1R", "Knockout immune phenotype", "mixed", "GLP-1R loss altered regulatory T-cell abundance", "Male whole-body Glp1r−/− mice with primary immune-cell phenotyping.", "Constitutive receptor deletion.", "Knockout mice had a lower proportion of peripheral regulatory T cells and altered immune responses.", "GLP-1R signaling may help shape T-cell homeostasis directly or through endocrine/neural intermediates.", "Constitutive whole-body deletion does not localize the causal cell and can include developmental effects.", "Hadjiyanni et al. · Diabetologia 2010", "https://pubmed.ncbi.nlm.nih.gov/20225396/"),
      organStudy("GLP-1R", "Acute neuroinflammation", "direct", "Semaglutide suppressed endotoxin-driven neurovascular inflammation", "Mouse systemic lipopolysaccharide model with single-cell/spatial profiling.", "Semaglutide around inflammatory challenge.", "Neutrophil infiltration and excessive cytokine responses fell, with changes in microglial, endothelial, and pericyte states.", "Glp1r-positive dorsal-vagal neurons were implicated as an upstream neuroimmune control point.", "This acute model supports neuroimmune modulation, but it does not override the null amyloid/neuroinflammation result in chronic Alzheimer models.", "Belmont-Rausch et al. · Nature Communications 2026", "https://pubmed.ncbi.nlm.nih.gov/42265098/")
    ]
  }
});

Object.assign(organEvidence.tirzepatide, {
  brain: {
    title: "Brain & appetite",
    summary: "GIPR and GLP-1R do not appear to be redundant in the brain. Conditional knockouts place GIP agonist and antagonist effects in different regions, while tirzepatide's shift away from fatty food required GLP-1R.",
    studies: [
      organStudy("GIPR", "CNS-specific knockout", "direct", "Central GIPR was necessary for the full weight effect of GIP agonism", "Diet-induced obese control mice and mice lacking Gipr broadly in the central nervous system.", "Acylated GIP alone or combined GLP-1/GIP agonism.", "Acyl-GIP reduced intake and weight in controls but responses were blunted or absent after CNS Gipr deletion; the extra weight effect of dual signaling was extinguished.", "The study places a material component of GIP agonist action inside the nervous system rather than solely in pancreatic islets.", "This is causal receptor evidence but not a tirzepatide trial; the specific neurons and balance of nausea versus satiety were not fully resolved.", "Zhang et al. · Cell Metabolism 2021", "https://pubmed.ncbi.nlm.nih.gov/33571454/"),
      organStudy("GIPR", "Regional knockouts", "mixed", "GIP agonists and antagonists acted through different brain regions", "Mice with Gipr deletion in area postrema or hypothalamic populations.", "GIPR agonist or antagonist, alone and with liraglutide.", "Area-postrema Gipr deletion reduced anorectic responses to a GIP agonist, whereas hypothalamic deletion abolished the antagonist's synergy with liraglutide.", "Agonism and antagonism can both enhance weight loss by recruiting distinct GIPR circuits.", "This helps explain apparently contradictory GIP strategies. It also means whole-body knockout results cannot be assigned to one neural pathway.", "Lewis et al. · Nature Metabolism 2026", "https://pubmed.ncbi.nlm.nih.gov/42498824/"),
      organStudy("GIPR + GLP-1R", "Drug + GLP-1R KO", "direct", "Tirzepatide's shift away from fat-rich food required GLP-1R", "Diet-induced obese wild-type and Glp1r−/− mice offered foods with different macronutrient composition.", "Tirzepatide, GLP-1R agonism, or GIPR agonism.", "Tirzepatide reduced preference for high-fat food in wild-type mice; this preference effect was absent in Glp1r−/− mice. GIPR agonism alone did not reproduce it.", "GLP-1R circuitry, rather than GIPR alone, drove this qualitative change in food choice.", "GIPR may still contribute to total weight or insulin sensitivity. This experiment isolates one behavioral endpoint.", "Geisler et al. · Diabetes, Obesity and Metabolism 2023", "https://pubmed.ncbi.nlm.nih.gov/36054312/")
    ]
  },
  pancreas: {
    title: "Pancreas & glucose",
    summary: "Tirzepatide was designed to combine glucose-dependent beta-cell signals from GIPR and GLP-1R. Genetic studies support contributions from both, while classic knockout work shows that lifelong GIPR loss causes adaptations that complicate simple comparisons.",
    studies: [
      organStudy("GIPR + GLP-1R", "Drug + receptor KOs", "direct", "Both receptors contributed to tirzepatide glucose lowering", "Diet-induced obese wild-type, Gipr−/−, and Glp1r−/− mice in the tirzepatide discovery program.", "Tirzepatide with receptor loss used to partition pharmacology.", "Glucose lowering and insulinotropic activity reflected engagement of both receptors; weight and fat mass fell more than with semaglutide in the tested paradigms.", "GIPR supplied activity beyond GLP-1R agonism, while GLP-1R remained important for appetite and glycemic effects.", "The receptor balance of tirzepatide differs across species, and discovery-stage mouse comparisons do not quantify the human contribution of each receptor.", "Coskun et al. · Molecular Metabolism 2018", "https://doi.org/10.1016/j.molmet.2018.09.009"),
      organStudy("GIPR", "Whole-body knockout", "mixed", "GIPR loss impaired oral incretin action but triggered beta-cell adaptation", "Whole-body Gipr−/− mice challenged with oral versus intravenous glucose.", "Constitutive receptor deletion.", "Oral glucose-stimulated insulin secretion was impaired, while beta cells adapted with enhanced responses under some intravenous-glucose conditions.", "GIPR is a major physiologic incretin receptor, but chronic loss recruits compensatory islet programs.", "A knockout phenotype is not the mirror image of chronic agonism. Developmental adaptation is especially important when reading islet results.", "Ahrén et al. · Peptides 2020", "https://pubmed.ncbi.nlm.nih.gov/31522751/")
    ]
  },
  gut: {
    title: "Gut",
    summary: "The dual agonist combines GLP-1R-mediated motility effects with a GIPR stromal/immune pathway that protected the small intestine in one chemotherapy-injury model. That protective GIP result was sex- and model-specific.",
    studies: [
      organStudy("GIPR", "Agonist + knockout + marrow chimera", "direct", "GIPR signaling protected the chemotherapy-injured small intestine", "Male mice given 5-fluorouracil, including Gipr−/− animals and bone-marrow chimeras.", "D-Ala²-GIP, tirzepatide, or semaglutide during injury; receptor localization by stromal-cell analysis.", "GIP agonism reduced inflammation and barrier injury; Gipr deletion worsened injury. Tirzepatide partly reproduced protection, whereas semaglutide did not in this model.", "The implicated receptor pool was in CD146+ intestinal stromal cells rather than transplanted hematopoietic cells.", "This is direct gain/loss evidence for intestinal GIPR biology, not proof that tirzepatide prevents chemotherapy enteritis in humans; only male mice were emphasized.", "Hammoud et al. · JCI Insight 2024", "https://pubmed.ncbi.nlm.nih.gov/39723966/"),
      organStudy("GLP-1R", "Vagal knockdown", "mixed", "The GLP-1 component can slow gastric emptying through vagal afferents", "Rats with Glp1r knockdown in vagal sensory neurons.", "Selective neural knockdown followed by gastric-emptying and meal-pattern testing.", "Gastric emptying accelerated after knockdown.", "Peripheral GLP-1R signals use the vagus to regulate upper-gut motility and satiation.", "This class mechanism plausibly contributes to tirzepatide's gastrointestinal effects, but the experiment did not administer tirzepatide.", "Krieger et al. · Diabetes 2016", "https://pubmed.ncbi.nlm.nih.gov/26470787/")
    ]
  },
  liver: {
    title: "Liver",
    summary: "Tirzepatide improves fatty-liver phenotypes through large systemic changes in intake, insulin sensitivity, and adipose fuel handling. Unlike the semaglutide endothelial experiment, current mouse data do not yet localize a required hepatic GIPR cell population.",
    studies: [
      organStudy("GIPR + GLP-1R", "Obese-mouse pharmacology", "direct", "Liver fat fell alongside weight and insulin resistance", "Diet-induced obese mice in the tirzepatide discovery and mechanistic programs.", "Repeated tirzepatide compared with single-receptor agonism and pair-fed controls in related experiments.", "Tirzepatide reduced adiposity, improved glucose handling and insulin sensitivity, and reduced ectopic lipid burden.", "Reduced substrate delivery from adipose tissue plus improved insulin action are leading explanations; a required direct hepatocyte receptor was not shown.", "The liver benefit is real in these models, but calling it a direct hepatic GIPR effect would exceed the evidence.", "Coskun et al. · Molecular Metabolism 2018", "https://doi.org/10.1016/j.molmet.2018.09.009"),
      organStudy("GIPR", "Knockout clamp study", "direct", "The insulin-sensitizing component required GIPR", "Obese wild-type and Gipr−/− mice studied by hyperinsulinemic-euglycemic clamp.", "Tirzepatide in both genotypes.", "Tirzepatide improved whole-body insulin sensitivity in wild-type mice but not after GIPR loss.", "GIPR-dependent changes in glucose disposal and lipid handling can secondarily reduce hepatic metabolic load.", "This identifies a required receptor for systemic insulin sensitization, not a liver-cell-autonomous mechanism.", "Samms et al. · JCI Insight 2021", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8203452/")
    ]
  },
  kidney: {
    title: "Kidney",
    summary: "Direct tirzepatide renal-mechanism data remain thinner than its clinical kidney analyses. A diabetic-nephropathy comparison showed lower inflammation and fibrosis, but did not use receptor-specific knockouts and cannot separate glycemic, weight, and direct renal effects.",
    studies: [
      organStudy("GIPR + GLP-1R", "Diabetic nephropathy model", "direct", "Tirzepatide improved renal injury in db/db mice", "Leptin-receptor-deficient db/db mice treated for ten weeks, with kidney pathology, inflammatory/fibrotic markers, and gut-metabolite profiling.", "Tirzepatide compared with retatrutide and diabetic controls.", "Tirzepatide improved glycemia and reduced renal inflammatory and fibrotic injury; retatrutide was superior on several kidney endpoints in that experiment.", "Benefits tracked with systemic metabolic correction and changes in gut-derived metabolites including butyrate.", "No receptor knockout localized the effect. The db/db model and head-to-head doses do not establish comparative kidney efficacy in patients.", "Ma et al. · Endocrine 2025", "https://pubmed.ncbi.nlm.nih.gov/39212900/")
    ]
  },
  bone: {
    title: "Bone",
    summary: "GIPR biology is strongly connected to bone formation and matrix quality, yet direct tirzepatide studies conflict: a short study was neutral, while a longer db/db experiment reported bone loss. Disease model, duration, nutrition, and weight loss are plausible modifiers.",
    studies: [
      organStudy("GIPR", "Whole-body knockout", "warning", "Lifelong GIPR loss reduced bone size, mass, and strength", "Young and adult Gipr−/− mice assessed by histomorphometry, microarchitecture, and mechanical testing.", "Constitutive receptor deletion.", "Knockout mice had smaller bones, lower bone mass, altered microarchitecture, and weaker mechanics, with a prominent deficit in formation and site/age-dependent compensation.", "Physiologic GIPR signaling appears to support osteoblast activity and skeletal accrual.", "This makes GIPR biology relevant to tirzepatide, but knockout deficiency does not prove that pharmacologic agonism prevents bone loss during rapid weight reduction.", "Xie et al. · Bone 2005", "https://pubmed.ncbi.nlm.nih.gov/16219496/"),
      organStudy("GIPR", "Agonist", "direct", "A long-acting GIP analog strengthened bone matrix without changing architecture", "Obese prediabetic mice treated for 42 days.", "D-Ala²-GIP or a bone-targeted GIP analog.", "Bone strength increased through changes in collagen cross-linking/composition, without clear changes in microarchitecture or body weight.", "GIPR activation may alter material quality separately from bone quantity.", "This supports a possible GIP-mediated benefit, but it was not tirzepatide and did not model rapid pharmacologic weight loss.", "Vyavahare et al. · Peptides 2020", "https://doi.org/10.1016/j.peptides.2019.170207"),
      organStudy("GIPR + GLP-1R", "Direct drug studies", "warning", "Direct tirzepatide bone findings were not consistent across mouse experiments", "A four-week diabetic-mouse study and a separate six-week db/db study.", "Tirzepatide versus control, with microarchitecture/strength in the short study and skeletal plus microbiome/metabolite outcomes in the longer study.", "The four-week experiment found no clear bone effect; the six-week db/db study reported bone loss associated with altered gut microbiota and metabolites.", "Rapid metabolic change, disease severity, and gut-derived signals may modify receptor effects on remodeling.", "The conflict should be shown, not averaged away. Neither experiment establishes human fracture risk.", "Chen et al. · Journal of Orthopaedic Translation 2025", "https://pubmed.ncbi.nlm.nih.gov/41089557/")
    ]
  },
  adipose: {
    title: "Adipose & energy",
    summary: "Tirzepatide's GIPR component altered fuel handling in brown fat and improved systemic insulin sensitivity. Brown-fat knockout studies show a specific role during acute lipid handling or cold, but not a complete explanation for chronic body-weight loss.",
    studies: [
      organStudy("GIPR + GLP-1R", "Drug + pair feeding", "direct", "Tirzepatide increased branched-chain amino-acid catabolism in brown fat", "Diet-induced obese mice treated for 14 days, including pair-fed comparators.", "Tirzepatide with brown-adipose metabolomics and BCAA pathway analysis.", "BCAA and branched-chain ketoacid catabolism increased in brown adipose tissue beyond changes explained by matched food intake and weight loss.", "Tirzepatide induced a thermogenic-like oxidative program and BCKDH pathway activation in BAT.", "The molecular remodeling was weight-independent in this design, but it does not prove that higher BAT thermogenesis drives the drug's total weight effect.", "Samms et al. · Cell Metabolism 2022", "https://pubmed.ncbi.nlm.nih.gov/35921984/"),
      organStudy("GIPR", "BAT-specific knockout", "mixed", "Brown-fat GIPR mattered under cold stress, not ordinary housing", "Mice with Gipr deletion in brown adipocytes studied at 30°C, 21°C, and 4°C.", "Tissue-specific receptor deletion across thermal conditions.", "Knockout mice were largely normal at thermoneutral and room temperatures but showed lower weight and higher oxygen consumption during cold exposure.", "BAT GIPR participates in substrate handling and thermoregulation under physiologic stress.", "The tissue knockout did not reproduce the lean whole-body Gipr−/− phenotype, so BAT alone is not the master explanation for GIP-linked weight effects.", "Beaudry et al. · Molecular Metabolism 2019", "https://doi.org/10.1016/j.molmet.2019.08.006")
    ]
  },
  immune: {
    title: "Immune system",
    summary: "Tirzepatide-associated inflammatory improvements arise from multiple routes: reduced adiposity, GLP-1R neurovascular signaling, and a GIPR-positive intestinal stromal compartment. The strongest GIPR localization evidence is currently in chemotherapy gut injury.",
    studies: [
      organStudy("GIPR", "Stromal localization + marrow chimera", "direct", "The protective intestinal GIPR signal was stromal, not bone-marrow derived", "5-fluorouracil-treated mice with Gipr loss, marrow transplantation, and intestinal cell localization.", "GIP agonism and tirzepatide during chemotherapy injury.", "Gipr deficiency worsened inflammation; agonism was protective, and marrow replacement did not transfer the phenotype.", "CD146+ mesenchymal/stromal cells were identified as a key receptor-bearing compartment supporting barrier repair.", "This is unusually specific immune–stromal evidence, but it is one injury model and cannot be generalized to all inflammatory disease.", "Hammoud et al. · JCI Insight 2024", "https://pubmed.ncbi.nlm.nih.gov/39723966/"),
      organStudy("GIPR", "Atherosclerosis pharmacology", "mixed", "GIPR agonism reduced macrophage foam-cell formation", "Diabetic ApoE−/− mice and cultured macrophages.", "GIP infusion with or without [Pro³]GIP antagonism.", "Plaque and foam-cell formation fell independently of glucose and plasma-lipid improvement; antagonist co-treatment removed the benefit.", "A direct GIPR-dependent macrophage pathway was proposed.", "The result contrasts with ischemic-heart knockout protection and illustrates tissue-specific GIPR effects rather than a universally pro- or anti-inflammatory receptor.", "Nogi et al. · PLoS ONE 2012", "https://pubmed.ncbi.nlm.nih.gov/22536426/")
    ]
  }
});

Object.assign(organEvidence.retatrutide, {
  brain: {
    title: "Brain & appetite",
    summary: "No tissue-knockout experiment yet partitions retatrutide's three receptor signals inside the brain. Its appetite effect is therefore interpreted using direct drug behavior plus GLP-1R and GIPR circuit studies, while GCGR's added weight effect is linked more strongly to energy expenditure.",
    studies: [
      organStudy("GLP-1R + GIPR + GCGR", "Drug in obese animals", "direct", "Retatrutide reduced intake while GCGR added an energy-expenditure component", "Diet-induced obese mice in the triple-agonist discovery program.", "Retatrutide versus matched dual-agonist and comparator molecules designed to vary receptor activity.", "Retatrutide produced greater weight loss than tirzepatide-like dual agonism in the tested models; early food intake fell and GCGR activity contributed additional energy expenditure.", "GLP-1R/GIPR appetite circuitry and GCGR-driven hepatic/endocrine fuel use were both implicated.", "This is direct retatrutide pharmacology, but not a brain-specific receptor knockout. The partition among the three receptors remains partly inferential.", "Coskun et al. · Cell Metabolism 2022", "https://doi.org/10.1016/j.cmet.2022.07.013"),
      organStudy("GIPR", "CNS-specific knockout", "mixed", "Central GIPR is a plausible contributor to triple-agonist appetite effects", "Diet-induced obese mice with or without CNS Gipr.", "Acyl-GIP and GLP-1/GIP co-agonism.", "CNS Gipr deletion blunted GIP agonist anorexia and removed the extra weight benefit of combined GIP/GLP-1 activity.", "GIPR-positive central circuits can amplify GLP-1R-driven appetite reduction.", "Retatrutide was not tested, so this is a receptor map rather than direct proof of its neural mechanism.", "Zhang et al. · Cell Metabolism 2021", "https://pubmed.ncbi.nlm.nih.gov/33571454/"),
      organStudy("GLP-1R/GIPR", "Negative disease models", "warning", "Triple-receptor rationale should not be converted into untested neuroprotection claims", "5XFAD and APP/PS1 mice tested with semaglutide or tirzepatide.", "Related incretin agonists in chronic amyloid models.", "Metabolic responses occurred without improvement in cognition, amyloid pathology, or neuroinflammation.", "Changing systemic metabolism was insufficient to alter these disease endpoints.", "Retatrutide was not studied. This adjacent null evidence is included to mark an evidence gap, not to predict a retatrutide result.", "Forny Germano et al. · Molecular Metabolism 2024", "https://doi.org/10.1016/j.molmet.2024.102019")
    ]
  },
  pancreas: {
    title: "Pancreas & glucose",
    summary: "Retatrutide combines two insulinotropic receptors with a glucagon receptor that can raise glucose acutely yet improves substrate turnover chronically. GCGR loss experiments expose a liver-to-alpha-cell feedback loop that is important when interpreting sustained agonism.",
    studies: [
      organStudy("GCGR", "Hepatocyte knockout", "warning", "Removing hepatic GCGR improved glucose but drove alpha-cell hyperplasia", "Mice with hepatocyte-selective Gcgr deletion, including transplantation of wild-type islets.", "Liver receptor deletion with systemic amino-acid and islet-growth measurements.", "Fasting glucose fell and glucose tolerance/sensitivity improved, but glucagon rose and pancreatic alpha cells expanded; transplanted normal islets also proliferated.", "Loss of hepatic glucagon signaling released a circulating liver-derived growth signal, establishing a liver–alpha-cell axis.", "The better glucose profile after knockout does not mean GCGR agonism is simply harmful: chronic agonism can lower liver fat and amino acids, and retatrutide also activates GLP-1R/GIPR.", "Longuet et al. · Diabetes 2013", "https://doi.org/10.2337/db11-1605"),
      organStudy("GCGR", "Agonism vs antagonism", "mixed", "Chronic GCGR directionally controlled amino acids and alpha-cell mass", "Mice receiving a long-acting glucagon agonist or glucagon-receptor blocking antibody.", "Sustained receptor activation versus inhibition.", "Agonism increased amino-acid catabolism and ureagenesis and produced alpha-cell hypoplasia; inhibition caused hyperaminoacidemia and alpha-cell expansion, with adverse beta-cell changes in the reported model.", "Amino acids are the feedback signal linking hepatic GCGR activity to endocrine-pancreas growth.", "Retatrutide's balanced co-agonism may buffer GCGR's acute glucose-raising effect, but the chronic liver–islet axis remains biologically active.", "Elmelund et al. · iScience 2022", "https://pubmed.ncbi.nlm.nih.gov/36325048/")
    ]
  },
  gut: {
    title: "Gut",
    summary: "Retatrutide has no mature receptor-partitioned gut program yet. Its likely gut actions combine GLP-1R-dependent gastric slowing with GIPR-positive stromal repair; GCGR can also alter hepatic–intestinal nutrient flux indirectly.",
    studies: [
      organStudy("GLP-1R", "Vagal knockdown", "mixed", "The GLP-1 arm is expected to slow gastric emptying through vagal GLP-1R", "Rats with selective Glp1r knockdown in vagal afferent neurons.", "Receptor knockdown with gastric-emptying and feeding analysis.", "Loss of vagal GLP-1R accelerated gastric emptying and changed meal patterning.", "A vagal gut–brain pathway carries part of the upper-gastrointestinal GLP-1 signal.", "This is receptor-class evidence, not direct retatrutide testing. Triple agonism could change magnitude or adaptation.", "Krieger et al. · Diabetes 2016", "https://pubmed.ncbi.nlm.nih.gov/26470787/"),
      organStudy("GIPR", "Agonist + knockout", "mixed", "The GIP arm can protect an injured intestinal barrier", "Male Gipr−/− and control mice with 5-fluorouracil small-intestinal injury.", "D-Ala²-GIP, tirzepatide, or semaglutide; retatrutide was not tested.", "GIPR agonism reduced inflammatory and barrier injury, while receptor loss worsened it; tirzepatide partially reproduced protection.", "CD146+ intestinal stromal GIPR supported repair independently of bone-marrow-derived cells.", "This maps a potentially favorable component of retatrutide's GIP activity but remains indirect.", "Hammoud et al. · JCI Insight 2024", "https://pubmed.ncbi.nlm.nih.gov/39723966/")
    ]
  },
  liver: {
    title: "Liver",
    summary: "The liver is the clearest organ in which GCGR adds something distinct: amino-acid disposal, ureagenesis, fatty-acid oxidation, and endocrine FGF21 signaling. Direct retatrutide studies show large liver-fat reductions, but histology and weight-independent mechanisms vary by model.",
    studies: [
      organStudy("GLP-1R + GIPR + GCGR", "Direct disease models", "direct", "Retatrutide sharply lowered liver triglyceride, but histology did not always follow", "Diet-induced obese/MASH mice and obese hamsters with body composition, energetics, liver lipid, histology, and bone measurements.", "Repeated retatrutide over several weeks.", "Mice lost about 31% body weight with lower liver injury; hamsters showed roughly 50% lower liver triglyceride, yet composite liver histology score did not significantly improve in that experiment.", "Lower intake and adiposity reduced lipid delivery, while GCGR-linked oxidation likely increased hepatic disposal.", "A biochemical improvement is not identical to histologic disease reversal. The mouse study also lost both fat and lean mass, and early intake—not sustained energy expenditure—dominated in that design.", "Briand et al. · Obesity 2026", "https://doi.org/10.1002/oby.70155"),
      organStudy("GCGR", "Agonism vs KO/blockade", "warning", "GCGR activation improved triglyceride handling; blockade promoted liver fat", "Wild-type, Gcgr-deficient, agonist-treated, and antibody-blocked mouse models with lipid flux analysis.", "Acute/chronic GCGR agonism versus genetic or pharmacologic loss of signaling.", "Agonism improved triglyceride turnover and reduced hepatic lipid burden; antagonism or loss promoted hepatic fat accumulation and dyslipidemia.", "GCGR increased hepatic fatty-acid oxidation and lipid export/clearance programs.", "This is the favorable side of GCGR agonism. It must be weighed against acute hyperglycemia and cardiac ischemia signals rather than summarized as uniformly beneficial.", "Galsgaard et al. · Molecular Metabolism 2022", "https://pubmed.ncbi.nlm.nih.gov/36400402/"),
      organStudy("GCGR", "Global/hepatic knockout", "warning", "Blocking the liver–alpha-cell axis caused hyperaminoacidemia and islet expansion", "Global and hepatocyte Gcgr-deficient mice.", "Loss of glucagon receptor signaling.", "Amino acids and glucagon rose markedly, and alpha cells became hyperplastic/hypertrophic.", "Hepatic amino-acid catabolism is a major GCGR-controlled feedback signal to the pancreas.", "The phenotype explains why chronic antagonism can create liabilities and why retatrutide's GCGR arm cannot be judged only by acute glucose output.", "Galsgaard et al. · AJP Endocrinology 2018", "https://pubmed.ncbi.nlm.nih.gov/28978545/")
    ]
  },
  kidney: {
    title: "Kidney",
    summary: "Renal tubules express functional GCGR, and kidney-specific loss produced oxidative, inflammatory, and fibrotic stress. Retatrutide improved diabetic kidney injury in one direct comparison, but receptor partitioning and long-term human relevance remain unresolved.",
    studies: [
      organStudy("GCGR", "Kidney-specific knockout", "warning", "Renal GCGR loss caused lipid accumulation and inflammatory fibrosis", "Mice with tubular/kidney-selective Gcgr deletion.", "Chronic local receptor loss with metabolic and transcriptomic kidney phenotyping.", "Knockout caused hyperaminoacidemia, lower renal glucose output, oxidative stress, inflammasome activation, lipid accumulation, and proinflammatory/profibrotic responses.", "Kidney GCGR helps process amino acids and maintain local substrate/oxidative balance.", "This suggests a potentially protective physiologic role for renal GCGR; it does not prove pharmacologic retatrutide directly treats kidney disease.", "Wang et al. · Cell Metabolism 2024", "https://pubmed.ncbi.nlm.nih.gov/38237602/"),
      organStudy("GLP-1R + GIPR + GCGR", "Direct diabetic-nephropathy model", "direct", "Retatrutide outperformed tirzepatide on several renal endpoints in db/db mice", "Db/db mice treated for ten weeks.", "Retatrutide or tirzepatide with renal pathology, cytokine/fibrosis markers, and gut-metabolite profiling.", "Both drugs reduced kidney injury; retatrutide produced greater improvement on several renal inflammatory and fibrotic measures, while tirzepatide produced stronger glycemic improvement.", "The authors linked benefit to anti-inflammatory/antifibrotic signaling and microbiome-derived butyrate as well as systemic metabolism.", "Head-to-head mouse doses and a single genetic diabetes model do not establish human superiority or isolate GCGR's contribution.", "Ma et al. · Endocrine 2025", "https://pubmed.ncbi.nlm.nih.gov/39212900/")
    ]
  },
  bone: {
    title: "Bone",
    summary: "The three receptor systems pull skeletal interpretation in different directions: GLP-1R and GIPR knockout studies suggest physiologic support for bone, while direct retatrutide data are sparse. One hamster study found no bone-mineral-density change despite major weight loss.",
    studies: [
      organStudy("GLP-1R + GIPR + GCGR", "Direct drug model", "mixed", "Retatrutide did not change bone mineral density in an obese-hamster experiment", "Obese hamsters treated for several weeks with body composition and bone measurements.", "Repeated retatrutide during substantial weight and liver-fat loss.", "After five weeks, lean-mass difference was no longer significant and bone mineral density did not differ from control in the reported experiment.", "The neutral finding suggests no rapid, gross BMD loss in that model despite catabolism.", "BMD alone misses microarchitecture and material strength, the study was short, and hamster bone biology does not settle human fracture risk.", "Briand et al. · Obesity 2026", "https://doi.org/10.1002/oby.70155"),
      organStudy("GIPR", "Whole-body knockout", "mixed", "GIPR loss reduced bone formation, mass, and strength", "Young and adult Gipr−/− mice with structural and mechanical bone testing.", "Constitutive receptor deletion.", "Knockout mice had smaller bones, reduced formation, lower mass, altered architecture, and weaker mechanics.", "Physiologic GIPR signaling appears to support osteoblast activity and skeletal accrual.", "This maps one potentially favorable incretin arm of retatrutide, but lifelong receptor absence is not the inverse of pharmacologic agonism during weight loss.", "Xie et al. · Bone 2005", "https://pubmed.ncbi.nlm.nih.gov/16219496/"),
      organStudy("GLP-1R", "Whole-body knockout", "mixed", "GLP-1R loss increased cortical fragility through resorption", "Adult Glp1r−/− mice with histomorphometry, strength testing, and calcitonin rescue.", "Constitutive receptor deletion plus exendin-4/calcitonin experiments.", "Knockout mice had cortical osteopenia, greater fragility, and more resorption; calcitonin-linked experiments partially explained the phenotype.", "GLP-1R signaling can restrain osteoclast activity indirectly through thyroid C cells in mice.", "Rodent thyroid C-cell physiology differs from humans, and no equally strong GCGR bone experiment or long-term retatrutide fracture study is available.", "Yamada et al. · Endocrinology 2008", "https://pubmed.ncbi.nlm.nih.gov/18039776/")
    ]
  },
  adipose: {
    title: "Adipose & energy",
    summary: "GCGR was included to add energy expenditure and lipid oxidation beyond dual incretin agonism. Direct retatrutide models support greater weight loss, but later MASH work found early food suppression and no sustained expenditure increase, showing that mechanism depends on model and time point.",
    studies: [
      organStudy("GLP-1R + GIPR + GCGR", "Matched agonist pharmacology", "direct", "GCGR activity added weight loss beyond dual incretin agonism", "Diet-induced obese mice treated with retatrutide and comparator co-agonists spanning different receptor balances.", "Repeated dosing with indirect calorimetry and body-composition measurement.", "Retatrutide produced greater weight loss than the tested dual-agonist comparators; GCGR engagement contributed an energy-expenditure component in the discovery experiments.", "Hepatic oxidation and endocrine signals such as FGF21 are candidate links from GCGR to whole-body energy use.", "Later models did not always reproduce sustained expenditure elevation, so the result should not be described as a universal thermogenic effect.", "Coskun et al. · Cell Metabolism 2022", "https://doi.org/10.1016/j.cmet.2022.07.013"),
      organStudy("GCGR", "BAT-specific knockout", "mixed", "Brown-fat GCGR was not required for glucagon's whole-body energy effect", "Wild-type, Ucp1−/−, and brown-adipocyte Gcgr knockout mice plus brown-fat explants.", "Acute glucagon under different genetic conditions.", "Glucagon increased oxygen consumption in vivo and in explants, including without UCP1; BAT-specific Gcgr deletion did not abolish the whole-body phenotype.", "FGF21 and non-UCP1 pathways contributed, with important signaling outside brown adipocytes.", "GCGR can raise energy expenditure, but direct BAT GCGR is not the sole route. This prevents an oversimplified 'retatrutide activates brown fat' claim.", "Beaudry et al. · Diabetes 2019", "https://pubmed.ncbi.nlm.nih.gov/30772257/"),
      organStudy("GLP-1R + GIPR + GCGR", "MASH model energetics", "warning", "A later retatrutide model found intake suppression without sustained higher expenditure", "Diet-induced obese/MASH mice studied longitudinally.", "Repeated retatrutide with food-intake, energy-expenditure, and body-composition measurements.", "Food intake fell early and body weight fell about 31%, from both fat and lean compartments; a significant sustained rise in energy expenditure was not observed in that design.", "Negative energy balance was dominated by reduced intake at the measured times.", "This does not invalidate the discovery study; it shows that dose, disease state, acclimation, and timing can change the observed energy mechanism.", "Briand et al. · Obesity 2026", "https://doi.org/10.1002/oby.70155")
    ]
  },
  immune: {
    title: "Immune system",
    summary: "Retatrutide's anti-inflammatory signals are currently embedded in liver, kidney, and adipose remodeling rather than traced to a single immune-cell receptor. GCGR loss in kidney is proinflammatory, while GIPR and GLP-1R can act through stromal and neural–vascular compartments.",
    studies: [
      organStudy("GCGR", "Kidney-specific knockout", "warning", "Loss of renal GCGR activated inflammasome and fibrotic programs", "Kidney-selective Gcgr knockout mice.", "Local receptor deletion.", "Oxidative stress, inflammasome activation, lipid accumulation, and proinflammatory/profibrotic expression increased.", "Disordered amino-acid and lipid handling linked metabolic stress to innate immune activation.", "This is evidence that GCGR blockade can be proinflammatory in kidney; it is not proof that supraphysiologic agonism is anti-inflammatory in every tissue.", "Wang et al. · Cell Metabolism 2024", "https://pubmed.ncbi.nlm.nih.gov/38237602/"),
      organStudy("GLP-1R + GIPR + GCGR", "Direct multi-organ disease models", "direct", "Retatrutide reduced inflammatory and fibrotic signals alongside metabolic improvement", "Db/db kidney disease and diet-induced MASH models.", "Repeated retatrutide with tissue histology and inflammatory/fibrotic marker panels.", "Renal and hepatic inflammatory injury markers fell in the tested models, accompanying lower weight, altered metabolites, and less ectopic lipid.", "Reduced lipotoxicity plus receptor-specific neural, stromal, endothelial, and GCGR metabolic pathways may all contribute.", "Without immune-cell-specific receptor deletion, these are integrated organ outcomes—not proof of direct action on macrophages or lymphocytes.", "Ma et al. · Endocrine 2025", "https://pubmed.ncbi.nlm.nih.gov/39212900/")
    ]
  }
});

const evidenceSection = document.querySelector("#evidence");
const evidenceGrid = document.querySelector("#evidence-grid");
const filterSummary = document.querySelector("#filter-summary");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
let activeDrug = null;
let activeFilter = "human";
let activeOrgan = "cardiovascular";

function mechanismCard(study) {
  return `
    <article class="mechanism-card ${study.tone || ""}">
      <div class="mechanism-top"><span class="receptor-tag">${study.receptor}</span><span class="experiment-tag">${study.experiment}</span></div>
      <h4>${study.title}</h4>
      <dl>
        <div><dt>Model</dt><dd>${study.model}</dd></div>
        <div><dt>Test</dt><dd>${study.perturbation}</dd></div>
        <div><dt>Result</dt><dd>${study.result}</dd></div>
        <div><dt>Mechanism</dt><dd>${study.mechanism}</dd></div>
        <div><dt>How to read it</dt><dd class="study-reading">${study.reading}</dd></div>
      </dl>
      <a href="${study.url}" target="_blank" rel="noopener">${study.source} ↗</a>
    </article>`;
}

function renderOrganAtlas() {
  const tabs = document.querySelector("#organ-tabs");
  const panel = document.querySelector("#organ-panel");
  tabs.innerHTML = organSystems.map(([id, label]) => `
    <button type="button" role="tab" data-organ="${id}" class="${id === activeOrgan ? "active" : ""}" aria-selected="${id === activeOrgan}">${label}</button>
  `).join("");
  const record = organEvidence[activeDrug]?.[activeOrgan];
  if (!record) {
    const label = organSystems.find(([id]) => id === activeOrgan)?.[1] || "This system";
    panel.innerHTML = `<div class="organ-overview"><h4>${label}</h4><p>The receptor-level evidence for this organ is being expanded. Use the study-detail tabs below for the currently indexed papers.</p></div>`;
    return;
  }
  panel.innerHTML = `
    <div class="organ-overview"><h4>${record.title}</h4><p>${record.summary}</p></div>
    <div class="mechanism-grid">${record.studies.map(mechanismCard).join("")}</div>`;
}

function evidenceCard(item, category) {
  const toneClass = item.tone === "company" ? " company-card" : item.tone === "null" ? " null-card" : category === "safety" ? " limit-card" : category === "preclinical" ? " mouse-card" : "";
  return `
    <article class="evidence-card${toneClass}">
      <div class="card-meta"><span class="tier">${item.tier}</span><span class="year">${item.year}</span></div>
      <div class="metric">${item.metric}</div>
      <h3>${item.title}</h3>
      <p class="finding">${item.finding}</p>
      <p class="context">${item.context}</p>
      <p class="source-link"><a href="${item.url}" target="_blank" rel="noopener">${item.source} ↗</a></p>
    </article>`;
}

function sourceLedger(drug) {
  const seen = new Set();
  const organItems = Object.values(organEvidence[activeDrug] || {}).flatMap(organ =>
    organ.studies.map(item => ({ ...item, category: "organ", context: `${item.receptor} · ${item.experiment} · ${organ.title}` }))
  );
  const items = [
    ...["human", "preclinical", "safety"].flatMap(category => drug[category].map(item => ({ ...item, category }))),
    ...organItems
  ].filter(item => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  const sources = items.map(item => `
    <article class="source-card">
      <span class="source-kind">${item.category === "organ" ? "Organ mechanism" : item.category === "preclinical" ? "Preclinical" : item.category === "safety" ? "Safety / limit" : "Human study"}</span>
      <h3>${item.source}</h3>
      <p>${item.context}</p>
      <a href="${item.url}" target="_blank" rel="noopener">Open source ↗</a>
    </article>`).join("");

  const directory = drug.glucagon.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join("");
  return `${sources}
    <aside class="glucagon-directory">
      <p class="eyebrow">Expert context</p>
      <h3>Read further at Glucagon.com</h3>
      <p>Daniel Drucker’s topic pages connect receptor biology, animal studies, human physiology, adverse events, and publications. These are the pages most relevant to this medicine.</p>
      <div class="directory-links">${directory}</div>
    </aside>`;
}

function renderFilter() {
  const drug = evidenceData[activeDrug];
  if (!drug) return;
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  filterSummary.innerHTML = drug.summaries[activeFilter];
  evidenceGrid.innerHTML = activeFilter === "sources"
    ? sourceLedger(drug)
    : drug[activeFilter].map(item => evidenceCard(item, activeFilter)).join("");
}

function renderDrug(slug, options = {}) {
  const { push = true, scroll = true, resetFilter = true } = options;
  const drug = evidenceData[slug];
  if (!drug) return;
  activeDrug = slug;
  if (resetFilter) activeFilter = "human";

  document.querySelector("#evidence-kicker").textContent = drug.kicker;
  document.querySelector("#evidence-title").textContent = drug.name;
  document.querySelector("#evidence-deck").textContent = drug.deck;
  document.querySelector("#identity-card").innerHTML = drug.identity.map(([label, value]) =>
    `<div class="identity-row"><span>${label}</span><b>${value}</b></div>`
  ).join("");
  document.querySelector("#preclinical-snapshot").innerHTML = `
    <div class="snapshot-list positive"><h4>Signals of benefit</h4><ul>${drug.preclinicalSummary.pros.map(item => `<li>${item}</li>`).join("")}</ul></div>
    <div class="snapshot-list caution"><h4>Cautions and null findings</h4><ul>${drug.preclinicalSummary.cons.map(item => `<li>${item}</li>`).join("")}</ul></div>`;
  activeOrgan = "cardiovascular";
  renderOrganAtlas();

  document.querySelectorAll(".medicine-switcher [data-drug]").forEach(button => {
    const selected = button.dataset.drug === slug;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  evidenceSection.hidden = false;
  renderFilter();
  if (push) history.pushState({ drug: slug }, "", `#${slug}`);
  if (scroll) evidenceSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-drug]").forEach(button => {
  button.addEventListener("click", () => renderDrug(button.dataset.drug));
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderFilter();
  });
});

document.querySelector("#organ-tabs").addEventListener("click", event => {
  const button = event.target.closest("[data-organ]");
  if (!button) return;
  activeOrgan = button.dataset.organ;
  renderOrganAtlas();
});

document.querySelector("[data-back]").addEventListener("click", () => {
  evidenceSection.hidden = true;
  activeDrug = null;
  history.pushState({}, "", `${location.pathname}${location.search}#choose`);
  document.querySelector("#choose").scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("hashchange", () => {
  const slug = location.hash.slice(1);
  if (evidenceData[slug]) renderDrug(slug, { push: false, scroll: true, resetFilter: false });
});

const initialSlug = location.hash.slice(1);
if (evidenceData[initialSlug]) renderDrug(initialSlug, { push: false, scroll: false });
