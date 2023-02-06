import "pier-design-system/dist/styles.css";
import "../styles/styles.css";
import "../styles/globals.css";

// function SlaGenerator({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default SlaGenerator;
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
