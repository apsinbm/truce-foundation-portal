# Data Integrity Implementation Plan

**Created:** December 8, 2025
**Source Document:** Hugh's "Index data integrity - checklist and dashboard.docx"
**Current Badge:** SILVER (5/10)

## Overview

This plan implements Hugh's data integrity framework across both the Truce Index and Portal.
See the master plan in `/Users/pato/Truce Foundation/Truce/DATA_INTEGRITY_PLAN.md` for full details.

## Portal-Specific Status

### Strengths
- Comprehensive methodology page at `/methodology`
- SourceBadge component for attribution
- Strong TypeScript interfaces
- Multiple authoritative sources documented

### Gaps to Address
- No data export functionality
- Forum not yet live (January 2026)
- No version history/changelog
- No runtime validation (Zod/Yup)

## Implementation Tasks

### Phase 1 (Current)
- [ ] Add DataIntegrityBadge component
- [ ] Add DataAccuracyChecklist overlay
- [ ] Link badge to methodology page

### Phase 2
- [ ] Add CSV/JSON export for violation data
- [ ] Launch feedback mechanism (or accelerate forum)
- [ ] Add changelog/version display

### Phase 3
- [ ] WCAG accessibility audit
- [ ] Add Zod validation
- [ ] Document data retention policies

## Component Locations
- Badge: `/src/components/DataIntegrityBadge.tsx`
- Checklist: `/src/components/DataAccuracyChecklist.tsx`
