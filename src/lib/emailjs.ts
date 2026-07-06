import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  emailjs: {
    publicKey: string;
    serviceId: string;
    templateId: string;
  };
}

let activeConfig: {
  publicKey: string;
  serviceId: string;
  templateId: string;
} | null = null;

let isInitialized = false;

// Dynamic config loader matching vanilla project fetch behavior + Env fallback
export async function loadEmailConfig(): Promise<boolean> {
  if (isInitialized && activeConfig) return true;

  // 1. Try fetching dev.json from public directory (useful for post-build runtime overrides)
  try {
    const response = await fetch('/dev.json');
    if (response.ok) {
      const data: EmailJSConfig = await response.json();
      if (data?.emailjs?.publicKey && data?.emailjs?.serviceId && data?.emailjs?.templateId) {
        activeConfig = {
          publicKey: data.emailjs.publicKey,
          serviceId: data.emailjs.serviceId,
          templateId: data.emailjs.templateId,
        };
        emailjs.init(activeConfig.publicKey);
        isInitialized = true;
        console.log('📧 EmailJS initialized from runtime dev.json');
        return true;
      }
    }
  } catch (error) {
    console.log('📄 dev.json fetch skipped, checking environment variables');
  }

  // 2. Fallback to Next.js environment variables (.env.local or build variables)
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

  console.error('⚠️ EmailJS initialization failed: No dev.json or environment variables found');
  return false;
}

export async function sendContactForm(formElement: HTMLFormElement): Promise<any> {
  // Ensure config is loaded before sending
  const loaded = await loadEmailConfig();
  if (!loaded || !activeConfig) {
    throw new Error('EmailJS configuration not loaded');
  }

  return emailjs.sendForm(activeConfig.serviceId, activeConfig.templateId, formElement);
}
