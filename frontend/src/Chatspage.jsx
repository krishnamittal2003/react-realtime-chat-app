import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style = {{ height: '100vh '}}>
            <PrettyChatWindow
                projectId='26a85091-6509-46b1-be84-f89b6d1fe3df'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage