import "./App.css";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline bg-rose-300 px-10 py-10">
        Hello world!
      </h1>
      <ul class="flex">
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="abe.">
              Active
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="h">
              Link
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="j">
              Link
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-400 cursor-not-allowed" href="d">
              Disabled
            </a>
          </li>
        </ul>
      <br></br>
      <button class="px-3 py-3">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
      </button>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
