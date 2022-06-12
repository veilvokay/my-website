module.exports = {
    extends: [
        "@zajno/eslint-config/with-jest",
    ],
    env: {
        browser: true,
    },
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    rules: {
        indent: [ 'warn', 4, { SwitchCase: 1 } ],
    }
};
