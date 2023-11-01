import './Counter.css'

export const Counter = ({
  id,
  name,
  onIncrement,
  onDelete,
}: {
  id: number;
  name: string;
  onIncrement: (counterId: number) => void;
  onDelete: (counterId: number) => void;
}) => {
  return (
    <>
      <button onClick={() => onIncrement(id)}>{name}</button>
      <button onClick={() => onDelete?.(id)} className="btn-delete"></button>
    </>
  );
}

