import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "../../lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "auto" | "3/4" | "4/5" | "square" | "video";
  objectFit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function EditorialImage({
  src,
  alt,
  className,
  aspectRatio = "auto",
  objectFit = "cover",
  loading = "lazy",
  fetchPriority = "auto"
}: EditorialImageProps) {
  const aspectClasses = {
    "auto": "",
    "3/4": "aspect-[3/4]",
    "4/5": "aspect-[4/5]",
    "square": "aspect-square",
    "video": "aspect-video",
  };

  return (
    <div className={cn("overflow-hidden relative group", aspectClasses[aspectRatio], className)}>
      <ImageWithFallback
        src={src}
        alt={alt}
        loading={loading}
        {...({ fetchpriority: fetchPriority } as any)} // forward to img element correctly in standard React
        className={cn(
          "w-full h-full transition-all duration-[1500ms] ease-out editorial-image-zoom",
          objectFit === "contain" ? "object-contain bg-[#F5F4F0]" : "object-cover"
        )}
      />
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none" />
    </div>
  );
}

