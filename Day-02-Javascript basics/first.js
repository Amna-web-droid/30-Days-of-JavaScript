document.getElementById("calc-btn").addEventListener("click", function () {
  // Input Values Le Rahe Hain
  const inputName = document.getElementById("name-input").value;
  const inputMarks = document.getElementById("marks-input").value;

  if (inputName === "" || inputMarks === "") {
    alert("Please enter both name and marks!");
    return;
  }

  // DAY 1: Variables & Coercion
  const studentName = inputName;
  const totalMarks = Number(inputMarks); // Explicit Coercion
  let rawFee = 5000;

  // DAY 2: Operators & Conditionals
  let hasScholarship = totalMarks >= 80; // Boolean check
  let finalFee = hasScholarship ? rawFee - 1000 : rawFee;
  let discountStatus = hasScholarship ? "Scholarship Applied!" : "No Discount";

  // DAY 3: Control Flow (If / Else)
  let grade = "";
  if (totalMarks >= 90) {
    grade = "A+";
  } else if (totalMarks >= 80) {
    grade = "A";
  } else if (totalMarks >= 70) {
    grade = "B";
  } else {
    grade = "C";
  }

  // Switch Statement
  let remarks = "";
  switch (grade) {
    case "A+":
      remarks = "Outstanding!";
      break;
    case "A":
      remarks = "Excellent Work!";
      break;
    case "B":
      remarks = "Good Effort!";
      break;
    default:
      remarks = "Needs Improvement";
  }

  // UI Updates (DOM)
  document.getElementById("student-name").innerText = studentName;
  document.getElementById("marks").innerText = totalMarks;
  document.getElementById("grade-result").innerText = grade;
  document.getElementById("remarks-result").innerText = remarks;
  document.getElementById("fee-status").innerText = `$${finalFee} (${discountStatus})`;

  // For Loop Example (Clearing & Adding subjects)
  const subjects = ["JavaScript", "HTML5", "CSS3"];
  const subjectList = document.getElementById("subject-list");
  subjectList.innerHTML = ""; // Clear previous items

  for (let i = 0; i < subjects.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `Subject ${i + 1}: <strong>${subjects[i]}</strong> - Checked ✅`;
    subjectList.appendChild(li);
  }
});