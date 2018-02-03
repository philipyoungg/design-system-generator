// Lib

const createCSS = (className, cssName, result) =>
    `.${className}: { ${cssName}: ${result}; }`;

const createUnitConverter = (name, prefix) => (val, index) => `
${createCSS(`${prefix}a${index}`, name, `${val}rem`)}
${createCSS(`${prefix}v${index}`, name, `${val}rem 0`)}
${createCSS(`${prefix}h${index}`, name, `0 ${val}rem`)}
`;

const convertTypeToCSS = {
    margin: createUnitConverter("margin", "m"),
    padding: createUnitConverter("padding", "p"),
    color: val => createCSS(val, "color", val),
    backgroundColor: val => createCSS(`bg-${val}`, "backgroundColor", val)
};

const generateCSS = config => {
    let css = [];
    Object.keys(config).forEach(
        type =>
            convertTypeToCSS.hasOwnProperty(type)
                ? config[type].forEach(
                      (val, idx) => (
                          css.push(convertTypeToCSS[type](val, idx)),
                          css.push(`\n`)
                      )
                  )
                : console.warn(`${type} is not a valid CSS property!`)
    );
    return css.join(" ");
};

// App

const config = {
    margin: [0, 0.25, 0.5, 1, 1.5, 2, 4, 8, 16],
    padding: [0, 0.25, 0.5, 1, 1.5, 2, 4, 8, 16],
    color: ["red", "blue", "green"],
    backgroundColor: ["red", "blue", "green"]
};

const css = generateCSS(config);
console.log(css);
