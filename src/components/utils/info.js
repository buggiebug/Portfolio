import skillsData from "./skills";
import Projects from "./projects.json";

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
  const totalYear = endDate.getFullYear() - startDate.getFullYear();
  const totalMonth = endDate.getMonth() - startDate.getMonth();
  const totalDay = endDate.getDate() - startDate.getDate();

  const totalMonthsDifference = ( totalYear* 12 + totalMonth);

  // Calculate the number of years and remaining months
  const years = Math.floor(totalMonthsDifference / 12);
  const months = totalMonthsDifference % 12;

  // Adjust the number of days correctly when borrowing months
  let adjustedDays = totalDay;
  if (totalDay < 0) {
      const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
      adjustedDays = previousMonth.getDate() + totalDay; // Get remaining days from the previous month
  }

  // Output the result
  if (!years) {
      return `${months} month(s)`;
  }
  return `${years} year(s) and ${months} month(s) and ${adjustedDays} day(s)`;
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
          "diff": calculateDate(2023, 10, 12)
        },
        {
          "company": "Acxiom Consulting Pvt. Ltd.",
          "position": "Technical Consultant",
          "exp": "April, 2023 – Sep, 2023",
          "link": "https://acxiomconsulting.com",
          "diff": calculateDate(2023, 4, 18, 2023, 10, 9)
        },
        {
          "company": "Dodev Technology Pvt. Ltd.",
          "position": "Web Developer (Intern)",
          "exp": "July, 2022 - Oct, 2022",
          "link": "https://www.dodev.in",
          "diff": calculateDate(2022, 7, 4, 2022, 10, 7)
        }
      ]
    },
    {
      "label": "projects",
      "about": "To know about my projects",
      "value": "I've had the pleasure of working on diverse projects that showcase my skills and creativity.",
      "data": Projects
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