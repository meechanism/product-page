// setup file
const { configure, shallow, render, mount } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const enzymeToJson = require('enzyme-to-json');
const reactRouter = require('react-router-dom');
const BrowserRouter = reactRouter.BrowserRouter;

configure({ adapter: new Adapter() });

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: { router: router }
});

// Make Enzyme functions and others available in all test files w/o importing

global.shallow = shallow;
global.render = render;

// Prevents errors like "using <Route> or withRouther() outside a <Router>"
global.mount = (node) => mount(node, createContext());

global.shallowToJson = enzymeToJson.shallowToJson;
