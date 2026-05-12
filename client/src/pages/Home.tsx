import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, Music, Heart, Gift, ShoppingBag } from "lucide-react";
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
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden text-white">
        {/* Video Background Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Christ the Peacemaker Church of All Nations
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light italic opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              C&S Movement Church (City of Peace)
            </p>
            <div className="text-lg md:text-xl mb-10 opacity-90 space-y-3 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <p className="font-medium">"For God so loved the world..." - John 3:16</p>
              <p className="italic">"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world." - John 16:33</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button
                size="lg"
                className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                onClick={() => window.open("https://facebook.com/akinjimi.johnson.olajide", "_blank")}
              >
                ▶ Watch Live on Facebook
              </Button>
              <Button
                size="lg"
                className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                onClick={() => window.open("https://www.facebook.com/share/18pLm2jPuL/", "_blank")}
              >
                👥 Join Our Facebook Group
              </Button>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all">
                  Learn More <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Prophet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#FF6600] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src="/prophet.jpg"
                  alt="Prophet Akinjimi Johnson"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover transform transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Spiritual Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-900">
                Prophet Akinjimi Johnson
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                General Overseer and founder of Christ the Peacemaker Church of All Nations. With decades of spiritual leadership and prophetic ministry, Prophet Akinjimi Johnson leads our congregation with wisdom, compassion, and unwavering faith in God's purpose.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#0088CC] rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">Visionary leadership rooted in biblical principles</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#0088CC] rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">Dedicated to spiritual growth and community transformation</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#0088CC] rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">Committed to reaching souls and spreading the Gospel</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white font-semibold px-6 py-6 rounded-lg">
                    Learn More About Our Leader
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600]/5 font-semibold px-6 py-6 rounded-lg"
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <Link href="/sermons">
              <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center group-hover:bg-[#0088CC] transition-colors">
                  <Music className="w-8 h-8 text-[#0088CC] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">Sermons</h3>
                <p className="text-sm text-gray-600">Watch & listen to sermons</p>
              </Card>
            </Link>

            <Link href="/events">
              <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FF6600]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF6600] transition-colors">
                  <Calendar className="w-8 h-8 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">Events</h3>
                <p className="text-sm text-gray-600">Upcoming church events</p>
              </Card>
            </Link>

            <Link href="/prayer">
              <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center group-hover:bg-[#0088CC] transition-colors">
                  <Heart className="w-8 h-8 text-[#0088CC] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">Prayer</h3>
                <p className="text-sm text-gray-600">Submit prayer requests</p>
              </Card>
            </Link>

            <Link href="/giving">
              <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FF6600]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF6600] transition-colors">
                  <Gift className="w-8 h-8 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">Give</h3>
                <p className="text-sm text-gray-600">Support the ministry</p>
              </Card>
            </Link>

            <Link href="/store">
              <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#0088CC]/10 rounded-full flex items-center justify-center group-hover:bg-[#0088CC] transition-colors">
                  <ShoppingBag className="w-8 h-8 text-[#0088CC] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">Store</h3>
                <p className="text-sm text-gray-600">Spiritual items & oil</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      {latestSermon && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Latest Sermon</h2>
              <Link href="/sermons">
                <Button variant="ghost" className="text-[#0088CC] hover:text-[#0088CC]/80 font-semibold">
                  View All <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Card className="overflow-hidden border-none shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                {latestSermon.videoUrl && (
                  <div className="bg-gray-900 aspect-video md:aspect-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={latestSermon.videoUrl}
                      title={latestSermon.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                )}
                <div className="flex flex-col justify-center p-10 md:p-16 bg-white">
                  <div className="inline-block bg-[#0088CC]/10 text-[#0088CC] px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    New Release
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-4 text-gray-900">{latestSermon.title}</h3>
                  {latestSermon.speaker && (
                    <p className="text-[#0088CC] font-semibold mb-6 text-lg">By {latestSermon.speaker}</p>
                  )}
                  {latestSermon.description && (
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{latestSermon.description}</p>
                  )}
                  <Link href="/sermons">
                    <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white px-8 py-6 rounded-lg w-fit font-bold">
                      Watch Full Sermon
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
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Upcoming Event</h2>
              <Link href="/events">
                <Button variant="ghost" className="text-[#FF6600] hover:text-[#FF6600]/80 font-semibold">
                  View Calendar <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Card className="overflow-hidden border-none shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                {nextEvent.imageUrl && (
                  <div className="bg-gray-200 h-80 md:h-auto">
                    <img src={nextEvent.imageUrl} alt={nextEvent.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex flex-col justify-center p-10 md:p-16 bg-white">
                  <div className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    Don't Miss Out
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-4 text-gray-900">{nextEvent.title}</h3>
                  <div className="flex flex-col gap-3 mb-8">
                    <p className="text-[#FF6600] font-bold text-xl flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      {new Date(nextEvent.eventDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {nextEvent.eventTime && ` at ${nextEvent.eventTime}`}
                    </p>
                    {nextEvent.location && (
                      <p className="text-gray-600 text-lg flex items-center gap-2">
                        <span className="text-xl">📍</span> {nextEvent.location}
                      </p>
                    )}
                  </div>
                  {nextEvent.description && (
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{nextEvent.description}</p>
                  )}
                  <Link href="/events">
                    <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 rounded-lg w-fit font-bold">
                      Event Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0088CC] z-0">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">Join Our Community</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Experience the power of faith, community, and spiritual growth at Christ the Peacemaker Church. We welcome you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0088CC] hover:bg-gray-100 font-bold px-10 py-7 text-lg rounded-full shadow-xl transition-all hover:scale-105">
                Get in Touch
              </Button>
            </Link>
            <Link href="/giving">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full transition-all">
                Support the Ministry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
