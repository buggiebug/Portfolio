import React from "react";
import { useEffect, useRef, useState } from "react";
import PromptBar from "./terminal/PromptBar";
import { themes } from "./terminal/constants";
import Resume from "./docs/Shubham_Resume.pdf";

import info from "./info.json";
const options = info.options.map((option) => option.label);

const CliHome = () => {

  // TODO:  Implement history...
  const [logHistory, setLogHistory] = useState([]);
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
    setUserInput(e.target.value);
  };

  // Execute commands...
  const executeCommand = (command) => {
    // If the command is not setname then extract only 1st word [command] else all the command line text...
    if (!command.trim().startsWith("setname")) {
      command = command.split(" ")[0];
    } else {
      command = command + "";
    }

    command = command.trim().toLowerCase();

    if (command === "bug") {
      // alert("Bhaggg bsdka \n:-{\n:-{\n:-{\n:-{\n:-{\n:-{");
      console.log(history);
    }

    // If command exists in options //! [to show my data commands]...
    if (options.includes(command)) {
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
        } else {
          output += data?.map((item) => {
            return `<br /><br /> <strong>${item.label}</strong> <br /> ${item.value}`;
          });
        }
      }

      if (command === "resume") {
        window.open(Resume);
      }

      // Set data according to commad...
      setHistory((history) => [
        ...history,
        {
          command,
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
      if (command === "clear") {
        setHistory([]);
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
        const commands = userInput.trim().split(" ");

        // If command is less than or equal to 1 & comand is them & show the theme list & command set commands...
        if (commands.length <= 1 && command === commands[0]) {
          const data = `
            - run 'theme list' to list themes<br />
            - run 'theme set [<i>theme_name<i>]' to set theme
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

        setHistory((history) => [
          ...history,
          {
            command: showCommand,
            output: `Invalid subcommand: ${showCommand.replace("theme", "")}`,
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

    // TODO:  Implement history...
    setLogHistory([...logHistory, userInput])

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  };

  const handleArrowKeyPress = ({ key }) => {
    let lastIndex = history.length - 1;
    console.log(history[lastIndex])
    if (key === "ArrowUp") {
      setUserInput(history[lastIndex].command);
      lastIndex--;
    }
    if (key === "ArrowDown") {
      setUserInput(history[lastIndex+1].command);
      lastIndex++;
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

  return (
    <div className={`${currentTheme} h-full`}>
      <div className="font-bold text-xl p-2 w-[100vw] min-h-[100vh] bg-bgcol">
        {
          /* History */
          history &&
          history?.map((history, idx) => (
            <div key={idx} className="mb-2 text-command">
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
                className="w-full md:w-[450px] lg:w-[700px] bg-transparent outline-none text-command"
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

export default CliHome;
