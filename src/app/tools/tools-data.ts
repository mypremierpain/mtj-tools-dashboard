// src/app/tools/tools-data.ts

export type Tool = {
  id: number;
  name: string;
  url: string;
  logo: string;
  meta: string;
};

export const tools: Tool[] = [
  // --- All-in-one SEO suites ---
  {
    id: 1,
    name: "SEMrush",
    url: "https://www.semrush.com/",
    logo: "https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/60169/assets/601039/-1f98f505180d14739e58c06d7a11eaea.png",
    meta: "All-in-one SEO Suite",
  },
  {
    id: 2,
    name: "Ahrefs",
    url: "https://ahrefs.com/",
    logo: "https://toffu.ai/_next/image?url=%2Flogos%2Fahrefs.png&w=640&q=75",
    meta: "All-in-one SEO Suite",
  },
  {
    id: 3,
    name: "Moz Pro",
    url: "https://moz.com/products/pro",
    logo: "https://crystalpng.com/wp-content/uploads/2022/07/Moz-Logo.png",
    meta: "SEO Platform",
  },
  {
    id: 4,
    name: "Serpstat",
    url: "https://serpstat.com/",
    logo: "https://images.saasworthy.com/serpstat_205_logo_1625120645_groha.jpg",
    meta: "Growth Hacking SEO",
  },
  {
    id: 5,
    name: "SpyFu",
    url: "https://www.spyfu.com/",
    logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1500906706/os2fzaawdjpl9fiye7rv.png?ik-sanitizeSvg=true",
    meta: "Competitor Research",
  },
  {
    id: 6,
    name: "Mangools (KWFinder, SERPChecker, etc.)",
    url: "https://mangools.com/",
    logo: "https://consumersiteimages.trustpilot.net/business-units/5c4585f693a8f90001edb9c4-198x149-1x.jpg",
    meta: "Keyword & SERP Tools",
  },
  {
    id: 7,
    name: "SEO PowerSuite",
    url: "https://www.link-assistant.com/",
    logo: "https://static.macupdate.com/products/31445/m/seo-powersuite-logo.png?v=1653054739",
    meta: "Desktop SEO Toolkit",
  },
  {
    id: 8,
    name: "BrightEdge",
    url: "https://www.brightedge.com/",
    logo: "https://cdn-public.softwarereviews.com/production/favicons/offerings/8320/original/4dd69699-da37-436b-8b6c-826a9752d240-1495228998728.png",
    meta: "Enterprise SEO Platform",
  },
  {
    id: 9,
    name: "SE Ranking",
    url: "https://seranking.com/",
    logo: "https://play-lh.googleusercontent.com/xhugqgPMqoaSWAJmTZ1Lbwqla-dGsMbigXhsVps0k2s4cESh7OAKE4kPaY_H2lNstQ",
    meta: "Cloud SEO Platform",
  },
  {
    id: 10,
    name: "Raven Tools",
    url: "https://raventools.com/",
    logo: "https://martech.org/wp-content/uploads/2016/08/raven-lg-logo.png",
    meta: "SEO & Reporting",
  },

  // --- Indexing / link services & outreach ---
  {
    id: 11,
    name: "Linklicious",
    url: "https://linklicious.co/",
    logo: "https://linklicious.co/assets/skin/linklicious/img/linklicious-logo.png",
    meta: "Link Indexing",
  },
  {
    id: 12,
    name: "OneHourIndexing",
    url: "https://onehourindexing.com/",
    logo: "https://onehourindexing.co/assets/skin/ohi/img/logo.png",
    meta: "Indexing Service",
  },
  {
    id: 13,
    name: "Indexification",
    url: "https://indexification.com/",
    logo: "https://lh5.googleusercontent.com/proxy/cbz46bLE-_EADsfz7k-27v1h91Jv6WM2NCEU-hxrBnokrkO783tH8E8qILqZrqa0WDdSlCTNq3fTgmKeBnM4lQ",
    meta: "Indexing Service",
  },
  {
    id: 14,
    name: "Gigaindexer",
    url: "https://www.gigaindexer.com/",
    logo: "https://www.gigaindexer.com/wp-content/uploads/gigaindexer-favicon.png",
    meta: "Link Indexing",
  },
  {
    id: 15,
    name: "PBN Butler",
    url: "https://seobutler.com/",
    logo: "https://seobutler.com/favicon.ico",
    meta: "Link & PBN Services",
  },
  {
    id: 16,
    name: "FatJoe",
    url: "https://fatjoe.com/",
    logo: "https://img.shgstatic.com/clutch-static-prod/image/scale/50x50/s3fs-public/logos/26f3b83afc3f1965a61c6cb6e144c29d_13656033726867a5259673c.svg",
    meta: "Link Building Services",
  },
  {
    id: 17,
    name: "Authority Builders",
    url: "https://authority.builders/",
    logo: "https://ml.globenewswire.com/Resource/Download/99480c48-a658-40d8-9ee4-cdd4c6964226",
    meta: "Authority Links",
  },
  {
    id: 18,
    name: "The Hoth",
    url: "https://www.thehoth.com/",
    logo: "https://www.thehoth.com/_next/image/?url=https%3A%2F%2Fwpstg.thehoth.com%2Fwp-content%2Fuploads%2F2025%2F08%2FLogo-wrap.png&w=256&q=75",
    meta: "SEO & Link Services",
  },
  {
    id: 19,
    name: "GMBbeverywhere",
    url: "https://www.gmbeverywhere.com/",
    logo: "https://gmbeverywhere.com/features/images/logo.png",
    meta: "Influencer Outreach",
  },
  {
    id: 20,
    name: "BuzzStream",
    url: "https://www.buzzstream.com/",
    logo: "https://www.buzzstream.com/wp-content/uploads/2025/09/Asset-1.png",
    meta: "Outreach CRM",
  },

  // --- Ping / automation / rank tools ---
  {
    id: 21,
    name: "Pingler Pro",
    url: "https://pingler.com/",
    logo: "https://pbs.twimg.com/profile_images/1350352845/pingler_400x400.png",
    meta: "Ping Tool",
  },
  {
    id: 22,
    name: "Pingomatic (Pro version)",
    url: "https://pingomatic.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ55RpPHX6CZylNVsGGChP_w-xb7wReV4NQ&s",
    meta: "Ping Services",
  },
  {
    id: 23,
    name: "RankActive",
    url: "https://rankactive.com/",
    logo: "https://rankactive.com/wp-content/uploads/2018/01/Logo-RA250x49.png",
    meta: "Rank Tracking",
  },
  {
    id: 24,
    name: "BrightLocal",
    url: "https://www.brightlocal.com/",
    logo: "https://www.brightlocal.com/wp-content/uploads/2023/09/BL-logomark-green.png",
    meta: "SEO Automation",
  },
  {
    id: 25,
    name: "Localo",
    url: "https://localo.com/",
    logo: "https://localo.com/assets/img/localo-logo.webp",
    meta: "SEO Automation",
  },

  // --- Content checking / writing / AI detection ---
  {
    id: 26,
    name: "Copyscape Premium",
    url: "https://www.copyscape.com/",
    logo: "https://www.brainpulse.com/wp-content/uploads/2023/10/copyscape.jpg",
    meta: "Plagiarism Checker",
  },
  {
    id: 27,
    name: "Grammarly Premium",
    url: "https://www.grammarly.com/",
    logo: "https://images.seeklogo.com/logo-png/37/1/grammarly-logo-png_seeklogo-372361.png",
    meta: "Grammar & Style",
  },
  {
    id: 28,
    name: "Jasper AI",
    url: "https://www.jasper.ai/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxsPTAAFvhlyt9Bu7wpdC2yyftvVe7S06vA&s",
    meta: "AI Writing",
  },
  {
    id: 29,
    name: "Writesonic",
    url: "https://writesonic.com/",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Logo_of_the_company_WriteSonic.jpg",
    meta: "AI Writing",
  },
  {
    id: 30,
    name: "Copyleaks AI Content Detector",
    url: "https://copyleaks.com/ai-content-detector",
    logo: "https://copyleaks.com/favicon.ico",
    meta: "AI Content Detection",
  },
  {
    id: 31,
    name: "Content at Scale",
    url: "https://contentatscale.ai/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5DsV9kRIdT8nYYii_enoCT4amKpDa4UlMQ&s",
    meta: "AI Content Platform",
  },
  {
    id: 32,
    name: "Screaming Frog",
    url: "https://www.screamingfrog.co.uk/seo-spider/",
    logo: "https://www.websults.com/wp-content/uploads/logo-1.png",
    meta: "Technical SEO Crawler",
  },
  {
    id: 33,
    name: "Originality.AI",
    url: "https://originality.ai/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aH2w7cWRBaG7UKX0j3oBXw5Ih2oKRs_1UQ&s",
    meta: "AI Detector & Plagiarism",
  },

  // --- Local SEO / citations ---
  {
    id: 34,
    name: "Whitespark",
    url: "https://www.whitespark.ca/",
    logo: "https://yt3.googleusercontent.com/WcHeFAXY_wmrxX6m9gS25tBwyUucc2EWZU6iW3M6eab-ww52WjtZ7uwsmAX-36q1gCncb7p5=s900-c-k-c0x00ffffff-no-rj",
    meta: "Local Citations",
  },
  {
    id: 35,
    name: "Localfalcon",
    url: "https://www.localfalcon.com/",
    logo: "https://www.localfalcon.com/image/scale/auto/120/layout/875154_local-falcon-christmas-logo.png",
    meta: "Local SEO Platform",
  },
  {
    id: 36,
    name: "Moz Local",
    url: "https://moz.com/products/local",
    logo: "https://moz.com/favicon.ico",
    meta: "Local Listings",
  },
  {
    id: 37,
    name: "Synup",
    url: "https://synup.com/",
    logo: "https://pbs.twimg.com/profile_images/1128175266226786304/nUv2cXjd_400x400.png",
    meta: "Local Presence Management",
  },
  {
    id: 38,
    name: "Yext",
    url: "https://www.yext.com/",
    logo: "https://wp.logos-download.com/wp-content/uploads/2020/06/Yext_Logo.png?dl",
    meta: "Listings & Reviews",
  },

  // --- Content optimization / on-page ---
  {
    id: 39,
    name: "Surfer SEO",
    url: "https://surferseo.com/",
    logo: "https://zorgle.co.uk/wp-content/uploads/2024/11/Surfer-seo-logo.png",
    meta: "Content Optimization",
  },
  {
    id: 40,
    name: "Copy.ai",
    url: "https://www.copy.ai/",
    logo: "https://zorgle.co.uk/wp-content/uploads/2024/11/Copy-ai-logo.png",
    meta: "Content Optimization",
  },
  {
    id: 41,
    name: "Frase",
    url: "https://www.frase.io/",
    logo: "https://aiexplorer.io/wp-content/uploads/2023/01/logo-frase-io.png",
    meta: "Content Research & Briefs",
  },
];
