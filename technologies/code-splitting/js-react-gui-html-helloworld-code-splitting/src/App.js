import React, { lazy, Suspense } from "react";

const HelloWorld = lazy(() => import("./HelloWorld"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HelloWorld />
      </Suspense>
    </div>
  );
}

export default App;