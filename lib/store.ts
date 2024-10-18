import { create } from "zustand";
import { Action, State } from "./types";

const useStore = create<State & Action>((set) => ({
  userScore: 0,
  userAnswer: "",
  subject: "",

  getUserAnswer: (userChoice) => set(() => ({
    userAnswer: userChoice,
  })),
  updateSubject: (sub) => set(() => ({
    subject: sub,
  })),
  updateScore: (reset) => set((state) => ({
    userScore: reset !== undefined ? reset : state.userScore + 1,
  })),

}))


export default useStore;