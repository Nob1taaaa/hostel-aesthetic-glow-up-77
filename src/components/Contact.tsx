
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Greater Noida, Uttar Pradesh\nNear Pari Chowk, Behind Jagat Farm Market",
      action: () => window.open("https://www.google.com/maps/search/Greater+Noida,+Pari+Chowk,+Behind+Jagat+Farm+Market", "_blank")
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 8743-836-836\n+91 8750-836-836",
      action: () => window.location.href = "tel:+918743836836"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "Info.rakshahostels@gmail.com",
      action: () => window.location.href = "mailto:Info.rakshahostels@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Mon - Sun: 8AM - 10PM\n24/7 Support Available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            CONTACT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for bookings, inquiries, or any assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-sm text-gray-600 whitespace-pre-line">{info.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div 
              className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => window.open("https://www.google.com/maps/search/Greater+Noida,+Pari+Chowk,+Behind+Jagat+Farm+Market", "_blank")}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28022.76785258089!2d77.51289234041996!3d28.45521772304731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbeda8e144bf9%3A0x9335b014e76b5a7f!2sPari%20Chowk%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716152214953!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input placeholder="Your full name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input placeholder="Your phone number" className="border-gray-300" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Your email address" className="border-gray-300" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="Subject of your message" className="border-gray-300" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..." 
                      rows={4}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Section */}
      <section id="terms" className="mt-20 pt-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Terms and Conditions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Booking and Payment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advance payment of 1 month rent is required at the time of booking</li>
                    <li>• Security deposit of ₹10,000 (refundable) is mandatory</li>
                    <li>• Monthly rent must be paid by the 5th of each month</li>
                    <li>• Late payment charges of ₹100 per day will be applicable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Accommodation Rules</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No smoking or alcohol consumption in premises</li>
                    <li>• Visiting hours: 6 AM to 10 PM only</li>
                    <li>• Overnight guests are not permitted</li>
                    <li>• Maintain cleanliness in common areas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Facilities Usage</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• WiFi password will be shared upon check-in</li>
                    <li>• Mess timings: Breakfast 7-9 AM, Lunch 12-2 PM, Dinner 7-9 PM</li>
                    <li>• Laundry facilities available twice a week</li>
                    <li>• Study rooms available 24/7 with prior booking</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Security and Safety</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 24/7 security personnel on duty</li>
                    <li>• CCTV surveillance in common areas</li>
                    <li>• Fire safety equipment installed and maintained</li>
                    <li>• Emergency contact numbers displayed prominently</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">5. Termination Policy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30 days prior notice required for vacating</li>
                    <li>• No refund for advance payment if leaving before 30 days</li>
                    <li>• Room inspection mandatory before check-out</li>
                    <li>• Damages will be deducted from security deposit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">6. Management Rights</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Management reserves right to inspect rooms</li>
                    <li>• Violation of rules may result in immediate eviction</li>
                    <li>• Terms and conditions subject to change with notice</li>
                    <li>• All disputes subject to Greater Noida jurisdiction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-orange-50 rounded-lg border border-gray-200">
              <p className="text-center text-gray-700 font-medium">
                By booking with Raksha Hostel, you agree to abide by all terms and conditions mentioned above. 
                For any queries or clarifications, please contact our management team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
