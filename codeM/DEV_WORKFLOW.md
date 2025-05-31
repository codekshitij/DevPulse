# 🛠️ DevPulse Coding Workflow

This workflow is designed to help you build the DevPulse React app in a modular, scalable way, following the backend blueprint in WORKFLOW.md.

---

## 1. Authentication (User Signs Up / Logs In)
- Implement Google login using Firebase Auth in the frontend.
- Store user info in the backend (`users` table).

**Frontend:**
- Create a `features/auth/` folder for auth logic and UI.
- Use a service in `services/firebase.js` for Firebase integration.

---

## 2. Team Management (Create/Join Team)
- Allow users to create or join teams via invite code.
- Update `teams` and `user_team` tables.

**Frontend:**
- Create `features/team/` for team creation/join forms and logic.
- Use API services in `services/teamService.js`.

---

## 3. Standup Entry Submission
- Users fill out a daily standup form with tags.
- Data goes to `standup_entries` and `entry_tag` tables.

**Frontend:**
- Create a `features/standup/` folder for the form and logic.
- Use reusable components for form fields and tag selection.

---

## 4. Dashboard & Timeline
- Display team entries, blockers, and stats.
- Query combines `standup_entries`, `users`, `tags`.

**Frontend:**
- Create `pages/Dashboard.jsx` and `components/EntryList.jsx`, `BlockerStats.jsx`.
- Fetch and display data using services in `services/standupService.js`.

---

## 5. Weekly Report / Sprint Summary
- Manager can generate and view weekly summaries.
- Data stored in `sprints` table.

**Frontend:**
- Create `features/sprints/` for summary creation and display.
- Use a form for summary input and a list for past sprints.

---

## 6. General Structure & Best Practices
- Keep all logic, UI, and styles for each feature in its own folder.
- Use `hooks/` for custom hooks (e.g., useAuth, useTeam).
- Use `store/` for global state (Redux, Zustand, or Context).
- Use `utils/` for helpers and `assets/` for static files.

---

## 🚦 Suggested Implementation Order

1. Set up Firebase Auth and user context.
2. Build team creation/join flows.
3. Implement standup entry form and submission.
4. Create dashboard to display entries and blockers.
5. Add weekly report/sprint summary feature.
6. Polish UI, add tests, and refactor for modularity.

---

_Refer to WORKFLOW.md for backend queries and table mapping._
