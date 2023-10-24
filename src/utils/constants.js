import xpress from "../images/company/xpress.svg";
import palmpay from "../images/company/palmpay.png";
import mobile from "../images/mobile.png";
import semicolon from "../images/company/semicolon.png";
import web from "../images/web.png";
import backend from "../images/backend.png";
import azureFundamentalsCert from "../images/azureFundamentals.png";
import devopsfundamentalCert from "../images/devopsFundamental.png";
import kubernetesCert from "../images/certifiedkubernetesadmincourse.png";
import terraformCert from "../images/terraformbasiccourse.png";
import dockerCert from "../images/DockerCourse.png";
import linkedInLogo from "../images/linkedinLogo.png";
import kodeKloudLogo from "../images/kodekloudLogo.jpeg";
import amb from "../images/amb.jpg"
export const experiences = [
  {
    title: "Java Backend Engineer",
    company_name: "Xpress Payment LTD",
    icon: xpress,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Led the design and development of the Biller Services VAS product which processed over NGN120 Million in transaction volume within the first six months, showcasing exceptional technical leadership and a keen understanding of financial systems.",
      "Collaborated with a cross-functional team of software engineers and the Product team to revamp and optimize the Pay-Xpress platform, resulting in a 40% increase in sales.",
      "  Evaluated and seamlessly integrated multiple third-party APIs (e.g., Fets, iRecharge, Eko Electricity, Capricone, Flutterwave, Providus Bank, Interswitch, Monno), which enhanced the platform's functionality and expanded its capabilities, offering customers a more comprehensive range of services ",

      " Collaborated in workshops with engineering teams and Product Managers to define product features, ensuring alignment with business objectives and technical feasibility ",

      " Worked closely with Project Owners, Business Analysts, and Solutions Architects to develop software applications that met 100% of project requirements, demonstrating a commitment to delivering high-quality solutions. ",

      "   Provided technical support to both internal teams and external API customers, contributing to increased customer retention and overall satisfaction. ",
    ],
  },
  {
    title: "Guest Technical Write",
    company_name: "Ambassador Labs",
    icon: amb,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "contributed expertly crafted, informative, and engaging technical content for the Ambassador Labs Blog on a freelance basis, with a deep understanding of various technical subjects and the ability to convey complex information in a clear and accessible manner.",
    ],
  },
  {
    title: "Channel Integration Engineer",
    company_name: "PalmPay | Lagos, Nigeria",
    icon: palmpay,
    iconBg: "#383E56",
    date: "February 2021 - February 2022",
    points: [
      " Managed multiple third-party API integrations, enhancing the functionality and versatility of the mobile application.",
      " Collaborated closely with the business development and payment partnership teams to recommend and implement initiatives aimed at improving the customer experience within the mobile application.",
      "  Improved software release efficiency by implementing Continuous Integration and Continuous Deployment (CI/CD) pipelines for development, staging, and production environments using Jenkins, reducing release time by over 50%",
      " Identified and resolved software and user issues to ensure smooth operation of the application, escalating issues to more experienced team members for timely resolution when needed.",
      " Played an integral role in enhancing the team's software development methodologies, including pairing, code and documentation reviewing, and continuous delivery, contributing to improved collaboration and development processes.",
      " Participated in user observations and incorporated user feedback into the product development process, resulting in a 20% reduction in support tickets and an overall improved user experience",
    ],
  },
  {
    title: "Software Engineer Trainee ",
    company_name: "Semicolon Africa | Lagos, Nigeria",
    icon: semicolon,
    iconBg: "#383E56",
    date: "October 2019 - January 2021 ",
    points: [
      " Acquired proficiency in various programming languages and concepts, demonstrating a strong commitment to continuous learning and skill development.",

      " Played a vital role as part of a collaborative team of software engineers in the development of an outsourcing advertising platform for the startup Y-Connector, contributing to the growth and success of the project.",
    ],
  },
];

export const education = [
  {
    course: "BSc. Physics",
    school: "University of Lagos, Yaba",
    location: "Lagos, Nigeria",
    // type: "Full time",
    date: "November  2017",
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "my-tech-stack",
    title: "Tech-stack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "project",
    title: "Project",
  },
];

export const services = [
  {
    title: "Channels integration Engineer",
    icon: backend,
  },
  {
    title: "Java Backend Engineer",
    icon: web,
  },
  {
    title: "Technical Writer",
    icon: mobile,
  },
  {
    title: " DevOps Engineer",
    icon: backend,
  },
];

export const certification = [
  {
    name: "Microsoft Azure fundamentals",
    image: azureFundamentalsCert,
    issuingOrganization: "Microsoft",
    url: "https://www.credly.com/badges/e73ae53d-9a9e-4835-86a1-5c3254146c73?source=linked_in_profile",
    date: "Feb 2023",
    logo: azureFundamentalsCert,
  },
  {
    name: "Devops Fundamentals",
    image: devopsfundamentalCert,
    issuingOrganization: "LinkedIn",
    url: "",
    date: "April 2021",
    logo: linkedInLogo,
  },
  {
    name: "Docker Training Course",
    image: dockerCert,
    issuingOrganization: "KodeKloud",
    url: "",
    date: "January 2023",
    logo: kodeKloudLogo,
  },
  {
    name: "Certified Kubernetes Administrator Course",
    image: kubernetesCert,
    issuingOrganization: "KodeKloud",
    url: "",
    date: "May 2023",
    logo: kodeKloudLogo,
  },
  {
    name: "Terraform Basics Training Course",
    image: terraformCert,
    issuingOrganization: "KodeKloud",
    url: "",
    date: "June 2023",
    logo: kodeKloudLogo,
  },
];
