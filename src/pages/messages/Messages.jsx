import React, { useEffect, useState } from "react";
import "./messages.scss";

const Messages = ({ darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = localStorage.getItem("isAdmin")

  // API call
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("https://fin-tracker-five-virid.vercel.app/contact/");
        const jsonRes = await res.json()
        // reverse order latest first
        console.log(jsonRes)
        setMessages(jsonRes.data.reverse());
      } catch (err) {
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return (
<>
{
    isAdmin ?
        <section className={`messagesPage ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <h2 className="heading">Received Messages</h2>

        {loading ? (
          <p className="loading">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="empty">No messages found.</p>
        ) : (
          <div className="messagesGrid">
            {messages.map((msg, index) => (
              <div className="messageCard" key={index}>
                <h3>{msg.name}</h3>
                <p className="email">{msg.email}</p>
                <p className="text">{msg.message}</p>
                <span className="date">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section> :
       <section className={`messagesPage ${darkMode ? "dark" : "light"}`}>
 <p style={{
     textAlign: "center",
 }} className="notAuthorized">You are a normal user. No access to messages.</p>
     </section>
}
</>
  );
};

export default Messages;
