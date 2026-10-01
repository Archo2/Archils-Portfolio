const GH = "https://github.com/Archo2";

const projects = [
  {
    _id: 10,
    title: "Wachara Wi-Fi",
    category: "Networking and payments",
    about:
      "Pay-as-you-go Wi-Fi hotspot for Wachara village, Kenya. A MikroTik captive portal lets users buy time with M-Pesa STK Push; the server opens and closes router access automatically, saves remaining time if a device loses power, and includes an admin dashboard for sessions and revenue.",
    tech: ["Node.js", "Express", "MySQL", "M-Pesa Daraja", "MikroTik", "Nginx"],
    repo: `${GH}/Wachara-WiFi`,
  },
  {
    _id: 1,
    title: "Azure VM: Secured Nextcloud Server",
    category: "Cloud and security",
    about:
      "Deployed an Ubuntu Server VM inside an Azure virtual network, locked down the subnet with a Network Security Group, connected through Azure Bastion instead of exposing SSH, then installed Nextcloud with a public IP and DNS label.",
    tech: ["Azure", "NSG", "Bastion", "Linux", "SSH", "DNS"],
    repo: `${GH}/Azure-VM`,
  },
  {
    _id: 2,
    title: "AWS: WordPress on EC2 and a Custom VPC",
    category: "Cloud and security",
    about:
      "Deployed a WordPress site on an AWS EC2 instance and built an AWS VPC with subnet and security configuration.",
    tech: ["AWS EC2", "VPC", "Security groups", "WordPress"],
  },
  {
    _id: 3,
    title: "InterActor",
    category: "Full-stack capstone",
    about:
      "University of Washington capstone team project. A MERN stack app that finds movies two or more actors, directors or producers made together, using The Movie Database (TMDB) API.",
    tech: ["MongoDB", "Express", "React", "Node.js", "TMDB API"],
    repo: "https://github.com/kevin-cortina/InterActor-Pt3",
  },
  {
    _id: 4,
    title: "Book Search Engine",
    category: "Full stack",
    about:
      "Search the Google Books API and save books to a personal reading list. Refactored from a REST API to GraphQL with Apollo Server, with JWT authentication.",
    tech: ["React", "GraphQL", "Apollo", "MongoDB", "JWT"],
    repo: `${GH}/Book-Search-Engine`,
  },
  {
    _id: 5,
    title: "MVC Tech Blog",
    category: "Full stack",
    about:
      "A CMS-style blog where developers publish posts and comment on each other's work. Secure logins with bcrypt and database-backed sessions.",
    tech: ["Node.js", "Express", "Handlebars", "Sequelize", "MySQL"],
    repo: `${GH}/MVC-Tech-Blog`,
  },
  {
    _id: 6,
    title: "Workout Tracker",
    category: "Full stack",
    about:
      "Log daily workouts and exercises, then review duration and weight trends for your last seven workouts on a stats dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Chart.js"],
    repo: `${GH}/Workout-Tracker`,
  },
  {
    _id: 7,
    title: "E-commerce Back End",
    category: "APIs and databases",
    about:
      "RESTful API for an online store's products, categories and tags, with Sequelize models and many-to-many associations on MySQL.",
    tech: ["Node.js", "Express", "Sequelize", "MySQL"],
    repo: `${GH}/E-commerceBackEnd`,
  },
  {
    _id: 8,
    title: "Employee Management System",
    category: "APIs and databases",
    about:
      "Command-line content management system for viewing and managing a company's departments, roles and employees in MySQL.",
    tech: ["Node.js", "Inquirer", "MySQL", "SQL"],
    repo: `${GH}/Employee-Management-System`,
  },
  {
    _id: 9,
    title: "Weather Dashboard",
    category: "Front end",
    about:
      "Current conditions and a 5-day forecast for any city from the OpenWeather API, with search history saved in the browser.",
    tech: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    repo: `${GH}/Weather-Dashboard-`,
  },
];

export default projects;
