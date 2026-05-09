import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "+234807703810";
  const churchAddress = "Off Mafeng Private School, The Street Opp. C.A.C Eto Baba, Jos";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with Christ the Peacemaker Church</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Address */}
                <Card className="p-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#0088CC] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Church Address</h3>
                      <p className="text-gray-700">{churchAddress}</p>
                      <p className="text-gray-600 text-sm mt-2">Jos, Plateau State, Nigeria</p>
                    </div>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="p-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#FF6600] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-gray-700">+234 906 7722638</p>
                      <p className="text-gray-700">+234 807 703 8101</p>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0088CC] hover:text-[#0088CC]/80 text-sm mt-2 inline-flex items-center"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" /> Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#0088CC] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a href="mailto:christpeacemaker14@gmail.com" className="text-[#0088CC] hover:text-[#0088CC]/80 font-semibold">
                        christpeacemaker14@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                {/* Office Hours */}
                <Card className="p-6">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#FF6600] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Service Schedule</h3>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p><span className="font-semibold">Tuesdays:</span> Prophetic Service (10:00 AM - 12:00 PM)</p>
                        <p><span className="font-semibold">Thursdays:</span> Faith Clinic (10:00 AM - 12:00 PM)</p>
                        <p><span className="font-semibold">Saturdays:</span> Choir/Drama Rehearsal (10:00 AM - 12:00 PM)</p>
                        <p><span className="font-semibold">Sunday School:</span> 9:00 AM - 9:55 AM</p>
                        <p><span className="font-semibold">Sunday Thanksgiving:</span> 10:00 AM - 12:30 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Social Media */}
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/akinjimi.johnson.olajide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0088CC] text-white p-3 rounded-full hover:bg-[#0088CC]/90 transition"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF6600] text-white p-3 rounded-full hover:bg-[#FF6600]/90 transition"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map and Quick Actions */}
            <div>
              {/* Map */}
              <div className="mb-8">
                <Card className="overflow-hidden h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2234567890!2d8.8917!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d6e7c1234567%3A0x1234567890abcdef!2sJos%2C%20Plateau%20State!5e0!3m2!1sen!2sng!4v1234567890"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card>
                <p className="text-sm text-gray-600 mt-2">
                  📍 Located in Jos, Plateau State, Nigeria
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button
                  className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90 py-6 font-bold"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Message on WhatsApp
                </Button>

                <Button
                  className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 py-6 font-bold"
                  onClick={() => window.location.href = "tel:+2349067722638"}
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Us
                </Button>

                <Button
                  variant="outline"
                  className="w-full py-6 font-bold"
                  onClick={() => window.location.href = "mailto:info@christthepeacemaker.com"}
                >
                  <Mail className="w-5 h-5 mr-2" /> Send Email
                </Button>
              </div>

              {/* Service Times */}
              <Card className="p-6 mt-6 bg-blue-50 border border-blue-200">
                <h3 className="font-bold text-[#0088CC] mb-4">Service Times</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold">Tuesdays: Prophetic Service</p>
                    <p>10:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Thursdays: Faith Clinic</p>
                    <p>10:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturdays: Choir/Drama Rehearsal</p>
                    <p>10:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday School</p>
                    <p>9:00 AM - 9:55 AM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday Thanksgiving Service</p>
                    <p>10:00 AM - 12:30 PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
