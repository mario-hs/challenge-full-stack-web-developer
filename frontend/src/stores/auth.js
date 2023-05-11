import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/services/http";

export const useAuth = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));
  const user = ref(JSON.parse(localStorage.getItem("user")));

  function setToken(prop) {
    localStorage.setItem("token", prop);
    token.value = prop;
  }

  function setUser(prop) {
    localStorage.setItem("user", JSON.stringify(prop));
    user.value = prop;
  }

  async function checkAuth() {
    try {
      const isAuthenticated = await api
        .get("/auth/verify-token", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            return true;
          } else {
            return false;
          }
        });
      return isAuthenticated;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function logout() {
    localStorage.clear();
  }
  return {
    token,
    user,
    setToken,
    setUser,
    checkAuth,
    logout,
  };
});
