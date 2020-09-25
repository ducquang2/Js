function isPositive(nums) {
    if (nums > 0) {
        return 'YES';
    } 
        if (nums === 0) {
            throw Error('Zero Error');
    }
        if (nums < 0) {
            throw Error('Negative Error');   
    }
}