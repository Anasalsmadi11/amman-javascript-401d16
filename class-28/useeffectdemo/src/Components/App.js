import React, { useState } from "react";
// import Counter from './Counter';
import Counter from './CounterFun'

function App() {
    const [hide, setHide] = useState(false);
    return (
        <>
            <h1>Hello Everyone</h1>

            <button onClick={() => setHide(!hide)}> {/* either put it like anonymos function if you want to use it once or declare a function before the return and put the function name here without the anonymous function */}
                {!hide && 'Hide Counter'}
                {hide && 'Show Counter'}
            </button >
            {!hide && <Counter />
            }
        </>
    )
}

export default App;

