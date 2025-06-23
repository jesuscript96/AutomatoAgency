import { NavLinkItem } from './types';

export const APP_NAME = "Automato"; // Updated

export const NAVIGATION_LINKS: NavLinkItem[] = [
  { label: 'Soluciones', path: '/servicios' },
  { label: 'Industrias', path: '/casos-de-exito' }, 
  { label: 'Recursos', path: '/blog' },
  { label: 'FAQs', path: '/faq' }, // Changed from Pricing to FAQs
];

export const PRIMARY_COLOR = '#FF6347'; // Tomato Red

export const DEMO_CTA_TEXT = "Contactar"; // Changed from "Solicitar Demo Gratuita"
export const CONSULT_CTA_TEXT = "Hablemos"; // Changed from "Consultar Ahora"

export const PLACEHOLDER_IMAGE_URL = (width: number, height: number, seed?: string) => 
  `https://picsum.photos/seed/${seed || Math.random().toString()}/${width}/${height}`;

export const FOOTER_LINKS = [
    { label: 'Política de Privacidad', path: '#' },
    { label: 'Términos de Servicio', path: '#' },
];