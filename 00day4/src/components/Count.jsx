function Count({ countHappy, countModerate, countAngry }) {
  return (
    <div>
      <p>🙂: {countHappy}</p>
      <p>😐: {countModerate}</p>
      <p>😡: {countAngry}</p>
    </div>
  );
}

export default Count;
