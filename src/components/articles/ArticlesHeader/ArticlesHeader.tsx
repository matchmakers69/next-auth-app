import Header from "@/components/ui/NavbarMain/Header";
import HeaderAuth from "@/components/ui/NavbarMain/HeaderAuth";
import Navigation from "@/components/ui/NavbarMain/Navigation";
import LeftNavigation from "./LeftNavigation";
import SearchForm from "../Search/SearchForm";
import { Suspense } from "react";

const ArticlesHeader = () => {
  return (
    <Header>
      <div className="mr-10 flex w-full flex-wrap items-center">
        <LeftNavigation />
        <div className="search-form-wrapper flex w-[30rem] flex-col flex-wrap justify-center">
          <Suspense>
            <SearchForm />
          </Suspense>
        </div>
      </div>
      <div className="right-nav flex items-center">
        <Navigation />
        <HeaderAuth />
      </div>
    </Header>
  );
};

export default ArticlesHeader;
