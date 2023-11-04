import ChatText from "@/app/components/chat-text";
import Img from "@/app/components/image";
import dog1 from "../../../../../public/images/dog-image-1.jpg";
import dog2 from "../../../../../public/images/dog-image-2.jpg";
import dog3 from "../../../../../public/images/dog-image-3.jpg";
import profile from "../../../../../public/images/avatar.jpg";
import rightIcon from "../../../../../public/images/angle-right-icon 1.png"
import settingIcon from "../../../../../public/images/ellipsis-v-icon 1.png"

const PhoneIllustration = () => {
    return (
        <div className="phone">
            <span></span>
            <div className="phone-header">
                <div className="left">
                    <Img
                        img={rightIcon}
                        width="7px"
                        height="11px"
                        alt=">"
                        classname="icon-chat-header left-icon"
                    />
                    <div className="profile">
                        <Img
                            img={profile}
                            width="7px"
                            height="11px"
                            alt=">"
                            classname="icon-chat-header avatar"
                        />
                        <div>
                            <p className="profile-name">Samuel Green</p>
                            <p className="profile-status">Available to walk</p>
                        </div>
                    </div>
                </div>

                <Img
                    img={settingIcon}
                    width="7px"
                    height="11px"
                    alt=">"
                    classname="icon-chat-header settings"
                />

            </div>

            <div className="phone-body">
                <ChatText text="That sounds great. I'd be happy with that." classname="left"/>
                <ChatText text="Could you send over some pictures of your dog, please?" classname="left"/>

                <div className="phone-body-images chat-text-right">
                    <Img
                        img={dog1}
                        width="40px"
                        height="40px"
                        alt="dog1"
                        classname="image-chat-body"
                    />

                     <Img
                        img={dog2}
                        width="40px"
                        height="40px"
                        alt="dog2"
                        classname="image-chat-body"
                    />

                     <Img
                        img={dog3}
                        width="40px"
                        height="40px"
                        alt="dog3"
                        classname="image-chat-body"
                    />
                </div>

                <div className="chat-text-right">
                    <ChatText text="Here are a few pictures. She's a happy girl!" classname="right"/>
                    <ChatText text="Can you make it?" classname="right small"/>
                </div>

                <ChatText text="She looks so happy! The time we discussed works. How long shall I take her out for?" classname="left"/>
                <ChatText classname="gradient-chat-text left">
                    <div className="radio"/>
                    <p>30 minute walk</p>
                    <p>$29</p>
                </ChatText>
                <ChatText classname="gradient-chat-text left">
                    <div className="radio"/>
                    <p>1 hour walk</p>
                    <p>$49</p>
                </ChatText>

                <div className="phone-bottom">
                    <p>Type a message...</p>
                    <div className="submit-button">
                        <Img
                            img={rightIcon}
                            width="7px"
                            height="11px"
                            alt=">"
                            classname="icon-chat-footer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneIllustration;