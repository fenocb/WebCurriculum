import { React } from "react";

const Tittle = ({ title }) => {
  return (
    <div className="flex justify-center w-full">
      <p className="font-Righteous text-Cian text-9xl font-semibold drop-shadow-xl">
        {title}
      </p>
    </div>
  );
};
export default Tittle;
