/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({ siteName, confirmationUrl }: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Reset your password for ElevateQCS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img src="https://jengmprjjwtgettqasuk.supabase.co/storage/v1/object/public/email-assets/logo.png" width="180" height="auto" alt="ElevateQCS" style={logo} />
        </Section>
        <Section style={divider} />
        <Heading style={h1}>Reset Your Password</Heading>
        <Text style={text}>We received a request to reset your password. Select the button below to choose a new password.</Text>
        <Button style={button} href={confirmationUrl}>Reset Password</Button>
        <Text style={footer}>If you did not request a password reset, no action is required. Your credentials remain unchanged.</Text>
        <Section style={divider} />
        <Text style={brandLine}>ElevateQCS — Quality & Compliance Advisory</Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 32px', maxWidth: '560px', margin: '0 auto' }
const logoSection = { marginBottom: '24px' }
const logo = { display: 'block' as const }
const divider = { borderTop: '1px solid #e2e6ec', margin: '24px 0' }
const h1 = { fontSize: '22px', fontWeight: '600' as const, color: '#081624', margin: '0 0 16px', fontFamily: "'Georgia', serif" }
const text = { fontSize: '15px', color: '#6b7a8d', lineHeight: '1.6', margin: '0 0 20px' }
const button = { backgroundColor: '#081624', color: '#f5f7fa', fontSize: '14px', fontWeight: '500' as const, borderRadius: '4px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' as const }
const footer = { fontSize: '13px', color: '#9ca3af', margin: '28px 0 0', lineHeight: '1.5' }
const brandLine = { fontSize: '12px', color: '#9ca3af', margin: '0', textAlign: 'center' as const }
