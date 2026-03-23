/* ══════════════════════════════════════
   FLAVOUR — index.js
   Auth + API + UI Logic
══════════════════════════════════════ */

// ── DOM REFERENCES ──────────────────────────────────
const authButtons  = document.getElementById("auth-buttons");
const navLoginBtn  = document.getElementById("nav-login-btn");
const navSignupBtn = document.getElementById("nav-signup-btn");
const authOverlay  = document.getElementById("auth-overlay");
const userInfo     = document.getElementById("user-info");
const userGreeting = document.getElementById("user-greeting");
const userAvatar   = document.getElementById("user-avatar");
const logoutBtn    = document.getElementById("logout-btn");
const foodGrid     = document.getElementById("food-grid");
const recipesTitle = document.getElementById("recipes-title");
const recipesCount = document.getElementById("recipes-count");
const searchInput  = document.getElementById("search");
const toastEl      = document.getElementById("toast");

const loginForm    = document.getElementById("login-form");
const signupForm   = document.getElementById("signup-form");
const loginError   = document.getElementById("login-error");
const signupError  = document.getElementById("signup-error");
const loginWrap    = document.getElementById("login-wrap");
const signupWrap   = document.getElementById("signup-wrap");

const authLeftTitle = document.getElementById("auth-left-title");
const authLeftSub   = document.getElementById("auth-left-sub");
const switchLabel   = document.getElementById("switch-label");

// ── STATE ────────────────────────────────────────────
let currentArea = "indian";
let isSignupMode = false;

// ══════════════════════════════════════
// TOAST
// ══════════════════════════════════════
function showToast(msg, type = "info") {
  toastEl.textContent = msg;
  toastEl.className = `toast ${type} show`;
  setTimeout(() => {
    toastEl.className = "toast hidden";
  }, 3000);
}

// ══════════════════════════════════════
// AUTH MODAL OPEN / CLOSE
// ══════════════════════════════════════
function openAuth(mode = "login") {
  isSignupMode = mode === "signup";
  updateAuthMode();
  authOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  authOverlay.classList.add("hidden");
  document.body.style.overflow = "";
  loginError.classList.add("hidden");
  signupError.classList.add("hidden");
  loginForm.reset();
  signupForm.reset();
}

function closeAuthOnOverlay(e) {
  if (e.target === authOverlay) closeAuth();
}

function toggleAuthMode() {
  isSignupMode = !isSignupMode;
  updateAuthMode();
}

function updateAuthMode() {
  if (isSignupMode) {
    loginWrap.classList.add("hidden");
    signupWrap.classList.remove("hidden");
    authLeftTitle.textContent = "Hello, Friend!";
    authLeftSub.textContent = "Create your free account and start discovering amazing recipes from across the globe.";
    switchLabel.textContent = "Already have an account →";
  } else {
    signupWrap.classList.add("hidden");
    loginWrap.classList.remove("hidden");
    authLeftTitle.textContent = "Welcome Back!";
    authLeftSub.textContent = "Sign in to discover and save your favourite recipes from around the world.";
    switchLabel.textContent = "Create Account →";
  }
  loginError.classList.add("hidden");
  signupError.classList.add("hidden");
}

// Navbar buttons
navLoginBtn.addEventListener("click",  () => openAuth("login"));
navSignupBtn.addEventListener("click", () => openAuth("signup"));

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAuth();
});

// ══════════════════════════════════════
// CHECK AUTH STATE
// ══════════════════════════════════════
function checkAuthState() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    authButtons.classList.add("hidden");
    userInfo.classList.remove("hidden");
    userGreeting.textContent = `Hi, ${user.name.split(" ")[0]}`;
    userAvatar.textContent = user.name.charAt(0).toUpperCase();
  } else {
    authButtons.classList.remove("hidden");
    userInfo.classList.add("hidden");
  }
}

// ══════════════════════════════════════
// SIGNUP
// ══════════════════════════════════════
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name     = document.getElementById("signup-name").value.trim();
  const email    = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;

  if (password.length < 6) {
    showError(signupError, "Password must be at least 6 characters.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    showError(signupError, "This email is already registered.");
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  signupForm.reset();
  closeAuth();
  checkAuthState();
  showToast(`Welcome to Flavour, ${name.split(" ")[0]}! 🎉`, "success");
});

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email    = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user  = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    loginForm.reset();
    closeAuth();
    checkAuthState();
    showToast(`Welcome back, ${user.name.split(" ")[0]}! 👋`, "success");
  } else {
    showError(loginError, "Invalid email or password. Please try again.");
  }
});

// ══════════════════════════════════════
// LOGOUT
// ══════════════════════════════════════
logoutBtn.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  localStorage.removeItem("currentUser");
  checkAuthState();
  showToast(`See you soon, ${user ? user.name.split(" ")[0] : ""}! 👋`);
});

// ══════════════════════════════════════
// SHOW INLINE ERROR
// ══════════════════════════════════════
function showError(el, msg) {
  el.textContent = msg;
  el.classList.remove("hidden");
}

// ══════════════════════════════════════
// SKELETON LOADERS
// ══════════════════════════════════════
function showSkeletons(count = 6) {
  foodGrid.innerHTML = Array(count).fill('<div class="skeleton"></div>').join("");
}

// ══════════════════════════════════════
// FETCH BY AREA
// ══════════════════════════════════════
async function fetchData(area) {
  currentArea = area;
  showSkeletons();

  const cuisineNames = {
    indian: "Indian Cuisine", canadian: "Canadian Cuisine",
    american: "American Cuisine", thai: "Thai Cuisine",
    british: "British Cuisine", russian: "Russian Cuisine"
  };
  recipesTitle.textContent = cuisineNames[area] || area;
  recipesCount.textContent = "";

  try {
    const res  = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await res.json();
    renderCards(data.meals, area);
  } catch (err) {
    showNoResults("Connection error. Please check your internet.");
  }
}

// ══════════════════════════════════════
// SEARCH
// ══════════════════════════════════════
searchInput.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;
  const query = searchInput.value.trim();
  if (!query) return;

  showSkeletons();
  recipesTitle.textContent = `Results for "${query}"`;
  recipesCount.textContent = "";

  // Remove active filter
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));

  try {
    const res  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    if (data.meals) {
      renderCards(data.meals, null);
    } else {
      showNoResults(`No recipes found for "${query}"`);
    }
  } catch (err) {
    showNoResults("Connection error. Please check your internet.");
  }
});

// ══════════════════════════════════════
// RENDER CARDS
// ══════════════════════════════════════
function renderCards(meals, area) {
  if (!meals || meals.length === 0) {
    showNoResults("No recipes found.");
    return;
  }

  recipesCount.textContent = `${meals.length} recipes`;

  const areaLabel = area
    ? area.charAt(0).toUpperCase() + area.slice(1)
    : "";

  foodGrid.innerHTML = meals.map((meal, i) => `
    <div class="recipe-card" style="animation-delay:${Math.min(i * 0.05, 0.4)}s">
      <img
        src="${meal.strMealThumb}"
        alt="${meal.strMeal}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/300x180/222/666?text=No+Image'"
      />
      <div class="card-body">
        <div class="card-name">${meal.strMeal}</div>
        ${areaLabel ? `<span class="card-tag">${areaLabel}</span>` : ""}
      </div>
    </div>
  `).join("");
}

// ══════════════════════════════════════
// NO RESULTS STATE
// ══════════════════════════════════════
function showNoResults(msg) {
  foodGrid.innerHTML = `
    <div class="no-results">
      <span class="emoji">🍽</span>
      <h3>${msg}</h3>
      <p>Try a different search term or browse by cuisine above.</p>
    </div>
  `;
  recipesCount.textContent = "";
}

// ══════════════════════════════════════
// CUISINE FILTER BUTTONS
// ══════════════════════════════════════
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    searchInput.value = "";
    fetchData(btn.dataset.area);
  });
});

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
checkAuthState();
fetchData("indian");