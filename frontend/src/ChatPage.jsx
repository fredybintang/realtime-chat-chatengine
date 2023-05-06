// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
    // const chatProps = useMultiChatLogic('e597d133-835f-409f-b902-58fae636003c', props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
            <PrettyChatWindow 
                projectId='e597d133-835f-409f-b902-58fae636003c'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatPage;