// Data for the resume
const resumeData = {
  photo: '2310213507.jpg',
  name: 'Mohammed Zaki Ali Mohammed Abdulaziz',
  headline: 'Computer Engineering Student',
  contact: [
    { icon: '📍', label: 'Address', value: 'Karabük, Merkez' },
    { icon: '📞', label: 'Phone',   value: '+90 535 664 8870' },
    { icon: '📧', label: 'Email',   value: '<a href="mailto:mohaziz7300@gmail.com">mohaziz7300@gmail.com</a>' },
    { icon: '🔗', label: 'LinkedIn',value: '<a href="https://www.linkedin.com/in/mohammed-aziz-0bb94b264/" target="_blank">mohammed-aziz-0bb94b264</a>' },
    { icon: '🎂', label: 'Birthdate', value: 'June 10, 2002' },
    { icon: '🗺️', label: 'Nationality', value: 'Yemen 🇾🇪' }
  ],
  sections: [
    { title: '🎯 Objective', items: ['Motivated Computer Engineering student with a passion for software development and emerging technologies.'] },
    { title: '🎓 Education', items: ['B.Sc. Computer Engineering – Karabük University (Expected 2027)'] },
    { title: '🌍 Languages', items: ['English: B2', 'Arabic: Native', 'Turkish: B1'] }
  ]
};

// Utility to create element with optional classes
function createEl(tag, className) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  return el;
}

// Render the resume into #resume
function renderResume(data) {
  const container = document.getElementById('resume');

  // Photo
  const photoDiv = createEl('div', 'photo-container');
  const img = createEl('img'); img.src = data.photo; img.alt = data.name;
  photoDiv.append(img);
  container.append(photoDiv);

  // Name & Headline
  const h1 = createEl('h1'); h1.textContent = data.name;
  const pHead = createEl('p', 'headline'); pHead.innerHTML = data.headline;
  container.append(h1, pHead);

  // Contact Info
  const ul = createEl('ul', 'info');
  data.contact.forEach(item => {
    const li = createEl('li');
    li.innerHTML = `${item.icon} <strong>${item.label}:</strong> ${item.value}`;
    ul.append(li);
  });
  container.append(ul);

  // Sections
  data.sections.forEach(sec => {
    const section = createEl('section');
    const h2 = createEl('h2'); h2.textContent = sec.title;
    section.append(h2);
    sec.items.forEach(text => {
      const p = createEl('p'); p.innerHTML = text;
      section.append(p);
    });
    container.append(section);
  });
}

// Initialize on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => renderResume(resumeData));

// Dark mode toggle (from original script)
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? 'Toggle Light Mode'
    : 'Toggle Dark Mode';
});
