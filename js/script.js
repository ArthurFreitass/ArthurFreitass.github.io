(function () {
  const dot  = document.createElement("div");
  const ring = document.createElement("div");

  dot.style.cssText  = "position:fixed;pointer-events:none;z-index:99999;" +
    "width:6px;height:6px;background:#E11D48;border-radius:50%;" +
    "transform:translate(-50%,-50%);top:-100px;left:-100px;" +
    "transition:transform .1s ease,background .2s ease;";

  ring.style.cssText = "position:fixed;pointer-events:none;z-index:99998;" +
    "width:28px;height:28px;border:1.5px solid #E11D48;border-radius:50%;" +
    "transform:translate(-50%,-50%);top:-100px;left:-100px;" +
    "opacity:.5;transition:top .12s ease,left .12s ease," +
    "width .2s ease,height .2s ease,opacity .2s ease;";

  document.body.append(dot, ring);
  document.documentElement.style.cursor = "none";

  let mx = -100, my = -100;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
    ring.style.left = mx + "px";
    ring.style.top  = my + "px";
  });

  document.querySelectorAll("a,button,[role=button]").forEach(el => {
    el.addEventListener("mouseenter", () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1.8)";
      dot.style.background = "#F43F5E";
      ring.style.width     = "42px";
      ring.style.height    = "42px";
      ring.style.opacity   = "0.3";
    });
    el.addEventListener("mouseleave", () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
      dot.style.background = "#E11D48";
      ring.style.width     = "28px";
      ring.style.height    = "28px";
      ring.style.opacity   = "0.5";
    });
  });
})();

function adjustBodyPadding() {
  const header = document.querySelector('.header');
  if (header) {
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
  }
}

window.addEventListener('load', adjustBodyPadding);
window.addEventListener('resize', adjustBodyPadding);
