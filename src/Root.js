import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

const Root = ({ children }) => {
	return <Provider store={createStore(reducers, {})}>{children}</Provider>;
};

export default Root;
