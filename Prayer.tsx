import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Prayer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
    isPublic: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const createPrayerRequest = trpc.prayerRequests.create.useMutation({
    onSuccess: () => {
      toast.success("Prayer request submitted successfully!");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        request: "",
        isPublic: false,
      });
      setTimeout(() => setSubmitted(false), 3000);
    },
    onError: (error) => {
      toast.error("Failed to submit prayer request. Please try again.");
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.request) {
      toast.error("Please fill in all required fields");
      return;
    }
    createPrayerRequest.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Prayer Requests</h1>
          <p className="text-lg opacity-90">Share your prayer needs with our church community</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <Card className="p-12 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h2 className="text-2xl font-bold font-serif mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-4">
                  Your prayer request has been received. Our prayer team will intercede for you.
                </p>
                <p className="text-sm text-gray-500">
                  "The prayer of a righteous person is powerful and effective." - James 5:16
                </p>
              </Card>
            ) : (
              <Card className="p-8">
                <h2 className="text-2xl font-bold font-serif mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-[#FF6600]" />
                  Submit Your Prayer Request
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Prayer Request *</label>
                    <textarea
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      placeholder="Please share your prayer request in detail..."
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isPublic"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0088CC] rounded"
                    />
                    <label htmlFor="isPublic" className="ml-2 text-sm text-gray-600">
                      Allow this prayer request to be shared with the prayer team
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90 font-bold py-3"
                    disabled={createPrayerRequest.isPending}
                  >
                    {createPrayerRequest.isPending ? "Submitting..." : "Submit Prayer Request"}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-[#0088CC] mb-2">Our Prayer Promise</h3>
                  <p className="text-sm text-gray-700">
                    "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, 
                    and it will be yours." - Mark 11:24
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
