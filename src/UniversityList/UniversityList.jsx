import "./UniversityList.css";

export default ({ uniUrl, uniName }) => {
  return (
    <div className="card">
      <a href={uniUrl}>
        <h3>{uniName}</h3>
        <p>{uniUrl}</p>
        <figure>
          <img
            src={`https://source.unsplash.com/random/?${uniName}`}
            alt="img---"
          />
        </figure>
      </a>
    </div>
  );
};
