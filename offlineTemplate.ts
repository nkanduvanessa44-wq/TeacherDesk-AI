export const OFFLINE_APP_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TeacherDesk AI - Standalone Offline Companion</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            slate: {
              150: "#e9edf0",
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-100 text-slate-800 h-screen flex flex-col overflow-hidden font-sans">
  <header class="h-16 bg-indigo-950 text-white flex items-center justify-between px-6 shadow-md flex-shrink-0 border-b border-indigo-900/40">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-lg shadow-sm shadow-indigo-500/20">T</div>
      <div>
        <h1 class="text-base font-black tracking-tight">TeacherDesk AI</h1>
        <p class="text-[9px] text-indigo-300 uppercase font-extrabold tracking-wider">Portable Off-grid Companion App</p>
      </div>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
      <span class="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[10px]">__PLATFORM_MODE__</span>
    </div>
  </header>

  <div class="flex flex-1 overflow-hidden">
    <!-- Left Profile Summary Container -->
    <aside class="w-64 bg-slate-900 text-white p-6 justify-between flex flex-col border-r border-slate-800 flex-shrink-0">
      <div class="space-y-6">
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation Tools</h3>
          <div class="space-y-1.5 mt-3">
            <button id="btn-pupils" onclick="setTab('pupils')" class="tab-btn w-full flex items-center gap-3 bg-indigo-800 text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer">
              <span>👥</span> Pupils Directory
            </button>
            <button id="btn-lessons" onclick="setTab('lessons')" class="tab-btn w-full flex items-center gap-3 text-slate-400 hover:bg-slate-800/50 hover:text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer">
              <span>📚</span> Lesson Guides
            </button>
            <button id="btn-schemes" onclick="setTab('schemes')" class="tab-btn w-full flex items-center gap-3 text-slate-400 hover:bg-slate-800/50 hover:text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer">
              <span>🗺️</span> Schemes of Work
            </button>
            <button id="btn-resources" onclick="setTab('resources')" class="tab-btn w-full flex items-center gap-3 text-slate-400 hover:bg-slate-800/50 hover:text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer">
              <span>📝</span> Notes & Resources
            </button>
            <button id="btn-calendar" onclick="setTab('calendar')" class="tab-btn w-full flex items-center gap-3 text-slate-400 hover:bg-slate-800/50 hover:text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer">
              <span>📅</span> Timeline Agenda
            </button>
          </div>
        </div>

        <div class="border-t border-slate-800/80 pt-4 space-y-4">
          <div>
            <p class="text-slate-400 uppercase text-[9px] font-bold tracking-wider">Teacher Context</p>
            <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs mt-2 text-slate-300">
              <p class="font-bold text-white">__TEACHER_NAME__</p>
              <p class="text-slate-400 text-[10px]">__SCHOOL_NAME__</p>
            </div>
          </div>
          
          <div class="space-y-1">
            <span class="text-slate-400 uppercase text-[9px] font-bold tracking-wider">Add Offline Student</span>
            <div class="space-y-1.5 mt-1.5">
              <input type="text" id="new-std-name" placeholder="Full Student Name" class="w-full text-[11px] bg-slate-950 border border-slate-800 p-2 rounded-lg text-white font-semibold outline-none focus:border-indigo-500 transition-colors">
              <input type="text" id="new-std-roll" placeholder="Roll Number (e.g. 054)" class="w-full text-[11px] bg-slate-950 border border-slate-800 p-2 rounded-lg text-white font-semibold outline-none focus:border-indigo-500 transition-colors">
              <button onclick="addManualStudent()" class="w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] rounded-lg cursor-pointer transition-colors">➕ Add Offline Record</button>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-4">
        <button onclick="copyOfflineJSON()" class="w-full py-2 bg-slate-850 border border-slate-750 hover:bg-slate-800 text-indigo-300 hover:text-indigo-200 rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer">
          📥 Copy Sync Payload
        </button>
        <p class="text-[9px] text-slate-500 mt-2 text-center">Click to copy offline database changes back to the portal.</p>
      </div>
    </aside>

    <!-- Main Workspace Frame -->
    <main class="flex-1 bg-slate-50 p-8 overflow-y-auto flex flex-col h-full">
      <!-- Tab 1: Pupils Directory -->
      <div id="content-pupils" class="tab-content space-y-6 flex-1 flex flex-col">
        <div class="flex items-center justify-between bg-gradient-to-r from-indigo-950 to-slate-900 text-white p-5 rounded-2xl shadow-sm">
          <div>
            <h2 class="text-lg font-black tracking-tight">Active Pupils Directory</h2>
            <p class="text-xs text-indigo-200 mt-1">Zambian National Syllabus SBA Performance Assessment Sandbox.</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-indigo-300 font-bold block uppercase tracking-wider">Preloaded Pupils</span>
            <span id="pupil-count-label" class="text-2xl font-black">0</span>
          </div>
        </div>

        <!-- Live Roster Database Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[350px]">
          <!-- Left: Pupil Directory -->
          <div class="bg-white p-6 rounded-2xl border border-slate-150 flex flex-col lg:col-span-5 h-full">
            <div class="border-b border-slate-100 pb-2 mb-3">
              <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider">Class Roster List</h3>
            </div>
            <div class="overflow-y-auto flex-1 max-h-[350px]">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="text-slate-400 uppercase tracking-wider text-[9px] border-b border-slate-100 pb-1.5 font-bold">
                    <th class="pb-2">Roll No</th>
                    <th class="pb-2">Name</th>
                    <th class="pb-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody id="student-roster-rows" class="divide-y divide-slate-100">
                  <!-- Populated dynamically -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right: Pupil Performance Detail & Bar Chart -->
          <div class="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col lg:col-span-7 h-full" id="pupil-detail-panel">
            <div class="flex-1 flex flex-col justify-center items-center text-slate-400 py-12">
              <p class="text-3xl">📊</p>
              <p class="font-bold text-sm mt-2 text-slate-600">Select a pupil to analyze</p>
              <p class="text-[11px] text-slate-400 text-center max-w-xs mt-1">Review the continuous assessment performance and grades over standard subject criteria.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 2: Lesson Plans -->
      <div id="content-lessons" class="tab-content space-y-6 flex-1 flex flex-col hidden">
        <div class="bg-gradient-to-r from-emerald-950 to-slate-900 text-white p-5 rounded-2xl shadow-sm">
          <h2 class="text-lg font-black tracking-tight">Active Lesson Plans</h2>
          <p class="text-xs text-emerald-200 mt-1">
            Access fully structured lesson outlines, teacher aids, student exercises, and assessment questions off-grid.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1 min-h-[300px]">
          <div class="lg:col-span-5 bg-white p-4 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px]">
            <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">Preloaded Lessons</h3>
            <div id="lessons-list-container" class="space-y-2">
              <!-- Populated by JS -->
            </div>
          </div>
          <div class="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px] flex flex-col" id="lesson-detail-panel">
            <div class="flex-1 flex flex-col justify-center items-center text-slate-400 py-12">
              <p class="text-3xl">📚</p>
              <p class="font-bold text-sm mt-2 text-slate-600">Select a lesson plan to view</p>
              <p class="text-[11px] text-slate-400 text-center max-w-xs mt-1">Review complete learning goals, materials list, teacher/pupil steps, homework, and test objectives.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 3: Schemes of Work -->
      <div id="content-schemes" class="tab-content space-y-6 flex-1 flex flex-col hidden">
        <div class="bg-gradient-to-r from-rose-950 to-slate-900 text-white p-5 rounded-2xl shadow-sm">
          <h2 class="text-lg font-black tracking-tight">Curricular Schemes of Work</h2>
          <p class="text-xs text-rose-200 mt-1">
            Verify weekly pacing structures, reference teaching materials, and assessment methods term-by-term.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1 min-h-[300px]">
          <div class="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px]">
            <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">Syllabus Outlines</h3>
            <div id="schemes-list-container" class="space-y-2">
              <!-- Populated by JS -->
            </div>
          </div>
          <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px] flex flex-col" id="scheme-detail-panel">
            <div class="flex-1 flex flex-col justify-center items-center text-slate-400 py-12">
              <p class="text-3xl">🗺️</p>
              <p class="font-bold text-sm mt-2 text-slate-600">Select a Scheme of Work to inspect</p>
              <p class="text-[11px] text-slate-400 text-center max-w-xs mt-1">Displays detailed weekly columns for topics, subtopics, assessment types, and required resources.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 4: Notes & Resources -->
      <div id="content-resources" class="tab-content space-y-6 flex-1 flex flex-col hidden">
        <div class="bg-gradient-to-r from-sky-950 to-slate-900 text-white p-5 rounded-2xl shadow-sm">
          <h2 class="text-lg font-black tracking-tight">Teaching Notes & Resources</h2>
          <p class="text-xs text-sky-200 mt-1">
            Browse and study your compiled curriculum notes, student worksheets, assignments, and exam prep papers offline.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1 min-h-[300px]">
          <div class="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px]">
            <h3 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">Preloaded Notes</h3>
            <div id="resources-list-container" class="space-y-2">
              <!-- Populated by JS -->
            </div>
          </div>
          <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-150 overflow-y-auto max-h-[500px] flex flex-col" id="resource-detail-panel">
            <div class="flex-1 flex flex-col justify-center items-center text-slate-400 py-12">
              <p class="text-3xl">📝</p>
              <p class="font-bold text-sm mt-2 text-slate-600">Select teaching notes or resource</p>
              <p class="text-[11px] text-slate-400 text-center max-w-xs mt-1">Review lesson notes, study materials, worksheets, and references offline.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 5: Calendar Timeline -->
      <div id="content-calendar" class="tab-content space-y-6 flex-1 flex flex-col hidden">
        <div class="bg-gradient-to-r from-teal-950 to-slate-900 text-white p-5 rounded-2xl shadow-sm">
          <h2 class="text-lg font-black tracking-tight">Class Agenda & Event Logs</h2>
          <p class="text-xs text-teal-200 mt-1">
            Stay aligned with school timelines, assessments, assignments, and curriculum dates.
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-150 flex-1 overflow-y-auto max-h-[500px]">
          <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 class="text-sm font-black tracking-tight text-slate-800">Your Classroom Planner</h3>
            <span class="text-xs text-slate-400">Chronological checklist</span>
          </div>
          <div id="calendar-list-container" class="space-y-4">
            <!-- Populated by JS -->
          </div>
        </div>
      </div>
    </main>
  </div>

  <script>
    let students = __STUDENTS_JSON__;
    let profile = __PROFILE_JSON__;
    let assessments = __ASSESSMENTS_JSON__;
    let marks = __MARKS_JSON__;
    let schemes = __SCHEMES_JSON__;
    let lessons = __LESSONS_JSON__;
    let calendar = __CALENDAR_JSON__;
    let resources = __RESOURCES_JSON__;

    function setTab(tabId) {
      document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
      const target = document.getElementById("content-" + tabId);
      if (target) target.classList.remove("hidden");
      
      document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.id === "btn-" + tabId) {
          btn.className = "tab-btn w-full flex items-center gap-3 bg-indigo-800 text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer";
        } else {
          btn.className = "tab-btn w-full flex items-center gap-3 text-slate-400 hover:bg-slate-800/50 hover:text-white p-2.5 rounded-xl text-left font-bold transition-all text-xs cursor-pointer";
        }
      });
    }

    function drawBarChart(containerId, labels, data, maxVal) {
      if(!maxVal) maxVal = 100;
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = "";

      if (window.Chart) {
        const canvas = document.createElement("canvas");
        canvas.style.maxHeight = "180px";
        container.appendChild(canvas);
        new Chart(canvas, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Subject Score (%)',
              data: data,
              backgroundColor: '#10b981',
              borderColor: '#047857',
              borderWidth: 1,
              borderRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: maxVal,
                ticks: {
                  callback: function(v) { return v + "%"; }
                }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
        return;
      }

      let html = '<div class="flex flex-col h-full justify-between space-y-4" style="height: 180px;">';
      html += '<div class="flex items-end justify-between gap-3 h-36 pt-4 border-b border-slate-200">';
      
      if (data.length === 0) {
        html += '<div class="w-full text-center text-slate-400 text-xs italic py-8">No assessment records found.</div>';
      } else {
        for (let i = 0; i < data.length; i++) {
          const label = labels[i];
          const val = data[i];
          const pct = Math.min(100, Math.max(0, Math.round((val / maxVal) * 100)));
          html += '<div class="flex flex-col items-center flex-1 group relative h-full justify-end">' +
                  '  <span class="absolute -top-7 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">' + pct + '%</span>' +
                  '  <div class="w-full bg-slate-100 rounded-t overflow-hidden flex items-end" style="height: 100%; max-height: ' + pct + '%; min-height: 4px;">' +
                  '    <div class="w-full bg-emerald-500 hover:bg-emerald-600 transition-all rounded-t" style="height: 100%;"></div>' +
                  '  </div>' +
                  '  <span class="text-[9px] font-bold text-slate-500 mt-1.5 truncate w-full text-center" title="' + label + '">' + label + '</span>' +
                  '</div>';
        }
      }
      html += '</div>';
      html += '<div class="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase">' +
              '  <span>0%</span>' +
              '  <span>Subject Performance Level (%)</span>' +
              '  <span>100%</span>' +
              '</div>';
      html += '</div>';
      container.innerHTML = html;
    }

    function viewStudentDetails(studentId) {
      const s = students.find(item => item.id === studentId);
      if(!s) return;
      const sMarks = marks.filter(m => m.studentId === studentId);
      
      const subjectScores = {};
      const subjectTotals = {};
      
      sMarks.forEach(m => {
        const ass = assessments.find(a => a.id === m.assessmentId);
        const sub = ass ? (ass.subject || "General") : "General";
        const max = ass ? ass.maxMarks : 100;
        
        if (!subjectScores[sub]) {
          subjectScores[sub] = 0;
          subjectTotals[sub] = 0;
        }
        subjectScores[sub] += Number(m.score);
        subjectTotals[sub] += Number(max);
      });
      
      const labels = [];
      const percentages = [];
      
      Object.keys(subjectScores).forEach(sub => {
        labels.push(sub);
        const pct = Math.round((subjectScores[sub] / subjectTotals[sub]) * 100);
        percentages.push(pct);
      });

      let tbodyRows = "";
      if (sMarks.length === 0) {
        tbodyRows = '<tr><td colspan="4" class="p-4 text-center italic text-slate-400">No marks registered offline for this pupil.</td></tr>';
      } else {
        sMarks.forEach(m => {
          const ass = assessments.find(a => a.id === m.assessmentId);
          const title = ass ? ass.title : "Unknown Assessment";
          const sub = ass ? (ass.subject || "General") : "General";
          const max = ass ? ass.maxMarks : 100;
          const outcome = m.competencyAchieved ? "Achieved" : "Needs Work";
          const colorClass = m.competencyAchieved ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-rose-50 text-rose-700 border-rose-100";
          tbodyRows += '<tr>' +
                       '  <td class="p-2 font-bold text-slate-700">' + title + '</td>' +
                       '  <td class="p-2 text-slate-500 font-semibold">' + sub + '</td>' +
                       '  <td class="p-2 text-center font-extrabold text-slate-800">' + m.score + ' <span class="text-slate-400 font-normal">/ ' + max + '</span></td>' +
                       '  <td class="p-2 text-center">' +
                       '    <span class="px-1.5 py-0.5 rounded border text-[9px] font-bold ' + colorClass + '">' + outcome + '</span>' +
                       '  </td>' +
                       '</tr>';
        });
      }

      const panel = document.getElementById("pupil-detail-panel");
      panel.innerHTML = 
        '<div class="space-y-4 text-left">' +
        '  <div class="flex justify-between items-start border-b border-slate-100 pb-3">' +
        '    <div>' +
        '      <h3 class="font-extrabold text-sm text-slate-800">' + s.name + '</h3>' +
        '      <p class="text-[10px] font-mono font-bold text-slate-400">Roll Number: #' + s.rollNo + '</p>' +
        '    </div>' +
        '    <span class="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-[9px] font-bold uppercase">Pupil Profile</span>' +
        '  </div>' +
        '  <div>' +
        '    <h4 class="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Subject Performance Chart</h4>' +
        '    <div id="performance-chart-container" class="bg-slate-50 border border-slate-150 p-4 rounded-xl min-h-[180px]"></div>' +
        '  </div>' +
        '  <div class="space-y-2 pt-2">' +
        '    <h4 class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Registered Mark Logs</h4>' +
        '    <div class="overflow-y-auto max-h-40 border rounded-xl border-slate-150">' +
        '      <table class="w-full text-left text-[11px]">' +
        '        <thead class="bg-slate-50 font-bold text-slate-500 uppercase tracking-wider text-[9px] border-b">' +
        '          <tr>' +
        '            <th class="p-2">Assessment</th>' +
        '            <th class="p-2">Subject</th>' +
        '            <th class="p-2 text-center">Score</th>' +
        '            <th class="p-2 text-center">Outcome</th>' +
        '          </tr>' +
        '        </thead>' +
        '        <tbody class="divide-y divide-slate-100">' + tbodyRows + '</tbody>' +
        '      </table>' +
        '    </div>' +
        '  </div>' +
        '</div>';

      drawBarChart("performance-chart-container", labels, percentages, 100);
    }

    function hydrate() {
      const saved = localStorage.getItem("td_portable_students");
      if (saved) {
        students = JSON.parse(saved);
      }
      render();
      renderLessons();
      renderSchemes();
      renderResources();
      renderCalendar();
    }

    function render() {
      const tbody = document.getElementById("student-roster-rows");
      tbody.innerHTML = "";
      students.forEach(s => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 border-b border-slate-100/50";
        tr.innerHTML = " <td class='py-3 font-mono text-slate-500 font-bold'>" + (s.rollNo || "N/A") + "</td> " +
                     " <td class='py-3 font-bold text-slate-850'>" + s.name + "</td> " +
                     " <td class='py-3 text-right'><button onclick='viewStudentDetails(\"" + s.id + "\")' class='px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-bold rounded-xl border border-blue-200 transition-colors cursor-pointer'>Analyze</button></td>";
        tbody.appendChild(tr);
      });
      document.getElementById("pupil-count-label").innerText = students.length;
    }

    function addManualStudent() {
      const name = document.getElementById("new-std-name").value.trim();
      const roll = document.getElementById("new-std-roll").value.trim();
      if(!name || !roll) return alert("Write name and roll number first!");
      
      students.push({ id: "offline-" + Date.now(), name, rollNo: roll, grade: "Grade 8" });
      localStorage.setItem("td_portable_students", JSON.stringify(students));
      document.getElementById("new-std-name").value = "";
      document.getElementById("new-std-roll").value = "";
      render();
      alert("Added successfully to offline sandbox database!");
    }

    function renderLessons() {
      const container = document.getElementById("lessons-list-container");
      container.innerHTML = "";
      if (!lessons || lessons.length === 0) {
        container.innerHTML = "<p class='text-slate-400 text-xs italic text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200'>No lesson plans preloaded. Generate some in the online portal first.</p>";
        return;
      }
      lessons.forEach((l) => {
        const btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl border border-slate-200 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/20 text-left transition-all cursor-pointer block";
        btn.onclick = () => showLessonDetail(l);
        btn.innerHTML = "<p class='font-bold text-slate-800 text-xs truncate'>" + l.lessonTitle + "</p>" +
                        "<p class='text-[10px] text-slate-400 mt-1 font-semibold uppercase'>" + l.grade + " • " + l.subject + "</p>";
        container.appendChild(btn);
      });
    }

    function showLessonDetail(l) {
      const panel = document.getElementById("lesson-detail-panel");
      panel.innerHTML = 
        "<div class='space-y-4 text-xs text-left'>" +
          "<div class='border-b border-slate-100 pb-3'>" +
            "<span class='px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[9px] uppercase tracking-wider'>" + l.grade + " • " + l.subject + "</span>" +
            "<h3 class='text-base font-black text-slate-800 mt-2'>" + l.lessonTitle + "</h3>" +
            "<p class='text-slate-400 text-[10px] mt-1 font-mono'>Duration: " + (l.duration || "40 Minutes") + "</p>" +
          "</div>" +
          "<div class='space-y-3'>" +
            "<div>" +
              "<p class='font-bold text-slate-900 border-l-2 border-emerald-500 pl-1.5 uppercase text-[10px] tracking-wider mb-1'>Learning Outcomes</p>" +
              "<p class='text-slate-600 bg-slate-50 p-2.5 rounded-lg leading-relaxed'>" + (l.learningOutcomes || "No outcomes defined") + "</p>" +
            "</div>" +
            "<div>" +
              "<p class='font-bold text-slate-900 border-l-2 border-emerald-500 pl-1.5 uppercase text-[10px] tracking-wider mb-1'>Teaching Objectives</p>" +
              "<p class='text-slate-600 bg-slate-50 p-2.5 rounded-lg leading-relaxed'>" + (l.objectives || "No objectives defined") + "</p>" +
            "</div>" +
            "<div class='grid grid-cols-1 md:grid-cols-2 gap-3'>" +
              "<div>" +
                "<p class='font-bold text-slate-900 border-l-2 border-emerald-500 pl-1.5 uppercase text-[10px] tracking-wider mb-1'>Teaching Aids / Materials</p>" +
                "<p class='text-slate-600 bg-slate-50 p-2.5 rounded-lg'>" + (l.teachingMaterials || "No materials listed") + "</p>" +
              "</div>" +
              "<div>" +
                "<p class='font-bold text-slate-900 border-l-2 border-emerald-500 pl-1.5 uppercase text-[10px] tracking-wider mb-1'>Evaluation & Assessment</p>" +
                "<p class='text-slate-600 bg-slate-50 p-2.5 rounded-lg'>" + (l.assessment || "No assessment criteria defined") + "</p>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>";
    }

    function renderSchemes() {
      const container = document.getElementById("schemes-list-container");
      container.innerHTML = "";
      if (!schemes || schemes.length === 0) {
        container.innerHTML = "<p class='text-slate-400 text-xs italic text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200'>No schemes of work preloaded.</p>";
        return;
      }
      schemes.forEach((s) => {
        const btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl border border-slate-200 hover:border-rose-400 bg-slate-50 hover:bg-rose-50/20 text-left transition-all cursor-pointer block";
        btn.onclick = () => showSchemeDetail(s);
        btn.innerHTML = "<p class='font-bold text-slate-800 text-xs truncate'>" + s.grade + " " + s.subject + "</p>" +
                        "<p class='text-[10px] text-slate-400 mt-1 font-semibold uppercase'>" + s.term + " • " + (s.weeks ? s.weeks.length : 0) + " Weeks</p>";
        container.appendChild(btn);
      });
    }

    function showSchemeDetail(s) {
      const panel = document.getElementById("scheme-detail-panel");
      let tableRows = "";
      if (s.weeks && s.weeks.length > 0) {
        s.weeks.forEach(w => {
          tableRows += "<tr class='border-b border-slate-100 hover:bg-slate-50'>" +
            "<td class='py-2.5 font-bold text-slate-800 text-center'>Wk " + w.weekNo + "</td>" +
            "<td class='py-2.5 font-semibold text-slate-700'>" + (w.topic || "") + "</td>" +
            "<td class='py-2.5 text-slate-600'>" + (w.subtopic || "") + "</td>" +
            "<td class='py-2.5 text-slate-500'>" + (w.learningOutcomes || "") + "</td>" +
            "<td class='py-2.5 text-slate-500'>" + (w.assessmentMethods || "") + "</td>" +
          "</tr>";
        });
      } else {
        tableRows = "<tr><td colspan='5' class='py-4 text-center italic text-slate-400'>No weekly entries.</td></tr>";
      }

      panel.innerHTML = 
        "<div class='space-y-4 text-xs text-left'>" +
          "<div class='border-b border-slate-100 pb-3'>" +
            "<span class='px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[9px] uppercase tracking-wider'>" + s.term + " • " + s.curriculumVersion + "</span>" +
            "<h3 class='text-base font-black text-slate-800 mt-2'>" + s.grade + " " + s.subject + " Outline</h3>" +
          "</div>" +
          "<div class='overflow-x-auto'>" +
            "<table class='w-full text-left text-xs border-collapse'>" +
              "<thead>" +
                "<tr class='border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[9px]'>" +
                  "<th class='py-2 w-12 text-center'>Week</th>" +
                  "<th class='py-2'>Topic</th>" +
                  "<th class='py-2'>Subtopic</th>" +
                  "<th class='py-2'>Expected Outcomes</th>" +
                  "<th class='py-2'>Assessment</th>" +
                "</tr>" +
              "</thead>" +
              "<tbody>" +
                tableRows +
              "</tbody>" +
            "</table>" +
          "</div>" +
        "</div>";
    }

    function renderResources() {
      const container = document.getElementById("resources-list-container");
      container.innerHTML = "";
      if (!resources || resources.length === 0) {
        container.innerHTML = "<p class='text-slate-400 text-xs italic text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200'>No teaching notes or resources preloaded. Add some in the online portal first.</p>";
        return;
      }
      resources.forEach((r) => {
        const btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl border border-slate-200 hover:border-sky-400 bg-slate-50 hover:bg-sky-50/20 text-left transition-all cursor-pointer block";
        btn.onclick = () => showResourceDetail(r);
        btn.innerHTML = "<p class='font-bold text-slate-800 text-xs truncate'>" + (r.title || "Untitled Notes") + "</p>" +
                        "<p class='text-[10px] text-slate-400 mt-1 font-semibold uppercase'>" + (r.category || "Notes") + " • " + (r.grade || "General") + "</p>";
        container.appendChild(btn);
      });
    }

    function showResourceDetail(r) {
      const panel = document.getElementById("resource-detail-panel");
      panel.innerHTML = 
        "<div class='space-y-4 text-xs text-left'>" +
          "<div class='border-b border-slate-100 pb-3'>" +
            "<span class='px-2 py-0.5 bg-sky-100 text-sky-800 rounded font-bold text-[9px] uppercase tracking-wider'>" + (r.category || "Notes") + " • " + (r.grade || "General") + " • " + (r.subject || "General") + "</span>" +
            "<h3 class='text-base font-black text-slate-800 mt-2'>" + (r.title || "Untitled Notes") + "</h3>" +
            (r.topic ? "<p class='text-slate-400 text-[10px] mt-1 font-semibold uppercase'>Topic: " + r.topic + "</p>" : "") +
          "</div>" +
          "<div class='space-y-3'>" +
            "<div>" +
              "<p class='font-bold text-slate-900 border-l-2 border-sky-500 pl-1.5 uppercase text-[10px] tracking-wider mb-2'>Content Details</p>" +
              "<div class='text-slate-600 bg-slate-50 p-4 rounded-xl leading-relaxed whitespace-pre-wrap font-sans text-xs border border-slate-150'>" + (r.content || "No content details provided") + "</div>" +
            "</div>" +
          "</div>" +
        "</div>";
    }

    function renderCalendar() {
      const container = document.getElementById("calendar-list-container");
      container.innerHTML = "";
      if (!calendar || calendar.length === 0) {
        container.innerHTML = "<p class='text-slate-400 text-xs italic text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200'>Your planner timeline is currently empty.</p>";
        return;
      }
      calendar.forEach(e => {
        const div = document.createElement("div");
        div.className = "flex gap-4 p-4 rounded-2xl border border-slate-150 bg-slate-50/50 hover:bg-slate-50 transition-all text-xs text-left";
        
        let dateStr = "Upcoming";
        if (e.date) {
          const d = new Date(e.date);
          dateStr = d.toLocaleDateString([], { month: "short", day: "numeric", weekday: "short" });
        }
        
        div.innerHTML = 
          "<div class='w-20 text-center flex-shrink-0 bg-white p-2 rounded-xl border border-slate-200 flex flex-col justify-center'>" +
            "<span class='font-black text-indigo-600 uppercase text-[9px] tracking-wider leading-none'>" + (dateStr.split(' ')[0] || "Agenda") + "</span>" +
            "<span class='font-black text-slate-800 text-sm mt-0.5 leading-none'>" + (dateStr.split(' ')[1] || "") + "</span>" +
          "</div>" +
          "<div class='space-y-1 flex-1'>" +
            "<p class='font-bold text-slate-800 text-xs'>" + (e.title || "Untitled Task") + "</p>" +
            "<p class='text-slate-500 text-[11px] leading-relaxed'>" + (e.description || "Classroom session instruction.") + "</p>" +
            (e.subject ? "<span class='inline-block mt-1 px-1.5 py-0.5 bg-slate-200 text-slate-700 text-[9px] font-bold rounded'>" + e.subject + "</span>" : "") +
          "</div>";
        container.appendChild(div);
      });
    }

    function copyOfflineJSON() {
      const bundle = { profile, students, assessments, marks, schemes, lessons, calendar, resources, timestamp: new Date().toISOString() };
      navigator.clipboard.writeText(JSON.stringify(bundle, null, 2)).then(() => {
        alert("Copied full database JSON to clipboard! You can paste this back inside the TeacherDesk online portal.");
      });
    }

    hydrate();
  </script>
</body>
</html>`;
