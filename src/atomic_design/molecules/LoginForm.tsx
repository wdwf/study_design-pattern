import Button from "../atoms/Button";
import Input from "../atoms/Input";

const LoginForm = () => (
	<form>
		<Input placeholder="Username" />
		<Input type="password" placeholder="Password" />
		<Button label="Login" onClick={() => {}} />
	</form>
);

export default LoginForm;
