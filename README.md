# RL Information Bottleneck

This repository hosts a visual academic website for the RL information-bottleneck
project. The site compares three reward-information regimes:

- Traditional RL / self-play: a renewable verifier source.
- LLM RLVR: a fixed-prompt, finite verifier source.
- Diffusion-model RL: an early-stage extension of the same source/allocation view.

The website is a static GitHub Pages site with no build step.

## Local Preview

Open `index.html` directly in a browser.

## Key Evidence Included

- 40x40 source-target prompt transfer matrix.
- 608 / 1600 positive transfer cells.
- 42 significant transfer cells.
- 265.5 / 640 realized verifier step-bits.
- Off-diagonal / diagonal transfer ratio of 0.129.
- Correct-rollout action entropy shrink from 0.217 to 0.202 nats/token.

## Assets

All figures are selected, lightweight assets copied from the associated paper
and run logs. The large local archive of historical figures and tables is not
committed to this repository.

## Deployment

GitHub Pages deployment is configured through `.github/workflows/pages.yml`.
Pushing to `main` triggers a Pages deployment.
