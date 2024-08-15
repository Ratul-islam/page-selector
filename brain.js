
function toggleAllPages(checkbox) {
  const pageCheckboxes = document.querySelectorAll(".page");
  pageCheckboxes.forEach((pageCheckbox) => {
    pageCheckbox.checked = checkbox.checked;
  });
}

// toggles all pages on or off
function togglePage() {
  const allPagesCheckbox = document.getElementById("all-pages");
  const pageCheckboxes = document.querySelectorAll(".page");
  allPagesCheckbox.checked = Array.from(pageCheckboxes).every(
    (pageCheckbox) => pageCheckbox.checked
  );
}

function doneSelection() {
  const selectedPages = [];
  document.querySelectorAll(".page:checked").forEach((checkbox) => {
    selectedPages.push(checkbox.value);
  });

  alert(
    "Selected pages: " +
      (selectedPages.length ? selectedPages.join(", ") : "None")
  );
}
