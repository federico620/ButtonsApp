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
      <button onClick={() => onDelete?.(id)}>Borrar</button>
    </>
  );
}

export default Counter;
