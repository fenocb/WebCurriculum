import React from "react";
import Dog from "../Image/Dog.jpg";
import ProjectCard from "../Components/ProjectCard";
import Tittle from "../Components/Tittle";
import TechCard from "../Components/TechCard";
import reactPNG from "../Image/reactPNG.png";
import htmlPNG from "../Image/htmlPNG.png";
import cssPNG from "../Image/cssPNG.png";
import jsPNG from "../Image/jsPNG.png";
import nodePNG from "../Image/nodePNG.png";
import twPNG from "../Image/twPNG.png";
import sassPNG from "../Image/sassPNG.png";
import bootstrapPNG from "../Image/bootstrapPNG.png";
import xdPNG from "../Image/xdPNG.png";
import figmaPNG from "../Image/figmaPNG.png";

const Index = () => {
  return (
    <div
      id="gradient"
      className="bg-gradient-to-b from-Background_one to-Background_two font-Roboto text-white pb-24 context"
    >
      <div class="area">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-row w-full">
              <div className="w-1/2">foto</div>
              <div className="w-1/2 leading-none relative">
                <div className="w-full">
                  <p className="pl-2">Que tal! Yo soy</p>
                  <h1 className="lg:text-9xl md:text-6xl  font-semibold drop-shadow-xl animate-pulse">
                    Marco
                  </h1>
                  <h2 className="lg:text-9xl md:text-6xl font-semibold drop-shadow-md animate-pulse">
                    Gonzalez
                  </h2>
                </div>
                <div className="absolute  left-56 -bottom-10">
                  <h4 className="text-5xl font-light">Web Developer</h4>
                </div>
              </div>
            </div>
          </div>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full pb-10">
        <div className="flex flex-col w-1/2">
          <div className="flex w-full pb-6 ">
            <div className="pt-72">
              <p className="font-light text-3xl px-32">
                Mi objetivo en el mundo actual es ayudar a implementar su vision
                y objetivos al mundo web donde podra tener la confianza de que
                se habilitara un abanico de oportunidades
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
        <div className="flex w-1/2 object-none">
          <img
            src={Dog}
            alt=""
            className="rounded-full object-none scale-[.7]"
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <Tittle title={"Tecnologias"} />
        <div className="flex flex-col">
          <div className="flex flex-row justify-center text-center">
            <TechCard imgSrc={reactPNG} TechName="React" />
            <TechCard imgSrc={htmlPNG} TechName="Html" />
            <TechCard imgSrc={cssPNG} TechName="css" />
            <TechCard imgSrc={jsPNG} TechName="javaScript" />
            <div className="pt-12">
              <TechCard imgSrc={nodePNG} TechName="javaScript" />
            </div>
          </div>
          <div className="flex flex-row justify-center text-center">
            <TechCard imgSrc={twPNG} TechName="React" />
            <div className="pt-4">
              <TechCard imgSrc={bootstrapPNG} TechName="Html" />
            </div>
            <div className="pt-5">
              <TechCard imgSrc={sassPNG} TechName="css" />
            </div>
            <TechCard imgSrc={figmaPNG} TechName="javaScript" />
            <TechCard imgSrc={xdPNG} TechName="javaScript" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Tittle title={"Proyectos"} />

        <div className="flex flex-col">
          <div className="">
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
  );
};
export default Index;
