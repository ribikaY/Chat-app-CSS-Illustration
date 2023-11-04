import Title from "@/app/components/title";
import Layout from "./components/layout";
import PhoneIllustration from "./section/phone-illustration";

const HomeScreen = () => {
    return (
        <Layout>
            <div className="chat">
                <div className="chat-image">
                    <PhoneIllustration/>
                </div>
                <div className="chat-content">
                    <Title title="Simple booking"/>
                    <p className="chat-content-text">
                        Stay in touch with our dog walkers through the chat interface. 
                        This makes it easy to discuss arrangements and make bookings. 
                        Once the walk has been completed you can rate your walker and book again all through the chat.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default HomeScreen;