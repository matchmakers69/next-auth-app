"use client";

import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Search } from "lucide-react";
import { SearchPostsValues } from "./validation/searchValidationSchema";
import { searchPosts } from "@/actions/search-posts";
import { FormEvent, startTransition, useRef } from "react";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const { control, handleSubmit } = useForm<SearchPostsValues>({
    mode: "onTouched",
    defaultValues: {
      term: searchParams.get("term") ?? "",
    },
  });

  const onSubmit = (formData: FormData) => {
    startTransition(() => {
      searchPosts(formData);
    });
  };
  return (
    <form
      className="w-full"
      ref={formRef}
      autoComplete="off"
      noValidate
      action={searchPosts}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(() => {
          // startTransition(() => searchPosts(new FormData(formRef.current!)));
          const formData = new FormData(formRef.current!);
          onSubmit(formData);
        })(event);
      }}
    >
      <div className="search-form-elements-wrapper flex h-[42px] w-full items-center rounded-[10px] border border-solid border-[hsla(0,0%,100%,.1)]">
        <Controller
          name="term"
          control={control}
          render={({ field }) => (
            <MuiTextField
              {...field}
              type="search"
              id="topic"
              placeholder="Search terms..."
              variant="outlined"
              fullWidth
              hiddenLabel
              margin="none"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "42px",
                  fontSize: "1.4rem",
                  color: "var(--text-light)",
                  borderRadius: "10px 0 0 10px",
                  transition: "border-color 120ms ease-in",
                  "& fieldset": {
                    background: "transparent",
                    border: "none",
                  },
                  "&:hover fieldset": {
                    borderColor: "hsla(0,0%,100%,0)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "hsla(0,0%,100%,0)",
                    background: "transparent",
                  },
                },
              }}
            />
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          className="h-[42px] w-[42px] min-w-0 border-none bg-transparent px-4 transition-colors duration-200 hover:border-[hsla(0,0%,100%,.05)] focus:border-[var(--text-light)] focus:bg-transparent"
        >
          <Search size={20} />
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
