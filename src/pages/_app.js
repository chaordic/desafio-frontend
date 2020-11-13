import { Provider } from 'react-redux'
import { useStore } from '../stores/store'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import '../style/style.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
