const firstStringHasSecondString = (firstStr: string, secondStr: string) => {
    return firstStr
        ?.trim()
        ?.toUpperCase()
        ?.includes(secondStr?.trim()?.toUpperCase());
};

export default firstStringHasSecondString;
