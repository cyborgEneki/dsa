function christmasTree(height) {
    const space = " ";
    const asterix = "*";

    let maxColumns = height * 2 - 1;
    let starCount = 1;

    while (height > 1) {
        let spaces = (maxColumns - starCount) / 2;

        console.log(space.repeat(spaces), asterix.repeat(starCount), space.repeat(spaces));
        starCount += 2;
        height--;
    }
}

christmasTree(7);
