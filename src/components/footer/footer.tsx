"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Link from "next/link";
import Socials from "../header/socials";

interface FormData {
  email: string;
}

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(errors);

  return (
    <footer className="m-2 mt-16 flex flex-col items-center rounded-2xl bg-dark pb-16 text-light sm:m-10 dark:bg-accentDark/90 dark:text-dark">
      <h3 className="mt-16 px-4 text-center text-2xl font-medium capitalize sm:text-3xl lg:text-4xl dark:font-bold">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 w-full px-4 text-center text-sm font-light sm:w-3/5 sm:text-base dark:font-medium">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx04 mb-6 mt-6 flex w-fit items-stretch rounded  bg-light p-1 sm:min-w-[384px] sm:p-2 dark:bg-dark"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="mr-2 w-full border-0 border-b bg-transparent pb-1 pl-2 text-light focus:border-dark focus:ring-0 sm:pl-0"
        />
        {errors.email && <p className="text-red-500">This field is required</p>}

        <input
          type="submit"
          className="cursor-pointer rounded bg-dark px-3 py-1 font-medium text-light sm:px-5 dark:bg-light dark:text-dark"
        />
      </form>
      <Socials />
      <div className="relative mt-16 flex w-full flex-col items-center justify-between border-t border-solid border-light px-8 py-6 font-medium md:mt-24 md:flex-row">
        <span className="text-center">
          &copy;2024 DevTaran. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="my-4 text-center underline md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://sdconcept.pl"
            className="underline"
            target="_blank"
          >
            SD Concept
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
