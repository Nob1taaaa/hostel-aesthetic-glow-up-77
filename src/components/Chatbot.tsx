
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: Array<{
    text: string;
    action: string;
  }>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 Welcome to RAKSHA HOSTEL! I'm here to help you with rooms, facilities, bookings, and any questions you have. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      buttons: [
        { text: "🏠 Room Info", action: "rooms" },
        { text: "📅 Book Now", action: "booking" },
        { text: "👨‍👩‍👧‍👦 Parent Support", action: "parent" },
        { text: "🎓 Student Assist", action: "student" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isBot: boolean, buttons?: Array<{text: string; action: string}>) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      buttons
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'rooms':
        addMessage("We offer Executive Single, Deluxe Sharing, and Economy Triple rooms. Want to see pictures or prices?", true, [
          { text: "📸 Room Photos", action: "room_photos" },
          { text: "💰 Pricing", action: "pricing" },
          { text: "📋 Facilities", action: "facilities" }
        ]);
        break;
      
      case 'room_photos':
        addMessage("Tap below to view interiors of each room type:", true, [
          { text: "Executive Single", action: "executive_photos" },
          { text: "Deluxe Sharing", action: "deluxe_photos" },
          { text: "Economy Triple", action: "economy_photos" }
        ]);
        break;

      case 'booking':
        addMessage("Which room would you prefer?", true, [
          { text: "Executive Single", action: "book_executive" },
          { text: "Deluxe Sharing", action: "book_deluxe" },
          { text: "Economy Triple", action: "book_economy" }
        ]);
        break;

      case 'book_executive':
      case 'book_deluxe':
      case 'book_economy':
        addMessage("Please provide check-in and tentative check-out dates.", true, [
          { text: "📅 Submit Booking Form", action: "booking_form" },
          { text: "📱 WhatsApp Booking", action: "whatsapp_booking" },
          { text: "📞 Call Now", action: "call_booking" }
        ]);
        break;

      case 'whatsapp_booking':
        addMessage("Tap to book instantly via WhatsApp:", true, [
          { text: "💬 WhatsApp +91 8743-836-836", action: "open_whatsapp" }
        ]);
        break;

      case 'open_whatsapp':
        window.open('https://wa.me/918743836836?text=Hi! I want to book a room at Raksha Hostel', '_blank');
        addMessage("Thank you! Your request has been received. We'll confirm within 2 hours via WhatsApp/SMS.", true);
        break;

      case 'parent':
        addMessage("How can I help you as a parent?", true, [
          { text: "🔒 Security Measures", action: "security" },
          { text: "👥 Staff Details", action: "staff" },
          { text: "🚗 How to Reach", action: "directions" },
          { text: "🎒 Packing Guide", action: "packing" },
          { text: "📞 Emergency Numbers", action: "emergency" }
        ]);
        break;

      case 'security':
        addMessage("We have 24x7 CCTV surveillance, biometric entry, and on-site wardens for complete safety.", true);
        break;

      case 'staff':
        addMessage("Our staff is trained in hospitality, safety, and first aid. They are kind, supportive, and always ready to listen to your problems.", true);
        break;

      case 'directions':
        addMessage("Near Pari Chowk Metro Station and Bus Stop. Jagat Market is nearby for auto access. Address: 12A, Raksha Hostels, Knowledge Park 3, Greater Noida", true);
        break;

      case 'emergency':
        addMessage("Emergency Numbers:\nHostel Warden: +91-7703929254\nMain Office: +91 8743-836-836", true);
        break;

      case 'student':
        addMessage("What do you need help with?", true, [
          { text: "📏 Hostel Rules", action: "rules" },
          { text: "🍽️ Mess Timings", action: "mess" },
          { text: "📚 Study Area", action: "study" },
          { text: "🎉 Events", action: "events" },
          { text: "🔍 Lost & Found", action: "lost_found" },
          { text: "🛠️ Complaint/Support", action: "support" }
        ]);
        break;

      case 'rules':
        addMessage("Quiet hours start at 10 PM. Visitors are allowed until 7 PM. No smoking or drinking is allowed inside the premises.", true);
        break;

      case 'mess':
        addMessage("Mess Timings:\n🌅 Breakfast: 8-10 AM\n🌞 Lunch: 1-2:30 PM\n🌙 Dinner: 8-9:30 PM", true);
        break;

      case 'study':
        addMessage("We have a 24x7 quiet study lounge with free WiFi and air-conditioning.", true);
        break;

      case 'events':
        addMessage("We have weekend nights, festival celebrations, and shows. You'll get reminders.", true);
        break;

      case 'lost_found':
        addMessage("Please describe the item and where you last saw it. We'll instantly notify the warden and alert our internal support team for faster recovery.", true);
        break;

      case 'support':
        addMessage("Please fill this form with the issue details at the counter or with the warden. It will be resolved within 24 hours.", true);
        break;

      default:
        addMessage("I'm here to help! Please choose from the options or ask me anything about Raksha Hostel.", true, [
          { text: "🏠 Room Info", action: "rooms" },
          { text: "📅 Book Now", action: "booking" },
          { text: "👨‍👩‍👧‍👦 Parent Support", action: "parent" },
          { text: "🎓 Student Assist", action: "student" }
        ]);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, false);
      setInputValue('');
      
      setTimeout(() => {
        addMessage("Thanks for your message! Let me help you with that.", true, [
          { text: "🏠 Room Info", action: "rooms" },
          { text: "📅 Book Now", action: "booking" },
          { text: "👨‍👩‍👧‍👦 Parent Support", action: "parent" },
          { text: "🎓 Student Assist", action: "student" }
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
              alt="Raksha Chatbot"
              className="w-8 h-8 object-contain"
            />
            <MessageCircle className="w-4 h-4 mt-1" />
          </div>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
                alt="Raksha Chatbot"
                className="w-8 h-8 object-contain rounded-full"
              />
              <div>
                <h3 className="text-white font-semibold">RAKSHA CHATBOT</h3>
                <p className="text-orange-100 text-xs">Online • Ready to help</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-orange-600"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isBot 
                    ? 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200' 
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.buttons && (
                    <div className="mt-3 space-y-2">
                      {message.buttons.map((button, index) => (
                        <Button
                          key={index}
                          onClick={() => handleButtonClick(button.action)}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs h-8 border-orange-500 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
