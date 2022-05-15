import React, { useState } from "react";

const Change = ({ id, text, setText, close, editedWords }) => {
  const [data, setData] = useState({
    word: text,
    color: editedWords.fileData["colors"][id],
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const removeText = () => {
    setText(editedWords.removeText(text));
    close();
  };

  const save = (e) => {
    e.preventDefault();

    editedWords.changeTextColor(id, data.color);
    setText(editedWords.changeTextContent(id, data.word));
    close();
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-gray-100 opacity-70" />

      <form
        onSubmit={save}
        className="relative p-5 flex flex-col items-start bg-white rounded space-y-2"
      >
        <div
          onClick={close}
          className="absolute top-2 right-5 text-lg text-[#ff0606] font-mono font-bold cursor-pointer"
        >
          x
        </div>
        <h1 className="text-lg font-medium uppercase">{text}</h1>

        <div className="inline-flex items-center">
          <p>Change Color: </p>
          <input
            className="w-14 h-7 bg-white"
            type="color"
            name="color"
            value={data.color}
            onChange={handleChange}
          />
        </div>

        <div className="inline-flex items-center">
          <p>Change Text: </p>
          <input
            className=" hover:outline-none border-b border-b-blue-500 bg-white"
            type="text"
            name="word"
            value={data.word}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex justify-between space-x-3 md:space-x-5">
          <button
            onClick={removeText}
            className="px-3 py-1 bg-[#ff0606] text-white rounded"
          >
            Remove Text
          </button>

          <button
            type="submit"
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Change;
