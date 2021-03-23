import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

//fetchin category list
const GET_JOKE_LIST = gql`
  query jokes {
    jokes {
      name
    }
  }
`;

//fetching individual joke by category selected
const GET_JOKE = gql`
  query joke($id: String) {
    joke(id: $id) {
      name
    }
  }
`;

function App() {
  //main function

  //usestate hooks for saving category

  const [jokeCategory, setJokeCategory] = useState("");

  //react-redux initialisation
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  //initializing of opollo client states
  //for categories
  const {
    data: category,
    loading: loadingList,
    error: errorList,
    refetch,
  } = useQuery(GET_JOKE_LIST);

  //for individual fetched joke

  const [
    getJoke,
    { data: jokes, loading: loadingJoke, error: errorJoke },
  ] = useLazyQuery(GET_JOKE);

  //for categories first load or refresh
  if (loadingList) return "Loading...";
  if (errorList) return <p>ERROR loadig category</p>;
  if (!category) return <p>Not found</p>;

  //text after selected joke category
  //state management tool react-reduz for counting clicks
  const selectedText = `You selected ${count} chuck norris joke.This is about ${jokeCategory}🚀`;

  return (
    <Fragment>
      <header>
        <h1>Fundo Full Stack Challenge</h1>
      </header>
      <main>
        <ul className="side-menu">
          {category &&
            category.jokes &&
            category.jokes.map((category) => (
              <li
                className="category"
                onClick={() => {
                  //onClick get joke according to category selected
                  refetch();
                  dispatch({ type: "ADD_JOKE" });
                  const id = category.name;
                  setJokeCategory(category.name);
                  getJoke({ variables: { id } });

                  if (loadingJoke) return "Loading...";
                  if (errorJoke) return <p>ERROR loading joke</p>;
                  if (!jokes) return <p>Not found</p>;
                }}
                key={category.name}
              >
                {category.name}
              </li>
            ))}
        </ul>
        <div className="jokes">
          {/* show joke after clicking a category */}
          {jokes && jokes.joke && jokes.joke.name && (
            <h2 className="joke">{jokes.joke.name} </h2>
          )}
          <li>{jokeCategory !== "" ? selectedText : ""}</li>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
