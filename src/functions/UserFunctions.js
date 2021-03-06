import axios from 'axios'

export const getPlans = () => {
    return axios.get('admin/plan').then(resp => {
        return resp.data;
    }).catch(err => {
        return {errors: err};
    })
} ;

export const userChart = (id) => {
    return axios.get('chart/user/' + id).then(resp => {
        return resp.data;
    }).catch(err => {
        return {errors: err};
    })
};

export const getButtonToReplenish = (nickname, amount) => {
    return axios.
    post('payment/replenish', {
        nickname: nickname,
        amount: amount
    }).then(result => {
        return result.data;
    })
};

export const mainChart = () => {
    return axios.get('chart/mainChart').then(resp => {
        return resp.data;
    }).catch(error => {
        return {errors: error};
    })
}

export const getTransactions = (id) => {
  return axios.get("project/" + id).then(resp => {
      return resp.data;
  })  .catch(err => {
      return {errors: err};
  })
};

export const getBalance = (id) => {
    return axios.post('users/getBalance', {
        "id": id
    }).then(result => {
        console.log(result.data + " get Balance");
        return result.data;
    })
};

export const getWithdrawData = (_id, firstName, secondName, card, amount) => {
  return axios.
  post('payment/withdraw', {
      _id: _id,
      amount: amount,
      firstName: firstName,
      secondName: secondName,
      card: card
  }).then(result => {
      return result.data;
  })
};

export const sendReset = user => {
    return axios
        .post('users/sendReset', {
            nickname: user.nickname
        })
        .then(res => {
                console.log(res.data);
                return res.data;
        })
};

export const createTarif = (userId, planId, amount) => {
  return axios
    .post('project/', {
      idUser: userId,
      idPlan: planId,
      amount: amount
    })
    .then(res => {
      console.log(res.data);
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
