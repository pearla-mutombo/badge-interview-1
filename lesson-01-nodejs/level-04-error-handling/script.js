try {
  console.log("Attempting to access browser features...");
  localStorage.setItem("message", "Welcome to level 3!");
  const pTag = document.querySelector("p");
} catch (error) {
  console.log("localStorage not define.");
}
