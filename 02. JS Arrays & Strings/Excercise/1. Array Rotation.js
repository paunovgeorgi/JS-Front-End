function arrayRotation([...nums], rotation) {
    for (let i = 0; i < rotation; i++) {
        const firstIndex = nums.shift();
        nums.push(firstIndex);
    }
    console.log(nums.join(' '));
}
