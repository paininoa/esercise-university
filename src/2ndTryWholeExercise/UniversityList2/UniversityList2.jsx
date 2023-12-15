import "./UniversityList2.css";
import { useState, useEffect } from "react";

export default () => {
  const [universities2, setUniversities2] = useState([]);

  let fetchUni2 = async () => {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=Italy"
      );
      const obj = await response.json();
      setUniversities2(obj);
      console.log(universities2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUni2();
  }, []);

  return (
    <div className="cardWrapper">
      {universities2.map((e, i) => {
        <div key={`university${i}`} className="card">
          <a href={e.web_pages}>
            <h3>{e.name}</h3>
            <p>{e.web_pages}</p>
            <figure>
              <img
                src={`https://source.unsplash.com/random/?${e.name}`}
                alt="img---"
              />
            </figure>
          </a>
        </div>;
      })}
    </div>
  );
};
