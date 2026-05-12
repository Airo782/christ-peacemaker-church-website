import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle, Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Consecrated Anointing Oil",
    description: "Blessed and consecrated anointing oil for spiritual protection and healing.",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1602928294221-441f23d831fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Spiritual Protection Salt",
    description: "Specially prepared spiritual salt for cleansing and sanctification.",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1518114056426-3b361ec0888b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Faith Devotional Manual",
    description: "Daily guide for spiritual growth and prophetic declarations.",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Consecrated Prayer Mantle",
    description: "Blessed prayer mantle for spiritual warfare and divine connection.",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Store() {
  const whatsappNumber = "+234807703810";

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Hello, I am interested in purchasing the ${productName} from the Christ the Peacemaker Church Store.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <ShoppingBag className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Spiritual Store</h1>
          </div>
          <p className="text-lg opacity-90">Sacred items for your spiritual journey and protection</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-[#0088CC] p-6 mb-12 rounded-r-lg">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-[#0088CC] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#0088CC] mb-1">How to Purchase</h3>
                <p className="text-gray-700">
                  All items are consecrated and blessed. To maintain the sanctity of these items and provide personalized guidance, all purchases are handled directly via WhatsApp. Click on "Order via WhatsApp" to connect with our ministry team.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                  <div className="mt-auto">
                    <p className="text-[#FF6600] font-bold mb-4">{product.price}</p>
                    <Button 
                      className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90"
                      onClick={() => handleOrder(product.name)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> Order via WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold font-serif mb-4">Need Something Specific?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If you are looking for a specific spiritual item or need guidance on which item is best for your situation, please don't hesitate to reach out to us.
            </p>
            <Button 
              variant="outline" 
              className="border-[#0088CC] text-[#0088CC] hover:bg-blue-50"
              onClick={() => window.location.href = "tel:+2348077038101"}
            >
              Call for Inquiries
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
