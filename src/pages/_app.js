/* Paso 3 - Envolver a nuestra aplicacion para quejpueda usarla */
import GlobalStyles from "../styles/GlobalStyles";
import { TaskProvider } from "../context/TaskContext";

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;
