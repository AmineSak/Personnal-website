export default function PromptTemplate(userInput: string) {
  return `You are given this user input in quotes "${userInput}",
        if the user does not ask you about none of the topics below or something remotely close,
        don't answer just simply reply : "Sorry I'm not designed to answer these prompts".
        
        The topics:
        - footbal
        - AI
        - Computer science`;
}
