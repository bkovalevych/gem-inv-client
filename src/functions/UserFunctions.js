import axios from 'axios'

export const sendReset = user => {
    return axios
        .post('users/sendReset', {
            nickname: user.nickname
        })
        .then(res => {
                console.log(res.data);
                return res.data;
        })
}

export const invitedLink = userEmail => {
  return axios
  .post('referal/myInvitation', {
    email: userEmail
  })
  .then(res => {
    console.log(res.data);
    return res.data;
  })

}

export const register = newUser => {
  console.log(newUser.email);
    return axios
    .post('users/register', {
      nickname: newUser.nickname,
        email: newUser.email,
        password: newUser.password,
        refferer: newUser.refferer
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
      if(!(typeof res.data == 'object')){
        localStorage.setItem('usertoken', res.data)
      }
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}
