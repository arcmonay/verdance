import Image from "next/image";

type BrandLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  width = 34,
  height = 52,
  priority = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="VRDNC"
      width={width}
      height={height}
      priority={priority}
      className={`brand-logo ${className}`.trim()}
    />
  );
}
