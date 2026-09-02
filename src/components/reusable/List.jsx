export function List({ list, listStyle, itemStyle }) {
  return (
    <ul className={listStyle}>
      {list.map((item, id) => (
        <li className={itemStyle} key={id}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}
