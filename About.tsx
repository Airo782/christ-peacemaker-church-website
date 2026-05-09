import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export default function About() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const { data: leadershipData } = trpc.leadership.list.useQuery();

  useEffect(() => {
    if (leadershipData) {
      setLeaders(leadershipData);
    }
  }, [leadershipData]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Us</h1>
          <p className="text-lg opacity-90">Learn about our church, mission, and leadership</p>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Our Church History</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace) is a vibrant, 
                spirit-filled ministry located in Jos, Nigeria. Founded on the principles of faith, love, and 
                community service, our church has grown to become a beacon of hope and spiritual transformation 
                in the Jos community.
              </p>
              <p className="text-gray-700 mb-6">
                Under the leadership of Prophet Akinjimi Johnson (General Overseer/CEO), our church is dedicated 
                to preaching the Gospel of Jesus Christ, providing spiritual guidance, and serving the needs of 
                our community. We believe in the power of prayer, the authority of God's Word, and the transformative 
                work of the Holy Spirit.
              </p>
              <p className="text-gray-700">
                Our mission is to bring people into a personal relationship with Jesus Christ, foster spiritual 
                growth, and demonstrate God's love through practical service and compassion to all people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Statement of Faith</h2>
            <Card className="p-8">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0088CC]">We Believe in God</h3>
                  <p>
                    We believe in the one true God, the Creator of all things, who exists eternally in three persons: 
                    the Father, the Son (Jesus Christ), and the Holy Spirit.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FF6600]">We Believe in Jesus Christ</h3>
                  <p>
                    We believe that Jesus Christ is the Son of God, who came to earth, died for our sins, rose from 
                    the dead, and ascended to heaven. He is our Lord and Savior.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0088CC]">We Believe in the Holy Spirit</h3>
                  <p>
                    We believe in the power and work of the Holy Spirit in the lives of believers, enabling us to live 
                    victoriously and serve God effectively.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FF6600]">We Believe in Salvation</h3>
                  <p>
                    We believe that salvation comes through faith in Jesus Christ. By His grace, we are saved and 
                    transformed into new creations in Christ.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0088CC]">We Believe in the Bible</h3>
                  <p>
                    We believe that the Bible is the inspired Word of God and is our ultimate authority for faith, 
                    practice, and doctrine.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">Our Leadership</h2>
          
          {/* General Overseer */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <img
                    src="/manus-storage/prophet-akinjimi-johnson_f1a9a809.jpg"
                    alt="Prophet Akinjimi Johnson"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Prophet Akinjimi Johnson</h3>
                  <p className="text-[#0088CC] font-bold text-lg mb-4">General Overseer/CEO</p>
                  <p className="text-gray-700 leading-relaxed">
                    Prophet Akinjimi Johnson is the visionary leader and General Overseer of Christ the Peacemaker 
                    Church of All Nations. With a deep commitment to God's Word and a passion for spiritual transformation, 
                    he leads the church with wisdom, integrity, and compassion. Under his leadership, the church has 
                    grown spiritually and numerically, impacting lives and communities.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Leaders */}
          {leaders.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader) => (
                <Card key={leader.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {leader.photoUrl && (
                    <div className="h-64 bg-gray-200 overflow-hidden">
                      <img src={leader.photoUrl} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif mb-2">{leader.name}</h3>
                    <p className="text-[#FF6600] font-semibold mb-3">{leader.title}</p>
                    {leader.bio && <p className="text-gray-600 text-sm">{leader.bio}</p>}
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
