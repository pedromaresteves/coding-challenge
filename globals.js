const acceptedUsernames = {
    standardUser: 'standard_user',
    lockedOutUser: 'locked_out_user',
    problemUser: 'problem_user',
    performanceGlitchUser: 'performance_glitch_user'
};

const failedLoginFeedbacks = {
    usernameIsRequired: 'Username is required',
    passwordIsRequired: 'Password is required',
    lockedOutUserFeedback: 'Sorry, this user has been locked out.',
    wrongPassword: 'Username and password do not match any user in this service'
};

const userInfo = {
    firstName: 'User',
    lastName: 'Name',
    postalCode: 12345
}

module.exports = {
    acceptedUsernames: acceptedUsernames,
    failedLoginFeedbacks: failedLoginFeedbacks,
    userInfo: userInfo,
    apiTestingBaseUrl: 'https://reqres.in/'
}
