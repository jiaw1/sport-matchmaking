export interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button className="bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-lg text-white w-full">
      {props.text}
    </button>
  );
};

export default Button;
