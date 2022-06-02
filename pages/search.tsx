import type { NextPage } from 'next';

const Search: NextPage = () => {
    
  const searchAPI = async () => {
    try {
      console.log('ha gotcha');

      const fetchAPI = await fetch('');
      const res = await fetchAPI.json();

      console.log(res);
    } catch (error) {
      console.error(`Error: \n${error}}`);
    }
  };

  return (
    <>
      <form onSubmit={() => searchAPI()}>
        <input type="text" />
        <button type="submit">Go</button>
      </form>

      <h1>heat map goes here</h1>

      <h1>Sample results go here</h1>
    </>
  );
};

export default Search;
