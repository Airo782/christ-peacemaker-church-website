import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    testimony: "",
  });

  const { data: testimoniesData } = trpc.testimonies.list.useQuery();
  const createTestimony = trpc.testimonies.create.useMutation({
    onSuccess: () => {
      toast.success("Testimony submitted successfully!");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        title: "",
        testimony: "",
      });
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 3000);
    },
    onError: (error) => {
      toast.error("Failed to submit testimony. Please try again.");
      console.error(error);
    },
  });

  useEffect(() => {
    if (testimoniesData) {
      setTestimonies(testimoniesData);
    }
  }, [testimoniesData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.testimony) {
      toast.error("Please fill in all required fields");
      return;
    }
    createTestimony.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Testimonies</h1>
          <p className="text-lg opacity-90">Hear how God has transformed lives in our community</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Share Testimony Button */}
          {!showForm && (
            <div className="text-center mb-12">
              <Button
                size="lg"
                className="bg-[#FF6600] hover:bg-[#FF6600]/90 font-bold"
                onClick={() => setShowForm(true)}
              >
                Share Your Testimony
              </Button>
            </div>
          )}

          {/* Form */}
          {showForm && (
            <div className="max-w-2xl mx-auto mb-16">
              {submitted ? (
                <Card className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h2 className="text-2xl font-bold font-serif mb-2">Thank You!</h2>
                  <p className="text-gray-600 mb-4">
                    Your testimony has been received and will be reviewed before publishing.
                  </p>
                  <p className="text-sm text-gray-500">
                    "Always be prepared to give an answer to everyone who asks you to give the reason for the hope 
                    that you have." - 1 Peter 3:15
                  </p>
                </Card>
              ) : (
                <Card className="p-8 mb-12">
                  <h2 className="text-2xl font-bold font-serif mb-6">Share Your Testimony</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Testimony Title *</label>
                      <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g., How God Healed My Family"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Testimony *</label>
                      <textarea
                        name="testimony"
                        value={formData.testimony}
                        onChange={handleChange}
                        placeholder="Share your testimony in detail. What did God do in your life?"
                        rows={8}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                        required
                      ></textarea>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-[#0088CC] hover:bg-[#0088CC]/90 font-bold py-3"
                        disabled={createTestimony.isPending}
                      >
                        {createTestimony.isPending ? "Submitting..." : "Submit Testimony"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 py-3"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>
          )}

          {/* Testimonies Grid */}
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12">Member Testimonies</h2>

          {testimonies.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg">No testimonies yet. Be the first to share yours!</p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {testimonies.map((testimony) => (
                <Card key={testimony.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0088CC] to-[#FF6600] rounded-full flex items-center justify-center text-white font-bold">
                      {testimony.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{testimony.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FF6600] text-[#FF6600]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-serif mb-3 text-[#0088CC]">{testimony.title}</h4>

                  <p className="text-gray-700 leading-relaxed line-clamp-4">{testimony.testimony}</p>

                  <p className="text-xs text-gray-500 mt-4">
                    {new Date(testimony.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
