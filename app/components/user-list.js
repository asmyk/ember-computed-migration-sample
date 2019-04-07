import Component from '@ember/component';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { mockUserList } from './users';

const UserProfile = EmberObject.extend({
    _id: null,
    index: null,
    guid: null,
    firstName: null,
    lastName: null,
    address: null,
    image: null,
    role: null,
    isActive: null,
    email: null,
    phone: null,
    about: null,
    registered: null,
    tags: null,
    role:null,


    fullName: function () { return `${this.firstName} ${this.lastName}`; }.property("firstName", "lastName")
});

export default Component.extend({
    profiles: null,

    init() {
        this._super();
        const profiles = mockUserList.map((profile) => UserProfile.create(profile));
        this.set('profiles', A(profiles));
    }
});
