import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'edddb9f8-9da9-4002-9492-6a4e0e1684d9'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',

});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  unfollow: (userID) => {
    return instance.delete(`follow/${userID}`)
      .then(response => {
        return response.data;
      })
  },

  follow: (userID) => {
    return instance.post(`follow/${userID}`)
      .then(response => {
        return response.data;
      })
  },
  getProfile: (userId) => {
    console.log('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, {status: status})
      .then(response => {
        return response.data;
      })
  }
}

export const authAPI = {
  getMe: () => {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
  }
}
