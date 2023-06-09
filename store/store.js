import { create } from "zustand";

export const useAppStore = create((set) => ({
  user: {
    username: "",
    email: "",
    isAdmin: false,
    isAuth: false,
  },
  prefLang: "java",
  token: "",
}));
