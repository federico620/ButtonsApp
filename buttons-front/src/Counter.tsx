import './Counter.css'

function Counter({
  id,
  count,
  name,
  onIncrement,
  onDelete,
}: {
  id: number;
  count: number;
  name: string;
  onIncrement: (counterId: number) => void;
  onDelete?: (counterId: number) => void;
}) {
  return (
    <>
      <button onClick={() => onIncrement(id)}>{name}</button>
      <span>Clicks: {count}</span>
      <button onClick={() => onDelete?.(id)} className="btn-delete"></button>
    </>
  );
}

export default Counter;
