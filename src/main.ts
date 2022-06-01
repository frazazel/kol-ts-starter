import { runChoice } from "kolmafia";
import { $class, $item, ascend, Lifestyle, Paths } from "libram";

export function main(): void {
  ascend(
    Paths.GreyYou,
    $class`Grey Goo`,
    Lifestyle.softcore,
    "vole",
    $item`astral six-pack`,
    $item`astral pet sweater`
  );
  runChoice(1);
}
