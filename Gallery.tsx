import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Gallery() {
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: galleryData } = trpc.gallery.list.useQuery();

  useEffect(() => {
    if (galleryData) {
      setImages(galleryData);
      const uniqueCategories = Array.from(new Set(galleryData.map((img: any) => img.category).filter(Boolean)));
      setCategories(uniqueCategories as string[]);
    }
  }, [galleryData]);

  const filteredImages =
    selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0088CC] to-[#FF6600] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Photo Gallery</h1>
          <p className="text-lg opacity-90">Moments from our church community and activities</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mb-12 flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-[#0088CC]" : ""}
              >
                All Photos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-[#0088CC]" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          {/* Images Grid */}
          {filteredImages.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg">No photos available yet. Check back soon!</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title || "Gallery image"}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.title && <p className="font-semibold">{image.title}</p>}
                      {image.category && <p className="text-sm opacity-90">{image.category}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title || "Gallery image"}
              className="w-full h-auto rounded-lg"
            />
            {(selectedImage.title || selectedImage.description) && (
              <div className="mt-4 text-white">
                {selectedImage.title && <h3 className="text-xl font-bold font-serif">{selectedImage.title}</h3>}
                {selectedImage.description && <p className="text-gray-300 mt-2">{selectedImage.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
