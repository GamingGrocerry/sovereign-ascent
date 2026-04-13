import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "ElevateQCS"

interface AdminFormNotificationProps {
  formType?: string
  name?: string
  email?: string
  organization?: string
  inquiryType?: string
  message?: string
  phone?: string
  fields?: string
}

const AdminFormNotificationEmail = ({
  formType = 'Contact',
  name = '',
  email = '',
  organization = '',
  inquiryType = '',
  message = '',
  phone = '',
  fields = '',
}: AdminFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New {formType} submission from {name || email}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerTag}>{SITE_NAME}</Text>
        </Section>

        <Heading style={h1}>
          New {formType} Submission
        </Heading>

        <Section style={fieldSection}>
          {name && (
            <>
              <Text style={fieldLabel}>Name</Text>
              <Text style={fieldValue}>{name}</Text>
            </>
          )}
          {email && (
            <>
              <Text style={fieldLabel}>Email</Text>
              <Text style={fieldValue}>{email}</Text>
            </>
          )}
          {organization && (
            <>
              <Text style={fieldLabel}>Organization</Text>
              <Text style={fieldValue}>{organization}</Text>
            </>
          )}
          {phone && (
            <>
              <Text style={fieldLabel}>Phone</Text>
              <Text style={fieldValue}>{phone}</Text>
            </>
          )}
          {inquiryType && (
            <>
              <Text style={fieldLabel}>Inquiry Type</Text>
              <Text style={fieldValue}>{inquiryType}</Text>
            </>
          )}
          {message && (
            <>
              <Text style={fieldLabel}>Message</Text>
              <Text style={fieldValue}>{message}</Text>
            </>
          )}
          {fields && (
            <>
              <Hr style={divider} />
              <Text style={fieldLabel}>Additional Details</Text>
              <Text style={fieldValue}>{fields}</Text>
            </>
          )}
        </Section>

        <Hr style={divider} />

        <Text style={footer}>
          This notification was generated automatically by the {SITE_NAME} website.
          Reply directly to the sender at {email || 'the email above'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New ${data.formType || 'Form'} Submission — ${data.name || data.email || SITE_NAME}`,
  to: 'info@elevateqcs.com',
  displayName: 'Admin Form Notification',
  previewData: {
    formType: 'Contact',
    name: 'Jane Doe',
    email: 'jane@example.com',
    organization: 'Acme Corp',
    inquiryType: 'Governance & Strategy',
    message: 'We need help with ISO 9001 certification readiness.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  padding: '40px 32px',
  maxWidth: '600px',
  margin: '0 auto',
}

const header = {
  marginBottom: '24px',
}

const headerTag = {
  fontSize: '12px',
  fontWeight: '700' as const,
  color: '#0a2d5e',
  letterSpacing: '3px',
  textTransform: 'uppercase' as const,
  margin: '0',
}

const h1 = {
  fontSize: '22px',
  fontWeight: '600' as const,
  color: '#0a2d5e',
  margin: '0 0 24px',
  fontFamily: 'Georgia, "Times New Roman", serif',
}

const fieldSection = {
  backgroundColor: '#f8f9fa',
  padding: '20px 24px',
  borderRadius: '4px',
  border: '1px solid #e8e8e8',
}

const fieldLabel = {
  fontSize: '11px',
  fontWeight: '600' as const,
  color: '#888888',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '12px 0 2px',
}

const fieldValue = {
  fontSize: '15px',
  color: '#333333',
  lineHeight: '1.5',
  margin: '0 0 8px',
}

const divider = {
  borderColor: '#e0e0e0',
  margin: '24px 0',
}

const footer = {
  fontSize: '12px',
  color: '#999999',
  margin: '0',
  fontStyle: 'italic' as const,
}
