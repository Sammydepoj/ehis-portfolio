import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import { AiOutlineLink } from "react-icons/ai";
import { useState } from "react";

const Projects = () => {
  const data = [
    {
      title: "Document Management System (DMS)",
      desc: "A Document Management System (DMS) is a software solution that enables organizations to store, manage, track, and control electronic documents and images. In the context of a DMS where users can upload documents and another user can approve the document, while ensuring that both users belong to the same department",
      url: "https://document-management.vercel.app/",
    },
    {
      title: "Biller Services",
      desc: `A web platform designed to empower businesses to resell Value Added Services (VAS) products.
       Conceptualized and developed the web platform to efficiently resell VAS products across various categories, contributing 
      to revenue generation and business growth.
       Designed a user-friendly API that simplifies the integration process for businesses, ensuring seamless access to a wide 
      range of VAS products, which fosters strong partnerships and enhances customer satisfaction.
       Implemented a robust transaction reporting and monitoring module that brings transparency and accountability to the 
      forefront, strengthening trust among stakeholders and facilitates informed decision-making.`,
      url: "https://billerservices.xpresspayments.com/",
    },
    {
      title: "Merchant Portal",
      desc: `An integrated web portal to onboard customers, process KYC documents, and access services and tools.
       Designed a user-friendly onboarding process to enhance the experience for merchants; increased adoption rates.
       Implemented a KYC documentation system tailored to specific KYC tiers to reduce the time and effort required for 
      merchants to submit required documents, which streamlined KYC compliance and improved merchant satisfaction.
       Integrated a diverse range of company-provided products and services into the platform, tailored to meet the unique 
      business needs of each merchant. 
       Introduced robust user management features, allowing merchants to efficiently manage user accounts.
       Implemented real-time notification and alert features to keep merchants informed about critical updates.
       Implemented robust security measures, including access control and password reset functionalities to safeguard 
      merchant data and transactions.`,
      url: "https://xpresspayments.com/",
    },
  ];
  const containerStyle = {
    WebkitLineClamp: 2,
    maxHeight: `${12 * 1.6}rem`, // Adjust this based on your font size and line height
    overflow: "hidden",
  };
  const [isHover, setisHover] = useState(false)
  return (
    <div className="my-10" id="project">
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 px-10 mt-10 gap-10">
        {data.map((item, index) => (
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className={`bg-[#151030] rounded-[20px] py-10 px-12 h-full flex justify-evenly flex-col`}
              >

                <h3 className="text-white text-[20px] font-bold text-center">
                  {item.title}
                </h3>
                <p className={`text-justify mt-5 flex-1`} onMouseEnter={() => setisHover(true)} onMouseLeave={() => setisHover(false)} style={isHover ? {} : containerStyle}>{item.desc}</p>
                <Link
                  to={item.url}
                  target="_blank"
                  className="text-right mt-3 flex items-center gap-3 justify-end name font-semibold"
                > 
                  Preview demo
                  <AiOutlineLink />
                </Link>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
