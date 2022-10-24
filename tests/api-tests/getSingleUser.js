const axios = require('axios');
const globals = require('../../globals');
const {assert} = require('chai');

const expectedReturn = {
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg'
    },
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
    }
  };

module.exports = {
    'Test single User Endpoint': async function(){
        const res = await axios.get(`${globals.apiTestingBaseUrl}api/user/2`);
        assert.equal(res.status, 200);
        assert.exists(res.data.data);
        assert.exists(res.data.support);
        assert.deepEqual(res.data, expectedReturn);        
    }
};