// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
//  Structure :
//    siteConfig.business  → infos de l'entreprise
//    siteConfig.branding  → couleurs, polices, logo
//    siteConfig.seo       → titre, description, mots-clés
//    siteConfig.design    → variantes de mise en page A/B/C par section
//    siteConfig.pages     → titres/descriptions des pages (multipage)
//    siteConfig.features  → activer/désactiver des modules
//    siteConfig.content   → contenus sections (hero, services, etc.)
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'Tarifs',    href: '#tarifs' },
    { label: 'FAQ',       href: '#faq' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'MCP',
    tagline:  'Votre artisan plombier chauffagiste au Tablier',
    industry: 'services',          // utilisé pour schema.org + choix de contenu IA
    icon:     'wrench',            // Icône de métier (Phosphor icon name sans le préfixe ph-)
    phone:    '06 98 87 65 11',
    email:    'contact@mcp-plomberie.fr',
    address: {
      street:     '15 rue Verdure',
      city:       'Le Tablier',
      postalCode: '85310',
      country:    'FR',
    },
    openingHours: {
      monday:    '08:00-18:00',
      tuesday:   '08:00-18:00',
      wednesday: '08:00-18:00',
      thursday:  '08:00-18:00',
      friday:    '08:00-18:00',
      saturday:  null,
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible',
    urgency: {
      active:    true,
      label:     'Urgence Plomberie',
      phone:     '06 98 87 65 11',
    },
    serviceArea: [
      'Le Tablier',
      'Rives de l\'Yon',
      'Nesmy',
      'Vendée',
    ],
    certifications: [
      { label: 'Qualipac',           sublabel: 'Aérothermie & Géothermie',          icon: '✅' },
      { label: 'RGE',                sublabel: 'Reconnu Garant de l\'Environnement', icon: '🌿' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#1d62c8',   // Bleu AL Plomberie
    primaryDark:     '#1550a8',
    primarySoft:     '#dbeafe',
    secondaryColor:  '#0f172a',
    accentColor:     '#f08c00',   // Orange urgence
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | MCP',
    defaultTitle:       'MCP — Artisan Plombier Chauffagiste au Tablier',
    defaultDescription: 'Artisan qualifié RGE & Qualipac en Vendée (85). Dépannage, plomberie sanitaire, pompes à chaleur, chauffage et climatisation.',
    keywords: [
      'plombier',
      'chauffagiste',
      'dépannage',
      'pompe à chaleur',
      'Le Tablier',
      'Vendée',
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://mcp-plomberie.fr',
    ogImage:             '/hero-mcp.png',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'A',
      services:     'A',
      about:        'A',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Bienvenue sur notre site.',
    },
    services: {
      slug:        '/services',
      title:       'Nos services',
      description: 'Découvrez nos prestations.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'En savoir plus sur notre entreprise.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Actualités et conseils.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Nos projets récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez-nous pour toute demande.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       true,
    testimonials:  true,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  'Artisan Plombier Chauffagiste',
      h1:       'Votre confort thermique et sanitaire en Vendée',
      subtitle: 'De l\'installation de votre pompe à chaleur au dépannage urgent de votre plomberie, MCP met son expertise certifiée RGE à votre service.',
      image:    '/hero-mcp.png',
      cta1:     { label: 'Demander un devis', href: '#contact' },
      cta2:     { label: 'Nos prestations', href: '#services' },
      trust:    ['Certifié RGE', 'Expertise Qualipac', 'Intervention rapide'],
      badge:    { label: 'Dispo', value: 'Intervention rapide', sub: 'Sur votre secteur' },
      infoCard: { status: 'Disponible', hours: 'Lun–Ven · 8h–18h', location: '15 rue Verdure, Le Tablier' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Une expertise globale pour votre habitat',
      subtitle: 'Nous intervenons sur l\'ensemble de vos installations de plomberie et chauffage.',
      items: [
        {
          icon:  'wrench',
          title: 'Plomberie & Sanitaire',
          text:  'Dépannage de sanitaire, recherche de fuite d\'eau et entretien de canalisations.',
          link:  'Nous contacter →',
          tag:   'Intervention rapide',
          features: ['Dépannage sanitaire', 'Fuite d\'eau', 'Entretien canalisation'],
        },
        {
          icon:  'fire',
          title: 'Chauffage & Climatisation',
          text:  'Installation, entretien et dépannage de chaudière. Solutions de génie climatique.',
          link:  'Nous contacter →',
          tag:   'Expertise thermique',
          features: ['Dépannage chaudière', 'Génie climatique', 'Plomberie de chauffage'],
        },
        {
          icon:  'wind',
          title: 'Énergies Renouvelables',
          text:  'Pompes à chaleur géothermiques, aérothermiques et chauffe-eau thermodynamiques.',
          link:  'Nous contacter →',
          tag:   'Certifié RGE Qualipac',
          features: ['Géothermie', 'Chauffe-eau thermodynamique', 'Entretien ballon d\'eau'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos',
      title:   'Un artisan de confiance au Tablier',
      text: [
        'L\'entreprise MCP est votre partenaire privilégié pour tous vos travaux de plomberie et de chauffage. Basés au Tablier, nous intervenons avec réactivité et professionnalisme pour garantir votre confort.',
        'Nos certifications RGE et Qualipac attestent de notre savoir-faire en matière d\'installations éco-performantes, notamment pour les pompes à chaleur.',
      ],
      stats: [
        { value: 'RGE',   label: 'Certifié' },
        { value: 'Qualipac',  label: 'Agréé' },
        { value: '100%',  label: 'Qualité' },
      ],
      cta:    { label: 'Nous contacter', href: '#contact' },
      image:  '/about-mcp.png',
      author: { name: 'MCP', role: 'Artisan Plombier', image: '/assets/images/placeholder-portrait.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     '[TITRE TÉMOIGNAGES]',
      ratingStr: '[X.X] / 5 · [XX] avis clients',
      items: [
        {
          quote:   '[Citation du client 1 : Expliquez comment vous avez aidé ce client.]',
          name:    '[NOM CLIENT 1]',
          role:    '[RÔLE / ENTREPRISE]',
          initial: 'C',
        },
        {
          quote:   '[Citation du client 2 : Expliquez comment vous avez aidé ce client.]',
          name:    '[NOM CLIENT 2]',
          role:    '[RÔLE / ENTREPRISE]',
          initial: 'C',
        },
        {
          quote:   '[Citation du client 3 : Expliquez comment vous avez aidé ce client.]',
          name:    '[NOM CLIENT 3]',
          role:    '[RÔLE / ENTREPRISE]',
          initial: 'C',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    '[TITRE TARIFS]',
      subtitle: '[Introduction à vos tarifs et vos différentes offres.]',
      plans: [
        {
          name:      '[OFFRE 1]',
          price:     '[PRIX]',
          unit:      '/ [UNITÉ]',
          desc:      '[Description courte de l\'offre 1.]',
          features:   ['[Service inclus 1]', '[Service inclus 2]', '[Service inclus 3]'],
          cta:        'Choisir',
          highlight:  false,
          stripeLink: '',
        },
        {
          name:       '[OFFRE 2]',
          price:      '[PRIX]',
          unit:       '/ [UNITÉ]',
          desc:       '[Description courte de l\'offre 2.]',
          features:   ['[Service inclus 1]', '[Service inclus 2]', '[Service inclus 3]'],
          cta:        'Choisir',
          highlight:  true,
          stripeLink: '',
        },
        {
          name:       '[OFFRE 3]',
          price:      '[PRIX]',
          unit:       '/ [UNITÉ]',
          desc:       '[Description courte de l\'offre 3.]',
          features:   ['[Service inclus 1]', '[Service inclus 2]', '[Service inclus 3]'],
          cta:        'Choisir',
          highlight:  false,
          stripeLink: '',
        },
      ],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   '[TITRE FAQ]',
      items: [
        { q: '[Question 1 ?]', a: '[Réponse détaillée à la question 1.]' },
        { q: '[Question 2 ?]', a: '[Réponse détaillée à la question 2.]' },
        { q: '[Question 3 ?]', a: '[Réponse détaillée à la question 3.]' },
        { q: '[Question 4 ?]', a: '[Réponse détaillée à la question 4.]' },
        { q: '[Question 5 ?]', a: '[Réponse détaillée à la question 5.]' },
      ],
    },

    cta: {
      eyebrow:  'Un projet ? Une urgence ?',
      title:    'Prêt à démarrer vos travaux ?',
      subtitle: 'Contactez MCP dès aujourd\'hui pour un devis gratuit ou une intervention rapide.',
      cta1:     { label: 'Nous contacter', href: '#contact' },
      cta2:     { label: 'Nos services',  href: '#services' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Contactez votre plombier',
      subtitle:       'Appelez-nous directement ou utilisez le formulaire ci-dessous pour toute demande de devis ou de dépannage.',
      successMessage: 'Message bien reçu — nous vous répondons rapidement.',
      formTypes:      ['Dépannage plomberie', 'Installation chauffage', 'Pompe à chaleur', 'Autre demande'],
    },
    certifications: {
      eyebrow:  '— Certifications & Garanties',
      title:    'Des travaux certifiés',
      subtitle: 'Nos qualifications Qualipac et RGE vous garantissent des installations dans le respect des normes.',
    },

    footer: {
      description: 'Votre artisan plombier chauffagiste au Tablier. Installations, dépannages et énergies renouvelables.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'Tarifs',    href: '#tarifs' },
        { label: 'FAQ',       href: '#faq' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par <a href="https://guyboireau.com" rel="noopener" target="_blank">guyboireau.com</a>',
    },
    portfolio: {
      items: [
        {
          title:       '[PROJET 1]',
          category:    '[CATÉGORIE]',
          location:    '[Ville]',
          year:        '2024',
          description: '[Description courte du chantier et des travaux réalisés.]',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
        {
          title:       '[PROJET 2]',
          category:    '[CATÉGORIE]',
          location:    '[Ville]',
          year:        '2024',
          description: '[Description courte du chantier et des travaux réalisés.]',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
        {
          title:       '[PROJET 3]',
          category:    '[CATÉGORIE]',
          location:    '[Ville]',
          year:        '2023',
          description: '[Description courte du chantier et des travaux réalisés.]',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
      ]
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;

// ─── Palettes de départ (copier-coller les valeurs dans branding) ──────────
// Plombier  → primary #1d62c8  primaryDark #1550a8  primarySoft #dbeafe  accent #f08c00
// Artisan   → primary #b8763d  primaryDark #9a6128  primarySoft #f6e7d4
// BtoB      → primary #1e3a5f  primaryDark #152b47  primarySoft #dbeafe
// Restaurant→ primary #c1440e  primaryDark #a03809  primarySoft #fde8de
// Santé     → primary #4a7c59  primaryDark #3a6347  primarySoft #dcf0e4
// ABPM      → primary #0ea5e9  primaryDark #0284c7  primarySoft #e0f2fe (Outfit)
