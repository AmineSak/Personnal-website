"use client";
import Image from "next/image";
import avatar from "@/public/assets/images/1.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [showResponse, setShowResponse] = useState(false);

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
        body: JSON.stringify({ question: userInput }),
      });
      const data = await res.json();
      setResponse(data.answer);
      console.log(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setShowResponse(true);
    }
  };

  useEffect(() => {
    if (response) {
      setShowResponse(true);
    } else {
      setShowResponse(false);
    }
  }, [response]);
  return (
    <main
      className="flex-col justify-center
     content-center mx-auto overflow-hidden px-5 sm:px-10 "
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
      {isLoading && <div>Loading...</div>}
      {showResponse && (
        <TextGenerateEffect words={response} className="mt-10" />
      )}
    </main>
  );
}
