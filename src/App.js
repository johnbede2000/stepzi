import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ParentSpecific from './components/ParentSpecific';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <ParentSpecific />
      </Container>
    </>
  );
}

export default App;
