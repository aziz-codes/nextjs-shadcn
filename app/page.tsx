"use client";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="m-6 w-full max-w-xl">
      <button onClick={() => setClicked(!clicked)}>trigger alert</button>
      {clicked ? (
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
};

export default Home;
