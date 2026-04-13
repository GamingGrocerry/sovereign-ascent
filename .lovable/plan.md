

# Plan: Reset Form Emails & Fix Custom Domain Submission Error

## Root Cause Analysis

**"Submission Error" on elevateqcs.com but not Lovable domain:**
The published site on your custom domain is likely serving a stale build from before the recent Resend migration changes. The edge functions were updated to use Resend, but the published site may not have the latest code. Additionally, `index.html` still contains **legacy Netlify hidden forms** (lines 153-185) that are leftover from the old hosting setup and should be removed as cleanup.

**Email template sharing:**
Currently, all forms (Contact, RFP, GovCon, Resources) share the same two email templates (`contact-confirmation` and `admin-form-notification`). Each form type should have its own dedicated confirmation email.

---

## Implementation Steps

### Step 1 — Remove Netlify remnants from index.html
Delete the two hidden Netlify forms (lines 153-185 in `index.html`) — these are dead code from the old hosting setup.

### Step 2 — Create dedicated email templates
Create separate user-facing confirmation templates for each form type, all keeping the same branded design (logo, accent bar, legal disclaimer) but with form-specific messaging:

- **`contact-confirmation.tsx`** — Keep existing, refine copy to be Contact-specific
- **`rfp-confirmation.tsx`** — New template: "We've received your Request for Proposal" with RFP-specific messaging (confidential review, 1-2 business day response)
- **`govcon-confirmation.tsx`** — New template: "We've received your federal advisory inquiry" with GovCon-specific messaging
- **`admin-form-notification.tsx`** — Keep as-is (works for all forms, already differentiates via `formType` prop)

### Step 3 — Update template registry
Add `rfp-confirmation` and `govcon-confirmation` to `registry.ts`.

### Step 4 — Update form submission handlers
- **Contact.tsx** — Already uses `contact-confirmation` (no change needed)
- **RFP.tsx** — Switch from `contact-confirmation` to `rfp-confirmation`
- **GovCon.tsx** — Switch from `contact-confirmation` to `govcon-confirmation`
- **ResourceGate.tsx** — Keep using `contact-confirmation` (it's a simple email gate, not a form inquiry)

### Step 5 — Deploy edge functions
Redeploy `send-transactional-email` so the new templates are available.

### Step 6 — Re-publish
After all changes, re-publish the site so elevateqcs.com gets the latest build with the Resend-based email system and the Netlify form cleanup.

---

## Files Changed

| File | Change |
|------|--------|
| `index.html` | Remove Netlify hidden forms (lines 153-185) |
| `supabase/functions/_shared/transactional-email-templates/rfp-confirmation.tsx` | New template |
| `supabase/functions/_shared/transactional-email-templates/govcon-confirmation.tsx` | New template |
| `supabase/functions/_shared/transactional-email-templates/registry.ts` | Add 2 new template entries |
| `src/pages/RFP.tsx` | Use `rfp-confirmation` template |
| `src/pages/GovCon.tsx` | Use `govcon-confirmation` template |

