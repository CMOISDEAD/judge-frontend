export const Input = ({
  type,
  id,
  placeholder,
  name,
  margin = true,
  onChange,
}) => {
  return (
    <div className={margin ? "mb-5" : "mb-1"}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-white capitalize"
      >
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-neutral-950 border border-neutral-800 text-neutral-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
