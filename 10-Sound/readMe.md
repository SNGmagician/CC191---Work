# Superman Animation

This assignment was really fun, and challenging. I struggled with learning how the noise functions worked most of all. However, the looping clouds proved a substantial challenge itself.

At first, I attempted to simply apply a random number to the Y coordinate of the clouds, but this lead to a jerky mess. Using frameCount solved this by forcing it to wait to generate a number until the loop was completed.

The noise function is a strange tool, I still struggle with it. The function did not perform as I expected, and still doesn't. I obtained the result I was looking for by dividing the entire height of the canvas to determine the offset. This seems very imprecise, but this was the only solution I could find.
