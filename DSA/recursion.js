const count = (n) => {
    if (n > 5) return;
    console.log(n);
    count(n + 1);
};
count(1);