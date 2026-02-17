// Language translations
const translations = {
    en: {
        'logo': 'Bluegrass AI',
        'nav-problem': 'The Problem',
        'nav-solution': 'The Solution',
        'nav-needs': 'What We Offer',
        'nav-quiz': 'Quick Quiz',
        'nav-started': 'Get Started',
        'hero-title': 'Your Business Is Missing Leads Every Single Day',
        'hero-subtitle': 'While you\'re busy, customers call and hang up. AI captures them instead of silence.',
        'hero-btn': 'Answer 3 Questions',
        'problem-title': 'The Reality Check',
        'problem-card1-title': '📞 Missed Calls = Lost Money',
        'problem-card1-text': 'The average local service business misses 15-20 calls per week. That\'s potential revenue walking away.',
        'problem-card2-title': '📱 Voicemail Is Dead',
        'problem-card2-text': 'Customers don\'t want to leave messages. They want answers. If you don\'t respond in 5 minutes, they call your competitor.',
        'problem-card3-title': '💰 What\'s This Costing You?',
        'problem-card3-text': '20 missed calls/week × $500 average client value = $10,000/week in lost revenue.',
        'solution-title': 'The Solution: AI That Works While You Don\'t',
        'solution-subtitle': 'LeadShield AI automatically:',
        'solution-feature1': '✅ Detects when customers call but you can\'t answer',
        'solution-feature2': '✅ Sends them an instant SMS instead of voicemail',
        'solution-feature3': '✅ Keeps the lead warm while you finish your current job',
        'solution-feature4': '✅ Alerts you immediately so you can call back',
        'solution-feature5': '✅ Converts missed calls into booked appointments',
        'solution-step1': 'Customer Calls',
        'solution-step2': 'You\'re Busy',
        'solution-step3': 'AI Texts Them Instantly',
        'solution-step4': 'Lead Captured (Not Lost)',
        'questions-title': 'Answer These 3 Questions Honestly',
        'questions-subtitle': 'Most business owners answer these quietly and realize they\'re leaving money on the table',
        'q1-title': 'Question 1: How Many Calls Per Week?',
        'q1-text': 'On average, how many inbound customer calls do you miss per week (go to voicemail)?',
        'q1-hint': 'Don\'t overthink it - rough estimate is fine',
        'q2-title': 'Question 2: What\'s Your Average Client Value?',
        'q2-text': 'What\'s the average revenue per customer job/service you perform?',
        'q2-hint': 'Include labor + materials',
        'q3-title': 'Question 3: What\'s Your Close Rate?',
        'q3-text': 'Of the calls you DO answer, what percentage become paying customers?',
        'q3-hint': 'Enter as percentage (0-100)',
        'calc-btn': 'Show Me The Math',
        'result-title': 'Your Weekly Opportunity Cost',
        'result-text': 'You\'re likely leaving {{lostRevenue}} per week on the table',
        'result-annual': 'That\'s {{annualRevenue}} per year in lost business.',
        'result-footer': 'And these are just the leads you\'re MISSING. Imagine capturing them back.',
        'pricing-title': 'Pricing That Pays For Itself',
        'pricing-starter': 'Starter',
        'pricing-pro': 'Professional',
        'pricing-ent': 'Enterprise',
        'pricing-month': '/month',
        'pricing-custom': 'Custom',
        'pricing-popular': 'Most Popular',
        'pricing-s1': '✓ 1 phone number monitored',
        'pricing-s2': '✓ SMS alerts for missed calls',
        'pricing-s3': '✓ Basic AI notifications',
        'pricing-s4': '✓ Email support',
        'pricing-p1': '✓ 3 phone numbers',
        'pricing-p2': '✓ Smart SMS routing',
        'pricing-p3': '✓ Call transcription',
        'pricing-p4': '✓ Lead qualification AI',
        'pricing-p5': '✓ Priority support',
        'pricing-e1': '✓ Unlimited numbers',
        'pricing-e2': '✓ Custom AI responses',
        'pricing-e3': '✓ API access',
        'pricing-e4': '✓ Dedicated account manager',
        'pricing-btn': 'Get Started',
        'pricing-trial': 'Start Free Trial',
        'pricing-contact': 'Contact Sales',
        'pricing-note': 'Not ready? Get a free week trial. No credit card needed.',
        'needs-title': 'Your Complete Online Solution',
        'needs-subtitle': 'We handle everything your business needs to thrive online',
        'need-calls': 'Never Miss a Call',
        'need-calls-desc': 'AI detects missed calls and instantly notifies customers via SMS. Convert dropped calls into booked appointments.',
        'need-chat': 'Smart Chat Support',
        'need-chat-desc': 'AI-powered chatbot answers common questions 24/7. Qualify leads automatically while you sleep.',
        'need-web': 'Mobile-First Website',
        'need-web-desc': 'Professional website optimized for potential customers on phones. Get found on Google, convert browsers into clients.',
        'need-analytics': 'Real-Time Analytics',
        'need-analytics-desc': 'See exactly where your leads come from and which marketing works. Track every dollar spent.',
        'need-email': 'Email Campaigns',
        'need-email-desc': 'Professional email marketing to stay top-of-mind. Automated follow-ups turn prospects into repeat customers.',
        'need-seo': 'Local SEO Optimization',
        'need-seo-desc': 'Get your business to the top of Google Maps searches. Show up first in your local area.',
        'needs-promise': 'Stop juggling 10 different tools. One platform. One dashboard. Everything you need to grow.',
        'needs-btn': 'See Your Complete Toolkit',
        'cta-title': 'Stop Leaving Money On The Table',
        'cta-subtitle': 'Join local contractors, plumbers, electricians, and service businesses already capturing every lead',
        'cta-btn1': 'Schedule 15-Min Demo',
        'cta-btn2': 'Start 7-Day Free Trial',
        'cta-footer': 'No credit card. No commitment. See your first captured lead in minutes.',
        'footer-copy': '© 2026 Bluegrass AI. Your Complete Online Solution.',
        'footer-contact': 'Questions? Email: hello@bluegrassai.com | Phone: (555) 000-0000'
    },
    es: {
        'logo': 'Bluegrass IA',
        'nav-problem': 'El Problema',
        'nav-solution': 'La Solución',
        'nav-needs': 'Lo Que Ofrecemos',
        'nav-quiz': 'Cuestionario Rápido',
        'nav-started': 'Comenzar',
        'hero-title': 'Tu Negocio Está Perdiendo Clientes Potenciales Cada Día',
        'hero-subtitle': 'Mientras estás ocupado, los clientes llaman y cuelgan. La IA los captura en lugar del silencio.',
        'hero-btn': 'Responde 3 Preguntas',
        'problem-title': 'La Realidad',
        'problem-card1-title': '📞 Llamadas Perdidas = Dinero Perdido',
        'problem-card1-text': 'El negocio de servicios locales promedio pierde 15-20 llamadas por semana. Esos son ingresos potenciales que se van.',
        'problem-card2-title': '📱 El Correo de Voz Está Muerto',
        'problem-card2-text': 'Los clientes no quieren dejar mensajes. Quieren respuestas. Si no respondes en 5 minutos, llaman a tu competidor.',
        'problem-card3-title': '💰 ¿Cuánto Te Está Costando?',
        'problem-card3-text': '20 llamadas perdidas/semana × $500 valor promedio del cliente = $10,000/semana en ingresos perdidos.',
        'solution-title': 'La Solución: IA Que Funciona Mientras Tú No',
        'solution-subtitle': 'LeadShield IA automáticamente:',
        'solution-feature1': '✅ Detecta cuando los clientes llaman pero no puedes responder',
        'solution-feature2': '✅ Les envía un SMS instantáneo en lugar de correo de voz',
        'solution-feature3': '✅ Mantiene el cliente potencial caliente mientras terminas tu trabajo actual',
        'solution-feature4': '✅ Te alerta inmediatamente para que puedas devolver la llamada',
        'solution-feature5': '✅ Convierte llamadas perdidas en citas reservadas',
        'solution-step1': 'El Cliente Llama',
        'solution-step2': 'Estás Ocupado',
        'solution-step3': 'La IA Les Envía Mensajes al Instante',
        'solution-step4': 'Cliente Potencial Capturado (No Perdido)',
        'questions-title': 'Responde Estas 3 Preguntas Honestamente',
        'questions-subtitle': 'La mayoría de los propietarios de negocios responden estas preguntas en silencio y se dan cuenta de que están dejando dinero sobre la mesa',
        'q1-title': 'Pregunta 1: ¿Cuántas Llamadas Por Semana?',
        'q1-text': '¿En promedio, cuántas llamadas de clientes entrantes pierdes por semana?',
        'q1-hint': 'No lo pienses demasiado - una estimación aproximada está bien',
        'q2-title': 'Pregunta 2: ¿Cuál Es Tu Valor Promedio del Cliente?',
        'q2-text': '¿Cuál es el ingreso promedio por trabajo/servicio del cliente que realizas?',
        'q2-hint': 'Incluye mano de obra + materiales',
        'q3-title': 'Pregunta 3: ¿Cuál Es Tu Tasa De Cierre?',
        'q3-text': 'De las llamadas que SÍ respondes, ¿qué porcentaje se convierte en clientes que pagan?',
        'q3-hint': 'Ingresa como porcentaje (0-100)',
        'calc-btn': 'Muéstrame El Cálculo',
        'result-title': 'Tu Costo de Oportunidades Semanal',
        'result-text': 'Probablemente estés dejando {{lostRevenue}} por semana sobre la mesa',
        'result-annual': 'Eso son {{annualRevenue}} por año en negocios perdidos.',
        'result-footer': 'Y estos son solo los clientes potenciales que ESTÁS PERDIENDO. Imagina capturarlos de vuelta.',
        'pricing-title': 'Precios Que Se Pagan Solos',
        'pricing-starter': 'Básico',
        'pricing-pro': 'Profesional',
        'pricing-ent': 'Empresa',
        'pricing-month': '/mes',
        'pricing-custom': 'Personalizado',
        'pricing-popular': 'Más Popular',
        'pricing-s1': '✓ 1 número telefónico monitoreado',
        'pricing-s2': '✓ Alertas de SMS por llamadas perdidas',
        'pricing-s3': '✓ Notificaciones básicas de IA',
        'pricing-s4': '✓ Soporte por email',
        'pricing-p1': '✓ 3 números telefónicos',
        'pricing-p2': '✓ Enrutamiento inteligente de SMS',
        'pricing-p3': '✓ Transcripción de llamadas',
        'pricing-p4': '✓ IA de calificación de clientes potenciales',
        'pricing-p5': '✓ Soporte prioritario',
        'pricing-e1': '✓ Números ilimitados',
        'pricing-e2': '✓ Respuestas de IA personalizadas',
        'pricing-e3': '✓ Acceso a API',
        'pricing-e4': '✓ Gerente de cuenta dedicado',
        'pricing-btn': 'Comenzar',
        'pricing-trial': 'Comenzar Prueba Gratuita',
        'pricing-contact': 'Contactar Ventas',
        'pricing-note': '¿No estás listo? Obtén una prueba gratuita de una semana. Sin tarjeta de crédito.',
        'needs-title': 'Tu Solución Completa En Línea',
        'needs-subtitle': 'Nos encargamos de todo lo que tu negocio necesita para prosperar en línea',
        'need-calls': 'Nunca Pierdas Una Llamada',
        'need-calls-desc': 'La IA detecta llamadas perdidas y notifica instantáneamente a los clientes vía SMS. Convierte llamadas perdidas en citas reservadas.',
        'need-chat': 'Soporte De Chat Inteligente',
        'need-chat-desc': 'Chatbot impulsado por IA responde preguntas comunes 24/7. Califica clientes potenciales automáticamente mientras duermes.',
        'need-web': 'Sitio Web Móvil Primero',
        'need-web-desc': 'Sitio web profesional optimizado para clientes potenciales en teléfonos. Aparece en Google, convierte navegadores en clientes.',
        'need-analytics': 'Análisis En Tiempo Real',
        'need-analytics-desc': 'Ve exactamente de dónde vienen tus clientes potenciales y qué marketing funciona. Rastrear cada dólar gastado.',
        'need-email': 'Campañas De Correo Electrónico',
        'need-email-desc': 'Marketing de correo electrónico profesional para mantenerte en la mente de la gente. Las seguimientos automáticos convierten prospectos en clientes frecuentes.',
        'need-seo': 'Optimización Local De SEO',
        'need-seo-desc': 'Coloca tu negocio en la parte superior de las búsquedas de Google Maps. Aparece primero en tu área local.',
        'needs-promise': 'Deja de malabarear 10 herramientas diferentes. Una plataforma. Un panel de control. Todo lo que necesitas para crecer.',
        'needs-btn': 'Ver Tu Kit Completo',
        'cta-title': 'Deja De Dejar Dinero Sobre La Mesa',
        'cta-subtitle': 'Únete a contratistas locales, plomeros, electricistas y empresas de servicios que ya están capturando a cada cliente potencial',
        'cta-btn1': 'Agendar Demo de 15 Minutos',
        'cta-btn2': 'Comenzar Prueba Gratuita de 7 Días',
        'cta-footer': 'Sin tarjeta de crédito. Sin compromiso. Ve tu primer cliente potencial capturado en minutos.',
        'footer-copy': '© 2026 Bluegrass IA. Tu Solución Completa En Línea.',
        'footer-contact': '¿Preguntas? Email: hello@bluegrassai.com | Teléfono: (555) 000-0000'
    },
    fr: {
        'logo': 'Bluegrass IA',
        'nav-problem': 'Le Problème',
        'nav-solution': 'La Solution',
        'nav-needs': 'Ce Que Nous Proposons',
        'nav-quiz': 'Questionnaire Rapide',
        'nav-started': 'Commencer',
        'hero-title': 'Votre Entreprise Perd Des Prospects Chaque Jour',
        'hero-subtitle': 'Pendant que vous êtes occupé, les clients appellent et raccrochent. L\'IA les capture au lieu du silence.',
        'hero-btn': 'Répondez à 3 Questions',
        'problem-title': 'La Réalité',
        'problem-card1-title': '📞 Appels Manqués = Argent Perdu',
        'problem-card1-text': 'L\'entreprise de services locaux moyenne perd 15-20 appels par semaine. C\'est des revenus potentiels qui s\'envolent.',
        'problem-card2-title': '📱 La Messagerie Vocale Est Morte',
        'problem-card2-text': 'Les clients ne veulent pas laisser de messages. Ils veulent des réponses. Si vous ne répondez pas en 5 minutes, ils appellent votre concurrent.',
        'problem-card3-title': '💰 Combien Cela Vous Coûte-t-il?',
        'problem-card3-text': '20 appels manqués/semaine × 500 $ de valeur cliente moyenne = 10 000 $/semaine de revenus perdus.',
        'solution-title': 'La Solution: Une IA Qui Fonctionne Pendant Que Vous Ne Travaillez Pas',
        'solution-subtitle': 'LeadShield IA automatiquement:',
        'solution-feature1': '✅ Détecte quand les clients appellent mais que vous ne pouvez pas répondre',
        'solution-feature2': '✅ Leur envoie un SMS instantané au lieu de la messagerie vocale',
        'solution-feature3': '✅ Maintient le prospect au chaud pendant que vous terminez votre travail actuel',
        'solution-feature4': '✅ Vous alerte immédiatement pour que vous puissiez rappeler',
        'solution-feature5': '✅ Convertit les appels manqués en rendez-vous réservés',
        'solution-step1': 'Le Client Appelle',
        'solution-step2': 'Vous Êtes Occupé',
        'solution-step3': 'L\'IA Leur Envoie des Messages Instantanément',
        'solution-step4': 'Prospect Capturé (Pas Perdu)',
        'questions-title': 'Répondez Honnêtement à Ces 3 Questions',
        'questions-subtitle': 'La plupart des propriétaires d\'entreprises répondent silencieusement à ces questions et réalisent qu\'ils laissent de l\'argent sur la table',
        'q1-title': 'Question 1: Combien d\'Appels Par Semaine?',
        'q1-text': 'En moyenne, combien d\'appels de clients entrants manquez-vous par semaine?',
        'q1-hint': 'Ne vous posez pas trop de questions - une estimation approximative convient',
        'q2-title': 'Question 2: Quelle Est Votre Valeur Cliente Moyenne?',
        'q2-text': 'Quel est le revenu moyen par travail/service client que vous effectuez?',
        'q2-hint': 'Incluez la main-d\'œuvre + les matériaux',
        'q3-title': 'Question 3: Quel Est Votre Taux De Conversion?',
        'q3-text': 'Sur les appels auxquels vous RÉPONDEZ, quel pourcentage devient des clients qui paient?',
        'q3-hint': 'Entrez en pourcentage (0-100)',
        'calc-btn': 'Montrez-moi Les Calculs',
        'result-title': 'Votre Coût d\'Opportunité Hebdomadaire',
        'result-text': 'Vous laissez probablement {{lostRevenue}} par semaine sur la table',
        'result-annual': 'C\'est {{annualRevenue}} par an en affaires perdues.',
        'result-footer': 'Et ce ne sont que les prospects que vous MANQUEZ. Imaginez les récupérer.',
        'pricing-title': 'Des Tarifs Qui Se Remboursent',
        'pricing-starter': 'Starter',
        'pricing-pro': 'Professionnel',
        'pricing-ent': 'Entreprise',
        'pricing-month': '/mois',
        'pricing-custom': 'Personnalisé',
        'pricing-popular': 'Plus Populaire',
        'pricing-s1': '✓ 1 numéro de téléphone surveillé',
        'pricing-s2': '✓ Alertes SMS pour appels manqués',
        'pricing-s3': '✓ Notifications IA de base',
        'pricing-s4': '✓ Support par email',
        'pricing-p1': '✓ 3 numéros de téléphone',
        'pricing-p2': '✓ Routage SMS intelligent',
        'pricing-p3': '✓ Transcription d\'appels',
        'pricing-p4': '✓ IA de qualification des prospects',
        'pricing-p5': '✓ Support prioritaire',
        'pricing-e1': '✓ Numéros illimités',
        'pricing-e2': '✓ Réponses IA personnalisées',
        'pricing-e3': '✓ Accès à l\'API',
        'pricing-e4': '✓ Gestionnaire de compte dédié',
        'pricing-btn': 'Commencer',
        'pricing-trial': 'Commencer L\'Essai Gratuit',
        'pricing-contact': 'Contacter Les Ventes',
        'pricing-note': 'Pas prêt? Obtenez un essai gratuit d\'une semaine. Aucune carte de crédit requise.',
        'needs-title': 'Votre Solution Complète En Ligne',
        'needs-subtitle': 'Nous gérons tout ce dont votre entreprise a besoin pour prospérer en ligne',
        'need-calls': 'Ne Manquez Jamais Un Appel',
        'need-calls-desc': 'L\'IA détecte les appels manqués et notifie instantanément les clients par SMS. Convertissez les appels abandonnés en rendez-vous réservés.',
        'need-chat': 'Support De Chat Intelligent',
        'need-chat-desc': 'Chatbot alimenté par l\'IA répond aux questions courantes 24h/24, 7j/7. Qualifiez automatiquement les prospects pendant que vous dormez.',
        'need-web': 'Site Web D\'abord Mobile',
        'need-web-desc': 'Site web professionnel optimisé pour les prospects sur les téléphones. Trouvez-vous sur Google, convertissez les navigateurs en clients.',
        'need-analytics': 'Analyse En Temps Réel',
        'need-analytics-desc': 'Voyez exactement d\'où viennent vos prospects et quel marketing fonctionne. Suivez chaque dollar dépensé.',
        'need-email': 'Campagnes Email',
        'need-email-desc': 'Marketing par email professionnel pour rester dans les esprits. Les suivis automatisés convertissent les prospects en clients réguliers.',
        'need-seo': 'Optimisation Locale Du SEO',
        'need-seo-desc': 'Obtenez votre entreprise en haut des recherches Google Maps. Apparaissez en premier dans votre région.',
        'needs-promise': 'Arrêtez de jongler avec 10 outils différents. Une plateforme. Un tableau de bord. Tout ce dont vous avez besoin pour grandir.',
        'needs-btn': 'Voir Votre Boîte À Outils Complète',
        'cta-title': 'Passez de Laisser de l\'Argent Sur La Table',
        'cta-subtitle': 'Rejoignez les entrepreneurs locaux, plombiers, électriciens et entreprises de services qui capturent déjà chaque prospect',
        'cta-btn1': 'Programmer une Démo de 15 Minutes',
        'cta-btn2': 'Commencer un Essai Gratuit de 7 Jours',
        'cta-footer': 'Pas de carte de crédit. Aucun engagement. Voyez votre premier prospect capturé en minutes.',
        'footer-copy': '© 2026 Bluegrass IA. Votre Solution Complète En Ligne.',
        'footer-contact': 'Des questions? Email: hello@bluegrassai.com | Téléphone: (555) 000-0000'
    },
    de: {
        'logo': 'Bluegrass KI',
        'nav-problem': 'Das Problem',
        'nav-solution': 'Die Lösung',
        'nav-needs': 'Was Wir Anbieten',
        'nav-quiz': 'Schnelles Quiz',
        'nav-started': 'Anfangen',
        'hero-title': 'Ihr Unternehmen Verliert Jeden Tag Leads',
        'hero-subtitle': 'Während Sie beschäftigt sind, rufen Kunden an und legen auf. Die KI erfasst sie stattdessen in der Stille.',
        'hero-btn': 'Beantworten Sie 3 Fragen',
        'problem-title': 'Die Realität',
        'problem-card1-title': '📞 Verpasste Anrufe = Geld Verloren',
        'problem-card1-text': 'Das durchschnittliche lokale Dienstleistungsunternehmen verpasst 15-20 Anrufe pro Woche. Das ist potenzielle Einnahmen, die entgehen.',
        'problem-card2-title': '📱 Voicemail Ist Tot',
        'problem-card2-text': 'Kunden möchten keine Nachrichten hinterlassen. Sie wollen Antworten. Wenn Sie nicht innerhalb von 5 Minuten antworten, rufen sie Ihren Konkurrenten an.',
        'problem-card3-title': '💰 Wie Viel Kostet Dich Das?',
        'problem-card3-text': '20 verpasste Anrufe/Woche × 500 € durchschnittlicher Kundenwert = 10.000 €/Woche verlorene Einnahmen.',
        'solution-title': 'Die Lösung: KI Die Funktioniert, Während Du Das Nicht Tust',
        'solution-subtitle': 'LeadShield KI automatisch:',
        'solution-feature1': '✅ Erkennt, wenn Kunden anrufen, aber Sie nicht antworten können',
        'solution-feature2': '✅ Sendet ihnen eine sofortige SMS statt Voicemail',
        'solution-feature3': '✅ Hält den Lead warm, während Sie Ihre aktuelle Arbeit abschließen',
        'solution-feature4': '✅ Benachrichtigt Sie sofort, damit Sie zurückrufen können',
        'solution-feature5': '✅ Wandelt verpasste Anrufe in gebuchte Termine um',
        'solution-step1': 'Kunde Ruft An',
        'solution-step2': 'Sie Sind Beschäftigt',
        'solution-step3': 'KI Sendet Ihnen Sofort Nachrichten',
        'solution-step4': 'Lead Erfasst (Nicht Verloren)',
        'questions-title': 'Beantworten Sie Diese 3 Fragen Ehrlich',
        'questions-subtitle': 'Die meisten Geschäftsinhaber beantworten diese Fragen stillschweigend und erkennen, dass sie Geld auf dem Tisch lassen',
        'q1-title': 'Frage 1: Wie Viele Anrufe Pro Woche?',
        'q1-text': 'Wie viele eingehende Kundenanrufe verpassen Sie durchschnittlich pro Woche?',
        'q1-hint': 'Denken Sie nicht zu viel nach - eine grobe Schätzung ist in Ordnung',
        'q2-title': 'Frage 2: Was Ist Dein Durchschnittlicher Kundenwert?',
        'q2-text': 'Wie hoch ist der durchschnittliche Umsatz pro Kundenauftrag/Service, den Sie erbringen?',
        'q2-hint': 'Arbeitskosten + Material einschließen',
        'q3-title': 'Frage 3: Was Ist Deine Abschlussquote?',
        'q3-text': 'Von den Anrufen, die Sie BEANTWORTEN, welcher Prozentsatz wird zu zahlenden Kunden?',
        'q3-hint': 'Als Prozentsatz eingeben (0-100)',
        'calc-btn': 'Zeigen Sie Mir Die Berechnung',
        'result-title': 'Deine Wöchentlichen Opportunitätskosten',
        'result-text': 'Du lässt wahrscheinlich {{lostRevenue}} pro Woche auf dem Tisch',
        'result-annual': 'Das sind {{annualRevenue}} pro Jahr im verlorenen Geschäft.',
        'result-footer': 'Und das sind nur die Leads, die du VERLIERST. Stell dir vor, sie zurückzuholen.',
        'pricing-title': 'Preise Die Sich Selbst Amortisieren',
        'pricing-starter': 'Anfänger',
        'pricing-pro': 'Professionell',
        'pricing-ent': 'Unternehmen',
        'pricing-month': '/Monat',
        'pricing-custom': 'Maßgeschneidert',
        'pricing-popular': 'Am Beliebtesten',
        'pricing-s1': '✓ 1 überwachte Telefonnummer',
        'pricing-s2': '✓ SMS-Benachrichtigungen für verpasste Anrufe',
        'pricing-s3': '✓ Grundlegende KI-Benachrichtigungen',
        'pricing-s4': '✓ E-Mail-Support',
        'pricing-p1': '✓ 3 Telefonnummern',
        'pricing-p2': '✓ Intelligentes SMS-Routing',
        'pricing-p3': '✓ Anruftranskription',
        'pricing-p4': '✓ Lead-Qualifizierungs-KI',
        'pricing-p5': '✓ Prioritätssupport',
        'pricing-e1': '✓ Unbegrenzte Nummern',
        'pricing-e2': '✓ Benutzerdefinierte KI-Antworten',
        'pricing-e3': '✓ API-Zugriff',
        'pricing-e4': '✓ Dedizierter Account Manager',
        'pricing-btn': 'Anfangen',
        'pricing-trial': 'Kostenlose Testversion Starten',
        'pricing-contact': 'Verkauf Kontaktieren',
        'pricing-note': 'Nicht bereit? Holen Sie sich eine kostenlose Probe für eine Woche. Keine Kreditkarte erforderlich.',
        'needs-title': 'Ihre Komplette Online-Lösung',
        'needs-subtitle': 'Wir kümmern uns um alles, was Ihr Unternehmen online zum Gedeihen braucht',
        'need-calls': 'Verpassen Sie Niemals Einen Anruf',
        'need-calls-desc': 'Die KI erkennt verpasste Anrufe und benachrichtigt Kunden sofort per SMS. Wandeln Sie nicht beantwortete Anrufe in gebuchte Termine um.',
        'need-chat': 'Intelligenter Chat-Support',
        'need-chat-desc': 'KI-gestützter Chatbot beantwortet häufige Fragen 24/7. Qualifizieren Sie Leads automatisch, während Sie schlafen.',
        'need-web': 'Mobile-First-Website',
        'need-web-desc': 'Professionelle Website optimiert für potenzielle Kunden auf Telefonen. Werden Sie auf Google gefunden, konvertieren Sie Browser in Kunden.',
        'need-analytics': 'Echtzeit-Analysen',
        'need-analytics-desc': 'Sehen Sie genau, woher Ihre Leads kommen und welches Marketing funktioniert. Verfolgen Sie jeden ausgegebenen Dollar.',
        'need-email': 'E-Mail-Kampagnen',
        'need-email-desc': 'Professionelles E-Mail-Marketing, um präsent zu bleiben. Automatisierte Verfolgungen verwandeln Interessenten in wiederholte Kunden.',
        'need-seo': 'Lokale SEO-Optimierung',
        'need-seo-desc': 'Bringen Sie Ihr Geschäft nach oben in Google Maps-Suchvorgängen. Erscheinen Sie zuerst in Ihrer Nähe.',
        'needs-promise': 'Hören Sie auf, mit 10 verschiedenen Tools zu jonglieren. Eine Plattform. Ein Dashboard. Alles, was Sie zum Wachsen brauchen.',
        'needs-btn': 'Sehen Sie Ihr Komplettes Toolkit',
        'cta-title': 'Höre Auf, Geld Auf Dem Tisch Zu Lassen',
        'cta-subtitle': 'Treten Sie lokalen Auftragnehmern, Klempnern, Elektrikern und Dienstleistungsunternehmen bei, die bereits jeden Lead erfassen',
        'cta-btn1': '15-Minuten-Demo Vereinbaren',
        'cta-btn2': 'Kostenlose 7-Tage-Testversion Starten',
        'cta-footer': 'Keine Kreditkarte. Keine Verpflichtung. Sehen Sie Ihren ersten erfassten Lead in Minuten.',
        'footer-copy': '© 2026 Bluegrass KI. Ihre Komplette Online-Lösung.',
        'footer-contact': 'Fragen? Email: hello@bluegrassai.com | Telefon: (555) 000-0000'
    },
    pt: {
        'logo': 'Bluegrass IA',
        'nav-problem': 'O Problema',
        'nav-solution': 'A Solução',
        'nav-needs': 'O Que Oferecemos',
        'nav-quiz': 'Questionário Rápido',
        'nav-started': 'Comece',
        'hero-title': 'Seu Negócio Está Perdendo Leads Todos Os Dias',
        'hero-subtitle': 'Enquanto você está ocupado, os clientes ligam e desligam. A IA os captura em vez do silêncio.',
        'hero-btn': 'Responda 3 Perguntas',
        'problem-title': 'A Realidade',
        'problem-card1-title': '📞 Chamadas Perdidas = Dinheiro Perdido',
        'problem-card1-text': 'O negócio de serviços locais médio perde 15-20 chamadas por semana. Essa é uma receita potencial indo embora.',
        'problem-card2-title': '📱 A Caixa Postal Está Morta',
        'problem-card2-text': 'Os clientes não querem deixar mensagens. Eles querem respostas. Se você não responder em 5 minutos, eles ligam para seu concorrente.',
        'problem-card3-title': '💰 Quanto Isso Está Custando Para Você?',
        'problem-card3-text': '20 chamadas perdidas/semana × $500 valor cliente médio = $10.000/semana em receita perdida.',
        'solution-title': 'A Solução: IA Que Funciona Enquanto Você Não',
        'solution-subtitle': 'LeadShield IA automaticamente:',
        'solution-feature1': '✅ Detecta quando os clientes ligam mas você não pode atender',
        'solution-feature2': '✅ Envia um SMS instantâneo em vez de caixa postal',
        'solution-feature3': '✅ Mantém o lead aquecido enquanto você termina seu trabalho atual',
        'solution-feature4': '✅ Alerta você imediatamente para que você possa ligar de volta',
        'solution-feature5': '✅ Converte chamadas perdidas em compromissos marcados',
        'solution-step1': 'Cliente Liga',
        'solution-step2': 'Você Está Ocupado',
        'solution-step3': 'IA Envia Mensagens Instantaneamente',
        'solution-step4': 'Lead Capturado (Não Perdido)',
        'questions-title': 'Responda Honestamente Estas 3 Perguntas',
        'questions-subtitle': 'A maioria dos proprietários de negócios responde a essas perguntas em silêncio e percebe que está deixando dinheiro na mesa',
        'q1-title': 'Pergunta 1: Quantas Ligações Por Semana?',
        'q1-text': 'Em média, quantas chamadas de clientes recebidas você perde por semana?',
        'q1-hint': 'Não pense muito - uma estimativa aproximada está bem',
        'q2-title': 'Pergunta 2: Qual É Seu Valor Cliente Médio?',
        'q2-text': 'Qual é a receita média por trabalho/serviço do cliente que você realiza?',
        'q2-hint': 'Incluir mão de obra + materiais',
        'q3-title': 'Pergunta 3: Qual É Sua Taxa De Fechamento?',
        'q3-text': 'Das chamadas que VOCÊ ATENDE, qual percentual se torna clientes pagantes?',
        'q3-hint': 'Insira como porcentagem (0-100)',
        'calc-btn': 'Mostre-Me A Matemática',
        'result-title': 'Seu Custo De Oportunidade Semanal',
        'result-text': 'Você provavelmente está deixando {{lostRevenue}} por semana sobre a mesa',
        'result-annual': 'Isso é {{annualRevenue}} por ano em negócios perdidos.',
        'result-footer': 'E esses são apenas os leads que você está PERDENDO. Imagine capturá-los novamente.',
        'pricing-title': 'Preços Que Se Pagam',
        'pricing-starter': 'Iniciante',
        'pricing-pro': 'Profissional',
        'pricing-ent': 'Empresa',
        'pricing-month': '/mês',
        'pricing-custom': 'Personalizado',
        'pricing-popular': 'Mais Popular',
        'pricing-s1': '✓ 1 número de telefone monitorado',
        'pricing-s2': '✓ Alertas de SMS para chamadas perdidas',
        'pricing-s3': '✓ Notificações básicas de IA',
        'pricing-s4': '✓ Suporte por email',
        'pricing-p1': '✓ 3 números de telefone',
        'pricing-p2': '✓ Roteamento inteligente de SMS',
        'pricing-p3': '✓ Transcrição de chamadas',
        'pricing-p4': '✓ IA de qualificação de leads',
        'pricing-p5': '✓ Suporte prioritário',
        'pricing-e1': '✓ Números ilimitados',
        'pricing-e2': '✓ Respostas de IA personalizadas',
        'pricing-e3': '✓ Acesso à API',
        'pricing-e4': '✓ Gerenciador de conta dedicado',
        'pricing-btn': 'Comece',
        'pricing-trial': 'Comece A Avaliação Gratuita',
        'pricing-contact': 'Contate Vendas',
        'pricing-note': 'Não pronto? Obtenha uma avaliação gratuita de uma semana. Sem cartão de crédito.',
        'needs-title': 'Sua Solução Completa Online',
        'needs-subtitle': 'Nos encarregamos de tudo que seu negócio precisa para prosperar online',
        'need-calls': 'Nunca Perca Uma Ligação',
        'need-calls-desc': 'A IA detecta chamadas perdidas e notifica instantaneamente os clientes via SMS. Converta chamadas não atendidas em compromissos agendados.',
        'need-chat': 'Suporte De Chat Inteligente',
        'need-chat-desc': 'Chatbot alimentado por IA responde a perguntas comuns 24/7. Qualifique automaticamente leads enquanto você dorme.',
        'need-web': 'Site Da Web Mobile-First',
        'need-web-desc': 'Site profissional otimizado para clientes em potencial em telefones. Seja encontrado no Google, converta navegadores em clientes.',
        'need-analytics': 'Análise Em Tempo Real',
        'need-analytics-desc': 'Veja exatamente de onde vêm seus leads e qual marketing funciona. Rastreie cada dólar gasto.',
        'need-email': 'Campanhas De Email',
        'need-email-desc': 'Marketing de email profissional para não ser esquecido. Os acompanhamentos automáticos convertem prospects em clientes repetidos.',
        'need-seo': 'Otimização Local De SEO',
        'need-seo-desc': 'Coloque seu negócio no topo das buscas do Google Maps. Apareça em primeiro lugar em sua área.',
        'needs-promise': 'Pare de malabarear 10 ferramentas diferentes. Uma plataforma. Um painel. Tudo que você precisa para crescer.',
        'needs-btn': 'Veja Seu Kit Completo',
        'cta-title': 'Pare De Deixar Dinheiro Sobre A Mesa',
        'cta-subtitle': 'Junte-se a empreiteiros locais, encanadores, eletricistas e empresas de serviços que já estão capturando todos os leads',
        'cta-btn1': 'Agende Uma Demo de 15 Minutos',
        'cta-btn2': 'Comece A Avaliação Gratuita de 7 Dias',
        'cta-footer': 'Sem cartão de crédito. Sem compromisso. Veja seu primeiro lead capturado em minutos.',
        'footer-copy': '© 2026 Bluegrass IA. Sua Solução Completa Online.',
        'footer-contact': 'Dúvidas? Email: hello@bluegrassai.com | Telefone: (555) 000-0000'
    },
    it: {
        'logo': 'Bluegrass IA',
        'nav-problem': 'Il Problema',
        'nav-solution': 'La Soluzione',
        'nav-needs': 'Cosa Offriamo',
        'nav-quiz': 'Quiz Veloce',
        'nav-started': 'Inizia',
        'hero-title': 'Il Tuo Business Sta Perdendo Lead Ogni Giorno',
        'hero-subtitle': 'Mentre sei occupato, i clienti chiamano e riattaccano. L\'IA li cattura invece del silenzio.',
        'hero-btn': 'Rispondi a 3 Domande',
        'problem-title': 'La Realtà',
        'problem-card1-title': '📞 Chiamate Perse = Soldi Persi',
        'problem-card1-text': 'L\'azienda di servizi locale media perde 15-20 chiamate a settimana. È un ricavo potenziale che se ne va.',
        'problem-card2-title': '📱 La Segreteria È Morta',
        'problem-card2-text': 'I clienti non vogliono lasciare messaggi. Vogliono risposte. Se non rispondi entro 5 minuti, chiamano il tuo concorrente.',
        'problem-card3-title': '💰 Quanto Ti Sta Costando?',
        'problem-card3-text': '20 chiamate perse/settimana × $500 valore cliente medio = $10.000/settimana di ricavo perso.',
        'solution-title': 'La Soluzione: IA Che Lavora Mentre Tu No',
        'solution-subtitle': 'LeadShield IA automaticamente:',
        'solution-feature1': '✅ Rileva quando i clienti chiamano ma non puoi rispondere',
        'solution-feature2': '✅ Invia loro un SMS istantaneo invece della segreteria',
        'solution-feature3': '✅ Mantiene il lead caldo mentre finisci il tuo lavoro attuale',
        'solution-feature4': '✅ Ti avverte immediatamente per poter richiamare',
        'solution-feature5': '✅ Converte le chiamate perse in appuntamenti prenotati',
        'solution-step1': 'Il Cliente Chiama',
        'solution-step2': 'Sei Occupato',
        'solution-step3': 'L\'IA Invia Messaggi Istantaneamente',
        'solution-step4': 'Lead Catturato (Non Perso)',
        'questions-title': 'Rispondi Onestamente A Queste 3 Domande',
        'questions-subtitle': 'La maggior parte dei proprietari di aziende risponde silenziosamente a queste domande e si rende conto di stare lasciando soldi sul tavolo',
        'q1-title': 'Domanda 1: Quante Chiamate A Settimana?',
        'q1-text': 'In media, quante chiamate di clienti in arrivo perdi a settimana?',
        'q1-hint': 'Non pensare troppo - una stima approssimativa va bene',
        'q2-title': 'Domanda 2: Qual È Il Tuo Valore Cliente Medio?',
        'q2-text': 'Qual è il ricavo medio per lavoro/servizio del cliente che esegui?',
        'q2-hint': 'Includi manodopera + materiali',
        'q3-title': 'Domanda 3: Qual È Il Tuo Tasso Di Chiusura?',
        'q3-text': 'Delle chiamate che RISPONDI, quale percentuale diventa cliente pagante?',
        'q3-hint': 'Inserisci come percentuale (0-100)',
        'calc-btn': 'Mostrami La Matematica',
        'result-title': 'Il Tuo Costo Opportunità Settimanale',
        'result-text': 'Probabilmente stai lasciando {{lostRevenue}} a settimana sul tavolo',
        'result-annual': 'Sono {{annualRevenue}} all\'anno in affari persi.',
        'result-footer': 'E questi sono solo i lead che stai PERDENDO. Immagina di recuperarli.',
        'pricing-title': 'Prezzi Che Si Ripagano',
        'pricing-starter': 'Base',
        'pricing-pro': 'Professionale',
        'pricing-ent': 'Aziendale',
        'pricing-month': '/mese',
        'pricing-custom': 'Personalizzato',
        'pricing-popular': 'Più Popolare',
        'pricing-s1': '✓ 1 numero di telefono monitorato',
        'pricing-s2': '✓ Avvisi SMS per chiamate perse',
        'pricing-s3': '✓ Notifiche IA di base',
        'pricing-s4': '✓ Supporto email',
        'pricing-p1': '✓ 3 numeri di telefono',
        'pricing-p2': '✓ Instradamento SMS intelligente',
        'pricing-p3': '✓ Trascrizione delle chiamate',
        'pricing-p4': '✓ IA di qualificazione dei lead',
        'pricing-p5': '✓ Supporto prioritario',
        'pricing-e1': '✓ Numeri illimitati',
        'pricing-e2': '✓ Risposte IA personalizzate',
        'pricing-e3': '✓ Accesso API',
        'pricing-e4': '✓ Account manager dedicato',
        'pricing-btn': 'Inizia',
        'pricing-trial': 'Inizia La Prova Gratuita',
        'pricing-contact': 'Contatta Le Vendite',
        'pricing-note': 'Non pronto? Ottieni una prova gratuita di una settimana. Nessuna carta di credito richiesta.',
        'needs-title': 'La Tua Soluzione Completa Online',
        'needs-subtitle': 'Ci occupiamo di tutto ciò di cui la tua azienda ha bisogno per prosperare online',
        'need-calls': 'Non Perdere Mai Una Chiamata',
        'need-calls-desc': 'L\'IA rileva le chiamate perse e notifica istantaneamente i clienti via SMS. Converti le chiamate non risposte in appuntamenti prenotati.',
        'need-chat': 'Supporto Chat Intelligente',
        'need-chat-desc': 'Chatbot alimentato da IA risponde a domande comuni 24/7. Qualifica automaticamente i lead mentre dormi.',
        'need-web': 'Sito Web Mobile-First',
        'need-web-desc': 'Sito web professionale ottimizzato per i potenziali clienti su telefoni. Fatti trovare su Google, converti i browser in clienti.',
        'need-analytics': 'Analisi In Tempo Reale',
        'need-analytics-desc': 'Vedi esattamente da dove vengono i tuoi lead e quale marketing funziona. Traccia ogni dollaro speso.',
        'need-email': 'Campagne Email',
        'need-email-desc': 'Marketing email professionale per stare nella memoria di tutti. I follow-up automatici convertono i prospect in clienti ricorrenti.',
        'need-seo': 'Ottimizzazione SEO Locale',
        'need-seo-desc': 'Ottieni il tuo business in cima alle ricerche di Google Maps. Appari per primo nella tua zona.',
        'needs-promise': 'Smetti di fare il giocoliere con 10 strumenti diversi. Una piattaforma. Un dashboard. Tutto ciò di cui hai bisogno per crescere.',
        'needs-btn': 'Vedi Il Tuo Kit Completo',
        'cta-title': 'Smetti Di Lasciare Soldi Sul Tavolo',
        'cta-subtitle': 'Unisciti agli appaltatori locali, idraulici, elettricisti e aziende di servizi che stanno già catturando ogni lead',
        'cta-btn1': 'Pianifica Una Demo Di 15 Minuti',
        'cta-btn2': 'Inizia La Prova Gratuita Di 7 Giorni',
        'cta-footer': 'Nessuna carta di credito. Nessun impegno. Guarda il tuo primo lead catturato in pochi minuti.',
        'footer-copy': '© 2026 Bluegrass IA. La Tua Soluzione Completa Online.',
        'footer-contact': 'Domande? Email: hello@bluegrassai.com | Telefono: (555) 000-0000'
    }
};

// Current language
let currentLang = localStorage.getItem('selectedLang') || 'en';

// Translate page on load
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update button text
    updateLanguageButton(lang);
    
    // Save preference
    localStorage.setItem('selectedLang', lang);
    currentLang = lang;
}

// Update language button appearance
function updateLanguageButton(lang) {
    const langBtn = document.getElementById('langBtn');
    const flags = {
        'en': '🇺🇸 English',
        'es': '🇪🇸 Español',
        'fr': '🇫🇷 Français',
        'de': '🇩🇪 Deutsch',
        'pt': '🇵🇹 Português',
        'it': '🇮🇹 Italiano'
    };
    
    if (langBtn) {
        langBtn.textContent = flags[lang] || flags['en'];
    }
    
    // Update active state in dropdown
    const options = document.querySelectorAll('.lang-option');
    options.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Setup language selector
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Toggle dropdown
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            langDropdown.classList.toggle('active');
        });
    }
    
    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
            langDropdown.classList.remove('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.language-selector')) {
            langDropdown.classList.remove('active');
        }
    });
    
    // Load saved language
    translatePage(currentLang);
});

// Calculate lost revenue based on user inputs
function calculateLoss() {
    const missedCalls = parseFloat(document.getElementById('missedCalls').value) || 0;
    const avgValue = parseFloat(document.getElementById('avgValue').value) || 0;
    const closeRate = parseFloat(document.getElementById('closeRate').value) || 0;

    if (missedCalls === 0 || avgValue === 0 || closeRate === 0) {
        const alertText = currentLang === 'es' ? 'Por favor, completa los tres campos con números mayores que 0' :
                         currentLang === 'fr' ? 'Veuillez remplir les trois champs avec des nombres supérieurs à 0' :
                         currentLang === 'de' ? 'Bitte füllen Sie alle drei Felder mit Zahlen größer als 0 aus' :
                         currentLang === 'pt' ? 'Por favor, preencha todos os três campos com números maiores que 0' :
                         currentLang === 'it' ? 'Si prega di compilare tutti e tre i campi con numeri maggiori di 0' :
                         'Please fill in all three fields with numbers greater than 0';
        alert(alertText);
        return;
    }

    // Calculate weekly lost revenue
    const closeProbability = closeRate / 100;
    const weeklyLost = missedCalls * avgValue * closeProbability;
    const annualLost = weeklyLost * 52;

    // Display results
    document.getElementById('lostRevenue').textContent = '$' + weeklyLost.toLocaleString('en-US', {maximumFractionDigits: 0});
    document.getElementById('annualRevenue').textContent = '$' + annualLost.toLocaleString('en-US', {maximumFractionDigits: 0});
    
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    
    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Handle Enter key in input fields
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateLoss();
            }
        });
    });
});

// Smooth scroll helper
function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const cta_buttons = document.querySelectorAll('.cta-buttons .btn');
    const pricing_buttons = document.querySelectorAll('.pricing-card .btn');
    
    const handleCTA = function() {
        const alertMessages = {
            'es': 'Próximamente! Los primeros usuarios obtienen un 50% de descuento en los primeros 3 meses.\n\nResponde a esto si te interesa: hello@bluegrassai.com',
            'fr': 'Bientôt disponible! Les premiers utilisateurs reçoivent 50% de rabais pendant les 3 premiers mois.\n\nRépondez ceci si vous êtes intéressé: hello@bluegrassai.com',
            'de': 'Bald verfügbar! Frühe Nutzer erhalten 50% Rabatt auf die ersten 3 Monate.\n\nAntworten Sie darauf, wenn Sie interessiert sind: hello@bluegrassai.com',
            'pt': 'Em breve! Os primeiros usuários recebem 50% de desconto nos primeiros 3 meses.\n\nResponda isto se estiver interessado: hello@bluegrassai.com',
            'it': 'Prossimamente! I primi utenti ricevono il 50% di sconto per i primi 3 mesi.\n\nRispondi a questo se sei interessato: hello@bluegrassai.com',
            'en': 'Coming soon! Early adopters get 50% off the first 3 months.\n\nReply to this if interested: hello@bluegrassai.com'
        };
        alert(alertMessages[currentLang] || alertMessages['en']);
    };
    
    cta_buttons.forEach(btn => {
        btn.addEventListener('click', handleCTA);
    });
    
    pricing_buttons.forEach(btn => {
        btn.addEventListener('click', handleCTA);
    });
});
