document.addEventListener("click", async (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const handle = card.dataset.productHandle;

  const modal = document.getElementById("quick-view-modal");
  const body = document.getElementById("quick-view-body");

  modal.hidden = false;
  body.innerHTML = "Loading…";

  const res = await fetch(`/products/${handle}?view=quick-view`);

  body.innerHTML = await res.text();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("quick-view-overlay") || e.target.classList.contains("quick-view-close")) {
    document.getElementById("quick-view-modal").hidden = true;
  }
});
