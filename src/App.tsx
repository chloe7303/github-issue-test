import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IssueList from './pages/IssueList/IssueList';
import Issue from './pages/Issue/Issue';
import NewIssue from './pages/NewIssue/NewIssue';
import LabelManagement from './pages/LabelManagement/LabelManagement';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Router>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />}></Route>
        <Route path="labels" element={<LabelManagement />}></Route>
        <Route path="issues/:id" element={<Issue />}></Route>
        <Route path="issues/new" element={<NewIssue />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
