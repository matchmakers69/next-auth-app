"use client";

import { Button } from "@/components/ui/Button";
import { useSearchTopics } from "./hooks/useSearchTopics";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller } from "react-hook-form";
import { Search } from "lucide-react";

const SearchForm = () => {
  const {
    submitSearch,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
  } = useSearchTopics();
  return (
    <form
      className="w-full"
      autoComplete="off"
      noValidate
      onSubmit={submitSearch}
    >
      <div className="search-form-elements-wrapper flex h-[42px] w-full items-center rounded-[10px] border border-solid border-[hsla(0,0%,100%,.1)]">
        <Controller
          name="topic"
          control={control}
          render={({ field }) => (
            <MuiTextField
              {...field}
              type="search"
              id="topic"
              placeholder="Search terms..."
              variant="outlined"
              error={!!errors.topic}
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
