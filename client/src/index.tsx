import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { HelloRequest } from "./gen/protocol/helloworld_pb";
import { GreeterClient } from "./gen/protocol/HelloworldServiceClientPb";

type State = {
  inputText: string;
  message: string;
};

const initialState: State = {
  inputText: "World",
  message: ""
};

function App() {
  const [state, setState] = useState(initialState);

  const onClick = useCallback(() => {
    const request = new HelloRequest();
    request.setName(state.inputText);

    const client = new GreeterClient("http://localhost:8080", {}, {});
    client.sayHello(request, {}, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      setState({ ...state, message: ret.getMessage() });
    });
  }, [state.inputText]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, inputText: e.target.value });
  }, []);

  return (
    <>
      <div className="App">
        <input type="text" value={state.inputText} onChange={onChange} />
        <button onClick={onClick}>Send</button>
        <p>{state.message}</p>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
