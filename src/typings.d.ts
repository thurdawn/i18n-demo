import en from './locales/en.json';

declare global {
  type MessageSchema = typeof en;
}
