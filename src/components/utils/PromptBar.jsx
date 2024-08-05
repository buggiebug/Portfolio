import { username, hostname, path, symbol } from "../utils/constants";

const Prompt = ({ customUserName }) => {
  return (
    <span className="mr-1">
      <span className="">
        {customUserName ? customUserName : username}@{hostname}
      </span>
      :<span className="">{path}</span>
      {symbol}
    </span>
  );
};

export default Prompt;
