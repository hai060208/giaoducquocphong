const lessons = [
  {
    id: 1,
    title: "Bài 1 — Giới thiệu về học quân sự",
    subtitle: "Nội quy, tác phong và chuẩn bị ban đầu",
    content: `
      <h3>Mục tiêu</h3>
      <ul>
        <li>Hiểu được tầm quan trọng của học quân sự.</li>
        <li>Nắm được nội quy lớp học, đồng phục và lễ nghi cơ bản.</li>
      </ul>
      <h3>Nội dung tóm tắt</h3>
      <p>Học quân sự giúp rèn luyện tính kỷ luật, sự đoàn kết và ý chí vượt khó.</p>
    `
  },
  {
    id: 2,
    title: "Bài 2 — Kỹ năng sơ cứu cơ bản",
    subtitle: "Xử lý vết thương nhỏ và an toàn cá nhân",
    content: `
      <h3>Mục tiêu</h3>
      <ul>
        <li>Nắm vững kỹ năng sơ cứu ban đầu.</li>
        <li>Biết cách xử lý các tình huống nguy hiểm trong huấn luyện.</li>
      </ul>
      <h3>Nội dung tóm tắt</h3>
      <p>An toàn luôn là ưu tiên. Học cách đội mũ bảo hộ, kiểm tra dây đeo, và thực hành sơ cứu vết thương nhỏ, cầm máu cơ bản.</p>
    `
  },
  {
    id: 3,
    title: "Bài 3 — Kỹ năng tác chiến cá nhân cơ bản",
    subtitle: "Tổ chức đội hình, di chuyển an toàn, thông tin liên lạc",
    content: `
      <h3>Mục tiêu</h3>
      <ul>
        <li>Nắm kỹ năng di chuyển đội nhóm an toàn.</li>
        <li>Biết sử dụng các tín hiệu liên lạc cơ bản.</li>
      </ul>
      <h3>Nội dung tóm tắt</h3>
      <p>Học cách di chuyển theo đội, giữ khoảng cách an toàn, giao tiếp bằng dấu hiệu tay và radio.</p>
    `
  },
  {
    id: 4,
    title: "Bài 4 — Kỹ năng lãnh đạo và làm việc nhóm",
    subtitle: "Nguyên tắc lãnh đạo, ra quyết định khi có áp lực",
    content: `
      <h3>Mục tiêu</h3>
      <ul>
        <li>Phát triển kỹ năng chỉ huy cơ bản.</li>
        <li>Hiểu cách phối hợp nhóm hiệu quả.</li>
      </ul>
      <h3>Nội dung tóm tắt</h3>
      <p>Lãnh đạo là nghệ thuật kết hợp thông tin, ra quyết định nhanh và truyền đạt rõ ràng.</p>
    `
  }
];

const STORAGE_KEY = "military_lessons_progress_v1";

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveProgress(obj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const state = {
  current: null,
  progress: loadProgress()
};

const lessonList = document.getElementById("lessonList");
const contentTitle = document.getElementById("contentTitle");
const contentSubtitle = document.getElementById("contentSubtitle");
const contentBody = document.getElementById("contentBody");
const overallProgress = document.getElementById("overallProgress");
const markDoneBtn = document.getElementById("markDoneBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetAllBtn = document.getElementById("resetAll");

function updateOverallProgress() {
  const doneCount = Object.values(state.progress).filter(v => v).length;
  const percent = Math.round((doneCount / lessons.length) * 100);
  overallProgress.textContent = percent + "%";
}

function makeLessonButton(lesson) {
  const btn = document.createElement("button");
  btn.className = "lesson-btn";
  btn.textContent = lesson.title;
  if (state.progress[lesson.id]) btn.classList.add("done");
  btn.onclick = () => openLesson(lesson.id);
  return btn;
}

function renderLessons() {
  lessonList.innerHTML = "";
  lessons.forEach(l => {
    lessonList.appendChild(makeLessonButton(l));
  });
  updateOverallProgress();
}

function openLesson(id) {
  const lesson = lessons.find(l => l.id === id);
  if (!lesson) return;
  state.current = id;
  contentTitle.textContent = lesson.title;
  contentSubtitle.textContent = lesson.subtitle;
  contentBody.innerHTML = lesson.content;

  prevBtn.disabled = id === 1;
  nextBtn.disabled = id === lessons.length;
}

markDoneBtn.onclick = () => {
  if (!state.current) return;
  state.progress[state.current] = true;
  saveProgress(state.progress);
  renderLessons();
  updateOverallProgress();
};

prevBtn.onclick = () => {
  if (state.current > 1) openLesson(state.current - 1);
};
nextBtn.onclick = () => {
  if (state.current < lessons.length) openLesson(state.current + 1);
};

resetAllBtn.onclick = () => {
  if (confirm("Bạn có chắc muốn đặt lại tiến độ không?")) {
    localStorage.removeItem(STORAGE_KEY);
    state.progress = {};
    renderLessons();
    updateOverallProgress();
  }
};

// Khởi tạo
renderLessons();
