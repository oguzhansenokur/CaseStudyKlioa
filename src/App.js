import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCard from './components/MyCard';
import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let datas = require('./data.json');
  const [searched, setSearched] = useState("");
  return (
    <div>
      <Router>
        <Row>
          <Col xs='2' className='sidebar' >
            <MyNavbar onChange={(event) => setSearched(event.target.value)} />
          </Col>
          <Col >
            <Switch>
              <Route exact path='/'>
                {datas.filter((data) => {
                  if (searched === "") {
                    return data;
                  } else if (data.title.toLowerCase().includes(searched.toLowerCase())) {
                    return data;
                  }
                  else{
                    return data;

                  }
                }).map((data) =>
                  <MyCard key={data.id} title={data.title} text={data.description} subtitle={data.ingredients.map(item => {
                    if (data.ingredients[data.ingredients.length - 1] !== item) {
                     return item += ', ';
                    }
                    return item;
                  }
                  )} />
                )
                }
              </Route>
              <Route exact path='/all'>
                {datas.filter((data) => {
                  if (searched === "") {
                    return data;
                  } else if (data.title.toLowerCase().includes(searched.toLowerCase())) {
                    return data;
                  }
                  else{
                    return data;
                  }
                }).map((data) =>
                  <MyCard key={data.id} title={data.title} text={data.description} subtitle={data.ingredients.map(item => {
                    if (data.ingredients[data.ingredients.length - 1] !== item) {
                      return item += ', ';
                    }
                    return item;
                  }
                  )} />
                )
                }
              </Route>
              <Route exact path='/hot'>
                {
                  datas.filter(data => data.category === 'hot').filter((data) => {
                    if (searched === "") {
                      return data;
                    } else if (data.title.toLowerCase().includes(searched.toLowerCase())) {
                      return data;
                    }
                    else{
                      return data;
                    }
                  }).map((data) =>
                    <MyCard key={data.id} title={data.title} text={data.description} subtitle={data.ingredients.map(item => {
                      if (data.ingredients[data.ingredients.length - 1] !== item) {
                       return item += ', ';
                      }
                      return item;
                    }
                    )} />
                  )
                }
              </Route>
              <Route exact path='/iced'>
                {
                  datas.filter(data => data.category === 'iced').filter((data) => {
                    if (searched === "") {
                      return data;
                    } else if (data.title.toLowerCase().includes(searched.toLowerCase())) {
                      return data;
                    }
                    else{
                      return data;
                    }
                  }).map((data) =>
                    <MyCard key={data.id} title={data.title} text={data.description} subtitle={data.ingredients.map(item => {
                      if (data.ingredients[data.ingredients.length - 1] !== item) {
                      return   item += ', ';
                      }
                      return item;
                    }
                    )} />
                  )
                }
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>);
}

export default App;
