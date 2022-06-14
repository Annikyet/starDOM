import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  image: {
    imgUrl: "https://thiscatdoesnotexist.com",
    title: "meowmeow",
    date: "2022-02-22",
    description: "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow "
  }
})
