import { useState } from "react";
import Change from "./Change";

const Word = ({ id, text, setText, editedWords }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        id={id}
        style={{ color: editedWords.fileData["colors"][id] }}
        onClick={() => setOpen(!open)}
        className="inline text-xl lg:text-2xl cursor-pointer"
      >
        {text} &nbsp;
      </span>
      {open && (
        <Change
          id={id}
          text={text}
          setText={setText}
          editedWords={editedWords}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Word;
