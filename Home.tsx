import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, Music, Heart, Gift } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function Home() {
  const [nextEvent, setNextEvent] = useState<any>(null);
  const [latestSermon, setLatestSermon] = useState<any>(null);

  const { data: events } = trpc.events.list.useQuery();
  const { data: sermons } = trpc.sermons.list.useQuery();

  useEffect(() => {
    if (events && events.length > 0) {
      setNextEvent(events[0]);
    }
  }, [events]);

  useEffect(() => {
    if (sermons && sermons.length > 0) {
      setLatestSermon(sermons[0]);
    }
  }, [sermons]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
              Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              "For God so loved the world..." - John 3:16
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0088CC] hover:bg-gray-100 font-bold"
                onClick={() => window.open("https://facebook.com/akinjimi.johnson.olajide", "_blank")}
              >
                ▶ Watch Live on Facebook
              </Button>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prophet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#FF6600] rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="/manus-storage/1000659534_4d00406a.jpg"
                  alt="Prophet Akinjimi Johnson"
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Spiritual Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
                Prophet Akinjimi Johnson
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                General Overseer and founder of Christ the Peacemaker Church of All Nations. With decades of spiritual leadership and prophetic ministry, Prophet Akinjimi Johnson leads our congregation with wisdom, compassion, and unwavering faith in God's purpose.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#0088CC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Visionary leadership rooted in biblical principles</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#0088CC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Dedicated to spiritual growth and community transformation</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#0088CC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Committed to reaching souls and spreading the Gospel</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white font-semibold">
                    Learn More About Our Leader
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600]/5 font-semibold"
                  onClick={() => window.open("tel:+2348037038101")}
                >
                  Connect With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/sermons">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Music className="w-12 h-12 mx-auto mb-4 text-[#0088CC]" />
                <h3 className="font-bold text-lg mb-2">Sermons</h3>
                <p className="text-sm text-gray-600">Watch & listen to sermons</p>
              </Card>
            </Link>

            <Link href="/events">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-[#FF6600]" />
                <h3 className="font-bold text-lg mb-2">Events</h3>
                <p className="text-sm text-gray-600">Upcoming church events</p>
              </Card>
            </Link>

            <Link href="/prayer">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Heart className="w-12 h-12 mx-auto mb-4 text-[#0088CC]" />
                <h3 className="font-bold text-lg mb-2">Prayer</h3>
                <p className="text-sm text-gray-600">Submit prayer requests</p>
              </Card>
            </Link>

            <Link href="/giving">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Gift className="w-12 h-12 mx-auto mb-4 text-[#FF6600]" />
                <h3 className="font-bold text-lg mb-2">Give</h3>
                <p className="text-sm text-gray-600">Support the ministry</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      {latestSermon && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Latest Sermon</h2>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                {latestSermon.videoUrl && (
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={latestSermon.videoUrl}
                      title={latestSermon.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-serif mb-2">{latestSermon.title}</h3>
                  {latestSermon.speaker && (
                    <p className="text-[#0088CC] font-semibold mb-4">By {latestSermon.speaker}</p>
                  )}
                  {latestSermon.description && (
                    <p className="text-gray-600 mb-6">{latestSermon.description}</p>
                  )}
                  <Link href="/sermons">
                    <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 w-fit">
                      View All Sermons <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Next Event */}
      {nextEvent && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Upcoming Event</h2>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                {nextEvent.imageUrl && (
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
                    <img src={nextEvent.imageUrl} alt={nextEvent.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-serif mb-2">{nextEvent.title}</h3>
                  <p className="text-[#FF6600] font-semibold mb-4">
                    {new Date(nextEvent.eventDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {nextEvent.eventTime && ` at ${nextEvent.eventTime}`}
                  </p>
                  {nextEvent.location && (
                    <p className="text-gray-600 mb-4">📍 {nextEvent.location}</p>
                  )}
                  {nextEvent.description && (
                    <p className="text-gray-600 mb-6">{nextEvent.description}</p>
                  )}
                  <Link href="/events">
                    <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 w-fit">
                      View All Events <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-[#0088CC] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the power of faith, community, and spiritual growth at Christ the Peacemaker Church.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0088CC] hover:bg-gray-100 font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/giving">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Support the Ministry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
