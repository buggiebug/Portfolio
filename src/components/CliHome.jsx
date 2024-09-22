import React, { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptBar from "./utils/PromptBar";
import { themes } from "./utils/constants";

// Files...
import Resume from "./docs/Shubham_Resume.pdf";
import Ubuntu from "./images/ubuntu.jpg"
import Kali from "./images/kali.jpg"
import Arch from "./images/arch.webp"
import Loader from "./images/loader.gif"


import info from "./utils/info";
const options = info.options.map((option) => option.label);

const Cli = ({ appRef }) => {

  const navigate = useNavigate();

  const [scrollState, setScrollState] = useState(false);
  const [logHistory, setLogHistory] = useState([]);
  const [historyPos, setHistoryPos] = useState(0);
  const [currentTheme, setTheme] = useState(themes[0]);
  const [customUserName, setCustomUserName] = useState("");
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "help",
      output:
        "Here are the available commands:- <br />" +
        info.options
          .map((option) => option.label + " - " + option.about)
          .join("<br />") +
        "<br />" +
        info.additional_commands
          .map((option) => option.label + " - " + option.about)
          .join("<br />"),
    },
  ]);

  // Set User Input...
  const handleInputChange = (e) => {
    setUserInput(String(e.target.value).toLowerCase());
  };

  // Execute commands...
  const executeCommand = (command) => {
    if (!command) return;
    // If the command is not setname then extract only 1st word [command] else all the command line text...
    if (!command.trim().startsWith("setname")) {
      command = command.split(" ")[0];
    } else {
      command = command + "";
    }

    command = command.trim().toLowerCase();
    const commands = userInput.trim().split(" ");

    // If command exists in options //! [to show my data commands]...
    if (options.includes(command) && ((commands.includes("resume") && commands.includes("-d")) || (commands.includes("resume") && commands.length === 1) || commands.length === 1)) {
      let output = info?.options?.find(
        (option) => option?.label === command
      )?.value;

      // check if 'data' exists within the options
      if (info.options.find((option) => option.label === command)?.data) {
        // append to output
        const data =
          info.options.find((option) => option.label === command).data ?? [];

        if (command === "projects") {
          output += data?.map((item) => {
            return `<br /><br /> <strong><a class="underline" href="${item.url}" target="_blank" rel="noopener norefferer">${item.label}</a></strong> <br /> ${item.value}`;
          });
        }
        else if (command === "experience") {
          output = `${output}<br/>` + data?.map((item) => {
            return `<span title='${item.diff}'><br/><strong>${item.position}</strong><span class="text-sm"><br/><a href='${item.link}' target='_blank'>${item.company}</a><br/> ${item.exp}</span></span><br/>`;
          });
          output = output.split(",").join(" ")
        }
        else {
          output += data?.map((item) => {
            return `<br /><br /> <strong>${item.label}</strong> <br /> ${item.value}`;
          });
        }
      }

      if (command === "resume") {
        if (commands[0] === "resume" && commands.length === 1) {
          window.open(Resume);
          setHistory((history) => [
            ...history,
            {
              command: userInput,
              output: "Thanks for viewing my resume",
            },
          ]);
          return;
        }
        if (commands[1] === "-d" && commands.length === 2) {
          const link = document.createElement('a');
          link.href = Resume;
          link.download = 'Shubham_resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }

      // Set data according to commad...
      setHistory((history) => [
        ...history,
        {
          command: userInput,
          output,
        },
      ]);
    } else {
      const showCommand = userInput.trim();

      //  If user presses only enter in the terminal black command...
      if (command === "") {
        setHistory((history) => [
          ...history,
          {
            command: command,
            output: "",
          },
        ]);
        return;
      }

      // If help command then concant it with old data & display help...
      if (userInput.split(" ").length === 1 && ["help", "ls", "dir"].includes(userInput)) {
        setHistory((history) => [
          ...history,
          {
            command: command,
            output:
              "Here are the available commands: <br />" +
              info.options
                .map((option) => option.label + " - " + option.about)
                .join("<br />") +
              "<br />" +
              info.additional_commands
                .map((option) => option.label + " - " + option.about)
                .join("<br />"),
          },
        ]);
        return;
      }

      // If clear command then clear the terminal...
      if (command === "clear" || command === "cls") {
        setHistory([]);
        return;
      }

      // If history command then show the history...
      if (command === "history") {
        const hist = logHistory.map((ele, idx) => {
          return ele !== "," && `<span>${idx + 1}. ${ele}</span><br/>`
        }).join(" ");
        const showHistory = `<br/><span>Id CommandLine</span><br/><span>-- -----------</span><br/>${hist}`
        setHistory((history) => [
          ...history,
          { command, output: showHistory },
        ]);
        return;
      }

      if (command.trim().startsWith("setname")) {
        const visitorName = command.replace("setname", "").trim();
        setCustomUserName(visitorName.split(" ").join("_"));
        setHistory((history) => [
          ...history,
          { command, output: `Hello ${visitorName}!` },
        ]);
        return;
      }

      if (command.trim().startsWith("theme")) {
        // If command is less than or equal to 1 & comand is them & show the theme list & command set commands...
        if (commands.length <= 1 && command === commands[0]) {
          const data = `
            - run 'theme list' to list themes<br />
            - run 'theme set [<i>theme_name<i>]' to set theme<br />
            - run 'theme reset' to reset the theme
          `;
          setHistory((history) => [
            ...history,
            { command: command, output: data },
          ]);
          return;
        }

        // if command is list & length is equal to 2...
        if (commands.length <= 2 && commands[1] === "list") {
          const data = `Available themes: [ ${themes.join(", &nbsp;")} ]`;
          setHistory((history) => [
            ...history,
            { command: showCommand, output: data },
          ]);
          return;
        }

        if (commands.length >= 2 && commands[1] === "set") {

          if (themes.includes(commands[2])) {
            setTheme(commands[2]);
            setHistory((history) => [
              ...history,
              {
                command: showCommand,
                output: `Theme activated`,
              },
            ]);

            return;
          }

          setHistory((history) => [
            ...history,
            {
              command: showCommand,
              output: `Invalid <i>theme name</i> passed. Run 'theme list' to list available themes`,
            },
          ]);
          return;
        }

        if (commands.length >= 2 && commands[1] === "reset") {
          setTheme(commands[1]);
          setHistory((history) => [
            ...history,
            {
              command: showCommand,
              output: `Theme restored`,
            },
          ]);
          return;
        }

        setHistory((history) => [
          ...history,
          {
            command: showCommand,
            output: `Invalid subcommand: ${showCommand.replace("theme", "")}`,
          },
        ]);

        return;
      }

      //  If user presses only enter in the terminal black command...
      if (command === "exit") {
        navigate("/")
        setHistory((history) => [
          ...history,
          {
            command: command,
            output: "",
          },
        ]);
        return;
      }

      // If there is no matching commands...
      setHistory((history) => [
        ...history,
        { command: showCommand, output: "Command not found. <br/>" },
      ]);
    }
  };

  // On Presing Enter...
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    executeCommand(userInput);

    // Record History of commands...
    setLogHistory([...logHistory, userInput]);
    setHistoryPos(historyPos + 1);

    // To scroll the screen...
    setScrollState(!scrollState);
  };

  // On Pressing arrowUpDown...
  const handleArrowKeyPress = ({ key }) => {
    if (key === "ArrowUp" && historyPos > 0) {
      setUserInput(logHistory[historyPos - 1]);
      setHistoryPos(historyPos - 1);
    }
    if (key === "ArrowDown" && (historyPos < logHistory.length - 1)) {
      setUserInput(logHistory[historyPos + 1]);
      setHistoryPos(historyPos + 1);
    }
  }

  // Auto focus on input box...
  const inputRef = useRef(null);
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    window.addEventListener("click", focusInput);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", focusInput);
    };
    // eslint-disable-next-line
  }, []);


  // Set theme...
  useEffect(() => {
    const loadTheme = () => {
      if (["reset", "ubuntu"].includes(currentTheme)) {
        const appHomeId = document.getElementById("home");
        appHomeId.style.backgroundImage = `url(${Ubuntu})`;
        appHomeId.style.color = `white`;
      }
      if (currentTheme === "kali") {
        const appHomeId = document.getElementById("home");
        appHomeId.style.backgroundImage = `url(${Kali})`;
        appHomeId.style.color = `white`;
      }
      if (currentTheme === "arch") {
        const appHomeId = document.getElementById("home");
        appHomeId.style.backgroundImage = `url(${Arch})`;
        appHomeId.style.color = `gold`;
      }
    }
    loadTheme()
    window.addEventListener("load", loadTheme);
    return () => window.removeEventListener("load", loadTheme);
  }, [currentTheme]);


  // Scroll to bottom of command lines...
  useEffect(() => {
    const appHomeId = document.getElementById("home");
    if (appRef.current) {
      appHomeId.scrollTo({ top: appRef.current.scrollHeight, behavior: "smooth" })
    }
  }, [appRef, scrollState]);

  return (
    <div className={`${currentTheme === "arch" ? "pt-4" : ""} h-full`}>
      <div className="font-bold p-2 w-[100vw] min-h-[100vh]">
        {
          /* History */
          history &&
          history?.map((history, idx) => (
            <div key={idx} className="mb-2">
              {/* Show prompt button by default... */}
              <PromptBar customUserName={customUserName} />
              <span>{history.command}</span> <br />
              <span dangerouslySetInnerHTML={{ __html: history.output }} />
            </div>
          ))
        }

        {/* Prompt */}
        <div className="border border-red-600 flex flex-col sm:flex-row">
          <span className="">
            <PromptBar customUserName={customUserName} />
          </span>
          <span className="">
            <form onSubmit={handleSubmit} className="mt-2 sm:mt-0">
              <input
                type="text"
                className="w-full md:w-[450px] lg:w-[700px] bg-transparent outline-none"
                autoFocus
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleArrowKeyPress}
                ref={inputRef}
                autoComplete="off"
              />
            </form>
          </span>
        </div>
      </div>
    </div>
  );
};


const LoadingComponent = () => {
  const message = useMemo(() => { return ["Loading shell environment...", "Checking system configurations...", "Installing dependencies...", "Terminal ready."] }, [])
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) => [...prev, message[index]]);
      setIndex(index + 1);
    }, 1000);
    return () => clearInterval(timer)
  }, [message, index])

  return <>
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#00000096]">
      <img src={Loader} alt="loader" className="absolute top-52" />
      <div className="relative top-5 text-lime-600 font-mono">
        {!data.length && <p>{message[0]}</p>}
        {data.map((ele, idx) => {
          return <p key={idx}>{ele}</p>
        })}
      </div>

    </div>
  </>
}

export default function CliHome({ appRef }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer)
  }, [])

  return <>
    {
      loading ? <LoadingComponent /> : <Cli appRef={appRef} />
    }
  </>
};
