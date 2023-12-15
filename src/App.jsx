import { useState, useEffect } from "react";
import "./App.css";
import UniversityList from "./UniversityList/UniversityList";
import SearchBar from "./SearchBar/SearchBar";
import App2 from "./2ndTryWholeExercise/App2";

function App() {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUni, setFilteredUni] = useState([]);
  const [count, setCount] = useState(0);
  // const [error, setError] = useState("");  // PER GESTIRE ERRORI MA QUALCOSA NON VA----------------

  const handleChange = (searchValue) => {
    setSearch(searchValue);
  };

  const handleClick = () => {
    setCount((count) => count + 1);
    setFilteredUni(universities);
    const newList = universities.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUni(newList);
  };

  const handleSort = () => {
    const sortedList = filteredUni.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    setFilteredUni([...sortedList]); // LO SPREAD SERVE A FAR RICARICARE L'ARRAY FILTRATO CHE ALTRIMENTI NON MOSTRA IL SORT
  };

  // console.log("sortedList changed", filteredUni);

  const fetchUni = async () => {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=Italy"
      );
      // if (response.status !== 200) {           // PER GESTIRE ERRORI MA QUALCOSA NON VA----------------
      //   throw new Error("Fetch error");
      // }
      const obj = await response.json();
      setUniversities(obj);
      setFilteredUni(obj);
    } catch (err) {
      console.error(err);
      // setError(err);                 // PER GESTIRE ERRORI MA QUALCOSA NON VA----------------
    }
  };

  useEffect(() => {
    fetchUni();
  }, []);

  return (
    <>
      {/* <App2 /> */}

      {/* {error ?? <p>There was an error. Please try again.</p>}      PER GESTIRE ERRORI MA QUALCOSA NON VA----------------
      {!error ?? ()}                                                  PER GESTIRE ERRORI MA QUALCOSA NON VA---------------- */}
      <>
        <h4>{`Counter: ${count}`}</h4>
        <section>
          <SearchBar
            search={search}
            handleChange={handleChange}
            handleClick={handleClick}
            handleSort={handleSort}
          />
          <div className="cardsWrapper">
            {filteredUni.map((e, i) => (
              <UniversityList
                key={`uni${i}`}
                uniName={e.name}
                uniUrl={e.web_pages}
              />
            ))}
          </div>
        </section>
      </>
    </>
  );
}

export default App;
