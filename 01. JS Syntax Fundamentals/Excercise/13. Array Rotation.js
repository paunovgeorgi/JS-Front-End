function arrayRotation([...nums], rotation) {
    for (let i = 0; i < rotation; i++) {
        const firstIndex = nums.shift();
        nums.push(firstIndex);
    }
    console.log(nums.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2);