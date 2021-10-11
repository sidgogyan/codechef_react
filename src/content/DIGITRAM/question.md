You are given an integer N and a digit D. Find the minimum non-negetive integer you should add to N such that the final value of N does not contain the digit D.



<br>
<hr/>
<br>

### Input Format

* The first line contains T denoting the number of test cases. Then the test cases follow.

* Each test case contains two integers N and D on a single line denoting the original number and the digit you need to avoid.

<br>
<hr/>
<br>

### Output Format

For each test case, output on a single line the minimum non-negetive integer you should add to N.

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

21 5

8 8

100 0

5925 9

434356 3


<br>
<hr/>
<br>

### Sample Output 1 
0

1

11

75

5644

<br>
<hr/>
<br>

### Explanation
* **Test case 1**: N=21  does not contain the digit D=5. Hence there is no need to add any integers to N.

* **Test case 2**: If 1 is added to N=8, it becomes equal to 9, which does not contain the digit D=8.

* **Test case 3**: The minimum integer you should add to N=100 such that the final value of N does not contain the digit D=0 is 11.

