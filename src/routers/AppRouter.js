import React from 'react';
import App from "../components/App"
import SmallActions from "../components/SmallActions"
import SmallMoments from "../components/SmallMoments"
import SmallProblems from "../components/SmallProblems"
import SmallQuestions from "../components/SmallQuestions"
import SmallRewards from "../components/SmallRewards"
import SmallThoughts from "../components/SmallThoughts"

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
           <Switch>
               <Route path="/" component={App} exact={true} />
               <Route path="/small-actions" component={SmallActions} />
               <Route path="/small-moments" component={SmallMoments} />
               <Route path="/small-problems" component={SmallProblems} />
               <Route path="/small-questions" component={SmallQuestions} />
               <Route path="/small-rewards" component={SmallRewards} />
               <Route path="/small-thoughts" component={SmallThoughts} />
               <Route component={NotFoundPage} />
           </Switch>
        </div>

    <BrowserRouter/>
)

export default AppRouter;