import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent Successfully",
            description: "Our engineering team will get back to you within 24 hours.",
            variant: "default",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error Sending Message",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-display font-bold text-secondary mb-4">Contact Our Engineering Team</h1>
          <p className="text-lg text-muted-foreground">
            Whether you need a quick prototype, a complex multilayer HDI board, or full turnkey assembly, our experts are ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-6 font-display">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Headquarters</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      GIDC Electronics Estate, Sector 25<br />
                      Gandhinagar, Ahmedabad<br />
                      Gujarat 382024, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      Sales: +91 98765 43210<br />
                      Support: +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      Quotes: quotes@megabytecircuits.com<br />
                      Support: info@megabytecircuits.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                      Saturday: 9:00 AM - 2:00 PM (IST)<br />
                      24/7 Technical Support available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2 font-display">Need an Instant Quote?</h3>
              <p className="text-sm text-white/80 mb-6">
                Use our online calculator to get an estimated cost for your PCB fabrication or assembly project immediately.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Calculate Cost
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 rounded-xl border shadow-sm"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6 font-display">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Electronics Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pcb_fabrication">PCB Fabrication</SelectItem>
                          <SelectItem value="pcb_assembly">PCB Assembly</SelectItem>
                          <SelectItem value="turnkey">Turnkey Solution</SelectItem>
                          <SelectItem value="prototype">Prototype Service</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details / Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your project, quantities, timeline, or any specific requirements..." 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white min-w-[200px]"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
