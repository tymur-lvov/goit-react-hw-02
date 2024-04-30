import s from "./Options.module.css";

function Options({
  good,
  neutral,
  bad,
  reset,
  handleResetClick,
  updateFeedback,
  totalFeedback,
}) {
  return (
    <ul className={s.list}>
      <li>
        <button
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {good}
        </button>
      </li>
      <li>
        <button
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {neutral}
        </button>
      </li>
      <li>
        <button
          onClick={(event) =>
            updateFeedback(event.target.innerText.toLowerCase())
          }
        >
          {bad}
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button
            onClick={() => {
              handleResetClick();
            }}
          >
            {reset}
          </button>
        </li>
      )}
    </ul>
  );
}

export default Options;
