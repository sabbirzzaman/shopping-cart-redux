import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
    return (
        <Provider store={store}>
            <div className="bg-gray-50 h-full md:h-screen">
                <Home />
            </div>
        </Provider>
    );
}

export default App;
