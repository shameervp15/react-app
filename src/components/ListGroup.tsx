import { MouseEvent } from 'react'


function ListGroup() {
  let cities = ["NewYork", "San Francisco", "London", "Sydney"];

  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>
      {/* while cities not found */}
      {cities.length === 0 && <p>No city found!</p>}

      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
