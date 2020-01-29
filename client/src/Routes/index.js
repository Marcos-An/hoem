import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';

const Home = lazy(() => import('../Pages/home'));

export default function routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Rendering...</h1>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}
