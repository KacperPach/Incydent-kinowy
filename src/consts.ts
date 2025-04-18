// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { ZodEnum, z } from "astro:schema";

export const SITE_TITLE = "INCYDENT KINOWY";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const FESTIVAL_NAMES = z.enum([
  "Festiwal ośmiornicy 🐙",
  "festiwal orła 🦅",
  "Festiwal kota 🐈",
  "festiwal psa 🐶",
]);
