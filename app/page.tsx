"use client";
import Image from "next/image";
import avatar from "@/public/assets/images/profile_pic.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PromptTemplate from "@/components/prompt-template";
import Timeline from "@/components/timeline";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [key, setKey] = useState(0);
  const placeholders: string[] = [""];
  const faqs = [
    "What's my background?",
    "What are my hobbies?",
    "What projects have I worked on?",
  ];

  const handleChange = (e: any) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch("api/ask-ai", {
        method: "POST",
        body: JSON.stringify({ question: PromptTemplate(userInput) }),
      });
      const data = await res.json();
      setResponse(data.answer);
      setKey((prev) => prev + 1);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (faq: string) => {
    try {
      setIsLoading(true);
      const res = await fetch("api/ask-ai", {
        method: "POST",
        body: JSON.stringify({ question: PromptTemplate(faq) }),
      });
      const data = await res.json();
      setResponse(data.answer);
      setKey((prev) => prev + 1);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className="flex-col justify-center
     content-center mx-auto overflow-hidden px-5 sm:px-10 w-full"
    >
      <div id="home">
        <div className="flex flex-col sm:flex-row justify-center items-center border-opacity-50 gap-6 sm:gap-8 p-4 sm:p-8 mt-10">
          <Image
            alt="Profile-avatar"
            src={avatar}
            className="rounded-full w-full max-w-[150px] sm:max-w-[200px] h-auto"
            priority
          />
          <p className="text-sm text-center font-semibold sm:text-base sm:text-left leading-relaxed">
            Welcome to my personal website! How do I find you today? I am a
            computer science student based in France. I'm passionate about AI
            and coding. When I'm not on my laptop, I enjoy doing calisthenics
            and a small touch of powerlifting.
          </p>
        </div>

        <div className="flex-col mt-8 gap-3 items-center">
          <h1 className="text-[37px] text-primary text-left">
            {" "}
            Ask AI about me{" "}
          </h1>
          <div className="mt-3">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className="mx-auto mt-4 flex-grow justify-center space-x-1 max-w-xl">
              {faqs.map((faq, index) => (
                <button
                  className="btn btn-xs btn-active"
                  onClick={() => {
                    handleClick(faq);
                  }}
                  key={index}
                >
                  {faq}
                </button>
              ))}
            </div>
          </div>
          {isLoading && (
            <span className="loading text-primary loading-dots loading-md"></span>
          )}
          <TextGenerateEffect
            key={key}
            words={response}
            className="mt-10 w-full"
          />
        </div>
      </div>
      <div id="experience" className="mt-3">
        <h1 className="text-[37px]  text-left text-primary mt-3">Experience</h1>
        <Timeline />
      </div>
      <div id="projects" className="mt-3">
        <h1 className="text-[37px] text-primary text-left mt-3">Projects</h1>
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10 mt-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
