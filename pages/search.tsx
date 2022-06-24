import type { NextPage } from 'next';
import { FormEvent } from 'react';

const Search: NextPage = () => {
  const searchAPI = async () => {
    try {
      console.log('img')

      const fetchAPI = await fetch(
        'http://www.reddit.com/r/pathofexile/new.json'
      );
      const res = await fetchAPI.json();
      const betterRes = res.data.children;

      // console.log('got ere');
      console.log(betterRes);

      // const timeArr = []
      for (let i = 0; i < betterRes.length; i++) {
        const number = betterRes[i].data.created;
        // let ts = new Date(number));
        console.log(number);
        // timeArr.push(betterRes[i].data.created)
      }
    } catch (error) {
      console.error(`Error: \n${error}}`);
    }
  };

  // searchAPI()

  const submitted = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchAPI();
  };
  return (
    <>
      <form onSubmit={(e) => submitted(e)}>
        <input type="text" />
        <button type="submit">Go</button>
      </form>

      <h1>heat map goes here</h1>

      <h1>Sample results go here</h1>
    </>
  );
};

export default Search;
