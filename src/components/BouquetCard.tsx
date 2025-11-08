import { Link } from "react-router-dom";

interface BouquetCardProps {
  image: string;
  title: string;
  description: string;
  to?: string;
}

const BouquetCard = ({ image, title, description, to = "/gallery" }: BouquetCardProps) => {
  return (
    <Link
      to={to}
      className="group block rounded-3xl overflow-hidden bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-body font-semibold text-xl text-foreground mb-2">{title}</h3>
        <p className="font-body text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default BouquetCard;
