The MEX (minimum excluded) of an array is the smallest non-negative integer that does not belong to the array. For instance:

<br>

* The MEX of [2,2,1] is 0, because 0 does not belong to the array.

* The MEX of [3,1,0,1] is 2, because 0 and 1 belong to the array, but 2 does not.

* The MEX of [0,3,1,2] is 4 because 0,1,2 and 3 belong to the array, but 4 does not.

<br>

Find the maximum possible MEX of an array of non-negative integers such that the bitwise OR of the elements in the array does not exceed X.

<br>
<hr/>
<br>

### Input Format

* The first line contains T denoting the number of test cases. Then the test cases follow.
* Each test case contains a single integer X on a single line

<br>
<hr/>
<br>

### Output Format

For each test case, output on a single line the maximum possible MEX of the array satisfying the given property.

<br>
<hr/>
<br>

### Constraints
* 1≤T≤105 
* 1≤N≤109


<br>
<hr/>
<br>

### Subtasks
**Subtask 1 (100 points):** Original constraints

<br>
<hr/>
<br>

### Sample Input 1 
4

0

1

2

5


<br>
<hr/>
<br>

### Sample Output 1 
1

2

2

4

4

<br>
<hr/>
<br>

### Explanation
* **Test case 1**: The array could be [0].

* **Test case 2**: The array could be [0,1]. Here the bitwise OR of 0 and 1 is 1 and the MEX of the array is 2 as both 0 and 1 belongs to the array.

* **Test case 4**: The array could be [1,0,3,2]. Here the bitwise OR of all integers in the array is 3 and the MEX of the array is 4.

