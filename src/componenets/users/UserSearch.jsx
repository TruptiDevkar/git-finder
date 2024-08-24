import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);

      setText("");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mb-8 gap-2 mt-5 rounded-lg overflow-hidden mx-auto">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 px-5 pr-40 bg-white input input-lg text-black border-[1px] border-gray-400 rounded-lg focus:outline-none"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none rounded-r-lg w-36 bg-[#045ac4] text-white font-semibold text-lg h-full"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="mx-auto">
          <button
            className="bg-purple-500 text-white rounded-md px-4 py-2 text-sm font-medium border-[1px] border-gray-200"
            onClick={clearUsers}
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;