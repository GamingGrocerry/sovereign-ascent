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
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({ siteName, email, newEmail, confirmationUrl }: EmailChangeEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email change for ElevateQCS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img src="https://jengmprjjwtgettqasuk.supabase.co/storage/v1/object/public/email-assets/logo.png" width="180" height="auto" alt="ElevateQCS" style={logo} />
        </Section>
        <Section style={divider} />
        <Heading style={h1}>Confirm Email Change</Heading>
        <Text style={text}>
          You requested to change your email address from{' '}
          <Link href={`mailto:${email}`} style={link}>{email}</Link> to{' '}
          <Link href={`mailto:${newEmail}`} style={link}>{newEmail}</Link>.
        </Text>
        <Text style={text}>Select the button below to confirm this change.</Text>
        <Button style={button} href={confirmationUrl}>Confirm Email Change</Button>
        <Text style={footer}>If you did not request this change, please secure your account immediately.</Text>
        <Section style={divider} />
        <Text style={brandLine}>ElevateQCS — Quality & Compliance Advisory</Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 32px', maxWidth: '560px', margin: '0 auto' }
const logoSection = { marginBottom: '24px' }
const logo = { display: 'block' as const }
const divider = { borderTop: '1px solid #e2e6ec', margin: '24px 0' }
const h1 = { fontSize: '22px', fontWeight: '600' as const, color: '#081624', margin: '0 0 16px', fontFamily: "'Georgia', serif" }
const text = { fontSize: '15px', color: '#6b7a8d', lineHeight: '1.6', margin: '0 0 20px' }
const link = { color: '#0080ff', textDecoration: 'underline' }
const button = { backgroundColor: '#081624', color: '#f5f7fa', fontSize: '14px', fontWeight: '500' as const, borderRadius: '4px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' as const }
const footer = { fontSize: '13px', color: '#9ca3af', margin: '28px 0 0', lineHeight: '1.5' }
const brandLine = { fontSize: '12px', color: '#9ca3af', margin: '0', textAlign: 'center' as const }
