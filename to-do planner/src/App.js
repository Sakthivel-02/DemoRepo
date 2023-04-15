
import Container from "./components/Container";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {

  return (
      <ErrorBoundary>
        <Container>
        </Container>
      </ErrorBoundary>
  );
}

export default App;
