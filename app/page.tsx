"use client";

import Image from "next/image";
import avatar from "@/public/assets/images/1.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PromptTemplate from "@/components/prompt-template";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [key, setKey] = useState(0);

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

  return (
    <main
      className="flex-col justify-center
     content-center mx-auto overflow-hidden px-5 sm:px-10 w-full"
    >
      <div
        id="home"
        className="flex-col justify-center content-center mx-auto overflow-hidden px-5 sm:px-10 w-full"
      >
        <div className="flex justify-between border-opacity-50 gap-[40px] items-center mt-10">
          <p className="text-lg text-left ">
            Welcome to my personnal website! <br />
            How do I find you today? <br />
            I am a computer science student based in France. <br />
            I'm passionnate about AI and coding.
            <br /> When I'm not on my laptop, I enjoy doing calisthenics and a
            small touch of powerlifting
          </p>
          <Image
            alt="Profile-avatar"
            src={avatar}
            width={200}
            height={200}
            className="card"
          />
        </div>
        <div className="divider divider-neutral divider-vertical my-10" />
        <h1 className="text-2xl font-bold"> Ask AI </h1>
        <PlaceholdersAndVanishInput
          placeholders={["txt", "baar"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {isLoading && (
          <span className="loading text-[oklch(var(--p))] loading-dots loading-md"></span>
        )}
        <TextGenerateEffect
          key={key}
          words={response}
          className="mt-10 w-full"
        />
      </div>
    </main>
  );
}
