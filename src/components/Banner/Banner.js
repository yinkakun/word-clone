export const Banner = ({ status, children }) => {
  return <div className={`banner ${status}`}>{children}</div>;
};
