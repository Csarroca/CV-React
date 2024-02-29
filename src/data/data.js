import { SiProgress } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { AiFillAppstore } from "react-icons/ai";
import { downloads } from "../assets/downloads/downloads";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <SiProgress />,
    title: "Frontend Development",
    des: "My projects stand out with a modern tech stack featuring JavaScript, Typescript, HTML5, CSS3, with React Redux toolkit, Styled-Components, and testing using Jest, React Testing Library, and Cypress for E2E tests. I'm passionate about crafting efficient and stylish web solutions.",
  },
  {
    id: 2,
    icon: <CgWebsite />,
    title: "Backend Development",
    des: "I'm building my expertise in backend application development, with  and initial experience in Mern stack Node.js Express and MongoDB as a database. Ready to grow and excel.",
  },
  {
    id: 3,
    icon: <AiFillAppstore />,
    title: "Sales representative",
    des: "I am a professional with experience in business development and account management, excelling in sales, negotiation, and effective communication with clients. My focus is on understanding customer needs and providing personalized solutions to build long-lasting relationships.",
  },
];

export const techExperience = [
  {
    title: "Frontend developer",
    subTitle:
      "Front-end Web Developer, ThePower Education , Remote 02/2022 - 02/2024",
    description: `-Development and maintenance of the user interface for The PowerMBA's internal web portals and dashboards.
- Use of Agile methodologies with CI/CD to facilitate continuous software delivery and seamless integration.
- Use of technologies such as React, Redux, RTK Query, HTML5, CSS3 among others to develop modern and responsive user interfaces.
- Comprehensive testing and code testing to ensure the stability and quality of the final product (Unit testing with Jest, E2E with Cypress).
- Close collaboration with the design team to implement intuitive and user-centric interfaces.
- Interfacing with the rest of the departments to resolve user issues.`,
    link: undefined,
  },
];

export const othersExperience = [
  {
    title:
      "Business Development Representative (BDR) - Google Cloud, Google, Barcelona",
    subTitle: "02/2021 - 12/2021",
    description: `-Market research and data analysis to identify qualified prospects and areas of opportunity.
- Proactive lead generation through various strategies including email prospecting, cold calling and participation in industry events.
- Close collaboration with the sales team to ensure a smooth transition of qualified leads and provide sales cycle support.
- Developing and maintaining strong relationships with potential customers by providing information on Google Cloud products and services and offering solutions tailored to their specific needs.
- Diligent lead tracking and performance metrics to evaluate the effectiveness of lead generation strategies.`,
    link: undefined,
  },
  {
    title: "Finance solution account manager, Greenflex, Barcelona",
    subTitle: "03/2017 - 06/2020",
    description: `-Portfolio creation and management, prospecting and commercial follow-up of clients and partners.
    -Sales planning and creation of offers adapted to each client. 
    -Loyalty and recurring sales.
    -Financing solutions for investments in energy efficiency projects.
    -Communication with management and reporting of results.
    -Use of CRM (Salesforce).`,
    link: undefined,
  },
  {
    title: "Account manager, Area Staff, Barcelona",
    subTitle: "02/2015 - 01/2017",
    description: `- Account executive in event staffing agency.
    - Liaison between clients and the different managers of the advertising creative department.
    creative advertising department.
    - In charge of the selection, hiring, briefing and coordination of staff for each campaign.
    for each campaign.
    - Supervise staff to ensure compliance with tasks and goals.
    - Reporting campaign results to each client.
   - Use of CRM (Salesforce).`,
    link: undefined,
  },
];

export const jobExperience = [...techExperience, ...othersExperience];
// Education Data
export const educationDes = [
  {
    title: "Economics Degree",
    school: "Barcelona University",
    description: `As an advanced expert in electrotechnical facilities with ISCED level 5 accreditation and 2000 hours of training, I specialize in developing and supervising the implementation of electrical distribution systems across medium and low voltage networks, including transformation centers. My expertise extends to designing specific electrical and automation solutions for domestic, commercial, and industrial applications, ensuring alignment with client specifications and regulatory standards. I oversee the entire construction process, from commissioning to maintenance, optimizing resource allocation for quality outcomes. Operating under the supervision of qualified professionals like Architects or Engineers, I guarantee the delivery of safe, compliant, and high-quality electrotechnical installations.`,
    link: downloads.economy,
  },
];

export const certificates = [
  {
    title: "Bootcamp in  Web Development. 1000h",
    school: "ISDI Coders, Barcelona.(2021)",
    description: `Development of web pages with React, using Redux to manage the state on the Frontend. On the Backend side, building a RESTful API connected to a MongoDB database. 
    Use of Typescript in both Front and Backend.
    Development through React Framework with responsive design and 100% testing code coverage.
    Domain in JavaScript frameworks and web technologies such as React/Redux, CSS3, Styled Components, HTML5.
    Knowledge of database structures (Supabase), theories, principles and good practices (SOLID principles), unit tests of code and web components (Jest), E2E test (Cypress) and version control (Git).`,
    link: downloads.isdiCodersBootcamp,
  },
];

export const skills = {
  markupAndLanguages: ["html", "css", "javascript", "typescript"],
  frontendTechnologies: [
    "react",
    "redux",
    "nextjs",
    "styledcomponents",
    "sass",
    "webpack",
  ],
  backendAndDatabases: ["nodejs", "mongodb"],
  toolsAndOther: ["git", "figma", "trello", "jira", "slack"],
};
