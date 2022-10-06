import "./Button.scss";

interface Props {
  type?: "inverted" | "normal";
  content: string | JSX.Element;
  width?: number | string;
  className?: string;
}

export default function Button({
  type = "normal",
  content,
  className = "",
}: Props) {
  return <button className={`button ${type} ${className}`}>{content}</button>;
}
