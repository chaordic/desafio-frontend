import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from './pages'
import { BreweryDetail } from "./molecules/Brewery"
import styled from "styled-components";
import { Footer, Header } from "./molecules";

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route
            exact={true}
            path={["/", "/breweries"]}
            component={(props) => (
              <FlexBox>
                <Header/>
                <Home history={history} {...props}></Home>
                <Footer/>
              </FlexBox>
            )}
          />
          <Route
            exact={true}
            path={"/brewery/:id"}
            component={(props) => (
              <FlexBox>
                <Header/>
                <BreweryDetail history={history} {...props}></BreweryDetail>
                <Footer/>
              </FlexBox>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  color: black;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export default App;
