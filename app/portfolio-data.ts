import type { ComponentType, SVGProps } from 'react'
import ebsImageImport from './assets/ebs.webp'
import rcmImageImport from './assets/rcm.webp'
import reactPatternCertImport from './assets/Advanced React Component Pattern.jpg'
import agileScrumCertImport from './assets/agile-scrum.webp'
import phpFrameworkCertImport from './assets/building-custom-php-framework.webp'
import htmlCssBootstrapCertImport from './assets/html-css-and-bootstrap.webp'
import javascriptCertImport from './assets/javascript.webp'
import laravelCertImport from './assets/laravel.webp'
import phpMysqlCertImport from './assets/php-and-mysql.webp'
import seoCertImport from './assets/seo.webp'
import wordpressCertImport from './assets/wordpress.webp'
import liquibaseCertImport from './assets/liquibase.webp'
import qlikSenseCertImport from './assets/qlick-sense.webp'
import pythonCertImport from './assets/python.webp'
import awardImport from './assets/award.webp'
import PythonIcon from './python-icon'

const ebsImage = ebsImageImport.src
const rcmImage = rcmImageImport.src
const reactPatternCertImage = reactPatternCertImport.src
const agileScrumCertImage = agileScrumCertImport.src
const phpFrameworkCertImage = phpFrameworkCertImport.src
const htmlCssBootstrapCertImage = htmlCssBootstrapCertImport.src
const javascriptCertImage = javascriptCertImport.src
const laravelCertImage = laravelCertImport.src
const phpMysqlCertImage = phpMysqlCertImport.src
const seoCertImage = seoCertImport.src
const wordpressCertImage = wordpressCertImport.src
const liquibaseCertImage = liquibaseCertImport.src
const qlikSenseCertImage = qlikSenseCertImport.src
const pythonCertImage = pythonCertImport.src
const awardImage = awardImport.src
import {
  ArchitectureServiceAmazonAPIGateway,
  ArchitectureServiceAmazonDynamoDB,
  ArchitectureServiceAmazonEC2,
  ArchitectureServiceAmazonSimpleQueueService,
  ArchitectureServiceAmazonSimpleStorageService,
  ArchitectureServiceAmazonVirtualPrivateCloud,
  ArchitectureServiceAWSLambda,
} from 'aws-react-icons'
import {
  SiAngular,
  SiApache,
  SiBootstrap,
  SiBitbucket,
  SiConfluence,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHostinger,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiLiquibase,
  SiMongodb,
  SiMysql,
  SiNamecheap,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSubstack,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaAws, FaLinkedin } from 'react-icons/fa6'
import {
  LuBoxes,
  LuChartBar,
  LuCheckCheck,
  LuCloud,
  LuDatabase,
  LuDna,
  LuFileText,
  LuFlaskConical,
  LuGitBranch,
  LuGlobe,
  LuHistory,
  LuLayers,
  LuLayoutGrid,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuPlug,
  LuPuzzle,
  LuRefreshCw,
  LuRocket,
  LuSearchCheck,
  LuServer,
  LuServerCog,
  LuSmartphone,
  LuSprout,
  LuTrendingUp,
  LuUsers,
  LuWifiOff,
  LuWorkflow,
  LuWrench,
} from 'react-icons/lu'

export interface NavLink {
  href: string
  label: string
}

export interface StatItem {
  symbol: string
  title: string
  description?: string
  points?: {
    who: string
    value: string
    detail: string
    source?: string
    /** Optional badge, e.g. "AI-assisted estimate". */
    note?: string
  }[]
  /** Optional small print shown under the bullets. */
  footnote?: string
}

export interface CaseStudyFact {
  label: string
  value: string
}

export interface CaseStudyMetric {
  icon: SkillIcon
  value: string
  label: string
}

export interface CaseStudyFeature {
  icon: SkillIcon
  title: string
  description: string
}

export interface CaseStudyBeforeAfter {
  before: string
  after: string
}

export interface CaseStudyImpact {
  audience: string
  text: string
}

export interface CaseStudySource {
  label: string
  href: string
}

export interface CaseStudy {
  title: string
  /** Optional link to the live product, shown next to the title. */
  liveUrl?: string
  /** Optional link to a demo video, shown next to the live site link. */
  videoUrl?: string
  /** One-line hook shown under the title. */
  tagline: string
  summary: string
  /** Optional citation for the figures quoted in the summary/metrics. */
  source?: CaseStudySource
  /** Quick-reference chips (role, timeline, stack, etc.). */
  facts: CaseStudyFact[]
  /** Headline numbers shown in a stat strip. */
  metrics: CaseStudyMetric[]
  /** The problem framing. */
  problem: {
    intro: string
    points: string[]
  }
  /** Legacy limitations, each a titled card. Omit for brand-new tools. */
  legacy?: {
    intro: string
    items: { title: string; description: string }[]
    /** The fragmented legacy apps that were consolidated. */
    consolidatedApps: string[]
  }
  /** Key capabilities of the product. */
  features: {
    /** Section heading. Defaults to capabilities framing when omitted. */
    label?: string
    intro: string
    items: CaseStudyFeature[]
  }
  /** Technology modernization shown as before → after. Omit for brand-new tools. */
  modernization?: {
    intro: string
    changes: CaseStudyBeforeAfter[]
  }
  /** The specific projects/modules I worked on, explained in plain terms. */
  contributions?: {
    /** Section heading. Defaults to "What I worked on" when omitted. */
    label?: string
    intro: string
    items: {
      icon: SkillIcon
      name: string
      /** Optional short tagline (e.g. "The proofreader"). */
      role?: string
      description: string
      /** Optional link, e.g. a demo video. */
      link?: { href: string; label: string }
    }[]
  }
  /** Impact per audience. */
  impact: CaseStudyImpact[]
}

export interface Project {
  id: string
  art: string
  /** Optional screenshot shown in the card art panel. */
  image?: string
  artVariant?: 'blue'
  title: string
  tagline: string
  description: string
  tags: string[]
  caseStudy?: CaseStudy
}

export type RolePointTag = 'build' | 'rebuild' | 'maintain' | 'improve' | 'etl'

export interface RolePoint {
  /** Short project label shown as a timeline bullet. */
  text: string
  /** Categorizes the work; rendered as a parenthetical qualifier. */
  tag: RolePointTag
}

export interface Role {
  title: string
  /** Full start–end range shown inline (e.g. "Oct 2022 – Dec 2026"). */
  dateRange: string
  points: RolePoint[]
}

export interface ImpactItem {
  icon: string
  text: string
}

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>

export interface SkillItem {
  icon: SkillIcon
  name: string
  /** Official brand color, when the icon is a monochrome brand mark. */
  color?: string
  /** True for official multi-color icons (e.g. AWS) that bring their own colors. */
  fullColor?: boolean
}

export interface SkillCategory {
  label: string
  icon: SkillIcon
  items: SkillItem[]
}

export interface ContactLink {
  href: string
  label: string
  icon: SkillIcon
  external?: boolean
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const stats: StatItem[] = [
  {
    symbol: '◆',
    title: 'My Mission',
    description:
      'Building web applications that solve real-world problems.',
  },
  {
    symbol: '♡',
    title: 'Impact of the Apps I Contributed To',
    points: [
      {
        who: 'Farmers',
        value: '+840 kg/ha',
        detail: 'higher rice yield',
        source:
          'https://www.irri.org/news-and-events/news/how-can-rice-crop-manager-reach-more-farmers',
      },
      {
        who: 'Rice breeding staff',
        value: '4-6 weeks',
        detail: 'of estimated staff time saved per year',
        note: 'AI-assisted estimate',
      },
      {
        who: 'Rice breeding program',
        value: '$4,500-$14,000+ per year',
        detail:
          'estimated savings from avoided wasted test plots, lab assays, and manual rework',
        note: 'AI-assisted estimate',
      },
    ],
    footnote:
      'AI-assisted estimates are modeled on published CGIAR and IRRI rice breeding costing studies for a typical 2,000-plot program. They are not measured results.',
  },
]

export const projects: Project[] = [
  {
    id: 'rcm',
    art: '🌾📱',
    image: rcmImage,
    title: 'Rice Crop Manager Advisory Service',
    tagline: 'Scaling scientific farming recommendations to farmers',
    description:  
      "A mobile and web application that delivers IRRI's site-specific fertilizer recommendations to farmers across the Philippines, Indonesia, Myanmar, and India.",
    tags: ['Web', 'Mobile', 'PWA', 'Offline-first'],
    caseStudy: {
      title: 'Rice Crop Manager Advisory Service',
      liveUrl: 'https://rcm.da.gov.ph/home',
      videoUrl: 'https://www.youtube.com/watch?v=r0NBkyYQZQ0',
      tagline:
        'Bringing IRRI scientists\u2019 site-specific farming recommendations to millions of farmers.',
      summary:
        'Government extension workers interview farmers about their farm and field practices. The app turns that input into a tailored one-page recommendation on the timing, type, and amount of fertilizer across the rice crop lifecycle, from planting to harvest. Since 2014, RCMAS has reached more than 2.6 million farmers in the Philippines and generated 3.3 million precision-agriculture recommendations.',
      source: {
        label: 'Source: IRRI News, reaching more farmers through the cluster approach',
        href: 'https://www.irri.org/news-and-events/news/irri-and-da-reach-more-farmers-through-cluster-approach',
      },
      facts: [
        { label: 'Role', value: 'Software Engineer' },
        { label: 'Org', value: 'IRRI' },
        { label: 'Since', value: '2014' },
        { label: 'Platform', value: 'Web · Mobile · PWA' },
      ],
      metrics: [
        { icon: LuUsers, value: '2.6M+', label: 'farmers reached' },
        { icon: LuFileText, value: '3.3M', label: 'recommendations generated' },
        { icon: LuLayoutGrid, value: '5→1', label: 'apps unified into RCMAS' },
        { icon: LuWifiOff, value: 'Offline', label: 'field data collection' },
      ],
      problem: {
        intro:
          'I worked alongside agronomists who develop site-specific farming methods and want to scale them across the Philippines. Turning that science into something every farmer can use is hard:',
        points: [
          'Farming conditions vary by location: soil, irrigation, and rice varieties all differ field to field.',
          'Weather and fertilizer prices shift over time, making decisions more complex each season.',
          'Farmers and extension workers can\u2019t solve complex agronomic equations before every planting season.',
          'The core challenge: make scientifically developed recommendations accessible, practical, and field-ready.',
        ],
      },
      legacy: {
        intro:
          'A legacy system already solved much of this, but it had real limitations that capped its reach.',
        items: [
          {
            title: 'Limited accessibility',
            description:
              'Built for desktop users with reliable internet, yet extension workers collect field data in remote areas with little or no connectivity, often on small devices.',
          },
          {
            title: 'No audit trails',
            description:
              'No way to track who created, edited, or updated farmer, field, and worker records, made hard by many independent apps, each with its own database.',
          },
          {
            title: 'Fragmented apps & databases',
            description:
              'Separate databases complicated migration and maintenance, and forced developers to work across multiple codebases.',
          },
        ],
        consolidatedApps: ['RCMFFR', 'FFRDL', 'RCMPH', 'PHRASTAT', 'RCMSMS'],
      },
      features: {
        intro:
          'After rebuilding the legacy system into a unified platform, we added new capabilities it never had, closing the gaps that limited the original applications:',
        items: [
          {
            icon: LuWifiOff,
            title: 'Offline capabilities',
            description:
              'Collect and manage farmer and field data in remote locations with no internet connection.',
          },
          {
            icon: LuSmartphone,
            title: 'Mobile application',
            description:
              'A mobile-friendly experience that works comfortably on the small devices used in the field.',
          },
          {
            icon: LuHistory,
            title: 'CRUD audit trails',
            description:
              'Track creation, updates, and modifications across farmer, field, and worker transactions.',
          },
          {
            icon: LuMapPin,
            title: 'Google Maps integration',
            description:
              'Visualize uploaded GPX files directly on Google Maps.',
          },
          {
            icon: LuDatabase,
            title: 'Database consolidation',
            description:
              'Unified fragmented databases to simplify migration, maintenance, and handoff.',
          },
          {
            icon: LuMessageSquare,
            title: 'SMS integration',
            description:
              'Timely reminders that help farmers follow recommended practices across the crop cycle.',
          },
        ],
      },
      modernization: {
        intro:
          'We consolidated the independent apps and databases into one platform, the Rice Crop Manager Advisory Service (RCMAS), and modernized the stack for maintainability and a better user experience.',
        changes: [
          {
            before: 'Vanilla HTML, CSS, jQuery, PHP',
            after: 'Angular, Ionic, PHP Slim Micro Framework',
          },
          {
            before: 'Inconsistent, ad-hoc UI styling',
            after: 'Unified design system (Angular Material + Ionic)',
          },
          {
            before: 'Server-side rendered pages',
            after: 'Responsive Single-Page Application (SPA)',
          },
        ],
      },
      contributions: {
        label: 'What I worked on',
        intro:
          'Across my years on the RCM team, I built and maintained several apps and was a top contributor on the unified rebuild:',
        items: [
          {
            icon: LuUsers,
            name: 'RCM User Registration',
            description:
              'Records user information and manages profiles for extension workers and system accounts. I was the top contributor and resolved authentication and registration defects.',
          },
          {
            icon: LuFileText,
            name: 'RCM Farmer and Field Download',
            description:
              'Exports PDF lists of farmers and fields, filtered by region, for field interviews. I was the top contributor and refactored authentication into a reusable, shared endpoint.',
          },
          {
            icon: LuChartBar,
            name: 'RCM Statistics',
            description:
              'Aggregates nationwide totals for farmers, fields, recommendations, and hectares measured. I was the top contributor and fixed location filtering and shared authentication.',
          },
          {
            icon: LuBoxes,
            name: 'Rice Crop Manager Advisory Service (RCMAS)',
            description:
              'The unified platform that combined the legacy apps into one web and mobile experience. I contributed across UI and API, adding offline collection, SMS reminders, JWT auth, dashboards, and localization.',
          },
          {
            icon: LuServerCog,
            name: 'RCMAS DevOps',
            description:
              'A CLI tool I built end to end that automates RCMAS deployment to AWS, plus database backup and restoration.',
          },
          {
            icon: LuDatabase,
            name: 'TEIN',
            description:
              'A data pipeline that extracts CSVs from Google Drive, transforms them, and loads records into a data warehouse for BI. I produced the field-to-schema mapping and brought the ETL scripts under version control.',
          },
          {
            icon: LuGlobe,
            name: 'RCM Myanmar',
            description:
              'A localized RCM deployment for farmers in Myanmar. I localized recommendations into Burmese and adjusted the recommendation logic and questionnaire to local conditions.',
          },
        ],
      },
      impact: [
        {
          audience: 'Partner organizations',
          text: 'No need to build recommendation systems from scratch. After handoff, they maintain RCMAS, own their data, and run their own implementations.',
        },
        {
          audience: 'Extension workers',
          text: 'Collect farmer and field information in remote locations, even with limited or no internet connectivity.',
        },
        {
          audience: 'Partner developers',
          text: 'Easier to maintain and extend thanks to a unified architecture, consolidated database, and modern stack.',
        },
        {
          audience: 'Partner agronomists',
          text: 'Easier to maintain the complex calculations behind recommendations, so scientific improvements land faster.',
        },
        {
          audience: 'Farmers',
          text: 'Better recommendations that aim to raise rice yields while cutting unnecessary fertilizer costs.',
        },
      ],
    },
  },
  {
    id: 'mel-builder',
    art: '📋🛠️',
    image: '/mel-builder.svg',
    title: 'MEL Builder',
    tagline: 'Visually configurable surveys for nationwide rice programs',
    description:
      'A Monitoring, Evaluation & Learning tool that lets program teams build standardized, offline-ready data-collection forms to measure the effectiveness of rice program interventions.',
    tags: ['Form builder', 'Survey', 'Offline-first', 'Data validation'],
    caseStudy: {
      title: 'MEL Builder',
      liveUrl: 'https://mel-builder.da.gov.ph/login',
      tagline:
        'A Monitoring, Evaluation & Learning tool for measuring the effectiveness of rice program interventions and aiding planning and decision-making.',
      summary:
        'DA regional offices and ATI centers collect data from thousands of farmers. MEL Builder lets program teams visually configure survey modules and fields, then pushes standardized, offline-ready forms to the field application used by Agricultural Extension Workers (AEWs), so clean, analysis-ready data flows back into the central database.',
      source: {
        label: 'Source: ATI-RTC XI conducts training on MEL tool to boost rice program',
        href: 'https://ati2.da.gov.ph/ati-11/content/article/ma-crisin-rosan-t-besario/ati-rtc-xi-conducts-training-mel-tool-boost-rice-program',
      },
      facts: [
        { label: 'Role', value: 'Software Engineer' },
        { label: 'Org', value: 'IRRI' },
        { label: 'Type', value: 'Internal tool' },
        { label: 'Users', value: 'Program teams · AEWs' },
      ],
      metrics: [
        { icon: LuLayoutGrid, value: 'No-code', label: 'visual form builder' },
        { icon: LuCheckCheck, value: 'Uniform', label: 'validation nationwide' },
        { icon: LuWifiOff, value: 'Offline', label: 'field-ready forms' },
        { icon: LuTrendingUp, value: 'M&E', label: 'program effectiveness' },
      ],
      problem: {
        intro:
          'Different DA regional offices and ATI centers collect data from thousands of farmers, which created consistency and maintenance problems:',
        points: [
          'Ad-hoc spreadsheets and paper forms led to inconsistent reporting across regions.',
          'Agricultural programs, subsidy rules, and cropping-season metrics change regularly.',
          'Teams waited on IT engineers to rewrite code every time a survey question needed to change.',
          'Field data had to be collected in remote areas with little or no connectivity.',
        ],
      },
      features: {
        label: 'Key capabilities',
        intro:
          'MEL Builder turns form creation into a configurable, self-service workflow with clean data flowing back to the center:',
        items: [
          {
            icon: LuPuzzle,
            title: 'Survey widgets',
            description:
              'Express any survey format with widgets for multiple choice, checkbox, dropdown, and more.',
          },
          {
            icon: LuCheckCheck,
            title: 'Uniform validation',
            description:
              'Enforce consistent data validation, skip logic, and question structures nationwide.',
          },
          {
            icon: LuLayoutGrid,
            title: 'Visual configuration',
            description:
              'Program teams visually configure modules and fields directly in the builder, no code required.',
          },
          {
            icon: LuWifiOff,
            title: 'Offline-ready forms',
            description:
              'Pushes structured, offline-ready questionnaires to the AEW field application.',
          },
          {
            icon: LuDatabase,
            title: 'Analysis-ready data',
            description:
              'Clean, structured responses flow back into the central database for analysis.',
          },
          {
            icon: LuRocket,
            title: 'Faster iteration',
            description:
              'Programs adjust questions on their own schedule instead of waiting on engineering.',
          },
        ],
      },
      contributions: {
        label: 'What I worked on',
        intro:
          'During this period I contributed to the form builder:',
        items: [
          {
            icon: LuPuzzle,
            name: 'MEL Builder',
            role: 'Form widgets',
            description:
              'Built the form builder itself, including a variety of widgets to express survey formats such as multiple choice, checkbox, and dropdown fields.',
          },
        ],
      },
      impact: [
        {
          audience: 'Program teams',
          text: 'Configure and update surveys visually, without waiting on engineering, keeping pace with changing programs and metrics.',
        },
        {
          audience: 'Agricultural Extension Workers',
          text: 'Receive offline-ready forms on the field app and collect data reliably in remote areas.',
        },
        {
          audience: 'DA regional offices & ATI centers',
          text: 'Report with uniform validation and question structures, producing consistent data nationwide.',
        },
        {
          audience: 'Analysts & decision-makers',
          text: 'Receive clean, analysis-ready data in the central database to evaluate interventions and plan.',
        },
      ],
    },
  },
  {
    id: 'ebs',
    art: '🧬📊',
    image: ebsImage,
    artVariant: 'blue',
    title: 'Enterprise Breeding System (EBS)',
    tagline: 'Accelerating rice breeding',
    description:
      'An integrated breeding ecosystem that manages workflows, from experiments to data analysis, helping breeders develop improved varieties faster.',
    tags: ['Enterprise', 'Analytics', 'Data management'],
    caseStudy: {
      title: 'Enterprise Breeding System',
      tagline:
        'Open-source breeding informatics that unifies the entire crop-breeding workflow into one platform.',
      summary:
        'Breeders understand their crops and develop improved varieties, but staff around the world each worked their own way, across fragmented spreadsheets, separate desktop tools, and isolated databases. EBS is an open-source breeding informatics and data-management platform, developed and led by the CGIAR Excellence in Breeding Platform and Breeding Resources Initiative, that integrates the entire breeding workflow into one centralized system. It supports programs such as CIMMYT, IRRI, and IITA that serve resource-poor farmers across Africa, Asia, and Latin America.',
      source: {
        label: 'Source: CGIAR Excellence in Breeding — Enterprise Breeding System',
        href: 'https://excellenceinbreeding.org/toolbox/tools/enterprise-breeding-system-ebs',
      },
      facts: [
        { label: 'Role', value: 'Software Engineer' },
        { label: 'Org', value: 'IRRI · CGIAR' },
        { label: 'Type', value: 'Open source' },
        { label: 'Scope', value: 'Global, multi-crop' },
      ],
      metrics: [
        { icon: LuWorkflow, value: 'End-to-end', label: 'breeding workflow' },
        { icon: LuBoxes, value: 'One', label: 'centralized platform' },
        { icon: LuGlobe, value: '3 centers', label: 'CIMMYT · IRRI · IITA' },
        { icon: LuUsers, value: 'Global', label: 'breeder collaboration' },
      ],
      problem: {
        intro:
          'Breeding science is strong, but the data behind it was scattered. Staff across the world each did things their own way:',
        points: [
          'Breeders worked in spreadsheets, notebooks, local databases, and assorted ad-hoc tools.',
          'Inconsistent methods made breeding data hard to manage, compare, and share.',
          'Fragmented data slowed down the development of improved varieties.',
          'Global collaboration was difficult without a common system and shared data.',
        ],
      },
      features: {
        label: 'Key capabilities',
        intro:
          'Instead of fragmented spreadsheets, desktop tools, and isolated databases, EBS brings the breeding workflow together through four integrated areas:',
        items: [
          {
            icon: LuSprout,
            title: 'Core breeding',
            description:
              'Create and manage germplasm, field trials, nurseries, seed inventories, and experimental lists.',
          },
          {
            icon: LuFlaskConical,
            title: 'Service management',
            description:
              'Connect directly to internal and external labs for genotypic, quality, and phytosanitary analyses.',
          },
          {
            icon: LuChartBar,
            title: 'Breeding analytics',
            description:
              'Link field and lab data to advanced biometrics, decision-support tools, and genomic estimated breeding values.',
          },
          {
            icon: LuUsers,
            title: 'Core system & permissions',
            description:
              'Manage multi-user roles, institutional permissions, real-time data sharing, and automated tracking of metrics like genetic gain.',
          },
        ],
      },
      contributions: {
        label: 'What I worked on',
        intro:
          'Within the Breeding Analytics area, I worked on three tools that together help breeders confidently pick the best plants for the next generation:',
        items: [
          {
            icon: LuSearchCheck,
            name: 'Phenotypic Data Manager (PDM)',
            role: 'The proofreader',
            description:
              'When scientists walk a field measuring plants (height, grain weight), typos and odd numbers happen, like "500 inches" instead of "50". PDM spots the strange values and errors in the field notes and helps clean them up, so bad data doesn’t ruin the experiment.',
            link: {
              href: 'https://www.youtube.com/watch?v=LKN5XLSBzek',
              label: 'Watch video',
            },
          },
          {
            icon: LuTrendingUp,
            name: 'Analysis Request Manager (ARM)',
            role: 'The scorekeeper',
            description:
              'A crop might thrive in a sunny field but struggle in a rainy one. Once the notes are clean, ARM takes the numbers from different farms, runs the math to account for weather and soil differences, and calculates a fair final score so breeders know which plants truly performed best.',
            link: {
              href: 'https://www.youtube.com/watch?v=GloxQkYWmjY',
              label: 'Watch video',
            },
          },
          {
            icon: LuDna,
            name: 'Molecular Data Analysis (MDA)',
            role: 'The DNA detective',
            description:
              'A plant can look healthy outside but lack the right genes inside. MDA checks lab results from plant leaves against the genetic code to confirm parents bred properly, catch mixed-up seeds, and spot hidden traits like disease resistance.',
          },
        ],
      },
      impact: [
        {
          audience: 'Breeders',
          text: 'Collaborate, share, and manage breeding data in one system, speeding up the creation of improved varieties.',
        },
        {
          audience: 'Governments',
          text: 'Feed growing populations with less farmland and get varieties resilient to local climate challenges, from flooding in the Philippines to drought in India and saltwater intrusion in Vietnam.',
        },
        {
          audience: 'Western donors',
          text: 'Support efforts to prevent famine and migration in Asia, slow global warming, and keep affordable crops accessible as cropping choices shift.',
        },
        {
          audience: 'Philanthropies',
          text: 'Advance work that reduces malnutrition and improves lives.',
        },
        {
          audience: 'Private sector',
          text: 'Supply the crops behind products, logistics, and agricultural inputs such as seeds, fertilizers, and pesticides.',
        },
      ],
    },
  },
]

export const roles: Role[] = [
  {
    title: 'Breeding Analytics Team · Specialist - Information System (Software Engineering)',
    dateRange: 'Oct 2022 – Dec 2026',
    points: [
      { text: 'Phenotypic Data Manager', tag: 'build' },
      { text: 'Molecular Data Analysis', tag: 'build' },
      { text: 'Analysis Request Manager', tag: 'maintain' },
    ],
  },
  {
    title: '4DFarms Team · Specialist - Information System (Software Engineering)',
    dateRange: 'Jan 2022 – Dec 2022',
    points: [
      { text: 'Mel Builder', tag: 'build' },
      { text: 'RCM Odisha (backend)', tag: 'rebuild' },
    ],
  },
  {
    title: 'Rice Crop Manager Team · Junior Specialist - Information System (Software Engineering)',
    dateRange: 'Jul 2019 – Dec 2021',
    points: [
      { text: 'RCM User Registration', tag: 'maintain' },
      { text: 'RCM Farmer and Field Download', tag: 'maintain' },
      { text: 'RCM Statistics', tag: 'maintain' },
      { text: 'Rice Crop Manager Advisory Service', tag: 'rebuild' },
      { text: 'RCMAS DevOps', tag: 'build' },
      { text: 'TEIN', tag: 'etl' },
      { text: 'RCM Myanmar', tag: 'maintain' },
    ],
  },
]

export const impactItems: ImpactItem[] = [
  { icon: '🌱', text: 'Scaled farming advice to thousands of farmers.' },
  { icon: '◎', text: 'Tracked how well rice program interventions work.' },
  { icon: '👥', text: 'Saved time and money improving rice varieties.' },
]

export type Testimonial = {
  quotes: string[]
  name: string
  role: string
  org: string
}

export const testimonials: Testimonial[] = [
  {
    quotes: [
      'Jiyo was able to deliver more than what was asked of him. He accomplishes tasks on the fly and with high confidence of accuracy and correctness. He can efficiently work independently or in a team. His insights are valuable and truly results in improvements of workflow and software development. I must say that we may have lost a very good team member but his contributions have really helped the team and the project move forward.',
      'All his tasks were excellently done and have met the set expectations and specifications. There were tight days that we needed to deliver features for our collaborations with other projects and we hit the target/s just on time. This just reflects how he can manage pressure and time-sensitive deliverables. Whether he works on the deployment process and/or front-back end developments, his efforts contributed much to the successful delivery of the products. In addition, he was able to capacitate every team member before he left for another team/project last October 2022.',
    ],
    name: 'Jerome Vila',
    role: 'Senior Specialist - Information Systems (Software Design)',
    org: 'IRRI',
  },
  {
    quotes: [
      'I wanted to take the opportunity to personally thank you for all your contributions, and support over the years. It has truly been a pleasure working with you. Your dedication, expertise, and commitment have made an enormous impact on our projects and on the team as a whole. I sincerely hope that this transition opens the door to new and exciting opportunities for you. Given your skills, experience, and dedication, I have no doubt that you will continue to do great things wherever your career takes you.',
    ],
    name: 'Rosemary Shrestha, Ph.D.',
    role: 'Data Coordinator',
    org: 'CIMMYT',
  },
  {
    quotes: [
      'Jiyo demonstrated strong technical execution on Breeding Analytics by balancing feature and hotfix delivery with critical architectural refactoring. His implementation of role-based access control significantly strengthened the overall application security in EBS by restricting user access to certain tools and features. Aside from this, he also contributed significantly in enabling time-series data export for Bioflow expanding cross-system interoperability for researchers. This focus on balancing speed, data interoperability, and security governance reflects a well-rounded software development.',
      'Jiyo drove meaningful improvements in overall development by establishing an automated testing repository to elevate regression testing coverage across Breeding Analytics and EBS services. By standardizing the local development and testing environment, he eliminated setup complexity and helped reduced environment-related troubleshooting time across the teams. This structural work setup minimized manual testing overhead and reduced bugs making through into production environments.',
    ],
    name: 'Argem Flores',
    role: 'IT Lead and Software Engineer',
    org: 'IRRI',
  },
  {
    quotes: [
      'Jiyo is hardworking, approachable, and easy to work with. I remember our time working together at IRRI, where he was my colleague. Whenever I had questions or needed clarification about my tasks, he was always willing to help and provide answers. I truly appreciated his knowledge, support, and willingness to share his expertise. I hope we get the opportunity to work together again and collaborate on future projects! :)',
    ],
    name: 'Juliemar Añonuevo',
    role: 'Full Stack Developer',
    org: 'Muval',
  },
]

export type Certificate = {
  title: string
  url?: string
  linkLabel?: string
  image?: string
}

export const certificates: Certificate[] = [
  {
    title: 'Liquibase Certification',
    image: liquibaseCertImage,
  },
  { title: 'Qlik Sense', image: qlikSenseCertImage },
  { title: 'Python', image: pythonCertImage },
  {
    title: 'Advanced React Component Pattern',
    image: reactPatternCertImage,
  },
  { title: 'Agile Scrum', image: agileScrumCertImage },
  { title: 'Building a Custom PHP Framework', image: phpFrameworkCertImage },
  { title: 'HTML, CSS and Bootstrap', image: htmlCssBootstrapCertImage },
  { title: 'JavaScript', image: javascriptCertImage },
  { title: 'Laravel', image: laravelCertImage },
  { title: 'PHP and MySQL', image: phpMysqlCertImage },
  { title: 'SEO', image: seoCertImage },
  { title: 'WordPress', image: wordpressCertImage },
]

export type Award = {
  title: string
  context: string
  image: string
}

export const awards: Award[] = [
  {
    title: 'Best in Web Development',
    context:
      'Laguna State Polytechnic University Sta. Cruz Campus - Department of Computer Studies, 2019',
    image: awardImage,
  },
]

export type Education = {
  degree: string
  school: string
  year: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Laguna State Polytechnic University Sta. Cruz Campus',
    year: 'June 2019',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    icon: LuLayers,
    items: [
      { icon: SiReact, name: 'React', color: '#61dafb' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { icon: SiNextdotjs, name: 'API Routes', color: '#ffffff' },
      { icon: SiVuedotjs, name: 'Vue.js', color: '#4fc08d' },
      { icon: SiAngular, name: 'Angular', color: '#dd0031' },
      { icon: SiJquery, name: 'jQuery', color: '#0769ad' },
      { icon: SiHtml5, name: 'HTML5', color: '#e34f26' },
      { icon: SiCss, name: 'CSS3', color: '#663399' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' },
      { icon: SiBootstrap, name: 'Bootstrap', color: '#7952b3' },
    ],
  },
  {
    label: 'Mobile',
    icon: LuSmartphone,
    items: [{ icon: SiIonic, name: 'Ionic', color: '#3880ff' }],
  },
  {
    label: 'Backend',
    icon: LuServer,
    items: [
      { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { icon: SiLaravel, name: 'Laravel', color: '#ff2d20' },
      { icon: SiPhp, name: 'Slim PHP', color: '#777bb4' },
      { icon: LuPlug, name: 'REST APIs' },
    ],
  },
  {
    label: 'Languages',
    icon: LuLayers,
    items: [
      { icon: SiJavascript, name: 'JavaScript', color: '#f7df1e' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
      { icon: SiPhp, name: 'PHP', color: '#777bb4' },
      { icon: PythonIcon, name: 'Python' },
    ],
  },
  {
    label: 'Cloud & Serverless',
    icon: LuCloud,
    items: [
      { icon: FaAws, name: 'AWS', color: '#ff9900' },
      { icon: ArchitectureServiceAWSLambda, name: 'AWS Lambda', fullColor: true },
      {
        icon: ArchitectureServiceAmazonSimpleQueueService,
        name: 'SQS',
        fullColor: true,
      },
      {
        icon: ArchitectureServiceAmazonSimpleStorageService,
        name: 'S3',
        fullColor: true,
      },
      {
        icon: ArchitectureServiceAmazonDynamoDB,
        name: 'DynamoDB',
        fullColor: true,
      },
      { icon: ArchitectureServiceAmazonEC2, name: 'EC2', fullColor: true },
      {
        icon: ArchitectureServiceAmazonAPIGateway,
        name: 'API Gateway',
        fullColor: true,
      },
      {
        icon: ArchitectureServiceAmazonVirtualPrivateCloud,
        name: 'VPC',
        fullColor: true,
      },
    ],
  },
  {
    label: 'Databases',
    icon: LuDatabase,
    items: [
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169e1' },
      { icon: SiMysql, name: 'MySQL', color: '#4479a1' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
      { icon: SiLiquibase, name: 'Liquibase', color: '#2962ff' },
    ],
  },
  {
    label: 'DevOps & Infrastructure',
    icon: LuWrench,
    items: [
      { icon: SiDocker, name: 'Docker', color: '#2496ed' },
      { icon: SiDocker, name: 'Docker Compose', color: '#2496ed' },
      { icon: SiJenkins, name: 'Jenkins', color: '#d24939' },
      { icon: LuBoxes, name: 'Docker Swarm' },
      { icon: SiLinux, name: 'Linux', color: '#fcc624' },
      { icon: SiApache, name: 'Apache', color: '#d22128' },
      { icon: SiNginx, name: 'Nginx', color: '#009639' },
      { icon: SiTerraform, name: 'Terraform', color: '#7b42bc' },
    ],
  },
  {
    label: 'Hosting & Domains',
    icon: LuGlobe,
    items: [
      { icon: LuServerCog, name: 'Bluehost' },
      { icon: SiHostinger, name: 'Hostinger', color: '#673de6' },
      { icon: SiNamecheap, name: 'Namecheap', color: '#de3723' },
    ],
  },
  {
    label: 'Engineering Practices',
    icon: LuRocket,
    items: [
      { icon: LuLayers, name: 'Full-Stack Development' },
      { icon: LuWrench, name: 'System Modernization' },
      { icon: LuRocket, name: 'Performance Optimization' },
      { icon: LuTrendingUp, name: 'Scalability' },
      { icon: LuRefreshCw, name: 'Background Processing' },
      { icon: LuCheckCheck, name: 'Automated Testing' },
    ],
  },
  {
    label: 'Collaboration & Tools',
    icon: LuGitBranch,
    items: [
      { icon: SiGit, name: 'Git', color: '#f05032' },
      { icon: SiGithub, name: 'GitHub' },
      { icon: SiBitbucket, name: 'Bitbucket', color: '#0052cc' },
      { icon: SiJira, name: 'Jira', color: '#0052cc' },
      { icon: SiConfluence, name: 'Confluence', color: '#172b4d' },
      { icon: LuRefreshCw, name: 'Agile/Scrum' },
    ],
  },
]

export const contactLinks: ContactLink[] = [
  { href: 'mailto:jiyocollin@gmail.com', label: 'jiyocollin@gmail.com', icon: LuMail },
  {
    href: 'https://www.linkedin.com/in/jiyo-pagtananan-5880a0148/',
    label: 'linkedin.com/in/jiyo-pagtananan',
    icon: FaLinkedin,
    external: true,
  },
  {
    href: 'https://codewithjiyo.com',
    label: 'codewithjiyo.com',
    icon: SiSubstack,
    external: true,
  },
  {
    href: '/JiyoCollin_Pagtananan_SoftwareEngineer_Resume.pdf',
    label: 'Download résumé (PDF)',
    icon: LuFileText,
    external: true,
  },
]
