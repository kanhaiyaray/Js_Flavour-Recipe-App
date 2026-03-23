let food = document.querySelector(".food");
// --TO TARGET ID & ID SHOULD BE SAME AS USE IN HTML FILE --
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let british = document.querySelector("#british");
let thai = document.querySelector("#thai");
let russian = document.querySelector("#russian");

let recipe; 

// fetching data from api area wise,api taking from themealdb.com
const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  // TO CONVERT IN JSON FORMAT
  const data = await api.json();
  // GET DATA FROM ARRAY
  recipe = data.meals;
  console.log("MY Recipe = ", recipe);
  showData(recipe);
};
// Auth Elements
const authButtons = document.getElementById("auth-buttons");
const navLoginBtn = document.getElementById("nav-login-btn");
const navSignupBtn = document.getElementById("nav-signup-btn");
const authWidget = document.getElementById("auth-widget");
const authContainer = document.getElementById("auth-container");
const userInfo = document.getElementById("user-info");
const userGreeting = document.getElementById("user-greeting");
const logoutBtn = document.getElementById("logout-btn");
const appContent = document.getElementById("app-content");

// Auth UI Sliding Logic
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
    authContainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    authContainer.classList.remove("right-panel-active");
});

navLoginBtn.addEventListener('click', () => {
    authWidget.classList.toggle("auth-widget-visible");
    authWidget.classList.remove("auth-widget-hidden");
    authContainer.classList.remove("right-panel-active");
});

navSignupBtn.addEventListener('click', () => {
    authWidget.classList.toggle("auth-widget-visible");
    authWidget.classList.remove("auth-widget-hidden");
    authContainer.classList.add("right-panel-active");
});

// Close widget when clicking outside
document.addEventListener('click', (e) => {
    if (authWidget.classList.contains('auth-widget-visible') && 
        !authWidget.contains(e.target) && 
        !authButtons.contains(e.target)) {
        authWidget.classList.remove('auth-widget-visible');
        authWidget.classList.add('auth-widget-hidden');
    }
});

// Forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginError = document.getElementById("login-error");
const signupError = document.getElementById("signup-error");

// Check Auth State on Load
const checkAuthState = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    // Logged in
    authButtons.classList.add("d-none");
    userInfo.classList.remove("d-none");
    authWidget.classList.remove("auth-widget-visible");
    authWidget.classList.add("auth-widget-hidden");
    userGreeting.textContent = `Welcome, ${currentUser.name}!`;
  } else {
    // Not logged in
    authButtons.classList.remove("d-none");
    userInfo.classList.add("d-none");
  }
  
  // Always fetch default data so the app looks complete even when logged out
  if (!recipe) {
    fetchData("indian");
  }
};

// Signup Logic
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Check if user exists
  if (users.find(u => u.email === email)) {
    signupError.textContent = "Email already registered!";
    signupError.classList.remove("d-none");
    return;
  }

  // Save new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  // Update UI
  signupForm.reset();
  signupError.classList.add("d-none");
  checkAuthState();
});

// Login Logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    // Update UI
    loginForm.reset();
    loginError.classList.add("d-none");
    checkAuthState();
  } else {
    loginError.textContent = "Invalid email or password!";
    loginError.classList.remove("d-none");
  }
});

// Logout Logic
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  checkAuthState();
});

// Initial Check
checkAuthState();

// search recipe
const search = () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputVal = input.value;
        console.log("inut vvalue ",inputVal)
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`
      );
      const data = await api.json();
      recipe = data.meals;

      console.log("search food = ", data)
      showData(recipe);
    }
  });
};

search();

let showData = (items) => {
  food.innerHTML = items
    .map(
      (meal) => `
    <div style="text-align:center">
    <div>
    <img src=${meal.strMealThumb} class="img" />
    </div>
    <h5 style="margin:10px">${meal.strMeal}</h5>
    </div>
    `
    )
    .join(" ");
};
 // TO SHOW AREA WISE FOOD , (USE addEventListener >> method(click) >> location)
indian.addEventListener("click", () => {
  fetchData("indian");
});
american.addEventListener("click", () => {
  fetchData("american");
});
russian.addEventListener("click", () => {
  fetchData("russian");
});
british.addEventListener("click", () => {
  fetchData("british");
});
thai.addEventListener("click", () => {
  fetchData("thai");
});
canadian.addEventListener("click", () => {
  fetchData("canadian");
});