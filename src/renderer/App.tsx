import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
// import icon from '../../assets/icon.svg';
// import logo from '../../assets/Specsavers_logo.png';
import './App.css';
import theme from './theme';
import Header from './components/header/header.component';
import GroupSizesColors from './components/button-group/buttonGroup.component';

const Hello = () => {
  return (
    <div>
      {/* <img src={logo} alt="logo" /> */}
      <Header />
      <GroupSizesColors />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

/* <div>
<div className="Hello">
  <img width="200px" alt="icon" src={icon} />
</div>
<h1>electron-react-boilerplate</h1>
<div className="Hello">
  <a
    href="https://electron-react-boilerplate.js.org/"
    target="_blank"
    rel="noreferrer"
  >
    <button type="button">
      <span role="img" aria-label="books">
        📚
      </span>
      Read our docs
    </button>
  </a>
  <a
    href="https://github.com/sponsors/electron-react-boilerplate"
    target="_blank"
    rel="noreferrer"
  >
    <button type="button">
      <span role="img" aria-label="books">
        🙏
      </span>
      Donate
    </button>
  </a>
</div>
</div> */
