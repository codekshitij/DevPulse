
# 🔁 DevPulse Workflow + Database Mapping

This document outlines the full system flow of the DevPulse application from user interaction to database actions. It maps each step of the user experience to the underlying backend and database schema.

---

## 🧍‍♂️ 1. User Signs Up / Logs In

**Action:** Logs in using Google via Firebase Auth  
**DB Table:** `users`

```sql
INSERT INTO users (id, name, email, avatar_url, created_at)
VALUES ('uuid', 'Kshitij Mishra', 'k@example.com', 'https://...', NOW());
```

---

## 👥 2. User Creates or Joins a Team

**Action:** Creates a team or joins with an invite code  
**DB Tables:** `teams`, `user_team`

```sql
INSERT INTO teams (id, name, invite_code, created_at)
VALUES ('team-uuid', 'AI Builders', 'abcd1234', NOW());

INSERT INTO user_team (user_id, team_id, role, joined_at)
VALUES ('user-uuid', 'team-uuid', 'admin', NOW());
```

---

## ✍️ 3. User Submits a Standup Entry

**Action:** Fills out daily standup form + tags  
**DB Tables:** `standup_entries`, `entry_tag`

```sql
INSERT INTO standup_entries (id, user_id, team_id, date, yesterday_work, today_plan, blockers, created_at)
VALUES ('entry-uuid', 'user-uuid', 'team-uuid', '2025-05-11', 'Fixed auth bug', 'Start API integration', 'None', NOW());

INSERT INTO entry_tag (entry_id, tag_id)
VALUES ('entry-uuid', 'tag-uuid-frontend'),
       ('entry-uuid', 'tag-uuid-auth');
```

---

## 🧾 4. Team Views Timeline or Dashboard

**Action:** Views entries and blocker stats on dashboard  
**DB Query:**

```sql
SELECT s.*, u.name, array_agg(t.name) as tags
FROM standup_entries s
JOIN users u ON s.user_id = u.id
LEFT JOIN entry_tag et ON s.id = et.entry_id
LEFT JOIN tags t ON t.id = et.tag_id
WHERE s.team_id = 'team-uuid'
GROUP BY s.id, u.name
ORDER BY s.date DESC;
```

---

## 📆 5. Generate Weekly Report / Sprint Summary

**Action:** Manager creates weekly summary  
**DB Table:** `sprints`

```sql
INSERT INTO sprints (id, team_id, start_date, end_date, summary_text)
VALUES ('sprint-uuid', 'team-uuid', '2025-05-06', '2025-05-11', 'Major API work. Frequent frontend blockers.');
```

---

## 🧱 Table Usage Summary

| Table           | Description |
|------------------|-------------|
| `users`          | Authenticated users |
| `teams`          | Project teams |
| `user_team`      | Many-to-many mapping (with role) |
| `standup_entries`| Daily check-ins |
| `tags`           | Metadata for entries |
| `entry_tag`      | Entry-tag many-to-many relationship |
| `sprints`        | Weekly summaries and reports |

---

✅ This document is your backend blueprint. Use it to write consistent routes, seed data, and plan queries.
