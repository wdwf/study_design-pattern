interface IButtonProps {
	label: string;
	onClick: () => void;
}

const Button = ({ label, onClick }: IButtonProps) => (
	<button type="button" onClick={onClick}>
		{label}
	</button>
);

export default Button;
