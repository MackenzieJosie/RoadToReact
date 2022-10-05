import * as React from 'react';

// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// };
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const getTitle = (title) => {
  return title;
}

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    {/* <h1>{welcome.greeting} {welcome.title}</h1> */}

    <Search />

    <hr />

    <List />
    <List />
  </div>
);

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = () => (
  <ul>
    {list.map( (item) => {
      return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </span>
          
        </li>
      );
    })}
  </ul>
);

export default App;