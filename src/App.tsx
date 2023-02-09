import { ErrorBoundary } from 'react-error-boundary';

import './App.css';
import { ErrorHandler } from './components/Error';
import WeatherAppHome from './pages/WeatherAppHome';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <WeatherAppHome />
      </ErrorBoundary>
    </div>
  );
}

export default App;
