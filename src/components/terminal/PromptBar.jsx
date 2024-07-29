import { username, hostname, path, symbol } from "./constants";

const Prompt = ({ customUserName }) => {
  return (
    <span className="mr-1">
      <span className="text-shebang">
        {customUserName === "" ? username : customUserName}@
        {hostname}
      </span>
      :<span className="text-symbol">{path}</span>
      {symbol}
    </span>
  );
};

export default Prompt;

