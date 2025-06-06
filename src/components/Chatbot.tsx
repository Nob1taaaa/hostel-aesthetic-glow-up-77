
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hello! Welcome to Raksha Hostel. How can I assist you today?", 
      sender: "bot"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message! Our team will get back to you shortly.",
        "I understand you're looking for more information. Let me help you with that!",
        "Great question! Raksha Hostel offers various room types starting from ₹6,000/month.",
        "Yes, we have 24/7 security and all modern amenities for students.",
        "Would you like to book a visit to see our facilities?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: "bot" }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918743836836";
  };

  return (
    <>
      {/* Chat bubble button */}
      <motion.button
        className="fixed right-4 bottom-4 z-40 bg-gradient-to-r from-teal-600 to-orange-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <MessageCircle className="text-white w-6 h-6" />
        )}
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-4 bottom-20 z-40 w-80 sm:w-96 rounded-lg shadow-2xl bg-white border border-gray-200 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "500px" }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-orange-500 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Raksha Support</h3>
                  <p className="text-xs opacity-80">We typically reply within minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user" 
                        ? "bg-gradient-to-r from-teal-600 to-orange-500 text-white rounded-br-none" 
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="bg-gray-50 p-3 border-t border-gray-200">
              <div className="flex space-x-2 mb-3 overflow-x-auto pb-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="whitespace-nowrap border-teal-300 text-teal-700 hover:bg-teal-50"
                  onClick={() => {
                    setMessages([...messages, 
                      { text: "I'd like to book a room", sender: "user" }
                    ]);
                    setTimeout(() => {
                      setMessages(prev => [...prev, { 
                        text: "Great! Please call us at +91-8743-836-836 or send us your details and requirements. We'll get back to you quickly!", 
                        sender: "bot" 
                      }]);
                    }, 1000);
                  }}
                >
                  Book a Room
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="whitespace-nowrap border-orange-300 text-orange-700 hover:bg-orange-50"
                  onClick={handleCall}
                >
                  <Phone className="w-3 h-3 mr-1" /> Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="whitespace-nowrap border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => {
                    setMessages([...messages, 
                      { text: "What facilities do you offer?", sender: "user" }
                    ]);
                    setTimeout(() => {
                      setMessages(prev => [...prev, { 
                        text: "We offer high-speed WiFi, 24/7 security, AC rooms, home-style meals, laundry, and much more! Check our facilities section for the full list.", 
                        sender: "bot" 
                      }]);
                    }, 1000);
                  }}
                >
                  Facilities
                </Button>
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-end space-x-2">
                <Textarea
                  className="flex-grow resize-none border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[60px] max-h-[120px]"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <Button 
                  size="icon" 
                  className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 h-10 w-10 rounded-full flex-shrink-0"
                  onClick={handleSendMessage}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
