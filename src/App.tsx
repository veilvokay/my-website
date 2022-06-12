import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/Themes';

// Pages
import MainPage from './pages/MainPage';
import GlobalStyle from './globalStyles';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SkillsPage from './pages/SkillsPage';
import WorkPage from './pages/WorkPage';


const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={LightTheme}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/work' element={<WorkPage />} />
                    <Route path='/skills' element={<SkillsPage />} />
                </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
