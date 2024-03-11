import './App.css';
import { Fragment, ReactFragment } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Home } from './features/home/Home';
import { Navbar } from './features/navbar/Navbar';
import { Portfolio } from './features/portfolio/Portfolio';
import { Resume } from './features/resume/Resume';

const homeIcon = <Fragment><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg></Fragment>
const resumeIcon = <Fragment><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg></Fragment>
const portfolioIcon = <Fragment><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg></Fragment>

export type LinksType = {
  id:number
  caption:string
  url:string 
  icon:ReactFragment

}
const links = [
  { id:1, caption:"Home", url:"#home", icon: homeIcon},
  { id:2, caption:"Resume", url:"#resume", icon: resumeIcon },
  { id:3, caption:"Portfolio", url:"#portfolio", icon: portfolioIcon }
]


export const App = () => {
  smoothscroll.polyfill();
    return (<div className="bg-slate-600 text-teal-100 min-h-screen max-h-full">
        <Navbar links={links}/>
        <Home />
        <Resume />
        <Portfolio />
    </div>)
}

export default App;
