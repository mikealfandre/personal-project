import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyList from './components/MyList/MyList'
import Preferences from './components/Preferences/Preferences'
import DonationHistory from './components/DonationHistory/DonationHistory'


export default (
    <Switch>
        <Route path='/profile/preferences' component={Preferences} />
        <Route path='/profile/mylist' component={MyList} />
        <Route path='/profile/donation-history' component={DonationHistory} />
    </Switch>
)