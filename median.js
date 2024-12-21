/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays. */

/*
Ex:

Input: nums1 = [1,2], nums2 = [3,4] Output: 2.50000
 Explanation: merged array = [1,2,3,4]
  and median is (2 + 3) / 2 = 2.5.
  */

let num1 = [1, 2];
let num2 = [3, 4];

const showMedian = (num1, num2) => {
  let num3 = [...num1, ...num2];
  if (num3.length % 2 === 0) {
    let position2 = num3.length / 2;
    let position1 = position2 - 1;
    return (num3[position1] + num3[position2]) / 2;
  }
  let temp = num3.length / 2;
  return num3[parseInt(temp)];
};

console.log(showMedian(num1, num2));

let num4 = [1, 3];
let num5 = [7];

console.log(showMedian(num4, num5));
