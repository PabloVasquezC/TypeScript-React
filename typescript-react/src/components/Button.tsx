interface ButtonProps {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button 
      onClick={handleClick}
      className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
