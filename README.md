# RL Information Bottleneck

This repository hosts an academic project website for the RL information-bottleneck
project. The central thesis is:

> Fixed verifier datasets provide finite information, and prompt-transfer
> matrices reveal dataset geometry.

Traditional self-play is used as a contrastive renewable source. LLM RLVR is
the main fixed-dataset case. Diffusion-model RL is included only as a brief
future extension of the same source/geometry lens.

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
