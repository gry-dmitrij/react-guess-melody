type MistakesProps = {
  count: number,
};

function Mistakes({count}: MistakesProps): JSX.Element {
  const mistakes = new Array(count).fill('');

  return (
    <div className="game__mistakes">
      {mistakes.map((mistake, index) => {
        const keyValue = `mistake-${index}`;
        return <div key={keyValue} className="wrong" />;
      })}
    </div>
  );
}

export default Mistakes;
