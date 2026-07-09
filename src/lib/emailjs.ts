import emailjs from '@emailjs/browser';

let activeConfig: {
  publicKey: string;
  serviceId: string;
  templateId: string;
} | null = null;

let isInitialized = false;

export async function loadEmailConfig(): Promise<boolean> {
  if (isInitialized && activeConfig) return true;

  const envPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const envServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const envTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (envPublicKey && envServiceId && envTemplateId) {
    activeConfig = {
      publicKey: envPublicKey,
      serviceId: envServiceId,
      templateId: envTemplateId,
    };
    emailjs.init(activeConfig.publicKey);
    isInitialized = true;
    console.log('📧 EmailJS initialized from environment variables');
    return true;
  }

  console.error('⚠️ EmailJS initialization failed: environment variables not found');
  return false;
}

export async function sendContactForm(
  formElement: HTMLFormElement
): Promise<Awaited<ReturnType<typeof emailjs.sendForm>>> {
  // Ensure config is loaded before sending
  const loaded = await loadEmailConfig();
  if (!loaded || !activeConfig) {
    throw new Error('EmailJS configuration not loaded');
  }

  return emailjs.sendForm(activeConfig.serviceId, activeConfig.templateId, formElement);
}
