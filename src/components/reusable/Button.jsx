export function Button({ children, style, type }) {
  return (
    <button type={type ? type : "button"} className={style}>
      {children}
    </button>
  );
}
