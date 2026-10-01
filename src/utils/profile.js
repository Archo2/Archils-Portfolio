// Single source of truth for the portfolio content.
// Mirrors the master resume and LinkedIn profile; update here when they change.

export const contact = {
  name: "Archils Oburu",
  headline: "Technical Support & Cybersecurity Professional | Full-Stack Developer",
  location: "Everett, WA",
  email: "oburuarchils@gmail.com",
  linkedin: "https://www.linkedin.com/in/archilsoburu",
  github: "https://github.com/Archo2",
};

export const summary = [
  "Technical support professional with four years of experience troubleshooting hardware, software and connectivity issues and owning escalated cases through to resolution.",
  "At Bucher Aerospace I built a searchable issue-and-resolution database that improved team efficiency by 20% in six months, and I write the documentation colleagues rely on.",
  "I hold Google and Microsoft cybersecurity certificates, Google Cloud credentials and a University of Washington full-stack development certificate, with CompTIA Security+ in progress. I'm comfortable across Windows, macOS and Microsoft 365, write SQL and Python, and have hands-on lab experience in AWS and Azure.",
];

export const experience = [
  {
    title: "Product Support Specialist",
    company: "Bucher Aerospace Corporation",
    location: "Everett, WA",
    dates: "November 2024 – Present",
    points: [
      "Provide front-line and escalation support for aerospace products and internal users, troubleshooting hardware, software and connectivity issues from intake through confirmed resolution.",
      "Built a searchable database of recurring technical issues and proven resolutions, improving team efficiency by 20% within six months.",
      "Author FAQs, user guides and knowledge base articles so recurring problems are resolved at first contact.",
      "Coordinate with engineering, quality and operations teams to close cross-functional product and system issues.",
    ],
  },
  {
    title: "Delivery Associate",
    company: "Globalize Solutions",
    location: "Everett, WA",
    dates: "October 2022 – October 2024",
    points: [
      "Operated handheld GPS and scanning technology across a full independent route, diagnosing device and connectivity faults in the field.",
      "Managed direct customer contact for scheduling and exception resolution, with accurate confirmation records for every stop.",
      "Contributed to route optimization research that improved delivery efficiency.",
    ],
  },
  {
    title: "Machine Operator",
    company: "Clearwater Spas",
    location: "Arlington, WA",
    dates: "January 2020 – October 2022",
    points: [
      "Operated and monitored production machinery at 100% quality output against documented standards.",
      "Trained new operators and produced clear procedural guidance for repeatable quality.",
      "Worked with engineers and designers to identify and correct recurring equipment and process faults.",
    ],
  },
  {
    title: "Project Manager",
    company: "Independent Contractor Management",
    location: "Kenya and Uganda",
    dates: "January 2016 – January 2019",
    points: [
      "Managed projects from conception through implementation, including planning, budgets and record keeping.",
      "Carried out equipment quality assurance and testing so installations remained serviceable after handover.",
      "Handled customer product sales and maintained long-term client relationships.",
    ],
  },
];

export const education = [
  {
    title: "Certificate, Full Stack Web Development",
    school: "University of Washington, Seattle, WA",
    dates: "July 2021 – January 2022",
  },
  {
    title: "Bachelor of Science, Hotel Management and Catering",
    school: "Nkumba University, Entebbe, Uganda",
    dates: "2009 – 2013",
  },
];

export const certifications = [
  { name: "Google Cybersecurity Professional Certificate", detail: "Coursera, March 2024" },
  { name: "Microsoft Advanced Cybersecurity Concepts and Capstone Project", detail: "Coursera, May 2024" },
  { name: "Google Cloud Fundamentals: Core Infrastructure", detail: "Google Cloud" },
  { name: "Google Cloud Security", detail: "Google Cloud" },
  { name: "Splunk Master Certificate", detail: "Splunk" },
  { name: "Asana Certified Administrator", detail: "Asana" },
  { name: "Asana Workflow Specialist", detail: "Asana" },
  { name: "CompTIA Security+", detail: "In progress" },
];

export const skills = [
  {
    group: "Support",
    items: ["Escalation and case management", "Hardware and software troubleshooting", "Help desk procedures", "Ticket documentation", "Root cause analysis", "Vendor coordination"],
  },
  {
    group: "Systems",
    items: ["Windows", "macOS", "Microsoft 365", "Microsoft Office", "Mobile devices", "Printers and peripherals", "Device deployment"],
  },
  {
    group: "Cloud and security",
    items: ["AWS EC2 and VPC", "Azure VMs and Network Security Groups", "Splunk", "Security monitoring", "Incident response fundamentals", "Identity and access concepts"],
  },
  {
    group: "Data and development",
    items: ["SQL", "Python", "JavaScript", "React", "Node.js and Express", "MongoDB", "MySQL", "HTML and CSS"],
  },
  {
    group: "Documentation and process",
    items: ["Knowledge base articles", "User guides and FAQs", "SOPs", "Asana workflow administration", "Training new staff"],
  },
  {
    group: "Languages",
    items: ["English", "Dholuo (native)", "Luganda", "Swahili", "French (elementary)"],
  },
];
