import Route from '@ember/routing/route';

const roles = {
    'ADM': { label: "admin", accessLevel: 2 },
    "EMPL": { label: "employee", accessLevel: 5 },
    "MGR": { label: "manager", accessLevel: 3 },
    "EXE": { label: "executive", accessLevel: 1 }
};

export default Route.extend({
   
});
