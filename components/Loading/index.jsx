import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.loading}>
      <svg
        height="100"
        stroke="#bac736"
        strokeWidth="2"
        className={classes.text_line}
        width="100%"
      >
        <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
          Miniso
        </text>
      </svg>
    </div>
  );
}

export default Loading;
