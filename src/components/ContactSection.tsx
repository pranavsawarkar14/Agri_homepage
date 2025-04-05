
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have questions about BeejSeBazaar? Reach out to our team for assistance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={4}
                  className="resize-none" 
                />
              </div>
              
              <Button className="w-full bg-agriculture-green hover:bg-agriculture-lightGreen text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-agriculture-yellow p-3 rounded-full text-agriculture-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">info@beejsebazaar.com</p>
                    <p className="text-muted-foreground">support@beejsebazaar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-agriculture-yellow p-3 rounded-full text-agriculture-green">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+91 1234567890</p>
                    <p className="text-muted-foreground">+91 9999999999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-agriculture-yellow p-3 rounded-full text-agriculture-green">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-muted-foreground">123 Green Fields Road,</p>
                    <p className="text-muted-foreground">Agrihub, Pune, India 411018</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-agriculture-lightGreen text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Working Hours</h4>
              <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
