const userName = "Amna";
const userAge = 22;
const isEmployed = true;
const primarySkill = "javascript";
let bonusAmountStr = "150";
let rawBalance = 1000;

let totalBalance = rawBalance + Number(bonusAmountStr);

document.getElementById("user-name").innerText = userName;
document.getElementById("user-age").innerText = String(userAge); // Explicit conversion to String
document.getElementById("user-skill").innerText = primarySkill;
document.getElementById("user-balance").innerText = totalBalance;

// Status Badge Setting
const statusBadge = document.getElementById("job-status");
statusBadge.innerText = isEmployed ? "Employed" : "Unemployed";
if (isEmployed) statusBadge.classList.add("employed");

// 4. Checking Data Types using typeof
const typeList = document.getElementById("type-list");

const variablesToCheck = [
  { name: "userName", val: userName },
  { name: "userAge", val: userAge },
  { name: "isEmployed", val: isEmployed },
  { name: "totalBalance", val: totalBalance }
];

variablesToCheck.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${item.name}</strong> type is: <em>${typeof item.val}</em>`;
  typeList.appendChild(li);
});