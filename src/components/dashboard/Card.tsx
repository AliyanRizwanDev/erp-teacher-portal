import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  navLink: string;
}

export const Card = ({ image, title, navLink }: CardProps) => {
  return (
    <Link to={navLink}>
      <div className=" w-full bg-white rounded-2xl p-5 flex items-center ">
        <div className="flex items-center justify-center flex-[0.4]">
          <img src={image} alt={title} className="w-24 h-24" />
        </div>
        <span className="text-2xl font-semibold text-primaryTextColor flex-[0.6]">
          {title}
        </span>
      </div>
    </Link>
  );
};
