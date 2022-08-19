export function Display({ current }) {
  function display() {
    let string = [];
    for (let i = 0; i < current; i++) {
      string.push(".");
    }
    return string.map((item) => {
      return <div className="dot"></div>;
    });
  }
  return <div className="square">{display()}</div>;
}
