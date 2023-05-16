type TTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong";

type TWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TSize = "sm" | "md" | "lg";

type TColor = "purple" | "electric" | "text" | "text-gray";

export interface IBaseTextProps {
  children: React.ReactNode;
  className?: string;
  color: TColor;
  tag: TTag;
  fontWeight: TWeight;
  fontSize: TSize;
}
