# Localization (Chinese / i18n)

**Status**: Refused (2026-09-05, maintainer ruling via harbor intake #59)

**Why refused**: Localization is not on the roadmap for this project. There is no i18n infrastructure, the UI surface is skeleton-stage, and a third of the request's scope (email templates) referenced a deferred subsystem that does not exist (see [email-notifications.md](email-notifications.md)). Adding a localization layer now would double the string-maintenance surface for a feature the project does not plan to have.

**Reopening condition (escape hatch)**: If the roadmap changes to include non-English users, scope it as its own effort: i18n framework choice first, then lesson titles + UI labels; email templates only after the email subsystem exists.

**Prior requests**: #59 (first).
