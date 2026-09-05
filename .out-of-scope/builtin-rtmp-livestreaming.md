# Built-in RTMP livestreaming server

**Status**: Out of scope (2026-09-05, maintainer ruling recorded at harbor intake #10; re-recorded in English after the entry was dropped from the working tree during the bf118b5 housekeeping)

**Why refused**: A built-in RTMP server is heavy resident infrastructure (ingest, transcoding, concurrency, bandwidth, CDN coordination) that does not fit the platform's core boundary of course hosting + progress tracking; the maintenance surface outweighs the benefit.

**Escape hatch**: Instructors can stream on a third-party service and upload the recording as a lesson — fully supported by existing features.

**Prior requests**: #10 (first), #58 ("reviving this", re-argument rejected citing this entry).
