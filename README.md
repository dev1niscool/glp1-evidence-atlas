# Signal & Scale

Signal & Scale is a source-first evidence atlas for semaglutide, tirzepatide, and retatrutide. It separates randomized human evidence, mouse and other preclinical findings, safety information, negative results, and unresolved questions.

Each medication includes a concise preclinical benefit/caution snapshot and nine organ-system tabs. The organ cards identify the receptor, animal or tissue model, intervention, result, proposed mechanism, and the limits of interpretation. Drug exposure, whole-body receptor knockout, and tissue-specific knockout evidence are kept distinct.

Live site: https://dev1niscool.github.io/glp1-evidence-atlas/

## Research approach

- Claims keep their study population, duration, comparator, and evidence tier.
- The organ atlas currently contains 62 study-level mechanism cards spanning heart and vessels, brain, pancreas, gut, liver, kidney, bone, adipose tissue, and the immune system.
- Mouse findings are labeled as preclinical and are never presented as proof of a human effect.
- FDA prescribing information, peer-reviewed primary papers, and company-only toplines are visually distinct.
- Glucagon.com is used as an expert map into receptor biology and the wider literature; quantitative claims link to primary papers or regulatory sources.
- Evidence was last checked on 23 August 2026.

This is an independent educational project, not medical advice. It is not affiliated with a manufacturer, Glucagon.com, or the Drucker Lab.

## Local preview

Serve the repository root with any static file server, for example:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.
