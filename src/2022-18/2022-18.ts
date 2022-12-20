import { ints } from "../helpers";
import { logResult } from "../logResult";

function part1(input: string) {
  const split = input.split("\n");
  const set = new Set<string>();

  const cubes = split.map((x) => ints(x));
  cubes.forEach((cube) => set.add(`${cube[0]},${cube[1]},${cube[2]}`));

  let sum = 0;
  const sides = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  for (const cube of cubes) {
    for (const side of sides) {
      if (
        !set.has(
          `${cube[0] + side[0]},${cube[1] + side[1]},${cube[2] + side[2]}`
        )
      ) {
        sum++;
      }
    }
  }

  return sum;
}

export default function main() {
  logResult("Test", __dirname + "/testInput.txt", part1);
  logResult("Main", __dirname + "/input.txt", part1);
  // logResult("Test", __dirname + "/input.txt", part1);
  // logResult("Test", __dirname + "/testInput.txt", part2);
  //   logResult("Main", __dirname + "/input.txt", part2);
}
