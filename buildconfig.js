({
    mainConfigFile: "scripts/init.js",
    baseUrl: "scripts",
    name: "almond",
    out: "build.js",
    stubModules: ["cs"],
    include: [
        "init",
        "ace/theme/chrome",
        "ace/theme/clouds",
        "ace/theme/clouds_midnight",
        "ace/theme/cobalt",
        "ace/theme/crimson_editor",
        "ace/theme/dawn",
        "ace/theme/dreamweaver",
        "ace/theme/eclipse",
        "ace/theme/github",
        "ace/theme/idle_fingers",
        "ace/theme/kr_theme",
        "ace/theme/merbivore",
        "ace/theme/merbivore_soft",
        "ace/theme/mono_industrial",
        "ace/theme/monokai",
        "ace/theme/pastel_on_dark",
        "ace/theme/solarized_dark",
        "ace/theme/solarized_light",
        "ace/theme/textmate",
        "ace/theme/tomorrow",
        "ace/theme/tomorrow_night_blue",
        "ace/theme/tomorrow_night_bright",
        "ace/theme/tomorrow_night_eighties",
        "ace/theme/tomorrow_night",
        "ace/theme/twilight",
        "ace/theme/vibrant_ink",
    ],
    exclude: [
        "coffee-script",
    ],
    preserveLicenseComments: false,
})
