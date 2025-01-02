"use client";

import Image from "next/image";
import avatar from "@/public/assets/images/1.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PromptTemplate from "@/components/prompt-template";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [key, setKey] = useState(0);
  const placeholders: string[] = [""];

  const handleChange = (e: any) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setUserInput(e.target.value);

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

  return (
    <main
      className="flex-col justify-center
     content-center mx-auto overflow-hidden px-5 sm:px-10 w-full"
    >
      <div
        id="home"
        // className="flex-col justify-center content-center mx-auto overflow-hidden px-5 sm:px-10 w-full"
      >
        <div className="flex justify-between border-opacity-50 gap-[40px] items-center mt-10">
          <Image
            alt="Profile-avatar"
            src={avatar}
            width={200}
            height={200}
            className="card"
          />
          <p className="text-lg text-left ">
            Welcome to my personnal website! <br />
            How do I find you today? <br />
            I am a computer science student based in France. <br />
            I'm passionnate about AI and coding.
            <br /> When I'm not on my laptop, I enjoy doing calisthenics and a
            small touch of powerlifting
          </p>
        </div>

        <div className="flex-col mt-8 gap-3 items-center">
          <h1 className="text-2xl font-bold text-center mb-8">
            {" "}
            Ask AI about me{" "}
          </h1>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

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
      <div id="experience" className="">
        <h1 className="text-2xl font-bold text-center mb-8">Experience</h1>
      </div>
      <div id="projects" className="">
        <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      </div>

      <Footer />
    </main>
  );
}
