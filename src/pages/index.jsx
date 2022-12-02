import { useEffect, useMemo, useRef, useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);
  const currentRefresh = useRef(0);

  function handleClick() {
    setLikes((previousLike) => previousLike + 1);
  }

  useEffect(() => {
    currentRefresh.current += 1;
    const interval = setInterval(() => {
        setLikes((previousLike) => previousLike + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  })

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes}) (${currentRefresh.current})</button>
    </div>
  );
}