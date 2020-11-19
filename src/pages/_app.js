import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// NOTES
// The Component prop is the active page, so whenever you navigate between routes,
// Component will change to the new page. Therefore, any props you send to Component
// will be received by the page.
