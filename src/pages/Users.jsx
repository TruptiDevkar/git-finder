import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Loading from "../componenets/layouts/Loading";
import RepoList from "../componenets/repo/Repolist";

function User() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full mx-auto p-5 mt-[80px] flex flex-col items-center justify-center">
        <div className="sm:min-h-[85vh] flex flex-col items-center">
        <div>
          <img
            src={avatar_url}
            alt="avatar"
            className="rounded-full mx-auto w-[250px]"
          />
        </div>
        <h2 className="font-bold text-4xl mx-auto text-center my-2">
          Hi, I am {name}
        </h2>
        <p className="text-center fot-medium text-2xl italic">{login}</p>
        <p className="text-center max-w-[300px] sm:max-w-[600px] p-2 mx-auto my-1 sm:my-2 font-semibold">
          {bio}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-2 mt-2 mx-auto">
          <div className="">
            <a
              href={`https://${blog}`}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white py-2 px-4 rounded-md font-semibold"
            >
              Website
            </a>
          </div>
          <div className="">
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white py-2 px-4 rounded-md font-semibold"
            >
              GitHub
            </a>
          </div>
          <div className="">
            <a
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white py-2 px-4 rounded-md font-semibold"
            >
              Twitter
            </a>
          </div>
        </div>
        </div>
        <div className="flex flex-wrap md:flex-row items-center justify-center gap-5 my-10 sm:mt-0 sm:mb-20">
          <div className="flex flex-col items-center justify-center min-w-[120px] lg:min-w-[200px]">
            <FaUsers className="text-6xl" />
            <p className="font-semibold text-md">Followers</p>
            <p className="font-bold text-4xl">{followers}</p>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[120px] lg:min-w-[200px]">
            <FaUserFriends className="text-6xl" />
            <p className="font-semibold text-md">Following</p>
            <p className="font-bold text-4xl">{following}</p>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[120px] lg:min-w-[200px]">
            <FaCodepen className="text-6xl" />
            <p className="font-semibold text-md">Repositories</p>
            <p className="font-bold text-4xl">{public_repos}</p>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[120px] lg:min-w-[200px]">
            <FaStore className="text-6xl" />
            <p className="font-semibold text-md">Public Gists</p>
            <p className="font-bold text-4xl">{public_gists}</p>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;