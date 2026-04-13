import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "ElevateQCS"

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We've received your inquiry — ElevateQCS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}` : 'Thank you for reaching out'}
        </Heading>
        <Text style={text}>
          We've received your inquiry and a member of our team will review it shortly. 
          We typically respond within 24-48 hours.
        </Text>
        <Text style={text}>
          In the meantime, you can explore our latest insights and resources at{' '}
          <a href="https://elevateqcs.com/insights" style={link}>
            elevateqcs.com/insights
          </a>.
        </Text>
        <Text style={footer}>
          Best regards,<br />
          The ElevateQCS Team
        </Text>
        <Text style={disclaimer}>
          This is an automated confirmation. Please do not reply to this email. 
          For urgent matters, contact us directly at info@elevateqcs.com.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We\'ve received your inquiry — ElevateQCS',
  displayName: 'Contact Form Confirmation',
  previewData: { name: 'Jane' },
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

const link = {
  color: '#007acc',
  textDecoration: 'underline',
}

const footer = {
  fontSize: '14px',
  color: '#666666',
  margin: '32px 0 0',
  paddingTop: '24px',
  borderTop: '1px solid #e0e0e0',
}

const disclaimer = {
  fontSize: '12px',
  color: '#999999',
  margin: '24px 0 0',
  fontStyle: 'italic',
}
