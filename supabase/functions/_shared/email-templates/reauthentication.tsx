/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code for ElevateQCS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img src="https://jengmprjjwtgettqasuk.supabase.co/storage/v1/object/public/email-assets/logo.png" width="180" height="auto" alt="ElevateQCS" style={logo} />
        </Section>
        <Section style={divider} />
        <Heading style={h1}>Confirm Your Identity</Heading>
        <Text style={text}>Use the code below to verify your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>This code will expire shortly. If you did not request this, no action is required.</Text>
        <Section style={divider} />
        <Text style={brandLine}>ElevateQCS — Quality & Compliance Advisory</Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 32px', maxWidth: '560px', margin: '0 auto' }
const logoSection = { marginBottom: '24px' }
const logo = { display: 'block' as const }
const divider = { borderTop: '1px solid #e2e6ec', margin: '24px 0' }
const h1 = { fontSize: '22px', fontWeight: '600' as const, color: '#081624', margin: '0 0 16px', fontFamily: "'Georgia', serif" }
const text = { fontSize: '15px', color: '#6b7a8d', lineHeight: '1.6', margin: '0 0 20px' }
const codeStyle = { fontFamily: "'Courier New', Courier, monospace", fontSize: '28px', fontWeight: '700' as const, color: '#081624', letterSpacing: '4px', margin: '0 0 28px', padding: '16px 24px', backgroundColor: '#f5f7fa', borderRadius: '4px', display: 'inline-block' as const }
const footer = { fontSize: '13px', color: '#9ca3af', margin: '28px 0 0', lineHeight: '1.5' }
const brandLine = { fontSize: '12px', color: '#9ca3af', margin: '0', textAlign: 'center' as const }
