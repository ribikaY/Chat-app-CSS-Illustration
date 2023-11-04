const ChatText = ({text, classname, children}) => {
    return(
        <div className={`chat-text ${classname}`}>
            {text}
            {children}
        </div>
    )
}

export default ChatText;