import { openChat } from "zmp-sdk/apis";

export const openChatScreen = async () => {
  try {
    await openChat({
      type: "user",
      id: "7700700658333329661",
      message: "Xin Chào",
    });
  } catch (error) {
    console.log(error);
  }
};
