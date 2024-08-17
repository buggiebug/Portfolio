import { SiExpress } from "react-icons/si";
import { FaBootstrap, FaRegFileCode } from "react-icons/fa6";
import { DiRedis } from "react-icons/di";
import { TbGitMerge } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { PiFileCppBold } from "react-icons/pi";
import { RiFlutterFill, RiNextjsFill, RiJavaLine, RiCodeSSlashFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiNestjs, SiDart } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";
import { SiJfrogpipelines } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { RiFlowerLine } from "react-icons/ri";

const skills = {
    // Programming Languages
    programmingLanguages: {
        data: [
            { name: "Javascript", value: "90", img: <SiJavascript /> },
            { name: "Typescript", value: "80", img: <SiTypescript /> },
            { name: "Core Java", value: "60", img: <RiJavaLine /> },
            { name: "C++", value: "60", img: <PiFileCppBold /> },
            { name: "Dart", value: "40", img: <SiDart /> },
        ],
        icon: <RiCodeSSlashFill />
    },

    // Frontend Tools
    frontendTools: {
        data: [
            { name: "React Js", value: "90", img: <ion-icon name="logo-react"></ion-icon> },
            { name: "Next Js", value: "90", img: <RiNextjsFill /> },
            { name: "HTML5", value: "90", img: <ion-icon name="logo-html5"></ion-icon> },
            { name: "CSS3", value: "80", img: <ion-icon name="logo-css3"></ion-icon> },
            { name: "Tailwind CSS", value: "80", img: <ion-icon name="logo-css3"></ion-icon> },
            { name: "Bootstrap", value: "75", img: <FaBootstrap /> },
            { name: "Redux", value: "90", img: <SiRedux /> },
            { name: "Context API", value: "80", img: <ion-icon name="cube-outline"></ion-icon> },
            { name: "Flutter", value: "30", img: <RiFlutterFill /> },
        ],
        icon: <RiFlowerLine />
    },

    // Backend Tools
    backendTools: {
        data: [
            { name: "Node Js", value: "85", img: <ion-icon name="logo-nodejs"></ion-icon> },
            { name: "Express Js", value: "85", img: <SiExpress /> },
            { name: "Nest Js", value: "75", img: <SiNestjs /> },
        ],
        icon: <FaRegFileCode />
    },

    // Databases
    database: {
        data: [
            { name: "SQL", value: "75", img: <ion-icon name="server-outline"></ion-icon> },
            { name: "MongoDB", value: "75", img: <ion-icon name="leaf-outline"></ion-icon> },
            { name: "Redis", value: "70", img: <DiRedis /> },
        ],
        icon: <FcAddDatabase />
    },

    // Version Control
    versionControl: {
        data: [
            { name: "GitHub", value: "85", img: <ion-icon name="logo-github"></ion-icon> },
            { name: "Git", value: "90", img: <TbGitMerge /> },
        ],
        icon: <FaGitAlt />
    },

    // CI/CD Pipelines
    ciCd: {
        data: [
            { name: "Jenkins", value: "70", img: <FaJenkins /> },
        ],
        icon: <SiJfrogpipelines />
    },

    // Other Tools
    otherTools: {
        data: [
            { name: "Docker", value: "75", img: <FaDocker /> },
            { name: "Slack", value: "85", img: <ion-icon name="logo-slack"></ion-icon> },
        ],
        icon: <VscTools />
    },
};

export default skills;