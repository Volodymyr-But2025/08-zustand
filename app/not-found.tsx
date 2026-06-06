import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Sorry, the page you are looking for does not exist. ",
  openGraph: {
    title: "Notehub",
    description: "Notes app",
    images: [
      {
        url: " https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
};

export default NotFound;
