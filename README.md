# RL Information Bottleneck

This repository hosts an academic project website for the RL information-bottleneck
project. The central thesis is:

> Fixed verifier datasets provide finite information, and prompt-transfer
> matrices reveal dataset geometry.

Traditional self-play is used as a contrastive renewable source. LLM RLVR is
the main fixed-dataset case. Diffusion VR/RL is included as a reward-channel
case study showing that richer feedback helps only when it distinguishes
rollouts and stays aligned with the target evaluator.

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
- Diffusion 10-prompt SDXL DDPO active feedback information:
  IR+PS `I_acc = 0.9335`.
- Diffusion held-out alignment: PS-only HPSv2 z = `-0.0947`, IR+PS HPSv2
  z = `-0.0958`.

## Assets

All figures are selected, lightweight assets copied from the associated paper
and run logs. The large local archive of historical figures and tables is not
committed to this repository.

## Deployment

GitHub Pages deployment is configured through `.github/workflows/pages.yml`.
Pushing to `main` triggers a Pages deployment.
