import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Load from '../Components/LoadingPage';
import Layout from '../Layout';

const Home = lazy(() => import('../Pages/home'));
const Imovel = lazy(() => import('../Pages/imovel'));

export default function routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Load />}>
        <Layout>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route
              exact
              path="/imovel/:id_imovel"
              component={matchProps => <Imovel {...matchProps} />}
            />
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}
