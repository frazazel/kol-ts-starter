import { runChoice, visitUrl } from "kolmafia";
import { $class, $item, ascend, Lifestyle, Paths, set } from "libram";

export function main(): void {
  ascend(
    Paths.GreyYou,
    $class`Grey Goo`,
    Lifestyle.softcore,
    "vole",
    $item`astral six-pack`,
    $item`astral pet sweater`
  );

  set("choiceAdventure1464", 1);
  if (visitUrl("main.php").includes("somewhat-human-shaped mass of grey goo nanites"))
    runChoice(-1);
}
