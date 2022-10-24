const axios = require('axios');
const globals = require('../../globals');
const {assert} = require('chai');

module.exports = {
    'Test single User Endpoint': async function(){
        const res = await axios.get(`${globals.apiTestingBaseUrl}api/user/2`);
        console.log(res.data)
        assert.equal(res.status, 200);
        assert.equal(res.data.data.id, 2);
        assert.exists(res.data.data);
        assert.exists(res.data.support);       
    }
};