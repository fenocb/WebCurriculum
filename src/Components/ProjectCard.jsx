import { React } from "react";

const ProjectCard = ({width, title, number, imageSrc, paddinLeft,}) => {
    let classContainer = " pt-16 hover:z-50 " + width + " " + paddinLeft;
  return (
    <div className={classContainer}>
      <div className="backdrop-blur-xl  backdrop-brightness-150 drop-shadow-sm transition ease-in-out  hover:backdrop-saturate-150 hover:scale-110 duration-300 ">
        <div className="h-72">
          <img
            src={imageSrc}
            alt="titleimage"
            className="object-none w-full h-72"
          />
        </div>
        <div className="border-b border-gray-600">
          <div className="flex flex-row">
            <p className="p-10 bg-PurpleNumbre">01</p>
            <p className="pt-10 pl-10">Titulo de proyecto</p>
          </div>
        </div>
        <div>
          <p className="p-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            nisi officia earum deleniti porro expedita quisquam veritatis illum
            eligendi. Eaque aliquid laudantium saepe quae porro labore
            asperiores sed libero magni. At pariatur deleniti eos inventore cum!
            Quas culpa doloribus eligendi a, dolor consectetur autem odio
            reprehenderit molestias eaque, sed mollitia maiores, animi qui
            cumque asperiores vel quibusdam cupiditate provident laborum!
            Inventore quae esse commodi? Nisi dicta eveniet quas sint quia
            consequuntur repellendus, officiis illo. A, corrupti? Quo, molestiae
            laborum recusandae quas autem obcaecati, doloribus perferendis enim,
            aut exercitationem qui eveniet! Id quae voluptates, eos rerum quas,
            eius quasi saepe nemo possimus ea, exercitationem molestiae in fuga
            accusantium ipsa. Accusantium ducimus, libero magnam voluptatibus
            ullam in? Consequuntur fuga inventore quos delectus. Illum aut
            exercitationem officiis ipsum ab explicabo veritatis molestias totam
            esse odit ad, dolore non impedit laudantium architecto in veniam
            excepturi maxime officia necessitatibus placeat mollitia, adipisci
            inventore? Ipsum, error! Velit porro voluptatem corporis pariatur
            similique
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
