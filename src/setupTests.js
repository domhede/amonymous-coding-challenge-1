import Adapter from 'enzyme-adapter-react-16';
import raf from './tempPolyfills'

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
