import '../styles/globals.css'
import '../styles/app.css'  //é possivel criar varios arquivos globais e utiliza-los em um mesmo arquivo jsx
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
