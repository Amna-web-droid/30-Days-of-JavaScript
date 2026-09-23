let notesArray = JSON.parse(localStorage.getItem("my_grid_diary")) || [];
let activeNoteId = null;

window.onload = () => {
  renderNotesList(notesArray);
  prepareNewNote();
};

function getCurrentFormattedTime() {
  const now = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return now.toLocaleDateString('en-US', options);
}

function prepareNewNote() {
  activeNoteId = null;
  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";
  document.getElementById("entry-timestamp").innerText = getCurrentFormattedTime();
  document.getElementById("delete-btn").style.display = "none";
  renderNotesList(notesArray);
}

function saveCurrentNote() {
  const titleVal = document.getElementById("note-title").value.trim();
  const contentVal = document.getElementById("note-content").value.trim();

  if (!titleVal || !contentVal) {
    alert("Please enter both title and note content.");
    return;
  }

  if (activeNoteId === null) {
    const newEntry = {
      id: Date.now(),
      title: titleVal,
      content: contentVal,
      timestamp: getCurrentFormattedTime(),
      rawDate: new Date().toISOString().split('T')[0]
    };
    notesArray.unshift(newEntry);
  } else {
    const noteIndex = notesArray.findIndex(note => note.id === activeNoteId);
    if (noteIndex !== -1) {
      notesArray[noteIndex].title = titleVal;
      notesArray[noteIndex].content = contentVal;
    }
  }

  syncAndRender();
  prepareNewNote();
}

function renderNotesList(list) {
  const container = document.getElementById("notes-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p style="font-size:11px; color:var(--text-secondary); text-align:center; padding:10px;">No entries yet.</p>`;
    return;
  }

  list.forEach(note => {
    const item = document.createElement("div");
    item.className = `note-item ${note.id === activeNoteId ? 'active' : ''}`;
    item.onclick = () => openNote(note.id);
    item.innerHTML = `
      <h4>${note.title}</h4>
      <span>${note.timestamp}</span>
    `;
    container.appendChild(item);
  });
}

function openNote(id) {
  const note = notesArray.find(item => item.id === id);
  if (note) {
    activeNoteId = note.id;
    document.getElementById("note-title").value = note.title;
    document.getElementById("note-content").value = note.content;
    document.getElementById("entry-timestamp").innerText = note.timestamp;
    document.getElementById("delete-btn").style.display = "block";
    renderNotesList(notesArray);
  }
}

function deleteCurrentNote() {
  if (activeNoteId !== null) {
    notesArray = notesArray.filter(note => note.id !== activeNoteId);
    syncAndRender();
    prepareNewNote();
  }
}

function searchNotes() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filtered = notesArray.filter(note => note.title.toLowerCase().includes(query));
  renderNotesList(filtered);
}

function filterByDate() {
  const selectedDate = document.getElementById("calendar-picker").value;
  if (!selectedDate) {
    renderNotesList(notesArray);
    return;
  }
  const filtered = notesArray.filter(note => note.rawDate === selectedDate);
  renderNotesList(filtered);
}

// Dark / Light Mode Toggle Function
function toggleMode() {
  const currentMode = document.body.getAttribute("data-mode");
  const newMode = currentMode === "light" ? "dark" : "light";
  
  document.body.setAttribute("data-mode", newMode);
  document.getElementById("mode-icon").innerText = newMode === "light" ? "🌙" : "☀️";
  document.getElementById("mode-text").innerText = newMode === "light" ? "Dark Mode" : "Light Mode";
}

// Accent Color Theme Switcher Function
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
}

function syncAndRender() {
  localStorage.setItem("my_grid_diary", JSON.stringify(notesArray));
  renderNotesList(notesArray);
}