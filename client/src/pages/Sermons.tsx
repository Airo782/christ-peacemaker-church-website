import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Video, Search } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Sermons() {
  const [sermons, setSermons] = useState<any[]>([]);
  const [filteredSermons, setFilteredSermons] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "video" | "audio">("all");

  const { data: sermonsData } = trpc.sermons.list.useQuery();

  useEffect(() => {
    if (sermonsData) {
      setSermons(sermonsData);
      setFilteredSermons(sermonsData);
    }
  }, [sermonsData]);

  useEffect(() => {
    let filtered = sermons;

    // Filter by type
    if (selectedType === "video") {
      filtered = filtered.filter((s) => s.videoUrl);
    } else if (selectedType === "audio") {
      filtered = filtered.filter((s) => s.audioUrl);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (s) =>
          s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.topic?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.speaker?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSermons(filtered);
  }, [searchTerm, selectedType, sermons]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Sermon Archive</h1>
          <p className="text-lg opacity-90">Watch and listen to our latest sermons</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by title, topic, or speaker..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedType === "all" ? "default" : "outline"}
                onClick={() => setSelectedType("all")}
                className={selectedType === "all" ? "bg-[#0088CC]" : ""}
              >
                All Sermons
              </Button>
              <Button
                variant={selectedType === "video" ? "default" : "outline"}
                onClick={() => setSelectedType("video")}
                className={selectedType === "video" ? "bg-[#0088CC]" : ""}
              >
                <Video className="w-4 h-4 mr-2" /> Videos
              </Button>
              <Button
                variant={selectedType === "audio" ? "default" : "outline"}
                onClick={() => setSelectedType("audio")}
                className={selectedType === "audio" ? "bg-[#0088CC]" : ""}
              >
                <Music className="w-4 h-4 mr-2" /> Audio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredSermons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No sermons found. Please try a different search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  {/* Video or Placeholder */}
                  {sermon.videoUrl ? (
                    <div className="bg-gray-200 h-48 overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={sermon.videoUrl}
                        title={sermon.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-[#0088CC] to-[#FF6600] h-48 flex items-center justify-center">
                      <Music className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-serif mb-2 line-clamp-2">{sermon.title}</h3>
                    
                    {sermon.speaker && (
                      <p className="text-[#0088CC] font-semibold text-sm mb-2">By {sermon.speaker}</p>
                    )}

                    {sermon.topic && (
                      <p className="text-[#FF6600] text-sm mb-3">Topic: {sermon.topic}</p>
                    )}

                    <p className="text-gray-600 text-sm mb-4">
                      {new Date(sermon.sermonDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>

                    {sermon.description && (
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{sermon.description}</p>
                    )}

                    {/* Media Links */}
                    <div className="flex gap-2 mt-auto">
                      {sermon.videoUrl && (
                        <Button
                          size="sm"
                          className="bg-[#0088CC] hover:bg-[#0088CC]/90 flex-1"
                          onClick={() => window.open(sermon.videoUrl, "_blank")}
                        >
                          <Video className="w-4 h-4 mr-1" /> Watch
                        </Button>
                      )}
                      {sermon.audioUrl && (
                        <Button
                          size="sm"
                          className="bg-[#FF6600] hover:bg-[#FF6600]/90 flex-1"
                          onClick={() => window.open(sermon.audioUrl, "_blank")}
                        >
                          <Music className="w-4 h-4 mr-1" /> Listen
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
