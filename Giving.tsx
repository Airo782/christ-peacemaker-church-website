import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Copy, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Giving() {
  const [selectedType, setSelectedType] = useState<"tithe" | "offering" | "partnership_seed" | "other">("offering");
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    amount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const createDonation = trpc.donations.create.useMutation({
    onSuccess: () => {
      toast.success("Donation recorded successfully!");
      setSubmitted(true);
      setFormData({
        donorName: "",
        donorEmail: "",
        donorPhone: "",
        amount: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    },
    onError: (error) => {
      toast.error("Failed to record donation. Please try again.");
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.donorName || !formData.amount) {
      toast.error("Please fill in all required fields");
      return;
    }
    createDonation.mutate({
      ...formData,
      type: selectedType,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const donationTypes = [
    {
      id: "tithe",
      title: "Tithe",
      description: "10% of your income",
      icon: "🙏",
    },
    {
      id: "offering",
      title: "Offering",
      description: "Voluntary contribution",
      icon: "💝",
    },
    {
      id: "partnership_seed",
      title: "Partnership Seed",
      description: "Sow into the ministry",
      icon: "🌱",
    },
    {
      id: "other",
      title: "Other",
      description: "Special projects",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Online Giving</h1>
          <p className="text-lg opacity-90">Support the ministry of Christ the Peacemaker Church</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <Card className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h2 className="text-2xl font-bold font-serif mb-2">Thank You!</h2>
                  <p className="text-gray-600 mb-4">
                    Your donation has been recorded. God bless you for your generosity!
                  </p>
                  <p className="text-sm text-gray-500">
                    "God loves a cheerful giver." - 2 Corinthians 9:7
                  </p>
                </Card>
              ) : (
                <Card className="p-8">
                  <h2 className="text-2xl font-bold font-serif mb-8 flex items-center">
                    <Gift className="w-6 h-6 mr-2 text-[#FF6600]" />
                    Make a Donation
                  </h2>

                  {/* Donation Type Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-4">Select Donation Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {donationTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id as any)}
                          className={`p-4 rounded-lg border-2 transition-all text-center ${
                            selectedType === type.id
                              ? "border-[#0088CC] bg-blue-50"
                              : "border-gray-200 hover:border-[#0088CC]"
                          }`}
                        >
                          <div className="text-2xl mb-1">{type.icon}</div>
                          <div className="font-semibold text-sm">{type.title}</div>
                          <div className="text-xs text-gray-600">{type.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="donorName"
                        value={formData.donorName}
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
                          name="donorEmail"
                          value={formData.donorEmail}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <Input
                          type="tel"
                          name="donorPhone"
                          value={formData.donorPhone}
                          onChange={handleChange}
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Amount (₦) *</label>
                      <Input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount in Naira"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Add a message or prayer..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 font-bold py-3"
                      disabled={createDonation.isPending}
                    >
                      {createDonation.isPending ? "Processing..." : "Record Donation"}
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Bank Details Sidebar */}
            <div>
              <Card className="p-8 sticky top-4">
                <h3 className="text-xl font-bold font-serif mb-6 text-[#0088CC]">Bank Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Account Name</p>
                    <p className="font-semibold text-gray-900">JOHNSON SUNDAY AKINJIMI</p>
                    <button
                      onClick={() => copyToClipboard("JOHNSON SUNDAY AKINJIMI")}
                      className="text-xs text-[#0088CC] hover:text-[#0088CC]/80 mt-1 flex items-center"
                    >
                      <Copy className="w-3 h-3 mr-1" /> Copy
                    </button>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Account Number</p>
                    <p className="font-semibold text-gray-900 text-lg">6313293062</p>
                    <button
                      onClick={() => copyToClipboard("6313293062")}
                      className="text-xs text-[#0088CC] hover:text-[#0088CC]/80 mt-1 flex items-center"
                    >
                      <Copy className="w-3 h-3 mr-1" /> Copy
                    </button>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Bank</p>
                    <p className="font-semibold text-gray-900">FIDELITY BANK</p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Make transfers directly to the account above. Please include your name in the transfer description.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Giving Promise */}
              <Card className="p-6 mt-6 bg-orange-50 border border-orange-200">
                <h4 className="font-bold text-[#FF6600] mb-3">Our Giving Promise</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "Every gift is used faithfully to advance God's kingdom and serve our community."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
