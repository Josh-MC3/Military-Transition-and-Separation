/* ============================================
   MILITARY TRANSITION GUIDE — APP.JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- TAB NAVIGATION ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.tab-section');

  function showSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    tabBtns.forEach(b => b.classList.remove('active'));
    const target = document.getElementById('section-' + id);
    if (target) target.classList.add('active');
    tabBtns.forEach(b => {
      if (b.dataset.section === id) b.classList.add('active');
    });
    // Scroll tab into view on mobile
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // ---- SUBTAB (nested tabs) ----
  document.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.subtab-nav').dataset.group;
      const targetId = btn.dataset.target;

      // Deactivate all buttons in this group
      btn.closest('.subtab-nav').querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Hide all subtab contents that start with group-
      document.querySelectorAll('.subtab-content').forEach(c => {
        if (c.id.startsWith(group + '-')) c.classList.remove('active');
      });

      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });

  // ---- INTERACTIVE CHECKLISTS (localStorage persistence) ----
  const STORAGE_KEY = 'mil_transition_checklists';

  function loadChecklistState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveChecklistState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  const savedState = loadChecklistState();

  document.querySelectorAll('.interactive-checklist').forEach(list => {
    const listId = list.id;
    const checkboxes = list.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((cb, i) => {
      const key = listId + '_' + i;
      // Restore saved state
      if (savedState[key]) {
        cb.checked = true;
        cb.closest('li').classList.add('done');
      }
      // Save on change
      cb.addEventListener('change', () => {
        const state = loadChecklistState();
        if (cb.checked) {
          state[key] = true;
          cb.closest('li').classList.add('done');
        } else {
          delete state[key];
          cb.closest('li').classList.remove('done');
        }
        saveChecklistState(state);
        updateProgress(list);
      });
    });

    // Add a progress bar to each checklist
    injectProgressBar(list);
    updateProgress(list);
  });

  function injectProgressBar(list) {
    const wrapper = document.createElement('div');
    wrapper.className = 'checklist-progress';
    wrapper.innerHTML = `
      <div class="progress-row">
        <span class="progress-label">Progress</span>
        <span class="progress-count"></span>
      </div>
      <div class="progress-bar-track"><div class="progress-bar-fill"></div></div>
    `;
    list.parentNode.insertBefore(wrapper, list);
  }

  function updateProgress(list) {
    const total = list.querySelectorAll('input[type="checkbox"]').length;
    const done  = list.querySelectorAll('input[type="checkbox"]:checked').length;
    const pct   = total ? Math.round((done / total) * 100) : 0;
    const wrapper = list.previousElementSibling;
    if (!wrapper || !wrapper.classList.contains('checklist-progress')) return;
    wrapper.querySelector('.progress-count').textContent = `${done} / ${total}`;
    wrapper.querySelector('.progress-bar-fill').style.width = pct + '%';
    wrapper.querySelector('.progress-bar-fill').style.background = pct === 100 ? '#3B6D11' : '#185FA5';
  }

  // ---- HASH ROUTING ----
  function loadFromHash() {
    const hash = window.location.hash.replace('#', '');
    const valid = ['overview','timeline','tap','va','career','finance','benefits','mental','mistakes','checklists'];
    if (hash && valid.includes(hash)) {
      showSection(hash);
    }
  }

  window.addEventListener('hashchange', loadFromHash);
  loadFromHash();

  // Update hash on tab click
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      history.replaceState(null, '', '#' + btn.dataset.section);
    });
  });

  // ---- MOBILE MENU (show/hide tab bar) ----
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const tabNav = document.getElementById('tabNav');

  if (mobileMenuBtn && tabNav) {
    mobileMenuBtn.addEventListener('click', () => {
      tabNav.classList.toggle('nav-open');
    });
  }

});
