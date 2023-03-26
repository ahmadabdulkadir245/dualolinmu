import { RecoilRoot } from 'recoil';
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
import Header from '../components/Header'
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css';
import Footer from '../components/Footer';

import {  Changa, Play, Poppins, Titillium_Web } from '@next/font/google';
import { AuthContextProvider } from '../context/authContext';

const play = Play({
  variable: '--font-play',
  weight: ['400', '700'],
  subsets: ['latin']
})
const changa = Changa({
  variable: '--font-changa',
  weight: ['400', '500','600'],
  subsets: ['latin']
});
const poppins = Poppins({
  variable: '--font-poppins',
  weight: [ '500','600', '700'],
  subsets: ['latin']
})
const titilliumWeb = Titillium_Web({
  variable: '--font-titillium_web',
  weight: [ '400','600', '700'],
  subsets: ['latin']
})



function MyApp({ Component, pageProps }) {
  return (
    <main className={`font-primary ${play.variable} ${changa.variable} ${poppins.variable}  ${titilliumWeb.variable}`}>
    <Provider store={store}>
    <RecoilRoot>
      <AuthContextProvider>
      <Component {...pageProps} />
      </AuthContextProvider>
    </RecoilRoot>
    </Provider>
    </main>
  );
}

export default MyApp
