You are given an integer N. Consider the sequence containing the integers 1,2,…,N in increasing order (each exactly once). Find the length of the longest subarray in this sequence such that the bitwise AND of all elements in the subarray is positive.

<br>
<hr/>
<br>

### Input Format

* The first line contains T denoting the number of test cases. Then the test cases follow.
* Each test case contains a single integer N on a single line.

<br>
<hr/>
<br>

### Output Format

For each test case, output on a single line the length of the longest subarray that satisfy the given property.

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
5

1

2

3

4

7

<br>
<hr/>
<br>

### Sample Output 1 
1

1

2

2

4

<br>
<hr/>
<br>

### Explanation
* **Test case 1**: The only possible subarray we can choose is [1].

* **Test case 2**: We can't take the entire sequence [1,2] as a subarray because the bitwise AND of 1 and 2 is zero. We can take either [1] or [2] as a subarray.

* **Test case 4**: It is optimal to take the subarray [2,3] and the bitwise AND of 2 and 3 is 2.

