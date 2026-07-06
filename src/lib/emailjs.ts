import emailjs from '@emailjs/browser';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

let isInitialized = false;

export function initEmailJS(): boolean {
  if (!PUBLIC_KEY) {
    console.error('EmailJS Public Key is missing in environment variables');
    return false;
  }
  if (!isInitialized) {
    emailjs.init(PUBLIC_KEY);
    isInitialized = true;
  }
  return true;
}

export async function sendContactForm(formElement: HTMLFormElement): Promise<any> {
  const initialized = initEmailJS();
  if (!initialized) {
    throw new Error('EmailJS not initialized');
  }

  if (!SERVICE_ID || !TEMPLATE_ID) {
    throw new Error('EmailJS Service ID or Template ID is missing in environment variables');
  }

  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement);
}
