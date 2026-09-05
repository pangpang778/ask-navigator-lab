# Email notifications on course updates

**Status**: Deferred (2026-09-05, maintainer ruling via harbor intake #34; not a permanent refusal)

**Why deferred**: Email notifications are a standalone subsystem (external provider dependency + templates + triggers + user preferences), while the platform core (course hosting + progress tracking) is still skeleton-stage. The reporter's own open questions (which events trigger mail, digest vs. immediate, provider choice) are all design decisions; scoping it now only expands the maintenance surface.

**Reopening condition (escape hatch)**: Once core features stabilize, scope it as a v1 feature: new-lesson publication → immediate email; single provider; no user-preference UI.

**Prior requests**: #34 (first), #44 (re-recorded in English per bf118b5).
