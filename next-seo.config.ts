/** @type {import('next-seo').NextSeoProps} */
const SEO = {
    title: "ChronoQuest | Real Tech. Real Prizes.",
    description:
      "ChronoQuest is Technova BMU’s ultimate coding battleground — DSA, AI, HTB, Kaggle, and cybersecurity fused in a futuristic war for real prizes. Better than ACM BMU. Bigger than HackBMU.",
  
    canonical: "https://www.chronoquest.xyz",
    openGraph: {
      url: "https://www.chronoquest.xyz",
      title: "ChronoQuest | Better Than HackBMU | Tech Relic Hunt at BMU",
      description:
        "ChronoQuest goes beyond HackBMU & ACM BMU. It's Technova's crown jewel — real challenges, intense coding battles, and next-gen problem solving. Join the elite tech war.",
      type: "website",
      siteName: "ChronoQuest",
      images: [
        {
          url: "https://www.chronoquest.xyz/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: "ChronoQuest Logo",
        },
      ],
    },
  
    additionalMetaTags: [
      {
        name: "keywords",
        content: [
          "ChronoQuest", "Technova BMU", "HackBMU", "67th Milestone",
          "ACM BMU", "acm bmu", "Hackathon BMU", "HackBmu", "Coding BMU",
          "ACM BMU hackathon", "cybersecurity BMU", "AI BMU", 
          "bmu coding event", "bmu robothon", "coding competition india",
          "college hackathon india", "student tech fest", "bmu tech war",
          "real tech challenge", "bmu vs acm", "acm vs chronoquest",
          "bmu ai competition", "bmu kaggle", "bmu htb", "bmu dsa challenge",
          "acm bmu events", "best tech fest india", "bmu technova 2025","CTF BMU", "AI coding event India", "Hackathons near Gurgaon", "Cybersecurity coding challenge", "ChronoQuest 2025", "Tech events April 2025"
        ].join(", "),
      },
      {
        name: "author",
        content: "ChronoQuest",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "al:ios:app_name",
        content: "ChronoQuest",
      },
        { 
            name: 'instagram:site', 
            content: 'https://www.instagram.com/chronoquest_bmu/'
         },
    ],
  
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  };
  
  export default SEO;
  