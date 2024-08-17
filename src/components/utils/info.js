import skillsData from "./skills";

const calculateDate = (startYear, startMonth, startDay, endYear, endMonth, endDay) => {
  // Define the start and end dates
  const startDate = new Date(startYear, startMonth - 1, startDay); // Adjust for 0-indexed months
  let endDate;
  if (endYear && endMonth && endDay) {
    endDate = new Date(endYear, endMonth - 1, endDay); // Adjust for 0-indexed months
  } else {
    endDate = new Date();
  }
  // Calculate the difference in total months
  const totalMonthsDifference = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  // Calculate the number of years and remaining months
  const years = Math.floor(totalMonthsDifference / 12);
  const months = totalMonthsDifference % 12;

  // Output the result
  if (!years) {
    return `${months} month(s)`;
  }
  return `${years} year(s) and ${months} month(s)`;
};

const skills = Object.values(skillsData).map((skl) => { return skl.data }).flat().map((skl) => skl.name)
const lastSkill = skills[skills.length - 1];
const allSkill = skills.slice(0, skills.length - 1);
const skill = allSkill.join(", ") + " & " + lastSkill;


const info = {
  "additional_commands": [
    {
      "label": "help",
      "about": "View all commands"
    },
    {
      "label": "clear",
      "about": "Clear the screen"
    },
    {
      "label": "history",
      "about": "To know about history"
    },
    {
      "label": "setname",
      "about": "To replace default 'root' name with your name"
    },
    {
      "label": "theme",
      "about": "To customize theme"
    },
    {
      "label": "exit",
      "about": "Exit from terminal"
    }
  ],
  "options": [
    {
      "label": "about",
      "about": "To know about me",
      "value": "I am a Software Engineer based in Noida, India, currently working at PlutosOne. My expertise lies in developing Web Applications and Cross-Platform Applications that are both functional and user-centric, with a focus on delivering intuitive and aesthetically pleasing solutions. <br/>I am passionate about simplifying complex challenges through innovative design and technology, ensuring that the end product not only meets user needs but also enhances their experience."
    },
    {
      "label": "skills",
      "about": "To know about my skills",
      "value": `I'm a versatile full-stack developer, adept at turning ideas into robust applications. <br /> <br /> Proficient in: ${skill}`
    },
    {
      "label": "experience",
      "about": "To know about my experience",
      "value": "I have gained experience working in various roles over the years.",
      "data": [
        {
          "company": "PlutosOne Pvt. Ltd.",
          "position": "Software Engineer",
          "exp": "Oct, 2023 - Present",
          "link": "https://www.plutos.one",
          "diff": calculateDate(2023, 9, 12)
        },
        {
          "company": "Acxiom Consulting Pvt. Ltd.",
          "position": "Technical Consultant",
          "exp": "April, 2023 – Oct, 2023",
          "link": "https://acxiomconsulting.com",
          "diff": calculateDate(2023, 3, 18, 2023, 9, 10)
        },
        {
          "company": "Dodev Technology Pvt. Ltd.",
          "position": "Web Developer (Intern)",
          "exp": "Aug, 2022 - Oct, 2022",
          "link": "https://www.dodev.in",
          "diff": calculateDate(2022, 7, 1, 2022, 10, 30)
        }
      ]
    },
    {
      "label": "projects",
      "about": "To know about my projects",
      "value": "I've had the pleasure of working on diverse projects that showcase my skills and creativity.",
      "data": [
        {
          "label": "Ecommerce (Website) Using Sentiment Analysis",
          "value": "Designed and developed a comprehensive e-commerce solution that empowers businesses with advanced sentiment analysis capabilities enhancing customer engagement and product rankings.",
          "url": "https://dashboard-darkstore.netlify.app"
        },
        {
          "label": "Test Taker",
          "value": "Innovated and executed the development of a dynamic Test Taker WebApp providing an interactive platform for students to enhance their competitive exam preparation with immediate feedback.",
          "url": "https://testtaker.netlify.app/"
        },
        {
          "label": "Voice Notes",
          "value": "Pioneered the creation of a versatile web application allowing users to record voice notes or upload audio files for personal use. And ensured individual access control enabling users to manage their audio content with ease and privacy.",
          "url": "https://shortmusic.netlify.app/"
        }
      ]
    },
    {
      "label": "contact",
      "about": "To get my contact details",
      "value": "Feel free to reach out! You can contact me for any inquiries or collaborations. <br/> Email: mishrashubh38@gmail.com <br/> GitHub: https://github.com/buggiebug <br/> LinkedIn: https://www.linkedin.com/in/shubham-mishra"
    },
    {
      "label": "resume",
      "about": "To view the resume add [ -d ] to download the resume",
      "value": "Thanks for downloading my resume :-}"
    }
  ]
}

export default info;