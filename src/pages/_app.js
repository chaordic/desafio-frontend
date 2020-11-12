import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import { wrapper } from '../store/store'
import '../style/style.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
