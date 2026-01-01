document.getElementById("check").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.textContent = "Checking API...";

  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error connecting to API";
  }
});
