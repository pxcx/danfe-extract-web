interface ButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: Function;
}

function Button(props: ButtonProps) {
  const disabled = props.disabled === undefined ? false : props.disabled;
  console.log(disabled);
  return (
    <button
      className={`my-5 py-2 px-6 border-solid border-2 rounded-xl font-bold ${
        props.disabled
          ? "border-gray-400 text-gray-400"
          : "cursor-pointer border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400"
      }`}
      disabled={disabled}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}
export default Button;
