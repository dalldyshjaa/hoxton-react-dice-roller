export function Game({ setCurrent }) {
  return (
    <div>
      <button
        onClick={() => {
          let y = Math.floor(Math.random() * 6);
          if (y === 0) setCurrent(1);
          if (y === 1) setCurrent(2);
          if (y === 2) setCurrent(3);
          if (y === 3) setCurrent(4);
          if (y === 4) setCurrent(5);
          if (y === 5) setCurrent(6);
        }}
      >
        Play
      </button>
    </div>
  );
}
