import './ContentBox.css'
import { MessageBox } from "react-chat-elements";

function ContentBox(){
return(

    <div className='userInput'>
        <div className='icon'></div>
        <MessageBox
  position="right"
  title="ユーザ"
  type="text"
  text="あなたはAIアシスタント。これから全力で僕を応援してください。"
  date={new Date()}
/>
        <div className='inputText'></div>
    </div>
)
}

export default ContentBox;