/*
The idea of this algorithm is that you need to find the maximum height and the
maximum distance between two points where the area produced by side * side is
optimum.

The brute force approach would be doing a nested loop where i is the leftmost,
then j would be the rightmost always being j = i + 1.

From here, we have distance = j - i, and the max available height for these
points would be the minimum between them.

However, this is not the best option. The time complexity is O(n ^ 2).

---

I couldn't find a better sulution than O(N) for this question. It consists in
using two pointers approach.

The lefiest pointer start at index 0, the rightest pointer is at
size(array) - 1.

Then we do the same thing we did in the brute force approach:
1) Check the area using the min(height betwen the two points) * the distance
between them.
2) If the area is greater than the previous one, update it.
3) Move pointers:
3.1) When left element is shorter than the right one, move left pointer foward;
3.2) When right element is shorter than the left one, decrease right position;
4) return the computed area;
*/

function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let area = 0

  while (left <= right) {
    const distance = right - left

    if (distance * Math.min(height[left], height[right]) > area) {
      area = distance * Math.min(height[left], height[right])
    }

    height[right] < height[left] ? right-- : left++
  }

  return area
}

export default maxArea
