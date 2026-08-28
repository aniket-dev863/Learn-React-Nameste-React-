const DeveloperCard = ({ developer }) => {
  return (
    <div>
      <h2>{developer.name}</h2>
      <p>{developer.role}</p>
      <p>{developer.experience} years experience</p>
      <p>⭐ {developer.rating}</p>
      <div>
        {developer.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
