import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Activities from '../pages/Activities'
import Mission from '../pages/Mission';

interface RouteType {
    path: string,
    component:  React.ComponentType<any>;
    name: string
}

const routes: RouteType[] = [
    {
      path: "/",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/aboutus",
      component: About,
      name: "About",
    },
    {
      path: "/events",
      component: Events,
      name: "Events"
    },
    {
      path: "/activities",
      component: Activities,
      name: "Activities"
    },
    {
      path: "/mission",
      component: Mission,
      name: "Mission"
    }
];

export default routes