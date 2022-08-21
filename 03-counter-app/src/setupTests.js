// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-16';

// import {createSerealizer} from 'enzime-to-json';

// Enzyme.configure({ adapter: new Adapter() });
// expect.addSnapshotSerializer(createSerealizer ({mode:'deep'}));

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));