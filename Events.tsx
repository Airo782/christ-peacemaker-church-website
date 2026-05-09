import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const { data: eventsData } = trpc.events.list.useQuery();

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData);
    }
  }, [eventsData]);

  const upcomingEvents = events.filter((e) => new Date(e.eventDate) >= new Date());
  const pastEvents = events.filter((e) => new Date(e.eventDate) < new Date());

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Church Events</h1>
          <p className="text-lg opacity-90">Stay updated with our upcoming events and activities</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12">Upcoming Events</h2>

          {upcomingEvents.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg">No upcoming events scheduled. Check back soon!</p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {event.imageUrl && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif mb-4">{event.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-[#0088CC]" />
                        <span>
                          {new Date(event.eventDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      {event.eventTime && (
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 mr-3 text-[#FF6600]" />
                          <span>{event.eventTime}</span>
                        </div>
                      )}

                      {event.location && (
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-3 text-[#0088CC]" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>

                    {event.description && (
                      <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>
                    )}

                    <Button className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90">
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12">Past Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
                  {event.imageUrl && (
                    <div className="h-48 bg-gray-300 overflow-hidden">
                      <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif mb-3">{event.title}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {new Date(event.eventDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      {event.location && (
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      )}
                    </div>

                    {event.description && (
                      <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
