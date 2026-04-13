import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Button,
  Hr,
  Section,
  Img,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "ElevateQCS"
const LOGO_URL = "https://jengmprjjwtgettqasuk.supabase.co/storage/v1/object/public/email-assets/elevatequcs-logo-blue.svg"

interface ContactConfirmationProps {
  name?: string
  formType?: string
}

const ContactConfirmationEmail = ({ name, formType }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We've received your inquiry — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Logo */}
        <Section style={logoSection}>
          <Img
            src={LOGO_URL}
            alt="ElevateQCS"
            width="180"
            height="54"
            style={logo}
          />
        </Section>

        {/* Accent bar */}
        <Section style={accentBar} />

        <Heading style={h1}>
          {name ? `Thank you, ${name}` : 'Thank you for reaching out'}
        </Heading>

        <Text style={text}>
          We've received your {formType || 'inquiry'} and a member of our team will review it shortly. 
          We typically respond within 24–48 business hours.
        </Text>

        <Text style={text}>
          In the meantime, explore our latest insights and compliance resources:
        </Text>

        <Section style={ctaSection}>
          <Button href="https://elevateqcs.com/insights" style={ctaButton}>
            Browse Insights
          </Button>
        </Section>

        <Hr style={divider} />

        <Text style={footer}>
          Best regards,<br />
          The {SITE_NAME} Team
        </Text>

        <Text style={disclaimer}>
          This is an automated confirmation. If you did not submit this inquiry, please disregard this message.
          For urgent matters, contact us directly at{' '}
          <a href="mailto:info@elevateqcs.com" style={link}>info@elevateqcs.com</a>.
        </Text>

        <Text style={legalDisclaimer}>
          {SITE_NAME} is an independent advisory firm. All services are advisory in nature 
          and do not constitute legal, certification, or regulatory services.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We\'ve received your inquiry — ElevateQCS',
  displayName: 'Contact Form Confirmation',
  previewData: { name: 'Jane', formType: 'contact inquiry' },
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

const logoSection = {
  marginBottom: '8px',
}

const logo = {
  margin: '0',
}

const accentBar = {
  height: '3px',
  background: 'linear-gradient(to right, #0a2d5e, #c9a84c)',
  marginBottom: '32px',
  borderRadius: '2px',
}

const h1 = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#0a2d5e',
  margin: '0 0 24px',
  fontFamily: 'Georgia, "Times New Roman", serif',
}

const text = {
  fontSize: '16px',
  color: '#333333',
  lineHeight: '1.6',
  margin: '0 0 20px',
}

const ctaSection = {
  textAlign: 'center' as const,
  margin: '28px 0',
}

const ctaButton = {
  backgroundColor: '#0a2d5e',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '14px 32px',
  borderRadius: '4px',
  textDecoration: 'none',
}

const divider = {
  borderColor: '#e0e0e0',
  margin: '32px 0',
}

const link = {
  color: '#0a2d5e',
  textDecoration: 'underline',
}

const footer = {
  fontSize: '14px',
  color: '#666666',
  margin: '0 0 24px',
  lineHeight: '1.6',
}

const disclaimer = {
  fontSize: '12px',
  color: '#999999',
  margin: '0 0 16px',
  fontStyle: 'italic' as const,
  lineHeight: '1.5',
}

const legalDisclaimer = {
  fontSize: '11px',
  color: '#bbbbbb',
  margin: '0',
  lineHeight: '1.5',
  borderTop: '1px solid #eeeeee',
  paddingTop: '16px',
}
