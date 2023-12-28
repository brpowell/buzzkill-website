export interface NYTGameTitleProps {
  title: string;
}

export default function NYTGameTitle({ title }: NYTGameTitleProps) {
  return <h1 className="text-5xl mb-8">{title}</h1>;
}
