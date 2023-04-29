const preloadEvent = new CustomEvent("preload:complete");
const preloader = document.getElementById("preloader");

startTimer(2000, () => {
  setTimeout(() => {
    document.dispatchEvent(preloadEvent);
    document.body.classList.add("preloader_ready");
  }, 1500);
});

function startTimer(duration, finishCallback) {
  const initial = Date.now();
  const counterElement = document.getElementById("counter");

  const render = () => {
    const current = Date.now();
    const diff = current - initial;
    const progress = Math.round(100 * (diff / duration));

    if (progress <= 100) {
      counterElement.innerText = progress;
      window.requestAnimationFrame(render);
    } else {
      finishCallback();
    }
  };

  render();
}
