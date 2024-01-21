interface InputProps {
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
}

export default function Input({placeholder, handleChange, name, value} : InputProps) {
  return (
    <input 
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="m-5 border text-black border-black transition hover:bg-slate-200  font-bold py-2 px-4 rounded"
    />
  );
}