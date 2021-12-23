import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <HomePage />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
