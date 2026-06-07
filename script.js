const revealTargets = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const metricTargets = document.querySelectorAll("[data-count]");

const animateMetric = (node) => {
  const finalValue = Number(node.dataset.count);
  if (!Number.isFinite(finalValue)) {
    return;
  }

  const decimals = node.dataset.count.includes(".")
    ? node.dataset.count.split(".")[1].length
    : 0;
  const startTime = performance.now();
  const duration = 720;

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = (finalValue * eased).toFixed(decimals);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const metricObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateMetric(entry.target);
          metricObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.45 },
  );

  metricTargets.forEach((target) => metricObserver.observe(target));
} else {
  metricTargets.forEach(animateMetric);
}
