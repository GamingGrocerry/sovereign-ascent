

## Diagnosis

Three root issues are causing email failures:

1. **Email domain DNS is drifted** — The `notify.elevateqcs.com` domain was previously verified but DNS records no longer match. Every email send fails with `domain_not_verified`. You need to fix this in **Cloud > Emails > Manage Domains** by clicking "Verify Domain" to re-check, or updating your DNS records at your domain provider to match. This is the #1 blocker — nothing sends until this is resolved.

2. **GovCon form has no backend** — The form on `/govcon` currently does nothing on submit (`e.preventDefault()` with no database insert or email trigger). It needs the same treatment as Contact and RFP.

3. **No admin notification to info@elevateqcs.com** — Currently only a user-facing "thank you" template exists (`contact-confirmation`). There is no template that sends form details to your team inbox.

4. **Contact form dropdown is outdated** — The current inquiry types don't match your 11 service lines on the Services page.

## Plan

### Step 1: Fix email domain (user action required)
Go to **Cloud > Emails > Manage Domains** and click **Verify Domain** to re-verify `notify.elevateqcs.com`. If it fails, check that the NS records at your domain provider still point to `ns3.lovable.cloud` and `ns4.lovable.cloud`.

### Step 2: Create admin notification template
Create a new `admin-form-notification.tsx` template that sends a structured email to `info@elevateqcs.com` with:
- Form type (Contact / RFP / GovCon)
- All submitted fields in a clean layout
- Branded with ElevateQCS navy/gold styling
- Register with `to: "info@elevateqcs.com"` so it always goes to the team inbox

### Step 3: Update the "thank you" confirmation template
Enhance `contact-confirmation.tsx` to be a proper branded confirmation with:
- ElevateQCS logo (from the `email-assets` storage bucket)
- Navy/slate color palette matching the site
- "If you did not submit this inquiry, please disregard" disclaimer
- Works for all form types (Contact, RFP, GovCon)

### Step 4: Wire up the GovCon form
- Save submissions to `contact_submissions` table (with inquiry_type = "federal-advisory")
- Trigger both the admin notification and user confirmation emails
- Add proper loading/success/error states

### Step 5: Update Contact form dropdown
Replace the current 6 inquiry types with the 11 service lines from the Services page:
- AI Compliance Advisory
- Audit & Certification Preparation
- Compliance Technology Advisory
- Documentation & SOPs
- Federal & Public Sector Advisory
- Governance & Strategy
- Ongoing Compliance Support
- Project Recovery
- Quality Management Systems
- Risk & Regulatory Compliance
- Supply Chain Compliance
- General Inquiry

### Step 6: Wire admin notifications to all forms
Update Contact, RFP, and GovCon forms to invoke both:
1. `admin-form-notification` → info@elevateqcs.com
2. `contact-confirmation` → the submitter

### Step 7: Deploy edge functions
Redeploy `send-transactional-email` with the new templates registered.

### Technical details
- New file: `supabase/functions/_shared/transactional-email-templates/admin-form-notification.tsx`
- Updated: `registry.ts` (add admin template)
- Updated: `contact-confirmation.tsx` (branded redesign)
- Updated: `src/pages/Contact.tsx` (dropdown + dual email)
- Updated: `src/pages/GovCon.tsx` (full form backend)
- Updated: `src/pages/RFP.tsx` (add admin notification)
- Edge function redeploy required after template changes

