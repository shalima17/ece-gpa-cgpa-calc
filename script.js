const GRADE_MAP = {
  "O":  { min: 91, max: 100, marks: "91\u2013100", point: 10, counted: true },
  "A+": { min: 81, max: 90,  marks: "81\u201390",  point: 9,  counted: true },
  "A":  { min: 71, max: 80,  marks: "71\u201380",  point: 8,  counted: true },
  "B+": { min: 61, max: 70,  marks: "61\u201370",  point: 7,  counted: true },
  "B":  { min: 51, max: 60,  marks: "51\u201360",  point: 6,  counted: true },
  "C":  { min: 41, max: 50,  marks: "41\u201350",  point: 5,  counted: true },
  "RA": { min: 0,  max: 39,  marks: "Below 40",    point: 0,  counted: false },
  "SA": { min: null, max: null, marks: "Attendance shortage", point: 0, counted: false },
  "W":  { min: null, max: null, marks: "Withdrawal",          point: 0, counted: false }
};

const CATEGORY_NAMES = {
  HSMC: "Humanities & Social Sciences", BSC: "Basic Science", ESC: "Engineering Science",
  PCC: "Professional Core", PEC: "Professional Elective", OEC: "Open Elective",
  EEC: "Employability Enhancement", MC: "Mandatory (non-credit)", NCC: "NCC"
};

const CURRICULUM = {
  1: { name: "Semester I", officialCredits: 22, courses: [
    { code: "IP3151", title: "Induction Programme", category: "-", credits: 0, type: "noncredit" },
    { code: "HS3152", title: "Professional English - I", category: "HSMC", credits: 3, type: "theory" },
    { code: "MA3151", title: "Matrices and Calculus", category: "BSC", credits: 4, type: "theory" },
    { code: "PH3151", title: "Engineering Physics", category: "BSC", credits: 3, type: "theory" },
    { code: "CY3151", title: "Engineering Chemistry", category: "BSC", credits: 3, type: "theory" },
    { code: "GE3151", title: "Problem Solving and Python Programming", category: "ESC", credits: 3, type: "theory" },
    { code: "GE3152", title: "Heritage of Tamils", category: "HSMC", credits: 1, type: "theory" },
    { code: "GE3171", title: "Problem Solving and Python Programming Laboratory", category: "ESC", credits: 2, type: "practical" },
    { code: "BS3171", title: "Physics and Chemistry Laboratory", category: "BSC", credits: 2, type: "practical" },
    { code: "GE3172", title: "English Laboratory (Skill Based Course)", category: "EEC", credits: 1, type: "practical" }
  ]},
  2: { name: "Semester II", officialCredits: 26,
    note: "NCC Credit Course Level 1 is for NCC students only. Its grade is recorded in the mark sheet but is not considered for CGPA, so it is excluded here.",
    courses: [
    { code: "HS3252", title: "Professional English - II", category: "HSMC", credits: 2, type: "theory" },
    { code: "MA3251", title: "Statistics and Numerical Methods", category: "BSC", credits: 4, type: "theory" },
    { code: "PH3254", title: "Physics for Electronics Engineering", category: "BSC", credits: 3, type: "theory" },
    { code: "BE3254", title: "Electrical and Instrumentation Engineering", category: "ESC", credits: 3, type: "theory" },
    { code: "GE3251", title: "Engineering Graphics", category: "ESC", credits: 4, type: "theory" },
    { code: "EC3251", title: "Circuit Analysis", category: "PCC", credits: 4, type: "theory" },
    { code: "GE3252", title: "Tamils and Technology", category: "HSMC", credits: 1, type: "theory" },
    { code: "", title: "NCC Credit Course Level 1", category: "NCC", credits: 2, type: "ncc" },
    { code: "GE3271", title: "Engineering Practices Laboratory", category: "ESC", credits: 2, type: "practical" },
    { code: "EC3271", title: "Circuits Analysis Laboratory", category: "PCC", credits: 1, type: "practical" },
    { code: "GE3272", title: "Communication Laboratory / Foreign Language (Skill Based Course)", category: "EEC", credits: 2, type: "practical" }
  ]},
  3: { name: "Semester III", officialCredits: 25, courses: [
    { code: "MA3355", title: "Random Processes and Linear Algebra", category: "BSC", credits: 4, type: "theory" },
    { code: "CS3353", title: "C Programming and Data Structures", category: "ESC", credits: 3, type: "theory" },
    { code: "EC3354", title: "Signals and Systems", category: "PCC", credits: 4, type: "theory" },
    { code: "EC3353", title: "Electronic Devices and Circuits", category: "PCC", credits: 3, type: "theory" },
    { code: "EC3351", title: "Control Systems", category: "PCC", credits: 3, type: "theory" },
    { code: "EC3352", title: "Digital Systems Design", category: "PCC", credits: 4, type: "theory" },
    { code: "EC3361", title: "Electronic Devices and Circuits Laboratory", category: "PCC", credits: 1.5, type: "practical" },
    { code: "CS3362", title: "C Programming and Data Structures Laboratory", category: "PCC", credits: 1.5, type: "practical" },
    { code: "GE3361", title: "Professional Development (Skill Based Course)", category: "EEC", credits: 1, type: "practical" }
  ]},
  4: { name: "Semester IV", officialCredits: 22,
    note: "NCC Credit Course Level 2 is for NCC students only and is not considered for CGPA, so it is excluded here.",
    courses: [
    { code: "EC3452", title: "Electromagnetic Fields", category: "PCC", credits: 3, type: "theory" },
    { code: "EC3401", title: "Networks and Security", category: "PCC", credits: 4, type: "theory" },
    { code: "EC3451", title: "Linear Integrated Circuits", category: "PCC", credits: 3, type: "theory" },
    { code: "EC3492", title: "Digital Signal Processing", category: "PCC", credits: 4, type: "theory" },
    { code: "EC3491", title: "Communication Systems", category: "PCC", credits: 3, type: "theory" },
    { code: "GE3451", title: "Environmental Sciences and Sustainability", category: "BSC", credits: 2, type: "theory" },
    { code: "", title: "NCC Credit Course Level 2", category: "NCC", credits: 3, type: "ncc" },
    { code: "EC3461", title: "Communication Systems Laboratory", category: "PCC", credits: 1.5, type: "practical" },
    { code: "EC3462", title: "Linear Integrated Circuits Laboratory", category: "PCC", credits: 1.5, type: "practical" }
  ]},
  5: { name: "Semester V", officialCredits: 21, courses: [
    { code: "EC3501", title: "Wireless Communication", category: "PCC", credits: 4, type: "theory" },
    { code: "EC3552", title: "VLSI and Chip Design", category: "PCC", credits: 3, type: "theory" },
    { code: "EC3551", title: "Transmission lines and RF Systems", category: "PCC", credits: 3, type: "theory" },
    { code: "", title: "Professional Elective I", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Professional Elective II", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Professional Elective III", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Mandatory Course-I", category: "MC", credits: 0, type: "noncredit", pool: "MC1" },
    { code: "EC3561", title: "VLSI Laboratory", category: "PCC", credits: 2, type: "practical" }
  ]},
  6: { name: "Semester VI", officialCredits: 20,
    note: "NCC Credit Course Level 3 is for NCC students only and is not considered for CGPA, so it is excluded here.",
    courses: [
    { code: "ET3491", title: "Embedded Systems and IOT Design", category: "PCC", credits: 4, type: "theory" },
    { code: "CS3491", title: "Artificial Intelligence and Machine Learning", category: "ESC", credits: 4, type: "theory" },
    { code: "", title: "Open Elective - I", category: "OEC", credits: 3, type: "elective", pool: "OEC1" },
    { code: "", title: "Professional Elective IV", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Professional Elective V", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Professional Elective VI", category: "PEC", credits: 3, type: "elective", pool: "PEC" },
    { code: "", title: "Mandatory Course-II", category: "MC", credits: 0, type: "noncredit", pool: "MC2" },
    { code: "", title: "NCC Credit Course Level 3", category: "NCC", credits: 3, type: "ncc" }
  ]},
  7: { name: "Semester VII", officialCredits: 16,
    note: "As per the PDF, if you do your internship in Semester VII, the Semester VII and VIII courses are swapped. Pick the semester that matches the courses you actually took.",
    courses: [
    { code: "GE3791", title: "Human Values and Ethics", category: "HSMC", credits: 2, type: "theory" },
    { code: "", title: "Elective - Management", category: "HSMC", credits: 3, type: "elective", pool: "MGT" },
    { code: "", title: "Open Elective - II", category: "OEC", credits: 3, type: "elective", pool: "OEC2" },
    { code: "", title: "Open Elective - III", category: "OEC", credits: 3, type: "elective", pool: "OEC3" },
    { code: "", title: "Open Elective - IV", category: "OEC", credits: 3, type: "elective", pool: "OEC4" },
    { code: "EC3711", title: "Summer internship", category: "EEC", credits: 2, type: "practical" }
  ]},
  8: { name: "Semester VIII", officialCredits: 10,
    note: "As per the PDF, Semester VII and VIII courses are swapped if the internship is done in Semester VII.",
    courses: [
    { code: "EC3811", title: "Project Work / Internship", category: "EEC", credits: 10, type: "practical" }
  ]}
};

const ELECTIVE_POOLS = {
  PEC: { groups: [
    { label: "Vertical 1: Semiconductor Chip Design and Testing", items: [
      ["CEC363","Wide Bandgap Devices"],["CEC361","Validation and Testing Technology"],["CEC370","Low Power IC Design"],
      ["CEC362","VLSI Testing and Design For Testability"],["CEC342","Mixed Signal IC Design Testing"],["CEC334","Analog IC Design"]]},
    { label: "Vertical 2: Signal Processing", items: [
      ["CEC332","Advanced Digital Signal Processing"],["CEC366","Image Processing"],["CEC356","Speech Processing"],
      ["CEC355","Software Defined Radio"],["CEC337","DSP Architecture and Programming"],["CCS338","Computer Vision"]]},
    { label: "Vertical 3: RF Technologies", items: [
      ["CEC350","RF Transceivers"],["CEC353","Signal Integrity"],["CEC335","Antenna Design"],
      ["CEC341","MICs and RF System Design"],["CEC338","EMI/EMC Pre Compliance Testing"],["CEC349","RFID System Design and Testing"]]},
    { label: "Vertical 4: Bio Medical Technologies", items: [
      ["CBM370","Wearable Devices"],["CBM352","Human Assist Devices"],["CBM368","Therapeutic Equipment"],
      ["CBM355","Medical Imaging Systems"],["CBM342","Brain Computer Interface and Applications"],["CBM341","Body Area Networks"]]},
    { label: "Vertical 5: Underwater Technologies", items: [
      ["CEC359","Underwater Instrumentation System"],["CEC358","Underwater Imaging Systems and Image Processing"],
      ["CEC357","Underwater Communication"],["CEC344","Ocean Observation Systems"],
      ["CEC360","Underwater Navigation Systems"],["CEC343","Ocean Acoustics"]]},
    { label: "Vertical 6: Sensor Technologies and IoT", items: [
      ["CEC369","IoT Processors"],["CEC368","IoT Based Systems Design"],["CEC365","Wireless Sensor Network Design"],
      ["CEC367","Industrial IoT and Industry 4.0"],["CEC340","MEMS Design"],["CEC339","Fundamentals of Nanoelectronics"]]},
    { label: "Vertical 7: Space Technologies", items: [
      ["CEC347","Radar Technologies"],["CEC336","Avionics Systems"],["CEC346","Positioning and Navigation Systems"],
      ["CEC352","Satellite Communication"],["CEC348","Remote Sensing"],["CEC351","Rocketry and Space Mechanics"]]},
    { label: "Vertical 8: High Speed Communications", items: [
      ["CEC345","Optical Communication & Networks"],["CEC364","Wireless Broad Band Networks"],
      ["CEC331","4G/5G Communication Networks"],["CEC354","Software Defined Networks"],
      ["CEC371","Massive MIMO Networks"],["CEC333","Advanced Wireless Communication Techniques"]]}
  ]},
  MGT: { items: [
    ["GE3751","Principles of Management"],["GE3752","Total Quality Management"],
    ["GE3753","Engineering Economics and Financial Accounting"],["GE3754","Human Resource Management"],
    ["GE3755","Knowledge Management"],["GE3792","Industrial Management"]]},
  MC1: { items: [
    ["MX3081","Introduction to Women and Gender Studies"],["MX3082","Elements of Literature"],
    ["MX3083","Film Appreciation"],["MX3084","Disaster Risk Reduction and Management"]]},
  MC2: { items: [
    ["MX3085","Well Being with Traditional Practices - Yoga, Ayurveda and Siddha"],
    ["MX3086","History of Science and Technology in India"],
    ["MX3087","Political and Economic Thought for a Humane Society"],
    ["MX3088","State, Nation Building and Politics in India"],["MX3089","Industrial Safety"]]},
  OEC1: { items: [
    ["OAS351","Space Science"],["OIE351","Introduction to Industrial Engineering"],["OBT351","Food, Nutrition and Health"],
    ["OCE351","Environmental and Social Impact Assessment"],["OEE351","Renewable Energy System"],
    ["OEI351","Introduction to Industrial Instrumentation and Control"],["OMA351","Graph Theory"],
    ["CCS355","Neural Networks and Deep Learning"],["CCW332","Digital Marketing"]]},
  OEC2: { items: [
    ["OIE352","Resource Management Techniques"],["OMG351","Fintech Regulation"],["OFD351","Holistic Nutrition"],
    ["AI3021","IT in Agricultural System"],["OEI352","Introduction to Control Engineering"],
    ["OPY351","Pharmaceutical Nanotechnology"],["OAE351","Aviation Management"],["CCS342","DevOps"],
    ["CCS361","Robotic Process Automation"]]},
  OEC3: { items: [
    ["OHS351","English for Competitive Examinations"],["OMG352","NGOs and Sustainable Development"],
    ["OMG353","Democracy and Good Governance"],["CME365","Renewable Energy Technologies"],
    ["OME354","Applied Design Thinking"],["MF3003","Reverse Engineering"],["OPR351","Sustainable Manufacturing"],
    ["AU3791","Electric and Hybrid Vehicles"],["OAS352","Space Engineering"],["OIM351","Industrial Management"],
    ["OIE354","Quality Engineering"],["OSF351","Fire Safety Engineering"],
    ["OML351","Introduction to Non-Destructive Testing"],["OMR351","Mechatronics"],["ORA351","Foundation of Robotics"],
    ["OAE352","Fundamentals of Aeronautical Engineering"],["OGI351","Remote Sensing Concepts"],
    ["OAI351","Urban Agriculture"],["OEN351","Drinking Water Supply and Treatment"],
    ["OEE352","Electric Vehicle Technology"],["OEI353","Introduction to PLC Programming"],["OCH351","Nano Technology"],
    ["OCH352","Functional Materials"],["OFD352","Traditional Indian Foods"],["OFD353","Introduction to Food Processing"],
    ["OPY352","IPR for Pharma Industry"],["OTT351","Basics of Textile Finishing"],
    ["OTT352","Industrial Engineering for Garment Industry"],["OTT353","Basics of Textile Manufacture"],
    ["OPE351","Introduction to Petroleum Refining and Petrochemicals"],["CPE334","Energy Conservation and Management"],
    ["OPT351","Basics of Plastics Processing"],["CBM348","Foundation Skills in Integrated Product Development"],
    ["CBM333","Assistive Technology"],["OMA352","Operations Research"],["OMA353","Algebra and Number Theory"],
    ["OMA354","Linear Algebra"],["OCE353","Lean Concepts, Tools and Practices"],
    ["OBT352","Basics of Microbial Technology"],["OBT353","Basics of Biomolecules"],
    ["OBT354","Fundamentals of Cell and Molecular Biology"]]},
  OEC4: { items: [
    ["OHS352","Project Report Writing"],["OMA355","Advanced Numerical Methods"],["OMA356","Random Processes"],
    ["OMA357","Queuing and Reliability Modelling"],["OMG354","Production and Operations Management for Entrepreneurs"],
    ["OMG355","Multivariate Data Analysis"],["OME352","Additive Manufacturing"],["CME343","New Product Development"],
    ["OME355","Industrial Design & Rapid Prototyping Techniques"],["MF3010","Micro and Precision Engineering"],
    ["OMF354","Cost Management of Engineering Projects"],["AU3002","Batteries and Management system"],
    ["AU3008","Sensors and Actuators"],["OAS353","Space Vehicles"],["OIM352","Management Science"],
    ["OIM353","Production Planning and Control"],["OIE353","Operations Management"],["OSF352","Industrial Hygiene"],
    ["OSF353","Chemical Process Safety"],["OML352","Electrical, Electronic and Magnetic materials"],
    ["OML353","Nanomaterials and applications"],["OMR352","Hydraulics and Pneumatics"],["OMR353","Sensors"],
    ["ORA352","Concepts in Mobile Robots"],["MV3501","Marine Propulsion"],["OMV351","Marine Merchant Vessels"],
    ["OMV352","Elements of Marine Engineering"],["CRA332","Drone Technologies"],
    ["OGI352","Geographical Information System"],["OAI352","Agriculture Entrepreneurship Development"],
    ["OEN352","Biodiversity Conservation"],["OEE353","Introduction to control systems"],
    ["OEI354","Introduction to Industrial Automation Systems"],["OCH353","Energy Technology"],
    ["OCH354","Surface Science"],["OFD354","Fundamentals of Food Engineering"],
    ["OFD355","Food Safety and Quality Regulations"],["OPY353","Nutraceuticals"],
    ["OTT354","Basics of Dyeing and Printing"],["FT3201","Fibre Science"],
    ["OTT355","Garment Manufacturing Technology"],["OPE353","Industrial safety"],
    ["OPE354","Unit Operations in Petro Chemical Industries"],["OPT352","Plastic Materials for Engineers"],
    ["OPT353","Properties and Testing of Plastics"],["CBM370","Wearable Devices"],["CBM356","Medical Informatics"],
    ["OCE354","Basics of Integrated Water Resources Management"],["OBT355","Biotechnology for Waste Management"],
    ["OBT356","Lifestyle Diseases"],["OBT357","Biotechnology in Health Care"]]}
};

function countsForGPA(course) {
  return course.type !== "noncredit" && course.type !== "ncc" && course.credits > 0;
}

function verifyCurriculumCredits() {
  let total = 0;
  Object.keys(CURRICULUM).forEach(function (k) {
    const s = CURRICULUM[k];
    const sum = s.courses.filter(countsForGPA).reduce(function (a, c) { return a + c.credits; }, 0);
    total += sum;
    if (sum !== s.officialCredits) console.warn(s.name + ": data gives " + sum + " credits, PDF says " + s.officialCredits);
  });
  if (total !== 162) console.warn("Total credits " + total + " does not match 162");
  return total;
}

function calculateGPA(rows) {
  let totalCredits = 0, totalPoints = 0;
  rows.forEach(function (r) {
    totalCredits += r.credits;
    totalPoints += r.credits * r.gradePoint;
  });
  return { totalCredits: totalCredits, totalPoints: totalPoints, gpa: totalCredits > 0 ? totalPoints / totalCredits : 0 };
}

/* ---------------------------------------------------------------------
   4. CGPA CALCULATION  (kept separate so the formula is easy to change)
   entries: [{ semester: 1..8, gpa: Number, credits: Number }]
   CGPA_METHOD:
     "credit-weighted" -> sum(GPA x semester credits) / sum(semester credits)
                          (matches the usual Anna University CGPA)
     "simple"          -> plain average of the semester GPAs
   --------------------------------------------------------------------- */
const CGPA_METHOD = "credit-weighted";

function calculateCGPA(entries) {
  if (!entries.length) return 0;
  if (CGPA_METHOD === "simple") {
    return entries.reduce(function (a, e) { return a + e.gpa; }, 0) / entries.length;
  }
  let weighted = 0, credits = 0;
  entries.forEach(function (e) { weighted += e.gpa * e.credits; credits += e.credits; });
  return credits > 0 ? weighted / credits : 0;
}

/* ---------------------------------------------------------------------
   5. UI LOGIC
   --------------------------------------------------------------------- */
function fmt2(n) { return (Math.round((n + Number.EPSILON) * 100) / 100).toFixed(2); }
function fmtNum(n) { return String(+n.toFixed(2)); }
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}
function $(sel) { return document.querySelector(sel); }
function roman(n) { return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n]; }

const TYPE_LABEL = { theory: "Theory", practical: "Practical", elective: "Elective", noncredit: "Non-credit", ncc: "NCC" };

function showView(name) {
  document.querySelectorAll("[data-view]").forEach(function (el) { el.hidden = el.dataset.view !== name; });
  window.scrollTo(0, 0);
}

function showErrors(box, messages) {
  if (!messages.length) { box.hidden = true; box.innerHTML = ""; return; }
  box.hidden = false;
  box.innerHTML = messages.length === 1
    ? esc(messages[0])
    : "Please fix the following:<ul>" + messages.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>";
}

/* ---- GPA view ---- */
function gradeOptionsHTML() {
  return '<option value="">Select grade</option>' + Object.keys(GRADE_MAP).map(function (g) {
    return '<option value="' + g + '">' + g + " (" + GRADE_MAP[g].marks + ")</option>";
  }).join("");
}

function poolOptionsHTML(poolName) {
  const pool = ELECTIVE_POOLS[poolName];
  const opt = function (i) { return '<option value="' + esc(i[0] + " \u2013 " + i[1]) + '">' + esc(i[0] + " \u2013 " + i[1]) + "</option>"; };
  let html = '<option value="">Choose your course (optional)</option>';
  if (pool.groups) {
    pool.groups.forEach(function (g) { html += '<optgroup label="' + esc(g.label) + '">' + g.items.map(opt).join("") + "</optgroup>"; });
  } else {
    html += pool.items.map(opt).join("");
  }
  return html;
}

function updateGradePoint(i) {
  const g = $("#grade-" + i).value;
  const el = $("#gp-" + i);
  const e = GRADE_MAP[g];
  el.textContent = e ? "Grade point: " + e.point + (e.counted ? "" : " (not counted in GPA)") : "Grade point: \u2013";
}

/* Choosing a grade shows its grade point. */
function onGradeChange(i) {
  $("#row-" + i).classList.remove("error");
  updateGradePoint(i);
}

function renderCourses(semNo) {
  const sem = CURRICULUM[semNo];
  $("#sem-title").textContent = sem.name + " \u2013 " + sem.courses.filter(countsForGPA).reduce(function (a, c) { return a + c.credits; }, 0) + " credits";
  const note = $("#sem-note");
  note.hidden = !sem.note;
  note.textContent = sem.note || "";

  let html = '<div class="course-head"><div>Course</div><div>Subject</div><div>Credits</div><div>Grade</div></div>';
  sem.courses.forEach(function (c, i) {
    const counted = countsForGPA(c);
    const tags = '<span class="tag">' + esc(c.category === "-" ? TYPE_LABEL[c.type] : c.category + " \u00B7 " + TYPE_LABEL[c.type]) + "</span>" +
      (counted ? "" : '<span class="tag warn">Not counted in GPA/CGPA</span>');
    const pick = c.pool
      ? '<div class="pick"><select id="pick-' + i + '" aria-label="Choose course for ' + esc(c.title) + '">' + poolOptionsHTML(c.pool) + "</select></div>" : "";
    const gradeCell = counted
      ? '<div class="grade-cell">' +
        '<select id="grade-' + i + '" aria-label="Grade for ' + esc(c.title) + '">' + gradeOptionsHTML() + "</select>" +
        '<div class="gp-line" id="gp-' + i + '">Grade point: \u2013</div></div>'
      : '<span class="not-counted">No grade needed</span>';
    html += '<div class="course-row' + (counted ? "" : " excluded") + '" id="row-' + i + '">' +
      '<div class="code">' + esc(c.code || (c.type === "ncc" ? "NCC" : "Elective")) + "</div>" +
      '<div class="subject"><div class="title">' + esc(c.title) + '</div><div class="tags">' + tags + "</div>" + pick + "</div>" +
      '<div class="credits"><span class="m-label">Credits: </span>' + (c.type === "ncc" ? c.credits + "*" : fmtNum(c.credits)) + "</div>" +
      '<div class="grade">' + gradeCell + "</div></div>";
  });
  $("#gpa-courses").innerHTML = html;
  sem.courses.forEach(function (c, i) {
    if (!countsForGPA(c)) return;
    $("#grade-" + i).addEventListener("change", function () { onGradeChange(i); });
  });
  $("#gpa-result").hidden = true;
  showErrors($("#gpa-errors"), []);
}

function onCalculateGPA() {
  const semNo = $("#semester-select").value;
  const sem = CURRICULUM[semNo];
  const rows = [], missing = [], breakdown = [], excluded = [];
  sem.courses.forEach(function (c, i) {
    const rowEl = $("#row-" + i);
    rowEl.classList.remove("error");
    if (!countsForGPA(c)) return;
    const label = c.code || c.title;
    const grade = $("#grade-" + i).value;
    if (!GRADE_MAP[grade]) { missing.push(label); rowEl.classList.add("error"); return; }
    const entry = GRADE_MAP[grade];
    const picked = c.pool ? $("#pick-" + i).value : "";
    const name = picked || c.title;
    if (!entry.counted) {                       // RA / SA / W: left out completely
      excluded.push({ code: c.code || "", name: name, credits: c.credits, grade: grade });
      return;
    }
    rows.push({ credits: c.credits, gradePoint: entry.point });
    breakdown.push({ code: c.code || "", name: name, credits: c.credits, grade: grade, point: entry.point });
  });

  if (missing.length) {
    $("#gpa-result").hidden = true;
    showErrors($("#gpa-errors"), ["Please select a grade for every course before calculating. Missing: " + missing.join(", ") + "."]);
    const first = document.querySelector(".course-row.error");
    if (first) first.scrollIntoView({ block: "center" });
    return;
  }
  if (!rows.length) {
    $("#gpa-result").hidden = true;
    showErrors($("#gpa-errors"), ["Every course is RA, SA or W, so no credits are left to calculate a GPA from."]);
    return;
  }
  showErrors($("#gpa-errors"), []);

  const r = calculateGPA(rows);
  let html = '<div class="summary"><div><div class="big-label">' + esc(sem.name) + " GPA</div><div class=\"big-number\">" + fmt2(r.gpa) + "</div></div>" +
    "<dl><div><dt>Total Credits</dt><dd>" + fmtNum(r.totalCredits) + "</dd></div>" +
    "<div><dt>Total Grade Points</dt><dd>" + fmtNum(r.totalPoints) + "</dd></div>" +
    "<div><dt>GPA</dt><dd>" + fmt2(r.gpa) + "</dd></div></dl></div>" +
    '<h3>Calculation breakdown</h3><div class="table-scroll"><table><thead><tr><th>Course</th><th class="num">Credits</th>' +
    '<th>Grade</th><th class="num">Grade point</th><th class="num">Credits \u00D7 GP</th></tr></thead><tbody>';
  breakdown.forEach(function (b) {
    html += "<tr><td>" + esc((b.code ? b.code + " \u2013 " : "") + b.name) + '</td><td class="num">' + fmtNum(b.credits) + "</td><td>" + b.grade +
      '</td><td class="num">' + b.point + '</td><td class="num">' + fmtNum(b.credits * b.point) + "</td></tr>";
  });
  html += '<tr><th>Total</th><th class="num">' + fmtNum(r.totalCredits) + '</th><th></th><th></th><th class="num">' + fmtNum(r.totalPoints) + "</th></tr></tbody></table></div>" +
    '<p class="formula">GPA = Total Grade Points \u00F7 Total Credits = ' + fmtNum(r.totalPoints) + " \u00F7 " + fmtNum(r.totalCredits) + " = " + fmt2(r.gpa) + "</p>";
  if (excluded.length) {
    const exCredits = excluded.reduce(function (a, e) { return a + e.credits; }, 0);
    html += '<h3 style="margin-top:18px">Not counted</h3><div class="table-scroll"><table><thead><tr><th>Course</th><th class="num">Credits</th><th>Grade</th></tr></thead><tbody>' +
      excluded.map(function (e) {
        return "<tr><td>" + esc((e.code ? e.code + " \u2013 " : "") + e.name) + '</td><td class="num">' + fmtNum(e.credits) + "</td><td>" + e.grade + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      '<p class="formula">RA, SA and W courses are left out completely, including their credits (' + fmtNum(exCredits) +
      " credits not counted).</p>";
  }
  const box = $("#gpa-result");
  box.innerHTML = html;
  box.hidden = false;
  box.scrollIntoView({ behavior: "auto", block: "start" });
}

function onResetGPA() { renderCourses($("#semester-select").value); }

/* ---- CGPA view ---- */
function renderCGPARows() {
  let html = "";
  Object.keys(CURRICULUM).forEach(function (k) {
    const sem = CURRICULUM[k];
    html += '<div class="sem-row" id="sem-row-' + k + '"><label class="check"><input type="checkbox" id="done-' + k + '">' +
      "<span>" + esc(sem.name) + " <small>(" + sem.officialCredits + " credits)</small></span></label>" +
      '<input type="number" id="gpa-' + k + '" min="0" max="10" step="0.01" inputmode="decimal" placeholder="GPA" disabled aria-label="GPA for ' + esc(sem.name) + '"></div>';
  });
  $("#cgpa-rows").innerHTML = html;
  Object.keys(CURRICULUM).forEach(function (k) {
    $("#done-" + k).addEventListener("change", function (e) {
      const input = $("#gpa-" + k);
      input.disabled = !e.target.checked;
      if (e.target.checked) input.focus(); else { input.value = ""; $("#sem-row-" + k).classList.remove("error"); }
    });
  });
}

function onCalculateCGPA() {
  const errors = [], entries = [];
  Object.keys(CURRICULUM).forEach(function (k) {
    const row = $("#sem-row-" + k);
    row.classList.remove("error");
    if (!$("#done-" + k).checked) return;
    const sem = CURRICULUM[k];
    const name = sem.name;
    let bad = false;

    const raw = $("#gpa-" + k).value.trim();
    const val = Number(raw);
    if (raw === "") { errors.push(name + ": enter your GPA."); bad = true; }
    else if (!isFinite(val) || val < 0 || val > 10) { errors.push(name + ": GPA must be a number between 0 and 10."); bad = true; }

    const credits = sem.officialCredits;

    if (bad) row.classList.add("error");
    else entries.push({ semester: Number(k), gpa: val, credits: credits });
  });
  const anyChecked = document.querySelectorAll('#cgpa-rows input[type="checkbox"]:checked').length > 0;
  if (!anyChecked) errors.push("Tick at least one completed semester and enter its GPA.");

  const box = $("#cgpa-result");
  if (errors.length) { box.hidden = true; showErrors($("#cgpa-errors"), errors); return; }
  showErrors($("#cgpa-errors"), []);

  const cgpa = calculateCGPA(entries);
  const method = CGPA_METHOD === "simple" ? "Average of the semester GPAs entered."
    : "Each semester GPA weighted by that semester's credits.";
  box.innerHTML = '<div class="big-label">Overall CGPA</div><div class="big-number">' + fmt2(cgpa) + "</div>" +
    '<h3 style="margin-top:18px">Semester GPAs used</h3><ul class="cgpa-lines">' +
    entries.map(function (e) { return "<li><span>Semester " + roman(e.semester) + "</span><strong>" + fmt2(e.gpa) + "</strong></li>"; }).join("") +
    '<li><span><strong>Overall CGPA</strong></span><strong>' + fmt2(cgpa) + "</strong></li></ul>" +
    '<p class="formula">Method: ' + method + "</p>";
  box.hidden = false;
  box.scrollIntoView({ behavior: "auto", block: "start" });
}

function onResetCGPA() {
  renderCGPARows();
  $("#cgpa-result").hidden = true;
  showErrors($("#cgpa-errors"), []);
}

/* ---- Start-up ---- */
function init() {
  verifyCurriculumCredits();

  const select = $("#semester-select");
  select.innerHTML = '<option value="">Choose a semester</option>' + Object.keys(CURRICULUM).map(function (k) {
    return '<option value="' + k + '">' + esc(CURRICULUM[k].name) + "</option>";
  }).join("");
  select.addEventListener("change", function () {
    if (!select.value) { $("#gpa-area").hidden = true; return; }
    $("#gpa-area").hidden = false;
    renderCourses(select.value);
  });

  $("#grade-scale-body").innerHTML = Object.keys(GRADE_MAP).map(function (g) {
    const e = GRADE_MAP[g];
    return "<tr" + (e.counted ? "" : ' class="not-counted-row"') + "><td><strong>" + g + "</strong></td><td>" + e.marks +
      '</td><td class="num">' + e.point + "</td><td>" + (e.counted ? "Yes" : "No") + "</td></tr>";
  }).join("");

  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { showView(b.dataset.go); });
  });
  $("#gpa-calc").addEventListener("click", onCalculateGPA);
  $("#gpa-reset").addEventListener("click", onResetGPA);
  $("#cgpa-calc").addEventListener("click", onCalculateCGPA);
  $("#cgpa-reset").addEventListener("click", onResetCGPA);
  renderCGPARows();
}

document.addEventListener("DOMContentLoaded", init);
