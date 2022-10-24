const axios = require('axios');
const globals = require('../../globals');
const {assert} = require('chai');

const newUser = {
    name: "New User",
    job: "QA Engineer"
}

module.exports = {
    'Create New User Endpoint': async function(){
        const res = await axios.post(`${globals.apiTestingBaseUrl}api/users`, newUser);
        assert.equal(res.status, 201);
        assert.deepEqual(res.data.name, newUser.name);
        assert.deepEqual(res.data.job, newUser.job);
        assert.exists(res.data.id);
        assert.exists(res.data.createdAt);
    }
};