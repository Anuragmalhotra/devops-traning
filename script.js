// Small bit of JS so the site uses HTML + CSS + JS, as the assignment asks.
document.addEventListener("DOMContentLoaded", function () {
  var version = document.getElementById("version").textContent;
  var meta = document.getElementById("meta");
  meta.textContent = "Served via Amazon CloudFront · Build " + version;
  console.log("CI/CD site loaded — version " + version);
});
