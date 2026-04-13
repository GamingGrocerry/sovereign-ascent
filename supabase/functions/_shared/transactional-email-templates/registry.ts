/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

// Import templates
import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as adminFormNotification } from './admin-form-notification.tsx'
import { template as rfpConfirmation } from './rfp-confirmation.tsx'
import { template as govconConfirmation } from './govcon-confirmation.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'admin-form-notification': adminFormNotification,
  'rfp-confirmation': rfpConfirmation,
  'govcon-confirmation': govconConfirmation,
}
