import React from "react";
import Dog from "../Components/Dog";
import ProjectCard from "../Components/ProjectCard";
import Tittle from "../Components/Tittle";

const Index = () => {
  return (
    <div className="w-screen">
      <div className="bg-gradient-to-b from-Background_one to-Background_two font-Roboto text-white">
        <div className="flex flex-col">
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-row w-full">
              <div className="w-1/2">foto</div>
              <div className="w-1/2 leading-none">
                <div className="w-auto relative ">
                  <p className="pl-2">Que tal! Yo soy</p>
                  <h1 className="text-9xl font-semibold drop-shadow-xl animate-pulse">
                    Marco
                  </h1>
                  <h2 className="text-9xl font-semibold drop-shadow-md animate-pulse">
                    Gonzalez
                  </h2>
                  <div className="absolute  left-56 -bottom-10">
                    <h4 className="text-5xl font-light">Web Developer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col">
              <div className="flex justify-center w-full pb-6 ">
                <div className="">
                  <p className="font-light text-3xl px-64 pt-32">
                    Mi objetivo en el mundo actual es ayudar a implementar su
                    vision y objetivos al mundo web donde podra tener la
                    confianza de que se habilitara un abanico de oportunidades
                  </p>
                </div>
              </div>
              <div className="w-full text-center">
                <p>Vamos a crear nuesto futuro juntos</p>
              </div>
              <div className="flex flex-row w-full  justify-center">
                <div className="">correo:</div>
                <div>
                  <p>marco.glez.blncs@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Dog />
            </div>
          </div>
          <div className="flex flex-col">
            <Tittle title={"Tecnologias"} />
          </div>
          <div className="flex flex-col ">
            <Tittle title={"Proyectos"} />

            <div className="flex flex-col">
              <div>
                <ProjectCard
                  width="w-4/5"
                  imageSrc={
                    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"

                  }
                  paddinLeft="pl-96"
                />
              </div>
              <div className="flex flex-row">
              <ProjectCard
                  width="w-3/5"
                  imageSrc={
                    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
                  }
                  paddinLeft="pl-32"
                />
                 <ProjectCard
                  width="w-1/3"
                  imageSrc={
                    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
                  }
                  paddinLeft="pl-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
