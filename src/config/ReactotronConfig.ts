import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    .use(reactotronSaga())
    .connect();

  // @ts-ignore
  console.tron = tron;
}
