import { Reset } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IssueList from './pages/IssueList/IssueList';
import Issue from './pages/Issue/Issue';
import NewIssue from './pages/NewIssue/NewIssue';
import LabelManagement from './pages/LabelManagement/LabelManagement';
import Header from './components/Header';
import RepoHeader from './components/RepoHeader/RepoHeader';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    color: #24292f;
  }
`;

const theme = {
  primary: '#2da44e',
  emphasis: '#0969da',
  default: '#f6f8fa',
  light: '#fff',
  border: '#d0d7de',
  text: '#57606a',
};

function App() {
  return (
    <Router>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <RepoHeader />
        <Routes>
          <Route path="/" element={<IssueList />}></Route>
          <Route path="labels" element={<LabelManagement />}></Route>
          <Route path="issues/:id" element={<Issue />}></Route>
          <Route path="issues/new" element={<NewIssue />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
