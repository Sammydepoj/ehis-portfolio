import java from "../images/javaLogo.png";
import springboot from "../images/springboot.png";
import postgre from "../images/postgre.png";
import rabbit from "../images/rabbitmq.png";
import msqlserver from "../images/msqlserver.png";
import aws from "../images/aws.png";
import git from "../images/git.svg";
import github from "../images/github-2.svg";
import kafka from "../images/kafka.png";
import docker from "../images/docker.svg";
import kubernetes from "../images/kubernetes.png";
import linux from "../images/linux.jpg";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import BallCanvas from "./../components/canvas/Ball";

const Stack = () => {
  const images = [
    java,
    kafka,
    kubernetes,
    springboot,
    linux,
    postgre,
    msqlserver,
    aws,
    docker,
    github,
    git,
    rabbit,
  ];

  return (
    <div className="mt-20 lg:mt-36" id="my-tech-stack" data-aos="fade-up">
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          Tools I work with
        </p> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack
        </h2>
      </motion.div>
      <div className="mx-auto w-[60%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-20 lg:mt-36 gap-20">
        {images.map((image, index) => (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
