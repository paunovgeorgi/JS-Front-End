function pringLoadingBar(percentage) {
    const completion = percentage /10;
    const bar = '%'.repeat(completion) + '.'.repeat(10 - completion);

    if (completion === 10) {
        console.log(`100% Complete!`);
        console.log(`[${bar}]`);
    }
    else{
        console.log(`${percentage}% [${bar}]`);
        console.log(`Still loading...`);
    }
}