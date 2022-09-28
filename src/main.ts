import { getPermedSkills, handlingChoice, runChoice, toSkill, visitUrl } from "kolmafia";
import { $skills, $class, $item, ascend, Lifestyle, Paths, set, have } from "libram";


export function main(): void {

	var skillsToPerm = new Map();
	$skills``.forEach((sk) => {
		if(have(sk) && sk.permable)
			skillsToPerm.set(sk, Lifestyle.softcore);
	});
	Object.entries(getPermedSkills()).forEach(([sk,]) => {
		skillsToPerm.delete(toSkill(sk));
	});

	ascend(
		Paths.GreyYou,
		$class`Grey Goo`,
		Lifestyle.softcore,
		"vole",
		$item`astral six-pack`,
		$item`astral mask`,
		skillsToPerm
	);

//	set("choiceAdventure1464", 1);
//	if (visitUrl("main.php").includes("somewhat-human-shaped mass of grey goo nanites"))
//		runChoice(-1);

	visitUrl("main.php");
	if(handlingChoice()) //this is not robust error-checking!
		runChoice(-1); 
}
