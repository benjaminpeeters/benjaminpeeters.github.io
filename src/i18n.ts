// Simple i18n translations
export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.publications': 'Publications',
    'nav.dataCode': 'Data & Code',
    'nav.teaching': 'Teaching',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.publications': 'Publications',
    'nav.dataCode': 'Données & Code',
    'nav.teaching': 'Enseignement',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.blog': '博客',
    'nav.publications': '出版物',
    'nav.dataCode': '数据与代码',
    'nav.teaching': '教学',
  },
} as const;

export function t(locale: 'en' | 'fr' | 'zh', key: keyof typeof translations.en): string {
  return translations[locale][key] || translations.en[key];
}
