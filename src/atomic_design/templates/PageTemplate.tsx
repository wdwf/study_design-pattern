import type { FC } from "react";
import Header from "../organisms/Header";
import Main from "../organisms/Main";

interface IPageTemplateProps {
	children?: React.ReactNode;
}

const PageTemplate: FC<IPageTemplateProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<Main />
			<section>{children}</section>
			{/* <Footer /> */}
		</div>
	);
};

export default PageTemplate;
