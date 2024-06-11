import Board from './components/Board';
import { DialogProvider } from './contexts/DialogContext';

function App() {
  return (
    <DialogProvider>
      <Board />
    </DialogProvider>
  );
}

export default App;
